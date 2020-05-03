import { writeFileAtomic, remove } from 'fs-nextra';
import fetch from 'node-fetch';
import { resolve } from 'path';
import ts from 'typescript';

export const mapToJson = (map: Map<string, unknown>) => JSON.stringify([...map]);

export const needFile = async (url: string) => {
  const request = await fetch(url);
  const body = await request.text();

  const result = ts.transpileModule(body, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      newLine: ts.NewLineKind.LineFeed,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES2019,
      removeComments: true,
      declaration: false,
      sourceMap: false,
      declarationMap: false,
      incremental: false,
      importHelpers: false
    }
  });

  const temporaryOutputFile = resolve(__dirname, 'tiers.ts');

  await writeFileAtomic(temporaryOutputFile, result.outputText);
  const TiersData = (await import(resolve(__dirname, 'tiers.ts'))) as { BattleFormatsData: Record<string, SpeciesFormatsData> };

  await remove(temporaryOutputFile);

  return TiersData;
};

export interface DataJSON {
  lastSha: string;
}

interface SpeciesFormatsData {
  comboMoves?: readonly string[];
  doublesTier?: string;
  essentialMove?: string;
  exclusiveMoves?: readonly string[];
  isNonstandard?: Nonstandard | null;
  maleOnlyHidden?: boolean;
  randomBattleMoves?: readonly string[];
  randomDoubleBattleMoves?: readonly string[];
  randomSets?: readonly Gen2RandomSet[];
  tier?: string;
  unreleasedHidden?: boolean | 'Past';
}

type Nonstandard = 'Past' | 'Future' | 'Unobtainable' | 'CAP' | 'LGPE' | 'Custom';
interface Gen2RandomSet {
  chance: number;
  item?: string[];
  baseMove1?: string;
  baseMove2?: string;
  baseMove3?: string;
  baseMove4?: string;
  fillerMoves1?: string[];
  fillerMoves2?: string[];
  fillerMoves3?: string[];
  fillerMoves4?: string[];
}
