import { Task } from 'projen';
import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions } from 'projen/lib/awscdk';
import { GithubWorkflow } from 'projen/lib/github';
import { Job, JobPermission, JobStep } from 'projen/lib/github/workflows-model';
import { NodePackageManager, NodeProject } from 'projen/lib/javascript';

/**
 * Supported deployment methods
 */
export type DeploymentMethod = 'direct' | 'change-set' | 'prepare-change-set';
/**
 * Supported account types.
 */
export type AccountType = 'Dev' | 'Test' | 'QA' | 'Uat' | 'PreProd' | 'Prod';

/**
 * Release configuration
 */
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
     * Comma separated list of github usernames who need to approve the deployments
     */
  readonly approvers?: string;
  /**
     * Pre deployment job steps
     */
  readonly preDeploymentSteps?: JobStep[];
  /**
     * Post deployment job steps
     */
  readonly postDeploymentSteps?: JobStep[];
  /**
     * Workflow type where the deployment job should be added.
     * Must be either release, build or manual
     * @default release
     */
  readonly workflowType?: string;
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
  readonly releaseConfigs?: ReleaseConfig[];
}

/**
 * Deployable cdk application
 * Uses PNPM package manager by default
 * It also creates deploy and synth tasks for each environment
 */
export class DeployableCdkApplication extends AwsCdkTypeScriptApp {

  /**
     * Deployment tasks created for this application
     */
  readonly deploymentTasks: Task[];
  /**
     * Release configurations used for this application
     */
  readonly releaseConfigs: ReleaseConfig[];

  constructor(options: DeployableCdkApplicationOptions) {
    super({
      ...options,
      buildWorkflowOptions: options.buildWorkflowOptions ?? {
        permissions: {
          contents: JobPermission.WRITE,
          idToken: JobPermission.WRITE,
        },
      },
      packageManager: options.packageManager ?? NodePackageManager.PNPM,
      pnpmVersion: options.pnpmVersion ?? '9',
      release: options.release ?? true,
      pullRequestTemplateContents: options.pullRequestTemplateContents ?? [
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
    this.deploymentTasks = [];
    this.addDevDeps('@cloudkitect/deployable-cdk-app');
    this.createSynthTasks(options);
    this.createDeploymentTasks(options);
  }

  synth() {
    this.buildDeploymentStages();
    super.synth();
  }

  buildDeploymentStages() {
    let releaseDependency = ['release_github'];
    this.releaseConfigs.forEach((releaseConfig) => {
      if (releaseConfig.workflowType == 'build') {
        this.addDeploymentStageToBuildWorkflow(releaseConfig);
      } else if (releaseConfig.workflowType == 'manual') {
        this.createManuallyApprovedWorkflowForDeploymentStage(releaseConfig);
      } else if (releaseConfig.workflowType == 'release') {
        const jobName = this.addDeploymentStageToReleaseWorkflow(releaseConfig, releaseDependency);
        releaseDependency = [jobName];
      } else {
        throw new TypeError('Unsupported workflowType: use build, release or manual');
      }
    });
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

  createSynthTasks(options: DeployableCdkApplicationOptions) {
    for (let releaseConfig of this.releaseConfigs) {
      const synthCommand = this.buildSynthCommand(releaseConfig, options.stackPattern);
      const taskName = `synth:${releaseConfig.accountType}`;
      this.addTask(taskName, {
        exec: synthCommand,
      });
    }
  }

  buildSynthCommand(releaseConfig: ReleaseConfig, stackPattern?: string): string {
    let command = 'cdk synth';
    command += stackPattern ? ' ' + stackPattern : ' --all';
    command += ` --context env=${releaseConfig.accountType}`;
    return command;
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

  createManuallyApprovedWorkflowForDeploymentStage(releaseConfig: ReleaseConfig): GithubWorkflow | undefined {
    const workflowName = `${releaseConfig.accountType.toLowerCase()}-deployment-workflow`;
    const deploymentWorkflow = this.github?.addWorkflow(workflowName);
    deploymentWorkflow?.on({
      workflowDispatch: {
        inputs: {
          tag: {
            description: `Version tag to deploy to ${releaseConfig.accountType}`,
            required: true,
          },
        },
      },
    });
    this.addDeploymentJob(releaseConfig, deploymentWorkflow);

    return deploymentWorkflow;
  }

  addDeploymentStageToBuildWorkflow(releaseConfig: ReleaseConfig) {
    this.buildWorkflow?.addPostBuildSteps(this.awsCredentials(releaseConfig));
    this.buildWorkflow?.addPostBuildSteps(this.deploymentStep(this.package.packageManager, releaseConfig));
  }

  addDeploymentJob(releaseConfig: ReleaseConfig, workflow?: GithubWorkflow) {
    const jobDefinition: Job = {
      runsOn: ['ubuntu-latest'],
      permissions: {
        contents: JobPermission.WRITE,
        deployments: JobPermission.READ,
        idToken: JobPermission.WRITE,
        issues: JobPermission.WRITE,
      },
      steps: [],
    };

    jobDefinition.steps.push(this.checkoutStep('main'));
    jobDefinition.steps.push(this.latestTag());
    jobDefinition.steps.push(this.checkoutStep('${{ env.CURRENT_TAG }}'));
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
    workflow?.addJobs(job);
    return jobName;
  }

  addDeploymentStageToReleaseWorkflow(releaseConfig: ReleaseConfig, dependency: string[]) {
    const jobDefinition: Job = {
      runsOn: ['ubuntu-latest'],
      needs: dependency,
      permissions: {
        contents: JobPermission.WRITE,
        deployments: JobPermission.READ,
        idToken: JobPermission.WRITE,
        issues: JobPermission.WRITE,
      },
      steps: [],
    };

    jobDefinition.steps.push(this.checkoutStep('main'));
    jobDefinition.steps.push(this.latestTag());
    jobDefinition.steps.push(this.checkoutStep('${{ env.CURRENT_TAG }}'));
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
    this.release?.addJobs(job);
    return jobName;
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

  latestTag(): JobStep {
    const runCommand = 'if [ -z "${{ github.event.inputs.tag }}" ]; then \n CURRENT_TAG=$(git describe --tags $(git rev-list --tags --max-count=1)) \n echo "CURRENT_TAG=$CURRENT_TAG" >> $GITHUB_ENV \nelse \n echo "CURRENT_TAG=${{ github.event.inputs.tag }}" >> $GITHUB_ENV \nfi';
    return {
      name: 'Get tag',
      id: 'get_tag',
      run: runCommand,
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
        'issue-body': 'Please approve or deny the deployment of version ${{ env.CURRENT_TAG }} to' + +releaseConfig.accountType,
      },
    };
  }

  packageManagerCommand(packageManager: NodePackageManager): string {
    if (packageManager === NodePackageManager.NPM) {
      return 'npm run';
    }

    if (packageManager === NodePackageManager.YARN_CLASSIC) {
      return 'yarn';
    }

    if (packageManager === NodePackageManager.PNPM) {
      return 'pnpm';
    }

    throw new Error(`Invalid package manager selected (${packageManager})`);
  }

  deploymentStep(packageManager: NodePackageManager, releaseConfig: ReleaseConfig): JobStep {
    return {
      name: `Deployment to ${releaseConfig.accountType}`,
      run: `${this.packageManagerCommand(packageManager)} deploy:${releaseConfig.accountType}`,
    };
  }
}