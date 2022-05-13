import { rm } from 'node:fs/promises';

const rootDir = new URL('../', import.meta.url);
const generatedDir = new URL('generated/', rootDir);

const swcCacheDir = new URL('.swc/', rootDir);
const apiDir = new URL('api/', generatedDir);
const tsDir = new URL('ts/', generatedDir);

const options = { force: true, recursive: true };

await Promise.all([
  rm(swcCacheDir, options), //
  rm(apiDir, options), //
  rm(tsDir, options) //
]);
