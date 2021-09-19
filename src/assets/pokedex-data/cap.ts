import { Pokedex } from '#dexdata/pokedex';
import type { PokemonTypes } from '#utils/pokemon';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'syclar',
    {
      abilities: {
        first: 'Compound Eyes',
        second: 'Snow Cloak',
        hidden: 'Ice Body'
      },
      baseStats: { hp: 40, atk: 76, def: 45, spa: 74, spd: 39, spe: 91 },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['syclant'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.2,
      isEggObtainable: false,
      num: -1,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/syclar.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/syclar.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/syclar.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/syclar.png',
      species: 'syclar',
      types: ['Ice', 'Bug'],
      weightkg: 4
    }
  ],
  [
    'syclant',
    {
      abilities: {
        first: 'Compound Eyes',
        second: 'Mountaineer',
        hidden: 'Ice Body'
      },
      baseStats: { hp: 70, atk: 116, def: 70, spa: 114, spd: 64, spe: 121 },
      color: 'Blue',
      eggGroups: ['Bug'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.7,
      isEggObtainable: false,
      num: -2,
      prevo: 'syclar',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/syclant.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/syclant.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/syclant.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/syclant.png',
      species: 'syclant',
      types: ['Ice', 'Bug'],
      weightkg: 52
    }
  ],
  [
    'revenankh',
    {
      abilities: { first: 'Shed Skin', second: 'Air Lock', hidden: 'Triage' },
      baseStats: { hp: 90, atk: 105, def: 90, spa: 65, spd: 110, spe: 65 },
      color: 'White',
      eggGroups: ['Amorphous', 'Human-Like'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.8,
      isEggObtainable: false,
      num: -3,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/revenankh.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/revenankh.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/revenankh.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/revenankh.png',
      species: 'revenankh',
      types: ['Ghost', 'Fighting'],
      weightkg: 44
    }
  ],
  [
    'embirch',
    {
      abilities: {
        first: 'Reckless',
        second: 'Leaf Guard',
        hidden: 'Chlorophyll'
      },
      baseStats: { hp: 60, atk: 40, def: 55, spa: 65, spd: 40, spe: 60 },
      color: 'Brown',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['flarelm'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.6,
      isEggObtainable: false,
      num: -4,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/embirch.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/embirch.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/embirch.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/embirch.png',
      species: 'embirch',
      types: ['Fire', 'Grass'],
      weightkg: 15
    }
  ],
  [
    'flarelm',
    {
      abilities: {
        first: 'Rock Head',
        second: 'Battle Armor',
        hidden: 'White Smoke'
      },
      baseStats: { hp: 90, atk: 50, def: 95, spa: 75, spd: 70, spe: 40 },
      color: 'Brown',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      evos: ['pyroak'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.4,
      isEggObtainable: false,
      num: -5,
      prevo: 'embirch',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/flarelm.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/flarelm.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/flarelm.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/flarelm.png',
      species: 'flarelm',
      types: ['Fire', 'Grass'],
      weightkg: 73
    }
  ],
  [
    'pyroak',
    {
      abilities: {
        first: 'Rock Head',
        second: 'Battle Armor',
        hidden: 'White Smoke'
      },
      baseStats: { hp: 120, atk: 70, def: 105, spa: 95, spd: 90, spe: 60 },
      color: 'Brown',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 2.1,
      isEggObtainable: false,
      num: -6,
      prevo: 'flarelm',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pyroak.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pyroak.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pyroak.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pyroak.png',
      species: 'pyroak',
      types: ['Fire', 'Grass'],
      weightkg: 168
    }
  ],
  [
    'breezi',
    {
      abilities: { first: 'Unburden', second: 'Own Tempo', hidden: 'Frisk' },
      baseStats: { hp: 50, atk: 46, def: 69, spa: 60, spd: 50, spe: 75 },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['fidgit'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.4,
      isEggObtainable: false,
      num: -7,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/breezi.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/breezi.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/breezi.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/breezi.png',
      species: 'breezi',
      types: ['Poison', 'Flying'],
      weightkg: 0.6
    }
  ],
  [
    'fidgit',
    {
      abilities: { first: 'Persistent', second: 'Vital Spirit', hidden: 'Frisk' },
      baseStats: { hp: 95, atk: 76, def: 109, spa: 90, spd: 80, spe: 105 },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 33,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.9,
      isEggObtainable: false,
      num: -8,
      prevo: 'breezi',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/fidgit.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/fidgit.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/fidgit.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/fidgit.png',
      species: 'fidgit',
      types: ['Poison', 'Ground'],
      weightkg: 53
    }
  ],
  [
    'rebble',
    {
      abilities: { first: 'Levitate', second: 'Solid Rock', hidden: 'Sniper' },
      baseStats: { hp: 45, atk: 25, def: 65, spa: 75, spd: 55, spe: 80 },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['tactite'],
      genderRatio: { male: 0, female: 0 },
      heightm: 0.3,
      isEggObtainable: false,
      num: -9,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/rebble.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/rebble.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/rebble.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/rebble.png',
      species: 'rebble',
      types: ['Rock'],
      weightkg: 7
    }
  ],
  [
    'tactite',
    {
      abilities: { first: 'Levitate', second: 'Technician', hidden: 'Sniper' },
      baseStats: { hp: 70, atk: 40, def: 65, spa: 100, spd: 65, spe: 95 },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      evos: ['stratagem'],
      genderRatio: { male: 0, female: 0 },
      heightm: 0.6,
      isEggObtainable: false,
      num: -10,
      prevo: 'rebble',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/tactite.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/tactite.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/tactite.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/tactite.png',
      species: 'tactite',
      types: ['Rock'],
      weightkg: 16
    }
  ],
  [
    'stratagem',
    {
      abilities: { first: 'Levitate', second: 'Technician', hidden: 'Sniper' },
      baseStats: { hp: 90, atk: 60, def: 65, spa: 120, spd: 70, spe: 130 },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      genderRatio: { male: 0, female: 0 },
      heightm: 0.9,
      isEggObtainable: false,
      num: -11,
      prevo: 'tactite',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/stratagem.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/stratagem.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/stratagem.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/stratagem.png',
      species: 'stratagem',
      types: ['Rock'],
      weightkg: 45
    }
  ],
  [
    'privatyke',
    {
      abilities: { first: 'Unaware', hidden: 'Technician' },
      baseStats: { hp: 65, atk: 75, def: 65, spa: 40, spd: 60, spe: 45 },
      color: 'Green',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['arghonaut'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1,
      isEggObtainable: false,
      num: -12,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/privatyke.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/privatyke.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/privatyke.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/privatyke.png',
      species: 'privatyke',
      types: ['Water', 'Fighting'],
      weightkg: 35
    }
  ],
  [
    'arghonaut',
    {
      abilities: { first: 'Unaware', hidden: 'Technician' },
      baseStats: { hp: 105, atk: 110, def: 95, spa: 70, spd: 100, spe: 75 },
      color: 'Green',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.7,
      isEggObtainable: false,
      num: -13,
      prevo: 'privatyke',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/arghonaut.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/arghonaut.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/arghonaut.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/arghonaut.png',
      species: 'arghonaut',
      types: ['Water', 'Fighting'],
      weightkg: 151
    }
  ],
  [
    'kitsunoh',
    {
      abilities: { first: 'Frisk', second: 'Limber', hidden: 'Iron Fist' },
      baseStats: { hp: 80, atk: 103, def: 85, spa: 55, spd: 80, spe: 110 },
      color: 'Gray',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.1,
      isEggObtainable: false,
      num: -14,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/kitsunoh.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/kitsunoh.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/kitsunoh.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/kitsunoh.png',
      species: 'kitsunoh',
      types: ['Ghost', 'Steel'],
      weightkg: 51
    }
  ],
  [
    'cyclohm',
    {
      abilities: { first: 'Shield Dust', second: 'Static', hidden: 'Damp' },
      baseStats: { hp: 108, atk: 60, def: 118, spa: 112, spd: 70, spe: 80 },
      color: 'Yellow',
      eggGroups: ['Dragon', 'Monster'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.6,
      isEggObtainable: false,
      num: -15,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/cyclohm.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/cyclohm.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cyclohm.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cyclohm.png',
      species: 'cyclohm',
      types: ['Electric', 'Dragon'],
      weightkg: 59
    }
  ],
  [
    'colossoil',
    {
      abilities: { first: 'Rebound', second: 'Guts', hidden: 'Unnerve' },
      baseStats: { hp: 133, atk: 122, def: 72, spa: 71, spd: 72, spe: 95 },
      color: 'Brown',
      eggGroups: ['Water 2', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 2.6,
      isEggObtainable: false,
      num: -16,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/colossoil.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/colossoil.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/colossoil.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/colossoil.png',
      species: 'colossoil',
      types: ['Dark', 'Ground'],
      weightkg: 683.6
    }
  ],
  [
    'krilowatt',
    {
      abilities: { first: 'Trace', second: 'Magic Guard', hidden: 'Minus' },
      baseStats: { hp: 151, atk: 84, def: 73, spa: 83, spd: 74, spe: 105 },
      color: 'Red',
      eggGroups: ['Water 1', 'Fairy'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.7,
      isEggObtainable: false,
      num: -17,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/krillowatt.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/krillowatt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/krillowatt.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/krillowatt.png',
      species: 'krilowatt',
      types: ['Electric', 'Water'],
      weightkg: 10.6
    }
  ],
  [
    'voodoll',
    {
      abilities: {
        first: 'Volt Absorb',
        second: 'Lightning Rod',
        hidden: 'Cursed Body'
      },
      baseStats: { hp: 55, atk: 40, def: 55, spa: 75, spd: 50, spe: 70 },
      color: 'Brown',
      eggGroups: ['Human-Like', 'Ground'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['voodoom'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1,
      isEggObtainable: false,
      num: -18,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/voodoll.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/voodoll.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/voodoll.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/voodoll.png',
      species: 'voodoll',
      types: ['Normal', 'Dark'],
      weightkg: 25
    }
  ],
  [
    'voodoom',
    {
      abilities: {
        first: 'Volt Absorb',
        second: 'Lightning Rod',
        hidden: 'Cursed Body'
      },
      baseStats: { hp: 90, atk: 85, def: 80, spa: 105, spd: 80, spe: 110 },
      color: 'Brown',
      eggGroups: ['Human-Like', 'Ground'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 2,
      isEggObtainable: false,
      num: -19,
      prevo: 'voodoll',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/voodoom.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/voodoom.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/voodoom.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/voodoom.png',
      species: 'voodoom',
      types: ['Fighting', 'Dark'],
      weightkg: 75.5
    }
  ],
  [
    'scratchet',
    {
      abilities: { first: 'Scrappy', second: 'Prankster', hidden: 'Vital Spirit' },
      baseStats: { hp: 55, atk: 85, def: 80, spa: 20, spd: 70, spe: 40 },
      color: 'Brown',
      eggGroups: ['Field', 'Flying'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['tomohawk'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.5,
      isEggObtainable: false,
      num: -20,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/scratchet.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/scratchet.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/scratchet.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/scratchet.png',
      species: 'scratchet',
      types: ['Normal', 'Fighting'],
      weightkg: 20
    }
  ],
  [
    'tomohawk',
    {
      abilities: { first: 'Intimidate', second: 'Prankster', hidden: 'Justified' },
      baseStats: { hp: 105, atk: 60, def: 90, spa: 115, spd: 80, spe: 85 },
      color: 'Red',
      eggGroups: ['Field', 'Flying'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 23,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.27,
      isEggObtainable: false,
      num: -21,
      prevo: 'scratchet',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/tomohawk.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/tomohawk.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/tomohawk.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/tomohawk.png',
      species: 'tomohawk',
      types: ['Flying', 'Fighting'],
      weightkg: 37.2
    }
  ],
  [
    'necturine',
    {
      abilities: { first: 'Anticipation', hidden: 'Telepathy' },
      baseStats: { hp: 49, atk: 55, def: 60, spa: 50, spd: 75, spe: 51 },
      color: 'White',
      eggGroups: ['Grass', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['necturna'],
      genderRatio: { male: 0, female: 1 },
      heightm: 0.3,
      isEggObtainable: false,
      num: -22,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/necturine.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/necturine.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/necturine.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/necturine.png',
      species: 'necturine',
      types: ['Grass', 'Ghost'],
      weightkg: 1.8
    }
  ],
  [
    'necturna',
    {
      abilities: { first: 'Forewarn', hidden: 'Telepathy' },
      baseStats: { hp: 64, atk: 120, def: 100, spa: 85, spd: 120, spe: 58 },
      color: 'Black',
      eggGroups: ['Grass', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 31,
      genderRatio: { male: 0, female: 1 },
      heightm: 1.65,
      isEggObtainable: false,
      num: -23,
      prevo: 'necturine',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/necturna.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/necturna.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/necturna.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/necturna.png',
      species: 'necturna',
      types: ['Grass', 'Ghost'],
      weightkg: 49.6
    }
  ],
  [
    'mollux',
    {
      abilities: { first: 'Dry Skin', hidden: 'Illuminate' },
      baseStats: { hp: 95, atk: 45, def: 83, spa: 131, spd: 105, spe: 76 },
      color: 'Pink',
      eggGroups: ['Fairy', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.2,
      isEggObtainable: false,
      num: -24,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/mollux.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/mollux.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/mollux.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/mollux.png',
      species: 'mollux',
      types: ['Fire', 'Poison'],
      weightkg: 41
    }
  ],
  [
    'cupra',
    {
      abilities: {
        first: 'Shield Dust',
        second: 'Keen Eye',
        hidden: 'Magic Guard'
      },
      baseStats: { hp: 50, atk: 60, def: 49, spa: 67, spd: 30, spe: 44 },
      color: 'Brown',
      eggGroups: ['Bug'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['argalis'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.5,
      isEggObtainable: false,
      num: -25,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/cupra.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/cupra.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cupra.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cupra.png',
      species: 'cupra',
      types: ['Bug', 'Psychic'],
      weightkg: 4.8
    }
  ],
  [
    'argalis',
    {
      abilities: {
        first: 'Shed Skin',
        second: 'Compound Eyes',
        hidden: 'Overcoat'
      },
      baseStats: { hp: 60, atk: 90, def: 89, spa: 87, spd: 40, spe: 54 },
      color: 'Gray',
      eggGroups: ['Bug'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      evos: ['aurumoth'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.3,
      isEggObtainable: false,
      num: -26,
      prevo: 'cupra',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/argalis.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/argalis.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/argalis.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/argalis.png',
      species: 'argalis',
      types: ['Bug', 'Psychic'],
      weightkg: 341.4
    }
  ],
  [
    'aurumoth',
    {
      abilities: {
        first: 'Weak Armor',
        second: 'No Guard',
        hidden: 'Light Metal'
      },
      baseStats: { hp: 110, atk: 120, def: 99, spa: 117, spd: 60, spe: 94 },
      color: 'Purple',
      eggGroups: ['Bug'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 50,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 2.1,
      isEggObtainable: false,
      num: -27,
      prevo: 'argalis',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/aurumoth.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/aurumoth.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/aurumoth.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/aurumoth.png',
      species: 'aurumoth',
      types: ['Bug', 'Psychic'],
      weightkg: 193
    }
  ],
  [
    'brattler',
    {
      abilities: { first: 'Harvest', second: 'Infiltrator', hidden: 'Rattled' },
      baseStats: { hp: 80, atk: 70, def: 40, spa: 20, spd: 90, spe: 30 },
      color: 'Brown',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['malaconda'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.8,
      isEggObtainable: false,
      num: -28,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/brattler.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/brattler.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/brattler.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/brattler.png',
      species: 'brattler',
      types: ['Dark', 'Grass'],
      weightkg: 11.5
    }
  ],
  [
    'malaconda',
    {
      abilities: { first: 'Harvest', second: 'Infiltrator', hidden: 'Drought' },
      baseStats: { hp: 115, atk: 100, def: 60, spa: 40, spd: 130, spe: 55 },
      color: 'Brown',
      eggGroups: ['Grass', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 33,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 5.5,
      isEggObtainable: false,
      num: -29,
      prevo: 'brattler',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/malaconda.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/malaconda.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/malaconda.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/malaconda.png',
      species: 'malaconda',
      types: ['Dark', 'Grass'],
      weightkg: 108.8
    }
  ],
  [
    'cawdet',
    {
      abilities: { first: 'Keen Eye', second: 'Volt Absorb', hidden: 'Big Pecks' },
      baseStats: { hp: 35, atk: 72, def: 85, spa: 40, spd: 55, spe: 88 },
      color: 'Gray',
      eggGroups: ['Flying'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['cawmodore'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.76,
      isEggObtainable: false,
      num: -30,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/cawdet.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/cawdet.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cawdet.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cawdet.png',
      species: 'cawdet',
      types: ['Steel', 'Flying'],
      weightkg: 25
    }
  ],
  [
    'cawmodore',
    {
      abilities: {
        first: 'Intimidate',
        second: 'Volt Absorb',
        hidden: 'Big Pecks'
      },
      baseStats: { hp: 50, atk: 92, def: 130, spa: 65, spd: 75, spe: 118 },
      color: 'Black',
      eggGroups: ['Flying'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 33,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.7,
      isEggObtainable: false,
      num: -31,
      prevo: 'cawdet',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/cawmodore.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/cawmodore.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/cawmodore.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/cawmodore.png',
      species: 'cawmodore',
      types: ['Steel', 'Flying'],
      weightkg: 37
    }
  ],
  [
    'volkritter',
    {
      abilities: {
        first: 'Anticipation',
        second: 'Infiltrator',
        hidden: 'Unnerve'
      },
      baseStats: { hp: 60, atk: 30, def: 50, spa: 80, spd: 60, spe: 70 },
      color: 'Red',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['volkraken'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.3,
      isEggObtainable: false,
      num: -32,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/volkritter.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/volkritter.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/volkritter.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/volkritter.png',
      species: 'volkritter',
      types: ['Water', 'Fire'],
      weightkg: 15
    }
  ],
  [
    'volkraken',
    {
      abilities: { first: 'Analytic', second: 'Infiltrator', hidden: 'Pressure' },
      baseStats: { hp: 100, atk: 45, def: 80, spa: 135, spd: 100, spe: 95 },
      color: 'Red',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.3,
      isEggObtainable: false,
      num: -33,
      prevo: 'volkritter',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/volkraken.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/volkraken.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/volkraken.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/volkraken.png',
      species: 'volkraken',
      types: ['Water', 'Fire'],
      weightkg: 44.5
    }
  ],
  [
    'snugglow',
    {
      abilities: {
        first: 'Storm Drain',
        second: 'Vital Spirit',
        hidden: 'Telepathy'
      },
      baseStats: { hp: 40, atk: 37, def: 79, spa: 91, spd: 68, spe: 70 },
      color: 'Purple',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['plasmanta'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.2,
      isEggObtainable: false,
      num: -34,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/snugglow.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/snugglow.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/snugglow.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/snugglow.png',
      species: 'snugglow',
      types: ['Electric', 'Poison'],
      weightkg: 6
    }
  ],
  [
    'plasmanta',
    {
      abilities: {
        first: 'Storm Drain',
        second: 'Vital Spirit',
        hidden: 'Telepathy'
      },
      baseStats: { hp: 60, atk: 57, def: 119, spa: 131, spd: 98, spe: 100 },
      color: 'Purple',
      eggGroups: ['Water 1', 'Water 2'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 29,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 7,
      isEggObtainable: false,
      num: -35,
      prevo: 'snugglow',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/plasmanta.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/plasmanta.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/plasmanta.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/plasmanta.png',
      species: 'plasmanta',
      types: ['Electric', 'Poison'],
      weightkg: 460,
      aliases: ['ohmagod']
    }
  ],
  [
    'floatoy',
    {
      abilities: {
        first: 'Water Veil',
        second: 'Heatproof',
        hidden: 'Swift Swim'
      },
      baseStats: { hp: 48, atk: 70, def: 40, spa: 70, spd: 30, spe: 77 },
      color: 'White',
      eggGroups: ['Water 1', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['caimanoe'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.8,
      isEggObtainable: false,
      num: -36,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/floatoy.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/floatoy.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/floatoy.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/floatoy.png',
      species: 'floatoy',
      types: ['Water'],
      weightkg: 1.9
    }
  ],
  [
    'caimanoe',
    {
      abilities: {
        first: 'Water Veil',
        second: 'Heatproof',
        hidden: 'Light Metal'
      },
      baseStats: { hp: 73, atk: 85, def: 65, spa: 80, spd: 40, spe: 87 },
      color: 'Gray',
      eggGroups: ['Water 1', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 21,
      evos: ['naviathan'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.4,
      isEggObtainable: false,
      num: -37,
      prevo: 'floatoy',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/caimanoe.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/caimanoe.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/caimanoe.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/caimanoe.png',
      species: 'caimanoe',
      types: ['Water', 'Steel'],
      weightkg: 72.5
    }
  ],
  [
    'naviathan',
    {
      abilities: { first: 'Guts', second: 'Heatproof', hidden: 'Light Metal' },
      baseStats: { hp: 103, atk: 110, def: 90, spa: 95, spd: 65, spe: 97 },
      color: 'Gray',
      eggGroups: ['Water 1', 'Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 3,
      isEggObtainable: false,
      num: -38,
      prevo: 'caimanoe',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/naviathan.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/naviathan.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/naviathan.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/naviathan.png',
      species: 'naviathan',
      types: ['Water', 'Steel'],
      weightkg: 510
    }
  ],
  [
    'crucibelle',
    {
      abilities: {
        first: 'Regenerator',
        second: 'Mold Breaker',
        hidden: 'Liquid Ooze'
      },
      baseStats: { hp: 106, atk: 105, def: 65, spa: 75, spd: 85, spe: 104 },
      color: 'Purple',
      eggGroups: ['Amorphous', 'Mineral'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.25, female: 0.75 },
      heightm: 1.3,
      isEggObtainable: false,
      num: -39,
      otherFormes: ['crucibellemega'],
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/crucibelle.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/crucibelle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/crucibelle.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/crucibelle.png',
      species: 'crucibelle',
      types: ['Rock', 'Poison'],
      weightkg: 23.6
    }
  ],
  [
    'crucibellemega',
    {
      abilities: { first: 'Magic Guard' },
      baseSpecies: 'Crucibelle',
      baseStats: { hp: 106, atk: 135, def: 75, spa: 91, spd: 125, spe: 108 },
      color: 'Purple',
      eggGroups: ['Amorphous', 'Mineral'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: 0.25, female: 0.75 },
      heightm: 1.4,
      isEggObtainable: false,
      num: -39,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/crucibelle-mega.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/crucibelle-mega.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/crucibelle-mega.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/crucibelle-mega.png',
      species: 'crucibelle-mega',
      types: ['Rock', 'Poison'],
      weightkg: 22.5
    }
  ],
  [
    'pluffle',
    {
      abilities: {
        first: 'Natural Cure',
        second: 'Aroma Veil',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 74, atk: 38, def: 51, spa: 65, spd: 78, spe: 49 },
      color: 'Pink',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['kerfluffle'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 0.8,
      isEggObtainable: false,
      num: -40,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pluffle.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pluffle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pluffle.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pluffle.png',
      species: 'pluffle',
      types: ['Fairy'],
      weightkg: 1.8
    }
  ],
  [
    'kerfluffle',
    {
      abilities: {
        first: 'Natural Cure',
        second: 'Aroma Veil',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 84, atk: 78, def: 86, spa: 115, spd: 88, spe: 119 },
      color: 'Pink',
      eggGroups: ['Fairy', 'Human-Like'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 2,
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 2.1,
      isEggObtainable: false,
      num: -41,
      prevo: 'pluffle',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/kerfluffle.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/kerfluffle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/kerfluffle.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/kerfluffle.png',
      species: 'kerfluffle',
      types: ['Fairy', 'Fighting'],
      weightkg: 24.2
    }
  ],
  [
    'pajantom',
    {
      abilities: { first: 'Comatose' },
      baseStats: { hp: 84, atk: 133, def: 71, spa: 51, spd: 111, spe: 101 },
      color: 'Purple',
      eggGroups: ['Dragon', 'Monster'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.1,
      isEggObtainable: false,
      num: -42,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pajantom.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pajantom.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pajantom.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pajantom.png',
      species: 'pajantom',
      types: ['Dragon', 'Ghost'],
      weightkg: 3.1
    }
  ],
  [
    'mumbao',
    {
      abilities: { first: 'Solar Power', second: 'Trace', hidden: 'Overcoat' },
      baseStats: { hp: 55, atk: 30, def: 64, spa: 87, spd: 73, spe: 66 },
      color: 'Brown',
      eggGroups: ['Grass'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['jumbao'],
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1,
      isEggObtainable: false,
      num: -43,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/mumbao.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/mumbao.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/mumbao.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/mumbao.png',
      species: 'mumbao',
      types: ['Grass', 'Fairy'],
      weightkg: 250
    }
  ],
  [
    'jumbao',
    {
      abilities: { first: 'Drought', second: 'Trace', hidden: 'Overcoat' },
      baseStats: { hp: 92, atk: 63, def: 97, spa: 124, spd: 104, spe: 96 },
      color: 'Brown',
      eggGroups: ['Grass'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 2.4,
      isEggObtainable: false,
      num: -44,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/jumbao.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/jumbao.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/jumbao.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/jumbao.png',
      species: 'jumbao',
      types: ['Grass', 'Fairy'],
      weightkg: 600
    }
  ],
  [
    'fawnifer',
    {
      abilities: { first: 'Overgrow', hidden: 'Lightning Rod' },
      baseStats: { hp: 49, atk: 61, def: 42, spa: 52, spd: 40, spe: 76 },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['electrelk'],
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 0.7,
      isEggObtainable: false,
      num: -45,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/fawnifer.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/fawnifer.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/fawnifer.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/fawnifer.png',
      species: 'fawnifer',
      types: ['Grass'],
      weightkg: 6.9
    }
  ],
  [
    'electrelk',
    {
      abilities: { first: 'Overgrow', hidden: 'Galvanize' },
      baseStats: { hp: 59, atk: 81, def: 67, spa: 57, spd: 55, spe: 101 },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 17,
      evos: ['caribolt'],
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 1.4,
      isEggObtainable: false,
      num: -46,
      prevo: 'fawnifer',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/electrelk.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/electrelk.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/electrelk.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/electrelk.png',
      species: 'electrelk',
      types: ['Grass', 'Electric'],
      weightkg: 41.5
    }
  ],
  [
    'caribolt',
    {
      abilities: { first: 'Overgrow', hidden: 'Galvanize' },
      baseStats: { hp: 84, atk: 106, def: 82, spa: 77, spd: 80, spe: 106 },
      color: 'Green',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 2.5,
      isEggObtainable: false,
      num: -47,
      prevo: 'electrelk',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/caribolt.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/caribolt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/caribolt.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/caribolt.png',
      species: 'caribolt',
      types: ['Grass', 'Electric'],
      weightkg: 140
    }
  ],
  [
    'smogecko',
    {
      abilities: { first: 'Blaze', hidden: 'Technician' },
      baseStats: { hp: 48, atk: 66, def: 43, spa: 58, spd: 48, spe: 56 },
      color: 'Red',
      eggGroups: ['Field', 'Monster'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['smoguana'],
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 0.5,
      isEggObtainable: false,
      num: -48,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/smogecko.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/smogecko.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/smogecko.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/smogecko.png',
      species: 'smogecko',
      types: ['Fire'],
      weightkg: 8.5
    }
  ],
  [
    'smoguana',
    {
      abilities: { first: 'Blaze', hidden: 'Technician' },
      baseStats: { hp: 68, atk: 86, def: 53, spa: 68, spd: 68, spe: 76 },
      color: 'Red',
      eggGroups: ['Field', 'Monster'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 15,
      evos: ['smokomodo'],
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -49,
      prevo: 'smogecko',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/smoguana.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/smoguana.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/smoguana.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/smoguana.png',
      species: 'smoguana',
      types: ['Fire', 'Ground'],
      weightkg: 22.2
    }
  ],
  [
    'smokomodo',
    {
      abilities: { first: 'Blaze', hidden: 'Technician' },
      baseStats: { hp: 88, atk: 116, def: 67, spa: 88, spd: 78, spe: 97 },
      color: 'Red',
      eggGroups: ['Field', 'Monster'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 2.2,
      isEggObtainable: false,
      num: -50,
      prevo: 'smoguana',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/smokomodo.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/smokomodo.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/smokomodo.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/smokomodo.png',
      species: 'smokomodo',
      types: ['Fire', 'Ground'],
      weightkg: 205
    }
  ],
  [
    'swirlpool',
    {
      abilities: { first: 'Torrent', hidden: 'Poison Heal' },
      baseStats: { hp: 61, atk: 49, def: 70, spa: 50, spd: 62, spe: 28 },
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['coribalis'],
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 0.5,
      isEggObtainable: false,
      num: -51,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/swirlpool.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/swirlpool.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/swirlpool.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/swirlpool.png',
      species: 'swirlpool',
      types: ['Water'],
      weightkg: 7
    }
  ],
  [
    'coribalis',
    {
      abilities: { first: 'Torrent', hidden: 'Poison Heal' },
      baseStats: { hp: 76, atk: 69, def: 90, spa: 65, spd: 77, spe: 43 },
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 17,
      evos: ['snaelstrom'],
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 1.4,
      isEggObtainable: false,
      num: -52,
      prevo: 'swirlpool',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/coribalis.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/coribalis.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/coribalis.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/coribalis.png',
      species: 'coribalis',
      types: ['Water', 'Bug'],
      weightkg: 24.5
    }
  ],
  [
    'snaelstrom',
    {
      abilities: { first: 'Torrent', hidden: 'Poison Heal' },
      baseStats: { hp: 91, atk: 94, def: 110, spa: 80, spd: 97, spe: 63 },
      color: 'Blue',
      eggGroups: ['Water 1', 'Fairy'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: 0.875, female: 0.125 },
      heightm: 2,
      isEggObtainable: false,
      num: -53,
      prevo: 'coribalis',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/snaelstrom.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/snaelstrom.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/snaelstrom.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/snaelstrom.png',
      species: 'snaelstrom',
      types: ['Water', 'Bug'],
      weightkg: 120
    }
  ],
  [
    'justyke',
    {
      abilities: { first: 'Levitate', second: 'Stalwart', hidden: 'Justified' },
      baseStats: { hp: 72, atk: 70, def: 56, spa: 83, spd: 68, spe: 30 },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['equilibra'],
      genderRatio: { male: 0, female: 0 },
      heightm: 0.4,
      isEggObtainable: false,
      num: -54,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/justyke.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/justyke.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/justyke.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/justyke.png',
      species: 'justyke',
      types: ['Steel', 'Ground'],
      weightkg: 36.5
    }
  ],
  [
    'equilibra',
    {
      abilities: { first: 'Levitate', second: 'Stalwart', hidden: 'Justified' },
      baseStats: { hp: 102, atk: 50, def: 96, spa: 121, spd: 118, spe: 60 },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: '32',
      genderRatio: { male: 0, female: 0 },
      heightm: 0.8,
      isEggObtainable: false,
      num: -55,
      prevo: 'justyke',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/equilibra.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/equilibra.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/equilibra.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/equilibra.png',
      species: 'equilibra',
      types: ['Steel', 'Ground'],
      weightkg: 51.3
    }
  ],
  [
    'solotl',
    {
      abilities: {
        first: 'Regenerator',
        second: 'Vital Spirit',
        hidden: 'Magician'
      },
      baseStats: { hp: 68, atk: 48, def: 34, spa: 72, spd: 24, spe: 84 },
      color: 'Red',
      eggGroups: ['Dragon', 'Fairy'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['astrolotl'],
      genderRatio: { male: 0, female: 0 },
      heightm: 0.6,
      isEggObtainable: false,
      num: -56,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/solotl.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/solotl.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/solotl.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/solotl.png',
      species: 'solotl',
      types: ['Fire', 'Dragon'],
      weightkg: 11.8
    }
  ],
  [
    'astrolotl',
    {
      abilities: {
        first: 'Regenerator',
        second: 'Vital Spirit',
        hidden: 'Magician'
      },
      baseStats: { hp: 108, atk: 108, def: 74, spa: 92, spd: 64, spe: 114 },
      color: 'Red',
      eggGroups: ['Dragon', 'Fairy'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: '36',
      genderRatio: { male: 0, female: 0 },
      heightm: 1.9,
      isEggObtainable: false,
      num: -57,
      prevo: 'solotl',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/astrolotl.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/astrolotl.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/astrolotl.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/astrolotl.png',
      species: 'astrolotl',
      types: ['Fire', 'Dragon'],
      weightkg: 50
    }
  ],
  [
    'miasmite',
    {
      abilities: {
        first: 'Neutralizing Gas',
        second: 'Hyper Cutter',
        hidden: 'Compound Eyes'
      },
      baseStats: { hp: 40, atk: 85, def: 60, spa: 52, spd: 52, spe: 44 },
      color: 'Green',
      eggGroups: ['Bug', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['miasmaw'],
      genderRatio: { male: 0, female: 0 },
      heightm: 0.6,
      isEggObtainable: false,
      num: -58,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/miasmite.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/miasmite.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/miasmite.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/miasmite.png',
      species: 'miasmite',
      types: ['Bug', 'Dragon'],
      weightkg: 10.1
    }
  ],
  [
    'miasmaw',
    {
      abilities: {
        first: 'Neutralizing Gas',
        second: 'Hyper Cutter',
        hidden: 'Compound Eyes'
      },
      baseStats: { hp: 85, atk: 135, def: 60, spa: 115, spd: 85, spe: 89 },
      color: 'Green',
      eggGroups: ['Bug', 'Dragon'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: 0, female: 0 },
      heightm: 1.2,
      isEggObtainable: false,
      num: -59,
      prevo: 'miasmite',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/miasmaw.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/miasmaw.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/miasmaw.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/miasmaw.png',
      species: 'miasmaw',
      types: ['Bug', 'Dragon'],
      weightkg: 57
    }
  ],
  [
    'chromera',
    {
      abilities: { first: 'Color Change' },
      baseStats: { hp: 85, atk: 85, def: 115, spa: 115, spd: 100, spe: 100 },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 0 },
      heightm: 2.5,
      isEggObtainable: false,
      num: -60,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/chromera.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/chromera.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/chromera.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/chromera.png',
      species: 'chromera',
      types: ['Dark', 'Poison'],
      weightkg: 215
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
