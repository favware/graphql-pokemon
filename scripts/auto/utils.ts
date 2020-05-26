import { Colors } from '@klasa/console';
import { remove, writeFileAtomic } from 'fs-nextra';
import fetch from 'node-fetch';
import { resolve } from 'path';
import ts from 'typescript';

export const yellowColour = new Colors({ text: 'yellow' });
export const redColour = new Colors({ text: 'red' });
export const greenColour = new Colors({ text: 'green' });

export const mapToJson = (map: Map<string, unknown>) => JSON.stringify([...map]);

export const importFileFromWeb = async <R>({ url, temporaryFileName }: { url: string; temporaryFileName: string }) => {
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

  const temporaryOutputFile = resolve(__dirname, temporaryFileName);

  await writeFileAtomic(temporaryOutputFile, result.outputText);
  const TiersData = (await import(temporaryOutputFile)) as R;

  await remove(temporaryOutputFile);

  return TiersData;
};

export interface DataJSON {
  tiersLastSha: string;
  learnsetsLastSha: string;
}

export type SmogonTiersData = Record<'BattleFormatsData', Record<string, SpeciesFormatsData>>;
export type SmogonLearnsetData = Record<'BattleLearnsets', Record<string, LearnsetData>>;

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
interface LearnsetData {
  learnset?: { [moveid: string]: string[] };
  eventData?: EventInfo[];
  eventOnly?: boolean;
  encounters?: EventInfo[];
  exists?: boolean;
}
interface EventInfo {
  generation: number;
  level?: number;
  /** true: always shiny, 1: sometimes shiny, false | undefined: never shiny */
  shiny?: boolean | 1;
  gender?: GenderName;
  nature?: string;
  ivs?: SparseStatsTable;
  perfectIVs?: number;
  /** true: has hidden ability, false | undefined: never has hidden ability */
  isHidden?: boolean;
  abilities?: string[];
  maxEggMoves?: number;
  moves?: string[];
  pokeball?: string;
  from?: string;
}

type Nonstandard = 'Past' | 'Future' | 'Unobtainable' | 'CAP' | 'LGPE' | 'Custom';
type GenderName = 'M' | 'F' | 'N' | '';
type SparseStatsTable = Partial<StatsTable>;
type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type StatName = 'hp' | StatNameExceptHP;
type StatsTable = { [stat in StatName]: number };
