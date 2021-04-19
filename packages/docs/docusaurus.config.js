/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "docusaurus-graphql-plugin",
  tagline:
    "Docusaurus plugin generating Markdown documentation from a GraphQL schema.",
  url: "https://gabinaureche.com/docusaurus-graphql-plugin",
  baseUrl: "/docusaurus-graphql-plugin/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zhouzi",
  projectName: "docusaurus-graphql-plugin",
  themeConfig: {
    navbar: {
      title: "docusaurus-graphql-plugin",
      logo: {
        alt: "docusaurus-graphql-plugin",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/zhouzi/docusaurus-graphql-plugin",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/zhouzi/docusaurus-graphql-plugin/edit/main/packages/docs/",
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-graphql-plugin/cli",
      {
        schema: "github.graphql",
        routeBasePath: "/github-example",
      },
    ],
    path.join(__dirname, "readmePlugin"),
  ],
};
