import { pokedex } from '#assets/pokedex';
import { mapPokemonDataToPokemonGraphQL } from '#mappers/pokemonMapper';
import type { Pokemon } from '#types/graphql-mapped-types';
import type { NonNullish } from '#types/utility-types';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput } from '#utils/utils';
import { validateGetAllPokemonArgs, type GetAllPokemonArgs } from '#validations/pokemonArgs/getAllPokemonArgs';
import { validateGetFuzzyPokemonArgs, type GetFuzzyPokemonArgs } from '#validations/pokemonArgs/getFuzzyPokemonArgs';
import { validateGetPokemonArgs, type GetPokemonArgs } from '#validations/pokemonArgs/getPokemonArgs';
import { validateGetPokemonByDexNumberArgs, type GetPokemonByDexNumberArgs } from '#validations/pokemonArgs/getPokemonByDexNumberArgs';

export const fuzzySearch = new FuzzySearch(pokedex, ['num', 'species', 'aliases']);

/**
 * Gets details on a single Pokémon based on National Pokédex number
 *
 * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
 *
 * **Reversal is applied before pagination!**
 */
export function getPokemonByDexNumber(args: NonNullish<GetPokemonByDexNumberArgs>, requestedFields: GraphQLSet<keyof Pokemon>): Pokemon {
  args = validateGetPokemonByDexNumberArgs(args);

  const pokemonFromDataset = pokedex.find((pokemon) => pokemon.num === args.number);

  if (!pokemonFromDataset) {
    throw new Error(`No Pokémon found for ${args.number}`);
  }

  const graphqlObject = mapPokemonDataToPokemonGraphQL({
    data: pokemonFromDataset,
    requestedFields,
    offsetFlavorTexts: args.offsetFlavorTexts,
    reverseFlavorTexts: args.reverseFlavorTexts,
    takeFlavorTexts: args.takeFlavorTexts
  });

  if (!graphqlObject) {
    throw new Error(`Failed to get data for Pokémon: ${args.number}`);
  }

  return graphqlObject;
}

/**
 * Gets details on a single Pokémon based on species name
 *
 * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
 *
 * **Reversal is applied before pagination!**
 */
export function getPokemon(args: NonNullish<GetPokemonArgs>, requestedFields: GraphQLSet<keyof Pokemon>): Pokemon {
  args = validateGetPokemonArgs(args);

  const pokemonData = pokedex.get(args.pokemon);

  if (!pokemonData) {
    throw new Error(`No Pokémon found for ${args.pokemon}`);
  }

  const graphqlObject = mapPokemonDataToPokemonGraphQL({
    data: pokemonData,
    offsetFlavorTexts: args.offsetFlavorTexts,
    reverseFlavorTexts: args.reverseFlavorTexts,
    takeFlavorTexts: args.takeFlavorTexts,
    requestedFields
  });

  if (!graphqlObject) {
    throw new Error(`Failed to get data for Pokémon: ${args.pokemon}`);
  }

  return graphqlObject;
}

/**
 * Returns a list of all the known Pokémon.
 *
 * For every Pokémon all the data on each requested field is returned.
 *
 * **_NOTE:_ To skip all CAP Pokémon, PokéStar Pokémon, and Missingno provide an `offset` of 89**
 *
 * You can provide `take` to limit the amount of Pokémon to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
 *
 * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
 *
 * While the API will currently not rate limit the usage of this query, it may do so in the future.
 *
 * It is advisable to cache responses of this query.
 */
export function getAllPokemon(args: NonNullish<GetAllPokemonArgs>, requestedFields: GraphQLSet<keyof Pokemon>): Pokemon[] {
  args = validateGetAllPokemonArgs(args);

  const clonedPokedex = pokedex.clone();

  if (args.reverse) {
    clonedPokedex.reverse();
  }

  const pokemonValues = [...clonedPokedex.values()].slice(args.offset, args.offset + args.take);

  const graphqlObjects: Pokemon[] = [];

  for (const pokemonData of pokemonValues) {
    graphqlObjects.push(
      mapPokemonDataToPokemonGraphQL({
        data: pokemonData,
        requestedFields,
        offsetFlavorTexts: 0,
        reverseFlavorTexts: true,
        takeFlavorTexts: 1
      })
    );
  }

  if (!graphqlObjects.length) {
    throw new Error('Failed to get data for Pokémon');
  }

  return graphqlObjects;
}

/**
 * Gets details on one or more Pokémon based on species name
 *
 * You can provide `take` to limit the amount of Pokémon to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
 *
 * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
 *
 * **Reversal is applied before pagination!**
 */
export function getFuzzyPokemon(args: NonNullish<GetFuzzyPokemonArgs>, requestedFields: GraphQLSet<keyof Pokemon>): Pokemon[] {
  args = validateGetFuzzyPokemonArgs(args);

  args.pokemon = parseFormeIdentifiers(preParseInput(args.pokemon));

  let fuzzyEntries = fuzzySearch.runFuzzy(args.pokemon);

  if (!fuzzyEntries.length) {
    throw new Error(`No Pokémon found for ${args.pokemon}`);
  }

  if (args.reverse) {
    fuzzyEntries.reverse();
  }

  fuzzyEntries = fuzzyEntries.slice(args.offset, args.offset + args.take);

  const graphqlObjects: Pokemon[] = [];

  for (const pokemonData of fuzzyEntries) {
    graphqlObjects.push(
      mapPokemonDataToPokemonGraphQL({
        data: pokemonData,
        requestedFields,
        offsetFlavorTexts: args.offsetFlavorTexts,
        reverseFlavorTexts: args.reverseFlavorTexts,
        takeFlavorTexts: args.takeFlavorTexts
      })
    );
  }

  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for Pokémon: ${args.pokemon}`);
  }

  return graphqlObjects;
}

/**
 * Parses a Pokémon-like string to have the different form identifiers in their proper places
 * @param pokemon The Pokémon-like string to parse
 * @example
 * ```ts
 * // Given
 * 'mega venusaur'
 * // Transforms into
 * 'venusaur-mega'
 * ```
 * @example
 * ```ts
 * // Given
 * 'gmax charizard'
 * // Transforms into
 * 'charizard-gmax'
 * ```
 * @example
 * ```ts
 * // Given
 * 'gigantamax charizard'
 * // Transforms into
 * 'charizard-gmax'
 * ```
 * @example
 * ```ts
 * // Given
 * 'alolan raichu'
 * // Transforms into
 * 'raichu-alola'
 * ```
 * @example
 * ```ts
 * // Given
 * 'alola raichu'
 * // Transforms into
 * 'raichu-alola'
 * ```
 * @example
 * ```ts
 * // Given
 * 'galar slowbro'
 * // Transforms into
 * 'slowbro-galar'
 * ```
 * @example
 * ```ts
 * // Given
 * 'galarian slowbro'
 * // Transforms into
 * 'slowbro-galar'
 * ```
 * @example
 * ```ts
 * // Given
 * 'paldean tauros'
 * // Transforms into
 * 'tauros-paldea'
 * ```
 */
function parseFormeIdentifiers(pokemon: string) {
  switch (pokemon.split(' ')[0]) {
    case 'mega':
      pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-mega`;
      break;
    case 'gigantamax':
    case 'gmax':
      pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-gmax`;
      break;
    case 'alola':
    case 'alolan':
      pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-alola`;
      break;
    case 'galar':
    case 'galarian':
      pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-galar`;
      break;
    case 'paldea':
    case 'paldean':
      pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-paldea`;
      break;
    default:
      break;
  }

  if (pokemon.startsWith('mega')) {
    pokemon = `${pokemon.substring(4, pokemon.length)}mega`;
  }

  if (pokemon.startsWith('gigantamax')) {
    pokemon = `${pokemon.substring(10, pokemon.length)}gmax`;
  } else if (pokemon.startsWith('gmax')) {
    pokemon = `${pokemon.substring(4, pokemon.length)}gmax`;
  }

  if (pokemon.startsWith('alolan')) {
    pokemon = `${pokemon.substring(6, pokemon.length)}alola`;
  } else if (pokemon.startsWith('alola')) {
    pokemon = `${pokemon.substring(5, pokemon.length)}alola`;
  }

  if (pokemon.startsWith('galarian')) {
    pokemon = `${pokemon.substring(8, pokemon.length)}galar`;
  } else if (pokemon.startsWith('galar')) {
    pokemon = `${pokemon.substring(5, pokemon.length)}galar`;
  }

  if (pokemon.startsWith('paldean')) {
    pokemon = `${pokemon.substring(7, pokemon.length)}paldea`;
  } else if (pokemon.startsWith('paldea')) {
    pokemon = `${pokemon.substring(6, pokemon.length)}paldea`;
  }

  return pokemon;
}
