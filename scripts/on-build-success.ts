import { copyFile } from 'node:fs/promises';
import { rootDir } from './utils.js';

const srcAssetsDir = new URL('src/lib/assets/', rootDir);
const apiAssetsDir = new URL('api/lib/assets/', rootDir);

await copyFile(new URL('flavorText.json', srcAssetsDir), new URL('flavorText.json', apiAssetsDir));
await copyFile(new URL('formats.json', srcAssetsDir), new URL('formats.json', apiAssetsDir));
