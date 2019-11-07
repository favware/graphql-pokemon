export namespace Pokemon {
  export type StringOrNumber = string | number;

  export interface FlavorText {
    version_id: string;
    flavor_text: string;
  }

  export interface Types {
    bug: number;
    dark: number;
    dragon: number;
    electric: number;
    fairy: number;
    fighting: number;
    fire: number;
    flying: number;
    ghost: number;
    grass: number;
    ground: number;
    ice: number;
    normal: number;
    poison: number;
    psychic: number;
    rock: number;
    steel: number;
    water: number;
  }

  export interface GenderEntry {
    male: number;
    female: number;
    special?: GendersUnion;
  }

  export interface Stats extends Record<string, number> {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  }

  export interface Abilities extends Record<string, string | undefined> {
    first: string;
    second?: string;
    hidden?: string;
    special?: string;
  }

  export interface DexEntry {
    abilities: Abilities;
    baseForme?: string;
    baseSpecies?: string;
    baseStats: Stats;
    color: string;
    eggGroups?: string[];
    evoLevel?: StringOrNumber;
    evos?: string[];
    forme?: string;
    formeLetter?: string;
    gender?: 'M' | 'F' | 'N';
    genderRatio?: GenderEntry;
    heightm: number;
    num: number;
    otherFormes?: string[];
    prevo?: string;
    species: string;
    types: string[];
    weightkg: number;
  }

  export interface Ability {
    desc?: string;
    shortDesc: string;
    name: string;
    num: number;
  }

  export interface Item {
    name: string;
    desc: string;
    gen: number;
    num: number;
    shortDesc?: string;
  }

  export interface Move {
    num: number;
    name: string;
    shortDesc: string;
    type: string;
    basePower: string;
    pp: number;
    category: MoveCategoriesUnion;
    accuracy: number;
    priority: number;
    target: string;
    contestType: string;
    isZ?: string;
    desc?: string;
  }

  export interface Alias {
    alias: string;
  }

  export interface AbilityAlias extends Alias {
    ability: string;
  }

  export interface TierAlias extends Alias {
    tier: string;
  }

  export interface DexAlias extends Alias {
    name: string;
  }

  export interface ItemAlias extends Alias {
    item: string;
  }

  export interface MoveAlias extends Alias {
    move: string;
  }

  export interface DexDataset extends Exclude<DexEntry, 'evos' | 'prevo' | 'gender' | 'genderRatio'> {
    preevolutions: DexEntry[];
    evolutions: DexEntry[];
    flavorText: Flavor[];
    genderData: GenderEntry | 'none';
    sprite: string;
    shinySprite: string;
    smogonTier: string | 'Undiscovered';
  }

  export interface Flavor {
    game: string;
    text: string;
  }

  export interface Learnset {
    learnset: Record<string, string[]>;
  }

  export type LearnsetData = Record<string, Learnset>;

  export type RecordStringArray = Record<string, string[]>;

  export interface TypeDataset {
    doubleEffectiveTypes: string[];
    doubleResistedTypes: string[];
    effectiveTypes: string[];
    effectlessTypes: string[];
    multi: Types;
    normalTypes: string[];
    resistedTypes: string[];
  }

  export interface TypeMatchups {
    damageTaken: Types;
    damageDealt: Types;
  }

  export interface FlavorText {
    version_id: string;
    flavor_text: string;
  }


  export type MoveCategoriesUnion = 'Physical' | 'Special' | 'Status';
  export type GendersUnion = 'Female' | 'Male' | 'None' | 'Unknown';
}

export default Pokemon;