# Contributing

Thank you for considering contributing! 🙌 `react-denmark-map` was created as a small project with the main goal of helping myself learn React. Therefore, `react-denmark-map` is not just a library but also a learning space! If you are a beginner in React or in contributing to open-source, you are welcome (and encouraged) to contribute. Below you can find an outline on how and what to contribute to `react-denmark-map`.

1. [What to contribute](#what-to-contribute)
2. [Workflow](#workflow)
3. [Running locally](#running-locally)
4. [Folder structure](#folder-structure)

## What to contribute

There are three ways you can contribute:

1. **Suggesting improvements**. If you find a bug or want to suggest an improvement to the library, please [open a new issue](https://github.com/MartinP460/react-denmark-map/issues/new).
2. **Solving tasks from "Issues"**. Issues are opened in the ["Issues" tab](https://github.com/MartinP460/react-denmark-map/issues) on Github. Other than actual issues, the "Issues" page is also used for suggesting enhancements to the library. Tasks won't always be available so feel free to come up with your own improvements. If you find a task you would like to work on, add a new comment to say that you will start working on it (that is if someone else hasn't already!). After that, you can begin working on the task.
3. **Adding your own enhancement**. If you think you can enhance `react-denmark-map` in any way, you are free to fork the repo, add the changes locally and open a new PR. But please create an issue before working on it.

## Workflow

### Branches

When you are ready to start working on an issue, [fork this repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), open a terminal in the root and run `npm install`. Then [checkout on a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). The branch name should be related change your making and in "kebab-case" (i.e. seperated-by-hyphens).

### Commits

There is no formal convention on commits but try to keep your commits small and isolated.

### Testing

When making changes, you should make sure that the change works visually (if it's a visual change). You can use Storybook to do this.

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

## Running locally

[Open an issue](https://github.com/MartinP460/react-denmark-map/issues/new) if you encounter problems getting it running.

The repo consists of a `src` project which is the core package. There are two main scripts in the root directory:

```zsh
npm run storybook

npm run test
```

Use the `storybook` command to run Storybook to test changes visually. Use the `test` command to run unit tests on watch mode.

## Folder structure

The tree below should give you an idea of the folder structure.

```
src/
└── components/
    ├── areas/
    │   ├── municipalities/
    │   │   ├── Municipalities.stories.tsx   /* Storybook component for a particular map display. */
    │   │   ├── Constituencies.tsx           /* Primary component rendering the map display. */
    │   │   ├── data.ts                      /* The SVG data for rendering the particular map. */
    │   │   └── index.ts                     /* Default export of the component. */
    │   ├── denmark/
    │   ├── islands/
    │   ├── constituencies/
    │   └── regions/
    └── map/
        ├── Map.test.tsx                     /* Unit tests for the `Map` component. */
        ├── Map.tsx                          /* The underlying map component rendered by each map display. */
        └── Tooltip.tsx                      /* The tooltip for the `Map`` component. */
```

The directories in `areas` contain similar files and are used to render each display/version of the map of Denmark.

You should be able to get a good idea of the code by just exploring it.
