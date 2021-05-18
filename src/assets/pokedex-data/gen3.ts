import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'treecko',
    {
      species: 'treecko',
      num: 252,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 35,
        spa: 65,
        spd: 55,
        spe: 70
      },
      abilities: { first: 'Overgrow', hidden: 'Unburden' },
      heightm: 0.5,
      weightkg: 5,
      color: 'Green',
      evos: ['grovyle'],
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'grovyle',
    {
      species: 'grovyle',
      num: 253,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 45,
        spa: 85,
        spd: 65,
        spe: 95
      },
      abilities: { first: 'Overgrow', hidden: 'Unburden' },
      heightm: 0.9,
      weightkg: 21.6,
      color: 'Green',
      prevo: 'treecko',
      evos: ['sceptile'],
      evoLevel: 16,
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'sceptile',
    {
      species: 'sceptile',
      num: 254,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 65,
        spa: 105,
        spd: 85,
        spe: 120
      },
      abilities: { first: 'Overgrow', hidden: 'Unburden' },
      heightm: 1.7,
      weightkg: 52.2,
      color: 'Green',
      prevo: 'grovyle',
      evoLevel: 36,
      eggGroups: ['Monster', 'Dragon'],
      otherFormes: ['sceptilemega']
    }
  ],
  [
    'sceptilemega',
    {
      species: 'sceptile-mega',
      num: 254,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 75,
        spa: 145,
        spd: 85,
        spe: 145
      },
      baseSpecies: 'Sceptile',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Lightning Rod' },
      heightm: 1.9,
      weightkg: 55.2,
      color: 'Green',
      eggGroups: ['Monster', 'Dragon']
    }
  ],
  [
    'torchic',
    {
      species: 'torchic',
      num: 255,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 45,
        atk: 60,
        def: 40,
        spa: 70,
        spd: 50,
        spe: 45
      },
      abilities: { first: 'Blaze', hidden: 'Speed Boost' },
      heightm: 0.4,
      weightkg: 2.5,
      color: 'Red',
      evos: ['combusken'],
      eggGroups: ['Field']
    }
  ],
  [
    'combusken',
    {
      species: 'combusken',
      num: 256,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 60,
        spa: 85,
        spd: 60,
        spe: 55
      },
      abilities: { first: 'Blaze', hidden: 'Speed Boost' },
      heightm: 0.9,
      weightkg: 19.5,
      color: 'Red',
      prevo: 'torchic',
      evos: ['blaziken'],
      evoLevel: 16,
      eggGroups: ['Field']
    }
  ],
  [
    'blaziken',
    {
      species: 'blaziken',
      num: 257,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 120,
        def: 70,
        spa: 110,
        spd: 70,
        spe: 80
      },
      abilities: { first: 'Blaze', hidden: 'Speed Boost' },
      heightm: 1.9,
      weightkg: 52,
      color: 'Red',
      prevo: 'combusken',
      evoLevel: 36,
      eggGroups: ['Field'],
      otherFormes: ['blazikenmega']
    }
  ],
  [
    'blazikenmega',
    {
      species: 'blaziken-mega',
      num: 257,
      types: ['Fire', 'Fighting'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 160,
        def: 80,
        spa: 130,
        spd: 80,
        spe: 100
      },
      baseSpecies: 'Blaziken',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Speed Boost' },
      heightm: 1.9,
      weightkg: 52,
      color: 'Red',
      eggGroups: ['Field']
    }
  ],
  [
    'mudkip',
    {
      species: 'mudkip',
      num: 258,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 70,
        def: 50,
        spa: 50,
        spd: 50,
        spe: 40
      },
      abilities: { first: 'Torrent', hidden: 'Damp' },
      heightm: 0.4,
      weightkg: 7.6,
      color: 'Blue',
      evos: ['marshtomp'],
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'marshtomp',
    {
      species: 'marshtomp',
      num: 259,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 70,
        spa: 60,
        spd: 70,
        spe: 50
      },
      abilities: { first: 'Torrent', hidden: 'Damp' },
      heightm: 0.7,
      weightkg: 28,
      color: 'Blue',
      prevo: 'mudkip',
      evos: ['swampert'],
      evoLevel: 16,
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'swampert',
    {
      species: 'swampert',
      num: 260,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 110,
        def: 90,
        spa: 85,
        spd: 90,
        spe: 60
      },
      abilities: { first: 'Torrent', hidden: 'Damp' },
      heightm: 1.5,
      weightkg: 81.9,
      color: 'Blue',
      prevo: 'marshtomp',
      evoLevel: 36,
      eggGroups: ['Monster', 'Water 1'],
      otherFormes: ['swampertmega']
    }
  ],
  [
    'swampertmega',
    {
      species: 'swampert-mega',
      num: 260,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 150,
        def: 110,
        spa: 95,
        spd: 110,
        spe: 70
      },
      baseSpecies: 'Swampert',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Swift Swim' },
      heightm: 1.9,
      weightkg: 102,
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'poochyena',
    {
      species: 'poochyena',
      num: 261,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 35,
        spa: 30,
        spd: 30,
        spe: 35
      },
      abilities: { first: 'Run Away', second: 'Quick Feet', hidden: 'Rattled' },
      heightm: 0.5,
      weightkg: 13.6,
      color: 'Gray',
      evos: ['mightyena'],
      eggGroups: ['Field']
    }
  ],
  [
    'mightyena',
    {
      species: 'mightyena',
      num: 262,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 90,
        def: 70,
        spa: 60,
        spd: 60,
        spe: 70
      },
      abilities: { first: 'Intimidate', second: 'Quick Feet', hidden: 'Moxie' },
      heightm: 1,
      weightkg: 37,
      color: 'Gray',
      prevo: 'poochyena',
      evoLevel: 18,
      eggGroups: ['Field']
    }
  ],
  [
    'zigzagoon',
    {
      species: 'zigzagoon',
      num: 263,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 30,
        def: 41,
        spa: 30,
        spd: 41,
        spe: 60
      },
      abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
      heightm: 0.4,
      weightkg: 17.5,
      color: 'Brown',
      evos: ['linoone'],
      eggGroups: ['Field'],
      otherFormes: ['zigzagoongalar']
    }
  ],
  [
    'zigzagoongalar',
    {
      species: 'zigzagoon-galar',
      num: 263,
      types: ['Dark', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Zigzagoon',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 38,
        atk: 30,
        def: 41,
        spa: 30,
        spd: 41,
        spe: 60
      },
      abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
      heightm: 0.4,
      weightkg: 17.5,
      color: 'White',
      evos: ['linoonegalar'],
      eggGroups: ['Field']
    }
  ],
  [
    'linoone',
    {
      species: 'linoone',
      num: 264,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 78,
        atk: 70,
        def: 61,
        spa: 50,
        spd: 61,
        spe: 100
      },
      abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
      heightm: 0.5,
      weightkg: 32.5,
      color: 'White',
      prevo: 'zigzagoon',
      evoLevel: 20,
      eggGroups: ['Field'],
      otherFormes: ['linoonegalar']
    }
  ],
  [
    'linoonegalar',
    {
      species: 'linoone-galar',
      num: 264,
      types: ['Dark', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Linoone',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 78,
        atk: 70,
        def: 61,
        spa: 50,
        spd: 61,
        spe: 100
      },
      abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
      heightm: 0.5,
      weightkg: 32.5,
      color: 'White',
      evos: ['obstagoon'],
      prevo: 'zigzagoongalar',
      evoLevel: 20,
      eggGroups: ['Field']
    }
  ],
  [
    'wurmple',
    {
      species: 'wurmple',
      num: 265,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 45,
        def: 35,
        spa: 20,
        spd: 30,
        spe: 20
      },
      abilities: { first: 'Shield Dust', hidden: 'Run Away' },
      heightm: 0.3,
      weightkg: 3.6,
      color: 'Red',
      evos: ['silcoon', 'cascoon'],
      eggGroups: ['Bug']
    }
  ],
  [
    'silcoon',
    {
      species: 'silcoon',
      num: 266,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 35,
        def: 55,
        spa: 25,
        spd: 25,
        spe: 15
      },
      abilities: { first: 'Shed Skin' },
      heightm: 0.6,
      weightkg: 10,
      color: 'White',
      prevo: 'wurmple',
      evos: ['beautifly'],
      evoLevel: 7,
      eggGroups: ['Bug']
    }
  ],
  [
    'beautifly',
    {
      species: 'beautifly',
      num: 267,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 70,
        def: 50,
        spa: 100,
        spd: 50,
        spe: 65
      },
      abilities: { first: 'Swarm', hidden: 'Rivalry' },
      heightm: 1,
      weightkg: 28.4,
      color: 'Yellow',
      prevo: 'silcoon',
      evoLevel: 10,
      eggGroups: ['Bug']
    }
  ],
  [
    'cascoon',
    {
      species: 'cascoon',
      num: 268,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 35,
        def: 55,
        spa: 25,
        spd: 25,
        spe: 15
      },
      abilities: { first: 'Shed Skin' },
      heightm: 0.7,
      weightkg: 11.5,
      color: 'Purple',
      prevo: 'wurmple',
      evos: ['dustox'],
      evoLevel: 7,
      eggGroups: ['Bug']
    }
  ],
  [
    'dustox',
    {
      species: 'dustox',
      num: 269,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 70,
        spa: 50,
        spd: 90,
        spe: 65
      },
      abilities: { first: 'Shield Dust', hidden: 'Compound Eyes' },
      heightm: 1.2,
      weightkg: 31.6,
      color: 'Green',
      prevo: 'cascoon',
      evoLevel: 10,
      eggGroups: ['Bug']
    }
  ],
  [
    'lotad',
    {
      species: 'lotad',
      num: 270,
      types: ['Water', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 30,
        def: 30,
        spa: 40,
        spd: 50,
        spe: 30
      },
      abilities: { first: 'Swift Swim', second: 'Rain Dish', hidden: 'Own Tempo' },
      heightm: 0.5,
      weightkg: 2.6,
      color: 'Green',
      evos: ['lombre'],
      eggGroups: ['Water 1', 'Grass']
    }
  ],
  [
    'lombre',
    {
      species: 'lombre',
      num: 271,
      types: ['Water', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 50,
        spa: 60,
        spd: 70,
        spe: 50
      },
      abilities: { first: 'Swift Swim', second: 'Rain Dish', hidden: 'Own Tempo' },
      heightm: 1.2,
      weightkg: 32.5,
      color: 'Green',
      prevo: 'lotad',
      evos: ['ludicolo'],
      evoLevel: 14,
      eggGroups: ['Water 1', 'Grass']
    }
  ],
  [
    'ludicolo',
    {
      species: 'ludicolo',
      num: 272,
      types: ['Water', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 70,
        def: 70,
        spa: 90,
        spd: 100,
        spe: 70
      },
      abilities: { first: 'Swift Swim', second: 'Rain Dish', hidden: 'Own Tempo' },
      heightm: 1.5,
      weightkg: 55,
      color: 'Green',
      prevo: 'lombre',
      evoLevel: 'use Water Stone',
      eggGroups: ['Water 1', 'Grass']
    }
  ],
  [
    'seedot',
    {
      species: 'seedot',
      num: 273,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 40,
        def: 50,
        spa: 30,
        spd: 30,
        spe: 30
      },
      abilities: { first: 'Chlorophyll', second: 'Early Bird', hidden: 'Pickpocket' },
      heightm: 0.5,
      weightkg: 4,
      color: 'Brown',
      evos: ['nuzleaf'],
      eggGroups: ['Field', 'Grass']
    }
  ],
  [
    'nuzleaf',
    {
      species: 'nuzleaf',
      num: 274,
      types: ['Grass', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 70,
        def: 40,
        spa: 60,
        spd: 40,
        spe: 60
      },
      abilities: { first: 'Chlorophyll', second: 'Early Bird', hidden: 'Pickpocket' },
      heightm: 1,
      weightkg: 28,
      color: 'Brown',
      prevo: 'seedot',
      evos: ['shiftry'],
      evoLevel: 14,
      eggGroups: ['Field', 'Grass']
    }
  ],
  [
    'shiftry',
    {
      species: 'shiftry',
      num: 275,
      types: ['Grass', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 100,
        def: 60,
        spa: 90,
        spd: 60,
        spe: 80
      },
      abilities: { first: 'Chlorophyll', second: 'Early Bird', hidden: 'Pickpocket' },
      heightm: 1.3,
      weightkg: 59.6,
      color: 'Brown',
      prevo: 'nuzleaf',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Field', 'Grass']
    }
  ],
  [
    'taillow',
    {
      species: 'taillow',
      num: 276,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 55,
        def: 30,
        spa: 30,
        spd: 30,
        spe: 85
      },
      abilities: { first: 'Guts', hidden: 'Scrappy' },
      heightm: 0.3,
      weightkg: 2.3,
      color: 'Blue',
      evos: ['swellow'],
      eggGroups: ['Flying']
    }
  ],
  [
    'swellow',
    {
      species: 'swellow',
      num: 277,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 60,
        spa: 75,
        spd: 50,
        spe: 125
      },
      abilities: { first: 'Guts', hidden: 'Scrappy' },
      heightm: 0.7,
      weightkg: 19.8,
      color: 'Blue',
      prevo: 'taillow',
      evoLevel: 22,
      eggGroups: ['Flying']
    }
  ],
  [
    'wingull',
    {
      species: 'wingull',
      num: 278,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 30,
        def: 30,
        spa: 55,
        spd: 30,
        spe: 85
      },
      abilities: { first: 'Keen Eye', second: 'Hydration', hidden: 'Rain Dish' },
      heightm: 0.6,
      weightkg: 9.5,
      color: 'White',
      evos: ['pelipper'],
      eggGroups: ['Water 1', 'Flying']
    }
  ],
  [
    'pelipper',
    {
      species: 'pelipper',
      num: 279,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 100,
        spa: 95,
        spd: 70,
        spe: 65
      },
      abilities: { first: 'Keen Eye', second: 'Drizzle', hidden: 'Rain Dish' },
      heightm: 1.2,
      weightkg: 28,
      color: 'Yellow',
      prevo: 'wingull',
      evoLevel: 25,
      eggGroups: ['Water 1', 'Flying']
    }
  ],
  [
    'ralts',
    {
      species: 'ralts',
      num: 280,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 28,
        atk: 25,
        def: 25,
        spa: 45,
        spd: 35,
        spe: 40
      },
      abilities: { first: 'Synchronize', second: 'Trace', hidden: 'Telepathy' },
      heightm: 0.4,
      weightkg: 6.6,
      color: 'White',
      evos: ['kirlia'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'kirlia',
    {
      species: 'kirlia',
      num: 281,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 38,
        atk: 35,
        def: 35,
        spa: 65,
        spd: 55,
        spe: 50
      },
      abilities: { first: 'Synchronize', second: 'Trace', hidden: 'Telepathy' },
      heightm: 0.8,
      weightkg: 20.2,
      color: 'White',
      prevo: 'ralts',
      evos: ['gardevoir', 'gallade'],
      evoLevel: 20,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'gardevoir',
    {
      species: 'gardevoir',
      num: 282,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 65,
        def: 65,
        spa: 125,
        spd: 115,
        spe: 80
      },
      abilities: { first: 'Synchronize', second: 'Trace', hidden: 'Telepathy' },
      heightm: 1.6,
      weightkg: 48.4,
      color: 'White',
      prevo: 'kirlia',
      evoLevel: 30,
      eggGroups: ['Amorphous'],
      otherFormes: ['gardevoirmega']
    }
  ],
  [
    'gardevoirmega',
    {
      species: 'gardevoir-mega',
      num: 282,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 68,
        atk: 85,
        def: 65,
        spa: 165,
        spd: 135,
        spe: 100
      },
      baseSpecies: 'Gardevoir',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Pixilate' },
      heightm: 1.6,
      weightkg: 48.4,
      color: 'White',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'surskit',
    {
      species: 'surskit',
      num: 283,
      types: ['Bug', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 30,
        def: 32,
        spa: 50,
        spd: 52,
        spe: 65
      },
      abilities: { first: 'Swift Swim', hidden: 'Rain Dish' },
      heightm: 0.5,
      weightkg: 1.7,
      color: 'Blue',
      evos: ['masquerain'],
      eggGroups: ['Water 1', 'Bug']
    }
  ],
  [
    'masquerain',
    {
      species: 'masquerain',
      num: 284,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 60,
        def: 62,
        spa: 100,
        spd: 82,
        spe: 80
      },
      abilities: { first: 'Intimidate', hidden: 'Unnerve' },
      heightm: 0.8,
      weightkg: 3.6,
      color: 'Blue',
      prevo: 'surskit',
      evoLevel: 22,
      eggGroups: ['Water 1', 'Bug']
    }
  ],
  [
    'shroomish',
    {
      species: 'shroomish',
      num: 285,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 40,
        def: 60,
        spa: 40,
        spd: 60,
        spe: 35
      },
      abilities: { first: 'Effect Spore', second: 'Poison Heal', hidden: 'Quick Feet' },
      heightm: 0.4,
      weightkg: 4.5,
      color: 'Brown',
      evos: ['breloom'],
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'breloom',
    {
      species: 'breloom',
      num: 286,
      types: ['Grass', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 130,
        def: 80,
        spa: 60,
        spd: 60,
        spe: 70
      },
      abilities: { first: 'Effect Spore', second: 'Poison Heal', hidden: 'Technician' },
      heightm: 1.2,
      weightkg: 39.2,
      color: 'Green',
      prevo: 'shroomish',
      evoLevel: 23,
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'slakoth',
    {
      species: 'slakoth',
      num: 287,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 60,
        spa: 35,
        spd: 35,
        spe: 30
      },
      abilities: { first: 'Truant' },
      heightm: 0.8,
      weightkg: 24,
      color: 'Brown',
      evos: ['vigoroth'],
      eggGroups: ['Field']
    }
  ],
  [
    'vigoroth',
    {
      species: 'vigoroth',
      num: 288,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 80,
        def: 80,
        spa: 55,
        spd: 55,
        spe: 90
      },
      abilities: { first: 'Vital Spirit' },
      heightm: 1.4,
      weightkg: 46.5,
      color: 'White',
      prevo: 'slakoth',
      evos: ['slaking'],
      evoLevel: 18,
      eggGroups: ['Field']
    }
  ],
  [
    'slaking',
    {
      species: 'slaking',
      num: 289,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 150,
        atk: 160,
        def: 100,
        spa: 95,
        spd: 65,
        spe: 100
      },
      abilities: { first: 'Truant' },
      heightm: 2,
      weightkg: 130.5,
      color: 'Brown',
      prevo: 'vigoroth',
      evoLevel: 36,
      eggGroups: ['Field']
    }
  ],
  [
    'nincada',
    {
      species: 'nincada',
      num: 290,
      types: ['Bug', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 31,
        atk: 45,
        def: 90,
        spa: 30,
        spd: 30,
        spe: 40
      },
      abilities: { first: 'Compound Eyes', hidden: 'Run Away' },
      heightm: 0.5,
      weightkg: 5.5,
      color: 'Gray',
      evos: ['ninjask', 'shedinja'],
      eggGroups: ['Bug']
    }
  ],
  [
    'ninjask',
    {
      species: 'ninjask',
      num: 291,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 61,
        atk: 90,
        def: 45,
        spa: 50,
        spd: 50,
        spe: 160
      },
      abilities: { first: 'Speed Boost', hidden: 'Infiltrator' },
      heightm: 0.8,
      weightkg: 12,
      color: 'Yellow',
      prevo: 'nincada',
      evoLevel: 20,
      eggGroups: ['Bug']
    }
  ],
  [
    'shedinja',
    {
      species: 'shedinja',
      num: 292,
      types: ['Bug', 'Ghost'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 1,
        atk: 90,
        def: 45,
        spa: 30,
        spd: 30,
        spe: 40
      },
      abilities: { first: 'Wonder Guard' },
      heightm: 0.8,
      weightkg: 1.2,
      color: 'Brown',
      prevo: 'nincada',
      evoLevel: 'Level 20 with Free Party Slot',
      eggGroups: ['Mineral']
    }
  ],
  [
    'whismur',
    {
      species: 'whismur',
      num: 293,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 64,
        atk: 51,
        def: 23,
        spa: 51,
        spd: 23,
        spe: 28
      },
      abilities: { first: 'Soundproof', hidden: 'Rattled' },
      heightm: 0.6,
      weightkg: 16.3,
      color: 'Pink',
      evos: ['loudred'],
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'loudred',
    {
      species: 'loudred',
      num: 294,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 84,
        atk: 71,
        def: 43,
        spa: 71,
        spd: 43,
        spe: 48
      },
      abilities: { first: 'Soundproof', hidden: 'Scrappy' },
      heightm: 1,
      weightkg: 40.5,
      color: 'Blue',
      prevo: 'whismur',
      evos: ['exploud'],
      evoLevel: 20,
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'exploud',
    {
      species: 'exploud',
      num: 295,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 104,
        atk: 91,
        def: 63,
        spa: 91,
        spd: 73,
        spe: 68
      },
      abilities: { first: 'Soundproof', hidden: 'Scrappy' },
      heightm: 1.5,
      weightkg: 84,
      color: 'Blue',
      prevo: 'loudred',
      evoLevel: 40,
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'makuhita',
    {
      species: 'makuhita',
      num: 296,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 72,
        atk: 60,
        def: 30,
        spa: 20,
        spd: 30,
        spe: 25
      },
      abilities: { first: 'Thick Fat', second: 'Guts', hidden: 'Sheer Force' },
      heightm: 1,
      weightkg: 86.4,
      color: 'Yellow',
      evos: ['hariyama'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'hariyama',
    {
      species: 'hariyama',
      num: 297,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 144,
        atk: 120,
        def: 60,
        spa: 40,
        spd: 60,
        spe: 50
      },
      abilities: { first: 'Thick Fat', second: 'Guts', hidden: 'Sheer Force' },
      heightm: 2.3,
      weightkg: 253.8,
      color: 'Brown',
      prevo: 'makuhita',
      evoLevel: 24,
      eggGroups: ['Human-Like']
    }
  ],
  [
    'azurill',
    {
      species: 'azurill',
      num: 298,
      types: ['Normal', 'Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 50,
        atk: 20,
        def: 40,
        spa: 20,
        spd: 40,
        spe: 20
      },
      abilities: { first: 'Thick Fat', second: 'Huge Power', hidden: 'Sap Sipper' },
      heightm: 0.2,
      weightkg: 2,
      color: 'Blue',
      evos: ['marill'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'nosepass',
    {
      species: 'nosepass',
      num: 299,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 45,
        def: 135,
        spa: 45,
        spd: 90,
        spe: 30
      },
      abilities: { first: 'Sturdy', second: 'Magnet Pull', hidden: 'Sand Force' },
      heightm: 1,
      weightkg: 97,
      color: 'Gray',
      evos: ['probopass'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'skitty',
    {
      species: 'skitty',
      num: 300,
      types: ['Normal'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 50,
        atk: 45,
        def: 45,
        spa: 35,
        spd: 35,
        spe: 50
      },
      abilities: { first: 'Cute Charm', second: 'Normalize', hidden: 'Wonder Skin' },
      heightm: 0.6,
      weightkg: 11,
      color: 'Pink',
      evos: ['delcatty'],
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'delcatty',
    {
      species: 'delcatty',
      num: 301,
      types: ['Normal'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 70,
        atk: 65,
        def: 65,
        spa: 55,
        spd: 55,
        spe: 90
      },
      abilities: { first: 'Cute Charm', second: 'Normalize', hidden: 'Wonder Skin' },
      heightm: 1.1,
      weightkg: 32.6,
      color: 'Purple',
      prevo: 'skitty',
      evoLevel: 'use Moon Stone',
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'sableye',
    {
      species: 'sableye',
      num: 302,
      types: ['Dark', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 75,
        def: 75,
        spa: 65,
        spd: 65,
        spe: 50
      },
      abilities: { first: 'Keen Eye', second: 'Stall', hidden: 'Prankster' },
      heightm: 0.5,
      weightkg: 11,
      color: 'Purple',
      eggGroups: ['Human-Like'],
      otherFormes: ['sableyemega']
    }
  ],
  [
    'sableyemega',
    {
      species: 'sableye-mega',
      num: 302,
      types: ['Dark', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 85,
        def: 125,
        spa: 85,
        spd: 115,
        spe: 20
      },
      baseSpecies: 'Sableye',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Magic Bounce' },
      heightm: 0.5,
      weightkg: 161,
      color: 'Purple',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'mawile',
    {
      species: 'mawile',
      num: 303,
      types: ['Steel', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 85,
        def: 85,
        spa: 55,
        spd: 55,
        spe: 50
      },
      abilities: { first: 'Hyper Cutter', second: 'Intimidate', hidden: 'Sheer Force' },
      heightm: 0.6,
      weightkg: 11.5,
      color: 'Black',
      eggGroups: ['Field', 'Fairy'],
      otherFormes: ['mawilemega']
    }
  ],
  [
    'mawilemega',
    {
      species: 'mawile-mega',
      num: 303,
      types: ['Steel', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 105,
        def: 125,
        spa: 55,
        spd: 95,
        spe: 50
      },
      baseSpecies: 'Mawile',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Huge Power' },
      heightm: 1,
      weightkg: 23.5,
      color: 'Black',
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'aron',
    {
      species: 'aron',
      num: 304,
      types: ['Steel', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 70,
        def: 100,
        spa: 40,
        spd: 40,
        spe: 30
      },
      abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Heavy Metal' },
      heightm: 0.4,
      weightkg: 60,
      color: 'Gray',
      evos: ['lairon'],
      eggGroups: ['Monster']
    }
  ],
  [
    'lairon',
    {
      species: 'lairon',
      num: 305,
      types: ['Steel', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 90,
        def: 140,
        spa: 50,
        spd: 50,
        spe: 40
      },
      abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Heavy Metal' },
      heightm: 0.9,
      weightkg: 120,
      color: 'Gray',
      prevo: 'aron',
      evos: ['aggron'],
      evoLevel: 32,
      eggGroups: ['Monster']
    }
  ],
  [
    'aggron',
    {
      species: 'aggron',
      num: 306,
      types: ['Steel', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 180,
        spa: 60,
        spd: 60,
        spe: 50
      },
      abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Heavy Metal' },
      heightm: 2.1,
      weightkg: 360,
      color: 'Gray',
      prevo: 'lairon',
      evoLevel: 42,
      eggGroups: ['Monster'],
      otherFormes: ['aggronmega']
    }
  ],
  [
    'aggronmega',
    {
      species: 'aggron-mega',
      num: 306,
      types: ['Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 140,
        def: 230,
        spa: 60,
        spd: 80,
        spe: 50
      },
      baseSpecies: 'Aggron',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Filter' },
      heightm: 2.2,
      weightkg: 395,
      color: 'Gray',
      eggGroups: ['Monster']
    }
  ],
  [
    'meditite',
    {
      species: 'meditite',
      num: 307,
      types: ['Fighting', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 40,
        def: 55,
        spa: 40,
        spd: 55,
        spe: 60
      },
      abilities: { first: 'Pure Power', hidden: 'Telepathy' },
      heightm: 0.6,
      weightkg: 11.2,
      color: 'Blue',
      evos: ['medicham'],
      eggGroups: ['Human-Like']
    }
  ],
  [
    'medicham',
    {
      species: 'medicham',
      num: 308,
      types: ['Fighting', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 75,
        spa: 60,
        spd: 75,
        spe: 80
      },
      abilities: { first: 'Pure Power', hidden: 'Telepathy' },
      heightm: 1.3,
      weightkg: 31.5,
      color: 'Red',
      prevo: 'meditite',
      evoLevel: 37,
      eggGroups: ['Human-Like'],
      otherFormes: ['medichammega']
    }
  ],
  [
    'medichammega',
    {
      species: 'medicham-mega',
      num: 308,
      types: ['Fighting', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 100,
        def: 85,
        spa: 80,
        spd: 85,
        spe: 100
      },
      baseSpecies: 'Medicham',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Pure Power' },
      heightm: 1.3,
      weightkg: 31.5,
      color: 'Red',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'electrike',
    {
      species: 'electrike',
      num: 309,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 40,
        spa: 65,
        spd: 40,
        spe: 65
      },
      abilities: { first: 'Static', second: 'Lightning Rod', hidden: 'Minus' },
      heightm: 0.6,
      weightkg: 15.2,
      color: 'Green',
      evos: ['manectric'],
      eggGroups: ['Field']
    }
  ],
  [
    'manectric',
    {
      species: 'manectric',
      num: 310,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 75,
        def: 60,
        spa: 105,
        spd: 60,
        spe: 105
      },
      abilities: { first: 'Static', second: 'Lightning Rod', hidden: 'Minus' },
      heightm: 1.5,
      weightkg: 40.2,
      color: 'Yellow',
      prevo: 'electrike',
      evoLevel: 26,
      eggGroups: ['Field'],
      otherFormes: ['manectricmega']
    }
  ],
  [
    'manectricmega',
    {
      species: 'manectric-mega',
      num: 310,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 75,
        def: 80,
        spa: 135,
        spd: 80,
        spe: 135
      },
      baseSpecies: 'Manectric',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Intimidate' },
      heightm: 1.8,
      weightkg: 44,
      color: 'Yellow',
      eggGroups: ['Field']
    }
  ],
  [
    'plusle',
    {
      species: 'plusle',
      num: 311,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 40,
        spa: 85,
        spd: 75,
        spe: 95
      },
      abilities: { first: 'Plus', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 4.2,
      color: 'Yellow',
      eggGroups: ['Fairy']
    }
  ],
  [
    'minun',
    {
      species: 'minun',
      num: 312,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 40,
        def: 50,
        spa: 75,
        spd: 85,
        spe: 95
      },
      abilities: { first: 'Minus', hidden: 'Volt Absorb' },
      heightm: 0.4,
      weightkg: 4.2,
      color: 'Yellow',
      eggGroups: ['Fairy']
    }
  ],
  [
    'volbeat',
    {
      species: 'volbeat',
      num: 313,
      types: ['Bug'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 65,
        atk: 73,
        def: 75,
        spa: 47,
        spd: 85,
        spe: 85
      },
      abilities: { first: 'Illuminate', second: 'Swarm', hidden: 'Prankster' },
      heightm: 0.7,
      weightkg: 17.7,
      color: 'Gray',
      eggGroups: ['Bug', 'Human-Like']
    }
  ],
  [
    'illumise',
    {
      species: 'illumise',
      num: 314,
      types: ['Bug'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 65,
        atk: 47,
        def: 75,
        spa: 73,
        spd: 85,
        spe: 85
      },
      abilities: { first: 'Oblivious', second: 'Tinted Lens', hidden: 'Prankster' },
      heightm: 0.6,
      weightkg: 17.7,
      color: 'Purple',
      eggGroups: ['Bug', 'Human-Like']
    }
  ],
  [
    'roselia',
    {
      species: 'roselia',
      num: 315,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 60,
        def: 45,
        spa: 100,
        spd: 80,
        spe: 65
      },
      abilities: { first: 'Natural Cure', second: 'Poison Point', hidden: 'Leaf Guard' },
      heightm: 0.3,
      weightkg: 2,
      color: 'Green',
      prevo: 'budew',
      evos: ['roserade'],
      evoLevel: 'Level up during Daytime with happiness of at least 220',
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'gulpin',
    {
      species: 'gulpin',
      num: 316,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 43,
        def: 53,
        spa: 43,
        spd: 53,
        spe: 40
      },
      abilities: { first: 'Liquid Ooze', second: 'Sticky Hold', hidden: 'Gluttony' },
      heightm: 0.4,
      weightkg: 10.3,
      color: 'Green',
      evos: ['swalot'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'swalot',
    {
      species: 'swalot',
      num: 317,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 73,
        def: 83,
        spa: 73,
        spd: 83,
        spe: 55
      },
      abilities: { first: 'Liquid Ooze', second: 'Sticky Hold', hidden: 'Gluttony' },
      heightm: 1.7,
      weightkg: 80,
      color: 'Purple',
      prevo: 'gulpin',
      evoLevel: 26,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'carvanha',
    {
      species: 'carvanha',
      num: 318,
      types: ['Water', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 90,
        def: 20,
        spa: 65,
        spd: 20,
        spe: 65
      },
      abilities: { first: 'Rough Skin', hidden: 'Speed Boost' },
      heightm: 0.8,
      weightkg: 20.8,
      color: 'Red',
      evos: ['sharpedo'],
      eggGroups: ['Water 2']
    }
  ],
  [
    'sharpedo',
    {
      species: 'sharpedo',
      num: 319,
      types: ['Water', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 120,
        def: 40,
        spa: 95,
        spd: 40,
        spe: 95
      },
      abilities: { first: 'Rough Skin', hidden: 'Speed Boost' },
      heightm: 1.8,
      weightkg: 88.8,
      color: 'Blue',
      prevo: 'carvanha',
      evoLevel: 30,
      eggGroups: ['Water 2'],
      otherFormes: ['sharpedomega']
    }
  ],
  [
    'sharpedomega',
    {
      species: 'sharpedo-mega',
      num: 319,
      types: ['Water', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 140,
        def: 70,
        spa: 110,
        spd: 65,
        spe: 105
      },
      baseSpecies: 'Sharpedo',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Strong Jaw' },
      heightm: 2.5,
      weightkg: 130.3,
      color: 'Blue',
      eggGroups: ['Water 2']
    }
  ],
  [
    'wailmer',
    {
      species: 'wailmer',
      num: 320,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 130,
        atk: 70,
        def: 35,
        spa: 70,
        spd: 35,
        spe: 60
      },
      abilities: { first: 'Water Veil', second: 'Oblivious', hidden: 'Pressure' },
      heightm: 2,
      weightkg: 130,
      color: 'Blue',
      evos: ['wailord'],
      eggGroups: ['Field', 'Water 2']
    }
  ],
  [
    'wailord',
    {
      species: 'wailord',
      num: 321,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 170,
        atk: 90,
        def: 45,
        spa: 90,
        spd: 45,
        spe: 60
      },
      abilities: { first: 'Water Veil', second: 'Oblivious', hidden: 'Pressure' },
      heightm: 14.5,
      weightkg: 398,
      color: 'Blue',
      prevo: 'wailmer',
      evoLevel: 40,
      eggGroups: ['Field', 'Water 2']
    }
  ],
  [
    'numel',
    {
      species: 'numel',
      num: 322,
      types: ['Fire', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 40,
        spa: 65,
        spd: 45,
        spe: 35
      },
      abilities: { first: 'Oblivious', second: 'Simple', hidden: 'Own Tempo' },
      heightm: 0.7,
      weightkg: 24,
      color: 'Yellow',
      evos: ['camerupt'],
      eggGroups: ['Field']
    }
  ],
  [
    'camerupt',
    {
      species: 'camerupt',
      num: 323,
      types: ['Fire', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 100,
        def: 70,
        spa: 105,
        spd: 75,
        spe: 40
      },
      abilities: { first: 'Magma Armor', second: 'Solid Rock', hidden: 'Anger Point' },
      heightm: 1.9,
      weightkg: 220,
      color: 'Red',
      prevo: 'numel',
      evoLevel: 33,
      eggGroups: ['Field'],
      otherFormes: ['cameruptmega']
    }
  ],
  [
    'cameruptmega',
    {
      species: 'camerupt-mega',
      num: 323,
      types: ['Fire', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 120,
        def: 100,
        spa: 145,
        spd: 105,
        spe: 20
      },
      baseSpecies: 'Camerupt',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Sheer Force' },
      heightm: 2.5,
      weightkg: 320.5,
      color: 'Red',
      eggGroups: ['Field']
    }
  ],
  [
    'torkoal',
    {
      species: 'torkoal',
      num: 324,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 85,
        def: 140,
        spa: 85,
        spd: 70,
        spe: 20
      },
      abilities: { first: 'White Smoke', second: 'Drought', hidden: 'Shell Armor' },
      heightm: 0.5,
      weightkg: 80.4,
      color: 'Brown',
      eggGroups: ['Field']
    }
  ],
  [
    'spoink',
    {
      species: 'spoink',
      num: 325,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 25,
        def: 35,
        spa: 70,
        spd: 80,
        spe: 60
      },
      abilities: { first: 'Thick Fat', second: 'Own Tempo', hidden: 'Gluttony' },
      heightm: 0.7,
      weightkg: 30.6,
      color: 'Black',
      evos: ['grumpig'],
      eggGroups: ['Field']
    }
  ],
  [
    'grumpig',
    {
      species: 'grumpig',
      num: 326,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 45,
        def: 65,
        spa: 90,
        spd: 110,
        spe: 80
      },
      abilities: { first: 'Thick Fat', second: 'Own Tempo', hidden: 'Gluttony' },
      heightm: 0.9,
      weightkg: 71.5,
      color: 'Purple',
      prevo: 'spoink',
      evoLevel: 32,
      eggGroups: ['Field']
    }
  ],
  [
    'spinda',
    {
      species: 'spinda',
      num: 327,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 60,
        spa: 60,
        spd: 60,
        spe: 60
      },
      abilities: { first: 'Own Tempo', second: 'Tangled Feet', hidden: 'Contrary' },
      heightm: 1.1,
      weightkg: 5,
      color: 'Brown',
      eggGroups: ['Field', 'Human-Like']
    }
  ],
  [
    'trapinch',
    {
      species: 'trapinch',
      num: 328,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 100,
        def: 45,
        spa: 45,
        spd: 45,
        spe: 10
      },
      abilities: { first: 'Hyper Cutter', second: 'Arena Trap', hidden: 'Sheer Force' },
      heightm: 0.7,
      weightkg: 15,
      color: 'Brown',
      evos: ['vibrava'],
      eggGroups: ['Bug']
    }
  ],
  [
    'vibrava',
    {
      species: 'vibrava',
      num: 329,
      types: ['Ground', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 70,
        def: 50,
        spa: 50,
        spd: 50,
        spe: 70
      },
      abilities: { first: 'Levitate' },
      heightm: 1.1,
      weightkg: 15.3,
      color: 'Green',
      prevo: 'trapinch',
      evos: ['flygon'],
      evoLevel: 35,
      eggGroups: ['Bug']
    }
  ],
  [
    'flygon',
    {
      species: 'flygon',
      num: 330,
      types: ['Ground', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 80,
        spa: 80,
        spd: 80,
        spe: 100
      },
      abilities: { first: 'Levitate' },
      heightm: 2,
      weightkg: 82,
      color: 'Green',
      prevo: 'vibrava',
      evoLevel: 45,
      eggGroups: ['Bug']
    }
  ],
  [
    'cacnea',
    {
      species: 'cacnea',
      num: 331,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 85,
        def: 40,
        spa: 85,
        spd: 40,
        spe: 35
      },
      abilities: { first: 'Sand Veil', hidden: 'Water Absorb' },
      heightm: 0.4,
      weightkg: 51.3,
      color: 'Green',
      evos: ['cacturne'],
      eggGroups: ['Grass', 'Human-Like']
    }
  ],
  [
    'cacturne',
    {
      species: 'cacturne',
      num: 332,
      types: ['Grass', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 115,
        def: 60,
        spa: 115,
        spd: 60,
        spe: 55
      },
      abilities: { first: 'Sand Veil', hidden: 'Water Absorb' },
      heightm: 1.3,
      weightkg: 77.4,
      color: 'Green',
      prevo: 'cacnea',
      evoLevel: 32,
      eggGroups: ['Grass', 'Human-Like']
    }
  ],
  [
    'swablu',
    {
      species: 'swablu',
      num: 333,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 40,
        def: 60,
        spa: 40,
        spd: 75,
        spe: 50
      },
      abilities: { first: 'Natural Cure', hidden: 'Cloud Nine' },
      heightm: 0.4,
      weightkg: 1.2,
      color: 'Blue',
      evos: ['altaria'],
      eggGroups: ['Flying', 'Dragon']
    }
  ],
  [
    'altaria',
    {
      species: 'altaria',
      num: 334,
      types: ['Dragon', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 70,
        def: 90,
        spa: 70,
        spd: 105,
        spe: 80
      },
      abilities: { first: 'Natural Cure', hidden: 'Cloud Nine' },
      heightm: 1.1,
      weightkg: 20.6,
      color: 'Blue',
      prevo: 'swablu',
      evoLevel: 35,
      eggGroups: ['Flying', 'Dragon'],
      otherFormes: ['altariamega']
    }
  ],
  [
    'altariamega',
    {
      species: 'altaria-mega',
      num: 334,
      types: ['Dragon', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 110,
        def: 110,
        spa: 110,
        spd: 105,
        spe: 80
      },
      baseSpecies: 'Altaria',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Pixilate' },
      heightm: 1.5,
      weightkg: 20.6,
      color: 'Blue',
      eggGroups: ['Flying', 'Dragon']
    }
  ],
  [
    'zangoose',
    {
      species: 'zangoose',
      num: 335,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 73,
        atk: 115,
        def: 60,
        spa: 60,
        spd: 60,
        spe: 90
      },
      abilities: { first: 'Immunity', hidden: 'Toxic Boost' },
      heightm: 1.3,
      weightkg: 40.3,
      color: 'White',
      eggGroups: ['Field']
    }
  ],
  [
    'seviper',
    {
      species: 'seviper',
      num: 336,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 73,
        atk: 100,
        def: 60,
        spa: 100,
        spd: 60,
        spe: 65
      },
      abilities: { first: 'Shed Skin', hidden: 'Infiltrator' },
      heightm: 2.7,
      weightkg: 52.5,
      color: 'Black',
      eggGroups: ['Field', 'Dragon']
    }
  ],
  [
    'lunatone',
    {
      species: 'lunatone',
      num: 337,
      types: ['Rock', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 55,
        def: 65,
        spa: 95,
        spd: 85,
        spe: 70
      },
      abilities: { first: 'Levitate' },
      heightm: 1,
      weightkg: 168,
      color: 'Yellow',
      eggGroups: ['Mineral']
    }
  ],
  [
    'solrock',
    {
      species: 'solrock',
      num: 338,
      types: ['Rock', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 95,
        def: 85,
        spa: 55,
        spd: 65,
        spe: 70
      },
      abilities: { first: 'Levitate' },
      heightm: 1.2,
      weightkg: 154,
      color: 'Red',
      eggGroups: ['Mineral']
    }
  ],
  [
    'barboach',
    {
      species: 'barboach',
      num: 339,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 48,
        def: 43,
        spa: 46,
        spd: 41,
        spe: 60
      },
      abilities: { first: 'Oblivious', second: 'Anticipation', hidden: 'Hydration' },
      heightm: 0.4,
      weightkg: 1.9,
      color: 'Gray',
      evos: ['whiscash'],
      eggGroups: ['Water 2']
    }
  ],
  [
    'whiscash',
    {
      species: 'whiscash',
      num: 340,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 78,
        def: 73,
        spa: 76,
        spd: 71,
        spe: 60
      },
      abilities: { first: 'Oblivious', second: 'Anticipation', hidden: 'Hydration' },
      heightm: 0.9,
      weightkg: 23.6,
      color: 'Blue',
      prevo: 'barboach',
      evoLevel: 30,
      eggGroups: ['Water 2']
    }
  ],
  [
    'corphish',
    {
      species: 'corphish',
      num: 341,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 43,
        atk: 80,
        def: 65,
        spa: 50,
        spd: 35,
        spe: 35
      },
      abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Adaptability' },
      heightm: 0.6,
      weightkg: 11.5,
      color: 'Red',
      evos: ['crawdaunt'],
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'crawdaunt',
    {
      species: 'crawdaunt',
      num: 342,
      types: ['Water', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 63,
        atk: 120,
        def: 85,
        spa: 90,
        spd: 55,
        spe: 55
      },
      abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Adaptability' },
      heightm: 1.1,
      weightkg: 32.8,
      color: 'Red',
      prevo: 'corphish',
      evoLevel: 30,
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'baltoy',
    {
      species: 'baltoy',
      num: 343,
      types: ['Ground', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 40,
        atk: 40,
        def: 55,
        spa: 40,
        spd: 70,
        spe: 55
      },
      abilities: { first: 'Levitate' },
      heightm: 0.5,
      weightkg: 21.5,
      color: 'Brown',
      evos: ['claydol'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'claydol',
    {
      species: 'claydol',
      num: 344,
      types: ['Ground', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 70,
        def: 105,
        spa: 70,
        spd: 120,
        spe: 75
      },
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 108,
      color: 'Black',
      prevo: 'baltoy',
      evoLevel: 36,
      eggGroups: ['Mineral']
    }
  ],
  [
    'lileep',
    {
      species: 'lileep',
      num: 345,
      types: ['Rock', 'Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 66,
        atk: 41,
        def: 77,
        spa: 61,
        spd: 87,
        spe: 23
      },
      abilities: { first: 'Suction Cups', hidden: 'Storm Drain' },
      heightm: 1,
      weightkg: 23.8,
      color: 'Purple',
      evos: ['cradily'],
      eggGroups: ['Water 3']
    }
  ],
  [
    'cradily',
    {
      species: 'cradily',
      num: 346,
      types: ['Rock', 'Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 86,
        atk: 81,
        def: 97,
        spa: 81,
        spd: 107,
        spe: 43
      },
      abilities: { first: 'Suction Cups', hidden: 'Storm Drain' },
      heightm: 1.5,
      weightkg: 60.4,
      color: 'Green',
      prevo: 'lileep',
      evoLevel: 40,
      eggGroups: ['Water 3']
    }
  ],
  [
    'anorith',
    {
      species: 'anorith',
      num: 347,
      types: ['Rock', 'Bug'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 45,
        atk: 95,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 75
      },
      abilities: { first: 'Battle Armor', hidden: 'Swift Swim' },
      heightm: 0.7,
      weightkg: 12.5,
      color: 'Gray',
      evos: ['armaldo'],
      eggGroups: ['Water 3']
    }
  ],
  [
    'armaldo',
    {
      species: 'armaldo',
      num: 348,
      types: ['Rock', 'Bug'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 75,
        atk: 125,
        def: 100,
        spa: 70,
        spd: 80,
        spe: 45
      },
      abilities: { first: 'Battle Armor', hidden: 'Swift Swim' },
      heightm: 1.5,
      weightkg: 68.2,
      color: 'Gray',
      prevo: 'anorith',
      evoLevel: 40,
      eggGroups: ['Water 3']
    }
  ],
  [
    'feebas',
    {
      species: 'feebas',
      num: 349,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 20,
        atk: 15,
        def: 20,
        spa: 10,
        spd: 55,
        spe: 80
      },
      abilities: { first: 'Swift Swim', second: 'Oblivious', hidden: 'Adaptability' },
      heightm: 0.6,
      weightkg: 7.4,
      color: 'Brown',
      evos: ['milotic'],
      eggGroups: ['Water 1', 'Dragon']
    }
  ],
  [
    'milotic',
    {
      species: 'milotic',
      num: 350,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 60,
        def: 79,
        spa: 100,
        spd: 125,
        spe: 81
      },
      abilities: { first: 'Marvel Scale', second: 'Competitive', hidden: 'Cute Charm' },
      heightm: 6.2,
      weightkg: 162,
      color: 'Pink',
      prevo: 'feebas',
      evoLevel: 'Trade while holding Prism Scale',
      eggGroups: ['Water 1', 'Dragon']
    }
  ],
  [
    'castform',
    {
      species: 'castform',
      num: 351,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 70,
        def: 70,
        spa: 70,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Forecast' },
      heightm: 0.3,
      weightkg: 0.8,
      color: 'Gray',
      eggGroups: ['Fairy', 'Amorphous'],
      otherFormes: ['castformsunny', 'castformrainy', 'castformsnowy']
    }
  ],
  [
    'castformsunny',
    {
      species: 'castform-sunny',
      num: 351,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 70,
        def: 70,
        spa: 70,
        spd: 70,
        spe: 70
      },
      baseSpecies: 'Castform',
      forme: 'Sunny',
      formeLetter: 'S',
      abilities: { first: 'Forecast' },
      heightm: 0.3,
      weightkg: 0.8,
      color: 'Red',
      eggGroups: ['Fairy', 'Amorphous']
    }
  ],
  [
    'castformrainy',
    {
      species: 'castform-rainy',
      num: 351,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 70,
        def: 70,
        spa: 70,
        spd: 70,
        spe: 70
      },
      baseSpecies: 'Castform',
      forme: 'Rainy',
      formeLetter: 'R',
      abilities: { first: 'Forecast' },
      heightm: 0.3,
      weightkg: 0.8,
      color: 'Blue',
      eggGroups: ['Fairy', 'Amorphous']
    }
  ],
  [
    'castformsnowy',
    {
      species: 'castform-snowy',
      num: 351,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 70,
        def: 70,
        spa: 70,
        spd: 70,
        spe: 70
      },
      baseSpecies: 'Castform',
      forme: 'Snowy',
      formeLetter: 'S',
      abilities: { first: 'Forecast' },
      heightm: 0.3,
      weightkg: 0.8,
      color: 'White',
      eggGroups: ['Fairy', 'Amorphous']
    }
  ],
  [
    'kecleon',
    {
      species: 'kecleon',
      num: 352,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 90,
        def: 70,
        spa: 60,
        spd: 120,
        spe: 40
      },
      abilities: { first: 'Color Change', hidden: 'Protean' },
      heightm: 1,
      weightkg: 22,
      color: 'Green',
      eggGroups: ['Field']
    }
  ],
  [
    'shuppet',
    {
      species: 'shuppet',
      num: 353,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 44,
        atk: 75,
        def: 35,
        spa: 63,
        spd: 33,
        spe: 45
      },
      abilities: { first: 'Insomnia', second: 'Frisk', hidden: 'Cursed Body' },
      heightm: 0.6,
      weightkg: 2.3,
      color: 'Black',
      evos: ['banette'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'banette',
    {
      species: 'banette',
      num: 354,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 64,
        atk: 115,
        def: 65,
        spa: 83,
        spd: 63,
        spe: 65
      },
      abilities: { first: 'Insomnia', second: 'Frisk', hidden: 'Cursed Body' },
      heightm: 1.1,
      weightkg: 12.5,
      color: 'Black',
      prevo: 'shuppet',
      evoLevel: 37,
      eggGroups: ['Amorphous'],
      otherFormes: ['banettemega']
    }
  ],
  [
    'banettemega',
    {
      species: 'banette-mega',
      num: 354,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 64,
        atk: 165,
        def: 75,
        spa: 93,
        spd: 83,
        spe: 75
      },
      baseSpecies: 'Banette',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Prankster' },
      heightm: 1.2,
      weightkg: 13,
      color: 'Black',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'duskull',
    {
      species: 'duskull',
      num: 355,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 20,
        atk: 40,
        def: 90,
        spa: 30,
        spd: 90,
        spe: 25
      },
      abilities: { first: 'Levitate', hidden: 'Frisk' },
      heightm: 0.8,
      weightkg: 15,
      color: 'Black',
      evos: ['dusclops'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'dusclops',
    {
      species: 'dusclops',
      num: 356,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 70,
        def: 130,
        spa: 60,
        spd: 130,
        spe: 25
      },
      abilities: { first: 'Pressure', hidden: 'Frisk' },
      heightm: 1.6,
      weightkg: 30.6,
      color: 'Black',
      prevo: 'duskull',
      evos: ['dusknoir'],
      evoLevel: 37,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'tropius',
    {
      species: 'tropius',
      num: 357,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 99,
        atk: 68,
        def: 83,
        spa: 72,
        spd: 87,
        spe: 51
      },
      abilities: { first: 'Chlorophyll', second: 'Solar Power', hidden: 'Harvest' },
      heightm: 2,
      weightkg: 100,
      color: 'Green',
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'chimecho',
    {
      species: 'chimecho',
      num: 358,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 50,
        def: 80,
        spa: 95,
        spd: 90,
        spe: 65
      },
      abilities: { first: 'Levitate' },
      heightm: 0.6,
      weightkg: 1,
      color: 'Blue',
      prevo: 'chingling',
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      eggGroups: ['Amorphous']
    }
  ],
  [
    'absol',
    {
      species: 'absol',
      num: 359,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 130,
        def: 60,
        spa: 75,
        spd: 60,
        spe: 75
      },
      abilities: { first: 'Pressure', second: 'Super Luck', hidden: 'Justified' },
      heightm: 1.2,
      weightkg: 47,
      color: 'White',
      eggGroups: ['Field'],
      otherFormes: ['absolmega']
    }
  ],
  [
    'absolmega',
    {
      species: 'absol-mega',
      num: 359,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 150,
        def: 60,
        spa: 115,
        spd: 60,
        spe: 115
      },
      baseSpecies: 'Absol',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Magic Bounce' },
      heightm: 1.2,
      weightkg: 49,
      color: 'White',
      eggGroups: ['Field']
    }
  ],
  [
    'wynaut',
    {
      species: 'wynaut',
      num: 360,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 23,
        def: 48,
        spa: 23,
        spd: 48,
        spe: 23
      },
      abilities: { first: 'Shadow Tag', hidden: 'Telepathy' },
      heightm: 0.6,
      weightkg: 14,
      color: 'Blue',
      evos: ['wobbuffet'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'snorunt',
    {
      species: 'snorunt',
      num: 361,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 50,
        spa: 50,
        spd: 50,
        spe: 50
      },
      abilities: { first: 'Inner Focus', second: 'Ice Body', hidden: 'Moody' },
      heightm: 0.7,
      weightkg: 16.8,
      color: 'Gray',
      evos: ['glalie', 'froslass'],
      eggGroups: ['Fairy', 'Mineral']
    }
  ],
  [
    'glalie',
    {
      species: 'glalie',
      num: 362,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 80,
        def: 80,
        spa: 80,
        spd: 80,
        spe: 80
      },
      abilities: { first: 'Inner Focus', second: 'Ice Body', hidden: 'Moody' },
      heightm: 1.5,
      weightkg: 256.5,
      color: 'Gray',
      prevo: 'snorunt',
      evoLevel: 42,
      eggGroups: ['Fairy', 'Mineral'],
      otherFormes: ['glaliemega']
    }
  ],
  [
    'glaliemega',
    {
      species: 'glalie-mega',
      num: 362,
      types: ['Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 120,
        def: 80,
        spa: 120,
        spd: 80,
        spe: 100
      },
      baseSpecies: 'Glalie',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Refrigerate' },
      heightm: 2.1,
      weightkg: 350.2,
      color: 'Gray',
      eggGroups: ['Fairy', 'Mineral']
    }
  ],
  [
    'spheal',
    {
      species: 'spheal',
      num: 363,
      types: ['Ice', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 40,
        def: 50,
        spa: 55,
        spd: 50,
        spe: 25
      },
      abilities: { first: 'Thick Fat', second: 'Ice Body', hidden: 'Oblivious' },
      heightm: 0.8,
      weightkg: 39.5,
      color: 'Blue',
      evos: ['sealeo'],
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'sealeo',
    {
      species: 'sealeo',
      num: 364,
      types: ['Ice', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 60,
        def: 70,
        spa: 75,
        spd: 70,
        spe: 45
      },
      abilities: { first: 'Thick Fat', second: 'Ice Body', hidden: 'Oblivious' },
      heightm: 1.1,
      weightkg: 87.6,
      color: 'Blue',
      prevo: 'spheal',
      evos: ['walrein'],
      evoLevel: 32,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'walrein',
    {
      species: 'walrein',
      num: 365,
      types: ['Ice', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 80,
        def: 90,
        spa: 95,
        spd: 90,
        spe: 65
      },
      abilities: { first: 'Thick Fat', second: 'Ice Body', hidden: 'Oblivious' },
      heightm: 1.4,
      weightkg: 150.6,
      color: 'Blue',
      prevo: 'sealeo',
      evoLevel: 44,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'clamperl',
    {
      species: 'clamperl',
      num: 366,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 64,
        def: 85,
        spa: 74,
        spd: 55,
        spe: 32
      },
      abilities: { first: 'Shell Armor', hidden: 'Rattled' },
      heightm: 0.4,
      weightkg: 52.5,
      color: 'Blue',
      evos: ['huntail', 'gorebyss'],
      eggGroups: ['Water 1']
    }
  ],
  [
    'huntail',
    {
      species: 'huntail',
      num: 367,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 104,
        def: 105,
        spa: 94,
        spd: 75,
        spe: 52
      },
      abilities: { first: 'Swift Swim', hidden: 'Water Veil' },
      heightm: 1.7,
      weightkg: 27,
      color: 'Blue',
      prevo: 'clamperl',
      evoLevel: 'Trade while holding Deep Sea Tooth',
      eggGroups: ['Water 1']
    }
  ],
  [
    'gorebyss',
    {
      species: 'gorebyss',
      num: 368,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 84,
        def: 105,
        spa: 114,
        spd: 75,
        spe: 52
      },
      abilities: { first: 'Swift Swim', hidden: 'Hydration' },
      heightm: 1.8,
      weightkg: 22.6,
      color: 'Pink',
      prevo: 'clamperl',
      evoLevel: 'Trade while holding Deep Sea Scale',
      eggGroups: ['Water 1']
    }
  ],
  [
    'relicanth',
    {
      species: 'relicanth',
      num: 369,
      types: ['Water', 'Rock'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 100,
        atk: 90,
        def: 130,
        spa: 45,
        spd: 65,
        spe: 55
      },
      abilities: { first: 'Swift Swim', second: 'Rock Head', hidden: 'Sturdy' },
      heightm: 1,
      weightkg: 23.4,
      color: 'Gray',
      eggGroups: ['Water 1', 'Water 2']
    }
  ],
  [
    'luvdisc',
    {
      species: 'luvdisc',
      num: 370,
      types: ['Water'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 43,
        atk: 30,
        def: 55,
        spa: 40,
        spd: 65,
        spe: 97
      },
      abilities: { first: 'Swift Swim', hidden: 'Hydration' },
      heightm: 0.6,
      weightkg: 8.7,
      color: 'Pink',
      eggGroups: ['Water 2']
    }
  ],
  [
    'bagon',
    {
      species: 'bagon',
      num: 371,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 75,
        def: 60,
        spa: 40,
        spd: 30,
        spe: 50
      },
      abilities: { first: 'Rock Head', hidden: 'Sheer Force' },
      heightm: 0.6,
      weightkg: 42.1,
      color: 'Blue',
      evos: ['shelgon'],
      eggGroups: ['Dragon']
    }
  ],
  [
    'shelgon',
    {
      species: 'shelgon',
      num: 372,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 95,
        def: 100,
        spa: 60,
        spd: 50,
        spe: 50
      },
      abilities: { first: 'Rock Head', hidden: 'Overcoat' },
      heightm: 1.1,
      weightkg: 110.5,
      color: 'White',
      prevo: 'bagon',
      evos: ['salamence'],
      evoLevel: 30,
      eggGroups: ['Dragon']
    }
  ],
  [
    'salamence',
    {
      species: 'salamence',
      num: 373,
      types: ['Dragon', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 135,
        def: 80,
        spa: 110,
        spd: 80,
        spe: 100
      },
      abilities: { first: 'Intimidate', hidden: 'Moxie' },
      heightm: 1.5,
      weightkg: 102.6,
      color: 'Blue',
      prevo: 'shelgon',
      evoLevel: 50,
      eggGroups: ['Dragon'],
      otherFormes: ['salamencemega']
    }
  ],
  [
    'salamencemega',
    {
      species: 'salamence-mega',
      num: 373,
      baseSpecies: 'Salamence',
      forme: 'Mega',
      formeLetter: 'M',
      types: ['Dragon', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 145,
        def: 130,
        spa: 120,
        spd: 90,
        spe: 120
      },
      abilities: { first: 'Aerilate' },
      heightm: 1.8,
      weightkg: 112.6,
      color: 'Blue',
      eggGroups: ['Dragon']
    }
  ],
  [
    'beldum',
    {
      species: 'beldum',
      num: 374,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 40,
        atk: 55,
        def: 80,
        spa: 35,
        spd: 60,
        spe: 30
      },
      abilities: { first: 'Clear Body', hidden: 'Light Metal' },
      heightm: 0.6,
      weightkg: 95.2,
      color: 'Blue',
      evos: ['metang'],
      eggGroups: ['Mineral']
    }
  ],
  [
    'metang',
    {
      species: 'metang',
      num: 375,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 75,
        def: 100,
        spa: 55,
        spd: 80,
        spe: 50
      },
      abilities: { first: 'Clear Body', hidden: 'Light Metal' },
      heightm: 1.2,
      weightkg: 202.5,
      color: 'Blue',
      prevo: 'beldum',
      evos: ['metagross'],
      evoLevel: 20,
      eggGroups: ['Mineral']
    }
  ],
  [
    'metagross',
    {
      species: 'metagross',
      num: 376,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 135,
        def: 130,
        spa: 95,
        spd: 90,
        spe: 70
      },
      abilities: { first: 'Clear Body', hidden: 'Light Metal' },
      heightm: 1.6,
      weightkg: 550,
      color: 'Blue',
      prevo: 'metang',
      evoLevel: 45,
      eggGroups: ['Mineral'],
      otherFormes: ['metagrossmega']
    }
  ],
  [
    'metagrossmega',
    {
      species: 'metagross-mega',
      num: 376,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 145,
        def: 150,
        spa: 105,
        spd: 110,
        spe: 110
      },
      baseSpecies: 'Metagross',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Tough Claws' },
      heightm: 2.5,
      weightkg: 942.9,
      color: 'Blue',
      eggGroups: ['Mineral']
    }
  ],
  [
    'regirock',
    {
      species: 'regirock',
      num: 377,
      types: ['Rock'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 200,
        spa: 50,
        spd: 100,
        spe: 50
      },
      abilities: { first: 'Clear Body', hidden: 'Sturdy' },
      heightm: 1.7,
      weightkg: 230,
      color: 'Brown',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'regice',
    {
      species: 'regice',
      num: 378,
      types: ['Ice'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 50,
        def: 100,
        spa: 100,
        spd: 200,
        spe: 50
      },
      abilities: { first: 'Clear Body', hidden: 'Ice Body' },
      heightm: 1.8,
      weightkg: 175,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'registeel',
    {
      species: 'registeel',
      num: 379,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 80,
        atk: 75,
        def: 150,
        spa: 75,
        spd: 150,
        spe: 50
      },
      abilities: { first: 'Clear Body', hidden: 'Light Metal' },
      heightm: 1.9,
      weightkg: 205,
      color: 'Gray',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'latias',
    {
      species: 'latias',
      num: 380,
      types: ['Dragon', 'Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 80,
        atk: 80,
        def: 90,
        spa: 110,
        spd: 130,
        spe: 110
      },
      abilities: { first: 'Levitate' },
      heightm: 1.4,
      weightkg: 40,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      otherFormes: ['latiasmega']
    }
  ],
  [
    'latiasmega',
    {
      species: 'latias-mega',
      num: 380,
      types: ['Dragon', 'Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 120,
        spa: 140,
        spd: 150,
        spe: 110
      },
      baseSpecies: 'Latias',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Levitate' },
      heightm: 1.8,
      weightkg: 52,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'latios',
    {
      species: 'latios',
      num: 381,
      types: ['Dragon', 'Psychic'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 80,
        atk: 90,
        def: 80,
        spa: 130,
        spd: 110,
        spe: 110
      },
      abilities: { first: 'Levitate' },
      heightm: 2,
      weightkg: 60,
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      otherFormes: ['latiosmega']
    }
  ],
  [
    'latiosmega',
    {
      species: 'latios-mega',
      num: 381,
      types: ['Dragon', 'Psychic'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 80,
        atk: 130,
        def: 100,
        spa: 160,
        spd: 120,
        spe: 110
      },
      baseSpecies: 'Latios',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Levitate' },
      heightm: 2.3,
      weightkg: 70,
      color: 'Purple',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'kyogre',
    {
      species: 'kyogre',
      num: 382,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 90,
        spa: 150,
        spd: 140,
        spe: 90
      },
      abilities: { first: 'Drizzle' },
      heightm: 4.5,
      weightkg: 352,
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      otherFormes: ['kyogreprimal']
    }
  ],
  [
    'kyogreprimal',
    {
      species: 'kyogre-primal',
      num: 382,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 150,
        def: 90,
        spa: 180,
        spd: 160,
        spe: 90
      },
      baseSpecies: 'Kyogre',
      forme: 'Primal',
      formeLetter: 'P',
      abilities: { first: 'Primordial Sea' },
      heightm: 9.8,
      weightkg: 430,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'groudon',
    {
      species: 'groudon',
      num: 383,
      types: ['Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 150,
        def: 140,
        spa: 100,
        spd: 90,
        spe: 90
      },
      abilities: { first: 'Drought' },
      heightm: 3.5,
      weightkg: 950,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      otherFormes: ['groudonprimal']
    }
  ],
  [
    'groudonprimal',
    {
      species: 'groudon-primal',
      num: 383,
      types: ['Ground', 'Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 180,
        def: 160,
        spa: 150,
        spd: 90,
        spe: 90
      },
      baseSpecies: 'Groudon',
      forme: 'Primal',
      formeLetter: 'P',
      abilities: { first: 'Desolate Land' },
      heightm: 5,
      weightkg: 999.7,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'rayquaza',
    {
      species: 'rayquaza',
      num: 384,
      types: ['Dragon', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 105,
        atk: 150,
        def: 90,
        spa: 150,
        spd: 90,
        spe: 95
      },
      abilities: { first: 'Air Lock' },
      heightm: 7,
      weightkg: 206.5,
      color: 'Green',
      eggGroups: ['Undiscovered'],
      otherFormes: ['rayquazamega']
    }
  ],
  [
    'rayquazamega',
    {
      species: 'rayquaza-mega',
      num: 384,
      types: ['Dragon', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 105,
        atk: 180,
        def: 100,
        spa: 180,
        spd: 100,
        spe: 115
      },
      baseSpecies: 'Rayquaza',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Delta Stream' },
      heightm: 10.8,
      weightkg: 392,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'jirachi',
    {
      species: 'jirachi',
      num: 385,
      types: ['Steel', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Serene Grace' },
      heightm: 0.3,
      weightkg: 1.1,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'deoxys',
    {
      species: 'deoxys',
      num: 386,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 150,
        def: 50,
        spa: 150,
        spd: 50,
        spe: 150
      },
      baseForme: 'Normal',
      abilities: { first: 'Pressure' },
      heightm: 1.7,
      weightkg: 60.8,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      otherFormes: ['deoxysattack', 'deoxysdefense', 'deoxysspeed']
    }
  ],
  [
    'deoxysattack',
    {
      species: 'deoxys-attack',
      num: 386,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 180,
        def: 20,
        spa: 180,
        spd: 20,
        spe: 150
      },
      baseSpecies: 'Deoxys',
      forme: 'Attack',
      formeLetter: 'A',
      abilities: { first: 'Pressure' },
      heightm: 1.7,
      weightkg: 60.8,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'deoxysdefense',
    {
      species: 'deoxys-defense',
      num: 386,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 70,
        def: 160,
        spa: 70,
        spd: 160,
        spe: 90
      },
      baseSpecies: 'Deoxys',
      forme: 'Defense',
      formeLetter: 'D',
      abilities: { first: 'Pressure' },
      heightm: 1.7,
      weightkg: 60.8,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'deoxysspeed',
    {
      species: 'deoxys-speed',
      num: 386,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 95,
        def: 90,
        spa: 95,
        spd: 90,
        spe: 180
      },
      baseSpecies: 'Deoxys',
      forme: 'Speed',
      formeLetter: 'S',
      abilities: { first: 'Pressure' },
      heightm: 1.7,
      weightkg: 60.8,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
