import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'pokestarsmeargle',
    {
      abilities: { first: 'Own Tempo', second: 'Technician', hidden: 'Moody' },
      baseStats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5000,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarsmeargle.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarsmeargle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarsmeargle.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarsmeargle.png',
      species: 'Pokestar Smeargle',
      types: ['Normal'],
      weightkg: 61
    }
  ],
  [
    'pokestarufo',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar UFO-PropU1'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5001,
      otherFormes: ['Pokestar UFO-2', 'Pokestar UFO-PropU2'],
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarufo.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarufo.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarufo.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarufo.png',
      species: 'Pokestar UFO',
      types: ['Flying', 'Electric'],
      weightkg: 61
    }
  ],
  [
    'pokestarufo2',
    {
      abilities: { first: 'Levitate' },
      baseSpecies: 'Pokestar UFO',
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      forme: '2',
      formeLetter: '2',
      genderRatio: { male: 0, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5001,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarufo2.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarufo2.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarufo2.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarufo2.png',
      species: 'Pokestar UFO-2',
      types: ['Psychic', 'Electric'],
      weightkg: 61
    }
  ],
  [
    'pokestarbrycenman',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Brycen-Man-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 1, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5002,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarbrycenman.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarbrycenman.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarbrycenman.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarbrycenman.png',
      species: 'Pokestar Brycen-Man',
      types: ['Dark', 'Psychic'],
      weightkg: 61
    }
  ],
  [
    'pokestarmt',
    {
      abilities: { first: 'Analytic' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar MT-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5003,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarmt.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarmt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarmt.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarmt.png',
      species: 'Pokestar MT',
      types: ['Steel'],
      weightkg: 61
    }
  ],
  [
    'pokestarmt2',
    {
      abilities: { first: 'Flash Fire' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar MT2-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5004,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarmt2.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarmt2.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarmt2.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarmt2.png',
      species: 'Pokestar MT2',
      types: ['Steel', 'Electric'],
      weightkg: 61
    }
  ],
  [
    'pokestartransport',
    {
      abilities: { first: 'Motor Drive' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Transport-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5005,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestartransport.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestartransport.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestartransport.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestartransport.png',
      species: 'Pokestar Transport',
      types: ['Steel'],
      weightkg: 61
    }
  ],
  [
    'pokestargiant',
    {
      abilities: { first: 'Huge Power' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Giant-2', 'Pokestar Giant-PropO1', 'Pokestar Giant-PropO2'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 1 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5006,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestargiant.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestargiant.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestargiant.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestargiant.png',
      species: 'Pokestar Giant',
      types: ['Normal'],
      weightkg: 61
    }
  ],
  [
    'pokestarhumanoid',
    {
      abilities: { first: 'Insomnia' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Humanoid-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5007,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarhumanoid.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarhumanoid.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarhumanoid.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarhumanoid.png',
      species: 'Pokestar Humanoid',
      types: ['Normal'],
      weightkg: 61
    }
  ],
  [
    'pokestarmonster',
    {
      abilities: { first: 'Pressure' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Monster-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5008,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarmonster.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarmonster.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarmonster.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarmonster.png',
      species: 'Pokestar Monster',
      types: ['Dark'],
      weightkg: 61
    }
  ],
  [
    'pokestarf00',
    {
      abilities: { first: 'Volt Absorb' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar F-00-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5009,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarf00.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarf00.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarf00.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarf00.png',
      species: 'Pokestar F-00',
      types: ['Steel', 'Normal'],
      weightkg: 61
    }
  ],
  [
    'pokestarf002',
    {
      abilities: { first: 'Reckless' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar F-002-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5010,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarf002.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarf002.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarf002.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarf002.png',
      species: 'Pokestar F-002',
      types: ['Steel', 'Normal'],
      weightkg: 61
    }
  ],
  [
    'pokestarspirit',
    {
      abilities: { first: 'Wonder Guard' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Spirit-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0.5, female: 0.5 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5011,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarspirit.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarspirit.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarspirit.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarspirit.png',
      species: 'Pokestar Spirit',
      types: ['Dark', 'Ghost'],
      weightkg: 61
    }
  ],
  [
    'pokestarblackdoor',
    {
      abilities: { first: 'Early Bird' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Black Door-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 0, female: 1 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5012,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarblackdoor.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarblackdoor.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarblackdoor.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarblackdoor.png',
      species: 'Pokestar Black Door',
      types: ['Grass'],
      weightkg: 61
    }
  ],
  [
    'pokestarwhitedoor',
    {
      abilities: { first: 'Blaze' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar White Door-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 1, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5013,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarwhitedoor.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarwhitedoor.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarwhitedoor.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarwhitedoor.png',
      species: 'Pokestar White Door',
      types: ['Fire'],
      weightkg: 61
    }
  ],
  [
    'pokestarblackbelt',
    {
      abilities: { first: 'Huge Power' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      cosmeticFormes: ['Pokestar Black Belt-Prop'],
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: 1, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5014,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarblackbelt.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarblackbelt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarblackbelt.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarblackbelt.png',
      species: 'Pokestar Black Belt',
      types: ['Fighting'],
      weightkg: 61
    }
  ],
  [
    'pokestarufopropu2',
    {
      abilities: { first: 'Levitate' },
      baseForme: 'Pokestar UFO',
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      color: 'White',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'PropU2',
      genderRatio: { male: 0, female: 0 },
      heightm: 1.5,
      isEggObtainable: false,
      num: -5001,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarufopropu2.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarufopropu2.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarufopropu2.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarufopropu2.png',
      species: 'Pokestar UFO-PropU2',
      types: ['Psychic', 'Electric'],
      weightkg: 61
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
