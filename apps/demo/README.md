# Docs

The `demo` package is a [Next.js](https://nextjs.org/docs) project that contains the demo/example.

### Scripts

Two scripts that are useful when developing.

```zsh
npm run dev                                 /* Starts the development server at localhost:3000. */
npm run lint                                /* Checks formatting of files using ESLint. */
```

Important: Remember to run `npm run build` in the root directory to build the `react-denmark-map` package before running this project. Also, don't use this project to test changes in `react-denmark-map` visually since the library needs to be re-built everytime. Use Storybook for that instead.

### Folder structure

The tree below should give you an idea of the folder structure.

```
app/
├── demo/
│   ├── page.tsx                             /* The route for rendering the demo. */
│   └── ...
├── page.tsx                                 /* The homepage. */
└── ...
components/
├── examples/                                /* The different example renderings of each version of the map. */
└── ui/                                      /* Generic UI elements. */
utils/                                       /* Various utility functions and data. */
```

Exploring the pages on the web and looking around the files should be enough for you to start contributing.
