import beldumData from '#test-utils/full-data-responses/beldum.json' assert { type: 'json' };
import dragonairData from '#test-utils/full-data-responses/dragonair.json' assert { type: 'json' };
import eeveeData from '#test-utils/full-data-responses/eevee.json' assert { type: 'json' };
import rattataalolaData from '#test-utils/full-data-responses/rattata-alola.json' assert { type: 'json' };
import salamenceData from '#test-utils/full-data-responses/salamence.json' assert { type: 'json' };
import syclarData from '#test-utils/full-data-responses/syclar.json' assert { type: 'json' };
import { getPokemonWithFullDataAndEvolutions } from '#test-utils/queries/pokemon-all-data';
import { executeGraphQL } from '#test-utils/testUtils';

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
