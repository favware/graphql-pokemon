import { rm } from 'node:fs/promises';

const generatedDir = new URL('../generated/', import.meta.url);
const apiDir = new URL('api/', generatedDir);
const tsDir = new URL('ts/', generatedDir);

const options = { force: true, recursive: true };

await Promise.all([
  rm(apiDir, options), //
  rm(tsDir, options) //
]);
