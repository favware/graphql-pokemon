import { writeFile } from 'node:fs/promises';
import { env } from 'node:process';
import { green } from 'colorette';
import { format, type FormatConfig } from 'oxfmt';
import { flavorsModule } from '#utils/flavorsModule';
import oxfmtConfig from '../../../../.oxfmtrc.json';
import { rootDir } from '../../../utils.js';
import { ensureLogfileExists, getBulbapediaReadyPokemon } from '../utils/bulbapedia-utils.js';
import { gameSorter } from './game-sorter.js';
import { log, logFile } from './log-wrapper.js';
import { getFailedPokemon, parsePokemonWithoutFlareSolverr } from './parsers/parse-pokemon.js';

const pathToFlavorTextFile = new URL('src/lib/assets/flavorText.json', rootDir);
const failedPokemonTextFile = new URL('failed-pokemon.json', import.meta.url);

await ensureLogfileExists(logFile);

const pokemonToParse = getBulbapediaReadyPokemon();

// Determine the current day of the month (1-based). Clamp to 30 to avoid out-of-range on 31-day months.
const dayOfMonth = Math.min(new Date().getDate(), 30);

// We split the workload across 30 sets (approximate average month length).
const numberOfSets = 30;
const setSize = Math.ceil(pokemonToParse.length / numberOfSets);

// Split the array into 30 roughly equal sets.
const monthlySets = Array.from({ length: numberOfSets }, (_, i) => pokemonToParse.slice(i * setSize, (i + 1) * setSize));

// Select the set to process based on the current day of the month.
const pokemonToProcess = monthlySets.at(dayOfMonth - 1) ?? [];

console.group('=========== Starting Flavor Text Updater ===========');
console.log(`Processing set ${dayOfMonth} of ${numberOfSets}, containing ${pokemonToProcess.length} Pokémon.`);
console.log('process.env.CI is: ', env.CI);
console.groupEnd();

for (const pokemon of pokemonToProcess) {
	// process.env.CI ? await parsePokemonWithFlaresolverr(pokemon) :
	await parsePokemonWithoutFlareSolverr(pokemon);
}

await log({ msg: "Done fetching and storing data in memory, sorting version_id's", color: green, isBold: true, isIndent: false });

gameSorter(flavorsModule);

await log({ msg: 'Done sorting, formatting and writing to disk', color: green, isBold: true, isIndent: false });

const formatted = await format('', JSON.stringify(flavorsModule, null, 4), oxfmtConfig as FormatConfig);
await writeFile(pathToFlavorTextFile, formatted.code, { encoding: 'utf8' });
await log({ msg: 'Done writing to disk', color: green, isBold: true, isIndent: false });

await writeFile(failedPokemonTextFile, JSON.stringify(getFailedPokemon(), null, 4), { encoding: 'utf8' });
