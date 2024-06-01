import {cdk, javascript, ReleasableCommits, TextFile} from 'projen';
import {NpmAccess} from "projen/lib/javascript";

const nodeVersion = '20';

const project = new cdk.JsiiProject({
  author: 'CloudKitect Inc',
  authorAddress: 'support@cloudkitect.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: '@cloudkitect/deployable-cdk-application',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cloudkitect/deployable-cdk-application.git',
  description: 'CloudKitect deployable cdk application',
  keywords: [
    'CloudKitect',
    'PDK',
    'Typescript',
    'projen',
    'Deployment',
    'AWS CDK',
    'Release CDK App',
  ],
  pnpmVersion: '9',
  workflowNodeVersion: nodeVersion,
  publishTasks: true,
  npmAccess: NpmAccess.PUBLIC,
  npmProvenance: false,
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  deps: ['projen'],
  license: 'MIT',
  peerDeps: ['projen', 'constructs'],
});

new TextFile(project, '.nvmrc', {
  lines: [nodeVersion],
});

const exclusions = ['.DS_Store', '.idea', '*.iml'];
project.gitignore.exclude(...exclusions);
project.synth();