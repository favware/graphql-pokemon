import { pokedex } from '#assets/pokedex.js';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { flavorsModule } from '#utils/flavorsModule';
import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { eachLimit } from 'async';
import { green, red, yellow } from 'colorette';
import * as cheerio from 'https://cdn.skypack.dev/cheerio';
import { access, appendFile, writeFile } from 'node:fs/promises';
import { format } from 'prettier';
import prettierConfig from '../../../.prettierrc.mjs';
import { log } from './append-to-log.js';
import { logFile, type ParsedPokemon } from './constants.js';
import { getGen1GameSetsData } from './game-sets/gen1-game-sets.js';
import { getGen2GameSetsData } from './game-sets/gen2-game-sets.js';
import { getGen3GameSetsData } from './game-sets/gen3-game-sets.js';
import { getGen4GameSetsData } from './game-sets/gen4-game-sets.js';
import { getGen5GameSetsData } from './game-sets/gen5-game-sets.js';
import { getGen6GameSetsData } from './game-sets/gen6-game-sets.js';
import { getGen7GameSetsData } from './game-sets/gen7-game-sets.js';
import { getGen8GameSetsData } from './game-sets/gen8-game-sets.js';
import { getGen9GameSetsData } from './game-sets/gen9-game-sets.js';
import { gameSorter } from './game-sorter.js';

const bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/w/index.php?title=';
const bulbapediaBaseUrlPostfix = '_(Pok%C3%A9mon)&action=edit';
const pathToFlavorTextFile = new URL('../../../src/lib/assets/flavorText.json', import.meta.url);
const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);

const failedPokemon = [];

await access(logFile) //
  .then(() => writeFile(logFile, ''))
  .catch(() => appendFile(logFile, ''));

function parseSpeciesForBulbapedia(pokemonData: PokemonTypes.DexEntry) {
  if (pokemonData.specialBulbapediaUrl) {
    return bulbapediaBaseUrlPrefix + pokemonData.specialBulbapediaUrl + bulbapediaBaseUrlPostfix;
  }

  if (pokemonData.baseSpecies) {
    return bulbapediaBaseUrlPrefix + pokemonData.baseSpecies + bulbapediaBaseUrlPostfix;
  }

  return bulbapediaBaseUrlPrefix + pokemonData.species + bulbapediaBaseUrlPostfix;
}

const parsedPokemon: ParsedPokemon[] = [];

for (const dexEntry of pokedex.values()) {
  if (dexEntry.num >= 1) {
    parsedPokemon.push({
      number: dexEntry.num,
      species: dexEntry.species,
      url: new URL(parseSpeciesForBulbapedia(dexEntry)),
      forme: dexEntry.forme?.toLowerCase()
    });
  }
}

await eachLimit(parsedPokemon, 10, async (pokemon) => {
  const logPrefix = `${pokemon.species} (${pokemon.number}${pokemon.forme ?? ''}) - `;

  const html = await fetch(pokemon.url, FetchResultTypes.Text);
  await log(`${logPrefix}Fetched data`, yellow, false, true);

  const $ = cheerio.load(html);
  await log(`${logPrefix}Loaded text into cheerio`, yellow, false, true);

  const text = $('#wpTextbox1').text();
  await log(`${logPrefix}Loaded text element`, yellow, false, true);

  const results = (
    await Promise.all([
      getGen1GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen2GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen3GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen4GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen5GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen6GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen7GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen8GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen9GameSetsData(text, pokemon, flavorsModule, logPrefix) //
    ])
  ).flat();

  if (results.every((value) => !value)) {
    failedPokemon.push({
      pokemon,
      text
    });
    await log(`${logPrefix}Did not store data for Pokemon`, red, false, true);
  }
});

await log("Done fetching and storing data in memory, sorting version_id's", green, true, false);

gameSorter(flavorsModule);

await log('Done sorting, Formatting and writing to disk', green, true, false);

const formatted = await format(JSON.stringify(flavorsModule, null, 4), { parser: 'json', ...prettierConfig });
await writeFile(pathToFlavorTextFile, formatted, { encoding: 'utf-8' });
await log('Done writing to disk', green, true, false);

await writeFile(failedPokemonTextFile, JSON.stringify(failedPokemon, null, 4), { encoding: 'utf-8' });
