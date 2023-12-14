import { pokedex as data } from '../../src/lib/assets/pokedex.js';
import { dataToClipboard } from './data-to-clipboard.js';

const keys: string[] = [];

for (const [, entry] of data.entries()) {
  keys.push(entry.key);
}

dataToClipboard(keys);
