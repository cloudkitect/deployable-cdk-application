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
const upgradeWorkflowFilePath = '.github/workflows/upgrade-main.yml';

describe('No stack pattern', () => {
  const project = new DeployableCdkApplication({
    name: 'my-test-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '2.266.0',
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

describe('Multi app deployment', () => {
  const project = new DeployableCdkApplication({
    name: 'my-test--multi-app',
    defaultReleaseBranch: 'main',
    cdkVersion: '2.266.0',
    workflowNodeVersion: '14.18.1',
    projenrcTs: true,
    outdir: mkdtemp(),
    releaseConfigs: [
      {
        accountType: 'Dev',
        applicationName: 'Api',
        deploymentMethod: 'change-set',
        roleToAssume: 'role123',
        region: 'us-east-1',
        workflowType: 'build',
      },
      {
        accountType: 'Dev',
        applicationName: 'Web',
        deploymentMethod: 'change-set',
        roleToAssume: 'role456',
        region: 'us-east-1',
        workflowType: 'build',
      },
    ],
    codeArtifactConfig: {
      roleToAssume: 'role',
      region: 'us-east-1',
      accountId: '123',
      repository: 'repo',
      domain: 'domain',
    },
  });
  const synthOutput = synthSnapshot(project);
  test('build workflow', () => {
    expect(synthOutput[buildWorkflowFilePath]).toMatchSnapshot();
  });
});

describe('Multi app release deployment', () => {
  const project = new DeployableCdkApplication({
    name: 'my-test-multi-app-release',
    defaultReleaseBranch: 'main',
    cdkVersion: '2.266.0',
    workflowNodeVersion: '14.18.1',
    projenrcTs: true,
    outdir: mkdtemp(),
    releaseConfigs: [
      {
        accountType: 'Dev',
        applicationName: 'Api',
        deploymentMethod: 'change-set',
        roleToAssume: 'devRoleApi',
        region: 'us-east-1',
        workflowType: 'release',
        parallel: true,
      },
      {
        accountType: 'Dev',
        applicationName: 'Web',
        deploymentMethod: 'change-set',
        roleToAssume: 'devRoleWeb',
        region: 'us-east-1',
        workflowType: 'release',
        parallel: true,
      },
      {
        accountType: 'Prod',
        applicationName: 'Api',
        deploymentMethod: 'prepare-change-set',
        roleToAssume: 'prodRoleApi',
        region: 'us-east-1',
        workflowType: 'release',
      },
      {
        accountType: 'Prod',
        applicationName: 'Web',
        deploymentMethod: 'prepare-change-set',
        roleToAssume: 'prodRoleWeb',
        region: 'us-east-1',
        workflowType: 'release',
      },
    ],
  });
  const synthOutput = synthSnapshot(project);
  test('release workflow', () => {
    expect(synthOutput[releaseWorkflowFilePath]).toMatchSnapshot();
  });
});


describe('CodeArtifact package registry', () => {
  function synth(codeArtifact: boolean) {
    return synthSnapshot(new DeployableCdkApplication({
      name: 'my-test-code-artifact',
      defaultReleaseBranch: 'main',
      cdkVersion: '2.266.0',
      workflowNodeVersion: '14.18.1',
      projenrcTs: true,
      outdir: mkdtemp(),
      releaseConfigs: [
        {
          accountType: 'Dev',
          roleToAssume: 'devRole',
          region: 'us-east-1',
          workflowType: 'build',
        },
        {
          accountType: 'Test',
          roleToAssume: 'testRole',
          region: 'us-east-1',
          workflowType: 'release',
        },
        {
          accountType: 'Prod',
          roleToAssume: 'prodRole',
          region: 'us-east-1',
          workflowType: 'manual',
        },
      ],
      codeArtifactConfig: codeArtifact ? {
        roleToAssume: 'arn:aws:iam::123:role/GithubRole',
        region: 'us-east-1',
        accountId: '123',
        repository: 'CK-artifacts',
        domain: 'CK',
      } : undefined,
    }));
  }

  const withCodeArtifact = synth(true);
  const withoutCodeArtifact = synth(false);

  const workflows: Array<[string, string]> = [
    ['build', buildWorkflowFilePath],
    ['release', releaseWorkflowFilePath],
    ['upgrade', upgradeWorkflowFilePath],
    ['manual', deployToProdWorkflowFilePath],
  ];

  const count = (workflow: string, needle: string) =>
    (workflow.match(new RegExp(needle, 'g')) ?? []).length;

  test.each(workflows)('%s workflow', (_name, filePath) => {
    expect(withCodeArtifact[filePath]).toMatchSnapshot();
  });

  test.each(workflows)('every job installing dependencies in the %s workflow logs in to CodeArtifact', (_name, filePath) => {
    const workflow: string = withCodeArtifact[filePath];
    const installs = count(workflow, '- name: Install dependencies');
    expect(installs).toBeGreaterThan(0);
    // exactly one login per installing job - no gaps, no double injection
    expect(count(workflow, 'id: login-codeartifact')).toEqual(installs);
    // OIDC role assumption needs id-token on each of those jobs
    expect(count(workflow, 'id-token: write')).toBeGreaterThanOrEqual(installs);
  });

  test.each(workflows)('the %s workflow is untouched when no codeArtifactConfig is given', (_name, filePath) => {
    expect(withoutCodeArtifact[filePath]).not.toContain('login-codeartifact');
  });

  test('id-token is not granted to the release and upgrade jobs without codeArtifactConfig', () => {
    expect(count(withoutCodeArtifact[releaseWorkflowFilePath], 'id-token: write'))
      .toBeLessThan(count(withCodeArtifact[releaseWorkflowFilePath], 'id-token: write'));
    expect(withoutCodeArtifact[upgradeWorkflowFilePath]).not.toContain('id-token: write');
  });
});
