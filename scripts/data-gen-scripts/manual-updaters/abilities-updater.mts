import type { PokemonTypes } from '#assets/pokemon-source.js';
import { importFileFromWeb } from '#scripts/utils';
import { IsNonStandard } from '#utils/isNonStandardEnum.js';
import { abilities as currentAbilities } from '#assets/abilities.js';
import { dataToClipboard } from '../data-to-clipboard.js';
import { sortObjectByKey } from '../map-data-key-sorter.js';

const { Abilities } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/abilities.ts',
  temporaryFileName: 'abilities.mjs'
});

const { AbilitiesText } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/text/abilities.ts',
  temporaryFileName: 'abilities-texts.mjs'
});

const abilitiesDataEntries = Object.entries<AbilityData>(Abilities);
const abilitiesTextEntries = Object.entries<AbilityText>(AbilitiesText);

const newMap = new Map();

for (let [key, data] of currentAbilities.entries()) {
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
    data.shortDesc = abilityFromText.shortDesc;

    if (abilityFromText.desc) {
      data.desc = abilityFromText.desc;
    }
  }

  newMap.set(key, sortObjectByKey(data));
}

for (const [key, abilityFromData] of abilitiesDataEntries) {
  // Skip if the ability is already in the map
  if (newMap.has(key)) continue;

  let abilityFromText = abilitiesTextEntries.find(([abilityTextKey]) => abilityTextKey === key)?.at(1) as AbilityText | undefined;

  if (!abilityFromText) {
    console.error(`Missing ability text for ${key}`);
    continue;
  }

  let data: PokemonTypes.Ability = {
    shortDesc: abilityFromText.shortDesc,
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
    data.desc = abilityFromText.desc;
  }

  newMap.set(key, sortObjectByKey(data));
}

dataToClipboard([...newMap.entries()]);

interface AbilityData {
  isNonstandard?: string;
  name: string;
}

interface AbilityText {
  name: string;
  desc?: string;
  shortDesc: string;
}