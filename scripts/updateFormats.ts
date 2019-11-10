/* eslint-disable no-console */
import fetch from 'node-fetch';
import { writeJSONAtomic, readJSON } from 'fs-nextra';
import { join, dirname } from 'path';
import { Timestamp, constants } from '@klasa/timestamp';

const DATA_FILE = join(__dirname, 'updateFormatsData.json');
const FORMATS_FILE = join(__dirname, '../src/assets/formats.json');
const UPDATED_FORMATS_DATA = readJSON(DATA_FILE) as Promise<DataJSON>;
const TEN_DAYS_AGO = Date.now() - (10 * constants.DAY);
const TIMESTAMP = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(TEN_DAYS_AGO);

const needFile = async (url: string) => {
  const nodeModule: Module = module.constructor as Module;
  const request = await fetch(url);
  const body: string = await request.text();
  const m = new nodeModule(url, module.parent);
  m.fileName = url;
  /* eslint-disable no-underscore-dangle */
  m.paths = nodeModule._nodeModulePaths(dirname(url));
  m._compile(body, url);

  /* eslint-enable no-underscore-dangle */
  return m.exports;
};

(async () => {
  const url = new URL('https://api.github.com/repos/Zarel/Pokemon-Showdown/commits');
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
    'https://raw.githubusercontent.com/Zarel/Pokemon-Showdown/master/data/formats-data.js'
  );

  for (const mon in BattleFormatsData) output[mon] = BattleFormatsData[mon].tier;

  const writePromises: Promise<void>[] = [];

  if (data.sha) writePromises.push(writeJSONAtomic(DATA_FILE, { lastSha: data.sha }));
  if (output && Object.entries(output).length) writePromises.push(writeJSONAtomic(FORMATS_FILE, output));

  await Promise.all(writePromises);

  console.log(`Successfully wrote updated formats data to file; Latest SHA ${data.sha}`);

  return process.exit(0);
})();

interface Entry {
  tier: string;
}

interface DataJSON {
  lastSha: string;
}

type Formats = Record<string, Entry>;

interface Module extends Function {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  _nodeModulePaths: any;

  new(url: string, parents: NodeModule | null): any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}