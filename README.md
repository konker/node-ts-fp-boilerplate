# @konker.dev/node-ts-fp-boilerplate

A boilerplate for a [Node.js](https://nodejs.org/) project based on [Effect-TS](https://www.effect.website/)

[![jest tested](https://github.com/konker/node-ts-fp-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/konker/node-ts-fp-boilerplate/actions/workflows/ci.yml)
![GitHub](https://img.shields.io/github/license/konker/node-ts-fp-boilerplate)

## Usage

Copy the contents of this repo, and:

- Search and replace files for `YOUR_SRC_DIR_COULD_BE_DOT` and substitute for the desired source directory
- Edit package.json `staticFiles` property as needed
- Run `pnpm install`
- Run: `pnpm dlx husky-init && pnpm install`
- Replace this with your actual README.md
- Replace ISC.LICENSE as needed
- Amend .github/workflows/cd.yml as needed

## For An Existing Project

- Copy the following. merging as necessary:
  - .editorconfig
  - .eslintignore
  - .eslintrc.json
  - .madgerc
  - .nvmrc
  - .prettierignore
  - .prettierrc
  - gulpfile.mjs
  - jest.config.ts
    - Replaces jest.config.js if applicable
  - tsconfig.json
- Search and replace for `YOUR_SRC_DIR_COULD_BE_DOT`
- Merge .gitignore
- Copy over dev dependencies not already present
- Copy over dependencies not already present
- LICENSE
