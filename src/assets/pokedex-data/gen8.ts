import { Pokedex } from '#dexdata/pokedex';
import type { PokemonTypes } from '#utils/pokemon';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'grookey',
    {
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      baseStats: { hp: 50, atk: 65, def: 50, spa: 40, spd: 40, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['thwackey'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 810,
      species: 'grookey',
      types: ['Grass'],
      weightkg: 5
    }
  ],
  [
    'thwackey',
    {
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      baseStats: { hp: 70, atk: 85, def: 70, spa: 55, spd: 60, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['rillaboom'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 811,
      prevo: 'grookey',
      species: 'thwackey',
      types: ['Grass'],
      weightkg: 14
    }
  ],
  [
    'rillaboom',
    {
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 812,
      otherFormes: ['rillaboomgmax'],
      prevo: 'thwackey',
      species: 'rillaboom',
      types: ['Grass'],
      weightkg: 90
    }
  ],
  [
    'rillaboomgmax',
    {
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      baseSpecies: 'Rillaboom',
      baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 812,
      species: 'rillaboom-gmax',
      types: ['Grass'],
      weightkg: 90
    }
  ],
  [
    'scorbunny',
    {
      abilities: { first: 'Blaze', hidden: 'Libero' },
      baseStats: { hp: 50, atk: 71, def: 40, spa: 40, spd: 40, spe: 69 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['raboot'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 813,
      species: 'scorbunny',
      types: ['Fire'],
      weightkg: 4.5
    }
  ],
  [
    'raboot',
    {
      abilities: { first: 'Blaze', hidden: 'Libero' },
      baseStats: { hp: 65, atk: 86, def: 60, spa: 55, spd: 60, spe: 94 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 16,
      evos: ['cinderace'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 814,
      prevo: 'scorbunny',
      species: 'raboot',
      types: ['Fire'],
      weightkg: 9
    }
  ],
  [
    'cinderace',
    {
      abilities: { first: 'Blaze', hidden: 'Libero' },
      baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 815,
      otherFormes: ['cinderace-gmax'],
      prevo: 'raboot',
      species: 'cinderace',
      types: ['Fire'],
      weightkg: 33
    }
  ],
  [
    'cinderacegmax',
    {
      abilities: { first: 'Blaze', hidden: 'Libero' },
      baseSpecies: 'Cinderace',
      baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 815,
      species: 'cinderace-gmax',
      types: ['Fire'],
      weightkg: 33
    }
  ],
  [
    'sobble',
    {
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      baseStats: { hp: 50, atk: 40, def: 40, spa: 70, spd: 40, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 1 },
      evos: ['drizzile'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 816,
      species: 'sobble',
      types: ['Water'],
      weightkg: 4
    }
  ],
  [
    'drizzile',
    {
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      baseStats: { hp: 65, atk: 60, def: 55, spa: 95, spd: 55, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['inteleon'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 817,
      prevo: 'sobble',
      species: 'drizzile',
      types: ['Water'],
      weightkg: 11.5
    }
  ],
  [
    'inteleon',
    {
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      baseStats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 818,
      otherFormes: ['inteleon-gmax'],
      prevo: 'drizzile',
      species: 'inteleon',
      types: ['Water'],
      weightkg: 45.2
    }
  ],
  [
    'inteleongmax',
    {
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      baseSpecies: 'Inteleon',
      baseStats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 35,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 818,
      species: 'inteleon-gmax',
      types: ['Water'],
      weightkg: 45.2
    }
  ],
  [
    'skwovet',
    {
      abilities: { first: 'Cheek Pouch', hidden: 'Gluttony' },
      baseStats: { hp: 70, atk: 55, def: 55, spa: 35, spd: 35, spe: 25 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['greedent'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 819,
      species: 'skwovet',
      types: ['Normal'],
      weightkg: 2.5
    }
  ],
  [
    'greedent',
    {
      abilities: { first: 'Cheek Pouch', hidden: 'Gluttony' },
      baseStats: { hp: 120, atk: 95, def: 95, spa: 55, spd: 75, spe: 20 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 820,
      prevo: 'skwovet',
      species: 'greedent',
      types: ['Normal'],
      weightkg: 6
    }
  ],
  [
    'rookidee',
    {
      abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
      baseStats: { hp: 38, atk: 47, def: 35, spa: 33, spd: 35, spe: 57 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['corvisquire'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 821,
      species: 'rookidee',
      types: ['Flying'],
      weightkg: 1.8
    }
  ],
  [
    'corvisquire',
    {
      abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
      baseStats: { hp: 68, atk: 67, def: 55, spa: 43, spd: 55, spe: 77 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 18,
      evos: ['corvisquire'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 822,
      prevo: 'rookidee',
      species: 'corvisquire',
      types: ['Flying'],
      weightkg: 16
    }
  ],
  [
    'corviknight',
    {
      abilities: { first: 'Pressure', second: 'Unnerve', hidden: 'Mirror Armor' },
      baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 823,
      otherFormes: ['corviknightgmax'],
      prevo: 'corvisquire',
      species: 'corviknight',
      types: ['Flying', 'Steel'],
      weightkg: 75
    }
  ],
  [
    'corviknightgmax',
    {
      abilities: { first: 'Pressure', second: 'Unnerve', hidden: 'Mirror Armor' },
      baseSpecies: 'Corviknight',
      baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 14,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 823,
      species: 'corviknight-gmax',
      types: ['Flying', 'Steel'],
      weightkg: 350,
      aliases: ['gigantamax corviknight']
    }
  ],
  [
    'blipbug',
    {
      abilities: { first: 'Swarm', second: 'Compound Eyes', hidden: 'Telepathy' },
      baseStats: { hp: 25, atk: 20, def: 20, spa: 25, spd: 45, spe: 45 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['dottler'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 824,
      species: 'blipbug',
      types: ['Bug'],
      weightkg: 8
    }
  ],
  [
    'dottler',
    {
      abilities: { first: 'Swarm', second: 'Compound Eyes', hidden: 'Telepathy' },
      baseStats: { hp: 50, atk: 35, def: 80, spa: 50, spd: 90, spe: 30 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 10,
      evos: ['orbeetle'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 825,
      prevo: 'blipbug',
      species: 'dottler',
      types: ['Bug', 'Psychic'],
      weightkg: 19.5
    }
  ],
  [
    'orbeetle',
    {
      abilities: { first: 'Swarm', second: 'Frisk', hidden: 'Telepathy' },
      baseStats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 826,
      otherFormes: ['orbeetlegmax'],
      prevo: 'dottler',
      species: 'orbeetle',
      types: ['Bug', 'Psychic'],
      weightkg: 40.8
    }
  ],
  [
    'orbeetlegmax',
    {
      abilities: { first: 'Swarm', second: 'Frisk', hidden: 'Telepathy' },
      baseSpecies: 'Orbeetle',
      baseStats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 826,
      species: 'orbeetle-gmax',
      types: ['Bug', 'Psychic'],
      weightkg: 122.4,
      aliases: ['gigantamax orbeetle']
    }
  ],
  [
    'nickit',
    {
      abilities: { first: 'Run Away', second: 'Unburden', hidden: 'Stakeout' },
      baseStats: { hp: 40, atk: 28, def: 28, spa: 47, spd: 52, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['thievul'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 827,
      species: 'nickit',
      types: ['Dark'],
      weightkg: 8.9
    }
  ],
  [
    'thievul',
    {
      abilities: { first: 'Run Away', second: 'Unburden', hidden: 'Stakeout' },
      baseStats: { hp: 70, atk: 58, def: 58, spa: 87, spd: 92, spe: 90 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 18,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 828,
      prevo: 'nickit',
      species: 'thievul',
      types: ['Dark'],
      weightkg: 19.9
    }
  ],
  [
    'gossifleur',
    {
      abilities: {
        first: 'Cotton Down',
        second: 'Regenerator',
        hidden: 'Effect Spore'
      },
      baseStats: { hp: 40, atk: 40, def: 60, spa: 40, spd: 60, spe: 10 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['eldegoss'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 829,
      species: 'gossifleur',
      types: ['Grass'],
      weightkg: 2.2
    }
  ],
  [
    'eldegoss',
    {
      abilities: {
        first: 'Cotton Down',
        second: 'Regenerator',
        hidden: 'Effect Spore'
      },
      baseStats: { hp: 60, atk: 50, def: 90, spa: 80, spd: 120, spe: 60 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 830,
      prevo: 'gossifleur',
      species: 'eldegoss',
      types: ['Grass'],
      weightkg: 2.5
    }
  ],
  [
    'wooloo',
    {
      abilities: { first: 'Fluffy', second: 'Run Away', hidden: 'Bulletproof' },
      baseStats: { hp: 42, atk: 40, def: 55, spa: 40, spd: 45, spe: 48 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['dubwool'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 831,
      species: 'wooloo',
      types: ['Normal'],
      weightkg: 6
    }
  ],
  [
    'dubwool',
    {
      abilities: { first: 'Fluffy', second: 'Steadfast', hidden: 'Bulletproof' },
      baseStats: { hp: 72, atk: 80, def: 100, spa: 60, spd: 90, spe: 88 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 832,
      prevo: 'wooloo',
      species: 'dubwool',
      types: ['Normal'],
      weightkg: 43
    }
  ],
  [
    'chewtle',
    {
      abilities: {
        first: 'Strong Jaw',
        second: 'Shell Armor',
        hidden: 'Swift Swim'
      },
      baseStats: { hp: 50, atk: 64, def: 50, spa: 38, spd: 38, spe: 44 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['drednaw'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 833,
      species: 'chewtle',
      types: ['Water'],
      weightkg: 8.5
    }
  ],
  [
    'drednaw',
    {
      abilities: {
        first: 'Strong Jaw',
        second: 'Shell Armor',
        hidden: 'Swift Swim'
      },
      baseStats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 834,
      otherFormes: ['drednawgmax'],
      prevo: 'chewtle',
      species: 'drednaw',
      types: ['Water', 'Rock'],
      weightkg: 115.5
    }
  ],
  [
    'drednawgmax',
    {
      abilities: {
        first: 'Strong Jaw',
        second: 'Shell Armor',
        hidden: 'Swift Swim'
      },
      baseSpecies: 'Drednaw',
      baseStats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 834,
      species: 'drednaw-gmax',
      types: ['Water', 'Rock'],
      weightkg: 346.5,
      aliases: ['gigantamax drednaw']
    }
  ],
  [
    'yamper',
    {
      abilities: { first: 'Ball Fetch', hidden: 'Rattled' },
      baseStats: { hp: 59, atk: 45, def: 50, spa: 40, spd: 50, spe: 26 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['boltund'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 835,
      species: 'yamper',
      types: ['Electric'],
      weightkg: 13.5
    }
  ],
  [
    'boltund',
    {
      abilities: { first: 'Strong Jaw', hidden: 'Competitive' },
      baseStats: { hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 836,
      prevo: 'yamper',
      species: 'boltund',
      types: ['Electric'],
      weightkg: 34
    }
  ],
  [
    'rolycoly',
    {
      abilities: {
        first: 'Steam Engine',
        second: 'Heatproof',
        hidden: 'Flash Fire'
      },
      baseStats: { hp: 30, atk: 40, def: 50, spa: 40, spd: 50, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['carkol'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 837,
      species: 'rolycoly',
      types: ['Rock'],
      weightkg: 12
    }
  ],
  [
    'carkol',
    {
      abilities: {
        first: 'Steam Engine',
        second: 'Flame Body',
        hidden: 'Flash Fire'
      },
      baseStats: { hp: 80, atk: 60, def: 90, spa: 60, spd: 70, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 18,
      evos: ['coalossal'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 838,
      prevo: 'rolycoly',
      species: 'carkol',
      types: ['Rock', 'Fire'],
      weightkg: 78
    }
  ],
  [
    'coalossal',
    {
      abilities: {
        first: 'Steam Engine',
        second: 'Flame Body',
        hidden: 'Flash Fire'
      },
      baseStats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 839,
      otherFormes: ['coalossalgmax'],
      prevo: 'carkol',
      species: 'coalossal',
      types: ['Rock', 'Fire'],
      weightkg: 310.5
    }
  ],
  [
    'coalossalgmax',
    {
      abilities: {
        first: 'Steam Engine',
        second: 'Flame Body',
        hidden: 'Flash Fire'
      },
      baseSpecies: 'Coalossal',
      baseStats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 42,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 839,
      species: 'coalossal-gmax',
      types: ['Rock', 'Fire'],
      weightkg: 930,
      aliases: ['gigantamax coalossal']
    }
  ],
  [
    'applin',
    {
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Bulletproof' },
      baseStats: { hp: 40, atk: 40, def: 80, spa: 40, spd: 40, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['flapple', 'appletun'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 840,
      species: 'applin',
      types: ['Grass', 'Dragon'],
      weightkg: 0.5
    }
  ],
  [
    'flapple',
    {
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Hustle' },
      baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Tart Apple',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 841,
      otherFormes: ['flapplegmax'],
      prevo: 'applin',
      species: 'flapple',
      types: ['Grass', 'Dragon'],
      weightkg: 1
    }
  ],
  [
    'flapplegmax',
    {
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Hustle' },
      baseSpecies: 'Flapple',
      baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 841,
      species: 'flapple-gmax',
      types: ['Grass', 'Dragon'],
      weightkg: 1,
      aliases: ['gigantamax flapple']
    }
  ],
  [
    'appletun',
    {
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Thick Fat' },
      baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Sweet Apple',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 842,
      otherFormes: ['appletungmax'],
      prevo: 'applin',
      species: 'appletun',
      types: ['Grass', 'Dragon'],
      weightkg: 13
    }
  ],
  [
    'appletungmax',
    {
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Thick Fat' },
      baseSpecies: 'Appletun',
      baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Sweet Apple',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 24,
      isEggObtainable: true,
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      num: 842,
      prevo: 'applin',
      species: 'appletun-gmax',
      types: ['Grass', 'Dragon'],
      weightkg: 40,
      aliases: ['gigantamax appletun']
    }
  ],
  [
    'silicobra',
    {
      abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
      baseStats: { hp: 52, atk: 57, def: 75, spa: 35, spd: 50, spe: 46 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['sandaconda'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 843,
      species: 'silicobra',
      types: ['Ground'],
      weightkg: 7.6
    }
  ],
  [
    'sandaconda',
    {
      abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
      baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 844,
      otherFormes: ['sandacondagmax'],
      prevo: 'silicobra',
      species: 'sandaconda',
      types: ['Ground'],
      weightkg: 65.5
    }
  ],
  [
    'sandacondagmax',
    {
      abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
      baseSpecies: 'Sandaconda',
      baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 20,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 844,
      otherFormes: ['sandacondagmax'],
      prevo: 'silicobra',
      species: 'sandaconda-gmax',
      types: ['Ground'],
      weightkg: 197,
      aliases: ['gigantamax sandaconda']
    }
  ],
  [
    'cramorant',
    {
      abilities: { first: 'Gulp Missile' },
      baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 845,
      otherFormes: ['cramorantgulping', 'cramorantgorging'],
      species: 'cramorant',
      types: ['Flying', 'Water'],
      weightkg: 18
    }
  ],
  [
    'cramorantgulping',
    {
      abilities: { first: 'Gulp Missile' },
      baseSpecies: 'Cramorant',
      baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Gulping',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 845,
      otherFormes: ['cramorant', 'cramorantgorging'],
      species: 'Cramorant-Gulping',
      types: ['Flying', 'Water'],
      weightkg: 18
    }
  ],
  [
    'cramorantgorging',
    {
      abilities: { first: 'Gulp Missile' },
      baseSpecies: 'Cramorant',
      baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Gorging',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 845,
      otherFormes: ['cramorant', 'cramorantgulping'],
      species: 'Cramorant-Gorging',
      types: ['Flying', 'Water'],
      weightkg: 18
    }
  ],
  [
    'arrokuda',
    {
      abilities: { first: 'Swift Swim', hidden: 'Propeller Tail' },
      baseStats: { hp: 41, atk: 63, def: 40, spa: 40, spd: 30, spe: 66 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['barraskewda'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 846,
      species: 'arrokuda',
      types: ['Water'],
      weightkg: 1
    }
  ],
  [
    'barraskewda',
    {
      abilities: { first: 'Swift Swim', hidden: 'Propeller Tail' },
      baseStats: { hp: 61, atk: 123, def: 60, spa: 60, spd: 50, spe: 136 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 847,
      prevo: 'arrokuda',
      species: 'barraskewda',
      types: ['Water'],
      weightkg: 30
    }
  ],
  [
    'toxel',
    {
      abilities: { first: 'Rattled', second: 'Static', hidden: 'Klutz' },
      baseStats: { hp: 40, atk: 38, def: 35, spa: 54, spd: 35, spe: 40 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['toxtricity', 'toxtricitylowkey'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 848,
      species: 'toxel',
      types: ['Electric', 'Poison'],
      weightkg: 0.11
    }
  ],
  [
    'toxtricity',
    {
      abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
      baseForme: 'Amped',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: '30 while having a Adamant, Brave, Docile, Hardy, Hasty, Impish, Jolly, Lax, Naive, Naughty, Rash, Quirky, or Sassy Nature',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      otherFormes: ['toxtricitylowkey', 'toxtricitygmax'],
      prevo: 'toxel',
      species: 'toxtricity',
      types: ['Electric', 'Poison'],
      weightkg: 40,
      aliases: ['toxtricitya', 'toxtricityamped']
    }
  ],
  [
    'toxtricitylowkey',
    {
      abilities: { first: 'Punk Rock', second: 'Minus', hidden: 'Technician' },
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: '30 while having a Bashful, Bold, Calm, Careful, Gentle, Lonely, Mild, Modest, Quiet, Relaxed, Serious, or Timid Nature',
      forme: 'Low-Key',
      formeLetter: 'L',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      otherFormes: ['toxtricitylowkeygmax'],
      prevo: 'toxel',
      species: 'toxtricity-low-key',
      types: ['Electric', 'Poison'],
      weightkg: 40,
      aliases: ['toxtricityl', 'toxtricitylk']
    }
  ],
  [
    'toxtricitygmax',
    {
      abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
      baseSpecies: 'Toxtricity',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      species: 'toxtricity-gmax',
      types: ['Electric', 'Poison'],
      weightkg: 140,
      aliases: ['gigantamax toxtricity']
    }
  ],
  [
    'toxtricitylowkeygmax',
    {
      abilities: { first: 'Punk Rock', second: 'Minus', hidden: 'Technician' },
      baseSpecies: 'Toxtricity-Low-Key',
      baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Low-Key-Gmax',
      formeLetter: 'LKG',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 849,
      species: 'toxtricity-low-key-gmax',
      types: ['Electric', 'Poison'],
      weightkg: 140
    }
  ],
  [
    'sizzlipede',
    {
      abilities: {
        first: 'Flash Fire',
        second: 'White Smoke',
        hidden: 'Flame Body'
      },
      baseStats: { hp: 50, atk: 65, def: 45, spa: 50, spd: 50, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['centiskorch'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 850,
      species: 'sizzlipede',
      types: ['Fire', 'Bug'],
      weightkg: 1
    }
  ],
  [
    'centiskorch',
    {
      abilities: {
        first: 'Flash Fire',
        second: 'White Smoke',
        hidden: 'Flame Body'
      },
      baseStats: { hp: 100, atk: 115, def: 65, spa: 90, spd: 90, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 851,
      prevo: 'sizzlipede',
      species: 'centiskorch',
      types: ['Fire', 'Bug'],
      weightkg: 120
    }
  ],
  [
    'centiskorchgmax',
    {
      abilities: {
        first: 'Flash Fire',
        second: 'White Smoke',
        hidden: 'Flame Body'
      },
      baseSpecies: 'Centiskorch',
      baseStats: { hp: 100, atk: 15, def: 65, spa: 90, spd: 90, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 10,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 851,
      species: 'centiskorch-gmax',
      types: ['Fire', 'Bug'],
      weightkg: 360,
      aliases: ['gigantamax centiskorch']
    }
  ],
  [
    'clobbopus',
    {
      abilities: { first: 'Limber', hidden: 'Technician' },
      baseStats: { hp: 50, atk: 68, def: 60, spa: 50, spd: 50, spe: 32 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Brown',
      eggGroups: ['Water 1', 'Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['grapploct'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 852,
      species: 'clobbopus',
      types: ['Fighting'],
      weightkg: 4
    }
  ],
  [
    'grapploct',
    {
      abilities: { first: 'Limber', hidden: 'Technician' },
      baseStats: { hp: 80, atk: 118, def: 90, spa: 70, spd: 80, spe: 42 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'level up while knowing Taunt',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 853,
      prevo: 'clobbopus',
      species: 'grapploct',
      types: ['Fighting'],
      weightkg: 39
    }
  ],
  [
    'sinistea',
    {
      abilities: { first: 'Weak Armor', hidden: 'Cursed Body' },
      baseForme: 'Phony',
      baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['polteageist'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 854,
      otherFormes: ['sinisteaantique'],
      species: 'sinistea',
      types: ['Ghost'],
      weightkg: 0.2
    }
  ],
  [
    'sinisteaantique',
    {
      abilities: { first: 'Weak Armor', hidden: 'Cursed Body' },
      baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['polteageistantique'],
      forme: 'antique',
      formeLetter: 'A',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 854,
      otherFormes: ['sinistea'],
      species: 'sinistea-antique',
      types: ['Ghost'],
      weightkg: 0.2
    }
  ],
  [
    'polteageist',
    {
      abilities: {
        first: 'Weak Armor',
        second: 'Weak Armor',
        hidden: 'Cursed Body'
      },
      baseForme: 'Phony',
      baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Cracked Pot',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 855,
      otherFormes: ['polteageistantique'],
      prevo: 'sinistea',
      species: 'polteageist',
      types: ['Ghost'],
      weightkg: 0.4
    }
  ],
  [
    'polteageistantique',
    {
      abilities: {
        first: 'Weak Armor',
        second: 'Weak Armor',
        hidden: 'Cursed Body'
      },
      baseSpecies: 'polteageist',
      baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Chipped Pot',
      forme: 'antique',
      formeLetter: 'A',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 855,
      otherFormes: ['polteageist'],
      prevo: 'sinisteaantique',
      species: 'polteageist-antique',
      types: ['Ghost'],
      weightkg: 0.4
    }
  ],
  [
    'hatenna',
    {
      abilities: {
        first: 'Healer',
        second: 'Anticipation',
        hidden: 'Magic Bounce'
      },
      baseStats: { hp: 42, atk: 30, def: 45, spa: 56, spd: 53, spe: 39 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['hattrem'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 856,
      species: 'hatenna',
      types: ['Psychic'],
      weightkg: 3.4
    }
  ],
  [
    'hattrem',
    {
      abilities: {
        first: 'Healer',
        second: 'Anticipation',
        hidden: 'Magic Bounce'
      },
      baseStats: { hp: 57, atk: 40, def: 65, spa: 86, spd: 73, spe: 49 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 857,
      prevo: 'hatenna',
      species: 'hattrem',
      types: ['Psychic'],
      weightkg: 4.8
    }
  ],
  [
    'hatterene',
    {
      abilities: {
        first: 'Healer',
        second: 'Anticipation',
        hidden: 'Magic Bounce'
      },
      baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 858,
      prevo: 'hattrem',
      species: 'hatterene',
      types: ['Psychic', 'Fairy'],
      weightkg: 5.1
    }
  ],
  [
    'hatterenegmax',
    {
      abilities: {
        first: 'Healer',
        second: 'Anticipation',
        hidden: 'Magic Bounce'
      },
      baseSpecies: 'hatterene',
      baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 42,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 20,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 858,
      prevo: 'hattrem',
      species: 'hatterene-gmax',
      types: ['Psychic', 'Fairy'],
      weightkg: 15.3,
      aliases: ['gigantamax hatterene']
    }
  ],
  [
    'impidimp',
    {
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      baseStats: { hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['morgrem'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 859,
      species: 'impidimp',
      types: ['Dark', 'Fairy'],
      weightkg: 5.5
    }
  ],
  [
    'morgrem',
    {
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      baseStats: { hp: 65, atk: 60, def: 45, spa: 75, spd: 55, spe: 70 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['grimmsnarl'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 860,
      prevo: 'impidimp',
      species: 'morgrem',
      types: ['Dark', 'Fairy'],
      weightkg: 12.5
    }
  ],
  [
    'grimmsnarl',
    {
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 861,
      otherFormes: ['grimmsnarlgmax'],
      prevo: 'morgrem',
      species: 'grimmsnarl',
      types: ['Dark', 'Fairy'],
      weightkg: 61
    }
  ],
  [
    'grimmsnarlgmax',
    {
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      baseSpecies: 'grimmsnarl',
      baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 12,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 861,
      prevo: 'morgrem',
      species: 'grimmsnarl-gmax',
      types: ['Dark', 'Fairy'],
      weightkg: 183,
      aliases: ['gigantamax grimmsnarl']
    }
  ],
  [
    'obstagoon',
    {
      abilities: { first: 'Reckless', second: 'Guts', hidden: 'Defiant' },
      baseStats: { hp: 93, atk: 90, def: 101, spa: 60, spd: 81, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'level 35 at night',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 862,
      prevo: 'linoonegalar',
      species: 'obstagoon',
      types: ['Dark', 'Normal'],
      weightkg: 46,
      aliases: ['goon']
    }
  ],
  [
    'perrserker',
    {
      abilities: {
        first: 'Battle Armor',
        second: 'Tough Claws',
        hidden: 'Steely Spirit'
      },
      baseStats: { hp: 70, atk: 110, def: 100, spa: 50, spd: 60, spe: 50 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 863,
      prevo: 'meowthgalar',
      species: 'perrserker',
      types: ['Steel'],
      weightkg: 28
    }
  ],
  [
    'cursola',
    {
      abilities: { first: 'Weak Armor', hidden: 'Perish Body' },
      baseStats: { hp: 60, atk: 95, def: 50, spa: 145, spd: 130, spe: 30 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'White',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 864,
      prevo: 'corsolagalar',
      species: 'cursola',
      types: ['Ghost'],
      weightkg: 0.4
    }
  ],
  [
    'sirfetchd',
    {
      abilities: { first: 'Steadfast', hidden: 'Scrappy' },
      baseStats: { hp: 62, atk: 135, def: 95, spa: 68, spd: 82, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Land 3 critical hits in 1 battle',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 865,
      prevo: 'farfetchdgalar',
      species: "sirfetch'd",
      types: ['Fighting'],
      weightkg: 117
    }
  ],
  [
    'mrrime',
    {
      abilities: {
        first: 'Tangled Feet',
        second: 'Screen Cleaner',
        hidden: 'Ice Body'
      },
      baseStats: { hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 866,
      prevo: 'mrmimegalar',
      species: 'Mr. Rime',
      types: ['Ice', 'Psychic'],
      weightkg: 58.2,
      aliases: ['rime']
    }
  ],
  [
    'runerigus',
    {
      abilities: {
        first: 'Wandering Spirit',
        second: 'Wandering Spirit',
        hidden: 'Wandering Spirit'
      },
      baseStats: { hp: 58, atk: 95, def: 145, spa: 50, spd: 105, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'have 49+ damage on Yamask and walk under stone sculpture in Dusty Bowl Wild Area',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 867,
      prevo: 'yamaskgalar',
      species: 'runerigus',
      types: ['Ground', 'Ghost'],
      weightkg: 66.6
    }
  ],
  [
    'milcery',
    {
      abilities: { first: 'Sweet Veil', hidden: 'Aroma Veil' },
      baseStats: { hp: 45, atk: 40, def: 40, spa: 50, spd: 61, spe: 34 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 868,
      species: 'milcery',
      types: ['Fairy'],
      weightkg: 0.3
    }
  ],
  [
    'alcremie',
    {
      abilities: {
        first: 'Sweet Veil',
        second: 'Sweet Veil',
        hidden: 'Aroma Veil'
      },
      baseForme: 'Vanilla Cream',
      baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'White',
      cosmeticFormes: [
        'Alcremie-Ruby-Cream',
        'Alcremie-Matcha-Cream',
        'Alcremie-Mint-Cream',
        'Alcremie-Lemon-Cream',
        'Alcremie-Salted-Cream',
        'Alcremie-Ruby-Swirl',
        'Alcremie-Caramel-Swirl',
        'Alcremie-Rainbow-Swirl'
      ],
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Spin the joystick while Milcery is holding a sweet.',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 869,
      prevo: 'milcery',
      species: 'alcremie',
      types: ['Fairy'],
      weightkg: 0.5,
      aliases: [
        'alcremiecaramelswirl',
        'alcremielemoncream',
        'alcremiematchacream',
        'alcremiemintcream',
        'alcremierainbowswirl',
        'alcremierubycream',
        'alcremierubyswirl',
        'alcremiesaltedcream'
      ]
    }
  ],
  [
    'alcremiegmax',
    {
      abilities: { first: 'Sweet Veil', hidden: 'Aroma Veil' },
      baseSpecies: 'Alcremie',
      baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 30,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 869,
      species: 'alcremie-gmax',
      types: ['Fairy'],
      weightkg: 3,
      aliases: ['gigantamax alcremie']
    }
  ],
  [
    'falinks',
    {
      abilities: { first: 'Battle Armor', hidden: 'Defiant' },
      baseStats: { hp: 65, atk: 100, def: 100, spa: 70, spd: 60, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Fairy', 'Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 1, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 870,
      species: 'falinks',
      types: ['Fighting'],
      weightkg: 62
    }
  ],
  [
    'pincurchin',
    {
      abilities: { first: 'Lightning Rod', hidden: 'Electric Surge' },
      baseStats: { hp: 48, atk: 101, def: 95, spa: 91, spd: 85, spe: 15 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Water 1', 'Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 871,
      species: 'pincurchin',
      types: ['Electric'],
      weightkg: 1
    }
  ],
  [
    'snom',
    {
      abilities: { first: 'Shield Dust', hidden: 'Ice Scales' },
      baseStats: { hp: 30, atk: 25, def: 35, spa: 45, spd: 30, spe: 20 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['frosmoth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 872,
      species: 'snom',
      types: ['Ice', 'Bug'],
      weightkg: 3.8
    }
  ],
  [
    'frosmoth',
    {
      abilities: { first: 'Shield Dust', hidden: 'Ice Scales' },
      baseStats: { hp: 70, atk: 65, def: 60, spa: 125, spd: 90, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      evos: ['frosmoth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 873,
      prevo: 'snom',
      species: 'frosmoth',
      types: ['Ice', 'Bug'],
      weightkg: 42
    }
  ],
  [
    'stonjourner',
    {
      abilities: { first: 'Power Spot' },
      baseStats: { hp: 100, atk: 125, def: 135, spa: 20, spd: 20, spe: 20 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 874,
      species: 'stonjourner',
      types: ['Rock'],
      weightkg: 520
    }
  ],
  [
    'eiscue',
    {
      abilities: { first: 'Ice Face' },
      baseStats: { hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 875,
      otherFormes: ['eiscuenoice'],
      species: 'eiscue',
      types: ['Ice'],
      weightkg: 89
    }
  ],
  [
    'eiscuenoice',
    {
      abilities: { first: 'Ice Face' },
      baseSpecies: 'Eiscue',
      baseStats: { hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      forme: 'noice',
      formeLetter: 'N',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 875,
      species: 'eiscue-noice',
      types: ['Ice'],
      weightkg: 89,
      aliases: ['eiscuen']
    }
  ],
  [
    'indeedee',
    {
      abilities: {
        first: 'Inner Focus',
        second: 'Synchronize',
        hidden: 'Psychic Surge'
      },
      baseStats: { hp: 60, atk: 65, def: 55, spa: 105, spd: 95, spe: 95 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Purple',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 876,
      species: 'indeedee',
      types: ['Psychic', 'Normal'],
      weightkg: 28
    }
  ],
  [
    'indeedeef',
    {
      abilities: {
        first: 'Own Tempo',
        second: 'Synchronize',
        hidden: 'Psychic Surge'
      },
      baseSpecies: 'Indeedee',
      baseStats: { hp: 70, atk: 55, def: 65, spa: 95, spd: 105, spe: 85 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Purple',
      eggGroups: ['Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 876,
      species: 'indeedee-f',
      types: ['Psychic', 'Normal'],
      weightkg: 28
    }
  ],
  [
    'morpeko',
    {
      abilities: { first: 'Hunger Switch' },
      baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 877,
      otherFormes: ['morpekohangry'],
      species: 'morpeko',
      types: ['Electric', 'Dark'],
      weightkg: 3
    }
  ],
  [
    'morpekohangry',
    {
      abilities: { first: 'Hunger Switch' },
      baseSpecies: 'Morpeko',
      baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Hangry',
      formeLetter: 'H',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 877,
      species: 'morpeko-hangry',
      types: ['Electric', 'Dark'],
      weightkg: 3,
      aliases: ['morpekoh']
    }
  ],
  [
    'cufant',
    {
      abilities: { first: 'Sheer Force', hidden: 'Heavy Metal' },
      baseStats: { hp: 72, atk: 80, def: 49, spa: 40, spd: 49, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['copperajah'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 878,
      species: 'cufant',
      types: ['Steel'],
      weightkg: 100
    }
  ],
  [
    'copperajah',
    {
      abilities: { first: 'Sheer Force', hidden: 'Heavy Metal' },
      baseStats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 879,
      prevo: 'cufant',
      species: 'copperajah',
      types: ['Steel'],
      weightkg: 650
    }
  ],
  [
    'copperajahgmax',
    {
      abilities: { first: 'Sheer Force', hidden: 'Heavy Metal' },
      baseSpecies: 'Copperajah',
      baseStats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Field', 'Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 20,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 879,
      species: 'copperajah-gmax',
      types: ['Steel'],
      weightkg: 1950,
      aliases: ['gigantamax copperajah']
    }
  ],
  [
    'dracozolt',
    {
      abilities: { first: 'Volt Absorb', second: 'Hustle', hidden: 'Sand Rush' },
      baseStats: { hp: 90, atk: 100, def: 90, spa: 80, spd: 70, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 880,
      species: 'dracozolt',
      types: ['Electric', 'Dragon'],
      weightkg: 190
    }
  ],
  [
    'arctozolt',
    {
      abilities: { first: 'Volt Absorb', second: 'Static', hidden: 'Slush Rush' },
      baseStats: { hp: 90, atk: 100, def: 90, spa: 90, spd: 80, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 881,
      species: 'arctozolt',
      types: ['Electric', 'Ice'],
      weightkg: 150
    }
  ],
  [
    'dracovish',
    {
      abilities: {
        first: 'Water Absorb',
        second: 'Strong Jaw',
        hidden: 'Sand Rush'
      },
      baseStats: { hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 882,
      species: 'dracovish',
      types: ['Water', 'Dragon'],
      weightkg: 215
    }
  ],
  [
    'arctovish',
    {
      abilities: {
        first: 'Water Absorb',
        second: 'Ice Body',
        hidden: 'Slush Rush'
      },
      baseStats: { hp: 90, atk: 90, def: 100, spa: 80, spd: 90, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 883,
      species: 'arctovish',
      types: ['Water', 'Ice'],
      weightkg: 175
    }
  ],
  [
    'duraludon',
    {
      abilities: {
        first: 'Light Metal',
        second: 'Heavy Metal',
        hidden: 'Stalwart'
      },
      baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 884,
      species: 'duraludon',
      types: ['Steel', 'Dragon'],
      weightkg: 40
    }
  ],
  [
    'duraludongmax',
    {
      abilities: {
        first: 'Light Metal',
        second: 'Heavy Metal',
        hidden: 'Stalwart'
      },
      baseSpecies: 'duraludon',
      baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 884,
      species: 'duraludon-gmax',
      types: ['Steel', 'Dragon'],
      weightkg: 120,
      aliases: ['gigantamax duraludon']
    }
  ],
  [
    'dreepy',
    {
      abilities: {
        first: 'Clear Body',
        second: 'Infiltrator',
        hidden: 'Cursed Body'
      },
      baseStats: { hp: 28, atk: 60, def: 30, spa: 40, spd: 30, spe: 82 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Amorphous', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['drakloak'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 885,
      species: 'dreepy',
      types: ['Dragon', 'Ghost'],
      weightkg: 2
    }
  ],
  [
    'drakloak',
    {
      abilities: {
        first: 'Clear Body',
        second: 'Infiltrator',
        hidden: 'Cursed Body'
      },
      baseStats: { hp: 68, atk: 80, def: 50, spa: 60, spd: 50, spe: 102 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Amorphous', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 50,
      evos: ['dragapult'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 886,
      prevo: 'dreepy',
      species: 'drakloak',
      types: ['Dragon', 'Ghost'],
      weightkg: 11
    }
  ],
  [
    'dragapult',
    {
      abilities: {
        first: 'Clear Body',
        second: 'Infiltrator',
        hidden: 'Cursed Body'
      },
      baseStats: { hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Amorphous', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 60,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 887,
      prevo: 'drakloak',
      species: 'dragapult',
      types: ['Dragon', 'Ghost'],
      weightkg: 50
    }
  ],
  [
    'zacian',
    {
      abilities: { first: 'Intrepid Sword' },
      baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 888,
      otherFormes: ['zaciancrowned'],
      species: 'zacian',
      types: ['Fairy'],
      weightkg: 110
    }
  ],
  [
    'zaciancrowned',
    {
      abilities: { first: 'Intrepid Sword' },
      baseSpecies: 'Zacian',
      baseStats: { hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Crowned',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 888,
      species: 'zacian-crowned',
      types: ['Fairy', 'Steel'],
      weightkg: 355,
      aliases: ['zacianc', 'zanianc']
    }
  ],
  [
    'zamazenta',
    {
      abilities: { first: 'Dauntless Shield' },
      baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 889,
      otherFormes: ['zamazentacrowned'],
      species: 'zamazenta',
      types: ['Fighting'],
      weightkg: 210
    }
  ],
  [
    'zamazentacrowned',
    {
      abilities: { first: 'Dauntless Shield' },
      baseSpecies: 'Zamazenta',
      baseStats: { hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128 },
      catchRate: { base: 10, percentageWithOrdinaryPokeballAtFullHealth: '3.9%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Crowned',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 889,
      species: 'zamazenta-crowned',
      types: ['Fighting', 'Steel'],
      weightkg: 785,
      aliases: ['zamazentac']
    }
  ],
  [
    'eternatus',
    {
      abilities: { first: 'Pressure' },
      baseStats: { hp: 140, atk: 85, def: 95, spa: 145, spd: 95, spe: 130 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 20,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 890,
      otherFormes: ['eternatuseternamax'],
      species: 'eternatus',
      types: ['Poison', 'Dragon'],
      weightkg: 950
    }
  ],
  [
    'eternatuseternamax',
    {
      abilities: { first: 'Pressure' },
      baseSpecies: 'Eternatus',
      baseStats: { hp: 255, atk: 115, def: 250, spa: 125, spd: 250, spe: 130 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Eternamax',
      formeLetter: 'E',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 100,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 890,
      species: 'eternatus-eternamax',
      types: ['Poison', 'Dragon'],
      weightkg: 950,
      aliases: ['entermax enternatus', 'eternamax', 'gigantamax enternatus']
    }
  ],
  [
    'kubfu',
    {
      abilities: { first: 'Inner Focus' },
      baseStats: { hp: 60, atk: 90, def: 60, spa: 53, spd: 50, spe: 72 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['urshifu', 'urshifurapidstrike'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 891,
      species: 'kubfu',
      types: ['Fighting'],
      weightkg: 12
    }
  ],
  [
    'urshifu',
    {
      abilities: { first: 'Unseen Fist' },
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Defeat the Single Strike Tower',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      otherFormes: ['urshifurapidstrike', 'urshifugmax'],
      prevo: 'Kubfu',
      species: 'urshifu',
      types: ['Fighting', 'Dark'],
      weightkg: 105,
      aliases: ['urshifusingle', 'urshifusinglestrike', 'urshifuss']
    }
  ],
  [
    'urshifurapidstrike',
    {
      abilities: { first: 'Unseen Fist' },
      baseSpecies: 'Urshifu',
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Defeat the Rapid Strike Tower',
      forme: 'Rapid-Strike',
      formeLetter: 'RS',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      otherFormes: ['urshifu', 'urshifurapidstrikegmax'],
      prevo: 'Kubfu',
      species: 'urshifu-rapid-strike',
      types: ['Fighting', 'Water'],
      weightkg: 105,
      aliases: ['urshifurapid', 'urshifurs', 'watershifu']
    }
  ],
  [
    'urshifugmax',
    {
      abilities: { first: 'Unseen Fist' },
      baseSpecies: 'Urshifu',
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      species: 'urshifu-gmax',
      types: ['Fighting', 'Dark'],
      weightkg: 105
    }
  ],
  [
    'urshifurapidstrikegmax',
    {
      abilities: { first: 'Unseen Fist' },
      baseSpecies: 'Urshifu-Rapid-Strike',
      baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Rapid-Strike-Gmax',
      formeLetter: 'RSG',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 892,
      species: 'urshifu-rapid-strike-gmax',
      types: ['Fighting', 'Water'],
      weightkg: 105
    }
  ],
  [
    'zarude',
    {
      abilities: { first: 'Leaf Guard' },
      baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 893,
      otherFormes: ['zarudedada'],
      species: 'zarude',
      types: ['Dark', 'Grass'],
      weightkg: 70
    }
  ],
  [
    'zarudedada',
    {
      abilities: { first: 'Leaf Guard' },
      baseSpecies: 'zarude',
      baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Dada',
      formeLetter: 'D',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.8,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 893,
      species: 'zarude-dada',
      types: ['Dark', 'Grass'],
      weightkg: 70
    }
  ],
  [
    'regieleki',
    {
      abilities: { first: 'Transistor' },
      baseStats: { hp: 80, atk: 100, def: 50, spa: 100, spd: 50, spe: 200 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 894,
      species: 'regieleki',
      types: ['Electric'],
      weightkg: 145
    }
  ],
  [
    'regidrago',
    {
      abilities: { first: "Dragon's Maw" },
      baseStats: { hp: 200, atk: 100, def: 50, spa: 100, spd: 50, spe: 80 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 895,
      species: 'regidrago',
      types: ['Dragon'],
      weightkg: 200
    }
  ],
  [
    'glastrier',
    {
      abilities: { first: 'Chilling Neigh' },
      baseStats: { hp: 100, atk: 145, def: 130, spa: 65, spd: 110, spe: 30 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 896,
      species: 'glastrier',
      types: ['Ice'],
      weightkg: 800
    }
  ],
  [
    'spectrier',
    {
      abilities: { first: 'Grim Neigh' },
      baseStats: { hp: 100, atk: 65, def: 60, spa: 145, spd: 80, spe: 130 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 897,
      species: 'spectrier',
      types: ['Ghost'],
      weightkg: 44.5
    }
  ],
  [
    'calyrex',
    {
      abilities: { first: 'Unnerve' },
      baseStats: { hp: 100, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Calyrex',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 898,
      otherFormes: ['calyrexice', 'calyrexshadow'],
      species: 'calyrex',
      types: ['Psychic', 'Grass'],
      weightkg: 7.7
    }
  ],
  [
    'calyrexice',
    {
      abilities: { first: 'As One (Glastrier)' },
      baseSpecies: 'Calyrex',
      baseStats: { hp: 100, atk: 165, def: 150, spa: 85, spd: 130, spe: 50 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Ice',
      formeLetter: 'CI',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 898,
      otherFormes: ['calyrexshadow'],
      species: 'calyrex-ice',
      types: ['Psychic', 'Ice'],
      weightkg: 809.1,
      aliases: ['calyrexice', 'calyrexir']
    }
  ],
  [
    'calyrexshadow',
    {
      abilities: { first: 'As One (Spectrier)' },
      baseSpecies: 'Calyrex',
      baseStats: { hp: 100, atk: 85, def: 80, spa: 165, spd: 100, spe: 150 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Shadow',
      formeLetter: 'CS',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 898,
      otherFormes: ['calyrexice'],
      species: 'calyrex-shadow',
      types: ['Psychic', 'Ghost'],
      weightkg: 53.6,
      aliases: ['calyrexshadow', 'calyrexsr']
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}
