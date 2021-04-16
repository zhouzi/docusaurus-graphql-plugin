/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "docusaurus-plugin-content-graphql",
  tagline:
    "Docusaurus plugin generating Markdown documentation from a GraphQL schema.",
  url: "https://gabinaureche.com/docusaurus-plugin-content-graphql",
  baseUrl: "/docusaurus-plugin-content-graphql/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zhouzi",
  projectName: "docusaurus-plugin-content-graphql",
  themeConfig: {
    navbar: {
      title: "docusaurus-plugin-content-graphql",
      logo: {
        alt: "docusaurus-plugin-content-graphql",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/zhouzi/docusaurus-plugin-content-graphql",
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
            "https://github.com/zhouzi/docusaurus-plugin-content-graphql/edit/main/packages/docs/",
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-content-graphql",
      {
        schema: "github.graphql",
        routeBasePath: "/github-example",
      },
    ],
  ],
};
