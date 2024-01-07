import { flavorsModule } from '#utils/flavorsModule';
import { FetchMediaContentTypes, FetchMethods, FetchResultTypes, fetch } from '@sapphire/fetch';
import { red, yellow } from 'colorette';
import * as cheerio from 'https://cdn.skypack.dev/cheerio';
import { userAgentHeader } from '../../../utils.js';
import { log } from '../append-to-log.js';
import type { ParsedPokemon } from '../constants';
import { getCurrentSession } from '../flaresolverr-session-management';
import { getGen1GameSetsData } from '../game-sets/gen1-game-sets';
import { getGen2GameSetsData } from '../game-sets/gen2-game-sets';
import { getGen3GameSetsData } from '../game-sets/gen3-game-sets';
import { getGen4GameSetsData } from '../game-sets/gen4-game-sets';
import { getGen5GameSetsData } from '../game-sets/gen5-game-sets';
import { getGen6GameSetsData } from '../game-sets/gen6-game-sets';
import { getGen7GameSetsData } from '../game-sets/gen7-game-sets';
import { getGen8GameSetsData } from '../game-sets/gen8-game-sets';
import { getGen9GameSetsData } from '../game-sets/gen9-game-sets';
import type { FlareSolverrResponse } from '../types';

const failedPokemon = [];

export async function parsePokemon(pokemon: ParsedPokemon) {
  const logPrefix = `${pokemon.species} (${pokemon.number}${pokemon.forme ?? ''}) - `;

  const response = await fetch<FlareSolverrResponse>(
    'http://localhost:8191/v1',
    {
      method: FetchMethods.Post,
      headers: {
        ...userAgentHeader,
        'Content-Type': FetchMediaContentTypes.JSON
      },
      body: JSON.stringify({
        cmd: 'request.get',
        url: pokemon.url,
        maxTimeout: 60_000,
        session: getCurrentSession()
      })
    },
    FetchResultTypes.JSON
  );
  await log(`${logPrefix}Fetched data`, yellow, false, true);

  const $ = cheerio.load(response.solution.response);
  await log(`${logPrefix}Loaded text into cheerio`, yellow, false, true);

  const text = $('#wpTextbox1').text();
  await log(`${logPrefix}Loaded text element`, yellow, false, true);

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
    await log(`${logPrefix}Did not store data for Pokemon`, red, false, true);
  }
}

export function getFailedPokemon() {
  return failedPokemon;
}
