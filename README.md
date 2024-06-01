# Deployable CDK App by CloudKitect Inc.
CloudKitect is Cloud Architect as a Service. We believe in empowering developers by giving them turn key solutions so that they can focus on building business differentiating applications.

[Visit Us](http://cloudkitect.com) for enterprise architectures and Generative AI platforms.

This project is about making it seamless to deploy your CDK application in various AWS accounts via Github CI/CD pipelines and [Projen](https://projen.io/).

## Instructions
In order to deploy your CDK application into various environments you need to create your projen project from deployable cdk app.

```shell
npx projen new --from "@cloudkitect/deployable-cdk-app"
```

This will create a projen project that will can be setup to deploy into various aws accounts and environments
The following example shows how to configure various environments.

```typescript
const project = new DeployableCdkApplication({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.143.1',
    releaseConfigs: [{
        accountType: 'Dev',
        deploymentMethod: 'change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
    },
    {
        accountType: 'Prod',
        deploymentMethod: 'prepare-change-set',
        roleToAssume: 'role-arn',
        region: 'us-east-1',
        manualApprovalRequired: true,
        approvers: 'mtahir-cloudkitect, someone-else'
    }],
});
```

You can add as many environments as you want.

Note: This setup requires that you have configured github as OIDC provider in your aws account and have created a role with appropriate permissions.
