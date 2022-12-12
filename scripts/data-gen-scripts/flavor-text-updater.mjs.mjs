import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { blue, bold, green, red, yellow } from 'colorette';
import * as cheerio from 'https://cdn.skypack.dev/cheerio';
import { readFile, writeFile } from 'node:fs/promises';
import { pokedex } from '../../api/lib/assets/pokedex.js';

const bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/w/index.php?title=';
const bulbapediaBaseUrlPostfix = '_(Pok%C3%A9mon)&action=edit';
const pathToFlavorTextFile = new URL('../../src/lib/assets/flavorText.json', import.meta.url);
const failedPokemonTextFile = new URL('./failed-pokemon.json', import.meta.url);
const skippedPokemonTextFile = new URL('./skipped-pokemon.json', import.meta.url);
const failedPokemon = [];
const skippedPokemon = [];

const flavorTexts = JSON.parse(await readFile(pathToFlavorTextFile));

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
  return bit1
    ?.split('|')
    ?.find((e) => e.startsWith('entry='))
    ?.slice(6)
    ?.slice(0, -2);
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
  console.group(blue(`Parsing ${pokemon.species} (${pokemon.number}${pokemon.forme ?? ''})`));

  if (pokemon.forme === undefined) {
    console.log(yellow('Passed forme check'));

    const html = await fetch(pokemon.url, FetchResultTypes.Text);
    console.log(yellow('Fetched data'));

    const $ = cheerio.load(html);
    console.log(yellow('Loaded text into cheerio'));

    const text = $('#wpTextbox1').text();
    console.log(yellow('Loaded text element'));

    const svData = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry2|v=Brilliant Diamond|v2=Shining Pearl'))
    );
    console.log(yellow(`Retrieved SV Combined data, it is ${svData ? 'defined' : 'not defined'}`));

    if (svData) {
      flavorTexts[pokemon.number].push(
        {
          version_id: 'Scarlet',
          flavor_text: svData
        },
        {
          version_id: 'Violet',
          flavor_text: svData
        }
      );
      console.log(green('Stored new SV Combined entries in flavor texts'));
    }

    const scarletData = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry1|v=Scarlet'))
    );
    console.log(yellow(`Retrieved Scarlet data, it is ${scarletData ? 'defined' : 'not defined'}`));

    if (scarletData) {
      flavorTexts[pokemon.number].push({
        version_id: 'Scarlet',
        flavor_text: scarletData
      });
      console.log(green('Stored new Scarlet Singular entry in flavor texts'));
    }

    const violetData = getTextContent(
      text //
        ?.split('\n')
        ?.find((e) => e.startsWith('{{Dex/Entry1|v=Violet'))
    );

    console.log(yellow(`Retrieved Violet data, it is ${violetData ? 'defined' : 'not defined'}`));

    if (violetData) {
      flavorTexts[pokemon.number].push({
        version_id: 'Violet',
        flavor_text: violetData
      });
      console.log(green('Stored new Violet Singular entry in flavor texts'));
    }

    if (!violetData && !scarletData && !svData) {
      failedPokemon.push({
        pokemon,
        text
      });
      console.log(red('Did not store data for Pokemon'));
    }
  } else {
    skippedPokemon.push({
      pokemon
    });
  }

  console.groupEnd();
}

console.log(bold(green('Done fetching and storing all data, writing to disk')));
await writeFile(pathToFlavorTextFile, JSON.stringify(flavorTexts, null, 4), { encoding: 'utf-8' });
console.log(bold(green('Done writing to disk')));

await writeFile(failedPokemonTextFile, JSON.stringify(failedPokemon, null, 4), { encoding: 'utf-8' });
await writeFile(skippedPokemonTextFile, JSON.stringify(skippedPokemon, null, 4), { encoding: 'utf-8' });
