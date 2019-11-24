/* eslint-disable no-console */
import { writeFileAtomic } from 'fs-nextra';
import { join } from 'path';
import { mapToJson, needFile } from './utils';

(async () => {
  const res = new Map<string, unknown>();
  const { BattleLearnsets } = await needFile(
    'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/learnsets.js',
  );

  for (const [ pokemon, learnset ] of Object.entries(BattleLearnsets)) {
    res.set(pokemon, (learnset as Learnset).learnset);
  }

  await writeFileAtomic(join(__dirname, 'out.txt'), mapToJson(res));

  console.log('Successfully wrote learnsets data to file');

  return process.exit(0);
})();

interface Learnset {
  learnset: Record<string, string[]>;
}