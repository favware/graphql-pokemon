import { rm } from 'node:fs/promises';

const rootDir = new URL('../', import.meta.url);
const codegenDir = new URL('codegen/', rootDir);
const distDir = new URL('dist/', rootDir);
const apiDir = new URL('api/', rootDir);

const swcCacheDir = new URL('.swc/', rootDir);

const options = { force: true, recursive: true };

await Promise.all([
  rm(swcCacheDir, options), //
  rm(codegenDir, options), //
  rm(distDir, options), //
  rm(apiDir, options) //
]);
