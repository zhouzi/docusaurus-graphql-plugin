/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const rootPath = path.join(__dirname, "..", "..", "..");
const buildPath = path.join(__dirname, "..", "build");

fs.copyFileSync(
  path.join(rootPath, "README.md"),
  path.join(buildPath, "README.md")
);
fs.copyFileSync(
  path.join(rootPath, "LICENSE"),
  path.join(buildPath, "LICENSE")
);

const {
  private,
  main,
  files,
  scripts,
  devDependencies,
  ...package
} = require("../package.json");
fs.writeFileSync(
  path.join(buildPath, "package.json"),
  JSON.stringify({ ...package, main: "index.js" }, null, 2)
);
