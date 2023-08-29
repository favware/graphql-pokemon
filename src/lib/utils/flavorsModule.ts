import type { PokemonTypes } from '#assets/pokemon-source.d.ts';
import { readFile } from 'node:fs/promises';

const pathToFile = new URL('../assets/flavorText.json', import.meta.url);
const file = await readFile(pathToFile, { encoding: 'utf-8' });

export const flavorsModule: Record<string, PokemonTypes.FlavorText[]> = JSON.parse(file) as Record<string, PokemonTypes.FlavorText[]>;
