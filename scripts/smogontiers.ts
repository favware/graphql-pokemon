import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { Time, Timestamp } from '@sapphire/timestamp';
import { objectEntries } from '@sapphire/utilities';
import { green, yellow } from 'colorette';
import { writeFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { importFileFromWeb, type GitCommit } from './utils.js';

const shaTrackerFileUrl = new URL('sha-tracker.json', import.meta.url);
const formatsFileUrl = new URL('../src/lib/assets/formats.json', import.meta.url);
const oneMonthAgo = Date.now() - Time.Month;
const timestamp = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(oneMonthAgo);

const url = new URL('https://api.github.com/repos/smogon/pokemon-showdown/commits');
url.searchParams.append('path', 'data/formats-data.ts');
url.searchParams.append('since', timestamp);

const [commits, { default: ciData }] = await Promise.all([
  fetch<GitCommit[]>(url, FetchResultTypes.JSON), //
  // @ts-expect-error Node supports URLs just fine
  import(shaTrackerFileUrl, { assert: { type: 'json' } }) //
]);

const data = { sha: commits.length ? commits[0].sha : null, length: commits.length };

if (data.sha === null || data.sha === ciData.tiersLastSha) {
  console.info(yellow('Fetched data but no new commit was available'));

  process.exit(0);
}

const { FormatsData } = await importFileFromWeb<{ FormatsData: { [k: string]: FormatsData } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/formats-data.ts',
  temporaryFileName: 'tiers.js'
});

const output = {};

for (const [pokemon, smogonFormatsData] of objectEntries(FormatsData)) {
  const tier = smogonFormatsData?.isNonstandard || smogonFormatsData?.tier;
  output[pokemon] = tier || 'Refer to base form / unknown';
}

const writePromises: Promise<void>[] = [];

if (data.sha) writePromises.push(writeFile(shaTrackerFileUrl, JSON.stringify({ ...ciData, tiersLastSha: data.sha })));
if (output && Object.entries(output).length) writePromises.push(writeFile(formatsFileUrl, JSON.stringify(output)));

await Promise.all(writePromises);

console.log(green(`Successfully wrote updated formats data to file; Latest SHA ${data.sha}`));

export interface FormatsData {
  [k: string]: {
    isNonstandard: string;
    tier: string;
    natDexTier: string;
  };
}
