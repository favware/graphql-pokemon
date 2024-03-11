import { abilities as currentAbilities } from '#assets/abilities.js';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { IsNonStandard } from '#utils/isNonStandardEnum.js';
import { objectEntries } from '@sapphire/utilities';
import {
  importFileFromWeb,
  inspectData,
  replaceEnumLikeValues,
  replacePokeWithAccentedPoke,
  sortObjectByKey,
  writeDataToFileAndPrettify
} from '../../../utils.js';

const { Abilities } = await importFileFromWeb<{ Abilities: { [abilityName: string]: AbilityData } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/abilities.ts',
  temporaryFileName: 'abilities.js'
});

const { AbilitiesText } = await importFileFromWeb<{ AbilitiesText: { [abilityName: string]: AbilityText } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/text/abilities.ts',
  temporaryFileName: 'abilities-texts.js'
});

const abilitiesDataEntries = objectEntries(Abilities);
const abilitiesTextEntries = objectEntries(AbilitiesText);

const newMap = new Map();

for (const [key, data] of currentAbilities.entries()) {
  Reflect.deleteProperty(data, 'key');

  const abilityFromData = abilitiesDataEntries.find(([abilityKey]) => abilityKey === key)?.at(1) as AbilityData | undefined;
  const abilityFromText = abilitiesTextEntries.find(([abilityTextKey]) => abilityTextKey === key)?.at(1) as AbilityText | undefined;

  if (abilityFromData) {
    if (abilityFromData.isNonstandard === 'Past') {
      data.isNonstandard = IsNonStandard.Past;
    } else if (abilityFromData.isNonstandard === 'CAP') {
      data.isNonstandard = IsNonStandard.Cap;
    } else if (abilityFromData.isNonstandard === 'Unobtainable') {
      data.isNonstandard = IsNonStandard.Unobtainable;
    } else if (abilityFromData.isNonstandard === 'LGPE') {
      data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
    } else if (abilityFromData.isNonstandard === 'Gigantamax') {
      data.isNonstandard = IsNonStandard.Gigantamax;
    } else {
      Reflect.deleteProperty(data, 'isNonstandard');
    }

    data.name = abilityFromData.name;
  }

  if (abilityFromText) {
    data.shortDesc = replacePokeWithAccentedPoke(abilityFromText.shortDesc);

    if (abilityFromText.desc) {
      data.desc = replacePokeWithAccentedPoke(abilityFromText.desc);
    }
  }

  newMap.set(key, sortObjectByKey(data));
}

for (const [key, abilityFromData] of abilitiesDataEntries) {
  // Skip if the ability is already in the map
  if (newMap.has(key)) continue;

  const abilityFromText = abilitiesTextEntries.find(([abilityTextKey]) => abilityTextKey === key)?.at(1) as AbilityText | undefined;

  if (!abilityFromText) {
    console.error(`Missing ability text for ${key}`);
    continue;
  }

  const data: PokemonTypes.Ability = {
    shortDesc: replacePokeWithAccentedPoke(abilityFromText.shortDesc),
    name: abilityFromData.name
  };

  if (abilityFromData.isNonstandard === 'Past') {
    data.isNonstandard = IsNonStandard.Past;
  } else if (abilityFromData.isNonstandard === 'CAP') {
    data.isNonstandard = IsNonStandard.Cap;
  } else if (abilityFromData.isNonstandard === 'Unobtainable') {
    data.isNonstandard = IsNonStandard.Unobtainable;
  } else if (abilityFromData.isNonstandard === 'LGPE') {
    data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
  } else if (abilityFromData.isNonstandard === 'Gigantamax') {
    data.isNonstandard = IsNonStandard.Gigantamax;
  }

  if (abilityFromText.desc) {
    data.desc = replacePokeWithAccentedPoke(abilityFromText.desc);
  }

  newMap.set(key, sortObjectByKey(data));
}

const prependContent = [
  "import type { PokemonTypes } from '#assets/pokemon-source';",
  "import { IsNonStandard } from '#utils/isNonStandardEnum';",
  "import { Collection } from '@discordjs/collection';",
  '',
  '/** The abilities in Pokémon */',
  'export const abilities = new Collection<string, PokemonTypes.Ability>('
].join('\n');
const appendContent = [
  ');', //
  '',
  'for (const [key, value] of abilities.entries()) {',
  '\tvalue.key = key;',
  '}',
  ''
].join('\n');

const content = replaceEnumLikeValues(inspectData([...newMap.entries()]));

await writeDataToFileAndPrettify(prependContent + content + appendContent, '#assets/abilities.js');

interface AbilityData {
  isNonstandard?: string;
  name: string;
}

interface AbilityText {
  name: string;
  desc?: string;
  shortDesc: string;
}
