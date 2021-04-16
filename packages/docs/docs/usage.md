---
title: Usage
---

1. In an existing Docusaurus project, install the plugin:

```
yarn add docusaurus-plugin-content-graphql
```

2. Add the plugin to your `docusaurus.config.js` file:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-content-graphql",
      {
        // can be a path, a glob or an URL
        schema: "schema.graphql",
      },
    ],
  ],
};
```

3. Start the application:

```
yarn start
```

4. The plugin will generate Markdown files in the `docs/api` folder. So you can now add these files to your `sidebars.js`:

```js
modules.exports = {
  docs: {
    API: [
      "api/queries",
      "api/mutations",
      "api/objects",
      "api/interfaces",
      "api/enums",
      "api/unions",
      "api/inputObjects",
      "api/scalars",
    ],
  },
};
```

## Options

### `schema`

Can be a path, a glob or an URL used to load your GraphQL schema.

### `routeBasePath`

**Defaults:** `/docs/api/`

This option is used for two things:

1. To generate reference links, such as the return type of a query being linked to its corresponding object.
2. To generate the path where the files will be written to disk.

So if you want the API docs to be served over `/docs/api-reference/` instead of `/docs/api/`, you can change this option to `/docs/api-reference/`. Note that you can also have more levels to the path, e.g `/docs/reference/api/`.

**You must change this option if you are using the docs plugin's `routeBasePath`.**
For example, if you opted for a docs only documentation, your configuration could look like this:

```js
module.exports = {
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // with the change below, docs are server over `/` instead of `/docs/`
          routeBasePath: "/",
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-content-graphql",
      {
        schema: "schema.graphql",

        // routeBasePath defaults to `/docs/api/` which will not work if docs are server over `/`
        routeBasePath: "/api/",
      },
    ],
  ],
};
```
