import { Pokedex } from '#dexdata/pokedex';
import type { Pokemon } from '#utils/pokemon';

const entries: [string, Pokemon.DexEntry][] = [
  [
    'missingno',
    {
      species: 'missingno.',
      num: 0,
      types: ['Bird', 'Normal'],
      baseStats: {
        hp: 33,
        atk: 136,
        def: 0,
        spa: 6,
        spd: 6,
        spe: 29
      },
      abilities: { first: 'Breaking Your Game' },
      heightm: 3,
      weightkg: 1590.8,
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      specialSprite: 'https://play.pokemonshowdown.com/sprites/afd/missingno.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/afd-shiny/missingno.png',
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/afd-back/missingno.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/afd-back-shiny/missingno.png',
      isEggObtainable: false,
      evYields: {
        atk: 0,
        def: 0,
        hp: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'bulbasaur',
    {
      species: 'bulbasaur',
      num: 1,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 45,
        atk: 49,
        def: 49,
        spa: 65,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      heightm: 0.7,
      weightkg: 6.9,
      color: 'Green',
      evos: ['ivysaur'],
      eggGroups: ['Monster', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'ivysaur',
    {
      species: 'ivysaur',
      num: 2,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 62,
        def: 63,
        spa: 80,
        spd: 80,
        spe: 60
      },
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      heightm: 1,
      weightkg: 13,
      color: 'Green',
      prevo: 'bulbasaur',
      evos: ['venusaur'],
      evoLevel: 16,
      eggGroups: ['Monster', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'venusaur',
    {
      species: 'venusaur',
      num: 3,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 82,
        def: 83,
        spa: 100,
        spd: 100,
        spe: 80
      },
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      heightm: 2,
      weightkg: 100,
      color: 'Green',
      prevo: 'ivysaur',
      evoLevel: 32,
      eggGroups: ['Monster', 'Grass'],
      otherFormes: ['venusaurmega', 'venusaurgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'venusaurgmax',
    {
      species: 'venusaur-gmax',
      num: 3,
      types: ['Grass', 'Poison'],
      baseSpecies: 'Venusaur',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 82,
        def: 83,
        spa: 100,
        spd: 100,
        spe: 80
      },
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      heightm: 2,
      weightkg: 100,
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'venusaurmega',
    {
      species: 'venusaur-mega',
      num: 3,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 123,
        spa: 122,
        spd: 120,
        spe: 80
      },
      baseSpecies: 'Venusaur',
      forme: 'Mega',
      formeLetter: 'M',
      abilities: { first: 'Thick Fat' },
      heightm: 2.4,
      weightkg: 155.5,
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'charmander',
    {
      species: 'charmander',
      num: 4,
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
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      heightm: 0.6,
      weightkg: 8.5,
      color: 'Red',
      evos: ['charmeleon'],
      eggGroups: ['Monster', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'charmeleon',
    {
      species: 'charmeleon',
      num: 5,
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
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      heightm: 1.1,
      weightkg: 19,
      color: 'Red',
      prevo: 'charmander',
      evos: ['charizard'],
      evoLevel: 16,
      eggGroups: ['Monster', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'charizard',
    {
      species: 'charizard',
      num: 6,
      types: ['Fire', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 84,
        def: 78,
        spa: 109,
        spd: 85,
        spe: 100
      },
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      heightm: 1.7,
      weightkg: 90.5,
      color: 'Red',
      prevo: 'charmeleon',
      evoLevel: 36,
      eggGroups: ['Monster', 'Dragon'],
      otherFormes: ['charizardmegax', 'charizardmegay', 'charizardgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'charizardmegax',
    {
      species: 'charizard-mega-x',
      num: 6,
      types: ['Fire', 'Dragon'],
      baseSpecies: 'Charizard',
      forme: 'Mega-X',
      formeLetter: 'M',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 130,
        def: 111,
        spa: 130,
        spd: 85,
        spe: 100
      },
      abilities: { first: 'Tough Claws' },
      heightm: 1.7,
      weightkg: 110.5,
      color: 'Black',
      eggGroups: ['Monster', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'charizardmegay',
    {
      species: 'charizard-mega-y',
      num: 6,
      types: ['Fire', 'Flying'],
      baseSpecies: 'Charizard',
      forme: 'Mega-Y',
      formeLetter: 'M',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 104,
        def: 78,
        spa: 159,
        spd: 115,
        spe: 100
      },
      abilities: { first: 'Drought' },
      heightm: 1.7,
      weightkg: 100.5,
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'charizardgmax',
    {
      species: 'charizard-gmax',
      num: 6,
      types: ['Fire', 'Flying'],
      baseSpecies: 'Charizard',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 78,
        atk: 84,
        def: 78,
        spa: 109,
        spd: 85,
        spe: 100
      },
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      heightm: 28,
      weightkg: 100.5,
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'squirtle',
    {
      species: 'squirtle',
      num: 7,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 44,
        atk: 48,
        def: 65,
        spa: 50,
        spd: 64,
        spe: 43
      },
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      heightm: 0.5,
      weightkg: 9,
      color: 'Blue',
      evos: ['wartortle'],
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'wartortle',
    {
      species: 'wartortle',
      num: 8,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 59,
        atk: 63,
        def: 80,
        spa: 65,
        spd: 80,
        spe: 58
      },
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      heightm: 1,
      weightkg: 22.5,
      color: 'Blue',
      prevo: 'squirtle',
      evos: ['blastoise'],
      evoLevel: 16,
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'blastoise',
    {
      species: 'blastoise',
      num: 9,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 79,
        atk: 83,
        def: 100,
        spa: 85,
        spd: 105,
        spe: 78
      },
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      heightm: 1.6,
      weightkg: 85.5,
      color: 'Blue',
      prevo: 'wartortle',
      evoLevel: 36,
      eggGroups: ['Monster', 'Water 1'],
      otherFormes: ['blastoisemega', 'blastoisegmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      }
    }
  ],
  [
    'blastoisegmax',
    {
      species: 'blastoise-gmax',
      num: 9,
      types: ['Water'],
      baseSpecies: 'Blastoise',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 79,
        atk: 83,
        def: 100,
        spa: 85,
        spd: 105,
        spe: 78
      },
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      heightm: 1.6,
      weightkg: 85.5,
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      }
    }
  ],
  [
    'blastoisemega',
    {
      species: 'blastoise-mega',
      num: 9,
      types: ['Water'],
      baseSpecies: 'Blastoise',
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 79,
        atk: 103,
        def: 120,
        spa: 135,
        spd: 115,
        spe: 78
      },
      abilities: { first: 'Mega Launcher' },
      heightm: 1.6,
      weightkg: 101.1,
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      }
    }
  ],
  [
    'caterpie',
    {
      species: 'caterpie',
      num: 10,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 30,
        def: 35,
        spa: 20,
        spd: 20,
        spe: 45
      },
      abilities: { first: 'Shield Dust', hidden: 'Run Away' },
      heightm: 0.3,
      weightkg: 2.9,
      color: 'Green',
      evos: ['metapod'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'metapod',
    {
      species: 'metapod',
      num: 11,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 20,
        def: 55,
        spa: 25,
        spd: 25,
        spe: 30
      },
      abilities: { first: 'Shed Skin' },
      heightm: 0.7,
      weightkg: 9.9,
      color: 'Green',
      prevo: 'caterpie',
      evos: ['butterfree'],
      evoLevel: 7,
      eggGroups: ['Bug'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'butterfree',
    {
      species: 'butterfree',
      num: 12,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 50,
        spa: 90,
        spd: 80,
        spe: 70
      },
      abilities: { first: 'Compound Eyes', hidden: 'Tinted Lens' },
      heightm: 1.1,
      weightkg: 32,
      color: 'White',
      prevo: 'metapod',
      evoLevel: 10,
      eggGroups: ['Bug'],
      otherFormes: ['butterfreegmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'butterfreegmax',
    {
      species: 'butterfree-gmax',
      num: 12,
      types: ['Bug', 'Flying'],
      baseSpecies: 'Butterfree',
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 45,
        def: 50,
        spa: 90,
        spd: 80,
        spe: 70
      },
      abilities: { first: 'Compound Eyes', hidden: 'Tinted Lens' },
      heightm: 17,
      weightkg: 96,
      color: 'White',
      eggGroups: ['Bug'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'weedle',
    {
      species: 'weedle',
      num: 13,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 35,
        def: 30,
        spa: 20,
        spd: 20,
        spe: 50
      },
      abilities: { first: 'Shield Dust', hidden: 'Run Away' },
      heightm: 0.3,
      weightkg: 3.2,
      color: 'Brown',
      evos: ['kakuna'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'kakuna',
    {
      species: 'kakuna',
      num: 14,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 25,
        def: 50,
        spa: 25,
        spd: 25,
        spe: 35
      },
      abilities: { first: 'Shed Skin' },
      heightm: 0.6,
      weightkg: 10,
      color: 'Yellow',
      prevo: 'weedle',
      evos: ['beedrill'],
      evoLevel: 7,
      eggGroups: ['Bug'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'beedrill',
    {
      species: 'beedrill',
      num: 15,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 40,
        spa: 45,
        spd: 80,
        spe: 75
      },
      abilities: { first: 'Swarm', hidden: 'Sniper' },
      heightm: 1,
      weightkg: 29.5,
      color: 'Yellow',
      prevo: 'kakuna',
      evoLevel: 10,
      eggGroups: ['Bug'],
      otherFormes: ['beedrillmega'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'beedrillmega',
    {
      species: 'beedrill-mega',
      num: 15,
      baseSpecies: 'Beedrill',
      forme: 'Mega',
      formeLetter: 'M',
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 150,
        def: 40,
        spa: 15,
        spd: 80,
        spe: 145
      },
      abilities: { first: 'Adaptability' },
      heightm: 1.4,
      weightkg: 40.5,
      color: 'Yellow',
      eggGroups: ['Bug'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'pidgey',
    {
      species: 'pidgey',
      num: 16,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 40,
        spa: 35,
        spd: 35,
        spe: 56
      },
      abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
      heightm: 0.3,
      weightkg: 1.8,
      color: 'Brown',
      evos: ['pidgeotto'],
      eggGroups: ['Flying'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'pidgeotto',
    {
      species: 'pidgeotto',
      num: 17,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 63,
        atk: 60,
        def: 55,
        spa: 50,
        spd: 50,
        spe: 71
      },
      abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
      heightm: 1.1,
      weightkg: 30,
      color: 'Brown',
      prevo: 'pidgey',
      evos: ['pidgeot'],
      evoLevel: 18,
      eggGroups: ['Flying'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pidgeot',
    {
      species: 'pidgeot',
      num: 18,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 83,
        atk: 80,
        def: 75,
        spa: 70,
        spd: 70,
        spe: 101
      },
      abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
      heightm: 1.5,
      weightkg: 39.5,
      color: 'Brown',
      prevo: 'pidgeotto',
      evoLevel: 36,
      eggGroups: ['Flying'],
      otherFormes: ['pidgeotmega'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      }
    }
  ],
  [
    'pidgeotmega',
    {
      species: 'pidgeot-mega',
      num: 18,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Pidgeot',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 83,
        atk: 80,
        def: 80,
        spa: 135,
        spd: 80,
        spe: 121
      },
      abilities: { first: 'No Guard' },
      heightm: 2.2,
      weightkg: 50.5,
      color: 'Brown',
      eggGroups: ['Flying'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      }
    }
  ],
  [
    'rattata',
    {
      species: 'rattata',
      num: 19,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 56,
        def: 35,
        spa: 25,
        spd: 35,
        spe: 72
      },
      abilities: { first: 'Run Away', second: 'Guts', hidden: 'Hustle' },
      heightm: 0.3,
      weightkg: 3.5,
      color: 'Purple',
      evos: ['raticate'],
      eggGroups: ['Field'],
      otherFormes: ['rattataalola'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'rattataalola',
    {
      species: 'rattata-alola',
      num: 19,
      types: ['Dark', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Rattata',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 30,
        atk: 56,
        def: 35,
        spa: 25,
        spd: 35,
        spe: 72
      },
      abilities: { first: 'Gluttony', second: 'Hustle', hidden: 'Thick Fat' },
      heightm: 0.3,
      weightkg: 3.8,
      color: 'Black',
      evos: ['raticatealola'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'raticate',
    {
      species: 'raticate',
      num: 20,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 81,
        def: 60,
        spa: 50,
        spd: 70,
        spe: 97
      },
      abilities: { first: 'Run Away', second: 'Guts', hidden: 'Hustle' },
      heightm: 0.7,
      weightkg: 18.5,
      color: 'Brown',
      prevo: 'rattata',
      evoLevel: 20,
      eggGroups: ['Field'],
      otherFormes: ['raticatealola', 'raticatealolatotem'],
      catchRate: {
        base: 127,
        percentageWithOrdinaryPokeballAtFullHealth: '26%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'raticatealola',
    {
      species: 'raticate-alola',
      num: 20,
      types: ['Dark', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Raticate',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 75,
        atk: 71,
        def: 70,
        spa: 40,
        spd: 80,
        spe: 77
      },
      abilities: { first: 'Gluttony', second: 'Hustle', hidden: 'Thick Fat' },
      heightm: 0.7,
      weightkg: 25.5,
      color: 'Black',
      prevo: 'rattataalola',
      evoLevel: 20,
      eggGroups: ['Field'],
      catchRate: {
        base: 127,
        percentageWithOrdinaryPokeballAtFullHealth: '26%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'raticatealolatotem',
    {
      species: 'raticate-alola-totem',
      num: 20,
      baseSpecies: 'Raticate',
      forme: 'Alola-Totem',
      formeLetter: 'T',
      types: ['Dark', 'Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 71,
        def: 70,
        spa: 40,
        spd: 80,
        spe: 77
      },
      abilities: { first: 'Thick Fat' },
      heightm: 1.4,
      weightkg: 105,
      color: 'Black',
      eggGroups: ['Field'],
      catchRate: {
        base: 127,
        percentageWithOrdinaryPokeballAtFullHealth: '26%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'spearow',
    {
      species: 'spearow',
      num: 21,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 60,
        def: 30,
        spa: 31,
        spd: 31,
        spe: 70
      },
      abilities: { first: 'Keen Eye', hidden: 'Sniper' },
      heightm: 0.3,
      weightkg: 2,
      color: 'Brown',
      evos: ['fearow'],
      eggGroups: ['Flying'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'fearow',
    {
      species: 'fearow',
      num: 22,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 65,
        spa: 61,
        spd: 61,
        spe: 100
      },
      abilities: { first: 'Keen Eye', hidden: 'Sniper' },
      heightm: 1.2,
      weightkg: 38,
      color: 'Brown',
      prevo: 'spearow',
      evoLevel: 20,
      eggGroups: ['Flying'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'ekans',
    {
      species: 'ekans',
      num: 23,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 60,
        def: 44,
        spa: 40,
        spd: 54,
        spe: 55
      },
      abilities: { first: 'Intimidate', second: 'Shed Skin', hidden: 'Unnerve' },
      heightm: 2,
      weightkg: 6.9,
      color: 'Purple',
      evos: ['arbok'],
      eggGroups: ['Field', 'Dragon'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'arbok',
    {
      species: 'arbok',
      num: 24,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 95,
        def: 69,
        spa: 65,
        spd: 79,
        spe: 80
      },
      abilities: { first: 'Intimidate', second: 'Shed Skin', hidden: 'Unnerve' },
      heightm: 3.5,
      weightkg: 65,
      color: 'Purple',
      prevo: 'ekans',
      evoLevel: 22,
      eggGroups: ['Field', 'Dragon'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'pikachu',
    {
      species: 'pikachu',
      num: 25,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      prevo: 'pichu',
      evos: ['raichu', 'raichualola'],
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Field', 'Fairy'],
      otherFormes: [
        'pikachucosplay',
        'pikachurockstar',
        'pikachubelle',
        'pikachupopstar',
        'pikachuphd',
        'pikachulibre',
        'pikachuoriginal',
        'pikachuhoenn',
        'pikachusinnoh',
        'pikachuunova',
        'pikachukalos',
        'pikachualola',
        'pikachupartner',
        'pikachustarter',
        'pikachugmax',
        'pikachuworld'
      ],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachugmax',
    {
      species: 'pikachu-gmax',
      baseSpecies: 'Pikachu',
      num: 25,
      types: ['Electric'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 21,
      weightkg: 18,
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachucosplay',
    {
      species: 'pikachu-cosplay',
      num: 25,
      types: ['Electric'],
      baseSpecies: 'Pikachu',
      forme: 'Cosplay',
      formeLetter: 'C',
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachurockstar',
    {
      species: 'pikachu-rock-star',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Rock-Star',
      formeLetter: 'R',
      types: ['Electric'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachubelle',
    {
      species: 'pikachu-belle',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Belle',
      formeLetter: 'B',
      types: ['Electric'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachupopstar',
    {
      species: 'pikachu-pop-star',
      num: 25,
      types: ['Electric'],
      baseSpecies: 'Pikachu',
      forme: 'Pop-Star',
      formeLetter: 'P',
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachuphd',
    {
      species: 'pikachu-phd',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'PhD',
      formeLetter: 'D',
      types: ['Electric'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachulibre',
    {
      species: 'pikachu-libre',
      num: 25,
      types: ['Electric'],
      baseSpecies: 'Pikachu',
      forme: 'Libre',
      formeLetter: 'L',
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachuoriginal',
    {
      species: 'pikachu-original',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Original',
      formeLetter: 'O',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachuhoenn',
    {
      species: 'pikachu-hoenn',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Hoenn',
      formeLetter: 'H',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachusinnoh',
    {
      species: 'pikachu-sinnoh',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Sinnoh',
      formeLetter: 'S',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachuunova',
    {
      species: 'pikachu-unova',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Unova',
      formeLetter: 'U',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachukalos',
    {
      species: 'pikachu-kalos',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Kalos',
      formeLetter: 'K',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachualola',
    {
      species: 'pikachu-alola',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachupartner',
    {
      species: 'pikachu-partner',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Partner',
      formeLetter: 'P',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachustarter',
    {
      species: 'pikachu-starter',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'Starter',
      formeLetter: 'S',
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 80,
        def: 50,
        spa: 75,
        spd: 60,
        spe: 120
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'pikachuworld',
    {
      species: 'pikachu-world',
      num: 25,
      baseSpecies: 'Pikachu',
      forme: 'World',
      formeLetter: 'W',
      types: ['Electric'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'raichu',
    {
      species: 'raichu',
      num: 26,
      types: ['Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 90,
        def: 55,
        spa: 90,
        spd: 80,
        spe: 110
      },
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      heightm: 0.8,
      weightkg: 30,
      color: 'Yellow',
      prevo: 'pikachu',
      evoLevel: 'use Thunder Stone',
      eggGroups: ['Field', 'Fairy'],
      otherFormes: ['raichualola'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      }
    }
  ],
  [
    'raichualola',
    {
      species: 'raichu-alola',
      num: 26,
      baseSpecies: 'Raichu',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Electric', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 85,
        def: 50,
        spa: 95,
        spd: 85,
        spe: 110
      },
      abilities: { first: 'Surge Surfer' },
      heightm: 0.7,
      weightkg: 21,
      color: 'Brown',
      prevo: 'pikachu',
      evoLevel: 'use Thunder Stone',
      eggGroups: ['Field', 'Fairy'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 3
      }
    }
  ],
  [
    'sandshrew',
    {
      species: 'sandshrew',
      num: 27,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 75,
        def: 85,
        spa: 20,
        spd: 30,
        spe: 40
      },
      abilities: { first: 'Sand Veil', hidden: 'Sand Rush' },
      heightm: 0.6,
      weightkg: 12,
      color: 'Yellow',
      evos: ['sandslash'],
      eggGroups: ['Field'],
      otherFormes: ['sandshrewalola'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'sandshrewalola',
    {
      species: 'sandshrew-alola',
      num: 27,
      baseSpecies: 'Sandshrew',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Ice', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 75,
        def: 90,
        spa: 10,
        spd: 35,
        spe: 40
      },
      abilities: { first: 'Snow Cloak', hidden: 'Slush Rush' },
      heightm: 0.7,
      weightkg: 40,
      color: 'White',
      evos: ['sandslashalola'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'sandslash',
    {
      species: 'sandslash',
      num: 28,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 100,
        def: 110,
        spa: 45,
        spd: 55,
        spe: 65
      },
      abilities: { first: 'Sand Veil', hidden: 'Sand Rush' },
      heightm: 1,
      weightkg: 29.5,
      color: 'Yellow',
      prevo: 'sandshrew',
      evoLevel: 22,
      eggGroups: ['Field'],
      otherFormes: ['sandslashalola'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'sandslashalola',
    {
      species: 'sandslash-alola',
      num: 28,
      baseSpecies: 'Sandslash',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Ice', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 100,
        def: 120,
        spa: 25,
        spd: 65,
        spe: 65
      },
      abilities: { first: 'Snow Cloak', hidden: 'Slush Rush' },
      heightm: 1.2,
      weightkg: 55,
      color: 'Blue',
      prevo: 'sandshrewalola',
      evoLevel: 'use Icestone',
      eggGroups: ['Field'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'nidoranf',
    {
      species: 'nidoran-f',
      num: 29,
      types: ['Poison'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 55,
        atk: 47,
        def: 52,
        spa: 40,
        spd: 40,
        spe: 41
      },
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      heightm: 0.4,
      weightkg: 7,
      color: 'Blue',
      evos: ['nidorina'],
      eggGroups: ['Monster', 'Field'],
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'nidorina',
    {
      species: 'nidorina',
      num: 30,
      types: ['Poison'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 70,
        atk: 62,
        def: 67,
        spa: 55,
        spd: 55,
        spe: 56
      },
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      heightm: 0.8,
      weightkg: 20,
      color: 'Blue',
      prevo: 'nidoranf',
      evos: ['nidoqueen'],
      evoLevel: 'use Moon Stone',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'nidoqueen',
    {
      species: 'nidoqueen',
      num: 31,
      types: ['Poison', 'Ground'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 90,
        atk: 92,
        def: 87,
        spa: 75,
        spd: 85,
        spe: 76
      },
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Sheer Force' },
      heightm: 1.3,
      weightkg: 60,
      color: 'Blue',
      prevo: 'nidorina',
      evoLevel: 16,
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'nidoranm',
    {
      species: 'nidoran-m',
      num: 32,
      types: ['Poison'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 46,
        atk: 57,
        def: 40,
        spa: 40,
        spd: 40,
        spe: 50
      },
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      heightm: 0.5,
      weightkg: 9,
      color: 'Purple',
      evos: ['nidorino'],
      eggGroups: ['Monster', 'Field'],
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'nidorino',
    {
      species: 'nidorino',
      num: 33,
      types: ['Poison'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 61,
        atk: 72,
        def: 57,
        spa: 55,
        spd: 55,
        spe: 65
      },
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      heightm: 0.9,
      weightkg: 19.5,
      color: 'Purple',
      prevo: 'nidoranm',
      evos: ['nidoking'],
      evoLevel: 'use Moon Stone',
      eggGroups: ['Monster', 'Field'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'nidoking',
    {
      species: 'nidoking',
      num: 34,
      types: ['Poison', 'Ground'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 81,
        atk: 102,
        def: 77,
        spa: 85,
        spd: 75,
        spe: 85
      },
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Sheer Force' },
      heightm: 1.4,
      weightkg: 62,
      color: 'Purple',
      prevo: 'nidorino',
      evoLevel: 16,
      eggGroups: ['Monster', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'clefairy',
    {
      species: 'clefairy',
      num: 35,
      types: ['Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 70,
        atk: 45,
        def: 48,
        spa: 60,
        spd: 65,
        spe: 35
      },
      abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Friend Guard' },
      heightm: 0.6,
      weightkg: 7.5,
      color: 'Pink',
      prevo: 'cleffa',
      evos: ['clefable'],
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'clefable',
    {
      species: 'clefable',
      num: 36,
      types: ['Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 95,
        atk: 70,
        def: 73,
        spa: 95,
        spd: 90,
        spe: 60
      },
      abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Unaware' },
      heightm: 1.3,
      weightkg: 40,
      color: 'Pink',
      prevo: 'clefairy',
      evoLevel: 'use Moon Stone',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 25,
        percentageWithOrdinaryPokeballAtFullHealth: '7.7%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'vulpix',
    {
      species: 'vulpix',
      num: 37,
      types: ['Fire'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 38,
        atk: 41,
        def: 40,
        spa: 50,
        spd: 65,
        spe: 65
      },
      abilities: { first: 'Flash Fire', hidden: 'Drought' },
      heightm: 0.6,
      weightkg: 9.9,
      color: 'Brown',
      evos: ['ninetales'],
      eggGroups: ['Field'],
      otherFormes: ['vulpixalola'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'vulpixalola',
    {
      species: 'vulpix-alola',
      num: 37,
      baseSpecies: 'Vulpix',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Ice'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 38,
        atk: 41,
        def: 40,
        spa: 50,
        spd: 65,
        spe: 65
      },
      abilities: { first: 'Snow Cloak', hidden: 'Snow Warning' },
      heightm: 0.6,
      weightkg: 9.9,
      color: 'White',
      evos: ['ninetalesalola'],
      eggGroups: ['Field'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'ninetales',
    {
      species: 'ninetales',
      num: 38,
      types: ['Fire'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 73,
        atk: 76,
        def: 75,
        spa: 81,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Flash Fire', hidden: 'Drought' },
      heightm: 1.1,
      weightkg: 19.9,
      color: 'Yellow',
      prevo: 'vulpix',
      evoLevel: 'use Fire Stone',
      eggGroups: ['Field'],
      otherFormes: ['ninetalesalola'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 1
      }
    }
  ],
  [
    'ninetalesalola',
    {
      species: 'ninetales-alola',
      num: 38,
      baseSpecies: 'Ninetales',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Ice', 'Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 73,
        atk: 67,
        def: 75,
        spa: 81,
        spd: 100,
        spe: 109
      },
      abilities: { first: 'Snow Cloak', hidden: 'Snow Warning' },
      heightm: 1.1,
      weightkg: 19.9,
      color: 'Blue',
      prevo: 'vulpixalola',
      evoLevel: 'use Ice Stone',
      eggGroups: ['Field'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 1
      }
    }
  ],
  [
    'jigglypuff',
    {
      species: 'jigglypuff',
      num: 39,
      types: ['Normal', 'Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 115,
        atk: 45,
        def: 20,
        spa: 45,
        spd: 25,
        spe: 20
      },
      abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Friend Guard' },
      heightm: 0.5,
      weightkg: 5.5,
      color: 'Pink',
      prevo: 'igglybuff',
      evos: ['wigglytuff'],
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 170,
        percentageWithOrdinaryPokeballAtFullHealth: '32.4%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'wigglytuff',
    {
      species: 'wigglytuff',
      num: 40,
      types: ['Normal', 'Fairy'],
      genderRatio: { male: 0.25, female: 0.75 },
      baseStats: {
        hp: 140,
        atk: 70,
        def: 45,
        spa: 85,
        spd: 50,
        spe: 45
      },
      abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Frisk' },
      heightm: 1,
      weightkg: 12,
      color: 'Pink',
      prevo: 'jigglypuff',
      evoLevel: 'use Moon Stone',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 50,
        percentageWithOrdinaryPokeballAtFullHealth: '12.9%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      isEggObtainable: true,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'zubat',
    {
      species: 'zubat',
      num: 41,
      types: ['Poison', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 35,
        spa: 30,
        spd: 40,
        spe: 55
      },
      abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
      heightm: 0.8,
      weightkg: 7.5,
      color: 'Purple',
      evos: ['golbat'],
      eggGroups: ['Flying'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'golbat',
    {
      species: 'golbat',
      num: 42,
      types: ['Poison', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 70,
        spa: 65,
        spd: 75,
        spe: 90
      },
      abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
      heightm: 1.6,
      weightkg: 55,
      color: 'Purple',
      prevo: 'zubat',
      evos: ['crobat'],
      evoLevel: 22,
      eggGroups: ['Flying'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'oddish',
    {
      species: 'oddish',
      num: 43,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 50,
        def: 55,
        spa: 75,
        spd: 65,
        spe: 30
      },
      abilities: { first: 'Chlorophyll', hidden: 'Run Away' },
      heightm: 0.5,
      weightkg: 5.4,
      color: 'Blue',
      evos: ['gloom'],
      eggGroups: ['Grass'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'gloom',
    {
      species: 'gloom',
      num: 44,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 65,
        def: 70,
        spa: 85,
        spd: 75,
        spe: 40
      },
      abilities: { first: 'Chlorophyll', hidden: 'Stench' },
      heightm: 0.8,
      weightkg: 8.6,
      color: 'Blue',
      prevo: 'oddish',
      evos: ['vileplume', 'bellossom'],
      evoLevel: 21,
      eggGroups: ['Grass'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'vileplume',
    {
      species: 'vileplume',
      num: 45,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 75,
        atk: 80,
        def: 85,
        spa: 110,
        spd: 90,
        spe: 50
      },
      abilities: { first: 'Chlorophyll', hidden: 'Effect Spore' },
      heightm: 1.2,
      weightkg: 18.6,
      color: 'Red',
      prevo: 'gloom',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'paras',
    {
      species: 'paras',
      num: 46,
      types: ['Bug', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 70,
        def: 55,
        spa: 45,
        spd: 55,
        spe: 25
      },
      abilities: { first: 'Effect Spore', second: 'Dry Skin', hidden: 'Damp' },
      heightm: 0.3,
      weightkg: 5.4,
      color: 'Red',
      evos: ['parasect'],
      eggGroups: ['Bug', 'Grass'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'parasect',
    {
      species: 'parasect',
      num: 47,
      types: ['Bug', 'Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 95,
        def: 80,
        spa: 60,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Effect Spore', second: 'Dry Skin', hidden: 'Damp' },
      heightm: 1,
      weightkg: 29.5,
      color: 'Red',
      prevo: 'paras',
      evoLevel: 24,
      eggGroups: ['Bug', 'Grass'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'venonat',
    {
      species: 'venonat',
      num: 48,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 55,
        def: 50,
        spa: 40,
        spd: 55,
        spe: 45
      },
      abilities: { first: 'Compound Eyes', second: 'Tinted Lens', hidden: 'Run Away' },
      heightm: 1,
      weightkg: 30,
      color: 'Purple',
      evos: ['venomoth'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'venomoth',
    {
      species: 'venomoth',
      num: 49,
      types: ['Bug', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 65,
        def: 60,
        spa: 90,
        spd: 75,
        spe: 90
      },
      abilities: { first: 'Shield Dust', second: 'Tinted Lens', hidden: 'Wonder Skin' },
      heightm: 1.5,
      weightkg: 12.5,
      color: 'Purple',
      prevo: 'venonat',
      evoLevel: 31,
      eggGroups: ['Bug'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'diglett',
    {
      species: 'diglett',
      num: 50,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 10,
        atk: 55,
        def: 25,
        spa: 35,
        spd: 45,
        spe: 95
      },
      abilities: { first: 'Sand Veil', second: 'Arena Trap', hidden: 'Sand Force' },
      heightm: 0.2,
      weightkg: 0.8,
      color: 'Brown',
      evos: ['dugtrio'],
      eggGroups: ['Field'],
      otherFormes: ['diglettalola'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'diglettalola',
    {
      species: 'diglett-alola',
      num: 50,
      baseSpecies: 'Diglett',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Ground', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 10,
        atk: 55,
        def: 30,
        spa: 35,
        spd: 45,
        spe: 90
      },
      abilities: { first: 'Sand Veil', second: 'Tangling Hair', hidden: 'Sand Force' },
      heightm: 0.2,
      weightkg: 1,
      color: 'Brown',
      evos: ['dugtrioalola'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'dugtrio',
    {
      species: 'dugtrio',
      num: 51,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 100,
        def: 50,
        spa: 50,
        spd: 70,
        spe: 120
      },
      abilities: { first: 'Sand Veil', second: 'Arena Trap', hidden: 'Sand Force' },
      heightm: 0.7,
      weightkg: 33.3,
      color: 'Brown',
      prevo: 'diglett',
      evoLevel: 26,
      eggGroups: ['Field'],
      otherFormes: ['dugtrioalola'],
      catchRate: {
        base: 50,
        percentageWithOrdinaryPokeballAtFullHealth: '12.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'dugtrioalola',
    {
      species: 'dugtrio-alola',
      num: 51,
      baseSpecies: 'Dugtrio',
      forme: 'Alola',
      formeLetter: 'A',
      types: ['Ground', 'Steel'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 100,
        def: 60,
        spa: 50,
        spd: 70,
        spe: 110
      },
      abilities: { first: 'Sand Veil', second: 'Tangling Hair', hidden: 'Sand Force' },
      heightm: 0.7,
      weightkg: 66.6,
      color: 'Brown',
      prevo: 'diglettalola',
      evoLevel: 26,
      eggGroups: ['Field'],
      catchRate: {
        base: 50,
        percentageWithOrdinaryPokeballAtFullHealth: '12.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'meowth',
    {
      species: 'meowth',
      num: 52,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 35,
        spa: 40,
        spd: 40,
        spe: 90
      },
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
      heightm: 0.4,
      weightkg: 4.2,
      color: 'Yellow',
      evos: ['persian'],
      eggGroups: ['Field'],
      otherFormes: ['meowthalola', 'meowthgmax', 'meowthgalar'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'meowthalola',
    {
      species: 'meowth-alola',
      num: 52,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Meowth',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 40,
        atk: 35,
        def: 35,
        spa: 50,
        spd: 40,
        spe: 90
      },
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Rattled' },
      heightm: 0.4,
      weightkg: 4.2,
      color: 'Blue',
      evos: ['persianalola'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'meowthgalar',
    {
      species: 'meowth-galar',
      num: 52,
      baseSpecies: 'Meowth',
      forme: 'Galar',
      formeLetter: 'G',
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 35,
        def: 35,
        spa: 50,
        spd: 40,
        spe: 90
      },
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Rattled' },
      heightm: 0.4,
      weightkg: 4.2,
      color: 'Blue',
      evos: ['perrserker'],
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'meowthgmax',
    {
      species: 'meowth-gmax',
      baseSpecies: 'Meowth',
      num: 52,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      forme: 'Gmax',
      formeLetter: 'G',
      baseStats: {
        hp: 40,
        atk: 45,
        def: 35,
        spa: 40,
        spd: 40,
        spe: 90
      },
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
      heightm: 33,
      weightkg: 12.6,
      color: 'Yellow',
      eggGroups: ['Field'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'persian',
    {
      species: 'persian',
      num: 53,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 70,
        def: 60,
        spa: 65,
        spd: 65,
        spe: 115
      },
      abilities: { first: 'Limber', second: 'Technician', hidden: 'Unnerve' },
      heightm: 1,
      weightkg: 32,
      color: 'Yellow',
      prevo: 'meowth',
      evoLevel: 28,
      eggGroups: ['Field'],
      otherFormes: ['persianalola'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'persianalola',
    {
      species: 'persian-alola',
      num: 53,
      types: ['Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Persian',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 65,
        atk: 60,
        def: 60,
        spa: 75,
        spd: 65,
        spe: 115
      },
      abilities: { first: 'Fur Coat', second: 'Technician', hidden: 'Rattled' },
      heightm: 1.1,
      weightkg: 33,
      color: 'Blue',
      prevo: 'meowthalola',
      evoLevel: 2,
      eggGroups: ['Field'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'psyduck',
    {
      species: 'psyduck',
      num: 54,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 52,
        def: 48,
        spa: 65,
        spd: 50,
        spe: 55
      },
      abilities: { first: 'Damp', second: 'Cloud Nine', hidden: 'Swift Swim' },
      heightm: 0.8,
      weightkg: 19.6,
      color: 'Yellow',
      evos: ['golduck'],
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'golduck',
    {
      species: 'golduck',
      num: 55,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 82,
        def: 78,
        spa: 95,
        spd: 80,
        spe: 85
      },
      abilities: { first: 'Damp', second: 'Cloud Nine', hidden: 'Swift Swim' },
      heightm: 1.7,
      weightkg: 76.6,
      color: 'Blue',
      prevo: 'psyduck',
      evoLevel: 33,
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'mankey',
    {
      species: 'mankey',
      num: 56,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 80,
        def: 35,
        spa: 35,
        spd: 45,
        spe: 70
      },
      abilities: { first: 'Vital Spirit', second: 'Anger Point', hidden: 'Defiant' },
      heightm: 0.5,
      weightkg: 28,
      color: 'Brown',
      evos: ['primeape'],
      eggGroups: ['Field'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'primeape',
    {
      species: 'primeape',
      num: 57,
      types: ['Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 105,
        def: 60,
        spa: 60,
        spd: 70,
        spe: 95
      },
      abilities: { first: 'Vital Spirit', second: 'Anger Point', hidden: 'Defiant' },
      heightm: 1,
      weightkg: 32,
      color: 'Brown',
      prevo: 'mankey',
      evoLevel: 28,
      eggGroups: ['Field'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'growlithe',
    {
      species: 'growlithe',
      num: 58,
      types: ['Fire'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 55,
        atk: 70,
        def: 45,
        spa: 70,
        spd: 50,
        spe: 60
      },
      abilities: { first: 'Intimidate', second: 'Flash Fire', hidden: 'Justified' },
      heightm: 0.7,
      weightkg: 19,
      color: 'Brown',
      evos: ['arcanine'],
      eggGroups: ['Field'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'arcanine',
    {
      species: 'arcanine',
      num: 59,
      types: ['Fire'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 90,
        atk: 110,
        def: 80,
        spa: 100,
        spd: 80,
        spe: 95
      },
      abilities: { first: 'Intimidate', second: 'Flash Fire', hidden: 'Justified' },
      heightm: 1.9,
      weightkg: 155,
      color: 'Brown',
      prevo: 'growlithe',
      evoLevel: 'use Fire Stone',
      eggGroups: ['Field'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'poliwag',
    {
      species: 'poliwag',
      num: 60,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 50,
        def: 40,
        spa: 40,
        spd: 40,
        spe: 90
      },
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
      heightm: 0.6,
      weightkg: 12.4,
      color: 'Blue',
      evos: ['poliwhirl'],
      eggGroups: ['Water 1'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'poliwhirl',
    {
      species: 'poliwhirl',
      num: 61,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 65,
        def: 65,
        spa: 50,
        spd: 50,
        spe: 90
      },
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
      heightm: 1,
      weightkg: 20,
      color: 'Blue',
      prevo: 'poliwag',
      evos: ['poliwrath', 'politoed'],
      evoLevel: 25,
      eggGroups: ['Water 1'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'poliwrath',
    {
      species: 'poliwrath',
      num: 62,
      types: ['Water', 'Fighting'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 95,
        def: 95,
        spa: 70,
        spd: 90,
        spe: 70
      },
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
      heightm: 1.3,
      weightkg: 54,
      color: 'Blue',
      prevo: 'poliwhirl',
      evoLevel: 'use Water Stone',
      eggGroups: ['Water 1'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'abra',
    {
      species: 'abra',
      num: 63,
      types: ['Psychic'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 25,
        atk: 20,
        def: 15,
        spa: 105,
        spd: 55,
        spe: 90
      },
      abilities: { first: 'Synchronize', second: 'Inner Focus', hidden: 'Magic Guard' },
      heightm: 0.9,
      weightkg: 19.5,
      color: 'Brown',
      evos: ['kadabra'],
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kadabra',
    {
      species: 'kadabra',
      num: 64,
      types: ['Psychic'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 40,
        atk: 35,
        def: 30,
        spa: 120,
        spd: 70,
        spe: 105
      },
      abilities: { first: 'Synchronize', second: 'Inner Focus', hidden: 'Magic Guard' },
      heightm: 1.3,
      weightkg: 56.5,
      color: 'Brown',
      prevo: 'abra',
      evos: ['alakazam'],
      evoLevel: 16,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'alakazam',
    {
      species: 'alakazam',
      num: 65,
      types: ['Psychic'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 55,
        atk: 50,
        def: 45,
        spa: 135,
        spd: 95,
        spe: 120
      },
      abilities: { first: 'Synchronize', second: 'Inner Focus', hidden: 'Magic Guard' },
      heightm: 1.5,
      weightkg: 48,
      color: 'Brown',
      prevo: 'kadabra',
      evoLevel: 'Trade',
      eggGroups: ['Human-Like'],
      otherFormes: ['alakazammega'],
      catchRate: {
        base: 50,
        percentageWithOrdinaryPokeballAtFullHealth: '12.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'alakazammega',
    {
      species: 'alakazam-mmga',
      num: 65,
      types: ['Psychic'],
      baseSpecies: 'Alakazam',
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 55,
        atk: 50,
        def: 65,
        spa: 175,
        spd: 105,
        spe: 150
      },
      abilities: { first: 'Trace' },
      heightm: 1.2,
      weightkg: 48,
      color: 'Brown',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 50,
        percentageWithOrdinaryPokeballAtFullHealth: '12.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'machop',
    {
      species: 'machop',
      num: 66,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 70,
        atk: 80,
        def: 50,
        spa: 35,
        spd: 35,
        spe: 35
      },
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      heightm: 0.8,
      weightkg: 19.5,
      color: 'Gray',
      evos: ['machoke'],
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'machoke',
    {
      species: 'machoke',
      num: 67,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 80,
        atk: 100,
        def: 70,
        spa: 50,
        spd: 60,
        spe: 45
      },
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      heightm: 1.5,
      weightkg: 70.5,
      color: 'Gray',
      prevo: 'machop',
      evos: ['machamp'],
      evoLevel: 28,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'machamp',
    {
      species: 'machamp',
      num: 68,
      types: ['Fighting'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 90,
        atk: 130,
        def: 80,
        spa: 65,
        spd: 85,
        spe: 55
      },
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      heightm: 1.6,
      weightkg: 130,
      color: 'Gray',
      prevo: 'machoke',
      evoLevel: 'Trade',
      eggGroups: ['Human-Like'],
      otherFormes: ['machampgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'machampgmax',
    {
      species: 'machamp-gmax',
      baseSpecies: 'Machamp',
      num: 68,
      types: ['Fighting'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 90,
        atk: 130,
        def: 80,
        spa: 65,
        spd: 85,
        spe: 55
      },
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      heightm: 4.8,
      weightkg: 390,
      color: 'Gray',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'bellsprout',
    {
      species: 'bellsprout',
      num: 69,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 75,
        def: 35,
        spa: 70,
        spd: 30,
        spe: 40
      },
      abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
      heightm: 0.7,
      weightkg: 4,
      color: 'Green',
      evos: ['weepinbell'],
      eggGroups: ['Grass'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'weepinbell',
    {
      species: 'weepinbell',
      num: 70,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 50,
        spa: 85,
        spd: 45,
        spe: 55
      },
      abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
      heightm: 1,
      weightkg: 6.4,
      color: 'Green',
      prevo: 'bellsprout',
      evos: ['victreebel'],
      evoLevel: 21,
      eggGroups: ['Grass'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'victreebel',
    {
      species: 'victreebel',
      num: 71,
      types: ['Grass', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 105,
        def: 65,
        spa: 100,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
      heightm: 1.7,
      weightkg: 15.5,
      color: 'Green',
      prevo: 'weepinbell',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'tentacool',
    {
      species: 'tentacool',
      num: 72,
      types: ['Water', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 40,
        def: 35,
        spa: 50,
        spd: 100,
        spe: 70
      },
      abilities: { first: 'Clear Body', second: 'Liquid Ooze', hidden: 'Rain Dish' },
      heightm: 0.9,
      weightkg: 45.5,
      color: 'Blue',
      evos: ['tentacruel'],
      eggGroups: ['Water 3'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'tentacruel',
    {
      species: 'tentacruel',
      num: 73,
      types: ['Water', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 70,
        def: 65,
        spa: 80,
        spd: 120,
        spe: 100
      },
      abilities: { first: 'Clear Body', second: 'Liquid Ooze', hidden: 'Rain Dish' },
      heightm: 1.6,
      weightkg: 55,
      color: 'Blue',
      prevo: 'tentacool',
      evoLevel: 30,
      eggGroups: ['Water 3'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'geodude',
    {
      species: 'geodude',
      num: 74,
      types: ['Rock', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 80,
        def: 100,
        spa: 30,
        spd: 30,
        spe: 20
      },
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
      heightm: 0.4,
      weightkg: 20,
      color: 'Brown',
      evos: ['graveler'],
      eggGroups: ['Mineral'],
      otherFormes: ['geodudealola'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'geodudealola',
    {
      species: 'geodude-alola',
      num: 74,
      types: ['Rock', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Geodude',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 40,
        atk: 80,
        def: 100,
        spa: 30,
        spd: 30,
        spe: 20
      },
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
      heightm: 0.4,
      weightkg: 20.3,
      color: 'Gray',
      evos: ['graveleralola'],
      eggGroups: ['Mineral'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'graveler',
    {
      species: 'graveler',
      num: 75,
      types: ['Rock', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 95,
        def: 115,
        spa: 45,
        spd: 45,
        spe: 35
      },
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
      heightm: 1,
      weightkg: 105,
      color: 'Brown',
      prevo: 'geodude',
      evos: ['golem'],
      evoLevel: 25,
      eggGroups: ['Mineral'],
      otherFormes: ['graveleralola'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'graveleralola',
    {
      species: 'graveler-alola',
      num: 75,
      types: ['Rock', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Graveler',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 55,
        atk: 95,
        def: 115,
        spa: 45,
        spd: 45,
        spe: 35
      },
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
      heightm: 1,
      weightkg: 110,
      color: 'Gray',
      prevo: 'geodudealola',
      evos: ['golemalola'],
      evoLevel: 25,
      eggGroups: ['Mineral'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'golem',
    {
      species: 'golem',
      num: 76,
      types: ['Rock', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 120,
        def: 130,
        spa: 55,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
      heightm: 1.4,
      weightkg: 300,
      color: 'Brown',
      prevo: 'graveler',
      evoLevel: 'Trade',
      eggGroups: ['Mineral'],
      otherFormes: ['golemalola'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'golemalola',
    {
      species: 'golem-alola',
      num: 76,
      types: ['Rock', 'Electric'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Golem',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 80,
        atk: 120,
        def: 130,
        spa: 55,
        spd: 65,
        spe: 45
      },
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
      heightm: 1.7,
      weightkg: 316,
      color: 'Gray',
      prevo: 'graveleralola',
      evoLevel: 'Trade',
      eggGroups: ['Mineral'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 3,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'ponyta',
    {
      species: 'ponyta',
      num: 77,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 85,
        def: 55,
        spa: 65,
        spd: 65,
        spe: 90
      },
      abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
      heightm: 1,
      weightkg: 30,
      color: 'Yellow',
      evos: ['rapidash'],
      eggGroups: ['Field'],
      otherFormes: ['ponytagalar'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'ponytagalar',
    {
      species: 'ponyta-galar',
      num: 77,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Ponyta',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 50,
        atk: 85,
        def: 55,
        spa: 65,
        spd: 65,
        spe: 90
      },
      abilities: { first: 'Run Away', second: 'Pastel Veil', hidden: 'Anticipation' },
      heightm: 0.8,
      weightkg: 24,
      color: 'White',
      evos: ['rapidashgalar'],
      eggGroups: ['Field'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'rapidash',
    {
      species: 'rapidash',
      num: 78,
      types: ['Fire'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 100,
        def: 70,
        spa: 80,
        spd: 80,
        spe: 105
      },
      abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
      heightm: 1.7,
      weightkg: 95,
      color: 'Yellow',
      prevo: 'ponyta',
      evoLevel: 40,
      eggGroups: ['Field'],
      otherFormes: ['rapidashgalar'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'rapidashgalar',
    {
      species: 'rapidash-galar',
      num: 78,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Rapidash',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 65,
        atk: 100,
        def: 70,
        spa: 80,
        spd: 80,
        spe: 105
      },
      abilities: { first: 'Run Away', second: 'Pastel Veil', hidden: 'Anticipation' },
      heightm: 1.7,
      weightkg: 95,
      color: 'White',
      prevo: 'ponytagalar',
      evoLevel: 40,
      eggGroups: ['Field'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'slowpoke',
    {
      species: 'slowpoke',
      num: 79,
      types: ['Water', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 65,
        def: 65,
        spa: 40,
        spd: 40,
        spe: 15
      },
      abilities: { first: 'Oblivious', second: 'Own Tempo', hidden: 'Regenerator' },
      heightm: 1.2,
      weightkg: 36,
      color: 'Pink',
      evos: ['slowbro', 'slowking'],
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'slowpokegalar',
    {
      species: 'slowpoke-galar',
      baseSpecies: 'Slowpoke',
      forme: 'Galar',
      formeLetter: 'G',
      num: 79,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 65,
        def: 65,
        spa: 40,
        spd: 40,
        spe: 15
      },
      abilities: { first: 'Gluttony', second: 'Own Tempo', hidden: 'Regenerator' },
      heightm: 1.2,
      weightkg: 36,
      color: 'Pink',
      evos: ['slowbrogalar', 'slowkinggalar'],
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'slowbro',
    {
      species: 'slowbro',
      num: 80,
      types: ['Water', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 75,
        def: 110,
        spa: 100,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Oblivious', second: 'Own Tempo', hidden: 'Regenerator' },
      heightm: 1.6,
      weightkg: 78.5,
      color: 'Pink',
      prevo: 'slowpoke',
      evoLevel: 37,
      eggGroups: ['Monster', 'Water 1'],
      otherFormes: ['slowbromega'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'slowbrogalar',
    {
      species: 'slowbro-galar',
      num: 80,
      baseSpecies: 'Slowbro',
      forme: 'Galar',
      formeLetter: 'G',
      types: ['Poison', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 100,
        def: 95,
        spa: 100,
        spd: 70,
        spe: 30
      },
      abilities: { first: 'Quick Draw', second: 'Own Tempo', hidden: 'Regenerator' },
      heightm: 1.6,
      weightkg: 70.5,
      color: 'Pink',
      prevo: 'slowpokegalar',
      evoLevel: 'use Galarica Cuff',
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'slowbromega',
    {
      species: 'slowbro-mega',
      num: 80,
      types: ['Water', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Slowbro',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 95,
        atk: 75,
        def: 180,
        spa: 130,
        spd: 80,
        spe: 30
      },
      abilities: { first: 'Shell Armor' },
      heightm: 2,
      weightkg: 120,
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'magnemite',
    {
      species: 'magnemite',
      num: 81,
      types: ['Electric', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 25,
        atk: 35,
        def: 70,
        spa: 95,
        spd: 55,
        spe: 45
      },
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
      heightm: 0.3,
      weightkg: 6,
      color: 'Gray',
      evos: ['magneton'],
      eggGroups: ['Mineral'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'magneton',
    {
      species: 'magneton',
      num: 82,
      types: ['Electric', 'Steel'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 50,
        atk: 60,
        def: 95,
        spa: 120,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
      heightm: 1,
      weightkg: 60,
      color: 'Gray',
      prevo: 'magnemite',
      evos: ['magnezone'],
      evoLevel: 30,
      eggGroups: ['Mineral'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'farfetchd',
    {
      species: "farfetch'd",
      num: 83,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 52,
        atk: 90,
        def: 55,
        spa: 58,
        spd: 62,
        spe: 60
      },
      abilities: { first: 'Keen Eye', second: 'Inner Focus', hidden: 'Defiant' },
      heightm: 0.8,
      weightkg: 15,
      color: 'Brown',
      eggGroups: ['Flying', 'Field'],
      otherFormes: ['farfetchdgalar'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'farfetchdgalar',
    {
      species: "farfetch'd-galar",
      num: 83,
      types: ['Fighting'],
      baseSpecies: "Farfetch'd",
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 52,
        atk: 95,
        def: 55,
        spa: 58,
        spd: 62,
        spe: 55
      },
      abilities: { first: 'Steadfast', second: 'Steadfast', hidden: 'Scrappy' },
      heightm: 0.8,
      weightkg: 42,
      color: 'Brown',
      evos: ['sirfetchd'],
      eggGroups: ['Flying', 'Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'doduo',
    {
      species: 'doduo',
      num: 84,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 85,
        def: 45,
        spa: 35,
        spd: 35,
        spe: 75
      },
      abilities: { first: 'Run Away', second: 'Early Bird', hidden: 'Tangled Feet' },
      heightm: 1.4,
      weightkg: 39.2,
      color: 'Brown',
      evos: ['dodrio'],
      eggGroups: ['Flying'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'dodrio',
    {
      species: 'dodrio',
      num: 85,
      types: ['Normal', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 110,
        def: 70,
        spa: 60,
        spd: 60,
        spe: 110
      },
      abilities: { first: 'Run Away', second: 'Early Bird', hidden: 'Tangled Feet' },
      heightm: 1.8,
      weightkg: 85.2,
      color: 'Brown',
      prevo: 'doduo',
      evoLevel: 31,
      eggGroups: ['Flying'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'seel',
    {
      species: 'seel',
      num: 86,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 45,
        def: 55,
        spa: 45,
        spd: 70,
        spe: 45
      },
      abilities: { first: 'Thick Fat', second: 'Hydration', hidden: 'Ice Body' },
      heightm: 1.1,
      weightkg: 90,
      color: 'White',
      evos: ['dewgong'],
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'dewgong',
    {
      species: 'dewgong',
      num: 87,
      types: ['Water', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 70,
        def: 80,
        spa: 70,
        spd: 95,
        spe: 70
      },
      abilities: { first: 'Thick Fat', second: 'Hydration', hidden: 'Ice Body' },
      heightm: 1.7,
      weightkg: 120,
      color: 'White',
      prevo: 'seel',
      evoLevel: 34,
      eggGroups: ['Water 1', 'Field'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'grimer',
    {
      species: 'grimer',
      num: 88,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 80,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 25
      },
      abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Poison Touch' },
      heightm: 0.9,
      weightkg: 30,
      color: 'Purple',
      evos: ['muk'],
      eggGroups: ['Amorphous'],
      otherFormes: ['grimeralola'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'grimeralola',
    {
      species: 'grimer-alola',
      num: 88,
      types: ['Poison', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Grimer',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 80,
        atk: 80,
        def: 50,
        spa: 40,
        spd: 50,
        spe: 25
      },
      abilities: { first: 'Poison Touch', second: 'Gluttony', hidden: 'Power of Alchemy' },
      heightm: 0.7,
      weightkg: 42,
      color: 'Green',
      evos: ['mukalola'],
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'muk',
    {
      species: 'muk',
      num: 89,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 105,
        def: 75,
        spa: 65,
        spd: 100,
        spe: 50
      },
      abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Poison Touch' },
      heightm: 1.2,
      weightkg: 30,
      color: 'Purple',
      prevo: 'grimer',
      evoLevel: 38,
      eggGroups: ['Amorphous'],
      otherFormes: ['mukalola'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'mukalola',
    {
      species: 'muk-alola',
      num: 89,
      types: ['Poison', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Muk',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 105,
        atk: 105,
        def: 75,
        spa: 65,
        spd: 100,
        spe: 50
      },
      abilities: { first: 'Poison Touch', second: 'Gluttony', hidden: 'Power of Alchemy' },
      heightm: 1,
      weightkg: 52,
      color: 'Green',
      prevo: 'grimeralola',
      evoLevel: 38,
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'shellder',
    {
      species: 'shellder',
      num: 90,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 65,
        def: 100,
        spa: 45,
        spd: 25,
        spe: 40
      },
      abilities: { first: 'Shell Armor', second: 'Skill Link', hidden: 'Overcoat' },
      heightm: 0.3,
      weightkg: 4,
      color: 'Purple',
      evos: ['cloyster'],
      eggGroups: ['Water 3'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'cloyster',
    {
      species: 'cloyster',
      num: 91,
      types: ['Water', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 95,
        def: 180,
        spa: 85,
        spd: 45,
        spe: 70
      },
      abilities: { first: 'Shell Armor', second: 'Skill Link', hidden: 'Overcoat' },
      heightm: 1.5,
      weightkg: 132.5,
      color: 'Purple',
      prevo: 'shellder',
      evoLevel: 'use Water Stone',
      eggGroups: ['Water 3'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'gastly',
    {
      species: 'gastly',
      num: 92,
      types: ['Ghost', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 35,
        def: 30,
        spa: 100,
        spd: 35,
        spe: 80
      },
      abilities: { first: 'Levitate' },
      heightm: 1.3,
      weightkg: 0.1,
      color: 'Purple',
      evos: ['haunter'],
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'haunter',
    {
      species: 'haunter',
      num: 93,
      types: ['Ghost', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 50,
        def: 45,
        spa: 115,
        spd: 55,
        spe: 95
      },
      abilities: { first: 'Levitate' },
      heightm: 1.6,
      weightkg: 0.1,
      color: 'Purple',
      prevo: 'gastly',
      evos: ['gengar'],
      evoLevel: 25,
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'gengar',
    {
      species: 'gengar',
      num: 94,
      types: ['Ghost', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 65,
        def: 60,
        spa: 130,
        spd: 75,
        spe: 110
      },
      abilities: { first: 'Cursed Body' },
      heightm: 1.5,
      weightkg: 40.5,
      color: 'Purple',
      prevo: 'haunter',
      evoLevel: 'Trade',
      eggGroups: ['Amorphous'],
      otherFormes: ['gengarmega', 'gengargmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'gengarmega',
    {
      species: 'gengar-mega',
      num: 94,
      types: ['Ghost', 'Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Gengar',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 60,
        atk: 65,
        def: 80,
        spa: 170,
        spd: 95,
        spe: 130
      },
      abilities: { first: 'Shadow Tag' },
      heightm: 1.4,
      weightkg: 40.5,
      color: 'Purple',
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'gengarmax',
    {
      species: 'gengar-gmax',
      num: 94,
      types: ['Ghost', 'Poison'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 65,
        def: 60,
        spa: 130,
        spd: 75,
        spe: 110
      },
      abilities: { first: 'Cursed Body' },
      heightm: 4.2,
      weightkg: 121.5,
      color: 'Purple',
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'onix',
    {
      species: 'onix',
      num: 95,
      types: ['Rock', 'Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 35,
        atk: 45,
        def: 160,
        spa: 30,
        spd: 45,
        spe: 70
      },
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Weak Armor' },
      heightm: 8.8,
      weightkg: 210,
      color: 'Gray',
      evos: ['steelix'],
      eggGroups: ['Mineral'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'drowzee',
    {
      species: 'drowzee',
      num: 96,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 48,
        def: 45,
        spa: 43,
        spd: 90,
        spe: 42
      },
      abilities: { first: 'Insomnia', second: 'Forewarn', hidden: 'Inner Focus' },
      heightm: 1,
      weightkg: 32.4,
      color: 'Yellow',
      evos: ['hypno'],
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'hypno',
    {
      species: 'hypno',
      num: 97,
      types: ['Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 85,
        atk: 73,
        def: 70,
        spa: 73,
        spd: 115,
        spe: 67
      },
      abilities: { first: 'Insomnia', second: 'Forewarn', hidden: 'Inner Focus' },
      heightm: 1.6,
      weightkg: 75.6,
      color: 'Yellow',
      prevo: 'drowzee',
      evoLevel: 26,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'krabby',
    {
      species: 'krabby',
      num: 98,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 105,
        def: 90,
        spa: 25,
        spd: 25,
        spe: 50
      },
      abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Sheer Force' },
      heightm: 0.4,
      weightkg: 6.5,
      color: 'Red',
      evos: ['kingler'],
      eggGroups: ['Water 3'],
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kingler',
    {
      species: 'kingler',
      num: 99,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 130,
        def: 115,
        spa: 50,
        spd: 50,
        spe: 75
      },
      abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Sheer Force' },
      heightm: 1.3,
      weightkg: 60,
      color: 'Red',
      prevo: 'krabby',
      evoLevel: 28,
      eggGroups: ['Water 3'],
      otherFormes: ['kinglergmax'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kinglergmax',
    {
      species: 'kingler-gmax',
      baseSpecies: 'kingler',
      num: 99,
      types: ['Water'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 130,
        def: 115,
        spa: 50,
        spd: 50,
        spe: 75
      },
      abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Sheer Force' },
      heightm: 3.9,
      weightkg: 180,
      color: 'Red',
      eggGroups: ['Water 3'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'voltorb',
    {
      species: 'voltorb',
      num: 100,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 40,
        atk: 30,
        def: 50,
        spa: 55,
        spd: 55,
        spe: 100
      },
      abilities: { first: 'Soundproof', second: 'Static', hidden: 'Aftermath' },
      heightm: 0.5,
      weightkg: 10.4,
      color: 'Red',
      evos: ['electrode'],
      eggGroups: ['Mineral'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'electrode',
    {
      species: 'electrode',
      num: 101,
      types: ['Electric'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 50,
        def: 70,
        spa: 80,
        spd: 80,
        spe: 150
      },
      abilities: { first: 'Soundproof', second: 'Static', hidden: 'Aftermath' },
      heightm: 1.2,
      weightkg: 66.6,
      color: 'Red',
      prevo: 'voltorb',
      evoLevel: 30,
      eggGroups: ['Mineral'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'exeggcute',
    {
      species: 'exeggcute',
      num: 102,
      types: ['Grass', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 40,
        def: 80,
        spa: 60,
        spd: 45,
        spe: 40
      },
      abilities: { first: 'Chlorophyll', hidden: 'Harvest' },
      heightm: 0.4,
      weightkg: 2.5,
      color: 'Pink',
      evos: ['exeggutor', 'exeggutoralola'],
      eggGroups: ['Grass'],
      catchRate: {
        base: 90,
        percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'exeggutor',
    {
      species: 'exeggutor',
      num: 103,
      types: ['Grass', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 95,
        def: 85,
        spa: 125,
        spd: 75,
        spe: 55
      },
      abilities: { first: 'Chlorophyll', hidden: 'Harvest' },
      heightm: 2,
      weightkg: 120,
      color: 'Yellow',
      prevo: 'exeggcute',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Grass'],
      otherFormes: ['exeggutoralola'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'exeggutoralola',
    {
      species: 'exeggutor-alola',
      num: 103,
      types: ['Grass', 'Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Exeggutor',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 95,
        atk: 105,
        def: 85,
        spa: 125,
        spd: 75,
        spe: 45
      },
      abilities: { first: 'Frisk', hidden: 'Harvest' },
      heightm: 10.9,
      weightkg: 415.6,
      color: 'Yellow',
      prevo: 'exeggcute',
      evoLevel: 'use Leaf Stone',
      eggGroups: ['Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'cubone',
    {
      species: 'cubone',
      num: 104,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 50,
        atk: 50,
        def: 95,
        spa: 40,
        spd: 50,
        spe: 35
      },
      abilities: { first: 'Rock Head', second: 'Lightning Rod', hidden: 'Battle Armor' },
      heightm: 0.4,
      weightkg: 6.5,
      color: 'Brown',
      evos: ['marowak', 'marowakalola'],
      eggGroups: ['Monster'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'marowak',
    {
      species: 'marowak',
      num: 105,
      types: ['Ground'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 60,
        atk: 80,
        def: 110,
        spa: 50,
        spd: 80,
        spe: 45
      },
      abilities: { first: 'Rock Head', second: 'Lightning Rod', hidden: 'Battle Armor' },
      heightm: 1,
      weightkg: 45,
      color: 'Brown',
      prevo: 'cubone',
      evoLevel: 28,
      eggGroups: ['Monster'],
      otherFormes: ['marowakalola', 'marowakalolatotem'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'marowakalola',
    {
      species: 'marowak-alola',
      num: 105,
      types: ['Fire', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Marowak',
      forme: 'Alola',
      formeLetter: 'A',
      baseStats: {
        hp: 60,
        atk: 80,
        def: 110,
        spa: 50,
        spd: 80,
        spe: 45
      },
      abilities: { first: 'Cursed Body', second: 'Lightning Rod', hidden: 'Rock Head' },
      heightm: 1,
      weightkg: 34,
      color: 'Purple',
      prevo: 'cubone',
      evoLevel: 28,
      eggGroups: ['Monster'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'marowakalolatotem',
    {
      species: 'marowak-alola-totem',
      num: 105,
      types: ['Fire', 'Ghost'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Marowak',
      forme: 'Alola-Totem',
      formeLetter: 'T',
      baseStats: {
        hp: 60,
        atk: 80,
        def: 110,
        spa: 50,
        spd: 80,
        spe: 45
      },
      abilities: { first: 'Rock Head' },
      heightm: 1.7,
      weightkg: 98,
      color: 'Purple',
      eggGroups: ['Monster'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'hitmonlee',
    {
      species: 'hitmonlee',
      num: 106,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 50,
        atk: 120,
        def: 53,
        spa: 35,
        spd: 110,
        spe: 87
      },
      abilities: { first: 'Limber', second: 'Reckless', hidden: 'Unburden' },
      heightm: 1.5,
      weightkg: 49.8,
      color: 'Brown',
      prevo: 'tyrogue',
      evoLevel: 'Level 20 with higher Attack',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'hitmonchan',
    {
      species: 'hitmonchan',
      num: 107,
      types: ['Fighting'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 50,
        atk: 105,
        def: 79,
        spa: 35,
        spd: 110,
        spe: 76
      },
      abilities: { first: 'Keen Eye', second: 'Iron Fist', hidden: 'Inner Focus' },
      heightm: 1.4,
      weightkg: 50.2,
      color: 'Brown',
      prevo: 'tyrogue',
      evoLevel: 'Level 20 with higher defense',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'lickitung',
    {
      species: 'lickitung',
      num: 108,
      types: ['Normal'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 90,
        atk: 55,
        def: 75,
        spa: 60,
        spd: 75,
        spe: 30
      },
      abilities: { first: 'Own Tempo', second: 'Oblivious', hidden: 'Cloud Nine' },
      heightm: 1.2,
      weightkg: 65.5,
      color: 'Pink',
      evos: ['lickilicky'],
      eggGroups: ['Monster'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'koffing',
    {
      species: 'koffing',
      num: 109,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 65,
        def: 95,
        spa: 60,
        spd: 45,
        spe: 35
      },
      abilities: { first: 'Levitate' },
      heightm: 0.6,
      weightkg: 1,
      color: 'Purple',
      evos: ['weezing'],
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'weezing',
    {
      species: 'weezing',
      num: 110,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 120,
        spa: 85,
        spd: 70,
        spe: 60
      },
      abilities: { first: 'Levitate', second: 'Neutralizing Gas', hidden: 'Stench' },
      heightm: 1.2,
      weightkg: 9.5,
      color: 'Purple',
      prevo: 'koffing',
      evoLevel: 35,
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'weezinggalar',
    {
      species: 'weezing-galar',
      baseSpecies: 'Weezing',
      forme: 'Galar',
      formeLetter: 'G',
      num: 110,
      types: ['Poison'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 90,
        def: 120,
        spa: 85,
        spd: 70,
        spe: 60
      },
      abilities: { first: 'Levitate', second: 'Neutralizing Gas', hidden: 'Misty Surge' },
      heightm: 3,
      weightkg: 16,
      color: 'Gray',
      prevo: 'koffing',
      evoLevel: 35,
      eggGroups: ['Amorphous'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'rhyhorn',
    {
      species: 'rhyhorn',
      num: 111,
      types: ['Ground', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 85,
        def: 95,
        spa: 30,
        spd: 30,
        spe: 25
      },
      abilities: { first: 'Lightning Rod', second: 'Rock Head', hidden: 'Reckless' },
      heightm: 1,
      weightkg: 115,
      color: 'Gray',
      evos: ['rhydon'],
      eggGroups: ['Monster', 'Field'],
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'rhydon',
    {
      species: 'rhydon',
      num: 112,
      types: ['Ground', 'Rock'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 105,
        atk: 130,
        def: 120,
        spa: 45,
        spd: 45,
        spe: 40
      },
      abilities: { first: 'Lightning Rod', second: 'Rock Head', hidden: 'Reckless' },
      heightm: 1.9,
      weightkg: 120,
      color: 'Gray',
      prevo: 'rhyhorn',
      evos: ['rhyperior'],
      evoLevel: 42,
      eggGroups: ['Monster', 'Field'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'chansey',
    {
      species: 'chansey',
      num: 113,
      types: ['Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 250,
        atk: 5,
        def: 5,
        spa: 35,
        spd: 105,
        spe: 50
      },
      abilities: { first: 'Natural Cure', second: 'Serene Grace', hidden: 'Healer' },
      heightm: 1.1,
      weightkg: 34.6,
      color: 'Pink',
      prevo: 'happiny',
      evos: ['blissey'],
      evoLevel: 'Hold Oval Stone, Level Up',
      eggGroups: ['Fairy'],
      catchRate: {
        base: 30,
        percentageWithOrdinaryPokeballAtFullHealth: '8.8%'
      },
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'tangela',
    {
      species: 'tangela',
      num: 114,
      types: ['Grass'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 55,
        def: 115,
        spa: 100,
        spd: 40,
        spe: 60
      },
      abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Regenerator' },
      heightm: 1,
      weightkg: 35,
      color: 'Blue',
      evos: ['tangrowth'],
      eggGroups: ['Grass'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kangaskhan',
    {
      species: 'kangaskhan',
      num: 115,
      types: ['Normal'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 105,
        atk: 95,
        def: 80,
        spa: 40,
        spd: 80,
        spe: 90
      },
      abilities: { first: 'Early Bird', second: 'Scrappy', hidden: 'Inner Focus' },
      heightm: 2.2,
      weightkg: 80,
      color: 'Brown',
      eggGroups: ['Monster'],
      otherFormes: ['kangaskhanmega'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kangaskhanmega',
    {
      species: 'kangaskhan-mega',
      num: 115,
      types: ['Normal'],
      baseSpecies: 'Kangaskhan',
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 105,
        atk: 125,
        def: 100,
        spa: 60,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Parental Bond' },
      heightm: 2.2,
      weightkg: 100,
      color: 'Brown',
      eggGroups: ['Monster'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'horsea',
    {
      species: 'horsea',
      num: 116,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 30,
        atk: 40,
        def: 70,
        spa: 70,
        spd: 25,
        spe: 60
      },
      abilities: { first: 'Swift Swim', second: 'Sniper', hidden: 'Damp' },
      heightm: 0.4,
      weightkg: 8,
      color: 'Blue',
      evos: ['seadra'],
      eggGroups: ['Water 1', 'Dragon'],
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'seadra',
    {
      species: 'seadra',
      num: 117,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 55,
        atk: 65,
        def: 95,
        spa: 95,
        spd: 45,
        spe: 85
      },
      abilities: { first: 'Poison Point', second: 'Sniper', hidden: 'Damp' },
      heightm: 1.2,
      weightkg: 25,
      color: 'Blue',
      prevo: 'horsea',
      evos: ['kingdra'],
      evoLevel: 32,
      eggGroups: ['Water 1', 'Dragon'],
      catchRate: {
        base: 75,
        percentageWithOrdinaryPokeballAtFullHealth: '17.5%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'goldeen',
    {
      species: 'goldeen',
      num: 118,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 45,
        atk: 67,
        def: 60,
        spa: 35,
        spd: 50,
        spe: 63
      },
      abilities: { first: 'Swift Swim', second: 'Water Veil', hidden: 'Lightning Rod' },
      heightm: 0.6,
      weightkg: 15,
      color: 'Red',
      evos: ['seaking'],
      eggGroups: ['Water 2'],
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'seaking',
    {
      species: 'seaking',
      num: 119,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 80,
        atk: 92,
        def: 65,
        spa: 65,
        spd: 80,
        spe: 68
      },
      abilities: { first: 'Swift Swim', second: 'Water Veil', hidden: 'Lightning Rod' },
      heightm: 1.3,
      weightkg: 39,
      color: 'Red',
      prevo: 'goldeen',
      evoLevel: 33,
      eggGroups: ['Water 2'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'staryu',
    {
      species: 'staryu',
      num: 120,
      types: ['Water'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 30,
        atk: 45,
        def: 55,
        spa: 70,
        spd: 55,
        spe: 85
      },
      abilities: { first: 'Illuminate', second: 'Natural Cure', hidden: 'Analytic' },
      heightm: 0.8,
      weightkg: 34.5,
      color: 'Brown',
      evos: ['starmie'],
      eggGroups: ['Water 3'],
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'starmie',
    {
      species: 'starmie',
      num: 121,
      types: ['Water', 'Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 60,
        atk: 75,
        def: 85,
        spa: 100,
        spd: 85,
        spe: 115
      },
      abilities: { first: 'Illuminate', second: 'Natural Cure', hidden: 'Analytic' },
      heightm: 1.1,
      weightkg: 80,
      color: 'Purple',
      prevo: 'staryu',
      evoLevel: 'use Water Stone',
      eggGroups: ['Water 3'],
      catchRate: {
        base: 60,
        percentageWithOrdinaryPokeballAtFullHealth: '14.8%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'mrmime',
    {
      species: 'Mr. Mime',
      num: 122,
      types: ['Psychic', 'Fairy'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 40,
        atk: 45,
        def: 65,
        spa: 100,
        spd: 120,
        spe: 90
      },
      abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
      heightm: 1.3,
      weightkg: 54.5,
      color: 'Pink',
      prevo: 'mimejr',
      evoLevel: 'Level up while knowing Mimic',
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'mrmimegalar',
    {
      species: 'Mr. Mime-Galar',
      num: 122,
      types: ['Ice', 'Psychic'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Mr. Mime',
      forme: 'Galar',
      formeLetter: 'G',
      baseStats: {
        hp: 50,
        atk: 65,
        def: 65,
        spa: 90,
        spd: 90,
        spe: 100
      },
      abilities: { first: 'Vital Spirit', second: 'Screen Cleaner', hidden: 'Ice Body' },
      heightm: 1.4,
      weightkg: 56.8,
      color: 'White',
      evos: ['mrrime'],
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 2,
        spe: 0
      }
    }
  ],
  [
    'scyther',
    {
      species: 'scyther',
      num: 123,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 70,
        atk: 110,
        def: 80,
        spa: 55,
        spd: 80,
        spe: 105
      },
      abilities: { first: 'Swarm', second: 'Technician', hidden: 'Steadfast' },
      heightm: 1.5,
      weightkg: 56,
      color: 'Green',
      evos: ['scizor'],
      eggGroups: ['Bug'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'jynx',
    {
      species: 'jynx',
      num: 124,
      types: ['Ice', 'Psychic'],
      genderRatio: { male: 0, female: 1 },
      baseStats: {
        hp: 65,
        atk: 50,
        def: 35,
        spa: 115,
        spd: 95,
        spe: 95
      },
      abilities: { first: 'Oblivious', second: 'Forewarn', hidden: 'Dry Skin' },
      heightm: 1.4,
      weightkg: 40.6,
      color: 'Red',
      prevo: 'smoochum',
      evoLevel: 30,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'electabuzz',
    {
      species: 'electabuzz',
      num: 125,
      types: ['Electric'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 65,
        atk: 83,
        def: 57,
        spa: 95,
        spd: 85,
        spe: 105
      },
      abilities: { first: 'Static', hidden: 'Vital Spirit' },
      heightm: 1.1,
      weightkg: 30,
      color: 'Yellow',
      prevo: 'elekid',
      evos: ['electivire'],
      evoLevel: 30,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'magmar',
    {
      species: 'magmar',
      num: 126,
      types: ['Fire'],
      genderRatio: { male: 0.75, female: 0.25 },
      baseStats: {
        hp: 65,
        atk: 95,
        def: 57,
        spa: 100,
        spd: 85,
        spe: 93
      },
      abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
      heightm: 1.3,
      weightkg: 44.5,
      color: 'Red',
      prevo: 'magby',
      evos: ['magmortar'],
      evoLevel: 30,
      eggGroups: ['Human-Like'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 2,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'pinsir',
    {
      species: 'pinsir',
      num: 127,
      types: ['Bug'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 65,
        atk: 125,
        def: 100,
        spa: 55,
        spd: 70,
        spe: 85
      },
      abilities: { first: 'Hyper Cutter', second: 'Mold Breaker', hidden: 'Moxie' },
      heightm: 1.5,
      weightkg: 55,
      color: 'Brown',
      eggGroups: ['Bug'],
      otherFormes: ['pinsirmega'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'pinsirmega',
    {
      species: 'pinsir-mega',
      num: 127,
      types: ['Bug', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Pinsir',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 65,
        atk: 155,
        def: 120,
        spa: 65,
        spd: 90,
        spe: 105
      },
      abilities: { first: 'Aerilate' },
      heightm: 1.7,
      weightkg: 59,
      color: 'Brown',
      eggGroups: ['Bug'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'tauros',
    {
      species: 'tauros',
      num: 128,
      types: ['Normal'],
      genderRatio: { male: 1, female: 0 },
      baseStats: {
        hp: 75,
        atk: 100,
        def: 95,
        spa: 40,
        spd: 70,
        spe: 110
      },
      abilities: { first: 'Intimidate', second: 'Anger Point', hidden: 'Sheer Force' },
      heightm: 1.4,
      weightkg: 88.4,
      color: 'Brown',
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'magikarp',
    {
      species: 'magikarp',
      num: 129,
      types: ['Water'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 20,
        atk: 10,
        def: 55,
        spa: 15,
        spd: 20,
        spe: 80
      },
      abilities: { first: 'Swift Swim', hidden: 'Rattled' },
      heightm: 0.9,
      weightkg: 10,
      color: 'Red',
      evos: ['gyarados'],
      eggGroups: ['Water 2', 'Dragon'],
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 1285,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 1
      }
    }
  ],
  [
    'gyarados',
    {
      species: 'gyarados',
      num: 130,
      types: ['Water', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 95,
        atk: 125,
        def: 79,
        spa: 60,
        spd: 100,
        spe: 81
      },
      abilities: { first: 'Intimidate', hidden: 'Moxie' },
      heightm: 6.5,
      weightkg: 235,
      color: 'Blue',
      prevo: 'magikarp',
      evoLevel: 20,
      eggGroups: ['Water 2', 'Dragon'],
      otherFormes: ['gyaradosmega'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 1285,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'gyaradosmega',
    {
      species: 'gyarados-mega',
      num: 130,
      types: ['Water', 'Dark'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseSpecies: 'Gyarados',
      forme: 'Mega',
      formeLetter: 'M',
      baseStats: {
        hp: 95,
        atk: 155,
        def: 109,
        spa: 70,
        spd: 130,
        spe: 81
      },
      abilities: { first: 'Mold Breaker' },
      heightm: 6.5,
      weightkg: 305,
      color: 'Blue',
      eggGroups: ['Water 2', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 1285,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'lapras',
    {
      species: 'lapras',
      num: 131,
      types: ['Water', 'Ice'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 130,
        atk: 85,
        def: 80,
        spa: 85,
        spd: 95,
        spe: 60
      },
      abilities: { first: 'Water Absorb', second: 'Shell Armor', hidden: 'Hydration' },
      heightm: 2.5,
      weightkg: 220,
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      otherFormes: ['laprasgmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'laprasgmax',
    {
      species: 'lapras-gmax',
      baseSpecies: 'Lapras',
      num: 131,
      types: ['Water', 'Ice'],
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 130,
        atk: 85,
        def: 80,
        spa: 85,
        spd: 95,
        spe: 60
      },
      abilities: { first: 'Water Absorb', second: 'Shell Armor', hidden: 'Hydration' },
      heightm: 7.5,
      weightkg: 660,
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'ditto',
    {
      species: 'ditto',
      num: 132,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 48,
        atk: 48,
        def: 48,
        spa: 48,
        spd: 48,
        spe: 48
      },
      abilities: { first: 'Limber', hidden: 'Imposter' },
      heightm: 0.3,
      weightkg: 4,
      color: 'Purple',
      eggGroups: ['Ditto'],
      catchRate: {
        base: 35,
        percentageWithOrdinaryPokeballAtFullHealth: '9.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 1,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'eevee',
    {
      species: 'eevee',
      num: 133,
      types: ['Normal'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 55,
        atk: 55,
        def: 50,
        spa: 45,
        spd: 65,
        spe: 55
      },
      abilities: { first: 'Run Away', second: 'Adaptability', hidden: 'Anticipation' },
      heightm: 0.3,
      weightkg: 6.5,
      color: 'Brown',
      evos: ['vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon'],
      eggGroups: ['Field'],
      otherFormes: ['eeveestarter', 'eeveegmax'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'eeveestarter',
    {
      species: 'eevee-starter',
      num: 133,
      types: ['Normal'],
      baseSpecies: 'Eevee',
      forme: 'Starter',
      formeLetter: 'S',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 75,
        def: 70,
        spa: 65,
        spd: 85,
        spe: 75
      },
      abilities: { first: 'Run Away', second: 'Adaptability', hidden: 'Anticipation' },
      heightm: 0.3,
      weightkg: 6.5,
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'eeveegmax',
    {
      species: 'eevee-gmax',
      baseSpecies: 'Eevee',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 133,
      types: ['Normal'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 55,
        atk: 55,
        def: 50,
        spa: 45,
        spd: 65,
        spe: 55
      },
      abilities: { first: 'Run Away', second: 'Adaptability', hidden: 'Anticipation' },
      heightm: 18,
      weightkg: 19.5,
      color: 'Brown',
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 1,
        spe: 0
      }
    }
  ],
  [
    'vaporeon',
    {
      species: 'vaporeon',
      num: 134,
      types: ['Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 130,
        atk: 65,
        def: 60,
        spa: 110,
        spd: 95,
        spe: 65
      },
      abilities: { first: 'Water Absorb', hidden: 'Hydration' },
      heightm: 1,
      weightkg: 29,
      color: 'Blue',
      prevo: 'eevee',
      evoLevel: 'use Water Stone',
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'jolteon',
    {
      species: 'jolteon',
      num: 135,
      types: ['Electric'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 65,
        def: 60,
        spa: 110,
        spd: 95,
        spe: 130
      },
      abilities: { first: 'Volt Absorb', hidden: 'Quick Feet' },
      heightm: 0.8,
      weightkg: 24.5,
      color: 'Yellow',
      prevo: 'eevee',
      evoLevel: 'use Thunder Stone',
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'flareon',
    {
      species: 'flareon',
      num: 136,
      types: ['Fire'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 65,
        atk: 130,
        def: 60,
        spa: 95,
        spd: 110,
        spe: 65
      },
      abilities: { first: 'Flash Fire', hidden: 'Guts' },
      heightm: 0.9,
      weightkg: 25,
      color: 'Red',
      prevo: 'eevee',
      evoLevel: 'use Fire Stone',
      eggGroups: ['Field'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'porygon',
    {
      species: 'porygon',
      num: 137,
      types: ['Normal'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 65,
        atk: 60,
        def: 70,
        spa: 85,
        spd: 75,
        spe: 40
      },
      abilities: { first: 'Trace', second: 'Download', hidden: 'Analytic' },
      heightm: 0.8,
      weightkg: 36.5,
      color: 'Pink',
      evos: ['porygon2'],
      eggGroups: ['Mineral'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 1,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'omanyte',
    {
      species: 'omanyte',
      num: 138,
      types: ['Rock', 'Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 35,
        atk: 40,
        def: 100,
        spa: 90,
        spd: 55,
        spe: 35
      },
      abilities: { first: 'Swift Swim', second: 'Shell Armor', hidden: 'Weak Armor' },
      heightm: 0.4,
      weightkg: 7.5,
      color: 'Blue',
      evos: ['omastar'],
      eggGroups: ['Water 1', 'Water 3'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'omastar',
    {
      species: 'omastar',
      num: 139,
      types: ['Rock', 'Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 70,
        atk: 60,
        def: 125,
        spa: 115,
        spd: 70,
        spe: 55
      },
      abilities: { first: 'Swift Swim', second: 'Shell Armor', hidden: 'Weak Armor' },
      heightm: 1,
      weightkg: 35,
      color: 'Blue',
      prevo: 'omanyte',
      evoLevel: 40,
      eggGroups: ['Water 1', 'Water 3'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 2,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kabuto',
    {
      species: 'kabuto',
      num: 140,
      types: ['Rock', 'Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 30,
        atk: 80,
        def: 90,
        spa: 55,
        spd: 45,
        spe: 55
      },
      abilities: { first: 'Swift Swim', second: 'Battle Armor', hidden: 'Weak Armor' },
      heightm: 0.5,
      weightkg: 11.5,
      color: 'Brown',
      evos: ['kabutops'],
      eggGroups: ['Water 1', 'Water 3'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 1,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'kabutops',
    {
      species: 'kabutops',
      num: 141,
      types: ['Rock', 'Water'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 60,
        atk: 115,
        def: 105,
        spa: 65,
        spd: 70,
        spe: 80
      },
      abilities: { first: 'Swift Swim', second: 'Battle Armor', hidden: 'Weak Armor' },
      heightm: 1.3,
      weightkg: 40.5,
      color: 'Brown',
      prevo: 'kabuto',
      evoLevel: 40,
      eggGroups: ['Water 1', 'Water 3'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'aerodactyl',
    {
      species: 'aerodactyl',
      num: 142,
      types: ['Rock', 'Flying'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 105,
        def: 65,
        spa: 60,
        spd: 75,
        spe: 130
      },
      abilities: { first: 'Rock Head', second: 'Pressure', hidden: 'Unnerve' },
      heightm: 1.8,
      weightkg: 59,
      color: 'Purple',
      eggGroups: ['Flying'],
      otherFormes: ['aerodactylmega'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'aerodactylmega',
    {
      species: 'aerodactyl-mega',
      num: 142,
      types: ['Rock', 'Flying'],
      baseSpecies: 'Aerodactyl',
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 80,
        atk: 135,
        def: 85,
        spa: 70,
        spd: 95,
        spe: 150
      },
      abilities: { first: 'Tough Claws' },
      heightm: 2.1,
      weightkg: 79,
      color: 'Purple',
      eggGroups: ['Flying'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 2
      }
    }
  ],
  [
    'snorlax',
    {
      species: 'snorlax',
      num: 143,
      types: ['Normal'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 160,
        atk: 110,
        def: 65,
        spa: 65,
        spd: 110,
        spe: 30
      },
      abilities: { first: 'Immunity', second: 'Thick Fat', hidden: 'Gluttony' },
      heightm: 2.1,
      weightkg: 460,
      color: 'Black',
      prevo: 'munchlax',
      evoLevel: 'Level up with happiness of at least 220',
      eggGroups: ['Monster'],
      otherFormes: ['snorlaxgmax'],
      catchRate: {
        base: 25,
        percentageWithOrdinaryPokeballAtFullHealth: '7.7%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'snorlaxgmax',
    {
      species: 'snorlax-gmax',
      baseSpecies: 'Snorlax',
      forme: 'Gmax',
      formeLetter: 'G',
      num: 143,
      types: ['Normal'],
      genderRatio: { male: 0.875, female: 0.125 },
      baseStats: {
        hp: 160,
        atk: 110,
        def: 65,
        spa: 65,
        spd: 110,
        spe: 30
      },
      abilities: { first: 'Immunity', second: 'Thick Fat', hidden: 'Gluttony' },
      heightm: 10,
      weightkg: 980,
      color: 'Black',
      eggGroups: ['Monster'],
      catchRate: {
        base: 25,
        percentageWithOrdinaryPokeballAtFullHealth: '7.7%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 2,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'articuno',
    {
      species: 'articuno',
      num: 144,
      types: ['Ice', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 85,
        def: 100,
        spa: 95,
        spd: 125,
        spe: 85
      },
      abilities: { first: 'Pressure', hidden: 'Snow Cloak' },
      heightm: 1.7,
      weightkg: 55.4,
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      otherFormes: ['articunogalar'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      }
    }
  ],
  [
    'articunogalar',
    {
      species: 'articuno-galar',
      baseSpecies: 'Articuno',
      forme: 'Galar',
      formeLetter: 'G',
      num: 144,
      types: ['Psychic', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 85,
        def: 85,
        spa: 125,
        spd: 100,
        spe: 95
      },
      abilities: { first: 'Competitive' },
      heightm: 1.7,
      weightkg: 50.9,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 3,
        spe: 0
      }
    }
  ],
  [
    'zapdos',
    {
      species: 'zapdos',
      num: 145,
      types: ['Electric', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 90,
        def: 85,
        spa: 125,
        spd: 90,
        spe: 100
      },
      abilities: { first: 'Pressure', hidden: 'Static' },
      heightm: 1.6,
      weightkg: 52.6,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      otherFormes: ['zapdosgalar'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'zapdosgalar',
    {
      species: 'zapdos-galar',
      baseSpecies: 'Zapdos',
      forme: 'Galar',
      formeLetter: 'G',
      num: 145,
      types: ['Fighting', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 125,
        def: 90,
        spa: 85,
        spd: 90,
        spe: 100
      },
      abilities: { first: 'Defiant' },
      heightm: 1.6,
      weightkg: 58.2,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'moltres',
    {
      species: 'moltres',
      num: 146,
      types: ['Fire', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 100,
        def: 90,
        spa: 125,
        spd: 85,
        spe: 90
      },
      abilities: { first: 'Pressure', hidden: 'Flame Body' },
      heightm: 2,
      weightkg: 60,
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      otherFormes: ['moltresgalar'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'moltresgalar',
    {
      species: 'moltres-galar',
      baseSpecies: 'Moltres',
      forme: 'Galar',
      formeLetter: 'G',
      num: 146,
      types: ['Dark', 'Flying'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 90,
        atk: 85,
        def: 90,
        spa: 100,
        spd: 125,
        spe: 90
      },
      abilities: { first: 'Berserk' },
      heightm: 2,
      weightkg: 66,
      color: 'Red',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'dratini',
    {
      species: 'dratini',
      num: 147,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 41,
        atk: 64,
        def: 45,
        spa: 50,
        spd: 50,
        spe: 50
      },
      abilities: { first: 'Shed Skin', hidden: 'Marvel Scale' },
      heightm: 1.8,
      weightkg: 3.3,
      color: 'Blue',
      evos: ['dragonair'],
      eggGroups: ['Water 1', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 1,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'dragonair',
    {
      species: 'dragonair',
      num: 148,
      types: ['Dragon'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 61,
        atk: 84,
        def: 65,
        spa: 70,
        spd: 70,
        spe: 70
      },
      abilities: { first: 'Shed Skin', hidden: 'Marvel Scale' },
      heightm: 4,
      weightkg: 16.5,
      color: 'Blue',
      prevo: 'dratini',
      evos: ['dragonite'],
      evoLevel: 30,
      eggGroups: ['Water 1', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 2,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'dragonite',
    {
      species: 'dragonite',
      num: 149,
      types: ['Dragon', 'Flying'],
      genderRatio: { male: 0.5, female: 0.5 },
      baseStats: {
        hp: 91,
        atk: 134,
        def: 95,
        spa: 100,
        spd: 100,
        spe: 80
      },
      abilities: { first: 'Inner Focus', hidden: 'Multiscale' },
      heightm: 2.2,
      weightkg: 210,
      color: 'Brown',
      prevo: 'dragonair',
      evoLevel: 55,
      eggGroups: ['Water 1', 'Dragon'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      isEggObtainable: true,
      evYields: {
        hp: 0,
        atk: 3,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'mewtwo',
    {
      species: 'mewtwo',
      num: 150,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 106,
        atk: 110,
        def: 90,
        spa: 154,
        spd: 90,
        spe: 130
      },
      abilities: { first: 'Pressure', hidden: 'Unnerve' },
      heightm: 2,
      weightkg: 122,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      otherFormes: ['mewtwomegax', 'mewtwomegay'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'mewtwomegax',
    {
      species: 'mewtwo-mega-x',
      num: 150,
      types: ['Psychic', 'Fighting'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 106,
        atk: 190,
        def: 100,
        spa: 154,
        spd: 100,
        spe: 130
      },
      baseSpecies: 'Mewtwo',
      forme: 'Mega-X',
      formeLetter: 'M',
      abilities: { first: 'Steadfast' },
      heightm: 2.3,
      weightkg: 127,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'mewtwomegay',
    {
      species: 'mewtwo-mega-y',
      num: 150,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 106,
        atk: 150,
        def: 70,
        spa: 194,
        spd: 120,
        spe: 140
      },
      baseSpecies: 'Mewtwo',
      forme: 'Mega-Y',
      formeLetter: 'M',
      abilities: { first: 'Insomnia' },
      heightm: 1.5,
      weightkg: 33,
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 3,
        percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
      },
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 0,
        atk: 0,
        def: 0,
        spa: 3,
        spd: 0,
        spe: 0
      }
    }
  ],
  [
    'mew',
    {
      species: 'mew',
      num: 151,
      types: ['Psychic'],
      genderRatio: { male: 0, female: 0 },
      baseStats: {
        hp: 100,
        atk: 100,
        def: 100,
        spa: 100,
        spd: 100,
        spe: 100
      },
      abilities: { first: 'Synchronize' },
      heightm: 0.4,
      weightkg: 4,
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      catchRate: {
        base: 45,
        percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
      },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 30840,
      isEggObtainable: false,
      evYields: {
        hp: 3,
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
