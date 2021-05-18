import GraphQLCollection from '#utils/GraphQLCollection';
import type { Pokemon } from '#utils/pokemon';

/** The entire PokéDex of Pokémon */
export const Pokedex = new GraphQLCollection<string, Pokemon.DexEntry>();
