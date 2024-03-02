import { flavorsModule } from '#utils/flavorsModule';
import { green } from 'colorette';
import { writeFile } from 'node:fs/promises';
import { format } from 'prettier';
import prettierConfig from '../../../../.prettierrc.mjs';
import { ensureLogfileExists, getBulbapediaReadyPokemon } from '../utils/bulbapedia-utils.js';
import { createFlaresolverrSession, destroyFlaresolverrSession } from '../utils/flaresolverr-session-management.js';
import { logFile } from './constants.js';
import { gameSorter } from './game-sorter.js';
import { log } from './log-wrapper.js';
import { getFailedPokemon, parsePokemon } from './parsers/parse-pokemon.js';

const pathToFlavorTextFile = new URL('../../../src/lib/assets/flavorText.json', import.meta.url);
const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);

await ensureLogfileExists(logFile);

for (const pokemon of getBulbapediaReadyPokemon()) {
  await createFlaresolverrSession();
  await parsePokemon(pokemon);
  await destroyFlaresolverrSession();
}

await log({ msg: "Done fetching and storing data in memory, sorting version_id's", color: green, isBold: true, isIndent: false });

gameSorter(flavorsModule);

await log({ msg: 'Done sorting, formatting and writing to disk', color: green, isBold: true, isIndent: false });

const formatted = await format(JSON.stringify(flavorsModule, null, 4), { parser: 'json', ...prettierConfig });
await writeFile(pathToFlavorTextFile, formatted, { encoding: 'utf-8' });
await log({ msg: 'Done writing to disk', color: green, isBold: true, isIndent: false });

await writeFile(failedPokemonTextFile, JSON.stringify(getFailedPokemon(), null, 4), { encoding: 'utf-8' });
