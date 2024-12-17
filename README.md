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
        workflowName: 'build'
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

workflowName: Can be either
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
        workflowName: 'build'
    },
    {
        accountType: 'Prod',
        deploymentMethod: 'prepare-change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
        workflowName: 'manual'
    }
]
```

You can add as many environments as you want.

Note: This setup requires that you have configured github as OIDC provider in your aws account 
and have created a role with appropriate permissions. Checkout the following [link for CDK code](https://github.com/aws-samples/github-actions-oidc-cdk-construct)
