import { writeFile } from 'node:fs/promises';
import data from './veryRawIncompleteData.json' assert { type: 'json' };

data.shift();

for (const [species, dt] of data) {
  if (dt.evos?.length === 0) {
    dt.evos = undefined;
  }

  dt.types = dt.types.map((t) => `TypesEnum.${t}`);

  // Remaining properties
  dt.evYields = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  dt.isEggObtainable = true;
  dt.catchRate = undefined;
  dt.levellingRate = undefined;
  dt.minimumHatchTime = undefined;
  dt.baseForme = undefined;
  dt.baseSpecies = undefined;
  dt.cosmeticFormes = undefined;
  dt.evoLevel = undefined;
  dt.forme = undefined;
  dt.formeLetter = undefined;
  dt.otherFormes = undefined;
  dt.prevo = undefined;
}

await writeFile('./veryRawIncompleteData2.json', JSON.stringify(data, null, 2));
