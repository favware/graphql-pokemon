import { flavorsModule } from '#utils/flavorsModule';
import { green } from 'colorette';
import { writeFile } from 'node:fs/promises';
import { format } from 'prettier';
import prettierConfig from '../../../../.prettierrc.mjs';
import { rootDir } from '../../../utils.js';
import { ensureLogfileExists, getBulbapediaReadyPokemon } from '../utils/bulbapedia-utils.js';
import { gameSorter } from './game-sorter.js';
import { log, logFile } from './log-wrapper.js';
import { getFailedPokemon, parsePokemon } from './parsers/parse-pokemon.js';

const pathToFlavorTextFile = new URL('src/lib/assets/flavorText.json', rootDir);
const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);

await ensureLogfileExists(logFile);

const pokemonToParse = getBulbapediaReadyPokemon();

// Get the current day of the week and add 1 to get a number from 1 to 7
const dayOfWeek = new Date().getDay() + 1;

// Calculate the size of each seventh
const seventhSize = Math.ceil(pokemonToParse.length / 7);

// Split the array into sevenths
const sevenths = Array(7)
  .fill(0)
  .map((_, i) => pokemonToParse.slice(i * seventhSize, (i + 1) * seventhSize));

// Select the seventh to process based on the day of the week
const pokemonToProcess = sevenths.at(dayOfWeek - 1);

for (const pokemon of pokemonToProcess) {
  await parsePokemon(pokemon);
}

await log({ msg: "Done fetching and storing data in memory, sorting version_id's", color: green, isBold: true, isIndent: false });

gameSorter(flavorsModule);

await log({ msg: 'Done sorting, formatting and writing to disk', color: green, isBold: true, isIndent: false });

const formatted = await format(JSON.stringify(flavorsModule, null, 4), { parser: 'json', ...prettierConfig });
await writeFile(pathToFlavorTextFile, formatted, { encoding: 'utf-8' });
await log({ msg: 'Done writing to disk', color: green, isBold: true, isIndent: false });

await writeFile(failedPokemonTextFile, JSON.stringify(getFailedPokemon(), null, 4), { encoding: 'utf-8' });
