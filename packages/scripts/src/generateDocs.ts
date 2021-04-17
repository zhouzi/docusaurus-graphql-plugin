import path from "path";
import fs from "fs";
import { Slugger } from "marked";

// TODO: this script could be turned into a docusaurus plugin

const slugger = new Slugger();
const sluggify = (name: string) => slugger.slug(name, { dryrun: true });
const readme = fs.readFileSync(
  path.join(__dirname, "..", "..", "..", "README.md"),
  "utf-8"
);
const [_, ...pages] = readme.split(/\n/).reduce<Array<string[]>>(
  (acc, line) => {
    if (line.startsWith("## ")) {
      acc.push([]);
    }

    acc[acc.length - 1].push(line);
    return acc;
  },
  [[]]
);
pages.forEach((lines, index) => {
  const [firstLine, ...content] = lines;
  const title = firstLine.replace(/^##\s+/, "");

  fs.writeFileSync(
    path.join(__dirname, "..", "..", "docs", "docs", `${sluggify(title)}.md`),
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
