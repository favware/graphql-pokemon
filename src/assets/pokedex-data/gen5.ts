import { Pokedex } from '#dexdata/pokedex';
import type { PokemonTypes } from '#utils/pokemon';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'victini',
    {
      abilities: { first: 'Victory Star' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 494,
      species: 'victini',
      types: ['Psychic', 'Fire'],
      weightkg: 4,
      aliases: ['bikuteini', 'kyra']
    }
  ],
  [
    'snivy',
    {
      abilities: { first: 'Overgrow', hidden: 'Contrary' },
      baseStats: { hp: 45, atk: 45, def: 55, spa: 45, spd: 55, spe: 63 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['servine'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 495,
      species: 'snivy',
      types: ['Grass'],
      weightkg: 8.1,
      aliases: ['tsutaaja']
    }
  ],
  [
    'servine',
    {
      abilities: { first: 'Overgrow', hidden: 'Contrary' },
      baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 83 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 17,
      evos: ['serperior'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 496,
      prevo: 'snivy',
      species: 'servine',
      types: ['Grass'],
      weightkg: 16,
      aliases: ['janobii']
    }
  ],
  [
    'serperior',
    {
      abilities: { first: 'Overgrow', hidden: 'Contrary' },
      baseStats: { hp: 75, atk: 75, def: 95, spa: 75, spd: 95, spe: 113 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 3.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 497,
      prevo: 'servine',
      species: 'serperior',
      types: ['Grass'],
      weightkg: 63,
      aliases: ['jarooda', 'serp']
    }
  ],
  [
    'tepig',
    {
      abilities: { first: 'Blaze', hidden: 'Thick Fat' },
      baseStats: { hp: 65, atk: 63, def: 45, spa: 45, spd: 45, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['pignite'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 498,
      species: 'tepig',
      types: ['Fire'],
      weightkg: 9.9,
      aliases: ['pokabu']
    }
  ],
  [
    'pignite',
    {
      abilities: { first: 'Blaze', hidden: 'Thick Fat' },
      baseStats: { hp: 90, atk: 93, def: 55, spa: 70, spd: 55, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 17,
      evos: ['emboar'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 499,
      prevo: 'tepig',
      species: 'pignite',
      types: ['Fire', 'Fighting'],
      weightkg: 55.5,
      aliases: ['chaobuu']
    }
  ],
  [
    'emboar',
    {
      abilities: { first: 'Blaze', hidden: 'Reckless' },
      baseStats: { hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 500,
      prevo: 'pignite',
      species: 'emboar',
      types: ['Fire', 'Fighting'],
      weightkg: 150,
      aliases: ['enbuoo']
    }
  ],
  [
    'oshawott',
    {
      abilities: { first: 'Torrent', hidden: 'Shell Armor' },
      baseStats: { hp: 55, atk: 55, def: 45, spa: 63, spd: 45, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['dewott'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 501,
      species: 'oshawott',
      types: ['Water'],
      weightkg: 5.9,
      aliases: ['mijumaru']
    }
  ],
  [
    'dewott',
    {
      abilities: { first: 'Torrent', hidden: 'Shell Armor' },
      baseStats: { hp: 75, atk: 75, def: 60, spa: 83, spd: 60, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 17,
      evos: ['samurott'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 502,
      prevo: 'oshawott',
      species: 'dewott',
      types: ['Water'],
      weightkg: 24.5,
      aliases: ['futachimaru']
    }
  ],
  [
    'samurott',
    {
      abilities: { first: 'Torrent', hidden: 'Shell Armor' },
      baseStats: { hp: 95, atk: 100, def: 85, spa: 108, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 503,
      prevo: 'dewott',
      species: 'samurott',
      types: ['Water'],
      weightkg: 94.6,
      aliases: ['daikenki']
    }
  ],
  [
    'patrat',
    {
      abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Analytic' },
      baseStats: { hp: 45, atk: 55, def: 39, spa: 35, spd: 39, spe: 42 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['watchog'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 504,
      species: 'patrat',
      types: ['Normal'],
      weightkg: 11.6,
      aliases: ['minezumi']
    }
  ],
  [
    'watchog',
    {
      abilities: { first: 'Illuminate', second: 'Keen Eye', hidden: 'Analytic' },
      baseStats: { hp: 60, atk: 85, def: 69, spa: 60, spd: 69, spe: 77 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 505,
      prevo: 'patrat',
      species: 'watchog',
      types: ['Normal'],
      weightkg: 27,
      aliases: ['miruhoggu']
    }
  ],
  [
    'lillipup',
    {
      abilities: { first: 'Vital Spirit', second: 'Pickup', hidden: 'Run Away' },
      baseStats: { hp: 45, atk: 60, def: 45, spa: 25, spd: 45, spe: 55 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['herdier'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 506,
      species: 'lillipup',
      types: ['Normal'],
      weightkg: 4.1,
      aliases: ['yooterii']
    }
  ],
  [
    'herdier',
    {
      abilities: { first: 'Intimidate', second: 'Sand Rush', hidden: 'Scrappy' },
      baseStats: { hp: 65, atk: 80, def: 65, spa: 35, spd: 65, spe: 60 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['stoutland'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 507,
      prevo: 'lillipup',
      species: 'herdier',
      types: ['Normal'],
      weightkg: 14.7,
      aliases: ['haaderia']
    }
  ],
  [
    'stoutland',
    {
      abilities: { first: 'Intimidate', second: 'Sand Rush', hidden: 'Scrappy' },
      baseStats: { hp: 85, atk: 110, def: 90, spa: 45, spd: 90, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 508,
      prevo: 'herdier',
      species: 'stoutland',
      types: ['Normal'],
      weightkg: 61,
      aliases: ['muurando']
    }
  ],
  [
    'purrloin',
    {
      abilities: { first: 'Limber', second: 'Unburden', hidden: 'Prankster' },
      baseStats: { hp: 41, atk: 50, def: 37, spa: 50, spd: 37, spe: 66 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['liepard'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 509,
      species: 'purrloin',
      types: ['Dark'],
      weightkg: 10.1,
      aliases: ['choroneko']
    }
  ],
  [
    'liepard',
    {
      abilities: { first: 'Limber', second: 'Unburden', hidden: 'Prankster' },
      baseStats: { hp: 64, atk: 88, def: 50, spa: 88, spd: 50, spe: 106 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 510,
      prevo: 'purrloin',
      species: 'liepard',
      types: ['Dark'],
      weightkg: 37.5,
      aliases: ['reparudasu']
    }
  ],
  [
    'pansage',
    {
      abilities: { first: 'Gluttony', hidden: 'Overgrow' },
      baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['simisage'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 511,
      species: 'pansage',
      types: ['Grass'],
      weightkg: 10.5,
      aliases: ['yanappu']
    }
  ],
  [
    'simisage',
    {
      abilities: { first: 'Gluttony', hidden: 'Overgrow' },
      baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Leaf Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 512,
      prevo: 'pansage',
      species: 'simisage',
      types: ['Grass'],
      weightkg: 30.5,
      aliases: ['yanakkii']
    }
  ],
  [
    'pansear',
    {
      abilities: { first: 'Gluttony', hidden: 'Blaze' },
      baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['simisear'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 513,
      species: 'pansear',
      types: ['Fire'],
      weightkg: 11,
      aliases: ['baoppu']
    }
  ],
  [
    'simisear',
    {
      abilities: { first: 'Gluttony', hidden: 'Blaze' },
      baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Fire Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 514,
      prevo: 'pansear',
      species: 'simisear',
      types: ['Fire'],
      weightkg: 28,
      aliases: ['baokkii']
    }
  ],
  [
    'panpour',
    {
      abilities: { first: 'Gluttony', hidden: 'Torrent' },
      baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['simipour'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 515,
      species: 'panpour',
      types: ['Water'],
      weightkg: 13.5,
      aliases: ['hiyappu']
    }
  ],
  [
    'simipour',
    {
      abilities: { first: 'Gluttony', hidden: 'Torrent' },
      baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 516,
      prevo: 'panpour',
      species: 'simipour',
      types: ['Water'],
      weightkg: 29,
      aliases: ['hiyakkii']
    }
  ],
  [
    'munna',
    {
      abilities: { first: 'Forewarn', second: 'Synchronize', hidden: 'Telepathy' },
      baseStats: { hp: 76, atk: 25, def: 45, spa: 67, spd: 55, spe: 24 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['musharna'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 517,
      species: 'munna',
      types: ['Psychic'],
      weightkg: 23.3
    }
  ],
  [
    'musharna',
    {
      abilities: { first: 'Forewarn', second: 'Synchronize', hidden: 'Telepathy' },
      baseStats: { hp: 116, atk: 55, def: 85, spa: 107, spd: 95, spe: 29 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Moon Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 518,
      prevo: 'munna',
      species: 'musharna',
      types: ['Psychic'],
      weightkg: 60.5,
      aliases: ['mushaana']
    }
  ],
  [
    'pidove',
    {
      abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
      baseStats: { hp: 50, atk: 55, def: 50, spa: 36, spd: 30, spe: 43 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['tranquill'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 519,
      species: 'pidove',
      types: ['Normal', 'Flying'],
      weightkg: 2.1,
      aliases: ['mamepato']
    }
  ],
  [
    'tranquill',
    {
      abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
      baseStats: { hp: 62, atk: 77, def: 62, spa: 50, spd: 42, spe: 65 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 21,
      evos: ['unfezant'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 520,
      prevo: 'pidove',
      species: 'tranquill',
      types: ['Normal', 'Flying'],
      weightkg: 15,
      aliases: ['hatooboo']
    }
  ],
  [
    'unfezant',
    {
      abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
      baseStats: { hp: 80, atk: 115, def: 80, spa: 65, spd: 55, spe: 93 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 521,
      prevo: 'tranquill',
      species: 'unfezant',
      types: ['Normal', 'Flying'],
      weightkg: 29,
      aliases: ['kenhorou']
    }
  ],
  [
    'blitzle',
    {
      abilities: {
        first: 'Lightning Rod',
        second: 'Motor Drive',
        hidden: 'Sap Sipper'
      },
      baseStats: { hp: 45, atk: 60, def: 32, spa: 50, spd: 32, spe: 76 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['zebstrika'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 522,
      species: 'blitzle',
      types: ['Electric'],
      weightkg: 29.8,
      aliases: ['shimama']
    }
  ],
  [
    'zebstrika',
    {
      abilities: {
        first: 'Lightning Rod',
        second: 'Motor Drive',
        hidden: 'Sap Sipper'
      },
      baseStats: { hp: 75, atk: 100, def: 63, spa: 80, spd: 63, spe: 116 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 27,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 523,
      prevo: 'blitzle',
      species: 'zebstrika',
      types: ['Electric'],
      weightkg: 79.5,
      aliases: ['zeburaika']
    }
  ],
  [
    'roggenrola',
    {
      abilities: { first: 'Sturdy', second: 'Weak Armor', hidden: 'Sand Force' },
      baseStats: { hp: 55, atk: 75, def: 85, spa: 25, spd: 25, spe: 15 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['boldore'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 524,
      species: 'roggenrola',
      types: ['Rock'],
      weightkg: 18,
      aliases: ['dangoro']
    }
  ],
  [
    'boldore',
    {
      abilities: { first: 'Sturdy', second: 'Weak Armor', hidden: 'Sand Force' },
      baseStats: { hp: 70, atk: 105, def: 105, spa: 50, spd: 40, spe: 20 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['gigalith'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 525,
      prevo: 'roggenrola',
      species: 'boldore',
      types: ['Rock'],
      weightkg: 102,
      aliases: ['gantoru']
    }
  ],
  [
    'gigalith',
    {
      abilities: { first: 'Sturdy', second: 'Sand Stream', hidden: 'Sand Force' },
      baseStats: { hp: 85, atk: 135, def: 130, spa: 60, spd: 80, spe: 25 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 526,
      prevo: 'boldore',
      species: 'gigalith',
      types: ['Rock'],
      weightkg: 260,
      aliases: ['gigaiasu']
    }
  ],
  [
    'woobat',
    {
      abilities: { first: 'Unaware', second: 'Klutz', hidden: 'Simple' },
      baseStats: { hp: 65, atk: 45, def: 43, spa: 55, spd: 43, spe: 72 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['swoobat'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 527,
      species: 'woobat',
      types: ['Psychic', 'Flying'],
      weightkg: 2.1,
      aliases: ['koromori']
    }
  ],
  [
    'swoobat',
    {
      abilities: { first: 'Unaware', second: 'Klutz', hidden: 'Simple' },
      baseStats: { hp: 67, atk: 57, def: 55, spa: 77, spd: 55, spe: 114 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'Level up with happiness of at least 220',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 528,
      prevo: 'woobat',
      species: 'swoobat',
      types: ['Psychic', 'Flying'],
      weightkg: 10.5,
      aliases: ['kokoromori']
    }
  ],
  [
    'drilbur',
    {
      abilities: {
        first: 'Sand Rush',
        second: 'Sand Force',
        hidden: 'Mold Breaker'
      },
      baseStats: { hp: 60, atk: 85, def: 40, spa: 30, spd: 45, spe: 68 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['excadrill'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 529,
      species: 'drilbur',
      types: ['Ground'],
      weightkg: 8.5,
      aliases: ['moguryuu']
    }
  ],
  [
    'excadrill',
    {
      abilities: {
        first: 'Sand Rush',
        second: 'Sand Force',
        hidden: 'Mold Breaker'
      },
      baseStats: { hp: 110, atk: 135, def: 60, spa: 50, spd: 65, spe: 88 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 31,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 530,
      prevo: 'drilbur',
      species: 'excadrill',
      types: ['Ground', 'Steel'],
      weightkg: 40.4,
      aliases: ['doryuuzu', 'drill', 'driller']
    }
  ],
  [
    'audino',
    {
      abilities: { first: 'Healer', second: 'Regenerator', hidden: 'Klutz' },
      baseStats: { hp: 103, atk: 60, def: 86, spa: 60, spd: 86, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 531,
      otherFormes: ['audinomega'],
      species: 'audino',
      types: ['Normal'],
      weightkg: 31,
      aliases: ['tabunne']
    }
  ],
  [
    'audinomega',
    {
      abilities: { first: 'Healer' },
      baseSpecies: 'Audino',
      baseStats: { hp: 103, atk: 60, def: 126, spa: 80, spd: 126, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 531,
      species: 'audino-mega',
      types: ['Normal', 'Fairy'],
      weightkg: 32
    }
  ],
  [
    'timburr',
    {
      abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
      baseStats: { hp: 75, atk: 80, def: 55, spa: 25, spd: 35, spe: 35 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['gurdurr'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 532,
      species: 'timburr',
      types: ['Fighting'],
      weightkg: 12.5,
      aliases: ['dokkoraa']
    }
  ],
  [
    'gurdurr',
    {
      abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
      baseStats: { hp: 85, atk: 105, def: 85, spa: 40, spd: 50, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['conkeldurr'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 533,
      prevo: 'timburr',
      species: 'gurdurr',
      types: ['Fighting'],
      weightkg: 40,
      aliases: ['dotekkotsu']
    }
  ],
  [
    'conkeldurr',
    {
      abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
      baseStats: { hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 534,
      prevo: 'gurdurr',
      species: 'conkeldurr',
      types: ['Fighting'],
      weightkg: 87,
      aliases: ['conk', 'roobushin']
    }
  ],
  [
    'tympole',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Hydration',
        hidden: 'Water Absorb'
      },
      baseStats: { hp: 50, atk: 50, def: 40, spa: 50, spd: 40, spe: 64 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['palpitoad'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 535,
      species: 'tympole',
      types: ['Water'],
      weightkg: 4.5,
      aliases: ['otamaro']
    }
  ],
  [
    'palpitoad',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Hydration',
        hidden: 'Water Absorb'
      },
      baseStats: { hp: 75, atk: 65, def: 55, spa: 65, spd: 55, spe: 69 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['seismitoad'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 536,
      prevo: 'tympole',
      species: 'palpitoad',
      types: ['Water', 'Ground'],
      weightkg: 17,
      aliases: ['gamagaru']
    }
  ],
  [
    'seismitoad',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Poison Touch',
        hidden: 'Water Absorb'
      },
      baseStats: { hp: 105, atk: 95, def: 75, spa: 85, spd: 75, spe: 74 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 537,
      prevo: 'palpitoad',
      species: 'seismitoad',
      types: ['Water', 'Ground'],
      weightkg: 62,
      aliases: ['gamageroge']
    }
  ],
  [
    'throh',
    {
      abilities: { first: 'Guts', second: 'Inner Focus', hidden: 'Mold Breaker' },
      baseStats: { hp: 120, atk: 100, def: 85, spa: 30, spd: 85, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 538,
      species: 'throh',
      types: ['Fighting'],
      weightkg: 55.5,
      aliases: ['ernie', 'nageki']
    }
  ],
  [
    'sawk',
    {
      abilities: {
        first: 'Sturdy',
        second: 'Inner Focus',
        hidden: 'Mold Breaker'
      },
      baseStats: { hp: 75, atk: 125, def: 75, spa: 30, spd: 75, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 539,
      species: 'sawk',
      types: ['Fighting'],
      weightkg: 51,
      aliases: ['bert', 'dageki']
    }
  ],
  [
    'sewaddle',
    {
      abilities: { first: 'Swarm', second: 'Chlorophyll', hidden: 'Overcoat' },
      baseStats: { hp: 45, atk: 53, def: 70, spa: 40, spd: 60, spe: 42 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['swadloon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 540,
      species: 'sewaddle',
      types: ['Bug', 'Grass'],
      weightkg: 2.5,
      aliases: ['kurumiru']
    }
  ],
  [
    'swadloon',
    {
      abilities: {
        first: 'Leaf Guard',
        second: 'Chlorophyll',
        hidden: 'Overcoat'
      },
      baseStats: { hp: 55, atk: 63, def: 90, spa: 50, spd: 80, spe: 42 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      evos: ['leavanny'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 541,
      prevo: 'sewaddle',
      species: 'swadloon',
      types: ['Bug', 'Grass'],
      weightkg: 7.3,
      aliases: ['kurumayu']
    }
  ],
  [
    'leavanny',
    {
      abilities: { first: 'Swarm', second: 'Chlorophyll', hidden: 'Overcoat' },
      baseStats: { hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 92 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 21,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 542,
      prevo: 'swadloon',
      species: 'leavanny',
      types: ['Bug', 'Grass'],
      weightkg: 20.5,
      aliases: ['hahakomori']
    }
  ],
  [
    'venipede',
    {
      abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
      baseStats: { hp: 30, atk: 45, def: 59, spa: 30, spd: 39, spe: 57 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['whirlipede'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 543,
      species: 'venipede',
      types: ['Bug', 'Poison'],
      weightkg: 5.3,
      aliases: ['fushide']
    }
  ],
  [
    'whirlipede',
    {
      abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
      baseStats: { hp: 40, atk: 55, def: 99, spa: 40, spd: 79, spe: 47 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      evos: ['scolipede'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 544,
      prevo: 'venipede',
      species: 'whirlipede',
      types: ['Bug', 'Poison'],
      weightkg: 58.5,
      aliases: ['hoiiga']
    }
  ],
  [
    'scolipede',
    {
      abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
      baseStats: { hp: 60, atk: 100, def: 89, spa: 55, spd: 69, spe: 112 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 545,
      prevo: 'whirlipede',
      species: 'scolipede',
      types: ['Bug', 'Poison'],
      weightkg: 200.5,
      aliases: ['pendoraa', 'scoli']
    }
  ],
  [
    'cottonee',
    {
      abilities: {
        first: 'Prankster',
        second: 'Infiltrator',
        hidden: 'Chlorophyll'
      },
      baseStats: { hp: 40, atk: 27, def: 60, spa: 37, spd: 50, spe: 66 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['whimsicott'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 546,
      species: 'cottonee',
      types: ['Grass', 'Fairy'],
      weightkg: 0.6,
      aliases: ['monmen']
    }
  ],
  [
    'whimsicott',
    {
      abilities: {
        first: 'Prankster',
        second: 'Infiltrator',
        hidden: 'Chlorophyll'
      },
      baseStats: { hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Fairy', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 547,
      prevo: 'cottonee',
      species: 'whimsicott',
      types: ['Grass', 'Fairy'],
      weightkg: 6.6,
      aliases: ['erufuun', 'whimsi']
    }
  ],
  [
    'petilil',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Own Tempo',
        hidden: 'Leaf Guard'
      },
      baseStats: { hp: 45, atk: 35, def: 50, spa: 70, spd: 50, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['lilligant'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 548,
      species: 'petilil',
      types: ['Grass'],
      weightkg: 6.6,
      aliases: ['churine']
    }
  ],
  [
    'lilligant',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Own Tempo',
        hidden: 'Leaf Guard'
      },
      baseStats: { hp: 70, atk: 60, def: 75, spa: 110, spd: 75, spe: 90 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Sun Stone',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 549,
      prevo: 'petilil',
      species: 'lilligant',
      types: ['Grass'],
      weightkg: 16.3,
      aliases: ['doredia']
    }
  ],
  [
    'basculin',
    {
      abilities: {
        first: 'Reckless',
        second: 'Adaptability',
        hidden: 'Mold Breaker'
      },
      baseForme: 'Red-Striped',
      baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Green',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 10280,
      num: 550,
      otherFormes: ['basculinbluestriped'],
      species: 'basculin',
      types: ['Water'],
      weightkg: 18,
      aliases: ['basculinr', 'basculinred', 'basculinredstripe', 'basculinredstriped', 'basurao']
    }
  ],
  [
    'basculinbluestriped',
    {
      abilities: {
        first: 'Rock Head',
        second: 'Adaptability',
        hidden: 'Mold Breaker'
      },
      baseSpecies: 'Basculin',
      baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Green',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Blue-Striped',
      formeLetter: 'B',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 10280,
      num: 550,
      species: 'basculin-blue-striped',
      types: ['Water'],
      weightkg: 18,
      aliases: ['basculinb', 'basculinblue', 'basculinbluestripe']
    }
  ],
  [
    'sandile',
    {
      abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
      baseStats: { hp: 50, atk: 72, def: 35, spa: 35, spd: 35, spe: 65 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['krokorok'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 551,
      species: 'sandile',
      types: ['Ground', 'Dark'],
      weightkg: 15.2,
      aliases: ['meguroko']
    }
  ],
  [
    'krokorok',
    {
      abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
      baseStats: { hp: 60, atk: 82, def: 45, spa: 45, spd: 45, spe: 74 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 29,
      evos: ['krookodile'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 552,
      prevo: 'sandile',
      species: 'krokorok',
      types: ['Ground', 'Dark'],
      weightkg: 33.4,
      aliases: ['warubiru']
    }
  ],
  [
    'krookodile',
    {
      abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
      baseStats: { hp: 95, atk: 117, def: 80, spa: 65, spd: 70, spe: 92 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 553,
      prevo: 'krokorok',
      species: 'krookodile',
      types: ['Ground', 'Dark'],
      weightkg: 96.3,
      aliases: ['krook', 'warubiaru']
    }
  ],
  [
    'darumaka',
    {
      abilities: { first: 'Hustle', hidden: 'Inner Focus' },
      baseStats: { hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['darmanitan'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 554,
      otherFormes: ['darumakagalar'],
      species: 'darumaka',
      types: ['Fire'],
      weightkg: 37.5,
      aliases: ['darumakka']
    }
  ],
  [
    'darumakagalar',
    {
      abilities: { first: 'Hustle', hidden: 'Inner Focus' },
      baseSpecies: 'Darumaka',
      baseStats: { hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['darmanitangalar'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 554,
      species: 'darumaka-galar',
      types: ['Ice'],
      weightkg: 40
    }
  ],
  [
    'darmanitan',
    {
      abilities: { first: 'Sheer Force', hidden: 'Zen Mode' },
      baseForme: 'Standard',
      baseStats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      otherFormes: ['darmanitanzen', 'darmanitangalar', 'darmanitangalarzen'],
      prevo: 'darumaka',
      species: 'darmanitan',
      types: ['Fire'],
      weightkg: 92.9,
      aliases: ['darm', 'darmanitans', 'darmanitanstandard', 'darmanitanstandardmode', 'hihidaruma']
    }
  ],
  [
    'darmanitangalar',
    {
      abilities: { first: 'Gorilla Tactics', hidden: 'Zen Mode' },
      baseSpecies: 'Darmanitan',
      baseStats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Ice Stone',
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      prevo: 'darumakagalar',
      species: 'darmanitan-galar',
      types: ['Ice'],
      weightkg: 120
    }
  ],
  [
    'darmanitanzen',
    {
      abilities: { first: 'Zen Mode' },
      baseSpecies: 'Darmanitan',
      baseStats: { hp: 105, atk: 30, def: 105, spa: 140, spd: 105, spe: 55 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 35,
      forme: 'Zen',
      formeLetter: 'Z',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      prevo: 'darumaka',
      species: 'darmanitan-zen',
      types: ['Fire', 'Psychic'],
      weightkg: 92.9,
      aliases: ['darmanitanz', 'darmanitanzenmode']
    }
  ],
  [
    'darmanitangalarzen',
    {
      abilities: { first: 'Gorilla Tactics', hidden: 'Zen Mode' },
      baseSpecies: 'Darmanitan-galar',
      baseStats: { hp: 105, atk: 160, def: 55, spa: 30, spd: 55, spe: 135 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Ice Stone',
      forme: 'Galar-Zen',
      formeLetter: 'Z',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 555,
      prevo: 'darumakagalar',
      species: 'darmanitan-galar-zen',
      types: ['Ice', 'Fire'],
      weightkg: 120,
      aliases: ['darmanitangalarzen', 'darmanitanzengalar', 'darmgz']
    }
  ],
  [
    'maractus',
    {
      abilities: {
        first: 'Water Absorb',
        second: 'Chlorophyll',
        hidden: 'Storm Drain'
      },
      baseStats: { hp: 75, atk: 86, def: 67, spa: 106, spd: 67, spe: 60 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 556,
      species: 'maractus',
      types: ['Grass'],
      weightkg: 28,
      aliases: ['marakatchi']
    }
  ],
  [
    'dwebble',
    {
      abilities: { first: 'Sturdy', second: 'Shell Armor', hidden: 'Weak Armor' },
      baseStats: { hp: 50, atk: 65, def: 85, spa: 35, spd: 35, spe: 55 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Bug', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['crustle'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 557,
      species: 'dwebble',
      types: ['Bug', 'Rock'],
      weightkg: 14.5,
      aliases: ['ishizumai']
    }
  ],
  [
    'crustle',
    {
      abilities: { first: 'Sturdy', second: 'Shell Armor', hidden: 'Weak Armor' },
      baseStats: { hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 558,
      prevo: 'dwebble',
      species: 'crustle',
      types: ['Bug', 'Rock'],
      weightkg: 200,
      aliases: ['iwaparesu']
    }
  ],
  [
    'scraggy',
    {
      abilities: { first: 'Shed Skin', second: 'Moxie', hidden: 'Intimidate' },
      baseStats: { hp: 50, atk: 75, def: 70, spa: 35, spd: 70, spe: 48 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['scrafty'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 559,
      species: 'scraggy',
      types: ['Dark', 'Fighting'],
      weightkg: 11.8,
      aliases: ['zuruggu']
    }
  ],
  [
    'scrafty',
    {
      abilities: { first: 'Shed Skin', second: 'Moxie', hidden: 'Intimidate' },
      baseStats: { hp: 65, atk: 90, def: 115, spa: 45, spd: 115, spe: 58 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 560,
      prevo: 'scraggy',
      species: 'scrafty',
      types: ['Dark', 'Fighting'],
      weightkg: 30,
      aliases: ['zuruzukin']
    }
  ],
  [
    'sigilyph',
    {
      abilities: {
        first: 'Wonder Skin',
        second: 'Magic Guard',
        hidden: 'Tinted Lens'
      },
      baseStats: { hp: 72, atk: 58, def: 80, spa: 103, spd: 80, spe: 97 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 561,
      species: 'sigilyph',
      types: ['Psychic', 'Flying'],
      weightkg: 14,
      aliases: ['shinboraa']
    }
  ],
  [
    'yamask',
    {
      abilities: { first: 'Mummy' },
      baseStats: { hp: 38, atk: 30, def: 85, spa: 55, spd: 65, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['cofagrigus'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 562,
      otherFormes: ['yamaskgalar'],
      species: 'yamask',
      types: ['Ghost'],
      weightkg: 1.5,
      aliases: ['desumasu']
    }
  ],
  [
    'yamaskgalar',
    {
      abilities: {
        first: 'Wandering Spirit',
        second: 'Wandering Spirit',
        hidden: 'Wandering Spirit'
      },
      baseSpecies: 'Yamask',
      baseStats: { hp: 38, atk: 55, def: 85, spa: 30, spd: 65, spe: 30 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Black',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['runerigus'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 562,
      species: 'yamask-galar',
      types: ['Ground', 'Ghost'],
      weightkg: 1.5
    }
  ],
  [
    'cofagrigus',
    {
      abilities: { first: 'Mummy' },
      baseStats: { hp: 58, atk: 50, def: 145, spa: 95, spd: 105, spe: 30 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Yellow',
      eggGroups: ['Mineral', 'Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 563,
      prevo: 'yamask',
      species: 'cofagrigus',
      types: ['Ghost'],
      weightkg: 76.5,
      aliases: ['cofag', 'desukaan']
    }
  ],
  [
    'tirtouga',
    {
      abilities: { first: 'Solid Rock', second: 'Sturdy', hidden: 'Swift Swim' },
      baseStats: { hp: 54, atk: 78, def: 103, spa: 53, spd: 45, spe: 22 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['carracosta'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 564,
      species: 'tirtouga',
      types: ['Water', 'Rock'],
      weightkg: 16.5,
      aliases: ['purotooga']
    }
  ],
  [
    'carracosta',
    {
      abilities: { first: 'Solid Rock', second: 'Sturdy', hidden: 'Swift Swim' },
      baseStats: { hp: 74, atk: 108, def: 133, spa: 83, spd: 65, spe: 32 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 565,
      prevo: 'tirtouga',
      species: 'carracosta',
      types: ['Water', 'Rock'],
      weightkg: 81,
      aliases: ['abagoora']
    }
  ],
  [
    'archen',
    {
      abilities: { first: 'Defeatist' },
      baseStats: { hp: 55, atk: 112, def: 45, spa: 74, spd: 45, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Flying', 'Water 3'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['archeops'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 566,
      species: 'archen',
      types: ['Rock', 'Flying'],
      weightkg: 9.5,
      aliases: ['aaken']
    }
  ],
  [
    'archeops',
    {
      abilities: { first: 'Defeatist' },
      baseStats: { hp: 75, atk: 140, def: 65, spa: 112, spd: 65, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Flying', 'Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 567,
      prevo: 'archen',
      species: 'archeops',
      types: ['Rock', 'Flying'],
      weightkg: 32,
      aliases: ['aakeosu']
    }
  ],
  [
    'trubbish',
    {
      abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Aftermath' },
      baseStats: { hp: 50, atk: 50, def: 62, spa: 40, spd: 62, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['garbodor'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 568,
      species: 'trubbish',
      types: ['Poison'],
      weightkg: 31,
      aliases: ['yabukuron']
    }
  ],
  [
    'garbodor',
    {
      abilities: { first: 'Stench', second: 'Weak Armor', hidden: 'Aftermath' },
      baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 569,
      otherFormes: ['garbodorgmax'],
      prevo: 'trubbish',
      species: 'garbodor',
      types: ['Poison'],
      weightkg: 107.3,
      aliases: ['dasutodasu']
    }
  ],
  [
    'garbodorgmax',
    {
      abilities: { first: 'Stench', second: 'Weak Armor', hidden: 'Aftermath' },
      baseSpecies: 'Garbodor',
      baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 10,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 569,
      species: 'garbodor-gmax',
      types: ['Poison'],
      weightkg: 429.2,
      aliases: ['gigantamax garbodor']
    }
  ],
  [
    'zorua',
    {
      abilities: { first: 'Illusion' },
      baseStats: { hp: 40, atk: 65, def: 40, spa: 80, spd: 40, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['zoroark'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 570,
      species: 'zorua',
      types: ['Dark'],
      weightkg: 12.5,
      aliases: ['zoroa']
    }
  ],
  [
    'zoroark',
    {
      abilities: { first: 'Illusion' },
      baseStats: { hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 571,
      prevo: 'zorua',
      species: 'zoroark',
      types: ['Dark'],
      weightkg: 81.1,
      aliases: ['zoroaaku']
    }
  ],
  [
    'minccino',
    {
      abilities: {
        first: 'Cute Charm',
        second: 'Technician',
        hidden: 'Skill Link'
      },
      baseStats: { hp: 55, atk: 50, def: 40, spa: 40, spd: 40, spe: 75 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['cinccino'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 572,
      species: 'minccino',
      types: ['Normal'],
      weightkg: 5.8,
      aliases: ['chiraamy']
    }
  ],
  [
    'cinccino',
    {
      abilities: {
        first: 'Cute Charm',
        second: 'Technician',
        hidden: 'Skill Link'
      },
      baseStats: { hp: 75, atk: 95, def: 60, spa: 65, spd: 60, spe: 115 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Shiny Stone',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 3855,
      num: 573,
      prevo: 'minccino',
      species: 'cinccino',
      types: ['Normal'],
      weightkg: 7.5,
      aliases: ['chirachiino']
    }
  ],
  [
    'gothita',
    {
      abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
      baseStats: { hp: 45, atk: 30, def: 50, spa: 55, spd: 65, spe: 45 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['gothorita'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 574,
      species: 'gothita',
      types: ['Psychic'],
      weightkg: 5.8,
      aliases: ['gochimu']
    }
  ],
  [
    'gothorita',
    {
      abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
      baseStats: { hp: 60, atk: 45, def: 70, spa: 75, spd: 85, spe: 55 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 32,
      evos: ['gothitelle'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 575,
      prevo: 'gothita',
      species: 'gothorita',
      types: ['Psychic'],
      weightkg: 18,
      aliases: ['gochimiru']
    }
  ],
  [
    'gothitelle',
    {
      abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
      baseStats: { hp: 70, atk: 55, def: 95, spa: 95, spd: 110, spe: 65 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Purple',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 41,
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 576,
      prevo: 'gothorita',
      species: 'gothitelle',
      types: ['Psychic'],
      weightkg: 44,
      aliases: ['gochiruzeru']
    }
  ],
  [
    'solosis',
    {
      abilities: {
        first: 'Overcoat',
        second: 'Magic Guard',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 45, atk: 30, def: 40, spa: 105, spd: 50, spe: 20 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['duosion'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 577,
      species: 'solosis',
      types: ['Psychic'],
      weightkg: 1,
      aliases: ['yuniran']
    }
  ],
  [
    'duosion',
    {
      abilities: {
        first: 'Overcoat',
        second: 'Magic Guard',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 65, atk: 40, def: 50, spa: 125, spd: 60, spe: 30 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['reuniclus'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 578,
      prevo: 'solosis',
      species: 'duosion',
      types: ['Psychic'],
      weightkg: 8,
      aliases: ['daburan']
    }
  ],
  [
    'reuniclus',
    {
      abilities: {
        first: 'Overcoat',
        second: 'Magic Guard',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 41,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 579,
      prevo: 'duosion',
      species: 'reuniclus',
      types: ['Psychic'],
      weightkg: 20.1,
      aliases: ['rank', 'rankurusu', 'reuni']
    }
  ],
  [
    'ducklett',
    {
      abilities: { first: 'Keen Eye', second: 'Big Pecks', hidden: 'Hydration' },
      baseStats: { hp: 62, atk: 44, def: 50, spa: 44, spd: 50, spe: 55 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['swanna'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 580,
      species: 'ducklett',
      types: ['Water', 'Flying'],
      weightkg: 5.5,
      aliases: ['koaruhii']
    }
  ],
  [
    'swanna',
    {
      abilities: { first: 'Keen Eye', second: 'Big Pecks', hidden: 'Hydration' },
      baseStats: { hp: 75, atk: 87, def: 63, spa: 87, spd: 63, spe: 98 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Water 1', 'Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 581,
      prevo: 'ducklett',
      species: 'swanna',
      types: ['Water', 'Flying'],
      weightkg: 24.2,
      aliases: ['suwanna']
    }
  ],
  [
    'vanillite',
    {
      abilities: { first: 'Ice Body', second: 'Snow Cloak', hidden: 'Weak Armor' },
      baseStats: { hp: 36, atk: 50, def: 50, spa: 65, spd: 60, spe: 44 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['vanillish'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 582,
      species: 'vanillite',
      types: ['Ice'],
      weightkg: 5.7,
      aliases: ['baniputchi']
    }
  ],
  [
    'vanillish',
    {
      abilities: { first: 'Ice Body', second: 'Snow Cloak', hidden: 'Weak Armor' },
      baseStats: { hp: 51, atk: 65, def: 65, spa: 80, spd: 75, spe: 59 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 35,
      evos: ['vanilluxe'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 583,
      prevo: 'vanillite',
      species: 'vanillish',
      types: ['Ice'],
      weightkg: 41,
      aliases: ['baniritchi']
    }
  ],
  [
    'vanilluxe',
    {
      abilities: {
        first: 'Ice Body',
        second: 'Snow Warning',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 47,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 584,
      prevo: 'vanillish',
      species: 'vanilluxe',
      types: ['Ice'],
      weightkg: 57.5,
      aliases: ['baibanira']
    }
  ],
  [
    'deerling',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Sap Sipper',
        hidden: 'Serene Grace'
      },
      baseForme: 'Spring',
      baseStats: { hp: 60, atk: 60, def: 50, spa: 40, spd: 50, spe: 75 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      cosmeticFormes: ['Deerling-Summer', 'Deerling-Autumn', 'Deerling-Winter'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['sawsbuck'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 585,
      species: 'deerling',
      types: ['Normal', 'Grass'],
      weightkg: 19.5,
      aliases: ['deerlingautumn', 'deerlingspring', 'deerlingsummer', 'deerlingwinter', 'shikijika']
    }
  ],
  [
    'sawsbuck',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Sap Sipper',
        hidden: 'Serene Grace'
      },
      baseForme: 'Spring',
      baseStats: { hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      cosmeticFormes: ['Sawsbuck-Summer', 'Sawsbuck-Autumn', 'Sawsbuck-Winter'],
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 586,
      prevo: 'deerling',
      species: 'sawsbuck',
      types: ['Normal', 'Grass'],
      weightkg: 92.5,
      aliases: ['mebukijika', 'sawsbuckautumn', 'sawsbuckspring', 'sawsbucksummer', 'sawsbuckwinter']
    }
  ],
  [
    'emolga',
    {
      abilities: { first: 'Static', hidden: 'Motor Drive' },
      baseStats: { hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 103 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 587,
      species: 'emolga',
      types: ['Electric', 'Flying'],
      weightkg: 5,
      aliases: ['emonga']
    }
  ],
  [
    'karrablast',
    {
      abilities: { first: 'Swarm', second: 'Shed Skin', hidden: 'No Guard' },
      baseStats: { hp: 50, atk: 75, def: 45, spa: 40, spd: 45, spe: 60 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['escavalier'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 588,
      species: 'karrablast',
      types: ['Bug'],
      weightkg: 5.9,
      aliases: ['kaburumo']
    }
  ],
  [
    'escavalier',
    {
      abilities: { first: 'Swarm', second: 'Shell Armor', hidden: 'Overcoat' },
      baseStats: { hp: 70, atk: 135, def: 105, spa: 60, spd: 105, spe: 20 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade for Shelmet',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 589,
      prevo: 'karrablast',
      species: 'escavalier',
      types: ['Bug', 'Steel'],
      weightkg: 33,
      aliases: ['esca', 'shubarugo']
    }
  ],
  [
    'foongus',
    {
      abilities: { first: 'Effect Spore', hidden: 'Regenerator' },
      baseStats: { hp: 69, atk: 55, def: 45, spa: 55, spd: 55, spe: 15 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Grass'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['amoonguss'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 590,
      species: 'foongus',
      types: ['Grass', 'Poison'],
      weightkg: 1,
      aliases: ['tamagetake']
    }
  ],
  [
    'amoonguss',
    {
      abilities: { first: 'Effect Spore', hidden: 'Regenerator' },
      baseStats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Grass'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 591,
      prevo: 'foongus',
      species: 'amoonguss',
      types: ['Grass', 'Poison'],
      weightkg: 10.5,
      aliases: ['morobareru']
    }
  ],
  [
    'frillish',
    {
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      baseStats: { hp: 55, atk: 40, def: 50, spa: 65, spd: 85, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['jellicent'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 592,
      otherFormes: ['frillishfemale'],
      species: 'frillish',
      types: ['Water', 'Ghost'],
      weightkg: 33,
      aliases: ['pururiru']
    }
  ],
  [
    'frillishfemale',
    {
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      baseSpecies: 'frillish',
      baseStats: { hp: 55, atk: 40, def: 50, spa: 65, spd: 85, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['jellicent'],
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 592,
      otherFormes: ['frillish'],
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/frillish-f.gif',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/frillish-f.gif',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/frillish-f.gif',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/ani/frillish-f.gif',
      species: 'frillish-female',
      types: ['Water', 'Ghost'],
      weightkg: 33
    }
  ],
  [
    'jellicent',
    {
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      baseStats: { hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 593,
      otherFormes: ['jellicentfemale'],
      prevo: 'frillish',
      species: 'jellicent',
      types: ['Water', 'Ghost'],
      weightkg: 135,
      aliases: ['burungeru']
    }
  ],
  [
    'jellicentfemale',
    {
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      baseSpecies: 'jellicent',
      baseStats: { hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 40,
      forme: 'female',
      formeLetter: 'F',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 593,
      otherFormes: ['jellicent'],
      prevo: 'frillish',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/jellicent-f.gif',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/jellicent-f.gif',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/jellicent-f.gif',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/ani/jellicent-f.gif',
      species: 'jellicent-female',
      types: ['Water', 'Ghost'],
      weightkg: 135
    }
  ],
  [
    'alomomola',
    {
      abilities: { first: 'Healer', second: 'Hydration', hidden: 'Regenerator' },
      baseStats: { hp: 165, atk: 75, def: 80, spa: 40, spd: 45, spe: 65 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 594,
      species: 'alomomola',
      types: ['Water'],
      weightkg: 31.6,
      aliases: ['mamanbou']
    }
  ],
  [
    'joltik',
    {
      abilities: { first: 'Compound Eyes', second: 'Unnerve', hidden: 'Swarm' },
      baseStats: { hp: 50, atk: 47, def: 50, spa: 57, spd: 50, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['galvantula'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 595,
      species: 'joltik',
      types: ['Bug', 'Electric'],
      weightkg: 0.6,
      aliases: ['bachuru']
    }
  ],
  [
    'galvantula',
    {
      abilities: { first: 'Compound Eyes', second: 'Unnerve', hidden: 'Swarm' },
      baseStats: { hp: 70, atk: 77, def: 60, spa: 97, spd: 60, spe: 108 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 596,
      prevo: 'joltik',
      species: 'galvantula',
      types: ['Bug', 'Electric'],
      weightkg: 14.3,
      aliases: ['denchura']
    }
  ],
  [
    'ferroseed',
    {
      abilities: { first: 'Iron Barbs' },
      baseStats: { hp: 44, atk: 50, def: 91, spa: 24, spd: 86, spe: 10 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Grass', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['ferrothorn'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 597,
      species: 'ferroseed',
      types: ['Grass', 'Steel'],
      weightkg: 18.8,
      aliases: ['tesshiido']
    }
  ],
  [
    'ferrothorn',
    {
      abilities: { first: 'Iron Barbs', hidden: 'Anticipation' },
      baseStats: { hp: 74, atk: 94, def: 131, spa: 54, spd: 116, spe: 20 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Grass', 'Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 598,
      prevo: 'ferroseed',
      species: 'ferrothorn',
      types: ['Grass', 'Steel'],
      weightkg: 110,
      aliases: ['ferro', 'nattorei']
    }
  ],
  [
    'klink',
    {
      abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
      baseStats: { hp: 40, atk: 55, def: 70, spa: 45, spd: 60, spe: 30 },
      catchRate: {
        base: 130,
        percentageWithOrdinaryPokeballAtFullHealth: '26.5%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['klang'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 599,
      species: 'klink',
      types: ['Steel'],
      weightkg: 21,
      aliases: ['giaru']
    }
  ],
  [
    'klang',
    {
      abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
      baseStats: { hp: 60, atk: 80, def: 95, spa: 70, spd: 85, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      evos: ['klinklang'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 600,
      prevo: 'klink',
      species: 'klang',
      types: ['Steel'],
      weightkg: 51,
      aliases: ['gigiaru']
    }
  ],
  [
    'klinklang',
    {
      abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
      baseStats: { hp: 60, atk: 100, def: 115, spa: 70, spd: 85, spe: 90 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 49,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 601,
      prevo: 'klang',
      species: 'klinklang',
      types: ['Steel'],
      weightkg: 81,
      aliases: ['gigigiaru']
    }
  ],
  [
    'tynamo',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 35, atk: 55, def: 40, spa: 45, spd: 40, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['eelektrik'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 602,
      species: 'tynamo',
      types: ['Electric'],
      weightkg: 0.3,
      aliases: ['shibishirasu']
    }
  ],
  [
    'eelektrik',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 65, atk: 85, def: 70, spa: 75, spd: 70, spe: 40 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      evos: ['eelektross'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 603,
      prevo: 'tynamo',
      species: 'eelektrik',
      types: ['Electric'],
      weightkg: 22,
      aliases: ['shibibiiru']
    }
  ],
  [
    'eelektross',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 50 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Blue',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 39,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 604,
      prevo: 'eelektrik',
      species: 'eelektross',
      types: ['Electric'],
      weightkg: 80.5,
      aliases: ['shibirudon']
    }
  ],
  [
    'elgyem',
    {
      abilities: { first: 'Telepathy', second: 'Synchronize', hidden: 'Analytic' },
      baseStats: { hp: 55, atk: 55, def: 55, spa: 85, spd: 55, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['beheeyem'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 605,
      species: 'elgyem',
      types: ['Psychic'],
      weightkg: 9,
      aliases: ['riguree']
    }
  ],
  [
    'beheeyem',
    {
      abilities: { first: 'Telepathy', second: 'Synchronize', hidden: 'Analytic' },
      baseStats: { hp: 75, atk: 75, def: 75, spa: 125, spd: 95, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 42,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 606,
      prevo: 'elgyem',
      species: 'beheeyem',
      types: ['Psychic'],
      weightkg: 34.5,
      aliases: ['oobemu']
    }
  ],
  [
    'litwick',
    {
      abilities: {
        first: 'Flash Fire',
        second: 'Flame Body',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 50, atk: 30, def: 55, spa: 65, spd: 55, spe: 20 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['lampent'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 607,
      species: 'litwick',
      types: ['Ghost', 'Fire'],
      weightkg: 3.1,
      aliases: ['hitomoshi']
    }
  ],
  [
    'lampent',
    {
      abilities: {
        first: 'Flash Fire',
        second: 'Flame Body',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 60, atk: 40, def: 60, spa: 95, spd: 60, spe: 55 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 41,
      evos: ['chandelure'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 608,
      prevo: 'litwick',
      species: 'lampent',
      types: ['Ghost', 'Fire'],
      weightkg: 13,
      aliases: ['ranpuraa']
    }
  ],
  [
    'chandelure',
    {
      abilities: {
        first: 'Flash Fire',
        second: 'Flame Body',
        hidden: 'Infiltrator'
      },
      baseStats: { hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 41,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 609,
      prevo: 'lampent',
      species: 'chandelure',
      types: ['Ghost', 'Fire'],
      weightkg: 34.3,
      aliases: ['chandy', 'shandera']
    }
  ],
  [
    'axew',
    {
      abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
      baseStats: { hp: 46, atk: 87, def: 60, spa: 30, spd: 40, spe: 57 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['fraxure'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 610,
      species: 'axew',
      types: ['Dragon'],
      weightkg: 18,
      aliases: ['kibago']
    }
  ],
  [
    'fraxure',
    {
      abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
      baseStats: { hp: 66, atk: 117, def: 70, spa: 40, spd: 50, spe: 67 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Green',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      evos: ['haxorus'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 611,
      prevo: 'axew',
      species: 'fraxure',
      types: ['Dragon'],
      weightkg: 36,
      aliases: ['onondo']
    }
  ],
  [
    'haxorus',
    {
      abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
      baseStats: { hp: 76, atk: 147, def: 90, spa: 60, spd: 70, spe: 97 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 48,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 612,
      prevo: 'fraxure',
      species: 'haxorus',
      types: ['Dragon'],
      weightkg: 105.5,
      aliases: ['ononokusu']
    }
  ],
  [
    'cubchoo',
    {
      abilities: { first: 'Snow Cloak', second: 'Slush Rush', hidden: 'Rattled' },
      baseStats: { hp: 55, atk: 70, def: 40, spa: 60, spd: 40, spe: 40 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['beartic'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 613,
      species: 'cubchoo',
      types: ['Ice'],
      weightkg: 8.5,
      aliases: ['kumashun']
    }
  ],
  [
    'beartic',
    {
      abilities: {
        first: 'Snow Cloak',
        second: 'Slush Rush',
        hidden: 'Swift Swim'
      },
      baseStats: { hp: 95, atk: 130, def: 80, spa: 70, spd: 80, spe: 50 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 614,
      prevo: 'cubchoo',
      species: 'beartic',
      types: ['Ice'],
      weightkg: 260,
      aliases: ['tsunbeaa']
    }
  ],
  [
    'cryogonal',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 80, atk: 50, def: 50, spa: 95, spd: 135, spe: 105 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Blue',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 615,
      species: 'cryogonal',
      types: ['Ice'],
      weightkg: 148,
      aliases: ['furiijio']
    }
  ],
  [
    'shelmet',
    {
      abilities: { first: 'Hydration', second: 'Shell Armor', hidden: 'Overcoat' },
      baseStats: { hp: 50, atk: 40, def: 85, spa: 40, spd: 65, spe: 25 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['accelgor'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 616,
      species: 'shelmet',
      types: ['Bug'],
      weightkg: 7.7,
      aliases: ['chobomaki']
    }
  ],
  [
    'accelgor',
    {
      abilities: { first: 'Hydration', second: 'Sticky Hold', hidden: 'Unburden' },
      baseStats: { hp: 80, atk: 70, def: 40, spa: 100, spd: 60, spe: 145 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'Trade for Karrablast',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 617,
      prevo: 'shelmet',
      species: 'accelgor',
      types: ['Bug'],
      weightkg: 25.3,
      aliases: ['agirudaa']
    }
  ],
  [
    'stunfisk',
    {
      abilities: { first: 'Static', second: 'Limber', hidden: 'Sand Veil' },
      baseStats: { hp: 109, atk: 66, def: 84, spa: 81, spd: 99, spe: 32 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Amorphous'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 618,
      species: 'stunfisk',
      types: ['Ground', 'Electric'],
      weightkg: 11,
      aliases: ['maggyo']
    }
  ],
  [
    'stunfiskgalar',
    {
      abilities: { first: 'Mimicry' },
      baseStats: { hp: 109, atk: 81, def: 99, spa: 66, spd: 84, spe: 32 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Water 1', 'Amorphous'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 618,
      species: 'stunfisk-galar',
      types: ['Ground', 'Steel'],
      weightkg: 20.5
    }
  ],
  [
    'mienfoo',
    {
      abilities: {
        first: 'Inner Focus',
        second: 'Regenerator',
        hidden: 'Reckless'
      },
      baseStats: { hp: 45, atk: 85, def: 50, spa: 55, spd: 50, spe: 65 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['mienshao'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 619,
      species: 'mienfoo',
      types: ['Fighting'],
      weightkg: 20,
      aliases: ['kojofuu']
    }
  ],
  [
    'mienshao',
    {
      abilities: {
        first: 'Inner Focus',
        second: 'Regenerator',
        hidden: 'Reckless'
      },
      baseStats: { hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Field', 'Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 50,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 6425,
      num: 620,
      prevo: 'mienfoo',
      species: 'mienshao',
      types: ['Fighting'],
      weightkg: 35.5,
      aliases: ['kojondo', 'shao']
    }
  ],
  [
    'druddigon',
    {
      abilities: {
        first: 'Rough Skin',
        second: 'Sheer Force',
        hidden: 'Mold Breaker'
      },
      baseStats: { hp: 77, atk: 120, def: 90, spa: 60, spd: 90, spe: 48 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 621,
      species: 'druddigon',
      types: ['Dragon'],
      weightkg: 139,
      aliases: ['kurimugan']
    }
  ],
  [
    'golett',
    {
      abilities: { first: 'Iron Fist', second: 'Klutz', hidden: 'No Guard' },
      baseStats: { hp: 59, atk: 74, def: 50, spa: 35, spd: 50, spe: 35 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['golurk'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 622,
      species: 'golett',
      types: ['Ground', 'Ghost'],
      weightkg: 92,
      aliases: ['gobitto']
    }
  ],
  [
    'golurk',
    {
      abilities: { first: 'Iron Fist', second: 'Klutz', hidden: 'No Guard' },
      baseStats: { hp: 89, atk: 124, def: 80, spa: 55, spd: 80, spe: 55 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Green',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 43,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 623,
      prevo: 'golett',
      species: 'golurk',
      types: ['Ground', 'Ghost'],
      weightkg: 330,
      aliases: ['goruugu', 'lurk']
    }
  ],
  [
    'pawniard',
    {
      abilities: { first: 'Defiant', second: 'Inner Focus', hidden: 'Pressure' },
      baseStats: { hp: 45, atk: 85, def: 70, spa: 40, spd: 40, spe: 60 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['bisharp'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 624,
      species: 'pawniard',
      types: ['Dark', 'Steel'],
      weightkg: 10.2,
      aliases: ['komatana']
    }
  ],
  [
    'bisharp',
    {
      abilities: { first: 'Defiant', second: 'Inner Focus', hidden: 'Pressure' },
      baseStats: { hp: 65, atk: 125, def: 100, spa: 60, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 52,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 625,
      prevo: 'pawniard',
      species: 'bisharp',
      types: ['Dark', 'Steel'],
      weightkg: 70,
      aliases: ['bish', 'kirikizan']
    }
  ],
  [
    'bouffalant',
    {
      abilities: { first: 'Reckless', second: 'Sap Sipper', hidden: 'Soundproof' },
      baseStats: { hp: 95, atk: 110, def: 95, spa: 40, spd: 95, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 626,
      species: 'bouffalant',
      types: ['Normal'],
      weightkg: 94.6,
      aliases: ['baffuron']
    }
  ],
  [
    'rufflet',
    {
      abilities: { first: 'Keen Eye', second: 'Sheer Force', hidden: 'Hustle' },
      baseStats: { hp: 70, atk: 83, def: 50, spa: 37, spd: 50, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['braviary'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 627,
      species: 'rufflet',
      types: ['Normal', 'Flying'],
      weightkg: 10.5,
      aliases: ['washibon']
    }
  ],
  [
    'braviary',
    {
      abilities: { first: 'Keen Eye', second: 'Sheer Force', hidden: 'Defiant' },
      baseStats: { hp: 100, atk: 123, def: 75, spa: 57, spd: 75, spe: 80 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 54,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 628,
      prevo: 'rufflet',
      species: 'braviary',
      types: ['Normal', 'Flying'],
      weightkg: 41,
      aliases: ['muricabird', 'uooguru']
    }
  ],
  [
    'vullaby',
    {
      abilities: { first: 'Big Pecks', second: 'Overcoat', hidden: 'Weak Armor' },
      baseStats: { hp: 70, atk: 55, def: 75, spa: 45, spd: 65, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['mandibuzz'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 629,
      species: 'vullaby',
      types: ['Dark', 'Flying'],
      weightkg: 9,
      aliases: ['baruchai']
    }
  ],
  [
    'mandibuzz',
    {
      abilities: { first: 'Big Pecks', second: 'Overcoat', hidden: 'Weak Armor' },
      baseStats: { hp: 110, atk: 65, def: 105, spa: 55, spd: 95, spe: 80 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 54,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 630,
      prevo: 'vullaby',
      species: 'mandibuzz',
      types: ['Dark', 'Flying'],
      weightkg: 39.5,
      aliases: ['barujiina', 'mandi']
    }
  ],
  [
    'heatmor',
    {
      abilities: {
        first: 'Gluttony',
        second: 'Flash Fire',
        hidden: 'White Smoke'
      },
      baseStats: { hp: 85, atk: 97, def: 66, spa: 105, spd: 66, spe: 65 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 631,
      species: 'heatmor',
      types: ['Fire'],
      weightkg: 58,
      aliases: ['kuitaran']
    }
  ],
  [
    'durant',
    {
      abilities: { first: 'Swarm', second: 'Hustle', hidden: 'Truant' },
      baseStats: { hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 632,
      species: 'durant',
      types: ['Bug', 'Steel'],
      weightkg: 33,
      aliases: ['aianto']
    }
  ],
  [
    'deino',
    {
      abilities: { first: 'Hustle' },
      baseStats: { hp: 52, atk: 65, def: 50, spa: 45, spd: 50, spe: 38 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['zweilous'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 633,
      species: 'deino',
      types: ['Dark', 'Dragon'],
      weightkg: 17.3,
      aliases: ['monozu']
    }
  ],
  [
    'zweilous',
    {
      abilities: { first: 'Hustle' },
      baseStats: { hp: 72, atk: 85, def: 70, spa: 65, spd: 70, spe: 58 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 50,
      evos: ['hydreigon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 634,
      prevo: 'deino',
      species: 'zweilous',
      types: ['Dark', 'Dragon'],
      weightkg: 50,
      aliases: ['jiheddo']
    }
  ],
  [
    'hydreigon',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 64,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 635,
      prevo: 'zweilous',
      species: 'hydreigon',
      types: ['Dark', 'Dragon'],
      weightkg: 160,
      aliases: ['sazandora']
    }
  ],
  [
    'larvesta',
    {
      abilities: { first: 'Flame Body', hidden: 'Swarm' },
      baseStats: { hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['volcarona'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 636,
      species: 'larvesta',
      types: ['Bug', 'Fire'],
      weightkg: 28.8,
      aliases: ['meraruba']
    }
  ],
  [
    'volcarona',
    {
      abilities: { first: 'Flame Body', hidden: 'Swarm' },
      baseStats: { hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100 },
      catchRate: { base: 15, percentageWithOrdinaryPokeballAtFullHealth: '5.2%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 59,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 637,
      prevo: 'larvesta',
      species: 'volcarona',
      types: ['Bug', 'Fire'],
      weightkg: 46,
      aliases: ['urugamosu']
    }
  ],
  [
    'cobalion',
    {
      abilities: { first: 'Justified' },
      baseStats: { hp: 91, atk: 90, def: 129, spa: 90, spd: 72, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.1,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 638,
      species: 'cobalion',
      types: ['Steel', 'Fighting'],
      weightkg: 250,
      aliases: ['coba', 'kobaruon']
    }
  ],
  [
    'terrakion',
    {
      abilities: { first: 'Justified' },
      baseStats: { hp: 91, atk: 129, def: 90, spa: 72, spd: 90, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 639,
      species: 'terrakion',
      types: ['Rock', 'Fighting'],
      weightkg: 260,
      aliases: ['terakion', 'terra']
    }
  ],
  [
    'virizion',
    {
      abilities: { first: 'Justified' },
      baseStats: { hp: 91, atk: 90, def: 72, spa: 90, spd: 129, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 640,
      species: 'virizion',
      types: ['Grass', 'Fighting'],
      weightkg: 200,
      aliases: ['birijion', 'viriz']
    }
  ],
  [
    'tornadus',
    {
      abilities: { first: 'Prankster', hidden: 'Defiant' },
      baseForme: 'Incarnate',
      baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 641,
      otherFormes: ['tornadustherian'],
      species: 'tornadus',
      types: ['Flying'],
      weightkg: 63,
      aliases: ['torn', 'tornadusi', 'tornadusincarnate', 'tornadusincarnation', 'torunerosu']
    }
  ],
  [
    'tornadustherian',
    {
      abilities: { first: 'Regenerator' },
      baseSpecies: 'Tornadus',
      baseStats: { hp: 79, atk: 100, def: 80, spa: 110, spd: 90, spe: 121 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Green',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 641,
      species: 'tornadus-therian',
      types: ['Flying'],
      weightkg: 63,
      aliases: ['tornadust', 'tornt']
    }
  ],
  [
    'thundurus',
    {
      abilities: { first: 'Prankster', hidden: 'Defiant' },
      baseForme: 'Incarnate',
      baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 642,
      otherFormes: ['thundurustherian'],
      species: 'thundurus',
      types: ['Electric', 'Flying'],
      weightkg: 61,
      aliases: ['borutorosu', 'thundurusi', 'thundurusincarnate', 'thundurusincarnation', 'thundy']
    }
  ],
  [
    'thundurustherian',
    {
      abilities: { first: 'Volt Absorb' },
      baseSpecies: 'Thundurus',
      baseStats: { hp: 79, atk: 105, def: 70, spa: 145, spd: 80, spe: 101 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 642,
      species: 'thundurus-therian',
      types: ['Electric', 'Flying'],
      weightkg: 61,
      aliases: ['thundurust', 'thundyt']
    }
  ],
  [
    'reshiram',
    {
      abilities: { first: 'Turboblaze' },
      baseStats: { hp: 100, atk: 120, def: 100, spa: 150, spd: 120, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 643,
      species: 'reshiram',
      types: ['Dragon', 'Fire'],
      weightkg: 330,
      aliases: ['reshiramu']
    }
  ],
  [
    'zekrom',
    {
      abilities: { first: 'Teravolt' },
      baseStats: { hp: 100, atk: 150, def: 120, spa: 120, spd: 100, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Black',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.9,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 644,
      species: 'zekrom',
      types: ['Dragon', 'Electric'],
      weightkg: 345,
      aliases: ['zekuromu']
    }
  ],
  [
    'landorus',
    {
      abilities: { first: 'Sand Force', hidden: 'Sheer Force' },
      baseForme: 'Incarnate',
      baseStats: { hp: 89, atk: 125, def: 90, spa: 115, spd: 80, spe: 101 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 645,
      otherFormes: ['landorustherian'],
      species: 'landorus',
      types: ['Ground', 'Flying'],
      weightkg: 68,
      aliases: ['lando', 'landoi', 'landorusi', 'landorusincarnate', 'landorusincarnation', 'randorosu']
    }
  ],
  [
    'landorustherian',
    {
      abilities: { first: 'Intimidate' },
      baseSpecies: 'Landorus',
      baseStats: { hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Therian',
      formeLetter: 'T',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 645,
      species: 'landorus-therian',
      types: ['Ground', 'Flying'],
      weightkg: 68,
      aliases: ['landorust', 'landot']
    }
  ],
  [
    'kyurem',
    {
      abilities: { first: 'Pressure' },
      baseStats: { hp: 125, atk: 130, def: 90, spa: 130, spd: 90, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 1, atk: 1, def: 0, spa: 1, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 646,
      otherFormes: ['kyuremblack', 'kyuremwhite'],
      species: 'kyurem',
      types: ['Dragon', 'Ice'],
      weightkg: 325,
      aliases: ['kyuremu']
    }
  ],
  [
    'kyuremblack',
    {
      abilities: { first: 'Teravolt' },
      baseSpecies: 'Kyurem',
      baseStats: { hp: 125, atk: 170, def: 100, spa: 120, spd: 90, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Black',
      formeLetter: 'B',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 646,
      species: 'kyurem-black',
      types: ['Dragon', 'Ice'],
      weightkg: 325,
      aliases: ['cube', 'kyub', 'kyuremb']
    }
  ],
  [
    'kyuremwhite',
    {
      abilities: { first: 'Turboblaze' },
      baseSpecies: 'Kyurem',
      baseStats: { hp: 125, atk: 120, def: 90, spa: 170, spd: 100, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'White',
      formeLetter: 'W',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 3.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 646,
      species: 'kyurem-white',
      types: ['Dragon', 'Ice'],
      weightkg: 325,
      aliases: ['kyuremw', 'kyuw']
    }
  ],
  [
    'keldeo',
    {
      abilities: { first: 'Justified' },
      baseForme: 'Ordinary',
      baseStats: { hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 647,
      otherFormes: ['keldeoresolute'],
      species: 'keldeo',
      types: ['Water', 'Fighting'],
      weightkg: 48.5,
      aliases: ['keld', 'keldeoo', 'keldeoordinary', 'kerudio']
    }
  ],
  [
    'keldeoresolute',
    {
      abilities: { first: 'Justified' },
      baseSpecies: 'Keldeo',
      baseStats: { hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Resolute',
      formeLetter: 'R',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 647,
      species: 'keldeo-resolute',
      types: ['Water', 'Fighting'],
      weightkg: 48.5,
      aliases: ['keldeor', 'keldeoresolution']
    }
  ],
  [
    'meloetta',
    {
      abilities: { first: 'Serene Grace' },
      baseForme: 'Aria',
      baseStats: { hp: 100, atk: 77, def: 77, spa: 128, spd: 128, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 648,
      otherFormes: ['meloettapirouette'],
      species: 'meloetta',
      types: ['Normal', 'Psychic'],
      weightkg: 6.5,
      aliases: ['meloettaa', 'meloettaaria', 'meloettavoice', 'meroetta']
    }
  ],
  [
    'meloettapirouette',
    {
      abilities: { first: 'Serene Grace' },
      baseSpecies: 'Meloetta',
      baseStats: { hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 1, spa: 0, spd: 0, spe: 1 },
      forme: 'Pirouette',
      formeLetter: 'P',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 648,
      species: 'meloetta-pirouette',
      types: ['Normal', 'Fighting'],
      weightkg: 6.5,
      aliases: ['meloettap', 'meloettas', 'meloettastep']
    }
  ],
  [
    'genesect',
    {
      abilities: { first: 'Download' },
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      otherFormes: ['genesectdouse', 'genesectshock', 'genesectburn', 'genesectchill'],
      species: 'genesect',
      types: ['Bug', 'Steel'],
      weightkg: 82.5,
      aliases: ['gene', 'genosekuto']
    }
  ],
  [
    'genesectdouse',
    {
      abilities: { first: 'Download' },
      baseSpecies: 'Genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Douse',
      formeLetter: 'D',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      species: 'genesect-douse',
      types: ['Bug', 'Steel'],
      weightkg: 82.5
    }
  ],
  [
    'genesectshock',
    {
      abilities: { first: 'Download' },
      baseSpecies: 'Genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Shock',
      formeLetter: 'S',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      species: 'genesect-shock',
      types: ['Bug', 'Steel'],
      weightkg: 82.5
    }
  ],
  [
    'genesectburn',
    {
      abilities: { first: 'Download' },
      baseSpecies: 'Genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Burn',
      formeLetter: 'B',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      species: 'genesect-burn',
      types: ['Bug', 'Steel'],
      weightkg: 82.5
    }
  ],
  [
    'genesectchill',
    {
      abilities: { first: 'Download' },
      baseSpecies: 'Genesect',
      baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 1, spd: 0, spe: 1 },
      forme: 'Chill',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 649,
      species: 'genesect-chill',
      types: ['Bug', 'Steel'],
      weightkg: 82.5
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
