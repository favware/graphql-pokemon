import type { Pokemon } from '../../utils/pokemon';
import { Pokedex } from './';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'syclant',
    {
      species: 'syclant',
      num: -2,
      types: ['Ice', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 116,
        def: 70,
        spa: 114,
        spd: 64,
        spe: 121
      },
      abilities: { first: 'Compound Eyes', second: 'Mountaineer', hidden: 'Ice Body' },
      heightm: 1.7,
      weightkg: 52,
      color: 'Blue',
      prevo: 'syclar',
      evoLevel: 30,
      eggGroups: ['Bug'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/syclant.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/syclant.png'
    }
  ],
  [
    'revenankh',
    {
      species: 'revenankh',
      num: -3,
      types: ['Ghost', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 105,
        def: 90,
        spa: 65,
        spd: 110,
        spe: 65
      },
      abilities: { first: 'Shed Skin', second: 'Air Lock', hidden: 'Triage' },
      heightm: 1.8,
      weightkg: 44,
      color: 'White',
      eggGroups: ['Amorphous', 'Human-Like'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/revenankh.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/revenankh.png'
    }
  ],
  [
    'pyroak',
    {
      species: 'pyroak',
      num: -6,
      types: ['Fire', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 120,
        atk: 70,
        def: 105,
        spa: 95,
        spd: 90,
        spe: 60
      },
      abilities: { first: 'Rock Head', second: 'Battle Armor', hidden: 'White Smoke' },
      heightm: 2.1,
      weightkg: 168,
      color: 'Brown',
      prevo: 'flarelm',
      evoLevel: 38,
      eggGroups: ['Monster', 'Dragon'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pyroak.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pyroak.png'
    }
  ],
  [
    'fidgit',
    {
      species: 'fidgit',
      num: -8,
      types: ['Poison', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 76,
        def: 109,
        spa: 90,
        spd: 80,
        spe: 105
      },
      abilities: { first: 'Persistent', second: 'Vital Spirit', hidden: 'Frisk' },
      heightm: 0.9,
      weightkg: 53,
      color: 'Purple',
      prevo: 'breezi',
      evoLevel: 33,
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/fidgit.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/fidgit.png'
    }
  ],
  [
    'stratagem',
    {
      species: 'stratagem',
      num: -11,
      types: ['Rock'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 60,
        def: 65,
        spa: 120,
        spd: 70,
        spe: 130
      },
      abilities: { first: 'Levitate', second: 'Technician', hidden: 'Sniper' },
      heightm: 0.9,
      weightkg: 45,
      color: 'Gray',
      prevo: 'tactite',
      evoLevel: 28,
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/stratagem.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/stratagem.png'
    }
  ],
  [
    'arghonaut',
    {
      species: 'arghonaut',
      num: -13,
      types: ['Water', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 110,
        def: 95,
        spa: 70,
        spd: 100,
        spe: 75
      },
      abilities: { first: 'Unaware', hidden: 'Technician' },
      heightm: 1.7,
      weightkg: 151,
      color: 'Green',
      prevo: 'privatyke',
      evoLevel: 37,
      eggGroups: ['Water 1', 'Water 3'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/arghonaut.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/arghonaut.png'
    }
  ],
  [
    'kitsunoh',
    {
      species: 'kitsunoh',
      num: -14,
      types: ['Ghost', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 103,
        def: 85,
        spa: 55,
        spd: 80,
        spe: 110
      },
      abilities: { first: 'Frisk', second: 'Limber', hidden: 'Iron Fist' },
      heightm: 1.1,
      weightkg: 51,
      color: 'Gray',
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/kitsunoh.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/kitsunoh.png'
    }
  ],
  [
    'cyclohm',
    {
      species: 'cyclohm',
      num: -15,
      types: ['Electric', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 108,
        atk: 60,
        def: 118,
        spa: 112,
        spd: 70,
        spe: 80
      },
      abilities: { first: 'Shield Dust', second: 'Static', hidden: 'Damp' },
      heightm: 1.6,
      weightkg: 59,
      color: 'Yellow',
      eggGroups: ['Dragon', 'Monster'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cyclohm.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cyclohm.png'
    }
  ],
  [
    'colossoil',
    {
      species: 'colossoil',
      num: -16,
      types: ['Dark', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 133,
        atk: 122,
        def: 72,
        spa: 71,
        spd: 72,
        spe: 95
      },
      abilities: { first: 'Rebound', second: 'Guts', hidden: 'Unnerve' },
      heightm: 2.6,
      weightkg: 683.6,
      color: 'Brown',
      eggGroups: ['Water 2', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/colossoil.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/colossoil.png'
    }
  ],
  [
    'krilowatt',
    {
      species: 'krilowatt',
      num: -17,
      types: ['Electric', 'Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 151,
        atk: 84,
        def: 73,
        spa: 83,
        spd: 74,
        spe: 105
      },
      abilities: { first: 'Trace', second: 'Magic Guard', hidden: 'Minus' },
      heightm: 0.7,
      weightkg: 10.6,
      color: 'Red',
      eggGroups: ['Water 1', 'Fairy'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/krillowatt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/krillowatt.png'
    }
  ],
  [
    'voodoom',
    {
      species: 'voodoom',
      num: -19,
      types: ['Fighting', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 85,
        def: 80,
        spa: 105,
        spd: 80,
        spe: 110
      },
      abilities: { first: 'Volt Absorb', second: 'Lightning Rod', hidden: 'Cursed Body' },
      heightm: 2,
      weightkg: 75.5,
      color: 'Brown',
      prevo: 'voodoll',
      evoLevel: 32,
      eggGroups: ['Human-Like', 'Ground'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/voodoom.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/voodoom.png'
    }
  ],
  [
    'tomohawk',
    {
      species: 'tomohawk',
      num: -21,
      types: ['Flying', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 60,
        def: 90,
        spa: 115,
        spd: 80,
        spe: 85
      },
      abilities: { first: 'Intimidate', second: 'Prankster', hidden: 'Justified' },
      heightm: 1.27,
      weightkg: 37.2,
      color: 'Red',
      prevo: 'scratchet',
      evoLevel: 23,
      eggGroups: ['Field', 'Flying'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/tomohawk.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/tomohawk.png'
    }
  ],
  [
    'necturna',
    {
      species: 'necturna',
      num: -23,
      types: ['Grass', 'Ghost'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 64,
        atk: 120,
        def: 100,
        spa: 85,
        spd: 120,
        spe: 58
      },
      abilities: { first: 'Forewarn', hidden: 'Telepathy' },
      heightm: 1.65,
      weightkg: 49.6,
      color: 'Black',
      prevo: 'necturine',
      evoLevel: 31,
      eggGroups: ['Grass', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/necturna.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/necturna.png'
    }
  ],
  [
    'mollux',
    {
      species: 'mollux',
      num: -24,
      types: ['Fire', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 45,
        def: 83,
        spa: 131,
        spd: 105,
        spe: 76
      },
      abilities: { first: 'Dry Skin', hidden: 'Illuminate' },
      heightm: 1.2,
      weightkg: 41,
      color: 'Pink',
      eggGroups: ['Fairy', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/mollux.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/mollux.png'
    }
  ],
  [
    'aurumoth',
    {
      species: 'aurumoth',
      num: -27,
      types: ['Bug', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 110,
        atk: 120,
        def: 99,
        spa: 117,
        spd: 60,
        spe: 94
      },
      abilities: { first: 'Weak Armor', second: 'No Guard', hidden: 'Light Metal' },
      heightm: 2.1,
      weightkg: 193,
      color: 'Purple',
      prevo: 'argalis',
      evoLevel: 50,
      eggGroups: ['Bug'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/aurumoth.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/aurumoth.png'
    }
  ],
  [
    'malaconda',
    {
      species: 'malaconda',
      num: -29,
      types: ['Dark', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 115,
        atk: 100,
        def: 60,
        spa: 40,
        spd: 130,
        spe: 55
      },
      abilities: { first: 'Harvest', second: 'Infiltrator', hidden: 'Drought' },
      heightm: 5.5,
      weightkg: 108.8,
      color: 'Brown',
      prevo: 'brattler',
      evoLevel: 33,
      eggGroups: ['Grass', 'Dragon'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/malaconda.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/malaconda.png'
    }
  ],
  [
    'cawmodore',
    {
      species: 'cawmodore',
      num: -32,
      types: ['Steel', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 92,
        def: 130,
        spa: 65,
        spd: 75,
        spe: 118
      },
      abilities: { first: 'Intimidate', second: 'Volt Absorb', hidden: 'Big Pecks' },
      heightm: 1.7,
      weightkg: 37,
      color: 'Black',
      prevo: 'cawdet',
      evoLevel: 33,
      eggGroups: ['Flying'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cawmodore.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cawmodore.png'
    }
  ],
  [
    'volkraken',
    {
      species: 'volkraken',
      num: -33,
      types: ['Water', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 45,
        def: 80,
        spa: 135,
        spd: 100,
        spe: 95
      },
      abilities: { first: 'Analytic', second: 'Infiltrator', hidden: 'Pressure' },
      heightm: 1.3,
      weightkg: 44.5,
      color: 'Red',
      prevo: 'volkritter',
      evoLevel: 34,
      eggGroups: ['Water 1', 'Water 2'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/volkraken.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/volkraken.png'
    }
  ],
  [
    'plasmanta',
    {
      species: 'plasmanta',
      num: -35,
      types: ['Electric', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 57,
        def: 119,
        spa: 131,
        spd: 98,
        spe: 100
      },
      abilities: { first: 'Storm Drain', second: 'Vital Spirit', hidden: 'Telepathy' },
      heightm: 7,
      weightkg: 460,
      color: 'Purple',
      prevo: 'snugglow',
      evoLevel: 29,
      eggGroups: ['Water 1', 'Water 2'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/plasmanta.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/plasmanta.png'
    }
  ],
  [
    'naviathan',
    {
      species: 'naviathan',
      num: -38,
      types: ['Water', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 103,
        atk: 110,
        def: 90,
        spa: 95,
        spd: 65,
        spe: 97
      },
      abilities: { first: 'Guts', second: 'Heatproof', hidden: 'Light Metal' },
      heightm: 3,
      weightkg: 510,
      color: 'Gray',
      prevo: 'caimanoe',
      evoLevel: 40,
      eggGroups: ['Water 1', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/naviathan.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/naviathan.png'
    }
  ],
  [
    'crucibelle',
    {
      species: 'crucibelle',
      num: -39,
      types: ['Rock', 'Poison'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 106,
        atk: 105,
        def: 65,
        spa: 75,
        spd: 85,
        spe: 104
      },
      abilities: { first: 'Regenerator', second: 'Mold Breaker', hidden: 'Liquid Ooze' },
      heightm: 1.3,
      weightkg: 23.6,
      color: 'Purple',
      eggGroups: ['Amorphous', 'Mineral'],
      otherFormes: ['crucibellemega'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/crucibelle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/crucibelle.png'
    }
  ],
  [
    'crucibellemega',
    {
      species: 'crucibelle-mega',
      num: -39,
      types: ['Rock', 'Poison'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 106,
        atk: 135,
        def: 75,
        spa: 91,
        spd: 125,
        spe: 108
      },
      baseSpecies: 'Crucibelle',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Magic Guard' },
      heightm: 1.4,
      weightkg: 22.5,
      color: 'Purple',
      eggGroups: ['Amorphous', 'Mineral'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/crucibelle-mega.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/crucibelle-mega.png'
    }
  ],
  [
    'kerfluffle',
    {
      species: 'kerfluffle',
      num: -41,
      types: ['Fairy', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 84,
        atk: 78,
        def: 86,
        spa: 115,
        spd: 88,
        spe: 119
      },
      abilities: { first: 'Natural Cure', second: 'Aroma Veil', hidden: 'Friend Guard' },
      heightm: 2.1,
      weightkg: 24.2,
      color: 'Pink',
      prevo: 'pluffle',
      evoLevel: 2,
      eggGroups: ['Fairy', 'Human-Like'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/kerfluffle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/kerfluffle.png'
    }
  ],
  [
    'pajantom',
    {
      species: 'pajantom',
      num: -42,
      types: ['Dragon', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 84,
        atk: 133,
        def: 71,
        spa: 51,
        spd: 111,
        spe: 101
      },
      abilities: { first: 'Comatose' },
      heightm: 1.1,
      weightkg: 3.1,
      color: 'Purple',
      eggGroups: ['Dragon', 'Monster'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pajantom.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pajantom.png'
    }
  ],
  [
    'jumbao',
    {
      species: 'jumbao',
      num: -44,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 92,
        atk: 63,
        def: 97,
        spa: 124,
        spd: 104,
        spe: 96
      },
      abilities: { first: 'Drought', second: 'Trace', hidden: 'Overcoat' },
      heightm: 2.4,
      weightkg: 600,
      color: 'Brown',
      eggGroups: ['Grass'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/jumbao.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/jumbao.png'
    }
  ],
  [
    'caribolt',
    {
      species: 'caribolt',
      num: -47,
      types: ['Grass', 'Electric'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 84,
        atk: 106,
        def: 82,
        spa: 77,
        spd: 80,
        spe: 106
      },
      abilities: { first: 'Overgrow', hidden: 'Galvanize' },
      heightm: 2.5,
      weightkg: 140,
      color: 'Green',
      prevo: 'electrelk',
      evoLevel: 34,
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/caribolt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/caribolt.png'
    }
  ],
  [
    'smokomodo',
    {
      species: 'smokomodo',
      num: -50,
      types: ['Fire', 'Ground'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 88,
        atk: 116,
        def: 67,
        spa: 88,
        spd: 78,
        spe: 97
      },
      abilities: { first: 'Blaze', hidden: 'Technician' },
      heightm: 2.2,
      weightkg: 205,
      color: 'Red',
      prevo: 'smoguana',
      evoLevel: 36,
      eggGroups: ['Field', 'Monster'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/smokomodo.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/smokomodo.png'
    }
  ],
  [
    'snaelstrom',
    {
      species: 'snaelstrom',
      num: -53,
      types: ['Water', 'Bug'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 91,
        atk: 94,
        def: 110,
        spa: 80,
        spd: 97,
        spe: 63
      },
      abilities: { first: 'Torrent', hidden: 'Poison Heal' },
      heightm: 2,
      weightkg: 120,
      color: 'Blue',
      prevo: 'coribalis',
      evoLevel: 34,
      eggGroups: ['Water 1', 'Fairy'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/snaelstrom.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/snaelstrom.png'
    }
  ],
  [
    'justyke',
    {
      species: 'justyke',
      num: -54,
      types: ['Steel', 'Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: { hp: 72, atk: 70, def: 56, spa: 83, spd: 68, spe: 30 },
      abilities: { first: 'Levitate', second: 'Stalwart', hidden: 'Justified' },
      heightm: 0.4,
      weightkg: 36.5,
      color: 'Brown',
      evos: ['equilibra'],
      eggGroups: ['Mineral'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/justyke.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/justyke.png'
    }
  ],
  [
    'equilibra',
    {
      species: 'equilibra',
      num: -55,
      types: ['Steel', 'Ground'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 102,
        atk: 50,
        def: 96,
        spa: 121,
        spd: 118,
        spe: 60
      },
      abilities: { first: 'Levitate', second: 'Stalwart', hidden: 'Justified' },
      heightm: 0.8,
      weightkg: 51.3,
      prevo: 'justyke',
      evoLevel: '32',
      color: 'Brown',
      eggGroups: ['Mineral'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/equilibra.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/equilibra.png'
    }
  ],
  [
    'solotl',
    {
      species: 'solotl',
      num: -56,
      types: ['Fire', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: { hp: 68, atk: 48, def: 34, spa: 72, spd: 24, spe: 84 },
      abilities: { first: 'Regenerator', second: 'Vital Spirit', hidden: 'Magician' },
      heightm: 0.6,
      weightkg: 11.8,
      evos: ['astrolotl'],
      color: 'Red',
      eggGroups: ['Dragon', 'Fairy'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/solotl.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/solotl.png'
    }
  ],
  [
    'astrolotl',
    {
      species: 'astrolotl',
      num: -57,
      types: ['Fire', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 108,
        atk: 108,
        def: 74,
        spa: 92,
        spd: 64,
        spe: 114
      },
      abilities: { first: 'Regenerator', second: 'Vital Spirit', hidden: 'Magician' },
      heightm: 1.9,
      weightkg: 50,
      prevo: 'solotl',
      evoLevel: '36',
      color: 'Red',
      eggGroups: ['Dragon', 'Fairy'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/astrolotl.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/astrolotl.png'
    }
  ],
  [
    'miasmaw',
    {
      num: -59,
      species: 'miasmaw',
      types: ['Bug', 'Dragon'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 85,
        atk: 135,
        def: 60,
        spa: 115,
        spd: 85,
        spe: 89
      },
      abilities: { first: 'Neutralizing Gas', hidden: 'Compound Eyes' },
      heightm: 1.2,
      weightkg: 57,
      color: 'Green',
      eggGroups: ['Bug', 'Dragon'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/miasmaw.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/miasmaw.png'
    }
  ],
  [
    'syclar',
    {
      species: 'syclar',
      num: -1,
      types: ['Ice', 'Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 76,
        def: 45,
        spa: 74,
        spd: 39,
        spe: 91
      },
      abilities: { first: 'Compound Eyes', second: 'Snow Cloak', hidden: 'Ice Body' },
      heightm: 0.2,
      weightkg: 4,
      color: 'Blue',
      evos: ['syclant'],
      eggGroups: ['Bug'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/syclar.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/syclar.png'
    }
  ],
  [
    'embirch',
    {
      species: 'embirch',
      num: -4,
      types: ['Fire', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 40,
        def: 55,
        spa: 65,
        spd: 40,
        spe: 60
      },
      abilities: { first: 'Reckless', second: 'Leaf Guard', hidden: 'Chlorophyll' },
      heightm: 0.6,
      weightkg: 15,
      color: 'Brown',
      evos: ['flarelm'],
      eggGroups: ['Monster', 'Dragon'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/embirch.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/embirch.png'
    }
  ],
  [
    'flarelm',
    {
      species: 'flarelm',
      num: -5,
      types: ['Fire', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 50,
        def: 95,
        spa: 75,
        spd: 70,
        spe: 40
      },
      abilities: { first: 'Rock Head', second: 'Battle Armor', hidden: 'White Smoke' },
      heightm: 1.4,
      weightkg: 73,
      color: 'Brown',
      prevo: 'embirch',
      evos: ['pyroak'],
      evoLevel: 24,
      eggGroups: ['Monster', 'Dragon'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/flarelm.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/flarelm.png'
    }
  ],
  [
    'breezi',
    {
      species: 'breezi',
      num: -7,
      types: ['Poison', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 46,
        def: 69,
        spa: 60,
        spd: 50,
        spe: 75
      },
      abilities: { first: 'Unburden', second: 'Own Tempo', hidden: 'Frisk' },
      heightm: 0.4,
      weightkg: 0.6,
      color: 'Purple',
      evos: ['fidgit'],
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/breezi.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/breezi.png'
    }
  ],
  [
    'scratchet',
    {
      species: 'scratchet',
      num: -20,
      types: ['Normal', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 85,
        def: 80,
        spa: 20,
        spd: 70,
        spe: 40
      },
      abilities: { first: 'Scrappy', second: 'Prankster', hidden: 'Vital Spirit' },
      heightm: 0.5,
      weightkg: 20,
      color: 'Brown',
      evos: ['tomohawk'],
      eggGroups: ['Field', 'Flying'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/scratchet.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/scratchet.png'
    }
  ],
  [
    'necturine',
    {
      species: 'necturine',
      num: -222,
      types: ['Grass', 'Ghost'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 49,
        atk: 55,
        def: 60,
        spa: 50,
        spd: 75,
        spe: 51
      },
      abilities: { first: 'Anticipation', hidden: 'Telepathy' },
      heightm: 0.3,
      weightkg: 1.8,
      color: 'White',
      evos: ['necturna'],
      eggGroups: ['Grass', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/necturine.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/necturine.png'
    }
  ],
  [
    'cupra',
    {
      species: 'cupra',
      num: -25,
      types: ['Bug', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 60,
        def: 49,
        spa: 67,
        spd: 30,
        spe: 44
      },
      abilities: { first: 'Shield Dust', second: 'Keen Eye', hidden: 'Magic Guard' },
      heightm: 0.5,
      weightkg: 4.8,
      color: 'Brown',
      evos: ['argalis'],
      eggGroups: ['Bug'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cupra.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cupra.png'
    }
  ],
  [
    'argalis',
    {
      species: 'argalis',
      num: -26,
      types: ['Bug', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 90,
        def: 89,
        spa: 87,
        spd: 40,
        spe: 54
      },
      abilities: { first: 'Shed Skin', second: 'Compound Eyes', hidden: 'Overcoat' },
      heightm: 1.3,
      weightkg: 341.4,
      color: 'Gray',
      prevo: 'cupra',
      evos: ['aurumoth'],
      evoLevel: 30,
      eggGroups: ['Bug'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/argalis.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/argalis.png'
    }
  ],
  [
    'brattler',
    {
      species: 'brattler',
      num: -28,
      types: ['Dark', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 70,
        def: 40,
        spa: 20,
        spd: 90,
        spe: 30
      },
      abilities: { first: 'Harvest', second: 'Infiltrator', hidden: 'Rattled' },
      heightm: 1.8,
      weightkg: 11.5,
      color: 'Brown',
      evos: ['malaconda'],
      eggGroups: ['Grass', 'Dragon'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/brattler.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/brattler.png'
    }
  ],
  [
    'cawdet',
    {
      species: 'cawdet',
      num: -30,
      types: ['Steel', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 72,
        def: 85,
        spa: 40,
        spd: 55,
        spe: 88
      },
      abilities: { first: 'Keen Eye', second: 'Volt Absorb', hidden: 'Big Pecks' },
      heightm: 0.76,
      weightkg: 25,
      color: 'Gray',
      evos: ['cawmodore'],
      eggGroups: ['Flying'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cawdet.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cawdet.png'
    }
  ],
  [
    'volkritter',
    {
      species: 'volkritter',
      num: -111,
      types: ['Water', 'Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 30,
        def: 50,
        spa: 80,
        spd: 60,
        spe: 70
      },
      abilities: { first: 'Anticipation', second: 'Infiltrator', hidden: 'Unnerve' },
      heightm: 0.3,
      weightkg: 15,
      color: 'Red',
      evos: ['volkraken'],
      eggGroups: ['Water 1', 'Water 2'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/volkritter.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/volkritter.png'
    }
  ],
  [
    'snugglow',
    {
      species: 'snugglow',
      num: -34,
      types: ['Electric', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 37,
        def: 79,
        spa: 91,
        spd: 68,
        spe: 70
      },
      abilities: { first: 'Storm Drain', second: 'Vital Spirit', hidden: 'Telepathy' },
      heightm: 1.2,
      weightkg: 6,
      color: 'Purple',
      evos: ['plasmanta'],
      eggGroups: ['Water 1', 'Water 2'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/snugglow.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/snugglow.png'
    }
  ],
  [
    'floatoy',
    {
      species: 'floatoy',
      num: -36,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 48,
        atk: 70,
        def: 40,
        spa: 70,
        spd: 30,
        spe: 77
      },
      abilities: { first: 'Water Veil', second: 'Heatproof', hidden: 'Swift Swim' },
      heightm: 0.8,
      weightkg: 1.9,
      color: 'White',
      evos: ['caimanoe'],
      eggGroups: ['Water 1', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/floatoy.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/floatoy.png'
    }
  ],
  [
    'caimanoe',
    {
      species: 'caimanoe',
      num: -37,
      types: ['Water', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 73,
        atk: 85,
        def: 65,
        spa: 80,
        spd: 40,
        spe: 87
      },
      abilities: { first: 'Water Veil', second: 'Heatproof', hidden: 'Light Metal' },
      heightm: 1.4,
      weightkg: 72.5,
      color: 'Gray',
      prevo: 'floatoy',
      evos: ['naviathan'],
      evoLevel: 21,
      eggGroups: ['Water 1', 'Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/caimanoe.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/caimanoe.png'
    }
  ],
  [
    'pluffle',
    {
      species: 'pluffle',
      num: -40,
      types: ['Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 74,
        atk: 38,
        def: 51,
        spa: 65,
        spd: 78,
        spe: 49
      },
      abilities: { first: 'Natural Cure', second: 'Aroma Veil', hidden: 'Friend Guard' },
      heightm: 0.8,
      weightkg: 1.8,
      color: 'Pink',
      evos: ['kerfluffle'],
      eggGroups: ['Fairy', 'Human-Like'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pluffle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pluffle.png'
    }
  ],
  [
    'rebble',
    {
      species: 'rebble',
      num: -9,
      types: ['Rock'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 45,
        atk: 25,
        def: 65,
        spa: 75,
        spd: 55,
        spe: 80
      },
      abilities: { first: 'Levitate', second: 'Solid Rock', hidden: 'Sniper' },
      heightm: 0.3,
      weightkg: 7,
      color: 'Gray',
      evos: ['tactite'],
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/rebble.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/rebble.png'
    }
  ],
  [
    'tactite',
    {
      species: 'tactite',
      num: -10,
      types: ['Rock'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 70,
        atk: 40,
        def: 65,
        spa: 100,
        spd: 65,
        spe: 95
      },
      abilities: { first: 'Levitate', second: 'Technician', hidden: 'Sniper' },
      heightm: 0.6,
      weightkg: 16,
      color: 'Gray',
      prevo: 'rebble',
      evos: ['stratagem'],
      evoLevel: 28,
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/tactite.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/tactite.png'
    }
  ],
  [
    'privatyke',
    {
      species: 'privatyke',
      num: -12,
      types: ['Water', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 75,
        def: 65,
        spa: 40,
        spd: 60,
        spe: 45
      },
      abilities: { first: 'Unaware', hidden: 'Technician' },
      heightm: 1,
      weightkg: 35,
      color: 'Green',
      evos: ['arghonaut'],
      eggGroups: ['Water 1', 'Water 3'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/privatyke.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/privatyke.png'
    }
  ],
  [
    'voodoll',
    {
      species: 'voodoll',
      num: -18,
      types: ['Normal', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 40,
        def: 55,
        spa: 75,
        spd: 50,
        spe: 70
      },
      abilities: { first: 'Volt Absorb', second: 'Lightning Rod', hidden: 'Cursed Body' },
      heightm: 1,
      weightkg: 25,
      color: 'Brown',
      evos: ['voodoom'],
      eggGroups: ['Human-Like', 'Ground'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/voodoll.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/voodoll.png'
    }
  ],
  [
    'mumbao',
    {
      species: 'mumbao',
      num: -43,
      types: ['Grass', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 30,
        def: 64,
        spa: 87,
        spd: 73,
        spe: 66
      },
      abilities: { first: 'Solar Power', second: 'Trace', hidden: 'Overcoat' },
      heightm: 1,
      weightkg: 250,
      color: 'Brown',
      evos: ['jumbao'],
      eggGroups: ['Grass'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/mumbao.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/mumbao.png'
    }
  ],
  [
    'fawnifer',
    {
      num: -45,
      species: 'fawnifer',
      types: ['Grass'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 49,
        atk: 61,
        def: 42,
        spa: 52,
        spd: 40,
        spe: 76
      },
      abilities: { first: 'Overgrow', hidden: 'Lightning Rod' },
      heightm: 0.7,
      weightkg: 6.9,
      color: 'Green',
      evos: ['electrelk'],
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/fawnifer.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/fawnifer.png'
    }
  ],
  [
    'electrelk',
    {
      num: -46,
      species: 'electrelk',
      types: ['Grass', 'Electric'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 59,
        atk: 81,
        def: 67,
        spa: 57,
        spd: 55,
        spe: 101
      },
      abilities: { first: 'Overgrow', hidden: 'Galvanize' },
      heightm: 1.4,
      weightkg: 41.5,
      color: 'Green',
      prevo: 'fawnifer',
      evoLevel: 17,
      evos: ['caribolt'],
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/electrelk.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/electrelk.png'
    }
  ],
  [
    'smogecko',
    {
      num: -48,
      species: 'smogecko',
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 48,
        atk: 66,
        def: 43,
        spa: 58,
        spd: 48,
        spe: 56
      },
      abilities: { first: 'Blaze', hidden: 'Technician' },
      heightm: 0.5,
      weightkg: 8.5,
      color: 'Red',
      evos: ['smoguana'],
      eggGroups: ['Field', 'Monster'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/smogecko.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/smogecko.png'
    }
  ],
  [
    'smoguana',
    {
      num: -49,
      species: 'smoguana',
      types: ['Fire', 'Ground'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 68,
        atk: 86,
        def: 53,
        spa: 68,
        spd: 68,
        spe: 76
      },
      abilities: { first: 'Blaze', hidden: 'Technician' },
      heightm: 1.5,
      weightkg: 22.2,
      color: 'Red',
      prevo: 'smogecko',
      evoLevel: 15,
      evos: ['smokomodo'],
      eggGroups: ['Field', 'Monster'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/smoguana.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/smoguana.png'
    }
  ],
  [
    'swirlpool',
    {
      num: -51,
      species: 'swirlpool',
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 61,
        atk: 49,
        def: 70,
        spa: 50,
        spd: 62,
        spe: 28
      },
      abilities: { first: 'Torrent', hidden: 'Poison Heal' },
      heightm: 0.5,
      weightkg: 7,
      color: 'Blue',
      evos: ['coribalis'],
      eggGroups: ['Water 1', 'Fairy'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/swirlpool.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/swirlpool.png'
    }
  ],
  [
    'coribalis',
    {
      num: -52,
      species: 'coribalis',
      types: ['Water', 'Bug'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 76,
        atk: 69,
        def: 90,
        spa: 65,
        spd: 77,
        spe: 43
      },
      abilities: { first: 'Torrent', hidden: 'Poison Heal' },
      heightm: 1.4,
      weightkg: 24.5,
      color: 'Blue',
      prevo: 'swirlpool',
      evoLevel: 17,
      evos: ['snaelstrom'],
      eggGroups: ['Water 1', 'Fairy'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/coribalis.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/coribalis.png'
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
