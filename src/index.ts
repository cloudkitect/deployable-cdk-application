import { JsonPatch, Task } from 'projen';
import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions } from 'projen/lib/awscdk';
import { GithubWorkflow, WorkflowSteps } from 'projen/lib/github';
import { GitHubActions } from 'projen/lib/github/actions.const';
import { Job, JobPermission, JobStep } from 'projen/lib/github/workflows-model';
import { NodePackageManager, RenderWorkflowSetupOptions } from 'projen/lib/javascript';

/**
 * Step id of the generated `aws codeartifact login` step.
 */
const CODE_ARTIFACT_LOGIN_STEP_ID = 'login-codeartifact';

/**
 * `NodeProject` calls `renderWorkflowSetup()` from its own constructor, which
 * runs before subclass fields are assigned. This holds the CodeArtifact config
 * of the instance currently being constructed so the override can see it.
 */
let pendingCodeArtifactConfig: CodeArtifactConfig | undefined;

/**
 * Supported deployment methods
 */
export type DeploymentMethod = 'direct' | 'change-set' | 'prepare-change-set';
/**
 * Supported account types.
 */
export type AccountType = 'Dev' | 'Test' | 'QA' | 'Uat' | 'PreProd' | 'Prod';

/**
 * Configuration for installing NPM packages from an AWS CodeArtifact repository
 * instead of the public npm registry.
 *
 * When set, an `Assume AWS Role For CodeArtifact` step and an
 * `aws codeartifact login` step are inserted immediately before the dependency
 * install step of every job that installs packages: the build job, the release
 * job, the dependency upgrade job, and each deployment job created from
 * `releaseConfigs`. The role is assumed through GitHub OIDC, so `id-token:
 * write` is granted to those jobs as well.
 */
export interface CodeArtifactConfig {
  /**
     * ARN of AWS role to be assumed by code artifact
     *
     * Requires `codeartifact:GetAuthorizationToken`,
     * `codeartifact:ReadFromRepository`, `codeartifact:GetRepositoryEndpoint`
     * and `sts:GetServiceBearerToken`.
     * @example arn:aws:iam::ACCOUNTID:role/ROLENAME
     */
  readonly roleToAssume?: string;
  /**
     * Code Artifact region
     * @example "us-east-1"
     */
  readonly region?: string;
  /**
     * Code Artifact domain name
     * @example "domain"
     */
  readonly domain?: string;
  /**
     * Code Artifact account id
     * @example "123456"
     */
  readonly accountId?: string;
  /**
     * Code Artifact repository name
     * @example "my_repo"
     */
  readonly repository?: string;
}

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
     * ARN of AWS role to be assumed by deployment task
     * @example arn:aws:iam::ACCOUNTID:role/ROLENAME
     */
  readonly roleToAssume: string;
  /**
     * Default AWS region for the account used for deployment
     * @example "us-east-1"
     */
  readonly region: string;
  /**
     * Duration of assume role session
     * @default 900
     */
  readonly deploymentRoleSessionDuration?: number;

  /**
     * Deploy method
     * @example 'direct' | 'change-set' | 'prepare-change-set'
     * @default 'change-set'
     */
  readonly deploymentMethod?: DeploymentMethod;

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

  /**
     * If there are multiple applications in the deployment
     */
  readonly applicationName?: string;

  /**
     * The platform applications runs on
     * e.g. ubuntu-24.04-arm
     */
  readonly runsOn?: string;

  /**
     * Run this release deployment in parallel with sibling `parallel: true`
     * entries instead of chaining sequentially.
     *
     * Only applies to `workflowType: 'release'`. Parallel configs depend on the
     * most recent non-parallel release job (or `release_github` if none yet);
     * the next non-parallel release job waits for both the prior sequential
     * anchor and every parallel job that ran since.
     *
     * @default false
     */
  readonly parallel?: boolean;
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
  /**
     * If using code artifact for installing packages, provide necessary details.
     *
     * Applies to every generated workflow that installs packages - build,
     * release, dependency upgrade and the deployment jobs alike - so no
     * workflow patching is needed on the consumer side.
     * @default uses public npmjs for installing packages
     */
  readonly codeArtifactConfig?: CodeArtifactConfig;
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

  /**
     * Code Artifact configuration
     */
  readonly codeArtifactConfig: CodeArtifactConfig;

  constructor(options: DeployableCdkApplicationOptions) {
    // Must be set before `super()`: projen renders the build and release
    // workflow setup steps from within the `NodeProject` constructor.
    pendingCodeArtifactConfig = options.codeArtifactConfig;
    super({
      ...options,
      buildWorkflowOptions: {
        permissions: {
          contents: JobPermission.WRITE,
          idToken: JobPermission.WRITE,
        },
        ...options.buildWorkflowOptions,
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
    pendingCodeArtifactConfig = undefined;
    this.releaseConfigs = options.releaseConfigs ?? [];
    this.codeArtifactConfig = options.codeArtifactConfig ?? {};
    this.deploymentTasks = [];
    this.addDevDeps('@cloudkitect/deployable-cdk-app');
    this.createSynthTasks(options);
    this.createDeploymentTasks(options);
  }

  get postCompileTask(): Task {

    return super.postCompileTask;
  }

  synth() {
    this.buildDeploymentStages();
    super.synth();
  }

  buildDeploymentStages() {
    let releaseAnchor: string[] = ['release_github'];
    let parallelBatch: string[] = [];
    if (this.codeArtifactConfig.roleToAssume) {
      // The login steps themselves are injected by `renderWorkflowSetup()`, which
      // covers the build, release and upgrade workflows alike. Only the runner
      // flip is left to patch here.
      const buildFile = this.github?.tryFindWorkflow('build')?.file;
      buildFile?.patch(JsonPatch.add('/jobs/build/runs-on', 'ubuntu-24.04-arm'));
    }
    this.releaseConfigs.forEach((releaseConfig) => {
      if (releaseConfig.workflowType == 'build') {
        this.addDeploymentStageToBuildWorkflow(releaseConfig);
      } else if (releaseConfig.workflowType == 'manual') {
        this.createManuallyApprovedWorkflowForDeploymentStage(releaseConfig);
      } else if (releaseConfig.workflowType == 'release') {
        if (releaseConfig.parallel) {
          const jobName = this.addDeploymentStageToReleaseWorkflow(releaseConfig, releaseAnchor);
          parallelBatch.push(jobName);
        } else {
          const needs = [...releaseAnchor, ...parallelBatch];
          const jobName = this.addDeploymentStageToReleaseWorkflow(releaseConfig, needs);
          releaseAnchor = [jobName];
          parallelBatch = [];
        }
      } else {
        throw new TypeError('Unsupported workflowType: use build, release or manual');
      }
    });
    this.grantIdTokenToCodeArtifactJobs();
  }

  /**
   * `aws-actions/configure-aws-credentials` assumes the CodeArtifact role over
   * GitHub OIDC, which the job can only do with `id-token: write`. projen's
   * `release` and `upgrade` jobs are not granted it by default, so top it up
   * wherever a login step was injected.
   */
  private grantIdTokenToCodeArtifactJobs() {
    if (!this.codeArtifactConfig.roleToAssume) return;
    for (const workflow of this.github?.workflows ?? []) {
      for (const [jobId, job] of Object.entries(workflow.jobs)) {
        const steps = (job as Job).steps;
        // Lazily rendered jobs (the build job) cannot be inspected here; those
        // are granted `id-token` through `buildWorkflowOptions` already.
        if (!Array.isArray(steps)) continue;
        if (!steps.some((step) => step.id === CODE_ARTIFACT_LOGIN_STEP_ID)) continue;
        if ((job as Job).permissions?.idToken === JobPermission.WRITE) continue;
        workflow.file?.patch(
          JsonPatch.add(`/jobs/${jobId}/permissions/id-token`, 'write'),
        );
      }
    }
  }

  createDeploymentTasks(options: DeployableCdkApplicationOptions) {
    for (let releaseConfig of this.releaseConfigs) {
      const deployCommand = this.buildDeployCommand(releaseConfig, options.stackPattern);
      const taskName = `Deploy_${this.taskNamePostfix(releaseConfig)}`;
      const task = this.addTask(taskName, {
        exec: deployCommand,
      });
      this.deploymentTasks.push(task);
    }
  }

  createSynthTasks(options: DeployableCdkApplicationOptions) {
    for (let releaseConfig of this.releaseConfigs) {
      const synthCommand = this.buildSynthCommand(releaseConfig, options.stackPattern);
      const taskName = `Synth_${this.taskNamePostfix(releaseConfig)}`;
      this.addTask(taskName, {
        exec: synthCommand,
      });
    }
  }

  buildSynthCommand(releaseConfig: ReleaseConfig, stackPattern?: string): string {
    let command = 'cdk synth';
    command += stackPattern ? ' ' + stackPattern : ' --all';
    command += ` --context env=${releaseConfig.accountType}`;
    command += ` --context app=${releaseConfig.applicationName}`;
    return command;
  }

  buildDeployCommand(releaseConfig: ReleaseConfig, stackPattern?: string): string {
    const deployMethod = releaseConfig.deploymentMethod ?? 'change-set';
    let command = 'cdk deploy';
    command += stackPattern ? ' ' + stackPattern : ' --all';
    command += releaseConfig.hotswap ? ' --hotswap' : '';
    command += ` --context env=${releaseConfig.accountType}`;
    command += ` --context app=${releaseConfig.applicationName}`;
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

  codeArtifactLoginSteps(): JobStep[] {
    // `this.codeArtifactConfig` is still unassigned while `super()` is running,
    // hence the fallback to the config stashed by the constructor.
    const config = this.codeArtifactConfig ?? pendingCodeArtifactConfig ?? {};
    if (!config.roleToAssume) return [];
    const awsLogin: JobStep = {
      name: 'Assume AWS Role For CodeArtifact',
      uses: GitHubActions.AWS_ACTIONS_CONFIGURE_AWS_CREDENTIALS,
      with: {
        'role-to-assume': config.roleToAssume,
        'aws-region': config.region,
        'role-session-name': 'CodeArtifactSession',
      },
    };
    const codeArtifactLogin: JobStep = {
      name: 'Login to AWS CodeArtifact',
      id: CODE_ARTIFACT_LOGIN_STEP_ID,
      run: `aws codeartifact login --tool npm --domain ${config.domain} --domain-owner ${config.accountId} --repository ${config.repository} --region ${config.region}`,
    };
    return [awsLogin, codeArtifactLogin];
  }

  /**
   * Renders the workflow bootstrap steps, with the AWS CodeArtifact login
   * spliced in just before the dependency install step.
   *
   * projen funnels the build, release and upgrade workflows through this
   * method, so overriding it is what makes `codeArtifactConfig` apply to every
   * job that installs packages rather than to the build workflow alone.
   */
  renderWorkflowSetup(options: RenderWorkflowSetupOptions = {}): JobStep[] {
    return this.withCodeArtifactLogin(super.renderWorkflowSetup(options));
  }

  setupStepsWithCodeArtifact(): JobStep[] {
    return this.renderWorkflowSetup();
  }

  private withCodeArtifactLogin(setupSteps: JobStep[]): JobStep[] {
    const loginSteps = this.codeArtifactLoginSteps();
    if (loginSteps.length === 0) return setupSteps;
    // Guard against a second injection if callers compose rendered setups.
    if (setupSteps.some((s) => s.id === CODE_ARTIFACT_LOGIN_STEP_ID)) return setupSteps;
    const installIndex = setupSteps.findIndex(
      (s) => s.name === 'Install dependencies',
    );
    if (installIndex === -1) return [...setupSteps, ...loginSteps];
    return [
      ...setupSteps.slice(0, installIndex),
      ...loginSteps,
      ...setupSteps.slice(installIndex),
    ];
  }

  addDeploymentStageToBuildWorkflow(releaseConfig: ReleaseConfig) {
    this.buildWorkflow?.addPostBuildSteps(this.awsCredentials(releaseConfig));
    this.buildWorkflow?.addPostBuildSteps(this.deploymentStep(this.package.packageManager, releaseConfig));
  }

  addDeploymentJob(releaseConfig: ReleaseConfig, workflow?: GithubWorkflow) {
    const jobDefinition: Job = {
      runsOn: ['ubuntu-24.04-arm'],
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
    jobDefinition.steps.push(...this.setupStepsWithCodeArtifact());
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
      runsOn: ['ubuntu-24.04-arm'],
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
    jobDefinition.steps.push(...this.setupStepsWithCodeArtifact());
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
    let jobName = `Deploy_${this.taskNamePostfix(releaseConfig)}`;
    const job: Record<string, Job> = {};
    job[jobName] = jobDefinition;
    this.release?.addJobs(job);
    return jobName;
  }

  checkoutStep(passedRef: string): JobStep {
    // Delegate to projen so the `actions/checkout` version stays in lockstep with
    // the one projen renders into the build/release workflows.
    return WorkflowSteps.checkout({
      with: {
        ref: passedRef,
        fetchDepth: 0,
      },
    });
  }

  awsCredentials(releaseOption: ReleaseConfig): JobStep {
    return {
      name: `Assume AWS Role in ${this.taskNamePostfix(releaseOption)}`,
      uses: GitHubActions.AWS_ACTIONS_CONFIGURE_AWS_CREDENTIALS,
      with: {
        'role-to-assume': releaseOption.roleToAssume,
        'aws-region': releaseOption.region,
        'role-duration-seconds': releaseOption.deploymentRoleSessionDuration,
        'role-session-name': `Session_${this.taskNamePostfix(releaseOption)}`,
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
      name: `Wait for approval for ${this.taskNamePostfix(releaseConfig)}`,
      uses: 'trstringer/manual-approval@v1',
      with: {
        'secret': '${{ steps.generate_token.outputs.token }}',
        'approvers': releaseConfig.approvers,
        'minimum-approvals': 1,
        'issue-title': 'Deployment approval for ${{ env.CURRENT_TAG }} to ' + this.taskNamePostfix(releaseConfig),
        'issue-body': 'Please approve or deny the deployment of version ${{ env.CURRENT_TAG }} to' + this.taskNamePostfix(releaseConfig),
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
      name: `Deployment to ${this.taskNamePostfix(releaseConfig)}`,
      run: `${this.packageManagerCommand(packageManager)} Deploy_${this.taskNamePostfix(releaseConfig)}`,
    };
  }

  taskNamePostfix(releaseConfig: ReleaseConfig): string {
    if (releaseConfig.applicationName) {
      return `${releaseConfig.accountType}_${releaseConfig.applicationName}`;
    } else {
      return releaseConfig.accountType;
    }
  }

}