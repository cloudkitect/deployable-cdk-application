# Deployable CDK App by CloudKitect Inc.
CloudKitect is Cloud Architect as a Service. We believe in empowering developers by giving them turn key solutions so that they can focus on building business differentiating applications.

Visit [www.cloudkitect.com](http://cloudkitect.com) for Enterprise architectures and Generative AI platforms.

Deployable CDK app project is an effort to make it seamless to deploy your CDK application in various AWS accounts 
via Github CI/CD pipelines and [Projen](https://projen.io/).

## Instructions

### Pre-requisites
Make sure your workstation has NodeJs, Pnpm, Typescript and TS-Node installed.

In order to deploy your CDK application into various environments you need to create your projen project 
from deployable cdk app using the following command.

```shell
npx projen new --from "@cloudkitect/deployable-cdk-app"
```
This will create a projen project that we can be setup to deploy into various aws accounts and environments.

Open project in your favorite IDE and update project configuration in .projenrc.ts file.

Suppose you want to deploy your cdk application to Dev environment everytime a commit is pushed to a PR branch.
You can add the following code to your .projenrc.ts file

```typescript
releaseConfigs: [{
        accountType: 'Dev',
        deploymentMethod: 'change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
        workflowType: 'build',
        applicationName: "Web",
        runsOn: "ubuntu-24.04-arm"
    }]
```
accountType: Can be 
* Dev - Development purposes
* Test - Potentially used by QA teams
* Uat - Can be used as pre production testing
* Prod - Production serving live traffic

deploymentMethod: Can be 
* change-set - used to deploy right away
* prepare-change-set - used to create a change set in CloudFormation that needs to be reviewed before deploying.

roleToAssume: ARN of the role to be assumed by the pipeline for deployment. This role must exist in the AWS account

region: Any valid AWS region where application should be deployed e.g us-east-1.

workflowType: Can be either
* build - if the deployment needs to happen during build time (On feature branch).
* release - if the deployment needs to happen during release time (When merged to main branch).
* manual - when manual option is used, it will create a new workflow that will accept the version number to be deployed.

Now suppose you want to add releaseConfig for deploying to production. That is how your configuration should look like

```typescript

releaseConfigs: [{
        accountType: 'Dev',
        deploymentMethod: 'change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
        workflowType: 'build'
    },
    {
        accountType: 'Prod',
        deploymentMethod: 'prepare-change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
        workflowType: 'manual'
    }
]
```

You can add as many environments as you want.

### Installing npm packages from AWS CodeArtifact

If your packages are hosted in an AWS CodeArtifact repository rather than public npm, add a
`codeArtifactConfig` to your project. It sits next to `releaseConfigs` in `.projenrc.ts` — it is a
project level option rather than a per environment one, because the npm registry is shared by every
workflow that installs packages.

```typescript
const project = new DeployableCdkApplication({
    // ...rest of your project options
    releaseConfigs: [{
        accountType: 'Dev',
        deploymentMethod: 'change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
        workflowType: 'build'
    }],
    codeArtifactConfig: {
        roleToAssume: 'arn:aws:iam::ACCOUNTID:role/GithubRole',
        region: 'us-east-1',
        accountId: 'ACCOUNTID',
        domain: 'CK',
        repository: 'CK-artifacts'
    }
});
```

roleToAssume: ARN of the role the workflow assumes to read from CodeArtifact. It needs
`codeartifact:GetAuthorizationToken`, `codeartifact:ReadFromRepository`,
`codeartifact:GetRepositoryEndpoint` and `sts:GetServiceBearerToken`.

region: The region the CodeArtifact domain lives in.

accountId: The AWS account that owns the CodeArtifact domain.

domain: The CodeArtifact domain name.

repository: The CodeArtifact repository name inside that domain.

That is the whole setup — you do not need to patch any workflow by hand. Two steps, `Assume AWS Role
For CodeArtifact` and `Login to AWS CodeArtifact`, are inserted immediately before the
`Install dependencies` step of every job that installs packages:

* the `build` job of the build workflow
* the `release` job of the release workflow, which builds and publishes the package
* every `Deploy_<Environment>` job added by a `release` release config
* the `deploy_to_<Environment>` job of each workflow created by a `manual` release config
* the `upgrade` job of the dependency upgrade workflow

Because the role is assumed through GitHub OIDC, each of those jobs needs `id-token: write`. Projen
does not grant that to the `release` and `upgrade` jobs by default, so it is added for you whenever
`codeArtifactConfig` is set.

Note: setting `codeArtifactConfig` also switches the build job to the `ubuntu-24.04-arm` runner.

Note: This setup requires that you have configured github as OIDC provider in your aws account 
and have created a role with appropriate permissions. Checkout the following [link for CDK code](https://github.com/aws-samples/github-actions-oidc-cdk-construct)
