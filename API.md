# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeployableCdkApplication <a name="DeployableCdkApplication" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication"></a>

Deployable cdk application Uses PNPM package manager by default It also created deployment tasks for each environment.

#### Initializers <a name="Initializers" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.Initializer"></a>

```typescript
import { DeployableCdkApplication } from '@cloudkitect/deployable-cdk-app'

new DeployableCdkApplication(options: DeployableCdkApplicationOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.Initializer.parameter.options">options</a></code> | <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions">DeployableCdkApplicationOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.Initializer.parameter.options"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions">DeployableCdkApplicationOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeploymentJobsToReleaseWorkflow">addDeploymentJobsToReleaseWorkflow</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeployStepsToBuildWorkflow">addDeployStepsToBuildWorkflow</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.awsCredentials">awsCredentials</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.buildDeployCommand">buildDeployCommand</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.buildDeploymentJobs">buildDeploymentJobs</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.checkoutStep">checkoutStep</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.createDeploymentTasks">createDeploymentTasks</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.deploymentStep">deploymentStep</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.generateToken">generateToken</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.latestTag">latestTag</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.manualApprovalStep">manualApprovalStep</a></code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.packageManagerCommand">packageManagerCommand</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: string): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addCdkDependency.parameter.modules"></a>

- *Type:* string

The list of modules to depend on.

---

##### `addDeploymentJobsToReleaseWorkflow` <a name="addDeploymentJobsToReleaseWorkflow" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeploymentJobsToReleaseWorkflow"></a>

```typescript
public addDeploymentJobsToReleaseWorkflow(releaseConfig: ReleaseConfig, dependency: string[]): string
```

###### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeploymentJobsToReleaseWorkflow.parameter.releaseConfig"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeploymentJobsToReleaseWorkflow.parameter.dependency"></a>

- *Type:* string[]

---

##### `addDeployStepsToBuildWorkflow` <a name="addDeployStepsToBuildWorkflow" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeployStepsToBuildWorkflow"></a>

```typescript
public addDeployStepsToBuildWorkflow(releaseConfig: ReleaseConfig): void
```

###### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.addDeployStepsToBuildWorkflow.parameter.releaseConfig"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

##### `awsCredentials` <a name="awsCredentials" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.awsCredentials"></a>

```typescript
public awsCredentials(releaseOption: ReleaseConfig): JobStep
```

###### `releaseOption`<sup>Required</sup> <a name="releaseOption" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.awsCredentials.parameter.releaseOption"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

##### `buildDeployCommand` <a name="buildDeployCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.buildDeployCommand"></a>

```typescript
public buildDeployCommand(releaseConfig: ReleaseConfig, stackPattern?: string): string
```

###### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.buildDeployCommand.parameter.releaseConfig"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

###### `stackPattern`<sup>Optional</sup> <a name="stackPattern" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.buildDeployCommand.parameter.stackPattern"></a>

- *Type:* string

---

##### `buildDeploymentJobs` <a name="buildDeploymentJobs" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.buildDeploymentJobs"></a>

```typescript
public buildDeploymentJobs(): void
```

##### `checkoutStep` <a name="checkoutStep" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.checkoutStep"></a>

```typescript
public checkoutStep(passedRef: string): JobStep
```

###### `passedRef`<sup>Required</sup> <a name="passedRef" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.checkoutStep.parameter.passedRef"></a>

- *Type:* string

---

##### `createDeploymentTasks` <a name="createDeploymentTasks" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.createDeploymentTasks"></a>

```typescript
public createDeploymentTasks(options: DeployableCdkApplicationOptions): void
```

###### `options`<sup>Required</sup> <a name="options" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.createDeploymentTasks.parameter.options"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions">DeployableCdkApplicationOptions</a>

---

##### `deploymentStep` <a name="deploymentStep" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.deploymentStep"></a>

```typescript
public deploymentStep(packageManager: NodePackageManager, releaseConfig: ReleaseConfig): JobStep
```

###### `packageManager`<sup>Required</sup> <a name="packageManager" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.deploymentStep.parameter.packageManager"></a>

- *Type:* projen.javascript.NodePackageManager

---

###### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.deploymentStep.parameter.releaseConfig"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

##### `generateToken` <a name="generateToken" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.generateToken"></a>

```typescript
public generateToken(): JobStep
```

##### `latestTag` <a name="latestTag" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.latestTag"></a>

```typescript
public latestTag(releaseConfig: ReleaseConfig): JobStep
```

###### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.latestTag.parameter.releaseConfig"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

##### `manualApprovalStep` <a name="manualApprovalStep" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.manualApprovalStep"></a>

```typescript
public manualApprovalStep(releaseConfig: ReleaseConfig): JobStep
```

###### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.manualApprovalStep.parameter.releaseConfig"></a>

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>

---

##### `packageManagerCommand` <a name="packageManagerCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.packageManagerCommand"></a>

```typescript
public packageManagerCommand(packageManager: NodePackageManager): string
```

###### `packageManager`<sup>Required</sup> <a name="packageManager" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.packageManagerCommand.parameter.packageManager"></a>

- *Type:* projen.javascript.NodePackageManager

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.isConstruct"></a>

```typescript
import { DeployableCdkApplication } from '@cloudkitect/deployable-cdk-app'

DeployableCdkApplication.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.isProject"></a>

```typescript
import { DeployableCdkApplication } from '@cloudkitect/deployable-cdk-app'

DeployableCdkApplication.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.of"></a>

```typescript
import { DeployableCdkApplication } from '@cloudkitect/deployable-cdk-app'

DeployableCdkApplication.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.deploymentTasks">deploymentTasks</a></code> | <code>projen.Task[]</code> | *No description.* |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.releaseConfigs">releaseConfigs</a></code> | <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `deploymentTasks`<sup>Required</sup> <a name="deploymentTasks" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.deploymentTasks"></a>

```typescript
public readonly deploymentTasks: Task[];
```

- *Type:* projen.Task[]

---

##### `releaseConfigs`<sup>Required</sup> <a name="releaseConfigs" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.releaseConfigs"></a>

```typescript
public readonly releaseConfigs: ReleaseConfig[];
```

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplication.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeployableCdkApplicationOptions <a name="DeployableCdkApplicationOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions"></a>

Deployable cdk application options.

#### Initializer <a name="Initializer" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.Initializer"></a>

```typescript
import { DeployableCdkApplicationOptions } from '@cloudkitect/deployable-cdk-app'

const deployableCdkApplicationOptions: DeployableCdkApplicationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseConfigs">releaseConfigs</a></code> | <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>[]</code> | List of release configurations, this will specify environment specific release configurations. |
| <code><a href="#@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.stackPattern">stackPattern</a></code> | <code>string</code> | Stack Pattern representing stacks to be deployed. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `releaseConfigs`<sup>Required</sup> <a name="releaseConfigs" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.releaseConfigs"></a>

```typescript
public readonly releaseConfigs: ReleaseConfig[];
```

- *Type:* <a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig">ReleaseConfig</a>[]

List of release configurations, this will specify environment specific release configurations.

---

##### `stackPattern`<sup>Optional</sup> <a name="stackPattern" id="@cloudkitect/deployable-cdk-app.DeployableCdkApplicationOptions.property.stackPattern"></a>

```typescript
public readonly stackPattern: string;
```

- *Type:* string

Stack Pattern representing stacks to be deployed.

---

### ReleaseConfig <a name="ReleaseConfig" id="@cloudkitect/deployable-cdk-app.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.Initializer"></a>

```typescript
import { ReleaseConfig } from '@cloudkitect/deployable-cdk-app'

const releaseConfig: ReleaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.accountType">accountType</a></code> | <code>string</code> | Environment name to deploy to. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.region">region</a></code> | <code>string</code> | Default AWS region for the account. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.roleToAssume">roleToAssume</a></code> | <code>string</code> | ARN of AWS role to be assumed. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.approvers">approvers</a></code> | <code>string</code> | Comma separated list of github usernames who need to approve the deployments. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.assumeRoleDurationInSeconds">assumeRoleDurationInSeconds</a></code> | <code>number</code> | Duration of assume role session. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.deploymentMethod">deploymentMethod</a></code> | <code>string</code> | Deploy method. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.deploymentTag">deploymentTag</a></code> | <code>string</code> | Deployment tag in the form of v1.0.0. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.hotswap">hotswap</a></code> | <code>boolean</code> | Hotswap deployment. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.manualApprovalRequired">manualApprovalRequired</a></code> | <code>boolean</code> | Is manual approval required for deployments. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.postDeploymentSteps">postDeploymentSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Post deployment job steps. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.preDeploymentSteps">preDeploymentSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Pre deployment job steps. |
| <code><a href="#@cloudkitect/deployable-cdk-app.ReleaseConfig.property.workflowName">workflowName</a></code> | <code>string</code> | Workflow name where the deployment job should be added. |

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

Environment name to deploy to.

---

*Example*

```typescript
'Dev' | 'Test' | 'QA' | 'Uat' | 'PreProd' | 'Prod'
```


##### `region`<sup>Required</sup> <a name="region" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Default AWS region for the account.

---

*Example*

```typescript
"us-east-1"
```


##### `roleToAssume`<sup>Required</sup> <a name="roleToAssume" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.roleToAssume"></a>

```typescript
public readonly roleToAssume: string;
```

- *Type:* string

ARN of AWS role to be assumed.

---

*Example*

```typescript
arn:aws:iam::ACCOUNTID:role/ROLENAME
```


##### `approvers`<sup>Optional</sup> <a name="approvers" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.approvers"></a>

```typescript
public readonly approvers: string;
```

- *Type:* string

Comma separated list of github usernames who need to approve the deployments.

---

##### `assumeRoleDurationInSeconds`<sup>Optional</sup> <a name="assumeRoleDurationInSeconds" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.assumeRoleDurationInSeconds"></a>

```typescript
public readonly assumeRoleDurationInSeconds: number;
```

- *Type:* number
- *Default:* 900

Duration of assume role session.

---

##### `deploymentMethod`<sup>Optional</sup> <a name="deploymentMethod" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.deploymentMethod"></a>

```typescript
public readonly deploymentMethod: string;
```

- *Type:* string
- *Default:* 'change-set'

Deploy method.

---

*Example*

```typescript
'direct' | 'change-set' | 'prepare-change-set'
```


##### `deploymentTag`<sup>Optional</sup> <a name="deploymentTag" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.deploymentTag"></a>

```typescript
public readonly deploymentTag: string;
```

- *Type:* string
- *Default:* latest tag

Deployment tag in the form of v1.0.0.

---

##### `hotswap`<sup>Optional</sup> <a name="hotswap" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.hotswap"></a>

```typescript
public readonly hotswap: boolean;
```

- *Type:* boolean
- *Default:* false

Hotswap deployment.

---

##### `manualApprovalRequired`<sup>Optional</sup> <a name="manualApprovalRequired" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.manualApprovalRequired"></a>

```typescript
public readonly manualApprovalRequired: boolean;
```

- *Type:* boolean
- *Default:* false

Is manual approval required for deployments.

---

##### `postDeploymentSteps`<sup>Optional</sup> <a name="postDeploymentSteps" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.postDeploymentSteps"></a>

```typescript
public readonly postDeploymentSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Post deployment job steps.

---

##### `preDeploymentSteps`<sup>Optional</sup> <a name="preDeploymentSteps" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.preDeploymentSteps"></a>

```typescript
public readonly preDeploymentSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

Pre deployment job steps.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cloudkitect/deployable-cdk-app.ReleaseConfig.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string
- *Default:* release

Workflow name where the deployment job should be added.

Must be either release or build

---



