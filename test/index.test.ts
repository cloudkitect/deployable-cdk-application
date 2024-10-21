import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { synthSnapshot } from 'projen/lib/util/synth';
import { DeployableCdkApplication } from '../src';


function mkdtemp() {
  return fs.mkdtempSync(
    path.join(os.tmpdir(), 'projen-test-'),
  );
}

const releaseWorkflowFilePath = '.github/workflows/release.yml';
const deployToProdWorkflowFilePath = '.github/workflows/prod-deployment-workflow.yml';
const deployToUatWorkflowFilePath = '.github/workflows/uat-deployment-workflow.yml';
const buildWorkflowFilePath = '.github/workflows/build.yml';

describe('No stack pattern', () => {
  const project = new DeployableCdkApplication({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.49.0',
    workflowNodeVersion: '14.18.1',
    projenrcTs: true,
    outdir: mkdtemp(),
    releaseConfigs: [{
      accountType: 'Dev',
      deploymentMethod: 'change-set',
      roleToAssume: 'role',
      region: 'us-east-1',
      workflowType: 'build',
    },
    {
      accountType: 'Test',
      deploymentMethod: 'change-set',
      roleToAssume: 'role',
      region: 'us-east-1',
      workflowType: 'release',
    },
    {
      accountType: 'Uat',
      deploymentMethod: 'prepare-change-set',
      roleToAssume: 'role2',
      region: 'us-east-1',
      workflowType: 'manual',
    },
    {
      accountType: 'Prod',
      deploymentMethod: 'prepare-change-set',
      roleToAssume: 'role2',
      region: 'us-east-1',
      workflowType: 'manual',
    }],
    codeArtifactConfig: {
      roleToAssume: 'role',
      region: 'us-east-1',
      accountId: '123',
      repository: 'repo',
      domain: 'domain',
    },
  });
  const synthOutput = synthSnapshot(project);
  test('release workflow', () => {
    expect(synthOutput[releaseWorkflowFilePath]).toMatchSnapshot();
  });
  test('deploy to uat workflow', () => {
    expect(synthOutput[deployToUatWorkflowFilePath]).toMatchSnapshot();
  });
  test('deploy to prod workflow', () => {
    expect(synthOutput[deployToProdWorkflowFilePath]).toMatchSnapshot();
  });
  test('build workflow', () => {
    expect(synthOutput[buildWorkflowFilePath]).toMatchSnapshot();
  });
});
