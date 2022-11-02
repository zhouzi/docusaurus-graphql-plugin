# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 0.8.0 - 2022-06-05

### Fixed

- Add warning for Subscription instead of failing silently
- Do not create a file for an object type that doesn't have matches (e.g `subscriptions.md` if there are no subscriptions)

## 0.7.0 - 2022-05-12

### Fixed

- Fix graphql peer dependency incompatibility
- Upgrade graphql and graphql-tools

## 0.6.1 - 2021-08-27

### Fixed

- Fix deprecation reason being visually merged with description.

## 0.6.0 - 2021-08-27

### Added

- Add missing deprecation reason for queries, mutations and enum values.

## 0.5.0 - 2021-06-19

### Added

- Add `sidebar_position` frontmatter field to the generated files.
- Add `sidebar` option to generate a `_category_.json` file.

## 0.4.0 - 2021-04-25

### Removed

- Remove the runtime part of the plugin to only keep the cli.

### Fixed

- Fix support for multiple instances of the plugin.
- Add interfaces to the interfaces' "implemented by" list.

## 0.3.0 - 2021-04-18

### Added

- Add the `docs:generate:graphql` command to generate the documentation.

### Changed

- Flatten the package structure and exclude tests.

## 0.2.0 - 2021-04-18

### Fixed

- Add the README to the published package.

## 0.1.0 - 2021-04-18

### Added

- Add a "implemented by" block on the interface documentation.

### Changed

- Merge the name and type column together.
- Decrease the margin between tables/lists and their title.

### Fixed

- Fix folder structure when generating files for docs-only.
