# Contributing

Thank you for considering contributing! 🙌 `react-denmark-map` was created as a small project with the main goal of helping myself learn React. Therefore, `react-denmark-map` is not just a library but also a learning space! If you are a beginner in React or in contributing to open-source, you are welcome (and encouraged) to contribute. Below you can find an outline on how and what to contribute to `react-denmark-map`.

1. [What to contribute](#what-to-contribute)
2. [Running locally](#running-locally)
3. [Folder structure](#folder-structure)
4. [Workflow](#workflow)

## What to contribute

There are three ways you can contribute:

1. **Suggesting improvements**. If you find a bug or want to suggest an improvement to the library, please [open a new issue](https://github.com/MartinP460/react-denmark-map/issues/new).
2. **Solving tasks from "Issues"**. Issues are opened in the ["Issues" tab](https://github.com/MartinP460/react-denmark-map/issues) on Github. Other than actual issues, the "Issues" page is also used for suggesting enhancements to the library. Tasks won't always be available so feel free to add your own. If you find a task you would like to work on, add a new comment to say that you will start working on it (if someone else hasn't already!). After that, you can begin working on the task.
3. **Adding your own enhancement**. If you think you can enhance `react-denmark-map` in any way, you are free to clone the repo, add the changes locally and open a new PR. But please consider creating an issue before starting work on it if there are a lot of changes.

## Running locally

[Open an issue](https://github.com/MartinP460/react-denmark-map/issues/new) if you encounter problems getting it running.

1. **Cloning on your machine**

   Clone the repo, cd into it, and install packages:

   ```zsh
   git clone git@github.com:MartinP460/react-denmark-map.git

   cd react-denmark-map

   npm i
   ```

2. **Running project**

   The repo consists of a `src` project which is the core package. Run storybook to render the core components.

   ```
   npm run storybook
   ```

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
    │   │   └── index.ts                     /* Default expoert of component. */
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

## Workflow

You can follow the steps below to . These things are standard if you have worked with Git before.

1. Switch to a new branch.

   ```
   git checkout -b your-branch-name
   ```

   The branch name be related change your making and in "kebab-case" (i.e. seperated-by-hyphens). If you are opening from an issue, you can use the branch name that pops up when you click "Create a branch" under the "Development" option in the right sidebar.

2. Code your changes!

   Make sure to add tests and Storybook components where appropriate.

3. Verify that the tests run successfully.

   ```
   npm run test
   ```

4. Commit and push!

   ```
   git add .
   git commit -m "You commit message."
   git push
   ```

5. Open a new pull request on Github on the branch. If the PR is based on an issue, make sure to [link the PR to the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#manually-linking-a-pull-request-to-an-issue-using-the-pull-request-sidebar).

6. And your done - great job! Your PR will be reviewed and hopefully merged.
