import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'rowlet',
    {
      species: 'rowlet',
      num: 722,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 68,
        atk: 55,
        def: 55,
        spa: 50,
        spd: 50,
        spe: 42
      },
      abilities: { first: 'Overgrow', hidden: 'Long Reach' },
      heightm: 0.3,
      weightkg: 1.5,
      color: 'Brown',
      evos: ['dartrix'],
      eggGroups: ['Flying']
    }
  ],
  [
    'dartrix',
    {
      species: 'dartrix',
      num: 723,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 75,
        def: 75,
        spa: 70,
        spd: 70,
        spe: 52
      },
      abilities: { first: 'Overgrow', hidden: 'Long Reach' },
      heightm: 0.7,
      weightkg: 16,
      color: 'Brown',
      prevo: 'rowlet',
      evos: ['decidueye'],
      evoLevel: 17,
      eggGroups: ['Flying']
    }
  ],
  [
    'decidueye',
    {
      species: 'decidueye',
      num: 724,
      types: ['Grass', 'Ghost'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 107,
        def: 75,
        spa: 100,
        spd: 100,
        spe: 70
      },
      abilities: { first: 'Overgrow', hidden: 'Long Reach' },
      heightm: 1.6,
      weightkg: 36.6,
      color: 'Brown',
      prevo: 'dartrix',
      evoLevel: 34,
      eggGroups: ['Flying']
    }
  ],
  [
    'litten',
    {
      species: 'litten',
      num: 725,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 45,
        atk: 65,
        def: 40,
        spa: 60,
        spd: 40,
        spe: 70
      },
      abilities: { first: 'Blaze', hidden: 'Intimidate' },
      heightm: 0.4,
      weightkg: 4.3,
      color: 'Red',
      evos: ['torracat'],
      eggGroups: ['Field']
    }
  ],
  [
    'torracat',
    {
      species: 'torracat',
      num: 726,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 85,
        def: 50,
        spa: 80,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Blaze', hidden: 'Intimidate' },
      heightm: 0.7,
      weightkg: 25,
      color: 'Red',
      prevo: 'litten',
      evos: ['incineroar'],
      evoLevel: 17,
      eggGroups: ['Field']
    }
  ],
  [
    'incineroar',
    {
      species: 'incineroar',
      num: 727,
      types: ['Fire', 'Dark'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 95,
        atk: 115,
        def: 90,
        spa: 80,
        spd: 90,
        spe: 60
      },
      abilities: { first: 'Blaze', hidden: 'Intimidate' },
      heightm: 1.8,
      weightkg: 83,
      color: 'Red',
      prevo: 'torracat',
      evoLevel: 34,
      eggGroups: ['Field']
    }
  ],
  [
    'popplio',
    {
      species: 'popplio',
      num: 728,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 54,
        def: 54,
        spa: 66,
        spd: 56,
        spe: 40
      },
      abilities: { first: 'Torrent', hidden: 'Liquid Voice' },
      heightm: 0.4,
      weightkg: 7.5,
      color: 'Blue',
      evos: ['brionne'],
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'brionne',
    {
      species: 'brionne',
      num: 729,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 69,
        def: 69,
        spa: 91,
        spd: 81,
        spe: 50
      },
      abilities: { first: 'Torrent', hidden: 'Liquid Voice' },
      heightm: 0.6,
      weightkg: 17.5,
      color: 'Blue',
      prevo: 'popplio',
      evos: ['primarina'],
      evoLevel: 17,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'primarina',
    {
      species: 'primarina',
      num: 730,
      types: ['Water', 'Fairy'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 74,
        def: 74,
        spa: 126,
        spd: 116,
        spe: 60
      },
      abilities: { first: 'Torrent', hidden: 'Liquid Voice' },
      heightm: 1.8,
      weightkg: 44,
      color: 'Blue',
      prevo: 'brionne',
      evoLevel: 34,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'pikipek',
    {
      species: 'pikipek',
      num: 731,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 75,
        def: 30,
        spa: 30,
        spd: 30,
        spe: 65
      },
      abilities: { first: 'Keen Eye', second: 'Skill Link', hidden: 'Pickup' },
      heightm: 0.3,
      weightkg: 1.2,
      color: 'Black',
      evos: ['trumbeak'],
      eggGroups: ['Flying']
    }
  ],
  [
    'trumbeak',
    {
      species: 'trumbeak',
      num: 732,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 85,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 75
      },
      abilities: { first: 'Keen Eye', second: 'Skill Link', hidden: 'Pickup' },
      heightm: 0.6,
      weightkg: 14.8,
      color: 'Black',
      prevo: 'pikipek',
      evos: ['toucannon'],
      evoLevel: 14,
      eggGroups: ['Flying']
    }
  ],
  [
    'toucannon',
    {
      species: 'toucannon',
      num: 733,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 120,
        def: 75,
        spa: 75,
        spd: 75,
        spe: 60
      },
      abilities: { first: 'Keen Eye', second: 'Skill Link', hidden: 'Sheer Force' },
      heightm: 1.1,
      weightkg: 26,
      color: 'Black',
      prevo: 'trumbeak',
      evoLevel: 28,
      eggGroups: ['Flying']
    }
  ],
  [
    'yungoos',
    {
      species: 'yungoos',
      num: 734,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 48,
        atk: 70,
        def: 30,
        spa: 30,
        spd: 30,
        spe: 45
      },
      abilities: { first: 'Stakeout', second: 'Strong Jaw', hidden: 'Adaptability' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Brown',
      evos: ['gumshoos'],
      eggGroups: ['Field']
    }
  ],
  [
    'gumshoos',
    {
      species: 'gumshoos',
      num: 735,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 88,
        atk: 110,
        def: 60,
        spa: 55,
        spd: 60,
        spe: 45
      },
      abilities: { first: 'Stakeout', second: 'Strong Jaw', hidden: 'Adaptability' },
      heightm: 0.7,
      weightkg: 14.2,
      color: 'Brown',
      prevo: 'yungoos',
      evoLevel: 20,
      eggGroups: ['Field'],
      otherFormes: ['gumshoostotem']
    }
  ],
  [
    'gumshoostotem',
    {
      species: 'gumshoos-totem',
      num: 735,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 88,
        atk: 110,
        def: 60,
        spa: 55,
        spd: 60,
        spe: 45
      },
      baseSpecies: 'Gumshoos',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Adaptability' },
      heightm: 1.4,
      weightkg: 60,
      color: 'Brown',
      eggGroups: ['Field']
    }
  ],
  [
    'grubbin',
    {
      species: 'grubbin',
      num: 736,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 47,
        atk: 62,
        def: 45,
        spa: 55,
        spd: 45,
        spe: 46
      },
      abilities: { first: 'Swarm' },
      heightm: 0.4,
      weightkg: 4.4,
      color: 'Gray',
      evos: ['charjabug'],
      eggGroups: ['Bug']
    }
  ],
  [
    'charjabug',
    {
      species: 'charjabug',
      num: 737,
      types: ['Bug', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 57,
        atk: 82,
        def: 95,
        spa: 55,
        spd: 75,
        spe: 36
      },
      abilities: { first: 'Battery' },
      heightm: 0.5,
      weightkg: 10.5,
      color: 'Green',
      prevo: 'grubbin',
      evos: ['vikavolt'],
      evoLevel: 20,
      eggGroups: ['Bug']
    }
  ],
  [
    'vikavolt',
    {
      species: 'vikavolt',
      num: 738,
      types: ['Bug', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 77,
        atk: 70,
        def: 90,
        spa: 145,
        spd: 75,
        spe: 43
      },
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 45,
      color: 'Blue',
      prevo: 'charjabug',
      evoLevel: 'Use Thunder Stone',
      eggGroups: ['Bug'],
      otherFormes: ['vikavolttotem']
    }
  ],
  [
    'vikavolttotem',
    {
      species: 'vikavolt-totem',
      num: 738,
      types: ['Bug', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 77,
        atk: 70,
        def: 90,
        spa: 145,
        spd: 75,
        spe: 43
      },
      baseSpecies: 'Vikavolt',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Levitate' },
      heightm: 2.6,
      weightkg: 147.5,
      color: 'Blue',
      eggGroups: ['Bug']
    }
  ],
  [
    'crabrawler',
    {
      species: 'crabrawler',
      num: 739,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 47,
        atk: 82,
        def: 57,
        spa: 42,
        spd: 47,
        spe: 63
      },
      abilities: { first: 'Hyper Cutter', second: 'Iron Fist', hidden: 'Anger Point' },
      heightm: 0.6,
      weightkg: 7,
      color: 'Purple',
      evos: ['crabominable'],
      eggGroups: ['Water 3']
    }
  ],
  [
    'crabominable',
    {
      species: 'crabominable',
      num: 740,
      types: ['Fighting', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 97,
        atk: 132,
        def: 77,
        spa: 62,
        spd: 67,
        spe: 43
      },
      abilities: { first: 'Hyper Cutter', second: 'Iron Fist', hidden: 'Anger Point' },
      heightm: 1.7,
      weightkg: 180,
      color: 'White',
      prevo: 'crabrawler',
      evoLevel: 'Level up in extreme cold',
      eggGroups: ['Water 3']
    }
  ],
  [
    'oricorio',
    {
      species: 'oricorio',
      num: 741,
      types: ['Fire', 'Flying'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 75,
        atk: 70,
        def: 70,
        spa: 98,
        spd: 70,
        spe: 93
      },
      baseForme: 'Baile',
      abilities: { first: 'Dancer' },
      heightm: 0.6,
      weightkg: 3.4,
      color: 'Red',
      eggGroups: ['Flying'],
      otherFormes: ['oricoriopompom', 'oricoriopau', 'oricoriosensu']
    }
  ],
  [
    'oricoriopompom',
    {
      species: 'oricorio-pom-pom',
      num: 741,
      types: ['Electric', 'Flying'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 75,
        atk: 70,
        def: 70,
        spa: 98,
        spd: 70,
        spe: 93
      },
      baseSpecies: 'Oricorio',
      forme: 'Pom-Pom',
      formeLetter: 'P',
      abilities: { first: 'Dancer' },
      heightm: 0.6,
      weightkg: 3.4,
      color: 'Yellow',
      eggGroups: ['Flying']
    }
  ],
  [
    'oricoriopau',
    {
      species: "oricorio-pa'u",
      num: 741,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 75,
        atk: 70,
        def: 70,
        spa: 98,
        spd: 70,
        spe: 93
      },
      baseSpecies: 'Oricorio',
      forme: "Pa'u",
      formeLetter: 'P',
      abilities: { first: 'Dancer' },
      heightm: 0.6,
      weightkg: 3.4,
      color: 'Pink',
      eggGroups: ['Flying']
    }
  ],
  [
    'oricoriosensu',
    {
      species: 'oricorio-sensu',
      num: 741,
      types: ['Ghost', 'Flying'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 75,
        atk: 70,
        def: 70,
        spa: 98,
        spd: 70,
        spe: 93
      },
      baseSpecies: 'Oricorio',
      forme: 'Sensu',
      formeLetter: 'S',
      abilities: { first: 'Dancer' },
      heightm: 0.6,
      weightkg: 3.4,
      color: 'Purple',
      eggGroups: ['Flying']
    }
  ],
  [
    'cutiefly',
    {
      species: 'cutiefly',
      num: 742,
      types: ['Bug', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 40,
        spa: 55,
        spd: 40,
        spe: 84
      },
      abilities: { first: 'Honey Gather', second: 'Shield Dust', hidden: 'Sweet Veil' },
      heightm: 0.1,
      weightkg: 0.2,
      color: 'Yellow',
      evos: ['ribombee'],
      eggGroups: ['Bug', 'Fairy']
    }
  ],
  [
    'ribombee',
    {
      species: 'ribombee',
      num: 743,
      types: ['Bug', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 55,
        def: 60,
        spa: 95,
        spd: 70,
        spe: 124
      },
      abilities: { first: 'Honey Gather', second: 'Shield Dust', hidden: 'Sweet Veil' },
      heightm: 0.2,
      weightkg: 0.5,
      color: 'Yellow',
      prevo: 'cutiefly',
      evoLevel: 25,
      eggGroups: ['Bug', 'Fairy'],
      otherFormes: ['ribombeetotem']
    }
  ],
  [
    'ribombeetotem',
    {
      species: 'ribombee-totem',
      num: 743,
      types: ['Bug', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 55,
        def: 60,
        spa: 95,
        spd: 70,
        spe: 124
      },
      baseSpecies: 'Ribombee',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Sweet Veil' },
      heightm: 0.4,
      weightkg: 2,
      color: 'Yellow',
      eggGroups: ['Bug', 'Fairy']
    }
  ],
  [
    'rockruff',
    {
      species: 'rockruff',
      num: 744,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 65,
        def: 40,
        spa: 30,
        spd: 40,
        spe: 60
      },
      baseForme: 'Midday',
      abilities: {
        first: 'Keen Eye',
        second: 'Vital Spirit',
        hidden: 'Steadfast',
        special: 'Own Tempo'
      },
      heightm: 0.5,
      weightkg: 9.2,
      color: 'Brown',
      evos: ['lycanroc', 'lycanrocmidnight', 'lycanrocdusk'],
      eggGroups: ['Field']
    }
  ],
  [
    'lycanroc',
    {
      species: 'lycanroc',
      num: 745,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 115,
        def: 65,
        spa: 55,
        spd: 65,
        spe: 112
      },
      baseForme: 'Midday',
      abilities: { first: 'Keen Eye', second: 'Sand Rush', hidden: 'Steadfast' },
      heightm: 0.8,
      weightkg: 25,
      color: 'Brown',
      prevo: 'rockruff',
      evoLevel: 'Level 25 during Daytime',
      eggGroups: ['Field'],
      otherFormes: ['lycanrocmidnight', 'lycanrocdusk']
    }
  ],
  [
    'lycanrocmidnight',
    {
      species: 'lycanroc-midnight',
      num: 745,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 115,
        def: 75,
        spa: 55,
        spd: 75,
        spe: 82
      },
      baseSpecies: 'Lycanroc',
      forme: 'Midnight',
      formeLetter: 'M',
      abilities: { first: 'Keen Eye', second: 'Vital Spirit', hidden: 'No Guard' },
      heightm: 1.1,
      weightkg: 25,
      color: 'Red',
      prevo: 'rockruff',
      evoLevel: 'Level 25 during Nightttime',
      eggGroups: ['Field']
    }
  ],
  [
    'lycanrocdusk',
    {
      species: 'lycanroc-dusk',
      num: 745,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 117,
        def: 65,
        spa: 55,
        spd: 65,
        spe: 110
      },
      baseSpecies: 'Lycanroc',
      forme: 'Dusk',
      formeLetter: 'D',
      abilities: { first: 'Tough Claws' },
      heightm: 0.8,
      weightkg: 25,
      color: 'Brown',
      prevo: 'rockruff',
      evoLevel: 'from a special Rockruff',
      eggGroups: ['Field']
    }
  ],
  [
    'wishiwashi',
    {
      species: 'wishiwashi',
      num: 746,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 20,
        def: 20,
        spa: 25,
        spd: 25,
        spe: 40
      },
      baseForme: 'Solo',
      abilities: { first: 'Schooling' },
      heightm: 0.2,
      weightkg: 0.3,
      color: 'Blue',
      eggGroups: ['Water 2'],
      otherFormes: ['wishiwashischool']
    }
  ],
  [
    'wishiwashischool',
    {
      species: 'wishiwashi-school',
      num: 746,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 140,
        def: 130,
        spa: 140,
        spd: 135,
        spe: 30
      },
      baseSpecies: 'Wishiwashi',
      forme: 'School',
      formeLetter: 'S',
      abilities: { first: 'Schooling' },
      heightm: 8.2,
      weightkg: 78.6,
      color: 'Blue',
      eggGroups: ['Water 2']
    }
  ],
  [
    'mareanie',
    {
      species: 'mareanie',
      num: 747,
      types: ['Poison', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 53,
        def: 62,
        spa: 43,
        spd: 52,
        spe: 45
      },
      abilities: { first: 'Merciless', second: 'Limber', hidden: 'Regenerator' },
      heightm: 0.4,
      weightkg: 8,
      color: 'Blue',
      evos: ['toxapex'],
      eggGroups: ['Water 1']
    }
  ],
  [
    'toxapex',
    {
      species: 'toxapex',
      num: 748,
      types: ['Poison', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 63,
        def: 152,
        spa: 53,
        spd: 142,
        spe: 35
      },
      abilities: { first: 'Merciless', second: 'Limber', hidden: 'Regenerator' },
      heightm: 0.7,
      weightkg: 14.5,
      color: 'Blue',
      prevo: 'mareanie',
      evoLevel: 38,
      eggGroups: ['Water 1']
    }
  ],
  [
    'mudbray',
    {
      species: 'mudbray',
      num: 749,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 100,
        def: 70,
        spa: 45,
        spd: 55,
        spe: 45
      },
      abilities: { first: 'Own Tempo', second: 'Stamina', hidden: 'Inner Focus' },
      heightm: 1,
      weightkg: 110,
      color: 'Brown',
      evos: ['mudsdale'],
      eggGroups: ['Field']
    }
  ],
  [
    'mudsdale',
    {
      species: 'mudsdale',
      num: 750,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 125,
        def: 100,
        spa: 55,
        spd: 85,
        spe: 35
      },
      abilities: { first: 'Own Tempo', second: 'Stamina', hidden: 'Inner Focus' },
      heightm: 2.5,
      weightkg: 920,
      color: 'Brown',
      prevo: 'mudbray',
      evoLevel: 30,
      eggGroups: ['Field']
    }
  ],
  [
    'dewpider',
    {
      species: 'dewpider',
      num: 751,
      types: ['Water', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 40,
        def: 52,
        spa: 40,
        spd: 72,
        spe: 27
      },
      abilities: { first: 'Water Bubble', hidden: 'Water Absorb' },
      heightm: 0.3,
      weightkg: 4,
      color: 'Green',
      evos: ['araquanid'],
      eggGroups: ['Water 1', 'Bug']
    }
  ],
  [
    'araquanid',
    {
      species: 'araquanid',
      num: 752,
      types: ['Water', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 70,
        def: 92,
        spa: 50,
        spd: 132,
        spe: 42
      },
      abilities: { first: 'Water Bubble', hidden: 'Water Absorb' },
      heightm: 1.8,
      weightkg: 82,
      color: 'Green',
      prevo: 'dewpider',
      evoLevel: 22,
      eggGroups: ['Water 1', 'Bug'],
      otherFormes: ['araquanidtotem']
    }
  ],
  [
    'araquanidtotem',
    {
      species: 'araquanid-totem',
      num: 752,
      types: ['Water', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 70,
        def: 92,
        spa: 50,
        spd: 132,
        spe: 42
      },
      baseSpecies: 'Araquanid',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Water Bubble' },
      heightm: 3.1,
      weightkg: 217.5,
      color: 'Green',
      eggGroups: ['Water 1', 'Bug']
    }
  ],
  [
    'fomantis',
    {
      species: 'fomantis',
      num: 753,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 55,
        def: 35,
        spa: 50,
        spd: 35,
        spe: 35
      },
      abilities: { first: 'Leaf Guard', hidden: 'Contrary' },
      heightm: 0.3,
      weightkg: 1.5,
      color: 'Pink',
      evos: ['lurantis'],
      eggGroups: ['Grass']
    }
  ],
  [
    'lurantis',
    {
      species: 'lurantis',
      num: 754,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 105,
        def: 90,
        spa: 80,
        spd: 90,
        spe: 45
      },
      abilities: { first: 'Leaf Guard', hidden: 'Contrary' },
      heightm: 0.9,
      weightkg: 18.5,
      color: 'Pink',
      prevo: 'fomantis',
      evoLevel: 34,
      eggGroups: ['Grass'],
      otherFormes: ['lurantistotem']
    }
  ],
  [
    'lurantistotem',
    {
      species: 'lurantis-totem',
      num: 754,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 105,
        def: 90,
        spa: 80,
        spd: 90,
        spe: 45
      },
      baseSpecies: 'Lurantis',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Leaf Guard' },
      heightm: 1.5,
      weightkg: 58,
      color: 'Pink',
      eggGroups: ['Grass']
    }
  ],
  [
    'morelull',
    {
      species: 'morelull',
      num: 755,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 35,
        def: 55,
        spa: 65,
        spd: 75,
        spe: 15
      },
      abilities: { first: 'Illuminate', second: 'Effect Spore', hidden: 'Rain Dish' },
      heightm: 0.2,
      weightkg: 1.5,
      color: 'Purple',
      evos: ['shiinotic'],
      eggGroups: ['Grass']
    }
  ],
  [
    'shiinotic',
    {
      species: 'shiinotic',
      num: 756,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 80,
        spa: 90,
        spd: 100,
        spe: 30
      },
      abilities: { first: 'Illuminate', second: 'Effect Spore', hidden: 'Rain Dish' },
      heightm: 1,
      weightkg: 11.5,
      color: 'Purple',
      prevo: 'morelull',
      evoLevel: 24,
      eggGroups: ['Grass']
    }
  ],
  [
    'salandit',
    {
      species: 'salandit',
      num: 757,
      types: ['Poison', 'Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 48,
        atk: 44,
        def: 40,
        spa: 71,
        spd: 40,
        spe: 77
      },
      abilities: { first: 'Corrosion', hidden: 'Oblivious' },
      heightm: 0.6,
      weightkg: 4.8,
      color: 'Black',
      evos: ['salazzle'],
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'salazzle',
    {
      species: 'salazzle',
      num: 758,
      types: ['Poison', 'Fire'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 68,
        atk: 64,
        def: 60,
        spa: 111,
        spd: 60,
        spe: 117
      },
      abilities: { first: 'Corrosion', hidden: 'Oblivious' },
      heightm: 1.2,
      weightkg: 22.2,
      color: 'Black',
      prevo: 'salandit',
      evoLevel: 'Level 33, Female only',
      eggGroups: ['Monster', 'Dragon'],
      otherFormes: ['salazzletotem']
    }
  ],
  [
    'salazzletotem',
    {
      species: 'salazzle-totem',
      num: 758,
      types: ['Poison', 'Fire'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 68,
        atk: 64,
        def: 60,
        spa: 111,
        spd: 60,
        spe: 117
      },
      baseSpecies: 'Salazzle',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Corrosion' },
      heightm: 2.1,
      weightkg: 81,
      color: 'Black',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'stufful',
    {
      species: 'stufful',
      num: 759,
      types: ['Normal', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 75,
        def: 50,
        spa: 45,
        spd: 50,
        spe: 50
      },
      abilities: { first: 'Fluffy', second: 'Klutz', hidden: 'Cute Charm' },
      heightm: 0.5,
      weightkg: 6.8,
      color: 'Pink',
      evos: ['bewear'],
      eggGroups: ['Field']
    }
  ],
  [
    'bewear',
    {
      species: 'bewear',
      num: 760,
      types: ['Normal', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 120,
        atk: 125,
        def: 80,
        spa: 55,
        spd: 60,
        spe: 60
      },
      abilities: { first: 'Fluffy', second: 'Klutz', hidden: 'Unnerve' },
      heightm: 2.1,
      weightkg: 135,
      color: 'Pink',
      prevo: 'stufful',
      evoLevel: 27,
      eggGroups: ['Field']
    }
  ],
  [
    'bounsweet',
    {
      species: 'bounsweet',
      num: 761,
      types: ['Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 42,
        atk: 30,
        def: 38,
        spa: 30,
        spd: 38,
        spe: 32
      },
      abilities: { first: 'Leaf Guard', second: 'Oblivious', hidden: 'Sweet Veil' },
      heightm: 0.3,
      weightkg: 3.2,
      color: 'Purple',
      evos: ['steenee'],
      eggGroups: ['Grass']
    }
  ],
  [
    'steenee',
    {
      species: 'steenee',
      num: 762,
      types: ['Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 52,
        atk: 40,
        def: 48,
        spa: 40,
        spd: 48,
        spe: 62
      },
      abilities: { first: 'Leaf Guard', second: 'Oblivious', hidden: 'Sweet Veil' },
      heightm: 0.7,
      weightkg: 8.2,
      color: 'Purple',
      prevo: 'bounsweet',
      evos: ['tsareena'],
      evoLevel: 18,
      eggGroups: ['Grass']
    }
  ],
  [
    'tsareena',
    {
      species: 'tsareena',
      num: 763,
      types: ['Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 72,
        atk: 120,
        def: 98,
        spa: 50,
        spd: 98,
        spe: 72
      },
      abilities: { first: 'Leaf Guard', second: 'Queenly Majesty', hidden: 'Sweet Veil' },
      heightm: 1.2,
      weightkg: 21.4,
      color: 'Purple',
      prevo: 'steenee',
      evoLevel: 'Level 19 while knowing Stomp',
      eggGroups: ['Grass']
    }
  ],
  [
    'comfey',
    {
      species: 'comfey',
      num: 764,
      types: ['Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 51,
        atk: 52,
        def: 90,
        spa: 82,
        spd: 110,
        spe: 100
      },
      abilities: { first: 'Flower Veil', second: 'Triage', hidden: 'Natural Cure' },
      heightm: 0.1,
      weightkg: 0.3,
      color: 'Green',
      eggGroups: ['Grass']
    }
  ],
  [
    'oranguru',
    {
      species: 'oranguru',
      num: 765,
      types: ['Normal', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 60,
        def: 80,
        spa: 90,
        spd: 110,
        spe: 60
      },
      abilities: { first: 'Inner Focus', second: 'Telepathy', hidden: 'Symbiosis' },
      heightm: 1.5,
      weightkg: 76,
      color: 'White',
      eggGroups: ['Field']
    }
  ],
  [
    'passimian',
    {
      species: 'passimian',
      num: 766,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 120,
        def: 90,
        spa: 40,
        spd: 60,
        spe: 80
      },
      abilities: { first: 'Receiver', hidden: 'Defiant' },
      heightm: 2,
      weightkg: 82.8,
      color: 'White',
      eggGroups: ['Field']
    }
  ],
  [
    'wimpod',
    {
      species: 'wimpod',
      num: 767,
      types: ['Bug', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 25,
        atk: 35,
        def: 40,
        spa: 20,
        spd: 30,
        spe: 80
      },
      abilities: { first: 'Wimp Out' },
      heightm: 0.5,
      weightkg: 12,
      color: 'Gray',
      evos: ['golisopod'],
      eggGroups: ['Bug', 'Water 3']
    }
  ],
  [
    'golisopod',
    {
      species: 'golisopod',
      num: 768,
      types: ['Bug', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 125,
        def: 140,
        spa: 60,
        spd: 90,
        spe: 40
      },
      abilities: { first: 'Emergency Exit' },
      heightm: 2,
      weightkg: 108,
      color: 'Gray',
      prevo: 'wimpod',
      evoLevel: 30,
      eggGroups: ['Bug', 'Water 3']
    }
  ],
  [
    'sandygast',
    {
      species: 'sandygast',
      num: 769,
      types: ['Ghost', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 55,
        def: 80,
        spa: 70,
        spd: 45,
        spe: 15
      },
      abilities: { first: 'Water Compaction', hidden: 'Sand Veil' },
      heightm: 0.5,
      weightkg: 70,
      color: 'Brown',
      evos: ['palossand'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'palossand',
    {
      species: 'palossand',
      num: 770,
      types: ['Ghost', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 75,
        def: 110,
        spa: 100,
        spd: 75,
        spe: 35
      },
      abilities: { first: 'Water Compaction', hidden: 'Sand Veil' },
      heightm: 1.3,
      weightkg: 250,
      color: 'Brown',
      prevo: 'sandygast',
      evoLevel: 42,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'pyukumuku',
    {
      species: 'pyukumuku',
      num: 771,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 60,
        def: 130,
        spa: 30,
        spd: 130,
        spe: 5
      },
      abilities: { first: 'Innards Out', hidden: 'Unaware' },
      heightm: 0.3,
      weightkg: 1.2,
      color: 'Black',
      eggGroups: ['Water 1']
    }
  ],
  [
    'typenull',
    {
      species: 'Type: Null',
      baseForme: 'Type: Null',
      num: 772,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 59
      },
      abilities: { first: 'Battle Armor' },
      heightm: 1.9,
      weightkg: 120.5,
      color: 'Gray',
      evos: ['silvally'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvally',
    {
      species: 'silvally',
      num: 773,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Undiscovered'],
      otherFormes: [
        'silvallybug',
        'silvallydark',
        'silvallydragon',
        'silvallyelectric',
        'silvallyfairy',
        'silvallyfighting',
        'silvallyfire',
        'silvallyflying',
        'silvallyghost',
        'silvallygrass',
        'silvallyground',
        'silvallyice',
        'silvallypoison',
        'silvallypsychic',
        'silvallyrock',
        'silvallysteel',
        'silvallywater'
      ]
    }
  ],
  [
    'silvallybug',
    {
      species: 'silvally-bug',
      num: 773,
      types: ['Bug'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Bug',
      formeLetter: 'B',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallydark',
    {
      species: 'silvally-dark',
      num: 773,
      types: ['Dark'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Dark',
      formeLetter: 'D',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallydragon',
    {
      species: 'silvally-dragon',
      num: 773,
      types: ['Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Dragon',
      formeLetter: 'D',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyelectric',
    {
      species: 'silvally-electric',
      num: 773,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Electric',
      formeLetter: 'E',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyfairy',
    {
      species: 'silvally-fairy',
      num: 773,
      types: ['Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Fairy',
      formeLetter: 'F',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyfighting',
    {
      species: 'silvally-fighting',
      num: 773,
      types: ['Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Fighting',
      formeLetter: 'F',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyfire',
    {
      species: 'silvally-fire',
      num: 773,
      types: ['Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Fire',
      formeLetter: 'F',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyflying',
    {
      species: 'silvally-flying',
      num: 773,
      types: ['Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Flying',
      formeLetter: 'F',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyghost',
    {
      species: 'silvally-ghost',
      num: 773,
      types: ['Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Ghost',
      formeLetter: 'G',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallygrass',
    {
      species: 'silvally-grass',
      num: 773,
      types: ['Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Grass',
      formeLetter: 'G',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyground',
    {
      species: 'silvally-ground',
      num: 773,
      types: ['Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Ground',
      formeLetter: 'G',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyice',
    {
      species: 'silvally-ice',
      num: 773,
      types: ['Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Ice',
      formeLetter: 'I',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallypoison',
    {
      species: 'silvally-poison',
      num: 773,
      types: ['Poison'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Poison',
      formeLetter: 'P',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallypsychic',
    {
      species: 'silvally-psychic',
      num: 773,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Psychic',
      formeLetter: 'P',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallyrock',
    {
      species: 'silvally-rock',
      num: 773,
      types: ['Rock'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Rock',
      formeLetter: 'R',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallysteel',
    {
      species: 'silvally-steel',
      num: 773,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Steel',
      formeLetter: 'S',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'silvallywater',
    {
      species: 'silvally-water',
      num: 773,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 95
      },
      baseSpecies: 'Silvally',
      forme: 'Water',
      formeLetter: 'W',
      abilities: { first: 'RKS System' },
      heightm: 2.3,
      weightkg: 100.5,
      color: 'Gray',
      prevo: 'typenull',
      evoLevel: 2,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'minior',
    {
      species: 'minior',
      num: 774,
      types: ['Rock', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 100,
        def: 60,
        spa: 100,
        spd: 60,
        spe: 120
      },
      baseForme: 'Red',
      abilities: { first: 'Shields Down' },
      heightm: 0.3,
      weightkg: 0.3,
      color: 'Red',
      eggGroups: ['Mineral'],
      cosmeticFormes: ['Minior-Orange', 'Minior-Yellow', 'Minior-Green', 'Minior-Blue', 'Minior-Indigo', 'Minior-Violet']
    }
  ],
  [
    'miniormeteor',
    {
      species: 'minior-meteor',
      num: 774,
      types: ['Rock', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 100,
        spa: 60,
        spd: 100,
        spe: 60
      },
      baseSpecies: 'Minior',
      forme: 'Meteor',
      formeLetter: 'M',
      abilities: { first: 'Shields Down' },
      heightm: 0.3,
      weightkg: 40,
      color: 'Brown',
      eggGroups: ['Mineral']
    }
  ],
  [
    'komala',
    {
      species: 'komala',
      num: 775,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 115,
        def: 65,
        spa: 75,
        spd: 95,
        spe: 65
      },
      abilities: { first: 'Comatose' },
      heightm: 0.4,
      weightkg: 19.9,
      color: 'Blue',
      eggGroups: ['Field']
    }
  ],
  [
    'turtonator',
    {
      species: 'turtonator',
      num: 776,
      types: ['Fire', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 78,
        def: 135,
        spa: 91,
        spd: 85,
        spe: 36
      },
      abilities: { first: 'Shell Armor' },
      heightm: 2,
      weightkg: 212,
      color: 'Red',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'togedemaru',
    {
      species: 'togedemaru',
      num: 777,
      types: ['Electric', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 98,
        def: 63,
        spa: 40,
        spd: 73,
        spe: 96
      },
      abilities: { first: 'Iron Barbs', second: 'Lightning Rod', hidden: 'Sturdy' },
      heightm: 0.3,
      weightkg: 3.3,
      color: 'Gray',
      eggGroups: ['Field', 'Fairy'],
      otherFormes: ['togedemarutotem']
    }
  ],
  [
    'togedemarutotem',
    {
      species: 'togedemaru-totem',
      num: 777,
      types: ['Electric', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 98,
        def: 63,
        spa: 40,
        spd: 73,
        spe: 96
      },
      baseSpecies: 'Togedemaru',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Sturdy' },
      heightm: 0.6,
      weightkg: 13,
      color: 'Gray',
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'mimikyu',
    {
      species: 'mimikyu',
      num: 778,
      types: ['Ghost', 'Fairy'],
      baseForme: 'Disguised',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 90,
        def: 80,
        spa: 50,
        spd: 105,
        spe: 96
      },
      abilities: { first: 'Disguise' },
      heightm: 0.2,
      weightkg: 0.7,
      color: 'Yellow',
      eggGroups: ['Amorphous'],
      otherFormes: ['mimikyubusted', 'mimikyutotem', 'mimikyubustedtotem']
    }
  ],
  [
    'mimikyubusted',
    {
      species: 'mimikyu-busted',
      num: 778,
      types: ['Ghost', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 90,
        def: 80,
        spa: 50,
        spd: 105,
        spe: 96
      },
      baseSpecies: 'Mimikyu',
      forme: 'Busted',
      formeLetter: 'B',
      abilities: { first: 'Disguise' },
      heightm: 0.2,
      weightkg: 0.7,
      color: 'Yellow',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'mimikyutotem',
    {
      species: 'mimikyu-totem',
      num: 778,
      types: ['Ghost', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 90,
        def: 80,
        spa: 50,
        spd: 105,
        spe: 96
      },
      baseSpecies: 'Mimikyu',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Disguise' },
      heightm: 0.4,
      weightkg: 2.8,
      color: 'Yellow',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'mimikyubustedtotem',
    {
      species: 'mimikyu-busted-totem',
      num: 778,
      types: ['Ghost', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 90,
        def: 80,
        spa: 50,
        spd: 105,
        spe: 96
      },
      baseSpecies: 'Mimikyu',
      forme: 'Busted-Totem',
      formeLetter: 'T',
      abilities: { first: 'Disguise' },
      heightm: 0.4,
      weightkg: 2.8,
      color: 'Yellow',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'bruxish',
    {
      species: 'bruxish',
      num: 779,
      types: ['Water', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 105,
        def: 70,
        spa: 70,
        spd: 70,
        spe: 92
      },
      abilities: { first: 'Dazzling', second: 'Strong Jaw', hidden: 'Wonder Skin' },
      heightm: 0.9,
      weightkg: 19,
      color: 'Pink',
      eggGroups: ['Water 2']
    }
  ],
  [
    'drampa',
    {
      species: 'drampa',
      num: 780,
      types: ['Normal', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 78,
        atk: 60,
        def: 85,
        spa: 135,
        spd: 91,
        spe: 36
      },
      abilities: { first: 'Berserk', second: 'Sap Sipper', hidden: 'Cloud Nine' },
      heightm: 3,
      weightkg: 185,
      color: 'White',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'dhelmise',
    {
      species: 'dhelmise',
      num: 781,
      types: ['Ghost', 'Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 131,
        def: 100,
        spa: 86,
        spd: 90,
        spe: 40
      },
      abilities: { first: 'Steelworker' },
      heightm: 3.9,
      weightkg: 210,
      color: 'Green',
      eggGroups: ['Mineral']
    }
  ],
  [
    'jangmoo',
    {
      species: 'jangmoo',
      num: 782,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 55,
        def: 65,
        spa: 45,
        spd: 45,
        spe: 45
      },
      abilities: { first: 'Bulletproof', second: 'Soundproof', hidden: 'Overcoat' },
      heightm: 0.6,
      weightkg: 29.7,
      color: 'Gray',
      evos: ['hakamoo'],
      eggGroups: ['Dragon']
    }
  ],
  [
    'hakamoo',
    {
      species: 'hakamo-o',
      num: 783,
      types: ['Dragon', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 75,
        def: 90,
        spa: 65,
        spd: 70,
        spe: 65
      },
      abilities: { first: 'Bulletproof', second: 'Soundproof', hidden: 'Overcoat' },
      heightm: 1.2,
      weightkg: 47,
      color: 'Gray',
      prevo: 'jangmoo',
      evos: ['kommoo'],
      evoLevel: 35,
      eggGroups: ['Dragon']
    }
  ],
  [
    'kommoo',
    {
      species: 'kommo-o',
      num: 784,
      types: ['Dragon', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 110,
        def: 125,
        spa: 100,
        spd: 105,
        spe: 85
      },
      abilities: { first: 'Bulletproof', second: 'Soundproof', hidden: 'Overcoat' },
      heightm: 1.6,
      weightkg: 78.2,
      color: 'Gray',
      prevo: 'hakamoo',
      evoLevel: 45,
      eggGroups: ['Dragon'],
      otherFormes: ['kommoototem']
    }
  ],
  [
    'kommoototem',
    {
      species: 'kommo-o-totem',
      num: 784,
      types: ['Dragon', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 110,
        def: 125,
        spa: 100,
        spd: 105,
        spe: 85
      },
      baseSpecies: 'Kommo-o',
      forme: 'Totem',
      formeLetter: 'T',
      abilities: { first: 'Overcoat' },
      heightm: 2.4,
      weightkg: 207.5,
      color: 'Gray',
      eggGroups: ['Dragon']
    }
  ],
  [
    'tapukoko',
    {
      species: 'Tapu Koko',
      num: 785,
      types: ['Electric', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 115,
        def: 85,
        spa: 95,
        spd: 75,
        spe: 130
      },
      abilities: { first: 'Electric Surge', hidden: 'Telepathy' },
      heightm: 1.8,
      weightkg: 20.5,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'tapulele',
    {
      species: 'Tapu Lele',
      num: 786,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 75,
        spa: 130,
        spd: 115,
        spe: 95
      },
      abilities: { first: 'Psychic Surge', hidden: 'Telepathy' },
      heightm: 1.2,
      weightkg: 18.6,
      color: 'Pink',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'tapubulu',
    {
      species: 'Tapu Bulu',
      num: 787,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 130,
        def: 115,
        spa: 85,
        spd: 95,
        spe: 75
      },
      abilities: { first: 'Grassy Surge', hidden: 'Telepathy' },
      heightm: 1.9,
      weightkg: 45.5,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'tapufini',
    {
      species: 'Tapu Fini',
      num: 788,
      types: ['Water', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 75,
        def: 115,
        spa: 95,
        spd: 130,
        spe: 85
      },
      abilities: { first: 'Misty Surge', hidden: 'Telepathy' },
      heightm: 1.3,
      weightkg: 21.2,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'cosmog',
    {
      species: 'cosmog',
      num: 789,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 43,
        atk: 29,
        def: 31,
        spa: 29,
        spd: 31,
        spe: 37
      },
      abilities: { first: 'Unaware' },
      heightm: 0.2,
      weightkg: 0.1,
      color: 'Blue',
      evos: ['cosmoem'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'cosmoem',
    {
      species: 'cosmoem',
      num: 790,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 43,
        atk: 29,
        def: 131,
        spa: 29,
        spd: 131,
        spe: 37
      },
      abilities: { first: 'Sturdy' },
      heightm: 0.1,
      weightkg: 999.9,
      color: 'Blue',
      prevo: 'cosmog',
      evos: ['solgaleo', 'lunala'],
      evoLevel: 43,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'solgaleo',
    {
      species: 'solgaleo',
      num: 791,
      types: ['Psychic', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 137,
        atk: 137,
        def: 107,
        spa: 113,
        spd: 89,
        spe: 97
      },
      abilities: { first: 'Full Metal Body' },
      heightm: 3.4,
      weightkg: 230,
      color: 'White',
      prevo: 'cosmoem',
      evoLevel: 53,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'lunala',
    {
      species: 'lunala',
      num: 792,
      types: ['Psychic', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 137,
        atk: 113,
        def: 89,
        spa: 137,
        spd: 107,
        spe: 97
      },
      abilities: { first: 'Shadow Shield' },
      heightm: 4,
      weightkg: 120,
      color: 'Purple',
      prevo: 'cosmoem',
      evoLevel: 53,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'nihilego',
    {
      species: 'nihilego',
      num: 793,
      types: ['Rock', 'Poison'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 109,
        atk: 53,
        def: 47,
        spa: 127,
        spd: 131,
        spe: 103
      },
      abilities: { first: 'Beast Boost' },
      heightm: 1.2,
      weightkg: 55.5,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'buzzwole',
    {
      species: 'buzzwole',
      num: 794,
      types: ['Bug', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 107,
        atk: 139,
        def: 139,
        spa: 53,
        spd: 53,
        spe: 79
      },
      abilities: { first: 'Beast Boost' },
      heightm: 2.4,
      weightkg: 333.6,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'pheromosa',
    {
      species: 'pheromosa',
      num: 795,
      types: ['Bug', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 71,
        atk: 137,
        def: 37,
        spa: 137,
        spd: 37,
        spe: 151
      },
      abilities: { first: 'Beast Boost' },
      heightm: 1.8,
      weightkg: 25,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'xurkitree',
    {
      species: 'xurkitree',
      num: 796,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 83,
        atk: 89,
        def: 71,
        spa: 173,
        spd: 71,
        spe: 83
      },
      abilities: { first: 'Beast Boost' },
      heightm: 3.8,
      weightkg: 100,
      color: 'Black',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'celesteela',
    {
      species: 'celesteela',
      num: 797,
      types: ['Steel', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 97,
        atk: 101,
        def: 103,
        spa: 107,
        spd: 101,
        spe: 61
      },
      abilities: { first: 'Beast Boost' },
      heightm: 9.2,
      weightkg: 999.9,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'kartana',
    {
      species: 'kartana',
      num: 798,
      types: ['Grass', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 59,
        atk: 181,
        def: 131,
        spa: 59,
        spd: 31,
        spe: 109
      },
      abilities: { first: 'Beast Boost' },
      heightm: 0.3,
      weightkg: 0.1,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'guzzlord',
    {
      species: 'guzzlord',
      num: 799,
      types: ['Dark', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 223,
        atk: 101,
        def: 53,
        spa: 97,
        spd: 53,
        spe: 43
      },
      abilities: { first: 'Beast Boost' },
      heightm: 5.5,
      weightkg: 888,
      color: 'Black',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'necrozma',
    {
      species: 'necrozma',
      num: 800,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 97,
        atk: 107,
        def: 101,
        spa: 127,
        spd: 89,
        spe: 79
      },
      abilities: { first: 'Prism Armor' },
      heightm: 2.4,
      weightkg: 230,
      color: 'Black',
      eggGroups: ['Undiscovered'],
      otherFormes: ['necrozmaduskmane', 'necrozmadawnwings', 'necrozmaultra']
    }
  ],
  [
    'necrozmaduskmane',
    {
      species: 'necrozma-dusk-mane',
      num: 800,
      types: ['Psychic', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 97,
        atk: 157,
        def: 127,
        spa: 113,
        spd: 109,
        spe: 77
      },
      baseSpecies: 'Necrozma',
      forme: 'Dusk-Mane',
      formeLetter: 'D',
      abilities: { first: 'Prism Armor' },
      heightm: 3.8,
      weightkg: 460,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'necrozmadawnwings',
    {
      species: 'necrozma-dawn-wings',
      num: 800,
      types: ['Psychic', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 97,
        atk: 113,
        def: 109,
        spa: 157,
        spd: 127,
        spe: 77
      },
      baseSpecies: 'Necrozma',
      forme: 'Dawn-Wings',
      formeLetter: 'D',
      abilities: { first: 'Prism Armor' },
      heightm: 4.2,
      weightkg: 350,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'necrozmaultra',
    {
      species: 'necrozma-ultra',
      num: 800,
      types: ['Psychic', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 97,
        atk: 167,
        def: 97,
        spa: 167,
        spd: 97,
        spe: 129
      },
      baseSpecies: 'Necrozma',
      forme: 'Ultra',
      formeLetter: 'U',
      abilities: { first: 'Neuroforce' },
      heightm: 7.5,
      weightkg: 230,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'magearna',
    {
      species: 'magearna',
      num: 801,
      types: ['Steel', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 95,
        def: 115,
        spa: 130,
        spd: 115,
        spe: 65
      },
      abilities: { first: 'Soul-Heart' },
      heightm: 1,
      weightkg: 80.5,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      otherFormes: ['magearnaoriginal']
    }
  ],
  [
    'magearnaoriginal',
    {
      species: 'magearna-original',
      num: 801,
      types: ['Steel', 'Fairy'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 95,
        def: 115,
        spa: 130,
        spd: 115,
        spe: 65
      },
      baseSpecies: 'Magearna',
      forme: 'Original',
      formeLetter: 'O',
      abilities: { first: 'Soul-Heart' },
      heightm: 1,
      weightkg: 80.5,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'marshadow',
    {
      species: 'marshadow',
      num: 802,
      types: ['Fighting', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 125,
        def: 80,
        spa: 90,
        spd: 90,
        spe: 125
      },
      abilities: { first: 'Technician' },
      heightm: 0.7,
      weightkg: 22.2,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'poipole',
    {
      species: 'poipole',
      num: 803,
      types: ['Poison'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 67,
        atk: 73,
        def: 67,
        spa: 73,
        spd: 67,
        spe: 73
      },
      abilities: { first: 'Beast Boost' },
      heightm: 0.6,
      weightkg: 1.8,
      color: 'Purple',
      evos: ['naganadel'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'naganadel',
    {
      species: 'naganadel',
      num: 804,
      types: ['Poison', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 73,
        atk: 73,
        def: 73,
        spa: 127,
        spd: 73,
        spe: 121
      },
      abilities: { first: 'Beast Boost' },
      heightm: 3.6,
      weightkg: 150,
      color: 'Purple',
      prevo: 'poipole',
      evoLevel: 41,
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'stakataka',
    {
      species: 'stakataka',
      num: 805,
      types: ['Rock', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 61,
        atk: 131,
        def: 211,
        spa: 53,
        spd: 101,
        spe: 13
      },
      abilities: { first: 'Beast Boost' },
      heightm: 5.5,
      weightkg: 820,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'blacephalon',
    {
      species: 'blacephalon',
      num: 806,
      types: ['Fire', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 53,
        atk: 127,
        def: 53,
        spa: 151,
        spd: 79,
        spe: 107
      },
      abilities: { first: 'Beast Boost' },
      heightm: 1.8,
      weightkg: 13,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'zeraora',
    {
      species: 'zeraora',
      num: 807,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 88,
        atk: 112,
        def: 75,
        spa: 102,
        spd: 80,
        spe: 143
      },
      abilities: { first: 'Volt Absorb' },
      heightm: 1.5,
      weightkg: 44.5,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'meltan',
    {
      species: 'meltan',
      num: 808,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 46,
        atk: 65,
        def: 65,
        spa: 55,
        spd: 35,
        spe: 34
      },
      abilities: { first: 'Magnet Pull' },
      heightm: 0.2,
      weightkg: 8,
      color: 'Gray',
      evos: ['melmetal'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'melmetal',
    {
      species: 'melmetal',
      num: 809,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 135,
        atk: 143,
        def: 143,
        spa: 80,
        spd: 65,
        spe: 34
      },
      abilities: { first: 'Iron Fist' },
      heightm: 2.5,
      weightkg: 800,
      color: 'Gray',
      prevo: 'meltan',
      evoLevel: 'feed 400 Meltan Candy in Pokémon GO',
      eggGroups: ['Undiscovered'],
      otherFormes: ['melmetalgmax']
    }
  ],
  [
    'melmetalgmax',
    {
      species: 'melmetal-gmax',
      baseSpecies: 'Melmetal',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 809,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 135,
        atk: 143,
        def: 143,
        spa: 80,
        spd: 65,
        spe: 34
      },
      abilities: { first: 'Iron Fist' },
      heightm: 20,
      weightkg: 1000,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
