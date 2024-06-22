import { pokedex } from '#assets/pokedex.js';
import { eachLimit } from 'async';
import { green } from 'colorette';
import { inspectData, replaceEnumLikeValues, writeDataToFileAndPrettify } from '../../../utils';
import { generations } from '../utils/constants';
import { pokedexAppendContent, pokedexPrependContent } from '../utils/pokedex-constants';
import { getModulePathForGeneration, getPokemonGenerationForDexNumber } from '../utils/utils';
import { getCryUrl } from './get-cry-url';
import { log } from './log-wrapper';

await eachLimit(pokedex.values(), 100, async (pokemon) => getCryUrl(pokemon));

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
