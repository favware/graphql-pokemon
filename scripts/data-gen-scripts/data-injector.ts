import { execFile } from 'node:child_process';
import { inspect } from 'node:util';
import { entries } from '../../src/lib/assets/pokedex-data/gen9.js';
import { sortObjectByKey } from './map-data-key-sorter.js';
import partialBulbaData from '../gen9-data-gen/partialBulbaData.json' assert { type: 'json' };

function findPokemon(pokemon: string) {
  return partialBulbaData.find((entry) => entry.species === pokemon);
}

const newMap = new Map();

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

execFile('clippy', ['--copy']).stdin?.end(
  inspect([...newMap.entries()], {
    depth: Infinity,
    maxArrayLength: Infinity,
    showHidden: false
  })
);
