import { pokedex } from '#assets/pokedex.js';
import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { eachLimit } from 'async';
import { bold, green } from 'colorette';
import { toLowerSingleWordCase } from '../../../../src/lib/utils/utils';
import { inspectData, replaceEnumLikeValues, writeDataToFileAndPrettify } from '../../../utils';
import { generations } from '../classification-updater/constants';
import { getModulePathForGeneration, getPokemonGenerationForDexNumber } from '../classification-updater/utils';
import { pokedexAppendContent, pokedexPrependContent } from '../utils/pokedex-constants';

const MegaSpriteRegex = /^(.+)-(x|y)$/g;
const baseUrl = 'https://play.pokemonshowdown.com/audio/cries' as const;

await eachLimit(pokedex.values(), 10, async (pokemon) => {
  let nameToUse = pokemon.baseSpecies ? pokemon.species : toLowerSingleWordCase(pokemon.species);

  if (nameToUse.match(MegaSpriteRegex)) {
    nameToUse = nameToUse.replace(MegaSpriteRegex, '$1$2');
  }

  const urlToFetch = `${baseUrl}/${nameToUse}.mp3` as const;

  const mapEntry = pokedex.get(pokemon.key);
  try {
    const result = await fetch(urlToFetch, FetchResultTypes.Result);
    if (result.status === 200) {
      mapEntry.cry = urlToFetch;
    }
  } catch {
    // Ignore entry
  }
});

for (const generation of generations) {
  const mapForGeneration = pokedex.filter((poke) => getPokemonGenerationForDexNumber(poke.num) === generation);

  for (const poke of mapForGeneration.values()) {
    delete poke.key;
  }

  const content = replaceEnumLikeValues(inspectData([...mapForGeneration.entries()]));

  await writeDataToFileAndPrettify(pokedexPrependContent + content + pokedexAppendContent, getModulePathForGeneration(generation));
}

console.log(bold(green('Done writing to disk')));
