# read-from-fs

Utilities to read files from the file system 🗃

## Installation ∙ [![npm](https://img.shields.io/npm/v/read-from-fs?color=blue&style=flat-square)](https://www.npmjs.com/package/read-from-fs)

```console
# npm
npm install read-from-fs

# yarn
yarn add read-from-fs

# pnpm
pnpm add read-from-fs
```

## Usage

```ts
// schemas/index
import { readFromSyncGenerator } from "read-from-fs";

const readFromHere = readFromSyncGenerator(__dirname);

export const myFirstSchema = readFromHere("schema.graphql");
export const my2Schema = readFromHere("2.graphql");
export const my3Schema = readFromHere("3.graphql");
```

By default it read the file as `utf-8` but you can change that by

```ts
export const my3Schema = readFromHere("3.graphql", "ascii");
```

## TODO

Add TSDocs with usage examples in the code. Check [#1](https://github.com/UltiRequiem/read-from-fs/issues/1).

## Docs

Check the API on 👇

https://read-from-fs.js.org

## License

Licensed under the MIT License.
