import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'mtahir-cloudkitect',
  authorAddress: 'mtahir@cloudkitect.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'DeployableCdkApplication',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mtahir/DeployableCdkApplication.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();