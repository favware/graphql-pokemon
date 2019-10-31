import { pokedex } from '../assets/pokedex';
import { Pokemon } from '../typings/pokemon';

/** Transforms a message to Sentence case */
export const sentencecase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/** Checks if the provided param is parseable as number */
export const idId = (speciesOrId: string | number): speciesOrId is number => {
  return !isNaN(Number(speciesOrId));
};

/** Gets a pokedex entry by either species or dex number */
export const getPokemonForSpeciesOrId = (speciesOrId: string | number): Pokemon.DexEntry | undefined => {
  if (idId(speciesOrId)) {
    return pokedex.find(poke => poke.num === speciesOrId);
  }

  if (speciesOrId.split(' ')[0] === 'mega') {
    speciesOrId = `${speciesOrId.substring(speciesOrId.split(' ')[0].length + 1)}-mega`;
  }

  return pokedex.get(speciesOrId);
};