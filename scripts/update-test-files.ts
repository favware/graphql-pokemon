import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { writeFile } from 'node:fs/promises';
import { getPokemonWithFullDataAndEvolutions } from '../tests/testUtils/queries/pokemon-all-data.js';

const fullDataResponsesFolder = new URL('../tests/testUtils/full-data-responses/', import.meta.url);

const [beldumData, dragonairData, eeveeData, rattataalolaData, salamenceData, syclarData] = await Promise.all(
  ['beldum', 'dragonair', 'eevee', 'rattataalola', 'salamence', 'syclar'].map((pokemon) => executeGraphQL(pokemon))
);

await Promise.all([
  writeFile(new URL('beldum.json', fullDataResponsesFolder), JSON.stringify(beldumData)),
  writeFile(new URL('dragonair.json', fullDataResponsesFolder), JSON.stringify(dragonairData)),
  writeFile(new URL('eevee.json', fullDataResponsesFolder), JSON.stringify(eeveeData)),
  writeFile(new URL('rattata-alola.json', fullDataResponsesFolder), JSON.stringify(rattataalolaData)),
  writeFile(new URL('salamence.json', fullDataResponsesFolder), JSON.stringify(salamenceData)),
  writeFile(new URL('syclar.json', fullDataResponsesFolder), JSON.stringify(syclarData))
]);

async function executeGraphQL(pokemon: string): Promise<PokemonResponse> {
  return fetch<PokemonResponse>(
    'http://localhost:4000',
    {
      method: FetchMethods.Post,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: getPokemonWithFullDataAndEvolutions.loc?.source.body,
        variables: { pokemon }
      })
    },
    FetchResultTypes.JSON
  );
}

interface PokemonResponse {
  data: Record<string, any>;
}
