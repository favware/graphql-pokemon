import { pokedex } from '#assets/pokedex.js';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { access, appendFile, writeFile } from 'node:fs/promises';

const bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/w/index.php?title=';
const bulbapediaBaseUrlPostfix = '_(Pok%C3%A9mon)&action=edit';

function parseSpeciesForBulbapedia(pokemonData: PokemonTypes.DexEntry) {
  if (pokemonData.specialBulbapediaUrl) {
    return bulbapediaBaseUrlPrefix + pokemonData.specialBulbapediaUrl + bulbapediaBaseUrlPostfix;
  }

  if (pokemonData.baseSpecies) {
    return bulbapediaBaseUrlPrefix + pokemonData.baseSpecies + bulbapediaBaseUrlPostfix;
  }

  return bulbapediaBaseUrlPrefix + pokemonData.species + bulbapediaBaseUrlPostfix;
}

export async function ensureLogfileExists(logFile: URL | string) {
  await access(logFile) //
    .then(() => writeFile(logFile, ''))
    .catch(() => appendFile(logFile, ''));
}

export function getBulbapediaReadyPokemon() {
  const parsedPokemon: ParsedPokemon[] = [];

  for (const dexEntry of pokedex.values()) {
    if (dexEntry.num >= 1) {
      parsedPokemon.push({
        number: dexEntry.num,
        species: dexEntry.species,
        flavorTextUrl: new URL(parseSpeciesForBulbapedia(dexEntry)),
        forme: dexEntry.forme?.toLowerCase()
      });
    }
  }

  return parsedPokemon;
}

export interface ParsedPokemon {
  number: number;
  species: string;
  flavorTextUrl: URL;
  forme?: string;
}
