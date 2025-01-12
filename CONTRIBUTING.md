# Contributing to Carbon

We love contributions, so thanks for choosing to get involved with the Carbon project.

## Contents

[What is Carbon?](#what-is-carbon)

[I have a question](#i-have-a-question)

[Reporting Issues/Bugs](#reporting-issues-bugs)

- [Look for an existing issue](#look-for-an-existing-issue)

[Issue tracker](#issue-tracker)

[Requesting Features](#requesting-features)

[Defining Features](#defining-features)

[Automated issue management](#automated-issue-management)

[Testing](#testing)

- [Unit Testing](#unit-testing)
- [Functional Browser Testing](#functional-browser-testing)

[Pull Request Guidelines](#pull-request-guidelines)

- [The **Feature Branch** workflow](#the-feature-branch-workflow)
- [The **Forking** workflow](#the-forking-workflow)

[Styleguides](#styleguides)

- [Git commit messages](#git-commit-messages)
- [JavaScript guide](docs/javascript-styleguide.md)
- [TypeScript guide](docs/typescript-styleguide.md)

## What is Carbon?

Carbon is an [open source](https://opensource.com/resources/what-open-source) library of user interface components. These components are intentionally designed to be reusable, accessible, easy to use, and easy to develop with. We follow the principles of atomic design and strive to provide elements that are the building blocks of a user interface.

## Getting Started with Carbon

In order to help you get started with Carbon, we have written two helpful documents. The [dev-environment-setup](docs/dev-environment-setup.md) document will provide you with the information you require to get your development environment started. The second document is our [getting-started](docs/getting-started.md) guide and this is aimed at someone who already has a development environment setup but wants to add Carbon to their existing project.

## I have a question

- Internal **Sage** contributors are invited to post in our #carbon Slack channel, in the first instance.
- Public contributors are invited to use our [issue tracker](https://github.com/sage/carbon/issues).

## Reporting Issues/Bugs

If you have identified a reproduceable problem in Carbon, or if you have a new feature to request we want to hear about it. Following these guidelines helps us to understand your report, reproduce the issue and find related reports.

### Look for an existing issue

Before you create a new issue please search our [open issues](https://github.com/Sage/carbon/issues) to see if someone has already raised it. If you find your issue already exists, make relevant comments and add your [reaction](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments). Use a reaction in place of a "+1" comment:

- 👍 - upvote
- 👎 - downvote

If you can't find an existing issue that describes your bug or feature then you have three choices:

1. For a simple **bug fix** follow the [Pull Request Guidelines](#pull-request-guidelines) and submit a PR.
1. To introduce a **new feature** either create a new issue via the [issue tracker](https://github.com/sage/carbon/issues), or propose the change using a [Request For Comment](rfcs/README.md). Which is right for you is a judgement call based on the size and complexity of the feature.
1. **Breaking changes** should always be introduced with a [Request For Comment](rfcs/README.md).

## Issue tracker

The [issue tracker](https://github.com/sage/carbon/issues) is the preferred way to report any bugs or issues with the codebase. Once an issue is submitted, it will be reviewed by the team and we will either add a task to our backlog, describe a workaround if appropriate, or advise you of the next steps that we plan to take.

When reporting an issue, please provide as much information and context as possible allowing a developer to replicate and understand the problem. Also ensure you record the version of Carbon you are using, as well as any console or error logs.

## Requesting Features

For any feature requests, please use the [issue tracker](https://github.com/sage/carbon/issues). When you raise the feature request, please provide as much information as possible to describe the feature required, as well as examples of how you would like the feature to work.

## Defining Features

For features that you have a proposed solution for, please write an [Request For Comment](rfcs/README.md).

## Automated issue management

We use a bot to help us manage issues. The bot automatically labels issues where there has been no activity for 365 days as `stale`. We then consider the issue for closure.

## Testing

### Unit Testing

- Carbon has a 100% coverage policy. Testing is done using [Jest](https://facebook.github.io/jest/). We use the [Enzyme](https://github.com/airbnb/enzyme) testing utility for interacting with components in tests.
- Legacy code used React Testutils - we are currently in the process of migrating to 100% Enzyme usage.
- New tests need to be written using Enzyme.

### Functional Browser Testing

- All components are fully tested manually in terms of functionality, accessibility, internationalisation and action events.
- [Cypress.io](https://www.cypress.io) is used for automated regression testing.
- [Chromatic](https://www.chromatic.com/builds?appId=5ecf782fe724630022d27d7d) is used to test for visual regressions.
- The [Axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd) extension is used for testing accessibility in accordance with the WCAG 2 and Section 508 accessibility standards.

More details about how we test can be found in the [Carbon Testing Styleguide](docs/testing-styleguide.md).

## Pull Request Guidelines

Before submitting a pull request, check the [issue tracker](https://github.com/sage/carbon/issues) to see if the feature or bug has already been discussed. If it has, check with us before beginning work on it to avoid duplicated effort. If no issue has been raised, please raise one and wait for approval before beginning work. You can then link back to this when submitting a pull request to address it.

Pull requests can be used in conjunction with two workflows:

### The **Feature Branch** workflow

If you are a Carbon maintainer you should develop your feature in a branch of the Carbon repository. To merge into `master` you must first open a pull request with your feature branch as the source and `master` as the destination.

### The **Forking** workflow

If you are a third party contributor, you should fork the carbon repository and make your changes there. When ready you should then raise a pull request to the `master` branch of carbon.

Whichever workflow you use when you create the pull request you should include a detailed description of the feature you are adding and ensure you have included information on how to setup and QA your new feature or bug-fix.

Your branch should meet the following criteria:

1. [Git commit messages](#git-commit-messages) follow the styleguide below.
1. The code is fully tested and has full coverage.
1. Cypress automation tests are included.
1. The code follows our existing coding conventions.
1. It has detailed commit messages and squashed commits. PRs with commit messages like 'WIP' and 'addressed comments', or long lists of commits will likely require amending."
1. The code does not introduce unnecessary dependencies (no jQuery!).
1. Storybook is updated to include examples.
1. Theme support is provided.
1. Typescript `d.ts` files are provided or updated.

**To be merged, the pull request must be approved by at least two project maintainers**

#### GitHub Checks

Our GitHub checks don't run on a forked PR because the Chromatic and Cypress Dashboard require credentials. When you submit a PR a project maintainer will review your code.

If there are no changes that could expose our credentials they will start the `Forked CI` GitHub action. This will create new Chromatic and Cypress builds then update the PR checks.

#### Preventing unnecessary builds

Our CI resources are finite, it's important that we only trigger a CI build when required. There are some best practices that you can follow to reduce the number of builds
that you trigger.

1. Work on a branch until you want to trigger CI, don't create a draft PR until you are ready to run CI.
1. Create a draft PR when you want to trigger CI.
1. Keep the PR as draft when you want a peer review.
1. Address any peer review comments in as many commits as required, but only push them once you're finished addressing all comments.
1. Once your PR has been has been approved by at least two carbon-devs and is ready for UX QA or QA, you should convert the PR to a regular PR.
1. Don't press the "Update Branch" button unless you're about to merge the branch. Once you have pressed "Update Branch" you shouldn't work on anything else
   until that branch is merged.

#### Long lived branches

Sometimes it is necessary to work on a feature for an extended amount of time. If you're aware of the pros/cons of doing such you can choose to use a `major/**` branch.

1. Create a long lived branch off master e.g. `git checkout -b major/remove_classic_theme origin/master`
1. Create a feature branch from the long lived branch e.g. `git checkout -b remove_classic_alert origin/major/remove_classic_theme`
1. Dev creates PR and `remove_classic_alert` is merged back into `major/remove_classic_theme`
1. Dev repeats steps 2 & 3 until the feature is complete.
1. When the feature is complete the master and the long lived branch will have diverged, you'll need to merge master in to the long lived branch, resolving any conflicts. `git merge origin/master`
1. Now that the two branches are up to date you can make a PR from the long lived branch into master

_N.B. It's recommended that development on master is paused while this long lived branch is merged into master, otherwise you will have to re-integrate each time master changes._

_A long lived branch will only trigger one release, when it is merged into master._

## Styleguides

### Git commit messages

We use the [`conventional-commits`](https://www.conventionalcommits.org/en/v1.0.0/) commit message format. This specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

Your commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix:** a commit of the _type_ `fix` patches a bug in your codebase (this correlates with [`PATCH`](https://semver.org/) in semantic versioning).
1. **feat:** a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates with [`MINOR`](https://semver.org/) in semantic versioning).
1. **BREAKING CHANGE:** a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with [`MAJOR`](https://semver.org/) in semantic versioning). A BREAKING CHANGE can be part of commits of any _type_.
1. _types_ other than `fix:` and `feat:` are allowed, for example [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
1. footers other than `BREAKING CHANGE: <description> `may be provided and follow a convention similar to [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.  
[[Source]](https://github.com/angular/angular/blob/2089727db988c8d3336e06c10fc75049565305ad/CONTRIBUTING.md#commit)

NB. When working on your feature branch, if you introduce a bug on that branch only and then fix it in a later commit you should squash this commit into the commit where you introduced the bug. There is no need to create a `fix` commit for a bug that didn't make it into production.

We use [`commitlint`](https://github.com/conventional-changelog/commitlint) and [`husky`](https://github.com/typicode/husky) to check our commits against the `conventionalcommits` guidelines.

- [`husky`](https://github.com/typicode/husky) manages the git commit hooks defined in `package.json`
- we have a hook that runs the commit message via [`commitlint`](https://github.com/conventional-changelog/commitlint)
- we use the [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) config
- [`husky`](https://github.com/typicode/husky) aborts the commit if the commit message is in the wrong format

We use [`commitizen`](https://github.com/commitizen/cz-cli) to help write commit messages

- we use the [`cz-conventional-changelog`](https://github.com/commitizen/cz-conventional-changelog) config
- you can choose to write commit messages with the regular `git` CLI or in your IDE still
- you can launch [`commitizen`](https://github.com/commitizen/cz-cli) with `npm run commit`
- If you used `commitizen` and your commit is discarded by `husky` e.g. if we run the tests in the `pre-commit` hook and they fail; you can use `npm run commit -- --retry` to retry with the same commit message.

| Type        | Description                                                                                                 | Release Type |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ------------ |
| `feat:`     | A new feature                                                                                               | minor        |
| `fix:`      | A bug fix                                                                                                   | patch        |
| `docs:`     | Documentation only changes                                                                                  | :x:          |
| `style:`    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      | :x:          |
| `refactor:` | A code change that neither fixes a bug nor adds a feature                                                   | :x:          |
| `perf:`     | A code change that improves performance                                                                     | patch        |
| `test:`     | Adding missing tests or correcting existing tests                                                           | :x:          |
| `build:`    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         | :x:          |
| `ci:`       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | :x:          |
| `chore:`    | Other changes that don't modify src or test files                                                           | :x:          |
| `revert:`   | Reverts a previous commit                                                                                   | patch        |

Any of these types can trigger a `major` release by including `BREAKING CHANGE:` in the commit footer.

## CLA

To accept any third party contributions we require a Contributor License Agreement to be signed. Please find links to the relevent documents below:

- [Individual CLA](cla/SAGE-CLA.docx)
- [Corporate CLA](cla/SAGE-CCLA.docx)
