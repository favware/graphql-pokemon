import type { IsNonStandard } from '#utils/isNonStandardEnum';
import type { TypesEnum } from '#utils/pokemonTypes';

export namespace PokemonTypes {
  interface AliasEntry {
    key?: string;
    aliases?: string[];
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
    female: string;

    male: string;
  }

  export interface Stats<T extends number = number> {
    atk: T;

    def: T;

    hp: T;

    spa: T;

    spd: T;

    spe: T;
  }

  export interface Abilities {
    first: string;

    hidden?: string;

    second?: string;

    special?: string;
  }

  export interface CatchRateEntry {
    base: number;

    percentageWithOrdinaryPokeballAtFullHealth: string;
  }

  export interface DexEntry extends AliasEntry {
    abilities: Abilities;

    baseForme?: string;

    baseSpecies?: string;

    baseStats: Stats;

    catchRate?: CatchRateEntry;

    color: `${Capitalize<'Black' | 'Blue' | 'Brown' | 'Gray' | 'Green' | 'Pink' | 'Purple' | 'Red' | 'White' | 'Yellow'>}`;

    cosmeticFormes?: string[];

    eggGroups?: `${Capitalize<
      | 'Monster'
      | 'Water 1'
      | 'Bug'
      | 'Flying'
      | 'Field'
      | 'Fairy'
      | 'Grass'
      | 'Ground'
      | 'Human-Like'
      | 'Water 3'
      | 'Mineral'
      | 'Amorphous'
      | 'Water 2'
      | 'Ditto'
      | 'Dragon'
      | 'Undiscovered'
    >}`[];

    evoLevel?: string | number;

    evos?: string[];

    evYields: Stats<0 | 1 | 2 | 3>;

    forme?: string;

    formeLetter?: string;

    genderRatio?: GenderEntry;

    heightm: number;

    isEggObtainable: boolean;

    levellingRate?: LevellingRateUnion;

    minimumHatchTime?: number;

    num: number;

    otherFormes?: string[];

    prevo?: string;

    specialBackSprite?: string;

    specialBulbapediaUrl?: string;

    specialShinyBackSprite?: string;

    specialShinySprite?: string;

    specialSprite?: string;

    species: string;

    types: TypesEnum[];

    weightkg: number;

    mythical?: boolean;

    legendary?: boolean;
  }

  export interface Ability extends AliasEntry {
    desc?: string;

    isFieldAbility?: string;

    isNonstandard?: IsNonStandard;

    name: string;

    shortDesc: string;
  }

  export interface Item extends AliasEntry {
    desc: string;

    gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

    isNonstandard?: IsNonStandard;

    keyItem?: boolean;

    name: string;

    shortDesc?: string;

    specialSprite?: string;
  }

  export interface Move extends AliasEntry {
    accuracy: number;

    basePower: string;

    category: MoveCategoryUnion;

    contestType?: string;

    desc?: string;

    isFieldMove?: string;

    isGMax?: string;

    isNonstandard?: IsNonStandard;

    isZ?: string;

    maxMovePower?: number;

    name: string;

    pp: number;

    priority: number;

    shortDesc: string;

    target: MoveTargetUnion;

    type: `${Capitalize<keyof Types>}`;

    zMovePower?: number;
  }

  export interface LearnsetMove {
    generation: number | null;

    name: string | null;
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
    damageDealt: Types;

    damageTaken: Types;
  }

  export interface FlavorText {
    flavor_text: string;

    version_id: string;
  }

  export type LevellingRateUnion = 'Slow' | 'Medium Slow' | 'Medium Fast' | 'Fast' | 'Erratic' | 'Fluctuating';
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
