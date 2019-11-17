import { Pokemon } from '../utils/pokemon';
import GraphQLCollection from '../utils/GraphQLCollection';

const pokedex = new GraphQLCollection<string, Pokemon.DexEntry>(
  [
    [
      'bulbasaur',
      {
        species: 'Bulbasaur',
        num: 1,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45,
        },
        abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
        heightm: 0.7,
        weightkg: 6.9,
        color: 'Green',
        evos: [ 'ivysaur' ],
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'ivysaur',
      {
        species: 'Ivysaur',
        num: 2,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60,
        },
        abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
        heightm: 1,
        weightkg: 13,
        color: 'Green',
        prevo: 'bulbasaur',
        evos: [ 'venusaur' ],
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'venusaur',
      {
        species: 'Venusaur',
        num: 3,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80,
        },
        abilities: { first: 'Overgrow', hidden: 'Chlorophyll' },
        heightm: 2,
        weightkg: 100,
        color: 'Green',
        prevo: 'ivysaur',
        evoLevel: 32,
        eggGroups: [ 'Monster', 'Grass' ],
        otherFormes: [ 'venusaurmega' ],
      }
    ],
    [
      'venusaurmega',
      {
        species: 'Venusaur-Mega',
        num: 3,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 100, def: 123, spa: 122, spd: 120, spe: 80,
        },
        baseSpecies: 'Venusaur',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Thick Fat' },
        heightm: 2.4,
        weightkg: 155.5,
        color: 'Green',
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'charmander',
      {
        species: 'Charmander',
        num: 4,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65,
        },
        abilities: { first: 'Blaze', hidden: 'Solar Power' },
        heightm: 0.6,
        weightkg: 8.5,
        color: 'Red',
        evos: [ 'charmeleon' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'charmeleon',
      {
        species: 'Charmeleon',
        num: 5,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80,
        },
        abilities: { first: 'Blaze', hidden: 'Solar Power' },
        heightm: 1.1,
        weightkg: 19,
        color: 'Red',
        prevo: 'charmander',
        evos: [ 'charizard' ],
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'charizard',
      {
        species: 'Charizard',
        num: 6,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100,
        },
        abilities: { first: 'Blaze', hidden: 'Solar Power' },
        heightm: 1.7,
        weightkg: 90.5,
        color: 'Red',
        prevo: 'charmeleon',
        evoLevel: 36,
        eggGroups: [ 'Monster', 'Dragon' ],
        otherFormes: [ 'charizardmegax', 'charizardmegay', 'charizardgmax' ],
      }
    ],
    [
      'charizardmegax',
      {
        species: 'Charizard-Mega-X',
        num: 6,
        types: [ 'Fire', 'Dragon' ],
        baseSpecies: 'Charizard',
        forme: 'Mega-X',
        formeLetter: 'M',
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100,
        },
        abilities: { first: 'Tough Claws' },
        heightm: 1.7,
        weightkg: 110.5,
        color: 'Black',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'charizardmegay',
      {
        species: 'Charizard-Mega-Y',
        num: 6,
        types: [ 'Fire', 'Flying' ],
        baseSpecies: 'Charizard',
        forme: 'Mega-Y',
        formeLetter: 'M',
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100,
        },
        abilities: { first: 'Drought' },
        heightm: 1.7,
        weightkg: 100.5,
        color: 'Red',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'charizardgmax',
      {
        species: 'Charizard-Gmax',
        num: 6,
        types: [ 'Fire', 'Flying' ],
        baseSpecies: 'Charizard',
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100,
        },
        abilities: { first: 'Blaze', hidden: 'Solar Power' },
        heightm: 28,
        weightkg: 0,
        color: 'Red',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'squirtle',
      {
        species: 'Squirtle',
        num: 7,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43,
        },
        abilities: { first: 'Torrent', hidden: 'Rain Dish' },
        heightm: 0.5,
        weightkg: 9,
        color: 'Blue',
        evos: [ 'wartortle' ],
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'wartortle',
      {
        species: 'Wartortle',
        num: 8,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58,
        },
        abilities: { first: 'Torrent', hidden: 'Rain Dish' },
        heightm: 1,
        weightkg: 22.5,
        color: 'Blue',
        prevo: 'squirtle',
        evos: [ 'blastoise' ],
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'blastoise',
      {
        species: 'Blastoise',
        num: 9,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78,
        },
        abilities: { first: 'Torrent', hidden: 'Rain Dish' },
        heightm: 1.6,
        weightkg: 85.5,
        color: 'Blue',
        prevo: 'wartortle',
        evoLevel: 36,
        eggGroups: [ 'Monster', 'Water 1' ],
        otherFormes: [ 'blastoisemega' ],
      }
    ],
    [
      'blastoisemega',
      {
        species: 'Blastoise-Mega',
        num: 9,
        types: [ 'Water' ],
        baseSpecies: 'Blastoise',
        forme: 'Mega',
        formeLetter: 'M',
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 79, atk: 103, def: 120, spa: 135, spd: 115, spe: 78,
        },
        abilities: { first: 'Mega Launcher' },
        heightm: 1.6,
        weightkg: 101.1,
        color: 'Blue',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'caterpie',
      {
        species: 'Caterpie',
        num: 10,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45,
        },
        abilities: { first: 'Shield Dust', hidden: 'Run Away' },
        heightm: 0.3,
        weightkg: 2.9,
        color: 'Green',
        evos: [ 'metapod' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'metapod',
      {
        species: 'Metapod',
        num: 11,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30,
        },
        abilities: { first: 'Shed Skin' },
        heightm: 0.7,
        weightkg: 9.9,
        color: 'Green',
        prevo: 'caterpie',
        evos: [ 'butterfree' ],
        evoLevel: 7,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'butterfree',
      {
        species: 'Butterfree',
        num: 12,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70,
        },
        abilities: { first: 'Compound Eyes', hidden: 'Tinted Lens' },
        heightm: 1.1,
        weightkg: 32,
        color: 'White',
        prevo: 'metapod',
        evoLevel: 10,
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'butterfreegmax' ],
      }
    ],
    [
      'butterfreegmax',
      {
        species: 'Butterfree-Gmax',
        num: 12,
        types: [ 'Bug', 'Flying' ],
        baseSpecies: 'Butterfree',
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70,
        },
        abilities: { first: 'Compound Eyes', hidden: 'Tinted Lens' },
        heightm: 17,
        weightkg: 0,
        color: 'White',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'weedle',
      {
        species: 'Weedle',
        num: 13,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50,
        },
        abilities: { first: 'Shield Dust', hidden: 'Run Away' },
        heightm: 0.3,
        weightkg: 3.2,
        color: 'Brown',
        evos: [ 'kakuna' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'kakuna',
      {
        species: 'Kakuna',
        num: 14,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35,
        },
        abilities: { first: 'Shed Skin' },
        heightm: 0.6,
        weightkg: 10,
        color: 'Yellow',
        prevo: 'weedle',
        evos: [ 'beedrill' ],
        evoLevel: 7,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'beedrill',
      {
        species: 'Beedrill',
        num: 15,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75,
        },
        abilities: { first: 'Swarm', hidden: 'Sniper' },
        heightm: 1,
        weightkg: 29.5,
        color: 'Yellow',
        prevo: 'kakuna',
        evoLevel: 10,
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'beedrillmega' ],
      }
    ],
    [
      'beedrillmega',
      {
        species: 'Beedrill-Mega',
        num: 15,
        baseSpecies: 'Beedrill',
        forme: 'Mega',
        formeLetter: 'M',
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 150, def: 40, spa: 15, spd: 80, spe: 145,
        },
        abilities: { first: 'Adaptability' },
        heightm: 1.4,
        weightkg: 40.5,
        color: 'Yellow',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'pidgey',
      {
        species: 'Pidgey',
        num: 16,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56,
        },
        abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
        heightm: 0.3,
        weightkg: 1.8,
        color: 'Brown',
        evos: [ 'pidgeotto' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'pidgeotto',
      {
        species: 'Pidgeotto',
        num: 17,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71,
        },
        abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
        heightm: 1.1,
        weightkg: 30,
        color: 'Brown',
        prevo: 'pidgey',
        evos: [ 'pidgeot' ],
        evoLevel: 18,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'pidgeot',
      {
        species: 'Pidgeot',
        num: 18,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101,
        },
        abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
        heightm: 1.5,
        weightkg: 39.5,
        color: 'Brown',
        prevo: 'pidgeotto',
        evoLevel: 36,
        eggGroups: [ 'Flying' ],
        otherFormes: [ 'pidgeotmega' ],
      }
    ],
    [
      'pidgeotmega',
      {
        species: 'Pidgeot-Mega',
        num: 18,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Pidgeot',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 83, atk: 80, def: 80, spa: 135, spd: 80, spe: 121,
        },
        abilities: { first: 'No Guard' },
        heightm: 2.2,
        weightkg: 50.5,
        color: 'Brown',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'rattata',
      {
        species: 'Rattata',
        num: 19,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72,
        },
        abilities: { first: 'Run Away', second: 'Guts', hidden: 'Hustle' },
        heightm: 0.3,
        weightkg: 3.5,
        color: 'Purple',
        evos: [ 'raticate' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'rattataalola' ],
      }
    ],
    [
      'rattataalola',
      {
        species: 'Rattata-Alola',
        num: 19,
        types: [ 'Dark', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Rattata',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72,
        },
        abilities: { first: 'Gluttony', second: 'Hustle', hidden: 'Thick Fat' },
        heightm: 0.3,
        weightkg: 3.8,
        color: 'Black',
        evos: [ 'raticatealola' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'raticate',
      {
        species: 'Raticate',
        num: 20,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97,
        },
        abilities: { first: 'Run Away', second: 'Guts', hidden: 'Hustle' },
        heightm: 0.7,
        weightkg: 18.5,
        color: 'Brown',
        prevo: 'rattata',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'raticatealola', 'raticatealolatotem' ],
      }
    ],
    [
      'raticatealola',
      {
        species: 'Raticate-Alola',
        num: 20,
        types: [ 'Dark', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Raticate',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77,
        },
        abilities: { first: 'Gluttony', second: 'Hustle', hidden: 'Thick Fat' },
        heightm: 0.7,
        weightkg: 25.5,
        color: 'Black',
        prevo: 'rattataalola',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'raticatealolatotem',
      {
        species: 'Raticate-Alola-Totem',
        num: 20,
        baseSpecies: 'Raticate',
        forme: 'Alola-Totem',
        formeLetter: 'T',
        types: [ 'Dark', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77,
        },
        abilities: { first: 'Thick Fat' },
        heightm: 1.4,
        weightkg: 105,
        color: 'Black',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'spearow',
      {
        species: 'Spearow',
        num: 21,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70,
        },
        abilities: { first: 'Keen Eye', hidden: 'Sniper' },
        heightm: 0.3,
        weightkg: 2,
        color: 'Brown',
        evos: [ 'fearow' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'fearow',
      {
        species: 'Fearow',
        num: 22,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100,
        },
        abilities: { first: 'Keen Eye', hidden: 'Sniper' },
        heightm: 1.2,
        weightkg: 38,
        color: 'Brown',
        prevo: 'spearow',
        evoLevel: 20,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'ekans',
      {
        species: 'Ekans',
        num: 23,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55,
        },
        abilities: { first: 'Intimidate', second: 'Shed Skin', hidden: 'Unnerve' },
        heightm: 2,
        weightkg: 6.9,
        color: 'Purple',
        evos: [ 'arbok' ],
        eggGroups: [ 'Field', 'Dragon' ],
      }
    ],
    [
      'arbok',
      {
        species: 'Arbok',
        num: 24,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80,
        },
        abilities: { first: 'Intimidate', second: 'Shed Skin', hidden: 'Unnerve' },
        heightm: 3.5,
        weightkg: 65,
        color: 'Purple',
        prevo: 'ekans',
        evoLevel: 22,
        eggGroups: [ 'Field', 'Dragon' ],
      }
    ],
    [
      'pikachu',
      {
        species: 'Pikachu',
        num: 25,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static', hidden: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        prevo: 'pichu',
        evos: [ 'raichu', 'raichualola' ],
        evoLevel: 'Level up with High Friendship',
        eggGroups: [ 'Field', 'Fairy' ],
        otherFormes: [
          'pikachucosplay', 'pikachurockstar',
          'pikachubelle', 'pikachupopstar',
          'pikachuphd', 'pikachulibre',
          'pikachuoriginal', 'pikachuhoenn',
          'pikachusinnoh', 'pikachuunova',
          'pikachukalos', 'pikachualola',
          'pikachupartner', 'pikachustarter',
          'pikachugmax'
        ],
      }
    ],
    [
      'pikachugmax',
      {
        species: 'Pikachu-Gmax',
        baseSpecies: 'Pikachu',
        num: 25,
        types: [ 'Electric' ],
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static', hidden: 'Lightning Rod' },
        heightm: 21,
        weightkg: 0,
        color: 'Yellow',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'pikachucosplay',
      {
        species: 'Pikachu-Cosplay',
        num: 25,
        types: [ 'Electric' ],
        baseSpecies: 'Pikachu',
        forme: 'Cosplay',
        formeLetter: 'C',
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachurockstar',
      {
        species: 'Pikachu-Rock-Star',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Rock-Star',
        formeLetter: 'R',
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachubelle',
      {
        species: 'Pikachu-Belle',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Belle',
        formeLetter: 'B',
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachupopstar',
      {
        species: 'Pikachu-Pop-Star',
        num: 25,
        types: [ 'Electric' ],
        baseSpecies: 'Pikachu',
        forme: 'Pop-Star',
        formeLetter: 'P',
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachuphd',
      {
        species: 'Pikachu-PhD',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'PhD',
        formeLetter: 'D',
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachulibre',
      {
        species: 'Pikachu-Libre',
        num: 25,
        types: [ 'Electric' ],
        baseSpecies: 'Pikachu',
        forme: 'Libre',
        formeLetter: 'L',
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachuoriginal',
      {
        species: 'Pikachu-Original',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Original',
        formeLetter: 'O',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachuhoenn',
      {
        species: 'Pikachu-Hoenn',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Hoenn',
        formeLetter: 'H',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachusinnoh',
      {
        species: 'Pikachu-Sinnoh',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Sinnoh',
        formeLetter: 'S',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachuunova',
      {
        species: 'Pikachu-Unova',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Unova',
        formeLetter: 'U',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachukalos',
      {
        species: 'Pikachu-Kalos',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Kalos',
        formeLetter: 'K',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachualola',
      {
        species: 'Pikachu-Alola',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachupartner',
      {
        species: 'Pikachu-Partner',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Partner',
        formeLetter: 'P',
        types: [ 'Electric' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Static' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pikachustarter',
      {
        species: 'Pikachu-Starter',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Starter',
        formeLetter: 'S',
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 80, def: 50, spa: 75, spd: 60, spe: 120,
        },
        abilities: { first: 'Static', hidden: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'raichu',
      {
        species: 'Raichu',
        num: 26,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110,
        },
        abilities: { first: 'Static', hidden: 'Lightning Rod' },
        heightm: 0.8,
        weightkg: 30,
        color: 'Yellow',
        prevo: 'pikachu',
        evoLevel: 'use Thunder Stone',
        eggGroups: [ 'Field', 'Fairy' ],
        otherFormes: [ 'raichualola' ],
      }
    ],
    [
      'raichualola',
      {
        species: 'Raichu-Alola',
        num: 26,
        baseSpecies: 'Raichu',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Electric', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },

        baseStats: {
          hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110,
        },
        abilities: { first: 'Surge Surfer' },
        heightm: 0.7,
        weightkg: 21,
        color: 'Brown',
        prevo: 'pikachu',
        evoLevel: 'use Thunder Stone',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'sandshrew',
      {
        species: 'Sandshrew',
        num: 27,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40,
        },
        abilities: { first: 'Sand Veil', hidden: 'Sand Rush' },
        heightm: 0.6,
        weightkg: 12,
        color: 'Yellow',
        evos: [ 'sandslash' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'sandshrewalola' ],
      }
    ],
    [
      'sandshrewalola',
      {
        species: 'Sandshrew-Alola',
        num: 27,
        baseSpecies: 'Sandshrew',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 75, def: 90, spa: 10, spd: 35, spe: 40,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Slush Rush' },
        heightm: 0.7,
        weightkg: 40,
        color: 'White',
        evos: [ 'sandslashalola' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'sandslash',
      {
        species: 'Sandslash',
        num: 28,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65,
        },
        abilities: { first: 'Sand Veil', hidden: 'Sand Rush' },
        heightm: 1,
        weightkg: 29.5,
        color: 'Yellow',
        prevo: 'sandshrew',
        evoLevel: 22,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'sandslashalola' ],
      }
    ],
    [
      'sandslashalola',
      {
        species: 'Sandslash-Alola',
        num: 28,
        baseSpecies: 'Sandslash',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 100, def: 120, spa: 25, spd: 65, spe: 65,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Slush Rush' },
        heightm: 1.2,
        weightkg: 55,
        color: 'Blue',
        prevo: 'sandshrewalola',
        evoLevel: 'use Icestone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'nidoranf',
      {
        species: 'Nidoran-F',
        num: 29,
        types: [ 'Poison' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41,
        },
        abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
        heightm: 0.4,
        weightkg: 7,
        color: 'Blue',
        evos: [ 'nidorina' ],
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'nidorina',
      {
        species: 'Nidorina',
        num: 30,
        types: [ 'Poison' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56,
        },
        abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
        heightm: 0.8,
        weightkg: 20,
        color: 'Blue',
        prevo: 'nidoranf',
        evos: [ 'nidoqueen' ],
        evoLevel: 'use Moon Stone',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'nidoqueen',
      {
        species: 'Nidoqueen',
        num: 31,
        types: [ 'Poison', 'Ground' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76,
        },
        abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Sheer Force' },
        heightm: 1.3,
        weightkg: 60,
        color: 'Blue',
        prevo: 'nidorina',
        evoLevel: 16,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'nidoranm',
      {
        species: 'Nidoran-M',
        num: 32,
        types: [ 'Poison' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50,
        },
        abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
        heightm: 0.5,
        weightkg: 9,
        color: 'Purple',
        evos: [ 'nidorino' ],
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'nidorino',
      {
        species: 'Nidorino',
        num: 33,
        types: [ 'Poison' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65,
        },
        abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Hustle' },
        heightm: 0.9,
        weightkg: 19.5,
        color: 'Purple',
        prevo: 'nidoranm',
        evos: [ 'nidoking' ],
        evoLevel: 'use Moon Stone',
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'nidoking',
      {
        species: 'Nidoking',
        num: 34,
        types: [ 'Poison', 'Ground' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85,
        },
        abilities: { first: 'Poison Point', second: 'Rivalry', hidden: 'Sheer Force' },
        heightm: 1.4,
        weightkg: 62,
        color: 'Purple',
        prevo: 'nidorino',
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'clefairy',
      {
        species: 'Clefairy',
        num: 35,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35,
        },
        abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Friend Guard' },
        heightm: 0.6,
        weightkg: 7.5,
        color: 'Pink',
        prevo: 'cleffa',
        evos: [ 'clefable' ],
        evoLevel: 'Level up with High Friendship',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'clefable',
      {
        species: 'Clefable',
        num: 36,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60,
        },
        abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Unaware' },
        heightm: 1.3,
        weightkg: 40,
        color: 'Pink',
        prevo: 'clefairy',
        evoLevel: 'use Moon Stone',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'vulpix',
      {
        species: 'Vulpix',
        num: 37,
        types: [ 'Fire' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65,
        },
        abilities: { first: 'Flash Fire', hidden: 'Drought' },
        heightm: 0.6,
        weightkg: 9.9,
        color: 'Brown',
        evos: [ 'ninetales' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'vulpixalola' ],
      }
    ],
    [
      'vulpixalola',
      {
        species: 'Vulpix-Alola',
        num: 37,
        baseSpecies: 'Vulpix',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Snow Warning' },
        heightm: 0.6,
        weightkg: 9.9,
        color: 'White',
        evos: [ 'ninetalesalola' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'ninetales',
      {
        species: 'Ninetales',
        num: 38,
        types: [ 'Fire' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100,
        },
        abilities: { first: 'Flash Fire', hidden: 'Drought' },
        heightm: 1.1,
        weightkg: 19.9,
        color: 'Yellow',
        prevo: 'vulpix',
        evoLevel: 'use Fire Stone',
        eggGroups: [ 'Field' ],
        otherFormes: [ 'ninetalesalola' ],
      }
    ],
    [
      'ninetalesalola',
      {
        species: 'Ninetales-Alola',
        num: 38,
        baseSpecies: 'Ninetales',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Snow Warning' },
        heightm: 1.1,
        weightkg: 19.9,
        color: 'Blue',
        prevo: 'vulpixalola',
        evoLevel: 'use Ice Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'jigglypuff',
      {
        species: 'Jigglypuff',
        num: 39,
        types: [ 'Normal', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20,
        },
        abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Friend Guard' },
        heightm: 0.5,
        weightkg: 5.5,
        color: 'Pink',
        prevo: 'igglybuff',
        evos: [ 'wigglytuff' ],
        evoLevel: 'Level up with High Friendship',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'wigglytuff',
      {
        species: 'Wigglytuff',
        num: 40,
        types: [ 'Normal', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45,
        },
        abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Frisk' },
        heightm: 1,
        weightkg: 12,
        color: 'Pink',
        prevo: 'jigglypuff',
        evoLevel: 'use Moon Stone',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'zubat',
      {
        species: 'Zubat',
        num: 41,
        types: [ 'Poison', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55,
        },
        abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
        heightm: 0.8,
        weightkg: 7.5,
        color: 'Purple',
        evos: [ 'golbat' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'golbat',
      {
        species: 'Golbat',
        num: 42,
        types: [ 'Poison', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90,
        },
        abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
        heightm: 1.6,
        weightkg: 55,
        color: 'Purple',
        prevo: 'zubat',
        evos: [ 'crobat' ],
        evoLevel: 22,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'oddish',
      {
        species: 'Oddish',
        num: 43,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Run Away' },
        heightm: 0.5,
        weightkg: 5.4,
        color: 'Blue',
        evos: [ 'gloom' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'gloom',
      {
        species: 'Gloom',
        num: 44,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Stench' },
        heightm: 0.8,
        weightkg: 8.6,
        color: 'Blue',
        prevo: 'oddish',
        evos: [ 'vileplume', 'bellossom' ],
        evoLevel: 'use Leaf Stone ',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'vileplume',
      {
        species: 'Vileplume',
        num: 45,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Effect Spore' },
        heightm: 1.2,
        weightkg: 18.6,
        color: 'Red',
        prevo: 'gloom',
        evoLevel: 21,
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'paras',
      {
        species: 'Paras',
        num: 46,
        types: [ 'Bug', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25,
        },
        abilities: { first: 'Effect Spore', second: 'Dry Skin', hidden: 'Damp' },
        heightm: 0.3,
        weightkg: 5.4,
        color: 'Red',
        evos: [ 'parasect' ],
        eggGroups: [ 'Bug', 'Grass' ],
      }
    ],
    [
      'parasect',
      {
        species: 'Parasect',
        num: 47,
        types: [ 'Bug', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30,
        },
        abilities: { first: 'Effect Spore', second: 'Dry Skin', hidden: 'Damp' },
        heightm: 1,
        weightkg: 29.5,
        color: 'Red',
        prevo: 'paras',
        evoLevel: 24,
        eggGroups: [ 'Bug', 'Grass' ],
      }
    ],
    [
      'venonat',
      {
        species: 'Venonat',
        num: 48,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45,
        },
        abilities: { first: 'Compound Eyes', second: 'Tinted Lens', hidden: 'Run Away' },
        heightm: 1,
        weightkg: 30,
        color: 'Purple',
        evos: [ 'venomoth' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'venomoth',
      {
        species: 'Venomoth',
        num: 49,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90,
        },
        abilities: { first: 'Shield Dust', second: 'Tinted Lens', hidden: 'Wonder Skin' },
        heightm: 1.5,
        weightkg: 12.5,
        color: 'Purple',
        prevo: 'venonat',
        evoLevel: 31,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'diglett',
      {
        species: 'Diglett',
        num: 50,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95,
        },
        abilities: { first: 'Sand Veil', second: 'Arena Trap', hidden: 'Sand Force' },
        heightm: 0.2,
        weightkg: 0.8,
        color: 'Brown',
        evos: [ 'dugtrio' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'diglettalola' ],
      }
    ],
    [
      'diglettalola',
      {
        species: 'Diglett-Alola',
        num: 50,
        baseSpecies: 'Diglett',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ground', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 10, atk: 55, def: 30, spa: 35, spd: 45, spe: 90,
        },
        abilities: { first: 'Sand Veil', second: 'Tangling Hair', hidden: 'Sand Force' },
        heightm: 0.2,
        weightkg: 1,
        color: 'Brown',
        evos: [ 'dugtrioalola' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'dugtrio',
      {
        species: 'Dugtrio',
        num: 51,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120,
        },
        abilities: { first: 'Sand Veil', second: 'Arena Trap', hidden: 'Sand Force' },
        heightm: 0.7,
        weightkg: 33.3,
        color: 'Brown',
        prevo: 'diglett',
        evoLevel: 26,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'dugtrioalola' ],
      }
    ],
    [
      'dugtrioalola',
      {
        species: 'Dugtrio-Alola',
        num: 51,
        baseSpecies: 'Dugtrio',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ground', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 100, def: 60, spa: 50, spd: 70, spe: 110,
        },
        abilities: { first: 'Sand Veil', second: 'Tangling Hair', hidden: 'Sand Force' },
        heightm: 0.7,
        weightkg: 66.6,
        color: 'Brown',
        prevo: 'diglettalola',
        evoLevel: 26,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'meowth',
      {
        species: 'Meowth',
        num: 52,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90,
        },
        abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
        heightm: 0.4,
        weightkg: 4.2,
        color: 'Yellow',
        evos: [ 'persian' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'meowthalola', 'meowthgmax', 'meowthgalar' ],
      }
    ],
    [
      'meowthalola',
      {
        species: 'Meowth-Alola',
        num: 52,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Meowth',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90,
        },
        abilities: { first: 'Pickup', second: 'Technician', hidden: 'Rattled' },
        heightm: 0.4,
        weightkg: 4.2,
        color: 'Blue',
        evos: [ 'persianalola' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'meowthgalar',
      {
        species: 'Meowth-Galar',
        num: 52,
        baseSpecies: 'Meowth',
        forme: 'Galar',
        formeLetter: 'G',
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90,
        },
        abilities: { first: 'Pickup', second: 'Technician', hidden: 'Rattled' },
        heightm: 0.40,
        weightkg: 4.2,
        color: 'Blue',
        evos: [ 'perrserker' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'meowthgmax',
      {
        species: 'Meowth-Gmax',
        baseSpecies: 'Meowth',
        num: 52,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        forme: 'Gmax',
        formeLetter: 'G',
        baseStats: {
          hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90,
        },
        abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
        heightm: 33,
        weightkg: 0,
        color: 'Yellow',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'persian',
      {
        species: 'Persian',
        num: 53,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115,
        },
        abilities: { first: 'Limber', second: 'Technician', hidden: 'Unnerve' },
        heightm: 1,
        weightkg: 32,
        color: 'Yellow',
        prevo: 'meowth',
        evoLevel: 28,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'persianalola' ],
      }
    ],
    [
      'persianalola',
      {
        species: 'Persian-Alola',
        num: 53,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Persian',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 65, atk: 60, def: 60, spa: 75, spd: 65, spe: 115,
        },
        abilities: { first: 'Fur Coat', second: 'Technician', hidden: 'Rattled' },
        heightm: 1.1,
        weightkg: 33,
        color: 'Blue',
        prevo: 'meowthalola',
        evoLevel: 2,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'psyduck',
      {
        species: 'Psyduck',
        num: 54,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55,
        },
        abilities: { first: 'Damp', second: 'Cloud Nine', hidden: 'Swift Swim' },
        heightm: 0.8,
        weightkg: 19.6,
        color: 'Yellow',
        evos: [ 'golduck' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'golduck',
      {
        species: 'Golduck',
        num: 55,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85,
        },
        abilities: { first: 'Damp', second: 'Cloud Nine', hidden: 'Swift Swim' },
        heightm: 1.7,
        weightkg: 76.6,
        color: 'Blue',
        prevo: 'psyduck',
        evoLevel: 33,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'mankey',
      {
        species: 'Mankey',
        num: 56,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70,
        },
        abilities: { first: 'Vital Spirit', second: 'Anger Point', hidden: 'Defiant' },
        heightm: 0.5,
        weightkg: 28,
        color: 'Brown',
        evos: [ 'primeape' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'primeape',
      {
        species: 'Primeape',
        num: 57,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95,
        },
        abilities: { first: 'Vital Spirit', second: 'Anger Point', hidden: 'Defiant' },
        heightm: 1,
        weightkg: 32,
        color: 'Brown',
        prevo: 'mankey',
        evoLevel: 28,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'growlithe',
      {
        species: 'Growlithe',
        num: 58,
        types: [ 'Fire' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60,
        },
        abilities: { first: 'Intimidate', second: 'Flash Fire', hidden: 'Justified' },
        heightm: 0.7,
        weightkg: 19,
        color: 'Brown',
        evos: [ 'arcanine' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'arcanine',
      {
        species: 'Arcanine',
        num: 59,
        types: [ 'Fire' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95,
        },
        abilities: { first: 'Intimidate', second: 'Flash Fire', hidden: 'Justified' },
        heightm: 1.9,
        weightkg: 155,
        color: 'Brown',
        prevo: 'growlithe',
        evoLevel: 'use Fire Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'poliwag',
      {
        species: 'Poliwag',
        num: 60,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90,
        },
        abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
        heightm: 0.6,
        weightkg: 12.4,
        color: 'Blue',
        evos: [ 'poliwhirl' ],
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'poliwhirl',
      {
        species: 'Poliwhirl',
        num: 61,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90,
        },
        abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
        heightm: 1,
        weightkg: 20,
        color: 'Blue',
        prevo: 'poliwag',
        evos: [ 'poliwrath', 'politoed' ],
        evoLevel: 25,
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'poliwrath',
      {
        species: 'Poliwrath',
        num: 62,
        types: [ 'Water', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70,
        },
        abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Swift Swim' },
        heightm: 1.3,
        weightkg: 54,
        color: 'Blue',
        prevo: 'poliwhirl',
        evoLevel: 'use Water Stone',
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'abra',
      {
        species: 'Abra',
        num: 63,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90,
        },
        abilities: { first: 'Synchronize', second: 'Inner Focus', hidden: 'Magic Guard' },
        heightm: 0.9,
        weightkg: 19.5,
        color: 'Brown',
        evos: [ 'kadabra' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'kadabra',
      {
        species: 'Kadabra',
        num: 64,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105,
        },
        abilities: { first: 'Synchronize', second: 'Inner Focus', hidden: 'Magic Guard' },
        heightm: 1.3,
        weightkg: 56.5,
        color: 'Brown',
        prevo: 'abra',
        evos: [ 'alakazam' ],
        evoLevel: 16,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'alakazam',
      {
        species: 'Alakazam',
        num: 65,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120,
        },
        abilities: { first: 'Synchronize', second: 'Inner Focus', hidden: 'Magic Guard' },
        heightm: 1.5,
        weightkg: 48,
        color: 'Brown',
        prevo: 'kadabra',
        evoLevel: 'Trade',
        eggGroups: [ 'Human-Like' ],
        otherFormes: [ 'alakazammega' ],
      }
    ],
    [
      'alakazammega',
      {
        species: 'Alakazam-mMga',
        num: 65,
        types: [ 'Psychic' ],
        baseSpecies: 'Alakazam',
        forme: 'Mega',
        formeLetter: 'M',
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 55, atk: 50, def: 65, spa: 175, spd: 105, spe: 150,
        },
        abilities: { first: 'Trace' },
        heightm: 1.2,
        weightkg: 48,
        color: 'Brown',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'machop',
      {
        species: 'Machop',
        num: 66,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35,
        },
        abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
        heightm: 0.8,
        weightkg: 19.5,
        color: 'Gray',
        evos: [ 'machoke' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'machoke',
      {
        species: 'Machoke',
        num: 67,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45,
        },
        abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
        heightm: 1.5,
        weightkg: 70.5,
        color: 'Gray',
        prevo: 'machop',
        evos: [ 'machamp' ],
        evoLevel: 28,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'machamp',
      {
        species: 'Machamp',
        num: 68,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55,
        },
        abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
        heightm: 1.6,
        weightkg: 130,
        color: 'Gray',
        prevo: 'machoke',
        evoLevel: 'Trade',
        eggGroups: [ 'Human-Like' ],
        otherFormes: [ 'machampgmax' ],
      }
    ],
    [
      'machampgmax',
      {
        species: 'Machamp-Gmax',
        baseSpecies: 'Machamp',
        num: 68,
        types: [ 'Fighting' ],
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55,
        },
        abilities: { first: 'Guts', second: 'No Guard', hidden: 'Steadfast' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Gray',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'bellsprout',
      {
        species: 'Bellsprout',
        num: 69,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
        heightm: 0.7,
        weightkg: 4,
        color: 'Green',
        evos: [ 'weepinbell' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'weepinbell',
      {
        species: 'Weepinbell',
        num: 70,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
        heightm: 1,
        weightkg: 6.4,
        color: 'Green',
        prevo: 'bellsprout',
        evos: [ 'victreebel' ],
        evoLevel: 21,
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'victreebel',
      {
        species: 'Victreebel',
        num: 71,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Gluttony' },
        heightm: 1.7,
        weightkg: 15.5,
        color: 'Green',
        prevo: 'weepinbell',
        evoLevel: 'use Leaf Stone',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'tentacool',
      {
        species: 'Tentacool',
        num: 72,
        types: [ 'Water', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70,
        },
        abilities: { first: 'Clear Body', second: 'Liquid Ooze', hidden: 'Rain Dish' },
        heightm: 0.9,
        weightkg: 45.5,
        color: 'Blue',
        evos: [ 'tentacruel' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'tentacruel',
      {
        species: 'Tentacruel',
        num: 73,
        types: [ 'Water', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100,
        },
        abilities: { first: 'Clear Body', second: 'Liquid Ooze', hidden: 'Rain Dish' },
        heightm: 1.6,
        weightkg: 55,
        color: 'Blue',
        prevo: 'tentacool',
        evoLevel: 30,
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'geodude',
      {
        species: 'Geodude',
        num: 74,
        types: [ 'Rock', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20,
        },
        abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
        heightm: 0.4,
        weightkg: 20,
        color: 'Brown',
        evos: [ 'graveler' ],
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'geodudealola' ],
      }
    ],
    [
      'geodudealola',
      {
        species: 'Geodude-Alola',
        num: 74,
        types: [ 'Rock', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Geodude',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20,
        },
        abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
        heightm: 0.4,
        weightkg: 20.3,
        color: 'Gray',
        evos: [ 'graveleralola' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'graveler',
      {
        species: 'Graveler',
        num: 75,
        types: [ 'Rock', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35,
        },
        abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
        heightm: 1,
        weightkg: 105,
        color: 'Brown',
        prevo: 'geodude',
        evos: [ 'golem' ],
        evoLevel: 25,
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'graveleralola' ],
      }
    ],
    [
      'graveleralola',
      {
        species: 'Graveler-Alola',
        num: 75,
        types: [ 'Rock', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Graveler',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35,
        },
        abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
        heightm: 1,
        weightkg: 110,
        color: 'Gray',
        prevo: 'geodudealola',
        evos: [ 'golemalola' ],
        evoLevel: 25,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'golem',
      {
        species: 'Golem',
        num: 76,
        types: [ 'Rock', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45,
        },
        abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sand Veil' },
        heightm: 1.4,
        weightkg: 300,
        color: 'Brown',
        prevo: 'graveler',
        evoLevel: 'Trade',
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'golemalola' ],
      }
    ],
    [
      'golemalola',
      {
        species: 'Golem-Alola',
        num: 76,
        types: [ 'Rock', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Golem',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45,
        },
        abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Galvanize' },
        heightm: 1.7,
        weightkg: 316,
        color: 'Gray',
        prevo: 'graveleralola',
        evoLevel: 'Trade',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'ponyta',
      {
        species: 'Ponyta',
        num: 77,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90,
        },
        abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
        heightm: 1,
        weightkg: 30,
        color: 'Yellow',
        evos: [ 'rapidash' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'ponytagalar' ],
      }
    ],
    [
      'ponytagalar',
      {
        species: 'Ponyta-Galar',
        num: 77,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Ponyta',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90,
        },
        abilities: { first: 'Run Away', second: 'Pastel Veil', hidden: 'Anticipation' },
        heightm: 0.80,
        weightkg: 24.0,
        color: 'White',
        evos: [ 'rapidashgalar' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'rapidash',
      {
        species: 'Rapidash',
        num: 78,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105,
        },
        abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
        heightm: 1.7,
        weightkg: 95,
        color: 'Yellow',
        prevo: 'ponyta',
        evoLevel: 40,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'rapidashgalar' ],
      }
    ],
    [
      'rapidashgalar',
      {
        species: 'Rapidash-Galar',
        num: 78,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Rapidash',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105,
        },
        abilities: { first: 'Run Away', second: 'Pastel Veil', hidden: 'Anticipation' },
        heightm: 1.7,
        weightkg: 95,
        color: 'White',
        prevo: 'ponytagalar',
        evoLevel: 40,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'slowpoke',
      {
        species: 'Slowpoke',
        num: 79,
        types: [ 'Water', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15,
        },
        abilities: { first: 'Oblivious', second: 'Own Tempo', hidden: 'Regenerator' },
        heightm: 1.2,
        weightkg: 36,
        color: 'Pink',
        evos: [ 'slowbro', 'slowking' ],
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'slowbro',
      {
        species: 'Slowbro',
        num: 80,
        types: [ 'Water', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30,
        },
        abilities: { first: 'Oblivious', second: 'Own Tempo', hidden: 'Regenerator' },
        heightm: 1.6,
        weightkg: 78.5,
        color: 'Pink',
        prevo: 'slowpoke',
        evoLevel: 37,
        eggGroups: [ 'Monster', 'Water 1' ],
        otherFormes: [ 'slowbromega' ],
      }
    ],
    [
      'slowbromega',
      {
        species: 'Slowbro-Mega',
        num: 80,
        types: [ 'Water', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Slowbro',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 95, atk: 75, def: 180, spa: 130, spd: 80, spe: 30,
        },
        abilities: { first: 'Shell Armor' },
        heightm: 2,
        weightkg: 120,
        color: 'Pink',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'magnemite',
      {
        species: 'Magnemite',
        num: 81,
        types: [ 'Electric', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45,
        },
        abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
        heightm: 0.3,
        weightkg: 6,
        color: 'Gray',
        evos: [ 'magneton' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'magneton',
      {
        species: 'Magneton',
        num: 82,
        types: [ 'Electric', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70,
        },
        abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
        heightm: 1,
        weightkg: 60,
        color: 'Gray',
        prevo: 'magnemite',
        evos: [ 'magnezone' ],
        evoLevel: 30,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'farfetchd',
      {
        species: 'Farfetch\'d',
        num: 83,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60,
        },
        abilities: { first: 'Keen Eye', second: 'Inner Focus', hidden: 'Defiant' },
        heightm: 0.8,
        weightkg: 15,
        color: 'Brown',
        eggGroups: [ 'Flying', 'Field' ],
        otherFormes: [ 'farfetchdgalar' ],
      }
    ],
    [
      'farfetchdgalar',
      {
        species: 'Farfetch\'d-Galar',
        num: 83,
        types: [ 'Fighting' ],
        baseSpecies: 'Farfetch\'d',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 52, atk: 95, def: 55, spa: 58, spd: 62, spe: 55,
        },
        abilities: { first: 'Steadfast', second: 'Steadfast', hidden: 'Scrappy' },
        heightm: 0.80,
        weightkg: 42.0,
        color: 'Brown',
        evos: [ 'sirfetchdgalar' ],
        eggGroups: [ 'Flying', 'Field' ],
      }
    ],
    [
      'doduo',
      {
        species: 'Doduo',
        num: 84,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75,
        },
        abilities: { first: 'Run Away', second: 'Early Bird', hidden: 'Tangled Feet' },
        heightm: 1.4,
        weightkg: 39.2,
        color: 'Brown',
        evos: [ 'dodrio' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'dodrio',
      {
        species: 'Dodrio',
        num: 85,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110,
        },
        abilities: { first: 'Run Away', second: 'Early Bird', hidden: 'Tangled Feet' },
        heightm: 1.8,
        weightkg: 85.2,
        color: 'Brown',
        prevo: 'doduo',
        evoLevel: 31,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'seel',
      {
        species: 'Seel',
        num: 86,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45,
        },
        abilities: { first: 'Thick Fat', second: 'Hydration', hidden: 'Ice Body' },
        heightm: 1.1,
        weightkg: 90,
        color: 'White',
        evos: [ 'dewgong' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'dewgong',
      {
        species: 'Dewgong',
        num: 87,
        types: [ 'Water', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70,
        },
        abilities: { first: 'Thick Fat', second: 'Hydration', hidden: 'Ice Body' },
        heightm: 1.7,
        weightkg: 120,
        color: 'White',
        prevo: 'seel',
        evoLevel: 34,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'grimer',
      {
        species: 'Grimer',
        num: 88,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25,
        },
        abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Poison Touch' },
        heightm: 0.9,
        weightkg: 30,
        color: 'Purple',
        evos: [ 'muk' ],
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'grimeralola' ],
      }
    ],
    [
      'grimeralola',
      {
        species: 'Grimer-Alola',
        num: 88,
        types: [ 'Poison', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Grimer',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25,
        },
        abilities: { first: 'Poison Touch', second: 'Gluttony', hidden: 'Power of Alchemy' },
        heightm: 0.7,
        weightkg: 42,
        color: 'Green',
        evos: [ 'mukalola' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'muk',
      {
        species: 'Muk',
        num: 89,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50,
        },
        abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Poison Touch' },
        heightm: 1.2,
        weightkg: 30,
        color: 'Purple',
        prevo: 'grimer',
        evoLevel: 38,
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'mukalola' ],
      }
    ],
    [
      'mukalola',
      {
        species: 'Muk-Alola',
        num: 89,
        types: [ 'Poison', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Muk',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50,
        },
        abilities: { first: 'Poison Touch', second: 'Gluttony', hidden: 'Power of Alchemy' },
        heightm: 1,
        weightkg: 52,
        color: 'Green',
        prevo: 'grimeralola',
        evoLevel: 38,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'shellder',
      {
        species: 'Shellder',
        num: 90,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40,
        },
        abilities: { first: 'Shell Armor', second: 'Skill Link', hidden: 'Overcoat' },
        heightm: 0.3,
        weightkg: 4,
        color: 'Purple',
        evos: [ 'cloyster' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'cloyster',
      {
        species: 'Cloyster',
        num: 91,
        types: [ 'Water', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70,
        },
        abilities: { first: 'Shell Armor', second: 'Skill Link', hidden: 'Overcoat' },
        heightm: 1.5,
        weightkg: 132.5,
        color: 'Purple',
        prevo: 'shellder',
        evoLevel: 'use Water Stone',
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'gastly',
      {
        species: 'Gastly',
        num: 92,
        types: [ 'Ghost', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.3,
        weightkg: 0.1,
        color: 'Purple',
        evos: [ 'haunter' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'haunter',
      {
        species: 'Haunter',
        num: 93,
        types: [ 'Ghost', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.6,
        weightkg: 0.1,
        color: 'Purple',
        prevo: 'gastly',
        evos: [ 'gengar' ],
        evoLevel: 25,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gengar',
      {
        species: 'Gengar',
        num: 94,
        types: [ 'Ghost', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110,
        },
        abilities: { first: 'Cursed Body' },
        heightm: 1.5,
        weightkg: 40.5,
        color: 'Purple',
        prevo: 'haunter',
        evoLevel: 'Trade',
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'gengarmega', 'gengargmax' ],
      }
    ],
    [
      'gengarmega',
      {
        species: 'Gengar-Mega',
        num: 94,
        types: [ 'Ghost', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Gengar',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130,
        },
        abilities: { first: 'Shadow Tag' },
        heightm: 1.4,
        weightkg: 40.5,
        color: 'Purple',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gengarmax',
      {
        species: 'Gengar-Gmax',
        num: 94,
        types: [ 'Ghost', 'Poison' ],
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110,
        },
        abilities: { first: 'Cursed Body' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Purple',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'onix',
      {
        species: 'Onix',
        num: 95,
        types: [ 'Rock', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70,
        },
        abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Weak Armor' },
        heightm: 8.8,
        weightkg: 210,
        color: 'Gray',
        evos: [ 'steelix' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'drowzee',
      {
        species: 'Drowzee',
        num: 96,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42,
        },
        abilities: { first: 'Insomnia', second: 'Forewarn', hidden: 'Inner Focus' },
        heightm: 1,
        weightkg: 32.4,
        color: 'Yellow',
        evos: [ 'hypno' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'hypno',
      {
        species: 'Hypno',
        num: 97,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67,
        },
        abilities: { first: 'Insomnia', second: 'Forewarn', hidden: 'Inner Focus' },
        heightm: 1.6,
        weightkg: 75.6,
        color: 'Yellow',
        prevo: 'drowzee',
        evoLevel: 26,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'krabby',
      {
        species: 'Krabby',
        num: 98,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50,
        },
        abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Sheer Force' },
        heightm: 0.4,
        weightkg: 6.5,
        color: 'Red',
        evos: [ 'kingler' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'kingler',
      {
        species: 'Kingler',
        num: 99,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75,
        },
        abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Sheer Force' },
        heightm: 1.3,
        weightkg: 60,
        color: 'Red',
        prevo: 'krabby',
        evoLevel: 28,
        eggGroups: [ 'Water 3' ],
        otherFormes: [ 'kinglergmax' ],
      }
    ],
    [
      'kinglergmax',
      {
        species: 'Kingler-Gmax',
        baseSpecies: 'kingler',
        num: 99,
        types: [ 'Water' ],
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75,
        },
        abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Sheer Force' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Red',
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'voltorb',
      {
        species: 'Voltorb',
        num: 100,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100,
        },
        abilities: { first: 'Soundproof', second: 'Static', hidden: 'Aftermath' },
        heightm: 0.5,
        weightkg: 10.4,
        color: 'Red',
        evos: [ 'electrode' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'electrode',
      {
        species: 'Electrode',
        num: 101,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150,
        },
        abilities: { first: 'Soundproof', second: 'Static', hidden: 'Aftermath' },
        heightm: 1.2,
        weightkg: 66.6,
        color: 'Red',
        prevo: 'voltorb',
        evoLevel: 30,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'exeggcute',
      {
        species: 'Exeggcute',
        num: 102,
        types: [ 'Grass', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Harvest' },
        heightm: 0.4,
        weightkg: 2.5,
        color: 'Pink',
        evos: [ 'exeggutor', 'exeggutoralola' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'exeggutor',
      {
        species: 'Exeggutor',
        num: 103,
        types: [ 'Grass', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Harvest' },
        heightm: 2,
        weightkg: 120,
        color: 'Yellow',
        prevo: 'exeggcute',
        evoLevel: 'use Leaf Stone',
        eggGroups: [ 'Grass' ],
        otherFormes: [ 'exeggutoralola' ],
      }
    ],
    [
      'exeggutoralola',
      {
        species: 'Exeggutor-Alola',
        num: 103,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Exeggutor',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 95, atk: 105, def: 85, spa: 125, spd: 75, spe: 45,
        },
        abilities: { first: 'Frisk', hidden: 'Harvest' },
        heightm: 10.9,
        weightkg: 415.6,
        color: 'Yellow',
        prevo: 'exeggcute',
        evoLevel: 'use Leaf Stone',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'cubone',
      {
        species: 'Cubone',
        num: 104,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35,
        },
        abilities: { first: 'Rock Head', second: 'Lightning Rod', hidden: 'Battle Armor' },
        heightm: 0.4,
        weightkg: 6.5,
        color: 'Brown',
        evos: [ 'marowak', 'marowakalola' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'marowak',
      {
        species: 'Marowak',
        num: 105,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45,
        },
        abilities: { first: 'Rock Head', second: 'Lightning Rod', hidden: 'Battle Armor' },
        heightm: 1,
        weightkg: 45,
        color: 'Brown',
        prevo: 'cubone',
        evoLevel: 28,
        eggGroups: [ 'Monster' ],
        otherFormes: [ 'marowakalola', 'marowakalolatotem' ],
      }
    ],
    [
      'marowakalola',
      {
        species: 'Marowak-Alola',
        num: 105,
        types: [ 'Fire', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Marowak',
        forme: 'Alola',
        formeLetter: 'A',
        baseStats: {
          hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45,
        },
        abilities: { first: 'Cursed Body', second: 'Lightning Rod', hidden: 'Rock Head' },
        heightm: 1,
        weightkg: 34,
        color: 'Purple',
        prevo: 'cubone',
        evoLevel: 28,
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'marowakalolatotem',
      {
        species: 'Marowak-Alola-Totem',
        num: 105,
        types: [ 'Fire', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Marowak',
        forme: 'Alola-Totem',
        formeLetter: 'T',
        baseStats: {
          hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45,
        },
        abilities: { first: 'Rock Head' },
        heightm: 1.7,
        weightkg: 98,
        color: 'Purple',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'hitmonlee',
      {
        species: 'Hitmonlee',
        num: 106,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87,
        },
        abilities: { first: 'Limber', second: 'Reckless', hidden: 'Unburden' },
        heightm: 1.5,
        weightkg: 49.8,
        color: 'Brown',
        prevo: 'tyrogue',
        evoLevel: 'Level 20 with higher Attack',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'hitmonchan',
      {
        species: 'Hitmonchan',
        num: 107,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76,
        },
        abilities: { first: 'Keen Eye', second: 'Iron Fist', hidden: 'Inner Focus' },
        heightm: 1.4,
        weightkg: 50.2,
        color: 'Brown',
        prevo: 'tyrogue',
        evoLevel: 'Level 20 with higher defense',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'lickitung',
      {
        species: 'Lickitung',
        num: 108,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30,
        },
        abilities: { first: 'Own Tempo', second: 'Oblivious', hidden: 'Cloud Nine' },
        heightm: 1.2,
        weightkg: 65.5,
        color: 'Pink',
        evos: [ 'lickilicky' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'koffing',
      {
        species: 'Koffing',
        num: 109,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.6,
        weightkg: 1,
        color: 'Purple',
        evos: [ 'weezing' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'weezing',
      {
        species: 'Weezing',
        num: 110,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.2,
        weightkg: 9.5,
        color: 'Purple',
        prevo: 'koffing',
        evoLevel: 35,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'rhyhorn',
      {
        species: 'Rhyhorn',
        num: 111,
        types: [ 'Ground', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25,
        },
        abilities: { first: 'Lightning Rod', second: 'Rock Head', hidden: 'Reckless' },
        heightm: 1,
        weightkg: 115,
        color: 'Gray',
        evos: [ 'rhydon' ],
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'rhydon',
      {
        species: 'Rhydon',
        num: 112,
        types: [ 'Ground', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40,
        },
        abilities: { first: 'Lightning Rod', second: 'Rock Head', hidden: 'Reckless' },
        heightm: 1.9,
        weightkg: 120,
        color: 'Gray',
        prevo: 'rhyhorn',
        evos: [ 'rhyperior' ],
        evoLevel: 42,
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'chansey',
      {
        species: 'Chansey',
        num: 113,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50,
        },
        abilities: { first: 'Natural Cure', second: 'Serene Grace', hidden: 'Healer' },
        heightm: 1.1,
        weightkg: 34.6,
        color: 'Pink',
        prevo: 'happiny',
        evos: [ 'blissey' ],
        evoLevel: 'Hold Oval Stone, Level Up',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'tangela',
      {
        species: 'Tangela',
        num: 114,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60,
        },
        abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Regenerator' },
        heightm: 1,
        weightkg: 35,
        color: 'Blue',
        evos: [ 'tangrowth' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'kangaskhan',
      {
        species: 'Kangaskhan',
        num: 115,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90,
        },
        abilities: { first: 'Early Bird', second: 'Scrappy', hidden: 'Inner Focus' },
        heightm: 2.2,
        weightkg: 80,
        color: 'Brown',
        eggGroups: [ 'Monster' ],
        otherFormes: [ 'kangaskhanmega' ],
      }
    ],
    [
      'kangaskhanmega',
      {
        species: 'Kangaskhan-Mega',
        num: 115,
        types: [ 'Normal' ],
        baseSpecies: 'Kangaskhan',
        forme: 'Mega',
        formeLetter: 'M',
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 105, atk: 125, def: 100, spa: 60, spd: 100, spe: 100,
        },
        abilities: { first: 'Parental Bond' },
        heightm: 2.2,
        weightkg: 100,
        color: 'Brown',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'horsea',
      {
        species: 'Horsea',
        num: 116,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60,
        },
        abilities: { first: 'Swift Swim', second: 'Sniper', hidden: 'Damp' },
        heightm: 0.4,
        weightkg: 8,
        color: 'Blue',
        evos: [ 'seadra' ],
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'seadra',
      {
        species: 'Seadra',
        num: 117,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85,
        },
        abilities: { first: 'Poison Point', second: 'Sniper', hidden: 'Damp' },
        heightm: 1.2,
        weightkg: 25,
        color: 'Blue',
        prevo: 'horsea',
        evos: [ 'kingdra' ],
        evoLevel: 32,
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'goldeen',
      {
        species: 'Goldeen',
        num: 118,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63,
        },
        abilities: { first: 'Swift Swim', second: 'Water Veil', hidden: 'Lightning Rod' },
        heightm: 0.6,
        weightkg: 15,
        color: 'Red',
        evos: [ 'seaking' ],
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'seaking',
      {
        species: 'Seaking',
        num: 119,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68,
        },
        abilities: { first: 'Swift Swim', second: 'Water Veil', hidden: 'Lightning Rod' },
        heightm: 1.3,
        weightkg: 39,
        color: 'Red',
        prevo: 'goldeen',
        evoLevel: 33,
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'staryu',
      {
        species: 'Staryu',
        num: 120,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85,
        },
        abilities: { first: 'Illuminate', second: 'Natural Cure', hidden: 'Analytic' },
        heightm: 0.8,
        weightkg: 34.5,
        color: 'Brown',
        evos: [ 'starmie' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'starmie',
      {
        species: 'Starmie',
        num: 121,
        types: [ 'Water', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115,
        },
        abilities: { first: 'Illuminate', second: 'Natural Cure', hidden: 'Analytic' },
        heightm: 1.1,
        weightkg: 80,
        color: 'Purple',
        prevo: 'staryu',
        evoLevel: 'use Water Stone',
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'mrmime',
      {
        species: 'Mr. Mime',
        num: 122,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90,
        },
        abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
        heightm: 1.3,
        weightkg: 54.5,
        color: 'Pink',
        prevo: 'mimejr',
        evoLevel: 'Level up while knowing Mimic',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'mrmimegalar',
      {
        species: 'Mr. Mime-Galar',
        num: 122,
        types: [ 'Ice', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Mr. Mime',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 50, atk: 65, def: 65, spa: 90, spd: 90, spe: 100,
        },
        abilities: { first: 'Vital Spirit', second: 'Screen Cleaner', hidden: 'Ice Body' },
        heightm: 1.40,
        weightkg: 56.8,
        color: 'White',
        evos: [ 'mrrime' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'scyther',
      {
        species: 'Scyther',
        num: 123,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105,
        },
        abilities: { first: 'Swarm', second: 'Technician', hidden: 'Steadfast' },
        heightm: 1.5,
        weightkg: 56,
        color: 'Green',
        evos: [ 'scizor' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'jynx',
      {
        species: 'Jynx',
        num: 124,
        types: [ 'Ice', 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95,
        },
        abilities: { first: 'Oblivious', second: 'Forewarn', hidden: 'Dry Skin' },
        heightm: 1.4,
        weightkg: 40.6,
        color: 'Red',
        prevo: 'smoochum',
        evoLevel: 30,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'electabuzz',
      {
        species: 'Electabuzz',
        num: 125,
        types: [ 'Electric' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105,
        },
        abilities: { first: 'Static', hidden: 'Vital Spirit' },
        heightm: 1.1,
        weightkg: 30,
        color: 'Yellow',
        prevo: 'elekid',
        evos: [ 'electivire' ],
        evoLevel: 30,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'magmar',
      {
        species: 'Magmar',
        num: 126,
        types: [ 'Fire' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93,
        },
        abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
        heightm: 1.3,
        weightkg: 44.5,
        color: 'Red',
        prevo: 'magby',
        evos: [ 'magmortar' ],
        evoLevel: 30,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'pinsir',
      {
        species: 'Pinsir',
        num: 127,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85,
        },
        abilities: { first: 'Hyper Cutter', second: 'Mold Breaker', hidden: 'Moxie' },
        heightm: 1.5,
        weightkg: 55,
        color: 'Brown',
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'pinsirmega' ],
      }
    ],
    [
      'pinsirmega',
      {
        species: 'Pinsir-Mega',
        num: 127,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Pinsir',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 65, atk: 155, def: 120, spa: 65, spd: 90, spe: 105,
        },
        abilities: { first: 'Aerilate' },
        heightm: 1.7,
        weightkg: 59,
        color: 'Brown',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'tauros',
      {
        species: 'Tauros',
        num: 128,
        types: [ 'Normal' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110,
        },
        abilities: { first: 'Intimidate', second: 'Anger Point', hidden: 'Sheer Force' },
        heightm: 1.4,
        weightkg: 88.4,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'magikarp',
      {
        species: 'Magikarp',
        num: 129,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80,
        },
        abilities: { first: 'Swift Swim', hidden: 'Rattled' },
        heightm: 0.9,
        weightkg: 10,
        color: 'Red',
        evos: [ 'gyarados' ],
        eggGroups: [ 'Water 2', 'Dragon' ],
      }
    ],
    [
      'gyarados',
      {
        species: 'Gyarados',
        num: 130,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81,
        },
        abilities: { first: 'Intimidate', hidden: 'Moxie' },
        heightm: 6.5,
        weightkg: 235,
        color: 'Blue',
        prevo: 'magikarp',
        evoLevel: 20,
        eggGroups: [ 'Water 2', 'Dragon' ],
        otherFormes: [ 'gyaradosmega' ],
      }
    ],
    [
      'gyaradosmega',
      {
        species: 'Gyarados-Mega',
        num: 130,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Gyarados',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 95, atk: 155, def: 109, spa: 70, spd: 130, spe: 81,
        },
        abilities: { first: 'Mold Breaker' },
        heightm: 6.5,
        weightkg: 305,
        color: 'Blue',
        eggGroups: [ 'Water 2', 'Dragon' ],
      }
    ],
    [
      'lapras',
      {
        species: 'Lapras',
        num: 131,
        types: [ 'Water', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60,
        },
        abilities: { first: 'Water Absorb', second: 'Shell Armor', hidden: 'Hydration' },
        heightm: 2.5,
        weightkg: 220,
        color: 'Blue',
        eggGroups: [ 'Monster', 'Water 1' ],
        otherFormes: [ 'laprasgmax' ],
      }
    ],
    [
      'laprasgmax',
      {
        species: 'Lapras-Gmax',
        baseSpecies: 'Lapras',
        num: 131,
        types: [ 'Water', 'Ice' ],
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60,
        },
        abilities: { first: 'Water Absorb', second: 'Shell Armor', hidden: 'Hydration' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Blue',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'ditto',
      {
        species: 'Ditto',
        num: 132,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48,
        },
        abilities: { first: 'Limber', hidden: 'Imposter' },
        heightm: 0.3,
        weightkg: 4,
        color: 'Purple',
        eggGroups: [ 'Ditto' ],
      }
    ],
    [
      'eevee',
      {
        species: 'Eevee',
        num: 133,
        types: [ 'Normal' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55,
        },
        abilities: { first: 'Run Away', second: 'Adaptability', hidden: 'Anticipation' },
        heightm: 0.3,
        weightkg: 6.5,
        color: 'Brown',
        evos: [
          'vaporeon', 'jolteon',
          'flareon', 'espeon',
          'umbreon', 'leafeon',
          'glaceon', 'sylveon'
        ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'eeveestarter', 'eeveegmax' ],
      }
    ],
    [
      'eeveestarter',
      {
        species: 'Eevee-Starter',
        num: 133,
        types: [ 'Normal' ],
        baseSpecies: 'Eevee',
        forme: 'Starter',
        formeLetter: 'S',
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 75, def: 70, spa: 65, spd: 85, spe: 75,
        },
        abilities: { first: 'Run Away', second: 'Adaptability', hidden: 'Anticipation' },
        heightm: 0.3,
        weightkg: 6.5,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'eeveegmax',
      {
        species: 'Eevee-Gmax',
        baseSpecies: 'Eevee',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 133,
        types: [ 'Normal' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55,
        },
        abilities: { first: 'Run Away', second: 'Adaptability', hidden: 'Anticipation' },
        heightm: 18,
        weightkg: 0,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'vaporeon',
      {
        species: 'Vaporeon',
        num: 134,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65,
        },
        abilities: { first: 'Water Absorb', hidden: 'Hydration' },
        heightm: 1,
        weightkg: 29,
        color: 'Blue',
        prevo: 'eevee',
        evoLevel: 'use Water Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'jolteon',
      {
        species: 'Jolteon',
        num: 135,
        types: [ 'Electric' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130,
        },
        abilities: { first: 'Volt Absorb', hidden: 'Quick Feet' },
        heightm: 0.8,
        weightkg: 24.5,
        color: 'Yellow',
        prevo: 'eevee',
        evoLevel: 'use Thunder Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'flareon',
      {
        species: 'Flareon',
        num: 136,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65,
        },
        abilities: { first: 'Flash Fire', hidden: 'Guts' },
        heightm: 0.9,
        weightkg: 25,
        color: 'Red',
        prevo: 'eevee',
        evoLevel: 'use Fire Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'porygon',
      {
        species: 'Porygon',
        num: 137,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40,
        },
        abilities: { first: 'Trace', second: 'Download', hidden: 'Analytic' },
        heightm: 0.8,
        weightkg: 36.5,
        color: 'Pink',
        evos: [ 'porygon2' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'omanyte',
      {
        species: 'Omanyte',
        num: 138,
        types: [ 'Rock', 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35,
        },
        abilities: { first: 'Swift Swim', second: 'Shell Armor', hidden: 'Weak Armor' },
        heightm: 0.4,
        weightkg: 7.5,
        color: 'Blue',
        evos: [ 'omastar' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'omastar',
      {
        species: 'Omastar',
        num: 139,
        types: [ 'Rock', 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55,
        },
        abilities: { first: 'Swift Swim', second: 'Shell Armor', hidden: 'Weak Armor' },
        heightm: 1,
        weightkg: 35,
        color: 'Blue',
        prevo: 'omanyte',
        evoLevel: 40,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'kabuto',
      {
        species: 'Kabuto',
        num: 140,
        types: [ 'Rock', 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55,
        },
        abilities: { first: 'Swift Swim', second: 'Battle Armor', hidden: 'Weak Armor' },
        heightm: 0.5,
        weightkg: 11.5,
        color: 'Brown',
        evos: [ 'kabutops' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'kabutops',
      {
        species: 'Kabutops',
        num: 141,
        types: [ 'Rock', 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80,
        },
        abilities: { first: 'Swift Swim', second: 'Battle Armor', hidden: 'Weak Armor' },
        heightm: 1.3,
        weightkg: 40.5,
        color: 'Brown',
        prevo: 'kabuto',
        evoLevel: 40,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'aerodactyl',
      {
        species: 'Aerodactyl',
        num: 142,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130,
        },
        abilities: { first: 'Rock Head', second: 'Pressure', hidden: 'Unnerve' },
        heightm: 1.8,
        weightkg: 59,
        color: 'Purple',
        eggGroups: [ 'Flying' ],
        otherFormes: [ 'aerodactylmega' ],
      }
    ],
    [
      'aerodactylmega',
      {
        species: 'Aerodactyl-Mega',
        num: 142,
        types: [ 'Rock', 'Flying' ],
        baseSpecies: 'Aerodactyl',
        forme: 'Mega',
        formeLetter: 'M',
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 135, def: 85, spa: 70, spd: 95, spe: 150,
        },
        abilities: { first: 'Tough Claws' },
        heightm: 2.1,
        weightkg: 79,
        color: 'Purple',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'snorlax',
      {
        species: 'Snorlax',
        num: 143,
        types: [ 'Normal' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30,
        },
        abilities: { first: 'Immunity', second: 'Thick Fat', hidden: 'Gluttony' },
        heightm: 2.1,
        weightkg: 460,
        color: 'Black',
        prevo: 'munchlax',
        evoLevel: 'Level up with High Friendship',
        eggGroups: [ 'Monster' ],
        otherFormes: [ 'snorlaxgmax' ],
      }
    ],
    [
      'snorlaxgmax',
      {
        species: 'Snorlax-Gmax',
        baseSpecies: 'Snorlax',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 143,
        types: [ 'Normal' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30,
        },
        abilities: { first: 'Immunity', second: 'Thick Fat', hidden: 'Gluttony' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Black',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'articuno',
      {
        species: 'Articuno',
        num: 144,
        types: [ 'Ice', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85,
        },
        abilities: { first: 'Pressure', hidden: 'Snow Cloak' },
        heightm: 1.7,
        weightkg: 55.4,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'zapdos',
      {
        species: 'Zapdos',
        num: 145,
        types: [ 'Electric', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100,
        },
        abilities: { first: 'Pressure', hidden: 'Static' },
        heightm: 1.6,
        weightkg: 52.6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'moltres',
      {
        species: 'Moltres',
        num: 146,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90,
        },
        abilities: { first: 'Pressure', hidden: 'Flame Body' },
        heightm: 2,
        weightkg: 60,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'dratini',
      {
        species: 'Dratini',
        num: 147,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50,
        },
        abilities: { first: 'Shed Skin', hidden: 'Marvel Scale' },
        heightm: 1.8,
        weightkg: 3.3,
        color: 'Blue',
        evos: [ 'dragonair' ],
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'dragonair',
      {
        species: 'Dragonair',
        num: 148,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70,
        },
        abilities: { first: 'Shed Skin', hidden: 'Marvel Scale' },
        heightm: 4,
        weightkg: 16.5,
        color: 'Blue',
        prevo: 'dratini',
        evos: [ 'dragonite' ],
        evoLevel: 30,
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'dragonite',
      {
        species: 'Dragonite',
        num: 149,
        types: [ 'Dragon', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80,
        },
        abilities: { first: 'Inner Focus', hidden: 'Multiscale' },
        heightm: 2.2,
        weightkg: 210,
        color: 'Brown',
        prevo: 'dragonair',
        evoLevel: 55,
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'mewtwo',
      {
        species: 'Mewtwo',
        num: 150,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130,
        },
        abilities: { first: 'Pressure', hidden: 'Unnerve' },
        heightm: 2,
        weightkg: 122,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'mewtwomegax', 'mewtwomegay' ],
      }
    ],
    [
      'mewtwomegax',
      {
        species: 'Mewtwo-Mega-X',
        num: 150,
        types: [ 'Psychic', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 106, atk: 190, def: 100, spa: 154, spd: 100, spe: 130,
        },
        baseSpecies: 'Mewtwo',
        forme: 'Mega-X',
        formeLetter: 'M',
        abilities: { first: 'Steadfast' },
        heightm: 2.3,
        weightkg: 127,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'mewtwomegay',
      {
        species: 'Mewtwo-Mega-Y',
        num: 150,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 106, atk: 150, def: 70, spa: 194, spd: 120, spe: 140,
        },
        baseSpecies: 'Mewtwo',
        forme: 'Mega-Y',
        formeLetter: 'M',
        abilities: { first: 'Insomnia' },
        heightm: 1.5,
        weightkg: 33,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'mew',
      {
        species: 'Mew',
        num: 151,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Synchronize' },
        heightm: 0.4,
        weightkg: 4,
        color: 'Pink',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'chikorita',
      {
        species: 'Chikorita',
        num: 152,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45,
        },
        abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
        heightm: 0.9,
        weightkg: 6.4,
        color: 'Green',
        evos: [ 'bayleef' ],
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'bayleef',
      {
        species: 'Bayleef',
        num: 153,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60,
        },
        abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
        heightm: 1.2,
        weightkg: 15.8,
        color: 'Green',
        prevo: 'chikorita',
        evos: [ 'meganium' ],
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'meganium',
      {
        species: 'Meganium',
        num: 154,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80,
        },
        abilities: { first: 'Overgrow', hidden: 'Leaf Guard' },
        heightm: 1.8,
        weightkg: 100.5,
        color: 'Green',
        prevo: 'bayleef',
        evoLevel: 32,
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'cyndaquil',
      {
        species: 'Cyndaquil',
        num: 155,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65,
        },
        abilities: { first: 'Blaze', hidden: 'Flash Fire' },
        heightm: 0.5,
        weightkg: 7.9,
        color: 'Yellow',
        evos: [ 'quilava' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'quilava',
      {
        species: 'Quilava',
        num: 156,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80,
        },
        abilities: { first: 'Blaze', hidden: 'Flash Fire' },
        heightm: 0.9,
        weightkg: 19,
        color: 'Yellow',
        prevo: 'cyndaquil',
        evos: [ 'typhlosion' ],
        evoLevel: 14,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'typhlosion',
      {
        species: 'Typhlosion',
        num: 157,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100,
        },
        abilities: { first: 'Blaze', hidden: 'Flash Fire' },
        heightm: 1.7,
        weightkg: 79.5,
        color: 'Yellow',
        prevo: 'quilava',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'totodile',
      {
        species: 'Totodile',
        num: 158,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43,
        },
        abilities: { first: 'Torrent', hidden: 'Sheer Force' },
        heightm: 0.6,
        weightkg: 9.5,
        color: 'Blue',
        evos: [ 'croconaw' ],
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'croconaw',
      {
        species: 'Croconaw',
        num: 159,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58,
        },
        abilities: { first: 'Torrent', hidden: 'Sheer Force' },
        heightm: 1.1,
        weightkg: 25,
        color: 'Blue',
        prevo: 'totodile',
        evos: [ 'feraligatr' ],
        evoLevel: 18,
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'feraligatr',
      {
        species: 'Feraligatr',
        num: 160,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78,
        },
        abilities: { first: 'Torrent', hidden: 'Sheer Force' },
        heightm: 2.3,
        weightkg: 88.8,
        color: 'Blue',
        prevo: 'croconaw',
        evoLevel: 30,
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'sentret',
      {
        species: 'Sentret',
        num: 161,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20,
        },
        abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Frisk' },
        heightm: 0.8,
        weightkg: 6,
        color: 'Brown',
        evos: [ 'furret' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'furret',
      {
        species: 'Furret',
        num: 162,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90,
        },
        abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Frisk' },
        heightm: 1.8,
        weightkg: 32.5,
        color: 'Brown',
        prevo: 'sentret',
        evoLevel: 15,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'hoothoot',
      {
        species: 'Hoothoot',
        num: 163,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50,
        },
        abilities: { first: 'Insomnia', second: 'Keen Eye', hidden: 'Tinted Lens' },
        heightm: 0.7,
        weightkg: 21.2,
        color: 'Brown',
        evos: [ 'noctowl' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'noctowl',
      {
        species: 'Noctowl',
        num: 164,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 50, def: 50, spa: 86, spd: 96, spe: 70,
        },
        abilities: { first: 'Insomnia', second: 'Keen Eye', hidden: 'Tinted Lens' },
        heightm: 1.6,
        weightkg: 40.8,
        color: 'Brown',
        prevo: 'hoothoot',
        evoLevel: 20,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'ledyba',
      {
        species: 'Ledyba',
        num: 165,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55,
        },
        abilities: { first: 'Swarm', second: 'Early Bird', hidden: 'Rattled' },
        heightm: 1,
        weightkg: 10.8,
        color: 'Red',
        evos: [ 'ledian' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'ledian',
      {
        species: 'Ledian',
        num: 166,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85,
        },
        abilities: { first: 'Swarm', second: 'Early Bird', hidden: 'Iron Fist' },
        heightm: 1.4,
        weightkg: 35.6,
        color: 'Red',
        prevo: 'ledyba',
        evoLevel: 18,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'spinarak',
      {
        species: 'Spinarak',
        num: 167,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30,
        },
        abilities: { first: 'Swarm', second: 'Insomnia', hidden: 'Sniper' },
        heightm: 0.5,
        weightkg: 8.5,
        color: 'Green',
        evos: [ 'ariados' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'ariados',
      {
        species: 'Ariados',
        num: 168,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 90, def: 70, spa: 60, spd: 70, spe: 40,
        },
        abilities: { first: 'Swarm', second: 'Insomnia', hidden: 'Sniper' },
        heightm: 1.1,
        weightkg: 33.5,
        color: 'Red',
        prevo: 'spinarak',
        evoLevel: 22,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'crobat',
      {
        species: 'Crobat',
        num: 169,
        types: [ 'Poison', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130,
        },
        abilities: { first: 'Inner Focus', hidden: 'Infiltrator' },
        heightm: 1.8,
        weightkg: 75,
        color: 'Purple',
        prevo: 'golbat',
        evoLevel: 23,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'chinchou',
      {
        species: 'Chinchou',
        num: 170,
        types: [ 'Water', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67,
        },
        abilities: { first: 'Volt Absorb', second: 'Illuminate', hidden: 'Water Absorb' },
        heightm: 0.5,
        weightkg: 12,
        color: 'Blue',
        evos: [ 'lanturn' ],
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'lanturn',
      {
        species: 'Lanturn',
        num: 171,
        types: [ 'Water', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67,
        },
        abilities: { first: 'Volt Absorb', second: 'Illuminate', hidden: 'Water Absorb' },
        heightm: 1.2,
        weightkg: 22.5,
        color: 'Blue',
        prevo: 'chinchou',
        evoLevel: 27,
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'pichu',
      {
        species: 'Pichu',
        num: 172,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60,
        },
        abilities: { first: 'Static', hidden: 'Lightning Rod' },
        heightm: 0.3,
        weightkg: 2,
        color: 'Yellow',
        evos: [ 'pikachu' ],
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pichuspikyeared' ],
      }
    ],
    [
      'pichuspikyeared',
      {
        species: 'Pichu-Spiky-Eared',
        num: 172,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60,
        },
        baseSpecies: 'Pichu',
        forme: 'Spiky-eared',
        formeLetter: 'S',
        abilities: { first: 'Static' },
        heightm: 0.3,
        weightkg: 2,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'cleffa',
      {
        species: 'Cleffa',
        num: 173,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15,
        },
        abilities: { first: 'Cute Charm', second: 'Magic Guard', hidden: 'Friend Guard' },
        heightm: 0.3,
        weightkg: 3,
        color: 'Pink',
        evos: [ 'clefairy' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'igglybuff',
      {
        species: 'Igglybuff',
        num: 174,
        types: [ 'Normal', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15,
        },
        abilities: { first: 'Cute Charm', second: 'Competitive', hidden: 'Friend Guard' },
        heightm: 0.3,
        weightkg: 1,
        color: 'Pink',
        evos: [ 'jigglypuff' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'togepi',
      {
        species: 'Togepi',
        num: 175,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20,
        },
        abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
        heightm: 0.3,
        weightkg: 1.5,
        color: 'White',
        evos: [ 'togetic' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'togetic',
      {
        species: 'Togetic',
        num: 176,
        types: [ 'Fairy', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40,
        },
        abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
        heightm: 0.6,
        weightkg: 3.2,
        color: 'White',
        prevo: 'togepi',
        evos: [ 'togekiss' ],
        evoLevel: 2,
        eggGroups: [ 'Flying', 'Fairy' ],
      }
    ],
    [
      'natu',
      {
        species: 'Natu',
        num: 177,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70,
        },
        abilities: { first: 'Synchronize', second: 'Early Bird', hidden: 'Magic Bounce' },
        heightm: 0.2,
        weightkg: 2,
        color: 'Green',
        evos: [ 'xatu' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'xatu',
      {
        species: 'Xatu',
        num: 178,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95,
        },
        abilities: { first: 'Synchronize', second: 'Early Bird', hidden: 'Magic Bounce' },
        heightm: 1.5,
        weightkg: 15,
        color: 'Green',
        prevo: 'natu',
        evoLevel: 25,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'mareep',
      {
        species: 'Mareep',
        num: 179,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35,
        },
        abilities: { first: 'Static', hidden: 'Plus' },
        heightm: 0.6,
        weightkg: 7.8,
        color: 'White',
        evos: [ 'flaaffy' ],
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'flaaffy',
      {
        species: 'Flaaffy',
        num: 180,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45,
        },
        abilities: { first: 'Static', hidden: 'Plus' },
        heightm: 0.8,
        weightkg: 13.3,
        color: 'Pink',
        prevo: 'mareep',
        evos: [ 'ampharos' ],
        evoLevel: 15,
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'ampharos',
      {
        species: 'Ampharos',
        num: 181,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55,
        },
        abilities: { first: 'Static', hidden: 'Plus' },
        heightm: 1.4,
        weightkg: 61.5,
        color: 'Yellow',
        prevo: 'flaaffy',
        evoLevel: 30,
        eggGroups: [ 'Monster', 'Field' ],
        otherFormes: [ 'ampharosmega' ],
      }
    ],
    [
      'ampharosmega',
      {
        species: 'Ampharos-Mega',
        num: 181,
        types: [ 'Electric', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 95, def: 105, spa: 165, spd: 110, spe: 45,
        },
        baseSpecies: 'Ampharos',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Mold Breaker' },
        heightm: 1.4,
        weightkg: 61.5,
        color: 'Yellow',
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'bellossom',
      {
        species: 'Bellossom',
        num: 182,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 80, def: 95, spa: 90, spd: 100, spe: 50,
        },
        abilities: { first: 'Chlorophyll', hidden: 'Healer' },
        heightm: 0.4,
        weightkg: 5.8,
        color: 'Green',
        prevo: 'gloom',
        evoLevel: 'use Sun Stone',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'marill',
      {
        species: 'Marill',
        num: 183,
        types: [ 'Water', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40,
        },
        abilities: { first: 'Thick Fat', second: 'Huge Power', hidden: 'Sap Sipper' },
        heightm: 0.4,
        weightkg: 8.5,
        color: 'Blue',
        prevo: 'azurill',
        evos: [ 'azumarill' ],
        evoLevel: 'Level up with High Friendship',
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'azumarill',
      {
        species: 'Azumarill',
        num: 184,
        types: [ 'Water', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 50, def: 80, spa: 60, spd: 80, spe: 50,
        },
        abilities: { first: 'Thick Fat', second: 'Huge Power', hidden: 'Sap Sipper' },
        heightm: 0.8,
        weightkg: 28.5,
        color: 'Blue',
        prevo: 'marill',
        evoLevel: 18,
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'sudowoodo',
      {
        species: 'Sudowoodo',
        num: 185,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 100, def: 115, spa: 30, spd: 65, spe: 30,
        },
        abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Rattled' },
        heightm: 1.2,
        weightkg: 38,
        color: 'Brown',
        prevo: 'bonsly',
        evoLevel: 'Level up while knowing Mimic',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'politoed',
      {
        species: 'Politoed',
        num: 186,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70,
        },
        abilities: { first: 'Water Absorb', second: 'Damp', hidden: 'Drizzle' },
        heightm: 1.1,
        weightkg: 33.9,
        color: 'Green',
        prevo: 'poliwhirl',
        evoLevel: 'Trade while holding King\'s Rock',
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'hoppip',
      {
        species: 'Hoppip',
        num: 187,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50,
        },
        abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Infiltrator' },
        heightm: 0.4,
        weightkg: 0.5,
        color: 'Pink',
        evos: [ 'skiploom' ],
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'skiploom',
      {
        species: 'Skiploom',
        num: 188,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 45, def: 50, spa: 45, spd: 65, spe: 80,
        },
        abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Infiltrator' },
        heightm: 0.6,
        weightkg: 1,
        color: 'Green',
        prevo: 'hoppip',
        evos: [ 'jumpluff' ],
        evoLevel: 18,
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'jumpluff',
      {
        species: 'Jumpluff',
        num: 189,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 55, def: 70, spa: 55, spd: 95, spe: 110,
        },
        abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Infiltrator' },
        heightm: 0.8,
        weightkg: 3,
        color: 'Blue',
        prevo: 'skiploom',
        evoLevel: 27,
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'aipom',
      {
        species: 'Aipom',
        num: 190,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85,
        },
        abilities: { first: 'Run Away', second: 'Pickup', hidden: 'Skill Link' },
        heightm: 0.8,
        weightkg: 11.5,
        color: 'Purple',
        evos: [ 'ambipom' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'sunkern',
      {
        species: 'Sunkern',
        num: 191,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30,
        },
        abilities: { first: 'Chlorophyll', second: 'Solar Power', hidden: 'Early Bird' },
        heightm: 0.3,
        weightkg: 1.8,
        color: 'Yellow',
        evos: [ 'sunflora' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'sunflora',
      {
        species: 'Sunflora',
        num: 192,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 75, def: 55, spa: 105, spd: 85, spe: 30,
        },
        abilities: { first: 'Chlorophyll', second: 'Solar Power', hidden: 'Early Bird' },
        heightm: 0.8,
        weightkg: 8.5,
        color: 'Yellow',
        prevo: 'sunkern',
        evoLevel: 'use Sun Stone',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'yanma',
      {
        species: 'Yanma',
        num: 193,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95,
        },
        abilities: { first: 'Speed Boost', second: 'Compound Eyes', hidden: 'Frisk' },
        heightm: 1.2,
        weightkg: 38,
        color: 'Red',
        evos: [ 'yanmega' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'wooper',
      {
        species: 'Wooper',
        num: 194,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15,
        },
        abilities: { first: 'Damp', second: 'Water Absorb', hidden: 'Unaware' },
        heightm: 0.4,
        weightkg: 8.5,
        color: 'Blue',
        evos: [ 'quagsire' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'quagsire',
      {
        species: 'Quagsire',
        num: 195,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35,
        },
        abilities: { first: 'Damp', second: 'Water Absorb', hidden: 'Unaware' },
        heightm: 1.4,
        weightkg: 75,
        color: 'Blue',
        prevo: 'wooper',
        evoLevel: 20,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'espeon',
      {
        species: 'Eespeon',
        num: 196,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110,
        },
        abilities: { first: 'Synchronize', hidden: 'Magic Bounce' },
        heightm: 0.9,
        weightkg: 26.5,
        color: 'Purple',
        prevo: 'eevee',
        evoLevel: 'Level up during Daytime with High Friendship',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'umbreon',
      {
        species: 'Umbreon',
        num: 197,
        types: [ 'Dark' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65,
        },
        abilities: { first: 'Synchronize', hidden: 'Inner Focus' },
        heightm: 1,
        weightkg: 27,
        color: 'Black',
        prevo: 'eevee',
        evoLevel: 'Level up during Nighttime with High Friendship',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'murkrow',
      {
        species: 'Murkrow',
        num: 198,
        types: [ 'Dark', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91,
        },
        abilities: { first: 'Insomnia', second: 'Super Luck', hidden: 'Prankster' },
        heightm: 0.5,
        weightkg: 2.1,
        color: 'Black',
        evos: [ 'honchkrow' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'slowking',
      {
        species: 'Slowking',
        num: 199,
        types: [ 'Water', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30,
        },
        abilities: { first: 'Oblivious', second: 'Own Tempo', hidden: 'Regenerator' },
        heightm: 2,
        weightkg: 79.5,
        color: 'Pink',
        prevo: 'slowpoke',
        evoLevel: 'Trade while holding King\'s Rock',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'misdreavus',
      {
        species: 'Misdreavus',
        num: 200,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.7,
        weightkg: 1,
        color: 'Gray',
        evos: [ 'mismagius' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'unown',
      {
        species: 'Unown',
        num: 201,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48,
        },
        baseForme: 'A',
        abilities: { first: 'Levitate' },
        heightm: 0.5,
        weightkg: 5,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [
          'unownb', 'unownc',
          'unownd', 'unowne',
          'unownf', 'unowng',
          'unownh', 'unowni',
          'unownj', 'unownk',
          'unownl', 'unownm',
          'unownn', 'unowno',
          'unownp', 'unownq',
          'unownr', 'unowns',
          'unownt', 'unownu',
          'unownv', 'unownw',
          'unownx', 'unowny',
          'unownz', 'unownexclamation',
          'unownquestion'
        ],
      }
    ],
    [
      'wobbuffet',
      {
        species: 'Wobbuffet',
        num: 202,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33,
        },
        abilities: { first: 'Shadow Tag', hidden: 'Telepathy' },
        heightm: 1.3,
        weightkg: 28.5,
        color: 'Blue',
        prevo: 'wynaut',
        evoLevel: 15,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'girafarig',
      {
        species: 'Girafarig',
        num: 203,
        types: [ 'Normal', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85,
        },
        abilities: { first: 'Inner Focus', second: 'Early Bird', hidden: 'Sap Sipper' },
        heightm: 1.5,
        weightkg: 41.5,
        color: 'Yellow',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pineco',
      {
        species: 'Pineco',
        num: 204,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15,
        },
        abilities: { first: 'Sturdy', hidden: 'Overcoat' },
        heightm: 0.6,
        weightkg: 7.2,
        color: 'Gray',
        evos: [ 'forretress' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'forretress',
      {
        species: 'Forretress',
        num: 205,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40,
        },
        abilities: { first: 'Sturdy', hidden: 'Overcoat' },
        heightm: 1.2,
        weightkg: 125.8,
        color: 'Purple',
        prevo: 'pineco',
        evoLevel: 31,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'dunsparce',
      {
        species: 'Dunsparce',
        num: 206,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45,
        },
        abilities: { first: 'Serene Grace', second: 'Run Away', hidden: 'Rattled' },
        heightm: 1.5,
        weightkg: 14,
        color: 'Yellow',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gligar',
      {
        species: 'Gligar',
        num: 207,
        types: [ 'Ground', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85,
        },
        abilities: { first: 'Hyper Cutter', second: 'Sand Veil', hidden: 'Immunity' },
        heightm: 1.1,
        weightkg: 64.8,
        color: 'Purple',
        evos: [ 'gliscor' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'steelix',
      {
        species: 'Steelix',
        num: 208,
        types: [ 'Steel', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30,
        },
        abilities: { first: 'Rock Head', second: 'Sturdy', hidden: 'Sheer Force' },
        heightm: 9.2,
        weightkg: 400,
        color: 'Gray',
        prevo: 'onix',
        evoLevel: 'Trade while holding Metal Coat',
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'steelixmega' ],
      }
    ],
    [
      'steelixmega',
      {
        species: 'Steelix-Mega',
        num: 208,
        types: [ 'Steel', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 125, def: 230, spa: 55, spd: 95, spe: 30,
        },
        baseSpecies: 'Steelix',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Sand Force' },
        heightm: 10.5,
        weightkg: 740,
        color: 'Gray',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'snubbull',
      {
        species: 'Snubbull',
        num: 209,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30,
        },
        abilities: { first: 'Intimidate', second: 'Run Away', hidden: 'Rattled' },
        heightm: 0.6,
        weightkg: 7.8,
        color: 'Pink',
        evos: [ 'granbull' ],
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'granbull',
      {
        species: 'Granbull',
        num: 210,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45,
        },
        abilities: { first: 'Intimidate', second: 'Quick Feet', hidden: 'Rattled' },
        heightm: 1.4,
        weightkg: 48.7,
        color: 'Purple',
        prevo: 'snubbull',
        evoLevel: 23,
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'qwilfish',
      {
        species: 'Qwilfish',
        num: 211,
        types: [ 'Water', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85,
        },
        abilities: { first: 'Poison Point', second: 'Swift Swim', hidden: 'Intimidate' },
        heightm: 0.5,
        weightkg: 3.9,
        color: 'Gray',
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'scizor',
      {
        species: 'Scizor',
        num: 212,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65,
        },
        abilities: { first: 'Swarm', second: 'Technician', hidden: 'Light Metal' },
        heightm: 1.8,
        weightkg: 118,
        color: 'Red',
        prevo: 'scyther',
        evoLevel: 'Trade while holding Metal Coat',
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'scizormega' ],
      }
    ],
    [
      'scizormega',
      {
        species: 'Scizor-Mega',
        num: 212,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Scizor',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 70, atk: 150, def: 140, spa: 65, spd: 100, spe: 75,
        },
        abilities: { first: 'Technician' },
        heightm: 2,
        weightkg: 125,
        color: 'Red',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'shuckle',
      {
        species: 'Shuckle',
        num: 213,
        types: [ 'Bug', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5,
        },
        abilities: { first: 'Sturdy', second: 'Gluttony', hidden: 'Contrary' },
        heightm: 0.6,
        weightkg: 20.5,
        color: 'Yellow',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'heracross',
      {
        species: 'Heracross',
        num: 214,
        types: [ 'Bug', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85,
        },
        abilities: { first: 'Swarm', second: 'Guts', hidden: 'Moxie' },
        heightm: 1.5,
        weightkg: 54,
        color: 'Blue',
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'heracrossmega' ],
      }
    ],
    [
      'heracrossmega',
      {
        species: 'Heracross-Mega',
        num: 214,
        baseSpecies: 'Heracross',
        forme: 'Mega',
        formeLetter: 'M',
        types: [ 'Bug', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 185, def: 115, spa: 40, spd: 105, spe: 75,
        },
        abilities: { first: 'Skill Link' },
        heightm: 1.7,
        weightkg: 62.5,
        color: 'Blue',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'sneasel',
      {
        species: 'Sneasel',
        num: 215,
        types: [ 'Dark', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115,
        },
        abilities: { first: 'Inner Focus', second: 'Keen Eye', hidden: 'Pickpocket' },
        heightm: 0.9,
        weightkg: 28,
        color: 'Black',
        evos: [ 'weavile' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'teddiursa',
      {
        species: 'Teddiursa',
        num: 216,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40,
        },
        abilities: { first: 'Pickup', second: 'Quick Feet', hidden: 'Honey Gather' },
        heightm: 0.6,
        weightkg: 8.8,
        color: 'Brown',
        evos: [ 'ursaring' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'ursaring',
      {
        species: 'Ursaring',
        num: 217,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55,
        },
        abilities: { first: 'Guts', second: 'Quick Feet', hidden: 'Unnerve' },
        heightm: 1.8,
        weightkg: 125.8,
        color: 'Brown',
        prevo: 'teddiursa',
        evoLevel: 30,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'slugma',
      {
        species: 'Slugma',
        num: 218,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20,
        },
        abilities: { first: 'Magma Armor', second: 'Flame Body', hidden: 'Weak Armor' },
        heightm: 0.7,
        weightkg: 35,
        color: 'Red',
        evos: [ 'magcargo' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'magcargo',
      {
        species: 'Magcargo',
        num: 219,
        types: [ 'Fire', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 120, spa: 90, spd: 80, spe: 30,
        },
        abilities: { first: 'Magma Armor', second: 'Flame Body', hidden: 'Weak Armor' },
        heightm: 0.8,
        weightkg: 55,
        color: 'Red',
        prevo: 'slugma',
        evoLevel: 38,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'swinub',
      {
        species: 'Swinub',
        num: 220,
        types: [ 'Ice', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50,
        },
        abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
        heightm: 0.4,
        weightkg: 6.5,
        color: 'Brown',
        evos: [ 'piloswine' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'piloswine',
      {
        species: 'Piloswine',
        num: 221,
        types: [ 'Ice', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50,
        },
        abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
        heightm: 1.1,
        weightkg: 55.8,
        color: 'Brown',
        prevo: 'swinub',
        evos: [ 'mamoswine' ],
        evoLevel: 33,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'corsola',
      {
        species: 'Corsola',
        num: 222,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 55, def: 95, spa: 65, spd: 95, spe: 35,
        },
        abilities: { first: 'Hustle', second: 'Natural Cure', hidden: 'Regenerator' },
        heightm: 0.6,
        weightkg: 5,
        color: 'Pink',
        eggGroups: [ 'Water 1', 'Water 3' ],
        otherFormes: [ 'corsolagalar' ],
      }
    ],
    [
      'corsolagalar',
      {
        species: 'Corsola-Galar',
        num: 222,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Corsola',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 30,
        },
        abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
        heightm: 0.60,
        weightkg: 0.5,
        color: 'White',
        evos: [ 'cursola' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'remoraid',
      {
        species: 'Remoraid',
        num: 223,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65,
        },
        abilities: { first: 'Hustle', second: 'Sniper', hidden: 'Moody' },
        heightm: 0.6,
        weightkg: 12,
        color: 'Gray',
        evos: [ 'octillery' ],
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'octillery',
      {
        species: 'Octillery',
        num: 224,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45,
        },
        abilities: { first: 'Suction Cups', second: 'Sniper', hidden: 'Moody' },
        heightm: 0.9,
        weightkg: 28.5,
        color: 'Red',
        prevo: 'remoraid',
        evoLevel: 25,
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'delibird',
      {
        species: 'Delibird',
        num: 225,
        types: [ 'Ice', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75,
        },
        abilities: { first: 'Vital Spirit', second: 'Hustle', hidden: 'Insomnia' },
        heightm: 0.9,
        weightkg: 16,
        color: 'Red',
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'mantine',
      {
        species: 'Mantine',
        num: 226,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 40, def: 70, spa: 80, spd: 140, spe: 70,
        },
        abilities: { first: 'Swift Swim', second: 'Water Absorb', hidden: 'Water Veil' },
        heightm: 2.1,
        weightkg: 220,
        color: 'Purple',
        prevo: 'mantyke',
        evoLevel: 'Level up with Remoraid in party',
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'skarmory',
      {
        species: 'Skarmory',
        num: 227,
        types: [ 'Steel', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70,
        },
        abilities: { first: 'Keen Eye', second: 'Sturdy', hidden: 'Weak Armor' },
        heightm: 1.7,
        weightkg: 50.5,
        color: 'Gray',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'houndour',
      {
        species: 'Houndour',
        num: 228,
        types: [ 'Dark', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65,
        },
        abilities: { first: 'Early Bird', second: 'Flash Fire', hidden: 'Unnerve' },
        heightm: 0.6,
        weightkg: 10.8,
        color: 'Black',
        evos: [ 'houndoom' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'houndoom',
      {
        species: 'Houndoom',
        num: 229,
        types: [ 'Dark', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95,
        },
        abilities: { first: 'Early Bird', second: 'Flash Fire', hidden: 'Unnerve' },
        heightm: 1.4,
        weightkg: 35,
        color: 'Black',
        prevo: 'houndour',
        evoLevel: 24,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'houndoommega' ],
      }
    ],
    [
      'houndoommega',
      {
        species: 'Houndoom-Mega',
        num: 229,
        types: [ 'Dark', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Houndoom',
        forme: 'Mega',
        formeLetter: 'M',
        baseStats: {
          hp: 75, atk: 90, def: 90, spa: 140, spd: 90, spe: 115,
        },
        abilities: { first: 'Solar Power' },
        heightm: 1.9,
        weightkg: 49.5,
        color: 'Black',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'kingdra',
      {
        species: 'Kingdra',
        num: 230,
        types: [ 'Water', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85,
        },
        abilities: { first: 'Swift Swim', second: 'Sniper', hidden: 'Damp' },
        heightm: 1.8,
        weightkg: 152,
        color: 'Blue',
        prevo: 'seadra',
        evoLevel: 'Trade while holding Dragon Scale',
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'phanpy',
      {
        species: 'Phanpy',
        num: 231,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40,
        },
        abilities: { first: 'Pickup', hidden: 'Sand Veil' },
        heightm: 0.5,
        weightkg: 33.5,
        color: 'Blue',
        evos: [ 'donphan' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'donphan',
      {
        species: 'Donphan',
        num: 232,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50,
        },
        abilities: { first: 'Sturdy', hidden: 'Sand Veil' },
        heightm: 1.1,
        weightkg: 120,
        color: 'Gray',
        prevo: 'phanpy',
        evoLevel: 25,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'porygon2',
      {
        species: 'Porygon2',
        num: 233,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60,
        },
        abilities: { first: 'Trace', second: 'Download', hidden: 'Analytic' },
        heightm: 0.6,
        weightkg: 32.5,
        color: 'Red',
        prevo: 'porygon',
        evos: [ 'porygonz' ],
        evoLevel: 'Trade while holding Up-Grade',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'stantler',
      {
        species: 'Stantler',
        num: 234,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85,
        },
        abilities: { first: 'Intimidate', second: 'Frisk', hidden: 'Sap Sipper' },
        heightm: 1.4,
        weightkg: 71.2,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'smeargle',
      {
        species: 'Smeargle',
        num: 235,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75,
        },
        abilities: { first: 'Own Tempo', second: 'Technician', hidden: 'Moody' },
        heightm: 1.2,
        weightkg: 58,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'tyrogue',
      {
        species: 'Tyrogue',
        num: 236,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35,
        },
        abilities: { first: 'Guts', second: 'Steadfast', hidden: 'Vital Spirit' },
        heightm: 0.7,
        weightkg: 21,
        color: 'Purple',
        evos: [ 'hitmonlee', 'hitmonchan', 'hitmontop' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'hitmontop',
      {
        species: 'Hitmontop',
        num: 237,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70,
        },
        abilities: { first: 'Intimidate', second: 'Technician', hidden: 'Steadfast' },
        heightm: 1.4,
        weightkg: 48,
        color: 'Brown',
        prevo: 'tyrogue',
        evoLevel: 'Level 20 with Attack = Defense',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'smoochum',
      {
        species: 'Smoochum',
        num: 238,
        types: [ 'Ice', 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65,
        },
        abilities: { first: 'Oblivious', second: 'Forewarn', hidden: 'Hydration' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Pink',
        evos: [ 'jynx' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'elekid',
      {
        species: 'Elekid',
        num: 239,
        types: [ 'Electric' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 45, atk: 63, def: 37, spa: 65, spd: 55, spe: 95,
        },
        abilities: { first: 'Static', hidden: 'Vital Spirit' },
        heightm: 0.6,
        weightkg: 23.5,
        color: 'Yellow',
        evos: [ 'electabuzz' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'magby',
      {
        species: 'Magby',
        num: 240,
        types: [ 'Fire' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 45, atk: 75, def: 37, spa: 70, spd: 55, spe: 83,
        },
        abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
        heightm: 0.7,
        weightkg: 21.4,
        color: 'Red',
        evos: [ 'magmar' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'miltank',
      {
        species: 'Miltank',
        num: 241,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100,
        },
        abilities: { first: 'Thick Fat', second: 'Scrappy', hidden: 'Sap Sipper' },
        heightm: 1.2,
        weightkg: 75.5,
        color: 'Pink',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'blissey',
      {
        species: 'Blissey',
        num: 242,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55,
        },
        abilities: { first: 'Natural Cure', second: 'Serene Grace', hidden: 'Healer' },
        heightm: 1.5,
        weightkg: 46.8,
        color: 'Pink',
        prevo: 'chansey',
        evoLevel: 2,
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'raikou',
      {
        species: 'Raikou',
        num: 243,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115,
        },
        abilities: { first: 'Pressure', hidden: 'Inner Focus' },
        heightm: 1.9,
        weightkg: 178,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'entei',
      {
        species: 'Entei',
        num: 244,
        types: [ 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100,
        },
        abilities: { first: 'Pressure', hidden: 'Inner Focus' },
        heightm: 2.1,
        weightkg: 198,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'suicune',
      {
        species: 'Suicune',
        num: 245,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85,
        },
        abilities: { first: 'Pressure', hidden: 'Inner Focus' },
        heightm: 2,
        weightkg: 187,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'larvitar',
      {
        species: 'Larvitar',
        num: 246,
        types: [ 'Rock', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41,
        },
        abilities: { first: 'Guts', hidden: 'Sand Veil' },
        heightm: 0.6,
        weightkg: 72,
        color: 'Green',
        evos: [ 'pupitar' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'pupitar',
      {
        species: 'Pupitar',
        num: 247,
        types: [ 'Rock', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51,
        },
        abilities: { first: 'Shed Skin' },
        heightm: 1.2,
        weightkg: 152,
        color: 'Gray',
        prevo: 'larvitar',
        evos: [ 'tyranitar' ],
        evoLevel: 30,
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'tyranitar',
      {
        species: 'Tyranitar',
        num: 248,
        types: [ 'Rock', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61,
        },
        abilities: { first: 'Sand Stream', hidden: 'Unnerve' },
        heightm: 2,
        weightkg: 202,
        color: 'Green',
        prevo: 'pupitar',
        evoLevel: 55,
        eggGroups: [ 'Monster' ],
        otherFormes: [ 'tyranitarmega' ],
      }
    ],
    [
      'tyranitarmega',
      {
        species: 'Tyranitar-Mega',
        num: 248,
        types: [ 'Rock', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 164, def: 150, spa: 95, spd: 120, spe: 71,
        },
        baseSpecies: 'Tyranitar',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Sand Stream' },
        heightm: 2.5,
        weightkg: 255,
        color: 'Green',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'lugia',
      {
        species: 'Lugia',
        num: 249,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110,
        },
        abilities: { first: 'Pressure', hidden: 'Multiscale' },
        heightm: 5.2,
        weightkg: 216,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'hooh',
      {
        species: 'Ho-Oh',
        num: 250,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90,
        },
        abilities: { first: 'Pressure', hidden: 'Regenerator' },
        heightm: 3.8,
        weightkg: 199,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'celebi',
      {
        species: 'Celebi',
        num: 251,
        types: [ 'Psychic', 'Grass' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Natural Cure' },
        heightm: 0.6,
        weightkg: 5,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'treecko',
      {
        species: 'Treecko',
        num: 252,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70,
        },
        abilities: { first: 'Overgrow', hidden: 'Unburden' },
        heightm: 0.5,
        weightkg: 5,
        color: 'Green',
        evos: [ 'grovyle' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'grovyle',
      {
        species: 'Grovyle',
        num: 253,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 65, def: 45, spa: 85, spd: 65, spe: 95,
        },
        abilities: { first: 'Overgrow', hidden: 'Unburden' },
        heightm: 0.9,
        weightkg: 21.6,
        color: 'Green',
        prevo: 'treecko',
        evos: [ 'sceptile' ],
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'sceptile',
      {
        species: 'Sceptile',
        num: 254,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120,
        },
        abilities: { first: 'Overgrow', hidden: 'Unburden' },
        heightm: 1.7,
        weightkg: 52.2,
        color: 'Green',
        prevo: 'grovyle',
        evoLevel: 36,
        eggGroups: [ 'Monster', 'Dragon' ],
        otherFormes: [ 'sceptilemega' ],
      }
    ],
    [
      'sceptilemega',
      {
        species: 'Sceptile-Mega',
        num: 254,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 110, def: 75, spa: 145, spd: 85, spe: 145,
        },
        baseSpecies: 'Sceptile',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Lightning Rod' },
        heightm: 1.9,
        weightkg: 55.2,
        color: 'Green',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'torchic',
      {
        species: 'Torchic',
        num: 255,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45,
        },
        abilities: { first: 'Blaze', hidden: 'Speed Boost' },
        heightm: 0.4,
        weightkg: 2.5,
        color: 'Red',
        evos: [ 'combusken' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'combusken',
      {
        species: 'Combusken',
        num: 256,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55,
        },
        abilities: { first: 'Blaze', hidden: 'Speed Boost' },
        heightm: 0.9,
        weightkg: 19.5,
        color: 'Red',
        prevo: 'torchic',
        evos: [ 'blaziken' ],
        evoLevel: 16,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'blaziken',
      {
        species: 'Blaziken',
        num: 257,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80,
        },
        abilities: { first: 'Blaze', hidden: 'Speed Boost' },
        heightm: 1.9,
        weightkg: 52,
        color: 'Red',
        prevo: 'combusken',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'blazikenmega' ],
      }
    ],
    [
      'blazikenmega',
      {
        species: 'Blaziken-Mega',
        num: 257,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 160, def: 80, spa: 130, spd: 80, spe: 100,
        },
        baseSpecies: 'Blaziken',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Speed Boost' },
        heightm: 1.9,
        weightkg: 52,
        color: 'Red',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'mudkip',
      {
        species: 'Mudkip',
        num: 258,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40,
        },
        abilities: { first: 'Torrent', hidden: 'Damp' },
        heightm: 0.4,
        weightkg: 7.6,
        color: 'Blue',
        evos: [ 'marshtomp' ],
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'marshtomp',
      {
        species: 'Marshtomp',
        num: 259,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 85, def: 70, spa: 60, spd: 70, spe: 50,
        },
        abilities: { first: 'Torrent', hidden: 'Damp' },
        heightm: 0.7,
        weightkg: 28,
        color: 'Blue',
        prevo: 'mudkip',
        evos: [ 'swampert' ],
        evoLevel: 16,
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'swampert',
      {
        species: 'Swampert',
        num: 260,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60,
        },
        abilities: { first: 'Torrent', hidden: 'Damp' },
        heightm: 1.5,
        weightkg: 81.9,
        color: 'Blue',
        prevo: 'marshtomp',
        evoLevel: 36,
        eggGroups: [ 'Monster', 'Water 1' ],
        otherFormes: [ 'swampertmega' ],
      }
    ],
    [
      'swampertmega',
      {
        species: 'Swampert-Mega',
        num: 260,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 100, atk: 150, def: 110, spa: 95, spd: 110, spe: 70,
        },
        baseSpecies: 'Swampert',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Swift Swim' },
        heightm: 1.9,
        weightkg: 102,
        color: 'Blue',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'poochyena',
      {
        species: 'Poochyena',
        num: 261,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35,
        },
        abilities: { first: 'Run Away', second: 'Quick Feet', hidden: 'Rattled' },
        heightm: 0.5,
        weightkg: 13.6,
        color: 'Gray',
        evos: [ 'mightyena' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'mightyena',
      {
        species: 'Mightyena',
        num: 262,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70,
        },
        abilities: { first: 'Intimidate', second: 'Quick Feet', hidden: 'Moxie' },
        heightm: 1,
        weightkg: 37,
        color: 'Gray',
        prevo: 'poochyena',
        evoLevel: 18,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'zigzagoon',
      {
        species: 'Zigzagoon',
        num: 263,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60,
        },
        abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
        heightm: 0.4,
        weightkg: 17.5,
        color: 'Brown',
        evos: [ 'linoone' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'zigzagoongalar' ],
      }
    ],
    [
      'zigzagoongalar',
      {
        species: 'Zigzagoon-Galar',
        num: 263,
        types: [ 'Dark', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Zigzagoon',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60,
        },
        abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
        heightm: 0.40,
        weightkg: 17.5,
        color: 'White',
        evos: [ 'linoonegalar' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'linoone',
      {
        species: 'Linoone',
        num: 264,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100,
        },
        abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
        heightm: 0.5,
        weightkg: 32.5,
        color: 'White',
        prevo: 'zigzagoon',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'linoonegalar' ],
      }
    ],
    [
      'linoonegalar',
      {
        species: 'Linoone-Galar',
        num: 264,
        types: [ 'Dark', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Linoone',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100,
        },
        abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
        heightm: 0.50,
        weightkg: 32.5,
        color: 'White',
        evos: [ 'obstagoon' ],
        prevo: 'zigzagoongalar',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'wurmple',
      {
        species: 'Wurmple',
        num: 265,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20,
        },
        abilities: { first: 'Shield Dust', hidden: 'Run Away' },
        heightm: 0.3,
        weightkg: 3.6,
        color: 'Red',
        evos: [ 'silcoon', 'cascoon' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'silcoon',
      {
        species: 'Silcoon',
        num: 266,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15,
        },
        abilities: { first: 'Shed Skin' },
        heightm: 0.6,
        weightkg: 10,
        color: 'White',
        prevo: 'wurmple',
        evos: [ 'beautifly' ],
        evoLevel: 7,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'beautifly',
      {
        species: 'Beautifly',
        num: 267,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 70, def: 50, spa: 100, spd: 50, spe: 65,
        },
        abilities: { first: 'Swarm', hidden: 'Rivalry' },
        heightm: 1,
        weightkg: 28.4,
        color: 'Yellow',
        prevo: 'silcoon',
        evoLevel: 10,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'cascoon',
      {
        species: 'Cascoon',
        num: 268,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15,
        },
        abilities: { first: 'Shed Skin' },
        heightm: 0.7,
        weightkg: 11.5,
        color: 'Purple',
        prevo: 'wurmple',
        evos: [ 'dustox' ],
        evoLevel: 7,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'dustox',
      {
        species: 'Dustox',
        num: 269,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65,
        },
        abilities: { first: 'Shield Dust', hidden: 'Compound Eyes' },
        heightm: 1.2,
        weightkg: 31.6,
        color: 'Green',
        prevo: 'cascoon',
        evoLevel: 10,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'lotad',
      {
        species: 'Lotad',
        num: 270,
        types: [ 'Water', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30,
        },
        abilities: { first: 'Swift Swim', second: 'Rain Dish', hidden: 'Own Tempo' },
        heightm: 0.5,
        weightkg: 2.6,
        color: 'Green',
        evos: [ 'lombre' ],
        eggGroups: [ 'Water 1', 'Grass' ],
      }
    ],
    [
      'lombre',
      {
        species: 'Lombre',
        num: 271,
        types: [ 'Water', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50,
        },
        abilities: { first: 'Swift Swim', second: 'Rain Dish', hidden: 'Own Tempo' },
        heightm: 1.2,
        weightkg: 32.5,
        color: 'Green',
        prevo: 'lotad',
        evos: [ 'ludicolo' ],
        evoLevel: 14,
        eggGroups: [ 'Water 1', 'Grass' ],
      }
    ],
    [
      'ludicolo',
      {
        species: 'Ludicolo',
        num: 272,
        types: [ 'Water', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70,
        },
        abilities: { first: 'Swift Swim', second: 'Rain Dish', hidden: 'Own Tempo' },
        heightm: 1.5,
        weightkg: 55,
        color: 'Green',
        prevo: 'lombre',
        evoLevel: 'use Water Stone',
        eggGroups: [ 'Water 1', 'Grass' ],
      }
    ],
    [
      'seedot',
      {
        species: 'Seedot',
        num: 273,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 40, def: 50, spa: 30, spd: 30, spe: 30,
        },
        abilities: { first: 'Chlorophyll', second: 'Early Bird', hidden: 'Pickpocket' },
        heightm: 0.5,
        weightkg: 4,
        color: 'Brown',
        evos: [ 'nuzleaf' ],
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'nuzleaf',
      {
        species: 'Nuzleaf',
        num: 274,
        types: [ 'Grass', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 70, def: 40, spa: 60, spd: 40, spe: 60,
        },
        abilities: { first: 'Chlorophyll', second: 'Early Bird', hidden: 'Pickpocket' },
        heightm: 1,
        weightkg: 28,
        color: 'Brown',
        prevo: 'seedot',
        evos: [ 'shiftry' ],
        evoLevel: 14,
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'shiftry',
      {
        species: 'Shiftry',
        num: 275,
        types: [ 'Grass', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80,
        },
        abilities: { first: 'Chlorophyll', second: 'Early Bird', hidden: 'Pickpocket' },
        heightm: 1.3,
        weightkg: 59.6,
        color: 'Brown',
        prevo: 'nuzleaf',
        evoLevel: 'use Leaf Stone',
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'taillow',
      {
        species: 'Taillow',
        num: 276,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85,
        },
        abilities: { first: 'Guts', hidden: 'Scrappy' },
        heightm: 0.3,
        weightkg: 2.3,
        color: 'Blue',
        evos: [ 'swellow' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'swellow',
      {
        species: 'Swellow',
        num: 277,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 85, def: 60, spa: 75, spd: 50, spe: 125,
        },
        abilities: { first: 'Guts', hidden: 'Scrappy' },
        heightm: 0.7,
        weightkg: 19.8,
        color: 'Blue',
        prevo: 'taillow',
        evoLevel: 22,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'wingull',
      {
        species: 'Wingull',
        num: 278,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85,
        },
        abilities: { first: 'Keen Eye', second: 'Hydration', hidden: 'Rain Dish' },
        heightm: 0.6,
        weightkg: 9.5,
        color: 'White',
        evos: [ 'pelipper' ],
        eggGroups: [ 'Water 1', 'Flying' ],
      }
    ],
    [
      'pelipper',
      {
        species: 'Pelipper',
        num: 279,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65,
        },
        abilities: { first: 'Keen Eye', second: 'Drizzle', hidden: 'Rain Dish' },
        heightm: 1.2,
        weightkg: 28,
        color: 'Yellow',
        prevo: 'wingull',
        evoLevel: 25,
        eggGroups: [ 'Water 1', 'Flying' ],
      }
    ],
    [
      'ralts',
      {
        species: 'Ralts',
        num: 280,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40,
        },
        abilities: { first: 'Synchronize', second: 'Trace', hidden: 'Telepathy' },
        heightm: 0.4,
        weightkg: 6.6,
        color: 'White',
        evos: [ 'kirlia' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'kirlia',
      {
        species: 'Kirlia',
        num: 281,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50,
        },
        abilities: { first: 'Synchronize', second: 'Trace', hidden: 'Telepathy' },
        heightm: 0.8,
        weightkg: 20.2,
        color: 'White',
        prevo: 'ralts',
        evos: [ 'gardevoir', 'gallade' ],
        evoLevel: 20,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gardevoir',
      {
        species: 'Gardevoir',
        num: 282,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80,
        },
        abilities: { first: 'Synchronize', second: 'Trace', hidden: 'Telepathy' },
        heightm: 1.6,
        weightkg: 48.4,
        color: 'White',
        prevo: 'kirlia',
        evoLevel: 30,
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'gardevoirmega' ],
      }
    ],
    [
      'gardevoirmega',
      {
        species: 'Gardevoir-Mega',
        num: 282,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 85, def: 65, spa: 165, spd: 135, spe: 100,
        },
        baseSpecies: 'Gardevoir',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Pixilate' },
        heightm: 1.6,
        weightkg: 48.4,
        color: 'White',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'surskit',
      {
        species: 'Surskit',
        num: 283,
        types: [ 'Bug', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65,
        },
        abilities: { first: 'Swift Swim', hidden: 'Rain Dish' },
        heightm: 0.5,
        weightkg: 1.7,
        color: 'Blue',
        evos: [ 'masquerain' ],
        eggGroups: [ 'Water 1', 'Bug' ],
      }
    ],
    [
      'masquerain',
      {
        species: 'Masquerain',
        num: 284,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 60, def: 62, spa: 100, spd: 82, spe: 80,
        },
        abilities: { first: 'Intimidate', hidden: 'Unnerve' },
        heightm: 0.8,
        weightkg: 3.6,
        color: 'Blue',
        prevo: 'surskit',
        evoLevel: 22,
        eggGroups: [ 'Water 1', 'Bug' ],
      }
    ],
    [
      'shroomish',
      {
        species: 'Shroomish',
        num: 285,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35,
        },
        abilities: { first: 'Effect Spore', second: 'Poison Heal', hidden: 'Quick Feet' },
        heightm: 0.4,
        weightkg: 4.5,
        color: 'Brown',
        evos: [ 'breloom' ],
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'breloom',
      {
        species: 'Breloom',
        num: 286,
        types: [ 'Grass', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70,
        },
        abilities: { first: 'Effect Spore', second: 'Poison Heal', hidden: 'Technician' },
        heightm: 1.2,
        weightkg: 39.2,
        color: 'Green',
        prevo: 'shroomish',
        evoLevel: 23,
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'slakoth',
      {
        species: 'Slakoth',
        num: 287,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30,
        },
        abilities: { first: 'Truant' },
        heightm: 0.8,
        weightkg: 24,
        color: 'Brown',
        evos: [ 'vigoroth' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'vigoroth',
      {
        species: 'Vigoroth',
        num: 288,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90,
        },
        abilities: { first: 'Vital Spirit' },
        heightm: 1.4,
        weightkg: 46.5,
        color: 'White',
        prevo: 'slakoth',
        evos: [ 'slaking' ],
        evoLevel: 18,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'slaking',
      {
        species: 'Slaking',
        num: 289,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100,
        },
        abilities: { first: 'Truant' },
        heightm: 2,
        weightkg: 130.5,
        color: 'Brown',
        prevo: 'vigoroth',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'nincada',
      {
        species: 'Nincada',
        num: 290,
        types: [ 'Bug', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40,
        },
        abilities: { first: 'Compound Eyes', hidden: 'Run Away' },
        heightm: 0.5,
        weightkg: 5.5,
        color: 'Gray',
        evos: [ 'ninjask', 'shedinja' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'ninjask',
      {
        species: 'Ninjask',
        num: 291,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160,
        },
        abilities: { first: 'Speed Boost', hidden: 'Infiltrator' },
        heightm: 0.8,
        weightkg: 12,
        color: 'Yellow',
        prevo: 'nincada',
        evoLevel: 20,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'shedinja',
      {
        species: 'Shedinja',
        num: 292,
        types: [ 'Bug', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40,
        },
        abilities: { first: 'Wonder Guard' },
        heightm: 0.8,
        weightkg: 1.2,
        color: 'Brown',
        prevo: 'nincada',
        evoLevel: 'Level 20 with Free Party Slot',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'whismur',
      {
        species: 'Whismur',
        num: 293,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 64, atk: 51, def: 23, spa: 51, spd: 23, spe: 28,
        },
        abilities: { first: 'Soundproof', hidden: 'Rattled' },
        heightm: 0.6,
        weightkg: 16.3,
        color: 'Pink',
        evos: [ 'loudred' ],
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'loudred',
      {
        species: 'Loudred',
        num: 294,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 84, atk: 71, def: 43, spa: 71, spd: 43, spe: 48,
        },
        abilities: { first: 'Soundproof', hidden: 'Scrappy' },
        heightm: 1,
        weightkg: 40.5,
        color: 'Blue',
        prevo: 'whismur',
        evos: [ 'exploud' ],
        evoLevel: 20,
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'exploud',
      {
        species: 'Exploud',
        num: 295,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 104, atk: 91, def: 63, spa: 91, spd: 73, spe: 68,
        },
        abilities: { first: 'Soundproof', hidden: 'Scrappy' },
        heightm: 1.5,
        weightkg: 84,
        color: 'Blue',
        prevo: 'loudred',
        evoLevel: 40,
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'makuhita',
      {
        species: 'Makuhita',
        num: 296,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 72, atk: 60, def: 30, spa: 20, spd: 30, spe: 25,
        },
        abilities: { first: 'Thick Fat', second: 'Guts', hidden: 'Sheer Force' },
        heightm: 1,
        weightkg: 86.4,
        color: 'Yellow',
        evos: [ 'hariyama' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'hariyama',
      {
        species: 'Hariyama',
        num: 297,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50,
        },
        abilities: { first: 'Thick Fat', second: 'Guts', hidden: 'Sheer Force' },
        heightm: 2.3,
        weightkg: 253.8,
        color: 'Brown',
        prevo: 'makuhita',
        evoLevel: 24,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'azurill',
      {
        species: 'Azurill',
        num: 298,
        types: [ 'Normal', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20,
        },
        abilities: { first: 'Thick Fat', second: 'Huge Power', hidden: 'Sap Sipper' },
        heightm: 0.2,
        weightkg: 2,
        color: 'Blue',
        evos: [ 'marill' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'nosepass',
      {
        species: 'Nosepass',
        num: 299,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30,
        },
        abilities: { first: 'Sturdy', second: 'Magnet Pull', hidden: 'Sand Force' },
        heightm: 1,
        weightkg: 97,
        color: 'Gray',
        evos: [ 'probopass' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'skitty',
      {
        species: 'Skitty',
        num: 300,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50,
        },
        abilities: { first: 'Cute Charm', second: 'Normalize', hidden: 'Wonder Skin' },
        heightm: 0.6,
        weightkg: 11,
        color: 'Pink',
        evos: [ 'delcatty' ],
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'delcatty',
      {
        species: 'Delcatty',
        num: 301,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 90,
        },
        abilities: { first: 'Cute Charm', second: 'Normalize', hidden: 'Wonder Skin' },
        heightm: 1.1,
        weightkg: 32.6,
        color: 'Purple',
        prevo: 'skitty',
        evoLevel: 'use Moon Stone',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'sableye',
      {
        species: 'Sableye',
        num: 302,
        types: [ 'Dark', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50,
        },
        abilities: { first: 'Keen Eye', second: 'Stall', hidden: 'Prankster' },
        heightm: 0.5,
        weightkg: 11,
        color: 'Purple',
        eggGroups: [ 'Human-Like' ],
        otherFormes: [ 'sableyemega' ],
      }
    ],
    [
      'sableyemega',
      {
        species: 'Sableye-Mega',
        num: 302,
        types: [ 'Dark', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 85, def: 125, spa: 85, spd: 115, spe: 20,
        },
        baseSpecies: 'Sableye',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Magic Bounce' },
        heightm: 0.5,
        weightkg: 161,
        color: 'Purple',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'mawile',
      {
        species: 'Mawile',
        num: 303,
        types: [ 'Steel', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50,
        },
        abilities: { first: 'Hyper Cutter', second: 'Intimidate', hidden: 'Sheer Force' },
        heightm: 0.6,
        weightkg: 11.5,
        color: 'Black',
        eggGroups: [ 'Field', 'Fairy' ],
        otherFormes: [ 'mawilemega' ],
      }
    ],
    [
      'mawilemega',
      {
        species: 'Mawile-Mega',
        num: 303,
        types: [ 'Steel', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 105, def: 125, spa: 55, spd: 95, spe: 50,
        },
        baseSpecies: 'Mawile',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Huge Power' },
        heightm: 1,
        weightkg: 23.5,
        color: 'Black',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'aron',
      {
        species: 'Aron',
        num: 304,
        types: [ 'Steel', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 70, def: 100, spa: 40, spd: 40, spe: 30,
        },
        abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Heavy Metal' },
        heightm: 0.4,
        weightkg: 60,
        color: 'Gray',
        evos: [ 'lairon' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'lairon',
      {
        species: 'Lairon',
        num: 305,
        types: [ 'Steel', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 90, def: 140, spa: 50, spd: 50, spe: 40,
        },
        abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Heavy Metal' },
        heightm: 0.9,
        weightkg: 120,
        color: 'Gray',
        prevo: 'aron',
        evos: [ 'aggron' ],
        evoLevel: 32,
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'aggron',
      {
        species: 'Aggron',
        num: 306,
        types: [ 'Steel', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50,
        },
        abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Heavy Metal' },
        heightm: 2.1,
        weightkg: 360,
        color: 'Gray',
        prevo: 'lairon',
        evoLevel: 42,
        eggGroups: [ 'Monster' ],
        otherFormes: [ 'aggronmega' ],
      }
    ],
    [
      'aggronmega',
      {
        species: 'Aggron-Mega',
        num: 306,
        types: [ 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 140, def: 230, spa: 60, spd: 80, spe: 50,
        },
        baseSpecies: 'Aggron',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Filter' },
        heightm: 2.2,
        weightkg: 395,
        color: 'Gray',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'meditite',
      {
        species: 'Meditite',
        num: 307,
        types: [ 'Fighting', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 40, def: 55, spa: 40, spd: 55, spe: 60,
        },
        abilities: { first: 'Pure Power', hidden: 'Telepathy' },
        heightm: 0.6,
        weightkg: 11.2,
        color: 'Blue',
        evos: [ 'medicham' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'medicham',
      {
        species: 'Medicham',
        num: 308,
        types: [ 'Fighting', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80,
        },
        abilities: { first: 'Pure Power', hidden: 'Telepathy' },
        heightm: 1.3,
        weightkg: 31.5,
        color: 'Red',
        prevo: 'meditite',
        evoLevel: 37,
        eggGroups: [ 'Human-Like' ],
        otherFormes: [ 'medichammega' ],
      }
    ],
    [
      'medichammega',
      {
        species: 'Medicham-Mega',
        num: 308,
        types: [ 'Fighting', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 100, def: 85, spa: 80, spd: 85, spe: 100,
        },
        baseSpecies: 'Medicham',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Pure Power' },
        heightm: 1.3,
        weightkg: 31.5,
        color: 'Red',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'electrike',
      {
        species: 'Electrike',
        num: 309,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65,
        },
        abilities: { first: 'Static', second: 'Lightning Rod', hidden: 'Minus' },
        heightm: 0.6,
        weightkg: 15.2,
        color: 'Green',
        evos: [ 'manectric' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'manectric',
      {
        species: 'Manectric',
        num: 310,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105,
        },
        abilities: { first: 'Static', second: 'Lightning Rod', hidden: 'Minus' },
        heightm: 1.5,
        weightkg: 40.2,
        color: 'Yellow',
        prevo: 'electrike',
        evoLevel: 26,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'manectricmega' ],
      }
    ],
    [
      'manectricmega',
      {
        species: 'Manectric-Mega',
        num: 310,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 75, def: 80, spa: 135, spd: 80, spe: 135,
        },
        baseSpecies: 'Manectric',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Intimidate' },
        heightm: 1.8,
        weightkg: 44,
        color: 'Yellow',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'plusle',
      {
        species: 'Plusle',
        num: 311,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 95,
        },
        abilities: { first: 'Plus', hidden: 'Lightning Rod' },
        heightm: 0.4,
        weightkg: 4.2,
        color: 'Yellow',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'minun',
      {
        species: 'Minun',
        num: 312,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 40, def: 50, spa: 75, spd: 85, spe: 95,
        },
        abilities: { first: 'Minus', hidden: 'Volt Absorb' },
        heightm: 0.4,
        weightkg: 4.2,
        color: 'Yellow',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'volbeat',
      {
        species: 'Volbeat',
        num: 313,
        types: [ 'Bug' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 65, atk: 73, def: 75, spa: 47, spd: 85, spe: 85,
        },
        abilities: { first: 'Illuminate', second: 'Swarm', hidden: 'Prankster' },
        heightm: 0.7,
        weightkg: 17.7,
        color: 'Gray',
        eggGroups: [ 'Bug', 'Human-Like' ],
      }
    ],
    [
      'illumise',
      {
        species: 'Illumise',
        num: 314,
        types: [ 'Bug' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 65, atk: 47, def: 75, spa: 73, spd: 85, spe: 85,
        },
        abilities: { first: 'Oblivious', second: 'Tinted Lens', hidden: 'Prankster' },
        heightm: 0.6,
        weightkg: 17.7,
        color: 'Purple',
        eggGroups: [ 'Bug', 'Human-Like' ],
      }
    ],
    [
      'roselia',
      {
        species: 'Roselia',
        num: 315,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65,
        },
        abilities: { first: 'Natural Cure', second: 'Poison Point', hidden: 'Leaf Guard' },
        heightm: 0.3,
        weightkg: 2,
        color: 'Green',
        prevo: 'budew',
        evos: [ 'roserade' ],
        evoLevel: 'Level up during Daytime with High Friendship',
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'gulpin',
      {
        species: 'Gulpin',
        num: 316,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40,
        },
        abilities: { first: 'Liquid Ooze', second: 'Sticky Hold', hidden: 'Gluttony' },
        heightm: 0.4,
        weightkg: 10.3,
        color: 'Green',
        evos: [ 'swalot' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'swalot',
      {
        species: 'Swalot',
        num: 317,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55,
        },
        abilities: { first: 'Liquid Ooze', second: 'Sticky Hold', hidden: 'Gluttony' },
        heightm: 1.7,
        weightkg: 80,
        color: 'Purple',
        prevo: 'gulpin',
        evoLevel: 26,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'carvanha',
      {
        species: 'Carvanha',
        num: 318,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65,
        },
        abilities: { first: 'Rough Skin', hidden: 'Speed Boost' },
        heightm: 0.8,
        weightkg: 20.8,
        color: 'Red',
        evos: [ 'sharpedo' ],
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'sharpedo',
      {
        species: 'Sharpedo',
        num: 319,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95,
        },
        abilities: { first: 'Rough Skin', hidden: 'Speed Boost' },
        heightm: 1.8,
        weightkg: 88.8,
        color: 'Blue',
        prevo: 'carvanha',
        evoLevel: 30,
        eggGroups: [ 'Water 2' ],
        otherFormes: [ 'sharpedomega' ],
      }
    ],
    [
      'sharpedomega',
      {
        species: 'Sharpedo-Mega',
        num: 319,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 140, def: 70, spa: 110, spd: 65, spe: 105,
        },
        baseSpecies: 'Sharpedo',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Strong Jaw' },
        heightm: 2.5,
        weightkg: 130.3,
        color: 'Blue',
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'wailmer',
      {
        species: 'Wailmer',
        num: 320,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 130, atk: 70, def: 35, spa: 70, spd: 35, spe: 60,
        },
        abilities: { first: 'Water Veil', second: 'Oblivious', hidden: 'Pressure' },
        heightm: 2,
        weightkg: 130,
        color: 'Blue',
        evos: [ 'wailord' ],
        eggGroups: [ 'Field', 'Water 2' ],
      }
    ],
    [
      'wailord',
      {
        species: 'Wailord',
        num: 321,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60,
        },
        abilities: { first: 'Water Veil', second: 'Oblivious', hidden: 'Pressure' },
        heightm: 14.5,
        weightkg: 398,
        color: 'Blue',
        prevo: 'wailmer',
        evoLevel: 40,
        eggGroups: [ 'Field', 'Water 2' ],
      }
    ],
    [
      'numel',
      {
        species: 'Numel',
        num: 322,
        types: [ 'Fire', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35,
        },
        abilities: { first: 'Oblivious', second: 'Simple', hidden: 'Own Tempo' },
        heightm: 0.7,
        weightkg: 24,
        color: 'Yellow',
        evos: [ 'camerupt' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'camerupt',
      {
        species: 'Camerupt',
        num: 323,
        types: [ 'Fire', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40,
        },
        abilities: { first: 'Magma Armor', second: 'Solid Rock', hidden: 'Anger Point' },
        heightm: 1.9,
        weightkg: 220,
        color: 'Red',
        prevo: 'numel',
        evoLevel: 33,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'cameruptmega' ],
      }
    ],
    [
      'cameruptmega',
      {
        species: 'Camerupt-Mega',
        num: 323,
        types: [ 'Fire', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 120, def: 100, spa: 145, spd: 105, spe: 20,
        },
        baseSpecies: 'Camerupt',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Sheer Force' },
        heightm: 2.5,
        weightkg: 320.5,
        color: 'Red',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'torkoal',
      {
        species: 'Torkoal',
        num: 324,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20,
        },
        abilities: { first: 'White Smoke', second: 'Drought', hidden: 'Shell Armor' },
        heightm: 0.5,
        weightkg: 80.4,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'spoink',
      {
        species: 'Spoink',
        num: 325,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60,
        },
        abilities: { first: 'Thick Fat', second: 'Own Tempo', hidden: 'Gluttony' },
        heightm: 0.7,
        weightkg: 30.6,
        color: 'Black',
        evos: [ 'grumpig' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'grumpig',
      {
        species: 'Grumpig',
        num: 326,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80,
        },
        abilities: { first: 'Thick Fat', second: 'Own Tempo', hidden: 'Gluttony' },
        heightm: 0.9,
        weightkg: 71.5,
        color: 'Purple',
        prevo: 'spoink',
        evoLevel: 32,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'spinda',
      {
        species: 'Spinda',
        num: 327,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60,
        },
        abilities: { first: 'Own Tempo', second: 'Tangled Feet', hidden: 'Contrary' },
        heightm: 1.1,
        weightkg: 5,
        color: 'Brown',
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'trapinch',
      {
        species: 'Trapinch',
        num: 328,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10,
        },
        abilities: { first: 'Hyper Cutter', second: 'Arena Trap', hidden: 'Sheer Force' },
        heightm: 0.7,
        weightkg: 15,
        color: 'Brown',
        evos: [ 'vibrava' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'vibrava',
      {
        species: 'Vibrava',
        num: 329,
        types: [ 'Ground', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.1,
        weightkg: 15.3,
        color: 'Green',
        prevo: 'trapinch',
        evos: [ 'flygon' ],
        evoLevel: 35,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'flygon',
      {
        species: 'Flygon',
        num: 330,
        types: [ 'Ground', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100,
        },
        abilities: { first: 'Levitate' },
        heightm: 2,
        weightkg: 82,
        color: 'Green',
        prevo: 'vibrava',
        evoLevel: 45,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'cacnea',
      {
        species: 'Cacnea',
        num: 331,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 85, def: 40, spa: 85, spd: 40, spe: 35,
        },
        abilities: { first: 'Sand Veil', hidden: 'Water Absorb' },
        heightm: 0.4,
        weightkg: 51.3,
        color: 'Green',
        evos: [ 'cacturne' ],
        eggGroups: [ 'Grass', 'Human-Like' ],
      }
    ],
    [
      'cacturne',
      {
        species: 'Cacturne',
        num: 332,
        types: [ 'Grass', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 115, def: 60, spa: 115, spd: 60, spe: 55,
        },
        abilities: { first: 'Sand Veil', hidden: 'Water Absorb' },
        heightm: 1.3,
        weightkg: 77.4,
        color: 'Green',
        prevo: 'cacnea',
        evoLevel: 32,
        eggGroups: [ 'Grass', 'Human-Like' ],
      }
    ],
    [
      'swablu',
      {
        species: 'Swablu',
        num: 333,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50,
        },
        abilities: { first: 'Natural Cure', hidden: 'Cloud Nine' },
        heightm: 0.4,
        weightkg: 1.2,
        color: 'Blue',
        evos: [ 'altaria' ],
        eggGroups: [ 'Flying', 'Dragon' ],
      }
    ],
    [
      'altaria',
      {
        species: 'Altaria',
        num: 334,
        types: [ 'Dragon', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80,
        },
        abilities: { first: 'Natural Cure', hidden: 'Cloud Nine' },
        heightm: 1.1,
        weightkg: 20.6,
        color: 'Blue',
        prevo: 'swablu',
        evoLevel: 35,
        eggGroups: [ 'Flying', 'Dragon' ],
        otherFormes: [ 'altariamega' ],
      }
    ],
    [
      'altariamega',
      {
        species: 'Altaria-Mega',
        num: 334,
        types: [ 'Dragon', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 110, def: 110, spa: 110, spd: 105, spe: 80,
        },
        baseSpecies: 'Altaria',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Pixilate' },
        heightm: 1.5,
        weightkg: 20.6,
        color: 'Blue',
        eggGroups: [ 'Flying', 'Dragon' ],
      }
    ],
    [
      'zangoose',
      {
        species: 'Zangoose',
        num: 335,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90,
        },
        abilities: { first: 'Immunity', hidden: 'Toxic Boost' },
        heightm: 1.3,
        weightkg: 40.3,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'seviper',
      {
        species: 'Seviper',
        num: 336,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 65,
        },
        abilities: { first: 'Shed Skin', hidden: 'Infiltrator' },
        heightm: 2.7,
        weightkg: 52.5,
        color: 'Black',
        eggGroups: [ 'Field', 'Dragon' ],
      }
    ],
    [
      'lunatone',
      {
        species: 'Lunatone',
        num: 337,
        types: [ 'Rock', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 55, def: 65, spa: 95, spd: 85, spe: 70,
        },
        abilities: { first: 'Levitate' },
        heightm: 1,
        weightkg: 168,
        color: 'Yellow',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'solrock',
      {
        species: 'Solrock',
        num: 338,
        types: [ 'Rock', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 95, def: 85, spa: 55, spd: 65, spe: 70,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.2,
        weightkg: 154,
        color: 'Red',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'barboach',
      {
        species: 'Barboach',
        num: 339,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60,
        },
        abilities: { first: 'Oblivious', second: 'Anticipation', hidden: 'Hydration' },
        heightm: 0.4,
        weightkg: 1.9,
        color: 'Gray',
        evos: [ 'whiscash' ],
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'whiscash',
      {
        species: 'Whiscash',
        num: 340,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 78, def: 73, spa: 76, spd: 71, spe: 60,
        },
        abilities: { first: 'Oblivious', second: 'Anticipation', hidden: 'Hydration' },
        heightm: 0.9,
        weightkg: 23.6,
        color: 'Blue',
        prevo: 'barboach',
        evoLevel: 30,
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'corphish',
      {
        species: 'Corphish',
        num: 341,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35,
        },
        abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Adaptability' },
        heightm: 0.6,
        weightkg: 11.5,
        color: 'Red',
        evos: [ 'crawdaunt' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'crawdaunt',
      {
        species: 'Crawdaunt',
        num: 342,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55,
        },
        abilities: { first: 'Hyper Cutter', second: 'Shell Armor', hidden: 'Adaptability' },
        heightm: 1.1,
        weightkg: 32.8,
        color: 'Red',
        prevo: 'corphish',
        evoLevel: 30,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'baltoy',
      {
        species: 'Baltoy',
        num: 343,
        types: [ 'Ground', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 40, atk: 40, def: 55, spa: 40, spd: 70, spe: 55,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.5,
        weightkg: 21.5,
        color: 'Brown',
        evos: [ 'claydol' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'claydol',
      {
        species: 'Claydol',
        num: 344,
        types: [ 'Ground', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 108,
        color: 'Black',
        prevo: 'baltoy',
        evoLevel: 36,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'lileep',
      {
        species: 'Lileep',
        num: 345,
        types: [ 'Rock', 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23,
        },
        abilities: { first: 'Suction Cups', hidden: 'Storm Drain' },
        heightm: 1,
        weightkg: 23.8,
        color: 'Purple',
        evos: [ 'cradily' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'cradily',
      {
        species: 'Cradily',
        num: 346,
        types: [ 'Rock', 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43,
        },
        abilities: { first: 'Suction Cups', hidden: 'Storm Drain' },
        heightm: 1.5,
        weightkg: 60.4,
        color: 'Green',
        prevo: 'lileep',
        evoLevel: 40,
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'anorith',
      {
        species: 'Anorith',
        num: 347,
        types: [ 'Rock', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75,
        },
        abilities: { first: 'Battle Armor', hidden: 'Swift Swim' },
        heightm: 0.7,
        weightkg: 12.5,
        color: 'Gray',
        evos: [ 'armaldo' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'armaldo',
      {
        species: 'Armaldo',
        num: 348,
        types: [ 'Rock', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45,
        },
        abilities: { first: 'Battle Armor', hidden: 'Swift Swim' },
        heightm: 1.5,
        weightkg: 68.2,
        color: 'Gray',
        prevo: 'anorith',
        evoLevel: 40,
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'feebas',
      {
        species: 'Feebas',
        num: 349,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80,
        },
        abilities: { first: 'Swift Swim', second: 'Oblivious', hidden: 'Adaptability' },
        heightm: 0.6,
        weightkg: 7.4,
        color: 'Brown',
        evos: [ 'milotic' ],
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'milotic',
      {
        species: 'Milotic',
        num: 350,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81,
        },
        abilities: { first: 'Marvel Scale', second: 'Competitive', hidden: 'Cute Charm' },
        heightm: 6.2,
        weightkg: 162,
        color: 'Pink',
        prevo: 'feebas',
        evoLevel: 'Trade while holding Prism Scale',
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'castform',
      {
        species: 'Castform',
        num: 351,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70,
        },
        abilities: { first: 'Forecast' },
        heightm: 0.3,
        weightkg: 0.8,
        color: 'Gray',
        eggGroups: [ 'Fairy', 'Amorphous' ],
        otherFormes: [ 'castformsunny', 'castformrainy', 'castformsnowy' ],
      }
    ],
    [
      'castformsunny',
      {
        species: 'Castform-Sunny',
        num: 351,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70,
        },
        baseSpecies: 'Castform',
        forme: 'Sunny',
        formeLetter: 'S',
        abilities: { first: 'Forecast' },
        heightm: 0.3,
        weightkg: 0.8,
        color: 'Red',
        eggGroups: [ 'Fairy', 'Amorphous' ],
      }
    ],
    [
      'castformrainy',
      {
        species: 'Castform-Rainy',
        num: 351,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70,
        },
        baseSpecies: 'Castform',
        forme: 'Rainy',
        formeLetter: 'R',
        abilities: { first: 'Forecast' },
        heightm: 0.3,
        weightkg: 0.8,
        color: 'Blue',
        eggGroups: [ 'Fairy', 'Amorphous' ],
      }
    ],
    [
      'castformsnowy',
      {
        species: 'Castform-Snowy',
        num: 351,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70,
        },
        baseSpecies: 'Castform',
        forme: 'Snowy',
        formeLetter: 'S',
        abilities: { first: 'Forecast' },
        heightm: 0.3,
        weightkg: 0.8,
        color: 'White',
        eggGroups: [ 'Fairy', 'Amorphous' ],
      }
    ],
    [
      'kecleon',
      {
        species: 'Kecleon',
        num: 352,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40,
        },
        abilities: { first: 'Color Change', hidden: 'Protean' },
        heightm: 1,
        weightkg: 22,
        color: 'Green',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'shuppet',
      {
        species: 'Shuppet',
        num: 353,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 44, atk: 75, def: 35, spa: 63, spd: 33, spe: 45,
        },
        abilities: { first: 'Insomnia', second: 'Frisk', hidden: 'Cursed Body' },
        heightm: 0.6,
        weightkg: 2.3,
        color: 'Black',
        evos: [ 'banette' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'banette',
      {
        species: 'Banette',
        num: 354,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65,
        },
        abilities: { first: 'Insomnia', second: 'Frisk', hidden: 'Cursed Body' },
        heightm: 1.1,
        weightkg: 12.5,
        color: 'Black',
        prevo: 'shuppet',
        evoLevel: 37,
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'banettemega' ],
      }
    ],
    [
      'banettemega',
      {
        species: 'Banette-Mega',
        num: 354,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 64, atk: 165, def: 75, spa: 93, spd: 83, spe: 75,
        },
        baseSpecies: 'Banette',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Prankster' },
        heightm: 1.2,
        weightkg: 13,
        color: 'Black',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'duskull',
      {
        species: 'Duskull',
        num: 355,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25,
        },
        abilities: { first: 'Levitate', hidden: 'Frisk' },
        heightm: 0.8,
        weightkg: 15,
        color: 'Black',
        evos: [ 'dusclops' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'dusclops',
      {
        species: 'Dusclops',
        num: 356,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25,
        },
        abilities: { first: 'Pressure', hidden: 'Frisk' },
        heightm: 1.6,
        weightkg: 30.6,
        color: 'Black',
        prevo: 'duskull',
        evos: [ 'dusknoir' ],
        evoLevel: 37,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'tropius',
      {
        species: 'Tropius',
        num: 357,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51,
        },
        abilities: { first: 'Chlorophyll', second: 'Solar Power', hidden: 'Harvest' },
        heightm: 2,
        weightkg: 100,
        color: 'Green',
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'chimecho',
      {
        species: 'Chimecho',
        num: 358,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.6,
        weightkg: 1,
        color: 'Blue',
        prevo: 'chingling',
        evoLevel: 'Level up during Nighttime with High Friendship',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'absol',
      {
        species: 'Absol',
        num: 359,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75,
        },
        abilities: { first: 'Pressure', second: 'Super Luck', hidden: 'Justified' },
        heightm: 1.2,
        weightkg: 47,
        color: 'White',
        eggGroups: [ 'Field' ],
        otherFormes: [ 'absolmega' ],
      }
    ],
    [
      'absolmega',
      {
        species: 'Absol-Mega',
        num: 359,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 150, def: 60, spa: 115, spd: 60, spe: 115,
        },
        baseSpecies: 'Absol',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Magic Bounce' },
        heightm: 1.2,
        weightkg: 49,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'wynaut',
      {
        species: 'Wynaut',
        num: 360,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23,
        },
        abilities: { first: 'Shadow Tag', hidden: 'Telepathy' },
        heightm: 0.6,
        weightkg: 14,
        color: 'Blue',
        evos: [ 'wobbuffet' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'snorunt',
      {
        species: 'Snorunt',
        num: 361,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50,
        },
        abilities: { first: 'Inner Focus', second: 'Ice Body', hidden: 'Moody' },
        heightm: 0.7,
        weightkg: 16.8,
        color: 'Gray',
        evos: [ 'glalie', 'froslass' ],
        eggGroups: [ 'Fairy', 'Mineral' ],
      }
    ],
    [
      'glalie',
      {
        species: 'Glalie',
        num: 362,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80,
        },
        abilities: { first: 'Inner Focus', second: 'Ice Body', hidden: 'Moody' },
        heightm: 1.5,
        weightkg: 256.5,
        color: 'Gray',
        prevo: 'snorunt',
        evoLevel: 42,
        eggGroups: [ 'Fairy', 'Mineral' ],
        otherFormes: [ 'glaliemega' ],
      }
    ],
    [
      'glaliemega',
      {
        species: 'Glalie-Mega',
        num: 362,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 120, def: 80, spa: 120, spd: 80, spe: 100,
        },
        baseSpecies: 'Glalie',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Refrigerate' },
        heightm: 2.1,
        weightkg: 350.2,
        color: 'Gray',
        eggGroups: [ 'Fairy', 'Mineral' ],
      }
    ],
    [
      'spheal',
      {
        species: 'Spheal',
        num: 363,
        types: [ 'Ice', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25,
        },
        abilities: { first: 'Thick Fat', second: 'Ice Body', hidden: 'Oblivious' },
        heightm: 0.8,
        weightkg: 39.5,
        color: 'Blue',
        evos: [ 'sealeo' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'sealeo',
      {
        species: 'Sealeo',
        num: 364,
        types: [ 'Ice', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45,
        },
        abilities: { first: 'Thick Fat', second: 'Ice Body', hidden: 'Oblivious' },
        heightm: 1.1,
        weightkg: 87.6,
        color: 'Blue',
        prevo: 'spheal',
        evos: [ 'walrein' ],
        evoLevel: 32,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'walrein',
      {
        species: 'Walrein',
        num: 365,
        types: [ 'Ice', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65,
        },
        abilities: { first: 'Thick Fat', second: 'Ice Body', hidden: 'Oblivious' },
        heightm: 1.4,
        weightkg: 150.6,
        color: 'Blue',
        prevo: 'sealeo',
        evoLevel: 44,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'clamperl',
      {
        species: 'Clamperl',
        num: 366,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 64, def: 85, spa: 74, spd: 55, spe: 32,
        },
        abilities: { first: 'Shell Armor', hidden: 'Rattled' },
        heightm: 0.4,
        weightkg: 52.5,
        color: 'Blue',
        evos: [ 'huntail', 'gorebyss' ],
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'huntail',
      {
        species: 'Huntail',
        num: 367,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 104, def: 105, spa: 94, spd: 75, spe: 52,
        },
        abilities: { first: 'Swift Swim', hidden: 'Water Veil' },
        heightm: 1.7,
        weightkg: 27,
        color: 'Blue',
        prevo: 'clamperl',
        evoLevel: 'Trade while holding Deep Sea Tooth',
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'gorebyss',
      {
        species: 'Gorebyss',
        num: 368,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 84, def: 105, spa: 114, spd: 75, spe: 52,
        },
        abilities: { first: 'Swift Swim', hidden: 'Hydration' },
        heightm: 1.8,
        weightkg: 22.6,
        color: 'Pink',
        prevo: 'clamperl',
        evoLevel: 'Trade while holding Deep Sea Scale',
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'relicanth',
      {
        species: 'Relicanth',
        num: 369,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 100, atk: 90, def: 130, spa: 45, spd: 65, spe: 55,
        },
        abilities: { first: 'Swift Swim', second: 'Rock Head', hidden: 'Sturdy' },
        heightm: 1,
        weightkg: 23.4,
        color: 'Gray',
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'luvdisc',
      {
        species: 'Luvdisc',
        num: 370,
        types: [ 'Water' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97,
        },
        abilities: { first: 'Swift Swim', hidden: 'Hydration' },
        heightm: 0.6,
        weightkg: 8.7,
        color: 'Pink',
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'bagon',
      {
        species: 'Bagon',
        num: 371,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50,
        },
        abilities: { first: 'Rock Head', hidden: 'Sheer Force' },
        heightm: 0.6,
        weightkg: 42.1,
        color: 'Blue',
        evos: [ 'shelgon' ],
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'shelgon',
      {
        species: 'Shelgon',
        num: 372,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50,
        },
        abilities: { first: 'Rock Head', hidden: 'Overcoat' },
        heightm: 1.1,
        weightkg: 110.5,
        color: 'White',
        prevo: 'bagon',
        evos: [ 'salamence' ],
        evoLevel: 30,
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'salamence',
      {
        species: 'Salamence',
        num: 373,
        types: [ 'Dragon', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100,
        },
        abilities: { first: 'Intimidate', hidden: 'Moxie' },
        heightm: 1.5,
        weightkg: 102.6,
        color: 'Blue',
        prevo: 'shelgon',
        evoLevel: 50,
        eggGroups: [ 'Dragon' ],
        otherFormes: [ 'salamencemega' ],
      }
    ],
    [
      'salamencemega',
      {
        species: 'Salamence-Mega',
        num: 373,
        baseSpecies: 'Salamence',
        forme: 'Mega',
        formeLetter: 'M',
        types: [ 'Dragon', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 145, def: 130, spa: 120, spd: 90, spe: 120,
        },
        abilities: { first: 'Aerilate' },
        heightm: 1.8,
        weightkg: 112.6,
        color: 'Blue',
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'beldum',
      {
        species: 'Beldum',
        num: 374,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30,
        },
        abilities: { first: 'Clear Body', hidden: 'Light Metal' },
        heightm: 0.6,
        weightkg: 95.2,
        color: 'Blue',
        evos: [ 'metang' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'metang',
      {
        species: 'Metang',
        num: 375,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 75, def: 100, spa: 55, spd: 80, spe: 50,
        },
        abilities: { first: 'Clear Body', hidden: 'Light Metal' },
        heightm: 1.2,
        weightkg: 202.5,
        color: 'Blue',
        prevo: 'beldum',
        evos: [ 'metagross' ],
        evoLevel: 20,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'metagross',
      {
        species: 'Metagross',
        num: 376,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70,
        },
        abilities: { first: 'Clear Body', hidden: 'Light Metal' },
        heightm: 1.6,
        weightkg: 550,
        color: 'Blue',
        prevo: 'metang',
        evoLevel: 45,
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'metagrossmega' ],
      }
    ],
    [
      'metagrossmega',
      {
        species: 'Metagross-Mega',
        num: 376,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 145, def: 150, spa: 105, spd: 110, spe: 110,
        },
        baseSpecies: 'Metagross',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Tough Claws' },
        heightm: 2.5,
        weightkg: 942.9,
        color: 'Blue',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'regirock',
      {
        species: 'Regirock',
        num: 377,
        types: [ 'Rock' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50,
        },
        abilities: { first: 'Clear Body', hidden: 'Sturdy' },
        heightm: 1.7,
        weightkg: 230,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'regice',
      {
        species: 'Regice',
        num: 378,
        types: [ 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50,
        },
        abilities: { first: 'Clear Body', hidden: 'Ice Body' },
        heightm: 1.8,
        weightkg: 175,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'registeel',
      {
        species: 'Registeel',
        num: 379,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50,
        },
        abilities: { first: 'Clear Body', hidden: 'Light Metal' },
        heightm: 1.9,
        weightkg: 205,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'latias',
      {
        species: 'Latias',
        num: 380,
        types: [ 'Dragon', 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.4,
        weightkg: 40,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'latiasmega' ],
      }
    ],
    [
      'latiasmega',
      {
        species: 'Latias-Mega',
        num: 380,
        types: [ 'Dragon', 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 80, atk: 100, def: 120, spa: 140, spd: 150, spe: 110,
        },
        baseSpecies: 'Latias',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Levitate' },
        heightm: 1.8,
        weightkg: 52,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'latios',
      {
        species: 'Latios',
        num: 381,
        types: [ 'Dragon', 'Psychic' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110,
        },
        abilities: { first: 'Levitate' },
        heightm: 2,
        weightkg: 60,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'latiosmega' ],
      }
    ],
    [
      'latiosmega',
      {
        species: 'Latios-Mega',
        num: 381,
        types: [ 'Dragon', 'Psychic' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 80, atk: 130, def: 100, spa: 160, spd: 120, spe: 110,
        },
        baseSpecies: 'Latios',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Levitate' },
        heightm: 2.3,
        weightkg: 70,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'kyogre',
      {
        species: 'Kyogre',
        num: 382,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90,
        },
        abilities: { first: 'Drizzle' },
        heightm: 4.5,
        weightkg: 352,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'kyogreprimal' ],
      }
    ],
    [
      'kyogreprimal',
      {
        species: 'Kyogre-Primal',
        num: 382,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 150, def: 90, spa: 180, spd: 160, spe: 90,
        },
        baseSpecies: 'Kyogre',
        forme: 'Primal',
        formeLetter: 'P',
        abilities: { first: 'Primordial Sea' },
        heightm: 9.8,
        weightkg: 430,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'groudon',
      {
        species: 'Groudon',
        num: 383,
        types: [ 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90,
        },
        abilities: { first: 'Drought' },
        heightm: 3.5,
        weightkg: 950,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'groudonprimal' ],
      }
    ],
    [
      'groudonprimal',
      {
        species: 'Groudon-Primal',
        num: 383,
        types: [ 'Ground', 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 180, def: 160, spa: 150, spd: 90, spe: 90,
        },
        baseSpecies: 'Groudon',
        forme: 'Primal',
        formeLetter: 'P',
        abilities: { first: 'Desolate Land' },
        heightm: 5,
        weightkg: 999.7,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'rayquaza',
      {
        species: 'Rayquaza',
        num: 384,
        types: [ 'Dragon', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95,
        },
        abilities: { first: 'Air Lock' },
        heightm: 7,
        weightkg: 206.5,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'rayquazamega' ],
      }
    ],
    [
      'rayquazamega',
      {
        species: 'Rayquaza-Mega',
        num: 384,
        types: [ 'Dragon', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 105, atk: 180, def: 100, spa: 180, spd: 100, spe: 115,
        },
        baseSpecies: 'Rayquaza',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Delta Stream' },
        heightm: 10.8,
        weightkg: 392,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'jirachi',
      {
        species: 'Jirachi',
        num: 385,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Serene Grace' },
        heightm: 0.3,
        weightkg: 1.1,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'deoxys',
      {
        species: 'Deoxys',
        num: 386,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150,
        },
        baseForme: 'Normal',
        abilities: { first: 'Pressure' },
        heightm: 1.7,
        weightkg: 60.8,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'deoxysattack', 'deoxysdefense', 'deoxysspeed' ],
      }
    ],
    [
      'deoxysattack',
      {
        species: 'Deoxys-Attack',
        num: 386,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 180, def: 20, spa: 180, spd: 20, spe: 150,
        },
        baseSpecies: 'Deoxys',
        forme: 'Attack',
        formeLetter: 'A',
        abilities: { first: 'Pressure' },
        heightm: 1.7,
        weightkg: 60.8,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'deoxysdefense',
      {
        species: 'Deoxys-Defense',
        num: 386,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 70, def: 160, spa: 70, spd: 160, spe: 90,
        },
        baseSpecies: 'Deoxys',
        forme: 'Defense',
        formeLetter: 'D',
        abilities: { first: 'Pressure' },
        heightm: 1.7,
        weightkg: 60.8,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'deoxysspeed',
      {
        species: 'Deoxys-Speed',
        num: 386,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 95, def: 90, spa: 95, spd: 90, spe: 180,
        },
        baseSpecies: 'Deoxys',
        forme: 'Speed',
        formeLetter: 'S',
        abilities: { first: 'Pressure' },
        heightm: 1.7,
        weightkg: 60.8,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'turtwig',
      {
        species: 'Turtwig',
        num: 387,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 55, atk: 68, def: 64, spa: 45, spd: 55, spe: 31,
        },
        abilities: { first: 'Overgrow', hidden: 'Shell Armor' },
        heightm: 0.4,
        weightkg: 10.2,
        color: 'Green',
        evos: [ 'grotle' ],
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'grotle',
      {
        species: 'Grotle',
        num: 388,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 89, def: 85, spa: 55, spd: 65, spe: 36,
        },
        abilities: { first: 'Overgrow', hidden: 'Shell Armor' },
        heightm: 1.1,
        weightkg: 97,
        color: 'Green',
        prevo: 'turtwig',
        evos: [ 'torterra' ],
        evoLevel: 18,
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'torterra',
      {
        species: 'Torterra',
        num: 389,
        types: [ 'Grass', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 95, atk: 109, def: 105, spa: 75, spd: 85, spe: 56,
        },
        abilities: { first: 'Overgrow', hidden: 'Shell Armor' },
        heightm: 2.2,
        weightkg: 310,
        color: 'Green',
        prevo: 'grotle',
        evoLevel: 32,
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'chimchar',
      {
        species: 'Chimchar',
        num: 390,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 44, atk: 58, def: 44, spa: 58, spd: 44, spe: 61,
        },
        abilities: { first: 'Blaze', hidden: 'Iron Fist' },
        heightm: 0.5,
        weightkg: 6.2,
        color: 'Brown',
        evos: [ 'monferno' ],
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'monferno',
      {
        species: 'Monferno',
        num: 391,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 64, atk: 78, def: 52, spa: 78, spd: 52, spe: 81,
        },
        abilities: { first: 'Blaze', hidden: 'Iron Fist' },
        heightm: 0.9,
        weightkg: 22,
        color: 'Brown',
        prevo: 'chimchar',
        evos: [ 'infernape' ],
        evoLevel: 14,
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'infernape',
      {
        species: 'Infernape',
        num: 392,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 76, atk: 104, def: 71, spa: 104, spd: 71, spe: 108,
        },
        abilities: { first: 'Blaze', hidden: 'Iron Fist' },
        heightm: 1.2,
        weightkg: 55,
        color: 'Brown',
        prevo: 'monferno',
        evoLevel: 36,
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'piplup',
      {
        species: 'Piplup',
        num: 393,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 53, atk: 51, def: 53, spa: 61, spd: 56, spe: 40,
        },
        abilities: { first: 'Torrent', hidden: 'Defiant' },
        heightm: 0.4,
        weightkg: 5.2,
        color: 'Blue',
        evos: [ 'prinplup' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'prinplup',
      {
        species: 'Prinplup',
        num: 394,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 64, atk: 66, def: 68, spa: 81, spd: 76, spe: 50,
        },
        abilities: { first: 'Torrent', hidden: 'Defiant' },
        heightm: 0.8,
        weightkg: 23,
        color: 'Blue',
        prevo: 'piplup',
        evos: [ 'empoleon' ],
        evoLevel: 16,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'empoleon',
      {
        species: 'Empoleon',
        num: 395,
        types: [ 'Water', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 84, atk: 86, def: 88, spa: 111, spd: 101, spe: 60,
        },
        abilities: { first: 'Torrent', hidden: 'Defiant' },
        heightm: 1.7,
        weightkg: 84.5,
        color: 'Blue',
        prevo: 'prinplup',
        evoLevel: 36,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'starly',
      {
        species: 'Starly',
        num: 396,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 60,
        },
        abilities: { first: 'Keen Eye', hidden: 'Reckless' },
        heightm: 0.3,
        weightkg: 2,
        color: 'Brown',
        evos: [ 'staravia' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'staravia',
      {
        species: 'Staravia',
        num: 397,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 75, def: 50, spa: 40, spd: 40, spe: 80,
        },
        abilities: { first: 'Intimidate', hidden: 'Reckless' },
        heightm: 0.6,
        weightkg: 15.5,
        color: 'Brown',
        prevo: 'starly',
        evos: [ 'staraptor' ],
        evoLevel: 14,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'staraptor',
      {
        species: 'Staraptor',
        num: 398,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 120, def: 70, spa: 50, spd: 60, spe: 100,
        },
        abilities: { first: 'Intimidate', hidden: 'Reckless' },
        heightm: 1.2,
        weightkg: 24.9,
        color: 'Brown',
        prevo: 'staravia',
        evoLevel: 34,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'bidoof',
      {
        species: 'Bidoof',
        num: 399,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 59, atk: 45, def: 40, spa: 35, spd: 40, spe: 31,
        },
        abilities: { first: 'Simple', second: 'Unaware', hidden: 'Moody' },
        heightm: 0.5,
        weightkg: 20,
        color: 'Brown',
        evos: [ 'bibarel' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'bibarel',
      {
        species: 'Bibarel',
        num: 400,
        types: [ 'Normal', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 79, atk: 85, def: 60, spa: 55, spd: 60, spe: 71,
        },
        abilities: { first: 'Simple', second: 'Unaware', hidden: 'Moody' },
        heightm: 1,
        weightkg: 31.5,
        color: 'Brown',
        prevo: 'bidoof',
        evoLevel: 15,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'kricketot',
      {
        species: 'Kricketot',
        num: 401,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 37, atk: 25, def: 41, spa: 25, spd: 41, spe: 25,
        },
        abilities: { first: 'Shed Skin', hidden: 'Run Away' },
        heightm: 0.3,
        weightkg: 2.2,
        color: 'Red',
        evos: [ 'kricketune' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'kricketune',
      {
        species: 'Kricketune',
        num: 402,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 77, atk: 85, def: 51, spa: 55, spd: 51, spe: 65,
        },
        abilities: { first: 'Swarm', hidden: 'Technician' },
        heightm: 1,
        weightkg: 25.5,
        color: 'Red',
        prevo: 'kricketot',
        evoLevel: 10,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'shinx',
      {
        species: 'Shinx',
        num: 403,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 45,
        },
        abilities: { first: 'Rivalry', second: 'Intimidate', hidden: 'Guts' },
        heightm: 0.5,
        weightkg: 9.5,
        color: 'Blue',
        evos: [ 'luxio' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'luxio',
      {
        species: 'Luxio',
        num: 404,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 85, def: 49, spa: 60, spd: 49, spe: 60,
        },
        abilities: { first: 'Rivalry', second: 'Intimidate', hidden: 'Guts' },
        heightm: 0.9,
        weightkg: 30.5,
        color: 'Blue',
        prevo: 'shinx',
        evos: [ 'luxray' ],
        evoLevel: 15,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'luxray',
      {
        species: 'Luxray',
        num: 405,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 120, def: 79, spa: 95, spd: 79, spe: 70,
        },
        abilities: { first: 'Rivalry', second: 'Intimidate', hidden: 'Guts' },
        heightm: 1.4,
        weightkg: 42,
        color: 'Blue',
        prevo: 'luxio',
        evoLevel: 30,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'budew',
      {
        species: 'Budew',
        num: 406,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 30, def: 35, spa: 50, spd: 70, spe: 55,
        },
        abilities: { first: 'Natural Cure', second: 'Poison Point', hidden: 'Leaf Guard' },
        heightm: 0.2,
        weightkg: 1.2,
        color: 'Green',
        evos: [ 'roselia' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'roserade',
      {
        species: 'Roserade',
        num: 407,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 90,
        },
        abilities: { first: 'Natural Cure', second: 'Poison Point', hidden: 'Technician' },
        heightm: 0.9,
        weightkg: 14.5,
        color: 'Green',
        prevo: 'roselia',
        evoLevel: 'use Shiny Stone',
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'cranidos',
      {
        species: 'Cranidos',
        num: 408,
        types: [ 'Rock' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 67, atk: 125, def: 40, spa: 30, spd: 30, spe: 58,
        },
        abilities: { first: 'Mold Breaker', hidden: 'Sheer Force' },
        heightm: 0.9,
        weightkg: 31.5,
        color: 'Blue',
        evos: [ 'rampardos' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'rampardos',
      {
        species: 'Rampardos',
        num: 409,
        types: [ 'Rock' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 58,
        },
        abilities: { first: 'Mold Breaker', hidden: 'Sheer Force' },
        heightm: 1.6,
        weightkg: 102.5,
        color: 'Blue',
        prevo: 'cranidos',
        evoLevel: 30,
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'shieldon',
      {
        species: 'Shieldon',
        num: 410,
        types: [ 'Rock', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 30, atk: 42, def: 118, spa: 42, spd: 88, spe: 30,
        },
        abilities: { first: 'Sturdy', hidden: 'Soundproof' },
        heightm: 0.5,
        weightkg: 57,
        color: 'Gray',
        evos: [ 'bastiodon' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'bastiodon',
      {
        species: 'Bastiodon',
        num: 411,
        types: [ 'Rock', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 52, def: 168, spa: 47, spd: 138, spe: 30,
        },
        abilities: { first: 'Sturdy', hidden: 'Soundproof' },
        heightm: 1.3,
        weightkg: 149.5,
        color: 'Gray',
        prevo: 'shieldon',
        evoLevel: 30,
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'burmy',
      {
        species: 'Burmy',
        num: 412,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 29, def: 45, spa: 29, spd: 45, spe: 36,
        },
        baseForme: 'Plant',
        abilities: { first: 'Shed Skin', hidden: 'Overcoat' },
        heightm: 0.2,
        weightkg: 3.4,
        color: 'Green',
        evos: [ 'wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim' ],
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'burmysandy', 'burmytrash' ],
      }
    ],
    [
      'wormadam',
      {
        species: 'Wormadam',
        num: 413,
        types: [ 'Bug', 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 60, atk: 59, def: 85, spa: 79, spd: 105, spe: 36,
        },
        baseForme: 'Plant',
        abilities: { first: 'Anticipation', hidden: 'Overcoat' },
        heightm: 0.5,
        weightkg: 6.5,
        color: 'Green',
        prevo: 'burmy',
        evoLevel: 'Level 20, Female only',
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'wormadamsandy', 'wormadamtrash' ],
      }
    ],
    [
      'wormadamsandy',
      {
        species: 'Wormadam-Sandy',
        num: 413,
        types: [ 'Bug', 'Ground' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 60, atk: 79, def: 105, spa: 59, spd: 85, spe: 36,
        },
        baseSpecies: 'Wormadam',
        forme: 'Sandy',
        formeLetter: 'G',
        abilities: { first: 'Anticipation', hidden: 'Overcoat' },
        heightm: 0.5,
        weightkg: 6.5,
        color: 'Brown',
        prevo: 'burmy',
        evoLevel: 20,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'wormadamtrash',
      {
        species: 'Wormadam-Trash',
        num: 413,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 60, atk: 69, def: 95, spa: 69, spd: 95, spe: 36,
        },
        baseSpecies: 'Wormadam',
        forme: 'Trash',
        formeLetter: 'S',
        abilities: { first: 'Anticipation', hidden: 'Overcoat' },
        heightm: 0.5,
        weightkg: 6.5,
        color: 'Red',
        prevo: 'burmy',
        evoLevel: 20,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'mothim',
      {
        species: 'Mothim',
        num: 414,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 70, atk: 94, def: 50, spa: 94, spd: 50, spe: 66,
        },
        abilities: { first: 'Swarm', hidden: 'Tinted Lens' },
        heightm: 0.9,
        weightkg: 23.3,
        color: 'Yellow',
        prevo: 'burmy',
        evoLevel: 'Level 20, Male only',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'combee',
      {
        species: 'Combee',
        num: 415,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 30, atk: 30, def: 42, spa: 30, spd: 42, spe: 70,
        },
        abilities: { first: 'Honey Gather', hidden: 'Hustle' },
        heightm: 0.3,
        weightkg: 5.5,
        color: 'Yellow',
        evos: [ 'vespiquen' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'vespiquen',
      {
        species: 'Vespiquen',
        num: 416,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40,
        },
        abilities: { first: 'Pressure', hidden: 'Unnerve' },
        heightm: 1.2,
        weightkg: 38.5,
        color: 'Yellow',
        prevo: 'combee',
        evoLevel: 'Level 21, Female only',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'pachirisu',
      {
        species: 'Pachirisu',
        num: 417,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 45, def: 70, spa: 45, spd: 90, spe: 95,
        },
        abilities: { first: 'Run Away', second: 'Pickup', hidden: 'Volt Absorb' },
        heightm: 0.4,
        weightkg: 3.9,
        color: 'White',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'buizel',
      {
        species: 'Buizel',
        num: 418,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 65, def: 35, spa: 60, spd: 30, spe: 85,
        },
        abilities: { first: 'Swift Swim', hidden: 'Water Veil' },
        heightm: 0.7,
        weightkg: 29.5,
        color: 'Brown',
        evos: [ 'floatzel' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'floatzel',
      {
        species: 'Floatzel',
        num: 419,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 105, def: 55, spa: 85, spd: 50, spe: 115,
        },
        abilities: { first: 'Swift Swim', hidden: 'Water Veil' },
        heightm: 1.1,
        weightkg: 33.5,
        color: 'Brown',
        prevo: 'buizel',
        evoLevel: 26,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'cherubi',
      {
        species: 'Cherubi',
        num: 420,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 35, def: 45, spa: 62, spd: 53, spe: 35,
        },
        abilities: { first: 'Chlorophyll' },
        heightm: 0.4,
        weightkg: 3.3,
        color: 'Pink',
        evos: [ 'cherrim' ],
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'cherrim',
      {
        species: 'Cherrim',
        num: 421,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85,
        },
        baseForme: 'Overcast',
        abilities: { first: 'Flower Gift' },
        heightm: 0.5,
        weightkg: 9.3,
        color: 'Purple',
        prevo: 'cherubi',
        evoLevel: 25,
        eggGroups: [ 'Fairy', 'Grass' ],
        otherFormes: [ 'cherrimsunshine' ],
      }
    ],
    [
      'cherrimsunshine',
      {
        species: 'Cherrim-Sunshine',
        num: 421,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85,
        },
        baseSpecies: 'Cherrim',
        forme: 'Sunshine',
        formeLetter: 'S',
        abilities: { first: 'Flower Gift' },
        heightm: 0.5,
        weightkg: 9.3,
        color: 'Pink',
        prevo: 'cherubi',
        evoLevel: 25,
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'shellos',
      {
        species: 'Sshellos',
        num: 422,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 76, atk: 48, def: 48, spa: 57, spd: 62, spe: 34,
        },
        baseForme: 'West',
        abilities: { first: 'Sticky Hold', second: 'Storm Drain', hidden: 'Sand Force' },
        heightm: 0.3,
        weightkg: 6.3,
        color: 'Purple',
        evos: [ 'gastrodon' ],
        eggGroups: [ 'Water 1', 'Amorphous' ],
        otherFormes: [ 'shelloseast' ],
      }
    ],
    [
      'gastrodon',
      {
        species: 'Gastrodon',
        num: 423,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39,
        },
        baseForme: 'West',
        abilities: { first: 'Sticky Hold', second: 'Storm Drain', hidden: 'Sand Force' },
        heightm: 0.9,
        weightkg: 29.9,
        color: 'Purple',
        prevo: 'shellos',
        evoLevel: 30,
        eggGroups: [ 'Water 1', 'Amorphous' ],
        otherFormes: [ 'gastrodoneast' ],
      }
    ],
    [
      'ambipom',
      {
        species: 'Ambipom',
        num: 424,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 100, def: 66, spa: 60, spd: 66, spe: 115,
        },
        abilities: { first: 'Technician', second: 'Pickup', hidden: 'Skill Link' },
        heightm: 1.2,
        weightkg: 20.3,
        color: 'Purple',
        prevo: 'aipom',
        evoLevel: 'Level up while knowing Double Hit',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'drifloon',
      {
        species: 'Drifloon',
        num: 425,
        types: [ 'Ghost', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 50, def: 34, spa: 60, spd: 44, spe: 70,
        },
        abilities: { first: 'Aftermath', second: 'Unburden', hidden: 'Flare Boost' },
        heightm: 0.4,
        weightkg: 1.2,
        color: 'Purple',
        evos: [ 'drifblim' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'drifblim',
      {
        species: 'Drifblim',
        num: 426,
        types: [ 'Ghost', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 150, atk: 80, def: 44, spa: 90, spd: 54, spe: 80,
        },
        abilities: { first: 'Aftermath', second: 'Unburden', hidden: 'Flare Boost' },
        heightm: 1.2,
        weightkg: 15,
        color: 'Purple',
        prevo: 'drifloon',
        evoLevel: 28,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'buneary',
      {
        species: 'Buneary',
        num: 427,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85,
        },
        abilities: { first: 'Run Away', second: 'Klutz', hidden: 'Limber' },
        heightm: 0.4,
        weightkg: 5.5,
        color: 'Brown',
        evos: [ 'lopunny' ],
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'lopunny',
      {
        species: 'Lopunny',
        num: 428,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105,
        },
        abilities: { first: 'Cute Charm', second: 'Klutz', hidden: 'Limber' },
        heightm: 1.2,
        weightkg: 33.3,
        color: 'Brown',
        prevo: 'buneary',
        evoLevel: 2,
        eggGroups: [ 'Field', 'Human-Like' ],
        otherFormes: [ 'lopunnymega' ],
      }
    ],
    [
      'lopunnymega',
      {
        species: 'Lopunny-Mega',
        num: 428,
        types: [ 'Normal', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 136, def: 94, spa: 54, spd: 96, spe: 135,
        },
        baseSpecies: 'Lopunny',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Scrappy' },
        heightm: 1.3,
        weightkg: 28.3,
        color: 'Brown',
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'mismagius',
      {
        species: 'Mismagius',
        num: 429,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 60, spa: 105, spd: 105, spe: 105,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.9,
        weightkg: 4.4,
        color: 'Purple',
        prevo: 'misdreavus',
        evoLevel: 'use Dusk Stone',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'honchkrow',
      {
        species: 'Honchkrow',
        num: 430,
        types: [ 'Dark', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 125, def: 52, spa: 105, spd: 52, spe: 71,
        },
        abilities: { first: 'Insomnia', second: 'Super Luck', hidden: 'Moxie' },
        heightm: 0.9,
        weightkg: 27.3,
        color: 'Black',
        prevo: 'murkrow',
        evoLevel: 'use Dusk Stone',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'glameow',
      {
        species: 'Glameow',
        num: 431,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85,
        },
        abilities: { first: 'Limber', second: 'Own Tempo', hidden: 'Keen Eye' },
        heightm: 0.5,
        weightkg: 3.9,
        color: 'Gray',
        evos: [ 'purugly' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'purugly',
      {
        species: 'Purugly',
        num: 432,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 71, atk: 82, def: 64, spa: 64, spd: 59, spe: 112,
        },
        abilities: { first: 'Thick Fat', second: 'Own Tempo', hidden: 'Defiant' },
        heightm: 1,
        weightkg: 43.8,
        color: 'Gray',
        prevo: 'glameow',
        evoLevel: 38,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'chingling',
      {
        species: 'Chingling',
        num: 433,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 30, def: 50, spa: 65, spd: 50, spe: 45,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.2,
        weightkg: 0.6,
        color: 'Yellow',
        evos: [ 'chimecho' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'stunky',
      {
        species: 'Stunky',
        num: 434,
        types: [ 'Poison', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 63, atk: 63, def: 47, spa: 41, spd: 41, spe: 74,
        },
        abilities: { first: 'Stench', second: 'Aftermath', hidden: 'Keen Eye' },
        heightm: 0.4,
        weightkg: 19.2,
        color: 'Purple',
        evos: [ 'skuntank' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'skuntank',
      {
        species: 'Skuntank',
        num: 435,
        types: [ 'Poison', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 103, atk: 93, def: 67, spa: 71, spd: 61, spe: 84,
        },
        abilities: { first: 'Stench', second: 'Aftermath', hidden: 'Keen Eye' },
        heightm: 1,
        weightkg: 38,
        color: 'Purple',
        prevo: 'stunky',
        evoLevel: 34,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'bronzor',
      {
        species: 'Bronzor',
        num: 436,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 57, atk: 24, def: 86, spa: 24, spd: 86, spe: 23,
        },
        abilities: { first: 'Levitate', second: 'Heatproof', hidden: 'Heavy Metal' },
        heightm: 0.5,
        weightkg: 60.5,
        color: 'Green',
        evos: [ 'bronzong' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'bronzong',
      {
        species: 'Bronzong',
        num: 437,
        types: [ 'Steel', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 67, atk: 89, def: 116, spa: 79, spd: 116, spe: 33,
        },
        abilities: { first: 'Levitate', second: 'Heatproof', hidden: 'Heavy Metal' },
        heightm: 1.3,
        weightkg: 187,
        color: 'Green',
        prevo: 'bronzor',
        evoLevel: 33,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'bonsly',
      {
        species: 'Bonsly',
        num: 438,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 10,
        },
        abilities: { first: 'Sturdy', second: 'Rock Head', hidden: 'Rattled' },
        heightm: 0.5,
        weightkg: 15,
        color: 'Brown',
        evos: [ 'sudowoodo' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'mimejr',
      {
        species: 'Mime Jr.',
        num: 439,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60,
        },
        abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
        heightm: 0.6,
        weightkg: 13,
        color: 'Pink',
        evos: [ 'mrmime' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'happiny',
      {
        species: 'Happiny',
        num: 440,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 100, atk: 5, def: 5, spa: 15, spd: 65, spe: 30,
        },
        abilities: { first: 'Natural Cure', second: 'Serene Grace', hidden: 'Friend Guard' },
        heightm: 0.6,
        weightkg: 24.4,
        color: 'Pink',
        evos: [ 'chansey' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'chatot',
      {
        species: 'Chatot',
        num: 441,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 91,
        },
        abilities: { first: 'Keen Eye', second: 'Tangled Feet', hidden: 'Big Pecks' },
        heightm: 0.5,
        weightkg: 1.9,
        color: 'Black',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'spiritomb',
      {
        species: 'Spiritomb',
        num: 442,
        types: [ 'Ghost', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35,
        },
        abilities: { first: 'Pressure', hidden: 'Infiltrator' },
        heightm: 1,
        weightkg: 108,
        color: 'Purple',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gible',
      {
        species: 'Gible',
        num: 443,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 58, atk: 70, def: 45, spa: 40, spd: 45, spe: 42,
        },
        abilities: { first: 'Sand Veil', hidden: 'Rough Skin' },
        heightm: 0.7,
        weightkg: 20.5,
        color: 'Blue',
        evos: [ 'gabite' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'gabite',
      {
        species: 'Gabite',
        num: 444,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 90, def: 65, spa: 50, spd: 55, spe: 82,
        },
        abilities: { first: 'Sand Veil', hidden: 'Rough Skin' },
        heightm: 1.4,
        weightkg: 56,
        color: 'Blue',
        prevo: 'gible',
        evos: [ 'garchomp' ],
        evoLevel: 24,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'garchomp',
      {
        species: 'Garchomp',
        num: 445,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102,
        },
        abilities: { first: 'Sand Veil', hidden: 'Rough Skin' },
        heightm: 1.9,
        weightkg: 95,
        color: 'Blue',
        prevo: 'gabite',
        evoLevel: 48,
        eggGroups: [ 'Monster', 'Dragon' ],
        otherFormes: [ 'garchompmega' ],
      }
    ],
    [
      'garchompmega',
      {
        species: 'Garchomp-Mega',
        num: 445,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 108, atk: 170, def: 115, spa: 120, spd: 95, spe: 92,
        },
        baseSpecies: 'Garchomp',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Sand Force' },
        heightm: 1.9,
        weightkg: 95,
        color: 'Blue',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'munchlax',
      {
        species: 'Munchlax',
        num: 446,
        types: [ 'Normal' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 135, atk: 85, def: 40, spa: 40, spd: 85, spe: 5,
        },
        abilities: { first: 'Pickup', second: 'Thick Fat', hidden: 'Gluttony' },
        heightm: 0.6,
        weightkg: 105,
        color: 'Black',
        evos: [ 'snorlax' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'riolu',
      {
        species: 'Riolu',
        num: 447,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60,
        },
        abilities: { first: 'Steadfast', second: 'Inner Focus', hidden: 'Prankster' },
        heightm: 0.7,
        weightkg: 20.2,
        color: 'Blue',
        evos: [ 'lucario' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'lucario',
      {
        species: 'Lucario',
        num: 448,
        types: [ 'Fighting', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90,
        },
        abilities: { first: 'Steadfast', second: 'Inner Focus', hidden: 'Justified' },
        heightm: 1.2,
        weightkg: 54,
        color: 'Blue',
        prevo: 'riolu',
        evoLevel: 'Level up during Daytime with High Friendship',
        eggGroups: [ 'Field', 'Human-Like' ],
        otherFormes: [ 'lucariomega' ],
      }
    ],
    [
      'lucariomega',
      {
        species: 'Lucario-Mega',
        num: 448,
        types: [ 'Fighting', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 145, def: 88, spa: 140, spd: 70, spe: 112,
        },
        baseSpecies: 'Lucario',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Adaptability' },
        heightm: 1.3,
        weightkg: 57.5,
        color: 'Blue',
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'hippopotas',
      {
        species: 'Hippopotas',
        num: 449,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 72, def: 78, spa: 38, spd: 42, spe: 32,
        },
        abilities: { first: 'Sand Stream', hidden: 'Sand Force' },
        heightm: 0.8,
        weightkg: 49.5,
        color: 'Brown',
        evos: [ 'hippowdon' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'hippowdon',
      {
        species: 'Hippowdon',
        num: 450,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47,
        },
        abilities: { first: 'Sand Stream', hidden: 'Sand Force' },
        heightm: 2,
        weightkg: 300,
        color: 'Brown',
        prevo: 'hippopotas',
        evoLevel: 34,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'skorupi',
      {
        species: 'Skorupi',
        num: 451,
        types: [ 'Poison', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 50, def: 90, spa: 30, spd: 55, spe: 65,
        },
        abilities: { first: 'Battle Armor', second: 'Sniper', hidden: 'Keen Eye' },
        heightm: 0.8,
        weightkg: 12,
        color: 'Purple',
        evos: [ 'drapion' ],
        eggGroups: [ 'Bug', 'Water 3' ],
      }
    ],
    [
      'drapion',
      {
        species: 'Drapion',
        num: 452,
        types: [ 'Poison', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 90, def: 110, spa: 60, spd: 75, spe: 95,
        },
        abilities: { first: 'Battle Armor', second: 'Sniper', hidden: 'Keen Eye' },
        heightm: 1.3,
        weightkg: 61.5,
        color: 'Purple',
        prevo: 'skorupi',
        evoLevel: 40,
        eggGroups: [ 'Bug', 'Water 3' ],
      }
    ],
    [
      'croagunk',
      {
        species: 'Croagunk',
        num: 453,
        types: [ 'Poison', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 48, atk: 61, def: 40, spa: 61, spd: 40, spe: 50,
        },
        abilities: { first: 'Anticipation', second: 'Dry Skin', hidden: 'Poison Touch' },
        heightm: 0.7,
        weightkg: 23,
        color: 'Blue',
        evos: [ 'toxicroak' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'toxicroak',
      {
        species: 'Toxicroak',
        num: 454,
        types: [ 'Poison', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 85,
        },
        abilities: { first: 'Anticipation', second: 'Dry Skin', hidden: 'Poison Touch' },
        heightm: 1.3,
        weightkg: 44.4,
        color: 'Blue',
        prevo: 'croagunk',
        evoLevel: 37,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'carnivine',
      {
        species: 'Carnivine',
        num: 455,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 74, atk: 100, def: 72, spa: 90, spd: 72, spe: 46,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.4,
        weightkg: 27,
        color: 'Green',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'finneon',
      {
        species: 'Finneon',
        num: 456,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 49, atk: 49, def: 56, spa: 49, spd: 61, spe: 66,
        },
        abilities: { first: 'Swift Swim', second: 'Storm Drain', hidden: 'Water Veil' },
        heightm: 0.4,
        weightkg: 7,
        color: 'Blue',
        evos: [ 'lumineon' ],
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'lumineon',
      {
        species: 'Lumineon',
        num: 457,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 69, atk: 69, def: 76, spa: 69, spd: 86, spe: 91,
        },
        abilities: { first: 'Swift Swim', second: 'Storm Drain', hidden: 'Water Veil' },
        heightm: 1.2,
        weightkg: 24,
        color: 'Blue',
        prevo: 'finneon',
        evoLevel: 31,
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'mantyke',
      {
        species: 'Mantyke',
        num: 458,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 20, def: 50, spa: 60, spd: 120, spe: 50,
        },
        abilities: { first: 'Swift Swim', second: 'Water Absorb', hidden: 'Water Veil' },
        heightm: 1,
        weightkg: 65,
        color: 'Blue',
        evos: [ 'mantine' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'snover',
      {
        species: 'Snover',
        num: 459,
        types: [ 'Grass', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 62, def: 50, spa: 62, spd: 60, spe: 40,
        },
        abilities: { first: 'Snow Warning', hidden: 'Soundproof' },
        heightm: 1,
        weightkg: 50.5,
        color: 'White',
        evos: [ 'abomasnow' ],
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'abomasnow',
      {
        species: 'Abomasnow',
        num: 460,
        types: [ 'Grass', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60,
        },
        abilities: { first: 'Snow Warning', hidden: 'Soundproof' },
        heightm: 2.2,
        weightkg: 135.5,
        color: 'White',
        prevo: 'snover',
        evoLevel: 40,
        eggGroups: [ 'Monster', 'Grass' ],
        otherFormes: [ 'abomasnowmega' ],
      }
    ],
    [
      'abomasnowmega',
      {
        species: 'Abomasnow-Mega',
        num: 460,
        types: [ 'Grass', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 132, def: 105, spa: 132, spd: 105, spe: 30,
        },
        baseSpecies: 'Abomasnow',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Snow Warning' },
        heightm: 2.7,
        weightkg: 185,
        color: 'White',
        eggGroups: [ 'Monster', 'Grass' ],
      }
    ],
    [
      'weavile',
      {
        species: 'Weavile',
        num: 461,
        types: [ 'Dark', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125,
        },
        abilities: { first: 'Pressure', hidden: 'Pickpocket' },
        heightm: 1.1,
        weightkg: 34,
        color: 'Black',
        prevo: 'sneasel',
        evoLevel: 'Hold Razor Claw Nighttime',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'magnezone',
      {
        species: 'Magnezone',
        num: 462,
        types: [ 'Electric', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60,
        },
        abilities: { first: 'Magnet Pull', second: 'Sturdy', hidden: 'Analytic' },
        heightm: 1.2,
        weightkg: 180,
        color: 'Gray',
        prevo: 'magneton',
        evoLevel: 'Level 31 inside special magnetic field',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'lickilicky',
      {
        species: 'Lickilicky',
        num: 463,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 85, def: 95, spa: 80, spd: 95, spe: 50,
        },
        abilities: { first: 'Own Tempo', second: 'Oblivious', hidden: 'Cloud Nine' },
        heightm: 1.7,
        weightkg: 140,
        color: 'Pink',
        prevo: 'lickitung',
        evoLevel: 'Level up while knowing Rollout',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'rhyperior',
      {
        species: 'Rhyperior',
        num: 464,
        types: [ 'Ground', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40,
        },
        abilities: { first: 'Lightning Rod', second: 'Solid Rock', hidden: 'Reckless' },
        heightm: 2.4,
        weightkg: 282.8,
        color: 'Gray',
        prevo: 'rhydon',
        evoLevel: 'Trade while holding Protector',
        eggGroups: [ 'Monster', 'Field' ],
      }
    ],
    [
      'tangrowth',
      {
        species: 'Tangrowth',
        num: 465,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 125, spa: 110, spd: 50, spe: 50,
        },
        abilities: { first: 'Chlorophyll', second: 'Leaf Guard', hidden: 'Regenerator' },
        heightm: 2,
        weightkg: 128.6,
        color: 'Blue',
        prevo: 'tangela',
        evoLevel: 'Level up while knowing Ancient Power',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'electivire',
      {
        species: 'Electivire',
        num: 466,
        types: [ 'Electric' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 95,
        },
        abilities: { first: 'Motor Drive', hidden: 'Vital Spirit' },
        heightm: 1.8,
        weightkg: 138.6,
        color: 'Yellow',
        prevo: 'electabuzz',
        evoLevel: 'Trade while holding Electirizer',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'magmortar',
      {
        species: 'Magmortar',
        num: 467,
        types: [ 'Fire' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 83,
        },
        abilities: { first: 'Flame Body', hidden: 'Vital Spirit' },
        heightm: 1.6,
        weightkg: 68,
        color: 'Red',
        prevo: 'magmar',
        evoLevel: 'Trade while holding Magmarizer',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'togekiss',
      {
        species: 'Togekiss',
        num: 468,
        types: [ 'Fairy', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80,
        },
        abilities: { first: 'Hustle', second: 'Serene Grace', hidden: 'Super Luck' },
        heightm: 1.5,
        weightkg: 38,
        color: 'White',
        prevo: 'togetic',
        evoLevel: 'use Shiny Stone',
        eggGroups: [ 'Flying', 'Fairy' ],
      }
    ],
    [
      'yanmega',
      {
        species: 'Yanmega',
        num: 469,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 86, atk: 76, def: 86, spa: 116, spd: 56, spe: 95,
        },
        abilities: { first: 'Speed Boost', second: 'Tinted Lens', hidden: 'Frisk' },
        heightm: 1.9,
        weightkg: 51.5,
        color: 'Green',
        prevo: 'yanma',
        evoLevel: 'Level up while knowing Ancient Power',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'leafeon',
      {
        species: 'Leafeon',
        num: 470,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95,
        },
        abilities: { first: 'Leaf Guard', hidden: 'Chlorophyll' },
        heightm: 1,
        weightkg: 25.5,
        color: 'Green',
        prevo: 'eevee',
        evoLevel: 'use Leaf Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'glaceon',
      {
        species: 'Glaceon',
        num: 471,
        types: [ 'Ice' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Ice Body' },
        heightm: 0.8,
        weightkg: 25.9,
        color: 'Blue',
        prevo: 'eevee',
        evoLevel: 'use Ice Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gliscor',
      {
        species: 'Gliscor',
        num: 472,
        types: [ 'Ground', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95,
        },
        abilities: { first: 'Hyper Cutter', second: 'Sand Veil', hidden: 'Poison Heal' },
        heightm: 2,
        weightkg: 42.5,
        color: 'Purple',
        prevo: 'gligar',
        evoLevel: 'Hold Razor Fang Nighttime',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'mamoswine',
      {
        species: 'Mamoswine',
        num: 473,
        types: [ 'Ice', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80,
        },
        abilities: { first: 'Oblivious', second: 'Snow Cloak', hidden: 'Thick Fat' },
        heightm: 2.5,
        weightkg: 291,
        color: 'Brown',
        prevo: 'piloswine',
        evoLevel: 'Level up while knowing Ancient Power',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'porygonz',
      {
        species: 'Porygon-Z',
        num: 474,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90,
        },
        abilities: { first: 'Adaptability', second: 'Download', hidden: 'Analytic' },
        heightm: 0.9,
        weightkg: 34,
        color: 'Red',
        prevo: 'porygon2',
        evoLevel: 'Trade while holding Dubious Disc',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'gallade',
      {
        species: 'Gallade',
        num: 475,
        types: [ 'Psychic', 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80,
        },
        abilities: { first: 'Steadfast', hidden: 'Justified' },
        heightm: 1.6,
        weightkg: 52,
        color: 'White',
        prevo: 'kirlia',
        evoLevel: 'Male + use Dawn Stone',
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'gallademega' ],
      }
    ],
    [
      'gallademega',
      {
        species: 'Gallade-Mega',
        num: 475,
        types: [ 'Psychic', 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 68, atk: 165, def: 95, spa: 65, spd: 115, spe: 110,
        },
        baseSpecies: 'Gallade',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Inner Focus' },
        heightm: 1.6,
        weightkg: 56.4,
        color: 'White',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'probopass',
      {
        species: 'Probopass',
        num: 476,
        types: [ 'Rock', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 55, def: 145, spa: 75, spd: 150, spe: 40,
        },
        abilities: { first: 'Sturdy', second: 'Magnet Pull', hidden: 'Sand Force' },
        heightm: 1.4,
        weightkg: 340,
        color: 'Gray',
        prevo: 'nosepass',
        evoLevel: 'Level up in special magnetic field',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'dusknoir',
      {
        species: 'Dusknoir',
        num: 477,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 100, def: 135, spa: 65, spd: 135, spe: 45,
        },
        abilities: { first: 'Pressure', hidden: 'Frisk' },
        heightm: 2.2,
        weightkg: 106.6,
        color: 'Black',
        prevo: 'dusclops',
        evoLevel: 'Trade while holding Reaper Cloth',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'froslass',
      {
        species: 'Froslass',
        num: 478,
        types: [ 'Ice', 'Ghost' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Cursed Body' },
        heightm: 1.3,
        weightkg: 26.6,
        color: 'White',
        prevo: 'snorunt',
        evoLevel: 'Female + use Dawn Stone',
        eggGroups: [ 'Fairy', 'Mineral' ],
      }
    ],
    [
      'rotom',
      {
        species: 'Rotom',
        num: 479,
        types: [ 'Electric', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow' ],
      }
    ],
    [
      'rotomheat',
      {
        species: 'Rotom-Heat',
        num: 479,
        types: [ 'Electric', 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86,
        },
        baseSpecies: 'Rotom',
        forme: 'Heat',
        formeLetter: 'H',
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'rotomwash',
      {
        species: 'Rotom-Wash',
        num: 479,
        types: [ 'Electric', 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86,
        },
        baseSpecies: 'Rotom',
        forme: 'Wash',
        formeLetter: 'W',
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'rotomfrost',
      {
        species: 'Rotom-Frost',
        num: 479,
        types: [ 'Electric', 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86,
        },
        baseSpecies: 'Rotom',
        forme: 'Frost',
        formeLetter: 'F',
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'rotomfan',
      {
        species: 'Rotom-Fan',
        num: 479,
        types: [ 'Electric', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86,
        },
        baseSpecies: 'Rotom',
        forme: 'Fan',
        formeLetter: 'S',
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'rotommow',
      {
        species: 'Rotom-Mow',
        num: 479,
        types: [ 'Electric', 'Grass' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86,
        },
        baseSpecies: 'Rotom',
        forme: 'Mow',
        formeLetter: 'C',
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'uxie',
      {
        species: 'Uxie',
        num: 480,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 75, atk: 75, def: 130, spa: 75, spd: 130, spe: 95,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'mesprit',
      {
        species: 'Mesprit',
        num: 481,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 105, def: 105, spa: 105, spd: 105, spe: 80,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Pink',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'azelf',
      {
        species: 'Azelf',
        num: 482,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 75, atk: 125, def: 70, spa: 125, spd: 70, spe: 115,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'dialga',
      {
        species: 'Dialga',
        num: 483,
        types: [ 'Steel', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 120, def: 120, spa: 150, spd: 100, spe: 90,
        },
        abilities: { first: 'Pressure', hidden: 'Telepathy' },
        heightm: 5.4,
        weightkg: 683,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'palkia',
      {
        species: 'Palkia',
        num: 484,
        types: [ 'Water', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 120, def: 100, spa: 150, spd: 120, spe: 100,
        },
        abilities: { first: 'Pressure', hidden: 'Telepathy' },
        heightm: 4.2,
        weightkg: 336,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'heatran',
      {
        species: 'Heatran',
        num: 485,
        types: [ 'Fire', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77,
        },
        abilities: { first: 'Flash Fire', hidden: 'Flame Body' },
        heightm: 1.7,
        weightkg: 430,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'regigigas',
      {
        species: 'Regigigas',
        num: 486,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 110, atk: 160, def: 110, spa: 80, spd: 110, spe: 100,
        },
        abilities: { first: 'Slow Start' },
        heightm: 3.7,
        weightkg: 420,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'giratina',
      {
        species: 'Giratina',
        num: 487,
        baseForme: 'Altered',
        types: [ 'Ghost', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 150, atk: 100, def: 120, spa: 100, spd: 120, spe: 90,
        },
        abilities: { first: 'Pressure', hidden: 'Telepathy' },
        heightm: 4.5,
        weightkg: 750,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'giratinaorigin' ],
      }
    ],
    [
      'giratinaorigin',
      {
        species: 'Giratina-Origin',
        num: 487,
        types: [ 'Ghost', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 150, atk: 120, def: 100, spa: 120, spd: 100, spe: 90,
        },
        baseSpecies: 'Giratina',
        forme: 'Origin',
        formeLetter: 'O',
        abilities: { first: 'Levitate' },
        heightm: 6.9,
        weightkg: 650,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'cresselia',
      {
        species: 'Cresselia',
        num: 488,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 85.6,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'phione',
      {
        species: 'Phione',
        num: 489,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80,
        },
        abilities: { first: 'Hydration' },
        heightm: 0.4,
        weightkg: 3.1,
        color: 'Blue',
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'manaphy',
      {
        species: 'Manaphy',
        num: 490,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Hydration' },
        heightm: 0.3,
        weightkg: 1.4,
        color: 'Blue',
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'darkrai',
      {
        species: 'Darkrai',
        num: 491,
        types: [ 'Dark' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125,
        },
        abilities: { first: 'Bad Dreams' },
        heightm: 1.5,
        weightkg: 50.5,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'shaymin',
      {
        species: 'Shaymin',
        num: 492,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        baseForme: 'Land',
        abilities: { first: 'Natural Cure' },
        heightm: 0.2,
        weightkg: 2.1,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'shayminsky' ],
      }
    ],
    [
      'shayminsky',
      {
        species: 'Shaymin-Sky',
        num: 492,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 103, def: 75, spa: 120, spd: 75, spe: 127,
        },
        baseSpecies: 'Shaymin',
        forme: 'Sky',
        formeLetter: 'S',
        abilities: { first: 'Serene Grace' },
        heightm: 0.4,
        weightkg: 5.2,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceus',
      {
        species: 'Arceus',
        num: 493,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseForme: 'Normal',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [
          'arceusbug', 'arceusdark',
          'arceusdragon', 'arceuselectric',
          'arceusfairy', 'arceusfighting',
          'arceusfire', 'arceusflying',
          'arceusghost', 'arceusgrass',
          'arceusground', 'arceusice',
          'arceuspoison', 'arceuspsychic',
          'arceusrock', 'arceussteel',
          'arceuswater'
        ],
      }
    ],
    [
      'arceusbug',
      {
        species: 'Arceus-Bug',
        num: 493,
        types: [ 'Bug' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Bug',
        formeLetter: 'B',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusdark',
      {
        species: 'Arceus-Dark',
        num: 493,
        types: [ 'Dark' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Dark',
        formeLetter: 'D',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusdragon',
      {
        species: 'Arceus-Dragon',
        num: 493,
        types: [ 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Dragon',
        formeLetter: 'D',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceuselectric',
      {
        species: 'Arceus-Electric',
        num: 493,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Electric',
        formeLetter: 'E',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusfairy',
      {
        species: 'Arceus-Fairy',
        num: 493,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Fairy',
        formeLetter: 'F',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusfighting',
      {
        species: 'Arceus-Fighting',
        num: 493,
        types: [ 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Fighting',
        formeLetter: 'F',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusfire',
      {
        species: 'Arceus-Fire',
        num: 493,
        types: [ 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Fire',
        formeLetter: 'F',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusflying',
      {
        species: 'Arceus-Flying',
        num: 493,
        types: [ 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Flying',
        formeLetter: 'F',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusghost',
      {
        species: 'Arceus-Ghost',
        num: 493,
        types: [ 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Ghost',
        formeLetter: 'G',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusgrass',
      {
        species: 'Arceus-Grass',
        num: 493,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Grass',
        formeLetter: 'G',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusground',
      {
        species: 'Arceus-Ground',
        num: 493,
        types: [ 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Ground',
        formeLetter: 'G',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusice',
      {
        species: 'Arceus-Ice',
        num: 493,
        types: [ 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Ice',
        formeLetter: 'I',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceuspoison',
      {
        species: 'Arceus-Poison',
        num: 493,
        types: [ 'Poison' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Poison',
        formeLetter: 'P',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceuspsychic',
      {
        species: 'Arceus-Psychic',
        num: 493,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Psychic',
        formeLetter: 'P',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceusrock',
      {
        species: 'Arceus-Rock',
        num: 493,
        types: [ 'Rock' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Rock',
        formeLetter: 'R',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceussteel',
      {
        species: 'Arceus-Steel',
        num: 493,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Steel',
        formeLetter: 'S',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arceuswater',
      {
        species: 'Arceus-Water',
        num: 493,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120,
        },
        baseSpecies: 'Arceus',
        forme: 'Water',
        formeLetter: 'W',
        abilities: { first: 'Multitype' },
        heightm: 3.2,
        weightkg: 320,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'victini',
      {
        species: 'Victini',
        num: 494,
        types: [ 'Psychic', 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Victory Star' },
        heightm: 0.4,
        weightkg: 4,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'snivy',
      {
        species: 'Snivy',
        num: 495,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 45, atk: 45, def: 55, spa: 45, spd: 55, spe: 63,
        },
        abilities: { first: 'Overgrow', hidden: 'Contrary' },
        heightm: 0.6,
        weightkg: 8.1,
        color: 'Green',
        evos: [ 'servine' ],
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'servine',
      {
        species: 'Servine',
        num: 496,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 83,
        },
        abilities: { first: 'Overgrow', hidden: 'Contrary' },
        heightm: 0.8,
        weightkg: 16,
        color: 'Green',
        prevo: 'snivy',
        evos: [ 'serperior' ],
        evoLevel: 17,
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'serperior',
      {
        species: 'Serperior',
        num: 497,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 75, def: 95, spa: 75, spd: 95, spe: 113,
        },
        abilities: { first: 'Overgrow', hidden: 'Contrary' },
        heightm: 3.3,
        weightkg: 63,
        color: 'Green',
        prevo: 'servine',
        evoLevel: 36,
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'tepig',
      {
        species: 'Tepig',
        num: 498,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 63, def: 45, spa: 45, spd: 45, spe: 45,
        },
        abilities: { first: 'Blaze', hidden: 'Thick Fat' },
        heightm: 0.5,
        weightkg: 9.9,
        color: 'Red',
        evos: [ 'pignite' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pignite',
      {
        species: 'Pignite',
        num: 499,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 90, atk: 93, def: 55, spa: 70, spd: 55, spe: 55,
        },
        abilities: { first: 'Blaze', hidden: 'Thick Fat' },
        heightm: 1,
        weightkg: 55.5,
        color: 'Red',
        prevo: 'tepig',
        evos: [ 'emboar' ],
        evoLevel: 17,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'emboar',
      {
        species: 'Emboar',
        num: 500,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65,
        },
        abilities: { first: 'Blaze', hidden: 'Reckless' },
        heightm: 1.6,
        weightkg: 150,
        color: 'Red',
        prevo: 'pignite',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'oshawott',
      {
        species: 'Oshawott',
        num: 501,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 55, atk: 55, def: 45, spa: 63, spd: 45, spe: 45,
        },
        abilities: { first: 'Torrent', hidden: 'Shell Armor' },
        heightm: 0.5,
        weightkg: 5.9,
        color: 'Blue',
        evos: [ 'dewott' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'dewott',
      {
        species: 'Dewott',
        num: 502,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 75, def: 60, spa: 83, spd: 60, spe: 60,
        },
        abilities: { first: 'Torrent', hidden: 'Shell Armor' },
        heightm: 0.8,
        weightkg: 24.5,
        color: 'Blue',
        prevo: 'oshawott',
        evos: [ 'samurott' ],
        evoLevel: 17,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'samurott',
      {
        species: 'Samurott',
        num: 503,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 95, atk: 100, def: 85, spa: 108, spd: 70, spe: 70,
        },
        abilities: { first: 'Torrent', hidden: 'Shell Armor' },
        heightm: 1.5,
        weightkg: 94.6,
        color: 'Blue',
        prevo: 'dewott',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'patrat',
      {
        species: 'Patrat',
        num: 504,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 55, def: 39, spa: 35, spd: 39, spe: 42,
        },
        abilities: { first: 'Run Away', second: 'Keen Eye', hidden: 'Analytic' },
        heightm: 0.5,
        weightkg: 11.6,
        color: 'Brown',
        evos: [ 'watchog' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'watchog',
      {
        species: 'Watchog',
        num: 505,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 85, def: 69, spa: 60, spd: 69, spe: 77,
        },
        abilities: { first: 'Illuminate', second: 'Keen Eye', hidden: 'Analytic' },
        heightm: 1.1,
        weightkg: 27,
        color: 'Brown',
        prevo: 'patrat',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'lillipup',
      {
        species: 'Lillipup',
        num: 506,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 60, def: 45, spa: 25, spd: 45, spe: 55,
        },
        abilities: { first: 'Vital Spirit', second: 'Pickup', hidden: 'Run Away' },
        heightm: 0.4,
        weightkg: 4.1,
        color: 'Brown',
        evos: [ 'herdier' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'herdier',
      {
        species: 'Herdier',
        num: 507,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 80, def: 65, spa: 35, spd: 65, spe: 60,
        },
        abilities: { first: 'Intimidate', second: 'Sand Rush', hidden: 'Scrappy' },
        heightm: 0.9,
        weightkg: 14.7,
        color: 'Gray',
        prevo: 'lillipup',
        evos: [ 'stoutland' ],
        evoLevel: 16,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'stoutland',
      {
        species: 'Stoutland',
        num: 508,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 110, def: 90, spa: 45, spd: 90, spe: 80,
        },
        abilities: { first: 'Intimidate', second: 'Sand Rush', hidden: 'Scrappy' },
        heightm: 1.2,
        weightkg: 61,
        color: 'Gray',
        prevo: 'herdier',
        evoLevel: 32,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'purrloin',
      {
        species: 'Purrloin',
        num: 509,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 41, atk: 50, def: 37, spa: 50, spd: 37, spe: 66,
        },
        abilities: { first: 'Limber', second: 'Unburden', hidden: 'Prankster' },
        heightm: 0.4,
        weightkg: 10.1,
        color: 'Purple',
        evos: [ 'liepard' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'liepard',
      {
        species: 'Liepard',
        num: 510,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 64, atk: 88, def: 50, spa: 88, spd: 50, spe: 106,
        },
        abilities: { first: 'Limber', second: 'Unburden', hidden: 'Prankster' },
        heightm: 1.1,
        weightkg: 37.5,
        color: 'Purple',
        prevo: 'purrloin',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pansage',
      {
        species: 'Pansage',
        num: 511,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64,
        },
        abilities: { first: 'Gluttony', hidden: 'Overgrow' },
        heightm: 0.6,
        weightkg: 10.5,
        color: 'Green',
        evos: [ 'simisage' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'simisage',
      {
        species: 'Simisage',
        num: 512,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101,
        },
        abilities: { first: 'Gluttony', hidden: 'Overgrow' },
        heightm: 1.1,
        weightkg: 30.5,
        color: 'Green',
        prevo: 'pansage',
        evoLevel: 'use Leaf Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pansear',
      {
        species: 'Pansear',
        num: 513,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64,
        },
        abilities: { first: 'Gluttony', hidden: 'Blaze' },
        heightm: 0.6,
        weightkg: 11,
        color: 'Red',
        evos: [ 'simisear' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'simisear',
      {
        species: 'Simisear',
        num: 514,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101,
        },
        abilities: { first: 'Gluttony', hidden: 'Blaze' },
        heightm: 1,
        weightkg: 28,
        color: 'Red',
        prevo: 'pansear',
        evoLevel: 'use Fire Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'panpour',
      {
        species: 'Panpour',
        num: 515,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64,
        },
        abilities: { first: 'Gluttony', hidden: 'Torrent' },
        heightm: 0.6,
        weightkg: 13.5,
        color: 'Blue',
        evos: [ 'simipour' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'simipour',
      {
        species: 'Simipour',
        num: 516,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101,
        },
        abilities: { first: 'Gluttony', hidden: 'Torrent' },
        heightm: 1,
        weightkg: 29,
        color: 'Blue',
        prevo: 'panpour',
        evoLevel: 'use Water Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'munna',
      {
        species: 'Munna',
        num: 517,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 76, atk: 25, def: 45, spa: 67, spd: 55, spe: 24,
        },
        abilities: { first: 'Forewarn', second: 'Synchronize', hidden: 'Telepathy' },
        heightm: 0.6,
        weightkg: 23.3,
        color: 'Pink',
        evos: [ 'musharna' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'musharna',
      {
        species: 'Musharna',
        num: 518,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 116, atk: 55, def: 85, spa: 107, spd: 95, spe: 29,
        },
        abilities: { first: 'Forewarn', second: 'Synchronize', hidden: 'Telepathy' },
        heightm: 1.1,
        weightkg: 60.5,
        color: 'Pink',
        prevo: 'munna',
        evoLevel: 'use Moon Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pidove',
      {
        species: 'Pidove',
        num: 519,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 55, def: 50, spa: 36, spd: 30, spe: 43,
        },
        abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
        heightm: 0.3,
        weightkg: 2.1,
        color: 'Gray',
        evos: [ 'tranquill' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'tranquill',
      {
        species: 'Tranquill',
        num: 520,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 77, def: 62, spa: 50, spd: 42, spe: 65,
        },
        abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
        heightm: 0.6,
        weightkg: 15,
        color: 'Gray',
        prevo: 'pidove',
        evos: [ 'unfezant' ],
        evoLevel: 21,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'unfezant',
      {
        species: 'Unfezant',
        num: 521,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 115, def: 80, spa: 65, spd: 55, spe: 93,
        },
        abilities: { first: 'Big Pecks', second: 'Super Luck', hidden: 'Rivalry' },
        heightm: 1.2,
        weightkg: 29,
        color: 'Gray',
        prevo: 'tranquill',
        evoLevel: 32,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'blitzle',
      {
        species: 'Blitzle',
        num: 522,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 60, def: 32, spa: 50, spd: 32, spe: 76,
        },
        abilities: { first: 'Lightning Rod', second: 'Motor Drive', hidden: 'Sap Sipper' },
        heightm: 0.8,
        weightkg: 29.8,
        color: 'Black',
        evos: [ 'zebstrika' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'zebstrika',
      {
        species: 'Zebstrika',
        num: 523,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 100, def: 63, spa: 80, spd: 63, spe: 116,
        },
        abilities: { first: 'Lightning Rod', second: 'Motor Drive', hidden: 'Sap Sipper' },
        heightm: 1.6,
        weightkg: 79.5,
        color: 'Black',
        prevo: 'blitzle',
        evoLevel: 27,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'roggenrola',
      {
        species: 'Roggenrola',
        num: 524,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 75, def: 85, spa: 25, spd: 25, spe: 15,
        },
        abilities: { first: 'Sturdy', second: 'Weak Armor', hidden: 'Sand Force' },
        heightm: 0.4,
        weightkg: 18,
        color: 'Blue',
        evos: [ 'boldore' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'boldore',
      {
        species: 'Boldore',
        num: 525,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 105, def: 105, spa: 50, spd: 40, spe: 20,
        },
        abilities: { first: 'Sturdy', second: 'Weak Armor', hidden: 'Sand Force' },
        heightm: 0.9,
        weightkg: 102,
        color: 'Blue',
        prevo: 'roggenrola',
        evos: [ 'gigalith' ],
        evoLevel: 25,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'gigalith',
      {
        species: 'Gigalith',
        num: 526,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 135, def: 130, spa: 60, spd: 80, spe: 25,
        },
        abilities: { first: 'Sturdy', second: 'Sand Stream', hidden: 'Sand Force' },
        heightm: 1.7,
        weightkg: 260,
        color: 'Blue',
        prevo: 'boldore',
        evoLevel: 'Trade',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'woobat',
      {
        species: 'Woobat',
        num: 527,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 45, def: 43, spa: 55, spd: 43, spe: 72,
        },
        abilities: { first: 'Unaware', second: 'Klutz', hidden: 'Simple' },
        heightm: 0.4,
        weightkg: 2.1,
        color: 'Blue',
        evos: [ 'swoobat' ],
        eggGroups: [ 'Flying', 'Field' ],
      }
    ],
    [
      'swoobat',
      {
        species: 'Swoobat',
        num: 528,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 67, atk: 57, def: 55, spa: 77, spd: 55, spe: 114,
        },
        abilities: { first: 'Unaware', second: 'Klutz', hidden: 'Simple' },
        heightm: 0.9,
        weightkg: 10.5,
        color: 'Blue',
        prevo: 'woobat',
        evoLevel: 2,
        eggGroups: [ 'Flying', 'Field' ],
      }
    ],
    [
      'drilbur',
      {
        species: 'Drilbur',
        num: 529,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 85, def: 40, spa: 30, spd: 45, spe: 68,
        },
        abilities: { first: 'Sand Rush', second: 'Sand Force', hidden: 'Mold Breaker' },
        heightm: 0.3,
        weightkg: 8.5,
        color: 'Gray',
        evos: [ 'excadrill' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'excadrill',
      {
        species: 'Excadrill',
        num: 530,
        types: [ 'Ground', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 135, def: 60, spa: 50, spd: 65, spe: 88,
        },
        abilities: { first: 'Sand Rush', second: 'Sand Force', hidden: 'Mold Breaker' },
        heightm: 0.7,
        weightkg: 40.4,
        color: 'Gray',
        prevo: 'drilbur',
        evoLevel: 31,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'audino',
      {
        species: 'Audino',
        num: 531,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 103, atk: 60, def: 86, spa: 60, spd: 86, spe: 50,
        },
        abilities: { first: 'Healer', second: 'Regenerator', hidden: 'Klutz' },
        heightm: 1.1,
        weightkg: 31,
        color: 'Pink',
        eggGroups: [ 'Fairy' ],
        otherFormes: [ 'audinomega' ],
      }
    ],
    [
      'audinomega',
      {
        species: 'Audino-Mega',
        num: 531,
        types: [ 'Normal', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 103, atk: 60, def: 126, spa: 80, spd: 126, spe: 50,
        },
        baseSpecies: 'Audino',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Healer' },
        heightm: 1.5,
        weightkg: 32,
        color: 'White',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'timburr',
      {
        species: 'Timburr',
        num: 532,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 75, atk: 80, def: 55, spa: 25, spd: 35, spe: 35,
        },
        abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
        heightm: 0.6,
        weightkg: 12.5,
        color: 'Gray',
        evos: [ 'gurdurr' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'gurdurr',
      {
        species: 'Gurdurr',
        num: 533,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 85, atk: 105, def: 85, spa: 40, spd: 50, spe: 40,
        },
        abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
        heightm: 1.2,
        weightkg: 40,
        color: 'Gray',
        prevo: 'timburr',
        evos: [ 'conkeldurr' ],
        evoLevel: 25,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'conkeldurr',
      {
        species: 'Conkeldurr',
        num: 534,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.25 },
        baseStats: {
          hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45,
        },
        abilities: { first: 'Guts', second: 'Sheer Force', hidden: 'Iron Fist' },
        heightm: 1.4,
        weightkg: 87,
        color: 'Brown',
        prevo: 'gurdurr',
        evoLevel: 'Trade',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'tympole',
      {
        species: 'Tympole',
        num: 535,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 50, def: 40, spa: 50, spd: 40, spe: 64,
        },
        abilities: { first: 'Swift Swim', second: 'Hydration', hidden: 'Water Absorb' },
        heightm: 0.5,
        weightkg: 4.5,
        color: 'Blue',
        evos: [ 'palpitoad' ],
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'palpitoad',
      {
        species: 'Palpitoad',
        num: 536,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 65, def: 55, spa: 65, spd: 55, spe: 69,
        },
        abilities: { first: 'Swift Swim', second: 'Hydration', hidden: 'Water Absorb' },
        heightm: 0.8,
        weightkg: 17,
        color: 'Blue',
        prevo: 'tympole',
        evos: [ 'seismitoad' ],
        evoLevel: 25,
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'seismitoad',
      {
        species: 'Seismitoad',
        num: 537,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 95, def: 75, spa: 85, spd: 75, spe: 74,
        },
        abilities: { first: 'Swift Swim', second: 'Poison Touch', hidden: 'Water Absorb' },
        heightm: 1.5,
        weightkg: 62,
        color: 'Blue',
        prevo: 'palpitoad',
        evoLevel: 36,
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'throh',
      {
        species: 'Throh',
        num: 538,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 120, atk: 100, def: 85, spa: 30, spd: 85, spe: 45,
        },
        abilities: { first: 'Guts', second: 'Inner Focus', hidden: 'Mold Breaker' },
        heightm: 1.3,
        weightkg: 55.5,
        color: 'Red',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'sawk',
      {
        species: 'Sawk',
        num: 539,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 75, atk: 125, def: 75, spa: 30, spd: 75, spe: 85,
        },
        abilities: { first: 'Sturdy', second: 'Inner Focus', hidden: 'Mold Breaker' },
        heightm: 1.4,
        weightkg: 51,
        color: 'Blue',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'sewaddle',
      {
        species: 'Sewaddle',
        num: 540,
        types: [ 'Bug', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 53, def: 70, spa: 40, spd: 60, spe: 42,
        },
        abilities: { first: 'Swarm', second: 'Chlorophyll', hidden: 'Overcoat' },
        heightm: 0.3,
        weightkg: 2.5,
        color: 'Yellow',
        evos: [ 'swadloon' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'swadloon',
      {
        species: 'Swadloon',
        num: 541,
        types: [ 'Bug', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 63, def: 90, spa: 50, spd: 80, spe: 42,
        },
        abilities: { first: 'Leaf Guard', second: 'Chlorophyll', hidden: 'Overcoat' },
        heightm: 0.5,
        weightkg: 7.3,
        color: 'Green',
        prevo: 'sewaddle',
        evos: [ 'leavanny' ],
        evoLevel: 20,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'leavanny',
      {
        species: 'Leavanny',
        num: 542,
        types: [ 'Bug', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 92,
        },
        abilities: { first: 'Swarm', second: 'Chlorophyll', hidden: 'Overcoat' },
        heightm: 1.2,
        weightkg: 20.5,
        color: 'Yellow',
        prevo: 'swadloon',
        evoLevel: 21,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'venipede',
      {
        species: 'Venipede',
        num: 543,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 45, def: 59, spa: 30, spd: 39, spe: 57,
        },
        abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
        heightm: 0.4,
        weightkg: 5.3,
        color: 'Red',
        evos: [ 'whirlipede' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'whirlipede',
      {
        species: 'Whirlipede',
        num: 544,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 55, def: 99, spa: 40, spd: 79, spe: 47,
        },
        abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
        heightm: 1.2,
        weightkg: 58.5,
        color: 'Gray',
        prevo: 'venipede',
        evos: [ 'scolipede' ],
        evoLevel: 22,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'scolipede',
      {
        species: 'Scolipede',
        num: 545,
        types: [ 'Bug', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 100, def: 89, spa: 55, spd: 69, spe: 112,
        },
        abilities: { first: 'Poison Point', second: 'Swarm', hidden: 'Speed Boost' },
        heightm: 2.5,
        weightkg: 200.5,
        color: 'Red',
        prevo: 'whirlipede',
        evoLevel: 30,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'cottonee',
      {
        species: 'Cottonee',
        num: 546,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 27, def: 60, spa: 37, spd: 50, spe: 66,
        },
        abilities: { first: 'Prankster', second: 'Infiltrator', hidden: 'Chlorophyll' },
        heightm: 0.3,
        weightkg: 0.6,
        color: 'Green',
        evos: [ 'whimsicott' ],
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'whimsicott',
      {
        species: 'Whimsicott',
        num: 547,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116,
        },
        abilities: { first: 'Prankster', second: 'Infiltrator', hidden: 'Chlorophyll' },
        heightm: 0.7,
        weightkg: 6.6,
        color: 'Green',
        prevo: 'cottonee',
        evoLevel: 'use Sun Stone',
        eggGroups: [ 'Fairy', 'Grass' ],
      }
    ],
    [
      'petilil',
      {
        species: 'Petilil',
        num: 548,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 45, atk: 35, def: 50, spa: 70, spd: 50, spe: 30,
        },
        abilities: { first: 'Chlorophyll', second: 'Own Tempo', hidden: 'Leaf Guard' },
        heightm: 0.5,
        weightkg: 6.6,
        color: 'Green',
        evos: [ 'lilligant' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'lilligant',
      {
        species: 'Lilligant',
        num: 549,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 70, atk: 60, def: 75, spa: 110, spd: 75, spe: 90,
        },
        abilities: { first: 'Chlorophyll', second: 'Own Tempo', hidden: 'Leaf Guard' },
        heightm: 1.1,
        weightkg: 16.3,
        color: 'Green',
        prevo: 'petilil',
        evoLevel: 'use Sun Stone',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'basculin',
      {
        species: 'Basculin',
        num: 550,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98,
        },
        baseForme: 'Red-Striped',
        abilities: { first: 'Reckless', second: 'Adaptability', hidden: 'Mold Breaker' },
        heightm: 1,
        weightkg: 18,
        color: 'Green',
        eggGroups: [ 'Water 2' ],
        otherFormes: [ 'basculinbluestriped' ],
      }
    ],
    [
      'basculinbluestriped',
      {
        species: 'Basculin-Blue-Striped',
        num: 550,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98,
        },
        baseSpecies: 'Basculin',
        forme: 'Blue-Striped',
        formeLetter: 'B',
        abilities: { first: 'Rock Head', second: 'Adaptability', hidden: 'Mold Breaker' },
        heightm: 1,
        weightkg: 18,
        color: 'Green',
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'sandile',
      {
        species: 'Sandile',
        num: 551,
        types: [ 'Ground', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 72, def: 35, spa: 35, spd: 35, spe: 65,
        },
        abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
        heightm: 0.7,
        weightkg: 15.2,
        color: 'Brown',
        evos: [ 'krokorok' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'krokorok',
      {
        species: 'Krokorok',
        num: 552,
        types: [ 'Ground', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 82, def: 45, spa: 45, spd: 45, spe: 74,
        },
        abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
        heightm: 1,
        weightkg: 33.4,
        color: 'Brown',
        prevo: 'sandile',
        evos: [ 'krookodile' ],
        evoLevel: 29,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'krookodile',
      {
        species: 'Krookodile',
        num: 553,
        types: [ 'Ground', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 117, def: 80, spa: 65, spd: 70, spe: 92,
        },
        abilities: { first: 'Intimidate', second: 'Moxie', hidden: 'Anger Point' },
        heightm: 1.5,
        weightkg: 96.3,
        color: 'Red',
        prevo: 'krokorok',
        evoLevel: 40,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'darumaka',
      {
        species: 'Darumaka',
        num: 554,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50,
        },
        abilities: { first: 'Hustle', hidden: 'Inner Focus' },
        heightm: 0.6,
        weightkg: 37.5,
        color: 'Red',
        evos: [ 'darmanitan' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'darumakagalar' ],
      }
    ],
    [
      'darumakagalar',
      {
        species: 'Darumaka-Galar',
        num: 554,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Darumaka',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50,
        },
        abilities: { first: 'Hustle', second: 'Hustle', hidden: 'Inner Focus' },
        heightm: 0.70,
        weightkg: 40.0,
        color: 'White',
        evos: [ 'darmanitangalar' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'darmanitan',
      {
        species: 'Darmanitan',
        num: 555,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95,
        },
        baseForme: 'Standard',
        abilities: { first: 'Sheer Force', hidden: 'Zen Mode' },
        heightm: 1.3,
        weightkg: 92.9,
        color: 'Red',
        prevo: 'darumaka',
        evoLevel: 35,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'darmanitanzen', 'darmanitangalar' ],
      }
    ],
    [
      'darmanitangalar',
      {
        species: 'Darmanitan-Galar',
        num: 55,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Darmanitan',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95,
        },
        abilities: { first: 'Gorilla Tactics', second: 'Gorilla Tactics', hidden: 'Zen Mode' },
        heightm: 1.70,
        weightkg: 120.0,
        color: 'White',
        prevo: 'darumaka-galar',
        evoLevel: 'use Ice Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'darmanitanzen',
      {
        species: 'Darmanitan-Zen',
        num: 555,
        types: [ 'Fire', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 30, def: 105, spa: 140, spd: 105, spe: 55,
        },
        baseSpecies: 'Darmanitan',
        forme: 'Zen',
        formeLetter: 'Z',
        abilities: { first: 'Zen Mode' },
        heightm: 1.3,
        weightkg: 92.9,
        color: 'Blue',
        prevo: 'darumaka',
        evoLevel: 35,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'darmanitanzengalar',
      {
        species: 'Darmanitan-Zen-Galar',
        num: 555,
        types: [ 'Ice', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 160, def: 55, spa: 30, spd: 55, spe: 135,
        },
        baseSpecies: 'Darmanitan',
        forme: 'Zen-Galar',
        formeLetter: 'Z',
        abilities: { first: 'Gorilla Tactics', second: 'Gorilla Tactics', hidden: 'Zen Mode' },
        heightm: 1.7,
        weightkg: 120.0,
        color: 'White',
        prevo: 'darumakagalar',
        evoLevel: 'use Ice Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'maractus',
      {
        species: 'Maractus',
        num: 556,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 86, def: 67, spa: 106, spd: 67, spe: 60,
        },
        abilities: { first: 'Water Absorb', second: 'Chlorophyll', hidden: 'Storm Drain' },
        heightm: 1,
        weightkg: 28,
        color: 'Green',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'dwebble',
      {
        species: 'Dwebble',
        num: 557,
        types: [ 'Bug', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 65, def: 85, spa: 35, spd: 35, spe: 55,
        },
        abilities: { first: 'Sturdy', second: 'Shell Armor', hidden: 'Weak Armor' },
        heightm: 0.3,
        weightkg: 14.5,
        color: 'Red',
        evos: [ 'crustle' ],
        eggGroups: [ 'Bug', 'Mineral' ],
      }
    ],
    [
      'crustle',
      {
        species: 'Crustle',
        num: 558,
        types: [ 'Bug', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 45,
        },
        abilities: { first: 'Sturdy', second: 'Shell Armor', hidden: 'Weak Armor' },
        heightm: 1.4,
        weightkg: 200,
        color: 'Red',
        prevo: 'dwebble',
        evoLevel: 34,
        eggGroups: [ 'Bug', 'Mineral' ],
      }
    ],
    [
      'scraggy',
      {
        species: 'Scraggy',
        num: 559,
        types: [ 'Dark', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 75, def: 70, spa: 35, spd: 70, spe: 48,
        },
        abilities: { first: 'Shed Skin', second: 'Moxie', hidden: 'Intimidate' },
        heightm: 0.6,
        weightkg: 11.8,
        color: 'Yellow',
        evos: [ 'scrafty' ],
        eggGroups: [ 'Field', 'Dragon' ],
      }
    ],
    [
      'scrafty',
      {
        species: 'Scrafty',
        num: 560,
        types: [ 'Dark', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 90, def: 115, spa: 45, spd: 115, spe: 58,
        },
        abilities: { first: 'Shed Skin', second: 'Moxie', hidden: 'Intimidate' },
        heightm: 1.1,
        weightkg: 30,
        color: 'Red',
        prevo: 'scraggy',
        evoLevel: 39,
        eggGroups: [ 'Field', 'Dragon' ],
      }
    ],
    [
      'sigilyph',
      {
        species: 'Sigilyph',
        num: 561,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 58, def: 80, spa: 103, spd: 80, spe: 97,
        },
        abilities: { first: 'Wonder Skin', second: 'Magic Guard', hidden: 'Tinted Lens' },
        heightm: 1.4,
        weightkg: 14,
        color: 'Black',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'yamask',
      {
        species: 'Yamask',
        num: 562,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 30, def: 85, spa: 55, spd: 65, spe: 30,
        },
        abilities: { first: 'Mummy' },
        heightm: 0.5,
        weightkg: 1.5,
        color: 'Black',
        evos: [ 'cofagrigus' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
        otherFormes: [ 'yamaskgalar' ],
      }
    ],
    [
      'yamaskgalar',
      {
        species: 'Yamask-Galar',
        num: 562,
        types: [ 'Ground', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseSpecies: 'Yamask',
        forme: 'Galar',
        formeLetter: 'G',
        baseStats: {
          hp: 38, atk: 55, def: 85, spa: 30, spd: 65, spe: 30,
        },
        abilities: { first: 'Wandering Spirit', second: 'Wandering Spirit', hidden: 'Wandering Spirit' },
        heightm: 0.50,
        weightkg: 1.5,
        color: 'Black',
        evos: [ 'runerigus' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'cofagrigus',
      {
        species: 'Cofagrigus',
        num: 563,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 58, atk: 50, def: 145, spa: 95, spd: 105, spe: 30,
        },
        abilities: { first: 'Mummy' },
        heightm: 1.7,
        weightkg: 76.5,
        color: 'Yellow',
        prevo: 'yamask',
        evoLevel: 34,
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'tirtouga',
      {
        species: 'Tirtouga',
        num: 564,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 54, atk: 78, def: 103, spa: 53, spd: 45, spe: 22,
        },
        abilities: { first: 'Solid Rock', second: 'Sturdy', hidden: 'Swift Swim' },
        heightm: 0.7,
        weightkg: 16.5,
        color: 'Blue',
        evos: [ 'carracosta' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'carracosta',
      {
        species: 'Carracosta',
        num: 565,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 74, atk: 108, def: 133, spa: 83, spd: 65, spe: 32,
        },
        abilities: { first: 'Solid Rock', second: 'Sturdy', hidden: 'Swift Swim' },
        heightm: 1.2,
        weightkg: 81,
        color: 'Blue',
        prevo: 'tirtouga',
        evoLevel: 37,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'archen',
      {
        species: 'Archen',
        num: 566,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 55, atk: 112, def: 45, spa: 74, spd: 45, spe: 70,
        },
        abilities: { first: 'Defeatist' },
        heightm: 0.5,
        weightkg: 9.5,
        color: 'Yellow',
        evos: [ 'archeops' ],
        eggGroups: [ 'Flying', 'Water 3' ],
      }
    ],
    [
      'archeops',
      {
        species: 'Archeops',
        num: 567,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 140, def: 65, spa: 112, spd: 65, spe: 110,
        },
        abilities: { first: 'Defeatist' },
        heightm: 1.4,
        weightkg: 32,
        color: 'Yellow',
        prevo: 'archen',
        evoLevel: 37,
        eggGroups: [ 'Flying', 'Water 3' ],
      }
    ],
    [
      'trubbish',
      {
        species: 'Trubbish',
        num: 568,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 50, def: 62, spa: 40, spd: 62, spe: 65,
        },
        abilities: { first: 'Stench', second: 'Sticky Hold', hidden: 'Aftermath' },
        heightm: 0.6,
        weightkg: 31,
        color: 'Green',
        evos: [ 'garbodor' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'garbodor',
      {
        species: 'Garbodor',
        num: 569,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75,
        },
        abilities: { first: 'Stench', second: 'Weak Armor', hidden: 'Aftermath' },
        heightm: 1.9,
        weightkg: 107.3,
        color: 'Green',
        prevo: 'trubbish',
        evoLevel: 36,
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'garbodorgmax' ],
      }
    ],
    [
      'garbodorgmax',
      {
        species: 'Garbodor-Gmax',
        baseSpecies: 'Garbodor',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 569,
        types: [ 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75,
        },
        abilities: { first: 'Stench', second: 'Weak Armor', hidden: 'Aftermath' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Green',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'zorua',
      {
        species: 'Zorua',
        num: 570,
        types: [ 'Dark' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 40, atk: 65, def: 40, spa: 80, spd: 40, spe: 65,
        },
        abilities: { first: 'Illusion' },
        heightm: 0.7,
        weightkg: 12.5,
        color: 'Gray',
        evos: [ 'zoroark' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'zoroark',
      {
        species: 'Zoroark',
        num: 571,
        types: [ 'Dark' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105,
        },
        abilities: { first: 'Illusion' },
        heightm: 1.6,
        weightkg: 81.1,
        color: 'Gray',
        prevo: 'zorua',
        evoLevel: 30,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'minccino',
      {
        species: 'Minccino',
        num: 572,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 55, atk: 50, def: 40, spa: 40, spd: 40, spe: 75,
        },
        abilities: { first: 'Cute Charm', second: 'Technician', hidden: 'Skill Link' },
        heightm: 0.4,
        weightkg: 5.8,
        color: 'Gray',
        evos: [ 'cinccino' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'cinccino',
      {
        species: 'Cinccino',
        num: 573,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 75, atk: 95, def: 60, spa: 65, spd: 60, spe: 115,
        },
        abilities: { first: 'Cute Charm', second: 'Technician', hidden: 'Skill Link' },
        heightm: 0.5,
        weightkg: 7.5,
        color: 'Gray',
        prevo: 'minccino',
        evoLevel: 'use Shiny Stone',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gothita',
      {
        species: 'Gothita',
        num: 574,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 45, atk: 30, def: 50, spa: 55, spd: 65, spe: 45,
        },
        abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
        heightm: 0.4,
        weightkg: 5.8,
        color: 'Purple',
        evos: [ 'gothorita' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'gothorita',
      {
        species: 'Gothorita',
        num: 575,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 60, atk: 45, def: 70, spa: 75, spd: 85, spe: 55,
        },
        abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
        heightm: 0.7,
        weightkg: 18,
        color: 'Purple',
        prevo: 'gothita',
        evos: [ 'gothitelle' ],
        evoLevel: 32,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'gothitelle',
      {
        species: 'Gothitelle',
        num: 576,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 70, atk: 55, def: 95, spa: 95, spd: 110, spe: 65,
        },
        abilities: { first: 'Frisk', second: 'Competitive', hidden: 'Shadow Tag' },
        heightm: 1.5,
        weightkg: 44,
        color: 'Purple',
        prevo: 'gothorita',
        evoLevel: 41,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'solosis',
      {
        species: 'Solosis',
        num: 577,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 30, def: 40, spa: 105, spd: 50, spe: 20,
        },
        abilities: { first: 'Overcoat', second: 'Magic Guard', hidden: 'Regenerator' },
        heightm: 0.3,
        weightkg: 1,
        color: 'Green',
        evos: [ 'duosion' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'duosion',
      {
        species: 'Duosion',
        num: 578,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 40, def: 50, spa: 125, spd: 60, spe: 30,
        },
        abilities: { first: 'Overcoat', second: 'Magic Guard', hidden: 'Regenerator' },
        heightm: 0.6,
        weightkg: 8,
        color: 'Green',
        prevo: 'solosis',
        evos: [ 'reuniclus' ],
        evoLevel: 32,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'reuniclus',
      {
        species: 'Reuniclus',
        num: 579,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30,
        },
        abilities: { first: 'Overcoat', second: 'Magic Guard', hidden: 'Regenerator' },
        heightm: 1,
        weightkg: 20.1,
        color: 'Green',
        prevo: 'duosion',
        evoLevel: 41,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'ducklett',
      {
        species: 'Ducklett',
        num: 580,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 44, def: 50, spa: 44, spd: 50, spe: 55,
        },
        abilities: { first: 'Keen Eye', second: 'Big Pecks', hidden: 'Hydration' },
        heightm: 0.5,
        weightkg: 5.5,
        color: 'Blue',
        evos: [ 'swanna' ],
        eggGroups: [ 'Water 1', 'Flying' ],
      }
    ],
    [
      'swanna',
      {
        species: 'Swanna',
        num: 581,
        types: [ 'Water', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 87, def: 63, spa: 87, spd: 63, spe: 98,
        },
        abilities: { first: 'Keen Eye', second: 'Big Pecks', hidden: 'Hydration' },
        heightm: 1.3,
        weightkg: 24.2,
        color: 'White',
        prevo: 'ducklett',
        evoLevel: 35,
        eggGroups: [ 'Water 1', 'Flying' ],
      }
    ],
    [
      'vanillite',
      {
        species: 'Vanillite',
        num: 582,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 36, atk: 50, def: 50, spa: 65, spd: 60, spe: 44,
        },
        abilities: { first: 'Ice Body', second: 'Snow Cloak', hidden: 'Weak Armor' },
        heightm: 0.4,
        weightkg: 5.7,
        color: 'White',
        evos: [ 'vanillish' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'vanillish',
      {
        species: 'Vanillish',
        num: 583,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 51, atk: 65, def: 65, spa: 80, spd: 75, spe: 59,
        },
        abilities: { first: 'Ice Body', second: 'Snow Cloak', hidden: 'Weak Armor' },
        heightm: 1.1,
        weightkg: 41,
        color: 'White',
        prevo: 'vanillite',
        evos: [ 'vanilluxe' ],
        evoLevel: 35,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'vanilluxe',
      {
        species: 'Vanilluxe',
        num: 584,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79,
        },
        abilities: { first: 'Ice Body', second: 'Snow Warning', hidden: 'Weak Armor' },
        heightm: 1.3,
        weightkg: 57.5,
        color: 'White',
        prevo: 'vanillish',
        evoLevel: 47,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'deerling',
      {
        species: 'Deerling',
        num: 585,
        types: [ 'Normal', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 60, def: 50, spa: 40, spd: 50, spe: 75,
        },
        baseForme: 'Spring',
        abilities: { first: 'Chlorophyll', second: 'Sap Sipper', hidden: 'Serene Grace' },
        heightm: 0.6,
        weightkg: 19.5,
        color: 'Pink',
        evos: [ 'sawsbuck' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'deerlingsummer', 'deerlingautumn', 'deerlingwinter' ],
      }
    ],
    [
      'sawsbuck',
      {
        species: 'Sawsbuck',
        num: 586,
        types: [ 'Normal', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95,
        },
        baseForme: 'Spring',
        abilities: { first: 'Chlorophyll', second: 'Sap Sipper', hidden: 'Serene Grace' },
        heightm: 1.9,
        weightkg: 92.5,
        color: 'Brown',
        prevo: 'deerling',
        evoLevel: 34,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'sawsbucksummer', 'sawsbuckautumn', 'sawsbuckwinter' ],
      }
    ],
    [
      'emolga',
      {
        species: 'Emolga',
        num: 587,
        types: [ 'Electric', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 103,
        },
        abilities: { first: 'Static', hidden: 'Motor Drive' },
        heightm: 0.4,
        weightkg: 5,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'karrablast',
      {
        species: 'Karrablast',
        num: 588,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 75, def: 45, spa: 40, spd: 45, spe: 60,
        },
        abilities: { first: 'Swarm', second: 'Shed Skin', hidden: 'No Guard' },
        heightm: 0.5,
        weightkg: 5.9,
        color: 'Blue',
        evos: [ 'escavalier' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'escavalier',
      {
        species: 'Escavalier',
        num: 589,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 135, def: 105, spa: 60, spd: 105, spe: 20,
        },
        abilities: { first: 'Swarm', second: 'Shell Armor', hidden: 'Overcoat' },
        heightm: 1,
        weightkg: 33,
        color: 'Gray',
        prevo: 'karrablast',
        evoLevel: 'Trade for Shelmet',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'foongus',
      {
        species: 'Foongus',
        num: 590,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 69, atk: 55, def: 45, spa: 55, spd: 55, spe: 15,
        },
        abilities: { first: 'Effect Spore', hidden: 'Regenerator' },
        heightm: 0.2,
        weightkg: 1,
        color: 'White',
        evos: [ 'amoonguss' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'amoonguss',
      {
        species: 'Amoonguss',
        num: 591,
        types: [ 'Grass', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30,
        },
        abilities: { first: 'Effect Spore', hidden: 'Regenerator' },
        heightm: 0.6,
        weightkg: 10.5,
        color: 'White',
        prevo: 'foongus',
        evoLevel: 39,
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'frillish',
      {
        species: 'Frillish',
        num: 592,
        types: [ 'Water', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 40, def: 50, spa: 65, spd: 85, spe: 40,
        },
        abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
        heightm: 1.2,
        weightkg: 33,
        color: 'White',
        evos: [ 'jellicent' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'jellicent',
      {
        species: 'Jellicent',
        num: 593,
        types: [ 'Water', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60,
        },
        abilities: { first: 'Water Absorb', second: 'Cursed Body', hidden: 'Damp' },
        heightm: 2.2,
        weightkg: 135,
        color: 'White',
        prevo: 'frillish',
        evoLevel: 40,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'alomomola',
      {
        species: 'Alomomola',
        num: 594,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 165, atk: 75, def: 80, spa: 40, spd: 45, spe: 65,
        },
        abilities: { first: 'Healer', second: 'Hydration', hidden: 'Regenerator' },
        heightm: 1.2,
        weightkg: 31.6,
        color: 'Pink',
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'joltik',
      {
        species: 'Joltik',
        num: 595,
        types: [ 'Bug', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 47, def: 50, spa: 57, spd: 50, spe: 65,
        },
        abilities: { first: 'Compound Eyes', second: 'Unnerve', hidden: 'Swarm' },
        heightm: 0.1,
        weightkg: 0.6,
        color: 'Yellow',
        evos: [ 'galvantula' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'galvantula',
      {
        species: 'Galvantula',
        num: 596,
        types: [ 'Bug', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 77, def: 60, spa: 97, spd: 60, spe: 108,
        },
        abilities: { first: 'Compound Eyes', second: 'Unnerve', hidden: 'Swarm' },
        heightm: 0.8,
        weightkg: 14.3,
        color: 'Yellow',
        prevo: 'joltik',
        evoLevel: 36,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'ferroseed',
      {
        species: 'Ferroseed',
        num: 597,
        types: [ 'Grass', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 44, atk: 50, def: 91, spa: 24, spd: 86, spe: 10,
        },
        abilities: { first: 'Iron Barbs' },
        heightm: 0.6,
        weightkg: 18.8,
        color: 'Gray',
        evos: [ 'ferrothorn' ],
        eggGroups: [ 'Grass', 'Mineral' ],
      }
    ],
    [
      'ferrothorn',
      {
        species: 'Ferrothorn',
        num: 598,
        types: [ 'Grass', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 74, atk: 94, def: 131, spa: 54, spd: 116, spe: 20,
        },
        abilities: { first: 'Iron Barbs', hidden: 'Anticipation' },
        heightm: 1,
        weightkg: 110,
        color: 'Gray',
        prevo: 'ferroseed',
        evoLevel: 40,
        eggGroups: [ 'Grass', 'Mineral' ],
      }
    ],
    [
      'klink',
      {
        species: 'Klink',
        num: 599,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 40, atk: 55, def: 70, spa: 45, spd: 60, spe: 30,
        },
        abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
        heightm: 0.3,
        weightkg: 21,
        color: 'Gray',
        evos: [ 'klang' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'klang',
      {
        species: 'Klang',
        num: 600,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 80, def: 95, spa: 70, spd: 85, spe: 50,
        },
        abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
        heightm: 0.6,
        weightkg: 51,
        color: 'Gray',
        prevo: 'klink',
        evos: [ 'klinklang' ],
        evoLevel: 38,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'klinklang',
      {
        species: 'Klinklang',
        num: 601,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 100, def: 115, spa: 70, spd: 85, spe: 90,
        },
        abilities: { first: 'Plus', second: 'Minus', hidden: 'Clear Body' },
        heightm: 0.6,
        weightkg: 81,
        color: 'Gray',
        prevo: 'klang',
        evoLevel: 49,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'tynamo',
      {
        species: 'Tynamo',
        num: 602,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 55, def: 40, spa: 45, spd: 40, spe: 60,
        },
        abilities: { first: 'Levitate' },
        heightm: 0.2,
        weightkg: 0.3,
        color: 'White',
        evos: [ 'eelektrik' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'eelektrik',
      {
        species: 'Eelektrik',
        num: 603,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 85, def: 70, spa: 75, spd: 70, spe: 40,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.2,
        weightkg: 22,
        color: 'Blue',
        prevo: 'tynamo',
        evos: [ 'eelektross' ],
        evoLevel: 39,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'eelektross',
      {
        species: 'Eelektross',
        num: 604,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 50,
        },
        abilities: { first: 'Levitate' },
        heightm: 2.1,
        weightkg: 80.5,
        color: 'Blue',
        prevo: 'eelektrik',
        evoLevel: 39,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'elgyem',
      {
        species: 'Elgyem',
        num: 605,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 55, def: 55, spa: 85, spd: 55, spe: 30,
        },
        abilities: { first: 'Telepathy', second: 'Synchronize', hidden: 'Analytic' },
        heightm: 0.5,
        weightkg: 9,
        color: 'Blue',
        evos: [ 'beheeyem' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'beheeyem',
      {
        species: 'Beheeyem',
        num: 606,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 75, def: 75, spa: 125, spd: 95, spe: 40,
        },
        abilities: { first: 'Telepathy', second: 'Synchronize', hidden: 'Analytic' },
        heightm: 1,
        weightkg: 34.5,
        color: 'Brown',
        prevo: 'elgyem',
        evoLevel: 42,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'litwick',
      {
        species: 'Litwick',
        num: 607,
        types: [ 'Ghost', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 30, def: 55, spa: 65, spd: 55, spe: 20,
        },
        abilities: { first: 'Flash Fire', second: 'Flame Body', hidden: 'Infiltrator' },
        heightm: 0.3,
        weightkg: 3.1,
        color: 'White',
        evos: [ 'lampent' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'lampent',
      {
        species: 'Lampent',
        num: 608,
        types: [ 'Ghost', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 40, def: 60, spa: 95, spd: 60, spe: 55,
        },
        abilities: { first: 'Flash Fire', second: 'Flame Body', hidden: 'Infiltrator' },
        heightm: 0.6,
        weightkg: 13,
        color: 'Black',
        prevo: 'litwick',
        evos: [ 'chandelure' ],
        evoLevel: 41,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'chandelure',
      {
        species: 'Chandelure',
        num: 609,
        types: [ 'Ghost', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80,
        },
        abilities: { first: 'Flash Fire', second: 'Flame Body', hidden: 'Infiltrator' },
        heightm: 1,
        weightkg: 34.3,
        color: 'Black',
        prevo: 'lampent',
        evoLevel: 41,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'axew',
      {
        species: 'Axew',
        num: 610,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 46, atk: 87, def: 60, spa: 30, spd: 40, spe: 57,
        },
        abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
        heightm: 0.6,
        weightkg: 18,
        color: 'Green',
        evos: [ 'fraxure' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'fraxure',
      {
        species: 'Fraxure',
        num: 611,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 66, atk: 117, def: 70, spa: 40, spd: 50, spe: 67,
        },
        abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
        heightm: 1,
        weightkg: 36,
        color: 'Green',
        prevo: 'axew',
        evos: [ 'haxorus' ],
        evoLevel: 38,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'haxorus',
      {
        species: 'Haxorus',
        num: 612,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 76, atk: 147, def: 90, spa: 60, spd: 70, spe: 97,
        },
        abilities: { first: 'Rivalry', second: 'Mold Breaker', hidden: 'Unnerve' },
        heightm: 1.8,
        weightkg: 105.5,
        color: 'Yellow',
        prevo: 'fraxure',
        evoLevel: 48,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'cubchoo',
      {
        species: 'Cubchoo',
        num: 613,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 70, def: 40, spa: 60, spd: 40, spe: 40,
        },
        abilities: { first: 'Snow Cloak', second: 'Slush Rush', hidden: 'Rattled' },
        heightm: 0.5,
        weightkg: 8.5,
        color: 'White',
        evos: [ 'beartic' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'beartic',
      {
        species: 'Beartic',
        num: 614,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 130, def: 80, spa: 70, spd: 80, spe: 50,
        },
        abilities: { first: 'Snow Cloak', second: 'Slush Rush', hidden: 'Swift Swim' },
        heightm: 2.6,
        weightkg: 260,
        color: 'White',
        prevo: 'cubchoo',
        evoLevel: 37,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'cryogonal',
      {
        species: 'Cryogonal',
        num: 615,
        types: [ 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 50, def: 50, spa: 95, spd: 135, spe: 105,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.1,
        weightkg: 148,
        color: 'Blue',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'shelmet',
      {
        species: 'Shelmet',
        num: 616,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 40, def: 85, spa: 40, spd: 65, spe: 25,
        },
        abilities: { first: 'Hydration', second: 'Shell Armor', hidden: 'Overcoat' },
        heightm: 0.4,
        weightkg: 7.7,
        color: 'Red',
        evos: [ 'accelgor' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'accelgor',
      {
        species: 'Accelgor',
        num: 617,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 70, def: 40, spa: 100, spd: 60, spe: 145,
        },
        abilities: { first: 'Hydration', second: 'Sticky Hold', hidden: 'Unburden' },
        heightm: 0.8,
        weightkg: 25.3,
        color: 'Red',
        prevo: 'shelmet',
        evoLevel: 'Trade for Karrablast',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'stunfisk',
      {
        species: 'Stunfisk',
        num: 618,
        types: [ 'Ground', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 109, atk: 66, def: 84, spa: 81, spd: 99, spe: 32,
        },
        abilities: { first: 'Static', second: 'Limber', hidden: 'Sand Veil' },
        heightm: 0.7,
        weightkg: 11,
        color: 'Brown',
        eggGroups: [ 'Water 1', 'Amorphous' ],
      }
    ],
    [
      'mienfoo',
      {
        species: 'Mienfoo',
        num: 619,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 85, def: 50, spa: 55, spd: 50, spe: 65,
        },
        abilities: { first: 'Inner Focus', second: 'Regenerator', hidden: 'Reckless' },
        heightm: 0.9,
        weightkg: 20,
        color: 'Yellow',
        evos: [ 'mienshao' ],
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'mienshao',
      {
        species: 'Mienshao',
        num: 620,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105,
        },
        abilities: { first: 'Inner Focus', second: 'Regenerator', hidden: 'Reckless' },
        heightm: 1.4,
        weightkg: 35.5,
        color: 'Purple',
        prevo: 'mienfoo',
        evoLevel: 50,
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'druddigon',
      {
        species: 'Druddigon',
        num: 621,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 77, atk: 120, def: 90, spa: 60, spd: 90, spe: 48,
        },
        abilities: { first: 'Rough Skin', second: 'Sheer Force', hidden: 'Mold Breaker' },
        heightm: 1.6,
        weightkg: 139,
        color: 'Red',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'golett',
      {
        species: 'Golett',
        num: 622,
        types: [ 'Ground', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 59, atk: 74, def: 50, spa: 35, spd: 50, spe: 35,
        },
        abilities: { first: 'Iron Fist', second: 'Klutz', hidden: 'No Guard' },
        heightm: 1,
        weightkg: 92,
        color: 'Green',
        evos: [ 'golurk' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'golurk',
      {
        species: 'Golurk',
        num: 623,
        types: [ 'Ground', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 89, atk: 124, def: 80, spa: 55, spd: 80, spe: 55,
        },
        abilities: { first: 'Iron Fist', second: 'Klutz', hidden: 'No Guard' },
        heightm: 2.8,
        weightkg: 330,
        color: 'Green',
        prevo: 'golett',
        evoLevel: 43,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'pawniard',
      {
        species: 'Pawniard',
        num: 624,
        types: [ 'Dark', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 85, def: 70, spa: 40, spd: 40, spe: 60,
        },
        abilities: { first: 'Defiant', second: 'Inner Focus', hidden: 'Pressure' },
        heightm: 0.5,
        weightkg: 10.2,
        color: 'Red',
        evos: [ 'bisharp' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'bisharp',
      {
        species: 'Bisharp',
        num: 625,
        types: [ 'Dark', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 125, def: 100, spa: 60, spd: 70, spe: 70,
        },
        abilities: { first: 'Defiant', second: 'Inner Focus', hidden: 'Pressure' },
        heightm: 1.6,
        weightkg: 70,
        color: 'Red',
        prevo: 'pawniard',
        evoLevel: 52,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'bouffalant',
      {
        species: 'Bouffalant',
        num: 626,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 110, def: 95, spa: 40, spd: 95, spe: 55,
        },
        abilities: { first: 'Reckless', second: 'Sap Sipper', hidden: 'Soundproof' },
        heightm: 1.6,
        weightkg: 94.6,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'rufflet',
      {
        species: 'Rufflet',
        num: 627,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 70, atk: 83, def: 50, spa: 37, spd: 50, spe: 60,
        },
        abilities: { first: 'Keen Eye', second: 'Sheer Force', hidden: 'Hustle' },
        heightm: 0.5,
        weightkg: 10.5,
        color: 'White',
        evos: [ 'braviary' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'braviary',
      {
        species: 'Braviary',
        num: 628,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 100, atk: 123, def: 75, spa: 57, spd: 75, spe: 80,
        },
        abilities: { first: 'Keen Eye', second: 'Sheer Force', hidden: 'Defiant' },
        heightm: 1.5,
        weightkg: 41,
        color: 'Red',
        prevo: 'rufflet',
        evoLevel: 54,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'vullaby',
      {
        species: 'Vullaby',
        num: 629,
        types: [ 'Dark', 'Flying' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 70, atk: 55, def: 75, spa: 45, spd: 65, spe: 60,
        },
        abilities: { first: 'Big Pecks', second: 'Overcoat', hidden: 'Weak Armor' },
        heightm: 0.5,
        weightkg: 9,
        color: 'Brown',
        evos: [ 'mandibuzz' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'mandibuzz',
      {
        species: 'Mandibuzz',
        num: 630,
        types: [ 'Dark', 'Flying' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 110, atk: 65, def: 105, spa: 55, spd: 95, spe: 80,
        },
        abilities: { first: 'Big Pecks', second: 'Overcoat', hidden: 'Weak Armor' },
        heightm: 1.2,
        weightkg: 39.5,
        color: 'Brown',
        prevo: 'vullaby',
        evoLevel: 54,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'heatmor',
      {
        species: 'Heatmor',
        num: 631,
        types: [ 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 97, def: 66, spa: 105, spd: 66, spe: 65,
        },
        abilities: { first: 'Gluttony', second: 'Flash Fire', hidden: 'White Smoke' },
        heightm: 1.4,
        weightkg: 58,
        color: 'Red',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'durant',
      {
        species: 'Durant',
        num: 632,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109,
        },
        abilities: { first: 'Swarm', second: 'Hustle', hidden: 'Truant' },
        heightm: 0.3,
        weightkg: 33,
        color: 'Gray',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'deino',
      {
        species: 'Deino',
        num: 633,
        types: [ 'Dark', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 52, atk: 65, def: 50, spa: 45, spd: 50, spe: 38,
        },
        abilities: { first: 'Hustle' },
        heightm: 0.8,
        weightkg: 17.3,
        color: 'Blue',
        evos: [ 'zweilous' ],
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'zweilous',
      {
        species: 'Zweilous',
        num: 634,
        types: [ 'Dark', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 85, def: 70, spa: 65, spd: 70, spe: 58,
        },
        abilities: { first: 'Hustle' },
        heightm: 1.4,
        weightkg: 50,
        color: 'Blue',
        prevo: 'deino',
        evos: [ 'hydreigon' ],
        evoLevel: 50,
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'hydreigon',
      {
        species: 'Hydreigon',
        num: 635,
        types: [ 'Dark', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.8,
        weightkg: 160,
        color: 'Blue',
        prevo: 'zweilous',
        evoLevel: 64,
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'larvesta',
      {
        species: 'Larvesta',
        num: 636,
        types: [ 'Bug', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60,
        },
        abilities: { first: 'Flame Body', hidden: 'Swarm' },
        heightm: 1.1,
        weightkg: 28.8,
        color: 'White',
        evos: [ 'volcarona' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'volcarona',
      {
        species: 'Volcarona',
        num: 637,
        types: [ 'Bug', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100,
        },
        abilities: { first: 'Flame Body', hidden: 'Swarm' },
        heightm: 1.6,
        weightkg: 46,
        color: 'White',
        prevo: 'larvesta',
        evoLevel: 59,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'cobalion',
      {
        species: 'Cobalion',
        num: 638,
        types: [ 'Steel', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 91, atk: 90, def: 129, spa: 90, spd: 72, spe: 108,
        },
        abilities: { first: 'Justified' },
        heightm: 2.1,
        weightkg: 250,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'terrakion',
      {
        species: 'Terrakion',
        num: 639,
        types: [ 'Rock', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 91, atk: 129, def: 90, spa: 72, spd: 90, spe: 108,
        },
        abilities: { first: 'Justified' },
        heightm: 1.9,
        weightkg: 260,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'virizion',
      {
        species: 'Virizion',
        num: 640,
        types: [ 'Grass', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 91, atk: 90, def: 72, spa: 90, spd: 129, spe: 108,
        },
        abilities: { first: 'Justified' },
        heightm: 2,
        weightkg: 200,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'tornadus',
      {
        species: 'Tornadus',
        num: 641,
        baseForme: 'Incarnate',
        types: [ 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111,
        },
        abilities: { first: 'Prankster', hidden: 'Defiant' },
        heightm: 1.5,
        weightkg: 63,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'tornadustherian' ],
      }
    ],
    [
      'tornadustherian',
      {
        species: 'Tornadus-Therian',
        num: 641,
        types: [ 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 79, atk: 100, def: 80, spa: 110, spd: 90, spe: 121,
        },
        baseSpecies: 'Tornadus',
        forme: 'Therian',
        formeLetter: 'T',
        abilities: { first: 'Regenerator' },
        heightm: 1.4,
        weightkg: 63,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'thundurus',
      {
        species: 'Thundurus',
        num: 642,
        types: [ 'Electric', 'Flying' ],
        baseForme: 'Incarnate',
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111,
        },
        abilities: { first: 'Prankster', hidden: 'Defiant' },
        heightm: 1.5,
        weightkg: 61,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'thundurustherian' ],
      }
    ],
    [
      'thundurustherian',
      {
        species: 'Thundurus-Therian',
        num: 642,
        types: [ 'Electric', 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 79, atk: 105, def: 70, spa: 145, spd: 80, spe: 101,
        },
        baseSpecies: 'Thundurus',
        forme: 'Therian',
        formeLetter: 'T',
        abilities: { first: 'Volt Absorb' },
        heightm: 3,
        weightkg: 61,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'reshiram',
      {
        species: 'Reshiram',
        num: 643,
        types: [ 'Dragon', 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 120, def: 100, spa: 150, spd: 120, spe: 90,
        },
        abilities: { first: 'Turboblaze' },
        heightm: 3.2,
        weightkg: 330,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'zekrom',
      {
        species: 'Zekrom',
        num: 644,
        types: [ 'Dragon', 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 150, def: 120, spa: 120, spd: 100, spe: 90,
        },
        abilities: { first: 'Teravolt' },
        heightm: 2.9,
        weightkg: 345,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'landorus',
      {
        species: 'Landorus',
        num: 645,
        types: [ 'Ground', 'Flying' ],
        baseForme: 'Incarnate',
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 89, atk: 125, def: 90, spa: 115, spd: 80, spe: 101,
        },
        abilities: { first: 'Sand Force', hidden: 'Sheer Force' },
        heightm: 1.5,
        weightkg: 68,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'landorustherian' ],
      }
    ],
    [
      'landorustherian',
      {
        species: 'Landorus-Therian',
        num: 645,
        types: [ 'Ground', 'Flying' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91,
        },
        baseSpecies: 'Landorus',
        forme: 'Therian',
        formeLetter: 'T',
        abilities: { first: 'Intimidate' },
        heightm: 1.3,
        weightkg: 68,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'kyurem',
      {
        species: 'Kyurem',
        num: 646,
        types: [ 'Dragon', 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 125, atk: 130, def: 90, spa: 130, spd: 90, spe: 95,
        },
        abilities: { first: 'Pressure' },
        heightm: 3,
        weightkg: 325,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'kyuremblack', 'kyuremwhite' ],
      }
    ],
    [
      'kyuremblack',
      {
        species: 'Kyurem-Black',
        num: 646,
        types: [ 'Dragon', 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 125, atk: 170, def: 100, spa: 120, spd: 90, spe: 95,
        },
        baseSpecies: 'Kyurem',
        forme: 'Black',
        formeLetter: 'B',
        abilities: { first: 'Teravolt' },
        heightm: 3.3,
        weightkg: 325,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'kyuremwhite',
      {
        species: 'Kyurem-White',
        num: 646,
        types: [ 'Dragon', 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 125, atk: 120, def: 90, spa: 170, spd: 100, spe: 95,
        },
        baseSpecies: 'Kyurem',
        forme: 'White',
        formeLetter: 'W',
        abilities: { first: 'Turboblaze' },
        heightm: 3.6,
        weightkg: 325,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'keldeo',
      {
        species: 'Keldeo',
        num: 647,
        types: [ 'Water', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108,
        },
        baseForme: 'Ordinary',
        abilities: { first: 'Justified' },
        heightm: 1.4,
        weightkg: 48.5,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'keldeoresolute' ],
      }
    ],
    [
      'keldeoresolute',
      {
        species: 'Keldeo-Resolute',
        num: 647,
        types: [ 'Water', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108,
        },
        baseSpecies: 'Keldeo',
        forme: 'Resolute',
        formeLetter: 'R',
        abilities: { first: 'Justified' },
        heightm: 1.4,
        weightkg: 48.5,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'meloetta',
      {
        species: 'Meloetta',
        num: 648,
        types: [ 'Normal', 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 77, def: 77, spa: 128, spd: 128, spe: 90,
        },
        baseForme: 'Aria',
        abilities: { first: 'Serene Grace' },
        heightm: 0.6,
        weightkg: 6.5,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'meloettapirouette' ],
      }
    ],
    [
      'meloettapirouette',
      {
        species: 'Meloetta-Pirouette',
        num: 648,
        types: [ 'Normal', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128,
        },
        baseSpecies: 'Meloetta',
        forme: 'Pirouette',
        formeLetter: 'P',
        abilities: { first: 'Serene Grace' },
        heightm: 0.6,
        weightkg: 6.5,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'genesect',
      {
        species: 'Genesect',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99,
        },
        abilities: { first: 'Download' },
        heightm: 1.5,
        weightkg: 82.5,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [
          'genesectdouse',
          'genesectshock',
          'genesectburn',
          'genesectchill'
        ],
      }
    ],
    [
      'genesectdouse',
      {
        species: 'Genesect-Douse',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99,
        },
        baseSpecies: 'Genesect',
        forme: 'Douse',
        formeLetter: 'D',
        abilities: { first: 'Download' },
        heightm: 1.5,
        weightkg: 82.5,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'genesectshock',
      {
        species: 'Genesect-Shock',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99,
        },
        baseSpecies: 'Genesect',
        forme: 'Shock',
        formeLetter: 'S',
        abilities: { first: 'Download' },
        heightm: 1.5,
        weightkg: 82.5,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'genesectburn',
      {
        species: 'Genesect-Burn',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99,
        },
        baseSpecies: 'Genesect',
        forme: 'Burn',
        formeLetter: 'B',
        abilities: { first: 'Download' },
        heightm: 1.5,
        weightkg: 82.5,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'genesectchill',
      {
        species: 'Genesect-Chill',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99,
        },
        baseSpecies: 'Genesect',
        forme: 'Chill',
        formeLetter: 'C',
        abilities: { first: 'Download' },
        heightm: 1.5,
        weightkg: 82.5,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'chespin',
      {
        species: 'Chespin',
        num: 650,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 56, atk: 61, def: 65, spa: 48, spd: 45, spe: 38,
        },
        abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
        heightm: 0.4,
        weightkg: 9,
        color: 'Green',
        evos: [ 'quilladin' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'quilladin',
      {
        species: 'Quilladin',
        num: 651,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 61, atk: 78, def: 95, spa: 56, spd: 58, spe: 57,
        },
        abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
        heightm: 0.7,
        weightkg: 29,
        color: 'Green',
        prevo: 'chespin',
        evos: [ 'chesnaught' ],
        evoLevel: 16,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'chesnaught',
      {
        species: 'Chesnaught',
        num: 652,
        types: [ 'Grass', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64,
        },
        abilities: { first: 'Overgrow', hidden: 'Bulletproof' },
        heightm: 1.6,
        weightkg: 90,
        color: 'Green',
        prevo: 'quilladin',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'fennekin',
      {
        species: 'Fennekin',
        num: 653,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 40, atk: 45, def: 40, spa: 62, spd: 60, spe: 60,
        },
        abilities: { first: 'Blaze', hidden: 'Magician' },
        heightm: 0.4,
        weightkg: 9.4,
        color: 'Red',
        evos: [ 'braixen' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'braixen',
      {
        species: 'Braixen',
        num: 654,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 59, atk: 59, def: 58, spa: 90, spd: 70, spe: 73,
        },
        abilities: { first: 'Blaze', hidden: 'Magician' },
        heightm: 1,
        weightkg: 14.5,
        color: 'Red',
        prevo: 'fennekin',
        evos: [ 'delphox' ],
        evoLevel: 16,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'delphox',
      {
        species: 'Delphox',
        num: 655,
        types: [ 'Fire', 'Psychic' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104,
        },
        abilities: { first: 'Blaze', hidden: 'Magician' },
        heightm: 1.5,
        weightkg: 39,
        color: 'Red',
        prevo: 'braixen',
        evoLevel: 36,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'froakie',
      {
        species: 'Froakie',
        num: 656,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 41, atk: 56, def: 40, spa: 62, spd: 44, spe: 71,
        },
        abilities: { first: 'Torrent', hidden: 'Protean' },
        heightm: 0.3,
        weightkg: 7,
        color: 'Blue',
        evos: [ 'frogadier' ],
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'frogadier',
      {
        species: 'Frogadier',
        num: 657,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 54, atk: 63, def: 52, spa: 83, spd: 56, spe: 97,
        },
        abilities: { first: 'Torrent', hidden: 'Protean' },
        heightm: 0.6,
        weightkg: 10.9,
        color: 'Blue',
        prevo: 'froakie',
        evos: [ 'greninja' ],
        evoLevel: 16,
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'greninja',
      {
        species: 'Greninja',
        num: 658,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 72, atk: 95, def: 67, spa: 103, spd: 71, spe: 122,
        },
        abilities: { first: 'Torrent', hidden: 'Protean', special: 'Battle Bond' },
        heightm: 1.5,
        weightkg: 40,
        color: 'Blue',
        prevo: 'frogadier',
        evoLevel: 36,
        eggGroups: [ 'Water 1' ],
        otherFormes: [ 'greninjaash' ],
      }
    ],
    [
      'greninjaash',
      {
        species: 'Greninja-Ash',
        num: 658,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 72, atk: 145, def: 67, spa: 153, spd: 71, spe: 132,
        },
        baseSpecies: 'Greninja',
        forme: 'Ash',
        formeLetter: 'A',
        abilities: { first: 'Battle Bond' },
        heightm: 1.5,
        weightkg: 40,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'bunnelby',
      {
        species: 'Bunnelby',
        num: 659,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 36, def: 38, spa: 32, spd: 36, spe: 57,
        },
        abilities: { first: 'Pickup', second: 'Cheek Pouch', hidden: 'Huge Power' },
        heightm: 0.4,
        weightkg: 5,
        color: 'Brown',
        evos: [ 'diggersby' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'diggersby',
      {
        species: 'Diggersby',
        num: 660,
        types: [ 'Normal', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 56, def: 77, spa: 50, spd: 77, spe: 78,
        },
        abilities: { first: 'Pickup', second: 'Cheek Pouch', hidden: 'Huge Power' },
        heightm: 1,
        weightkg: 42.4,
        color: 'Brown',
        prevo: 'bunnelby',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'fletchling',
      {
        species: 'Fletchling',
        num: 661,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 50, def: 43, spa: 40, spd: 38, spe: 62,
        },
        abilities: { first: 'Big Pecks', hidden: 'Gale Wings' },
        heightm: 0.3,
        weightkg: 1.7,
        color: 'Red',
        evos: [ 'fletchinder' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'fletchinder',
      {
        species: 'Fletchinder',
        num: 662,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 73, def: 55, spa: 56, spd: 52, spe: 84,
        },
        abilities: { first: 'Flame Body', hidden: 'Gale Wings' },
        heightm: 0.7,
        weightkg: 16,
        color: 'Red',
        prevo: 'fletchling',
        evos: [ 'talonflame' ],
        evoLevel: 17,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'talonflame',
      {
        species: 'Talonflame',
        num: 663,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 78, atk: 81, def: 71, spa: 74, spd: 69, spe: 126,
        },
        abilities: { first: 'Flame Body', hidden: 'Gale Wings' },
        heightm: 1.2,
        weightkg: 24.5,
        color: 'Red',
        prevo: 'fletchinder',
        evoLevel: 35,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'scatterbug',
      {
        species: 'Scatterbug',
        num: 664,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 35, def: 40, spa: 27, spd: 25, spe: 35,
        },
        abilities: { first: 'Shield Dust', second: 'Compound Eyes', hidden: 'Friend Guard' },
        heightm: 0.3,
        weightkg: 2.5,
        color: 'Black',
        evos: [ 'spewpa' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'spewpa',
      {
        species: 'Spewpa',
        num: 665,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 22, def: 60, spa: 27, spd: 30, spe: 29,
        },
        abilities: { first: 'Shed Skin', hidden: 'Friend Guard' },
        heightm: 0.3,
        weightkg: 8.4,
        color: 'Black',
        prevo: 'scatterbug',
        evos: [ 'vivillon' ],
        evoLevel: 9,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'vivillon',
      {
        species: 'Vivillon',
        num: 666,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89,
        },
        abilities: { first: 'Shield Dust', second: 'Compound Eyes', hidden: 'Friend Guard' },
        heightm: 1.2,
        weightkg: 17,
        color: 'White',
        prevo: 'spewpa',
        evoLevel: 12,
        eggGroups: [ 'Bug' ],
        otherFormes: [
          'vivillonarchipelago', 'vivilloncontinental',
          'vivillonelegant', 'vivillongarden',
          'vivillonhighplains', 'vivillonicysnow',
          'vivillonjungle', 'vivillonmarine',
          'vivillonmodern', 'vivillonmonsoon',
          'vivillonocean', 'vivillonpolar',
          'vivillonriver', 'vivillonsandstorm',
          'vivillonsavanna', 'vivillonsun',
          'vivillontundra', 'vivillonfancy',
          'vivillonpokeball'
        ],
      }
    ],
    [
      'vivillonfancy',
      {
        species: 'Vivillon-Fancy',
        num: 666,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89,
        },
        baseSpecies: 'Vivillon',
        forme: 'Fancy',
        formeLetter: 'F',
        abilities: { first: 'Shield Dust', second: 'Compound Eyes' },
        heightm: 1.2,
        weightkg: 17,
        color: 'Black',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'vivillonpokeball',
      {
        species: 'Vivillon-Pokeball',
        num: 666,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89,
        },
        baseSpecies: 'Vivillon',
        forme: 'Pokeball',
        formeLetter: 'P',
        abilities: { first: 'Shield Dust', second: 'Compound Eyes' },
        heightm: 1.2,
        weightkg: 17,
        color: 'Black',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'litleo',
      {
        species: 'Litleo',
        num: 667,
        types: [ 'Fire', 'Normal' ],
        genderRatio: { male: 0.125, female: 0.875 },
        baseStats: {
          hp: 62, atk: 50, def: 58, spa: 73, spd: 54, spe: 72,
        },
        abilities: { first: 'Rivalry', second: 'Unnerve', hidden: 'Moxie' },
        heightm: 0.6,
        weightkg: 13.5,
        color: 'Brown',
        evos: [ 'pyroar' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pyroar',
      {
        species: 'Pyroar',
        num: 668,
        types: [ 'Fire', 'Normal' ],
        genderRatio: { male: 0.125, female: 0.875 },
        baseStats: {
          hp: 86, atk: 68, def: 72, spa: 109, spd: 66, spe: 106,
        },
        abilities: { first: 'Rivalry', second: 'Unnerve', hidden: 'Moxie' },
        heightm: 1.5,
        weightkg: 81.5,
        color: 'Brown',
        prevo: 'litleo',
        evoLevel: 35,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'flabebe',
      {
        species: 'Flabebe',
        num: 669,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 44, atk: 38, def: 39, spa: 61, spd: 79, spe: 42,
        },
        baseForme: 'Red',
        abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
        heightm: 0.1,
        weightkg: 0.1,
        color: 'White',
        evos: [ 'floette' ],
        eggGroups: [ 'Fairy' ],
        otherFormes: [ 'flabebeblue', 'flabebeorange', 'flabebewhite', 'flabebeyellow' ],
      }
    ],
    [
      'floette',
      {
        species: 'Floette',
        num: 670,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 54, atk: 45, def: 47, spa: 75, spd: 98, spe: 52,
        },
        baseForme: 'Red',
        abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
        heightm: 0.2,
        weightkg: 0.9,
        color: 'White',
        prevo: 'flabebe',
        evos: [ 'florges' ],
        evoLevel: 19,
        eggGroups: [ 'Fairy' ],
        otherFormes: [
          'floetteblue',
          'floetteorange',
          'floettewhite',
          'floetteyellow',
          'floetteeternal'
        ],
      }
    ],
    [
      'floetteeternal',
      {
        species: 'Floette-Eternal',
        num: 670,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 74, atk: 65, def: 67, spa: 125, spd: 128, spe: 92,
        },
        baseSpecies: 'Floette',
        forme: 'Eternal',
        formeLetter: 'E',
        abilities: { first: 'Flower Veil' },
        heightm: 0.2,
        weightkg: 0.9,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'florges',
      {
        species: 'Florges',
        num: 671,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75,
        },
        baseForme: 'Red',
        abilities: { first: 'Flower Veil', hidden: 'Symbiosis' },
        heightm: 1.1,
        weightkg: 10,
        color: 'White',
        prevo: 'floette',
        evoLevel: 19,
        eggGroups: [ 'Fairy' ],
        otherFormes: [ 'florgesblue', 'florgesorange', 'florgeswhite', 'florgesyellow' ],
      }
    ],
    [
      'skiddo',
      {
        species: 'Skiddo',
        num: 672,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 66, atk: 65, def: 48, spa: 62, spd: 57, spe: 52,
        },
        abilities: { first: 'Sap Sipper', hidden: 'Grass Pelt' },
        heightm: 0.9,
        weightkg: 31,
        color: 'Brown',
        evos: [ 'gogoat' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gogoat',
      {
        species: 'Gogoat',
        num: 673,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 123, atk: 100, def: 62, spa: 97, spd: 81, spe: 68,
        },
        abilities: { first: 'Sap Sipper', hidden: 'Grass Pelt' },
        heightm: 1.7,
        weightkg: 91,
        color: 'Brown',
        prevo: 'skiddo',
        evoLevel: 32,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pancham',
      {
        species: 'Pancham',
        num: 674,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 67, atk: 82, def: 62, spa: 46, spd: 48, spe: 43,
        },
        abilities: { first: 'Iron Fist', second: 'Mold Breaker', hidden: 'Scrappy' },
        heightm: 0.6,
        weightkg: 8,
        color: 'White',
        evos: [ 'pangoro' ],
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'pangoro',
      {
        species: 'Pangoro',
        num: 675,
        types: [ 'Fighting', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 124, def: 78, spa: 69, spd: 71, spe: 58,
        },
        abilities: { first: 'Iron Fist', second: 'Mold Breaker', hidden: 'Scrappy' },
        heightm: 2.1,
        weightkg: 136,
        color: 'White',
        prevo: 'pancham',
        evoLevel: 'Level 32 with Dark Type in Party',
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'furfrou',
      {
        species: 'Furfrou',
        num: 676,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102,
        },
        abilities: { first: 'Fur Coat' },
        heightm: 1.2,
        weightkg: 28,
        color: 'White',
        eggGroups: [ 'Field' ],
        otherFormes: [
          'furfroudandy',
          'furfroudebutante',
          'furfroudiamond',
          'furfrouheart',
          'furfroukabuki',
          'furfroulareine',
          'furfroumatron',
          'furfroupharaoh',
          'furfroustar'
        ],
      }
    ],
    [
      'espurr',
      {
        species: 'Espurr',
        num: 677,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 48, def: 54, spa: 63, spd: 60, spe: 68,
        },
        abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Own Tempo' },
        heightm: 0.3,
        weightkg: 3.5,
        color: 'Gray',
        evos: [ 'meowstic' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'meowstic',
      {
        species: 'Meowstic',
        num: 678,
        types: [ 'Psychic' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104,
        },
        baseForme: 'M',
        abilities: { first: 'Keen Eye', second: 'Infiltrator', hidden: 'Prankster' },
        heightm: 0.6,
        weightkg: 8.5,
        color: 'Blue',
        prevo: 'espurr',
        evoLevel: 25,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'meowsticf' ],
      }
    ],
    [
      'meowsticf',
      {
        species: 'Meowstic-F',
        num: 678,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104,
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
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'honedge',
      {
        species: 'Honedge',
        num: 679,
        types: [ 'Steel', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 80, def: 100, spa: 35, spd: 37, spe: 28,
        },
        abilities: { first: 'No Guard' },
        heightm: 0.8,
        weightkg: 2,
        color: 'Brown',
        evos: [ 'doublade' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'doublade',
      {
        species: 'Doublade',
        num: 680,
        types: [ 'Steel', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 59, atk: 110, def: 150, spa: 45, spd: 49, spe: 35,
        },
        abilities: { first: 'No Guard' },
        heightm: 0.8,
        weightkg: 4.5,
        color: 'Brown',
        prevo: 'honedge',
        evos: [ 'aegislash' ],
        evoLevel: 35,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'aegislash',
      {
        species: 'Aegislash',
        num: 681,
        baseForme: 'Shield',
        types: [ 'Steel', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 150, spa: 50, spd: 150, spe: 60,
        },
        abilities: { first: 'Stance Change' },
        heightm: 1.7,
        weightkg: 53,
        color: 'Brown',
        prevo: 'doublade',
        evoLevel: 35,
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'aegislashblade' ],
      }
    ],
    [
      'aegislash',
      {
        species: 'Aegislash',
        num: 681,
        types: [ 'Steel', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 150, def: 50, spa: 150, spd: 50, spe: 60,
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
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'spritzee',
      {
        species: 'Spritzee',
        num: 682,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 78, atk: 52, def: 60, spa: 63, spd: 65, spe: 23,
        },
        abilities: { first: 'Healer', hidden: 'Aroma Veil' },
        heightm: 0.2,
        weightkg: 0.5,
        color: 'Pink',
        evos: [ 'aromatisse' ],
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'aromatisse',
      {
        species: 'Aromatisse',
        num: 683,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 101, atk: 72, def: 72, spa: 99, spd: 89, spe: 29,
        },
        abilities: { first: 'Healer', hidden: 'Aroma Veil' },
        heightm: 0.8,
        weightkg: 15.5,
        color: 'Pink',
        prevo: 'spritzee',
        evoLevel: 'Trade while holding Sachet',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'swirlix',
      {
        species: 'Swirlix',
        num: 684,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 48, def: 66, spa: 59, spd: 57, spe: 49,
        },
        abilities: { first: 'Sweet Veil', hidden: 'Unburden' },
        heightm: 0.4,
        weightkg: 3.5,
        color: 'White',
        evos: [ 'slurpuff' ],
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'slurpuff',
      {
        species: 'Slurpuff',
        num: 685,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 82, atk: 80, def: 86, spa: 85, spd: 75, spe: 72,
        },
        abilities: { first: 'Sweet Veil', hidden: 'Unburden' },
        heightm: 0.8,
        weightkg: 5,
        color: 'White',
        prevo: 'swirlix',
        evoLevel: 'Trade while holding Whipped Dream',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'inkay',
      {
        species: 'Inkay',
        num: 686,
        types: [ 'Dark', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 53, atk: 54, def: 53, spa: 37, spd: 46, spe: 45,
        },
        abilities: { first: 'Contrary', second: 'Suction Cups', hidden: 'Infiltrator' },
        heightm: 0.4,
        weightkg: 3.5,
        color: 'Blue',
        evos: [ 'malamar' ],
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'malamar',
      {
        species: 'Malamar',
        num: 687,
        types: [ 'Dark', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 86, atk: 92, def: 88, spa: 68, spd: 75, spe: 73,
        },
        abilities: { first: 'Contrary', second: 'Suction Cups', hidden: 'Infiltrator' },
        heightm: 1.5,
        weightkg: 47,
        color: 'Blue',
        prevo: 'inkay',
        evoLevel: 'Level 30, Flip device upside down',
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'binacle',
      {
        species: 'Binacle',
        num: 688,
        types: [ 'Rock', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 42, atk: 52, def: 67, spa: 39, spd: 56, spe: 50,
        },
        abilities: { first: 'Tough Claws', second: 'Sniper', hidden: 'Pickpocket' },
        heightm: 0.5,
        weightkg: 31,
        color: 'Brown',
        evos: [ 'barbaracle' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'barbaracle',
      {
        species: 'Barbaracle',
        num: 689,
        types: [ 'Rock', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 105, def: 115, spa: 54, spd: 86, spe: 68,
        },
        abilities: { first: 'Tough Claws', second: 'Sniper', hidden: 'Pickpocket' },
        heightm: 1.3,
        weightkg: 96,
        color: 'Brown',
        prevo: 'binacle',
        evoLevel: 39,
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'skrelp',
      {
        species: 'Skrelp',
        num: 690,
        types: [ 'Poison', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 60, def: 60, spa: 60, spd: 60, spe: 30,
        },
        abilities: { first: 'Poison Point', second: 'Poison Touch', hidden: 'Adaptability' },
        heightm: 0.5,
        weightkg: 7.3,
        color: 'Brown',
        evos: [ 'dragalge' ],
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'dragalge',
      {
        species: 'Dragalge',
        num: 691,
        types: [ 'Poison', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 44,
        },
        abilities: { first: 'Poison Point', second: 'Poison Touch', hidden: 'Adaptability' },
        heightm: 1.8,
        weightkg: 81.5,
        color: 'Brown',
        prevo: 'skrelp',
        evoLevel: 48,
        eggGroups: [ 'Water 1', 'Dragon' ],
      }
    ],
    [
      'clauncher',
      {
        species: 'Clauncher',
        num: 692,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 53, def: 62, spa: 58, spd: 63, spe: 44,
        },
        abilities: { first: 'Mega Launcher' },
        heightm: 0.5,
        weightkg: 8.3,
        color: 'Blue',
        evos: [ 'clawitzer' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'clawitzer',
      {
        species: 'Clawitzer',
        num: 693,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 59,
        },
        abilities: { first: 'Mega Launcher' },
        heightm: 1.3,
        weightkg: 35.3,
        color: 'Blue',
        prevo: 'clauncher',
        evoLevel: 37,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'helioptile',
      {
        species: 'Helioptile',
        num: 694,
        types: [ 'Electric', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 44, atk: 38, def: 33, spa: 61, spd: 43, spe: 70,
        },
        abilities: { first: 'Dry Skin', second: 'Sand Veil', hidden: 'Solar Power' },
        heightm: 0.5,
        weightkg: 6,
        color: 'Yellow',
        evos: [ 'heliolisk' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'heliolisk',
      {
        species: 'Heliolisk',
        num: 695,
        types: [ 'Electric', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 55, def: 52, spa: 109, spd: 94, spe: 109,
        },
        abilities: { first: 'Dry Skin', second: 'Sand Veil', hidden: 'Solar Power' },
        heightm: 1,
        weightkg: 21,
        color: 'Yellow',
        prevo: 'helioptile',
        evoLevel: 'use Sun Stone',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'tyrunt',
      {
        species: 'Tyrunt',
        num: 696,
        types: [ 'Rock', 'Dragon' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 58, atk: 89, def: 77, spa: 45, spd: 45, spe: 48,
        },
        abilities: { first: 'Strong Jaw', hidden: 'Sturdy' },
        heightm: 0.8,
        weightkg: 26,
        color: 'Brown',
        evos: [ 'tyrantrum' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'tyrantrum',
      {
        species: 'Tyrantrum',
        num: 697,
        types: [ 'Rock', 'Dragon' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 82, atk: 121, def: 119, spa: 69, spd: 59, spe: 71,
        },
        abilities: { first: 'Strong Jaw', hidden: 'Rock Head' },
        heightm: 2.5,
        weightkg: 270,
        color: 'Red',
        prevo: 'tyrunt',
        evoLevel: '39 Daytime',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'amaura',
      {
        species: 'Amaura',
        num: 698,
        types: [ 'Rock', 'Ice' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 77, atk: 59, def: 50, spa: 67, spd: 63, spe: 46,
        },
        abilities: { first: 'Refrigerate', hidden: 'Snow Warning' },
        heightm: 1.3,
        weightkg: 25.2,
        color: 'Blue',
        evos: [ 'aurorus' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'aurorus',
      {
        species: 'Aurorus',
        num: 699,
        types: [ 'Rock', 'Ice' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58,
        },
        abilities: { first: 'Refrigerate', hidden: 'Snow Warning' },
        heightm: 2.7,
        weightkg: 225,
        color: 'Blue',
        prevo: 'amaura',
        evoLevel: '39 Nighttime',
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'sylveon',
      {
        species: 'Sylveon',
        num: 700,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60,
        },
        abilities: { first: 'Cute Charm', hidden: 'Pixilate' },
        heightm: 1,
        weightkg: 23.5,
        color: 'Pink',
        prevo: 'eevee',
        evoLevel: 'Level up while having high Affection and knowing a Fairy type move',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'hawlucha',
      {
        species: 'Hawlucha',
        num: 701,
        types: [ 'Fighting', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 78, atk: 92, def: 75, spa: 74, spd: 63, spe: 118,
        },
        abilities: { first: 'Limber', second: 'Unburden', hidden: 'Mold Breaker' },
        heightm: 0.8,
        weightkg: 21.5,
        color: 'Green',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'dedenne',
      {
        species: 'Dedenne',
        num: 702,
        types: [ 'Electric', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 67, atk: 58, def: 57, spa: 81, spd: 67, spe: 101,
        },
        abilities: { first: 'Cheek Pouch', second: 'Pickup', hidden: 'Plus' },
        heightm: 0.2,
        weightkg: 2.2,
        color: 'Yellow',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'carbink',
      {
        species: 'Carbink',
        num: 703,
        types: [ 'Rock', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 50, def: 150, spa: 50, spd: 150, spe: 50,
        },
        abilities: { first: 'Clear Body', hidden: 'Sturdy' },
        heightm: 0.3,
        weightkg: 5.7,
        color: 'Gray',
        eggGroups: [ 'Fairy', 'Mineral' ],
      }
    ],
    [
      'goomy',
      {
        species: 'Goomy',
        num: 704,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 50, def: 35, spa: 55, spd: 75, spe: 40,
        },
        abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
        heightm: 0.3,
        weightkg: 2.8,
        color: 'Purple',
        evos: [ 'sliggoo' ],
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'sliggoo',
      {
        species: 'Sliggoo',
        num: 705,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 75, def: 53, spa: 83, spd: 113, spe: 60,
        },
        abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
        heightm: 0.8,
        weightkg: 17.5,
        color: 'Purple',
        prevo: 'goomy',
        evos: [ 'goodra' ],
        evoLevel: 40,
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'goodra',
      {
        species: 'Goodra',
        num: 706,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80,
        },
        abilities: { first: 'Sap Sipper', second: 'Hydration', hidden: 'Gooey' },
        heightm: 2,
        weightkg: 150.5,
        color: 'Purple',
        prevo: 'sliggoo',
        evoLevel: 'Level 50 In Rain',
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'klefki',
      {
        species: 'Klefki',
        num: 707,
        types: [ 'Steel', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 57, atk: 80, def: 91, spa: 80, spd: 87, spe: 75,
        },
        abilities: { first: 'Prankster', hidden: 'Magician' },
        heightm: 0.2,
        weightkg: 3,
        color: 'Gray',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'phantump',
      {
        species: 'Phantump',
        num: 708,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 43, atk: 70, def: 48, spa: 50, spd: 60, spe: 38,
        },
        abilities: { first: 'Natural Cure', second: 'Frisk', hidden: 'Harvest' },
        heightm: 0.4,
        weightkg: 7,
        color: 'Brown',
        evos: [ 'trevenant' ],
        eggGroups: [ 'Grass', 'Amorphous' ],
      }
    ],
    [
      'trevenant',
      {
        species: 'Trevenant',
        num: 709,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 110, def: 76, spa: 65, spd: 82, spe: 56,
        },
        abilities: { first: 'Natural Cure', second: 'Frisk', hidden: 'Harvest' },
        heightm: 1.5,
        weightkg: 71,
        color: 'Brown',
        prevo: 'phantump',
        evoLevel: 'Trade',
        eggGroups: [ 'Grass', 'Amorphous' ],
      }
    ],
    [
      'pumpkaboo',
      {
        species: 'Pumpkaboo',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 49, atk: 66, def: 70, spa: 44, spd: 55, spe: 51,
        },
        baseForme: 'Average',
        abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
        heightm: 0.4,
        weightkg: 5,
        color: 'Brown',
        evos: [ 'gourgeist' ],
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'pumpkaboosmall', 'pumpkaboolarge', 'pumpkaboosuper' ],
      }
    ],
    [
      'pumpkaboosmall',
      {
        species: 'Pumpkaboo-Small',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 44, atk: 66, def: 70, spa: 44, spd: 55, spe: 56,
        },
        baseSpecies: 'Pumpkaboo',
        forme: 'Small',
        formeLetter: 'S',
        abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
        heightm: 0.3,
        weightkg: 3.5,
        color: 'Brown',
        evos: [ 'gourgeistsmall' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'pumpkaboolarge',
      {
        species: 'Pumpkaboo-Large',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 54, atk: 66, def: 70, spa: 44, spd: 55, spe: 46,
        },
        baseSpecies: 'Pumpkaboo',
        forme: 'Large',
        formeLetter: 'L',
        abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
        heightm: 0.5,
        weightkg: 7.5,
        color: 'Brown',
        evos: [ 'gourgeistlarge' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'pumpkaboosuper',
      {
        species: 'Pumpkaboo-Super',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 59, atk: 66, def: 70, spa: 44, spd: 55, spe: 41,
        },
        baseSpecies: 'Pumpkaboo',
        forme: 'Super',
        formeLetter: 'S',
        abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
        heightm: 0.8,
        weightkg: 15,
        color: 'Brown',
        evos: [ 'gourgeistsuper' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gourgeist',
      {
        species: 'Gourgeist',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 90, def: 122, spa: 58, spd: 75, spe: 84,
        },
        baseForme: 'Average',
        abilities: { first: 'Pickup', second: 'Frisk', hidden: 'Insomnia' },
        heightm: 0.9,
        weightkg: 12.5,
        color: 'Brown',
        prevo: 'pumpkaboo',
        evoLevel: 'Trade',
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'gourgeistsmall', 'gourgeistlarge', 'gourgeistsuper' ],
      }
    ],
    [
      'gourgeistsmall',
      {
        species: 'Gourgeist-Small',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 85, def: 122, spa: 58, spd: 75, spe: 99,
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
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gourgeistlarge',
      {
        species: 'Gourgeist-Large',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 95, def: 122, spa: 58, spd: 75, spe: 69,
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
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'gourgeistsuper',
      {
        species: 'Gourgeist-Super',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 100, def: 122, spa: 58, spd: 75, spe: 54,
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
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'bergmite',
      {
        species: 'Bergmite',
        num: 712,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 69, def: 85, spa: 32, spd: 35, spe: 28,
        },
        abilities: { first: 'Own Tempo', second: 'Ice Body', hidden: 'Sturdy' },
        heightm: 1,
        weightkg: 99.5,
        color: 'Blue',
        evos: [ 'avalugg' ],
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'avalugg',
      {
        species: 'Avalugg',
        num: 713,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 117, def: 184, spa: 44, spd: 46, spe: 28,
        },
        abilities: { first: 'Own Tempo', second: 'Ice Body', hidden: 'Sturdy' },
        heightm: 2,
        weightkg: 505,
        color: 'Blue',
        prevo: 'bergmite',
        evoLevel: 37,
        eggGroups: [ 'Monster' ],
      }
    ],
    [
      'noibat',
      {
        species: 'Noibat',
        num: 714,
        types: [ 'Flying', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 30, def: 35, spa: 45, spd: 40, spe: 55,
        },
        abilities: { first: 'Frisk', second: 'Infiltrator', hidden: 'Telepathy' },
        heightm: 0.5,
        weightkg: 8,
        color: 'Purple',
        evos: [ 'noivern' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'noivern',
      {
        species: 'Noivern',
        num: 715,
        types: [ 'Flying', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123,
        },
        abilities: { first: 'Frisk', second: 'Infiltrator', hidden: 'Telepathy' },
        heightm: 1.5,
        weightkg: 85,
        color: 'Purple',
        prevo: 'noibat',
        evoLevel: 48,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'xerneas',
      {
        species: 'Xerneas',
        num: 716,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99,
        },
        abilities: { first: 'Fairy Aura' },
        heightm: 3,
        weightkg: 215,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'yveltal',
      {
        species: 'Yveltal',
        num: 717,
        types: [ 'Dark', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99,
        },
        abilities: { first: 'Dark Aura' },
        heightm: 5.8,
        weightkg: 203,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'zygarde',
      {
        species: 'Zygarde',
        num: 718,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 108, atk: 100, def: 121, spa: 81, spd: 95, spe: 95,
        },
        baseForme: '50%',
        abilities: { first: 'Aura Break', special: 'Power Construct' },
        heightm: 5,
        weightkg: 305,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'zygarde10', 'zygardecomplete' ],
      }
    ],
    [
      'zygarde10',
      {
        species: 'Zygarde-10%',
        num: 718,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 54, atk: 100, def: 71, spa: 61, spd: 85, spe: 115,
        },
        baseSpecies: 'Zygarde',
        forme: '10%',
        formeLetter: 'T',
        abilities: { first: 'Aura Break', special: 'Power Construct' },
        heightm: 1.2,
        weightkg: 33.5,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'zygardecomplete',
      {
        species: 'Zygarde-Complete',
        num: 718,
        types: [ 'Dragon', 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 216, atk: 100, def: 121, spa: 91, spd: 95, spe: 85,
        },
        baseSpecies: 'Zygarde',
        forme: 'Complete',
        formeLetter: 'C',
        abilities: { first: 'Power Construct' },
        heightm: 4.5,
        weightkg: 610,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'diancie',
      {
        species: 'Diancie',
        num: 719,
        types: [ 'Rock', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 100, def: 150, spa: 100, spd: 150, spe: 50,
        },
        abilities: { first: 'Clear Body' },
        heightm: 0.7,
        weightkg: 8.8,
        color: 'Pink',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'dianciemega' ],
      }
    ],
    [
      'dianciemega',
      {
        species: 'Diancie-Mega',
        num: 719,
        types: [ 'Rock', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 50, atk: 160, def: 110, spa: 160, spd: 110, spe: 110,
        },
        baseSpecies: 'Diancie',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Magic Bounce' },
        heightm: 1.1,
        weightkg: 27.8,
        color: 'Pink',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'hoopa',
      {
        species: 'Hoopa',
        num: 720,
        types: [ 'Psychic', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 110, def: 60, spa: 150, spd: 130, spe: 70,
        },
        baseForme: 'Confined',
        abilities: { first: 'Magician' },
        heightm: 0.5,
        weightkg: 9,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'hoopaunbound' ],
      }
    ],
    [
      'hoopaunbound',
      {
        species: 'Hoopa-Unbound',
        num: 720,
        types: [ 'Psychic', 'Dark' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 160, def: 60, spa: 170, spd: 130, spe: 80,
        },
        baseSpecies: 'Hoopa',
        forme: 'Unbound',
        formeLetter: 'U',
        abilities: { first: 'Magician' },
        heightm: 6.5,
        weightkg: 490,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'volcanion',
      {
        species: 'Volcanion',
        num: 721,
        types: [ 'Fire', 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 110, def: 120, spa: 130, spd: 90, spe: 70,
        },
        abilities: { first: 'Water Absorb' },
        heightm: 1.7,
        weightkg: 195,
        color: 'Brown',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'rowlet',
      {
        species: 'Rowlet',
        num: 722,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 68, atk: 55, def: 55, spa: 50, spd: 50, spe: 42,
        },
        abilities: { first: 'Overgrow', hidden: 'Long Reach' },
        heightm: 0.3,
        weightkg: 1.5,
        color: 'Brown',
        evos: [ 'dartrix' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'dartrix',
      {
        species: 'Dartrix',
        num: 723,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 75, def: 75, spa: 70, spd: 70, spe: 52,
        },
        abilities: { first: 'Overgrow', hidden: 'Long Reach' },
        heightm: 0.7,
        weightkg: 16,
        color: 'Brown',
        prevo: 'rowlet',
        evos: [ 'decidueye' ],
        evoLevel: 17,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'decidueye',
      {
        species: 'Decidueye',
        num: 724,
        types: [ 'Grass', 'Ghost' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 78, atk: 107, def: 75, spa: 100, spd: 100, spe: 70,
        },
        abilities: { first: 'Overgrow', hidden: 'Long Reach' },
        heightm: 1.6,
        weightkg: 36.6,
        color: 'Brown',
        prevo: 'dartrix',
        evoLevel: 34,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'litten',
      {
        species: 'Litten',
        num: 725,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 45, atk: 65, def: 40, spa: 60, spd: 40, spe: 70,
        },
        abilities: { first: 'Blaze', hidden: 'Intimidate' },
        heightm: 0.4,
        weightkg: 4.3,
        color: 'Red',
        evos: [ 'torracat' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'torracat',
      {
        species: 'Torracat',
        num: 726,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 85, def: 50, spa: 80, spd: 50, spe: 90,
        },
        abilities: { first: 'Blaze', hidden: 'Intimidate' },
        heightm: 0.7,
        weightkg: 25,
        color: 'Red',
        prevo: 'litten',
        evos: [ 'incineroar' ],
        evoLevel: 17,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'incineroar',
      {
        species: 'Incineroar',
        num: 727,
        types: [ 'Fire', 'Dark' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60,
        },
        abilities: { first: 'Blaze', hidden: 'Intimidate' },
        heightm: 1.8,
        weightkg: 83,
        color: 'Red',
        prevo: 'torracat',
        evoLevel: 34,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'popplio',
      {
        species: 'Popplio',
        num: 728,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 54, def: 54, spa: 66, spd: 56, spe: 40,
        },
        abilities: { first: 'Torrent', hidden: 'Liquid Voice' },
        heightm: 0.4,
        weightkg: 7.5,
        color: 'Blue',
        evos: [ 'brionne' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'brionne',
      {
        species: 'Brionne',
        num: 729,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 60, atk: 69, def: 69, spa: 91, spd: 81, spe: 50,
        },
        abilities: { first: 'Torrent', hidden: 'Liquid Voice' },
        heightm: 0.6,
        weightkg: 17.5,
        color: 'Blue',
        prevo: 'popplio',
        evos: [ 'primarina' ],
        evoLevel: 17,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'primarina',
      {
        species: 'Primarina',
        num: 730,
        types: [ 'Water', 'Fairy' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 74, def: 74, spa: 126, spd: 116, spe: 60,
        },
        abilities: { first: 'Torrent', hidden: 'Liquid Voice' },
        heightm: 1.8,
        weightkg: 44,
        color: 'Blue',
        prevo: 'brionne',
        evoLevel: 34,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'pikipek',
      {
        species: 'Pikipek',
        num: 731,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 75, def: 30, spa: 30, spd: 30, spe: 65,
        },
        abilities: { first: 'Keen Eye', second: 'Skill Link', hidden: 'Pickup' },
        heightm: 0.3,
        weightkg: 1.2,
        color: 'Black',
        evos: [ 'trumbeak' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'trumbeak',
      {
        species: 'Trumbeak',
        num: 732,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 85, def: 50, spa: 40, spd: 50, spe: 75,
        },
        abilities: { first: 'Keen Eye', second: 'Skill Link', hidden: 'Pickup' },
        heightm: 0.6,
        weightkg: 14.8,
        color: 'Black',
        prevo: 'pikipek',
        evos: [ 'toucannon' ],
        evoLevel: 14,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'toucannon',
      {
        species: 'Toucannon',
        num: 733,
        types: [ 'Normal', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 60,
        },
        abilities: { first: 'Keen Eye', second: 'Skill Link', hidden: 'Sheer Force' },
        heightm: 1.1,
        weightkg: 26,
        color: 'Black',
        prevo: 'trumbeak',
        evoLevel: 28,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'yungoos',
      {
        species: 'Yungoos',
        num: 734,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 48, atk: 70, def: 30, spa: 30, spd: 30, spe: 45,
        },
        abilities: { first: 'Stakeout', second: 'Strong Jaw', hidden: 'Adaptability' },
        heightm: 0.4,
        weightkg: 6,
        color: 'Brown',
        evos: [ 'gumshoos' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gumshoos',
      {
        species: 'Gumshoos',
        num: 735,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 45,
        },
        abilities: { first: 'Stakeout', second: 'Strong Jaw', hidden: 'Adaptability' },
        heightm: 0.7,
        weightkg: 14.2,
        color: 'Brown',
        prevo: 'yungoos',
        evoLevel: 20,
        eggGroups: [ 'Field' ],
        otherFormes: [ 'gumshoostotem' ],
      }
    ],
    [
      'gumshoostotem',
      {
        species: 'Gumshoos-Totem',
        num: 735,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 45,
        },
        baseSpecies: 'Gumshoos',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Adaptability' },
        heightm: 1.4,
        weightkg: 60,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'grubbin',
      {
        species: 'Grubbin',
        num: 736,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 47, atk: 62, def: 45, spa: 55, spd: 45, spe: 46,
        },
        abilities: { first: 'Swarm' },
        heightm: 0.4,
        weightkg: 4.4,
        color: 'Gray',
        evos: [ 'charjabug' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'charjabug',
      {
        species: 'Charjabug',
        num: 737,
        types: [ 'Bug', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 57, atk: 82, def: 95, spa: 55, spd: 75, spe: 36,
        },
        abilities: { first: 'Battery' },
        heightm: 0.5,
        weightkg: 10.5,
        color: 'Green',
        prevo: 'grubbin',
        evos: [ 'vikavolt' ],
        evoLevel: 20,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'vikavolt',
      {
        species: 'Vikavolt',
        num: 738,
        types: [ 'Bug', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 45,
        color: 'Blue',
        prevo: 'charjabug',
        evoLevel: 'Level 21 inside special magnetic field',
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'vikavolttotem' ],
      }
    ],
    [
      'vikavolttotem',
      {
        species: 'Vikavolt-Totem',
        num: 738,
        types: [ 'Bug', 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43,
        },
        baseSpecies: 'Vikavolt',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Levitate' },
        heightm: 2.6,
        weightkg: 147.5,
        color: 'Blue',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'crabrawler',
      {
        species: 'Crabrawler',
        num: 739,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 47, atk: 82, def: 57, spa: 42, spd: 47, spe: 63,
        },
        abilities: { first: 'Hyper Cutter', second: 'Iron Fist', hidden: 'Anger Point' },
        heightm: 0.6,
        weightkg: 7,
        color: 'Purple',
        evos: [ 'crabominable' ],
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'crabominable',
      {
        species: 'Crabominable',
        num: 740,
        types: [ 'Fighting', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 97, atk: 132, def: 77, spa: 62, spd: 67, spe: 43,
        },
        abilities: { first: 'Hyper Cutter', second: 'Iron Fist', hidden: 'Anger Point' },
        heightm: 1.7,
        weightkg: 180,
        color: 'White',
        prevo: 'crabrawler',
        evoLevel: 'Level up in extreme cold',
        eggGroups: [ 'Water 3' ],
      }
    ],
    [
      'oricorio',
      {
        species: 'Oricorio',
        num: 741,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93,
        },
        baseForme: 'Baile',
        abilities: { first: 'Dancer' },
        heightm: 0.6,
        weightkg: 3.4,
        color: 'Red',
        eggGroups: [ 'Flying' ],
        otherFormes: [ 'oricoriopompom', 'oricoriopau', 'oricoriosensu' ],
      }
    ],
    [
      'oricoriopompom',
      {
        species: 'Oricorio-Pom-Pom',
        num: 741,
        types: [ 'Electric', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93,
        },
        baseSpecies: 'Oricorio',
        forme: 'Pom-Pom',
        formeLetter: 'P',
        abilities: { first: 'Dancer' },
        heightm: 0.6,
        weightkg: 3.4,
        color: 'Yellow',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'oricoriopau',
      {
        species: 'Oricorio-Pa\'u',
        num: 741,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93,
        },
        baseSpecies: 'Oricorio',
        forme: 'Pa\'u',
        formeLetter: 'P',
        abilities: { first: 'Dancer' },
        heightm: 0.6,
        weightkg: 3.4,
        color: 'Pink',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'oricoriosensu',
      {
        species: 'Oricorio-Sensu',
        num: 741,
        types: [ 'Ghost', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93,
        },
        baseSpecies: 'Oricorio',
        forme: 'Sensu',
        formeLetter: 'S',
        abilities: { first: 'Dancer' },
        heightm: 0.6,
        weightkg: 3.4,
        color: 'Purple',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'cutiefly',
      {
        species: 'Cutiefly',
        num: 742,
        types: [ 'Bug', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 40, spa: 55, spd: 40, spe: 84,
        },
        abilities: { first: 'Honey Gather', second: 'Shield Dust', hidden: 'Sweet Veil' },
        heightm: 0.1,
        weightkg: 0.2,
        color: 'Yellow',
        evos: [ 'ribombee' ],
        eggGroups: [ 'Bug', 'Fairy' ],
      }
    ],
    [
      'ribombee',
      {
        species: 'Ribombee',
        num: 743,
        types: [ 'Bug', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 55, def: 60, spa: 95, spd: 70, spe: 124,
        },
        abilities: { first: 'Honey Gather', second: 'Shield Dust', hidden: 'Sweet Veil' },
        heightm: 0.2,
        weightkg: 0.5,
        color: 'Yellow',
        prevo: 'cutiefly',
        evoLevel: 25,
        eggGroups: [ 'Bug', 'Fairy' ],
        otherFormes: [ 'ribombeetotem' ],
      }
    ],
    [
      'ribombeetotem',
      {
        species: 'Ribombee-Totem',
        num: 743,
        types: [ 'Bug', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 55, def: 60, spa: 95, spd: 70, spe: 124,
        },
        baseSpecies: 'Ribombee',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Sweet Veil' },
        heightm: 0.4,
        weightkg: 2,
        color: 'Yellow',
        eggGroups: [ 'Bug', 'Fairy' ],
      }
    ],
    [
      'rockruff',
      {
        species: 'Rockruff',
        num: 744,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 65, def: 40, spa: 30, spd: 40, spe: 60,
        },
        baseForme: 'Midday',
        abilities: {
          first: 'Keen Eye',
          second: 'Vital Spirit',
          hidden: 'Steadfast',
          special: 'Own Tempo',
        },
        heightm: 0.5,
        weightkg: 9.2,
        color: 'Brown',
        evos: [ 'lycanroc', 'lycanrocmidnight', 'lycanrocdusk' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'lycanroc',
      {
        species: 'Lycanroc',
        num: 745,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 115, def: 65, spa: 55, spd: 65, spe: 112,
        },
        baseForme: 'Midday',
        abilities: { first: 'Keen Eye', second: 'Sand Rush', hidden: 'Steadfast' },
        heightm: 0.8,
        weightkg: 25,
        color: 'Brown',
        prevo: 'rockruff',
        evoLevel: 'Level 25 during Daytime',
        eggGroups: [ 'Field' ],
        otherFormes: [ 'lycanrocmidnight', 'lycanrocdusk' ],
      }
    ],
    [
      'lycanrocmidnight',
      {
        species: 'Lycanroc-Midnight',
        num: 745,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 115, def: 75, spa: 55, spd: 75, spe: 82,
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
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'lycanrocdusk',
      {
        species: 'Lycanroc-Dusk',
        num: 745,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 117, def: 65, spa: 55, spd: 65, spe: 110,
        },
        baseSpecies: 'Lycanroc',
        forme: 'Dusk',
        formeLetter: 'D',
        abilities: { first: 'Tough Claws' },
        heightm: 0.8,
        weightkg: 25,
        color: 'Brown',
        prevo: 'rockruff',
        evoLevel: 'Level 25 between 5:00 PM and 5:59 PM',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'wishiwashi',
      {
        species: 'Wishiwashi',
        num: 746,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 20, def: 20, spa: 25, spd: 25, spe: 40,
        },
        baseForme: 'Solo',
        abilities: { first: 'Schooling' },
        heightm: 0.2,
        weightkg: 0.3,
        color: 'Blue',
        eggGroups: [ 'Water 2' ],
        otherFormes: [ 'wishiwashischool' ],
      }
    ],
    [
      'wishiwashischool',
      {
        species: 'Wishiwashi-School',
        num: 746,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 140, def: 130, spa: 140, spd: 135, spe: 30,
        },
        baseSpecies: 'Wishiwashi',
        forme: 'School',
        formeLetter: 'S',
        abilities: { first: 'Schooling' },
        heightm: 8.2,
        weightkg: 78.6,
        color: 'Blue',
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'mareanie',
      {
        species: 'Mareanie',
        num: 747,
        types: [ 'Poison', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 53, def: 62, spa: 43, spd: 52, spe: 45,
        },
        abilities: { first: 'Merciless', second: 'Limber', hidden: 'Regenerator' },
        heightm: 0.4,
        weightkg: 8,
        color: 'Blue',
        evos: [ 'toxapex' ],
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'toxapex',
      {
        species: 'Toxapex',
        num: 748,
        types: [ 'Poison', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 63, def: 152, spa: 53, spd: 142, spe: 35,
        },
        abilities: { first: 'Merciless', second: 'Limber', hidden: 'Regenerator' },
        heightm: 0.7,
        weightkg: 14.5,
        color: 'Blue',
        prevo: 'mareanie',
        evoLevel: 38,
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'mudbray',
      {
        species: 'Mudbray',
        num: 749,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 100, def: 70, spa: 45, spd: 55, spe: 45,
        },
        abilities: { first: 'Own Tempo', second: 'Stamina', hidden: 'Inner Focus' },
        heightm: 1,
        weightkg: 110,
        color: 'Brown',
        evos: [ 'mudsdale' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'mudsdale',
      {
        species: 'Mudsdale',
        num: 750,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 125, def: 100, spa: 55, spd: 85, spe: 35,
        },
        abilities: { first: 'Own Tempo', second: 'Stamina', hidden: 'Inner Focus' },
        heightm: 2.5,
        weightkg: 920,
        color: 'Brown',
        prevo: 'mudbray',
        evoLevel: 30,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'dewpider',
      {
        species: 'Dewpider',
        num: 751,
        types: [ 'Water', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 40, def: 52, spa: 40, spd: 72, spe: 27,
        },
        abilities: { first: 'Water Bubble', hidden: 'Water Absorb' },
        heightm: 0.3,
        weightkg: 4,
        color: 'Green',
        evos: [ 'araquanid' ],
        eggGroups: [ 'Water 1', 'Bug' ],
      }
    ],
    [
      'araquanid',
      {
        species: 'Araquanid',
        num: 752,
        types: [ 'Water', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 70, def: 92, spa: 50, spd: 132, spe: 42,
        },
        abilities: { first: 'Water Bubble', hidden: 'Water Absorb' },
        heightm: 1.8,
        weightkg: 82,
        color: 'Green',
        prevo: 'dewpider',
        evoLevel: 22,
        eggGroups: [ 'Water 1', 'Bug' ],
        otherFormes: [ 'araquanidtotem' ],
      }
    ],
    [
      'araquanidtotem',
      {
        species: 'Araquanid-Totem',
        num: 752,
        types: [ 'Water', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 70, def: 92, spa: 50, spd: 132, spe: 42,
        },
        baseSpecies: 'Araquanid',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Water Bubble' },
        heightm: 3.1,
        weightkg: 217.5,
        color: 'Green',
        eggGroups: [ 'Water 1', 'Bug' ],
      }
    ],
    [
      'fomantis',
      {
        species: 'Fomantis',
        num: 753,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 55, def: 35, spa: 50, spd: 35, spe: 35,
        },
        abilities: { first: 'Leaf Guard', hidden: 'Contrary' },
        heightm: 0.3,
        weightkg: 1.5,
        color: 'Pink',
        evos: [ 'lurantis' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'lurantis',
      {
        species: 'Lurantis',
        num: 754,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 105, def: 90, spa: 80, spd: 90, spe: 45,
        },
        abilities: { first: 'Leaf Guard', hidden: 'Contrary' },
        heightm: 0.9,
        weightkg: 18.5,
        color: 'Pink',
        prevo: 'fomantis',
        evoLevel: 34,
        eggGroups: [ 'Grass' ],
        otherFormes: [ 'lurantistotem' ],
      }
    ],
    [
      'lurantistotem',
      {
        species: 'Lurantis-Totem',
        num: 754,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 105, def: 90, spa: 80, spd: 90, spe: 45,
        },
        baseSpecies: 'Lurantis',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Leaf Guard' },
        heightm: 1.5,
        weightkg: 58,
        color: 'Pink',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'morelull',
      {
        species: 'Morelull',
        num: 755,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 35, def: 55, spa: 65, spd: 75, spe: 15,
        },
        abilities: { first: 'Illuminate', second: 'Effect Spore', hidden: 'Rain Dish' },
        heightm: 0.2,
        weightkg: 1.5,
        color: 'Purple',
        evos: [ 'shiinotic' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'shiinotic',
      {
        species: 'Shiinotic',
        num: 756,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 45, def: 80, spa: 90, spd: 100, spe: 30,
        },
        abilities: { first: 'Illuminate', second: 'Effect Spore', hidden: 'Rain Dish' },
        heightm: 1,
        weightkg: 11.5,
        color: 'Purple',
        prevo: 'morelull',
        evoLevel: 24,
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'salandit',
      {
        species: 'Salandit',
        num: 757,
        types: [ 'Poison', 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 48, atk: 44, def: 40, spa: 71, spd: 40, spe: 77,
        },
        abilities: { first: 'Corrosion', hidden: 'Oblivious' },
        heightm: 0.6,
        weightkg: 4.8,
        color: 'Black',
        evos: [ 'salazzle' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'salazzle',
      {
        species: 'Salazzle',
        num: 758,
        types: [ 'Poison', 'Fire' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 68, atk: 64, def: 60, spa: 111, spd: 60, spe: 117,
        },
        abilities: { first: 'Corrosion', hidden: 'Oblivious' },
        heightm: 1.2,
        weightkg: 22.2,
        color: 'Black',
        prevo: 'salandit',
        evoLevel: 'Level 33, Female only',
        eggGroups: [ 'Monster', 'Dragon' ],
        otherFormes: [ 'salazzletotem' ],
      }
    ],
    [
      'salazzletotem',
      {
        species: 'Salazzle-Totem',
        num: 758,
        types: [ 'Poison', 'Fire' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 68, atk: 64, def: 60, spa: 111, spd: 60, spe: 117,
        },
        baseSpecies: 'Salazzle',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Corrosion' },
        heightm: 2.1,
        weightkg: 81,
        color: 'Black',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'stufful',
      {
        species: 'Stufful',
        num: 759,
        types: [ 'Normal', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 75, def: 50, spa: 45, spd: 50, spe: 50,
        },
        abilities: { first: 'Fluffy', second: 'Klutz', hidden: 'Cute Charm' },
        heightm: 0.5,
        weightkg: 6.8,
        color: 'Pink',
        evos: [ 'bewear' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'bewear',
      {
        species: 'Bewear',
        num: 760,
        types: [ 'Normal', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 120, atk: 125, def: 80, spa: 55, spd: 60, spe: 60,
        },
        abilities: { first: 'Fluffy', second: 'Klutz', hidden: 'Unnerve' },
        heightm: 2.1,
        weightkg: 135,
        color: 'Pink',
        prevo: 'stufful',
        evoLevel: 27,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'bounsweet',
      {
        species: 'Bounsweet',
        num: 761,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 42, atk: 30, def: 38, spa: 30, spd: 38, spe: 32,
        },
        abilities: { first: 'Leaf Guard', second: 'Oblivious', hidden: 'Sweet Veil' },
        heightm: 0.3,
        weightkg: 3.2,
        color: 'Purple',
        evos: [ 'steenee' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'steenee',
      {
        species: 'Steenee',
        num: 762,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 52, atk: 40, def: 48, spa: 40, spd: 48, spe: 62,
        },
        abilities: { first: 'Leaf Guard', second: 'Oblivious', hidden: 'Sweet Veil' },
        heightm: 0.7,
        weightkg: 8.2,
        color: 'Purple',
        prevo: 'bounsweet',
        evos: [ 'tsareena' ],
        evoLevel: 18,
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'tsareena',
      {
        species: 'Tsareena',
        num: 763,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 72,
        },
        abilities: { first: 'Leaf Guard', second: 'Queenly Majesty', hidden: 'Sweet Veil' },
        heightm: 1.2,
        weightkg: 21.4,
        color: 'Purple',
        prevo: 'steenee',
        evoLevel: 'Level 19 while knowing Stomp',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'comfey',
      {
        species: 'Comfey',
        num: 764,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 51, atk: 52, def: 90, spa: 82, spd: 110, spe: 100,
        },
        abilities: { first: 'Flower Veil', second: 'Triage', hidden: 'Natural Cure' },
        heightm: 0.1,
        weightkg: 0.3,
        color: 'Green',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'oranguru',
      {
        species: 'Oranguru',
        num: 765,
        types: [ 'Normal', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 60, def: 80, spa: 90, spd: 110, spe: 60,
        },
        abilities: { first: 'Inner Focus', second: 'Telepathy', hidden: 'Symbiosis' },
        heightm: 1.5,
        weightkg: 76,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'passimian',
      {
        species: 'Passimian',
        num: 766,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 120, def: 90, spa: 40, spd: 60, spe: 80,
        },
        abilities: { first: 'Receiver', hidden: 'Defiant' },
        heightm: 2,
        weightkg: 82.8,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'wimpod',
      {
        species: 'Wimpod',
        num: 767,
        types: [ 'Bug', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 25, atk: 35, def: 40, spa: 20, spd: 30, spe: 80,
        },
        abilities: { first: 'Wimp Out' },
        heightm: 0.5,
        weightkg: 12,
        color: 'Gray',
        evos: [ 'golisopod' ],
        eggGroups: [ 'Bug', 'Water 3' ],
      }
    ],
    [
      'golisopod',
      {
        species: 'Golisopod',
        num: 768,
        types: [ 'Bug', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 125, def: 140, spa: 60, spd: 90, spe: 40,
        },
        abilities: { first: 'Emergency Exit' },
        heightm: 2,
        weightkg: 108,
        color: 'Gray',
        prevo: 'wimpod',
        evoLevel: 30,
        eggGroups: [ 'Bug', 'Water 3' ],
      }
    ],
    [
      'sandygast',
      {
        species: 'Sandygast',
        num: 769,
        types: [ 'Ghost', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 55, def: 80, spa: 70, spd: 45, spe: 15,
        },
        abilities: { first: 'Water Compaction', hidden: 'Sand Veil' },
        heightm: 0.5,
        weightkg: 70,
        color: 'Brown',
        evos: [ 'palossand' ],
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'palossand',
      {
        species: 'Palossand',
        num: 770,
        types: [ 'Ghost', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 85, atk: 75, def: 110, spa: 100, spd: 75, spe: 35,
        },
        abilities: { first: 'Water Compaction', hidden: 'Sand Veil' },
        heightm: 1.3,
        weightkg: 250,
        color: 'Brown',
        prevo: 'sandygast',
        evoLevel: 42,
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'pyukumuku',
      {
        species: 'Pyukumuku',
        num: 771,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 60, def: 130, spa: 30, spd: 130, spe: 5,
        },
        abilities: { first: 'Innards Out', hidden: 'Unaware' },
        heightm: 0.3,
        weightkg: 1.2,
        color: 'Black',
        eggGroups: [ 'Water 1' ],
      }
    ],
    [
      'typenull',
      {
        species: 'Type: Null',
        baseForme: 'Type: Null',
        num: 772,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 59,
        },
        abilities: { first: 'Battle Armor' },
        heightm: 1.9,
        weightkg: 120.5,
        color: 'Gray',
        evos: [ 'silvally' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvally',
      {
        species: 'Silvally',
        num: 773,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
        },
        abilities: { first: 'RKS System' },
        heightm: 2.3,
        weightkg: 100.5,
        color: 'Gray',
        prevo: 'typenull',
        evoLevel: 'Level up with High Friendship',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [
          'silvallybug', 'silvallydark',
          'silvallydragon', 'silvallyelectric',
          'silvallyfairy', 'silvallyfighting',
          'silvallyfire', 'silvallyflying',
          'silvallyghost', 'silvallygrass',
          'silvallyground', 'silvallyice',
          'silvallypoison', 'silvallypsychic',
          'silvallyrock', 'silvallysteel',
          'silvallywater'
        ],
      }
    ],
    [
      'silvallybug',
      {
        species: 'Silvally-Bug',
        num: 773,
        types: [ 'Bug' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallydark',
      {
        species: 'Silvally-Dark',
        num: 773,
        types: [ 'Dark' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallydragon',
      {
        species: 'Silvally-Dragon',
        num: 773,
        types: [ 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyelectric',
      {
        species: 'Silvally-Electric',
        num: 773,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyfairy',
      {
        species: 'Silvally-Fairy',
        num: 773,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyfighting',
      {
        species: 'Silvally-Fighting',
        num: 773,
        types: [ 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyfire',
      {
        species: 'Silvally-Fire',
        num: 773,
        types: [ 'Fire' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyflying',
      {
        species: 'Silvally-Flying',
        num: 773,
        types: [ 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyghost',
      {
        species: 'Silvally-Ghost',
        num: 773,
        types: [ 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallygrass',
      {
        species: 'Silvally-Grass',
        num: 773,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyground',
      {
        species: 'Silvally-Ground',
        num: 773,
        types: [ 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyice',
      {
        species: 'Silvally-Ice',
        num: 773,
        types: [ 'Ice' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallypoison',
      {
        species: 'Silvally-Poison',
        num: 773,
        types: [ 'Poison' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallypsychic',
      {
        species: 'Silvally-Psychic',
        num: 773,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallyrock',
      {
        species: 'Silvally-Rock',
        num: 773,
        types: [ 'Rock' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallysteel',
      {
        species: 'Silvally-Steel',
        num: 773,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'silvallywater',
      {
        species: 'Silvally-Water',
        num: 773,
        types: [ 'Water' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95,
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'minior',
      {
        species: 'Minior',
        num: 774,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 100, def: 60, spa: 100, spd: 60, spe: 120,
        },
        baseForme: 'Red',
        abilities: { first: 'Shields Down' },
        heightm: 0.3,
        weightkg: 0.3,
        color: 'Red',
        eggGroups: [ 'Mineral' ],
        otherFormes: [
          'miniormeteor',
          'miniororange',
          'minioryellow',
          'miniorgreen',
          'miniorblue',
          'miniorindigo',
          'miniorviolet'
        ],
      }
    ],
    [
      'miniormeteor',
      {
        species: 'Minior-Meteor',
        num: 774,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 60, atk: 60, def: 100, spa: 60, spd: 100, spe: 60,
        },
        baseSpecies: 'Minior',
        forme: 'Meteor',
        formeLetter: 'M',
        abilities: { first: 'Shields Down' },
        heightm: 0.3,
        weightkg: 40,
        color: 'Brown',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'komala',
      {
        species: 'Komala',
        num: 775,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 115, def: 65, spa: 75, spd: 95, spe: 65,
        },
        abilities: { first: 'Comatose' },
        heightm: 0.4,
        weightkg: 19.9,
        color: 'Blue',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'turtonator',
      {
        species: 'Turtonator',
        num: 776,
        types: [ 'Fire', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 78, def: 135, spa: 91, spd: 85, spe: 36,
        },
        abilities: { first: 'Shell Armor' },
        heightm: 2,
        weightkg: 212,
        color: 'Red',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'togedemaru',
      {
        species: 'Togedemaru',
        num: 777,
        types: [ 'Electric', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 98, def: 63, spa: 40, spd: 73, spe: 96,
        },
        abilities: { first: 'Iron Barbs', second: 'Lightning Rod', hidden: 'Sturdy' },
        heightm: 0.3,
        weightkg: 3.3,
        color: 'Gray',
        eggGroups: [ 'Field', 'Fairy' ],
        otherFormes: [ 'togedemarutotem' ],
      }
    ],
    [
      'togedemarutotem',
      {
        species: 'Togedemaru-Totem',
        num: 777,
        types: [ 'Electric', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 98, def: 63, spa: 40, spd: 73, spe: 96,
        },
        baseSpecies: 'Togedemaru',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Sturdy' },
        heightm: 0.6,
        weightkg: 13,
        color: 'Gray',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'mimikyu',
      {
        species: 'Mimikyu',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96,
        },
        abilities: { first: 'Disguise' },
        heightm: 0.2,
        weightkg: 0.7,
        color: 'Yellow',
        eggGroups: [ 'Amorphous' ],
        otherFormes: [ 'mimikyubusted', 'mimikyutotem', 'mimikyubustedtotem' ],
      }
    ],
    [
      'mimikyubusted',
      {
        species: 'Mimikyu-Busted',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96,
        },
        baseSpecies: 'Mimikyu',
        forme: 'Busted',
        formeLetter: 'B',
        abilities: { first: 'Disguise' },
        heightm: 0.2,
        weightkg: 0.7,
        color: 'Yellow',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'mimikyutotem',
      {
        species: 'Mimikyu-Totem',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96,
        },
        baseSpecies: 'Mimikyu',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Disguise' },
        heightm: 0.4,
        weightkg: 2.8,
        color: 'Yellow',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'mimikyubustedtotem',
      {
        species: 'Mimikyu-Busted-Totem',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96,
        },
        baseSpecies: 'Mimikyu',
        forme: 'Busted-Totem',
        formeLetter: 'T',
        abilities: { first: 'Disguise' },
        heightm: 0.4,
        weightkg: 2.8,
        color: 'Yellow',
        eggGroups: [ 'Amorphous' ],
      }
    ],
    [
      'bruxish',
      {
        species: 'Bruxish',
        num: 779,
        types: [ 'Water', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 105, def: 70, spa: 70, spd: 70, spe: 92,
        },
        abilities: { first: 'Dazzling', second: 'Strong Jaw', hidden: 'Wonder Skin' },
        heightm: 0.9,
        weightkg: 19,
        color: 'Pink',
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'drampa',
      {
        species: 'Drampa',
        num: 780,
        types: [ 'Normal', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 78, atk: 60, def: 85, spa: 135, spd: 91, spe: 36,
        },
        abilities: { first: 'Berserk', second: 'Sap Sipper', hidden: 'Cloud Nine' },
        heightm: 3,
        weightkg: 185,
        color: 'White',
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'dhelmise',
      {
        species: 'Dhelmise',
        num: 781,
        types: [ 'Ghost', 'Grass' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 131, def: 100, spa: 86, spd: 90, spe: 40,
        },
        abilities: { first: 'Steelworker' },
        heightm: 3.9,
        weightkg: 210,
        color: 'Green',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'jangmoo',
      {
        species: 'Jangmoo',
        num: 782,
        types: [ 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 55, def: 65, spa: 45, spd: 45, spe: 45,
        },
        abilities: { first: 'Bulletproof', second: 'Soundproof', hidden: 'Overcoat' },
        heightm: 0.6,
        weightkg: 29.7,
        color: 'Gray',
        evos: [ 'hakamoo' ],
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'hakamoo',
      {
        species: 'Hakamo-o',
        num: 783,
        types: [ 'Dragon', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 75, def: 90, spa: 65, spd: 70, spe: 65,
        },
        abilities: { first: 'Bulletproof', second: 'Soundproof', hidden: 'Overcoat' },
        heightm: 1.2,
        weightkg: 47,
        color: 'Gray',
        prevo: 'jangmoo',
        evos: [ 'kommoo' ],
        evoLevel: 35,
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'kommoo',
      {
        species: 'Kommo-o',
        num: 784,
        types: [ 'Dragon', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85,
        },
        abilities: { first: 'Bulletproof', second: 'Soundproof', hidden: 'Overcoat' },
        heightm: 1.6,
        weightkg: 78.2,
        color: 'Gray',
        prevo: 'hakamoo',
        evoLevel: 45,
        eggGroups: [ 'Dragon' ],
        otherFormes: [ 'kommoototem' ],
      }
    ],
    [
      'kommoototem',
      {
        species: 'Kommo-o-Totem',
        num: 784,
        types: [ 'Dragon', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85,
        },
        baseSpecies: 'Kommo-o',
        forme: 'Totem',
        formeLetter: 'T',
        abilities: { first: 'Overcoat' },
        heightm: 2.4,
        weightkg: 207.5,
        color: 'Gray',
        eggGroups: [ 'Dragon' ],
      }
    ],
    [
      'tapukoko',
      {
        species: 'Tapu Koko',
        num: 785,
        types: [ 'Electric', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 115, def: 85, spa: 95, spd: 75, spe: 130,
        },
        abilities: { first: 'Electric Surge', hidden: 'Telepathy' },
        heightm: 1.8,
        weightkg: 20.5,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'tapulele',
      {
        species: 'Tapu Lele',
        num: 786,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 85, def: 75, spa: 130, spd: 115, spe: 95,
        },
        abilities: { first: 'Psychic Surge', hidden: 'Telepathy' },
        heightm: 1.2,
        weightkg: 18.6,
        color: 'Pink',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'tapubulu',
      {
        species: 'Tapu Bulu',
        num: 787,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 130, def: 115, spa: 85, spd: 95, spe: 75,
        },
        abilities: { first: 'Grassy Surge', hidden: 'Telepathy' },
        heightm: 1.9,
        weightkg: 45.5,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'tapufini',
      {
        species: 'Tapu Fini',
        num: 788,
        types: [ 'Water', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 75, def: 115, spa: 95, spd: 130, spe: 85,
        },
        abilities: { first: 'Misty Surge', hidden: 'Telepathy' },
        heightm: 1.3,
        weightkg: 21.2,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'cosmog',
      {
        species: 'Cosmog',
        num: 789,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 43, atk: 29, def: 31, spa: 29, spd: 31, spe: 37,
        },
        abilities: { first: 'Unaware' },
        heightm: 0.2,
        weightkg: 0.1,
        color: 'Blue',
        evos: [ 'cosmoem' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'cosmoem',
      {
        species: 'Cosmoem',
        num: 790,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 43, atk: 29, def: 131, spa: 29, spd: 131, spe: 37,
        },
        abilities: { first: 'Sturdy' },
        heightm: 0.1,
        weightkg: 999.9,
        color: 'Blue',
        prevo: 'cosmog',
        evos: [ 'solgaleo', 'lunala' ],
        evoLevel: 43,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'solgaleo',
      {
        species: 'Solgaleo',
        num: 791,
        types: [ 'Psychic', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 137, atk: 137, def: 107, spa: 113, spd: 89, spe: 97,
        },
        abilities: { first: 'Full Metal Body' },
        heightm: 3.4,
        weightkg: 230,
        color: 'White',
        prevo: 'cosmoem',
        evoLevel: 53,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'lunala',
      {
        species: 'Lunala',
        num: 792,
        types: [ 'Psychic', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 137, atk: 113, def: 89, spa: 137, spd: 107, spe: 97,
        },
        abilities: { first: 'Shadow Shield' },
        heightm: 4,
        weightkg: 120,
        color: 'Purple',
        prevo: 'cosmoem',
        evoLevel: 53,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'nihilego',
      {
        species: 'Nihilego',
        num: 793,
        types: [ 'Rock', 'Poison' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 109, atk: 53, def: 47, spa: 127, spd: 131, spe: 103,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 1.2,
        weightkg: 55.5,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'buzzwole',
      {
        species: 'Buzzwole',
        num: 794,
        types: [ 'Bug', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 107, atk: 139, def: 139, spa: 53, spd: 53, spe: 79,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 2.4,
        weightkg: 333.6,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pheromosa',
      {
        species: 'Pheromosa',
        num: 795,
        types: [ 'Bug', 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 71, atk: 137, def: 37, spa: 137, spd: 37, spe: 151,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 1.8,
        weightkg: 25,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'xurkitree',
      {
        species: 'Xurkitree',
        num: 796,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 83, atk: 89, def: 71, spa: 173, spd: 71, spe: 83,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 3.8,
        weightkg: 100,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'celesteela',
      {
        species: 'Celesteela',
        num: 797,
        types: [ 'Steel', 'Flying' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 97, atk: 101, def: 103, spa: 107, spd: 101, spe: 61,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 9.2,
        weightkg: 999.9,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'kartana',
      {
        species: 'Kartana',
        num: 798,
        types: [ 'Grass', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 59, atk: 181, def: 131, spa: 59, spd: 31, spe: 109,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 0.3,
        weightkg: 0.1,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'guzzlord',
      {
        species: 'Guzzlord',
        num: 799,
        types: [ 'Dark', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 223, atk: 101, def: 53, spa: 97, spd: 53, spe: 43,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 5.5,
        weightkg: 888,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'necrozma',
      {
        species: 'Necrozma',
        num: 800,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 97, atk: 107, def: 101, spa: 127, spd: 89, spe: 79,
        },
        abilities: { first: 'Prism Armor' },
        heightm: 2.4,
        weightkg: 230,
        color: 'Black',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'necrozmaduskmane', 'necrozmadawnwings', 'necrozmaultra' ],
      }
    ],
    [
      'necrozmaduskmane',
      {
        species: 'Necrozma-Dusk-Mane',
        num: 800,
        types: [ 'Psychic', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 97, atk: 157, def: 127, spa: 113, spd: 109, spe: 77,
        },
        baseSpecies: 'Necrozma',
        forme: 'Dusk-Mane',
        formeLetter: 'D',
        abilities: { first: 'Prism Armor' },
        heightm: 3.8,
        weightkg: 460,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'necrozmadawnwings',
      {
        species: 'Necrozma-Dawn-Wings',
        num: 800,
        types: [ 'Psychic', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 97, atk: 113, def: 109, spa: 157, spd: 127, spe: 77,
        },
        baseSpecies: 'Necrozma',
        forme: 'Dawn-Wings',
        formeLetter: 'D',
        abilities: { first: 'Prism Armor' },
        heightm: 4.2,
        weightkg: 350,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'necrozmaultra',
      {
        species: 'Necrozma-Ultra',
        num: 800,
        types: [ 'Psychic', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 97, atk: 167, def: 97, spa: 167, spd: 97, spe: 129,
        },
        baseSpecies: 'Necrozma',
        forme: 'Ultra',
        formeLetter: 'U',
        abilities: { first: 'Neuroforce' },
        heightm: 7.5,
        weightkg: 230,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'magearna',
      {
        species: 'Magearna',
        num: 801,
        types: [ 'Steel', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 95, def: 115, spa: 130, spd: 115, spe: 65,
        },
        abilities: { first: 'Soul-Heart' },
        heightm: 1,
        weightkg: 80.5,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'magearnaoriginal' ],
      }
    ],
    [
      'magearnaoriginal',
      {
        species: 'Magearna-Original',
        num: 801,
        types: [ 'Steel', 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 80, atk: 95, def: 115, spa: 130, spd: 115, spe: 65,
        },
        baseSpecies: 'Magearna',
        forme: 'Original',
        formeLetter: 'O',
        abilities: { first: 'Soul-Heart' },
        heightm: 1,
        weightkg: 80.5,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'marshadow',
      {
        species: 'Marshadow',
        num: 802,
        types: [ 'Fighting', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 125, def: 80, spa: 90, spd: 90, spe: 125,
        },
        abilities: { first: 'Technician' },
        heightm: 0.7,
        weightkg: 22.2,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'poipole',
      {
        species: 'Poipole',
        num: 803,
        types: [ 'Poison' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 67, atk: 73, def: 67, spa: 73, spd: 67, spe: 73,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 0.6,
        weightkg: 1.8,
        color: 'Purple',
        evos: [ 'naganadel' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'naganadel',
      {
        species: 'Naganadel',
        num: 804,
        types: [ 'Poison', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 73, atk: 73, def: 73, spa: 127, spd: 73, spe: 121,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 3.6,
        weightkg: 150,
        color: 'Purple',
        prevo: 'poipole',
        evoLevel: 41,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'stakataka',
      {
        species: 'Stakataka',
        num: 805,
        types: [ 'Rock', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 61, atk: 131, def: 211, spa: 53, spd: 101, spe: 13,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 5.5,
        weightkg: 820,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'blacephalon',
      {
        species: 'Bblacephalon',
        num: 806,
        types: [ 'Fire', 'Ghost' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 53, atk: 127, def: 53, spa: 151, spd: 79, spe: 107,
        },
        abilities: { first: 'Beast Boost' },
        heightm: 1.8,
        weightkg: 13,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'zeraora',
      {
        species: 'Zeraora',
        num: 807,
        types: [ 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 88, atk: 112, def: 75, spa: 102, spd: 80, spe: 143,
        },
        abilities: { first: 'Volt Absorb' },
        heightm: 1.5,
        weightkg: 44.5,
        color: 'Yellow',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'missingno',
      {
        species: 'Missingno.',
        num: 0,
        types: [ 'Bird', 'Normal' ],
        baseStats: {
          hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29,
        },
        abilities: { first: 'Breaking Your Game' },
        heightm: 3,
        weightkg: 1590.8,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'meltan',
      {
        species: 'Meltan',
        num: 808,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 46, atk: 65, def: 65, spa: 55, spd: 35, spe: 34,
        },
        abilities: { first: 'Magnet Pull' },
        heightm: 0.2,
        weightkg: 8,
        color: 'Gray',
        evos: [ 'melmetal' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'melmetal',
      {
        species: 'Melmetal',
        num: 809,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34,
        },
        abilities: { first: 'Iron Fist' },
        heightm: 2.5,
        weightkg: 800,
        color: 'Gray',
        prevo: 'meltan',
        evoLevel: 'feed 400 Meltan Candy in Pokémon GO',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'melmetalgmax' ],
      }
    ],
    [
      'melmetalgmax',
      {
        species: 'Melmetal-Gmax',
        baseSpecies: 'Melmetal',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 809,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34,
        },
        abilities: { first: 'Iron Fist' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Gray',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'grookey',
      {
        species: 'Grookey',
        num: 810,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 65, def: 50, spa: 40, spd: 40, spe: 65,
        },
        abilities: { first: 'Overgrow', second: 'Overgrow', hidden: 'Grassy Surge' },
        heightm: 0.30,
        weightkg: 5.0,
        color: 'Green',
        evos: [ 'thwackey' ],
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'thwackey',
      {
        species: 'Thwackey',
        num: 811,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 85, def: 70, spa: 55, spd: 60, spe: 80,
        },
        abilities: { first: 'Overgrow', second: 'Overgrow', hidden: 'Grassy Surge' },
        heightm: 0.70,
        weightkg: 14.0,
        color: 'Green',
        prevo: 'grookey',
        evos: [ 'rillaboom' ],
        evoLevel: 16,
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'rillaboom',
      {
        species: 'Rillaboom',
        num: 812,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85,
        },
        abilities: { first: 'Overgrow', second: 'Overgrow', hidden: 'Grassy Surge' },
        heightm: 2.10,
        weightkg: 90.0,
        color: 'Green',
        prevo: 'thwackey',
        evoLevel: 35,
        eggGroups: [ 'Field', 'Grass' ],
      }
    ],
    [
      'scorbunny',
      {
        species: 'Scorbunny',
        num: 813,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 71, def: 40, spa: 40, spd: 40, spe: 69,
        },
        abilities: { first: 'Blaze', second: 'Blaze', hidden: 'Libero' },
        heightm: 0.30,
        weightkg: 4.5,
        color: 'White',
        evos: [ 'raboot' ],
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'raboot',
      {
        species: 'Raboot',
        num: 814,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 86, def: 60, spa: 55, spd: 60, spe: 94,
        },
        abilities: { first: 'Blaze', second: 'Blaze', hidden: 'Libero' },
        heightm: 0.60,
        weightkg: 9.0,
        color: 'Gray',
        prevo: 'scorbunny',
        evos: [ 'cinderace' ],
        evoLevel: 16,
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'cinderace',
      {
        species: 'Cinderace',
        num: 815,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119,
        },
        abilities: { first: 'Blaze', second: 'Blaze', hidden: 'Libero' },
        heightm: 1.40,
        weightkg: 33.0,
        color: 'White',
        prevo: 'raboot',
        evoLevel: 35,
        eggGroups: [ 'Field', 'Human-Like' ],
      }
    ],
    [
      'sobble',
      {
        species: 'Sobble',
        num: 816,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 50, atk: 40, def: 40, spa: 70, spd: 40, spe: 70,
        },
        abilities: { first: 'Torrent', second: 'Torrent', hidden: 'Sniper' },
        heightm: 0.30,
        weightkg: 4.0,
        color: 'Blue',
        evos: [ 'drizzile' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'drizzile',
      {
        species: 'Drizzile',
        num: 817,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 65, atk: 60, def: 55, spa: 95, spd: 55, spe: 90,
        },
        abilities: { first: 'Torrent', second: 'Torrent', hidden: 'Sniper' },
        heightm: 0.70,
        weightkg: 11.5,
        color: 'Blue',
        prevo: 'sobble',
        evos: [ 'inteleon' ],
        evoLevel: 16,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'inteleon',
      {
        species: 'Inteleon',
        num: 818,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120,
        },
        abilities: { first: 'Torrent', second: 'Torrent', hidden: 'Sniper' },
        heightm: 1.90,
        weightkg: 45.2,
        color: 'Blue',
        prevo: 'drizzile',
        evoLevel: 35,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'skwovet',
      {
        species: 'Skwovet',
        num: 819,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 55, def: 55, spa: 35, spd: 35, spe: 25,
        },
        abilities: { first: 'Cheek Pouch', second: 'Cheek Pouch', hidden: 'Gluttony' },
        heightm: 0.30,
        weightkg: 2.5,
        color: 'Brown',
        evos: [ 'greedent' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'greedent',
      {
        species: 'Greedent',
        num: 820,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 120, atk: 95, def: 95, spa: 55, spd: 75, spe: 20,
        },
        abilities: { first: 'Cheek Pouch', second: 'Cheek Pouch', hidden: 'Gluttony' },
        heightm: 0.60,
        weightkg: 6.0,
        color: 'Brown',
        prevo: 'skwovet',
        evoLevel: 24,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'rookidee',
      {
        species: 'Rookidee',
        num: 821,
        types: [ 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 38, atk: 47, def: 35, spa: 33, spd: 35, spe: 57,
        },
        abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
        heightm: 0.20,
        weightkg: 1.8,
        color: 'Blue',
        evos: [ 'corvisquire' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'corvisquire',
      {
        species: 'Corvisquire',
        num: 822,
        types: [ 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 67, def: 55, spa: 43, spd: 55, spe: 77,
        },
        abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
        heightm: 0.80,
        weightkg: 16.0,
        color: 'Blue',
        prevo: 'rookidee',
        evos: [ 'corvisquire' ],
        evoLevel: 18,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'corviknight',
      {
        species: 'Corviknight',
        num: 823,
        types: [ 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67,
        },
        abilities: { first: 'Pressure', second: 'Unnerve', hidden: 'Mirror Armor' },
        heightm: 2.20,
        weightkg: 75.0,
        color: 'Blue',
        prevo: 'corvisquire',
        evoLevel: 38,
        eggGroups: [ 'Flying' ],
        otherFormes: [ 'corviknightgmax' ],
      }
    ],
    [
      'corviknightgmax',
      {
        species: 'Corviknight-Gmax',
        baseSpecies: 'Corviknight',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 823,
        types: [ 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67,
        },
        abilities: { first: 'Pressure', second: 'Unnerve', hidden: 'Mirror Armor' },
        heightm: 14,
        weightkg: 0,
        color: 'Blue',
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'blipbug',
      {
        species: 'Blipbug',
        num: 824,
        types: [ 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 25, atk: 20, def: 20, spa: 25, spd: 45, spe: 45,
        },
        abilities: { first: 'Swarm', second: 'Compound Eyes', hidden: 'Telepathy' },
        heightm: 0.40,
        weightkg: 8.0,
        color: 'Blue',
        evos: [ 'dottler' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'dottler',
      {
        species: 'Dottler',
        num: 825,
        types: [ 'Bug', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 35, def: 80, spa: 50, spd: 90, spe: 30,
        },
        abilities: { first: 'Keen Eye', second: 'Unnerve', hidden: 'Big Pecks' },
        heightm: 0.80,
        weightkg: 19.5,
        color: 'Yellow',
        prevo: 'blipbug',
        evos: [ 'orbeetle' ],
        evoLevel: 10,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'orbeetle',
      {
        species: 'Orbeetle',
        num: 826,
        types: [ 'Bug', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90,
        },
        abilities: { first: 'Swarm', second: 'Frisk', hidden: 'Telepathy' },
        heightm: 0.40,
        weightkg: 40.8,
        color: 'Red',
        prevo: 'dottler',
        evoLevel: 30,
        eggGroups: [ 'Bug' ],
        otherFormes: [ 'orbeetlegmax' ],
      }
    ],
    [
      'orbeetlegmax',
      {
        species: 'Orbeetle-Gmax',
        baseSpecies: 'Orbeetle',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 826,
        types: [ 'Bug', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90,
        },
        abilities: { first: 'Swarm', second: 'Frisk', hidden: 'Telepathy' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Red',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'nickit',
      {
        species: 'Nickit',
        num: 827,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 28, def: 28, spa: 47, spd: 52, spe: 50,
        },
        abilities: { first: 'Run Away', second: 'Unburden', hidden: 'Stakeout' },
        heightm: 0.60,
        weightkg: 8.9,
        color: 'Brown',
        evos: [ 'thievul' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'thievul',
      {
        species: 'Thievul',
        num: 828,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 58, def: 58, spa: 87, spd: 92, spe: 90,
        },
        abilities: { first: 'Run Away', second: 'Unburden', hidden: 'Stakeout' },
        heightm: 1.20,
        weightkg: 19.9,
        color: 'Brown',
        prevo: 'nickit',
        evoLevel: 18,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gossifleur',
      {
        species: 'Gossifleur',
        num: 829,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 40, def: 60, spa: 40, spd: 60, spe: 10,
        },
        abilities: { first: 'Cotton Down', second: 'Regenerator', hidden: 'Effect Spore' },
        heightm: 0.40,
        weightkg: 2.2,
        color: 'Green',
        evos: [ 'eldegoss' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'eldegoss',
      {
        species: 'Eldegoss',
        num: 830,
        types: [ 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 50, def: 90, spa: 80, spd: 120, spe: 60,
        },
        abilities: { first: 'Cotton Down', second: 'Regenerator', hidden: 'Effect Spore' },
        heightm: 0.50,
        weightkg: 2.5,
        color: 'Green',
        prevo: 'gossifleur',
        evoLevel: 20,
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'wooloo',
      {
        species: 'Wooloo',
        num: 831,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 42, atk: 40, def: 55, spa: 40, spd: 45, spe: 48,
        },
        abilities: { first: 'Fluffy', second: 'Run Away', hidden: 'Bulletproof' },
        heightm: 0.60,
        weightkg: 6.0,
        color: 'White',
        evos: [ 'dubwool' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'dubwool',
      {
        species: 'Dubwool',
        num: 832,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 80, def: 100, spa: 60, spd: 90, spe: 88,
        },
        abilities: { first: 'Fluffy', second: 'Steadfast', hidden: 'Bulletproof' },
        heightm: 1.30,
        weightkg: 43.0,
        color: 'White',
        prevo: 'wooloo',
        evoLevel: 24,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'chewtle',
      {
        species: 'Chewtle',
        num: 833,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 64, def: 50, spa: 38, spd: 38, spe: 44,
        },
        abilities: { first: 'Strong Jaw', second: 'Shell Armor', hidden: 'Swift Swim' },
        heightm: 0.30,
        weightkg: 8.5,
        color: 'Green',
        evos: [ 'drednaw' ],
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'drednaw',
      {
        species: 'Drednaw',
        num: 834,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74,
        },
        abilities: { first: 'Strong Jaw', second: 'Shell Armor', hidden: 'Swift Swim' },
        heightm: 1,
        weightkg: 115.5,
        color: 'Green',
        prevo: 'chewtle',
        evoLevel: 22,
        eggGroups: [ 'Monster', 'Water 1' ],
        otherFormes: [ 'drednawgmax' ],
      }
    ],
    [
      'drednawgmax',
      {
        species: 'Drednaw-Gmax',
        baseSpecies: 'Drednaw',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 834,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74,
        },
        abilities: { first: 'Strong Jaw', second: 'Shell Armor', hidden: 'Swift Swim' },
        heightm: 24,
        weightkg: 0,
        color: 'Green',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'yamper',
      {
        species: 'Yamper',
        num: 835,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 59, atk: 45, def: 50, spa: 40, spd: 50, spe: 26,
        },
        abilities: { first: 'Ball Fetch', second: 'Ball Fetch', hidden: 'Rattled' },
        heightm: 0.30,
        weightkg: 13.5,
        color: 'Yellow',
        evos: [ 'boltund' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'boltund',
      {
        species: 'Boltund',
        num: 836,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121,
        },
        abilities: { first: 'Strong Jaw', second: 'Strong Jaw', hidden: 'Competitive' },
        heightm: 1.00,
        weightkg: 34.0,
        color: 'Yellow',
        prevo: 'yamper',
        evoLevel: 25,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'rolycoly',
      {
        species: 'Rolycoly',
        num: 837,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 40, def: 50, spa: 40, spd: 50, spe: 30,
        },
        abilities: { first: 'Steam Engine', second: 'Heatproof', hidden: 'Flash Fire' },
        heightm: 0.30,
        weightkg: 12.0,
        color: 'Black',
        evos: [ 'carkol' ],
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'carkol',
      {
        species: 'Carkol',
        num: 838,
        types: [ 'Rock', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 60, def: 90, spa: 60, spd: 70, spe: 50,
        },
        abilities: { first: 'Steam Engine', second: 'Flame Body', hidden: 'Flash Fire' },
        heightm: 1.10,
        weightkg: 78.0,
        color: 'Black',
        prevo: 'rolycoly',
        evos: [ 'coalossal' ],
        evoLevel: 18,
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'coalossal',
      {
        species: 'Coalossal',
        num: 839,
        types: [ 'Rock', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30,
        },
        abilities: { first: 'Steam Engine', second: 'Flame Body', hidden: 'Flash Fire' },
        heightm: 2.80,
        weightkg: 310.5,
        color: 'Black',
        prevo: 'carkol',
        evoLevel: 34,
        eggGroups: [ 'Mineral' ],
        otherFormes: [ 'coalossalgmax' ],
      }
    ],
    [
      'coalossalgmax',
      {
        species: 'Coalossal-Gmax',
        baseSpecies: 'Coalossal',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 839,
        types: [ 'Rock', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30,
        },
        abilities: { first: 'Steam Engine', second: 'Flame Body', hidden: 'Flash Fire' },
        heightm: 24,
        weightkg: 0,
        color: 'Black',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'applin',
      {
        species: 'Applin',
        num: 840,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 40, def: 80, spa: 40, spd: 40, spe: 20,
        },
        abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Bulletproof' },
        heightm: 0.20,
        weightkg: 0.5,
        color: 'Green',
        evos: [ 'flapple', 'appletun' ],
        eggGroups: [ 'Grass', 'Dragon' ],
      }
    ],
    [
      'flapple',
      {
        species: 'Flapple',
        num: 841,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70,
        },
        abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Hustle' },
        heightm: 0.3,
        weightkg: 1.0,
        color: 'Green',
        prevo: 'applin',
        evoLevel: 'use Tart Apple',
        eggGroups: [ 'Grass', 'Dragon' ],
        otherFormes: [ 'flapplegmax' ],
      }
    ],
    [
      'flapplegmax',
      {
        species: 'Flapple-Gmax',
        baseSpecies: 'Flapple',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 841,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70,
        },
        abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Hustle' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Green',
        eggGroups: [ 'Grass', 'Dragon' ],
      }
    ],
    [
      'appletun',
      {
        species: 'Appletun',
        num: 842,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30,
        },
        abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Thick Fat' },
        heightm: 0.40,
        weightkg: 0.13,
        color: 'Green',
        prevo: 'applin',
        evoLevel: 'use Sweet Apple',
        eggGroups: [ 'Grass', 'Dragon' ],
        otherFormes: [ 'appletungmax' ],
      }
    ],
    [
      'appletungmax',
      {
        species: 'Appletun-Gmax',
        baseSpecies: 'Appletun',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 842,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30,
        },
        abilities: { first: 'Ripen', second: 'Gluttony', hidden: 'Thick Fat' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Green',
        prevo: 'applin',
        evoLevel: 'use Sweet Apple',
        eggGroups: [ 'Grass', 'Dragon' ],
      }
    ],
    [
      'silicobra',
      {
        species: 'Silicobra',
        num: 843,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 52, atk: 57, def: 75, spa: 35, spd: 50, spe: 46,
        },
        abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
        heightm: 2.20,
        weightkg: 7.6,
        color: 'Green',
        evos: [ 'sandaconda' ],
        eggGroups: [ 'Field', 'Dragon' ],
      }
    ],
    [
      'sandaconda',
      {
        species: 'Sandaconda',
        num: 844,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71,
        },
        abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
        heightm: 3.80,
        weightkg: 65.5,
        color: 'Green',
        prevo: 'silicobra',
        evoLevel: 36,
        eggGroups: [ 'Field', 'Dragon' ],
        otherFormes: [ 'sandacondagmax' ],
      }
    ],
    [
      'sandacondagmax',
      {
        species: 'Sandaconda-Gmax',
        baseSpecies: 'Sandaconda',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 844,
        types: [ 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71,
        },
        abilities: { first: 'Sand Spit', second: 'Shed Skin', hidden: 'Sand Veil' },
        heightm: 3.80,
        weightkg: 65.5,
        color: 'Green',
        prevo: 'silicobra',
        evoLevel: 36,
        eggGroups: [ 'Field', 'Dragon' ],
        otherFormes: [ 'sandacondagmax' ],
      }
    ],
    [
      'cramorant',
      {
        species: 'Cramorant',
        num: 845,
        types: [ 'Flying', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85,
        },
        abilities: { first: 'Gulp Missile', second: 'Gulp Missile', hidden: 'Gulp Missile' },
        heightm: 0.80,
        weightkg: 18.0,
        color: 'Blue',
        eggGroups: [ 'Water 1', 'Flying' ],
      }
    ],
    [
      'arrokuda',
      {
        species: 'Arrokuda',
        num: 846,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 41, atk: 63, def: 40, spa: 40, spd: 30, spe: 66,
        },
        abilities: { first: 'Swift Swim', second: 'Swift Swim', hidden: 'Propeller Tail' },
        heightm: 0.50,
        weightkg: 1.0,
        color: 'Brown',
        evos: [ 'barraskewda' ],
        evoLevel: 36,
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'barraskewda',
      {
        species: 'Barraskewda',
        num: 847,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 61, atk: 123, def: 60, spa: 60, spd: 50, spe: 136,
        },
        abilities: { first: 'Swift Swim', second: 'Swift Swim', hidden: 'Propeller Tail' },
        heightm: 1.30,
        weightkg: 30.0,
        color: 'Brown',
        prevo: 'arrokuda',
        evoLevel: 26,
        eggGroups: [ 'Water 2' ],
      }
    ],
    [
      'toxel',
      {
        species: 'Toxel',
        num: 848,
        types: [ 'Electric', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 38, def: 35, spa: 54, spd: 35, spe: 40,
        },
        abilities: { first: 'Rattled', second: 'Static', hidden: 'Klutz' },
        heightm: 0.40,
        weightkg: 0.11,
        color: 'Purple',
        evos: [ 'toxtricity' ],
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'toxtricity',
      {
        species: 'Toxtricity',
        num: 849,
        types: [ 'Electric', 'Poison' ],
        baseForme: 'Amped',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75,
        },
        abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
        heightm: 1.60,
        weightkg: 40.0,
        color: 'Purple',
        prevo: 'toxel',
        evoLevel: '30 while having a Adamant, Brave, Docile, Hardy, Hasty, Impish, Jolly, Lax, Naive, Naughty, Rash, Quirky, or Sassy Nature',
        eggGroups: [ 'Human-Like' ],
        otherFormes: [ 'toxtricitylowkey', 'toxtricitygmax' ],
      }
    ],
    [
      'toxtricitylowkey',
      {
        species: 'Toxtricity-Low-Key',
        forme: 'Low-Key',
        formeLetter: 'L',
        num: 849,
        types: [ 'Electric', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75,
        },
        abilities: { first: 'Punk Rock', second: 'Minus', hidden: 'Technician' },
        heightm: 1.60,
        weightkg: 40.0,
        color: 'Purple',
        prevo: 'toxel',
        evoLevel: '30 while having a Bashful, Bold, Calm, Careful, Gentle, Lonely, Mild, Modest, Quiet, Relaxed, Serious, or Timid Nature',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'toxtricitygmax',
      {
        species: 'Toxtricity-Gmax',
        baseSpecies: 'Toxtricity',
        num: 849,
        types: [ 'Electric', 'Poison' ],
        forme: 'Gmax',
        formeLetter: 'G',
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75,
        },
        abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
        // TODO
        heightm: 0,
        weightkg: 0,
        color: 'Purple',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'sizzlipede',
      {
        species: 'Sizzlipede',
        num: 850,
        types: [ 'Fire', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 65, def: 45, spa: 50, spd: 50, spe: 45,
        },
        abilities: { first: 'Flash Fire', second: 'White Smoke', hidden: 'Flame Body' },
        heightm: 0.70,
        weightkg: 1.0,
        color: 'Red',
        evos: [ 'centiskorch' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'centiskorch',
      {
        species: 'Centiskorch',
        num: 851,
        types: [ 'Fire', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 115, def: 65, spa: 90, spd: 90, spe: 65,
        },
        abilities: { first: 'Flash Fire', second: 'White Smoke', hidden: 'Flame Body' },
        heightm: 3.00,
        weightkg: 120.0,
        color: 'Red',
        prevo: 'sizzlipede',
        evoLevel: 28,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'clobbopus',
      {
        species: 'Clobbopus',
        num: 852,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 68, def: 60, spa: 50, spd: 50, spe: 32,
        },
        abilities: { first: 'Limber', second: 'Limber', hidden: 'Technician' },
        heightm: 0.60,
        weightkg: 4.0,
        color: 'Brown',
        evos: [ 'grapploct' ],
        eggGroups: [ 'Water 1', 'Human-Like' ],
      }
    ],
    [
      'grapploct',
      {
        species: 'Grapploct',
        num: 853,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 118, def: 90, spa: 70, spd: 80, spe: 42,
        },
        abilities: { first: 'Limber', second: 'Limber', hidden: 'Technician' },
        heightm: 1.60,
        weightkg: 39.0,
        color: 'Blue',
        prevo: 'clobbopus',
        evoLevel: 'level up while knowing Taunt',
        eggGroups: [ 'Water 1', 'Human-Like' ],
      }
    ],
    [
      'sinistea',
      {
        species: 'Sinistea',
        num: 854,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50,
        },
        abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
        heightm: 0.10,
        weightkg: 0.2,
        color: 'Purple',
        evos: [ 'polteageist' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
        otherFormes: [ 'sinisteachipped' ],
      }
    ],
    [
      'sinisteachipped',
      {
        species: 'Sinistea-Chipped',
        num: 854,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50,
        },
        abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
        heightm: 0.10,
        weightkg: 0.2,
        color: 'Purple',
        evos: [ 'polteageistchipped' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'polteageist',
      {
        species: 'Polteageist',
        num: 855,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70,
        },
        abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
        heightm: 0.20,
        weightkg: 0.4,
        color: 'Purple',
        prevo: 'sinistea',
        evoLevel: 'use Cracked Pot',
        eggGroups: [ 'Mineral', 'Amorphous' ],
        otherFormes: [ 'polteageistchipped' ],
      }
    ],
    [
      'polteageistchipped',
      {
        species: 'Polteageist-Chipped',
        num: 855,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70,
        },
        abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Cursed Body' },
        heightm: 0.20,
        weightkg: 0.4,
        color: 'Purple',
        prevo: 'sinisteachipped',
        evoLevel: 'use Chipped Pot',
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'hatenna',
      {
        species: 'Hatenna',
        num: 856,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 42, atk: 30, def: 45, spa: 56, spd: 53, spe: 39,
        },
        abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
        heightm: 0.40,
        weightkg: 3.4,
        color: 'Pink',
        evos: [ 'hattrem' ],
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'hattrem',
      {
        species: 'Hattrem',
        num: 857,
        types: [ 'Psychic' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 57, atk: 40, def: 65, spa: 86, spd: 73, spe: 49,
        },
        abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
        heightm: 0.60,
        weightkg: 4.8,
        color: 'Pink',
        prevo: 'hatenna',
        evoLevel: 32,
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'hatterene',
      {
        species: 'Hatterene',
        num: 858,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29,
        },
        abilities: { first: 'Healer', second: 'Anticipation', hidden: 'Magic Bounce' },
        heightm: 2.10,
        weightkg: 5.1,
        color: 'Pink',
        prevo: 'hattrem',
        evoLevel: 42,
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'impidimp',
      {
        species: 'Impidimp',
        num: 859,
        types: [ 'Dark', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50,
        },
        abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
        heightm: 0.40,
        weightkg: 5.5,
        color: 'Pink',
        evos: [ 'morgrem' ],
        eggGroups: [ 'Fairy', 'Human-Like' ],
      }
    ],
    [
      'morgrem',
      {
        species: 'Morgrem',
        num: 860,
        types: [ 'Dark', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 60, def: 45, spa: 75, spd: 55, spe: 70,
        },
        abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
        heightm: 0.80,
        weightkg: 12.5,
        color: 'Pink',
        prevo: 'impidimp',
        evos: [ 'grimmsnarl' ],
        evoLevel: 32,
        eggGroups: [ 'Fairy', 'Human-Like' ],
      }
    ],
    [
      'grimmsnarl',
      {
        species: 'Grimmsnarl',
        num: 861,
        types: [ 'Dark', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60,
        },
        abilities: { first: 'Prankster', second: 'Frisk', hidden: 'Pickpocket' },
        heightm: 1.50,
        weightkg: 61.0,
        color: 'Purple',
        prevo: 'morgrem',
        evoLevel: 42,
        eggGroups: [ 'Fairy', 'Human-Like' ],
      }
    ],
    [
      'obstagoon',
      {
        species: 'Obstagoon',
        num: 862,
        types: [ 'Dark', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 93, atk: 90, def: 101, spa: 60, spd: 81, spe: 95,
        },
        abilities: { first: 'Reckless', second: 'Guts', hidden: 'Defiant' },
        heightm: 1.60,
        weightkg: 46.0,
        color: 'Gray',
        prevo: 'linoonegalar',
        evoLevel: 'level 35 at night',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'perrserker',
      {
        species: 'Perrserker',
        num: 863,
        types: [ 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 110, def: 100, spa: 50, spd: 60, spe: 50,
        },
        abilities: { first: 'Battle Armor', second: 'Tough Claws', hidden: 'Steely Spirit' },
        heightm: 0.80,
        weightkg: 28.0,
        prevo: 'meowthgalar',
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'cursola',
      {
        species: 'Cursola',
        num: 864,
        types: [ 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 95, def: 50, spa: 145, spd: 130, spe: 30,
        },
        abilities: { first: 'Weak Armor', second: 'Weak Armor', hidden: 'Perish Body' },
        heightm: 1.00,
        weightkg: 0.4,
        color: 'White',
        prevo: 'corsolagalar',
        evoLevel: 42,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'sirfetchd',
      {
        species: 'Sirfetch\'d',
        num: 865,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 62, atk: 135, def: 95, spa: 68, spd: 82, spe: 65,
        },
        abilities: { first: 'Steadfast', second: 'Steadfast', hidden: 'Scrappy' },
        heightm: 0.8,
        weightkg: 117.0,
        color: 'White',
        prevo: 'farfetchdgalar',
        evoLevel: 'KO 3 Pokemon in 1 Battle',
        eggGroups: [ 'Flying', 'Field' ],
      }
    ],
    [
      'mrrime',
      {
        species: 'Mr. Rime',
        num: 866,
        types: [ 'Ice', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 70,
        },
        abilities: { first: 'Tangled Feet', second: 'Screen Cleaner', hidden: 'Ice Body' },
        heightm: 1.50,
        weightkg: 58.2,
        color: 'Purple',
        prevo: 'mrmimegalar',
        evoLevel: 42,
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'runerigus',
      {
        species: 'Runerigus',
        num: 867,
        types: [ 'Ground', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 58, atk: 95, def: 145, spa: 50, spd: 105, spe: 30,
        },
        abilities: { first: 'Wandering Spirit', second: 'Wandering Spirit', hidden: 'Wandering Spirit' },
        heightm: 1.60,
        weightkg: 66.6,
        color: 'Gray',
        prevo: 'yamaskgalar',
        evoLevel: 'have 49+ damage on Yamask and walk under stone sculpture in Dusty Bowl Wild Area',
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'milcery',
      {
        species: 'Milcery',
        num: 868,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 45, atk: 40, def: 40, spa: 50, spd: 61, spe: 34,
        },
        abilities: { first: 'Sweet Veil', second: 'Sweet Veil', hidden: 'Aroma Veil' },
        heightm: 0.20,
        weightkg: 0.3,
        color: 'White',
        eggGroups: [ 'Fairy', 'Amorphous' ],
      }
    ],
    [
      'alcremie',
      {
        species: 'Alcremie',
        num: 869,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64,
        },
        abilities: { first: 'Sweet Veil', second: 'Sweet Veil', hidden: 'Aroma Veil' },
        heightm: 0.30,
        weightkg: 0.5,
        color: 'White',
        prevo: 'milcery',
        evoLevel: 45,
        eggGroups: [ 'Fairy', 'Amorphous' ],
        otherFormes: [
          'alcremierubycream', 'alcremiematcha',
          'alcremiemint', 'alcremielemon',
          'alcremiesalted', 'alcremierubyswirl',
          'alcremiecaramel', 'alcremierainbow',
          'alcremiegmax'
        ],
      }
    ],
    [
      'alcremie',
      {
        species: 'Alcremie-Gmax',
        baseSpecies: 'Alcremie',
        forme: 'Gmax',
        formeLetter: 'G',
        num: 869,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64,
        },
        abilities: { first: 'Sweet Veil', second: 'Sweet Veil', hidden: 'Aroma Veil' },
        heightm: 0.30,
        weightkg: 0,
        color: 'White',
        eggGroups: [ 'Fairy', 'Amorphous' ],
      }
    ],
    [
      'falinks',
      {
        species: 'Falinks',
        num: 870,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 100, def: 100, spa: 70, spd: 60, spe: 75,
        },
        abilities: { first: 'Battle Armor', second: 'Battle Armor', hidden: 'Defiant' },
        heightm: 3.0,
        weightkg: 62.0,
        color: 'Yellow',
        eggGroups: [ 'Fairy', 'Mineral' ],
      }
    ],
    [
      'pincurchin',
      {
        species: 'Pincurchin',
        num: 871,
        types: [ 'Electric' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 48, atk: 101, def: 95, spa: 91, spd: 85, spe: 15,
        },
        abilities: { first: 'Lightning Rod', second: 'Lightning Rod', hidden: 'Electric Surge' },
        heightm: 0.30,
        weightkg: 1.0,
        color: 'Purple',
        eggGroups: [ 'Water 1', 'Amorphous' ],
      }
    ],
    [
      'snom',
      {
        species: 'Snom',
        num: 872,
        types: [ 'Ice', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 30, atk: 25, def: 35, spa: 45, spd: 30, spe: 20,
        },
        abilities: { first: 'Shield Dust', second: 'Shield Dust', hidden: 'Ice Scales' },
        heightm: 0.30,
        weightkg: 3.8,
        color: 'White',
        evos: [ 'frosmoth' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'frosmoth',
      {
        species: 'Frosmoth',
        num: 873,
        types: [ 'Ice', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 65, def: 60, spa: 125, spd: 90, spe: 65,
        },
        abilities: { first: 'Shield Dust', second: 'Shield Dust', hidden: 'Ice Scales' },
        heightm: 1.30,
        weightkg: 42.0,
        color: 'White',
        prevo: 'snom',
        evos: [ 'frosmoth' ],
        evoLevel: 'level with high friendship at night',
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'stonjourner',
      {
        species: 'Stonjourner',
        num: 874,
        types: [ 'Rock' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 125, def: 135, spa: 20, spd: 20, spe: 20,
        },
        abilities: { first: 'Power Spot', second: 'Power Spot', hidden: 'Power Spot' },
        heightm: 2.50,
        weightkg: 520.0,
        color: 'Gray',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'eiscue',
      {
        species: 'Eiscue',
        num: 875,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50,
        },
        abilities: { first: 'Ice Face', second: 'Ice Face', hidden: 'Ice Face' },
        heightm: 1.40,
        weightkg: 89.0,
        color: 'Blue',
        eggGroups: [ 'Water 1', 'Field' ],
        otherFormes: [ 'eiscuenoice' ],
      }
    ],
    [
      'eiscuenoice',
      {
        species: 'Eiscue-Noice',
        baseSpecies: 'Eiscue',
        num: 875,
        types: [ 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50,
        },
        abilities: { first: 'Ice Face', second: 'Ice Face', hidden: 'Ice Face' },
        heightm: 1.40,
        weightkg: 89.0,
        color: 'Blue',
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'indeedeef',
      {
        species: 'Indeedee-F',
        baseSpecies: 'Indeedee',
        num: 876,
        types: [ 'Psychic', 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 70, atk: 55, def: 65, spa: 95, spd: 105, spe: 85,
        },
        abilities: { first: 'Inner Focus', second: 'Synchronize', hidden: 'Psychic Surge' },
        heightm: 0.90,
        weightkg: 28.0,
        color: 'Purple',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'indeedeem',
      {
        species: 'Indeedee-M',
        baseSpecies: 'Indeedee',
        num: 876,
        types: [ 'Psychic', 'Normal' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 70, atk: 55, def: 65, spa: 95, spd: 105, spe: 85,
        },
        abilities: { first: 'Own Tempo', second: 'Synchronize', hidden: 'Psychic Surge' },
        heightm: 0.90,
        weightkg: 28.0,
        color: 'Purple',
        eggGroups: [ 'Fairy' ],
      }
    ],
    [
      'morpeko',
      {
        species: 'morpeko',
        num: 877,
        types: [ 'Electric', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97,
        },
        abilities: { first: 'Hunger Switch', second: 'Hunger Switch', hidden: 'Hunger Switch' },
        heightm: 0.30,
        weightkg: 3.0,
        color: 'Yellow',
        eggGroups: [ 'Field', 'Fairy' ],
        otherFormes: [ 'morpekohangry' ],
      }
    ],
    [
      'morpekohangry',
      {
        species: 'Morpeko-Hangry',
        baseSpecies: 'Morpeko',
        num: 877,
        types: [ 'Electric', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97,
        },
        abilities: { first: 'Hunger Switch', second: 'Hunger Switch', hidden: 'Hunger Switch' },
        heightm: 0.30,
        weightkg: 3.0,
        color: 'Yellow',
        eggGroups: [ 'Field', 'Fairy' ],
      }
    ],
    [
      'cufant',
      {
        species: 'Cufant',
        num: 878,
        types: [ 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 72, atk: 80, def: 49, spa: 40, spd: 49, spe: 40,
        },
        abilities: { first: 'Sheer Force', second: 'Sheer Force', hidden: 'Heavy Metal' },
        heightm: 1.20,
        weightkg: 100.0,
        color: 'Yellow',
        evos: [ 'copperajah' ],
        eggGroups: [ 'Field', 'Mineral' ],
      }
    ],
    [
      'copperajah',
      {
        species: 'Copperajah',
        num: 879,
        types: [ 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30,
        },
        abilities: { first: 'Sheer Force', second: 'Sheer Force', hidden: 'Heavy Metal' },
        heightm: 3.00,
        weightkg: 650.0,
        color: 'Green',
        prevo: 'cufant',
        evoLevel: 34,
        eggGroups: [ 'Field', 'Mineral' ],
      }
    ],
    [
      'dracozolt',
      {
        species: 'Dracozolt',
        num: 880,
        types: [ 'Electric', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 100, def: 90, spa: 80, spd: 70, spe: 75,
        },
        abilities: { first: 'Volt Absorb', second: 'Hustle', hidden: 'Sand Rush' },
        heightm: 1.80,
        weightkg: 190.0,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arctozolt',
      {
        species: 'Arctozolt',
        num: 881,
        types: [ 'Electric', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 100, def: 90, spa: 90, spd: 80, spe: 55,
        },
        abilities: { first: 'Volt Absorb', second: 'Static', hidden: 'Slush Rush' },
        heightm: 2.30,
        weightkg: 150.0,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'dracovish',
      {
        species: 'Dracovish',
        num: 882,
        types: [ 'Water', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75,
        },
        abilities: { first: 'Water Absorb', second: 'Strong Jaw', hidden: 'Sand Rush' },
        heightm: 2.30,
        weightkg: 215.0,
        color: 'Green',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arctovish',
      {
        species: 'Arctovish',
        num: 883,
        types: [ 'Water', 'Ice' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 90, def: 100, spa: 80, spd: 90, spe: 55,
        },
        abilities: { first: 'Water Absorb', second: 'Ice Body', hidden: 'Slush Rush' },
        heightm: 2.00,
        weightkg: 175.0,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'duraludon',
      {
        species: 'Duraludon',
        num: 884,
        types: [ 'Steel', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85,
        },
        abilities: { first: 'Light Metal', second: 'Heavy Metal', hidden: 'Stalwart' },
        heightm: 1.80,
        weightkg: 40.0,
        color: 'White',
        eggGroups: [ 'Mineral', 'Dragon' ],
      }
    ],
    [
      'dreepy',
      {
        species: 'Dreepy',
        num: 885,
        types: [ 'Dragon', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 28, atk: 60, def: 30, spa: 40, spd: 30, spe: 82,
        },
        abilities: { first: 'Clear Body', second: 'Infiltrator', hidden: 'Cursed Body' },
        heightm: 0.50,
        weightkg: 2.0,
        color: 'Green',
        evos: [ 'drakloak' ],
        eggGroups: [ 'Amorphous', 'Dragon' ],
      }
    ],
    [
      'drakloak',
      {
        species: 'Drakloak',
        num: 886,
        types: [ 'Dragon', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 68, atk: 80, def: 50, spa: 60, spd: 50, spe: 102,
        },
        abilities: { first: 'Clear Body', second: 'Infiltrator', hidden: 'Cursed Body' },
        heightm: 1.40,
        weightkg: 11.0,
        color: 'Green',
        prevo: 'dreepy',
        evoLevel: 50,
        evos: [ 'dragapult' ],
        eggGroups: [ 'Amorphous', 'Dragon' ],
      }
    ],
    [
      'dragapult',
      {
        species: 'Dragapult',
        num: 887,
        types: [ 'Dragon', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142,
        },
        abilities: { first: 'Clear Body', second: 'Infiltrator', hidden: 'Cursed Body' },
        heightm: 3.00,
        weightkg: 50.0,
        color: 'Green',
        prevo: 'drakloak',
        evoLevel: 60,
        eggGroups: [ 'Amorphous', 'Dragon' ],
      }
    ],
    [
      'zacian',
      {
        species: 'zacian',
        num: 888,
        types: [ 'Fairy' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138,
        },
        abilities: { first: 'Intrepid Sword', second: 'Intrepid Sword', hidden: 'Intrepid Sword' },
        heightm: 2.80,
        weightkg: 110.0,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'zaciancrowned' ],
      }
    ],
    [
      'zaciancrowned',
      {
        species: 'Zacian-Crowned',
        baseSpecies: 'Zacian',
        num: 888,
        types: [ 'Fairy', 'Steel' ],
        forme: 'Crowned',
        formeLetter: 'C',
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148,
        },
        abilities: { first: 'Intrepid Sword', second: 'Intrepid Sword', hidden: 'Intrepid Sword' },
        heightm: 2.80,
        weightkg: 355.0,
        color: 'Blue',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'zamazenta',
      {
        species: 'zamazenta',
        num: 889,
        types: [ 'Fighting' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138,
        },
        abilities: { first: 'Dauntless Shield', second: 'Dauntless Shield', hidden: 'Dauntless Shield' },
        heightm: 2.90,
        weightkg: 210.0,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'zamazentacrowned' ],
      }
    ],
    [
      'zamazentacrowned',
      {
        species: 'Zamazenta-Crowned',
        baseSpecies: 'Zamazenta',
        forme: 'Crowned',
        formeLetter: 'C',
        num: 889,
        types: [ 'Fighting', 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128,
        },
        abilities: { first: 'Dauntless Shield', second: 'Dauntless Shield', hidden: 'Dauntless Shield' },
        heightm: 2.90,
        weightkg: 785.0,
        color: 'Red',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'eternatus',
      {
        species: 'Eternatus',
        num: 890,
        types: [ 'Poison', 'Dragon' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 140, atk: 85, def: 95, spa: 145, spd: 95, spe: 130,
        },
        abilities: { first: 'Pressure', second: 'Pressure', hidden: 'Pressure' },
        heightm: 20.00,
        weightkg: 950.0,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'eternatuseternamax' ],
      }
    ],
    [
      'eternatuseternamax',
      {
        species: 'Eternatus-Eternamax',
        baseSpecies: 'Eternatus',
        num: 890,
        types: [ 'Poison', 'Dragon' ],
        forme: 'Eternamax',
        formeLetter: 'E',
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 255, atk: 115, def: 250, spa: 125, spd: 250, spe: 130,
        },
        abilities: { first: 'Pressure', second: 'Pressure', hidden: 'Pressure' },
        heightm: 100.00,
        weightkg: 0,
        color: 'Purple',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'syclant',
      {
        species: 'Syclant',
        num: -1,
        types: [ 'Ice', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 116, def: 70, spa: 114, spd: 64, spe: 121,
        },
        abilities: { first: 'Compound Eyes', second: 'Mountaineer', hidden: 'Ice Body' },
        heightm: 1.7,
        weightkg: 52,
        color: 'Blue',
        prevo: 'syclar',
        evoLevel: 30,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'revenankh',
      {
        species: 'Revenankh',
        num: -2,
        types: [ 'Ghost', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 105, def: 90, spa: 65, spd: 110, spe: 65,
        },
        abilities: { first: 'Shed Skin', second: 'Air Lock', hidden: 'Triage' },
        heightm: 1.8,
        weightkg: 44,
        color: 'White',
        eggGroups: [ 'Amorphous', 'Human-Like' ],
      }
    ],
    [
      'pyroak',
      {
        species: 'Pyroak',
        num: -3,
        types: [ 'Fire', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 120, atk: 70, def: 105, spa: 95, spd: 90, spe: 60,
        },
        abilities: { first: 'Rock Head', second: 'Battle Armor', hidden: 'White Smoke' },
        heightm: 2.1,
        weightkg: 168,
        color: 'Brown',
        prevo: 'flarelm',
        evoLevel: 38,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'fidgit',
      {
        species: 'Fidgit',
        num: -4,
        types: [ 'Poison', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 76, def: 109, spa: 90, spd: 80, spe: 105,
        },
        abilities: { first: 'Persistent', second: 'Vital Spirit', hidden: 'Frisk' },
        heightm: 0.9,
        weightkg: 53,
        color: 'Purple',
        prevo: 'breezi',
        evoLevel: 33,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'stratagem',
      {
        species: 'Stratagem',
        num: -5,
        types: [ 'Rock' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 90, atk: 60, def: 65, spa: 120, spd: 70, spe: 130,
        },
        abilities: { first: 'Levitate', second: 'Technician', hidden: 'Sniper' },
        heightm: 0.9,
        weightkg: 45,
        color: 'Gray',
        prevo: 'tactite',
        evoLevel: 28,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'arghonaut',
      {
        species: 'Arghonaut',
        num: -6,
        types: [ 'Water', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 110, def: 95, spa: 70, spd: 100, spe: 75,
        },
        abilities: { first: 'Unaware', hidden: 'Technician' },
        heightm: 1.7,
        weightkg: 151,
        color: 'Green',
        prevo: 'privatyke',
        evoLevel: 37,
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'kitsunoh',
      {
        species: 'Kitsunoh',
        num: -7,
        types: [ 'Steel', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 103, def: 85, spa: 55, spd: 80, spe: 110,
        },
        abilities: { first: 'Frisk', second: 'Limber', hidden: 'Iron Fist' },
        heightm: 1.1,
        weightkg: 51,
        color: 'Gray',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'cyclohm',
      {
        species: 'Cyclohm',
        num: -8,
        types: [ 'Electric', 'Dragon' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 108, atk: 60, def: 118, spa: 112, spd: 70, spe: 80,
        },
        abilities: { first: 'Shield Dust', second: 'Static', hidden: 'Damp' },
        heightm: 1.6,
        weightkg: 59,
        color: 'Yellow',
        eggGroups: [ 'Dragon', 'Monster' ],
      }
    ],
    [
      'colossoil',
      {
        species: 'Colossoil',
        num: -9,
        types: [ 'Dark', 'Ground' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 133, atk: 122, def: 72, spa: 71, spd: 72, spe: 95,
        },
        abilities: { first: 'Rebound', second: 'Guts', hidden: 'Unnerve' },
        heightm: 2.6,
        weightkg: 683.6,
        color: 'Brown',
        eggGroups: [ 'Water 2', 'Field' ],
      }
    ],
    [
      'krilowatt',
      {
        species: 'Krilowatt',
        num: -10,
        types: [ 'Electric', 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 151, atk: 84, def: 73, spa: 83, spd: 74, spe: 105,
        },
        abilities: { first: 'Trace', second: 'Magic Guard', hidden: 'Minus' },
        heightm: 0.7,
        weightkg: 10.6,
        color: 'Red',
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'voodoom',
      {
        species: 'Voodoom',
        num: -11,
        types: [ 'Fighting', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 85, def: 80, spa: 105, spd: 80, spe: 110,
        },
        abilities: { first: 'Volt Absorb', second: 'Lightning Rod', hidden: 'Cursed Body' },
        heightm: 2,
        weightkg: 75.5,
        color: 'Brown',
        prevo: 'voodoll',
        evoLevel: 32,
        eggGroups: [ 'Human-Like', 'Ground' ],
      }
    ],
    [
      'tomohawk',
      {
        species: 'Tomohawk',
        num: -12,
        types: [ 'Flying', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 105, atk: 60, def: 90, spa: 115, spd: 80, spe: 85,
        },
        abilities: { first: 'Intimidate', second: 'Prankster', hidden: 'Justified' },
        heightm: 1.27,
        weightkg: 37.2,
        color: 'Red',
        prevo: 'scratchet',
        evoLevel: 23,
        eggGroups: [ 'Field', 'Flying' ],
      }
    ],
    [
      'necturna',
      {
        species: 'Necturna',
        num: -13,
        types: [ 'Grass', 'Ghost' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 64, atk: 120, def: 100, spa: 85, spd: 120, spe: 58,
        },
        abilities: { first: 'Forewarn', hidden: 'Telepathy' },
        heightm: 1.65,
        weightkg: 49.6,
        color: 'Black',
        prevo: 'necturine',
        evoLevel: 31,
        eggGroups: [ 'Grass', 'Field' ],
      }
    ],
    [
      'mollux',
      {
        species: 'Mollux',
        num: -14,
        types: [ 'Fire', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 95, atk: 45, def: 83, spa: 131, spd: 105, spe: 76,
        },
        abilities: { first: 'Dry Skin', hidden: 'Illuminate' },
        heightm: 1.2,
        weightkg: 41,
        color: 'Pink',
        eggGroups: [ 'Fairy', 'Field' ],
      }
    ],
    [
      'aurumoth',
      {
        species: 'Aurumoth',
        num: -15,
        types: [ 'Bug', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 110, atk: 120, def: 99, spa: 117, spd: 60, spe: 94,
        },
        abilities: { first: 'Weak Armor', second: 'No Guard', hidden: 'Light Metal' },
        heightm: 2.1,
        weightkg: 193,
        color: 'Purple',
        prevo: 'argalis',
        evoLevel: 50,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'malaconda',
      {
        species: 'Malaconda',
        num: -16,
        types: [ 'Dark', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 115, atk: 100, def: 60, spa: 40, spd: 130, spe: 55,
        },
        abilities: { first: 'Harvest', second: 'Infiltrator', hidden: 'Drought' },
        heightm: 5.5,
        weightkg: 108.8,
        color: 'Brown',
        prevo: 'brattler',
        evoLevel: 33,
        eggGroups: [ 'Grass', 'Dragon' ],
      }
    ],
    [
      'cawmodore',
      {
        species: 'Cawmodore',
        num: -17,
        types: [ 'Steel', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 92, def: 130, spa: 65, spd: 75, spe: 118,
        },
        abilities: { first: 'Intimidate', second: 'Volt Absorb', hidden: 'Big Pecks' },
        heightm: 1.7,
        weightkg: 37,
        color: 'Black',
        prevo: 'cawdet',
        evoLevel: 33,
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'volkraken',
      {
        species: 'Volkraken',
        num: -18,
        types: [ 'Water', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 45, def: 80, spa: 135, spd: 100, spe: 95,
        },
        abilities: { first: 'Analytic', second: 'Infiltrator', hidden: 'Pressure' },
        heightm: 1.3,
        weightkg: 44.5,
        color: 'Red',
        prevo: 'volkritter',
        evoLevel: 34,
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'plasmanta',
      {
        species: 'Plasmanta',
        num: -19,
        types: [ 'Electric', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 57, def: 119, spa: 131, spd: 98, spe: 100,
        },
        abilities: { first: 'Storm Drain', second: 'Vital Spirit', hidden: 'Telepathy' },
        heightm: 7,
        weightkg: 460,
        color: 'Purple',
        prevo: 'snugglow',
        evoLevel: 29,
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'naviathan',
      {
        species: 'Naviathan',
        num: -20,
        types: [ 'Water', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 103, atk: 110, def: 90, spa: 95, spd: 65, spe: 97,
        },
        abilities: { first: 'Guts', second: 'Heatproof', hidden: 'Light Metal' },
        heightm: 3,
        weightkg: 510,
        color: 'Gray',
        prevo: 'caimanoe',
        evoLevel: 40,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'crucibelle',
      {
        species: 'Crucibelle',
        num: -21,
        types: [ 'Rock', 'Poison' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 106, atk: 105, def: 65, spa: 75, spd: 85, spe: 104,
        },
        abilities: { first: 'Regenerator', second: 'Mold Breaker', hidden: 'Liquid Ooze' },
        heightm: 1.3,
        weightkg: 23.6,
        color: 'Purple',
        eggGroups: [ 'Amorphous', 'Mineral' ],
        otherFormes: [ 'crucibellemega' ],
      }
    ],
    [
      'crucibellemega',
      {
        species: 'Crucibelle-Mega',
        num: -21,
        types: [ 'Rock', 'Poison' ],
        genderRatio: { male: 0.25, female: 0.75 },
        baseStats: {
          hp: 106, atk: 135, def: 75, spa: 91, spd: 125, spe: 108,
        },
        baseSpecies: 'Crucibelle',
        forme: 'Mega',
        formeLetter: 'M',
        abilities: { first: 'Magic Guard' },
        heightm: 1.4,
        weightkg: 22.5,
        color: 'Purple',
        eggGroups: [ 'Amorphous', 'Mineral' ],
      }
    ],
    [
      'kerfluffle',
      {
        species: 'Kerfluffle',
        num: -22,
        types: [ 'Fairy', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 84, atk: 78, def: 86, spa: 115, spd: 88, spe: 119,
        },
        abilities: { first: 'Natural Cure', second: 'Aroma Veil', hidden: 'Friend Guard' },
        heightm: 2.1,
        weightkg: 24.2,
        color: 'Pink',
        prevo: 'pluffle',
        evoLevel: 2,
        eggGroups: [ 'Fairy', 'Human-Like' ],
      }
    ],
    [
      'pajantom',
      {
        species: 'Pajantom',
        num: -23,
        types: [ 'Dragon', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 84, atk: 133, def: 71, spa: 51, spd: 111, spe: 101,
        },
        abilities: { first: 'Comatose' },
        heightm: 1.1,
        weightkg: 3.1,
        color: 'Purple',
        eggGroups: [ 'Dragon', 'Monster' ],
      }
    ],
    [
      'jumbao',
      {
        species: 'Jumbao',
        num: -24,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 92, atk: 63, def: 97, spa: 124, spd: 104, spe: 96,
        },
        abilities: { first: 'Drought', second: 'Trace', hidden: 'Overcoat' },
        heightm: 2.4,
        weightkg: 600,
        color: 'Brown',
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'caribolt',
      {
        species: 'Caribolt',
        num: -25,
        types: [ 'Grass', 'Electric' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 84, atk: 106, def: 82, spa: 77, spd: 80, spe: 106,
        },
        abilities: { first: 'Overgrow', hidden: 'Galvanize' },
        heightm: 2.5,
        weightkg: 140,
        color: 'Green',
        prevo: 'electrelk',
        evoLevel: 34,
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'smokomodo',
      {
        species: 'Smokomodo',
        num: -26,
        types: [ 'Fire', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 88, atk: 116, def: 67, spa: 88, spd: 78, spe: 97,
        },
        abilities: { first: 'Blaze', hidden: 'Technician' },
        heightm: 2.2,
        weightkg: 205,
        color: 'Red',
        prevo: 'smoguana',
        evoLevel: 36,
        eggGroups: [ 'Field', 'Monster' ],
      }
    ],
    [
      'snaelstrom',
      {
        species: 'Snaelstrom',
        num: -27,
        types: [ 'Water', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 91, atk: 94, def: 110, spa: 80, spd: 97, spe: 63,
        },
        abilities: { first: 'Torrent', hidden: 'Poison Heal' },
        heightm: 2,
        weightkg: 120,
        color: 'Blue',
        prevo: 'coribalis',
        evoLevel: 34,
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'equilibra',
      {
        num: -28,
        species: 'Equilibra',
        types: [ 'Steel', 'Ground' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 102, atk: 50, def: 96, spa: 133, spd: 118, spe: 60,
        },
        abilities: { first: 'Levitate', second: 'Bulletproof', hidden: 'Justified' },
        heightm: 0.8,
        weightkg: 51.3,
        color: 'Brown',
        eggGroups: [ 'Mineral' ],
      }
    ],
    [
      'syclar',
      {
        species: 'Syclar',
        num: -101,
        types: [ 'Ice', 'Bug' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 76, def: 45, spa: 74, spd: 39, spe: 91,
        },
        abilities: { first: 'Compound Eyes', second: 'Snow Cloak', hidden: 'Ice Body' },
        heightm: 0.2,
        weightkg: 4,
        color: 'Blue',
        evos: [ 'syclant' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'embirch',
      {
        species: 'Embirch',
        num: -102,
        types: [ 'Fire', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 40, def: 55, spa: 65, spd: 40, spe: 60,
        },
        abilities: { first: 'Reckless', second: 'Leaf Guard', hidden: 'Chlorophyll' },
        heightm: 0.6,
        weightkg: 15,
        color: 'Brown',
        evos: [ 'flarelm' ],
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'flarelm',
      {
        species: 'Flarelm',
        num: -103,
        types: [ 'Fire', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 90, atk: 50, def: 95, spa: 75, spd: 70, spe: 40,
        },
        abilities: { first: 'Rock Head', second: 'Battle Armor', hidden: 'White Smoke' },
        heightm: 1.4,
        weightkg: 73,
        color: 'Brown',
        prevo: 'embirch',
        evos: [ 'pyroak' ],
        evoLevel: 24,
        eggGroups: [ 'Monster', 'Dragon' ],
      }
    ],
    [
      'breezi',
      {
        species: 'Breezi',
        num: -104,
        types: [ 'Poison', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 46, def: 69, spa: 60, spd: 50, spe: 75,
        },
        abilities: { first: 'Unburden', second: 'Own Tempo', hidden: 'Frisk' },
        heightm: 0.4,
        weightkg: 0.6,
        color: 'Purple',
        evos: [ 'fidgit' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'scratchet',
      {
        species: 'Scratchet',
        num: -105,
        types: [ 'Normal', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 85, def: 80, spa: 20, spd: 70, spe: 40,
        },
        abilities: { first: 'Scrappy', second: 'Prankster', hidden: 'Vital Spirit' },
        heightm: 0.5,
        weightkg: 20,
        color: 'Brown',
        evos: [ 'tomohawk' ],
        eggGroups: [ 'Field', 'Flying' ],
      }
    ],
    [
      'necturine',
      {
        species: 'Necturine',
        num: -106,
        types: [ 'Grass', 'Ghost' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 49, atk: 55, def: 60, spa: 50, spd: 75, spe: 51,
        },
        abilities: { first: 'Anticipation', hidden: 'Telepathy' },
        heightm: 0.3,
        weightkg: 1.8,
        color: 'White',
        evos: [ 'necturna' ],
        eggGroups: [ 'Grass', 'Field' ],
      }
    ],
    [
      'cupra',
      {
        species: 'Cupra',
        num: -107,
        types: [ 'Bug', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 50, atk: 60, def: 49, spa: 67, spd: 30, spe: 44,
        },
        abilities: { first: 'Shield Dust', second: 'Keen Eye', hidden: 'Magic Guard' },
        heightm: 0.5,
        weightkg: 4.8,
        color: 'Brown',
        evos: [ 'argalis' ],
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'argalis',
      {
        species: 'Argalis',
        num: -108,
        types: [ 'Bug', 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 90, def: 89, spa: 87, spd: 40, spe: 54,
        },
        abilities: { first: 'Shed Skin', second: 'Compound Eyes', hidden: 'Overcoat' },
        heightm: 1.3,
        weightkg: 341.4,
        color: 'Gray',
        prevo: 'cupra',
        evos: [ 'aurumoth' ],
        evoLevel: 30,
        eggGroups: [ 'Bug' ],
      }
    ],
    [
      'brattler',
      {
        species: 'Brattler',
        num: -109,
        types: [ 'Dark', 'Grass' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 80, atk: 70, def: 40, spa: 20, spd: 90, spe: 30,
        },
        abilities: { first: 'Harvest', second: 'Infiltrator', hidden: 'Rattled' },
        heightm: 1.8,
        weightkg: 11.5,
        color: 'Brown',
        evos: [ 'malaconda' ],
        eggGroups: [ 'Grass', 'Dragon' ],
      }
    ],
    [
      'cawdet',
      {
        species: 'Cawdet',
        num: -110,
        types: [ 'Steel', 'Flying' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 35, atk: 72, def: 85, spa: 40, spd: 55, spe: 88,
        },
        abilities: { first: 'Keen Eye', second: 'Volt Absorb', hidden: 'Big Pecks' },
        heightm: 0.76,
        weightkg: 25,
        color: 'Gray',
        evos: [ 'cawmodore' ],
        eggGroups: [ 'Flying' ],
      }
    ],
    [
      'volkritter',
      {
        species: 'Volkritter',
        num: -111,
        types: [ 'Water', 'Fire' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 60, atk: 30, def: 50, spa: 80, spd: 60, spe: 70,
        },
        abilities: { first: 'Anticipation', second: 'Infiltrator', hidden: 'Unnerve' },
        heightm: 0.3,
        weightkg: 15,
        color: 'Red',
        evos: [ 'volkraken' ],
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'snugglow',
      {
        species: 'Snugglow',
        num: -112,
        types: [ 'Electric', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 40, atk: 37, def: 79, spa: 91, spd: 68, spe: 70,
        },
        abilities: { first: 'Storm Drain', second: 'Vital Spirit', hidden: 'Telepathy' },
        heightm: 1.2,
        weightkg: 6,
        color: 'Purple',
        evos: [ 'plasmanta' ],
        eggGroups: [ 'Water 1', 'Water 2' ],
      }
    ],
    [
      'floatoy',
      {
        species: 'Floatoy',
        num: -113,
        types: [ 'Water' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 48, atk: 70, def: 40, spa: 70, spd: 30, spe: 77,
        },
        abilities: { first: 'Water Veil', second: 'Heatproof', hidden: 'Swift Swim' },
        heightm: 0.8,
        weightkg: 1.9,
        color: 'White',
        evos: [ 'caimanoe' ],
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'caimanoe',
      {
        species: 'Caimanoe',
        num: -114,
        types: [ 'Water', 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 73, atk: 85, def: 65, spa: 80, spd: 40, spe: 87,
        },
        abilities: { first: 'Water Veil', second: 'Heatproof', hidden: 'Light Metal' },
        heightm: 1.4,
        weightkg: 72.5,
        color: 'Gray',
        prevo: 'floatoy',
        evos: [ 'naviathan' ],
        evoLevel: 21,
        eggGroups: [ 'Water 1', 'Field' ],
      }
    ],
    [
      'pluffle',
      {
        species: 'Pluffle',
        num: -115,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 74, atk: 38, def: 51, spa: 65, spd: 78, spe: 49,
        },
        abilities: { first: 'Natural Cure', second: 'Aroma Veil', hidden: 'Friend Guard' },
        heightm: 0.8,
        weightkg: 1.8,
        color: 'Pink',
        evos: [ 'kerfluffle' ],
        eggGroups: [ 'Fairy', 'Human-Like' ],
      }
    ],
    [
      'rebble',
      {
        species: 'Rebble',
        num: -116,
        types: [ 'Rock' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 45, atk: 25, def: 65, spa: 75, spd: 55, spe: 80,
        },
        abilities: { first: 'Levitate', second: 'Solid Rock', hidden: 'Sniper' },
        heightm: 0.3,
        weightkg: 7,
        color: 'Gray',
        evos: [ 'tactite' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'tactite',
      {
        species: 'Tactite',
        num: -117,
        types: [ 'Rock' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 70, atk: 40, def: 65, spa: 100, spd: 65, spe: 95,
        },
        abilities: { first: 'Levitate', second: 'Technician', hidden: 'Sniper' },
        heightm: 0.6,
        weightkg: 16,
        color: 'Gray',
        prevo: 'rebble',
        evos: [ 'stratagem' ],
        evoLevel: 28,
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'privatyke',
      {
        species: 'Privatyke',
        num: -118,
        types: [ 'Water', 'Fighting' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 65, atk: 75, def: 65, spa: 40, spd: 60, spe: 45,
        },
        abilities: { first: 'Unaware', hidden: 'Technician' },
        heightm: 1,
        weightkg: 35,
        color: 'Green',
        evos: [ 'arghonaut' ],
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'voodoll',
      {
        species: 'Voodoll',
        num: -119,
        types: [ 'Normal', 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 40, def: 55, spa: 75, spd: 50, spe: 70,
        },
        abilities: { first: 'Volt Absorb', second: 'Lightning Rod', hidden: 'Cursed Body' },
        heightm: 1,
        weightkg: 25,
        color: 'Brown',
        evos: [ 'voodoom' ],
        eggGroups: [ 'Human-Like', 'Ground' ],
      }
    ],
    [
      'mumbao',
      {
        species: 'Mumbao',
        num: -120,
        types: [ 'Grass', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 30, def: 64, spa: 87, spd: 73, spe: 66,
        },
        abilities: { first: 'Solar Power', second: 'Trace', hidden: 'Overcoat' },
        heightm: 1,
        weightkg: 250,
        color: 'Brown',
        evos: [ 'jumbao' ],
        eggGroups: [ 'Grass' ],
      }
    ],
    [
      'fawnifer', {
        num: -121,
        species: 'Fawnifer',
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 49, atk: 61, def: 42, spa: 52, spd: 40, spe: 76,
        },
        abilities: { first: 'Overgrow', hidden: 'Lightning Rod' },
        heightm: 0.7,
        weightkg: 6.9,
        color: 'Green',
        evos: [ 'electrelk' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'electrelk', {
        num: -122,
        species: 'Electrelk',
        types: [ 'Grass', 'Electric' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 59, atk: 81, def: 67, spa: 57, spd: 55, spe: 101,
        },
        abilities: { first: 'Overgrow', hidden: 'Galvanize' },
        heightm: 1.4,
        weightkg: 41.5,
        color: 'Green',
        prevo: 'fawnifer',
        evoLevel: 17,
        evos: [ 'caribolt' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'smogecko', {
        num: -123,
        species: 'Smogecko',
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 48, atk: 66, def: 43, spa: 58, spd: 48, spe: 56,
        },
        abilities: { first: 'Blaze', hidden: 'Technician' },
        heightm: 0.5,
        weightkg: 8.5,
        color: 'Red',
        evos: [ 'smoguana' ],
        eggGroups: [ 'Field', 'Monster' ],
      }
    ],
    [
      'smoguana', {
        num: -124,
        species: 'Smoguana',
        types: [ 'Fire', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 68, atk: 86, def: 53, spa: 68, spd: 68, spe: 76,
        },
        abilities: { first: 'Blaze', hidden: 'Technician' },
        heightm: 1.5,
        weightkg: 22.2,
        color: 'Red',
        prevo: 'smogecko',
        evoLevel: 15,
        evos: [ 'smokomodo' ],
        eggGroups: [ 'Field', 'Monster' ],
      }
    ],
    [
      'swirlpool', {
        num: -125,
        species: 'Swirlpool',
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 61, atk: 49, def: 70, spa: 50, spd: 62, spe: 28,
        },
        abilities: { first: 'Torrent', hidden: 'Poison Heal' },
        heightm: 0.5,
        weightkg: 7,
        color: 'Blue',
        evos: [ 'coribalis' ],
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'coribalis', {
        num: -126,
        species: 'Coribalis',
        types: [ 'Water', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.125 },
        baseStats: {
          hp: 76, atk: 69, def: 90, spa: 65, spd: 77, spe: 43,
        },
        abilities: { first: 'Torrent', hidden: 'Poison Heal' },
        heightm: 1.4,
        weightkg: 24.5,
        color: 'Blue',
        prevo: 'swirlpool',
        evoLevel: 17,
        evos: [ 'snaelstrom' ],
        eggGroups: [ 'Water 1', 'Fairy' ],
      }
    ],
    [
      'pokestarsmeargle',
      {
        species: 'Pokestar Smeargle',
        num: -5000,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75,
        },
        abilities: { first: 'Own Tempo', second: 'Technician', hidden: 'Moody' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'pokestarufo',
      {
        species: 'Pokestar UFO',
        num: -5001,
        types: [ 'Flying', 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarufopropu1', 'pokestarufo2', 'pokestarufopropu2' ],
      }
    ],
    [
      'pokestarufo2',
      {
        species: 'Pokestar UFO-2',
        num: -5001,
        types: [ 'Psychic', 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        baseSpecies: 'Pokestar UFO',
        forme: '2',
        formeLetter: '2',
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'pokestarbrycenman',
      {
        species: 'Pokestar Brycen-Man',
        num: -5002,
        types: [ 'Dark', 'Psychic' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarbrycenmanprop' ],
      }
    ],
    [
      'pokestarmt',
      {
        species: 'Pokestar MT',
        num: -5003,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Analytic' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarmtprop' ],
      }
    ],
    [
      'pokestarmt2',
      {
        species: 'Pokestar MT2',
        num: -5004,
        types: [ 'Steel', 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Flash Fire' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarmt2prop' ],
      }
    ],
    [
      'pokestartransport',
      {
        species: 'Pokestar Transport',
        num: -5005,
        types: [ 'Steel' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Motor Drive' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestartransportprop' ],
      }
    ],
    [
      'pokestargiant',
      {
        species: 'Pokestar Giant',
        num: -5006,
        types: [ 'Normal' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Huge Power' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestargiant2', 'pokestargiantpropo1', 'pokestargiantpropo2' ],
      }
    ],
    [
      'pokestarhumanoid',
      {
        species: 'Pokestar Humanoid',
        num: -5007,
        types: [ 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Insomnia' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarhumanoidprop' ],
      }
    ],
    [
      'pokestarmonster',
      {
        species: 'Pokestar Monster',
        num: -5008,
        types: [ 'Dark' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Pressure' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarmonsterprop' ],
      }
    ],
    [
      'pokestarf00',
      {
        species: 'Pokestar F-00',
        num: -5009,
        types: [ 'Steel', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Volt Absorb' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarf00prop' ],
      }
    ],
    [
      'pokestarf002',
      {
        species: 'Pokestar F-002',
        num: -5010,
        types: [ 'Steel', 'Normal' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Reckless' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarf002prop' ],
      }
    ],
    [
      'pokestarspirit',
      {
        species: 'Pokestar Spirit',
        num: -5011,
        types: [ 'Dark', 'Ghost' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Wonder Guard' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarspiritprop' ],
      }
    ],
    [
      'pokestarblackdoor',
      {
        species: 'Pokestar Black Door',
        num: -5012,
        types: [ 'Grass' ],
        genderRatio: { male: 0, female: 1 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Early Bird' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarblackdoorprop' ],
      }
    ],
    [
      'pokestarwhitedoor',
      {
        species: 'Pokestar White Door',
        num: -5013,
        types: [ 'Fire' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Blaze' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarwhitedoorprop' ],
      }
    ],
    [
      'pokestarblackbelt',
      {
        species: 'Pokestar Black Belt',
        num: -5014,
        types: [ 'Fighting' ],
        genderRatio: { male: 1, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        abilities: { first: 'Huge Power' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
        otherFormes: [ 'pokestarblackbeltprop' ],
      }
    ],
    [
      'pokestarufopropu2',
      {
        species: 'Pokestar UFO-PropU2',
        num: -5001,
        types: [ 'Psychic', 'Electric' ],
        genderRatio: { male: 0, female: 0 },
        baseStats: {
          hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100,
        },
        baseForme: 'Pokestar UFO',
        forme: 'PropU2',
        abilities: { first: 'Levitate' },
        heightm: 1.5,
        weightkg: 61,
        color: 'White',
        eggGroups: [ 'Undiscovered' ],
      }
    ]
  ]
);

export default pokedex;