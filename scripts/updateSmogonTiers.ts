/* eslint-disable no-console */
import fetch from 'node-fetch';
import { readJSON, writeJSONAtomic } from 'fs-nextra';
import { join } from 'path';
import { constants, Timestamp } from '@klasa/timestamp';
import { needFile, Formats, DataJSON } from './utils';

const DATA_FILE = join(__dirname, 'smogonTiersData.json');
const FORMATS_FILE = join(__dirname, '../src/assets/formats.json');
const UPDATED_FORMATS_DATA = readJSON(DATA_FILE) as Promise<DataJSON>;
const TEN_DAYS_AGO = Date.now() - (10 * constants.DAY);
const TIMESTAMP = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(TEN_DAYS_AGO);

(async () => {
  const url = new URL('https://api.github.com/repos/smogon/pokemon-showdown/commits');
  url.searchParams.append('path', 'data/formats-data.js');
  url.searchParams.append('since', TIMESTAMP);

  const request = await fetch(url);

  const [ commits, { lastSha } ] = await Promise.all([ request.json(), UPDATED_FORMATS_DATA ]);

  const data = { sha: commits.length ? commits[0].sha : null, length: commits.length };
  const output: Formats = {};
  if (!data) {
    console.log('no data from request');

    return process.exit(1);
  }

  if (data.sha === lastSha) {
    console.log('Fetched data but no new commit was available');

    return process.exit(0);
  }

  const { BattleFormatsData } = await needFile(
    'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/formats-data.js',
  );

  for (const mon in BattleFormatsData) {
    const tier = BattleFormatsData[mon].isNonstandard || BattleFormatsData[mon].tier;
    output[mon] = tier;
  }

  const writePromises: Promise<void>[] = [];

  if (data.sha) writePromises.push(writeJSONAtomic(DATA_FILE, { lastSha: data.sha }));
  if (output && Object.entries(output).length) writePromises.push(writeJSONAtomic(FORMATS_FILE, output));

  await Promise.all(writePromises);

  console.log(`Successfully wrote updated formats data to file; Latest SHA ${data.sha}`);

  return process.exit(0);
})();