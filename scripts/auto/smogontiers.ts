/* eslint-disable no-console */
import { constants, Timestamp } from '@klasa/timestamp';
import { readJSON, writeJSONAtomic } from 'fs-nextra';
import fetch from 'node-fetch';
import { join } from 'path';
import { DataJSON, greenColour, importFileFromWeb, redColour, SmogonTiersData, yellowColour } from './utils';

const CI_DATA_FILE = join(__dirname, 'sha-tracker.json');
const FORMATS_FILE = join(__dirname, '../../src/assets/formats.json');
const UPDATED_FORMATS_DATA = readJSON(CI_DATA_FILE) as Promise<DataJSON>;
const TEN_DAYS_AGO = Date.now() - 10 * constants.DAY;
const TIMESTAMP = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(TEN_DAYS_AGO);

const autoUpdateSmogonTiers = async () => {
  const url = new URL('https://api.github.com/repos/smogon/pokemon-showdown/commits');
  url.searchParams.append('path', 'data/formats-data.ts');
  url.searchParams.append('since', TIMESTAMP);

  const request = await fetch(url);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [commits, ciData] = await Promise.all([request.json() as Record<string, any>, UPDATED_FORMATS_DATA]);

  const data = { sha: commits.length ? commits[0].sha : null, length: commits.length };
  if (!data) {
    console.log(redColour.format('no data from request'));

    return process.exit(1);
  }

  if (data.sha === ciData.tiersLastSha) {
    console.log(yellowColour.format('Fetched data but no new commit was available'));

    return process.exit(0);
  }

  const { BattleFormatsData } = await importFileFromWeb<SmogonTiersData>({
    url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/formats-data.ts',
    temporaryFileName: 'tiers.ts'
  });

  const output: Record<string, string> = {};
  for (const mon in BattleFormatsData) {
    const tier = BattleFormatsData[mon].isNonstandard || BattleFormatsData[mon].tier;
    output[mon] = tier || 'Refer to base form / unknown';
  }

  const writePromises: Promise<void>[] = [];

  if (data.sha) writePromises.push(writeJSONAtomic(CI_DATA_FILE, { ...ciData, tiersLastSha: data.sha }));
  if (output && Object.entries(output).length) writePromises.push(writeJSONAtomic(FORMATS_FILE, output));

  await Promise.all(writePromises);

  console.log(greenColour.format(`Successfully wrote updated formats data to file; Latest SHA ${data.sha}`));
  return process.exit(0);
};

autoUpdateSmogonTiers();
