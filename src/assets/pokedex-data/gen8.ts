import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'grookey',
    {
      species: 'grookey',
      num: 810,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 50,
        spa: 40,
        spd: 40,
        spe: 65
      },
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      heightm: 0.3,
      weightkg: 5,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      evos: ['thwackey'],
      eggGroups: ['Field', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'thwackey',
    {
      species: 'thwackey',
      num: 811,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 70,
        spa: 55,
        spd: 60,
        spe: 80
      },
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      heightm: 0.7,
      weightkg: 14,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'grookey',
      evos: ['rillaboom'],
      evoLevel: 16,
      eggGroups: ['Field', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'rillaboom',
    {
      species: 'rillaboom',
      num: 812,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 125,
        def: 90,
        spa: 60,
        spd: 70,
        spe: 85
      },
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      heightm: 2.1,
      weightkg: 90,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'thwackey',
      evoLevel: 35,
      otherFormes: ['rillaboomgmax'],
      eggGroups: ['Field', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'rillaboomgmax',
    {
      species: 'rillaboom-gmax',
      num: 812,
      types: ['Grass'],
      baseSpecies: 'Rillaboom',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 125,
        def: 90,
        spa: 60,
        spd: 70,
        spe: 85
      },
      abilities: { first: 'Overgrow', hidden: 'Grassy Surge' },
      heightm: 3,
      weightkg: 90,
      color: 'Green',
      evoLevel: 35,
      eggGroups: ['Field', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'scorbunny',
    {
      species: 'scorbunny',
      num: 813,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 71,
        def: 40,
        spa: 40,
        spd: 40,
        spe: 69
      },
      abilities: { first: 'Blaze', hidden: 'Libero' },
      heightm: 0.3,
      weightkg: 4.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      },
      color: 'White',
      evos: ['raboot'],
      eggGroups: ['Field', 'Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'raboot',
    {
      species: 'raboot',
      num: 814,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 86,
        def: 60,
        spa: 55,
        spd: 60,
        spe: 94
      },
      abilities: { first: 'Blaze', hidden: 'Libero' },
      heightm: 0.6,
      weightkg: 9,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      },
      color: 'Gray',
      prevo: 'scorbunny',
      evos: ['cinderace'],
      evoLevel: 16,
      eggGroups: ['Field', 'Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'cinderace',
    {
      species: 'cinderace',
      num: 815,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 116,
        def: 75,
        spa: 65,
        spd: 75,
        spe: 119
      },
      abilities: { first: 'Blaze', hidden: 'Libero' },
      heightm: 1.4,
      weightkg: 33,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'White',
      prevo: 'raboot',
      evoLevel: 35,
      otherFormes: ['cinderace-gmax'],
      eggGroups: ['Field', 'Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'cinderacegmax',
    {
      species: 'cinderace-gmax',
      num: 815,
      types: ['Fire'],
      baseSpecies: 'Cinderace',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 116,
        def: 75,
        spa: 65,
        spd: 75,
        spe: 119
      },
      abilities: { first: 'Blaze', hidden: 'Libero' },
      heightm: 3,
      weightkg: 33,
      color: 'White',
      evoLevel: 35,
      eggGroups: ['Field', 'Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      }
    }
  ],
  [
    'sobble',
    {
      species: 'sobble',
      num: 816,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 40,
        def: 40,
        spa: 70,
        spd: 40,
        spe: 70
      },
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      heightm: 0.3,
      weightkg: 4,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 1
      },
      color: 'Blue',
      evos: ['drizzile'],
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'drizzile',
    {
      species: 'drizzile',
      num: 817,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 60,
        def: 55,
        spa: 95,
        spd: 55,
        spe: 90
      },
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      heightm: 0.7,
      weightkg: 11.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'Blue',
      prevo: 'sobble',
      evos: ['inteleon'],
      evoLevel: 16,
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'inteleon',
    {
      species: 'inteleon',
      num: 818,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 65,
        spa: 125,
        spd: 65,
        spe: 120
      },
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      heightm: 1.9,
      weightkg: 45.2,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Blue',
      prevo: 'drizzile',
      evoLevel: 35,
      otherFormes: ['inteleon-gmax'],
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'inteleongmax',
    {
      species: 'inteleon-gmax',
      num: 818,
      types: ['Water'],
      baseSpecies: 'Inteleon',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 65,
        spa: 125,
        spd: 65,
        spe: 120
      },
      abilities: { first: 'Torrent', hidden: 'Sniper' },
      heightm: 3,
      weightkg: 45.2,
      color: 'Blue',
      evoLevel: 35,
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      }
    }
  ],
  [
    'skwovet',
    {
      species: 'skwovet',
      num: 819,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 55,
        def: 55,
        spa: 35,
        spd: 35,
        spe: 25
      },
      abilities: { first: 'Cheek Pouch', hidden: 'Gluttony' },
      heightm: 0.3,
      weightkg: 2.5,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Brown',
      evos: ['greedent'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'greedent',
    {
      species: 'greedent',
      num: 820,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 120,
        atk: 95,
        def: 95,
        spa: 55,
        spd: 75,
        spe: 20
      },
      abilities: { first: 'Cheek Pouch', hidden: 'Gluttony' },
      heightm: 0.6,
      weightkg: 6,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Brown',
      prevo: 'skwovet',
      evoLevel: 24,
      eggGroups: ['Field'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'rookidee',
    {
      species: 'rookidee',
      num: 821,
      types: ['Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 47,
        def: 35,
        spa: 33,
        spd: 35,
        spe: 57
      },
      abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
      heightm: 0.2,
      weightkg: 1.8,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      },
      color: 'Blue',
      evos: ['corvisquire'],
      eggGroups: ['Flying'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'corvisquire',
    {
      species: 'corvisquire',
      num: 822,
      types: ['Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 67,
        def: 55,
        spa: 43,
        spd: 55,
        spe: 77
      },
      abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
      heightm: 0.8,
      weightkg: 16,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      },
      color: 'Blue',
      prevo: 'rookidee',
      evos: ['corvisquire'],
      evoLevel: 18,
      eggGroups: ['Flying'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'corviknight',
    {
      species: 'corviknight',
      num: 823,
      types: ['Flying', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 98,
        atk: 87,
        def: 105,
        spa: 53,
        spd: 85,
        spe: 67
      },
      abilities: { first: 'Pressure', second: 'Unnerve', hidden: 'Mirror Armor' },
      heightm: 2.2,
      weightkg: 75,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Blue',
      prevo: 'corvisquire',
      evoLevel: 38,
      eggGroups: ['Flying'],
      otherFormes: ['corviknightgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'corviknightgmax',
    {
      species: 'corviknight-gmax',
      baseSpecies: 'Corviknight',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 823,
      types: ['Flying', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 98,
        atk: 87,
        def: 105,
        spa: 53,
        spd: 85,
        spe: 67
      },
      abilities: { first: 'Pressure', second: 'Unnerve', hidden: 'Mirror Armor' },
      heightm: 14,
      weightkg: 350,
      color: 'Blue',
      eggGroups: ['Flying'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'blipbug',
    {
      species: 'blipbug',
      num: 824,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 25,
        atk: 20,
        def: 20,
        spa: 25,
        spd: 45,
        spe: 45
      },
      abilities: { first: 'Swarm', second: 'Compound Eyes', hidden: 'Telepathy' },
      heightm: 0.4,
      weightkg: 8,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      },
      color: 'Blue',
      evos: ['dottler'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'dottler',
    {
      species: 'dottler',
      num: 825,
      types: ['Bug', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 35,
        def: 80,
        spa: 50,
        spd: 90,
        spe: 30
      },
      abilities: { first: 'Swarm', second: 'Compound Eyes', hidden: 'Telepathy' },
      heightm: 0.8,
      weightkg: 19.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      },
      color: 'Yellow',
      prevo: 'blipbug',
      evos: ['orbeetle'],
      evoLevel: 10,
      eggGroups: ['Bug'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'orbeetle',
    {
      species: 'orbeetle',
      num: 826,
      types: ['Bug', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 110,
        spa: 80,
        spd: 120,
        spe: 90
      },
      abilities: { first: 'Swarm', second: 'Frisk', hidden: 'Telepathy' },
      heightm: 0.4,
      weightkg: 40.8,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      },
      color: 'Red',
      prevo: 'dottler',
      evoLevel: 30,
      eggGroups: ['Bug'],
      otherFormes: ['orbeetlegmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'orbeetlegmax',
    {
      species: 'orbeetle-gmax',
      num: 826,
      baseSpecies: 'Orbeetle',
      forme: 'Gmax',
      formeLetter: 'G',
      types: ['Bug', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 110,
        spa: 80,
        spd: 120,
        spe: 90
      },
      abilities: { first: 'Swarm', second: 'Frisk', hidden: 'Telepathy' },
      heightm: 5,
      weightkg: 122.4,
      color: 'Red',
      eggGroups: ['Bug'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      }
    }
  ],
  [
    'nickit',
    {
      species: 'nickit',
      num: 827,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 28,
        def: 28,
        spa: 47,
        spd: 52,
        spe: 50
      },
      abilities: { first: 'Run Away', second: 'Unburden', hidden: 'Stakeout' },
      heightm: 0.6,
      weightkg: 8.9,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      },
      color: 'Brown',
      evos: ['thievul'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'thievul',
    {
      species: 'thievul',
      num: 828,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 58,
        def: 58,
        spa: 87,
        spd: 92,
        spe: 90
      },
      abilities: { first: 'Run Away', second: 'Unburden', hidden: 'Stakeout' },
      heightm: 1.2,
      weightkg: 19.9,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      },
      color: 'Brown',
      prevo: 'nickit',
      evoLevel: 18,
      eggGroups: ['Field'],
      catchRate: {
        base: 127,
        percentageWithOrdinaryPokeballAtFullHealth: '26%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'gossifleur',
    {
      species: 'gossifleur',
      num: 829,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 40,
        def: 60,
        spa: 40,
        spd: 60,
        spe: 10
      },
      abilities: { first: 'Cotton Down', second: 'Regenerator', hidden: 'Effect Spore' },
      heightm: 0.4,
      weightkg: 2.2,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      },
      color: 'Green',
      evos: ['eldegoss'],
      eggGroups: ['Grass'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'eldegoss',
    {
      species: 'eldegoss',
      num: 830,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 90,
        spa: 80,
        spd: 120,
        spe: 60
      },
      abilities: { first: 'Cotton Down', second: 'Regenerator', hidden: 'Effect Spore' },
      heightm: 0.5,
      weightkg: 2.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      },
      color: 'Green',
      prevo: 'gossifleur',
      evoLevel: 20,
      eggGroups: ['Grass'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'wooloo',
    {
      species: 'wooloo',
      num: 831,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 42,
        atk: 40,
        def: 55,
        spa: 40,
        spd: 45,
        spe: 48
      },
      abilities: { first: 'Fluffy', second: 'Run Away', hidden: 'Bulletproof' },
      heightm: 0.6,
      weightkg: 6,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'White',
      evos: ['dubwool'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'dubwool',
    {
      species: 'dubwool',
      num: 832,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 80,
        def: 100,
        spa: 60,
        spd: 90,
        spe: 88
      },
      abilities: { first: 'Fluffy', second: 'Steadfast', hidden: 'Bulletproof' },
      heightm: 1.3,
      weightkg: 43,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'White',
      prevo: 'wooloo',
      evoLevel: 24,
      eggGroups: ['Field'],
      catchRate: {
        base: 127,
        percentageWithOrdinaryPokeballAtFullHealth: '26%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'chewtle',
    {
      species: 'chewtle',
      num: 833,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 64,
        def: 50,
        spa: 38,
        spd: 38,
        spe: 44
      },
      abilities: { first: 'Strong Jaw', second: 'Shell Armor', hidden: 'Swift Swim' },
      heightm: 0.3,
      weightkg: 8.5,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      evos: ['drednaw'],
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'drednaw',
    {
      species: 'drednaw',
      num: 834,
      types: ['Water', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 115,
        def: 90,
        spa: 48,
        spd: 68,
        spe: 74
      },
      abilities: { first: 'Strong Jaw', second: 'Shell Armor', hidden: 'Swift Swim' },
      heightm: 1,
      weightkg: 115.5,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'chewtle',
      evoLevel: 22,
      eggGroups: ['Monster', 'Water 1'],
      otherFormes: ['drednawgmax'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'drednawgmax',
    {
      species: 'drednaw-gmax',
      baseSpecies: 'Drednaw',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 834,
      types: ['Water', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 115,
        def: 90,
        spa: 48,
        spd: 68,
        spe: 74
      },
      abilities: { first: 'Strong Jaw', second: 'Shell Armor', hidden: 'Swift Swim' },
      heightm: 24,
      weightkg: 346.5,
      color: 'Green',
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'yamper',
    {
      species: 'yamper',
      num: 835,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 59,
        atk: 45,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 26
      },
      abilities: { first: 'Ball Fetch', hidden: 'Rattled' },
      heightm: 0.3,
      weightkg: 13.5,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Yellow',
      evos: ['boltund'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'boltund',
    {
      species: 'boltund',
      num: 836,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 69,
        atk: 90,
        def: 60,
        spa: 90,
        spd: 60,
        spe: 121
      },
      abilities: { first: 'Strong Jaw', hidden: 'Competitive' },
      heightm: 1,
      weightkg: 34,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      },
      color: 'Yellow',
      prevo: 'yamper',
      evoLevel: 25,
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'rolycoly',
    {
      species: 'rolycoly',
      num: 837,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 40,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 30
      },
      abilities: { first: 'Steam Engine', second: 'Heatproof', hidden: 'Flash Fire' },
      heightm: 0.3,
      weightkg: 12,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Black',
      evos: ['carkol'],
      eggGroups: ['Mineral'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'carkol',
    {
      species: 'carkol',
      num: 838,
      types: ['Rock', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 60,
        def: 90,
        spa: 60,
        spd: 70,
        spe: 50
      },
      abilities: { first: 'Steam Engine', second: 'Flame Body', hidden: 'Flash Fire' },
      heightm: 1.1,
      weightkg: 78,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Black',
      prevo: 'rolycoly',
      evos: ['coalossal'],
      evoLevel: 18,
      eggGroups: ['Mineral'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'coalossal',
    {
      species: 'coalossal',
      num: 839,
      types: ['Rock', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 80,
        def: 120,
        spa: 80,
        spd: 90,
        spe: 30
      },
      abilities: { first: 'Steam Engine', second: 'Flame Body', hidden: 'Flash Fire' },
      heightm: 2.8,
      weightkg: 310.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Black',
      prevo: 'carkol',
      evoLevel: 34,
      eggGroups: ['Mineral'],
      otherFormes: ['coalossalgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'coalossalgmax',
    {
      species: 'coalossal-gmax',
      baseSpecies: 'Coalossal',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 839,
      types: ['Rock', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 80,
        def: 120,
        spa: 80,
        spd: 90,
        spe: 30
      },
      abilities: { first: 'Steam Engine', second: 'Flame Body', hidden: 'Flash Fire' },
      heightm: 42,
      weightkg: 930,
      color: 'Black',
      eggGroups: ['Mineral'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'applin',
    {
      species: 'applin',
      num: 840,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 40,
        def: 80,
        spa: 40,
        spd: 40,
        spe: 20
      },
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Bulletproof' },
      heightm: 0.2,
      weightkg: 0.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      evos: ['flapple', 'appletun'],
      eggGroups: ['Grass', 'Dragon'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'flapple',
    {
      species: 'flapple',
      num: 841,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 80,
        spa: 95,
        spd: 60,
        spe: 70
      },
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Hustle' },
      heightm: 0.3,
      weightkg: 1,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'applin',
      evoLevel: 'use Tart Apple',
      eggGroups: ['Grass', 'Dragon'],
      otherFormes: ['flapplegmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'flapplegmax',
    {
      species: 'flapple-gmax',
      baseSpecies: 'Flapple',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 841,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 80,
        spa: 95,
        spd: 60,
        spe: 70
      },
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Hustle' },
      heightm: 24,
      weightkg: 1,
      color: 'Green',
      eggGroups: ['Grass', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'appletun',
    {
      species: 'appletun',
      num: 842,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 85,
        def: 80,
        spa: 100,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Thick Fat' },
      heightm: 0.4,
      weightkg: 13,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'applin',
      evoLevel: 'use Sweet Apple',
      eggGroups: ['Grass', 'Dragon'],
      otherFormes: ['appletungmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'appletungmax',
    {
      species: 'appletun-gmax',
      baseSpecies: 'Appletun',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 842,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 85,
        def: 80,
        spa: 100,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Thick Fat' },
      heightm: 24,
      weightkg: 40,
      color: 'Green',
      prevo: 'applin',
      evoLevel: 'use Sweet Apple',
      eggGroups: ['Grass', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Erratic',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'silicobra',
    {
      species: 'silicobra',
      num: 843,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 52,
        atk: 57,
        def: 75,
        spa: 35,
        spd: 50,
        spe: 46
      },
      abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
      heightm: 2.2,
      weightkg: 7.6,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      evos: ['sandaconda'],
      eggGroups: ['Field', 'Dragon'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'sandaconda',
    {
      species: 'sandaconda',
      num: 844,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 107,
        def: 125,
        spa: 65,
        spd: 70,
        spe: 71
      },
      abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
      heightm: 3.8,
      weightkg: 65.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'silicobra',
      evoLevel: 36,
      eggGroups: ['Field', 'Dragon'],
      otherFormes: ['sandacondagmax'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'sandacondagmax',
    {
      species: 'sandaconda-gmax',
      baseSpecies: 'Sandaconda',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 844,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 107,
        def: 125,
        spa: 65,
        spd: 70,
        spe: 71
      },
      abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
      heightm: 20,
      weightkg: 197,
      color: 'Green',
      prevo: 'silicobra',
      evoLevel: 36,
      eggGroups: ['Field', 'Dragon'],
      otherFormes: ['sandacondagmax'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'cramorant',
    {
      species: 'cramorant',
      num: 845,
      types: ['Flying', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 55,
        spa: 85,
        spd: 95,
        spe: 85
      },
      abilities: { first: 'Gulp Missile' },
      heightm: 0.8,
      weightkg: 18,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      otherFormes: ['cramorantgulping', 'cramorantgorging'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'cramorantgulping',
    {
      species: 'Cramorant-Gulping',
      baseSpecies: 'Cramorant',
      forme: 'Gulping',
      formeLetter: 'G',
      num: 845,
      types: ['Flying', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 55,
        spa: 85,
        spd: 95,
        spe: 85
      },
      abilities: { first: 'Gulp Missile' },
      heightm: 0.8,
      weightkg: 18,
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      otherFormes: ['cramorant', 'cramorantgorging'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'cramorantgorging',
    {
      species: 'Cramorant-Gorging',
      baseSpecies: 'Cramorant',
      forme: 'Gorging',
      formeLetter: 'G',
      num: 845,
      types: ['Flying', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 55,
        spa: 85,
        spd: 95,
        spe: 85
      },
      abilities: { first: 'Gulp Missile' },
      heightm: 0.8,
      weightkg: 18,
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      otherFormes: ['cramorant', 'cramorantgulping'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'arrokuda',
    {
      species: 'arrokuda',
      num: 846,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 41,
        atk: 63,
        def: 40,
        spa: 40,
        spd: 30,
        spe: 66
      },
      abilities: { first: 'Swift Swim', hidden: 'Propeller Tail' },
      heightm: 0.5,
      weightkg: 1,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      },
      color: 'Brown',
      evos: ['barraskewda'],
      eggGroups: ['Water 2'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'barraskewda',
    {
      species: 'barraskewda',
      num: 847,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 61,
        atk: 123,
        def: 60,
        spa: 60,
        spd: 50,
        spe: 136
      },
      abilities: { first: 'Swift Swim', hidden: 'Propeller Tail' },
      heightm: 1.3,
      weightkg: 30,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      },
      color: 'Brown',
      prevo: 'arrokuda',
      evoLevel: 26,
      eggGroups: ['Water 2'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'toxel',
    {
      species: 'toxel',
      num: 848,
      types: ['Electric', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 38,
        def: 35,
        spa: 54,
        spd: 35,
        spe: 40
      },
      abilities: { first: 'Rattled', second: 'Static', hidden: 'Klutz' },
      heightm: 0.4,
      weightkg: 0.11,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      evos: ['toxtricity', 'toxtricitylowkey'],
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'toxtricity',
    {
      species: 'toxtricity',
      num: 849,
      types: ['Electric', 'Poison'],
      baseForme: 'Amped',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 70,
        spa: 114,
        spd: 70,
        spe: 75
      },
      abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
      heightm: 1.6,
      weightkg: 40,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      prevo: 'toxel',
      evoLevel: '30 while having a Adamant, Brave, Docile, Hardy, Hasty, Impish, Jolly, Lax, Naive, Naughty, Rash, Quirky, or Sassy Nature',
      eggGroups: ['Human-Like'],
      otherFormes: ['toxtricitylowkey', 'toxtricitygmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'toxtricitylowkey',
    {
      species: 'toxtricity-low-key',
      forme: 'Low-Key',
      formeLetter: 'L',
      num: 849,
      types: ['Electric', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 70,
        spa: 114,
        spd: 70,
        spe: 75
      },
      abilities: { first: 'Punk Rock', second: 'Minus', hidden: 'Technician' },
      heightm: 1.6,
      weightkg: 40,
      color: 'Purple',
      prevo: 'toxel',
      evoLevel: '30 while having a Bashful, Bold, Calm, Careful, Gentle, Lonely, Mild, Modest, Quiet, Relaxed, Serious, or Timid Nature',
      eggGroups: ['Human-Like'],
      otherFormes: ['toxtricitylowkeygmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'toxtricitygmax',
    {
      species: 'toxtricity-gmax',
      baseSpecies: 'Toxtricity',
      num: 849,
      types: ['Electric', 'Poison'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 70,
        spa: 114,
        spd: 70,
        spe: 75
      },
      abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
      heightm: 5,
      weightkg: 140,
      color: 'Purple',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'toxtricitylowkeygmax',
    {
      species: 'toxtricity-low-key-gmax',
      baseSpecies: 'Toxtricity-Low-Key',
      num: 849,
      types: ['Electric', 'Poison'],
      forme: 'Low-Key-Gmax',
      formeLetter: 'LKG',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 70,
        spa: 114,
        spd: 70,
        spe: 75
      },
      abilities: { first: 'Punk Rock', second: 'Minus', hidden: 'Technician' },
      heightm: 5,
      weightkg: 140,
      color: 'Purple',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'sizzlipede',
    {
      species: 'sizzlipede',
      num: 850,
      types: ['Fire', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 45,
        spa: 50,
        spd: 50,
        spe: 45
      },
      abilities: { first: 'Flash Fire', second: 'White Smoke', hidden: 'Flame Body' },
      heightm: 0.7,
      weightkg: 1,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Red',
      evos: ['centiskorch'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'centiskorch',
    {
      species: 'centiskorch',
      num: 851,
      types: ['Fire', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 115,
        def: 65,
        spa: 90,
        spd: 90,
        spe: 65
      },
      abilities: { first: 'Flash Fire', second: 'White Smoke', hidden: 'Flame Body' },
      heightm: 3,
      weightkg: 120,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Red',
      prevo: 'sizzlipede',
      evoLevel: 28,
      eggGroups: ['Bug'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'centiskorchgmax',
    {
      species: 'centiskorch-gmax',
      baseSpecies: 'Centiskorch',
      num: 851,
      types: ['Fire', 'Bug'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 15,
        def: 65,
        spa: 90,
        spd: 90,
        spe: 65
      },
      abilities: { first: 'Flash Fire', second: 'White Smoke', hidden: 'Flame Body' },
      heightm: 10,
      weightkg: 360,
      color: 'Red',
      eggGroups: ['Bug'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'clobbopus',
    {
      species: 'clobbopus',
      num: 852,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 68,
        def: 60,
        spa: 50,
        spd: 50,
        spe: 32
      },
      abilities: { first: 'Limber', hidden: 'Technician' },
      heightm: 0.6,
      weightkg: 4,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Brown',
      evos: ['grapploct'],
      eggGroups: ['Water 1', 'Human-Like'],
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'grapploct',
    {
      species: 'grapploct',
      num: 853,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 118,
        def: 90,
        spa: 70,
        spd: 80,
        spe: 42
      },
      abilities: { first: 'Limber', hidden: 'Technician' },
      heightm: 1.6,
      weightkg: 39,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Blue',
      prevo: 'clobbopus',
      evoLevel: 'level up while knowing Taunt',
      eggGroups: ['Water 1', 'Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'sinistea',
    {
      species: 'sinistea',
      num: 854,
      types: ['Ghost'],
      baseForme: 'Phony',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 45,
        spa: 74,
        spd: 54,
        spe: 50
      },
      abilities: { first: 'Weak Armor', hidden: 'Cursed Body' },
      heightm: 0.1,
      weightkg: 0.2,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      evos: ['polteageist'],
      eggGroups: ['Mineral', 'Amorphous'],
      otherFormes: ['sinisteaantique'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'sinisteaantique',
    {
      species: 'sinistea-antique',
      num: 854,
      types: ['Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 45,
        spa: 74,
        spd: 54,
        spe: 50
      },
      abilities: { first: 'Weak Armor', hidden: 'Cursed Body' },
      heightm: 0.1,
      weightkg: 0.2,
      forme: 'antique',
      formeLetter: 'A',
      color: 'Purple',
      evos: ['polteageistantique'],
      eggGroups: ['Mineral', 'Amorphous'],
      otherFormes: ['sinistea'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'polteageist',
    {
      species: 'polteageist',
      num: 855,
      types: ['Ghost'],
      baseForme: 'Phony',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 65,
        def: 65,
        spa: 134,
        spd: 114,
        spe: 70
      },
      abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
      heightm: 0.2,
      weightkg: 0.4,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      prevo: 'sinistea',
      evoLevel: 'use Cracked Pot',
      eggGroups: ['Mineral', 'Amorphous'],
      otherFormes: ['polteageistantique'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'polteageistantique',
    {
      species: 'polteageist-antique',
      num: 855,
      types: ['Ghost'],
      baseSpecies: 'polteageist',
      forme: 'antique',
      formeLetter: 'A',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 65,
        def: 65,
        spa: 134,
        spd: 114,
        spe: 70
      },
      abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
      heightm: 0.2,
      weightkg: 0.4,
      color: 'Purple',
      prevo: 'sinisteaantique',
      evoLevel: 'use Chipped Pot',
      eggGroups: ['Mineral', 'Amorphous'],
      otherFormes: ['polteageist'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'hatenna',
    {
      species: 'hatenna',
      num: 856,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 42,
        atk: 30,
        def: 45,
        spa: 56,
        spd: 53,
        spe: 39
      },
      abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
      heightm: 0.4,
      weightkg: 3.4,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      },
      color: 'Pink',
      evos: ['hattrem'],
      eggGroups: ['Fairy'],
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'hattrem',
    {
      species: 'hattrem',
      num: 857,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 57,
        atk: 40,
        def: 65,
        spa: 86,
        spd: 73,
        spe: 49
      },
      abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
      heightm: 0.6,
      weightkg: 4.8,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'Pink',
      prevo: 'hatenna',
      evoLevel: 32,
      eggGroups: ['Fairy'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'hatterene',
    {
      species: 'hatterene',
      num: 858,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 57,
        atk: 90,
        def: 95,
        spa: 136,
        spd: 103,
        spe: 29
      },
      abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
      heightm: 2.1,
      weightkg: 5.1,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      },
      color: 'Pink',
      prevo: 'hattrem',
      evoLevel: 42,
      eggGroups: ['Fairy'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'hatterenegmax',
    {
      species: 'hatterene-gmax',
      num: 858,
      baseSpecies: 'hatterene',
      forme: 'Gmax',
      formeLetter: 'G',
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 57,
        atk: 90,
        def: 95,
        spa: 136,
        spd: 103,
        spe: 29
      },
      abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
      heightm: 20,
      weightkg: 15.3,
      color: 'Pink',
      prevo: 'hattrem',
      evoLevel: 42,
      eggGroups: ['Fairy'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'impidimp',
    {
      species: 'impidimp',
      num: 859,
      types: ['Dark', 'Fairy'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 45,
        atk: 45,
        def: 30,
        spa: 55,
        spd: 40,
        spe: 50
      },
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      heightm: 0.4,
      weightkg: 5.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      },
      color: 'Pink',
      evos: ['morgrem'],
      eggGroups: ['Fairy', 'Human-Like'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'morgrem',
    {
      species: 'morgrem',
      num: 860,
      types: ['Dark', 'Fairy'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 65,
        atk: 60,
        def: 45,
        spa: 75,
        spd: 55,
        spe: 70
      },
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      heightm: 0.8,
      weightkg: 12.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'Pink',
      prevo: 'impidimp',
      evos: ['grimmsnarl'],
      evoLevel: 32,
      eggGroups: ['Fairy', 'Human-Like'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'grimmsnarl',
    {
      species: 'grimmsnarl',
      num: 861,
      types: ['Dark', 'Fairy'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 95,
        atk: 120,
        def: 65,
        spa: 95,
        spd: 75,
        spe: 60
      },
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      heightm: 1.5,
      weightkg: 61,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      prevo: 'morgrem',
      evoLevel: 42,
      eggGroups: ['Fairy', 'Human-Like'],
      otherFormes: ['grimmsnarlgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'grimmsnarlgmax',
    {
      species: 'grimmsnarl-gmax',
      num: 861,
      baseSpecies: 'grimmsnarl',
      forme: 'Gmax',
      formeLetter: 'G',
      types: ['Dark', 'Fairy'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 95,
        atk: 120,
        def: 65,
        spa: 95,
        spd: 75,
        spe: 60
      },
      abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
      heightm: 12,
      weightkg: 183,
      color: 'Purple',
      prevo: 'morgrem',
      evoLevel: 42,
      eggGroups: ['Fairy', 'Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'obstagoon',
    {
      species: 'obstagoon',
      num: 862,
      types: ['Dark', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 93,
        atk: 90,
        def: 101,
        spa: 60,
        spd: 81,
        spe: 95
      },
      abilities: { first: 'Reckless', second: 'Guts', hidden: 'Defiant' },
      heightm: 1.6,
      weightkg: 46,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Gray',
      prevo: 'linoonegalar',
      evoLevel: 'level 35 at night',
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true
    }
  ],
  [
    'perrserker',
    {
      species: 'perrserker',
      num: 863,
      types: ['Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 100,
        spa: 50,
        spd: 60,
        spe: 50
      },
      abilities: { first: 'Battle Armor', second: 'Tough Claws', hidden: 'Steely Spirit' },
      heightm: 0.8,
      weightkg: 28,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      prevo: 'meowthgalar',
      color: 'Brown',
      eggGroups: ['Field'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'cursola',
    {
      species: 'cursola',
      num: 864,
      types: ['Ghost'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 60,
        atk: 95,
        def: 50,
        spa: 145,
        spd: 130,
        spe: 30
      },
      abilities: { first: 'Weak Armor', hidden: 'Perish Body' },
      heightm: 1,
      weightkg: 0.4,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'White',
      prevo: 'corsolagalar',
      evoLevel: 38,
      eggGroups: ['Water 1', 'Water 3'],
      catchRate: {
        base: 30,
        percentageWithOrdinaryPokeballAtFullHealth: '8.8%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'sirfetchd',
    {
      species: 'sirfetch’d',
      num: 865,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 135,
        def: 95,
        spa: 68,
        spd: 82,
        spe: 65
      },
      abilities: { first: 'Steadfast', hidden: 'Scrappy' },
      heightm: 0.8,
      weightkg: 117,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'White',
      prevo: 'farfetchdgalar',
      evoLevel: 'Land 3 critical hits in 1 battle',
      eggGroups: ['Flying', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'mrrime',
    {
      species: 'Mr. Rime',
      num: 866,
      types: ['Ice', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 85,
        def: 75,
        spa: 110,
        spd: 100,
        spe: 70
      },
      abilities: { first: 'Tangled Feet', second: 'Screen Cleaner', hidden: 'Ice Body' },
      heightm: 1.5,
      weightkg: 58.2,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      prevo: 'mrmimegalar',
      evoLevel: 42,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'runerigus',
    {
      species: 'runerigus',
      num: 867,
      types: ['Ground', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 58,
        atk: 95,
        def: 145,
        spa: 50,
        spd: 105,
        spe: 30
      },
      abilities: { first: 'Wandering Spirit', second: 'Wandering Spirit', hidden: 'Wandering Spirit' },
      heightm: 1.6,
      weightkg: 66.6,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Gray',
      prevo: 'yamaskgalar',
      evoLevel: 'have 49+ damage on Yamask and walk under stone sculpture in Dusty Bowl Wild Area',
      eggGroups: ['Mineral', 'Amorphous'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'milcery',
    {
      species: 'milcery',
      num: 868,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 45,
        atk: 40,
        def: 40,
        spa: 50,
        spd: 61,
        spe: 34
      },
      abilities: { first: 'Sweet Veil', hidden: 'Aroma Veil' },
      heightm: 0.2,
      weightkg: 0.3,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      },
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'alcremie',
    {
      species: 'alcremie',
      num: 869,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseForme: 'Vanilla Cream',
      baseStats: {
        hp: 65,
        atk: 60,
        def: 75,
        spa: 110,
        spd: 121,
        spe: 64
      },
      abilities: { first: 'Sweet Veil', second: 'Sweet Veil', hidden: 'Aroma Veil' },
      heightm: 0.3,
      weightkg: 0.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      },
      color: 'White',
      prevo: 'milcery',
      evoLevel: 'Spin the joystick while Milcery is holding a sweet.',
      eggGroups: ['Fairy', 'Amorphous'],
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
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'alcremiegmax',
    {
      species: 'alcremie-gmax',
      baseSpecies: 'Alcremie',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 869,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 65,
        atk: 60,
        def: 75,
        spa: 110,
        spd: 121,
        spe: 64
      },
      abilities: { first: 'Sweet Veil', hidden: 'Aroma Veil' },
      heightm: 30,
      weightkg: 3,
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous'],
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'falinks',
    {
      species: 'falinks',
      num: 870,
      types: ['Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 65,
        atk: 100,
        def: 100,
        spa: 70,
        spd: 60,
        spe: 75
      },
      abilities: { first: 'Battle Armor', hidden: 'Defiant' },
      heightm: 3,
      weightkg: 62,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      },
      color: 'Yellow',
      eggGroups: ['Fairy', 'Mineral'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'pincurchin',
    {
      species: 'pincurchin',
      num: 871,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 48,
        atk: 101,
        def: 95,
        spa: 91,
        spd: 85,
        spe: 15
      },
      abilities: { first: 'Lightning Rod', hidden: 'Electric Surge' },
      heightm: 0.3,
      weightkg: 1,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      eggGroups: ['Water 1', 'Amorphous'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'snom',
    {
      species: 'snom',
      num: 872,
      types: ['Ice', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 25,
        def: 35,
        spa: 45,
        spd: 30,
        spe: 20
      },
      abilities: { first: 'Shield Dust', hidden: 'Ice Scales' },
      heightm: 0.3,
      weightkg: 3.8,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      },
      color: 'White',
      evos: ['frosmoth'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'frosmoth',
    {
      species: 'frosmoth',
      num: 873,
      types: ['Ice', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 65,
        def: 60,
        spa: 125,
        spd: 90,
        spe: 65
      },
      abilities: { first: 'Shield Dust', hidden: 'Ice Scales' },
      heightm: 1.3,
      weightkg: 42,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'White',
      prevo: 'snom',
      evos: ['frosmoth'],
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      eggGroups: ['Bug'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true
    }
  ],
  [
    'stonjourner',
    {
      species: 'stonjourner',
      num: 874,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 125,
        def: 135,
        spa: 20,
        spd: 20,
        spe: 20
      },
      abilities: { first: 'Power Spot' },
      heightm: 2.5,
      weightkg: 520,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'eiscue',
    {
      species: 'eiscue',
      num: 875,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 110,
        spa: 65,
        spd: 90,
        spe: 50
      },
      abilities: { first: 'Ice Face' },
      heightm: 1.4,
      weightkg: 89,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      otherFormes: ['eiscuenoice'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'eiscuenoice',
    {
      species: 'eiscue-noice',
      baseSpecies: 'Eiscue',
      forme: 'noice',
      formeLetter: 'N',
      num: 875,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 110,
        spa: 65,
        spd: 90,
        spe: 50
      },
      abilities: { first: 'Ice Face' },
      heightm: 1.4,
      weightkg: 89,
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'indeedee',
    {
      species: 'indeedee',
      num: 876,
      types: ['Psychic', 'Normal'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 60,
        atk: 65,
        def: 55,
        spa: 105,
        spd: 95,
        spe: 95
      },
      abilities: { first: 'Inner Focus', second: 'Synchronize', hidden: 'Psychic Surge' },
      heightm: 0.9,
      weightkg: 28,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 30,
        percentageWithOrdinaryPokeballAtFullHealth: '8.8%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      isEggObtainable: true
    }
  ],
  [
    'indeedeef',
    {
      species: 'indeedee-f',
      baseSpecies: 'Indeedee',
      forme: 'female',
      formeLetter: 'F',
      num: 876,
      types: ['Psychic', 'Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 70,
        atk: 55,
        def: 65,
        spa: 95,
        spd: 105,
        spe: 85
      },
      abilities: { first: 'Own Tempo', second: 'Synchronize', hidden: 'Psychic Surge' },
      heightm: 0.9,
      weightkg: 28,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      },
      color: 'Purple',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 30,
        percentageWithOrdinaryPokeballAtFullHealth: '8.8%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      isEggObtainable: true
    }
  ],
  [
    'morpeko',
    {
      species: 'morpeko',
      num: 877,
      types: ['Electric', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 58,
        atk: 95,
        def: 58,
        spa: 70,
        spd: 58,
        spe: 97
      },
      abilities: { first: 'Hunger Switch' },
      heightm: 0.3,
      weightkg: 3,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      otherFormes: ['morpekohangry'],
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true
    }
  ],
  [
    'morpekohangry',
    {
      species: 'morpeko-hangry',
      baseSpecies: 'Morpeko',
      num: 877,
      types: ['Electric', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 58,
        atk: 95,
        def: 58,
        spa: 70,
        spd: 58,
        spe: 97
      },
      forme: 'Hangry',
      formeLetter: 'H',
      abilities: { first: 'Hunger Switch' },
      heightm: 0.3,
      weightkg: 3,
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'cufant',
    {
      species: 'cufant',
      num: 878,
      types: ['Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 80,
        def: 49,
        spa: 40,
        spd: 49,
        spe: 40
      },
      abilities: { first: 'Sheer Force', hidden: 'Heavy Metal' },
      heightm: 1.2,
      weightkg: 100,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Yellow',
      evos: ['copperajah'],
      eggGroups: ['Field', 'Mineral'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'copperajah',
    {
      species: 'copperajah',
      num: 879,
      types: ['Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 122,
        atk: 130,
        def: 69,
        spa: 80,
        spd: 69,
        spe: 30
      },
      abilities: { first: 'Sheer Force', hidden: 'Heavy Metal' },
      heightm: 3,
      weightkg: 650,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      prevo: 'cufant',
      evoLevel: 34,
      eggGroups: ['Field', 'Mineral'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true
    }
  ],
  [
    'copperajahgmax',
    {
      species: 'copperajah-gmax',
      baseSpecies: 'Copperajah',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 879,
      types: ['Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 122,
        atk: 130,
        def: 69,
        spa: 80,
        spd: 69,
        spe: 30
      },
      abilities: { first: 'Sheer Force', hidden: 'Heavy Metal' },
      heightm: 20,
      weightkg: 1950,
      color: 'Green',
      eggGroups: ['Field', 'Mineral'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'dracozolt',
    {
      species: 'dracozolt',
      num: 880,
      types: ['Electric', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 100,
        def: 90,
        spa: 80,
        spd: 70,
        spe: 75
      },
      abilities: { first: 'Volt Absorb', second: 'Hustle', hidden: 'Sand Rush' },
      heightm: 1.8,
      weightkg: 190,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      isEggObtainable: false
    }
  ],
  [
    'arctozolt',
    {
      species: 'arctozolt',
      num: 881,
      types: ['Electric', 'Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 100,
        def: 90,
        spa: 90,
        spd: 80,
        spe: 55
      },
      abilities: { first: 'Volt Absorb', second: 'Static', hidden: 'Slush Rush' },
      heightm: 2.3,
      weightkg: 150,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      isEggObtainable: false
    }
  ],
  [
    'dracovish',
    {
      species: 'dracovish',
      num: 882,
      types: ['Water', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 90,
        def: 100,
        spa: 70,
        spd: 80,
        spe: 75
      },
      abilities: { first: 'Water Absorb', second: 'Strong Jaw', hidden: 'Sand Rush' },
      heightm: 2.3,
      weightkg: 215,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      isEggObtainable: false
    }
  ],
  [
    'arctovish',
    {
      species: 'arctovish',
      num: 883,
      types: ['Water', 'Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 90,
        def: 100,
        spa: 80,
        spd: 90,
        spe: 55
      },
      abilities: { first: 'Water Absorb', second: 'Ice Body', hidden: 'Slush Rush' },
      heightm: 2,
      weightkg: 175,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      isEggObtainable: false
    }
  ],
  [
    'duraludon',
    {
      species: 'duraludon',
      num: 884,
      types: ['Steel', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 95,
        def: 115,
        spa: 120,
        spd: 50,
        spe: 85
      },
      abilities: { first: 'Light Metal', second: 'Heavy Metal', hidden: 'Stalwart' },
      heightm: 1.8,
      weightkg: 40,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      },
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      isEggObtainable: true
    }
  ],
  [
    'duraludongmax',
    {
      species: 'duraludon-gmax',
      baseSpecies: 'duraludon',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 884,
      types: ['Steel', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 95,
        def: 115,
        spa: 120,
        spd: 50,
        spe: 85
      },
      abilities: { first: 'Light Metal', second: 'Heavy Metal', hidden: 'Stalwart' },
      heightm: 6,
      weightkg: 120,
      color: 'White',
      eggGroups: ['Mineral', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'dreepy',
    {
      species: 'dreepy',
      num: 885,
      types: ['Dragon', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 28,
        atk: 60,
        def: 30,
        spa: 40,
        spd: 30,
        spe: 82
      },
      abilities: { first: 'Clear Body', second: 'Infiltrator', hidden: 'Cursed Body' },
      heightm: 0.5,
      weightkg: 2,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      },
      color: 'Green',
      evos: ['drakloak'],
      eggGroups: ['Amorphous', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true
    }
  ],
  [
    'drakloak',
    {
      species: 'drakloak',
      num: 886,
      types: ['Dragon', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 80,
        def: 50,
        spa: 60,
        spd: 50,
        spe: 102
      },
      abilities: { first: 'Clear Body', second: 'Infiltrator', hidden: 'Cursed Body' },
      heightm: 1.4,
      weightkg: 11,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      },
      color: 'Green',
      prevo: 'dreepy',
      evoLevel: 50,
      evos: ['dragapult'],
      eggGroups: ['Amorphous', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true
    }
  ],
  [
    'dragapult',
    {
      species: 'dragapult',
      num: 887,
      types: ['Dragon', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 88,
        atk: 120,
        def: 75,
        spa: 100,
        spd: 75,
        spe: 142
      },
      abilities: { first: 'Clear Body', second: 'Infiltrator', hidden: 'Cursed Body' },
      heightm: 3,
      weightkg: 50,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Green',
      prevo: 'drakloak',
      evoLevel: 60,
      eggGroups: ['Amorphous', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true
    }
  ],
  [
    'zacian',
    {
      species: 'zacian',
      num: 888,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 92,
        atk: 130,
        def: 115,
        spa: 80,
        spd: 115,
        spe: 138
      },
      abilities: { first: 'Intrepid Sword' },
      heightm: 2.8,
      weightkg: 110,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      otherFormes: ['zaciancrowned'],
      catchRate: {
        base: 10,
        percentageWithOrdinaryPokeballAtFullHealth: '3.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'zaciancrowned',
    {
      species: 'zacian-crowned',
      baseSpecies: 'Zacian',
      num: 888,
      types: ['Fairy', 'Steel'],
      forme: 'Crowned',
      formeLetter: 'C',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 92,
        atk: 170,
        def: 115,
        spa: 80,
        spd: 115,
        spe: 148
      },
      abilities: { first: 'Intrepid Sword' },
      heightm: 2.8,
      weightkg: 355,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 10,
        percentageWithOrdinaryPokeballAtFullHealth: '3.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'zamazenta',
    {
      species: 'zamazenta',
      num: 889,
      types: ['Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 92,
        atk: 130,
        def: 115,
        spa: 80,
        spd: 115,
        spe: 138
      },
      abilities: { first: 'Dauntless Shield' },
      heightm: 2.9,
      weightkg: 210,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      otherFormes: ['zamazentacrowned'],
      catchRate: {
        base: 10,
        percentageWithOrdinaryPokeballAtFullHealth: '3.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'zamazentacrowned',
    {
      species: 'zamazenta-crowned',
      baseSpecies: 'Zamazenta',
      forme: 'Crowned',
      formeLetter: 'C',
      num: 889,
      types: ['Fighting', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 92,
        atk: 130,
        def: 145,
        spa: 80,
        spd: 145,
        spe: 128
      },
      abilities: { first: 'Dauntless Shield' },
      heightm: 2.9,
      weightkg: 785,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 10,
        percentageWithOrdinaryPokeballAtFullHealth: '3.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'eternatus',
    {
      species: 'eternatus',
      num: 890,
      types: ['Poison', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 140,
        atk: 85,
        def: 95,
        spa: 145,
        spd: 95,
        spe: 130
      },
      abilities: { first: 'Pressure' },
      heightm: 20,
      weightkg: 950,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      otherFormes: ['eternatuseternamax'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'eternatuseternamax',
    {
      species: 'eternatus-eternamax',
      baseSpecies: 'Eternatus',
      num: 890,
      types: ['Poison', 'Dragon'],
      forme: 'Eternamax',
      formeLetter: 'E',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 255,
        atk: 115,
        def: 250,
        spa: 125,
        spd: 250,
        spe: 130
      },
      abilities: { first: 'Pressure' },
      heightm: 100,
      weightkg: 950,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'kubfu',
    {
      species: 'kubfu',
      num: 891,
      types: ['Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 90,
        def: 60,
        spa: 53,
        spd: 50,
        spe: 72
      },
      abilities: { first: 'Inner Focus' },
      heightm: 0.6,
      weightkg: 12,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Gray',
      evos: ['urshifu', 'urshifurapidstrike'],
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'urshifu',
    {
      species: 'urshifu',
      num: 892,
      types: ['Fighting', 'Dark'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 130,
        def: 100,
        spa: 63,
        spd: 60,
        spe: 97
      },
      abilities: { first: 'Unseen Fist' },
      heightm: 1.9,
      weightkg: 105,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Gray',
      prevo: 'Kubfu',
      evoLevel: 'Defeat the Single Strike Tower',
      otherFormes: ['urshifurapidstrike', 'urshifugmax'],
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'urshifurapidstrike',
    {
      species: 'urshifu-rapid-strike',
      num: 892,
      types: ['Fighting', 'Water'],
      baseSpecies: 'Urshifu',
      forme: 'Rapid-Strike',
      formeLetter: 'RS',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 130,
        def: 100,
        spa: 63,
        spd: 60,
        spe: 97
      },
      abilities: { first: 'Unseen Fist' },
      heightm: 1.9,
      weightkg: 105,
      color: 'Gray',
      prevo: 'Kubfu',
      evoLevel: 'Defeat the Rapid Strike Tower',
      otherFormes: ['urshifu', 'urshifurapidstrikegmax'],
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'urshifugmax',
    {
      species: 'urshifu-gmax',
      num: 892,
      types: ['Fighting', 'Dark'],
      baseSpecies: 'Urshifu',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 130,
        def: 100,
        spa: 63,
        spd: 60,
        spe: 97
      },
      abilities: { first: 'Unseen Fist' },
      heightm: 3,
      weightkg: 105,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'urshifurapidstrikegmax',
    {
      species: 'urshifu-rapid-strike-gmax',
      num: 892,
      types: ['Fighting', 'Water'],
      baseSpecies: 'Urshifu-Rapid-Strike',
      forme: 'Rapid-Strike-Gmax',
      formeLetter: 'RSG',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 130,
        def: 100,
        spa: 63,
        spd: 60,
        spe: 97
      },
      abilities: { first: 'Unseen Fist' },
      heightm: 3,
      weightkg: 105,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'zarude',
    {
      species: 'zarude',
      num: 893,
      types: ['Dark', 'Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 105,
        atk: 120,
        def: 105,
        spa: 70,
        spd: 95,
        spe: 105
      },
      abilities: { first: 'Leaf Guard' },
      heightm: 1.8,
      weightkg: 70,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      otherFormes: ['zarudedada'],
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'zarudedada',
    {
      species: 'zarude-dada',
      num: 893,
      types: ['Dark', 'Grass'],
      baseSpecies: 'zarude',
      forme: 'Dada',
      formeLetter: 'D',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 105,
        atk: 120,
        def: 105,
        spa: 70,
        spd: 95,
        spe: 105
      },
      abilities: { first: 'Leaf Guard' },
      heightm: 1.8,
      weightkg: 70,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'regieleki',
    {
      species: 'regieleki',
      num: 894,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 50,
        spa: 100,
        spd: 50,
        spe: 200
      },
      abilities: { first: 'Transistor' },
      heightm: 1.2,
      weightkg: 145,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'regidrago',
    {
      species: 'regidrago',
      num: 895,
      types: ['Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 200,
        atk: 100,
        def: 50,
        spa: 100,
        spd: 50,
        spe: 80
      },
      abilities: { first: "Dragon's Maw" },
      heightm: 2.1,
      weightkg: 200,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'glastrier',
    {
      species: 'glastrier',
      num: 896,
      types: ['Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 145,
        def: 130,
        spa: 65,
        spd: 110,
        spe: 30
      },
      abilities: { first: 'Chilling Neigh' },
      heightm: 2.2,
      weightkg: 800,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'White',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'spectrier',
    {
      species: 'spectrier',
      num: 897,
      types: ['Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 65,
        def: 60,
        spa: 145,
        spd: 80,
        spe: 130
      },
      abilities: { first: 'Grim Neigh' },
      heightm: 2,
      weightkg: 44.5,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'calyrex',
    {
      species: 'calyrex',
      num: 898,
      types: ['Psychic', 'Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 80,
        def: 80,
        spa: 80,
        spd: 80,
        spe: 80
      },
      abilities: { first: 'Unnerve' },
      heightm: 1.1,
      weightkg: 7.7,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'Calyrex',
      eggGroups: ['Undiscovered'],
      otherFormes: ['calyrexice', 'calyrexshadow'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'calyrexice',
    {
      species: 'calyrex-ice',
      num: 898,
      types: ['Psychic', 'Ice'],
      baseSpecies: 'Calyrex',
      formeLetter: 'CI',
      forme: 'Ice',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 165,
        def: 150,
        spa: 85,
        spd: 130,
        spe: 50
      },
      abilities: { first: 'As One (Glastrier)' },
      heightm: 2.4,
      weightkg: 809.1,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      },
      color: 'White',
      eggGroups: ['Undiscovered'],
      otherFormes: ['calyrexshadow'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ],
  [
    'calyrexshadow',
    {
      species: 'calyrex-shadow',
      num: 898,
      types: ['Psychic', 'Ghost'],
      baseSpecies: 'Calyrex',
      formeLetter: 'CS',
      forme: 'Shadow',
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 85,
        def: 80,
        spa: 165,
        spd: 100,
        spe: 150
      },
      abilities: { first: 'As One (Spectrier)' },
      heightm: 2.4,
      weightkg: 53.6,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      otherFormes: ['calyrexice'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
