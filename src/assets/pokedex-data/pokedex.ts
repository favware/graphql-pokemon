import { GraphQLCollection } from '#utils/GraphQLCollection';
import type { PokemonTypes } from '#utils/pokemon';

/** The entire PokéDex of Pokémon */
export const Pokedex = new GraphQLCollection<string, PokemonTypes.DexEntry>();
