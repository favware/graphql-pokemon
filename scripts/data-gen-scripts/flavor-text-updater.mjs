import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { blue, bold, green, red, yellow } from 'colorette';
import * as cheerio from 'https://cdn.skypack.dev/cheerio';
import { readFile, writeFile, appendFile, access } from 'node:fs/promises';
import { pokedex } from '../../api/lib/assets/pokedex.js';

const bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/w/index.php?title=';
const bulbapediaBaseUrlPostfix = '_(Pok%C3%A9mon)&action=edit';
const pathToFlavorTextFile = new URL('../../src/lib/assets/flavorText.json', import.meta.url);
const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);
const skippedPokemonTextFile = new URL('./skipped-pokemon.json', import.meta.url);
const logFile = new URL('./output.log', import.meta.url);
const failedPokemon = [];
const skippedPokemon = [];

const flavorTexts = JSON.parse(await readFile(pathToFlavorTextFile));

await access(logFile) //
  .then(() => writeFile(logFile, ''))
  .catch(() => appendFile(logFile, ''));

async function appendToLog(data, indent = true) {
  await appendFile(logFile, `\n${indent ? '\t' : ''}${data}`, { encoding: 'utf-8' });
}

function parseSpeciesForBulbapedia(pokemonData) {
  if (pokemonData.specialBulbapediaUrl) {
    return bulbapediaBaseUrlPrefix + pokemonData.specialBulbapediaUrl + bulbapediaBaseUrlPostfix;
  }

  if (pokemonData.baseSpecies) {
    return bulbapediaBaseUrlPrefix + pokemonData.baseSpecies + bulbapediaBaseUrlPostfix;
  }

  return bulbapediaBaseUrlPrefix + pokemonData.species + bulbapediaBaseUrlPostfix;
}

function getTextContent(bit1) {
  return bit1?.split(/\|[a-z]+=/g)?.at(-1);
}

const parsedPokemon = [];

for (const dexEntry of pokedex.values()) {
  if (dexEntry.num >= 1) {
    parsedPokemon.push({
      number: dexEntry.num,
      species: dexEntry.species,
      url: new URL(parseSpeciesForBulbapedia(dexEntry)),
      forme: dexEntry.forme?.toLowerCase()
    });
  }
}

for (const pokemon of parsedPokemon) {
  const groupLogMessage = `Parsing ${pokemon.species} (${pokemon.number}${pokemon.forme ?? ''})`;
  console.group(blue(groupLogMessage));
  await appendToLog(groupLogMessage, false);

  if (pokemon.forme === undefined) {
    const formCheckMsg = 'Passed forme check';
    console.log(yellow(formCheckMsg));
    await appendToLog(formCheckMsg);

    const html = await fetch(pokemon.url, FetchResultTypes.Text);
    const fetchedDataMsg = 'Fetched data';
    console.log(yellow(fetchedDataMsg));
    await appendToLog(fetchedDataMsg);

    const $ = cheerio.load(html);
    const cheerioLoadedMsg = 'Loaded text into cheerio';
    console.log(yellow(cheerioLoadedMsg));
    await appendToLog(cheerioLoadedMsg);

    const text = $('#wpTextbox1').text();
    const textElementLoadedMsg = 'Loaded text element';
    console.log(yellow(textElementLoadedMsg));
    await appendToLog(textElementLoadedMsg);

    const svDataScarletBased = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry2|v=Scarlet|v2=Violet'))
    );
    const svDataVioletBased = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry2|v=Violet|v2=Scarlet'))
    );
    const svData = svDataScarletBased || svDataVioletBased;
    const retrievedSvDataMsg = `Retrieved SV Combined data, it is ${svData ? 'defined' : 'not defined'}`;
    console.log(yellow(retrievedSvDataMsg));
    await appendToLog(retrievedSvDataMsg);

    if (svData) {
      if (flavorTexts[pokemon.number]) {
        const scarletVersionFlavorText = flavorTexts[pokemon.number].filter((a) => a.version_id === 'Scarlet');
        if (scarletVersionFlavorText) {
          scarletVersionFlavorText.flavor_text = svData;
        } else {
          flavorTexts[pokemon.number].push({
            version_id: 'Scarlet',
            flavor_text: svData
          });
        }

        const violetVersionFlavorText = flavorTexts[pokemon.number].filter((a) => a.version_id === 'Violet');
        if (violetVersionFlavorText) {
          violetVersionFlavorText.flavor_text = svData;
        } else {
          flavorTexts[pokemon.number].push({
            version_id: 'Violet',
            flavor_text: svData
          });
        }
      } else {
        flavorTexts[pokemon.number] = [
          {
            version_id: 'Scarlet',
            flavor_text: svData
          },
          {
            version_id: 'Violet',
            flavor_text: svData
          }
        ];
      }
      const storedSvMsg = 'Stored new SV Combined entries in flavor texts';
      console.log(green(storedSvMsg));
      await appendToLog(storedSvMsg);
    }

    const scarletData = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry1|v=Scarlet'))
    );
    const retrievedScarletMsg = `Retrieved Scarlet data, it is ${scarletData ? 'defined' : 'not defined'}`;
    console.log(yellow(retrievedScarletMsg));
    await appendToLog(retrievedScarletMsg);

    if (scarletData) {
      if (flavorTexts[pokemon.number]) {
        const scarletVersionFlavorText = flavorTexts[pokemon.number].filter((a) => a.version_id === 'Scarlet');
        if (scarletVersionFlavorText) {
          scarletVersionFlavorText.flavor_text = scarletData;
        } else {
          flavorTexts[pokemon.number].push({
            version_id: 'Scarlet',
            flavor_text: scarletData
          });
        }
      } else {
        flavorTexts[pokemon.number] = [
          {
            version_id: 'Scarlet',
            flavor_text: scarletData
          }
        ];
      }
      const storedScarletMsg = 'Stored new Scarlet Singular entry in flavor texts';
      console.log(green(storedScarletMsg));
      await appendToLog(storedScarletMsg);
    }

    const violetData = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry1|v=Violet'))
    );

    const retrievedVioletMsg = `Retrieved Violet data, it is ${violetData ? 'defined' : 'not defined'}`;
    console.log(yellow(retrievedVioletMsg));
    await appendToLog(retrievedVioletMsg);

    if (violetData) {
      if (flavorTexts[pokemon.number]) {
        const violetVersionFlavorText = flavorTexts[pokemon.number].filter((a) => a.version_id === 'Violet');
        if (violetVersionFlavorText) {
          violetVersionFlavorText.flavor_text = violetData;
        } else {
          flavorTexts[pokemon.number].push({
            version_id: 'Violet',
            flavor_text: violetData
          });
        }
      } else {
        flavorTexts[pokemon.number] = [
          {
            version_id: 'Violet',
            flavor_text: violetData
          }
        ];
      }
      const storedVioletMsg = 'Stored new Violet Singular entry in flavor texts';
      console.log(green(storedVioletMsg));
      await appendToLog(storedVioletMsg);
    }

    if (!violetData && !scarletData && !svData) {
      failedPokemon.push({
        pokemon,
        text
      });
      const didnotStoreDataMsg = 'Did not store data for Pokemon';
      console.log(red(didnotStoreDataMsg));
      await appendToLog(didnotStoreDataMsg);
    }
  } else {
    skippedPokemon.push({
      pokemon
    });
  }

  console.groupEnd();
}

const doneFetchingMsg = 'Done fetching and storing all data, writing to disk';
console.log(bold(green(doneFetchingMsg)));
await appendToLog(doneFetchingMsg, false);
await writeFile(pathToFlavorTextFile, JSON.stringify(flavorTexts, null, 4), { encoding: 'utf-8' });
const doneWritingToDiskMsg = 'Done writing to disk';
console.log(bold(green(doneWritingToDiskMsg)));
await appendToLog(doneWritingToDiskMsg, false);

await writeFile(failedPokemonTextFile, JSON.stringify(failedPokemon, null, 4), { encoding: 'utf-8' });
await writeFile(skippedPokemonTextFile, JSON.stringify(skippedPokemon, null, 4), { encoding: 'utf-8' });
