import { items } from '../../src/lib/assets/items.js';
import { dataToClipboard } from './data-to-clipboard.js';

const keys: string[] = [];

for (const [, itemData] of items.entries()) {
  keys.push(itemData.key);
}

dataToClipboard(keys);
