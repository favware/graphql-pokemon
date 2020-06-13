export namespace Pokemon {
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
  }

  export interface Stats {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  }

  export interface Abilities {
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
    evoLevel?: string | number;
    evos?: string[];
    forme?: string;
    formeLetter?: string;
    genderRatio?: GenderEntry;
    heightm: number;
    num: number;
    otherFormes?: string[];
    prevo?: string;
    species: string;
    types: string[];
    weightkg: number;
    specialShinySprite?: string;
    specialSprite?: string;
    cosmeticFormes?: string[];
  }

  export interface Ability {
    desc?: string;
    shortDesc: string;
    name: string;
  }

  export interface Item {
    name: string;
    desc: string;
    gen: number;
    isNonstandard?: string;
    shortDesc?: string;
  }

  export interface Move {
    name: string;
    shortDesc: string;
    type: string;
    basePower: string;
    pp: number;
    category: MoveCategoryUnion;
    accuracy: number;
    priority: number;
    target: MoveTargetUnion;
    contestType?: string;
    isNonstandard?: string;
    isGMax?: string;
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

  export interface LearnsetMove {
    name: string | null;
    generation: number | null;
  }

  export interface LearnsetLevelupMove extends LearnsetMove {
    level: number | null;
  }

  export type RecordStringArray = Record<string, string[]>;

  export interface TypeDataset {
    doubleEffectiveTypes: (keyof Types)[];
    doubleResistedTypes: (keyof Types)[];
    effectiveTypes: (keyof Types)[];
    effectlessTypes: (keyof Types)[];
    multi: Types;
    normalTypes: (keyof Types)[];
    resistedTypes: (keyof Types)[];
  }

  export interface TypeMatchups {
    damageTaken: Types;
    damageDealt: Types;
  }

  export interface FlavorText {
    version_id: string;
    flavor_text: string;
  }

  export type MoveCategoryUnion = 'Physical' | 'Special' | 'Status';
  export type MoveTargetUnion =
    | 'Random'
    | 'Self'
    | 'Adjacent Ally or Self'
    | 'Adjacent Foes'
    | 'All Adjacent'
    | 'Adjacent Ally'
    | 'Any'
    | 'Foe that last hit user'
    | "Foe's Side"
    | "Ally's Side"
    | 'Normal'
    | 'All';
}

export default Pokemon;
