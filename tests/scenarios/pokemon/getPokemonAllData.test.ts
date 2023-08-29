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

    await (async function copyToClipboard() {
      const { platform } = await import('node:process');
      const { execFile, spawn } = await import('node:child_process');
      const { inspect } = await import('node:util');

      const inspectedText = inspect(data, {
        depth: Infinity,
        maxArrayLength: Infinity,
        showHidden: false
      });

      let process: import('node:child_process').ChildProcessWithoutNullStreams | import('node:child_process').ChildProcess | null = null;

      if (platform === 'darwin') {
        process = spawn('pbcopy');
        process.stdin?.write(inspectedText);
        process.stdin?.end();
      } else {
        process = execFile('clippy', ['--copy']);
        process.stdin?.write(inspectedText);
        process.stdin?.end();
      }
    })();

    expect(data).toEqual(returnedData);
  });
});
