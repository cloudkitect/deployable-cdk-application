import { Task } from 'projen';
import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions } from 'projen/lib/awscdk';
import { Job, JobPermission, JobStep } from 'projen/lib/github/workflows-model';
import { NodePackageManager, NodeProject } from 'projen/lib/javascript';

export type DeploymentMethod = 'direct' | 'change-set' | 'prepare-change-set';
export type AccountType = 'Dev' | 'Test' | 'QA' | 'Uat' | 'PreProd' | 'Prod' ;

export interface ReleaseConfig {
  /**
   * Environment name to deploy to
   * @example 'Dev' | 'Test' | 'QA' | 'Uat' | 'PreProd' | 'Prod'
   */
  readonly accountType: AccountType | string;
  /**
   * ARN of AWS role to be assumed
   * @example arn:aws:iam::ACCOUNTID:role/ROLENAME
   */
  readonly roleToAssume: string;
  /**
   * Default AWS region for the account
   * @example "us-east-1"
   */
  readonly region: string;
  /**
   * Deploy method
   * @example 'direct' | 'change-set' | 'prepare-change-set'
   * @default 'change-set'
   */
  readonly deploymentMethod?: DeploymentMethod;
  /**
   * Duration of assume role session
   * @default 900
   */
  readonly assumeRoleDurationInSeconds?: number;
  /**
   * Hotswap deployment
   * @default false
   */
  readonly hotswap?: boolean;
  /**
   * Is manual approval required for deployments
   * @default false
   */
  readonly manualApprovalRequired?: boolean;
  /**
   * Comma separated list of github usernames who need to approve the deployments
   */
  readonly approvers?: string;
  /**
   * Deployment tag in the form of v1.0.0
   * @default latest tag
   */
  readonly deploymentTag?: string;
  /**
   * Pre deployment job steps
   */
  readonly preDeploymentSteps?: JobStep[];
  /**
   * Post deployment job steps
   */
  readonly postDeploymentSteps?: JobStep[];

  /**
   * Workflow name where the deployment job should be added.
   * Must be either release or build
   * @default release
   */
  readonly workflowName?: string;
}

/**
 * Deployable cdk application options
 */
export interface DeployableCdkApplicationOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * Stack Pattern representing stacks to be deployed
   */
  readonly stackPattern?: string;
  /**
   * List of release configurations, this will specify environment specific release configurations.
   */
  readonly releaseConfigs: ReleaseConfig[];

}

/**
 * Deployable cdk application
 * Uses PNPM package manager by default
 * It also created deployment tasks for each environment
 */
export class DeployableCdkApplication extends AwsCdkTypeScriptApp {

  readonly deploymentTasks: Task[];
  readonly releaseConfigs: ReleaseConfig[];

  constructor(options: DeployableCdkApplicationOptions) {
    super({
      ...options,
      packageManager: NodePackageManager.PNPM,
      pnpmVersion: '9',
      release: options.release ?? true,
      pullRequestTemplateContents: [
        '## What is this PR for?',
        '',
        '## What type of PR is it?',
        '',
        '- [ ] Bug fix',
        '- [ ] Feature',
        '- [ ] Documentation update',
        '- [ ] Other, please describe:',
        '',
        '## What is the new behavior?',
        '',
        '## Does this PR introduce a breaking change?',
        '',
        '- [ ] Yes',
        '- [ ] No',
        '',
        '## Other information',
        '',
        '## Checklist:',
        '',
        '- [ ] Code review',
        '- [ ] Tests',
        '- [ ] Documentation',
        '',
      ],
    });
    this.releaseConfigs = options.releaseConfigs ?? [];
    this.deploymentTasks=[];
    this.addDevDeps('@cloudkitect/deployable-cdk-app');
    this.createDeploymentTasks(options);
  }

  synth() {
    this.buildDeploymentJobs();
    super.synth();
  }

  createDeploymentTasks(options: DeployableCdkApplicationOptions) {

    for (let releaseConfig of this.releaseConfigs) {
      const deployCommand = this.buildDeployCommand(releaseConfig, options.stackPattern);
      const taskName = `deploy:${releaseConfig.accountType}`;
      const task = this.addTask(taskName, {
        exec: deployCommand,
      });
      this.deploymentTasks.push(task);
    }
  }

  buildDeployCommand(releaseConfig: ReleaseConfig, stackPattern?: string): string {
    const deployMethod = releaseConfig.deploymentMethod ?? 'change-set';
    let command = 'cdk deploy';
    command += stackPattern ? ' ' + stackPattern : ' --all';
    command += releaseConfig.hotswap ? ' --hotswap' : '';
    command += ` --context env=${releaseConfig.accountType}`;
    command += ` --method ${deployMethod}`;
    command += ' --require-approval never';
    return command;
  }

  buildDeploymentJobs() {
    let buildDeploymentNeeds = ['build'];
    let releaseDeploymentNeeds = ['release_github'];
    this.releaseConfigs.forEach((releaseConfig) => {
      const jobDefinition: Job = {
        runsOn: ['ubuntu-latest'],
        needs: releaseConfig.workflowName == 'build' ? buildDeploymentNeeds : releaseDeploymentNeeds,
        permissions: {
          contents: JobPermission.WRITE,
          deployments: JobPermission.READ,
          idToken: JobPermission.WRITE,
          issues: JobPermission.WRITE,
        },
        steps: [],
      };

      jobDefinition.steps.push(this.currentBranch());
      jobDefinition.steps.push(this.checkoutStep('${{ env.CURRENT_BRANCH }}'));
      if (releaseConfig.workflowName != 'build') {
        jobDefinition.steps.push(this.latestTag(releaseConfig));
        jobDefinition.steps.push(this.checkoutStep('${{ env.CURRENT_TAG }}'));
      }
      if (releaseConfig.manualApprovalRequired) {
        jobDefinition.steps.push(this.generateToken());
        jobDefinition.steps.push(this.manualApprovalStep(releaseConfig));
      }
      jobDefinition.steps.push(...(this.package.project as NodeProject).renderWorkflowSetup());
      jobDefinition.steps.push(this.awsCredentials(releaseConfig));
      const preDeploymentSteps = releaseConfig.preDeploymentSteps ?? [];
      for (const steps of preDeploymentSteps) {
        jobDefinition.steps.push(steps);
      }
      jobDefinition.steps.push(this.deploymentStep(this.package.packageManager, releaseConfig));
      const postDeploymentSteps = releaseConfig.postDeploymentSteps ?? [];
      for (const steps of postDeploymentSteps) {
        jobDefinition.steps.push(steps);
      }
      let jobName = `deploy_to_${releaseConfig.accountType}`;
      const job: Record<string, Job> = {};
      job[jobName] = jobDefinition;
      if (releaseConfig.workflowName == 'build') {
        this.buildWorkflow?.addPostBuildJob(jobName, jobDefinition);
        buildDeploymentNeeds = [jobName];
      } else {
        this.release?.addJobs(job);
        releaseDeploymentNeeds = [jobName];
      }
    });
  }

  checkoutStep(passedRef: string): JobStep {
    return {
      name: 'Checkout',
      uses: 'actions/checkout@v4',
      with: {
        'ref': passedRef,
        // 'token': '${{ secrets.PAT }}',
        'fetch-depth': 0,
      },
    };
  }

  awsCredentials(releaseOption: ReleaseConfig): JobStep {
    return {
      name: 'Assume AWS Role',
      uses: 'aws-actions/configure-aws-credentials@v4',
      with: {
        'role-to-assume': releaseOption.roleToAssume,
        'aws-region': releaseOption.region,
        'role-duration-seconds': releaseOption.assumeRoleDurationInSeconds,
        'role-session-name': `${releaseOption.accountType}Session`,
      },
    };
  }

  generateToken(): JobStep {
    return {
      name: 'Generate token',
      id: 'generate_token',
      uses: 'tibdex/github-app-token@v1',
      with: {
        app_id: '${{ secrets.APP_ID }}',
        private_key: '${{ secrets.APP_PRIVATE_KEY }}',
      },
    };
  }

  latestTag(releaseConfig: ReleaseConfig): JobStep {
    let tagCommand = releaseConfig.deploymentTag ?? '$(git describe --tags --abbrev=0 2>/dev/null)';
    console.log(tagCommand);
    return {
      name: 'Get latest tag',
      id: 'get_tag',
      run: 'CURRENT_TAG=$(git describe --tags --abbrev=0 2>/dev/null)\necho "CURRENT_TAG=$CURRENT_TAG" >> $GITHUB_ENV',
    };
  }

  currentBranch(): JobStep {
    return {
      name: 'Get current branch',
      id: 'get_branch',
      run: 'CURRENT_BRANCH=$(git branch --show-current)\necho "CURRENT_BRANCH=$CURRENT_BRANCH" >> $GITHUB_ENV',
    };
  }

  manualApprovalStep(releaseConfig: ReleaseConfig): JobStep {
    return {
      name: 'Wait for approval',
      uses: 'trstringer/manual-approval@v1',
      with: {
        'secret': '${{ steps.generate_token.outputs.token }}',
        'approvers': releaseConfig.approvers,
        'minimum-approvals': 1,
        'issue-title': 'Deployment approval for ${{ env.CURRENT_TAG }} to ' + releaseConfig.accountType,
        'issue-body': 'Please approve or deny the deployment of version ${{ env.CURRENT_TAG }} to' + + releaseConfig.accountType,
      },
    };
  }

  packageManagerCommand(packageManager: NodePackageManager): string {
    if (packageManager === NodePackageManager.NPM) {return 'npm run';}

    if (packageManager === NodePackageManager.YARN_CLASSIC) {return 'yarn';}

    if (packageManager === NodePackageManager.PNPM) {return 'pnpm';}

    throw new Error(`Invalid package manager selected (${packageManager})`);
  }

  deploymentStep(packageManager: NodePackageManager, releaseConfig: ReleaseConfig): JobStep {
    return {
      name: `Deployment to ${releaseConfig.accountType}`,
      run: `${this.packageManagerCommand(packageManager)} deploy:${releaseConfig.accountType}`,
    };
  }

}