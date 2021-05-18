import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'chespin',
    {
      species: 'chespin',
      num: 650,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 56,
        atk: 61,
        def: 65,
        spa: 48,
        spd: 45,
        spe: 38
      },
      abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
      heightm: 0.4,
      weightkg: 9,
      color: 'Green',
      evos: ['quilladin'],
      eggGroups: ['Field']
    }
  ],
  [
    'quilladin',
    {
      species: 'quilladin',
      num: 651,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 61,
        atk: 78,
        def: 95,
        spa: 56,
        spd: 58,
        spe: 57
      },
      abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
      heightm: 0.7,
      weightkg: 29,
      color: 'Green',
      prevo: 'chespin',
      evos: ['chesnaught'],
      evoLevel: 16,
      eggGroups: ['Field']
    }
  ],
  [
    'chesnaught',
    {
      species: 'chesnaught',
      num: 652,
      types: ['Grass', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 88,
        atk: 107,
        def: 122,
        spa: 74,
        spd: 75,
        spe: 64
      },
      abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
      heightm: 1.6,
      weightkg: 90,
      color: 'Green',
      prevo: 'quilladin',
      evoLevel: 36,
      eggGroups: ['Field']
    }
  ],
  [
    'fennekin',
    {
      species: 'fennekin',
      num: 653,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 40,
        spa: 62,
        spd: 60,
        spe: 60
      },
      abilities: { first: 'Blaze', hidden: 'Magician' },
      heightm: 0.4,
      weightkg: 9.4,
      color: 'Red',
      evos: ['braixen'],
      eggGroups: ['Field']
    }
  ],
  [
    'braixen',
    {
      species: 'braixen',
      num: 654,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 59,
        atk: 59,
        def: 58,
        spa: 90,
        spd: 70,
        spe: 73
      },
      abilities: { first: 'Blaze', hidden: 'Magician' },
      heightm: 1,
      weightkg: 14.5,
      color: 'Red',
      prevo: 'fennekin',
      evos: ['delphox'],
      evoLevel: 16,
      eggGroups: ['Field']
    }
  ],
  [
    'delphox',
    {
      species: 'delphox',
      num: 655,
      types: ['Fire', 'Psychic'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 69,
        def: 72,
        spa: 114,
        spd: 100,
        spe: 104
      },
      abilities: { first: 'Blaze', hidden: 'Magician' },
      heightm: 1.5,
      weightkg: 39,
      color: 'Red',
      prevo: 'braixen',
      evoLevel: 36,
      eggGroups: ['Field']
    }
  ],
  [
    'froakie',
    {
      species: 'froakie',
      num: 656,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 41,
        atk: 56,
        def: 40,
        spa: 62,
        spd: 44,
        spe: 71
      },
      abilities: { first: 'Torrent', hidden: 'Protean' },
      heightm: 0.3,
      weightkg: 7,
      color: 'Blue',
      evos: ['frogadier'],
      eggGroups: ['Water 1']
    }
  ],
  [
    'frogadier',
    {
      species: 'frogadier',
      num: 657,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 54,
        atk: 63,
        def: 52,
        spa: 83,
        spd: 56,
        spe: 97
      },
      abilities: { first: 'Torrent', hidden: 'Protean' },
      heightm: 0.6,
      weightkg: 10.9,
      color: 'Blue',
      prevo: 'froakie',
      evos: ['greninja'],
      evoLevel: 16,
      eggGroups: ['Water 1']
    }
  ],
  [
    'greninja',
    {
      species: 'greninja',
      num: 658,
      types: ['Water', 'Dark'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 72,
        atk: 95,
        def: 67,
        spa: 103,
        spd: 71,
        spe: 122
      },
      abilities: { first: 'Torrent', hidden: 'Protean', special: 'Battle Bond' },
      heightm: 1.5,
      weightkg: 40,
      color: 'Blue',
      prevo: 'frogadier',
      evoLevel: 36,
      eggGroups: ['Water 1'],
      otherFormes: ['greninjaash']
    }
  ],
  [
    'greninjaash',
    {
      species: 'greninja-ash',
      num: 658,
      types: ['Water', 'Dark'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 72,
        atk: 145,
        def: 67,
        spa: 153,
        spd: 71,
        spe: 132
      },
      baseSpecies: 'Greninja',
      forme: 'Ash',
      formeLetter: 'A',
      abilities: { first: 'Battle Bond' },
      heightm: 1.5,
      weightkg: 40,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'bunnelby',
    {
      species: 'bunnelby',
      num: 659,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 36,
        def: 38,
        spa: 32,
        spd: 36,
        spe: 57
      },
      abilities: { first: 'Pickup', second: 'Cheek Pouch', hidden: 'Huge Power' },
      heightm: 0.4,
      weightkg: 5,
      color: 'Brown',
      evos: ['diggersby'],
      eggGroups: ['Field']
    }
  ],
  [
    'diggersby',
    {
      species: 'diggersby',
      num: 660,
      types: ['Normal', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 56,
        def: 77,
        spa: 50,
        spd: 77,
        spe: 78
      },
      abilities: { first: 'Pickup', second: 'Cheek Pouch', hidden: 'Huge Power' },
      heightm: 1,
      weightkg: 42.4,
      color: 'Brown',
      prevo: 'bunnelby',
      evoLevel: 20,
      eggGroups: ['Field']
    }
  ],
  [
    'fletchling',
    {
      species: 'fletchling',
      num: 661,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 50,
        def: 43,
        spa: 40,
        spd: 38,
        spe: 62
      },
      abilities: { first: 'Big Pecks', hidden: 'Gale Wings' },
      heightm: 0.3,
      weightkg: 1.7,
      color: 'Red',
      evos: ['fletchinder'],
      eggGroups: ['Flying']
    }
  ],
  [
    'fletchinder',
    {
      species: 'fletchinder',
      num: 662,
      types: ['Fire', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 73,
        def: 55,
        spa: 56,
        spd: 52,
        spe: 84
      },
      abilities: { first: 'Flame Body', hidden: 'Gale Wings' },
      heightm: 0.7,
      weightkg: 16,
      color: 'Red',
      prevo: 'fletchling',
      evos: ['talonflame'],
      evoLevel: 17,
      eggGroups: ['Flying']
    }
  ],
  [
    'talonflame',
    {
      species: 'talonflame',
      num: 663,
      types: ['Fire', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 78,
        atk: 81,
        def: 71,
        spa: 74,
        spd: 69,
        spe: 126
      },
      abilities: { first: 'Flame Body', hidden: 'Gale Wings' },
      heightm: 1.2,
      weightkg: 24.5,
      color: 'Red',
      prevo: 'fletchinder',
      evoLevel: 35,
      eggGroups: ['Flying']
    }
  ],
  [
    'scatterbug',
    {
      species: 'scatterbug',
      num: 664,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 35,
        def: 40,
        spa: 27,
        spd: 25,
        spe: 35
      },
      abilities: { first: 'Shield Dust', second: 'Compound Eyes', hidden: 'Friend Guard' },
      heightm: 0.3,
      weightkg: 2.5,
      color: 'Black',
      evos: ['spewpa'],
      eggGroups: ['Bug']
    }
  ],
  [
    'spewpa',
    {
      species: 'spewpa',
      num: 665,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 22,
        def: 60,
        spa: 27,
        spd: 30,
        spe: 29
      },
      abilities: { first: 'Shed Skin', hidden: 'Friend Guard' },
      heightm: 0.3,
      weightkg: 8.4,
      color: 'Black',
      prevo: 'scatterbug',
      evos: ['vivillon'],
      evoLevel: 9,
      eggGroups: ['Bug']
    }
  ],
  [
    'vivillon',
    {
      species: 'vivillon',
      num: 666,
      types: ['Bug', 'Flying'],
      baseForme: 'Meadow',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 52,
        def: 50,
        spa: 90,
        spd: 50,
        spe: 89
      },
      abilities: { first: 'Shield Dust', second: 'Compound Eyes', hidden: 'Friend Guard' },
      heightm: 1.2,
      weightkg: 17,
      color: 'White',
      prevo: 'spewpa',
      evoLevel: 12,
      eggGroups: ['Bug'],
      cosmeticFormes: [
        'Vivillon-Archipelago',
        'Vivillon-Continental',
        'Vivillon-Elegant',
        'Vivillon-Garden',
        'Vivillon-High Plains',
        'Vivillon-Icy Snow',
        'Vivillon-Jungle',
        'Vivillon-Marine',
        'Vivillon-Modern',
        'Vivillon-Monsoon',
        'Vivillon-Ocean',
        'Vivillon-Polar',
        'Vivillon-River',
        'Vivillon-Sandstorm',
        'Vivillon-Savanna',
        'Vivillon-Sun',
        'Vivillon-Tundra'
      ],
      otherFormes: ['vivillonfancy', 'vivillonpokeball']
    }
  ],
  [
    'vivillonfancy',
    {
      species: 'vivillon-fancy',
      num: 666,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 52,
        def: 50,
        spa: 90,
        spd: 50,
        spe: 89
      },
      baseSpecies: 'Vivillon',
      forme: 'Fancy',
      formeLetter: 'F',
      abilities: { first: 'Shield Dust', second: 'Compound Eyes' },
      heightm: 1.2,
      weightkg: 17,
      color: 'Black',
      eggGroups: ['Bug']
    }
  ],
  [
    'vivillonpokeball',
    {
      species: 'vivillon-pokeball',
      num: 666,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 52,
        def: 50,
        spa: 90,
        spd: 50,
        spe: 89
      },
      baseSpecies: 'Vivillon',
      forme: 'Pokeball',
      formeLetter: 'P',
      abilities: { first: 'Shield Dust', second: 'Compound Eyes' },
      heightm: 1.2,
      weightkg: 17,
      color: 'Black',
      eggGroups: ['Bug']
    }
  ],
  [
    'litleo',
    {
      species: 'litleo',
      num: 667,
      types: ['Fire', 'Normal'],
      genderRatio: { male: 0.125, female: 0.875 },
      baseStats: {
        hp: 62,
        atk: 50,
        def: 58,
        spa: 73,
        spd: 54,
        spe: 72
      },
      abilities: { first: 'Rivalry', second: 'Unnerve', hidden: 'Moxie' },
      heightm: 0.6,
      weightkg: 13.5,
      color: 'Brown',
      evos: ['pyroar'],
      eggGroups: ['Field']
    }
  ],
  [
    'pyroar',
    {
      species: 'pyroar',
      num: 668,
      types: ['Fire', 'Normal'],
      genderRatio: { male: 0.125, female: 0.875 },
      baseStats: {
        hp: 86,
        atk: 68,
        def: 72,
        spa: 109,
        spd: 66,
        spe: 106
      },
      abilities: { first: 'Rivalry', second: 'Unnerve', hidden: 'Moxie' },
      heightm: 1.5,
      weightkg: 81.5,
      color: 'Brown',
      prevo: 'litleo',
      evoLevel: 35,
      eggGroups: ['Field']
    }
  ],
  [
    'flabebe',
    {
      species: 'flabebe',
      num: 669,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 44,
        atk: 38,
        def: 39,
        spa: 61,
        spd: 79,
        spe: 42
      },
      baseForme: 'Red',
      abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
      heightm: 0.1,
      weightkg: 0.1,
      color: 'White',
      evos: ['floette'],
      eggGroups: ['Fairy'],
      cosmeticFormes: ['Flabe\u0301be\u0301-Blue', 'Flabe\u0301be\u0301-Orange', 'Flabe\u0301be\u0301-White', 'Flabe\u0301be\u0301-Yellow']
    }
  ],
  [
    'floette',
    {
      species: 'floette',
      num: 670,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 54,
        atk: 45,
        def: 47,
        spa: 75,
        spd: 98,
        spe: 52
      },
      baseForme: 'Red',
      abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
      heightm: 0.2,
      weightkg: 0.9,
      color: 'White',
      prevo: 'flabebe',
      evos: ['florges'],
      evoLevel: 19,
      eggGroups: ['Fairy'],
      cosmeticFormes: ['Floette-Blue', 'Floette-Orange', 'Floette-White', 'Floette-Yellow']
    }
  ],
  [
    'floetteeternal',
    {
      species: 'floette-eternal',
      num: 670,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 74,
        atk: 65,
        def: 67,
        spa: 125,
        spd: 128,
        spe: 92
      },
      baseSpecies: 'Floette',
      forme: 'Eternal',
      formeLetter: 'E',
      abilities: { first: 'Flower Veil' },
      heightm: 0.2,
      weightkg: 0.9,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'florges',
    {
      species: 'florges',
      num: 671,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 78,
        atk: 65,
        def: 68,
        spa: 112,
        spd: 154,
        spe: 75
      },
      baseForme: 'Red',
      abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
      heightm: 1.1,
      weightkg: 10,
      color: 'White',
      prevo: 'floette',
      evoLevel: 19,
      eggGroups: ['Fairy'],
      cosmeticFormes: ['Florges-Blue', 'Florges-Orange', 'Florges-White', 'Florges-Yellow']
    }
  ],
  [
    'skiddo',
    {
      species: 'skiddo',
      num: 672,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 66,
        atk: 65,
        def: 48,
        spa: 62,
        spd: 57,
        spe: 52
      },
      abilities: { first: 'Sap Sipper', hidden: 'Grass Pelt' },
      heightm: 0.9,
      weightkg: 31,
      color: 'Brown',
      evos: ['gogoat'],
      eggGroups: ['Field']
    }
  ],
  [
    'gogoat',
    {
      species: 'gogoat',
      num: 673,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 123,
        atk: 100,
        def: 62,
        spa: 97,
        spd: 81,
        spe: 68
      },
      abilities: { first: 'Sap Sipper', hidden: 'Grass Pelt' },
      heightm: 1.7,
      weightkg: 91,
      color: 'Brown',
      prevo: 'skiddo',
      evoLevel: 32,
      eggGroups: ['Field']
    }
  ],
  [
    'pancham',
    {
      species: 'pancham',
      num: 674,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 67,
        atk: 82,
        def: 62,
        spa: 46,
        spd: 48,
        spe: 43
      },
      abilities: { first: 'Iron Fist', second: 'Mold Breaker', hidden: 'Scrappy' },
      heightm: 0.6,
      weightkg: 8,
      color: 'White',
      evos: ['pangoro'],
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'pangoro',
    {
      species: 'pangoro',
      num: 675,
      types: ['Fighting', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 124,
        def: 78,
        spa: 69,
        spd: 71,
        spe: 58
      },
      abilities: { first: 'Iron Fist', second: 'Mold Breaker', hidden: 'Scrappy' },
      heightm: 2.1,
      weightkg: 136,
      color: 'White',
      prevo: 'pancham',
      evoLevel: 'Level 32 with Dark Type in Party',
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'furfrou',
    {
      species: 'furfrou',
      num: 676,
      types: ['Normal'],
      baseForme: 'Natural',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 60,
        spa: 65,
        spd: 90,
        spe: 102
      },
      abilities: { first: 'Fur Coat' },
      heightm: 1.2,
      weightkg: 28,
      color: 'White',
      eggGroups: ['Field'],
      cosmeticFormes: [
        'Furfrou-Dandy',
        'Furfrou-Debutante',
        'Furfrou-Diamond',
        'Furfrou-Heart',
        'Furfrou-Kabuki',
        'Furfrou-La Reine',
        'Furfrou-Matron',
        'Furfrou-Pharaoh',
        'Furfrou-Star'
      ]
    }
  ],
  [
    'espurr',
    {
      species: 'espurr',
      num: 677,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 48,
        def: 54,
        spa: 63,
        spd: 60,
        spe: 68
      },
      abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Own Tempo' },
      heightm: 0.3,
      weightkg: 3.5,
      color: 'Gray',
      evos: ['meowstic'],
      eggGroups: ['Field']
    }
  ],
  [
    'meowstic',
    {
      species: 'meowstic',
      num: 678,
      types: ['Psychic'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 74,
        atk: 48,
        def: 76,
        spa: 83,
        spd: 81,
        spe: 104
      },
      baseForme: 'M',
      abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Prankster' },
      heightm: 0.6,
      weightkg: 8.5,
      color: 'Blue',
      prevo: 'espurr',
      evoLevel: 25,
      eggGroups: ['Field'],
      otherFormes: ['meowsticf']
    }
  ],
  [
    'meowsticf',
    {
      species: 'meowstic-f',
      num: 678,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 74,
        atk: 48,
        def: 76,
        spa: 83,
        spd: 81,
        spe: 104
      },
      baseSpecies: 'Meowstic',
      forme: 'F',
      formeLetter: 'F',
      abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Competitive' },
      heightm: 0.6,
      weightkg: 8.5,
      color: 'White',
      prevo: 'espurr',
      evoLevel: 25,
      eggGroups: ['Field']
    }
  ],
  [
    'honedge',
    {
      species: 'honedge',
      num: 679,
      types: ['Steel', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 80,
        def: 100,
        spa: 35,
        spd: 37,
        spe: 28
      },
      abilities: { first: 'No Guard' },
      heightm: 0.8,
      weightkg: 2,
      color: 'Brown',
      evos: ['doublade'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'doublade',
    {
      species: 'doublade',
      num: 680,
      types: ['Steel', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 59,
        atk: 110,
        def: 150,
        spa: 45,
        spd: 49,
        spe: 35
      },
      abilities: { first: 'No Guard' },
      heightm: 0.8,
      weightkg: 4.5,
      color: 'Brown',
      prevo: 'honedge',
      evos: ['aegislash'],
      evoLevel: 35,
      eggGroups: ['Mineral']
    }
  ],
  [
    'aegislash',
    {
      species: 'aegislash',
      num: 681,
      baseForme: 'Shield',
      types: ['Steel', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 150,
        spa: 50,
        spd: 150,
        spe: 60
      },
      abilities: { first: 'Stance Change' },
      heightm: 1.7,
      weightkg: 53,
      color: 'Brown',
      prevo: 'doublade',
      evoLevel: 35,
      eggGroups: ['Mineral'],
      otherFormes: ['aegislashblade']
    }
  ],
  [
    'aegislashblade',
    {
      species: 'aegislash-blade',
      num: 681,
      types: ['Steel', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 150,
        def: 50,
        spa: 150,
        spd: 50,
        spe: 60
      },
      baseSpecies: 'Aegislash',
      forme: 'Blade',
      formeLetter: 'B',
      abilities: { first: 'Stance Change' },
      heightm: 1.7,
      weightkg: 53,
      color: 'Brown',
      prevo: 'doublade',
      evoLevel: 35,
      eggGroups: ['Mineral']
    }
  ],
  [
    'spritzee',
    {
      species: 'spritzee',
      num: 682,
      types: ['Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 78,
        atk: 52,
        def: 60,
        spa: 63,
        spd: 65,
        spe: 23
      },
      abilities: { first: 'Healer', hidden: 'Aroma Veil' },
      heightm: 0.2,
      weightkg: 0.5,
      color: 'Pink',
      evos: ['aromatisse'],
      eggGroups: ['Fairy']
    }
  ],
  [
    'aromatisse',
    {
      species: 'aromatisse',
      num: 683,
      types: ['Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 101,
        atk: 72,
        def: 72,
        spa: 99,
        spd: 89,
        spe: 29
      },
      abilities: { first: 'Healer', hidden: 'Aroma Veil' },
      heightm: 0.8,
      weightkg: 15.5,
      color: 'Pink',
      prevo: 'spritzee',
      evoLevel: 'Trade while holding Sachet',
      eggGroups: ['Fairy']
    }
  ],
  [
    'swirlix',
    {
      species: 'swirlix',
      num: 684,
      types: ['Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 48,
        def: 66,
        spa: 59,
        spd: 57,
        spe: 49
      },
      abilities: { first: 'Sweet Veil', hidden: 'Unburden' },
      heightm: 0.4,
      weightkg: 3.5,
      color: 'White',
      evos: ['slurpuff'],
      eggGroups: ['Fairy']
    }
  ],
  [
    'slurpuff',
    {
      species: 'slurpuff',
      num: 685,
      types: ['Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 82,
        atk: 80,
        def: 86,
        spa: 85,
        spd: 75,
        spe: 72
      },
      abilities: { first: 'Sweet Veil', hidden: 'Unburden' },
      heightm: 0.8,
      weightkg: 5,
      color: 'White',
      prevo: 'swirlix',
      evoLevel: 'Trade while holding Whipped Dream',
      eggGroups: ['Fairy']
    }
  ],
  [
    'inkay',
    {
      species: 'inkay',
      num: 686,
      types: ['Dark', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 53,
        atk: 54,
        def: 53,
        spa: 37,
        spd: 46,
        spe: 45
      },
      abilities: { first: 'Contrary', second: 'Suction Cups', hidden: 'Infiltrator' },
      heightm: 0.4,
      weightkg: 3.5,
      color: 'Blue',
      evos: ['malamar'],
      eggGroups: ['Water 1', 'Water 2']
    }
  ],
  [
    'malamar',
    {
      species: 'malamar',
      num: 687,
      types: ['Dark', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 86,
        atk: 92,
        def: 88,
        spa: 68,
        spd: 75,
        spe: 73
      },
      abilities: { first: 'Contrary', second: 'Suction Cups', hidden: 'Infiltrator' },
      heightm: 1.5,
      weightkg: 47,
      color: 'Blue',
      prevo: 'inkay',
      evoLevel: 'Level 30, Flip device upside down',
      eggGroups: ['Water 1', 'Water 2']
    }
  ],
  [
    'binacle',
    {
      species: 'binacle',
      num: 688,
      types: ['Rock', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 42,
        atk: 52,
        def: 67,
        spa: 39,
        spd: 56,
        spe: 50
      },
      abilities: { first: 'Tough Claws', second: 'Sniper', hidden: 'Pickpocket' },
      heightm: 0.5,
      weightkg: 31,
      color: 'Brown',
      evos: ['barbaracle'],
      eggGroups: ['Water 3']
    }
  ],
  [
    'barbaracle',
    {
      species: 'barbaracle',
      num: 689,
      types: ['Rock', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 72,
        atk: 105,
        def: 115,
        spa: 54,
        spd: 86,
        spe: 68
      },
      abilities: { first: 'Tough Claws', second: 'Sniper', hidden: 'Pickpocket' },
      heightm: 1.3,
      weightkg: 96,
      color: 'Brown',
      prevo: 'binacle',
      evoLevel: 39,
      eggGroups: ['Water 3']
    }
  ],
  [
    'skrelp',
    {
      species: 'skrelp',
      num: 690,
      types: ['Poison', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 60,
        def: 60,
        spa: 60,
        spd: 60,
        spe: 30
      },
      abilities: { first: 'Poison Point', second: 'Poison Touch', hidden: 'Adaptability' },
      heightm: 0.5,
      weightkg: 7.3,
      color: 'Brown',
      evos: ['dragalge'],
      eggGroups: ['Water 1', 'Dragon']
    }
  ],
  [
    'dragalge',
    {
      species: 'dragalge',
      num: 691,
      types: ['Poison', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 75,
        def: 90,
        spa: 97,
        spd: 123,
        spe: 44
      },
      abilities: { first: 'Poison Point', second: 'Poison Touch', hidden: 'Adaptability' },
      heightm: 1.8,
      weightkg: 81.5,
      color: 'Brown',
      prevo: 'skrelp',
      evoLevel: 48,
      eggGroups: ['Water 1', 'Dragon']
    }
  ],
  [
    'clauncher',
    {
      species: 'clauncher',
      num: 692,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 53,
        def: 62,
        spa: 58,
        spd: 63,
        spe: 44
      },
      abilities: { first: 'Mega Launcher' },
      heightm: 0.5,
      weightkg: 8.3,
      color: 'Blue',
      evos: ['clawitzer'],
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'clawitzer',
    {
      species: 'clawitzer',
      num: 693,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 71,
        atk: 73,
        def: 88,
        spa: 120,
        spd: 89,
        spe: 59
      },
      abilities: { first: 'Mega Launcher' },
      heightm: 1.3,
      weightkg: 35.3,
      color: 'Blue',
      prevo: 'clauncher',
      evoLevel: 37,
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'helioptile',
    {
      species: 'helioptile',
      num: 694,
      types: ['Electric', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 44,
        atk: 38,
        def: 33,
        spa: 61,
        spd: 43,
        spe: 70
      },
      abilities: { first: 'Dry Skin', second: 'Sand Veil', hidden: 'Solar Power' },
      heightm: 0.5,
      weightkg: 6,
      color: 'Yellow',
      evos: ['heliolisk'],
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'heliolisk',
    {
      species: 'heliolisk',
      num: 695,
      types: ['Electric', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 62,
        atk: 55,
        def: 52,
        spa: 109,
        spd: 94,
        spe: 109
      },
      abilities: { first: 'Dry Skin', second: 'Sand Veil', hidden: 'Solar Power' },
      heightm: 1,
      weightkg: 21,
      color: 'Yellow',
      prevo: 'helioptile',
      evoLevel: 'use Sun Stone',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'tyrunt',
    {
      species: 'tyrunt',
      num: 696,
      types: ['Rock', 'Dragon'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 58,
        atk: 89,
        def: 77,
        spa: 45,
        spd: 45,
        spe: 48
      },
      abilities: { first: 'Strong Jaw', hidden: 'Sturdy' },
      heightm: 0.8,
      weightkg: 26,
      color: 'Brown',
      evos: ['tyrantrum'],
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'tyrantrum',
    {
      species: 'tyrantrum',
      num: 697,
      types: ['Rock', 'Dragon'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 82,
        atk: 121,
        def: 119,
        spa: 69,
        spd: 59,
        spe: 71
      },
      abilities: { first: 'Strong Jaw', hidden: 'Rock Head' },
      heightm: 2.5,
      weightkg: 270,
      color: 'Red',
      prevo: 'tyrunt',
      evoLevel: '39 Daytime',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'amaura',
    {
      species: 'amaura',
      num: 698,
      types: ['Rock', 'Ice'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 77,
        atk: 59,
        def: 50,
        spa: 67,
        spd: 63,
        spe: 46
      },
      abilities: { first: 'Refrigerate', hidden: 'Snow Warning' },
      heightm: 1.3,
      weightkg: 25.2,
      color: 'Blue',
      evos: ['aurorus'],
      eggGroups: ['Monster']
    }
  ],
  [
    'aurorus',
    {
      species: 'aurorus',
      num: 699,
      types: ['Rock', 'Ice'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 123,
        atk: 77,
        def: 72,
        spa: 99,
        spd: 92,
        spe: 58
      },
      abilities: { first: 'Refrigerate', hidden: 'Snow Warning' },
      heightm: 2.7,
      weightkg: 225,
      color: 'Blue',
      prevo: 'amaura',
      evoLevel: '39 Nighttime',
      eggGroups: ['Monster']
    }
  ],
  [
    'sylveon',
    {
      species: 'sylveon',
      num: 700,
      types: ['Fairy'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 95,
        atk: 65,
        def: 65,
        spa: 110,
        spd: 130,
        spe: 60
      },
      abilities: { first: 'Cute Charm', hidden: 'Pixilate' },
      heightm: 1,
      weightkg: 23.5,
      color: 'Pink',
      prevo: 'eevee',
      evoLevel: 'Level up while having high Affection and knowing a Fairy type move',
      eggGroups: ['Field']
    }
  ],
  [
    'hawlucha',
    {
      species: 'hawlucha',
      num: 701,
      types: ['Fighting', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 78,
        atk: 92,
        def: 75,
        spa: 74,
        spd: 63,
        spe: 118
      },
      abilities: { first: 'Limber', second: 'Unburden', hidden: 'Mold Breaker' },
      heightm: 0.8,
      weightkg: 21.5,
      color: 'Green',
      eggGroups: ['Flying', 'Human-Like']
    }
  ],
  [
    'dedenne',
    {
      species: 'dedenne',
      num: 702,
      types: ['Electric', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 67,
        atk: 58,
        def: 57,
        spa: 81,
        spd: 67,
        spe: 101
      },
      abilities: { first: 'Cheek Pouch', second: 'Pickup', hidden: 'Plus' },
      heightm: 0.2,
      weightkg: 2.2,
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'carbink',
    {
      species: 'carbink',
      num: 703,
      types: ['Rock', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 150,
        spa: 50,
        spd: 150,
        spe: 50
      },
      abilities: { first: 'Clear Body', hidden: 'Sturdy' },
      heightm: 0.3,
      weightkg: 5.7,
      color: 'Gray',
      eggGroups: ['Fairy', 'Mineral']
    }
  ],
  [
    'goomy',
    {
      species: 'goomy',
      num: 704,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 50,
        def: 35,
        spa: 55,
        spd: 75,
        spe: 40
      },
      abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
      heightm: 0.3,
      weightkg: 2.8,
      color: 'Purple',
      evos: ['sliggoo'],
      eggGroups: ['Dragon']
    }
  ],
  [
    'sliggoo',
    {
      species: 'sliggoo',
      num: 705,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 75,
        def: 53,
        spa: 83,
        spd: 113,
        spe: 60
      },
      abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
      heightm: 0.8,
      weightkg: 17.5,
      color: 'Purple',
      prevo: 'goomy',
      evos: ['goodra'],
      evoLevel: 40,
      eggGroups: ['Dragon']
    }
  ],
  [
    'goodra',
    {
      species: 'goodra',
      num: 706,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 100,
        def: 70,
        spa: 110,
        spd: 150,
        spe: 80
      },
      abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
      heightm: 2,
      weightkg: 150.5,
      color: 'Purple',
      prevo: 'sliggoo',
      evoLevel: 'Level 50 In Rain',
      eggGroups: ['Dragon']
    }
  ],
  [
    'klefki',
    {
      species: 'klefki',
      num: 707,
      types: ['Steel', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 57,
        atk: 80,
        def: 91,
        spa: 80,
        spd: 87,
        spe: 75
      },
      abilities: { first: 'Prankster', hidden: 'Magician' },
      heightm: 0.2,
      weightkg: 3,
      color: 'Gray',
      eggGroups: ['Mineral']
    }
  ],
  [
    'phantump',
    {
      species: 'phantump',
      num: 708,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 43,
        atk: 70,
        def: 48,
        spa: 50,
        spd: 60,
        spe: 38
      },
      abilities: { first: 'Natural Cure', second: 'Frisk', hidden: 'Harvest' },
      heightm: 0.4,
      weightkg: 7,
      color: 'Brown',
      evos: ['trevenant'],
      eggGroups: ['Grass', 'Amorphous']
    }
  ],
  [
    'trevenant',
    {
      species: 'trevenant',
      num: 709,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 110,
        def: 76,
        spa: 65,
        spd: 82,
        spe: 56
      },
      abilities: { first: 'Natural Cure', second: 'Frisk', hidden: 'Harvest' },
      heightm: 1.5,
      weightkg: 71,
      color: 'Brown',
      prevo: 'phantump',
      evoLevel: 'Trade',
      eggGroups: ['Grass', 'Amorphous']
    }
  ],
  [
    'pumpkaboo',
    {
      species: 'pumpkaboo',
      num: 710,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 49,
        atk: 66,
        def: 70,
        spa: 44,
        spd: 55,
        spe: 51
      },
      baseForme: 'Average',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 0.4,
      weightkg: 5,
      color: 'Brown',
      evos: ['gourgeist'],
      eggGroups: ['Amorphous'],
      otherFormes: ['pumpkaboosmall', 'pumpkaboolarge', 'pumpkaboosuper']
    }
  ],
  [
    'pumpkaboosmall',
    {
      species: 'pumpkaboo-small',
      num: 710,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 44,
        atk: 66,
        def: 70,
        spa: 44,
        spd: 55,
        spe: 56
      },
      baseSpecies: 'Pumpkaboo',
      forme: 'Small',
      formeLetter: 'S',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 0.3,
      weightkg: 3.5,
      color: 'Brown',
      evos: ['gourgeistsmall'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'pumpkaboolarge',
    {
      species: 'pumpkaboo-large',
      num: 710,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 54,
        atk: 66,
        def: 70,
        spa: 44,
        spd: 55,
        spe: 46
      },
      baseSpecies: 'Pumpkaboo',
      forme: 'Large',
      formeLetter: 'L',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 0.5,
      weightkg: 7.5,
      color: 'Brown',
      evos: ['gourgeistlarge'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'pumpkaboosuper',
    {
      species: 'pumpkaboo-super',
      num: 710,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 59,
        atk: 66,
        def: 70,
        spa: 44,
        spd: 55,
        spe: 41
      },
      baseSpecies: 'Pumpkaboo',
      forme: 'Super',
      formeLetter: 'S',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 0.8,
      weightkg: 15,
      color: 'Brown',
      evos: ['gourgeistsuper'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'gourgeist',
    {
      species: 'gourgeist',
      num: 711,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 122,
        spa: 58,
        spd: 75,
        spe: 84
      },
      baseForme: 'Average',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 0.9,
      weightkg: 12.5,
      color: 'Brown',
      prevo: 'pumpkaboo',
      evoLevel: 'Trade',
      eggGroups: ['Amorphous'],
      otherFormes: ['gourgeistsmall', 'gourgeistlarge', 'gourgeistsuper']
    }
  ],
  [
    'gourgeistsmall',
    {
      species: 'gourgeist-small',
      num: 711,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 85,
        def: 122,
        spa: 58,
        spd: 75,
        spe: 99
      },
      baseSpecies: 'Gourgeist',
      forme: 'Small',
      formeLetter: 'S',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 0.7,
      weightkg: 9.5,
      color: 'Brown',
      prevo: 'pumpkaboosmall',
      evoLevel: 'Trade',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'gourgeistlarge',
    {
      species: 'gourgeist-large',
      num: 711,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 95,
        def: 122,
        spa: 58,
        spd: 75,
        spe: 69
      },
      baseSpecies: 'Gourgeist',
      forme: 'Large',
      formeLetter: 'L',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 1.1,
      weightkg: 14,
      color: 'Brown',
      prevo: 'pumpkaboolarge',
      evoLevel: 'Trade',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'gourgeistsuper',
    {
      species: 'gourgeist-super',
      num: 711,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 100,
        def: 122,
        spa: 58,
        spd: 75,
        spe: 54
      },
      baseSpecies: 'Gourgeist',
      forme: 'Super',
      formeLetter: 'S',
      abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
      heightm: 1.7,
      weightkg: 39,
      color: 'Brown',
      prevo: 'pumpkaboosuper',
      evoLevel: 'Trade',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'bergmite',
    {
      species: 'bergmite',
      num: 712,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 69,
        def: 85,
        spa: 32,
        spd: 35,
        spe: 28
      },
      abilities: { first: 'Own Tempo', second: 'Ice Body', hidden: 'Sturdy' },
      heightm: 1,
      weightkg: 99.5,
      color: 'Blue',
      evos: ['avalugg'],
      eggGroups: ['Monster', 'Mineral']
    }
  ],
  [
    'avalugg',
    {
      species: 'avalugg',
      num: 713,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 117,
        def: 184,
        spa: 44,
        spd: 46,
        spe: 28
      },
      abilities: { first: 'Own Tempo', second: 'Ice Body', hidden: 'Sturdy' },
      heightm: 2,
      weightkg: 505,
      color: 'Blue',
      prevo: 'bergmite',
      evoLevel: 37,
      eggGroups: ['Monster', 'Mineral']
    }
  ],
  [
    'noibat',
    {
      species: 'noibat',
      num: 714,
      types: ['Flying', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 30,
        def: 35,
        spa: 45,
        spd: 40,
        spe: 55
      },
      abilities: { first: 'Frisk', second: 'Infiltrator', hidden: 'Telepathy' },
      heightm: 0.5,
      weightkg: 8,
      color: 'Purple',
      evos: ['noivern'],
      eggGroups: ['Flying', 'Dragon']
    }
  ],
  [
    'noivern',
    {
      species: 'noivern',
      num: 715,
      types: ['Flying', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 70,
        def: 80,
        spa: 97,
        spd: 80,
        spe: 123
      },
      abilities: { first: 'Frisk', second: 'Infiltrator', hidden: 'Telepathy' },
      heightm: 1.5,
      weightkg: 85,
      color: 'Purple',
      prevo: 'noibat',
      evoLevel: 48,
      eggGroups: ['Flying', 'Dragon']
    }
  ],
  [
    'xerneas',
    {
      species: 'xerneas',
      num: 716,
      types: ['Fairy'],
      baseForme: 'Active', // Neutral is technically the base, but it can't be used in battle
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 126,
        atk: 131,
        def: 95,
        spa: 131,
        spd: 98,
        spe: 99
      },
      abilities: { first: 'Fairy Aura' },
      heightm: 3,
      weightkg: 215,
      color: 'Blue',
      otherFormes: ['Xerneas-Neutral'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'xerneasneutral',
    {
      species: 'xerneas-neutral',
      num: 716,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 126,
        atk: 131,
        def: 95,
        spa: 131,
        spd: 98,
        spe: 99
      },
      abilities: { first: 'Fairy Aura' },
      baseSpecies: 'Xerneas',
      forme: 'Neutral',
      formeLetter: 'N',
      heightm: 3,
      weightkg: 215,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'yveltal',
    {
      species: 'yveltal',
      num: 717,
      types: ['Dark', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 126,
        atk: 131,
        def: 95,
        spa: 131,
        spd: 98,
        spe: 99
      },
      abilities: { first: 'Dark Aura' },
      heightm: 5.8,
      weightkg: 203,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'zygarde',
    {
      species: 'zygarde',
      num: 718,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 108,
        atk: 100,
        def: 121,
        spa: 81,
        spd: 95,
        spe: 95
      },
      baseForme: '50%',
      abilities: { first: 'Aura Break', special: 'Power Construct' },
      heightm: 5,
      weightkg: 305,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      otherFormes: ['zygarde10', 'zygardecomplete']
    }
  ],
  [
    'zygarde10',
    {
      species: 'Zygarde-10%',
      num: 718,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 54,
        atk: 100,
        def: 71,
        spa: 61,
        spd: 85,
        spe: 115
      },
      baseSpecies: 'Zygarde',
      forme: '10%',
      formeLetter: 'T',
      abilities: { first: 'Aura Break', special: 'Power Construct' },
      heightm: 1.2,
      weightkg: 33.5,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'zygardecomplete',
    {
      species: 'zygarde-complete',
      num: 718,
      types: ['Dragon', 'Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 216,
        atk: 100,
        def: 121,
        spa: 91,
        spd: 95,
        spe: 85
      },
      baseSpecies: 'Zygarde',
      forme: 'Complete',
      formeLetter: 'C',
      abilities: { first: 'Power Construct' },
      heightm: 4.5,
      weightkg: 610,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'diancie',
    {
      species: 'diancie',
      num: 719,
      types: ['Rock', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 100,
        def: 150,
        spa: 100,
        spd: 150,
        spe: 50
      },
      abilities: { first: 'Clear Body' },
      heightm: 0.7,
      weightkg: 8.8,
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      otherFormes: ['dianciemega']
    }
  ],
  [
    'dianciemega',
    {
      species: 'diancie-mega',
      num: 719,
      types: ['Rock', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 160,
        def: 110,
        spa: 160,
        spd: 110,
        spe: 110
      },
      baseSpecies: 'Diancie',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Magic Bounce' },
      heightm: 1.1,
      weightkg: 27.8,
      color: 'Pink',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'hoopa',
    {
      species: 'hoopa',
      num: 720,
      types: ['Psychic', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 110,
        def: 60,
        spa: 150,
        spd: 130,
        spe: 70
      },
      baseForme: 'Confined',
      abilities: { first: 'Magician' },
      heightm: 0.5,
      weightkg: 9,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      otherFormes: ['hoopaunbound']
    }
  ],
  [
    'hoopaunbound',
    {
      species: 'hoopa-unbound',
      num: 720,
      types: ['Psychic', 'Dark'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 160,
        def: 60,
        spa: 170,
        spd: 130,
        spe: 80
      },
      baseSpecies: 'Hoopa',
      forme: 'Unbound',
      formeLetter: 'U',
      abilities: { first: 'Magician' },
      heightm: 6.5,
      weightkg: 490,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'volcanion',
    {
      species: 'volcanion',
      num: 721,
      types: ['Fire', 'Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 110,
        def: 120,
        spa: 130,
        spd: 90,
        spe: 70
      },
      abilities: { first: 'Water Absorb' },
      heightm: 1.7,
      weightkg: 195,
      color: 'Brown',
      eggGroups: ['Undiscovered']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
