import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { Time, Timestamp } from '@sapphire/timestamp';
import { objectEntries } from '@sapphire/utilities';
import { green, yellow } from 'colorette';
import { writeFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { importFileFromWeb, mapToJson, type GitCommit } from './utils.js';

const filePrefix = [
  '// @ts-nocheck TS checking this file causes major delays in developing',
  '',
  "import { Collection } from '@discordjs/collection';",
  '',
  '/** The learnsets in Pokémon */',
  'export const learnsets = new Collection<string, Record<string, string[]>>('
].join('\n');
const fileSuffix = [');', ''].join('\n');

const shaTrackerFileUrl = new URL('sha-tracker.json', import.meta.url);
const learnsetsFileUrl = new URL('../src/lib/assets/learnsets.ts', import.meta.url);
const oneMonthAgo = Date.now() - Time.Month * 2;
const timestamp = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(oneMonthAgo);

const url = new URL('https://api.github.com/repos/smogon/pokemon-showdown/commits');
url.searchParams.append('path', 'data/learnsets.ts');
url.searchParams.append('since', timestamp);

const [commits, { default: ciData }] = await Promise.all([
  fetch<GitCommit[]>(url, FetchResultTypes.JSON), //
  // @ts-expect-error Node supports URLs just fine
  import(shaTrackerFileUrl, { assert: { type: 'json' } }) //
]);

const data = { sha: commits.length ? commits[0].sha : null, length: commits.length };

if (data.sha === null || data.sha === ciData.learnsetsLastSha) {
  console.info(yellow('Fetched data but no new commit was available'));

  process.exit(0);
}

const { Learnsets } = await importFileFromWeb<{ Learnsets: { [k: string]: Record<string, string[]> } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/learnsets.ts',
  temporaryFileName: 'learnsets.js'
});

const output = new Map();
for (const [pokemon, learnset] of objectEntries(Learnsets)) {
  if (learnset.eventOnly === undefined && learnset.learnset === undefined) continue;
  if (learnset.eventOnly !== undefined && learnset.learnset === undefined) output.set(pokemon, { eventOnly: ['See base forme of this Pokémon'] });
  else output.set(pokemon, learnset.learnset);
}

const writePromises: Promise<void>[] = [];

if (data.sha) writePromises.push(writeFile(shaTrackerFileUrl, JSON.stringify({ ...ciData, learnsetsLastSha: data.sha })));
if (output.size) writePromises.push(writeFile(learnsetsFileUrl, `${filePrefix}${mapToJson(output)}${fileSuffix}`));

await Promise.all(writePromises);

console.log(green(`Successfully wrote updated learnsets data to file; Latest SHA ${data.sha}`));
