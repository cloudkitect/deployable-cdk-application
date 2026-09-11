# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`@cloudkitect/deployable-cdk-app` is a **JSII construct library** published to npm. It exports a single class, `DeployableCdkApplication`, which extends projen's `AwsCdkTypeScriptApp`. Consumers invoke `npx projen new --from "@cloudkitect/deployable-cdk-app"` to scaffold a CDK app that ships with prewired GitHub Actions deployment workflows driven by a `releaseConfigs` array.

This is a library, not a runnable app — there is no `cdk deploy` from this repo itself. Runtime behavior is observed via synthesized output (GitHub workflow YAML, projen tasks) in tests.

## Common commands

Projen owns the build graph. Never hand-edit `package.json`, `.projen/tasks.json`, `tsconfig.json`, `test/tsconfig.json`, `projenrc/tsconfig.json`, or the workflows under `.github/workflows/` — edit `.projenrc.ts` and run `npx projen` to regenerate.

- `npx projen` — resynthesize generated files after editing `.projenrc.ts`
- `npx projen build` — full build: synth → compile (jsii) → docgen → test → package
- `npx projen test` — runs Jest + ESLint. Note: the test task passes `--updateSnapshot`, so snapshots are refreshed on every run. Review snapshot diffs carefully before committing.
- `npx projen compile` — JSII compile only (produces `lib/`)
- `npx projen eslint` — lint + autofix
- `npx projen docgen` — regenerates `API.md` from the `.jsii` manifest (runs in post-compile)
- `npx projen watch` — JSII watch mode

Run a single test:
```
npx jest test/index.test.ts -t "build workflow"
```
(Use `jest` directly to avoid the eslint step and the forced `--updateSnapshot`.)

Package manager is **pnpm 10** (pinned to 10.34.5 via `pnpmVersion` in `.projenrc.ts`); `pnpm i --frozen-lockfile` for CI-parity installs.

## Architecture

### Single-file surface area
All exported API lives in `src/index.ts`. The public shape is:
- `DeployableCdkApplicationOptions` extends `AwsCdkTypeScriptAppOptions`, adding `stackPattern`, `releaseConfigs[]`, and `codeArtifactConfig`.
- `ReleaseConfig` — per-environment deployment definition (account type, role, region, deployment method, workflow type, optional `applicationName` for multi-app repos, pre/post steps).
- `DeployableCdkApplication` — the construct.

### The workflow-generation model
Each entry in `releaseConfigs` is dispatched in `buildDeploymentStages()` by `workflowType`:

| `workflowType` | Effect |
| --- | --- |
| `build`   | Appends AWS-credentials + deploy steps to the existing projen `build` workflow (runs on every PR). All build deploys share the single build job and run sequentially as post-build steps. |
| `release` | Adds a per-config job to the `release` workflow. Jobs chain via `needs: [previous]` unless `parallel: true` is set (see below). Supports multi-app / multi-account via `applicationName`. |
| `manual`  | Creates a new workflow file `${accountType}-deployment-workflow.yml` with a `workflow_dispatch` input for a version tag. |

Anything else throws `Unsupported workflowType`.

#### Release parallelism
`ReleaseConfig.parallel` (applies only to `workflowType: 'release'`) controls the `needs` graph:
- Sequential configs (default) advance the anchor: each such job depends on the previous sequential anchor plus every parallel job that ran since.
- Parallel configs attach to the current anchor but do *not* advance it — so two `parallel: true` siblings share a `needs` entry and run concurrently.

This lets configs mix freely, e.g. `[Dev/Api parallel, Dev/Web parallel, Prod/Api, Prod/Web]` → Dev pair runs concurrently after `release_github`, Prod/Api waits for both, Prod/Web chains on Prod/Api.

Synthesis is two-phase: `createSynthTasks` / `createDeploymentTasks` run in the constructor (so `cdk synth` / `cdk deploy` projen tasks exist before anything else runs), while `buildDeploymentStages` runs in the overridden `synth()` method — that's the only place the GitHub workflow files exist to be patched.

### Task and job naming
`taskNamePostfix()` keys tasks/jobs by `${accountType}` or `${accountType}_${applicationName}`. When `applicationName` is set, each release config gets its own `Deploy_Dev_Api` / `Deploy_Dev_Web` task, letting a single repo deploy multiple apps to the same account. The separator is `_` (not `:`) because GitHub Actions job IDs must match `[a-zA-Z_][a-zA-Z0-9_-]*` — colons are invalid. Changing this function will invalidate every snapshot and break consumer projects that reference the generated task names.

### CodeArtifact integration
When `codeArtifactConfig.roleToAssume` is set, the class uses `JsonPatch` to splice an `aws-actions/configure-aws-credentials` step and a `codeartifact login` step into `/jobs/build/steps` at indexes 2 and 3, and flips the build runner to `ubuntu-24.04-arm`. These indexes are positional against projen's generated build workflow — if projen's build job shape changes, the patch offsets must be revisited.

### CDK context conventions
Generated `cdk synth` / `cdk deploy` commands always pass `--context env=<accountType>` and `--context app=<applicationName>`. Consumer CDK code is expected to read these context values to pick the correct stack/config.

## Testing approach

`test/index.test.ts` uses projen's `synthSnapshot` to synthesize a temp project and asserts on generated workflow YAML via Jest snapshots in `test/__snapshots__/`. Any change that affects generated workflow content must be accompanied by reviewed snapshot updates. The `Multi app deployment` describe block is the regression guard for the `applicationName`-per-config path.

## Release

Releases are driven by projen + `commit-and-tag-version` using Conventional Commits — only `feat:` and `fix:` commits trigger a release (`ReleasableCommits.featuresAndFixes()`). `chore(release):` commits are skipped. The `release` workflow publishes to public npm via JSII (`jsii-pacmak`, js target only).
