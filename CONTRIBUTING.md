# Contributing

Thank you for considering contributing! 🙌 `react-denmark-map` was created as a small project with the main goal of helping myself learn React. Therefore, `react-denmark-map` is not just a library but also a learning space! If you are a beginner in React or in contributing to open-source, you are welcome (and encouraged) to contribute. Below you can find an outline on how and what to contribute to `react-denmark-map`.

1. [What to contribute](#what-to-contribute)
2. [Running locally](#running-locally)
3. [Folder structure](#folder-structure)
4. [Workflow](#workflow)

## What to contribute

There are three ways you can contribute:

1. **Suggesting improvements**. If you find a bug or want to suggest an improvement to the library, please [open a new issue](https://github.com/MartinP460/react-denmark-map/issues/new).
2. **Solving tasks from "Issues"**. Issues are opened in the ["Issues" tab](https://github.com/MartinP460/react-denmark-map/issues) on Github. Other than actual issues, the "Issues" page is also used for suggesting enhancements to the library. Tasks won't always be available so feel free to come up with your own improvements. If you find a task you would like to work on, add a new comment to say that you will start working on it (that is if someone else hasn't already!). After that, you can begin working on the task.
3. **Adding your own enhancement**. If you think you can enhance `react-denmark-map` in any way, you are free to fork the repo, add the changes locally and open a new PR. But please create an issue before working on it.

## Running locally

[Open an issue](https://github.com/MartinP460/react-denmark-map/issues/new) if you encounter problems getting it running.

The repo consists of the core package, an ESLint configuration package and the demo app. The core directory is `packages/core`. There are two ways to run scripts - by running them from the root directory and by `cd`-ing into the package and running them from there. Instructions for running scripts are under the `README.md` in each package. The root scripts are:

```zsh
npm run format                              /* Formats files using ESLint. */
npm run lint                                /* Checks formatting of files using ESLint. */
npm run storybook                           /* Runs storybook (for visual testing). */
npm run test                                /* Runs all tests. */
```

There are Git hooks set up that run tests before you push.

## Folder structure

Below is a very top-level view of the repository.

```zsh
apps/
└── demo                                    /* Demo Next.js app. */
packages/
├── eslint-config-custom                    /* Shared ESLint configuration. */
└── core                                    /* The core react-denmark-map components. */
```

To be clear, the components contained in the actual NPM package are in the `packages/core`.

## Workflow

### Branches

When you are ready to start working on an issue, [fork this repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), open a terminal in the root and run `npm install`. Then [checkout on a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). The branch name should be related change your making and in "kebab-case" (i.e. seperated-by-hyphens).

### Commits

There is no formal convention on commits but try to keep your commits small and isolated.

### Testing

In terms of testing, the core components in `packages/core` are the ones that need testing (visually and with unit tests). There's no need to write tests for the demo app.

When making changes in that package, you should make sure that the change works visually (if it's a visual change). You can use Storybook to do this (see [Running locally](#running-locally)).

Unit tests are written for the `Map` component. If you're adding a new prop or modifying an existing, make sure to add test(s) to verify that it works as intended.

### Documentation

There are two types of documentation that you could potentially need to add or modify:

1. **Inline** - All "exposed" functions (including components and props) should be documented with [JSDoc](https://jsdoc.app/about-getting-started).
2. **External** - The README.md is the external documentation and should be updated when it makes sense. For example, components, props, potential pitfalls, or non-trivial stuff are example of things that need to be documented.

### Pull requests

Once your changes are ready, [submit your branch as a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). If nothing else is specified in the issue, open a branch against the `main` branch. In the description, make sure to explain:

1. What changes are in the PR
2. Why these changes are relevant
3. How to test your changes

And that's it for now! 👏 Your changes will be reviewed within (hopefully!) a few days and then merged.
