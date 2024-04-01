import { flavorsModule } from '#utils/flavorsModule';
import * as cheerio from 'cheerio';
import { red, yellow } from 'colorette';
import type { ParsedPokemon } from '../../utils/bulbapedia-utils.js';
import { fetchFlareSolverr } from '../../utils/flaresolverr-session-management.js';
import { getGen1GameSetsData } from '../game-sets/gen1-game-sets.js';
import { getGen2GameSetsData } from '../game-sets/gen2-game-sets.js';
import { getGen3GameSetsData } from '../game-sets/gen3-game-sets.js';
import { getGen4GameSetsData } from '../game-sets/gen4-game-sets.js';
import { getGen5GameSetsData } from '../game-sets/gen5-game-sets.js';
import { getGen6GameSetsData } from '../game-sets/gen6-game-sets.js';
import { getGen7GameSetsData } from '../game-sets/gen7-game-sets.js';
import { getGen8GameSetsData } from '../game-sets/gen8-game-sets.js';
import { getGen9GameSetsData } from '../game-sets/gen9-game-sets.js';
import { log } from '../log-wrapper.js';

const failedPokemon = [];

export async function parsePokemon(pokemon: ParsedPokemon) {
  const logPrefix = `${pokemon.species} (${pokemon.number}${pokemon.forme ?? ''}) - `;

  await log({ msg: `${logPrefix}Started processing`, color: yellow, isBold: false, isIndent: true, bypassCiCheck: true });

  const response = await fetchFlareSolverr(pokemon.flavorTextUrl);
  // const response = await fetch(
  //   pokemon.flavorTextUrl,
  //   {
  //     method: FetchMethods.Get,
  //     headers: {
  //       ...userAgentHeader,
  //       'Content-Type': FetchMediaContentTypes.JSON
  //     }
  //   },
  //   FetchResultTypes.Text
  // );
  await log({ msg: `${logPrefix}Fetched data`, color: yellow, isBold: false, isIndent: true });

  const $ = cheerio.load(response.solution.response);
  // const $ = cheerio.load(response);
  await log({ msg: `${logPrefix}Loaded text into cheerio`, color: yellow, isBold: false, isIndent: true });

  const text = $('#wpTextbox1').text();
  await log({ msg: `${logPrefix}Loaded text element`, color: yellow, isBold: false, isIndent: true });

  const results = (
    await Promise.all([
      getGen1GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen2GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen3GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen4GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen5GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen6GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen7GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen8GameSetsData(text, pokemon, flavorsModule, logPrefix),
      getGen9GameSetsData(text, pokemon, flavorsModule, logPrefix) //
    ])
  ).flat();

  if (results.every((value) => !value)) {
    failedPokemon.push({
      pokemon,
      text
    });
    await log({ msg: `${logPrefix}Did not store data for Pokemon`, color: red, isBold: false, isIndent: true });
  }
}

export function getFailedPokemon() {
  return failedPokemon;
}
