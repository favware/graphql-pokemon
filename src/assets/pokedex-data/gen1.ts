import { Pokedex } from '#dexdata/pokedex';
import type { PokemonTypes } from '#utils/pokemon';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'missingno',
    {
      abilities: { first: 'Breaking Your Game' },
      baseStats: { hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29 },
      color: 'Gray',
      eggGroups: ['Undiscovered'],
      evYields: { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 },
      heightm: 3,
      isEggObtainable: false,
      num: 0,
      specialBackSprite: 'https://play.pokemonshowdown.com/sprites/afd-back/missingno.png',
      specialShinyBackSprite: 'https://play.pokemonshowdown.com/sprites/afd-back-shiny/missingno.png',
      specialShinySprite: 'https://play.pokemonshowdown.com/sprites/afd-shiny/missingno.png',
      specialSprite: 'https://play.pokemonshowdown.com/sprites/afd/missingno.png',
      species: 'missingno.',
      types: ['Bird', 'Normal'],
      weightkg: 1590.8,
      aliases: ['m00']
    }
  ],
  [
    'bulbasaur',
    {
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['ivysaur'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 1,
      species: 'bulbasaur',
      types: ['Grass', 'Poison'],
      weightkg: 6.9,
      aliases: ['bulbapedia', 'fushigidane']
    }
  ],
  [
    'ivysaur',
    {
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 0 },
      evoLevel: 16,
      evos: ['venusaur'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 2,
      prevo: 'bulbasaur',
      species: 'ivysaur',
      types: ['Grass', 'Poison'],
      weightkg: 13,
      aliases: ['fushigisou']
    }
  ],
  [
    'venusaur',
    {
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 1, spe: 0 },
      evoLevel: 32,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 3,
      otherFormes: ['venusaurmega', 'venusaurgmax'],
      prevo: 'ivysaur',
      species: 'venusaur',
      types: ['Grass', 'Poison'],
      weightkg: 100,
      aliases: ['fushigibana', 'venu']
    }
  ],
  [
    'venusaurgmax',
    {
      abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
      baseSpecies: 'Venusaur',
      baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 1, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 3,
      species: 'venusaur-gmax',
      types: ['Grass', 'Poison'],
      weightkg: 100
    }
  ],
  [
    'venusaurmega',
    {
      abilities: { first: 'Thick Fat' },
      baseSpecies: 'Venusaur',
      baseStats: { hp: 80, atk: 100, def: 123, spa: 122, spd: 120, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Monster', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 1, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 3,
      species: 'venusaur-mega',
      types: ['Grass', 'Poison'],
      weightkg: 155.5,
      aliases: ['megasaur', 'megavenu']
    }
  ],
  [
    'charmander',
    {
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['charmeleon'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 4,
      species: 'charmander',
      types: ['Fire'],
      weightkg: 8.5,
      aliases: ['hitokage']
    }
  ],
  [
    'charmeleon',
    {
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      evoLevel: 16,
      evos: ['charizard'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 5,
      prevo: 'charmander',
      species: 'charmeleon',
      types: ['Fire'],
      weightkg: 19,
      aliases: ['rizaado']
    }
  ],
  [
    'charizard',
    {
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 6,
      otherFormes: ['charizardmegax', 'charizardmegay', 'charizardgmax'],
      prevo: 'charmeleon',
      species: 'charizard',
      types: ['Fire', 'Flying'],
      weightkg: 90.5,
      aliases: ['rizaadon', 'zard']
    }
  ],
  [
    'charizardmegax',
    {
      abilities: { first: 'Tough Claws' },
      baseSpecies: 'Charizard',
      baseStats: { hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Black',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega-X',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 6,
      species: 'charizard-mega-x',
      types: ['Fire', 'Dragon'],
      weightkg: 110.5,
      aliases: ['megacharizardx', 'megazardx', 'zardx']
    }
  ],
  [
    'charizardmegay',
    {
      abilities: { first: 'Drought' },
      baseSpecies: 'Charizard',
      baseStats: { hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega-Y',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 6,
      species: 'charizard-mega-y',
      types: ['Fire', 'Flying'],
      weightkg: 100.5,
      aliases: ['megacharizard', 'megacharizardy', 'megazardy', 'zardy']
    }
  ],
  [
    'charizardgmax',
    {
      abilities: { first: 'Blaze', hidden: 'Solar Power' },
      baseSpecies: 'Charizard',
      baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Monster', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 28,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 6,
      species: 'charizard-gmax',
      types: ['Fire', 'Flying'],
      weightkg: 100.5,
      aliases: ['gigantamax charizard']
    }
  ],
  [
    'squirtle',
    {
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['wartortle'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 7,
      species: 'squirtle',
      types: ['Water'],
      weightkg: 9,
      aliases: ['zenigame']
    }
  ],
  [
    'wartortle',
    {
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 1, spe: 0 },
      evoLevel: 16,
      evos: ['blastoise'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 8,
      prevo: 'squirtle',
      species: 'wartortle',
      types: ['Water'],
      weightkg: 22.5,
      aliases: ['kameeru']
    }
  ],
  [
    'blastoise',
    {
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      evoLevel: 36,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 9,
      otherFormes: ['blastoisemega', 'blastoisegmax'],
      prevo: 'wartortle',
      species: 'blastoise',
      types: ['Water'],
      weightkg: 85.5,
      aliases: ['kamekkusu']
    }
  ],
  [
    'blastoisegmax',
    {
      abilities: { first: 'Torrent', hidden: 'Rain Dish' },
      baseSpecies: 'Blastoise',
      baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 9,
      species: 'blastoise-gmax',
      types: ['Water'],
      weightkg: 85.5
    }
  ],
  [
    'blastoisemega',
    {
      abilities: { first: 'Mega Launcher' },
      baseSpecies: 'Blastoise',
      baseStats: { hp: 79, atk: 103, def: 120, spa: 135, spd: 115, spe: 78 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 9,
      species: 'blastoise-mega',
      types: ['Water'],
      weightkg: 101.1
    }
  ],
  [
    'caterpie',
    {
      abilities: { first: 'Shield Dust', hidden: 'Run Away' },
      baseStats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['metapod'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 10,
      species: 'caterpie',
      types: ['Bug'],
      weightkg: 2.9,
      aliases: ['kyatapii']
    }
  ],
  [
    'metapod',
    {
      abilities: { first: 'Shed Skin' },
      baseStats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 7,
      evos: ['butterfree'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 11,
      prevo: 'caterpie',
      species: 'metapod',
      types: ['Bug'],
      weightkg: 9.9,
      aliases: ['toranseru']
    }
  ],
  [
    'butterfree',
    {
      abilities: { first: 'Compound Eyes', hidden: 'Tinted Lens' },
      baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 1, spe: 0 },
      evoLevel: 10,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 12,
      otherFormes: ['butterfreegmax'],
      prevo: 'metapod',
      species: 'butterfree',
      types: ['Bug', 'Flying'],
      weightkg: 32,
      aliases: ['batafurii']
    }
  ],
  [
    'butterfreegmax',
    {
      abilities: { first: 'Compound Eyes', hidden: 'Tinted Lens' },
      baseSpecies: 'Butterfree',
      baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 1, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 17,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 12,
      species: 'butterfree-gmax',
      types: ['Bug', 'Flying'],
      weightkg: 96,
      aliases: ['gigantamax butterfree']
    }
  ],
  [
    'weedle',
    {
      abilities: { first: 'Shield Dust', hidden: 'Run Away' },
      baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['kakuna'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 13,
      species: 'weedle',
      types: ['Bug', 'Poison'],
      weightkg: 3.2,
      aliases: ['biidoru']
    }
  ],
  [
    'kakuna',
    {
      abilities: { first: 'Shed Skin' },
      baseStats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 7,
      evos: ['beedrill'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 14,
      prevo: 'weedle',
      species: 'kakuna',
      types: ['Bug', 'Poison'],
      weightkg: 10,
      aliases: ['kokuun']
    }
  ],
  [
    'beedrill',
    {
      abilities: { first: 'Swarm', hidden: 'Sniper' },
      baseStats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 1, spe: 0 },
      evoLevel: 10,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 15,
      otherFormes: ['beedrillmega'],
      prevo: 'kakuna',
      species: 'beedrill',
      types: ['Bug', 'Poison'],
      weightkg: 29.5,
      aliases: ['bdrill', 'bee', 'supiaa']
    }
  ],
  [
    'beedrillmega',
    {
      abilities: { first: 'Adaptability' },
      baseSpecies: 'Beedrill',
      baseStats: { hp: 65, atk: 150, def: 40, spa: 15, spd: 80, spe: 145 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 1, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 15,
      species: 'beedrill-mega',
      types: ['Bug', 'Poison'],
      weightkg: 40.5,
      aliases: ['megabee', 'megadrill']
    }
  ],
  [
    'pidgey',
    {
      abilities: {
        first: 'Keen Eye',
        second: 'Tangled Feet',
        hidden: 'Big Pecks'
      },
      baseStats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['pidgeotto'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 16,
      species: 'pidgey',
      types: ['Normal', 'Flying'],
      weightkg: 1.8,
      aliases: ['poppo']
    }
  ],
  [
    'pidgeotto',
    {
      abilities: {
        first: 'Keen Eye',
        second: 'Tangled Feet',
        hidden: 'Big Pecks'
      },
      baseStats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 18,
      evos: ['pidgeot'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 17,
      prevo: 'pidgey',
      species: 'pidgeotto',
      types: ['Normal', 'Flying'],
      weightkg: 30,
      aliases: ['pijon']
    }
  ],
  [
    'pidgeot',
    {
      abilities: {
        first: 'Keen Eye',
        second: 'Tangled Feet',
        hidden: 'Big Pecks'
      },
      baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 36,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 18,
      otherFormes: ['pidgeotmega'],
      prevo: 'pidgeotto',
      species: 'pidgeot',
      types: ['Normal', 'Flying'],
      weightkg: 39.5,
      aliases: ['birdjesus', 'pijotto']
    }
  ],
  [
    'pidgeotmega',
    {
      abilities: { first: 'No Guard' },
      baseSpecies: 'Pidgeot',
      baseStats: { hp: 83, atk: 80, def: 80, spa: 135, spd: 80, spe: 121 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 18,
      species: 'pidgeot-mega',
      types: ['Normal', 'Flying'],
      weightkg: 50.5
    }
  ],
  [
    'rattata',
    {
      abilities: { first: 'Run Away', second: 'Guts', hidden: 'Hustle' },
      baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['raticate'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 19,
      otherFormes: ['rattataalola'],
      species: 'rattata',
      types: ['Normal'],
      weightkg: 3.5,
      aliases: ['koratta']
    }
  ],
  [
    'rattataalola',
    {
      abilities: { first: 'Gluttony', second: 'Hustle', hidden: 'Thick Fat' },
      baseSpecies: 'Rattata',
      baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['raticatealola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 19,
      species: 'rattata-alola',
      types: ['Dark', 'Normal'],
      weightkg: 3.8,
      aliases: ['alolanrattata', 'rattataa']
    }
  ],
  [
    'raticate',
    {
      abilities: { first: 'Run Away', second: 'Guts', hidden: 'Hustle' },
      baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 20,
      otherFormes: ['raticatealola', 'raticatealolatotem'],
      prevo: 'rattata',
      species: 'raticate',
      types: ['Normal'],
      weightkg: 18.5,
      aliases: ['ratta']
    }
  ],
  [
    'raticatealola',
    {
      abilities: { first: 'Gluttony', second: 'Hustle', hidden: 'Thick Fat' },
      baseSpecies: 'Raticate',
      baseStats: { hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 20,
      prevo: 'rattataalola',
      species: 'raticate-alola',
      types: ['Dark', 'Normal'],
      weightkg: 25.5,
      aliases: ['alolanraticate', 'raticatea']
    }
  ],
  [
    'raticatealolatotem',
    {
      abilities: { first: 'Thick Fat' },
      baseSpecies: 'Raticate',
      baseStats: { hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77 },
      catchRate: { base: 127, percentageWithOrdinaryPokeballAtFullHealth: '26%' },
      color: 'Black',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Alola-Totem',
      formeLetter: 'T',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 20,
      species: 'raticate-alola-totem',
      types: ['Dark', 'Normal'],
      weightkg: 105,
      aliases: ['raticatet', 'totemalolanraticate', 'totemraticate', 'totemraticatea', 'totemraticatealola']
    }
  ],
  [
    'spearow',
    {
      abilities: { first: 'Keen Eye', hidden: 'Sniper' },
      baseStats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['fearow'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 21,
      species: 'spearow',
      types: ['Normal', 'Flying'],
      weightkg: 2,
      aliases: ['onisuzume']
    }
  ],
  [
    'fearow',
    {
      abilities: { first: 'Keen Eye', hidden: 'Sniper' },
      baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 22,
      prevo: 'spearow',
      species: 'fearow',
      types: ['Normal', 'Flying'],
      weightkg: 38,
      aliases: ['onidoriru']
    }
  ],
  [
    'ekans',
    {
      abilities: { first: 'Intimidate', second: 'Shed Skin', hidden: 'Unnerve' },
      baseStats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['arbok'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 23,
      species: 'ekans',
      types: ['Poison'],
      weightkg: 6.9,
      aliases: ['aabo']
    }
  ],
  [
    'arbok',
    {
      abilities: { first: 'Intimidate', second: 'Shed Skin', hidden: 'Unnerve' },
      baseStats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Purple',
      eggGroups: ['Field', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 24,
      prevo: 'ekans',
      species: 'arbok',
      types: ['Poison'],
      weightkg: 65,
      aliases: ['aabokku']
    }
  ],
  [
    'pikachu',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'Level up with happiness of at least 220',
      evos: ['raichu', 'raichualola'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
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
      prevo: 'pichu',
      species: 'pikachu',
      types: ['Electric'],
      weightkg: 6,
      aliases: ['pika', 'pikachuu']
    }
  ],
  [
    'pikachugmax',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 21,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-gmax',
      types: ['Electric'],
      weightkg: 18,
      aliases: ['gigantamax pikachu']
    }
  ],
  [
    'pikachucosplay',
    {
      abilities: { first: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Cosplay',
      formeLetter: 'C',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-cosplay',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachurockstar',
    {
      abilities: { first: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Rock-Star',
      formeLetter: 'R',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-rock-star',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachubelle',
    {
      abilities: { first: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Belle',
      formeLetter: 'B',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-belle',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachupopstar',
    {
      abilities: { first: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Pop-Star',
      formeLetter: 'P',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-pop-star',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachuphd',
    {
      abilities: { first: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'PhD',
      formeLetter: 'D',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-phd',
      types: ['Electric'],
      weightkg: 6,
      aliases: ['pikachu doctor']
    }
  ],
  [
    'pikachulibre',
    {
      abilities: { first: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Libre',
      formeLetter: 'L',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-libre',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachuoriginal',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Original',
      formeLetter: 'O',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-original',
      types: ['Electric'],
      weightkg: 6,
      aliases: ['pikachu kanto']
    }
  ],
  [
    'pikachuhoenn',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Hoenn',
      formeLetter: 'H',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-hoenn',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachusinnoh',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Sinnoh',
      formeLetter: 'S',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-sinnoh',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachuunova',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Unova',
      formeLetter: 'U',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-unova',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachukalos',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Kalos',
      formeLetter: 'K',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-kalos',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachualola',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-alola',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachupartner',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Partner',
      formeLetter: 'P',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-partner',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachustarter',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 45, atk: 80, def: 50, spa: 75, spd: 60, spe: 120 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Starter',
      formeLetter: 'S',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-starter',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'pikachuworld',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseSpecies: 'Pikachu',
      baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'World',
      formeLetter: 'W',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 25,
      species: 'pikachu-world',
      types: ['Electric'],
      weightkg: 6
    }
  ],
  [
    'raichu',
    {
      abilities: { first: 'Static', hidden: 'Lightning Rod' },
      baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Yellow',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 'use Thunder Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 26,
      otherFormes: ['raichualola'],
      prevo: 'pikachu',
      species: 'raichu',
      types: ['Electric'],
      weightkg: 30,
      aliases: ['raichuu']
    }
  ],
  [
    'raichualola',
    {
      abilities: { first: 'Surge Surfer' },
      baseSpecies: 'Raichu',
      baseStats: { hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Field', 'Fairy'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 3 },
      evoLevel: 'use Thunder Stone',
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 2570,
      num: 26,
      prevo: 'pikachu',
      species: 'raichu-alola',
      types: ['Electric', 'Psychic'],
      weightkg: 21,
      aliases: ['alolanraichu', 'raichua']
    }
  ],
  [
    'sandshrew',
    {
      abilities: { first: 'Sand Veil', hidden: 'Sand Rush' },
      baseStats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['sandslash'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 27,
      otherFormes: ['sandshrewalola'],
      species: 'sandshrew',
      types: ['Ground'],
      weightkg: 12,
      aliases: ['sando']
    }
  ],
  [
    'sandshrewalola',
    {
      abilities: { first: 'Snow Cloak', hidden: 'Slush Rush' },
      baseSpecies: 'Sandshrew',
      baseStats: { hp: 50, atk: 75, def: 90, spa: 10, spd: 35, spe: 40 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['sandslashalola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 27,
      species: 'sandshrew-alola',
      types: ['Ice', 'Steel'],
      weightkg: 40,
      aliases: ['alolansandshrew', 'sandshrewa']
    }
  ],
  [
    'sandslash',
    {
      abilities: { first: 'Sand Veil', hidden: 'Sand Rush' },
      baseStats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 22,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 28,
      otherFormes: ['sandslashalola'],
      prevo: 'sandshrew',
      species: 'sandslash',
      types: ['Ground'],
      weightkg: 29.5,
      aliases: ['sandopan']
    }
  ],
  [
    'sandslashalola',
    {
      abilities: { first: 'Snow Cloak', hidden: 'Slush Rush' },
      baseSpecies: 'Sandslash',
      baseStats: { hp: 75, atk: 100, def: 120, spa: 25, spd: 65, spe: 65 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Icestone',
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 28,
      prevo: 'sandshrewalola',
      species: 'sandslash-alola',
      types: ['Ice', 'Steel'],
      weightkg: 55,
      aliases: ['alolansandslash', 'sandslasha']
    }
  ],
  [
    'nidoranf',
    {
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      baseStats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'Blue',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['nidorina'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 29,
      specialBulbapediaUrl: 'Nidoran♀',
      species: 'nidoranf',
      types: ['Poison'],
      weightkg: 7,
      aliases: ['nidoranfemale', 'nidoranmesu']
    }
  ],
  [
    'nidorina',
    {
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      baseStats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Moon Stone',
      evos: ['nidoqueen'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 30,
      prevo: 'nidoranf',
      species: 'nidorina',
      types: ['Poison'],
      weightkg: 20,
      aliases: ['nidoriina']
    }
  ],
  [
    'nidoqueen',
    {
      abilities: {
        first: 'Poison Point',
        second: 'Rivalry',
        hidden: 'Sheer Force'
      },
      baseStats: { hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 31,
      prevo: 'nidorina',
      species: 'nidoqueen',
      types: ['Poison', 'Ground'],
      weightkg: 60,
      aliases: ['nidokuin', 'nidoq', 'queen']
    }
  ],
  [
    'nidoranm',
    {
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      baseStats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
      catchRate: {
        base: 235,
        percentageWithOrdinaryPokeballAtFullHealth: '41.3%'
      },
      color: 'Purple',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['nidorino'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 32,
      specialBulbapediaUrl: 'Nidoran♂',
      species: 'nidoranm',
      types: ['Poison'],
      weightkg: 9,
      aliases: ['nidoranmale', 'nidoranosu']
    }
  ],
  [
    'nidorino',
    {
      abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
      baseStats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Purple',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Moon Stone',
      evos: ['nidoking'],
      genderRatio: { male: '100%', female: '0%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 33,
      prevo: 'nidoranm',
      species: 'nidorino',
      types: ['Poison'],
      weightkg: 19.5,
      aliases: ['nidoriino']
    }
  ],
  [
    'nidoking',
    {
      abilities: {
        first: 'Poison Point',
        second: 'Rivalry',
        hidden: 'Sheer Force'
      },
      baseStats: { hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 16,
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 34,
      prevo: 'nidorino',
      species: 'nidoking',
      types: ['Poison', 'Ground'],
      weightkg: 62,
      aliases: ['nidok', 'nidokingu']
    }
  ],
  [
    'clefairy',
    {
      abilities: {
        first: 'Cute Charm',
        second: 'Magic Guard',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
      catchRate: {
        base: 150,
        percentageWithOrdinaryPokeballAtFullHealth: '29.5%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level up with happiness of at least 220',
      evos: ['clefable'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 5140,
      num: 35,
      prevo: 'cleffa',
      species: 'clefairy',
      types: ['Fairy'],
      weightkg: 7.5,
      aliases: ['pippi']
    }
  ],
  [
    'clefable',
    {
      abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Unaware' },
      baseStats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Moon Stone',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 36,
      prevo: 'clefairy',
      species: 'clefable',
      types: ['Fairy'],
      weightkg: 40,
      aliases: ['clef', 'pikushii']
    }
  ],
  [
    'vulpix',
    {
      abilities: { first: 'Flash Fire', hidden: 'Drought' },
      baseStats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['ninetales'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 37,
      otherFormes: ['vulpixalola'],
      species: 'vulpix',
      types: ['Fire'],
      weightkg: 9.9,
      aliases: ['rokon']
    }
  ],
  [
    'vulpixalola',
    {
      abilities: { first: 'Snow Cloak', hidden: 'Snow Warning' },
      baseSpecies: 'Vulpix',
      baseStats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['ninetalesalola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 37,
      species: 'vulpix-alola',
      types: ['Ice'],
      weightkg: 9.9,
      aliases: ['alolanvulpix', 'vulpixa']
    }
  ],
  [
    'ninetales',
    {
      abilities: { first: 'Flash Fire', hidden: 'Drought' },
      baseStats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 1 },
      evoLevel: 'use Fire Stone',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 38,
      otherFormes: ['ninetalesalola'],
      prevo: 'vulpix',
      species: 'ninetales',
      types: ['Fire'],
      weightkg: 19.9,
      aliases: ['kyuukon']
    }
  ],
  [
    'ninetalesalola',
    {
      abilities: { first: 'Snow Cloak', hidden: 'Snow Warning' },
      baseSpecies: 'Ninetales',
      baseStats: { hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 1 },
      evoLevel: 'use Ice Stone',
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 38,
      prevo: 'vulpixalola',
      species: 'ninetales-alola',
      types: ['Ice', 'Fairy'],
      weightkg: 19.9,
      aliases: ['alolanninetales', 'ninetalesa']
    }
  ],
  [
    'jigglypuff',
    {
      abilities: {
        first: 'Cute Charm',
        second: 'Competitive',
        hidden: 'Friend Guard'
      },
      baseStats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
      catchRate: {
        base: 170,
        percentageWithOrdinaryPokeballAtFullHealth: '32.4%'
      },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level up with happiness of at least 220',
      evos: ['wigglytuff'],
      genderRatio: { male: '25%', female: '75%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 39,
      prevo: 'igglybuff',
      species: 'jigglypuff',
      types: ['Normal', 'Fairy'],
      weightkg: 5.5,
      aliases: ['purin']
    }
  ],
  [
    'wigglytuff',
    {
      abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Frisk' },
      baseStats: { hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Moon Stone',
      genderRatio: { male: '25%', female: '75%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 2570,
      num: 40,
      prevo: 'jigglypuff',
      species: 'wigglytuff',
      types: ['Normal', 'Fairy'],
      weightkg: 12,
      aliases: ['pukurin']
    }
  ],
  [
    'zubat',
    {
      abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
      baseStats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Purple',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['golbat'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 41,
      species: 'zubat',
      types: ['Poison', 'Flying'],
      weightkg: 7.5,
      aliases: ['zubatto']
    }
  ],
  [
    'golbat',
    {
      abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
      baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Purple',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 22,
      evos: ['crobat'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 3855,
      num: 42,
      prevo: 'zubat',
      species: 'golbat',
      types: ['Poison', 'Flying'],
      weightkg: 55,
      aliases: ['gorubatto']
    }
  ],
  [
    'oddish',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Run Away' },
      baseStats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['gloom'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 43,
      species: 'oddish',
      types: ['Grass', 'Poison'],
      weightkg: 5.4,
      aliases: ['nazonokusa']
    }
  ],
  [
    'gloom',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Stench' },
      baseStats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 21,
      evos: ['vileplume', 'bellossom'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 44,
      prevo: 'oddish',
      species: 'gloom',
      types: ['Grass', 'Poison'],
      weightkg: 8.6,
      aliases: ['kusaihana']
    }
  ],
  [
    'vileplume',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Effect Spore' },
      baseStats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 'use Leaf Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 45,
      prevo: 'gloom',
      species: 'vileplume',
      types: ['Grass', 'Poison'],
      weightkg: 18.6,
      aliases: ['rafureshia']
    }
  ],
  [
    'paras',
    {
      abilities: { first: 'Effect Spore', second: 'Dry Skin', hidden: 'Damp' },
      baseStats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Bug', 'Grass'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['parasect'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 46,
      species: 'paras',
      types: ['Bug', 'Grass'],
      weightkg: 5.4,
      aliases: ['parasu']
    }
  ],
  [
    'parasect',
    {
      abilities: { first: 'Effect Spore', second: 'Dry Skin', hidden: 'Damp' },
      baseStats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Red',
      eggGroups: ['Bug', 'Grass'],
      evYields: { hp: 0, atk: 2, def: 1, spa: 0, spd: 0, spe: 0 },
      evoLevel: 24,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 47,
      prevo: 'paras',
      species: 'parasect',
      types: ['Bug', 'Grass'],
      weightkg: 29.5,
      aliases: ['parasekuto']
    }
  ],
  [
    'venonat',
    {
      abilities: {
        first: 'Compound Eyes',
        second: 'Tinted Lens',
        hidden: 'Run Away'
      },
      baseStats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Purple',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['venomoth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 48,
      species: 'venonat',
      types: ['Bug', 'Poison'],
      weightkg: 30,
      aliases: ['konpan']
    }
  ],
  [
    'venomoth',
    {
      abilities: {
        first: 'Shield Dust',
        second: 'Tinted Lens',
        hidden: 'Wonder Skin'
      },
      baseStats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },
      evoLevel: 31,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 49,
      prevo: 'venonat',
      species: 'venomoth',
      types: ['Bug', 'Poison'],
      weightkg: 12.5,
      aliases: ['morufon']
    }
  ],
  [
    'diglett',
    {
      abilities: {
        first: 'Sand Veil',
        second: 'Arena Trap',
        hidden: 'Sand Force'
      },
      baseStats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['dugtrio'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 50,
      otherFormes: ['diglettalola'],
      species: 'diglett',
      types: ['Ground'],
      weightkg: 0.8,
      aliases: ['diguda']
    }
  ],
  [
    'diglettalola',
    {
      abilities: {
        first: 'Sand Veil',
        second: 'Tangling Hair',
        hidden: 'Sand Force'
      },
      baseSpecies: 'Diglett',
      baseStats: { hp: 10, atk: 55, def: 30, spa: 35, spd: 45, spe: 90 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['dugtrioalola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 50,
      species: 'diglett-alola',
      types: ['Ground', 'Steel'],
      weightkg: 1,
      aliases: ['alolandiglett', 'digletta']
    }
  ],
  [
    'dugtrio',
    {
      abilities: {
        first: 'Sand Veil',
        second: 'Arena Trap',
        hidden: 'Sand Force'
      },
      baseStats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 51,
      otherFormes: ['dugtrioalola'],
      prevo: 'diglett',
      species: 'dugtrio',
      types: ['Ground'],
      weightkg: 33.3,
      aliases: ['dagutorio', 'dug', 'duggy']
    }
  ],
  [
    'dugtrioalola',
    {
      abilities: {
        first: 'Sand Veil',
        second: 'Tangling Hair',
        hidden: 'Sand Force'
      },
      baseSpecies: 'Dugtrio',
      baseStats: { hp: 35, atk: 100, def: 60, spa: 50, spd: 70, spe: 110 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 26,
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 51,
      prevo: 'diglettalola',
      species: 'dugtrio-alola',
      types: ['Ground', 'Steel'],
      weightkg: 66.6,
      aliases: ['alolandugtrio', 'dugtrioa']
    }
  ],
  [
    'meowth',
    {
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
      baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['persian'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 52,
      otherFormes: ['meowthalola', 'meowthgmax', 'meowthgalar'],
      species: 'meowth',
      types: ['Normal'],
      weightkg: 4.2,
      aliases: ['nyaasu']
    }
  ],
  [
    'meowthalola',
    {
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Rattled' },
      baseSpecies: 'Meowth',
      baseStats: { hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['persianalola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 52,
      species: 'meowth-alola',
      types: ['Dark'],
      weightkg: 4.2,
      aliases: ['alolanmeowth', 'meowtha']
    }
  ],
  [
    'meowthgalar',
    {
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Rattled' },
      baseSpecies: 'Meowth',
      baseStats: { hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['perrserker'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 52,
      species: 'meowth-galar',
      types: ['Dark'],
      weightkg: 4.2
    }
  ],
  [
    'meowthgmax',
    {
      abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
      baseSpecies: 'Meowth',
      baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 33,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 52,
      species: 'meowth-gmax',
      types: ['Normal'],
      weightkg: 12.6,
      aliases: ['gigantamax meowth']
    }
  ],
  [
    'persian',
    {
      abilities: { first: 'Limber', second: 'Technician', hidden: 'Unnerve' },
      baseStats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 53,
      otherFormes: ['persianalola'],
      prevo: 'meowth',
      species: 'persian',
      types: ['Normal'],
      weightkg: 32,
      aliases: ['perushian']
    }
  ],
  [
    'persianalola',
    {
      abilities: { first: 'Fur Coat', second: 'Technician', hidden: 'Rattled' },
      baseSpecies: 'Persian',
      baseStats: { hp: 65, atk: 60, def: 60, spa: 75, spd: 65, spe: 115 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 2,
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 53,
      prevo: 'meowthalola',
      species: 'persian-alola',
      types: ['Dark'],
      weightkg: 33,
      aliases: ['alolanpersian', 'persiana']
    }
  ],
  [
    'psyduck',
    {
      abilities: { first: 'Damp', second: 'Cloud Nine', hidden: 'Swift Swim' },
      baseStats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['golduck'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 54,
      species: 'psyduck',
      types: ['Water'],
      weightkg: 19.6,
      aliases: ['kodakku']
    }
  ],
  [
    'golduck',
    {
      abilities: { first: 'Damp', second: 'Cloud Nine', hidden: 'Swift Swim' },
      baseStats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 33,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 55,
      prevo: 'psyduck',
      species: 'golduck',
      types: ['Water'],
      weightkg: 76.6,
      aliases: ['gorudakku']
    }
  ],
  [
    'mankey',
    {
      abilities: {
        first: 'Vital Spirit',
        second: 'Anger Point',
        hidden: 'Defiant'
      },
      baseStats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['primeape'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 56,
      species: 'mankey',
      types: ['Fighting'],
      weightkg: 28,
      aliases: ['mankii']
    }
  ],
  [
    'primeape',
    {
      abilities: {
        first: 'Vital Spirit',
        second: 'Anger Point',
        hidden: 'Defiant'
      },
      baseStats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 57,
      prevo: 'mankey',
      species: 'primeape',
      types: ['Fighting'],
      weightkg: 32,
      aliases: ['okorizaru']
    }
  ],
  [
    'growlithe',
    {
      abilities: {
        first: 'Intimidate',
        second: 'Flash Fire',
        hidden: 'Justified'
      },
      baseStats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['arcanine'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 58,
      species: 'growlithe',
      types: ['Fire'],
      weightkg: 19,
      aliases: ['gaadi']
    }
  ],
  [
    'arcanine',
    {
      abilities: {
        first: 'Intimidate',
        second: 'Flash Fire',
        hidden: 'Justified'
      },
      baseStats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Fire Stone',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 59,
      prevo: 'growlithe',
      species: 'arcanine',
      types: ['Fire'],
      weightkg: 155,
      aliases: ['uindi']
    }
  ],
  [
    'poliwag',
    {
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
      baseStats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['poliwhirl'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 60,
      species: 'poliwag',
      types: ['Water'],
      weightkg: 12.4,
      aliases: ['nyoromo']
    }
  ],
  [
    'poliwhirl',
    {
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
      baseStats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 25,
      evos: ['poliwrath', 'politoed'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 61,
      prevo: 'poliwag',
      species: 'poliwhirl',
      types: ['Water'],
      weightkg: 20,
      aliases: ['nyorozo']
    }
  ],
  [
    'poliwrath',
    {
      abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
      baseStats: { hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 62,
      prevo: 'poliwhirl',
      species: 'poliwrath',
      types: ['Water', 'Fighting'],
      weightkg: 54,
      aliases: ['nyorobon']
    }
  ],
  [
    'abra',
    {
      abilities: {
        first: 'Synchronize',
        second: 'Inner Focus',
        hidden: 'Magic Guard'
      },
      baseStats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 },
      catchRate: {
        base: 200,
        percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
      },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['kadabra'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 63,
      species: 'abra',
      types: ['Psychic'],
      weightkg: 19.5,
      aliases: ['keeshy']
    }
  ],
  [
    'kadabra',
    {
      abilities: {
        first: 'Synchronize',
        second: 'Inner Focus',
        hidden: 'Magic Guard'
      },
      baseStats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 },
      catchRate: {
        base: 100,
        percentageWithOrdinaryPokeballAtFullHealth: '21.7%'
      },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 16,
      evos: ['alakazam'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 64,
      prevo: 'abra',
      species: 'kadabra',
      types: ['Psychic'],
      weightkg: 56.5,
      aliases: ['yungeraa']
    }
  ],
  [
    'alakazam',
    {
      abilities: {
        first: 'Synchronize',
        second: 'Inner Focus',
        hidden: 'Magic Guard'
      },
      baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 65,
      otherFormes: ['alakazammega'],
      prevo: 'kadabra',
      species: 'alakazam',
      types: ['Psychic'],
      weightkg: 48,
      aliases: ['fuudin', 'zam']
    }
  ],
  [
    'alakazammega',
    {
      abilities: { first: 'Trace' },
      baseSpecies: 'Alakazam',
      baseStats: { hp: 55, atk: 50, def: 65, spa: 175, spd: 105, spe: 150 },
      catchRate: { base: 50, percentageWithOrdinaryPokeballAtFullHealth: '12.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 65,
      species: 'alakazam-mmga',
      types: ['Psychic'],
      weightkg: 48,
      aliases: ['megazam']
    }
  ],
  [
    'machop',
    {
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      baseStats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
      catchRate: {
        base: 180,
        percentageWithOrdinaryPokeballAtFullHealth: '33.8%'
      },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['machoke'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 66,
      species: 'machop',
      types: ['Fighting'],
      weightkg: 19.5,
      aliases: ['wanrikii']
    }
  ],
  [
    'machoke',
    {
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      baseStats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      evos: ['machamp'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 67,
      prevo: 'machop',
      species: 'machoke',
      types: ['Fighting'],
      weightkg: 70.5,
      aliases: ['goorikii']
    }
  ],
  [
    'machamp',
    {
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 68,
      otherFormes: ['machampgmax'],
      prevo: 'machoke',
      species: 'machamp',
      types: ['Fighting'],
      weightkg: 130,
      aliases: ['kairikii']
    }
  ],
  [
    'machampgmax',
    {
      abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
      baseSpecies: 'Machamp',
      baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '75%', female: '25%' },
      heightm: 4.8,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 68,
      species: 'machamp-gmax',
      types: ['Fighting'],
      weightkg: 390,
      aliases: ['gigantamax machamp']
    }
  ],
  [
    'bellsprout',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
      baseStats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['weepinbell'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 69,
      species: 'bellsprout',
      types: ['Grass', 'Poison'],
      weightkg: 4,
      aliases: ['madatsubomi']
    }
  ],
  [
    'weepinbell',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
      baseStats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 21,
      evos: ['victreebel'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 70,
      prevo: 'bellsprout',
      species: 'weepinbell',
      types: ['Grass', 'Poison'],
      weightkg: 6.4,
      aliases: ['utsudon']
    }
  ],
  [
    'victreebel',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
      baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Leaf Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 71,
      prevo: 'weepinbell',
      species: 'victreebel',
      types: ['Grass', 'Poison'],
      weightkg: 15.5,
      aliases: ['utsubotto']
    }
  ],
  [
    'tentacool',
    {
      abilities: {
        first: 'Clear Body',
        second: 'Liquid Ooze',
        hidden: 'Rain Dish'
      },
      baseStats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Blue',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['tentacruel'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 72,
      species: 'tentacool',
      types: ['Water', 'Poison'],
      weightkg: 45.5,
      aliases: ['menokurage']
    }
  ],
  [
    'tentacruel',
    {
      abilities: {
        first: 'Clear Body',
        second: 'Liquid Ooze',
        hidden: 'Rain Dish'
      },
      baseStats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Blue',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 73,
      prevo: 'tentacool',
      species: 'tentacruel',
      types: ['Water', 'Poison'],
      weightkg: 55,
      aliases: ['cruel', 'dokukurage']
    }
  ],
  [
    'geodude',
    {
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
      baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['graveler'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 74,
      otherFormes: ['geodudealola'],
      species: 'geodude',
      types: ['Rock', 'Ground'],
      weightkg: 20,
      aliases: ['ishitsubute']
    }
  ],
  [
    'geodudealola',
    {
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
      baseSpecies: 'Geodude',
      baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['graveleralola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 74,
      species: 'geodude-alola',
      types: ['Rock', 'Electric'],
      weightkg: 20.3,
      aliases: ['alolangeodude', 'geodudea']
    }
  ],
  [
    'graveler',
    {
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
      baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['golem'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 75,
      otherFormes: ['graveleralola'],
      prevo: 'geodude',
      species: 'graveler',
      types: ['Rock', 'Ground'],
      weightkg: 105,
      aliases: ['goroon']
    }
  ],
  [
    'graveleralola',
    {
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
      baseSpecies: 'Graveler',
      baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['golemalola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 75,
      prevo: 'geodudealola',
      species: 'graveler-alola',
      types: ['Rock', 'Electric'],
      weightkg: 110,
      aliases: ['alolangraveler', 'gravelera']
    }
  ],
  [
    'golem',
    {
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
      baseStats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 76,
      otherFormes: ['golemalola'],
      prevo: 'graveler',
      species: 'golem',
      types: ['Rock', 'Ground'],
      weightkg: 300,
      aliases: ['goroonya']
    }
  ],
  [
    'golemalola',
    {
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
      baseSpecies: 'Golem',
      baseStats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 3, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 3855,
      num: 76,
      prevo: 'graveleralola',
      species: 'golem-alola',
      types: ['Rock', 'Electric'],
      weightkg: 316,
      aliases: ['alolangolem', 'golema']
    }
  ],
  [
    'ponyta',
    {
      abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
      baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['rapidash'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 77,
      otherFormes: ['ponytagalar'],
      species: 'ponyta',
      types: ['Fire'],
      weightkg: 30,
      aliases: ['poniita']
    }
  ],
  [
    'ponytagalar',
    {
      abilities: {
        first: 'Run Away',
        second: 'Pastel Veil',
        hidden: 'Anticipation'
      },
      baseSpecies: 'Ponyta',
      baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['rapidashgalar'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 77,
      species: 'ponyta-galar',
      types: ['Psychic'],
      weightkg: 24
    }
  ],
  [
    'rapidash',
    {
      abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
      baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 40,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 78,
      otherFormes: ['rapidashgalar'],
      prevo: 'ponyta',
      species: 'rapidash',
      types: ['Fire'],
      weightkg: 95,
      aliases: ['gyaroppu']
    }
  ],
  [
    'rapidashgalar',
    {
      abilities: {
        first: 'Run Away',
        second: 'Pastel Veil',
        hidden: 'Anticipation'
      },
      baseSpecies: 'Rapidash',
      baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'White',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 40,
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 78,
      prevo: 'ponytagalar',
      species: 'rapidash-galar',
      types: ['Psychic', 'Fairy'],
      weightkg: 95
    }
  ],
  [
    'slowpoke',
    {
      abilities: {
        first: 'Oblivious',
        second: 'Own Tempo',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['slowbro', 'slowking'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 79,
      species: 'slowpoke',
      types: ['Water', 'Psychic'],
      weightkg: 36,
      aliases: ['yadon']
    }
  ],
  [
    'slowpokegalar',
    {
      abilities: { first: 'Gluttony', second: 'Own Tempo', hidden: 'Regenerator' },
      baseSpecies: 'Slowpoke',
      baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['slowbrogalar', 'slowkinggalar'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 79,
      species: 'slowpoke-galar',
      types: ['Psychic'],
      weightkg: 36
    }
  ],
  [
    'slowbro',
    {
      abilities: {
        first: 'Oblivious',
        second: 'Own Tempo',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 37,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 80,
      otherFormes: ['slowbromega'],
      prevo: 'slowpoke',
      species: 'slowbro',
      types: ['Water', 'Psychic'],
      weightkg: 78.5,
      aliases: ['yadoran']
    }
  ],
  [
    'slowbrogalar',
    {
      abilities: {
        first: 'Quick Draw',
        second: 'Own Tempo',
        hidden: 'Regenerator'
      },
      baseSpecies: 'Slowbro',
      baseStats: { hp: 95, atk: 100, def: 95, spa: 100, spd: 70, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Galarica Cuff',
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 80,
      prevo: 'slowpokegalar',
      species: 'slowbro-galar',
      types: ['Poison', 'Psychic'],
      weightkg: 70.5
    }
  ],
  [
    'slowbromega',
    {
      abilities: { first: 'Shell Armor' },
      baseSpecies: 'Slowbro',
      baseStats: { hp: 95, atk: 75, def: 180, spa: 130, spd: 80, spe: 30 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Pink',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 80,
      species: 'slowbro-mega',
      types: ['Water', 'Psychic'],
      weightkg: 120,
      aliases: ['megabro']
    }
  ],
  [
    'magnemite',
    {
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
      baseStats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['magneton'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 81,
      species: 'magnemite',
      types: ['Electric', 'Steel'],
      weightkg: 6,
      aliases: ['koiru']
    }
  ],
  [
    'magneton',
    {
      abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
      baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 30,
      evos: ['magnezone'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 82,
      prevo: 'magnemite',
      species: 'magneton',
      types: ['Electric', 'Steel'],
      weightkg: 60,
      aliases: ['reakoiru']
    }
  ],
  [
    'farfetchd',
    {
      abilities: { first: 'Keen Eye', second: 'Inner Focus', hidden: 'Defiant' },
      baseStats: { hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 83,
      otherFormes: ['farfetchdgalar'],
      specialBulbapediaUrl: "Farfetch'd",
      species: "farfetch'd",
      types: ['Normal', 'Flying'],
      weightkg: 15,
      aliases: ['kamonegi']
    }
  ],
  [
    'farfetchdgalar',
    {
      abilities: { first: 'Steadfast', second: 'Steadfast', hidden: 'Scrappy' },
      baseSpecies: "Farfetch'd",
      baseStats: { hp: 52, atk: 95, def: 55, spa: 58, spd: 62, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Flying', 'Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['sirfetchd'],
      forme: 'Galar',
      formeLetter: 'G',
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 83,
      specialBulbapediaUrl: "Farfetch'd",
      species: "farfetch'd-galar",
      types: ['Fighting'],
      weightkg: 42
    }
  ],
  [
    'doduo',
    {
      abilities: {
        first: 'Run Away',
        second: 'Early Bird',
        hidden: 'Tangled Feet'
      },
      baseStats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['dodrio'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 84,
      species: 'doduo',
      types: ['Normal', 'Flying'],
      weightkg: 39.2,
      aliases: ['doodoo']
    }
  ],
  [
    'dodrio',
    {
      abilities: {
        first: 'Run Away',
        second: 'Early Bird',
        hidden: 'Tangled Feet'
      },
      baseStats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 31,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 85,
      prevo: 'doduo',
      species: 'dodrio',
      types: ['Normal', 'Flying'],
      weightkg: 85.2,
      aliases: ['doodorio']
    }
  ],
  [
    'seel',
    {
      abilities: { first: 'Thick Fat', second: 'Hydration', hidden: 'Ice Body' },
      baseStats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'White',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['dewgong'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 86,
      species: 'seel',
      types: ['Water'],
      weightkg: 90,
      aliases: ['pauwau']
    }
  ],
  [
    'dewgong',
    {
      abilities: { first: 'Thick Fat', second: 'Hydration', hidden: 'Ice Body' },
      baseStats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'White',
      eggGroups: ['Water 1', 'Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 34,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 87,
      prevo: 'seel',
      species: 'dewgong',
      types: ['Water', 'Ice'],
      weightkg: 120,
      aliases: ['jugon']
    }
  ],
  [
    'grimer',
    {
      abilities: {
        first: 'Stench',
        second: 'Sticky Hold',
        hidden: 'Poison Touch'
      },
      baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['muk'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 88,
      otherFormes: ['grimeralola'],
      species: 'grimer',
      types: ['Poison'],
      weightkg: 30,
      aliases: ['betobetaa']
    }
  ],
  [
    'grimeralola',
    {
      abilities: {
        first: 'Poison Touch',
        second: 'Gluttony',
        hidden: 'Power of Alchemy'
      },
      baseSpecies: 'Grimer',
      baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['mukalola'],
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 88,
      species: 'grimer-alola',
      types: ['Poison', 'Dark'],
      weightkg: 42,
      aliases: ['alolangrimer', 'grimera']
    }
  ],
  [
    'muk',
    {
      abilities: {
        first: 'Stench',
        second: 'Sticky Hold',
        hidden: 'Poison Touch'
      },
      baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 1, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 89,
      otherFormes: ['mukalola'],
      prevo: 'grimer',
      species: 'muk',
      types: ['Poison'],
      weightkg: 30,
      aliases: ['betobeton']
    }
  ],
  [
    'mukalola',
    {
      abilities: {
        first: 'Poison Touch',
        second: 'Gluttony',
        hidden: 'Power of Alchemy'
      },
      baseSpecies: 'Muk',
      baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Green',
      eggGroups: ['Amorphous'],
      evYields: { hp: 1, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 38,
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 89,
      prevo: 'grimeralola',
      species: 'muk-alola',
      types: ['Poison', 'Dark'],
      weightkg: 52,
      aliases: ['alolanmuk', 'muka']
    }
  ],
  [
    'shellder',
    {
      abilities: {
        first: 'Shell Armor',
        second: 'Skill Link',
        hidden: 'Overcoat'
      },
      baseStats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Purple',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['cloyster'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 90,
      species: 'shellder',
      types: ['Water'],
      weightkg: 4,
      aliases: ['sherudaa']
    }
  ],
  [
    'cloyster',
    {
      abilities: {
        first: 'Shell Armor',
        second: 'Skill Link',
        hidden: 'Overcoat'
      },
      baseStats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 91,
      prevo: 'shellder',
      species: 'cloyster',
      types: ['Water', 'Ice'],
      weightkg: 132.5,
      aliases: ['parushen']
    }
  ],
  [
    'gastly',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['haunter'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 92,
      species: 'gastly',
      types: ['Ghost', 'Poison'],
      weightkg: 0.1,
      aliases: ['goosu']
    }
  ],
  [
    'haunter',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 25,
      evos: ['gengar'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 93,
      prevo: 'gastly',
      species: 'haunter',
      types: ['Ghost', 'Poison'],
      weightkg: 0.1,
      aliases: ['goosuto']
    }
  ],
  [
    'gengar',
    {
      abilities: { first: 'Cursed Body' },
      baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      evoLevel: 'Trade',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 94,
      otherFormes: ['gengarmega', 'gengargmax'],
      prevo: 'haunter',
      species: 'gengar',
      types: ['Ghost', 'Poison'],
      weightkg: 40.5,
      aliases: ['gar', 'gengaa', 'morfentshusbando']
    }
  ],
  [
    'gengarmega',
    {
      abilities: { first: 'Shadow Tag' },
      baseSpecies: 'Gengar',
      baseStats: { hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 94,
      species: 'gengar-mega',
      types: ['Ghost', 'Poison'],
      weightkg: 40.5,
      aliases: ['mgar']
    }
  ],
  [
    'gengargmax',
    {
      abilities: { first: 'Cursed Body' },
      baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 4.2,
      isEggObtainable: true,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140,
      num: 94,
      species: 'gengar-gmax',
      types: ['Ghost', 'Poison'],
      weightkg: 121.5,
      aliases: ['gigantamax gengar']
    }
  ],
  [
    'onix',
    {
      abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Weak Armor' },
      baseStats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Gray',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['steelix'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 8.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 95,
      species: 'onix',
      types: ['Rock', 'Ground'],
      weightkg: 210,
      aliases: ['iwaaku']
    }
  ],
  [
    'drowzee',
    {
      abilities: { first: 'Insomnia', second: 'Forewarn', hidden: 'Inner Focus' },
      baseStats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Yellow',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['hypno'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 96,
      species: 'drowzee',
      types: ['Psychic'],
      weightkg: 32.4,
      aliases: ['suriipu']
    }
  ],
  [
    'hypno',
    {
      abilities: { first: 'Insomnia', second: 'Forewarn', hidden: 'Inner Focus' },
      baseStats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Yellow',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 26,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 97,
      prevo: 'drowzee',
      species: 'hypno',
      types: ['Psychic'],
      weightkg: 75.6,
      aliases: ['suriipaa']
    }
  ],
  [
    'krabby',
    {
      abilities: {
        first: 'Hyper Cutter',
        second: 'Shell Armor',
        hidden: 'Sheer Force'
      },
      baseStats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['kingler'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 98,
      species: 'krabby',
      types: ['Water'],
      weightkg: 6.5,
      aliases: ['kurabu']
    }
  ],
  [
    'kingler',
    {
      abilities: {
        first: 'Hyper Cutter',
        second: 'Shell Armor',
        hidden: 'Sheer Force'
      },
      baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 99,
      otherFormes: ['kinglergmax'],
      prevo: 'krabby',
      species: 'kingler',
      types: ['Water'],
      weightkg: 60,
      aliases: ['kinguraa']
    }
  ],
  [
    'kinglergmax',
    {
      abilities: {
        first: 'Hyper Cutter',
        second: 'Shell Armor',
        hidden: 'Sheer Force'
      },
      baseSpecies: 'kingler',
      baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 99,
      species: 'kingler-gmax',
      types: ['Water'],
      weightkg: 180,
      aliases: ['gigantamax kingler']
    }
  ],
  [
    'voltorb',
    {
      abilities: { first: 'Soundproof', second: 'Static', hidden: 'Aftermath' },
      baseStats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Red',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['electrode'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 100,
      species: 'voltorb',
      types: ['Electric'],
      weightkg: 10.4,
      aliases: ['biriridama']
    }
  ],
  [
    'electrode',
    {
      abilities: { first: 'Soundproof', second: 'Static', hidden: 'Aftermath' },
      baseStats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 30,
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 101,
      prevo: 'voltorb',
      species: 'electrode',
      types: ['Electric'],
      weightkg: 66.6,
      aliases: ['marumain']
    }
  ],
  [
    'exeggcute',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Harvest' },
      baseStats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 },
      catchRate: { base: 90, percentageWithOrdinaryPokeballAtFullHealth: '20.1%' },
      color: 'Pink',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['exeggutor', 'exeggutoralola'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 102,
      species: 'exeggcute',
      types: ['Grass', 'Psychic'],
      weightkg: 2.5,
      aliases: ['tamatama']
    }
  ],
  [
    'exeggutor',
    {
      abilities: { first: 'Chlorophyll', hidden: 'Harvest' },
      baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Leaf Stone',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 103,
      otherFormes: ['exeggutoralola'],
      prevo: 'exeggcute',
      species: 'exeggutor',
      types: ['Grass', 'Psychic'],
      weightkg: 120,
      aliases: ['nasshii']
    }
  ],
  [
    'exeggutoralola',
    {
      abilities: { first: 'Frisk', hidden: 'Harvest' },
      baseSpecies: 'Exeggutor',
      baseStats: { hp: 95, atk: 105, def: 85, spa: 125, spd: 75, spe: 45 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 'use Leaf Stone',
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 10.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 103,
      prevo: 'exeggcute',
      species: 'exeggutor-alola',
      types: ['Grass', 'Dragon'],
      weightkg: 415.6,
      aliases: ['alolanexeggutor', 'exeggutora', 'neckboy']
    }
  ],
  [
    'cubone',
    {
      abilities: {
        first: 'Rock Head',
        second: 'Lightning Rod',
        hidden: 'Battle Armor'
      },
      baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Brown',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['marowak', 'marowakalola'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 104,
      species: 'cubone',
      types: ['Ground'],
      weightkg: 6.5,
      aliases: ['karakara']
    }
  ],
  [
    'marowak',
    {
      abilities: {
        first: 'Rock Head',
        second: 'Lightning Rod',
        hidden: 'Battle Armor'
      },
      baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Brown',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 105,
      otherFormes: ['marowakalola', 'marowakalolatotem'],
      prevo: 'cubone',
      species: 'marowak',
      types: ['Ground'],
      weightkg: 45,
      aliases: ['garagara']
    }
  ],
  [
    'marowakalola',
    {
      abilities: {
        first: 'Cursed Body',
        second: 'Lightning Rod',
        hidden: 'Rock Head'
      },
      baseSpecies: 'Marowak',
      baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 28,
      forme: 'Alola',
      formeLetter: 'A',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 105,
      prevo: 'cubone',
      species: 'marowak-alola',
      types: ['Fire', 'Ghost'],
      weightkg: 34,
      aliases: ['alolanmarowak', 'marowaka']
    }
  ],
  [
    'marowakalolatotem',
    {
      abilities: { first: 'Rock Head' },
      baseSpecies: 'Marowak',
      baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Purple',
      eggGroups: ['Monster'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      forme: 'Alola-Totem',
      formeLetter: 'T',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 105,
      species: 'marowak-alola-totem',
      types: ['Fire', 'Ghost'],
      weightkg: 98,
      aliases: ['marowakt', 'totemalolanmarowak', 'totemmarowak', 'totemmarowaka', 'totemmarowakalola']
    }
  ],
  [
    'hitmonlee',
    {
      abilities: { first: 'Limber', second: 'Reckless', hidden: 'Unburden' },
      baseStats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level 20 with higher Attack',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 106,
      prevo: 'tyrogue',
      species: 'hitmonlee',
      types: ['Fighting'],
      weightkg: 49.8,
      aliases: ['sawamuraa']
    }
  ],
  [
    'hitmonchan',
    {
      abilities: { first: 'Keen Eye', second: 'Iron Fist', hidden: 'Inner Focus' },
      baseStats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Level 20 with higher defense',
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 107,
      prevo: 'tyrogue',
      species: 'hitmonchan',
      types: ['Fighting'],
      weightkg: 50.2,
      aliases: ['ebiwaraa']
    }
  ],
  [
    'lickitung',
    {
      abilities: { first: 'Own Tempo', second: 'Oblivious', hidden: 'Cloud Nine' },
      baseStats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Monster'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['lickilicky'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 108,
      species: 'lickitung',
      types: ['Normal'],
      weightkg: 65.5,
      aliases: ['beroringa']
    }
  ],
  [
    'koffing',
    {
      abilities: { first: 'Levitate' },
      baseStats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 },
      catchRate: {
        base: 190,
        percentageWithOrdinaryPokeballAtFullHealth: '35.2%'
      },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['weezing'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 109,
      species: 'koffing',
      types: ['Poison'],
      weightkg: 1,
      aliases: ['dogaasu', 'dogars', 'smogon']
    }
  ],
  [
    'weezing',
    {
      abilities: {
        first: 'Levitate',
        second: 'Neutralizing Gas',
        hidden: 'Stench'
      },
      baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 110,
      prevo: 'koffing',
      species: 'weezing',
      types: ['Poison'],
      weightkg: 9.5,
      aliases: ['matadogasu']
    }
  ],
  [
    'weezinggalar',
    {
      abilities: {
        first: 'Levitate',
        second: 'Neutralizing Gas',
        hidden: 'Misty Surge'
      },
      baseSpecies: 'Weezing',
      baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Amorphous'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 35,
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 110,
      prevo: 'koffing',
      species: 'weezing-galar',
      types: ['Poison'],
      weightkg: 16
    }
  ],
  [
    'rhyhorn',
    {
      abilities: {
        first: 'Lightning Rod',
        second: 'Rock Head',
        hidden: 'Reckless'
      },
      baseStats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
      catchRate: {
        base: 120,
        percentageWithOrdinaryPokeballAtFullHealth: '24.9%'
      },
      color: 'Gray',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['rhydon'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 111,
      species: 'rhyhorn',
      types: ['Ground', 'Rock'],
      weightkg: 115,
      aliases: ['saihoon']
    }
  ],
  [
    'rhydon',
    {
      abilities: {
        first: 'Lightning Rod',
        second: 'Rock Head',
        hidden: 'Reckless'
      },
      baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Gray',
      eggGroups: ['Monster', 'Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 42,
      evos: ['rhyperior'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 112,
      prevo: 'rhyhorn',
      species: 'rhydon',
      types: ['Ground', 'Rock'],
      weightkg: 120,
      aliases: ['saidon']
    }
  ],
  [
    'chansey',
    {
      abilities: {
        first: 'Natural Cure',
        second: 'Serene Grace',
        hidden: 'Healer'
      },
      baseStats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
      catchRate: { base: 30, percentageWithOrdinaryPokeballAtFullHealth: '8.8%' },
      color: 'Pink',
      eggGroups: ['Fairy'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Hold Oval Stone, Level Up',
      evos: ['blissey'],
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Fast',
      minimumHatchTime: 10280,
      num: 113,
      prevo: 'happiny',
      species: 'chansey',
      types: ['Normal'],
      weightkg: 34.6,
      aliases: ['rakkii']
    }
  ],
  [
    'tangela',
    {
      abilities: {
        first: 'Chlorophyll',
        second: 'Leaf Guard',
        hidden: 'Regenerator'
      },
      baseStats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Grass'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['tangrowth'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 114,
      species: 'tangela',
      types: ['Grass'],
      weightkg: 35,
      aliases: ['monjara']
    }
  ],
  [
    'kangaskhan',
    {
      abilities: { first: 'Early Bird', second: 'Scrappy', hidden: 'Inner Focus' },
      baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Monster'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '100%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 115,
      otherFormes: ['kangaskhanmega'],
      species: 'kangaskhan',
      types: ['Normal'],
      weightkg: 80,
      aliases: ['garuura', 'kanga']
    }
  ],
  [
    'kangaskhanmega',
    {
      abilities: { first: 'Parental Bond' },
      baseSpecies: 'Kangaskhan',
      baseStats: { hp: 105, atk: 125, def: 100, spa: 60, spd: 100, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Monster'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '100%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 115,
      species: 'kangaskhan-mega',
      types: ['Normal'],
      weightkg: 100,
      aliases: ['megakanga', 'megakhan']
    }
  ],
  [
    'horsea',
    {
      abilities: { first: 'Swift Swim', second: 'Sniper', hidden: 'Damp' },
      baseStats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Blue',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['seadra'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 116,
      species: 'horsea',
      types: ['Water'],
      weightkg: 8,
      aliases: ['tattsuu']
    }
  ],
  [
    'seadra',
    {
      abilities: { first: 'Poison Point', second: 'Sniper', hidden: 'Damp' },
      baseStats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 },
      catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 1, spd: 0, spe: 0 },
      evoLevel: 32,
      evos: ['kingdra'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.2,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 117,
      prevo: 'horsea',
      species: 'seadra',
      types: ['Water'],
      weightkg: 25,
      aliases: ['shiidora']
    }
  ],
  [
    'goldeen',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Water Veil',
        hidden: 'Lightning Rod'
      },
      baseStats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Red',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['seaking'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.6,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 118,
      species: 'goldeen',
      types: ['Water'],
      weightkg: 15,
      aliases: ['tosakinto']
    }
  ],
  [
    'seaking',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Water Veil',
        hidden: 'Lightning Rod'
      },
      baseStats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Red',
      eggGroups: ['Water 2'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 33,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 119,
      prevo: 'goldeen',
      species: 'seaking',
      types: ['Water'],
      weightkg: 39,
      aliases: ['azumaou']
    }
  ],
  [
    'staryu',
    {
      abilities: {
        first: 'Illuminate',
        second: 'Natural Cure',
        hidden: 'Analytic'
      },
      baseStats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 },
      catchRate: {
        base: 225,
        percentageWithOrdinaryPokeballAtFullHealth: '39.9%'
      },
      color: 'Brown',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['starmie'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 120,
      species: 'staryu',
      types: ['Water'],
      weightkg: 34.5,
      aliases: ['hitodeman']
    }
  ],
  [
    'starmie',
    {
      abilities: {
        first: 'Illuminate',
        second: 'Natural Cure',
        hidden: 'Analytic'
      },
      baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
      catchRate: { base: 60, percentageWithOrdinaryPokeballAtFullHealth: '14.8%' },
      color: 'Purple',
      eggGroups: ['Water 3'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 121,
      prevo: 'staryu',
      species: 'starmie',
      types: ['Water', 'Psychic'],
      weightkg: 80,
      aliases: ['sutaamii']
    }
  ],
  [
    'mrmime',
    {
      abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
      baseStats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evoLevel: 'Level up while knowing Mimic',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 122,
      prevo: 'mimejr',
      species: 'Mr. Mime',
      types: ['Psychic', 'Fairy'],
      weightkg: 54.5,
      aliases: ['bariyaado', 'mister mime', 'mr mime', 'mr. mime', 'mrmime']
    }
  ],
  [
    'mrmimegalar',
    {
      abilities: {
        first: 'Vital Spirit',
        second: 'Screen Cleaner',
        hidden: 'Ice Body'
      },
      baseSpecies: 'Mr. Mime',
      baseStats: { hp: 50, atk: 65, def: 65, spa: 90, spd: 90, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'White',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 0 },
      evos: ['mrrime'],
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 122,
      species: 'Mr. Mime-Galar',
      types: ['Ice', 'Psychic'],
      weightkg: 56.8,
      aliases: ['gmime', 'gmrmime']
    }
  ],
  [
    'scyther',
    {
      abilities: { first: 'Swarm', second: 'Technician', hidden: 'Steadfast' },
      baseStats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Green',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['scizor'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 123,
      species: 'scyther',
      types: ['Bug', 'Flying'],
      weightkg: 56,
      aliases: ['sutoraiku']
    }
  ],
  [
    'jynx',
    {
      abilities: { first: 'Oblivious', second: 'Forewarn', hidden: 'Dry Skin' },
      baseStats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 30,
      genderRatio: { male: '0%', female: '100%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 124,
      prevo: 'smoochum',
      species: 'jynx',
      types: ['Ice', 'Psychic'],
      weightkg: 40.6,
      aliases: ['ruujura']
    }
  ],
  [
    'electabuzz',
    {
      abilities: { first: 'Static', hidden: 'Vital Spirit' },
      baseStats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 30,
      evos: ['electivire'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 125,
      prevo: 'elekid',
      species: 'electabuzz',
      types: ['Electric'],
      weightkg: 30,
      aliases: ['erebuu']
    }
  ],
  [
    'magmar',
    {
      abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
      baseStats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Human-Like'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 2, spd: 0, spe: 0 },
      evoLevel: 30,
      evos: ['magmortar'],
      genderRatio: { male: '75%', female: '25%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 6425,
      num: 126,
      prevo: 'magby',
      species: 'magmar',
      types: ['Fire'],
      weightkg: 44.5,
      aliases: ['buubaa']
    }
  ],
  [
    'pinsir',
    {
      abilities: {
        first: 'Hyper Cutter',
        second: 'Mold Breaker',
        hidden: 'Moxie'
      },
      baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 127,
      otherFormes: ['pinsirmega'],
      species: 'pinsir',
      types: ['Bug'],
      weightkg: 55,
      aliases: ['kairosu']
    }
  ],
  [
    'pinsirmega',
    {
      abilities: { first: 'Aerilate' },
      baseSpecies: 'Pinsir',
      baseStats: { hp: 65, atk: 155, def: 120, spa: 65, spd: 90, spe: 105 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Bug'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.7,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 6425,
      num: 127,
      species: 'pinsir-mega',
      types: ['Bug', 'Flying'],
      weightkg: 59
    }
  ],
  [
    'tauros',
    {
      abilities: {
        first: 'Intimidate',
        second: 'Anger Point',
        hidden: 'Sheer Force'
      },
      baseStats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 1 },
      genderRatio: { male: '100%', female: '0%' },
      heightm: 1.4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 5140,
      num: 128,
      species: 'tauros',
      types: ['Normal'],
      weightkg: 88.4,
      aliases: ['bull', 'kentarosu']
    }
  ],
  [
    'magikarp',
    {
      abilities: { first: 'Swift Swim', hidden: 'Rattled' },
      baseStats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
      catchRate: {
        base: 255,
        percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
      },
      color: 'Red',
      eggGroups: ['Water 2', 'Dragon'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      evos: ['gyarados'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 1285,
      num: 129,
      species: 'magikarp',
      types: ['Water'],
      weightkg: 10,
      aliases: ['karp', 'koikingu']
    }
  ],
  [
    'gyarados',
    {
      abilities: { first: 'Intimidate', hidden: 'Moxie' },
      baseStats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 2', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 20,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 6.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 1285,
      num: 130,
      otherFormes: ['gyaradosmega'],
      prevo: 'magikarp',
      species: 'gyarados',
      types: ['Water', 'Flying'],
      weightkg: 235,
      aliases: ['gyara', 'gyaradosu']
    }
  ],
  [
    'gyaradosmega',
    {
      abilities: { first: 'Mold Breaker' },
      baseSpecies: 'Gyarados',
      baseStats: { hp: 95, atk: 155, def: 109, spa: 70, spd: 130, spe: 81 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 2', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 6.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 1285,
      num: 130,
      species: 'gyarados-mega',
      types: ['Water', 'Dark'],
      weightkg: 305
    }
  ],
  [
    'lapras',
    {
      abilities: {
        first: 'Water Absorb',
        second: 'Shell Armor',
        hidden: 'Hydration'
      },
      baseStats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 131,
      otherFormes: ['laprasgmax'],
      species: 'lapras',
      types: ['Water', 'Ice'],
      weightkg: 220,
      aliases: ['rapurasu']
    }
  ],
  [
    'laprasgmax',
    {
      abilities: {
        first: 'Water Absorb',
        second: 'Shell Armor',
        hidden: 'Hydration'
      },
      baseSpecies: 'Lapras',
      baseStats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Monster', 'Water 1'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '50%', female: '50%' },
      heightm: 7.5,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 131,
      species: 'lapras-gmax',
      types: ['Water', 'Ice'],
      weightkg: 660,
      aliases: ['gigantamax lapras']
    }
  ],
  [
    'ditto',
    {
      abilities: { first: 'Limber', hidden: 'Imposter' },
      baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
      catchRate: { base: 35, percentageWithOrdinaryPokeballAtFullHealth: '9.9%' },
      color: 'Purple',
      eggGroups: ['Ditto'],
      evYields: { hp: 1, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 132,
      species: 'ditto',
      types: ['Normal'],
      weightkg: 4,
      aliases: ['metamon']
    }
  ],
  [
    'eevee',
    {
      abilities: {
        first: 'Run Away',
        second: 'Adaptability',
        hidden: 'Anticipation'
      },
      baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      evos: ['vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 133,
      otherFormes: ['eeveestarter', 'eeveegmax'],
      species: 'eevee',
      types: ['Normal'],
      weightkg: 6.5,
      aliases: ['iibui']
    }
  ],
  [
    'eeveestarter',
    {
      abilities: {
        first: 'Run Away',
        second: 'Adaptability',
        hidden: 'Anticipation'
      },
      baseSpecies: 'Eevee',
      baseStats: { hp: 65, atk: 75, def: 70, spa: 65, spd: 85, spe: 75 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      forme: 'Starter',
      formeLetter: 'S',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 133,
      species: 'eevee-starter',
      types: ['Normal'],
      weightkg: 6.5
    }
  ],
  [
    'eeveegmax',
    {
      abilities: {
        first: 'Run Away',
        second: 'Adaptability',
        hidden: 'Anticipation'
      },
      baseSpecies: 'Eevee',
      baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 1, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 18,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 133,
      species: 'eevee-gmax',
      types: ['Normal'],
      weightkg: 19.5,
      aliases: ['gigantamax eevee']
    }
  ],
  [
    'vaporeon',
    {
      abilities: { first: 'Water Absorb', hidden: 'Hydration' },
      baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Field'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Water Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 134,
      prevo: 'eevee',
      species: 'vaporeon',
      types: ['Water'],
      weightkg: 29,
      aliases: ['shawaazu']
    }
  ],
  [
    'jolteon',
    {
      abilities: { first: 'Volt Absorb', hidden: 'Quick Feet' },
      baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Yellow',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      evoLevel: 'use Thunder Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 135,
      prevo: 'eevee',
      species: 'jolteon',
      types: ['Electric'],
      weightkg: 24.5,
      aliases: ['sandaasu']
    }
  ],
  [
    'flareon',
    {
      abilities: { first: 'Flash Fire', hidden: 'Guts' },
      baseStats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Red',
      eggGroups: ['Field'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'use Fire Stone',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.9,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 8995,
      num: 136,
      prevo: 'eevee',
      species: 'flareon',
      types: ['Fire'],
      weightkg: 25,
      aliases: ['buusutaa']
    }
  ],
  [
    'porygon',
    {
      abilities: { first: 'Trace', second: 'Download', hidden: 'Analytic' },
      baseStats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Mineral'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
      evos: ['porygon2'],
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.8,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 5140,
      num: 137,
      species: 'porygon',
      types: ['Normal'],
      weightkg: 36.5,
      aliases: ['porigon']
    }
  ],
  [
    'omanyte',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Shell Armor',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['omastar'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.4,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 138,
      species: 'omanyte',
      types: ['Rock', 'Water'],
      weightkg: 7.5,
      aliases: ['omunaito']
    }
  ],
  [
    'omastar',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Shell Armor',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 2, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 139,
      prevo: 'omanyte',
      species: 'omastar',
      types: ['Rock', 'Water'],
      weightkg: 35,
      aliases: ['omusutaa']
    }
  ],
  [
    'kabuto',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Battle Armor',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 0, def: 1, spa: 0, spd: 0, spe: 0 },
      evos: ['kabutops'],
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 0.5,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 140,
      species: 'kabuto',
      types: ['Rock', 'Water'],
      weightkg: 11.5
    }
  ],
  [
    'kabutops',
    {
      abilities: {
        first: 'Swift Swim',
        second: 'Battle Armor',
        hidden: 'Weak Armor'
      },
      baseStats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Water 3'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 40,
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.3,
      isEggObtainable: true,
      levellingRate: 'Medium Fast',
      minimumHatchTime: 7710,
      num: 141,
      prevo: 'kabuto',
      species: 'kabutops',
      types: ['Rock', 'Water'],
      weightkg: 40.5,
      aliases: ['kabutopusu']
    }
  ],
  [
    'aerodactyl',
    {
      abilities: { first: 'Rock Head', second: 'Pressure', hidden: 'Unnerve' },
      baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 142,
      otherFormes: ['aerodactylmega'],
      species: 'aerodactyl',
      types: ['Rock', 'Flying'],
      weightkg: 59,
      aliases: ['aero', 'putera']
    }
  ],
  [
    'aerodactylmega',
    {
      abilities: { first: 'Tough Claws' },
      baseSpecies: 'Aerodactyl',
      baseStats: { hp: 80, atk: 135, def: 85, spa: 70, spd: 95, spe: 150 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Purple',
      eggGroups: ['Flying'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 2 },
      forme: 'Mega',
      formeLetter: 'M',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 8995,
      num: 142,
      species: 'aerodactyl-mega',
      types: ['Rock', 'Flying'],
      weightkg: 79,
      aliases: ['maero', 'megaaero']
    }
  ],
  [
    'snorlax',
    {
      abilities: { first: 'Immunity', second: 'Thick Fat', hidden: 'Gluttony' },
      baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Black',
      eggGroups: ['Monster'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 'Level up with happiness of at least 220',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 2.1,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 143,
      otherFormes: ['snorlaxgmax'],
      prevo: 'munchlax',
      species: 'snorlax',
      types: ['Normal'],
      weightkg: 460,
      aliases: ['kabigon']
    }
  ],
  [
    'snorlaxgmax',
    {
      abilities: { first: 'Immunity', second: 'Thick Fat', hidden: 'Gluttony' },
      baseSpecies: 'Snorlax',
      baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
      catchRate: { base: 25, percentageWithOrdinaryPokeballAtFullHealth: '7.7%' },
      color: 'Black',
      eggGroups: ['Monster'],
      evYields: { hp: 2, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      forme: 'Gmax',
      formeLetter: 'G',
      genderRatio: { male: '87.5%', female: '12.5%' },
      heightm: 10,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 143,
      species: 'snorlax-gmax',
      types: ['Normal'],
      weightkg: 980,
      aliases: ['gigantamax snorlax']
    }
  ],
  [
    'articuno',
    {
      abilities: { first: 'Pressure', hidden: 'Snow Cloak' },
      baseStats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Blue',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 144,
      otherFormes: ['articunogalar'],
      species: 'articuno',
      types: ['Ice', 'Flying'],
      weightkg: 55.4,
      aliases: ['furiizaa']
    }
  ],
  [
    'articunogalar',
    {
      abilities: { first: 'Competitive' },
      baseSpecies: 'Articuno',
      baseStats: { hp: 90, atk: 85, def: 85, spa: 125, spd: 100, spe: 95 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 3, spe: 0 },
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.7,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 144,
      species: 'articuno-galar',
      types: ['Psychic', 'Flying'],
      weightkg: 50.9
    }
  ],
  [
    'zapdos',
    {
      abilities: { first: 'Pressure', hidden: 'Static' },
      baseStats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 145,
      otherFormes: ['zapdosgalar'],
      species: 'zapdos',
      types: ['Electric', 'Flying'],
      weightkg: 52.6,
      aliases: ['sandaa']
    }
  ],
  [
    'zapdosgalar',
    {
      abilities: { first: 'Defiant' },
      baseSpecies: 'Zapdos',
      baseStats: { hp: 90, atk: 125, def: 90, spa: 85, spd: 90, spe: 100 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.6,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 145,
      species: 'zapdos-galar',
      types: ['Fighting', 'Flying'],
      weightkg: 58.2
    }
  ],
  [
    'moltres',
    {
      abilities: { first: 'Pressure', hidden: 'Flame Body' },
      baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Yellow',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 146,
      otherFormes: ['moltresgalar'],
      species: 'moltres',
      types: ['Fire', 'Flying'],
      weightkg: 60,
      aliases: ['faiyaa']
    }
  ],
  [
    'moltresgalar',
    {
      abilities: { first: 'Berserk' },
      baseSpecies: 'Moltres',
      baseStats: { hp: 90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Red',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Galar',
      formeLetter: 'G',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 20560,
      num: 146,
      species: 'moltres-galar',
      types: ['Dark', 'Flying'],
      weightkg: 66
    }
  ],
  [
    'dratini',
    {
      abilities: { first: 'Shed Skin', hidden: 'Marvel Scale' },
      baseStats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 1, def: 0, spa: 0, spd: 0, spe: 0 },
      evos: ['dragonair'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 1.8,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 147,
      species: 'dratini',
      types: ['Dragon'],
      weightkg: 3.3,
      aliases: ['miniryuu']
    }
  ],
  [
    'dragonair',
    {
      abilities: { first: 'Shed Skin', hidden: 'Marvel Scale' },
      baseStats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Blue',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 2, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 30,
      evos: ['dragonite'],
      genderRatio: { male: '50%', female: '50%' },
      heightm: 4,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 148,
      prevo: 'dratini',
      species: 'dragonair',
      types: ['Dragon'],
      weightkg: 16.5,
      aliases: ['hakuryuu']
    }
  ],
  [
    'dragonite',
    {
      abilities: { first: 'Inner Focus', hidden: 'Multiscale' },
      baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Brown',
      eggGroups: ['Water 1', 'Dragon'],
      evYields: { hp: 0, atk: 3, def: 0, spa: 0, spd: 0, spe: 0 },
      evoLevel: 55,
      genderRatio: { male: '50%', female: '50%' },
      heightm: 2.2,
      isEggObtainable: true,
      levellingRate: 'Slow',
      minimumHatchTime: 10280,
      num: 149,
      prevo: 'dragonair',
      species: 'dragonite',
      types: ['Dragon', 'Flying'],
      weightkg: 210,
      aliases: ['dnite', 'favna', 'kairyuu']
    }
  ],
  [
    'mewtwo',
    {
      abilities: { first: 'Pressure', hidden: 'Unnerve' },
      baseStats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 150,
      otherFormes: ['mewtwomegax', 'mewtwomegay'],
      species: 'mewtwo',
      types: ['Psychic'],
      weightkg: 122,
      aliases: ['m2', 'myuutsuu']
    }
  ],
  [
    'mewtwomegax',
    {
      abilities: { first: 'Steadfast' },
      baseSpecies: 'Mewtwo',
      baseStats: { hp: 106, atk: 190, def: 100, spa: 154, spd: 100, spe: 130 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega-X',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 2.3,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 150,
      species: 'mewtwo-mega-x',
      types: ['Psychic', 'Fighting'],
      weightkg: 127,
      aliases: ['megamewtwox', 'mmx']
    }
  ],
  [
    'mewtwomegay',
    {
      abilities: { first: 'Insomnia' },
      baseSpecies: 'Mewtwo',
      baseStats: { hp: 106, atk: 150, def: 70, spa: 194, spd: 120, spe: 140 },
      catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
      color: 'Purple',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },
      forme: 'Mega-Y',
      formeLetter: 'M',
      genderRatio: { male: '0%', female: '0%' },
      heightm: 1.5,
      isEggObtainable: false,
      levellingRate: 'Slow',
      minimumHatchTime: 30840,
      num: 150,
      species: 'mewtwo-mega-y',
      types: ['Psychic'],
      weightkg: 33,
      aliases: ['megamewtwo', 'megamewtwoy', 'mmy']
    }
  ],
  [
    'mew',
    {
      abilities: { first: 'Synchronize' },
      baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      color: 'Pink',
      eggGroups: ['Undiscovered'],
      evYields: { hp: 3, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
      genderRatio: { male: '0%', female: '0%' },
      heightm: 0.4,
      isEggObtainable: false,
      levellingRate: 'Medium Slow',
      minimumHatchTime: 30840,
      num: 151,
      species: 'mew',
      types: ['Psychic'],
      weightkg: 4,
      aliases: ['myuu']
    }
  ]
];

for (const [name, data] of entries) {
  Pokedex.set(name, data);
}
