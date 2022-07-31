import { copyFile } from 'node:fs/promises';

const srcAssetsDir = new URL('../src/lib/assets/', import.meta.url);
const apiAssetsDir = new URL('../api/lib/assets/', import.meta.url);

await copyFile(new URL('flavorText.json', srcAssetsDir), new URL('flavorText.json', apiAssetsDir));
await copyFile(new URL('formats.json', srcAssetsDir), new URL('formats.json', apiAssetsDir));
