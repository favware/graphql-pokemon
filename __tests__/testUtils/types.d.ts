/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSONObject: any;
  GenderUnion: any;
  MoveCategoryUnion: any;
}

export interface AbilitiesEntry {
  __typename?: 'AbilitiesEntry';
  first: Scalars['String'];
  second?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  special?: Maybe<Scalars['String']>;
}

export interface AbilityEntry {
  __typename?: 'AbilityEntry';
  desc?: Maybe<Scalars['String']>;
  shortDesc: Scalars['String'];
  name: Scalars['String'];
  num: Scalars['Int'];
  bulbapediaPage: Scalars['String'];
  serebiiPage: Scalars['String'];
  smogonPage: Scalars['String'];
}

export interface DexDetails {
  __typename?: 'DexDetails';
  num: Scalars['Int'];
  species: Scalars['String'];
  types: Array<Scalars['String']>;
  abilities: AbilitiesEntry;
  baseStats: StatsEntry;
  color: Scalars['String'];
  eggGroups?: Maybe<Array<Scalars['String']>>;
  evolutionLevel?: Maybe<Scalars['String']>;
  evos?: Maybe<Array<Scalars['String']>>;
  prevo?: Maybe<Scalars['String']>;
  forme?: Maybe<Scalars['String']>;
  formeLetter?: Maybe<Scalars['String']>;
  gender: GenderEntry;
  height: Scalars['Int'];
  weight: Scalars['Int'];
  baseForme?: Maybe<Scalars['String']>;
  baseSpecies?: Maybe<Scalars['String']>;
  otherFormes?: Maybe<Array<Scalars['String']>>;
  evolutions?: Maybe<Array<DexDetails>>;
  preevolutions?: Maybe<Array<DexDetails>>;
  flavorTexts: Array<FlavorEntry>;
  sprite: Scalars['String'];
  shinySprite: Scalars['String'];
  smogonTier: Scalars['String'];
  bulbapediaPage: Scalars['String'];
  serebiiPage: Scalars['String'];
  smogonPage: Scalars['String'];
}

export interface DexEntry {
  __typename?: 'DexEntry';
  num: Scalars['Int'];
  species: Scalars['String'];
  types: Array<Scalars['String']>;
  abilities: AbilitiesEntry;
  baseStats: StatsEntry;
  color: Scalars['String'];
  eggGroups?: Maybe<Array<Scalars['String']>>;
  evolutionLevel?: Maybe<Scalars['String']>;
  evos?: Maybe<Array<Scalars['String']>>;
  prevo?: Maybe<Scalars['String']>;
  forme?: Maybe<Scalars['String']>;
  formeLetter?: Maybe<Scalars['String']>;
  gender: GenderEntry;
  height: Scalars['Int'];
  weight: Scalars['Int'];
  baseForme?: Maybe<Scalars['String']>;
  baseSpecies?: Maybe<Scalars['String']>;
  otherFormes?: Maybe<Array<Scalars['String']>>;
}

export interface FlavorEntry {
  __typename?: 'FlavorEntry';
  game: Scalars['String'];
  flavor: Scalars['String'];
}

export interface GenderEntry {
  __typename?: 'GenderEntry';
  male: Scalars['String'];
  female: Scalars['String'];
  special?: Maybe<Scalars['GenderUnion']>;
}


export interface ItemEntry {
  __typename?: 'ItemEntry';
  desc: Scalars['String'];
  shortDesc?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  num: Scalars['Int'];
  bulbapediaPage: Scalars['String'];
  serebiiPage: Scalars['String'];
  smogonPage: Scalars['String'];
}

export interface LearnsetEntry {
  __typename?: 'LearnsetEntry';
  levelUpMoves?: Maybe<Array<LearnsetLevelUpMove>>;
  virtualTransferMoves?: Maybe<Array<LearnsetMove>>;
  tutorMoves?: Maybe<Array<LearnsetMove>>;
  tmMoves?: Maybe<Array<LearnsetMove>>;
  eggMoves?: Maybe<Array<LearnsetMove>>;
  eventMoves?: Maybe<Array<LearnsetMove>>;
  dreamworldMoves?: Maybe<Array<LearnsetMove>>;
}

export interface LearnsetLevelUpMove {
  __typename?: 'LearnsetLevelUpMove';
  name?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
}

export interface LearnsetMove {
  __typename?: 'LearnsetMove';
  name?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
}


export interface MoveEntry {
  __typename?: 'MoveEntry';
  num: Scalars['Int'];
  name: Scalars['String'];
  shortDesc: Scalars['String'];
  type: Scalars['String'];
  basePower: Scalars['String'];
  pp: Scalars['Int'];
  category: Scalars['MoveCategoryUnion'];
  accuracy: Scalars['Int'];
  priority: Scalars['Int'];
  target: Scalars['String'];
  contestType: Scalars['String'];
  bulbapediaPage: Scalars['String'];
  serebiiPage: Scalars['String'];
  smogonPage: Scalars['String'];
  isZ?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
}

export interface StatsEntry {
  __typename?: 'StatsEntry';
  hp: Scalars['Int'];
  attack: Scalars['Int'];
  defense: Scalars['Int'];
  specialattack: Scalars['Int'];
  specialdefense: Scalars['Int'];
  speed: Scalars['Int'];
}

export interface TypeEntry {
  __typename?: 'TypeEntry';
  doubleEffectiveTypes: Array<Scalars['String']>;
  effectiveTypes: Array<Scalars['String']>;
  normalTypes: Array<Scalars['String']>;
  resistedTypes: Array<Scalars['String']>;
  doubleResistedTypes: Array<Scalars['String']>;
  effectlessTypes: Array<Scalars['String']>;
}

export interface TypeMatchups {
  __typename?: 'TypeMatchups';
  attacking: TypeEntry;
  defending: TypeEntry;
}

export interface Query {
  __typename?: 'Query';
  getAbilityDetailsByFuzzy: AbilityEntry;
  getAbilityDetailsByName: AbilityEntry;
  getAbilityByFuzzy: Array<Scalars['JSONObject']>;
  getAbilityByName: Scalars['JSONObject'];
  getPokemonDetails: DexDetails;
  getPokemomDetailsByName: DexDetails;
  getPokemonDetailsByFuzzy: DexDetails;
  getDexEntries: Array<DexEntry>;
  getDexEntryBySpeciesName: Scalars['JSONObject'];
  getDexEntryByDexNumber: Scalars['JSONObject'];
  getItemDetailsByFuzzy: ItemEntry;
  getItemDetailsByName: ItemEntry;
  getItemByFuzzy: Array<Scalars['JSONObject']>;
  getItemByName: Scalars['JSONObject'];
  getPokemonLearnset: LearnsetEntry;
  getMoveDetailsByFuzzy: MoveEntry;
  getMoveDetailsByName: MoveEntry;
  getMoveByFuzzy: Array<Scalars['JSONObject']>;
  getMoveByName: Scalars['JSONObject'];
  getTypeMatchup: TypeMatchups;
  getTypeByName: Scalars['JSONObject'];
}

export interface DataResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Query[K]>;
}