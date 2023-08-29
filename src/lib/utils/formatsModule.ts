import { readFile } from 'node:fs/promises';

const pathToFile = new URL('../assets/formats.json', import.meta.url);
const file = await readFile(pathToFile, { encoding: 'utf-8' });

export const formatsModule: Record<string, string> = JSON.parse(file) as Record<string, string>;
