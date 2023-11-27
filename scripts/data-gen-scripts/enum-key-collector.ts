import { pokedex } from '../../src/lib/assets/pokedex.js';
import { dataToClipboard } from './data-to-clipboard.js';

const keys: string[] = [];

for (const [, data] of pokedex.entries()) {
  keys.push(data.key);
}

dataToClipboard(keys);
