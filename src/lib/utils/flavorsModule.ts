import type { PokemonTypes } from '#assets/pokemon-source';
import { readFile } from 'node:fs/promises';

const pathToFile = new URL('../assets/flavorText.json', import.meta.url);
const file = await readFile(pathToFile, { encoding: 'utf-8' });

export const flavorsModule: FlavorsModule = JSON.parse(file) as FlavorsModule;
export type FlavorsModule = Record<string, PokemonTypes.FlavorText[]>;
