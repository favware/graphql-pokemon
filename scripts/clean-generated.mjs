import { rm } from 'node:fs/promises';

const tsDir = new URL('../generated/ts/', import.meta.url);

const options = { force: true, recursive: true };

await Promise.all([
  rm(tsDir, options) //
]);
