import { moves } from '../../src/lib/assets/moves.js';
import { dataToClipboard } from './data-to-clipboard.js';

const keys: string[] = [];

for (const [, data] of moves.entries()) {
  keys.push(data.key);
}

dataToClipboard(keys);
