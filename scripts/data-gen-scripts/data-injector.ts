import { readFile } from 'node:fs/promises';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { entries } from '../../src/lib/assets/pokedex-data/gen9.js';
import { sortObjectByKey } from '../utils.js';
import { dataToClipboard } from './data-to-clipboard.js';

const pathToFile = new URL('sample.json', import.meta.url);
const file = await readFile(pathToFile, { encoding: 'utf8' });
const partialBulbaData: Record<string, string>[] = JSON.parse(file);

function findPokemon(pokemon: string) {
	return partialBulbaData.find((entry) => entry.species === pokemon);
}

const newMap = new Map();

// oxlint-disable-next-line prefer-const
for (let [species, data] of entries.values()) {
	Reflect.deleteProperty(data, 'key');

	const pokemon = findPokemon(species);

	if (pokemon) {
		data.genderRatio = pokemon.genderRatio;
		data.evYields = {} as any;
		data.isEggObtainable = pokemon.isEggObtainable;
		data.catchRate = pokemon.catchRate;
		data.levellingRate = pokemon.levellingRate as any;
		data.minimumHatchTime = pokemon.minimumHatchTime;
	}

	data = sortObjectByKey(data);

	newMap.set(species, data);
}

dataToClipboard([...newMap.entries()]);
