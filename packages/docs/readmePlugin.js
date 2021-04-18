/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { Slugger } = require("marked");
const fse = require("fs-extra");

function loadContent() {
  const readme = fse.readFileSync(
    path.join(__dirname, "..", "..", "README.md"),
    "utf-8"
  );
  return { readme };
}

function contentLoaded({ readme }) {
  const slugger = new Slugger();
  const sluggify = (name) => slugger.slug(name, { dryrun: true });
  const h2Regexp = /^##\s+/;
  const [_, ...pages] = readme.split(/\n/).reduce(
    (acc, line) => {
      if (h2Regexp.test(line)) {
        acc.push([]);
      }

      acc[acc.length - 1].push(line);
      return acc;
    },
    [[]]
  );
  pages.forEach((lines, index) => {
    const [firstLine, ...content] = lines;
    const title = firstLine.replace(h2Regexp, "");

    fse.outputFileSync(
      path.join(__dirname, "docs", `${sluggify(title)}.md`),
      [
        "---",
        `title: ${title}`,
        ...(index === 0 ? ["slug: /"] : []),
        "---",
        "",
        "<!--",
        "This file was automatically generated from the README.md.",
        "Do not edit it but make your changes to the README.md instead and run the command:",
        "yarn --cwd ./packages/scripts generateDocs",
        "-->",
      ]
        .concat(content)
        .join("\n")
    );
  });
}

module.exports = function plugin() {
  return {
    name: "docusaurus-readme-plugin",
    loadContent: () => loadContent(),
    contentLoaded: ({ content }) => contentLoaded(content),
    extendCli: (cli) => {
      cli
        .command("docs:generate:readme")
        .description("Generate the documentation from the project's readme")
        .action(() => {
          contentLoaded(loadContent());
        });
    },
  };
};
