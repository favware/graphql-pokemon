import { objectEntries } from '@sapphire/utilities';
import { green } from 'colorette';
import { URL } from 'node:url';
import { importFileFromWeb, mapToJson, rootDir, writeDataToFileAndPrettify } from '../../../utils.js';

const prependContent = [
  '// @ts-nocheck TS checking this file causes major delays in developing',
  '',
  "import { Collection } from '@discordjs/collection';",
  '',
  '/** The learnsets in Pokémon */',
  'export const learnsets = new Collection<string, Record<string, string[]>>('
].join('\n');
const appendContent = [');', ''].join('\n');

const learnsetsFileUrl = new URL('src/lib/assets/learnsets.ts', rootDir);

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

if (output.size) {
  const content = mapToJson(output);

  await writeDataToFileAndPrettify(prependContent + content + appendContent, learnsetsFileUrl);

  console.log(green(`Successfully wrote updated learnsets data to file`));
}
