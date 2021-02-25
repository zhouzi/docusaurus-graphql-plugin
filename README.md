# docusaurus-plugin-content-graphql

Docusaurus plugin generating Markdown documentation from a GraphQL schema.

## Usage

1. In an existing Docusaurus project, install the plugin:

```
yarn add --dev docusaurus-plugin-content-graphql
```

2. Add the plugin to your `docusaurus.config.js` file:

```js
module.exports = {
  // preceded by your existing configuration
  // ...
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

If you changed the docs plugin's `routeBasePath` then you need to pass it to this plugin as well. For example, if you opted for docs only:

```js
module.exports = {
  // preceded by your existing configuration
  // ...
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
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
        routeBasePath: "/",
      },
    ],
  ],
};
```
