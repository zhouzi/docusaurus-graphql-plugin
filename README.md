# docusaurus-graphql-plugin

Docusaurus plugin generating Markdown documentation from a GraphQL schema.

## Motivation

Documentation is at the heart of GraphQL. Its core features makes up for great self documented APIs.
From a consumer's perspective, it usually comes in the form of types, clear expectations and precise error messages.
The standards also make it easy to build playgrounds, which come with many implementations.
The typical playground offers a way to browse the API and learn more about its queries and mutations.

But while playgrounds are a great way to play around with an API, they are not necessarily the best first-time experience.
This is especially true for GraphQL which may look a bit alien compared to the traditional, popular and mature REST approach.
So a playground alone might not be enough, especially for public APIs targeted to teams with varying backgrounds and technologies.

This is the gap that this plugin tries to fill.
Its goal is to generate documentation that is easy to browse and share with minimum prior experience.
To reach this goal, it takes most of its ideas from [GitHub's GraphQL API documentation](https://docs.github.com/en/graphql).

## Usage

### Installation

1. In an existing Docusaurus project, install the plugin:

```
yarn add docusaurus-graphql-plugin
```

2. Add the plugin to your `docusaurus.config.js` file:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-graphql-plugin",
      {
        // can be a path, a glob or an URL
        schema: "schema.graphql",
      },
    ],
  ],
};
```

3. Run the command `npx docusaurus docs:generate:graphql`

4. The command will have generated files that you can now add to your `sidebars.js`:

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

5. You can now run `yarn start` to serve your documentation

### Options

#### `id`

This option is common to docusaurus plugins and can be used to differentiate multiple instance of the plugin.
For example:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-graphql-plugin",
      {
        id: "first-api",
        schema: "first-api.graphql",
        // it's important that routeBasePath has a different
        // value for each instance of the plugin
        routeBasePath: "/docs/first-api",
      },
    ],
    [
      "docusaurus-graphql-plugin",
      {
        id: "second-api",
        schema: "second-api.graphql",
        // it's important that routeBasePath has a different
        // value for each instance of the plugin
        routeBasePath: "/docs/second-api",
      },
    ],
  ],
};
```

With the configuration above you would end up with two different commands:

- `docs:generate:graphql:first-api`
- `docs:generate:graphql:second-api`

#### `schema`

Can be a path, a glob or an URL used to load your GraphQL schema.

#### `routeBasePath`

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
      "docusaurus-graphql-plugin",
      {
        schema: "schema.graphql",

        // routeBasePath defaults to `/docs/api/` which will not work if docs are server over `/`
        routeBasePath: "/api/",
      },
    ],
  ],
};
```
