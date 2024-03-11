import { Collection } from '@discordjs/collection';
import { moves as data } from '../../src/lib/assets/moves.js';
import { sortObjectByKey } from '../utils.js';
import { dataToClipboard } from './data-to-clipboard.js';

const dataSortedKeys = data.sort((_, __, c, d) => {
  if (c < d) {
    return -1;
  }

  if (c > d) {
    return 1;
  }

  return 0;
});

const finalCollection = new Collection<string, any>();

for (let [entryKey, entryData] of dataSortedKeys.entries()) {
  Reflect.deleteProperty(entryData, 'key');

  entryData = sortObjectByKey(entryData);

  finalCollection.set(entryKey, entryData);
}

dataToClipboard([...finalCollection.entries()]);
