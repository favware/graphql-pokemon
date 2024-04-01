import { pokedex } from '#assets/pokedex.js';
import { each } from 'async';
import * as cheerio from 'cheerio';
import { green, yellow } from 'colorette';
import { writeFile } from 'node:fs/promises';
import { inspectData, replaceEnumLikeValues, writeDataToFileAndPrettify } from '../../../utils.js';
import { ensureLogfileExists, getBulbapediaReadyPokemon, type ParsedPokemon } from '../utils/bulbapedia-utils.js';
import { fetchFlareSolverr } from '../utils/flaresolverr-session-management.js';
import { classificationsUrl, generations, logFile, type SucceededPokemon } from './constants.js';
import { log } from './log-wrapper.js';
import { getModulePathForGeneration, getPokemonGenerationForDexNumber } from './utils.js';

const failedPokemon: ParsedPokemon[] = [];
const succeededPokemon: SucceededPokemon[] = [];

const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);

await ensureLogfileExists(logFile);

const response = await fetchFlareSolverr(classificationsUrl);
// const response = await fetch(
//   classificationsUrl,
//   {
//     method: FetchMethods.Get,
//     headers: {
//       ...userAgentHeader,
//       'Content-Type': FetchMediaContentTypes.JSON
//     }
//   },
//   FetchResultTypes.Text
// );

await log({ msg: `Fetched data`, color: yellow, isBold: false, isIndent: true });

const $ = cheerio.load(response.solution.response);
// const $ = cheerio.load(response);
await log({ msg: `Loaded text into cheerio`, color: yellow, isBold: false, isIndent: true });

const text = $('#wpTextbox1').text();
await log({ msg: `Loaded text element`, color: yellow, isBold: false, isIndent: true });

await each(getBulbapediaReadyPokemon(), async (pokemon) => {
  const paddedNumber = pokemon.number.toString().padStart(4, '0');

  await log({ msg: `${pokemon.species} (${paddedNumber}) - Started processing`, color: yellow, isBold: false, isIndent: true, bypassCiCheck: true });

  const regex = pokemon.forme
    ? new RegExp(`{{ArtP\\|${paddedNumber}\\|[^}}]+\\|form=-${pokemon.forme}}} \\|\\|(?<content>[^]*?)\\n`, 'i')
    : new RegExp(`{{ArtP\\|${paddedNumber}\\|.+}} \\|\\|(?<content>[^]*?)\\n`);
  const match = regex.exec(text);
  const regexForTranslateBlock = /\{\{tt\|([^|]+)\|[^}]+\}\}/;

  const useHigherIndexFromTable = pokemon.forme || pokemon.number === 720 || pokemon.number === 964 || pokemon.number === 999;

  const classification = match?.groups?.content
    .trim()
    .split('||')
    .at(useHigherIndexFromTable ? 1 : 0)
    ?.trim()
    .replace(regexForTranslateBlock, '$1');

  if (classification) {
    succeededPokemon.push({
      num: pokemon.number,
      forme: pokemon.forme,
      species: pokemon.species,
      generation: getPokemonGenerationForDexNumber(pokemon.number),
      classification
    });
  } else {
    failedPokemon.push(pokemon);
  }
});

await log({ msg: 'Done storing data in memory, formatting and writing to disk', color: green, isBold: true, isIndent: false });

for (const pokemon of succeededPokemon) {
  const pokemonFromData = pokemon.forme
    ? pokedex.find((pokemonData) => pokemonData.num === pokemon.num && pokemonData.forme?.toLowerCase() === pokemon.forme.toLowerCase())
    : pokedex.find((pokemonData) => pokemonData.num === pokemon.num);

  pokemonFromData.classification = pokemon.classification;
}

const prependContent = [
  "import type { PokemonTypes } from '#assets/pokemon-source';",
  "import { Pokedex } from '#dexdata/pokedex';",
  "import { TypesEnum } from '#utils/pokemonTypes';",
  '',
  'const entries: [string, PokemonTypes.DexEntry][] = '
].join('\n');

const appendContent = [
  ';', //
  '',
  'for (const [key, value] of entries) {',
  '\tvalue.key = key;',
  '',
  '\tPokedex.set(key, value);',
  '}',
  ''
].join('\n');

for (const generation of generations) {
  const mapForGeneration = pokedex.filter((poke) => getPokemonGenerationForDexNumber(poke.num) === generation);

  for (const poke of mapForGeneration.values()) {
    delete poke.key;
  }

  const content = replaceEnumLikeValues(inspectData([...mapForGeneration.entries()]));

  await writeDataToFileAndPrettify(prependContent + content + appendContent, getModulePathForGeneration(generation));
}

await log({ msg: 'Done writing to disk', color: green, isBold: true, isIndent: false });

await writeFile(failedPokemonTextFile, JSON.stringify(failedPokemon, null, 4), { encoding: 'utf-8' });
