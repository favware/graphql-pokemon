import type { PokemonTypes } from '#assets/pokemon-source.js';
import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { blue, bold, green, red, yellow } from 'colorette';
import * as cheerio from 'https://cdn.skypack.dev/cheerio';
import { access, appendFile, writeFile } from 'node:fs/promises';
import { pokedex } from '../../../src/lib/assets/pokedex.js';
import { flavorsModule } from '../../../src/lib/utils/flavorsModule.js';
import { appendToLog } from './append-to-log.js';
import { logFile, type ParsedPokemon } from './constants.js';
import { getGen1GameSetsData } from './game-sets/gen1-game-sets.js';
import { getGen2GameSetsData } from './game-sets/gen2-game-sets.js';
import { getGen9GameSetsData } from './game-sets/gen9-game-sets.js';

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

for (const pokemon of parsedPokemon) {
  const groupLogMessage = `Parsing ${pokemon.species} (${pokemon.number}${pokemon.forme ?? ''})`;
  console.group(blue(groupLogMessage));
  await appendToLog(groupLogMessage, false);

  const formCheckMsg = 'Passed forme check';
  console.log(yellow(formCheckMsg));
  await appendToLog(formCheckMsg);

  const html = await fetch(pokemon.url, FetchResultTypes.Text);
  const fetchedDataMsg = 'Fetched data';
  console.log(yellow(fetchedDataMsg));
  await appendToLog(fetchedDataMsg);

  const $ = cheerio.load(html);
  const cheerioLoadedMsg = 'Loaded text into cheerio';
  console.log(yellow(cheerioLoadedMsg));
  await appendToLog(cheerioLoadedMsg);

  const text = $('#wpTextbox1').text();
  const textElementLoadedMsg = 'Loaded text element';
  console.log(yellow(textElementLoadedMsg));
  await appendToLog(textElementLoadedMsg);

  const results = (
    await Promise.all([
      getGen1GameSetsData(text, pokemon),
      getGen2GameSetsData(text, pokemon),
      getGen9GameSetsData(text, pokemon) //
    ])
  ).flat();

  if (results.some((value) => !value)) {
    failedPokemon.push({
      pokemon,
      text
    });
    const didnotStoreDataMsg = 'Did not store data for Pokemon';
    console.log(red(didnotStoreDataMsg));
    await appendToLog(didnotStoreDataMsg);
  }

  console.groupEnd();
}

const doneFetchingMsg = 'Done fetching and storing all data, writing to disk';
console.log(bold(green(doneFetchingMsg)));
await appendToLog(doneFetchingMsg, false);
await writeFile(pathToFlavorTextFile, JSON.stringify(flavorsModule, null, 4), { encoding: 'utf-8' });
const doneWritingToDiskMsg = 'Done writing to disk';
console.log(bold(green(doneWritingToDiskMsg)));
await appendToLog(doneWritingToDiskMsg, false);

await writeFile(failedPokemonTextFile, JSON.stringify(failedPokemon, null, 4), { encoding: 'utf-8' });
