import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'pokestarsmeargle',
    {
      species: 'Pokestar Smeargle',
      num: -5000,
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
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Field'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarsmeargle.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarsmeargle.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarsmeargle.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarsmeargle.png'
    }
  ],
  [
    'pokestarufo',
    {
      species: 'Pokestar UFO',
      num: -5001,
      types: ['Flying', 'Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      otherFormes: ['Pokestar UFO-2', 'Pokestar UFO-PropU2'],
      cosmeticFormes: ['Pokestar UFO-PropU1'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarufo.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarufo.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarufo.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarufo.png'
    }
  ],
  [
    'pokestarufo2',
    {
      species: 'Pokestar UFO-2',
      num: -5001,
      types: ['Psychic', 'Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      baseSpecies: 'Pokestar UFO',
      forme: '2',
      formeLetter: '2',
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarufo2.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarufo2.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarufo2.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarufo2.png'
    }
  ],
  [
    'pokestarbrycenman',
    {
      species: 'Pokestar Brycen-Man',
      num: -5002,
      types: ['Dark', 'Psychic'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Brycen-Man-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarbrycenman.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarbrycenman.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarbrycenman.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarbrycenman.png'
    }
  ],
  [
    'pokestarmt',
    {
      species: 'Pokestar MT',
      num: -5003,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Analytic' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar MT-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarmt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarmt.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarmt.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarmt.png'
    }
  ],
  [
    'pokestarmt2',
    {
      species: 'Pokestar MT2',
      num: -5004,
      types: ['Steel', 'Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Flash Fire' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar MT2-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarmt2.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarmt2.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarmt2.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarmt2.png'
    }
  ],
  [
    'pokestartransport',
    {
      species: 'Pokestar Transport',
      num: -5005,
      types: ['Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Motor Drive' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Transport-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestartransport.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestartransport.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestartransport.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestartransport.png'
    }
  ],
  [
    'pokestargiant',
    {
      species: 'Pokestar Giant',
      num: -5006,
      types: ['Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Huge Power' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Giant-2', 'Pokestar Giant-PropO1', 'Pokestar Giant-PropO2'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestargiant.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestargiant.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestargiant.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestargiant.png'
    }
  ],
  [
    'pokestarhumanoid',
    {
      species: 'Pokestar Humanoid',
      num: -5007,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Insomnia' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Humanoid-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarhumanoid.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarhumanoid.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarhumanoid.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarhumanoid.png'
    }
  ],
  [
    'pokestarmonster',
    {
      species: 'Pokestar Monster',
      num: -5008,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Pressure' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Monster-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarmonster.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarmonster.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarmonster.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarmonster.png'
    }
  ],
  [
    'pokestarf00',
    {
      species: 'Pokestar F-00',
      num: -5009,
      types: ['Steel', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Volt Absorb' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar F-00-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarf00.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarf00.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarf00.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarf00.png'
    }
  ],
  [
    'pokestarf002',
    {
      species: 'Pokestar F-002',
      num: -5010,
      types: ['Steel', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Reckless' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar F-002-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarf002.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarf002.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarf002.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarf002.png'
    }
  ],
  [
    'pokestarspirit',
    {
      species: 'Pokestar Spirit',
      num: -5011,
      types: ['Dark', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Wonder Guard' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Spirit-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarspirit.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarspirit.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarspirit.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarspirit.png'
    }
  ],
  [
    'pokestarblackdoor',
    {
      species: 'Pokestar Black Door',
      num: -5012,
      types: ['Grass'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Early Bird' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Black Door-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarblackdoor.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarblackdoor.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarblackdoor.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarblackdoor.png'
    }
  ],
  [
    'pokestarwhitedoor',
    {
      species: 'Pokestar White Door',
      num: -5013,
      types: ['Fire'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Blaze' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar White Door-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarwhitedoor.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarwhitedoor.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarwhitedoor.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarwhitedoor.png'
    }
  ],
  [
    'pokestarblackbelt',
    {
      species: 'Pokestar Black Belt',
      num: -5014,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Huge Power' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      cosmeticFormes: ['Pokestar Black Belt-Prop'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarblackbelt.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarblackbelt.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarblackbelt.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarblackbelt.png'
    }
  ],
  [
    'pokestarufopropu2',
    {
      species: 'Pokestar UFO-PropU2',
      num: -5001,
      types: ['Psychic', 'Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      baseForme: 'Pokestar UFO',
      forme: 'PropU2',
      abilities: { first: 'Levitate' },
      heightm: 1.5,
      weightkg: 61,
      color: 'White',
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/gen5/pokestarufopropu2.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/pokestarufopropu2.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/pokestarufopropu2.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/pokestarufopropu2.png'
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
