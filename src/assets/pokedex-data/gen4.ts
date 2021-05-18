import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'turtwig',
    {
      species: 'turtwig',
      num: 387,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 55,
        atk: 68,
        def: 64,
        spa: 45,
        spd: 55,
        spe: 31
      },
      abilities: { first: 'Overgrow', hidden: 'Shell Armor' },
      heightm: 0.4,
      weightkg: 10.2,
      color: 'Green',
      evos: ['grotle'],
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'grotle',
    {
      species: 'grotle',
      num: 388,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 89,
        def: 85,
        spa: 55,
        spd: 65,
        spe: 36
      },
      abilities: { first: 'Overgrow', hidden: 'Shell Armor' },
      heightm: 1.1,
      weightkg: 97,
      color: 'Green',
      prevo: 'turtwig',
      evos: ['torterra'],
      evoLevel: 18,
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'torterra',
    {
      species: 'torterra',
      num: 389,
      types: ['Grass', 'Ground'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 95,
        atk: 109,
        def: 105,
        spa: 75,
        spd: 85,
        spe: 56
      },
      abilities: { first: 'Overgrow', hidden: 'Shell Armor' },
      heightm: 2.2,
      weightkg: 310,
      color: 'Green',
      prevo: 'grotle',
      evoLevel: 32,
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'chimchar',
    {
      species: 'chimchar',
      num: 390,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 44,
        atk: 58,
        def: 44,
        spa: 58,
        spd: 44,
        spe: 61
      },
      abilities: { first: 'Blaze', hidden: 'Iron Fist' },
      heightm: 0.5,
      weightkg: 6.2,
      color: 'Brown',
      evos: ['monferno'],
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'monferno',
    {
      species: 'monferno',
      num: 391,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 64,
        atk: 78,
        def: 52,
        spa: 78,
        spd: 52,
        spe: 81
      },
      abilities: { first: 'Blaze', hidden: 'Iron Fist' },
      heightm: 0.9,
      weightkg: 22,
      color: 'Brown',
      prevo: 'chimchar',
      evos: ['infernape'],
      evoLevel: 14,
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'infernape',
    {
      species: 'infernape',
      num: 392,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 76,
        atk: 104,
        def: 71,
        spa: 104,
        spd: 71,
        spe: 108
      },
      abilities: { first: 'Blaze', hidden: 'Iron Fist' },
      heightm: 1.2,
      weightkg: 55,
      color: 'Brown',
      prevo: 'monferno',
      evoLevel: 36,
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'piplup',
    {
      species: 'piplup',
      num: 393,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 53,
        atk: 51,
        def: 53,
        spa: 61,
        spd: 56,
        spe: 40
      },
      abilities: { first: 'Torrent', hidden: 'Defiant' },
      heightm: 0.4,
      weightkg: 5.2,
      color: 'Blue',
      evos: ['prinplup'],
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'prinplup',
    {
      species: 'prinplup',
      num: 394,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 64,
        atk: 66,
        def: 68,
        spa: 81,
        spd: 76,
        spe: 50
      },
      abilities: { first: 'Torrent', hidden: 'Defiant' },
      heightm: 0.8,
      weightkg: 23,
      color: 'Blue',
      prevo: 'piplup',
      evos: ['empoleon'],
      evoLevel: 16,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'empoleon',
    {
      species: 'empoleon',
      num: 395,
      types: ['Water', 'Steel'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 84,
        atk: 86,
        def: 88,
        spa: 111,
        spd: 101,
        spe: 60
      },
      abilities: { first: 'Torrent', hidden: 'Defiant' },
      heightm: 1.7,
      weightkg: 84.5,
      color: 'Blue',
      prevo: 'prinplup',
      evoLevel: 36,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'starly',
    {
      species: 'starly',
      num: 396,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 55,
        def: 30,
        spa: 30,
        spd: 30,
        spe: 60
      },
      abilities: { first: 'Keen Eye', hidden: 'Reckless' },
      heightm: 0.3,
      weightkg: 2,
      color: 'Brown',
      evos: ['staravia'],
      eggGroups: ['Flying']
    }
  ],
  [
    'staravia',
    {
      species: 'staravia',
      num: 397,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 75,
        def: 50,
        spa: 40,
        spd: 40,
        spe: 80
      },
      abilities: { first: 'Intimidate', hidden: 'Reckless' },
      heightm: 0.6,
      weightkg: 15.5,
      color: 'Brown',
      prevo: 'starly',
      evos: ['staraptor'],
      evoLevel: 14,
      eggGroups: ['Flying']
    }
  ],
  [
    'staraptor',
    {
      species: 'staraptor',
      num: 398,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 120,
        def: 70,
        spa: 50,
        spd: 60,
        spe: 100
      },
      abilities: { first: 'Intimidate', hidden: 'Reckless' },
      heightm: 1.2,
      weightkg: 24.9,
      color: 'Brown',
      prevo: 'staravia',
      evoLevel: 34,
      eggGroups: ['Flying']
    }
  ],
  [
    'bidoof',
    {
      species: 'bidoof',
      num: 399,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 59,
        atk: 45,
        def: 40,
        spa: 35,
        spd: 40,
        spe: 31
      },
      abilities: { first: 'Simple', second: 'Unaware', hidden: 'Moody' },
      heightm: 0.5,
      weightkg: 20,
      color: 'Brown',
      evos: ['bibarel'],
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'bibarel',
    {
      species: 'bibarel',
      num: 400,
      types: ['Normal', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 79,
        atk: 85,
        def: 60,
        spa: 55,
        spd: 60,
        spe: 71
      },
      abilities: { first: 'Simple', second: 'Unaware', hidden: 'Moody' },
      heightm: 1,
      weightkg: 31.5,
      color: 'Brown',
      prevo: 'bidoof',
      evoLevel: 15,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'kricketot',
    {
      species: 'kricketot',
      num: 401,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 37,
        atk: 25,
        def: 41,
        spa: 25,
        spd: 41,
        spe: 25
      },
      abilities: { first: 'Shed Skin', hidden: 'Run Away' },
      heightm: 0.3,
      weightkg: 2.2,
      color: 'Red',
      evos: ['kricketune'],
      eggGroups: ['Bug']
    }
  ],
  [
    'kricketune',
    {
      species: 'kricketune',
      num: 402,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 77,
        atk: 85,
        def: 51,
        spa: 55,
        spd: 51,
        spe: 65
      },
      abilities: { first: 'Swarm', hidden: 'Technician' },
      heightm: 1,
      weightkg: 25.5,
      color: 'Red',
      prevo: 'kricketot',
      evoLevel: 10,
      eggGroups: ['Bug']
    }
  ],
  [
    'shinx',
    {
      species: 'shinx',
      num: 403,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 65,
        def: 34,
        spa: 40,
        spd: 34,
        spe: 45
      },
      abilities: { first: 'Rivalry', second: 'Intimidate', hidden: 'Guts' },
      heightm: 0.5,
      weightkg: 9.5,
      color: 'Blue',
      evos: ['luxio'],
      eggGroups: ['Field']
    }
  ],
  [
    'luxio',
    {
      species: 'luxio',
      num: 404,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 49,
        spa: 60,
        spd: 49,
        spe: 60
      },
      abilities: { first: 'Rivalry', second: 'Intimidate', hidden: 'Guts' },
      heightm: 0.9,
      weightkg: 30.5,
      color: 'Blue',
      prevo: 'shinx',
      evos: ['luxray'],
      evoLevel: 15,
      eggGroups: ['Field']
    }
  ],
  [
    'luxray',
    {
      species: 'luxray',
      num: 405,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 120,
        def: 79,
        spa: 95,
        spd: 79,
        spe: 70
      },
      abilities: { first: 'Rivalry', second: 'Intimidate', hidden: 'Guts' },
      heightm: 1.4,
      weightkg: 42,
      color: 'Blue',
      prevo: 'luxio',
      evoLevel: 30,
      eggGroups: ['Field']
    }
  ],
  [
    'budew',
    {
      species: 'budew',
      num: 406,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 30,
        def: 35,
        spa: 50,
        spd: 70,
        spe: 55
      },
      abilities: { first: 'Natural Cure', second: 'Poison Point', hidden: 'Leaf Guard' },
      heightm: 0.2,
      weightkg: 1.2,
      color: 'Green',
      evos: ['roselia'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'roserade',
    {
      species: 'roserade',
      num: 407,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 70,
        def: 65,
        spa: 125,
        spd: 105,
        spe: 90
      },
      abilities: { first: 'Natural Cure', second: 'Poison Point', hidden: 'Technician' },
      heightm: 0.9,
      weightkg: 14.5,
      color: 'Green',
      prevo: 'roselia',
      evoLevel: 'use Shiny Stone',
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'cranidos',
    {
      species: 'cranidos',
      num: 408,
      types: ['Rock'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 67,
        atk: 125,
        def: 40,
        spa: 30,
        spd: 30,
        spe: 58
      },
      abilities: { first: 'Mold Breaker', hidden: 'Sheer Force' },
      heightm: 0.9,
      weightkg: 31.5,
      color: 'Blue',
      evos: ['rampardos'],
      eggGroups: ['Monster']
    }
  ],
  [
    'rampardos',
    {
      species: 'rampardos',
      num: 409,
      types: ['Rock'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 97,
        atk: 165,
        def: 60,
        spa: 65,
        spd: 50,
        spe: 58
      },
      abilities: { first: 'Mold Breaker', hidden: 'Sheer Force' },
      heightm: 1.6,
      weightkg: 102.5,
      color: 'Blue',
      prevo: 'cranidos',
      evoLevel: 30,
      eggGroups: ['Monster']
    }
  ],
  [
    'shieldon',
    {
      species: 'shieldon',
      num: 410,
      types: ['Rock', 'Steel'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 30,
        atk: 42,
        def: 118,
        spa: 42,
        spd: 88,
        spe: 30
      },
      abilities: { first: 'Sturdy', hidden: 'Soundproof' },
      heightm: 0.5,
      weightkg: 57,
      color: 'Gray',
      evos: ['bastiodon'],
      eggGroups: ['Monster']
    }
  ],
  [
    'bastiodon',
    {
      species: 'bastiodon',
      num: 411,
      types: ['Rock', 'Steel'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 52,
        def: 168,
        spa: 47,
        spd: 138,
        spe: 30
      },
      abilities: { first: 'Sturdy', hidden: 'Soundproof' },
      heightm: 1.3,
      weightkg: 149.5,
      color: 'Gray',
      prevo: 'shieldon',
      evoLevel: 30,
      eggGroups: ['Monster']
    }
  ],
  [
    'burmy',
    {
      species: 'burmy',
      num: 412,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 29,
        def: 45,
        spa: 29,
        spd: 45,
        spe: 36
      },
      baseForme: 'Plant',
      abilities: { first: 'Shed Skin', hidden: 'Overcoat' },
      heightm: 0.2,
      weightkg: 3.4,
      color: 'Green',
      evos: ['wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim'],
      eggGroups: ['Bug'],
      cosmeticFormes: ['Burmy-Sandy', 'Burmy-Trash']
    }
  ],
  [
    'wormadam',
    {
      species: 'wormadam',
      num: 413,
      types: ['Bug', 'Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 60,
        atk: 59,
        def: 85,
        spa: 79,
        spd: 105,
        spe: 36
      },
      baseForme: 'Plant',
      abilities: { first: 'Anticipation', hidden: 'Overcoat' },
      heightm: 0.5,
      weightkg: 6.5,
      color: 'Green',
      prevo: 'burmy',
      evoLevel: 'Level 20, Female only',
      eggGroups: ['Bug'],
      otherFormes: ['wormadamsandy', 'wormadamtrash']
    }
  ],
  [
    'wormadamsandy',
    {
      species: 'wormadam-sandy',
      num: 413,
      types: ['Bug', 'Ground'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 60,
        atk: 79,
        def: 105,
        spa: 59,
        spd: 85,
        spe: 36
      },
      baseSpecies: 'Wormadam',
      forme: 'Sandy',
      formeLetter: 'G',
      abilities: { first: 'Anticipation', hidden: 'Overcoat' },
      heightm: 0.5,
      weightkg: 6.5,
      color: 'Brown',
      prevo: 'burmy',
      evoLevel: 20,
      eggGroups: ['Bug']
    }
  ],
  [
    'wormadamtrash',
    {
      species: 'wormadam-trash',
      num: 413,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 60,
        atk: 69,
        def: 95,
        spa: 69,
        spd: 95,
        spe: 36
      },
      baseSpecies: 'Wormadam',
      forme: 'Trash',
      formeLetter: 'S',
      abilities: { first: 'Anticipation', hidden: 'Overcoat' },
      heightm: 0.5,
      weightkg: 6.5,
      color: 'Red',
      prevo: 'burmy',
      evoLevel: 20,
      eggGroups: ['Bug']
    }
  ],
  [
    'mothim',
    {
      species: 'mothim',
      num: 414,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 70,
        atk: 94,
        def: 50,
        spa: 94,
        spd: 50,
        spe: 66
      },
      abilities: { first: 'Swarm', hidden: 'Tinted Lens' },
      heightm: 0.9,
      weightkg: 23.3,
      color: 'Yellow',
      prevo: 'burmy',
      evoLevel: 'Level 20, Male only',
      eggGroups: ['Bug']
    }
  ],
  [
    'combee',
    {
      species: 'combee',
      num: 415,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 30,
        atk: 30,
        def: 42,
        spa: 30,
        spd: 42,
        spe: 70
      },
      abilities: { first: 'Honey Gather', hidden: 'Hustle' },
      heightm: 0.3,
      weightkg: 5.5,
      color: 'Yellow',
      evos: ['vespiquen'],
      eggGroups: ['Bug']
    }
  ],
  [
    'vespiquen',
    {
      species: 'vespiquen',
      num: 416,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 70,
        atk: 80,
        def: 102,
        spa: 80,
        spd: 102,
        spe: 40
      },
      abilities: { first: 'Pressure', hidden: 'Unnerve' },
      heightm: 1.2,
      weightkg: 38.5,
      color: 'Yellow',
      prevo: 'combee',
      evoLevel: 'Level 21, Female only',
      eggGroups: ['Bug']
    }
  ],
  [
    'pachirisu',
    {
      species: 'pachirisu',
      num: 417,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 70,
        spa: 45,
        spd: 90,
        spe: 95
      },
      abilities: { first: 'Run Away', second: 'Pickup', hidden: 'Volt Absorb' },
      heightm: 0.4,
      weightkg: 3.9,
      color: 'White',
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'buizel',
    {
      species: 'buizel',
      num: 418,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 65,
        def: 35,
        spa: 60,
        spd: 30,
        spe: 85
      },
      abilities: { first: 'Swift Swim', hidden: 'Water Veil' },
      heightm: 0.7,
      weightkg: 29.5,
      color: 'Brown',
      evos: ['floatzel'],
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'floatzel',
    {
      species: 'floatzel',
      num: 419,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 105,
        def: 55,
        spa: 85,
        spd: 50,
        spe: 115
      },
      abilities: { first: 'Swift Swim', hidden: 'Water Veil' },
      heightm: 1.1,
      weightkg: 33.5,
      color: 'Brown',
      prevo: 'buizel',
      evoLevel: 26,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'cherubi',
    {
      species: 'cherubi',
      num: 420,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 35,
        def: 45,
        spa: 62,
        spd: 53,
        spe: 35
      },
      abilities: { first: 'Chlorophyll' },
      heightm: 0.4,
      weightkg: 3.3,
      color: 'Pink',
      evos: ['cherrim'],
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'cherrim',
    {
      species: 'cherrim',
      num: 421,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 60,
        def: 70,
        spa: 87,
        spd: 78,
        spe: 85
      },
      baseForme: 'Overcast',
      abilities: { first: 'Flower Gift' },
      heightm: 0.5,
      weightkg: 9.3,
      color: 'Purple',
      prevo: 'cherubi',
      evoLevel: 25,
      eggGroups: ['Fairy', 'Grass'],
      otherFormes: ['cherrimsunshine']
    }
  ],
  [
    'cherrimsunshine',
    {
      species: 'cherrim-sunshine',
      num: 421,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 60,
        def: 70,
        spa: 87,
        spd: 78,
        spe: 85
      },
      baseSpecies: 'Cherrim',
      forme: 'Sunshine',
      formeLetter: 'S',
      abilities: { first: 'Flower Gift' },
      heightm: 0.5,
      weightkg: 9.3,
      color: 'Pink',
      prevo: 'cherubi',
      evoLevel: 25,
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'shellos',
    {
      species: 'shellos',
      num: 422,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 76,
        atk: 48,
        def: 48,
        spa: 57,
        spd: 62,
        spe: 34
      },
      baseForme: 'West',
      abilities: { first: 'Sticky Hold', second: 'Storm Drain', hidden: 'Sand Force' },
      heightm: 0.3,
      weightkg: 6.3,
      color: 'Purple',
      evos: ['gastrodon'],
      eggGroups: ['Water 1', 'Amorphous'],
      cosmeticFormes: ['Shellos-East']
    }
  ],
  [
    'gastrodon',
    {
      species: 'gastrodon',
      num: 423,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 111,
        atk: 83,
        def: 68,
        spa: 92,
        spd: 82,
        spe: 39
      },
      baseForme: 'West',
      abilities: { first: 'Sticky Hold', second: 'Storm Drain', hidden: 'Sand Force' },
      heightm: 0.9,
      weightkg: 29.9,
      color: 'Purple',
      prevo: 'shellos',
      evoLevel: 30,
      eggGroups: ['Water 1', 'Amorphous'],
      cosmeticFormes: ['Gastrodon-East']
    }
  ],
  [
    'ambipom',
    {
      species: 'ambipom',
      num: 424,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 100,
        def: 66,
        spa: 60,
        spd: 66,
        spe: 115
      },
      abilities: { first: 'Technician', second: 'Pickup', hidden: 'Skill Link' },
      heightm: 1.2,
      weightkg: 20.3,
      color: 'Purple',
      prevo: 'aipom',
      evoLevel: 'Level up while knowing Double Hit',
      eggGroups: ['Field']
    }
  ],
  [
    'drifloon',
    {
      species: 'drifloon',
      num: 425,
      types: ['Ghost', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 50,
        def: 34,
        spa: 60,
        spd: 44,
        spe: 70
      },
      abilities: { first: 'Aftermath', second: 'Unburden', hidden: 'Flare Boost' },
      heightm: 0.4,
      weightkg: 1.2,
      color: 'Purple',
      evos: ['drifblim'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'drifblim',
    {
      species: 'drifblim',
      num: 426,
      types: ['Ghost', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 150,
        atk: 80,
        def: 44,
        spa: 90,
        spd: 54,
        spe: 80
      },
      abilities: { first: 'Aftermath', second: 'Unburden', hidden: 'Flare Boost' },
      heightm: 1.2,
      weightkg: 15,
      color: 'Purple',
      prevo: 'drifloon',
      evoLevel: 28,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'buneary',
    {
      species: 'buneary',
      num: 427,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 66,
        def: 44,
        spa: 44,
        spd: 56,
        spe: 85
      },
      abilities: { first: 'Run Away', second: 'Klutz', hidden: 'Limber' },
      heightm: 0.4,
      weightkg: 5.5,
      color: 'Brown',
      evos: ['lopunny'],
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'lopunny',
    {
      species: 'lopunny',
      num: 428,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 76,
        def: 84,
        spa: 54,
        spd: 96,
        spe: 105
      },
      abilities: { first: 'Cute Charm', second: 'Klutz', hidden: 'Limber' },
      heightm: 1.2,
      weightkg: 33.3,
      color: 'Brown',
      prevo: 'buneary',
      evoLevel: 2,
      eggGroups: ['Field', 'Human-Like'],
      otherFormes: ['lopunnymega']
    }
  ],
  [
    'lopunnymega',
    {
      species: 'lopunny-mega',
      num: 428,
      types: ['Normal', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 136,
        def: 94,
        spa: 54,
        spd: 96,
        spe: 135
      },
      baseSpecies: 'Lopunny',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Scrappy' },
      heightm: 1.3,
      weightkg: 28.3,
      color: 'Brown',
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'mismagius',
    {
      species: 'mismagius',
      num: 429,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 60,
        spa: 105,
        spd: 105,
        spe: 105
      },
      abilities: { first: 'Levitate' },
      heightm: 0.9,
      weightkg: 4.4,
      color: 'Purple',
      prevo: 'misdreavus',
      evoLevel: 'use Dusk Stone',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'honchkrow',
    {
      species: 'honchkrow',
      num: 430,
      types: ['Dark', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 125,
        def: 52,
        spa: 105,
        spd: 52,
        spe: 71
      },
      abilities: { first: 'Insomnia', second: 'Super Luck', hidden: 'Moxie' },
      heightm: 0.9,
      weightkg: 27.3,
      color: 'Black',
      prevo: 'murkrow',
      evoLevel: 'use Dusk Stone',
      eggGroups: ['Flying']
    }
  ],
  [
    'glameow',
    {
      species: 'glameow',
      num: 431,
      types: ['Normal'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 49,
        atk: 55,
        def: 42,
        spa: 42,
        spd: 37,
        spe: 85
      },
      abilities: { first: 'Limber', second: 'Own Tempo', hidden: 'Keen Eye' },
      heightm: 0.5,
      weightkg: 3.9,
      color: 'Gray',
      evos: ['purugly'],
      eggGroups: ['Field']
    }
  ],
  [
    'purugly',
    {
      species: 'purugly',
      num: 432,
      types: ['Normal'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 71,
        atk: 82,
        def: 64,
        spa: 64,
        spd: 59,
        spe: 112
      },
      abilities: { first: 'Thick Fat', second: 'Own Tempo', hidden: 'Defiant' },
      heightm: 1,
      weightkg: 43.8,
      color: 'Gray',
      prevo: 'glameow',
      evoLevel: 38,
      eggGroups: ['Field']
    }
  ],
  [
    'chingling',
    {
      species: 'chingling',
      num: 433,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 30,
        def: 50,
        spa: 65,
        spd: 50,
        spe: 45
      },
      abilities: { first: 'Levitate' },
      heightm: 0.2,
      weightkg: 0.6,
      color: 'Yellow',
      evos: ['chimecho'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'stunky',
    {
      species: 'stunky',
      num: 434,
      types: ['Poison', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 63,
        atk: 63,
        def: 47,
        spa: 41,
        spd: 41,
        spe: 74
      },
      abilities: { first: 'Stench', second: 'Aftermath', hidden: 'Keen Eye' },
      heightm: 0.4,
      weightkg: 19.2,
      color: 'Purple',
      evos: ['skuntank'],
      eggGroups: ['Field']
    }
  ],
  [
    'skuntank',
    {
      species: 'skuntank',
      num: 435,
      types: ['Poison', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 103,
        atk: 93,
        def: 67,
        spa: 71,
        spd: 61,
        spe: 84
      },
      abilities: { first: 'Stench', second: 'Aftermath', hidden: 'Keen Eye' },
      heightm: 1,
      weightkg: 38,
      color: 'Purple',
      prevo: 'stunky',
      evoLevel: 34,
      eggGroups: ['Field']
    }
  ],
  [
    'bronzor',
    {
      species: 'bronzor',
      num: 436,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 57,
        atk: 24,
        def: 86,
        spa: 24,
        spd: 86,
        spe: 23
      },
      abilities: { first: 'Levitate', second: 'Heatproof', hidden: 'Heavy Metal' },
      heightm: 0.5,
      weightkg: 60.5,
      color: 'Green',
      evos: ['bronzong'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'bronzong',
    {
      species: 'bronzong',
      num: 437,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 67,
        atk: 89,
        def: 116,
        spa: 79,
        spd: 116,
        spe: 33
      },
      abilities: { first: 'Levitate', second: 'Heatproof', hidden: 'Heavy Metal' },
      heightm: 1.3,
      weightkg: 187,
      color: 'Green',
      prevo: 'bronzor',
      evoLevel: 33,
      eggGroups: ['Mineral']
    }
  ],
  [
    'bonsly',
    {
      species: 'bonsly',
      num: 438,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 80,
        def: 95,
        spa: 10,
        spd: 45,
        spe: 10
      },
      abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Rattled' },
      heightm: 0.5,
      weightkg: 15,
      color: 'Brown',
      evos: ['sudowoodo'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'mimejr',
    {
      species: 'Mime Jr.',
      num: 439,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 20,
        atk: 25,
        def: 45,
        spa: 70,
        spd: 90,
        spe: 60
      },
      abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
      heightm: 0.6,
      weightkg: 13,
      color: 'Pink',
      evos: ['mrmime'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'happiny',
    {
      species: 'happiny',
      num: 440,
      types: ['Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 100,
        atk: 5,
        def: 5,
        spa: 15,
        spd: 65,
        spe: 30
      },
      abilities: { first: 'Natural Cure', second: 'Serene Grace', hidden: 'Friend Guard' },
      heightm: 0.6,
      weightkg: 24.4,
      color: 'Pink',
      evos: ['chansey'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'chatot',
    {
      species: 'chatot',
      num: 441,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 76,
        atk: 65,
        def: 45,
        spa: 92,
        spd: 42,
        spe: 91
      },
      abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
      heightm: 0.5,
      weightkg: 1.9,
      color: 'Black',
      eggGroups: ['Flying']
    }
  ],
  [
    'spiritomb',
    {
      species: 'spiritomb',
      num: 442,
      types: ['Ghost', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 92,
        def: 108,
        spa: 92,
        spd: 108,
        spe: 35
      },
      abilities: { first: 'Pressure', hidden: 'Infiltrator' },
      heightm: 1,
      weightkg: 108,
      color: 'Purple',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'gible',
    {
      species: 'gible',
      num: 443,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 58,
        atk: 70,
        def: 45,
        spa: 40,
        spd: 45,
        spe: 42
      },
      abilities: { first: 'Sand Veil', hidden: 'Rough Skin' },
      heightm: 0.7,
      weightkg: 20.5,
      color: 'Blue',
      evos: ['gabite'],
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'gabite',
    {
      species: 'gabite',
      num: 444,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 90,
        def: 65,
        spa: 50,
        spd: 55,
        spe: 82
      },
      abilities: { first: 'Sand Veil', hidden: 'Rough Skin' },
      heightm: 1.4,
      weightkg: 56,
      color: 'Blue',
      prevo: 'gible',
      evos: ['garchomp'],
      evoLevel: 24,
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'garchomp',
    {
      species: 'garchomp',
      num: 445,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 108,
        atk: 130,
        def: 95,
        spa: 80,
        spd: 85,
        spe: 102
      },
      abilities: { first: 'Sand Veil', hidden: 'Rough Skin' },
      heightm: 1.9,
      weightkg: 95,
      color: 'Blue',
      prevo: 'gabite',
      evoLevel: 48,
      eggGroups: ['Monster', 'Dragon'],
      otherFormes: ['garchompmega']
    }
  ],
  [
    'garchompmega',
    {
      species: 'garchomp-mega',
      num: 445,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 108,
        atk: 170,
        def: 115,
        spa: 120,
        spd: 95,
        spe: 92
      },
      baseSpecies: 'Garchomp',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Sand Force' },
      heightm: 1.9,
      weightkg: 95,
      color: 'Blue',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'munchlax',
    {
      species: 'munchlax',
      num: 446,
      types: ['Normal'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 135,
        atk: 85,
        def: 40,
        spa: 40,
        spd: 85,
        spe: 5
      },
      abilities: { first: 'Pickup', second: 'Thick Fat', hidden: 'Gluttony' },
      heightm: 0.6,
      weightkg: 105,
      color: 'Black',
      evos: ['snorlax'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'riolu',
    {
      species: 'riolu',
      num: 447,
      types: ['Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 40,
        atk: 70,
        def: 40,
        spa: 35,
        spd: 40,
        spe: 60
      },
      abilities: { first: 'Steadfast', second: 'Inner Focus', hidden: 'Prankster' },
      heightm: 0.7,
      weightkg: 20.2,
      color: 'Blue',
      evos: ['lucario'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'lucario',
    {
      species: 'lucario',
      num: 448,
      types: ['Fighting', 'Steel'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 70,
        spa: 115,
        spd: 70,
        spe: 90
      },
      abilities: { first: 'Steadfast', second: 'Inner Focus', hidden: 'Justified' },
      heightm: 1.2,
      weightkg: 54,
      color: 'Blue',
      prevo: 'riolu',
      evoLevel: 'Level up during Daytime with happiness of at least 220',
      eggGroups: ['Field', 'Human-Like'],
      otherFormes: ['lucariomega']
    }
  ],
  [
    'lucariomega',
    {
      species: 'lucario-mega',
      num: 448,
      types: ['Fighting', 'Steel'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 145,
        def: 88,
        spa: 140,
        spd: 70,
        spe: 112
      },
      baseSpecies: 'Lucario',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Adaptability' },
      heightm: 1.3,
      weightkg: 57.5,
      color: 'Blue',
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'hippopotas',
    {
      species: 'hippopotas',
      num: 449,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 72,
        def: 78,
        spa: 38,
        spd: 42,
        spe: 32
      },
      abilities: { first: 'Sand Stream', hidden: 'Sand Force' },
      heightm: 0.8,
      weightkg: 49.5,
      color: 'Brown',
      evos: ['hippowdon'],
      eggGroups: ['Field']
    }
  ],
  [
    'hippowdon',
    {
      species: 'hippowdon',
      num: 450,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 108,
        atk: 112,
        def: 118,
        spa: 68,
        spd: 72,
        spe: 47
      },
      abilities: { first: 'Sand Stream', hidden: 'Sand Force' },
      heightm: 2,
      weightkg: 300,
      color: 'Brown',
      prevo: 'hippopotas',
      evoLevel: 34,
      eggGroups: ['Field']
    }
  ],
  [
    'skorupi',
    {
      species: 'skorupi',
      num: 451,
      types: ['Poison', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 50,
        def: 90,
        spa: 30,
        spd: 55,
        spe: 65
      },
      abilities: { first: 'Battle Armor', second: 'Sniper', hidden: 'Keen Eye' },
      heightm: 0.8,
      weightkg: 12,
      color: 'Purple',
      evos: ['drapion'],
      eggGroups: ['Bug', 'Water 3']
    }
  ],
  [
    'drapion',
    {
      species: 'drapion',
      num: 452,
      types: ['Poison', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 90,
        def: 110,
        spa: 60,
        spd: 75,
        spe: 95
      },
      abilities: { first: 'Battle Armor', second: 'Sniper', hidden: 'Keen Eye' },
      heightm: 1.3,
      weightkg: 61.5,
      color: 'Purple',
      prevo: 'skorupi',
      evoLevel: 40,
      eggGroups: ['Bug', 'Water 3']
    }
  ],
  [
    'croagunk',
    {
      species: 'croagunk',
      num: 453,
      types: ['Poison', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 48,
        atk: 61,
        def: 40,
        spa: 61,
        spd: 40,
        spe: 50
      },
      abilities: { first: 'Anticipation', second: 'Dry Skin', hidden: 'Poison Touch' },
      heightm: 0.7,
      weightkg: 23,
      color: 'Blue',
      evos: ['toxicroak'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'toxicroak',
    {
      species: 'toxicroak',
      num: 454,
      types: ['Poison', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 83,
        atk: 106,
        def: 65,
        spa: 86,
        spd: 65,
        spe: 85
      },
      abilities: { first: 'Anticipation', second: 'Dry Skin', hidden: 'Poison Touch' },
      heightm: 1.3,
      weightkg: 44.4,
      color: 'Blue',
      prevo: 'croagunk',
      evoLevel: 37,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'carnivine',
    {
      species: 'carnivine',
      num: 455,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 74,
        atk: 100,
        def: 72,
        spa: 90,
        spd: 72,
        spe: 46
      },
      abilities: { first: 'Levitate' },
      heightm: 1.4,
      weightkg: 27,
      color: 'Green',
      eggGroups: ['Grass']
    }
  ],
  [
    'finneon',
    {
      species: 'finneon',
      num: 456,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 49,
        atk: 49,
        def: 56,
        spa: 49,
        spd: 61,
        spe: 66
      },
      abilities: { first: 'Swift Swim', second: 'Storm Drain', hidden: 'Water Veil' },
      heightm: 0.4,
      weightkg: 7,
      color: 'Blue',
      evos: ['lumineon'],
      eggGroups: ['Water 2']
    }
  ],
  [
    'lumineon',
    {
      species: 'lumineon',
      num: 457,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 69,
        atk: 69,
        def: 76,
        spa: 69,
        spd: 86,
        spe: 91
      },
      abilities: { first: 'Swift Swim', second: 'Storm Drain', hidden: 'Water Veil' },
      heightm: 1.2,
      weightkg: 24,
      color: 'Blue',
      prevo: 'finneon',
      evoLevel: 31,
      eggGroups: ['Water 2']
    }
  ],
  [
    'mantyke',
    {
      species: 'mantyke',
      num: 458,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 20,
        def: 50,
        spa: 60,
        spd: 120,
        spe: 50
      },
      abilities: { first: 'Swift Swim', second: 'Water Absorb', hidden: 'Water Veil' },
      heightm: 1,
      weightkg: 65,
      color: 'Blue',
      evos: ['mantine'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'snover',
    {
      species: 'snover',
      num: 459,
      types: ['Grass', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 62,
        def: 50,
        spa: 62,
        spd: 60,
        spe: 40
      },
      abilities: { first: 'Snow Warning', hidden: 'Soundproof' },
      heightm: 1,
      weightkg: 50.5,
      color: 'White',
      evos: ['abomasnow'],
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'abomasnow',
    {
      species: 'abomasnow',
      num: 460,
      types: ['Grass', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 92,
        def: 75,
        spa: 92,
        spd: 85,
        spe: 60
      },
      abilities: { first: 'Snow Warning', hidden: 'Soundproof' },
      heightm: 2.2,
      weightkg: 135.5,
      color: 'White',
      prevo: 'snover',
      evoLevel: 40,
      eggGroups: ['Monster', 'Grass'],
      otherFormes: ['abomasnowmega']
    }
  ],
  [
    'abomasnowmega',
    {
      species: 'abomasnow-mega',
      num: 460,
      types: ['Grass', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 132,
        def: 105,
        spa: 132,
        spd: 105,
        spe: 30
      },
      baseSpecies: 'Abomasnow',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Snow Warning' },
      heightm: 2.7,
      weightkg: 185,
      color: 'White',
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'weavile',
    {
      species: 'weavile',
      num: 461,
      types: ['Dark', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 120,
        def: 65,
        spa: 45,
        spd: 85,
        spe: 125
      },
      abilities: { first: 'Pressure', hidden: 'Pickpocket' },
      heightm: 1.1,
      weightkg: 34,
      color: 'Black',
      prevo: 'sneasel',
      evoLevel: 'Hold Razor Claw Nighttime',
      eggGroups: ['Field']
    }
  ],
  [
    'magnezone',
    {
      species: 'magnezone',
      num: 462,
      types: ['Electric', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 70,
        def: 115,
        spa: 130,
        spd: 90,
        spe: 60
      },
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
      heightm: 1.2,
      weightkg: 180,
      color: 'Gray',
      prevo: 'magneton',
      evoLevel: 'use Thunder Stone',
      eggGroups: ['Mineral']
    }
  ],
  [
    'lickilicky',
    {
      species: 'lickilicky',
      num: 463,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 85,
        def: 95,
        spa: 80,
        spd: 95,
        spe: 50
      },
      abilities: { first: 'Own Tempo', second: 'Oblivious', hidden: 'Cloud Nine' },
      heightm: 1.7,
      weightkg: 140,
      color: 'Pink',
      prevo: 'lickitung',
      evoLevel: 'Level up while knowing Rollout',
      eggGroups: ['Monster']
    }
  ],
  [
    'rhyperior',
    {
      species: 'rhyperior',
      num: 464,
      types: ['Ground', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 115,
        atk: 140,
        def: 130,
        spa: 55,
        spd: 55,
        spe: 40
      },
      abilities: { first: 'Lightning Rod', second: 'Solid Rock', hidden: 'Reckless' },
      heightm: 2.4,
      weightkg: 282.8,
      color: 'Gray',
      prevo: 'rhydon',
      evoLevel: 'Trade while holding Protector',
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'tangrowth',
    {
      species: 'tangrowth',
      num: 465,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 125,
        spa: 110,
        spd: 50,
        spe: 50
      },
      abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Regenerator' },
      heightm: 2,
      weightkg: 128.6,
      color: 'Blue',
      prevo: 'tangela',
      evoLevel: 'Level up while knowing Ancient Power',
      eggGroups: ['Grass']
    }
  ],
  [
    'electivire',
    {
      species: 'electivire',
      num: 466,
      types: ['Electric'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 75,
        atk: 123,
        def: 67,
        spa: 95,
        spd: 85,
        spe: 95
      },
      abilities: { first: 'Motor Drive', hidden: 'Vital Spirit' },
      heightm: 1.8,
      weightkg: 138.6,
      color: 'Yellow',
      prevo: 'electabuzz',
      evoLevel: 'Trade while holding Electirizer',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'magmortar',
    {
      species: 'magmortar',
      num: 467,
      types: ['Fire'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 75,
        atk: 95,
        def: 67,
        spa: 125,
        spd: 95,
        spe: 83
      },
      abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
      heightm: 1.6,
      weightkg: 68,
      color: 'Red',
      prevo: 'magmar',
      evoLevel: 'Trade while holding Magmarizer',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'togekiss',
    {
      species: 'togekiss',
      num: 468,
      types: ['Fairy', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 85,
        atk: 50,
        def: 95,
        spa: 120,
        spd: 115,
        spe: 80
      },
      abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
      heightm: 1.5,
      weightkg: 38,
      color: 'White',
      prevo: 'togetic',
      evoLevel: 'use Shiny Stone',
      eggGroups: ['Flying', 'Fairy']
    }
  ],
  [
    'yanmega',
    {
      species: 'yanmega',
      num: 469,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 86,
        atk: 76,
        def: 86,
        spa: 116,
        spd: 56,
        spe: 95
      },
      abilities: { first: 'Speed Boost', second: 'Tinted Lens', hidden: 'Frisk' },
      heightm: 1.9,
      weightkg: 51.5,
      color: 'Green',
      prevo: 'yanma',
      evoLevel: 'Level up while knowing Ancient Power',
      eggGroups: ['Bug']
    }
  ],
  [
    'leafeon',
    {
      species: 'leafeon',
      num: 470,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 110,
        def: 130,
        spa: 60,
        spd: 65,
        spe: 95
      },
      abilities: { first: 'Leaf Guard', hidden: 'Chlorophyll' },
      heightm: 1,
      weightkg: 25.5,
      color: 'Green',
      prevo: 'eevee',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'glaceon',
    {
      species: 'glaceon',
      num: 471,
      types: ['Ice'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 60,
        def: 110,
        spa: 130,
        spd: 95,
        spe: 65
      },
      abilities: { first: 'Snow Cloak', hidden: 'Ice Body' },
      heightm: 0.8,
      weightkg: 25.9,
      color: 'Blue',
      prevo: 'eevee',
      evoLevel: 'use Ice Stone',
      eggGroups: ['Field']
    }
  ],
  [
    'gliscor',
    {
      species: 'gliscor',
      num: 472,
      types: ['Ground', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 95,
        def: 125,
        spa: 45,
        spd: 75,
        spe: 95
      },
      abilities: { first: 'Hyper Cutter', second: 'Sand Veil', hidden: 'Poison Heal' },
      heightm: 2,
      weightkg: 42.5,
      color: 'Purple',
      prevo: 'gligar',
      evoLevel: 'Hold Razor Fang Nighttime',
      eggGroups: ['Bug']
    }
  ],
  [
    'mamoswine',
    {
      species: 'mamoswine',
      num: 473,
      types: ['Ice', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 130,
        def: 80,
        spa: 70,
        spd: 60,
        spe: 80
      },
      abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
      heightm: 2.5,
      weightkg: 291,
      color: 'Brown',
      prevo: 'piloswine',
      evoLevel: 'Level up while knowing Ancient Power',
      eggGroups: ['Field']
    }
  ],
  [
    'porygonz',
    {
      species: 'porygon-z',
      num: 474,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 85,
        atk: 80,
        def: 70,
        spa: 135,
        spd: 75,
        spe: 90
      },
      abilities: { first: 'Adaptability', second: 'Download', hidden: 'Analytic' },
      heightm: 0.9,
      weightkg: 34,
      color: 'Red',
      prevo: 'porygon2',
      evoLevel: 'Trade while holding Dubious Disc',
      eggGroups: ['Mineral']
    }
  ],
  [
    'gallade',
    {
      species: 'gallade',
      num: 475,
      types: ['Psychic', 'Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 68,
        atk: 125,
        def: 65,
        spa: 65,
        spd: 115,
        spe: 80
      },
      abilities: { first: 'Steadfast', hidden: 'Justified' },
      heightm: 1.6,
      weightkg: 52,
      color: 'White',
      prevo: 'kirlia',
      evoLevel: 'Male + use Dawn Stone',
      eggGroups: ['Amorphous'],
      otherFormes: ['gallademega']
    }
  ],
  [
    'gallademega',
    {
      species: 'gallade-mega',
      num: 475,
      types: ['Psychic', 'Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 68,
        atk: 165,
        def: 95,
        spa: 65,
        spd: 115,
        spe: 110
      },
      baseSpecies: 'Gallade',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Inner Focus' },
      heightm: 1.6,
      weightkg: 56.4,
      color: 'White',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'probopass',
    {
      species: 'probopass',
      num: 476,
      types: ['Rock', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 55,
        def: 145,
        spa: 75,
        spd: 150,
        spe: 40
      },
      abilities: { first: 'Sturdy', second: 'Magnet Pull', hidden: 'Sand Force' },
      heightm: 1.4,
      weightkg: 340,
      color: 'Gray',
      prevo: 'nosepass',
      evoLevel: 'Level up in special magnetic field',
      eggGroups: ['Mineral']
    }
  ],
  [
    'dusknoir',
    {
      species: 'dusknoir',
      num: 477,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 100,
        def: 135,
        spa: 65,
        spd: 135,
        spe: 45
      },
      abilities: { first: 'Pressure', hidden: 'Frisk' },
      heightm: 2.2,
      weightkg: 106.6,
      color: 'Black',
      prevo: 'dusclops',
      evoLevel: 'Trade while holding Reaper Cloth',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'froslass',
    {
      species: 'froslass',
      num: 478,
      types: ['Ice', 'Ghost'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 70,
        atk: 80,
        def: 70,
        spa: 80,
        spd: 70,
        spe: 110
      },
      abilities: { first: 'Snow Cloak', hidden: 'Cursed Body' },
      heightm: 1.3,
      weightkg: 26.6,
      color: 'White',
      prevo: 'snorunt',
      evoLevel: 'Female + use Dawn Stone',
      eggGroups: ['Fairy', 'Mineral']
    }
  ],
  [
    'rotom',
    {
      species: 'rotom',
      num: 479,
      types: ['Electric', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 77,
        spa: 95,
        spd: 77,
        spe: 91
      },
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Amorphous'],
      otherFormes: ['rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow']
    }
  ],
  [
    'rotomheat',
    {
      species: 'rotom-heat',
      num: 479,
      types: ['Electric', 'Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 107,
        spa: 105,
        spd: 107,
        spe: 86
      },
      baseSpecies: 'Rotom',
      forme: 'Heat',
      formeLetter: 'H',
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'rotomwash',
    {
      species: 'rotom-wash',
      num: 479,
      types: ['Electric', 'Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 107,
        spa: 105,
        spd: 107,
        spe: 86
      },
      baseSpecies: 'Rotom',
      forme: 'Wash',
      formeLetter: 'W',
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'rotomfrost',
    {
      species: 'rotom-frost',
      num: 479,
      types: ['Electric', 'Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 107,
        spa: 105,
        spd: 107,
        spe: 86
      },
      baseSpecies: 'Rotom',
      forme: 'Frost',
      formeLetter: 'F',
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'rotomfan',
    {
      species: 'rotom-fan',
      num: 479,
      types: ['Electric', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 107,
        spa: 105,
        spd: 107,
        spe: 86
      },
      baseSpecies: 'Rotom',
      forme: 'Fan',
      formeLetter: 'S',
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'rotommow',
    {
      species: 'rotom-mow',
      num: 479,
      types: ['Electric', 'Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 107,
        spa: 105,
        spd: 107,
        spe: 86
      },
      baseSpecies: 'Rotom',
      forme: 'Mow',
      formeLetter: 'C',
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'uxie',
    {
      species: 'uxie',
      num: 480,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 75,
        atk: 75,
        def: 130,
        spa: 75,
        spd: 130,
        spe: 95
      },
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'mesprit',
    {
      species: 'mesprit',
      num: 481,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 105,
        def: 105,
        spa: 105,
        spd: 105,
        spe: 80
      },
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Pink',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'azelf',
    {
      species: 'azelf',
      num: 482,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 75,
        atk: 125,
        def: 70,
        spa: 125,
        spd: 70,
        spe: 115
      },
      abilities: { first: 'Levitate' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'dialga',
    {
      species: 'dialga',
      num: 483,
      types: ['Steel', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 120,
        def: 120,
        spa: 150,
        spd: 100,
        spe: 90
      },
      abilities: { first: 'Pressure', hidden: 'Telepathy' },
      heightm: 5.4,
      weightkg: 683,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'palkia',
    {
      species: 'palkia',
      num: 484,
      types: ['Water', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 120,
        def: 100,
        spa: 150,
        spd: 120,
        spe: 100
      },
      abilities: { first: 'Pressure', hidden: 'Telepathy' },
      heightm: 4.2,
      weightkg: 336,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'heatran',
    {
      species: 'heatran',
      num: 485,
      types: ['Fire', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 91,
        atk: 90,
        def: 106,
        spa: 130,
        spd: 106,
        spe: 77
      },
      abilities: { first: 'Flash Fire', hidden: 'Flame Body' },
      heightm: 1.7,
      weightkg: 430,
      color: 'Brown',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'regigigas',
    {
      species: 'regigigas',
      num: 486,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 110,
        atk: 160,
        def: 110,
        spa: 80,
        spd: 110,
        spe: 100
      },
      abilities: { first: 'Slow Start' },
      heightm: 3.7,
      weightkg: 420,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'giratina',
    {
      species: 'giratina',
      num: 487,
      baseForme: 'Altered',
      types: ['Ghost', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 150,
        atk: 100,
        def: 120,
        spa: 100,
        spd: 120,
        spe: 90
      },
      abilities: { first: 'Pressure', hidden: 'Telepathy' },
      heightm: 4.5,
      weightkg: 750,
      color: 'Black',
      eggGroups: ['Undiscovered'],
      otherFormes: ['giratinaorigin']
    }
  ],
  [
    'giratinaorigin',
    {
      species: 'giratina-origin',
      num: 487,
      types: ['Ghost', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 150,
        atk: 120,
        def: 100,
        spa: 120,
        spd: 100,
        spe: 90
      },
      baseSpecies: 'Giratina',
      forme: 'Origin',
      formeLetter: 'O',
      abilities: { first: 'Levitate' },
      heightm: 6.9,
      weightkg: 650,
      color: 'Black',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'cresselia',
    {
      species: 'cresselia',
      num: 488,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 120,
        atk: 70,
        def: 120,
        spa: 75,
        spd: 130,
        spe: 85
      },
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 85.6,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'phione',
    {
      species: 'phione',
      num: 489,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 80,
        def: 80,
        spa: 80,
        spd: 80,
        spe: 80
      },
      abilities: { first: 'Hydration' },
      heightm: 0.4,
      weightkg: 3.1,
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy']
    }
  ],
  [
    'manaphy',
    {
      species: 'manaphy',
      num: 490,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Hydration' },
      heightm: 0.3,
      weightkg: 1.4,
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy']
    }
  ],
  [
    'darkrai',
    {
      species: 'darkrai',
      num: 491,
      types: ['Dark'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 90,
        def: 90,
        spa: 135,
        spd: 90,
        spe: 125
      },
      abilities: { first: 'Bad Dreams' },
      heightm: 1.5,
      weightkg: 50.5,
      color: 'Black',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'shaymin',
    {
      species: 'shaymin',
      num: 492,
      types: ['Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      baseForme: 'Land',
      abilities: { first: 'Natural Cure' },
      heightm: 0.2,
      weightkg: 2.1,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      otherFormes: ['shayminsky']
    }
  ],
  [
    'shayminsky',
    {
      species: 'shaymin-sky',
      num: 492,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 103,
        def: 75,
        spa: 120,
        spd: 75,
        spe: 127
      },
      baseSpecies: 'Shaymin',
      forme: 'Sky',
      formeLetter: 'S',
      abilities: { first: 'Serene Grace' },
      heightm: 0.4,
      weightkg: 5.2,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceus',
    {
      species: 'arceus',
      num: 493,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseForme: 'Normal',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'White',
      eggGroups: ['Undiscovered'],
      otherFormes: [
        'arceusbug',
        'arceusdark',
        'arceusdragon',
        'arceuselectric',
        'arceusfairy',
        'arceusfighting',
        'arceusfire',
        'arceusflying',
        'arceusghost',
        'arceusgrass',
        'arceusground',
        'arceusice',
        'arceuspoison',
        'arceuspsychic',
        'arceusrock',
        'arceussteel',
        'arceuswater'
      ]
    }
  ],
  [
    'arceusbug',
    {
      species: 'arceus-bug',
      num: 493,
      types: ['Bug'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Bug',
      formeLetter: 'B',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusdark',
    {
      species: 'arceus-dark',
      num: 493,
      types: ['Dark'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Dark',
      formeLetter: 'D',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusdragon',
    {
      species: 'arceus-dragon',
      num: 493,
      types: ['Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Dragon',
      formeLetter: 'D',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceuselectric',
    {
      species: 'arceus-electric',
      num: 493,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Electric',
      formeLetter: 'E',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusfairy',
    {
      species: 'arceus-fairy',
      num: 493,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Fairy',
      formeLetter: 'F',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusfighting',
    {
      species: 'arceus-fighting',
      num: 493,
      types: ['Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Fighting',
      formeLetter: 'F',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusfire',
    {
      species: 'arceus-fire',
      num: 493,
      types: ['Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Fire',
      formeLetter: 'F',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusflying',
    {
      species: 'arceus-flying',
      num: 493,
      types: ['Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Flying',
      formeLetter: 'F',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusghost',
    {
      species: 'arceus-ghost',
      num: 493,
      types: ['Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Ghost',
      formeLetter: 'G',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusgrass',
    {
      species: 'arceus-grass',
      num: 493,
      types: ['Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Grass',
      formeLetter: 'G',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusground',
    {
      species: 'arceus-ground',
      num: 493,
      types: ['Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Ground',
      formeLetter: 'G',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusice',
    {
      species: 'arceus-ice',
      num: 493,
      types: ['Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Ice',
      formeLetter: 'I',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceuspoison',
    {
      species: 'arceus-poison',
      num: 493,
      types: ['Poison'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Poison',
      formeLetter: 'P',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceuspsychic',
    {
      species: 'arceus-psychic',
      num: 493,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Psychic',
      formeLetter: 'P',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceusrock',
    {
      species: 'arceus-rock',
      num: 493,
      types: ['Rock'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Rock',
      formeLetter: 'R',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceussteel',
    {
      species: 'arceus-steel',
      num: 493,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Steel',
      formeLetter: 'S',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'arceuswater',
    {
      species: 'arceus-water',
      num: 493,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 120,
        atk: 120,
        def: 120,
        spa: 120,
        spd: 120,
        spe: 120
      },
      baseSpecies: 'Arceus',
      forme: 'Water',
      formeLetter: 'W',
      abilities: { first: 'Multitype' },
      heightm: 3.2,
      weightkg: 320,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
