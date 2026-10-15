import { writeFile } from 'node:fs/promises';
import { fetch, FetchMediaContentTypes, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { format, type FormatConfig } from 'oxfmt';
import oxfmtConfig from '../../../.oxfmtrc.json';
import { getPokemonWithFullDataAndEvolutions } from '../../../tests/testUtils/queries/pokemon-all-data.js';
import { rootDir, userAgentHeader } from '../../utils.js';

const fullDataResponsesFolder = new URL('tests/testUtils/full-data-responses/', rootDir);

const data = await Promise.all(
	['beldum', 'dragonair', 'eevee', 'rattataalola', 'salamence', 'syclar'].map(async (pokemon) => executeGraphQL(pokemon))
);
const [beldumData, dragonairData, eeveeData, rattataalolaData, salamenceData, syclarData] = await Promise.all(
	data.map(async (response) => stringifyAndFormat(response))
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
	const formatted = await format('', JSON.stringify(response), oxfmtConfig as FormatConfig);
	return formatted.code;
}

async function executeGraphQL(pokemon: string): Promise<PokemonResponse> {
	return fetch<PokemonResponse>(
		'http://localhost:4000',
		{
			method: FetchMethods.Post,
			headers: {
				...userAgentHeader,
				'Content-Type': FetchMediaContentTypes.JSON
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
