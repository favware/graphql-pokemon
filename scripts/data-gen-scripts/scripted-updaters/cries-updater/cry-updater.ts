import { pokedex } from '#assets/pokedex.js';
import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { eachLimit } from 'async';
import { green, yellow } from 'colorette';
import { toLowerSingleWordCase } from '../../../../src/lib/utils/utils';
import { inspectData, replaceEnumLikeValues, writeDataToFileAndPrettify } from '../../../utils';
import { generations } from '../classification-updater/constants';
import { getModulePathForGeneration, getPokemonGenerationForDexNumber } from '../classification-updater/utils';
import { pokedexAppendContent, pokedexPrependContent } from '../utils/pokedex-constants';
import { MegaSpriteRegex, baseUrl } from './constants';
import { log } from './log-wrapper';

await eachLimit(pokedex.values(), 10, async (pokemon) => {
  const logPrefix = `${pokemon.species} (${pokemon.num}${pokemon.forme ?? ''}) - `;

  await log({ msg: `${logPrefix}Started processing`, color: yellow, isBold: false, isIndent: true, bypassCiCheck: true });

  let nameToUse = pokemon.baseSpecies ? pokemon.species : toLowerSingleWordCase(pokemon.species);

  if (nameToUse.match(MegaSpriteRegex)) {
    nameToUse = nameToUse.replace(MegaSpriteRegex, '$1$2');
  }

  const urlToFetch = `${baseUrl}/${nameToUse}.mp3` as const;
  await log({ msg: `${logPrefix}Fetching URL ${urlToFetch}`, color: yellow, isBold: false, isIndent: true });

  const mapEntry = pokedex.get(pokemon.key);
  try {
    const result = await fetch(urlToFetch, FetchResultTypes.Result);
    if (result.status === 200) {
      mapEntry.cry = urlToFetch;
      await log({ msg: `${logPrefix}Set cry on the map object`, color: yellow, isBold: false, isIndent: true });
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

await log({ msg: 'Done writing to disk', color: green, isBold: true, isIndent: false });
process.exit(0);
