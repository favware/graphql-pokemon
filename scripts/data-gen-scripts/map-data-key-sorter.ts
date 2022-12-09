import { entries } from '../../src/lib/assets/pokedex-data/gen9.js';
import { dataToClipboard } from './data-to-clipboard.js';

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

const newMap = new Map();

for (let [species, data] of entries.values()) {
  Reflect.deleteProperty(data, 'key');

  data = sortObjectByKey(data);

  newMap.set(species, data);
}

dataToClipboard([...newMap.entries()]);
