import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'victini',
    {
      species: 'victini',
      num: 494,
      types: ['Psychic', 'Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Victory Star' },
      heightm: 0.4,
      weightkg: 4,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'snivy',
    {
      species: 'snivy',
      num: 495,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 45,
        atk: 45,
        def: 55,
        spa: 45,
        spd: 55,
        spe: 63
      },
      abilities: { first: 'Overgrow', hidden: 'Contrary' },
      heightm: 0.6,
      weightkg: 8.1,
      color: 'Green',
      evos: ['servine'],
      eggGroups: ['Field', 'Grass']
    }
  ],
  [
    'servine',
    {
      species: 'servine',
      num: 496,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 75,
        spa: 60,
        spd: 75,
        spe: 83
      },
      abilities: { first: 'Overgrow', hidden: 'Contrary' },
      heightm: 0.8,
      weightkg: 16,
      color: 'Green',
      prevo: 'snivy',
      evos: ['serperior'],
      evoLevel: 17,
      eggGroups: ['Field', 'Grass']
    }
  ],
  [
    'serperior',
    {
      species: 'serperior',
      num: 497,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 75,
        def: 95,
        spa: 75,
        spd: 95,
        spe: 113
      },
      abilities: { first: 'Overgrow', hidden: 'Contrary' },
      heightm: 3.3,
      weightkg: 63,
      color: 'Green',
      prevo: 'servine',
      evoLevel: 36,
      eggGroups: ['Field', 'Grass']
    }
  ],
  [
    'tepig',
    {
      species: 'tepig',
      num: 498,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 63,
        def: 45,
        spa: 45,
        spd: 45,
        spe: 45
      },
      abilities: { first: 'Blaze', hidden: 'Thick Fat' },
      heightm: 0.5,
      weightkg: 9.9,
      color: 'Red',
      evos: ['pignite'],
      eggGroups: ['Field']
    }
  ],
  [
    'pignite',
    {
      species: 'pignite',
      num: 499,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 90,
        atk: 93,
        def: 55,
        spa: 70,
        spd: 55,
        spe: 55
      },
      abilities: { first: 'Blaze', hidden: 'Thick Fat' },
      heightm: 1,
      weightkg: 55.5,
      color: 'Red',
      prevo: 'tepig',
      evos: ['emboar'],
      evoLevel: 17,
      eggGroups: ['Field']
    }
  ],
  [
    'emboar',
    {
      species: 'emboar',
      num: 500,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 110,
        atk: 123,
        def: 65,
        spa: 100,
        spd: 65,
        spe: 65
      },
      abilities: { first: 'Blaze', hidden: 'Reckless' },
      heightm: 1.6,
      weightkg: 150,
      color: 'Red',
      prevo: 'pignite',
      evoLevel: 36,
      eggGroups: ['Field']
    }
  ],
  [
    'oshawott',
    {
      species: 'oshawott',
      num: 501,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 55,
        atk: 55,
        def: 45,
        spa: 63,
        spd: 45,
        spe: 45
      },
      abilities: { first: 'Torrent', hidden: 'Shell Armor' },
      heightm: 0.5,
      weightkg: 5.9,
      color: 'Blue',
      evos: ['dewott'],
      eggGroups: ['Field']
    }
  ],
  [
    'dewott',
    {
      species: 'dewott',
      num: 502,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 75,
        def: 60,
        spa: 83,
        spd: 60,
        spe: 60
      },
      abilities: { first: 'Torrent', hidden: 'Shell Armor' },
      heightm: 0.8,
      weightkg: 24.5,
      color: 'Blue',
      prevo: 'oshawott',
      evos: ['samurott'],
      evoLevel: 17,
      eggGroups: ['Field']
    }
  ],
  [
    'samurott',
    {
      species: 'samurott',
      num: 503,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 95,
        atk: 100,
        def: 85,
        spa: 108,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Torrent', hidden: 'Shell Armor' },
      heightm: 1.5,
      weightkg: 94.6,
      color: 'Blue',
      prevo: 'dewott',
      evoLevel: 36,
      eggGroups: ['Field']
    }
  ],
  [
    'patrat',
    {
      species: 'patrat',
      num: 504,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 55,
        def: 39,
        spa: 35,
        spd: 39,
        spe: 42
      },
      abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Analytic' },
      heightm: 0.5,
      weightkg: 11.6,
      color: 'Brown',
      evos: ['watchog'],
      eggGroups: ['Field']
    }
  ],
  [
    'watchog',
    {
      species: 'watchog',
      num: 505,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 69,
        spa: 60,
        spd: 69,
        spe: 77
      },
      abilities: { first: 'Illuminate', second: 'Keen Eye', hidden: 'Analytic' },
      heightm: 1.1,
      weightkg: 27,
      color: 'Brown',
      prevo: 'patrat',
      evoLevel: 20,
      eggGroups: ['Field']
    }
  ],
  [
    'lillipup',
    {
      species: 'lillipup',
      num: 506,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 60,
        def: 45,
        spa: 25,
        spd: 45,
        spe: 55
      },
      abilities: { first: 'Vital Spirit', second: 'Pickup', hidden: 'Run Away' },
      heightm: 0.4,
      weightkg: 4.1,
      color: 'Brown',
      evos: ['herdier'],
      eggGroups: ['Field']
    }
  ],
  [
    'herdier',
    {
      species: 'herdier',
      num: 507,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 80,
        def: 65,
        spa: 35,
        spd: 65,
        spe: 60
      },
      abilities: { first: 'Intimidate', second: 'Sand Rush', hidden: 'Scrappy' },
      heightm: 0.9,
      weightkg: 14.7,
      color: 'Gray',
      prevo: 'lillipup',
      evos: ['stoutland'],
      evoLevel: 16,
      eggGroups: ['Field']
    }
  ],
  [
    'stoutland',
    {
      species: 'stoutland',
      num: 508,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 110,
        def: 90,
        spa: 45,
        spd: 90,
        spe: 80
      },
      abilities: { first: 'Intimidate', second: 'Sand Rush', hidden: 'Scrappy' },
      heightm: 1.2,
      weightkg: 61,
      color: 'Gray',
      prevo: 'herdier',
      evoLevel: 32,
      eggGroups: ['Field']
    }
  ],
  [
    'purrloin',
    {
      species: 'purrloin',
      num: 509,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 41,
        atk: 50,
        def: 37,
        spa: 50,
        spd: 37,
        spe: 66
      },
      abilities: { first: 'Limber', second: 'Unburden', hidden: 'Prankster' },
      heightm: 0.4,
      weightkg: 10.1,
      color: 'Purple',
      evos: ['liepard'],
      eggGroups: ['Field']
    }
  ],
  [
    'liepard',
    {
      species: 'liepard',
      num: 510,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 64,
        atk: 88,
        def: 50,
        spa: 88,
        spd: 50,
        spe: 106
      },
      abilities: { first: 'Limber', second: 'Unburden', hidden: 'Prankster' },
      heightm: 1.1,
      weightkg: 37.5,
      color: 'Purple',
      prevo: 'purrloin',
      evoLevel: 20,
      eggGroups: ['Field']
    }
  ],
  [
    'pansage',
    {
      species: 'pansage',
      num: 511,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 53,
        def: 48,
        spa: 53,
        spd: 48,
        spe: 64
      },
      abilities: { first: 'Gluttony', hidden: 'Overgrow' },
      heightm: 0.6,
      weightkg: 10.5,
      color: 'Green',
      evos: ['simisage'],
      eggGroups: ['Field']
    }
  ],
  [
    'simisage',
    {
      species: 'simisage',
      num: 512,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 63,
        spa: 98,
        spd: 63,
        spe: 101
      },
      abilities: { first: 'Gluttony', hidden: 'Overgrow' },
      heightm: 1.1,
      weightkg: 30.5,
      color: 'Green',
      prevo: 'pansage',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'pansear',
    {
      species: 'pansear',
      num: 513,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 53,
        def: 48,
        spa: 53,
        spd: 48,
        spe: 64
      },
      abilities: { first: 'Gluttony', hidden: 'Blaze' },
      heightm: 0.6,
      weightkg: 11,
      color: 'Red',
      evos: ['simisear'],
      eggGroups: ['Field']
    }
  ],
  [
    'simisear',
    {
      species: 'simisear',
      num: 514,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 63,
        spa: 98,
        spd: 63,
        spe: 101
      },
      abilities: { first: 'Gluttony', hidden: 'Blaze' },
      heightm: 1,
      weightkg: 28,
      color: 'Red',
      prevo: 'pansear',
      evoLevel: 'use Fire Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'panpour',
    {
      species: 'panpour',
      num: 515,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 53,
        def: 48,
        spa: 53,
        spd: 48,
        spe: 64
      },
      abilities: { first: 'Gluttony', hidden: 'Torrent' },
      heightm: 0.6,
      weightkg: 13.5,
      color: 'Blue',
      evos: ['simipour'],
      eggGroups: ['Field']
    }
  ],
  [
    'simipour',
    {
      species: 'simipour',
      num: 516,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 98,
        def: 63,
        spa: 98,
        spd: 63,
        spe: 101
      },
      abilities: { first: 'Gluttony', hidden: 'Torrent' },
      heightm: 1,
      weightkg: 29,
      color: 'Blue',
      prevo: 'panpour',
      evoLevel: 'use Water Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'munna',
    {
      species: 'munna',
      num: 517,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 76,
        atk: 25,
        def: 45,
        spa: 67,
        spd: 55,
        spe: 24
      },
      abilities: { first: 'Forewarn', second: 'Synchronize', hidden: 'Telepathy' },
      heightm: 0.6,
      weightkg: 23.3,
      color: 'Pink',
      evos: ['musharna'],
      eggGroups: ['Field']
    }
  ],
  [
    'musharna',
    {
      species: 'musharna',
      num: 518,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 116,
        atk: 55,
        def: 85,
        spa: 107,
        spd: 95,
        spe: 29
      },
      abilities: { first: 'Forewarn', second: 'Synchronize', hidden: 'Telepathy' },
      heightm: 1.1,
      weightkg: 60.5,
      color: 'Pink',
      prevo: 'munna',
      evoLevel: 'use Moon Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'pidove',
    {
      species: 'pidove',
      num: 519,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 55,
        def: 50,
        spa: 36,
        spd: 30,
        spe: 43
      },
      abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
      heightm: 0.3,
      weightkg: 2.1,
      color: 'Gray',
      evos: ['tranquill'],
      eggGroups: ['Flying']
    }
  ],
  [
    'tranquill',
    {
      species: 'tranquill',
      num: 520,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 77,
        def: 62,
        spa: 50,
        spd: 42,
        spe: 65
      },
      abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
      heightm: 0.6,
      weightkg: 15,
      color: 'Gray',
      prevo: 'pidove',
      evos: ['unfezant'],
      evoLevel: 21,
      eggGroups: ['Flying']
    }
  ],
  [
    'unfezant',
    {
      species: 'unfezant',
      num: 521,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 115,
        def: 80,
        spa: 65,
        spd: 55,
        spe: 93
      },
      abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
      heightm: 1.2,
      weightkg: 29,
      color: 'Gray',
      prevo: 'tranquill',
      evoLevel: 32,
      eggGroups: ['Flying']
    }
  ],
  [
    'blitzle',
    {
      species: 'blitzle',
      num: 522,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 60,
        def: 32,
        spa: 50,
        spd: 32,
        spe: 76
      },
      abilities: { first: 'Lightning Rod', second: 'Motor Drive', hidden: 'Sap Sipper' },
      heightm: 0.8,
      weightkg: 29.8,
      color: 'Black',
      evos: ['zebstrika'],
      eggGroups: ['Field']
    }
  ],
  [
    'zebstrika',
    {
      species: 'zebstrika',
      num: 523,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 100,
        def: 63,
        spa: 80,
        spd: 63,
        spe: 116
      },
      abilities: { first: 'Lightning Rod', second: 'Motor Drive', hidden: 'Sap Sipper' },
      heightm: 1.6,
      weightkg: 79.5,
      color: 'Black',
      prevo: 'blitzle',
      evoLevel: 27,
      eggGroups: ['Field']
    }
  ],
  [
    'roggenrola',
    {
      species: 'roggenrola',
      num: 524,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 75,
        def: 85,
        spa: 25,
        spd: 25,
        spe: 15
      },
      abilities: { first: 'Sturdy', second: 'Weak Armor', hidden: 'Sand Force' },
      heightm: 0.4,
      weightkg: 18,
      color: 'Blue',
      evos: ['boldore'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'boldore',
    {
      species: 'boldore',
      num: 525,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 105,
        def: 105,
        spa: 50,
        spd: 40,
        spe: 20
      },
      abilities: { first: 'Sturdy', second: 'Weak Armor', hidden: 'Sand Force' },
      heightm: 0.9,
      weightkg: 102,
      color: 'Blue',
      prevo: 'roggenrola',
      evos: ['gigalith'],
      evoLevel: 25,
      eggGroups: ['Mineral']
    }
  ],
  [
    'gigalith',
    {
      species: 'gigalith',
      num: 526,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 135,
        def: 130,
        spa: 60,
        spd: 80,
        spe: 25
      },
      abilities: { first: 'Sturdy', second: 'Sand Stream', hidden: 'Sand Force' },
      heightm: 1.7,
      weightkg: 260,
      color: 'Blue',
      prevo: 'boldore',
      evoLevel: 'Trade',
      eggGroups: ['Mineral']
    }
  ],
  [
    'woobat',
    {
      species: 'woobat',
      num: 527,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 45,
        def: 43,
        spa: 55,
        spd: 43,
        spe: 72
      },
      abilities: { first: 'Unaware', second: 'Klutz', hidden: 'Simple' },
      heightm: 0.4,
      weightkg: 2.1,
      color: 'Blue',
      evos: ['swoobat'],
      eggGroups: ['Flying', 'Field']
    }
  ],
  [
    'swoobat',
    {
      species: 'swoobat',
      num: 528,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 67,
        atk: 57,
        def: 55,
        spa: 77,
        spd: 55,
        spe: 114
      },
      abilities: { first: 'Unaware', second: 'Klutz', hidden: 'Simple' },
      heightm: 0.9,
      weightkg: 10.5,
      color: 'Blue',
      prevo: 'woobat',
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Flying', 'Field']
    }
  ],
  [
    'drilbur',
    {
      species: 'drilbur',
      num: 529,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 40,
        spa: 30,
        spd: 45,
        spe: 68
      },
      abilities: { first: 'Sand Rush', second: 'Sand Force', hidden: 'Mold Breaker' },
      heightm: 0.3,
      weightkg: 8.5,
      color: 'Gray',
      evos: ['excadrill'],
      eggGroups: ['Field']
    }
  ],
  [
    'excadrill',
    {
      species: 'excadrill',
      num: 530,
      types: ['Ground', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 135,
        def: 60,
        spa: 50,
        spd: 65,
        spe: 88
      },
      abilities: { first: 'Sand Rush', second: 'Sand Force', hidden: 'Mold Breaker' },
      heightm: 0.7,
      weightkg: 40.4,
      color: 'Gray',
      prevo: 'drilbur',
      evoLevel: 31,
      eggGroups: ['Field']
    }
  ],
  [
    'audino',
    {
      species: 'audino',
      num: 531,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 103,
        atk: 60,
        def: 86,
        spa: 60,
        spd: 86,
        spe: 50
      },
      abilities: { first: 'Healer', second: 'Regenerator', hidden: 'Klutz' },
      heightm: 1.1,
      weightkg: 31,
      color: 'Pink',
      eggGroups: ['Fairy'],
      otherFormes: ['audinomega']
    }
  ],
  [
    'audinomega',
    {
      species: 'audino-mega',
      num: 531,
      types: ['Normal', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 103,
        atk: 60,
        def: 126,
        spa: 80,
        spd: 126,
        spe: 50
      },
      baseSpecies: 'Audino',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Healer' },
      heightm: 1.5,
      weightkg: 32,
      color: 'White',
      eggGroups: ['Fairy']
    }
  ],
  [
    'timburr',
    {
      species: 'timburr',
      num: 532,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 55,
        spa: 25,
        spd: 35,
        spe: 35
      },
      abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
      heightm: 0.6,
      weightkg: 12.5,
      color: 'Gray',
      evos: ['gurdurr'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'gurdurr',
    {
      species: 'gurdurr',
      num: 533,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 85,
        atk: 105,
        def: 85,
        spa: 40,
        spd: 50,
        spe: 40
      },
      abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
      heightm: 1.2,
      weightkg: 40,
      color: 'Gray',
      prevo: 'timburr',
      evos: ['conkeldurr'],
      evoLevel: 25,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'conkeldurr',
    {
      species: 'conkeldurr',
      num: 534,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 105,
        atk: 140,
        def: 95,
        spa: 55,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
      heightm: 1.4,
      weightkg: 87,
      color: 'Brown',
      prevo: 'gurdurr',
      evoLevel: 'Trade',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'tympole',
    {
      species: 'tympole',
      num: 535,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 40,
        spa: 50,
        spd: 40,
        spe: 64
      },
      abilities: { first: 'Swift Swim', second: 'Hydration', hidden: 'Water Absorb' },
      heightm: 0.5,
      weightkg: 4.5,
      color: 'Blue',
      evos: ['palpitoad'],
      eggGroups: ['Water 1']
    }
  ],
  [
    'palpitoad',
    {
      species: 'palpitoad',
      num: 536,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 65,
        def: 55,
        spa: 65,
        spd: 55,
        spe: 69
      },
      abilities: { first: 'Swift Swim', second: 'Hydration', hidden: 'Water Absorb' },
      heightm: 0.8,
      weightkg: 17,
      color: 'Blue',
      prevo: 'tympole',
      evos: ['seismitoad'],
      evoLevel: 25,
      eggGroups: ['Water 1']
    }
  ],
  [
    'seismitoad',
    {
      species: 'seismitoad',
      num: 537,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 95,
        def: 75,
        spa: 85,
        spd: 75,
        spe: 74
      },
      abilities: { first: 'Swift Swim', second: 'Poison Touch', hidden: 'Water Absorb' },
      heightm: 1.5,
      weightkg: 62,
      color: 'Blue',
      prevo: 'palpitoad',
      evoLevel: 36,
      eggGroups: ['Water 1']
    }
  ],
  [
    'throh',
    {
      species: 'throh',
      num: 538,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 120,
        atk: 100,
        def: 85,
        spa: 30,
        spd: 85,
        spe: 45
      },
      abilities: { first: 'Guts', second: 'Inner Focus', hidden: 'Mold Breaker' },
      heightm: 1.3,
      weightkg: 55.5,
      color: 'Red',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'sawk',
    {
      species: 'sawk',
      num: 539,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 75,
        atk: 125,
        def: 75,
        spa: 30,
        spd: 75,
        spe: 85
      },
      abilities: { first: 'Sturdy', second: 'Inner Focus', hidden: 'Mold Breaker' },
      heightm: 1.4,
      weightkg: 51,
      color: 'Blue',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'sewaddle',
    {
      species: 'sewaddle',
      num: 540,
      types: ['Bug', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 53,
        def: 70,
        spa: 40,
        spd: 60,
        spe: 42
      },
      abilities: { first: 'Swarm', second: 'Chlorophyll', hidden: 'Overcoat' },
      heightm: 0.3,
      weightkg: 2.5,
      color: 'Yellow',
      evos: ['swadloon'],
      eggGroups: ['Bug']
    }
  ],
  [
    'swadloon',
    {
      species: 'swadloon',
      num: 541,
      types: ['Bug', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 63,
        def: 90,
        spa: 50,
        spd: 80,
        spe: 42
      },
      abilities: { first: 'Leaf Guard', second: 'Chlorophyll', hidden: 'Overcoat' },
      heightm: 0.5,
      weightkg: 7.3,
      color: 'Green',
      prevo: 'sewaddle',
      evos: ['leavanny'],
      evoLevel: 20,
      eggGroups: ['Bug']
    }
  ],
  [
    'leavanny',
    {
      species: 'leavanny',
      num: 542,
      types: ['Bug', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 103,
        def: 80,
        spa: 70,
        spd: 80,
        spe: 92
      },
      abilities: { first: 'Swarm', second: 'Chlorophyll', hidden: 'Overcoat' },
      heightm: 1.2,
      weightkg: 20.5,
      color: 'Yellow',
      prevo: 'swadloon',
      evoLevel: 21,
      eggGroups: ['Bug']
    }
  ],
  [
    'venipede',
    {
      species: 'venipede',
      num: 543,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 45,
        def: 59,
        spa: 30,
        spd: 39,
        spe: 57
      },
      abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
      heightm: 0.4,
      weightkg: 5.3,
      color: 'Red',
      evos: ['whirlipede'],
      eggGroups: ['Bug']
    }
  ],
  [
    'whirlipede',
    {
      species: 'whirlipede',
      num: 544,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 55,
        def: 99,
        spa: 40,
        spd: 79,
        spe: 47
      },
      abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
      heightm: 1.2,
      weightkg: 58.5,
      color: 'Gray',
      prevo: 'venipede',
      evos: ['scolipede'],
      evoLevel: 22,
      eggGroups: ['Bug']
    }
  ],
  [
    'scolipede',
    {
      species: 'scolipede',
      num: 545,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 100,
        def: 89,
        spa: 55,
        spd: 69,
        spe: 112
      },
      abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
      heightm: 2.5,
      weightkg: 200.5,
      color: 'Red',
      prevo: 'whirlipede',
      evoLevel: 30,
      eggGroups: ['Bug']
    }
  ],
  [
    'cottonee',
    {
      species: 'cottonee',
      num: 546,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 27,
        def: 60,
        spa: 37,
        spd: 50,
        spe: 66
      },
      abilities: { first: 'Prankster', second: 'Infiltrator', hidden: 'Chlorophyll' },
      heightm: 0.3,
      weightkg: 0.6,
      color: 'Green',
      evos: ['whimsicott'],
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'whimsicott',
    {
      species: 'whimsicott',
      num: 547,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 67,
        def: 85,
        spa: 77,
        spd: 75,
        spe: 116
      },
      abilities: { first: 'Prankster', second: 'Infiltrator', hidden: 'Chlorophyll' },
      heightm: 0.7,
      weightkg: 6.6,
      color: 'Green',
      prevo: 'cottonee',
      evoLevel: 'use Sun Stone',
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'petilil',
    {
      species: 'petilil',
      num: 548,
      types: ['Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 45,
        atk: 35,
        def: 50,
        spa: 70,
        spd: 50,
        spe: 30
      },
      abilities: { first: 'Chlorophyll', second: 'Own Tempo', hidden: 'Leaf Guard' },
      heightm: 0.5,
      weightkg: 6.6,
      color: 'Green',
      evos: ['lilligant'],
      eggGroups: ['Grass']
    }
  ],
  [
    'lilligant',
    {
      species: 'lilligant',
      num: 549,
      types: ['Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 70,
        atk: 60,
        def: 75,
        spa: 110,
        spd: 75,
        spe: 90
      },
      abilities: { first: 'Chlorophyll', second: 'Own Tempo', hidden: 'Leaf Guard' },
      heightm: 1.1,
      weightkg: 16.3,
      color: 'Green',
      prevo: 'petilil',
      evoLevel: 'use Sun Stone',
      eggGroups: ['Grass']
    }
  ],
  [
    'basculin',
    {
      species: 'basculin',
      num: 550,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 92,
        def: 65,
        spa: 80,
        spd: 55,
        spe: 98
      },
      baseForme: 'Red-Striped',
      abilities: { first: 'Reckless', second: 'Adaptability', hidden: 'Mold Breaker' },
      heightm: 1,
      weightkg: 18,
      color: 'Green',
      eggGroups: ['Water 2'],
      otherFormes: ['basculinbluestriped']
    }
  ],
  [
    'basculinbluestriped',
    {
      species: 'basculin-blue-striped',
      num: 550,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 92,
        def: 65,
        spa: 80,
        spd: 55,
        spe: 98
      },
      baseSpecies: 'Basculin',
      forme: 'Blue-Striped',
      formeLetter: 'B',
      abilities: { first: 'Rock Head', second: 'Adaptability', hidden: 'Mold Breaker' },
      heightm: 1,
      weightkg: 18,
      color: 'Green',
      eggGroups: ['Water 2']
    }
  ],
  [
    'sandile',
    {
      species: 'sandile',
      num: 551,
      types: ['Ground', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 72,
        def: 35,
        spa: 35,
        spd: 35,
        spe: 65
      },
      abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
      heightm: 0.7,
      weightkg: 15.2,
      color: 'Brown',
      evos: ['krokorok'],
      eggGroups: ['Field']
    }
  ],
  [
    'krokorok',
    {
      species: 'krokorok',
      num: 552,
      types: ['Ground', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 82,
        def: 45,
        spa: 45,
        spd: 45,
        spe: 74
      },
      abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
      heightm: 1,
      weightkg: 33.4,
      color: 'Brown',
      prevo: 'sandile',
      evos: ['krookodile'],
      evoLevel: 29,
      eggGroups: ['Field']
    }
  ],
  [
    'krookodile',
    {
      species: 'krookodile',
      num: 553,
      types: ['Ground', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 117,
        def: 80,
        spa: 65,
        spd: 70,
        spe: 92
      },
      abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
      heightm: 1.5,
      weightkg: 96.3,
      color: 'Red',
      prevo: 'krokorok',
      evoLevel: 40,
      eggGroups: ['Field']
    }
  ],
  [
    'darumaka',
    {
      species: 'darumaka',
      num: 554,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 90,
        def: 45,
        spa: 15,
        spd: 45,
        spe: 50
      },
      abilities: { first: 'Hustle', hidden: 'Inner Focus' },
      heightm: 0.6,
      weightkg: 37.5,
      color: 'Red',
      evos: ['darmanitan'],
      eggGroups: ['Field'],
      otherFormes: ['darumakagalar']
    }
  ],
  [
    'darumakagalar',
    {
      species: 'darumaka-galar',
      num: 554,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Darumaka',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 70,
        atk: 90,
        def: 45,
        spa: 15,
        spd: 45,
        spe: 50
      },
      abilities: { first: 'Hustle', hidden: 'Inner Focus' },
      heightm: 0.7,
      weightkg: 40,
      color: 'White',
      evos: ['darmanitangalar'],
      eggGroups: ['Field']
    }
  ],
  [
    'darmanitan',
    {
      species: 'darmanitan',
      num: 555,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 140,
        def: 55,
        spa: 30,
        spd: 55,
        spe: 95
      },
      baseForme: 'Standard',
      abilities: { first: 'Sheer Force', hidden: 'Zen Mode' },
      heightm: 1.3,
      weightkg: 92.9,
      color: 'Red',
      prevo: 'darumaka',
      evoLevel: 35,
      eggGroups: ['Field'],
      otherFormes: ['darmanitanzen', 'darmanitangalar', 'darmanitangalarzen']
    }
  ],
  [
    'darmanitangalar',
    {
      species: 'darmanitan-galar',
      num: 55,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Darmanitan',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 105,
        atk: 140,
        def: 55,
        spa: 30,
        spd: 55,
        spe: 95
      },
      abilities: { first: 'Gorilla Tactics', hidden: 'Zen Mode' },
      heightm: 1.7,
      weightkg: 120,
      color: 'White',
      prevo: 'darumakagalar',
      evoLevel: 'use Ice Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'darmanitanzen',
    {
      species: 'darmanitan-zen',
      num: 555,
      types: ['Fire', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 30,
        def: 105,
        spa: 140,
        spd: 105,
        spe: 55
      },
      baseSpecies: 'Darmanitan',
      forme: 'Zen',
      formeLetter: 'Z',
      abilities: { first: 'Zen Mode' },
      heightm: 1.3,
      weightkg: 92.9,
      color: 'Blue',
      prevo: 'darumaka',
      evoLevel: 35,
      eggGroups: ['Field']
    }
  ],
  [
    'darmanitangalarzen',
    {
      species: 'darmanitan-galar-zen',
      num: 555,
      types: ['Ice', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 160,
        def: 55,
        spa: 30,
        spd: 55,
        spe: 135
      },
      baseSpecies: 'Darmanitan-galar',
      forme: 'Galar-Zen',
      formeLetter: 'Z',
      abilities: { first: 'Gorilla Tactics', hidden: 'Zen Mode' },
      heightm: 1.7,
      weightkg: 120,
      color: 'White',
      prevo: 'darumakagalar',
      evoLevel: 'use Ice Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'maractus',
    {
      species: 'maractus',
      num: 556,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 86,
        def: 67,
        spa: 106,
        spd: 67,
        spe: 60
      },
      abilities: { first: 'Water Absorb', second: 'Chlorophyll', hidden: 'Storm Drain' },
      heightm: 1,
      weightkg: 28,
      color: 'Green',
      eggGroups: ['Grass']
    }
  ],
  [
    'dwebble',
    {
      species: 'dwebble',
      num: 557,
      types: ['Bug', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 85,
        spa: 35,
        spd: 35,
        spe: 55
      },
      abilities: { first: 'Sturdy', second: 'Shell Armor', hidden: 'Weak Armor' },
      heightm: 0.3,
      weightkg: 14.5,
      color: 'Red',
      evos: ['crustle'],
      eggGroups: ['Bug', 'Mineral']
    }
  ],
  [
    'crustle',
    {
      species: 'crustle',
      num: 558,
      types: ['Bug', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 105,
        def: 125,
        spa: 65,
        spd: 75,
        spe: 45
      },
      abilities: { first: 'Sturdy', second: 'Shell Armor', hidden: 'Weak Armor' },
      heightm: 1.4,
      weightkg: 200,
      color: 'Red',
      prevo: 'dwebble',
      evoLevel: 34,
      eggGroups: ['Bug', 'Mineral']
    }
  ],
  [
    'scraggy',
    {
      species: 'scraggy',
      num: 559,
      types: ['Dark', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 75,
        def: 70,
        spa: 35,
        spd: 70,
        spe: 48
      },
      abilities: { first: 'Shed Skin', second: 'Moxie', hidden: 'Intimidate' },
      heightm: 0.6,
      weightkg: 11.8,
      color: 'Yellow',
      evos: ['scrafty'],
      eggGroups: ['Field', 'Dragon']
    }
  ],
  [
    'scrafty',
    {
      species: 'scrafty',
      num: 560,
      types: ['Dark', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 115,
        spa: 45,
        spd: 115,
        spe: 58
      },
      abilities: { first: 'Shed Skin', second: 'Moxie', hidden: 'Intimidate' },
      heightm: 1.1,
      weightkg: 30,
      color: 'Red',
      prevo: 'scraggy',
      evoLevel: 39,
      eggGroups: ['Field', 'Dragon']
    }
  ],
  [
    'sigilyph',
    {
      species: 'sigilyph',
      num: 561,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 58,
        def: 80,
        spa: 103,
        spd: 80,
        spe: 97
      },
      abilities: { first: 'Wonder Skin', second: 'Magic Guard', hidden: 'Tinted Lens' },
      heightm: 1.4,
      weightkg: 14,
      color: 'Black',
      eggGroups: ['Flying']
    }
  ],
  [
    'yamask',
    {
      species: 'yamask',
      num: 562,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 30,
        def: 85,
        spa: 55,
        spd: 65,
        spe: 30
      },
      abilities: { first: 'Mummy' },
      heightm: 0.5,
      weightkg: 1.5,
      color: 'Black',
      evos: ['cofagrigus'],
      eggGroups: ['Mineral', 'Amorphous'],
      otherFormes: ['yamaskgalar']
    }
  ],
  [
    'yamaskgalar',
    {
      species: 'yamask-galar',
      num: 562,
      types: ['Ground', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Yamask',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 38,
        atk: 55,
        def: 85,
        spa: 30,
        spd: 65,
        spe: 30
      },
      abilities: { first: 'Wandering Spirit', second: 'Wandering Spirit', hidden: 'Wandering Spirit' },
      heightm: 0.5,
      weightkg: 1.5,
      color: 'Black',
      evos: ['runerigus'],
      eggGroups: ['Mineral', 'Amorphous']
    }
  ],
  [
    'cofagrigus',
    {
      species: 'cofagrigus',
      num: 563,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 58,
        atk: 50,
        def: 145,
        spa: 95,
        spd: 105,
        spe: 30
      },
      abilities: { first: 'Mummy' },
      heightm: 1.7,
      weightkg: 76.5,
      color: 'Yellow',
      prevo: 'yamask',
      evoLevel: 34,
      eggGroups: ['Mineral', 'Amorphous']
    }
  ],
  [
    'tirtouga',
    {
      species: 'tirtouga',
      num: 564,
      types: ['Water', 'Rock'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 54,
        atk: 78,
        def: 103,
        spa: 53,
        spd: 45,
        spe: 22
      },
      abilities: { first: 'Solid Rock', second: 'Sturdy', hidden: 'Swift Swim' },
      heightm: 0.7,
      weightkg: 16.5,
      color: 'Blue',
      evos: ['carracosta'],
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'carracosta',
    {
      species: 'carracosta',
      num: 565,
      types: ['Water', 'Rock'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 74,
        atk: 108,
        def: 133,
        spa: 83,
        spd: 65,
        spe: 32
      },
      abilities: { first: 'Solid Rock', second: 'Sturdy', hidden: 'Swift Swim' },
      heightm: 1.2,
      weightkg: 81,
      color: 'Blue',
      prevo: 'tirtouga',
      evoLevel: 37,
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'archen',
    {
      species: 'archen',
      num: 566,
      types: ['Rock', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 55,
        atk: 112,
        def: 45,
        spa: 74,
        spd: 45,
        spe: 70
      },
      abilities: { first: 'Defeatist' },
      heightm: 0.5,
      weightkg: 9.5,
      color: 'Yellow',
      evos: ['archeops'],
      eggGroups: ['Flying', 'Water 3']
    }
  ],
  [
    'archeops',
    {
      species: 'archeops',
      num: 567,
      types: ['Rock', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 140,
        def: 65,
        spa: 112,
        spd: 65,
        spe: 110
      },
      abilities: { first: 'Defeatist' },
      heightm: 1.4,
      weightkg: 32,
      color: 'Yellow',
      prevo: 'archen',
      evoLevel: 37,
      eggGroups: ['Flying', 'Water 3']
    }
  ],
  [
    'trubbish',
    {
      species: 'trubbish',
      num: 568,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 62,
        spa: 40,
        spd: 62,
        spe: 65
      },
      abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Aftermath' },
      heightm: 0.6,
      weightkg: 31,
      color: 'Green',
      evos: ['garbodor'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'garbodor',
    {
      species: 'garbodor',
      num: 569,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 95,
        def: 82,
        spa: 60,
        spd: 82,
        spe: 75
      },
      abilities: { first: 'Stench', second: 'Weak Armor', hidden: 'Aftermath' },
      heightm: 1.9,
      weightkg: 107.3,
      color: 'Green',
      prevo: 'trubbish',
      evoLevel: 36,
      eggGroups: ['Mineral'],
      otherFormes: ['garbodorgmax']
    }
  ],
  [
    'garbodorgmax',
    {
      species: 'garbodor-gmax',
      baseSpecies: 'Garbodor',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 569,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 95,
        def: 82,
        spa: 60,
        spd: 82,
        spe: 75
      },
      abilities: { first: 'Stench', second: 'Weak Armor', hidden: 'Aftermath' },
      heightm: 10,
      weightkg: 429.2,
      color: 'Green',
      eggGroups: ['Mineral']
    }
  ],
  [
    'zorua',
    {
      species: 'zorua',
      num: 570,
      types: ['Dark'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 40,
        atk: 65,
        def: 40,
        spa: 80,
        spd: 40,
        spe: 65
      },
      abilities: { first: 'Illusion' },
      heightm: 0.7,
      weightkg: 12.5,
      color: 'Gray',
      evos: ['zoroark'],
      eggGroups: ['Field']
    }
  ],
  [
    'zoroark',
    {
      species: 'zoroark',
      num: 571,
      types: ['Dark'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 105,
        def: 60,
        spa: 120,
        spd: 60,
        spe: 105
      },
      abilities: { first: 'Illusion' },
      heightm: 1.6,
      weightkg: 81.1,
      color: 'Gray',
      prevo: 'zorua',
      evoLevel: 30,
      eggGroups: ['Field']
    }
  ],
  [
    'minccino',
    {
      species: 'minccino',
      num: 572,
      types: ['Normal'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 55,
        atk: 50,
        def: 40,
        spa: 40,
        spd: 40,
        spe: 75
      },
      abilities: { first: 'Cute Charm', second: 'Technician', hidden: 'Skill Link' },
      heightm: 0.4,
      weightkg: 5.8,
      color: 'Gray',
      evos: ['cinccino'],
      eggGroups: ['Field']
    }
  ],
  [
    'cinccino',
    {
      species: 'cinccino',
      num: 573,
      types: ['Normal'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 75,
        atk: 95,
        def: 60,
        spa: 65,
        spd: 60,
        spe: 115
      },
      abilities: { first: 'Cute Charm', second: 'Technician', hidden: 'Skill Link' },
      heightm: 0.5,
      weightkg: 7.5,
      color: 'Gray',
      prevo: 'minccino',
      evoLevel: 'use Shiny Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'gothita',
    {
      species: 'gothita',
      num: 574,
      types: ['Psychic'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 45,
        atk: 30,
        def: 50,
        spa: 55,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
      heightm: 0.4,
      weightkg: 5.8,
      color: 'Purple',
      evos: ['gothorita'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'gothorita',
    {
      species: 'gothorita',
      num: 575,
      types: ['Psychic'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 70,
        spa: 75,
        spd: 85,
        spe: 55
      },
      abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
      heightm: 0.7,
      weightkg: 18,
      color: 'Purple',
      prevo: 'gothita',
      evos: ['gothitelle'],
      evoLevel: 32,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'gothitelle',
    {
      species: 'gothitelle',
      num: 576,
      types: ['Psychic'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 70,
        atk: 55,
        def: 95,
        spa: 95,
        spd: 110,
        spe: 65
      },
      abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
      heightm: 1.5,
      weightkg: 44,
      color: 'Purple',
      prevo: 'gothorita',
      evoLevel: 41,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'solosis',
    {
      species: 'solosis',
      num: 577,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 30,
        def: 40,
        spa: 105,
        spd: 50,
        spe: 20
      },
      abilities: { first: 'Overcoat', second: 'Magic Guard', hidden: 'Regenerator' },
      heightm: 0.3,
      weightkg: 1,
      color: 'Green',
      evos: ['duosion'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'duosion',
    {
      species: 'duosion',
      num: 578,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 40,
        def: 50,
        spa: 125,
        spd: 60,
        spe: 30
      },
      abilities: { first: 'Overcoat', second: 'Magic Guard', hidden: 'Regenerator' },
      heightm: 0.6,
      weightkg: 8,
      color: 'Green',
      prevo: 'solosis',
      evos: ['reuniclus'],
      evoLevel: 32,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'reuniclus',
    {
      species: 'reuniclus',
      num: 579,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 65,
        def: 75,
        spa: 125,
        spd: 85,
        spe: 30
      },
      abilities: { first: 'Overcoat', second: 'Magic Guard', hidden: 'Regenerator' },
      heightm: 1,
      weightkg: 20.1,
      color: 'Green',
      prevo: 'duosion',
      evoLevel: 41,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'ducklett',
    {
      species: 'ducklett',
      num: 580,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 44,
        def: 50,
        spa: 44,
        spd: 50,
        spe: 55
      },
      abilities: { first: 'Keen Eye', second: 'Big Pecks', hidden: 'Hydration' },
      heightm: 0.5,
      weightkg: 5.5,
      color: 'Blue',
      evos: ['swanna'],
      eggGroups: ['Water 1', 'Flying']
    }
  ],
  [
    'swanna',
    {
      species: 'swanna',
      num: 581,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 87,
        def: 63,
        spa: 87,
        spd: 63,
        spe: 98
      },
      abilities: { first: 'Keen Eye', second: 'Big Pecks', hidden: 'Hydration' },
      heightm: 1.3,
      weightkg: 24.2,
      color: 'White',
      prevo: 'ducklett',
      evoLevel: 35,
      eggGroups: ['Water 1', 'Flying']
    }
  ],
  [
    'vanillite',
    {
      species: 'vanillite',
      num: 582,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 36,
        atk: 50,
        def: 50,
        spa: 65,
        spd: 60,
        spe: 44
      },
      abilities: { first: 'Ice Body', second: 'Snow Cloak', hidden: 'Weak Armor' },
      heightm: 0.4,
      weightkg: 5.7,
      color: 'White',
      evos: ['vanillish'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'vanillish',
    {
      species: 'vanillish',
      num: 583,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 51,
        atk: 65,
        def: 65,
        spa: 80,
        spd: 75,
        spe: 59
      },
      abilities: { first: 'Ice Body', second: 'Snow Cloak', hidden: 'Weak Armor' },
      heightm: 1.1,
      weightkg: 41,
      color: 'White',
      prevo: 'vanillite',
      evos: ['vanilluxe'],
      evoLevel: 35,
      eggGroups: ['Mineral']
    }
  ],
  [
    'vanilluxe',
    {
      species: 'vanilluxe',
      num: 584,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 71,
        atk: 95,
        def: 85,
        spa: 110,
        spd: 95,
        spe: 79
      },
      abilities: { first: 'Ice Body', second: 'Snow Warning', hidden: 'Weak Armor' },
      heightm: 1.3,
      weightkg: 57.5,
      color: 'White',
      prevo: 'vanillish',
      evoLevel: 47,
      eggGroups: ['Mineral']
    }
  ],
  [
    'deerling',
    {
      species: 'deerling',
      num: 585,
      types: ['Normal', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 75
      },
      baseForme: 'Spring',
      abilities: { first: 'Chlorophyll', second: 'Sap Sipper', hidden: 'Serene Grace' },
      heightm: 0.6,
      weightkg: 19.5,
      color: 'Pink',
      evos: ['sawsbuck'],
      eggGroups: ['Field'],
      cosmeticFormes: ['Deerling-Summer', 'Deerling-Autumn', 'Deerling-Winter']
    }
  ],
  [
    'sawsbuck',
    {
      species: 'sawsbuck',
      num: 586,
      types: ['Normal', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 70,
        spa: 60,
        spd: 70,
        spe: 95
      },
      baseForme: 'Spring',
      abilities: { first: 'Chlorophyll', second: 'Sap Sipper', hidden: 'Serene Grace' },
      heightm: 1.9,
      weightkg: 92.5,
      color: 'Brown',
      prevo: 'deerling',
      evoLevel: 34,
      eggGroups: ['Field'],
      cosmeticFormes: ['Sawsbuck-Summer', 'Sawsbuck-Autumn', 'Sawsbuck-Winter']
    }
  ],
  [
    'emolga',
    {
      species: 'emolga',
      num: 587,
      types: ['Electric', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 75,
        def: 60,
        spa: 75,
        spd: 60,
        spe: 103
      },
      abilities: { first: 'Static', hidden: 'Motor Drive' },
      heightm: 0.4,
      weightkg: 5,
      color: 'White',
      eggGroups: ['Field']
    }
  ],
  [
    'karrablast',
    {
      species: 'karrablast',
      num: 588,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 75,
        def: 45,
        spa: 40,
        spd: 45,
        spe: 60
      },
      abilities: { first: 'Swarm', second: 'Shed Skin', hidden: 'No Guard' },
      heightm: 0.5,
      weightkg: 5.9,
      color: 'Blue',
      evos: ['escavalier'],
      eggGroups: ['Bug']
    }
  ],
  [
    'escavalier',
    {
      species: 'escavalier',
      num: 589,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 135,
        def: 105,
        spa: 60,
        spd: 105,
        spe: 20
      },
      abilities: { first: 'Swarm', second: 'Shell Armor', hidden: 'Overcoat' },
      heightm: 1,
      weightkg: 33,
      color: 'Gray',
      prevo: 'karrablast',
      evoLevel: 'Trade for Shelmet',
      eggGroups: ['Bug']
    }
  ],
  [
    'foongus',
    {
      species: 'foongus',
      num: 590,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 69,
        atk: 55,
        def: 45,
        spa: 55,
        spd: 55,
        spe: 15
      },
      abilities: { first: 'Effect Spore', hidden: 'Regenerator' },
      heightm: 0.2,
      weightkg: 1,
      color: 'White',
      evos: ['amoonguss'],
      eggGroups: ['Grass']
    }
  ],
  [
    'amoonguss',
    {
      species: 'amoonguss',
      num: 591,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 114,
        atk: 85,
        def: 70,
        spa: 85,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Effect Spore', hidden: 'Regenerator' },
      heightm: 0.6,
      weightkg: 10.5,
      color: 'White',
      prevo: 'foongus',
      evoLevel: 39,
      eggGroups: ['Grass']
    }
  ],
  [
    'frillish',
    {
      species: 'frillish',
      num: 592,
      types: ['Water', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 40,
        def: 50,
        spa: 65,
        spd: 85,
        spe: 40
      },
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      heightm: 1.2,
      weightkg: 33,
      color: 'White',
      evos: ['jellicent'],
      eggGroups: ['Amorphous'],
      otherFormes: ['frillishfemale']
    }
  ],
  [
    'frillishfemale',
    {
      species: 'frillish-female',
      num: 592,
      baseSpecies: 'frillish',
      forme: 'female',
      formeLetter: 'F',
      types: ['Water', 'Ghost'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 55,
        atk: 40,
        def: 50,
        spa: 65,
        spd: 85,
        spe: 40
      },
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      heightm: 1.2,
      weightkg: 33,
      color: 'White',
      evos: ['jellicent'],
      eggGroups: ['Amorphous'],
      otherFormes: ['frillish'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/ani/frillish-f.gif',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/frillish-f.gif',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/frillish-f.gif',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/frillish-f.gif'
    }
  ],
  [
    'jellicent',
    {
      species: 'jellicent',
      num: 593,
      types: ['Water', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 60,
        def: 70,
        spa: 85,
        spd: 105,
        spe: 60
      },
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      heightm: 2.2,
      weightkg: 135,
      color: 'White',
      prevo: 'frillish',
      evoLevel: 40,
      eggGroups: ['Amorphous'],
      otherFormes: ['jellicentfemale']
    }
  ],
  [
    'jellicentfemale',
    {
      species: 'jellicent-female',
      num: 593,
      baseSpecies: 'jellicent',
      forme: 'female',
      formeLetter: 'F',
      types: ['Water', 'Ghost'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 100,
        atk: 60,
        def: 70,
        spa: 85,
        spd: 105,
        spe: 60
      },
      abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
      heightm: 2.2,
      weightkg: 135,
      color: 'White',
      prevo: 'frillish',
      evoLevel: 40,
      eggGroups: ['Amorphous'],
      otherFormes: ['jellicent'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/ani/jellicent-f.gif',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/jellicent-f.gif',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/jellicent-f.gif',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/jellicent-f.gif'
    }
  ],
  [
    'alomomola',
    {
      species: 'alomomola',
      num: 594,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 165,
        atk: 75,
        def: 80,
        spa: 40,
        spd: 45,
        spe: 65
      },
      abilities: { first: 'Healer', second: 'Hydration', hidden: 'Regenerator' },
      heightm: 1.2,
      weightkg: 31.6,
      color: 'Pink',
      eggGroups: ['Water 1', 'Water 2']
    }
  ],
  [
    'joltik',
    {
      species: 'joltik',
      num: 595,
      types: ['Bug', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 47,
        def: 50,
        spa: 57,
        spd: 50,
        spe: 65
      },
      abilities: { first: 'Compound Eyes', second: 'Unnerve', hidden: 'Swarm' },
      heightm: 0.1,
      weightkg: 0.6,
      color: 'Yellow',
      evos: ['galvantula'],
      eggGroups: ['Bug']
    }
  ],
  [
    'galvantula',
    {
      species: 'galvantula',
      num: 596,
      types: ['Bug', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 77,
        def: 60,
        spa: 97,
        spd: 60,
        spe: 108
      },
      abilities: { first: 'Compound Eyes', second: 'Unnerve', hidden: 'Swarm' },
      heightm: 0.8,
      weightkg: 14.3,
      color: 'Yellow',
      prevo: 'joltik',
      evoLevel: 36,
      eggGroups: ['Bug']
    }
  ],
  [
    'ferroseed',
    {
      species: 'ferroseed',
      num: 597,
      types: ['Grass', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 44,
        atk: 50,
        def: 91,
        spa: 24,
        spd: 86,
        spe: 10
      },
      abilities: { first: 'Iron Barbs' },
      heightm: 0.6,
      weightkg: 18.8,
      color: 'Gray',
      evos: ['ferrothorn'],
      eggGroups: ['Grass', 'Mineral']
    }
  ],
  [
    'ferrothorn',
    {
      species: 'ferrothorn',
      num: 598,
      types: ['Grass', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 74,
        atk: 94,
        def: 131,
        spa: 54,
        spd: 116,
        spe: 20
      },
      abilities: { first: 'Iron Barbs', hidden: 'Anticipation' },
      heightm: 1,
      weightkg: 110,
      color: 'Gray',
      prevo: 'ferroseed',
      evoLevel: 40,
      eggGroups: ['Grass', 'Mineral']
    }
  ],
  [
    'klink',
    {
      species: 'klink',
      num: 599,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 40,
        atk: 55,
        def: 70,
        spa: 45,
        spd: 60,
        spe: 30
      },
      abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
      heightm: 0.3,
      weightkg: 21,
      color: 'Gray',
      evos: ['klang'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'klang',
    {
      species: 'klang',
      num: 600,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 80,
        def: 95,
        spa: 70,
        spd: 85,
        spe: 50
      },
      abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
      heightm: 0.6,
      weightkg: 51,
      color: 'Gray',
      prevo: 'klink',
      evos: ['klinklang'],
      evoLevel: 38,
      eggGroups: ['Mineral']
    }
  ],
  [
    'klinklang',
    {
      species: 'klinklang',
      num: 601,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 100,
        def: 115,
        spa: 70,
        spd: 85,
        spe: 90
      },
      abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
      heightm: 0.6,
      weightkg: 81,
      color: 'Gray',
      prevo: 'klang',
      evoLevel: 49,
      eggGroups: ['Mineral']
    }
  ],
  [
    'tynamo',
    {
      species: 'tynamo',
      num: 602,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 45,
        spd: 40,
        spe: 60
      },
      abilities: { first: 'Levitate' },
      heightm: 0.2,
      weightkg: 0.3,
      color: 'White',
      evos: ['eelektrik'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'eelektrik',
    {
      species: 'eelektrik',
      num: 603,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 85,
        def: 70,
        spa: 75,
        spd: 70,
        spe: 40
      },
      abilities: { first: 'Levitate' },
      heightm: 1.2,
      weightkg: 22,
      color: 'Blue',
      prevo: 'tynamo',
      evos: ['eelektross'],
      evoLevel: 39,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'eelektross',
    {
      species: 'eelektross',
      num: 604,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 115,
        def: 80,
        spa: 105,
        spd: 80,
        spe: 50
      },
      abilities: { first: 'Levitate' },
      heightm: 2.1,
      weightkg: 80.5,
      color: 'Blue',
      prevo: 'eelektrik',
      evoLevel: 39,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'elgyem',
    {
      species: 'elgyem',
      num: 605,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 55,
        def: 55,
        spa: 85,
        spd: 55,
        spe: 30
      },
      abilities: { first: 'Telepathy', second: 'Synchronize', hidden: 'Analytic' },
      heightm: 0.5,
      weightkg: 9,
      color: 'Blue',
      evos: ['beheeyem'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'beheeyem',
    {
      species: 'beheeyem',
      num: 606,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 75,
        def: 75,
        spa: 125,
        spd: 95,
        spe: 40
      },
      abilities: { first: 'Telepathy', second: 'Synchronize', hidden: 'Analytic' },
      heightm: 1,
      weightkg: 34.5,
      color: 'Brown',
      prevo: 'elgyem',
      evoLevel: 42,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'litwick',
    {
      species: 'litwick',
      num: 607,
      types: ['Ghost', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 30,
        def: 55,
        spa: 65,
        spd: 55,
        spe: 20
      },
      abilities: { first: 'Flash Fire', second: 'Flame Body', hidden: 'Infiltrator' },
      heightm: 0.3,
      weightkg: 3.1,
      color: 'White',
      evos: ['lampent'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'lampent',
    {
      species: 'lampent',
      num: 608,
      types: ['Ghost', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 40,
        def: 60,
        spa: 95,
        spd: 60,
        spe: 55
      },
      abilities: { first: 'Flash Fire', second: 'Flame Body', hidden: 'Infiltrator' },
      heightm: 0.6,
      weightkg: 13,
      color: 'Black',
      prevo: 'litwick',
      evos: ['chandelure'],
      evoLevel: 41,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'chandelure',
    {
      species: 'chandelure',
      num: 609,
      types: ['Ghost', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 55,
        def: 90,
        spa: 145,
        spd: 90,
        spe: 80
      },
      abilities: { first: 'Flash Fire', second: 'Flame Body', hidden: 'Infiltrator' },
      heightm: 1,
      weightkg: 34.3,
      color: 'Black',
      prevo: 'lampent',
      evoLevel: 41,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'axew',
    {
      species: 'axew',
      num: 610,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 46,
        atk: 87,
        def: 60,
        spa: 30,
        spd: 40,
        spe: 57
      },
      abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
      heightm: 0.6,
      weightkg: 18,
      color: 'Green',
      evos: ['fraxure'],
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'fraxure',
    {
      species: 'fraxure',
      num: 611,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 66,
        atk: 117,
        def: 70,
        spa: 40,
        spd: 50,
        spe: 67
      },
      abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
      heightm: 1,
      weightkg: 36,
      color: 'Green',
      prevo: 'axew',
      evos: ['haxorus'],
      evoLevel: 38,
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'haxorus',
    {
      species: 'haxorus',
      num: 612,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 76,
        atk: 147,
        def: 90,
        spa: 60,
        spd: 70,
        spe: 97
      },
      abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
      heightm: 1.8,
      weightkg: 105.5,
      color: 'Yellow',
      prevo: 'fraxure',
      evoLevel: 48,
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'cubchoo',
    {
      species: 'cubchoo',
      num: 613,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 70,
        def: 40,
        spa: 60,
        spd: 40,
        spe: 40
      },
      abilities: { first: 'Snow Cloak', second: 'Slush Rush', hidden: 'Rattled' },
      heightm: 0.5,
      weightkg: 8.5,
      color: 'White',
      evos: ['beartic'],
      eggGroups: ['Field']
    }
  ],
  [
    'beartic',
    {
      species: 'beartic',
      num: 614,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 130,
        def: 80,
        spa: 70,
        spd: 80,
        spe: 50
      },
      abilities: { first: 'Snow Cloak', second: 'Slush Rush', hidden: 'Swift Swim' },
      heightm: 2.6,
      weightkg: 260,
      color: 'White',
      prevo: 'cubchoo',
      evoLevel: 37,
      eggGroups: ['Field']
    }
  ],
  [
    'cryogonal',
    {
      species: 'cryogonal',
      num: 615,
      types: ['Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 50,
        def: 50,
        spa: 95,
        spd: 135,
        spe: 105
      },
      abilities: { first: 'Levitate' },
      heightm: 1.1,
      weightkg: 148,
      color: 'Blue',
      eggGroups: ['Mineral']
    }
  ],
  [
    'shelmet',
    {
      species: 'shelmet',
      num: 616,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 40,
        def: 85,
        spa: 40,
        spd: 65,
        spe: 25
      },
      abilities: { first: 'Hydration', second: 'Shell Armor', hidden: 'Overcoat' },
      heightm: 0.4,
      weightkg: 7.7,
      color: 'Red',
      evos: ['accelgor'],
      eggGroups: ['Bug']
    }
  ],
  [
    'accelgor',
    {
      species: 'accelgor',
      num: 617,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 70,
        def: 40,
        spa: 100,
        spd: 60,
        spe: 145
      },
      abilities: { first: 'Hydration', second: 'Sticky Hold', hidden: 'Unburden' },
      heightm: 0.8,
      weightkg: 25.3,
      color: 'Red',
      prevo: 'shelmet',
      evoLevel: 'Trade for Karrablast',
      eggGroups: ['Bug']
    }
  ],
  [
    'stunfisk',
    {
      species: 'stunfisk',
      num: 618,
      types: ['Ground', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 109,
        atk: 66,
        def: 84,
        spa: 81,
        spd: 99,
        spe: 32
      },
      abilities: { first: 'Static', second: 'Limber', hidden: 'Sand Veil' },
      heightm: 0.7,
      weightkg: 11,
      color: 'Brown',
      eggGroups: ['Water 1', 'Amorphous']
    }
  ],
  [
    'stunfiskgalar',
    {
      species: 'stunfisk-galar',
      forme: 'Galar',
      formeLetter: 'G',
      num: 618,
      types: ['Ground', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 109,
        atk: 81,
        def: 99,
        spa: 66,
        spd: 84,
        spe: 32
      },
      abilities: { first: 'Mimicry' },
      heightm: 0.7,
      weightkg: 20.5,
      color: 'Green',
      eggGroups: ['Water 1', 'Amorphous']
    }
  ],
  [
    'mienfoo',
    {
      species: 'mienfoo',
      num: 619,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 85,
        def: 50,
        spa: 55,
        spd: 50,
        spe: 65
      },
      abilities: { first: 'Inner Focus', second: 'Regenerator', hidden: 'Reckless' },
      heightm: 0.9,
      weightkg: 20,
      color: 'Yellow',
      evos: ['mienshao'],
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'mienshao',
    {
      species: 'mienshao',
      num: 620,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 125,
        def: 60,
        spa: 95,
        spd: 60,
        spe: 105
      },
      abilities: { first: 'Inner Focus', second: 'Regenerator', hidden: 'Reckless' },
      heightm: 1.4,
      weightkg: 35.5,
      color: 'Purple',
      prevo: 'mienfoo',
      evoLevel: 50,
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'druddigon',
    {
      species: 'druddigon',
      num: 621,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 77,
        atk: 120,
        def: 90,
        spa: 60,
        spd: 90,
        spe: 48
      },
      abilities: { first: 'Rough Skin', second: 'Sheer Force', hidden: 'Mold Breaker' },
      heightm: 1.6,
      weightkg: 139,
      color: 'Red',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'golett',
    {
      species: 'golett',
      num: 622,
      types: ['Ground', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 59,
        atk: 74,
        def: 50,
        spa: 35,
        spd: 50,
        spe: 35
      },
      abilities: { first: 'Iron Fist', second: 'Klutz', hidden: 'No Guard' },
      heightm: 1,
      weightkg: 92,
      color: 'Green',
      evos: ['golurk'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'golurk',
    {
      species: 'golurk',
      num: 623,
      types: ['Ground', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 89,
        atk: 124,
        def: 80,
        spa: 55,
        spd: 80,
        spe: 55
      },
      abilities: { first: 'Iron Fist', second: 'Klutz', hidden: 'No Guard' },
      heightm: 2.8,
      weightkg: 330,
      color: 'Green',
      prevo: 'golett',
      evoLevel: 43,
      eggGroups: ['Mineral']
    }
  ],
  [
    'pawniard',
    {
      species: 'pawniard',
      num: 624,
      types: ['Dark', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 85,
        def: 70,
        spa: 40,
        spd: 40,
        spe: 60
      },
      abilities: { first: 'Defiant', second: 'Inner Focus', hidden: 'Pressure' },
      heightm: 0.5,
      weightkg: 10.2,
      color: 'Red',
      evos: ['bisharp'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'bisharp',
    {
      species: 'bisharp',
      num: 625,
      types: ['Dark', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 125,
        def: 100,
        spa: 60,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Defiant', second: 'Inner Focus', hidden: 'Pressure' },
      heightm: 1.6,
      weightkg: 70,
      color: 'Red',
      prevo: 'pawniard',
      evoLevel: 52,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'bouffalant',
    {
      species: 'bouffalant',
      num: 626,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 110,
        def: 95,
        spa: 40,
        spd: 95,
        spe: 55
      },
      abilities: { first: 'Reckless', second: 'Sap Sipper', hidden: 'Soundproof' },
      heightm: 1.6,
      weightkg: 94.6,
      color: 'Brown',
      eggGroups: ['Field']
    }
  ],
  [
    'rufflet',
    {
      species: 'rufflet',
      num: 627,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 70,
        atk: 83,
        def: 50,
        spa: 37,
        spd: 50,
        spe: 60
      },
      abilities: { first: 'Keen Eye', second: 'Sheer Force', hidden: 'Hustle' },
      heightm: 0.5,
      weightkg: 10.5,
      color: 'White',
      evos: ['braviary'],
      eggGroups: ['Flying']
    }
  ],
  [
    'braviary',
    {
      species: 'braviary',
      num: 628,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 100,
        atk: 123,
        def: 75,
        spa: 57,
        spd: 75,
        spe: 80
      },
      abilities: { first: 'Keen Eye', second: 'Sheer Force', hidden: 'Defiant' },
      heightm: 1.5,
      weightkg: 41,
      color: 'Red',
      prevo: 'rufflet',
      evoLevel: 54,
      eggGroups: ['Flying']
    }
  ],
  [
    'vullaby',
    {
      species: 'vullaby',
      num: 629,
      types: ['Dark', 'Flying'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 70,
        atk: 55,
        def: 75,
        spa: 45,
        spd: 65,
        spe: 60
      },
      abilities: { first: 'Big Pecks', second: 'Overcoat', hidden: 'Weak Armor' },
      heightm: 0.5,
      weightkg: 9,
      color: 'Brown',
      evos: ['mandibuzz'],
      eggGroups: ['Flying']
    }
  ],
  [
    'mandibuzz',
    {
      species: 'mandibuzz',
      num: 630,
      types: ['Dark', 'Flying'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 110,
        atk: 65,
        def: 105,
        spa: 55,
        spd: 95,
        spe: 80
      },
      abilities: { first: 'Big Pecks', second: 'Overcoat', hidden: 'Weak Armor' },
      heightm: 1.2,
      weightkg: 39.5,
      color: 'Brown',
      prevo: 'vullaby',
      evoLevel: 54,
      eggGroups: ['Flying']
    }
  ],
  [
    'heatmor',
    {
      species: 'heatmor',
      num: 631,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 97,
        def: 66,
        spa: 105,
        spd: 66,
        spe: 65
      },
      abilities: { first: 'Gluttony', second: 'Flash Fire', hidden: 'White Smoke' },
      heightm: 1.4,
      weightkg: 58,
      color: 'Red',
      eggGroups: ['Field']
    }
  ],
  [
    'durant',
    {
      species: 'durant',
      num: 632,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 58,
        atk: 109,
        def: 112,
        spa: 48,
        spd: 48,
        spe: 109
      },
      abilities: { first: 'Swarm', second: 'Hustle', hidden: 'Truant' },
      heightm: 0.3,
      weightkg: 33,
      color: 'Gray',
      eggGroups: ['Bug']
    }
  ],
  [
    'deino',
    {
      species: 'deino',
      num: 633,
      types: ['Dark', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 52,
        atk: 65,
        def: 50,
        spa: 45,
        spd: 50,
        spe: 38
      },
      abilities: { first: 'Hustle' },
      heightm: 0.8,
      weightkg: 17.3,
      color: 'Blue',
      evos: ['zweilous'],
      eggGroups: ['Dragon']
    }
  ],
  [
    'zweilous',
    {
      species: 'zweilous',
      num: 634,
      types: ['Dark', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 85,
        def: 70,
        spa: 65,
        spd: 70,
        spe: 58
      },
      abilities: { first: 'Hustle' },
      heightm: 1.4,
      weightkg: 50,
      color: 'Blue',
      prevo: 'deino',
      evos: ['hydreigon'],
      evoLevel: 50,
      eggGroups: ['Dragon']
    }
  ],
  [
    'hydreigon',
    {
      species: 'hydreigon',
      num: 635,
      types: ['Dark', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 92,
        atk: 105,
        def: 90,
        spa: 125,
        spd: 90,
        spe: 98
      },
      abilities: { first: 'Levitate' },
      heightm: 1.8,
      weightkg: 160,
      color: 'Blue',
      prevo: 'zweilous',
      evoLevel: 64,
      eggGroups: ['Dragon']
    }
  ],
  [
    'larvesta',
    {
      species: 'larvesta',
      num: 636,
      types: ['Bug', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 85,
        def: 55,
        spa: 50,
        spd: 55,
        spe: 60
      },
      abilities: { first: 'Flame Body', hidden: 'Swarm' },
      heightm: 1.1,
      weightkg: 28.8,
      color: 'White',
      evos: ['volcarona'],
      eggGroups: ['Bug']
    }
  ],
  [
    'volcarona',
    {
      species: 'volcarona',
      num: 637,
      types: ['Bug', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 60,
        def: 65,
        spa: 135,
        spd: 105,
        spe: 100
      },
      abilities: { first: 'Flame Body', hidden: 'Swarm' },
      heightm: 1.6,
      weightkg: 46,
      color: 'White',
      prevo: 'larvesta',
      evoLevel: 59,
      eggGroups: ['Bug']
    }
  ],
  [
    'cobalion',
    {
      species: 'cobalion',
      num: 638,
      types: ['Steel', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 91,
        atk: 90,
        def: 129,
        spa: 90,
        spd: 72,
        spe: 108
      },
      abilities: { first: 'Justified' },
      heightm: 2.1,
      weightkg: 250,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'terrakion',
    {
      species: 'terrakion',
      num: 639,
      types: ['Rock', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 91,
        atk: 129,
        def: 90,
        spa: 72,
        spd: 90,
        spe: 108
      },
      abilities: { first: 'Justified' },
      heightm: 1.9,
      weightkg: 260,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'virizion',
    {
      species: 'virizion',
      num: 640,
      types: ['Grass', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 91,
        atk: 90,
        def: 72,
        spa: 90,
        spd: 129,
        spe: 108
      },
      abilities: { first: 'Justified' },
      heightm: 2,
      weightkg: 200,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'tornadus',
    {
      species: 'tornadus',
      num: 641,
      baseForme: 'Incarnate',
      types: ['Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 79,
        atk: 115,
        def: 70,
        spa: 125,
        spd: 80,
        spe: 111
      },
      abilities: { first: 'Prankster', hidden: 'Defiant' },
      heightm: 1.5,
      weightkg: 63,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      otherFormes: ['tornadustherian']
    }
  ],
  [
    'tornadustherian',
    {
      species: 'tornadus-therian',
      num: 641,
      types: ['Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 79,
        atk: 100,
        def: 80,
        spa: 110,
        spd: 90,
        spe: 121
      },
      baseSpecies: 'Tornadus',
      forme: 'Therian',
      formeLetter: 'T',
      abilities: { first: 'Regenerator' },
      heightm: 1.4,
      weightkg: 63,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'thundurus',
    {
      species: 'thundurus',
      num: 642,
      types: ['Electric', 'Flying'],
      baseForme: 'Incarnate',
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 79,
        atk: 115,
        def: 70,
        spa: 125,
        spd: 80,
        spe: 111
      },
      abilities: { first: 'Prankster', hidden: 'Defiant' },
      heightm: 1.5,
      weightkg: 61,
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      otherFormes: ['thundurustherian']
    }
  ],
  [
    'thundurustherian',
    {
      species: 'thundurus-therian',
      num: 642,
      types: ['Electric', 'Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 79,
        atk: 105,
        def: 70,
        spa: 145,
        spd: 80,
        spe: 101
      },
      baseSpecies: 'Thundurus',
      forme: 'Therian',
      formeLetter: 'T',
      abilities: { first: 'Volt Absorb' },
      heightm: 3,
      weightkg: 61,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'reshiram',
    {
      species: 'reshiram',
      num: 643,
      types: ['Dragon', 'Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 120,
        def: 100,
        spa: 150,
        spd: 120,
        spe: 90
      },
      abilities: { first: 'Turboblaze' },
      heightm: 3.2,
      weightkg: 330,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'zekrom',
    {
      species: 'zekrom',
      num: 644,
      types: ['Dragon', 'Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 150,
        def: 120,
        spa: 120,
        spd: 100,
        spe: 90
      },
      abilities: { first: 'Teravolt' },
      heightm: 2.9,
      weightkg: 345,
      color: 'Black',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'landorus',
    {
      species: 'landorus',
      num: 645,
      types: ['Ground', 'Flying'],
      baseForme: 'Incarnate',
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 89,
        atk: 125,
        def: 90,
        spa: 115,
        spd: 80,
        spe: 101
      },
      abilities: { first: 'Sand Force', hidden: 'Sheer Force' },
      heightm: 1.5,
      weightkg: 68,
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      otherFormes: ['landorustherian']
    }
  ],
  [
    'landorustherian',
    {
      species: 'landorus-therian',
      num: 645,
      types: ['Ground', 'Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 89,
        atk: 145,
        def: 90,
        spa: 105,
        spd: 80,
        spe: 91
      },
      baseSpecies: 'Landorus',
      forme: 'Therian',
      formeLetter: 'T',
      abilities: { first: 'Intimidate' },
      heightm: 1.3,
      weightkg: 68,
      color: 'Brown',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'kyurem',
    {
      species: 'kyurem',
      num: 646,
      types: ['Dragon', 'Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 125,
        atk: 130,
        def: 90,
        spa: 130,
        spd: 90,
        spe: 95
      },
      abilities: { first: 'Pressure' },
      heightm: 3,
      weightkg: 325,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      otherFormes: ['kyuremblack', 'kyuremwhite']
    }
  ],
  [
    'kyuremblack',
    {
      species: 'kyurem-black',
      num: 646,
      types: ['Dragon', 'Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 125,
        atk: 170,
        def: 100,
        spa: 120,
        spd: 90,
        spe: 95
      },
      baseSpecies: 'Kyurem',
      forme: 'Black',
      formeLetter: 'B',
      abilities: { first: 'Teravolt' },
      heightm: 3.3,
      weightkg: 325,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'kyuremwhite',
    {
      species: 'kyurem-white',
      num: 646,
      types: ['Dragon', 'Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 125,
        atk: 120,
        def: 90,
        spa: 170,
        spd: 100,
        spe: 95
      },
      baseSpecies: 'Kyurem',
      forme: 'White',
      formeLetter: 'W',
      abilities: { first: 'Turboblaze' },
      heightm: 3.6,
      weightkg: 325,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'keldeo',
    {
      species: 'keldeo',
      num: 647,
      types: ['Water', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 91,
        atk: 72,
        def: 90,
        spa: 129,
        spd: 90,
        spe: 108
      },
      baseForme: 'Ordinary',
      abilities: { first: 'Justified' },
      heightm: 1.4,
      weightkg: 48.5,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      otherFormes: ['keldeoresolute']
    }
  ],
  [
    'keldeoresolute',
    {
      species: 'keldeo-resolute',
      num: 647,
      types: ['Water', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 91,
        atk: 72,
        def: 90,
        spa: 129,
        spd: 90,
        spe: 108
      },
      baseSpecies: 'Keldeo',
      forme: 'Resolute',
      formeLetter: 'R',
      abilities: { first: 'Justified' },
      heightm: 1.4,
      weightkg: 48.5,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'meloetta',
    {
      species: 'meloetta',
      num: 648,
      types: ['Normal', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 77,
        def: 77,
        spa: 128,
        spd: 128,
        spe: 90
      },
      baseForme: 'Aria',
      abilities: { first: 'Serene Grace' },
      heightm: 0.6,
      weightkg: 6.5,
      color: 'White',
      eggGroups: ['Undiscovered'],
      otherFormes: ['meloettapirouette']
    }
  ],
  [
    'meloettapirouette',
    {
      species: 'meloetta-pirouette',
      num: 648,
      types: ['Normal', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 128,
        def: 90,
        spa: 77,
        spd: 77,
        spe: 128
      },
      baseSpecies: 'Meloetta',
      forme: 'Pirouette',
      formeLetter: 'P',
      abilities: { first: 'Serene Grace' },
      heightm: 0.6,
      weightkg: 6.5,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'genesect',
    {
      species: 'genesect',
      num: 649,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 71,
        atk: 120,
        def: 95,
        spa: 120,
        spd: 95,
        spe: 99
      },
      abilities: { first: 'Download' },
      heightm: 1.5,
      weightkg: 82.5,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      otherFormes: ['genesectdouse', 'genesectshock', 'genesectburn', 'genesectchill']
    }
  ],
  [
    'genesectdouse',
    {
      species: 'genesect-douse',
      num: 649,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 71,
        atk: 120,
        def: 95,
        spa: 120,
        spd: 95,
        spe: 99
      },
      baseSpecies: 'Genesect',
      forme: 'Douse',
      formeLetter: 'D',
      abilities: { first: 'Download' },
      heightm: 1.5,
      weightkg: 82.5,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'genesectshock',
    {
      species: 'genesect-shock',
      num: 649,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 71,
        atk: 120,
        def: 95,
        spa: 120,
        spd: 95,
        spe: 99
      },
      baseSpecies: 'Genesect',
      forme: 'Shock',
      formeLetter: 'S',
      abilities: { first: 'Download' },
      heightm: 1.5,
      weightkg: 82.5,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'genesectburn',
    {
      species: 'genesect-burn',
      num: 649,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 71,
        atk: 120,
        def: 95,
        spa: 120,
        spd: 95,
        spe: 99
      },
      baseSpecies: 'Genesect',
      forme: 'Burn',
      formeLetter: 'B',
      abilities: { first: 'Download' },
      heightm: 1.5,
      weightkg: 82.5,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'genesectchill',
    {
      species: 'genesect-chill',
      num: 649,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 71,
        atk: 120,
        def: 95,
        spa: 120,
        spd: 95,
        spe: 99
      },
      baseSpecies: 'Genesect',
      forme: 'Chill',
      formeLetter: 'C',
      abilities: { first: 'Download' },
      heightm: 1.5,
      weightkg: 82.5,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
