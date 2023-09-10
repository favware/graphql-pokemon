import { getPokemonWithFullDataAndEvolutions } from '#test-utils/queries/pokemon-all-data';
import { executeGraphQL } from '#test-utils/testUtils';
import { readFile } from 'node:fs/promises';

const parse = (data: string) => JSON.parse(data);

const [beldumData, dragonairData, eeveeData, rattataalolaData, salamenceData, syclarData] = await Promise.all([
  readFile(new URL('../../testUtils/full-data-responses/beldum.json', import.meta.url), { encoding: 'utf-8' }).then(parse),
  readFile(new URL('../../testUtils/full-data-responses/dragonair.json', import.meta.url), { encoding: 'utf-8' }).then(parse),
  readFile(new URL('../../testUtils/full-data-responses/eevee.json', import.meta.url), { encoding: 'utf-8' }).then(parse),
  readFile(new URL('../../testUtils/full-data-responses/rattata-alola.json', import.meta.url), { encoding: 'utf-8' }).then(parse),
  readFile(new URL('../../testUtils/full-data-responses/salamence.json', import.meta.url), { encoding: 'utf-8' }).then(parse),
  readFile(new URL('../../testUtils/full-data-responses/syclar.json', import.meta.url), { encoding: 'utf-8' }).then(parse)
]);

describe('Get Pokémon with all data', () => {
  const verifiableData: [string, unknown][] = [
    ['eevee', eeveeData],
    ['syclar', syclarData],
    ['rattataalola', rattataalolaData],
    ['dragonair', dragonairData],
    ['beldum', beldumData],
    ['salamence', salamenceData]
  ];

  test.each(verifiableData)('GIVEN %s request THEN returns Pokémon WITH all data', async (pokemon, returnedData) => {
    const data = await executeGraphQL<'getPokemon'>({
      query: getPokemonWithFullDataAndEvolutions,
      variables: { pokemon }
    });

    expect(data).toEqual(returnedData);
  });
});
