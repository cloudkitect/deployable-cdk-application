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

describe('No stack pattern', () => {
  const project = new DeployableCdkApplication({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '1.129.0',
    workflowNodeVersion: '14.18.1',
    outdir: mkdtemp(),
    releaseConfigs: [{
      accountType: 'Dev',
      deploymentMethod: 'change-set',
      roleToAssume: 'role',
      region: 'us-east-1',
    },
    {
      accountType: 'Prod',
      deploymentMethod: 'prepare-change-set',
      roleToAssume: 'role2',
      region: 'us-east-1',
      deploymentTag: 'v1.0.0',
      manualApprovalRequired: true,
    }],
  });
  const synthOutput = synthSnapshot(project);
  test('release workflow', () => {
    expect(synthOutput[releaseWorkflowFilePath]).toMatchSnapshot();
  });
});
