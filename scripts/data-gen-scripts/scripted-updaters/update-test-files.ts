import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { writeFile } from 'node:fs/promises';
import { getPokemonWithFullDataAndEvolutions } from '../../../tests/testUtils/queries/pokemon-all-data.js';
import { userAgentHeader } from '../../utils.js';
import prettier from 'prettier';
import prettierConfig from '../../../.prettierrc.mjs';

const fullDataResponsesFolder = new URL('../../../tests/testUtils/full-data-responses/', import.meta.url);

const data = await Promise.all(['beldum', 'dragonair', 'eevee', 'rattataalola', 'salamence', 'syclar'].map((pokemon) => executeGraphQL(pokemon)));
const [beldumData, dragonairData, eeveeData, rattataalolaData, salamenceData, syclarData] = await Promise.all(
  data.map((response) => stringifyAndFormat(response))
);

await Promise.all([
  writeFile(new URL('beldum.json', fullDataResponsesFolder), beldumData),
  writeFile(new URL('dragonair.json', fullDataResponsesFolder), dragonairData),
  writeFile(new URL('eevee.json', fullDataResponsesFolder), eeveeData),
  writeFile(new URL('rattata-alola.json', fullDataResponsesFolder), rattataalolaData),
  writeFile(new URL('salamence.json', fullDataResponsesFolder), salamenceData),
  writeFile(new URL('syclar.json', fullDataResponsesFolder), syclarData)
]);

async function stringifyAndFormat(response: PokemonResponse): Promise<string> {
  const formatted = prettier.format(JSON.stringify(response), { ...prettierConfig, parser: 'json' });
  return formatted;
}

async function executeGraphQL(pokemon: string): Promise<PokemonResponse> {
  return fetch<PokemonResponse>(
    'http://localhost:4000',
    {
      method: FetchMethods.Post,
      headers: {
        ...userAgentHeader,
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
