import { Collection } from '@discordjs/collection';
import type { PokemonTypes } from '#assets/pokemon-source';

/** The entire PokéDex of Pokémon */
export const Pokedex = new Collection<string, PokemonTypes.DexEntry>();
