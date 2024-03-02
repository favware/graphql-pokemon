import { pokedex } from '#assets/pokedex.js';
import type { PokemonTypes } from '#assets/pokemon-source';
import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { yellow } from 'colorette';
import { toLowerSingleWordCase } from '../../../../src/lib/utils/utils';
import { MegaSpriteRegex, baseUrl } from './constants';
import { log } from './log-wrapper';

export async function getCryUrl(pokemon: PokemonTypes.DexEntry, recursivePokemon?: PokemonTypes.DexEntry) {
  const logPrefix = `${pokemon.species} (${pokemon.num}${pokemon.forme ?? ''}) - `;

  await log({ msg: `${logPrefix}Started processing`, color: yellow, isBold: false, isIndent: true, bypassCiCheck: true });

  let nameToUse = pokemon.baseSpecies ? pokemon.species : toLowerSingleWordCase(pokemon.species);

  if (nameToUse.match(MegaSpriteRegex)) {
    nameToUse = nameToUse.replace(MegaSpriteRegex, '$1$2');
  }

  const urlToFetch = `${baseUrl}/${nameToUse}.mp3` as const;
  await log({ msg: `${logPrefix}Fetching URL ${urlToFetch}`, color: yellow, isBold: false, isIndent: true });

  try {
    const result = await fetch(urlToFetch, FetchResultTypes.Result);
    if (result.status === 200) {
      if (recursivePokemon) {
        recursivePokemon.cry = urlToFetch;
        await log({ msg: `${logPrefix}Set cry on the recursive object`, color: yellow, isBold: false, isIndent: true });
      } else {
        pokemon.cry = urlToFetch;
        await log({ msg: `${logPrefix}Set cry on the map object`, color: yellow, isBold: false, isIndent: true });
      }
    }
  } catch {
    if (pokemon.baseSpecies) {
      const baseSpecies = pokedex.get(pokemon.baseSpecies);
      if (baseSpecies) {
        await getCryUrl(baseSpecies, pokemon);
      }
    }
  }
}
