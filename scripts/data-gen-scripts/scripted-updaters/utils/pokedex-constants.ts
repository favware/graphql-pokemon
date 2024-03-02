export const pokedexPrependContent = [
  "import type { PokemonTypes } from '#assets/pokemon-source';",
  "import { Pokedex } from '#dexdata/pokedex';",
  "import { TypesEnum } from '#utils/pokemonTypes';",
  '',
  'const entries: [string, PokemonTypes.DexEntry][] = '
].join('\n');

export const pokedexAppendContent = [
  ';', //
  '',
  'for (const [key, value] of entries) {',
  '\tvalue.key = key;',
  '',
  '\tPokedex.set(key, value);',
  '}',
  ''
].join('\n');
