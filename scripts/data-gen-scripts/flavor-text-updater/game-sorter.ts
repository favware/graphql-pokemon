import type { FlavorsModule } from '#utils/flavorsModule.js';
import { objectKeys } from '@sapphire/utilities';
import { sortOrder } from './constants.js';

export function gameSorter(flavorsModule: FlavorsModule) {
  for (const key of objectKeys(flavorsModule)) {
    flavorsModule[key].sort((a, b) => sortOrder.indexOf(a.version_id) - sortOrder.indexOf(b.version_id));
  }
}
