import { pokedex } from '#assets/pokedex.js';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { flavorsModule } from '#utils/flavorsModule';
import { green } from 'colorette';
import { access, appendFile, writeFile } from 'node:fs/promises';
import { format } from 'prettier';
import prettierConfig from '../../../.prettierrc.mjs';
import { log } from './append-to-log.js';
import { logFile, type ParsedPokemon } from './constants.js';
import { createFlaresolverrSession, destroyFlaresolverrSession } from './flaresolverr-session-management.js';
import { gameSorter } from './game-sorter.js';
import { getFailedPokemon, parsePokemon } from './parsers/parse-pokemon.js';

const bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/w/index.php?title=';
const bulbapediaBaseUrlPostfix = '_(Pok%C3%A9mon)&action=edit';
const pathToFlavorTextFile = new URL('../../../src/lib/assets/flavorText.json', import.meta.url);
const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);

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
  await createFlaresolverrSession();
  await parsePokemon(pokemon);
  await destroyFlaresolverrSession();
}

await log({ msg: "Done fetching and storing data in memory, sorting version_id's", color: green, isBold: true, isIndent: false });

gameSorter(flavorsModule);

await log({ msg: 'Done sorting, Formatting and writing to disk', color: green, isBold: true, isIndent: false });

const formatted = await format(JSON.stringify(flavorsModule, null, 4), { parser: 'json', ...prettierConfig });
await writeFile(pathToFlavorTextFile, formatted, { encoding: 'utf-8' });
await log({ msg: 'Done writing to disk', color: green, isBold: true, isIndent: false });

await writeFile(failedPokemonTextFile, JSON.stringify(getFailedPokemon(), null, 4), { encoding: 'utf-8' });
