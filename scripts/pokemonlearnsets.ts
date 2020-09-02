import { constants, Timestamp } from '@klasa/timestamp';
import { readJSON, writeFileAtomic, writeJSONAtomic } from 'fs-nextra';
import fetch from 'node-fetch';
import { join } from 'path';
import Util from '../src/utils/util';
import { DataJSON, importFileFromWeb, mapToJson, SmogonLearnsetData } from './utils';

const FILE_PREFIX = [
  '// @ts-nocheck TS checking this file causes major delays in developing',
  '/* eslint-disable max-len */',
  '',
  "import GraphQLCollection from '../utils/GraphQLCollection';",
  "import type { Pokemon } from '../utils/pokemon';",
  '',
  '/** The learnsets in Pokémon */',
  'export default new GraphQLCollection<string, Pokemon.RecordStringArray>('
].join('\n');
const FILE_SUFFIX = [');', ''].join('\n');

const CI_DATA_FILE = join(__dirname, 'sha-tracker.json');
const LEARNSETS_FILE = join(__dirname, '../src/assets/learnsets.ts');
const UPDATED_FORMATS_DATA = readJSON(CI_DATA_FILE) as Promise<DataJSON>;
const TEN_DAYS_AGO = Date.now() - 10 * constants.DAY;
const TIMESTAMP = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(TEN_DAYS_AGO);

const autoUpdateLearnsets = async () => {
  const url = new URL('https://api.github.com/repos/smogon/pokemon-showdown/commits');
  url.searchParams.append('path', 'data/learnsets.ts');
  url.searchParams.append('since', TIMESTAMP);

  const request = await fetch(url);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [commits, ciData] = await Promise.all([request.json() as Record<string, any>, UPDATED_FORMATS_DATA]);

  const data = { sha: commits.length ? commits[0].sha : null, length: commits.length };
  if (!data) {
    Util.kConsole.error('no data from request');

    return process.exit(1);
  }

  if (data.sha === ciData.learnsetsLastSha) {
    Util.kConsole.info('Fetched data but no new commit was available');

    return process.exit(0);
  }

  const { Learnsets } = await importFileFromWeb<SmogonLearnsetData>({
    url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/learnsets.ts',
    temporaryFileName: 'learnsets.ts'
  });

  const output = new Map<string, unknown>();
  for (const [pokemon, learnset] of Object.entries(Learnsets)) {
    if (learnset.eventOnly === undefined && learnset.learnset === undefined) continue;
    if (learnset.eventOnly !== undefined && learnset.learnset === undefined)
      output.set(pokemon, { eventOnly: ['See base forme of this Pokémon'] });
    else output.set(pokemon, learnset.learnset);
  }

  const writePromises: Promise<void>[] = [];

  if (data.sha) writePromises.push(writeJSONAtomic(CI_DATA_FILE, { ...ciData, learnsetsLastSha: data.sha }));
  if (output.size)
    writePromises.push(writeFileAtomic(LEARNSETS_FILE, `${FILE_PREFIX}${mapToJson(output)}${FILE_SUFFIX}`));

  await Promise.all(writePromises);

  Util.kConsole.log(`Successfully wrote updated learnsets data to file; Latest SHA ${data.sha}`);
  return process.exit(0);
};

autoUpdateLearnsets();
