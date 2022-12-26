import { abilities } from '../../src/lib/assets/abilities.js';
import { dataToClipboard } from './data-to-clipboard.js';
import { Collection } from '@discordjs/collection';

export function sortObjectByKey<T extends object>(obj: T): T {
  const keys: string[] = [];
  const sortedObj: T = {} as T;

  for (const key in obj) {
    if (Reflect.has(obj, key)) {
      keys.push(key);
    }
  }

  keys.sort((a, b) => {
    const lowercaseA = a.toLowerCase();
    const lowercaseB = b.toLowerCase();

    if (lowercaseA < lowercaseB) {
      return -1;
    }

    if (lowercaseA > lowercaseB) {
      return 1;
    }

    return 0;
  });

  for (const key of keys) {
    sortedObj[key] = obj[key];
  }

  return sortedObj;
}

const abilitiesSortedKeys = abilities.sort((_, __, c, d) => {
  if (c < d) {
    return -1;
  }

  if (c > d) {
    return 1;
  }

  return 0;
});

const finalCollection = new Collection<string, any>();

for (let [abilityKey, abilityData] of abilitiesSortedKeys.entries()) {
  Reflect.deleteProperty(abilityData, 'key');

  abilityData = sortObjectByKey(abilityData);

  finalCollection.set(abilityKey, abilityData);
}

dataToClipboard([...finalCollection.entries()]);
