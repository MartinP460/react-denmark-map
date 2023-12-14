# Core

The `core` package contains the core components for react-denmark-map.

### Scripts

There are a number of scripts that are useful when developing.

```zsh
npm run format                              /* Formats files using ESLint. */
npm run lint                                /* Checks formatting of files using ESLint. */
npm run storybook                           /* Runs storybook (for visual testing). */
npm run test                                /* Runs all tests. */
npm run test:build                          /* Runs a test that verifies that the project builds. */
npm run test:unit                           /* Runs unit tests. */
npm run test:unit:watch                     /* Runs unit tests on watch mode. */
```

### Folder structure

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
