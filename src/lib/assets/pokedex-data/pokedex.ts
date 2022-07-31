import type { PokemonTypes } from '#assets/pokemon-source';
import { Collection } from '@discordjs/collection';

/** The entire PokéDex of Pokémon */
export const Pokedex = new Collection<string, PokemonTypes.DexEntry>();
