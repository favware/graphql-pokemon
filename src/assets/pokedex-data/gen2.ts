import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'chikorita',
    {
      species: 'chikorita',
      num: 152,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 45,
        atk: 49,
        def: 65,
        spa: 49,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
      heightm: 0.9,
      weightkg: 6.4,
      color: 'Green',
      evos: ['bayleef'],
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'bayleef',
    {
      species: 'bayleef',
      num: 153,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 62,
        def: 80,
        spa: 63,
        spd: 80,
        spe: 60
      },
      abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
      heightm: 1.2,
      weightkg: 15.8,
      color: 'Green',
      prevo: 'chikorita',
      evos: ['meganium'],
      evoLevel: 16,
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'meganium',
    {
      species: 'meganium',
      num: 154,
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 82,
        def: 100,
        spa: 83,
        spd: 100,
        spe: 80
      },
      abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
      heightm: 1.8,
      weightkg: 100.5,
      color: 'Green',
      prevo: 'bayleef',
      evoLevel: 32,
      eggGroups: ['Monster', 'Grass']
    }
  ],
  [
    'cyndaquil',
    {
      species: 'cyndaquil',
      num: 155,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 39,
        atk: 52,
        def: 43,
        spa: 60,
        spd: 50,
        spe: 65
      },
      abilities: { first: 'Blaze', hidden: 'Flash Fire' },
      heightm: 0.5,
      weightkg: 7.9,
      color: 'Yellow',
      evos: ['quilava'],
      eggGroups: ['Field']
    }
  ],
  [
    'quilava',
    {
      species: 'quilava',
      num: 156,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 58,
        atk: 64,
        def: 58,
        spa: 80,
        spd: 65,
        spe: 80
      },
      abilities: { first: 'Blaze', hidden: 'Flash Fire' },
      heightm: 0.9,
      weightkg: 19,
      color: 'Yellow',
      prevo: 'cyndaquil',
      evos: ['typhlosion'],
      evoLevel: 14,
      eggGroups: ['Field']
    }
  ],
  [
    'typhlosion',
    {
      species: 'typhlosion',
      num: 157,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 84,
        def: 78,
        spa: 109,
        spd: 85,
        spe: 100
      },
      abilities: { first: 'Blaze', hidden: 'Flash Fire' },
      heightm: 1.7,
      weightkg: 79.5,
      color: 'Yellow',
      prevo: 'quilava',
      evoLevel: 36,
      eggGroups: ['Field']
    }
  ],
  [
    'totodile',
    {
      species: 'totodile',
      num: 158,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 64,
        spa: 44,
        spd: 48,
        spe: 43
      },
      abilities: { first: 'Torrent', hidden: 'Sheer Force' },
      heightm: 0.6,
      weightkg: 9.5,
      color: 'Blue',
      evos: ['croconaw'],
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'croconaw',
    {
      species: 'croconaw',
      num: 159,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 80,
        def: 80,
        spa: 59,
        spd: 63,
        spe: 58
      },
      abilities: { first: 'Torrent', hidden: 'Sheer Force' },
      heightm: 1.1,
      weightkg: 25,
      color: 'Blue',
      prevo: 'totodile',
      evos: ['feraligatr'],
      evoLevel: 18,
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'feraligatr',
    {
      species: 'feraligatr',
      num: 160,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 85,
        atk: 105,
        def: 100,
        spa: 79,
        spd: 83,
        spe: 78
      },
      abilities: { first: 'Torrent', hidden: 'Sheer Force' },
      heightm: 2.3,
      weightkg: 88.8,
      color: 'Blue',
      prevo: 'croconaw',
      evoLevel: 30,
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'sentret',
    {
      species: 'sentret',
      num: 161,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 46,
        def: 34,
        spa: 35,
        spd: 45,
        spe: 20
      },
      abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Frisk' },
      heightm: 0.8,
      weightkg: 6,
      color: 'Brown',
      evos: ['furret'],
      eggGroups: ['Field']
    }
  ],
  [
    'furret',
    {
      species: 'furret',
      num: 162,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 76,
        def: 64,
        spa: 45,
        spd: 55,
        spe: 90
      },
      abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Frisk' },
      heightm: 1.8,
      weightkg: 32.5,
      color: 'Brown',
      prevo: 'sentret',
      evoLevel: 15,
      eggGroups: ['Field']
    }
  ],
  [
    'hoothoot',
    {
      species: 'hoothoot',
      num: 163,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 30,
        def: 30,
        spa: 36,
        spd: 56,
        spe: 50
      },
      abilities: { first: 'Insomnia', second: 'Keen Eye', hidden: 'Tinted Lens' },
      heightm: 0.7,
      weightkg: 21.2,
      color: 'Brown',
      evos: ['noctowl'],
      eggGroups: ['Flying']
    }
  ],
  [
    'noctowl',
    {
      species: 'noctowl',
      num: 164,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 50,
        def: 50,
        spa: 86,
        spd: 96,
        spe: 70
      },
      abilities: { first: 'Insomnia', second: 'Keen Eye', hidden: 'Tinted Lens' },
      heightm: 1.6,
      weightkg: 40.8,
      color: 'Brown',
      prevo: 'hoothoot',
      evoLevel: 20,
      eggGroups: ['Flying']
    }
  ],
  [
    'ledyba',
    {
      species: 'ledyba',
      num: 165,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 20,
        def: 30,
        spa: 40,
        spd: 80,
        spe: 55
      },
      abilities: { first: 'Swarm', second: 'Early Bird', hidden: 'Rattled' },
      heightm: 1,
      weightkg: 10.8,
      color: 'Red',
      evos: ['ledian'],
      eggGroups: ['Bug']
    }
  ],
  [
    'ledian',
    {
      species: 'ledian',
      num: 166,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 35,
        def: 50,
        spa: 55,
        spd: 110,
        spe: 85
      },
      abilities: { first: 'Swarm', second: 'Early Bird', hidden: 'Iron Fist' },
      heightm: 1.4,
      weightkg: 35.6,
      color: 'Red',
      prevo: 'ledyba',
      evoLevel: 18,
      eggGroups: ['Bug']
    }
  ],
  [
    'spinarak',
    {
      species: 'spinarak',
      num: 167,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 60,
        def: 40,
        spa: 40,
        spd: 40,
        spe: 30
      },
      abilities: { first: 'Swarm', second: 'Insomnia', hidden: 'Sniper' },
      heightm: 0.5,
      weightkg: 8.5,
      color: 'Green',
      evos: ['ariados'],
      eggGroups: ['Bug']
    }
  ],
  [
    'ariados',
    {
      species: 'ariados',
      num: 168,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 90,
        def: 70,
        spa: 60,
        spd: 70,
        spe: 40
      },
      abilities: { first: 'Swarm', second: 'Insomnia', hidden: 'Sniper' },
      heightm: 1.1,
      weightkg: 33.5,
      color: 'Red',
      prevo: 'spinarak',
      evoLevel: 22,
      eggGroups: ['Bug']
    }
  ],
  [
    'crobat',
    {
      species: 'crobat',
      num: 169,
      types: ['Poison', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 90,
        def: 80,
        spa: 70,
        spd: 80,
        spe: 130
      },
      abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
      heightm: 1.8,
      weightkg: 75,
      color: 'Purple',
      prevo: 'golbat',
      evoLevel: 23,
      eggGroups: ['Flying']
    }
  ],
  [
    'chinchou',
    {
      species: 'chinchou',
      num: 170,
      types: ['Water', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 38,
        def: 38,
        spa: 56,
        spd: 56,
        spe: 67
      },
      abilities: { first: 'Volt Absorb', second: 'Illuminate', hidden: 'Water Absorb' },
      heightm: 0.5,
      weightkg: 12,
      color: 'Blue',
      evos: ['lanturn'],
      eggGroups: ['Water 2']
    }
  ],
  [
    'lanturn',
    {
      species: 'lanturn',
      num: 171,
      types: ['Water', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 125,
        atk: 58,
        def: 58,
        spa: 76,
        spd: 76,
        spe: 67
      },
      abilities: { first: 'Volt Absorb', second: 'Illuminate', hidden: 'Water Absorb' },
      heightm: 1.2,
      weightkg: 22.5,
      color: 'Blue',
      prevo: 'chinchou',
      evoLevel: 27,
      eggGroups: ['Water 2']
    }
  ],
  [
    'pichu',
    {
      species: 'pichu',
      num: 172,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 20,
        atk: 40,
        def: 15,
        spa: 35,
        spd: 35,
        spe: 60
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.3,
      weightkg: 2,
      color: 'Yellow',
      evos: ['pikachu'],
      eggGroups: ['Undiscovered'],
      otherFormes: ['pichuspikyeared']
    }
  ],
  [
    'pichuspikyeared',
    {
      species: 'pichu-spiky-eared',
      num: 172,
      types: ['Electric'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 20,
        atk: 40,
        def: 15,
        spa: 35,
        spd: 35,
        spe: 60
      },
      baseSpecies: 'Pichu',
      forme: 'Spiky-eared',
      formeLetter: 'S',
      abilities: { first: 'Static' },
      heightm: 0.3,
      weightkg: 2,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen4/pichu-spikyeared.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen4-shiny/pichu-spikyeared.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen4-back/pichu-spikyeared.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen4-back-shiny/pichu-spikyeared.png'
    }
  ],
  [
    'cleffa',
    {
      species: 'cleffa',
      num: 173,
      types: ['Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 50,
        atk: 25,
        def: 28,
        spa: 45,
        spd: 55,
        spe: 15
      },
      abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Friend Guard' },
      heightm: 0.3,
      weightkg: 3,
      color: 'Pink',
      evos: ['clefairy'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'igglybuff',
    {
      species: 'igglybuff',
      num: 174,
      types: ['Normal', 'Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 90,
        atk: 30,
        def: 15,
        spa: 40,
        spd: 20,
        spe: 15
      },
      abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Friend Guard' },
      heightm: 0.3,
      weightkg: 1,
      color: 'Pink',
      evos: ['jigglypuff'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'togepi',
    {
      species: 'togepi',
      num: 175,
      types: ['Fairy'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 35,
        atk: 20,
        def: 65,
        spa: 40,
        spd: 65,
        spe: 20
      },
      abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
      heightm: 0.3,
      weightkg: 1.5,
      color: 'White',
      evos: ['togetic'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'togetic',
    {
      species: 'togetic',
      num: 176,
      types: ['Fairy', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 55,
        atk: 40,
        def: 85,
        spa: 80,
        spd: 105,
        spe: 40
      },
      abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
      heightm: 0.6,
      weightkg: 3.2,
      color: 'White',
      prevo: 'togepi',
      evos: ['togekiss'],
      evoLevel: 2,
      eggGroups: ['Flying', 'Fairy']
    }
  ],
  [
    'natu',
    {
      species: 'natu',
      num: 177,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 50,
        def: 45,
        spa: 70,
        spd: 45,
        spe: 70
      },
      abilities: { first: 'Synchronize', second: 'Early Bird', hidden: 'Magic Bounce' },
      heightm: 0.2,
      weightkg: 2,
      color: 'Green',
      evos: ['xatu'],
      eggGroups: ['Flying']
    }
  ],
  [
    'xatu',
    {
      species: 'xatu',
      num: 178,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 75,
        def: 70,
        spa: 95,
        spd: 70,
        spe: 95
      },
      abilities: { first: 'Synchronize', second: 'Early Bird', hidden: 'Magic Bounce' },
      heightm: 1.5,
      weightkg: 15,
      color: 'Green',
      prevo: 'natu',
      evoLevel: 25,
      eggGroups: ['Flying']
    }
  ],
  [
    'mareep',
    {
      species: 'mareep',
      num: 179,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 40,
        def: 40,
        spa: 65,
        spd: 45,
        spe: 35
      },
      abilities: { first: 'Static', hidden: 'Plus' },
      heightm: 0.6,
      weightkg: 7.8,
      color: 'White',
      evos: ['flaaffy'],
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'flaaffy',
    {
      species: 'flaaffy',
      num: 180,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 55,
        def: 55,
        spa: 80,
        spd: 60,
        spe: 45
      },
      abilities: { first: 'Static', hidden: 'Plus' },
      heightm: 0.8,
      weightkg: 13.3,
      color: 'Pink',
      prevo: 'mareep',
      evos: ['ampharos'],
      evoLevel: 15,
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'ampharos',
    {
      species: 'ampharos',
      num: 181,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 75,
        def: 85,
        spa: 115,
        spd: 90,
        spe: 55
      },
      abilities: { first: 'Static', hidden: 'Plus' },
      heightm: 1.4,
      weightkg: 61.5,
      color: 'Yellow',
      prevo: 'flaaffy',
      evoLevel: 30,
      eggGroups: ['Monster', 'Field'],
      otherFormes: ['ampharosmega']
    }
  ],
  [
    'ampharosmega',
    {
      species: 'ampharos-mega',
      num: 181,
      types: ['Electric', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 95,
        def: 105,
        spa: 165,
        spd: 110,
        spe: 45
      },
      baseSpecies: 'Ampharos',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Mold Breaker' },
      heightm: 1.4,
      weightkg: 61.5,
      color: 'Yellow',
      eggGroups: ['Monster', 'Field']
    }
  ],
  [
    'bellossom',
    {
      species: 'bellossom',
      num: 182,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 95,
        spa: 90,
        spd: 100,
        spe: 50
      },
      abilities: { first: 'Chlorophyll', hidden: 'Healer' },
      heightm: 0.4,
      weightkg: 5.8,
      color: 'Green',
      prevo: 'gloom',
      evoLevel: 'use Sun Stone',
      eggGroups: ['Grass']
    }
  ],
  [
    'marill',
    {
      species: 'marill',
      num: 183,
      types: ['Water', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 20,
        def: 50,
        spa: 20,
        spd: 50,
        spe: 40
      },
      abilities: { first: 'Thick Fat', second: 'Huge Power', hidden: 'Sap Sipper' },
      heightm: 0.4,
      weightkg: 8.5,
      color: 'Blue',
      prevo: 'azurill',
      evos: ['azumarill'],
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Water 1', 'Fairy']
    }
  ],
  [
    'azumarill',
    {
      species: 'azumarill',
      num: 184,
      types: ['Water', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 50,
        def: 80,
        spa: 60,
        spd: 80,
        spe: 50
      },
      abilities: { first: 'Thick Fat', second: 'Huge Power', hidden: 'Sap Sipper' },
      heightm: 0.8,
      weightkg: 28.5,
      color: 'Blue',
      prevo: 'marill',
      evoLevel: 18,
      eggGroups: ['Water 1', 'Fairy']
    }
  ],
  [
    'sudowoodo',
    {
      species: 'sudowoodo',
      num: 185,
      types: ['Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 100,
        def: 115,
        spa: 30,
        spd: 65,
        spe: 30
      },
      abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Rattled' },
      heightm: 1.2,
      weightkg: 38,
      color: 'Brown',
      prevo: 'bonsly',
      evoLevel: 'Level up while knowing Mimic',
      eggGroups: ['Mineral']
    }
  ],
  [
    'politoed',
    {
      species: 'politoed',
      num: 186,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 75,
        def: 75,
        spa: 90,
        spd: 100,
        spe: 70
      },
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Drizzle' },
      heightm: 1.1,
      weightkg: 33.9,
      color: 'Green',
      prevo: 'poliwhirl',
      evoLevel: "Trade while holding King's Rock",
      eggGroups: ['Water 1']
    }
  ],
  [
    'hoppip',
    {
      species: 'hoppip',
      num: 187,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 35,
        def: 40,
        spa: 35,
        spd: 55,
        spe: 50
      },
      abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Infiltrator' },
      heightm: 0.4,
      weightkg: 0.5,
      color: 'Pink',
      evos: ['skiploom'],
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'skiploom',
    {
      species: 'skiploom',
      num: 188,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 45,
        def: 50,
        spa: 45,
        spd: 65,
        spe: 80
      },
      abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Infiltrator' },
      heightm: 0.6,
      weightkg: 1,
      color: 'Green',
      prevo: 'hoppip',
      evos: ['jumpluff'],
      evoLevel: 18,
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'jumpluff',
    {
      species: 'jumpluff',
      num: 189,
      types: ['Grass', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 55,
        def: 70,
        spa: 55,
        spd: 95,
        spe: 110
      },
      abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Infiltrator' },
      heightm: 0.8,
      weightkg: 3,
      color: 'Blue',
      prevo: 'skiploom',
      evoLevel: 27,
      eggGroups: ['Fairy', 'Grass']
    }
  ],
  [
    'aipom',
    {
      species: 'aipom',
      num: 190,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 70,
        def: 55,
        spa: 40,
        spd: 55,
        spe: 85
      },
      abilities: { first: 'Run Away', second: 'Pickup', hidden: 'Skill Link' },
      heightm: 0.8,
      weightkg: 11.5,
      color: 'Purple',
      evos: ['ambipom'],
      eggGroups: ['Field']
    }
  ],
  [
    'sunkern',
    {
      species: 'sunkern',
      num: 191,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 30,
        def: 30,
        spa: 30,
        spd: 30,
        spe: 30
      },
      abilities: { first: 'Chlorophyll', second: 'Solar Power', hidden: 'Early Bird' },
      heightm: 0.3,
      weightkg: 1.8,
      color: 'Yellow',
      evos: ['sunflora'],
      eggGroups: ['Grass']
    }
  ],
  [
    'sunflora',
    {
      species: 'sunflora',
      num: 192,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 75,
        def: 55,
        spa: 105,
        spd: 85,
        spe: 30
      },
      abilities: { first: 'Chlorophyll', second: 'Solar Power', hidden: 'Early Bird' },
      heightm: 0.8,
      weightkg: 8.5,
      color: 'Yellow',
      prevo: 'sunkern',
      evoLevel: 'use Sun Stone',
      eggGroups: ['Grass']
    }
  ],
  [
    'yanma',
    {
      species: 'yanma',
      num: 193,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 65,
        def: 45,
        spa: 75,
        spd: 45,
        spe: 95
      },
      abilities: { first: 'Speed Boost', second: 'Compound Eyes', hidden: 'Frisk' },
      heightm: 1.2,
      weightkg: 38,
      color: 'Red',
      evos: ['yanmega'],
      eggGroups: ['Bug']
    }
  ],
  [
    'wooper',
    {
      species: 'wooper',
      num: 194,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 45,
        def: 45,
        spa: 25,
        spd: 25,
        spe: 15
      },
      abilities: { first: 'Damp', second: 'Water Absorb', hidden: 'Unaware' },
      heightm: 0.4,
      weightkg: 8.5,
      color: 'Blue',
      evos: ['quagsire'],
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'quagsire',
    {
      species: 'quagsire',
      num: 195,
      types: ['Water', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 85,
        def: 85,
        spa: 65,
        spd: 65,
        spe: 35
      },
      abilities: { first: 'Damp', second: 'Water Absorb', hidden: 'Unaware' },
      heightm: 1.4,
      weightkg: 75,
      color: 'Blue',
      prevo: 'wooper',
      evoLevel: 20,
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'espeon',
    {
      species: 'espeon',
      num: 196,
      types: ['Psychic'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 65,
        def: 60,
        spa: 130,
        spd: 95,
        spe: 110
      },
      abilities: { first: 'Synchronize', hidden: 'Magic Bounce' },
      heightm: 0.9,
      weightkg: 26.5,
      color: 'Purple',
      prevo: 'eevee',
      evoLevel: 'Level up during Daytime with happiness of at least 220',
      eggGroups: ['Field']
    }
  ],
  [
    'umbreon',
    {
      species: 'umbreon',
      num: 197,
      types: ['Dark'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 95,
        atk: 65,
        def: 110,
        spa: 60,
        spd: 130,
        spe: 65
      },
      abilities: { first: 'Synchronize', hidden: 'Inner Focus' },
      heightm: 1,
      weightkg: 27,
      color: 'Black',
      prevo: 'eevee',
      evoLevel: 'Level up during Nighttime with happiness of at least 220',
      eggGroups: ['Field']
    }
  ],
  [
    'murkrow',
    {
      species: 'murkrow',
      num: 198,
      types: ['Dark', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 42,
        spa: 85,
        spd: 42,
        spe: 91
      },
      abilities: { first: 'Insomnia', second: 'Super Luck', hidden: 'Prankster' },
      heightm: 0.5,
      weightkg: 2.1,
      color: 'Black',
      evos: ['honchkrow'],
      eggGroups: ['Flying']
    }
  ],
  [
    'slowking',
    {
      species: 'slowking',
      num: 199,
      types: ['Water', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 75,
        def: 80,
        spa: 100,
        spd: 110,
        spe: 30
      },
      abilities: { first: 'Oblivious', second: 'Own Tempo', hidden: 'Regenerator' },
      heightm: 2,
      weightkg: 79.5,
      color: 'Pink',
      prevo: 'slowpoke',
      evoLevel: "Trade while holding King's Rock",
      eggGroups: ['Monster', 'Water 1'],
      otherFormes: ['slowkinggalar']
    }
  ],
  [
    'slowkinggalar',
    {
      species: 'slowking-galar',
      baseSpecies: 'Slowking',
      forme: 'Galar',
      formeLetter: 'G',
      num: 145,
      types: ['Poison', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 65,
        def: 80,
        spa: 110,
        spd: 110,
        spe: 30
      },
      abilities: { first: 'Curious Medicine', second: 'Own Tempo', hidden: 'Regenerator' },
      heightm: 1.8,
      weightkg: 79.5,
      color: 'Pink',
      prevo: 'slowpokegalar',
      evoLevel: "Trade while holding King's Rock",
      eggGroups: ['Monster', 'Water 1']
    }
  ],
  [
    'misdreavus',
    {
      species: 'misdreavus',
      num: 200,
      types: ['Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 60,
        def: 60,
        spa: 85,
        spd: 85,
        spe: 85
      },
      abilities: { first: 'Levitate' },
      heightm: 0.7,
      weightkg: 1,
      color: 'Gray',
      evos: ['mismagius'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'unown',
    {
      species: 'unown',
      num: 201,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 48,
        atk: 72,
        def: 48,
        spa: 72,
        spd: 48,
        spe: 48
      },
      baseForme: 'A',
      abilities: { first: 'Levitate' },
      heightm: 0.5,
      weightkg: 5,
      color: 'Black',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: [
        'Unown-B',
        'Unown-C',
        'Unown-D',
        'Unown-E',
        'Unown-F',
        'Unown-G',
        'Unown-H',
        'Unown-I',
        'Unown-J',
        'Unown-K',
        'Unown-L',
        'Unown-M',
        'Unown-N',
        'Unown-O',
        'Unown-P',
        'Unown-Q',
        'Unown-R',
        'Unown-S',
        'Unown-T',
        'Unown-U',
        'Unown-V',
        'Unown-W',
        'Unown-X',
        'Unown-Y',
        'Unown-Z',
        'Unown-Exclamation',
        'Unown-Question'
      ]
    }
  ],
  [
    'wobbuffet',
    {
      species: 'wobbuffet',
      num: 202,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 190,
        atk: 33,
        def: 58,
        spa: 33,
        spd: 58,
        spe: 33
      },
      abilities: { first: 'Shadow Tag', hidden: 'Telepathy' },
      heightm: 1.3,
      weightkg: 28.5,
      color: 'Blue',
      prevo: 'wynaut',
      evoLevel: 15,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'girafarig',
    {
      species: 'girafarig',
      num: 203,
      types: ['Normal', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 80,
        def: 65,
        spa: 90,
        spd: 65,
        spe: 85
      },
      abilities: { first: 'Inner Focus', second: 'Early Bird', hidden: 'Sap Sipper' },
      heightm: 1.5,
      weightkg: 41.5,
      color: 'Yellow',
      eggGroups: ['Field']
    }
  ],
  [
    'pineco',
    {
      species: 'pineco',
      num: 204,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 65,
        def: 90,
        spa: 35,
        spd: 35,
        spe: 15
      },
      abilities: { first: 'Sturdy', hidden: 'Overcoat' },
      heightm: 0.6,
      weightkg: 7.2,
      color: 'Gray',
      evos: ['forretress'],
      eggGroups: ['Bug']
    }
  ],
  [
    'forretress',
    {
      species: 'forretress',
      num: 205,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 90,
        def: 140,
        spa: 60,
        spd: 60,
        spe: 40
      },
      abilities: { first: 'Sturdy', hidden: 'Overcoat' },
      heightm: 1.2,
      weightkg: 125.8,
      color: 'Purple',
      prevo: 'pineco',
      evoLevel: 31,
      eggGroups: ['Bug']
    }
  ],
  [
    'dunsparce',
    {
      species: 'dunsparce',
      num: 206,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 70,
        def: 70,
        spa: 65,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Serene Grace', second: 'Run Away', hidden: 'Rattled' },
      heightm: 1.5,
      weightkg: 14,
      color: 'Yellow',
      eggGroups: ['Field']
    }
  ],
  [
    'gligar',
    {
      species: 'gligar',
      num: 207,
      types: ['Ground', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 75,
        def: 105,
        spa: 35,
        spd: 65,
        spe: 85
      },
      abilities: { first: 'Hyper Cutter', second: 'Sand Veil', hidden: 'Immunity' },
      heightm: 1.1,
      weightkg: 64.8,
      color: 'Purple',
      evos: ['gliscor'],
      eggGroups: ['Bug']
    }
  ],
  [
    'steelix',
    {
      species: 'steelix',
      num: 208,
      types: ['Steel', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 85,
        def: 200,
        spa: 55,
        spd: 65,
        spe: 30
      },
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sheer Force' },
      heightm: 9.2,
      weightkg: 400,
      color: 'Gray',
      prevo: 'onix',
      evoLevel: 'Trade while holding Metal Coat',
      eggGroups: ['Mineral'],
      otherFormes: ['steelixmega']
    }
  ],
  [
    'steelixmega',
    {
      species: 'steelix-mega',
      num: 208,
      types: ['Steel', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 125,
        def: 230,
        spa: 55,
        spd: 95,
        spe: 30
      },
      baseSpecies: 'Steelix',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Sand Force' },
      heightm: 10.5,
      weightkg: 740,
      color: 'Gray',
      eggGroups: ['Mineral']
    }
  ],
  [
    'snubbull',
    {
      species: 'snubbull',
      num: 209,
      types: ['Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 60,
        atk: 80,
        def: 50,
        spa: 40,
        spd: 40,
        spe: 30
      },
      abilities: { first: 'Intimidate', second: 'Run Away', hidden: 'Rattled' },
      heightm: 0.6,
      weightkg: 7.8,
      color: 'Pink',
      evos: ['granbull'],
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'granbull',
    {
      species: 'granbull',
      num: 210,
      types: ['Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 90,
        atk: 120,
        def: 75,
        spa: 60,
        spd: 60,
        spe: 45
      },
      abilities: { first: 'Intimidate', second: 'Quick Feet', hidden: 'Rattled' },
      heightm: 1.4,
      weightkg: 48.7,
      color: 'Purple',
      prevo: 'snubbull',
      evoLevel: 23,
      eggGroups: ['Field', 'Fairy']
    }
  ],
  [
    'qwilfish',
    {
      species: 'qwilfish',
      num: 211,
      types: ['Water', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 95,
        def: 85,
        spa: 55,
        spd: 55,
        spe: 85
      },
      abilities: { first: 'Poison Point', second: 'Swift Swim', hidden: 'Intimidate' },
      heightm: 0.5,
      weightkg: 3.9,
      color: 'Gray',
      eggGroups: ['Water 2']
    }
  ],
  [
    'scizor',
    {
      species: 'scizor',
      num: 212,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 130,
        def: 100,
        spa: 55,
        spd: 80,
        spe: 65
      },
      abilities: { first: 'Swarm', second: 'Technician', hidden: 'Light Metal' },
      heightm: 1.8,
      weightkg: 118,
      color: 'Red',
      prevo: 'scyther',
      evoLevel: 'Trade while holding Metal Coat',
      eggGroups: ['Bug'],
      otherFormes: ['scizormega']
    }
  ],
  [
    'scizormega',
    {
      species: 'scizor-mega',
      num: 212,
      types: ['Bug', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Scizor',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 70,
        atk: 150,
        def: 140,
        spa: 65,
        spd: 100,
        spe: 75
      },
      abilities: { first: 'Technician' },
      heightm: 2,
      weightkg: 125,
      color: 'Red',
      eggGroups: ['Bug']
    }
  ],
  [
    'shuckle',
    {
      species: 'shuckle',
      num: 213,
      types: ['Bug', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 20,
        atk: 10,
        def: 230,
        spa: 10,
        spd: 230,
        spe: 5
      },
      abilities: { first: 'Sturdy', second: 'Gluttony', hidden: 'Contrary' },
      heightm: 0.6,
      weightkg: 20.5,
      color: 'Yellow',
      eggGroups: ['Bug']
    }
  ],
  [
    'heracross',
    {
      species: 'heracross',
      num: 214,
      types: ['Bug', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 125,
        def: 75,
        spa: 40,
        spd: 95,
        spe: 85
      },
      abilities: { first: 'Swarm', second: 'Guts', hidden: 'Moxie' },
      heightm: 1.5,
      weightkg: 54,
      color: 'Blue',
      eggGroups: ['Bug'],
      otherFormes: ['heracrossmega']
    }
  ],
  [
    'heracrossmega',
    {
      species: 'heracross-mega',
      num: 214,
      baseSpecies: 'Heracross',
      forme: 'Mega',
      formeLetter: 'M',
      types: ['Bug', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 185,
        def: 115,
        spa: 40,
        spd: 105,
        spe: 75
      },
      abilities: { first: 'Skill Link' },
      heightm: 1.7,
      weightkg: 62.5,
      color: 'Blue',
      eggGroups: ['Bug']
    }
  ],
  [
    'sneasel',
    {
      species: 'sneasel',
      num: 215,
      types: ['Dark', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 95,
        def: 55,
        spa: 35,
        spd: 75,
        spe: 115
      },
      abilities: { first: 'Inner Focus', second: 'Keen Eye', hidden: 'Pickpocket' },
      heightm: 0.9,
      weightkg: 28,
      color: 'Black',
      evos: ['weavile'],
      eggGroups: ['Field']
    }
  ],
  [
    'teddiursa',
    {
      species: 'teddiursa',
      num: 216,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 80,
        def: 50,
        spa: 50,
        spd: 50,
        spe: 40
      },
      abilities: { first: 'Pickup', second: 'Quick Feet', hidden: 'Honey Gather' },
      heightm: 0.6,
      weightkg: 8.8,
      color: 'Brown',
      evos: ['ursaring'],
      eggGroups: ['Field']
    }
  ],
  [
    'ursaring',
    {
      species: 'ursaring',
      num: 217,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 130,
        def: 75,
        spa: 75,
        spd: 75,
        spe: 55
      },
      abilities: { first: 'Guts', second: 'Quick Feet', hidden: 'Unnerve' },
      heightm: 1.8,
      weightkg: 125.8,
      color: 'Brown',
      prevo: 'teddiursa',
      evoLevel: 30,
      eggGroups: ['Field']
    }
  ],
  [
    'slugma',
    {
      species: 'slugma',
      num: 218,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 40,
        def: 40,
        spa: 70,
        spd: 40,
        spe: 20
      },
      abilities: { first: 'Magma Armor', second: 'Flame Body', hidden: 'Weak Armor' },
      heightm: 0.7,
      weightkg: 35,
      color: 'Red',
      evos: ['magcargo'],
      eggGroups: ['Amorphous']
    }
  ],
  [
    'magcargo',
    {
      species: 'magcargo',
      num: 219,
      types: ['Fire', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 120,
        spa: 90,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Magma Armor', second: 'Flame Body', hidden: 'Weak Armor' },
      heightm: 0.8,
      weightkg: 55,
      color: 'Red',
      prevo: 'slugma',
      evoLevel: 38,
      eggGroups: ['Amorphous']
    }
  ],
  [
    'swinub',
    {
      species: 'swinub',
      num: 220,
      types: ['Ice', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 40,
        spa: 30,
        spd: 30,
        spe: 50
      },
      abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
      heightm: 0.4,
      weightkg: 6.5,
      color: 'Brown',
      evos: ['piloswine'],
      eggGroups: ['Field']
    }
  ],
  [
    'piloswine',
    {
      species: 'piloswine',
      num: 221,
      types: ['Ice', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 80,
        spa: 60,
        spd: 60,
        spe: 50
      },
      abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
      heightm: 1.1,
      weightkg: 55.8,
      color: 'Brown',
      prevo: 'swinub',
      evos: ['mamoswine'],
      evoLevel: 33,
      eggGroups: ['Field']
    }
  ],
  [
    'corsola',
    {
      species: 'corsola',
      num: 222,
      types: ['Water', 'Rock'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 65,
        atk: 55,
        def: 95,
        spa: 65,
        spd: 95,
        spe: 35
      },
      abilities: { first: 'Hustle', second: 'Natural Cure', hidden: 'Regenerator' },
      heightm: 0.6,
      weightkg: 5,
      color: 'Pink',
      eggGroups: ['Water 1', 'Water 3'],
      otherFormes: ['corsolagalar']
    }
  ],
  [
    'corsolagalar',
    {
      species: 'corsola-galar',
      num: 222,
      types: ['Ghost'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseSpecies: 'Corsola',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 60,
        atk: 55,
        def: 100,
        spa: 65,
        spd: 100,
        spe: 30
      },
      abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
      heightm: 0.6,
      weightkg: 0.5,
      color: 'White',
      evos: ['cursola'],
      eggGroups: ['Water 1', 'Water 3']
    }
  ],
  [
    'remoraid',
    {
      species: 'remoraid',
      num: 223,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 65,
        def: 35,
        spa: 65,
        spd: 35,
        spe: 65
      },
      abilities: { first: 'Hustle', second: 'Sniper', hidden: 'Moody' },
      heightm: 0.6,
      weightkg: 12,
      color: 'Gray',
      evos: ['octillery'],
      eggGroups: ['Water 1', 'Water 2']
    }
  ],
  [
    'octillery',
    {
      species: 'octillery',
      num: 224,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 105,
        def: 75,
        spa: 105,
        spd: 75,
        spe: 45
      },
      abilities: { first: 'Suction Cups', second: 'Sniper', hidden: 'Moody' },
      heightm: 0.9,
      weightkg: 28.5,
      color: 'Red',
      prevo: 'remoraid',
      evoLevel: 25,
      eggGroups: ['Water 1', 'Water 2']
    }
  ],
  [
    'delibird',
    {
      species: 'delibird',
      num: 225,
      types: ['Ice', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 55,
        def: 45,
        spa: 65,
        spd: 45,
        spe: 75
      },
      abilities: { first: 'Vital Spirit', second: 'Hustle', hidden: 'Insomnia' },
      heightm: 0.9,
      weightkg: 16,
      color: 'Red',
      eggGroups: ['Water 1', 'Field']
    }
  ],
  [
    'mantine',
    {
      species: 'mantine',
      num: 226,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 40,
        def: 70,
        spa: 80,
        spd: 140,
        spe: 70
      },
      abilities: { first: 'Swift Swim', second: 'Water Absorb', hidden: 'Water Veil' },
      heightm: 2.1,
      weightkg: 220,
      color: 'Purple',
      prevo: 'mantyke',
      evoLevel: 'Level up with Remoraid in party',
      eggGroups: ['Water 1']
    }
  ],
  [
    'skarmory',
    {
      species: 'skarmory',
      num: 227,
      types: ['Steel', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 80,
        def: 140,
        spa: 40,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Keen Eye', second: 'Sturdy', hidden: 'Weak Armor' },
      heightm: 1.7,
      weightkg: 50.5,
      color: 'Gray',
      eggGroups: ['Flying']
    }
  ],
  [
    'houndour',
    {
      species: 'houndour',
      num: 228,
      types: ['Dark', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 60,
        def: 30,
        spa: 80,
        spd: 50,
        spe: 65
      },
      abilities: { first: 'Early Bird', second: 'Flash Fire', hidden: 'Unnerve' },
      heightm: 0.6,
      weightkg: 10.8,
      color: 'Black',
      evos: ['houndoom'],
      eggGroups: ['Field']
    }
  ],
  [
    'houndoom',
    {
      species: 'houndoom',
      num: 229,
      types: ['Dark', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 90,
        def: 50,
        spa: 110,
        spd: 80,
        spe: 95
      },
      abilities: { first: 'Early Bird', second: 'Flash Fire', hidden: 'Unnerve' },
      heightm: 1.4,
      weightkg: 35,
      color: 'Black',
      prevo: 'houndour',
      evoLevel: 24,
      eggGroups: ['Field'],
      otherFormes: ['houndoommega']
    }
  ],
  [
    'houndoommega',
    {
      species: 'houndoom-mega',
      num: 229,
      types: ['Dark', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Houndoom',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 75,
        atk: 90,
        def: 90,
        spa: 140,
        spd: 90,
        spe: 115
      },
      abilities: { first: 'Solar Power' },
      heightm: 1.9,
      weightkg: 49.5,
      color: 'Black',
      eggGroups: ['Field']
    }
  ],
  [
    'kingdra',
    {
      species: 'kingdra',
      num: 230,
      types: ['Water', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 95,
        def: 95,
        spa: 95,
        spd: 95,
        spe: 85
      },
      abilities: { first: 'Swift Swim', second: 'Sniper', hidden: 'Damp' },
      heightm: 1.8,
      weightkg: 152,
      color: 'Blue',
      prevo: 'seadra',
      evoLevel: 'Trade while holding Dragon Scale',
      eggGroups: ['Water 1', 'Dragon']
    }
  ],
  [
    'phanpy',
    {
      species: 'phanpy',
      num: 231,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 60,
        def: 60,
        spa: 40,
        spd: 40,
        spe: 40
      },
      abilities: { first: 'Pickup', hidden: 'Sand Veil' },
      heightm: 0.5,
      weightkg: 33.5,
      color: 'Blue',
      evos: ['donphan'],
      eggGroups: ['Field']
    }
  ],
  [
    'donphan',
    {
      species: 'donphan',
      num: 232,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 120,
        def: 120,
        spa: 60,
        spd: 60,
        spe: 50
      },
      abilities: { first: 'Sturdy', hidden: 'Sand Veil' },
      heightm: 1.1,
      weightkg: 120,
      color: 'Gray',
      prevo: 'phanpy',
      evoLevel: 25,
      eggGroups: ['Field']
    }
  ],
  [
    'porygon2',
    {
      species: 'porygon2',
      num: 233,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 85,
        atk: 80,
        def: 90,
        spa: 105,
        spd: 95,
        spe: 60
      },
      abilities: { first: 'Trace', second: 'Download', hidden: 'Analytic' },
      heightm: 0.6,
      weightkg: 32.5,
      color: 'Red',
      prevo: 'porygon',
      evos: ['porygonz'],
      evoLevel: 'Trade while holding Up-Grade',
      eggGroups: ['Mineral']
    }
  ],
  [
    'stantler',
    {
      species: 'stantler',
      num: 234,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 73,
        atk: 95,
        def: 62,
        spa: 85,
        spd: 65,
        spe: 85
      },
      abilities: { first: 'Intimidate', second: 'Frisk', hidden: 'Sap Sipper' },
      heightm: 1.4,
      weightkg: 71.2,
      color: 'Brown',
      eggGroups: ['Field']
    }
  ],
  [
    'smeargle',
    {
      species: 'smeargle',
      num: 235,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 20,
        def: 35,
        spa: 20,
        spd: 45,
        spe: 75
      },
      abilities: { first: 'Own Tempo', second: 'Technician', hidden: 'Moody' },
      heightm: 1.2,
      weightkg: 58,
      color: 'White',
      eggGroups: ['Field']
    }
  ],
  [
    'tyrogue',
    {
      species: 'tyrogue',
      num: 236,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 35,
        def: 35,
        spa: 35,
        spd: 35,
        spe: 35
      },
      abilities: { first: 'Guts', second: 'Steadfast', hidden: 'Vital Spirit' },
      heightm: 0.7,
      weightkg: 21,
      color: 'Purple',
      evos: ['hitmonlee', 'hitmonchan', 'hitmontop'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'hitmontop',
    {
      species: 'hitmontop',
      num: 237,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 50,
        atk: 95,
        def: 95,
        spa: 35,
        spd: 110,
        spe: 70
      },
      abilities: { first: 'Intimidate', second: 'Technician', hidden: 'Steadfast' },
      heightm: 1.4,
      weightkg: 48,
      color: 'Brown',
      prevo: 'tyrogue',
      evoLevel: 'Level 20 with Attack = Defense',
      eggGroups: ['Human-Like']
    }
  ],
  [
    'smoochum',
    {
      species: 'smoochum',
      num: 238,
      types: ['Ice', 'Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 45,
        atk: 30,
        def: 15,
        spa: 85,
        spd: 65,
        spe: 65
      },
      abilities: { first: 'Oblivious', second: 'Forewarn', hidden: 'Hydration' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Pink',
      evos: ['jynx'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'elekid',
    {
      species: 'elekid',
      num: 239,
      types: ['Electric'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 45,
        atk: 63,
        def: 37,
        spa: 65,
        spd: 55,
        spe: 95
      },
      abilities: { first: 'Static', hidden: 'Vital Spirit' },
      heightm: 0.6,
      weightkg: 23.5,
      color: 'Yellow',
      evos: ['electabuzz'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'magby',
    {
      species: 'magby',
      num: 240,
      types: ['Fire'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 45,
        atk: 75,
        def: 37,
        spa: 70,
        spd: 55,
        spe: 83
      },
      abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
      heightm: 0.7,
      weightkg: 21.4,
      color: 'Red',
      evos: ['magmar'],
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'miltank',
    {
      species: 'miltank',
      num: 241,
      types: ['Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 95,
        atk: 80,
        def: 105,
        spa: 40,
        spd: 70,
        spe: 100
      },
      abilities: { first: 'Thick Fat', second: 'Scrappy', hidden: 'Sap Sipper' },
      heightm: 1.2,
      weightkg: 75.5,
      color: 'Pink',
      eggGroups: ['Field']
    }
  ],
  [
    'blissey',
    {
      species: 'blissey',
      num: 242,
      types: ['Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 255,
        atk: 10,
        def: 10,
        spa: 75,
        spd: 135,
        spe: 55
      },
      abilities: { first: 'Natural Cure', second: 'Serene Grace', hidden: 'Healer' },
      heightm: 1.5,
      weightkg: 46.8,
      color: 'Pink',
      prevo: 'chansey',
      evoLevel: 2,
      eggGroups: ['Fairy']
    }
  ],
  [
    'raikou',
    {
      species: 'raikou',
      num: 243,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 85,
        def: 75,
        spa: 115,
        spd: 100,
        spe: 115
      },
      abilities: { first: 'Pressure', hidden: 'Inner Focus' },
      heightm: 1.9,
      weightkg: 178,
      color: 'Yellow',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'entei',
    {
      species: 'entei',
      num: 244,
      types: ['Fire'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 115,
        atk: 115,
        def: 85,
        spa: 90,
        spd: 75,
        spe: 100
      },
      abilities: { first: 'Pressure', hidden: 'Inner Focus' },
      heightm: 2.1,
      weightkg: 198,
      color: 'Brown',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'suicune',
    {
      species: 'suicune',
      num: 245,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 75,
        def: 115,
        spa: 90,
        spd: 115,
        spe: 85
      },
      abilities: { first: 'Pressure', hidden: 'Inner Focus' },
      heightm: 2,
      weightkg: 187,
      color: 'Blue',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'larvitar',
    {
      species: 'larvitar',
      num: 246,
      types: ['Rock', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 64,
        def: 50,
        spa: 45,
        spd: 50,
        spe: 41
      },
      abilities: { first: 'Guts', hidden: 'Sand Veil' },
      heightm: 0.6,
      weightkg: 72,
      color: 'Green',
      evos: ['pupitar'],
      eggGroups: ['Monster']
    }
  ],
  [
    'pupitar',
    {
      species: 'pupitar',
      num: 247,
      types: ['Rock', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 84,
        def: 70,
        spa: 65,
        spd: 70,
        spe: 51
      },
      abilities: { first: 'Shed Skin' },
      heightm: 1.2,
      weightkg: 152,
      color: 'Gray',
      prevo: 'larvitar',
      evos: ['tyranitar'],
      evoLevel: 30,
      eggGroups: ['Monster']
    }
  ],
  [
    'tyranitar',
    {
      species: 'tyranitar',
      num: 248,
      types: ['Rock', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 134,
        def: 110,
        spa: 95,
        spd: 100,
        spe: 61
      },
      abilities: { first: 'Sand Stream', hidden: 'Unnerve' },
      heightm: 2,
      weightkg: 202,
      color: 'Green',
      prevo: 'pupitar',
      evoLevel: 55,
      eggGroups: ['Monster'],
      otherFormes: ['tyranitarmega']
    }
  ],
  [
    'tyranitarmega',
    {
      species: 'tyranitar-mega',
      num: 248,
      types: ['Rock', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 164,
        def: 150,
        spa: 95,
        spd: 120,
        spe: 71
      },
      baseSpecies: 'Tyranitar',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Sand Stream' },
      heightm: 2.5,
      weightkg: 255,
      color: 'Green',
      eggGroups: ['Monster']
    }
  ],
  [
    'lugia',
    {
      species: 'lugia',
      num: 249,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 106,
        atk: 90,
        def: 130,
        spa: 90,
        spd: 154,
        spe: 110
      },
      abilities: { first: 'Pressure', hidden: 'Multiscale' },
      heightm: 5.2,
      weightkg: 216,
      color: 'White',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'hooh',
    {
      species: 'ho-oh',
      num: 250,
      types: ['Fire', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 106,
        atk: 130,
        def: 90,
        spa: 110,
        spd: 154,
        spe: 90
      },
      abilities: { first: 'Pressure', hidden: 'Regenerator' },
      heightm: 3.8,
      weightkg: 199,
      color: 'Red',
      eggGroups: ['Undiscovered']
    }
  ],
  [
    'celebi',
    {
      species: 'celebi',
      num: 251,
      types: ['Psychic', 'Grass'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Natural Cure' },
      heightm: 0.6,
      weightkg: 5,
      color: 'Green',
      eggGroups: ['Undiscovered']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
