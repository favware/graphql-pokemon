import { Pokemon } from '../utils/pokemon';
import GraphQLCollection from '../utils/GraphQLCollection';

const pokedex = new GraphQLCollection<string, Pokemon.DexEntry>(
  [
    [
      'bulbasaur',
      {
        species: 'bulbasaur',
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
        species: 'ivysaur',
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
        species: 'venusaur',
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
      'venusaur-mega',
      {
        species: 'venusaur-mega',
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
        species: 'charmander',
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
        species: 'charmeleon',
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
        species: 'charizard',
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
        otherFormes: [ 'charizardmegax', 'charizardmegay' ],
      }
    ],
    [
      'charizard-mega-x',
      {
        species: 'charizard-mega-x',
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
      'charizard-mega-y',
      {
        species: 'charizard-mega-y',
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
      'squirtle',
      {
        species: 'squirtle',
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
        species: 'wartortle',
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
        species: 'blastoise',
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
      'blastoise-mega',
      {
        species: 'blastoise-mega',
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
        species: 'caterpie',
        num: 10,
        types: [ 'Bug' ],
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
        species: 'metapod',
        num: 11,
        types: [ 'Bug' ],
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
        species: 'butterfree',
        num: 12,
        types: [ 'Bug', 'Flying' ],
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
      }
    ],
    [
      'weedle',
      {
        species: 'weedle',
        num: 13,
        types: [ 'Bug', 'Poison' ],
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
        species: 'kakuna',
        num: 14,
        types: [ 'Bug', 'Poison' ],
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
        species: 'beedrill',
        num: 15,
        types: [ 'Bug', 'Poison' ],
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
      'beedrill-mega',
      {
        species: 'beedrill-mega',
        num: 15,
        baseSpecies: 'Beedrill',
        forme: 'Mega',
        formeLetter: 'M',
        types: [ 'Bug', 'Poison' ],
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
        species: 'pidgey',
        num: 16,
        types: [ 'Normal', 'Flying' ],
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
        species: 'pidgeotto',
        num: 17,
        types: [ 'Normal', 'Flying' ],
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
        species: 'pidgeot',
        num: 18,
        types: [ 'Normal', 'Flying' ],
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
      'pidgeot-mega',
      {
        species: 'pidgeot-mega',
        num: 18,
        types: [ 'Normal', 'Flying' ],
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
        species: 'rattata',
        num: 19,
        types: [ 'Normal' ],
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
      'rattata-alola',
      {
        species: 'rattata-alola',
        num: 19,
        types: [ 'Dark', 'Normal' ],
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
        species: 'raticate',
        num: 20,
        types: [ 'Normal' ],
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
      'raticate-alola',
      {
        species: 'raticate-alola',
        num: 20,
        types: [ 'Dark', 'Normal' ],
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
      'raticate-alola-totem',
      {
        species: 'raticate-alola-totem',
        num: 20,
        baseSpecies: 'Raticate',
        forme: 'Alola-Totem',
        formeLetter: 'T',
        types: [ 'Dark', 'Normal' ],
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
        species: 'spearow',
        num: 21,
        types: [ 'Normal', 'Flying' ],
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
        species: 'fearow',
        num: 22,
        types: [ 'Normal', 'Flying' ],
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
        species: 'ekans',
        num: 23,
        types: [ 'Poison' ],
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
        species: 'arbok',
        num: 24,
        types: [ 'Poison' ],
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
        species: 'pikachu',
        num: 25,
        types: [ 'Electric' ],
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
          'pikachupartner', 'pikachustarter'
        ],
      }
    ],
    [
      'pikachu-cosplay',
      {
        species: 'pikachu-cosplay',
        num: 25,
        types: [ 'Electric' ],
        baseSpecies: 'Pikachu',
        forme: 'Cosplay',
        formeLetter: 'C',
        gender: 'F',
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
      'pikachu-rock-star',
      {
        species: 'pikachu-rock-star',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Rock-Star',
        formeLetter: 'R',
        types: [ 'Electric' ],
        gender: 'F',
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
      'pikachu-belle',
      {
        species: 'pikachu-belle',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Belle',
        formeLetter: 'B',
        types: [ 'Electric' ],
        gender: 'F',
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
      'pikachu-pop-star',
      {
        species: 'pikachu-pop-star',
        num: 25,
        types: [ 'Electric' ],
        baseSpecies: 'Pikachu',
        forme: 'Pop-Star',
        formeLetter: 'P',
        gender: 'F',
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
      'pikachu-phd',
      {
        species: 'pikachu-phd',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'PhD',
        formeLetter: 'D',
        types: [ 'Electric' ],
        gender: 'F',
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
      'pikachu-libre',
      {
        species: 'pikachu-libre',
        num: 25,
        types: [ 'Electric' ],
        baseSpecies: 'Pikachu',
        forme: 'Libre',
        formeLetter: 'L',
        gender: 'F',
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
      'pikachu-original',
      {
        species: 'pikachu-original',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Original',
        formeLetter: 'O',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-hoenn',
      {
        species: 'pikachu-hoenn',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Hoenn',
        formeLetter: 'H',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-sinnoh',
      {
        species: 'pikachu-sinnoh',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Sinnoh',
        formeLetter: 'S',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-unova',
      {
        species: 'pikachu-unova',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Unova',
        formeLetter: 'U',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-kalos',
      {
        species: 'pikachu-kalos',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Kalos',
        formeLetter: 'K',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-alola',
      {
        species: 'pikachu-alola',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-partner',
      {
        species: 'pikachu-partner',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Partner',
        formeLetter: 'P',
        types: [ 'Electric' ],
        gender: 'M',
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
      'pikachu-starter',
      {
        species: 'pikachu-starter',
        num: 25,
        baseSpecies: 'Pikachu',
        forme: 'Starter',
        formeLetter: 'S',
        types: [ 'Electric' ],
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
        species: 'raichu',
        num: 26,
        types: [ 'Electric' ],
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
      'raichu-alola',
      {
        species: 'raichu-alola',
        num: 26,
        baseSpecies: 'Raichu',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Electric', 'Psychic' ],
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
        species: 'sandshrew',
        num: 27,
        types: [ 'Ground' ],
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
      'sandshrew-alola',
      {
        species: 'sandshrew-alola',
        num: 27,
        baseSpecies: 'Sandshrew',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice', 'Steel' ],
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
        species: 'sandslash',
        num: 28,
        types: [ 'Ground' ],
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
      'sandslash-alola',
      {
        species: 'sandslash-alola',
        num: 28,
        baseSpecies: 'Sandslash',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice', 'Steel' ],
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
      'nidoran-f',
      {
        species: 'nidoran-f',
        num: 29,
        types: [ 'Poison' ],
        gender: 'F',
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
        species: 'nidorina',
        num: 30,
        types: [ 'Poison' ],
        gender: 'F',
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
        species: 'nidoqueen',
        num: 31,
        types: [ 'Poison', 'Ground' ],
        gender: 'F',
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
      'nidoran-m',
      {
        species: 'nidoran-m',
        num: 32,
        types: [ 'Poison' ],
        gender: 'M',
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
        species: 'nidorino',
        num: 33,
        types: [ 'Poison' ],
        gender: 'M',
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
        species: 'nidoking',
        num: 34,
        types: [ 'Poison', 'Ground' ],
        gender: 'M',
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
        species: 'clefairy',
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
        species: 'clefable',
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
        species: 'vulpix',
        num: 37,
        types: [ 'Fire' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
      'vulpix-alola',
      {
        species: 'vulpix-alola',
        num: 37,
        baseSpecies: 'Vulpix',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'ninetales',
        num: 38,
        types: [ 'Fire' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
      'ninetales-alola',
      {
        species: 'ninetales-alola',
        num: 38,
        baseSpecies: 'Ninetales',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ice', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'jigglypuff',
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
        species: 'wigglytuff',
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
        species: 'zubat',
        num: 41,
        types: [ 'Poison', 'Flying' ],
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
        species: 'golbat',
        num: 42,
        types: [ 'Poison', 'Flying' ],
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
        species: 'oddish',
        num: 43,
        types: [ 'Grass', 'Poison' ],
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
        species: 'gloom',
        num: 44,
        types: [ 'Grass', 'Poison' ],
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
        species: 'vileplume',
        num: 45,
        types: [ 'Grass', 'Poison' ],
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
        species: 'paras',
        num: 46,
        types: [ 'Bug', 'Grass' ],
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
        species: 'parasect',
        num: 47,
        types: [ 'Bug', 'Grass' ],
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
        species: 'venonat',
        num: 48,
        types: [ 'Bug', 'Poison' ],
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
        species: 'venomoth',
        num: 49,
        types: [ 'Bug', 'Poison' ],
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
        species: 'diglett',
        num: 50,
        types: [ 'Ground' ],
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
      'diglett-alola',
      {
        species: 'diglett-alola',
        num: 50,
        baseSpecies: 'Diglett',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ground', 'Steel' ],
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
        species: 'dugtrio',
        num: 51,
        types: [ 'Ground' ],
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
      'dugtrio-alola',
      {
        species: 'dugtrio-alola',
        num: 51,
        baseSpecies: 'Dugtrio',
        forme: 'Alola',
        formeLetter: 'A',
        types: [ 'Ground', 'Steel' ],
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
        species: 'meowth',
        num: 52,
        types: [ 'Normal' ],
        baseStats: {
          hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90,
        },
        abilities: { first: 'Pickup', second: 'Technician', hidden: 'Unnerve' },
        heightm: 0.4,
        weightkg: 4.2,
        color: 'Yellow',
        evos: [ 'persian' ],
        eggGroups: [ 'Field' ],
        otherFormes: [ 'meowthalola' ],
      }
    ],
    [
      'meowth-alola',
      {
        species: 'meowth-alola',
        num: 52,
        types: [ 'Dark' ],
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
      'persian',
      {
        species: 'persian',
        num: 53,
        types: [ 'Normal' ],
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
      'persian-alola',
      {
        species: 'persian-alola',
        num: 53,
        types: [ 'Dark' ],
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
        species: 'psyduck',
        num: 54,
        types: [ 'Water' ],
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
        species: 'golduck',
        num: 55,
        types: [ 'Water' ],
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
        species: 'mankey',
        num: 56,
        types: [ 'Fighting' ],
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
        species: 'primeape',
        num: 57,
        types: [ 'Fighting' ],
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
        species: 'growlithe',
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
        species: 'arcanine',
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
        species: 'poliwag',
        num: 60,
        types: [ 'Water' ],
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
        species: 'poliwhirl',
        num: 61,
        types: [ 'Water' ],
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
        species: 'poliwrath',
        num: 62,
        types: [ 'Water', 'Fighting' ],
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
        species: 'abra',
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
        species: 'kadabra',
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
        species: 'alakazam',
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
      'alakazam-mega',
      {
        species: 'alakazam-mega',
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
        species: 'machop',
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
        species: 'machoke',
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
        species: 'machamp',
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
      }
    ],
    [
      'bellsprout',
      {
        species: 'bellsprout',
        num: 69,
        types: [ 'Grass', 'Poison' ],
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
        species: 'weepinbell',
        num: 70,
        types: [ 'Grass', 'Poison' ],
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
        species: 'victreebel',
        num: 71,
        types: [ 'Grass', 'Poison' ],
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
        species: 'tentacool',
        num: 72,
        types: [ 'Water', 'Poison' ],
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
        species: 'tentacruel',
        num: 73,
        types: [ 'Water', 'Poison' ],
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
        species: 'geodude',
        num: 74,
        types: [ 'Rock', 'Ground' ],
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
      'geodude-alola',
      {
        species: 'geodude-alola',
        num: 74,
        types: [ 'Rock', 'Electric' ],
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
        species: 'graveler',
        num: 75,
        types: [ 'Rock', 'Ground' ],
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
      'graveler-alola',
      {
        species: 'graveler-alola',
        num: 75,
        types: [ 'Rock', 'Electric' ],
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
        species: 'golem',
        num: 76,
        types: [ 'Rock', 'Ground' ],
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
      'golem-alola',
      {
        species: 'golem-alola',
        num: 76,
        types: [ 'Rock', 'Electric' ],
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
        species: 'ponyta',
        num: 77,
        types: [ 'Fire' ],
        baseStats: {
          hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90,
        },
        abilities: { first: 'Run Away', second: 'Flash Fire', hidden: 'Flame Body' },
        heightm: 1,
        weightkg: 30,
        color: 'Yellow',
        evos: [ 'rapidash' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'rapidash',
      {
        species: 'rapidash',
        num: 78,
        types: [ 'Fire' ],
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
      }
    ],
    [
      'slowpoke',
      {
        species: 'slowpoke',
        num: 79,
        types: [ 'Water', 'Psychic' ],
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
        species: 'slowbro',
        num: 80,
        types: [ 'Water', 'Psychic' ],
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
      'slowbro-mega',
      {
        species: 'slowbro-mega',
        num: 80,
        types: [ 'Water', 'Psychic' ],
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
        species: 'magnemite',
        num: 81,
        types: [ 'Electric', 'Steel' ],
        gender: 'N',
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
        species: 'magneton',
        num: 82,
        types: [ 'Electric', 'Steel' ],
        gender: 'N',
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
      'farfetch\'d',
      {
        species: 'farfetch\'d',
        num: 83,
        types: [ 'Normal', 'Flying' ],
        baseStats: {
          hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60,
        },
        abilities: { first: 'Keen Eye', second: 'Inner Focus', hidden: 'Defiant' },
        heightm: 0.8,
        weightkg: 15,
        color: 'Brown',
        eggGroups: [ 'Flying', 'Field' ],
      }
    ],
    [
      'doduo',
      {
        species: 'doduo',
        num: 84,
        types: [ 'Normal', 'Flying' ],
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
        species: 'dodrio',
        num: 85,
        types: [ 'Normal', 'Flying' ],
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
        species: 'seel',
        num: 86,
        types: [ 'Water' ],
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
        species: 'dewgong',
        num: 87,
        types: [ 'Water', 'Ice' ],
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
        species: 'grimer',
        num: 88,
        types: [ 'Poison' ],
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
      'grimer-alola',
      {
        species: 'grimer-alola',
        num: 88,
        types: [ 'Poison', 'Dark' ],
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
        species: 'muk',
        num: 89,
        types: [ 'Poison' ],
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
      'muk-alola',
      {
        species: 'muk-alola',
        num: 89,
        types: [ 'Poison', 'Dark' ],
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
        species: 'shellder',
        num: 90,
        types: [ 'Water' ],
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
        species: 'cloyster',
        num: 91,
        types: [ 'Water', 'Ice' ],
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
        species: 'gastly',
        num: 92,
        types: [ 'Ghost', 'Poison' ],
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
        species: 'haunter',
        num: 93,
        types: [ 'Ghost', 'Poison' ],
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
        species: 'gengar',
        num: 94,
        types: [ 'Ghost', 'Poison' ],
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
        otherFormes: [ 'gengarmega' ],
      }
    ],
    [
      'gengar-mega',
      {
        species: 'gengar-mega',
        num: 94,
        types: [ 'Ghost', 'Poison' ],
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
      'onix',
      {
        species: 'onix',
        num: 95,
        types: [ 'Rock', 'Ground' ],
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
        species: 'drowzee',
        num: 96,
        types: [ 'Psychic' ],
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
        species: 'hypno',
        num: 97,
        types: [ 'Psychic' ],
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
        species: 'krabby',
        num: 98,
        types: [ 'Water' ],
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
        species: 'kingler',
        num: 99,
        types: [ 'Water' ],
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
      }
    ],
    [
      'voltorb',
      {
        species: 'voltorb',
        num: 100,
        types: [ 'Electric' ],
        gender: 'N',
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
        species: 'electrode',
        num: 101,
        types: [ 'Electric' ],
        gender: 'N',
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
        species: 'exeggcute',
        num: 102,
        types: [ 'Grass', 'Psychic' ],
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
        species: 'exeggutor',
        num: 103,
        types: [ 'Grass', 'Psychic' ],
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
      'exeggutor-alola',
      {
        species: 'exeggutor-alola',
        num: 103,
        types: [ 'Grass', 'Dragon' ],
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
        species: 'cubone',
        num: 104,
        types: [ 'Ground' ],
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
        species: 'marowak',
        num: 105,
        types: [ 'Ground' ],
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
      'marowak-alola',
      {
        species: 'marowak-alola',
        num: 105,
        types: [ 'Fire', 'Ghost' ],
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
      'marowak-alola-totem',
      {
        species: 'marowak-alola-totem',
        num: 105,
        types: [ 'Fire', 'Ghost' ],
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
        species: 'hitmonlee',
        num: 106,
        types: [ 'Fighting' ],
        gender: 'M',
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
        species: 'hitmonchan',
        num: 107,
        types: [ 'Fighting' ],
        gender: 'M',
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
        species: 'lickitung',
        num: 108,
        types: [ 'Normal' ],
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
        species: 'koffing',
        num: 109,
        types: [ 'Poison' ],
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
        species: 'weezing',
        num: 110,
        types: [ 'Poison' ],
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
        species: 'rhyhorn',
        num: 111,
        types: [ 'Ground', 'Rock' ],
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
        species: 'rhydon',
        num: 112,
        types: [ 'Ground', 'Rock' ],
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
        species: 'chansey',
        num: 113,
        types: [ 'Normal' ],
        gender: 'F',
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
        species: 'tangela',
        num: 114,
        types: [ 'Grass' ],
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
        species: 'kangaskhan',
        num: 115,
        types: [ 'Normal' ],
        gender: 'F',
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
      'kangaskhan-mega',
      {
        species: 'kangaskhan-mega',
        num: 115,
        types: [ 'Normal' ],
        baseSpecies: 'Kangaskhan',
        forme: 'Mega',
        formeLetter: 'M',
        gender: 'F',
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
        species: 'horsea',
        num: 116,
        types: [ 'Water' ],
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
        species: 'seadra',
        num: 117,
        types: [ 'Water' ],
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
        species: 'goldeen',
        num: 118,
        types: [ 'Water' ],
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
        species: 'seaking',
        num: 119,
        types: [ 'Water' ],
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
        species: 'staryu',
        num: 120,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'starmie',
        num: 121,
        types: [ 'Water', 'Psychic' ],
        gender: 'N',
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
      'mr. mime',
      {
        species: 'mr. mime',
        num: 122,
        types: [ 'Psychic', 'Fairy' ],
        baseStats: {
          hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90,
        },
        abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
        heightm: 1.3,
        weightkg: 54.5,
        color: 'Pink',
        prevo: 'mime jr',
        evoLevel: 'Level up while knowing Mimic',
        eggGroups: [ 'Human-Like' ],
      }
    ],
    [
      'scyther',
      {
        species: 'scyther',
        num: 123,
        types: [ 'Bug', 'Flying' ],
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
        species: 'jynx',
        num: 124,
        types: [ 'Ice', 'Psychic' ],
        gender: 'F',
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
        species: 'electabuzz',
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
        species: 'magmar',
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
        species: 'pinsir',
        num: 127,
        types: [ 'Bug' ],
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
      'pinsir-mega',
      {
        species: 'pinsir-mega',
        num: 127,
        types: [ 'Bug', 'Flying' ],
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
        species: 'tauros',
        num: 128,
        types: [ 'Normal' ],
        gender: 'M',
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
        species: 'magikarp',
        num: 129,
        types: [ 'Water' ],
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
        species: 'gyarados',
        num: 130,
        types: [ 'Water', 'Flying' ],
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
      'gyarados-mega',
      {
        species: 'gyarados-mega',
        num: 130,
        types: [ 'Water', 'Dark' ],
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
        species: 'lapras',
        num: 131,
        types: [ 'Water', 'Ice' ],
        baseStats: {
          hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60,
        },
        abilities: { first: 'Water Absorb', second: 'Shell Armor', hidden: 'Hydration' },
        heightm: 2.5,
        weightkg: 220,
        color: 'Blue',
        eggGroups: [ 'Monster', 'Water 1' ],
      }
    ],
    [
      'ditto',
      {
        species: 'ditto',
        num: 132,
        types: [ 'Normal' ],
        gender: 'N',
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
        species: 'eevee',
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
        otherFormes: [ 'eeveestarter' ],
      }
    ],
    [
      'eevee-starter',
      {
        species: 'eevee-starter',
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
      'vaporeon',
      {
        species: 'vaporeon',
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
        species: 'jolteon',
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
        species: 'flareon',
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
        species: 'porygon',
        num: 137,
        types: [ 'Normal' ],
        gender: 'N',
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
        species: 'omanyte',
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
        species: 'omastar',
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
        species: 'kabuto',
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
        species: 'kabutops',
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
        species: 'aerodactyl',
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
      'aerodactyl-mega',
      {
        species: 'aerodactyl-mega',
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
        species: 'snorlax',
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
      }
    ],
    [
      'articuno',
      {
        species: 'articuno',
        num: 144,
        types: [ 'Ice', 'Flying' ],
        gender: 'N',
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
        species: 'zapdos',
        num: 145,
        types: [ 'Electric', 'Flying' ],
        gender: 'N',
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
        species: 'moltres',
        num: 146,
        types: [ 'Fire', 'Flying' ],
        gender: 'N',
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
        species: 'dratini',
        num: 147,
        types: [ 'Dragon' ],
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
        species: 'dragonair',
        num: 148,
        types: [ 'Dragon' ],
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
        species: 'dragonite',
        num: 149,
        types: [ 'Dragon', 'Flying' ],
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
        species: 'mewtwo',
        num: 150,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'mewtwo-mega-x',
      {
        species: 'mewtwo-mega-x',
        num: 150,
        types: [ 'Psychic', 'Fighting' ],
        gender: 'N',
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
      'mewtwo-mega-y',
      {
        species: 'mewtwo-mega-y',
        num: 150,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'mew',
        num: 151,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'chikorita',
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
        species: 'bayleef',
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
        species: 'meganium',
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
        species: 'cyndaquil',
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
        species: 'quilava',
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
        species: 'typhlosion',
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
        species: 'totodile',
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
        species: 'croconaw',
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
        species: 'feraligatr',
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
        species: 'sentret',
        num: 161,
        types: [ 'Normal' ],
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
        species: 'furret',
        num: 162,
        types: [ 'Normal' ],
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
        species: 'hoothoot',
        num: 163,
        types: [ 'Normal', 'Flying' ],
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
        species: 'noctowl',
        num: 164,
        types: [ 'Normal', 'Flying' ],
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
        species: 'ledyba',
        num: 165,
        types: [ 'Bug', 'Flying' ],
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
        species: 'ledian',
        num: 166,
        types: [ 'Bug', 'Flying' ],
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
        species: 'spinarak',
        num: 167,
        types: [ 'Bug', 'Poison' ],
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
        species: 'ariados',
        num: 168,
        types: [ 'Bug', 'Poison' ],
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
        species: 'crobat',
        num: 169,
        types: [ 'Poison', 'Flying' ],
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
        species: 'chinchou',
        num: 170,
        types: [ 'Water', 'Electric' ],
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
        species: 'lanturn',
        num: 171,
        types: [ 'Water', 'Electric' ],
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
        species: 'pichu',
        num: 172,
        types: [ 'Electric' ],
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
      'pichu-spiky-eared',
      {
        species: 'pichu-spiky-eared',
        num: 172,
        types: [ 'Electric' ],
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
        species: 'cleffa',
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
        species: 'igglybuff',
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
        species: 'togepi',
        num: 175,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'togetic',
        num: 176,
        types: [ 'Fairy', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'natu',
        num: 177,
        types: [ 'Psychic', 'Flying' ],
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
        species: 'xatu',
        num: 178,
        types: [ 'Psychic', 'Flying' ],
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
        species: 'mareep',
        num: 179,
        types: [ 'Electric' ],
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
        species: 'flaaffy',
        num: 180,
        types: [ 'Electric' ],
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
        species: 'ampharos',
        num: 181,
        types: [ 'Electric' ],
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
      'ampharos-mega',
      {
        species: 'ampharos-mega',
        num: 181,
        types: [ 'Electric', 'Dragon' ],
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
        species: 'bellossom',
        num: 182,
        types: [ 'Grass' ],
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
        species: 'marill',
        num: 183,
        types: [ 'Water', 'Fairy' ],
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
        species: 'azumarill',
        num: 184,
        types: [ 'Water', 'Fairy' ],
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
        species: 'sudowoodo',
        num: 185,
        types: [ 'Rock' ],
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
        species: 'politoed',
        num: 186,
        types: [ 'Water' ],
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
        species: 'hoppip',
        num: 187,
        types: [ 'Grass', 'Flying' ],
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
        species: 'skiploom',
        num: 188,
        types: [ 'Grass', 'Flying' ],
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
        species: 'jumpluff',
        num: 189,
        types: [ 'Grass', 'Flying' ],
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
        species: 'aipom',
        num: 190,
        types: [ 'Normal' ],
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
        species: 'sunkern',
        num: 191,
        types: [ 'Grass' ],
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
        species: 'sunflora',
        num: 192,
        types: [ 'Grass' ],
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
        species: 'yanma',
        num: 193,
        types: [ 'Bug', 'Flying' ],
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
        species: 'wooper',
        num: 194,
        types: [ 'Water', 'Ground' ],
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
        species: 'quagsire',
        num: 195,
        types: [ 'Water', 'Ground' ],
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
        species: 'espeon',
        num: 196,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'umbreon',
        num: 197,
        types: [ 'Dark' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'murkrow',
        num: 198,
        types: [ 'Dark', 'Flying' ],
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
        species: 'slowking',
        num: 199,
        types: [ 'Water', 'Psychic' ],
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
        species: 'misdreavus',
        num: 200,
        types: [ 'Ghost' ],
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
        species: 'unown',
        num: 201,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'wobbuffet',
        num: 202,
        types: [ 'Psychic' ],
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
        species: 'girafarig',
        num: 203,
        types: [ 'Normal', 'Psychic' ],
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
        species: 'pineco',
        num: 204,
        types: [ 'Bug' ],
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
        species: 'forretress',
        num: 205,
        types: [ 'Bug', 'Steel' ],
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
        species: 'dunsparce',
        num: 206,
        types: [ 'Normal' ],
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
        species: 'gligar',
        num: 207,
        types: [ 'Ground', 'Flying' ],
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
        species: 'steelix',
        num: 208,
        types: [ 'Steel', 'Ground' ],
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
      'steelix-mega',
      {
        species: 'steelix-mega',
        num: 208,
        types: [ 'Steel', 'Ground' ],
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
        species: 'snubbull',
        num: 209,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'granbull',
        num: 210,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'qwilfish',
        num: 211,
        types: [ 'Water', 'Poison' ],
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
        species: 'scizor',
        num: 212,
        types: [ 'Bug', 'Steel' ],
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
      'scizor-mega',
      {
        species: 'scizor-mega',
        num: 212,
        types: [ 'Bug', 'Steel' ],
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
        species: 'shuckle',
        num: 213,
        types: [ 'Bug', 'Rock' ],
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
        species: 'heracross',
        num: 214,
        types: [ 'Bug', 'Fighting' ],
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
      'heracross-mega',
      {
        species: 'heracross-mega',
        num: 214,
        baseSpecies: 'Heracross',
        forme: 'Mega',
        formeLetter: 'M',
        types: [ 'Bug', 'Fighting' ],
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
        species: 'sneasel',
        num: 215,
        types: [ 'Dark', 'Ice' ],
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
        species: 'teddiursa',
        num: 216,
        types: [ 'Normal' ],
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
        species: 'ursaring',
        num: 217,
        types: [ 'Normal' ],
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
        species: 'slugma',
        num: 218,
        types: [ 'Fire' ],
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
        species: 'magcargo',
        num: 219,
        types: [ 'Fire', 'Rock' ],
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
        species: 'swinub',
        num: 220,
        types: [ 'Ice', 'Ground' ],
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
        species: 'piloswine',
        num: 221,
        types: [ 'Ice', 'Ground' ],
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
        species: 'corsola',
        num: 222,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.25, female: 0.25 },
        baseStats: {
          hp: 65, atk: 55, def: 95, spa: 65, spd: 95, spe: 35,
        },
        abilities: { first: 'Hustle', second: 'Natural Cure', hidden: 'Regenerator' },
        heightm: 0.6,
        weightkg: 5,
        color: 'Pink',
        eggGroups: [ 'Water 1', 'Water 3' ],
      }
    ],
    [
      'remoraid',
      {
        species: 'remoraid',
        num: 223,
        types: [ 'Water' ],
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
        species: 'octillery',
        num: 224,
        types: [ 'Water' ],
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
        species: 'delibird',
        num: 225,
        types: [ 'Ice', 'Flying' ],
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
        species: 'mantine',
        num: 226,
        types: [ 'Water', 'Flying' ],
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
        species: 'skarmory',
        num: 227,
        types: [ 'Steel', 'Flying' ],
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
        species: 'houndour',
        num: 228,
        types: [ 'Dark', 'Fire' ],
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
        species: 'houndoom',
        num: 229,
        types: [ 'Dark', 'Fire' ],
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
      'houndoom-mega',
      {
        species: 'houndoom-mega',
        num: 229,
        types: [ 'Dark', 'Fire' ],
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
        species: 'kingdra',
        num: 230,
        types: [ 'Water', 'Dragon' ],
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
        species: 'phanpy',
        num: 231,
        types: [ 'Ground' ],
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
        species: 'donphan',
        num: 232,
        types: [ 'Ground' ],
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
        species: 'porygon2',
        num: 233,
        types: [ 'Normal' ],
        gender: 'N',
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
        species: 'stantler',
        num: 234,
        types: [ 'Normal' ],
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
        species: 'smeargle',
        num: 235,
        types: [ 'Normal' ],
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
        species: 'tyrogue',
        num: 236,
        types: [ 'Fighting' ],
        gender: 'M',
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
        species: 'hitmontop',
        num: 237,
        types: [ 'Fighting' ],
        gender: 'M',
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
        species: 'smoochum',
        num: 238,
        types: [ 'Ice', 'Psychic' ],
        gender: 'F',
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
        species: 'elekid',
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
        species: 'magby',
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
        species: 'miltank',
        num: 241,
        types: [ 'Normal' ],
        gender: 'F',
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
        species: 'blissey',
        num: 242,
        types: [ 'Normal' ],
        gender: 'F',
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
        species: 'raikou',
        num: 243,
        types: [ 'Electric' ],
        gender: 'N',
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
        species: 'entei',
        num: 244,
        types: [ 'Fire' ],
        gender: 'N',
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
        species: 'suicune',
        num: 245,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'larvitar',
        num: 246,
        types: [ 'Rock', 'Ground' ],
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
        species: 'pupitar',
        num: 247,
        types: [ 'Rock', 'Ground' ],
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
        species: 'tyranitar',
        num: 248,
        types: [ 'Rock', 'Dark' ],
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
      'tyranitar-mega',
      {
        species: 'tyranitar-mega',
        num: 248,
        types: [ 'Rock', 'Dark' ],
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
        species: 'lugia',
        num: 249,
        types: [ 'Psychic', 'Flying' ],
        gender: 'N',
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
      'ho-oh',
      {
        species: 'ho-oh',
        num: 250,
        types: [ 'Fire', 'Flying' ],
        gender: 'N',
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
        species: 'celebi',
        num: 251,
        types: [ 'Psychic', 'Grass' ],
        gender: 'N',
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
        species: 'treecko',
        num: 252,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'grovyle',
        num: 253,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'sceptile',
        num: 254,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
      'sceptile-mega',
      {
        species: 'sceptile-mega',
        num: 254,
        types: [ 'Grass', 'Dragon' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'torchic',
        num: 255,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'combusken',
        num: 256,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'blaziken',
        num: 257,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
      'blaziken-mega',
      {
        species: 'blaziken-mega',
        num: 257,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'mudkip',
        num: 258,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'marshtomp',
        num: 259,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'swampert',
        num: 260,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
      'swampert-mega',
      {
        species: 'swampert-mega',
        num: 260,
        types: [ 'Water', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'poochyena',
        num: 261,
        types: [ 'Dark' ],
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
        species: 'mightyena',
        num: 262,
        types: [ 'Dark' ],
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
        species: 'zigzagoon',
        num: 263,
        types: [ 'Normal' ],
        baseStats: {
          hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60,
        },
        abilities: { first: 'Pickup', second: 'Gluttony', hidden: 'Quick Feet' },
        heightm: 0.4,
        weightkg: 17.5,
        color: 'Brown',
        evos: [ 'linoone' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'linoone',
      {
        species: 'linoone',
        num: 264,
        types: [ 'Normal' ],
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
      }
    ],
    [
      'wurmple',
      {
        species: 'wurmple',
        num: 265,
        types: [ 'Bug' ],
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
        species: 'silcoon',
        num: 266,
        types: [ 'Bug' ],
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
        species: 'beautifly',
        num: 267,
        types: [ 'Bug', 'Flying' ],
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
        species: 'cascoon',
        num: 268,
        types: [ 'Bug' ],
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
        species: 'dustox',
        num: 269,
        types: [ 'Bug', 'Poison' ],
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
        species: 'lotad',
        num: 270,
        types: [ 'Water', 'Grass' ],
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
        species: 'lombre',
        num: 271,
        types: [ 'Water', 'Grass' ],
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
        species: 'ludicolo',
        num: 272,
        types: [ 'Water', 'Grass' ],
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
        species: 'seedot',
        num: 273,
        types: [ 'Grass' ],
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
        species: 'nuzleaf',
        num: 274,
        types: [ 'Grass', 'Dark' ],
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
        species: 'shiftry',
        num: 275,
        types: [ 'Grass', 'Dark' ],
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
        species: 'taillow',
        num: 276,
        types: [ 'Normal', 'Flying' ],
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
        species: 'swellow',
        num: 277,
        types: [ 'Normal', 'Flying' ],
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
        species: 'wingull',
        num: 278,
        types: [ 'Water', 'Flying' ],
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
        species: 'pelipper',
        num: 279,
        types: [ 'Water', 'Flying' ],
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
        species: 'ralts',
        num: 280,
        types: [ 'Psychic', 'Fairy' ],
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
        species: 'kirlia',
        num: 281,
        types: [ 'Psychic', 'Fairy' ],
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
        species: 'gardevoir',
        num: 282,
        types: [ 'Psychic', 'Fairy' ],
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
      'gardevoir-mega',
      {
        species: 'gardevoir-mega',
        num: 282,
        types: [ 'Psychic', 'Fairy' ],
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
        species: 'surskit',
        num: 283,
        types: [ 'Bug', 'Water' ],
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
        species: 'masquerain',
        num: 284,
        types: [ 'Bug', 'Flying' ],
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
        species: 'shroomish',
        num: 285,
        types: [ 'Grass' ],
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
        species: 'breloom',
        num: 286,
        types: [ 'Grass', 'Fighting' ],
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
        species: 'slakoth',
        num: 287,
        types: [ 'Normal' ],
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
        species: 'vigoroth',
        num: 288,
        types: [ 'Normal' ],
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
        species: 'slaking',
        num: 289,
        types: [ 'Normal' ],
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
        species: 'nincada',
        num: 290,
        types: [ 'Bug', 'Ground' ],
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
        species: 'ninjask',
        num: 291,
        types: [ 'Bug', 'Flying' ],
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
        species: 'shedinja',
        num: 292,
        types: [ 'Bug', 'Ghost' ],
        gender: 'N',
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
        species: 'whismur',
        num: 293,
        types: [ 'Normal' ],
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
        species: 'loudred',
        num: 294,
        types: [ 'Normal' ],
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
        species: 'exploud',
        num: 295,
        types: [ 'Normal' ],
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
        species: 'makuhita',
        num: 296,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.75 },
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
        species: 'hariyama',
        num: 297,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.75 },
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
        species: 'azurill',
        num: 298,
        types: [ 'Normal', 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'nosepass',
        num: 299,
        types: [ 'Rock' ],
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
        species: 'skitty',
        num: 300,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'delcatty',
        num: 301,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'sableye',
        num: 302,
        types: [ 'Dark', 'Ghost' ],
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
      'sableye-mega',
      {
        species: 'sableye-mega',
        num: 302,
        types: [ 'Dark', 'Ghost' ],
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
        species: 'mawile',
        num: 303,
        types: [ 'Steel', 'Fairy' ],
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
      'mawile-mega',
      {
        species: 'mawile-mega',
        num: 303,
        types: [ 'Steel', 'Fairy' ],
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
        species: 'aron',
        num: 304,
        types: [ 'Steel', 'Rock' ],
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
        species: 'lairon',
        num: 305,
        types: [ 'Steel', 'Rock' ],
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
        species: 'aggron',
        num: 306,
        types: [ 'Steel', 'Rock' ],
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
      'aggron-mega',
      {
        species: 'aggron-mega',
        num: 306,
        types: [ 'Steel' ],
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
        species: 'meditite',
        num: 307,
        types: [ 'Fighting', 'Psychic' ],
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
        species: 'medicham',
        num: 308,
        types: [ 'Fighting', 'Psychic' ],
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
      'medicham-mega',
      {
        species: 'medicham-mega',
        num: 308,
        types: [ 'Fighting', 'Psychic' ],
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
        species: 'electrike',
        num: 309,
        types: [ 'Electric' ],
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
        species: 'manectric',
        num: 310,
        types: [ 'Electric' ],
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
      'manectric-mega',
      {
        species: 'manectric-mega',
        num: 310,
        types: [ 'Electric' ],
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
        species: 'plusle',
        num: 311,
        types: [ 'Electric' ],
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
        species: 'minun',
        num: 312,
        types: [ 'Electric' ],
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
        species: 'volbeat',
        num: 313,
        types: [ 'Bug' ],
        gender: 'M',
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
        species: 'illumise',
        num: 314,
        types: [ 'Bug' ],
        gender: 'F',
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
        species: 'roselia',
        num: 315,
        types: [ 'Grass', 'Poison' ],
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
        species: 'gulpin',
        num: 316,
        types: [ 'Poison' ],
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
        species: 'swalot',
        num: 317,
        types: [ 'Poison' ],
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
        species: 'carvanha',
        num: 318,
        types: [ 'Water', 'Dark' ],
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
        species: 'sharpedo',
        num: 319,
        types: [ 'Water', 'Dark' ],
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
      'sharpedo-mega',
      {
        species: 'sharpedo-mega',
        num: 319,
        types: [ 'Water', 'Dark' ],
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
        species: 'wailmer',
        num: 320,
        types: [ 'Water' ],
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
        species: 'wailord',
        num: 321,
        types: [ 'Water' ],
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
        species: 'numel',
        num: 322,
        types: [ 'Fire', 'Ground' ],
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
        species: 'camerupt',
        num: 323,
        types: [ 'Fire', 'Ground' ],
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
      'camerupt-mega',
      {
        species: 'camerupt-mega',
        num: 323,
        types: [ 'Fire', 'Ground' ],
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
        species: 'torkoal',
        num: 324,
        types: [ 'Fire' ],
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
        species: 'spoink',
        num: 325,
        types: [ 'Psychic' ],
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
        species: 'grumpig',
        num: 326,
        types: [ 'Psychic' ],
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
        species: 'spinda',
        num: 327,
        types: [ 'Normal' ],
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
        species: 'trapinch',
        num: 328,
        types: [ 'Ground' ],
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
        species: 'vibrava',
        num: 329,
        types: [ 'Ground', 'Dragon' ],
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
        species: 'flygon',
        num: 330,
        types: [ 'Ground', 'Dragon' ],
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
        species: 'cacnea',
        num: 331,
        types: [ 'Grass' ],
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
        species: 'cacturne',
        num: 332,
        types: [ 'Grass', 'Dark' ],
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
        species: 'swablu',
        num: 333,
        types: [ 'Normal', 'Flying' ],
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
        species: 'altaria',
        num: 334,
        types: [ 'Dragon', 'Flying' ],
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
      'altaria-mega',
      {
        species: 'altaria-mega',
        num: 334,
        types: [ 'Dragon', 'Fairy' ],
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
        species: 'zangoose',
        num: 335,
        types: [ 'Normal' ],
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
        species: 'seviper',
        num: 336,
        types: [ 'Poison' ],
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
        species: 'lunatone',
        num: 337,
        types: [ 'Rock', 'Psychic' ],
        gender: 'N',
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
        species: 'solrock',
        num: 338,
        types: [ 'Rock', 'Psychic' ],
        gender: 'N',
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
        species: 'barboach',
        num: 339,
        types: [ 'Water', 'Ground' ],
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
        species: 'whiscash',
        num: 340,
        types: [ 'Water', 'Ground' ],
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
        species: 'corphish',
        num: 341,
        types: [ 'Water' ],
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
        species: 'crawdaunt',
        num: 342,
        types: [ 'Water', 'Dark' ],
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
        species: 'baltoy',
        num: 343,
        types: [ 'Ground', 'Psychic' ],
        gender: 'N',
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
        species: 'claydol',
        num: 344,
        types: [ 'Ground', 'Psychic' ],
        gender: 'N',
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
        species: 'lileep',
        num: 345,
        types: [ 'Rock', 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'cradily',
        num: 346,
        types: [ 'Rock', 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'anorith',
        num: 347,
        types: [ 'Rock', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'armaldo',
        num: 348,
        types: [ 'Rock', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'feebas',
        num: 349,
        types: [ 'Water' ],
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
        species: 'milotic',
        num: 350,
        types: [ 'Water' ],
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
        species: 'castform',
        num: 351,
        types: [ 'Normal' ],
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
      'castform-sunny',
      {
        species: 'castform-sunny',
        num: 351,
        types: [ 'Fire' ],
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
      'castform-rainy',
      {
        species: 'castform-rainy',
        num: 351,
        types: [ 'Water' ],
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
      'castform-snowy',
      {
        species: 'castform-snowy',
        num: 351,
        types: [ 'Ice' ],
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
        species: 'kecleon',
        num: 352,
        types: [ 'Normal' ],
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
        species: 'shuppet',
        num: 353,
        types: [ 'Ghost' ],
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
        species: 'banette',
        num: 354,
        types: [ 'Ghost' ],
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
      'banette-mega',
      {
        species: 'banette-mega',
        num: 354,
        types: [ 'Ghost' ],
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
        species: 'duskull',
        num: 355,
        types: [ 'Ghost' ],
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
        species: 'dusclops',
        num: 356,
        types: [ 'Ghost' ],
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
        species: 'tropius',
        num: 357,
        types: [ 'Grass', 'Flying' ],
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
        species: 'chimecho',
        num: 358,
        types: [ 'Psychic' ],
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
        species: 'absol',
        num: 359,
        types: [ 'Dark' ],
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
      'absol-mega',
      {
        species: 'absol-mega',
        num: 359,
        types: [ 'Dark' ],
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
        species: 'wynaut',
        num: 360,
        types: [ 'Psychic' ],
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
        species: 'snorunt',
        num: 361,
        types: [ 'Ice' ],
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
        species: 'glalie',
        num: 362,
        types: [ 'Ice' ],
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
      'glalie-mega',
      {
        species: 'glalie-mega',
        num: 362,
        types: [ 'Ice' ],
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
        species: 'spheal',
        num: 363,
        types: [ 'Ice', 'Water' ],
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
        species: 'sealeo',
        num: 364,
        types: [ 'Ice', 'Water' ],
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
        species: 'walrein',
        num: 365,
        types: [ 'Ice', 'Water' ],
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
        species: 'clamperl',
        num: 366,
        types: [ 'Water' ],
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
        species: 'huntail',
        num: 367,
        types: [ 'Water' ],
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
        species: 'gorebyss',
        num: 368,
        types: [ 'Water' ],
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
        species: 'relicanth',
        num: 369,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'luvdisc',
        num: 370,
        types: [ 'Water' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'bagon',
        num: 371,
        types: [ 'Dragon' ],
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
        species: 'shelgon',
        num: 372,
        types: [ 'Dragon' ],
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
        species: 'salamence',
        num: 373,
        types: [ 'Dragon', 'Flying' ],
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
      'salamence-mega',
      {
        species: 'salamence-mega',
        num: 373,
        baseSpecies: 'Salamence',
        forme: 'Mega',
        formeLetter: 'M',
        types: [ 'Dragon', 'Flying' ],
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
        species: 'beldum',
        num: 374,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
        species: 'metang',
        num: 375,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
        species: 'metagross',
        num: 376,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
      'metagross-mega',
      {
        species: 'metagross-mega',
        num: 376,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
        species: 'regirock',
        num: 377,
        types: [ 'Rock' ],
        gender: 'N',
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
        species: 'regice',
        num: 378,
        types: [ 'Ice' ],
        gender: 'N',
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
        species: 'registeel',
        num: 379,
        types: [ 'Steel' ],
        gender: 'N',
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
        species: 'latias',
        num: 380,
        types: [ 'Dragon', 'Psychic' ],
        gender: 'F',
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
      'latias-mega',
      {
        species: 'latias-mega',
        num: 380,
        types: [ 'Dragon', 'Psychic' ],
        gender: 'F',
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
        species: 'latios',
        num: 381,
        types: [ 'Dragon', 'Psychic' ],
        gender: 'M',
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
      'latios-mega',
      {
        species: 'latios-mega',
        num: 381,
        types: [ 'Dragon', 'Psychic' ],
        gender: 'M',
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
        species: 'kyogre',
        num: 382,
        types: [ 'Water' ],
        gender: 'N',
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
      'kyogre-primal',
      {
        species: 'kyogre-primal',
        num: 382,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'groudon',
        num: 383,
        types: [ 'Ground' ],
        gender: 'N',
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
      'groudon-primal',
      {
        species: 'groudon-primal',
        num: 383,
        types: [ 'Ground', 'Fire' ],
        gender: 'N',
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
        species: 'rayquaza',
        num: 384,
        types: [ 'Dragon', 'Flying' ],
        gender: 'N',
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
      'rayquaza-mega',
      {
        species: 'rayquaza-mega',
        num: 384,
        types: [ 'Dragon', 'Flying' ],
        gender: 'N',
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
        species: 'jirachi',
        num: 385,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
        species: 'deoxys',
        num: 386,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'deoxys-attack',
      {
        species: 'deoxys-attack',
        num: 386,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'deoxys-defense',
      {
        species: 'deoxys-defense',
        num: 386,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'deoxys-speed',
      {
        species: 'deoxys-speed',
        num: 386,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'turtwig',
        num: 387,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'grotle',
        num: 388,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'torterra',
        num: 389,
        types: [ 'Grass', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'chimchar',
        num: 390,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'monferno',
        num: 391,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'infernape',
        num: 392,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'piplup',
        num: 393,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'prinplup',
        num: 394,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'empoleon',
        num: 395,
        types: [ 'Water', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'starly',
        num: 396,
        types: [ 'Normal', 'Flying' ],
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
        species: 'staravia',
        num: 397,
        types: [ 'Normal', 'Flying' ],
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
        species: 'staraptor',
        num: 398,
        types: [ 'Normal', 'Flying' ],
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
        species: 'bidoof',
        num: 399,
        types: [ 'Normal' ],
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
        species: 'bibarel',
        num: 400,
        types: [ 'Normal', 'Water' ],
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
        species: 'kricketot',
        num: 401,
        types: [ 'Bug' ],
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
        species: 'kricketune',
        num: 402,
        types: [ 'Bug' ],
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
        species: 'shinx',
        num: 403,
        types: [ 'Electric' ],
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
        species: 'luxio',
        num: 404,
        types: [ 'Electric' ],
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
        species: 'luxray',
        num: 405,
        types: [ 'Electric' ],
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
        species: 'budew',
        num: 406,
        types: [ 'Grass', 'Poison' ],
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
        species: 'roserade',
        num: 407,
        types: [ 'Grass', 'Poison' ],
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
        species: 'cranidos',
        num: 408,
        types: [ 'Rock' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'rampardos',
        num: 409,
        types: [ 'Rock' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'shieldon',
        num: 410,
        types: [ 'Rock', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'bastiodon',
        num: 411,
        types: [ 'Rock', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'burmy',
        num: 412,
        types: [ 'Bug' ],
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
        species: 'wormadam',
        num: 413,
        types: [ 'Bug', 'Grass' ],
        gender: 'F',
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
      'wormadam-sandy',
      {
        species: 'wormadam-sandy',
        num: 413,
        types: [ 'Bug', 'Ground' ],
        gender: 'F',
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
      'wormadam-trash',
      {
        species: 'wormadam-trash',
        num: 413,
        types: [ 'Bug', 'Steel' ],
        gender: 'F',
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
        species: 'mothim',
        num: 414,
        types: [ 'Bug', 'Flying' ],
        gender: 'M',
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
        species: 'combee',
        num: 415,
        types: [ 'Bug', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'vespiquen',
        num: 416,
        types: [ 'Bug', 'Flying' ],
        gender: 'F',
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
        species: 'pachirisu',
        num: 417,
        types: [ 'Electric' ],
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
        species: 'buizel',
        num: 418,
        types: [ 'Water' ],
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
        species: 'floatzel',
        num: 419,
        types: [ 'Water' ],
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
        species: 'cherubi',
        num: 420,
        types: [ 'Grass' ],
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
        species: 'cherrim',
        num: 421,
        types: [ 'Grass' ],
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
      'cherrim-sunshine',
      {
        species: 'cherrim-sunshine',
        num: 421,
        types: [ 'Grass' ],
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
        species: 'shellos',
        num: 422,
        types: [ 'Water' ],
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
        species: 'gastrodon',
        num: 423,
        types: [ 'Water', 'Ground' ],
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
        species: 'ambipom',
        num: 424,
        types: [ 'Normal' ],
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
        species: 'drifloon',
        num: 425,
        types: [ 'Ghost', 'Flying' ],
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
        species: 'drifblim',
        num: 426,
        types: [ 'Ghost', 'Flying' ],
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
        species: 'buneary',
        num: 427,
        types: [ 'Normal' ],
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
        species: 'lopunny',
        num: 428,
        types: [ 'Normal' ],
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
      'lopunny-mega',
      {
        species: 'lopunny-mega',
        num: 428,
        types: [ 'Normal', 'Fighting' ],
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
        species: 'mismagius',
        num: 429,
        types: [ 'Ghost' ],
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
        species: 'honchkrow',
        num: 430,
        types: [ 'Dark', 'Flying' ],
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
        species: 'glameow',
        num: 431,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'purugly',
        num: 432,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'chingling',
        num: 433,
        types: [ 'Psychic' ],
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
        species: 'stunky',
        num: 434,
        types: [ 'Poison', 'Dark' ],
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
        species: 'skuntank',
        num: 435,
        types: [ 'Poison', 'Dark' ],
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
        species: 'bronzor',
        num: 436,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
        species: 'bronzong',
        num: 437,
        types: [ 'Steel', 'Psychic' ],
        gender: 'N',
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
        species: 'bonsly',
        num: 438,
        types: [ 'Rock' ],
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
      'mime jr.',
      {
        species: 'mime jr.',
        num: 439,
        types: [ 'Psychic', 'Fairy' ],
        baseStats: {
          hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60,
        },
        abilities: { first: 'Soundproof', second: 'Filter', hidden: 'Technician' },
        heightm: 0.6,
        weightkg: 13,
        color: 'Pink',
        evos: [ 'mr mime' ],
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    [
      'happiny',
      {
        species: 'happiny',
        num: 440,
        types: [ 'Normal' ],
        gender: 'F',
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
        species: 'chatot',
        num: 441,
        types: [ 'Normal', 'Flying' ],
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
        species: 'spiritomb',
        num: 442,
        types: [ 'Ghost', 'Dark' ],
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
        species: 'gible',
        num: 443,
        types: [ 'Dragon', 'Ground' ],
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
        species: 'gabite',
        num: 444,
        types: [ 'Dragon', 'Ground' ],
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
        species: 'garchomp',
        num: 445,
        types: [ 'Dragon', 'Ground' ],
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
      'garchomp-mega',
      {
        species: 'garchomp-mega',
        num: 445,
        types: [ 'Dragon', 'Ground' ],
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
        species: 'munchlax',
        num: 446,
        types: [ 'Normal' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'riolu',
        num: 447,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'lucario',
        num: 448,
        types: [ 'Fighting', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
      'lucario-mega',
      {
        species: 'lucario-mega',
        num: 448,
        types: [ 'Fighting', 'Steel' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'hippopotas',
        num: 449,
        types: [ 'Ground' ],
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
        species: 'hippowdon',
        num: 450,
        types: [ 'Ground' ],
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
        species: 'skorupi',
        num: 451,
        types: [ 'Poison', 'Bug' ],
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
        species: 'drapion',
        num: 452,
        types: [ 'Poison', 'Dark' ],
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
        species: 'croagunk',
        num: 453,
        types: [ 'Poison', 'Fighting' ],
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
        species: 'toxicroak',
        num: 454,
        types: [ 'Poison', 'Fighting' ],
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
        species: 'carnivine',
        num: 455,
        types: [ 'Grass' ],
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
        species: 'finneon',
        num: 456,
        types: [ 'Water' ],
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
        species: 'lumineon',
        num: 457,
        types: [ 'Water' ],
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
        species: 'mantyke',
        num: 458,
        types: [ 'Water', 'Flying' ],
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
        species: 'snover',
        num: 459,
        types: [ 'Grass', 'Ice' ],
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
        species: 'abomasnow',
        num: 460,
        types: [ 'Grass', 'Ice' ],
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
      'abomasnow-mega',
      {
        species: 'abomasnow-mega',
        num: 460,
        types: [ 'Grass', 'Ice' ],
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
        species: 'weavile',
        num: 461,
        types: [ 'Dark', 'Ice' ],
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
        species: 'magnezone',
        num: 462,
        types: [ 'Electric', 'Steel' ],
        gender: 'N',
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
        species: 'lickilicky',
        num: 463,
        types: [ 'Normal' ],
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
        species: 'rhyperior',
        num: 464,
        types: [ 'Ground', 'Rock' ],
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
        species: 'tangrowth',
        num: 465,
        types: [ 'Grass' ],
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
        species: 'electivire',
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
        species: 'magmortar',
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
        species: 'togekiss',
        num: 468,
        types: [ 'Fairy', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'yanmega',
        num: 469,
        types: [ 'Bug', 'Flying' ],
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
        species: 'leafeon',
        num: 470,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
        baseStats: {
          hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95,
        },
        abilities: { first: 'Leaf Guard', hidden: 'Chlorophyll' },
        heightm: 1,
        weightkg: 25.5,
        color: 'Green',
        prevo: 'eevee',
        evoLevel: 'Level up near Moss Rock',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'glaceon',
      {
        species: 'glaceon',
        num: 471,
        types: [ 'Ice' ],
        genderRatio: { male: 0.875, female: 0.875 },
        baseStats: {
          hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65,
        },
        abilities: { first: 'Snow Cloak', hidden: 'Ice Body' },
        heightm: 0.8,
        weightkg: 25.9,
        color: 'Blue',
        prevo: 'eevee',
        evoLevel: 'Level up near Ice Rock',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'gliscor',
      {
        species: 'gliscor',
        num: 472,
        types: [ 'Ground', 'Flying' ],
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
        species: 'mamoswine',
        num: 473,
        types: [ 'Ice', 'Ground' ],
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
      'porygon-z',
      {
        species: 'porygon-z',
        num: 474,
        types: [ 'Normal' ],
        gender: 'N',
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
        species: 'gallade',
        num: 475,
        types: [ 'Psychic', 'Fighting' ],
        gender: 'M',
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
      'gallade-mega',
      {
        species: 'gallade-mega',
        num: 475,
        types: [ 'Psychic', 'Fighting' ],
        gender: 'M',
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
        species: 'probopass',
        num: 476,
        types: [ 'Rock', 'Steel' ],
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
        species: 'dusknoir',
        num: 477,
        types: [ 'Ghost' ],
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
        species: 'froslass',
        num: 478,
        types: [ 'Ice', 'Ghost' ],
        gender: 'F',
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
        species: 'rotom',
        num: 479,
        types: [ 'Electric', 'Ghost' ],
        gender: 'N',
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
      'rotom-heat',
      {
        species: 'rotom-heat',
        num: 479,
        types: [ 'Electric', 'Fire' ],
        gender: 'N',
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
      'rotom-wash',
      {
        species: 'rotom-wash',
        num: 479,
        types: [ 'Electric', 'Water' ],
        gender: 'N',
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
      'rotom-frost',
      {
        species: 'rotom-frost',
        num: 479,
        types: [ 'Electric', 'Ice' ],
        gender: 'N',
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
      'rotom-fan',
      {
        species: 'rotom-fan',
        num: 479,
        types: [ 'Electric', 'Flying' ],
        gender: 'N',
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
      'rotom-mow',
      {
        species: 'rotom-mow',
        num: 479,
        types: [ 'Electric', 'Grass' ],
        gender: 'N',
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
        species: 'uxie',
        num: 480,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'mesprit',
        num: 481,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'azelf',
        num: 482,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'dialga',
        num: 483,
        types: [ 'Steel', 'Dragon' ],
        gender: 'N',
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
        species: 'palkia',
        num: 484,
        types: [ 'Water', 'Dragon' ],
        gender: 'N',
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
        species: 'heatran',
        num: 485,
        types: [ 'Fire', 'Steel' ],
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
        species: 'regigigas',
        num: 486,
        types: [ 'Normal' ],
        gender: 'N',
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
        species: 'giratina',
        num: 487,
        baseForme: 'Altered',
        types: [ 'Ghost', 'Dragon' ],
        gender: 'N',
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
      'giratina-origin',
      {
        species: 'giratina-origin',
        num: 487,
        types: [ 'Ghost', 'Dragon' ],
        gender: 'N',
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
        species: 'cresselia',
        num: 488,
        types: [ 'Psychic' ],
        gender: 'F',
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
        species: 'phione',
        num: 489,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'manaphy',
        num: 490,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'darkrai',
        num: 491,
        types: [ 'Dark' ],
        gender: 'N',
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
        species: 'shaymin',
        num: 492,
        types: [ 'Grass' ],
        gender: 'N',
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
      'shaymin-sky',
      {
        species: 'shaymin-sky',
        num: 492,
        types: [ 'Grass', 'Flying' ],
        gender: 'N',
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
        species: 'arceus',
        num: 493,
        types: [ 'Normal' ],
        gender: 'N',
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
      'arceus-bug',
      {
        species: 'arceus-bug',
        num: 493,
        types: [ 'Bug' ],
        gender: 'N',
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
      'arceus-dark',
      {
        species: 'arceus-dark',
        num: 493,
        types: [ 'Dark' ],
        gender: 'N',
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
      'arceus-dragon',
      {
        species: 'arceus-dragon',
        num: 493,
        types: [ 'Dragon' ],
        gender: 'N',
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
      'arceus-electric',
      {
        species: 'arceus-electric',
        num: 493,
        types: [ 'Electric' ],
        gender: 'N',
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
      'arceus-fairy',
      {
        species: 'arceus-fairy',
        num: 493,
        types: [ 'Fairy' ],
        gender: 'N',
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
      'arceus-fighting',
      {
        species: 'arceus-fighting',
        num: 493,
        types: [ 'Fighting' ],
        gender: 'N',
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
      'arceus-fire',
      {
        species: 'arceus-fire',
        num: 493,
        types: [ 'Fire' ],
        gender: 'N',
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
      'arceus-flying',
      {
        species: 'arceus-flying',
        num: 493,
        types: [ 'Flying' ],
        gender: 'N',
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
      'arceus-ghost',
      {
        species: 'arceus-ghost',
        num: 493,
        types: [ 'Ghost' ],
        gender: 'N',
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
      'arceus-grass',
      {
        species: 'arceus-grass',
        num: 493,
        types: [ 'Grass' ],
        gender: 'N',
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
      'arceus-ground',
      {
        species: 'arceus-ground',
        num: 493,
        types: [ 'Ground' ],
        gender: 'N',
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
      'arceus-ice',
      {
        species: 'arceus-ice',
        num: 493,
        types: [ 'Ice' ],
        gender: 'N',
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
      'arceus-poison',
      {
        species: 'arceus-poison',
        num: 493,
        types: [ 'Poison' ],
        gender: 'N',
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
      'arceus-psychic',
      {
        species: 'arceus-psychic',
        num: 493,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'arceus-rock',
      {
        species: 'arceus-rock',
        num: 493,
        types: [ 'Rock' ],
        gender: 'N',
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
      'arceus-steel',
      {
        species: 'arceus-steel',
        num: 493,
        types: [ 'Steel' ],
        gender: 'N',
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
      'arceus-water',
      {
        species: 'arceus-water',
        num: 493,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'victini',
        num: 494,
        types: [ 'Psychic', 'Fire' ],
        gender: 'N',
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
        species: 'snivy',
        num: 495,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'servine',
        num: 496,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'serperior',
        num: 497,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'tepig',
        num: 498,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'pignite',
        num: 499,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'emboar',
        num: 500,
        types: [ 'Fire', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'oshawott',
        num: 501,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'dewott',
        num: 502,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'samurott',
        num: 503,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'patrat',
        num: 504,
        types: [ 'Normal' ],
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
        species: 'watchog',
        num: 505,
        types: [ 'Normal' ],
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
        species: 'lillipup',
        num: 506,
        types: [ 'Normal' ],
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
        species: 'herdier',
        num: 507,
        types: [ 'Normal' ],
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
        species: 'stoutland',
        num: 508,
        types: [ 'Normal' ],
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
        species: 'purrloin',
        num: 509,
        types: [ 'Dark' ],
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
        species: 'liepard',
        num: 510,
        types: [ 'Dark' ],
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
        species: 'pansage',
        num: 511,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'simisage',
        num: 512,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'pansear',
        num: 513,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'simisear',
        num: 514,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'panpour',
        num: 515,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'simipour',
        num: 516,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'munna',
        num: 517,
        types: [ 'Psychic' ],
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
        species: 'musharna',
        num: 518,
        types: [ 'Psychic' ],
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
        species: 'pidove',
        num: 519,
        types: [ 'Normal', 'Flying' ],
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
        species: 'tranquill',
        num: 520,
        types: [ 'Normal', 'Flying' ],
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
        species: 'unfezant',
        num: 521,
        types: [ 'Normal', 'Flying' ],
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
        species: 'blitzle',
        num: 522,
        types: [ 'Electric' ],
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
        species: 'zebstrika',
        num: 523,
        types: [ 'Electric' ],
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
        species: 'roggenrola',
        num: 524,
        types: [ 'Rock' ],
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
        species: 'boldore',
        num: 525,
        types: [ 'Rock' ],
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
        species: 'gigalith',
        num: 526,
        types: [ 'Rock' ],
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
        species: 'woobat',
        num: 527,
        types: [ 'Psychic', 'Flying' ],
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
        species: 'swoobat',
        num: 528,
        types: [ 'Psychic', 'Flying' ],
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
        species: 'drilbur',
        num: 529,
        types: [ 'Ground' ],
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
        species: 'excadrill',
        num: 530,
        types: [ 'Ground', 'Steel' ],
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
        species: 'audino',
        num: 531,
        types: [ 'Normal' ],
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
      'audino-mega',
      {
        species: 'audino-mega',
        num: 531,
        types: [ 'Normal', 'Fairy' ],
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
        species: 'timburr',
        num: 532,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.75 },
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
        species: 'gurdurr',
        num: 533,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.75 },
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
        species: 'conkeldurr',
        num: 534,
        types: [ 'Fighting' ],
        genderRatio: { male: 0.75, female: 0.75 },
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
        species: 'tympole',
        num: 535,
        types: [ 'Water' ],
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
        species: 'palpitoad',
        num: 536,
        types: [ 'Water', 'Ground' ],
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
        species: 'seismitoad',
        num: 537,
        types: [ 'Water', 'Ground' ],
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
        species: 'throh',
        num: 538,
        types: [ 'Fighting' ],
        gender: 'M',
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
        species: 'sawk',
        num: 539,
        types: [ 'Fighting' ],
        gender: 'M',
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
        species: 'sewaddle',
        num: 540,
        types: [ 'Bug', 'Grass' ],
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
        species: 'swadloon',
        num: 541,
        types: [ 'Bug', 'Grass' ],
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
        species: 'leavanny',
        num: 542,
        types: [ 'Bug', 'Grass' ],
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
        species: 'venipede',
        num: 543,
        types: [ 'Bug', 'Poison' ],
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
        species: 'whirlipede',
        num: 544,
        types: [ 'Bug', 'Poison' ],
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
        species: 'scolipede',
        num: 545,
        types: [ 'Bug', 'Poison' ],
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
        species: 'cottonee',
        num: 546,
        types: [ 'Grass', 'Fairy' ],
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
        species: 'whimsicott',
        num: 547,
        types: [ 'Grass', 'Fairy' ],
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
        species: 'petilil',
        num: 548,
        types: [ 'Grass' ],
        gender: 'F',
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
        species: 'lilligant',
        num: 549,
        types: [ 'Grass' ],
        gender: 'F',
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
        species: 'basculin',
        num: 550,
        types: [ 'Water' ],
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
      'basculin-bluestriped',
      {
        species: 'basculin-bluestriped',
        num: 550,
        types: [ 'Water' ],
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
        species: 'sandile',
        num: 551,
        types: [ 'Ground', 'Dark' ],
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
        species: 'krokorok',
        num: 552,
        types: [ 'Ground', 'Dark' ],
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
        species: 'krookodile',
        num: 553,
        types: [ 'Ground', 'Dark' ],
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
        species: 'darumaka',
        num: 554,
        types: [ 'Fire' ],
        baseStats: {
          hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50,
        },
        abilities: { first: 'Hustle', hidden: 'Inner Focus' },
        heightm: 0.6,
        weightkg: 37.5,
        color: 'Red',
        evos: [ 'darmanitan' ],
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'darmanitan',
      {
        species: 'darmanitan',
        num: 555,
        types: [ 'Fire' ],
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
        otherFormes: [ 'darmanitanzen' ],
      }
    ],
    [
      'darmanitan-zen',
      {
        species: 'darmanitan-zen',
        num: 555,
        types: [ 'Fire', 'Psychic' ],
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
      'maractus',
      {
        species: 'maractus',
        num: 556,
        types: [ 'Grass' ],
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
        species: 'dwebble',
        num: 557,
        types: [ 'Bug', 'Rock' ],
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
        species: 'crustle',
        num: 558,
        types: [ 'Bug', 'Rock' ],
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
        species: 'scraggy',
        num: 559,
        types: [ 'Dark', 'Fighting' ],
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
        species: 'scrafty',
        num: 560,
        types: [ 'Dark', 'Fighting' ],
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
        species: 'sigilyph',
        num: 561,
        types: [ 'Psychic', 'Flying' ],
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
        species: 'yamask',
        num: 562,
        types: [ 'Ghost' ],
        baseStats: {
          hp: 38, atk: 30, def: 85, spa: 55, spd: 65, spe: 30,
        },
        abilities: { first: 'Mummy' },
        heightm: 0.5,
        weightkg: 1.5,
        color: 'Black',
        evos: [ 'cofagrigus' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'cofagrigus',
      {
        species: 'cofagrigus',
        num: 563,
        types: [ 'Ghost' ],
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
        species: 'tirtouga',
        num: 564,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'carracosta',
        num: 565,
        types: [ 'Water', 'Rock' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'archen',
        num: 566,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'archeops',
        num: 567,
        types: [ 'Rock', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'trubbish',
        num: 568,
        types: [ 'Poison' ],
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
        species: 'garbodor',
        num: 569,
        types: [ 'Poison' ],
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
      }
    ],
    [
      'zorua',
      {
        species: 'zorua',
        num: 570,
        types: [ 'Dark' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'zoroark',
        num: 571,
        types: [ 'Dark' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'minccino',
        num: 572,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'cinccino',
        num: 573,
        types: [ 'Normal' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'gothita',
        num: 574,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'gothorita',
        num: 575,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'gothitelle',
        num: 576,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'solosis',
        num: 577,
        types: [ 'Psychic' ],
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
        species: 'duosion',
        num: 578,
        types: [ 'Psychic' ],
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
        species: 'reuniclus',
        num: 579,
        types: [ 'Psychic' ],
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
        species: 'ducklett',
        num: 580,
        types: [ 'Water', 'Flying' ],
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
        species: 'swanna',
        num: 581,
        types: [ 'Water', 'Flying' ],
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
        species: 'vanillite',
        num: 582,
        types: [ 'Ice' ],
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
        species: 'vanillish',
        num: 583,
        types: [ 'Ice' ],
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
        species: 'vanilluxe',
        num: 584,
        types: [ 'Ice' ],
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
        species: 'deerling',
        num: 585,
        types: [ 'Normal', 'Grass' ],
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
        species: 'sawsbuck',
        num: 586,
        types: [ 'Normal', 'Grass' ],
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
        species: 'emolga',
        num: 587,
        types: [ 'Electric', 'Flying' ],
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
        species: 'karrablast',
        num: 588,
        types: [ 'Bug' ],
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
        species: 'escavalier',
        num: 589,
        types: [ 'Bug', 'Steel' ],
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
        species: 'foongus',
        num: 590,
        types: [ 'Grass', 'Poison' ],
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
        species: 'amoonguss',
        num: 591,
        types: [ 'Grass', 'Poison' ],
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
        species: 'frillish',
        num: 592,
        types: [ 'Water', 'Ghost' ],
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
        species: 'jellicent',
        num: 593,
        types: [ 'Water', 'Ghost' ],
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
        species: 'alomomola',
        num: 594,
        types: [ 'Water' ],
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
        species: 'joltik',
        num: 595,
        types: [ 'Bug', 'Electric' ],
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
        species: 'galvantula',
        num: 596,
        types: [ 'Bug', 'Electric' ],
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
        species: 'ferroseed',
        num: 597,
        types: [ 'Grass', 'Steel' ],
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
        species: 'ferrothorn',
        num: 598,
        types: [ 'Grass', 'Steel' ],
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
        species: 'klink',
        num: 599,
        types: [ 'Steel' ],
        gender: 'N',
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
        species: 'klang',
        num: 600,
        types: [ 'Steel' ],
        gender: 'N',
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
        species: 'klinklang',
        num: 601,
        types: [ 'Steel' ],
        gender: 'N',
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
        species: 'tynamo',
        num: 602,
        types: [ 'Electric' ],
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
        species: 'eelektrik',
        num: 603,
        types: [ 'Electric' ],
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
        species: 'eelektross',
        num: 604,
        types: [ 'Electric' ],
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
        species: 'elgyem',
        num: 605,
        types: [ 'Psychic' ],
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
        species: 'beheeyem',
        num: 606,
        types: [ 'Psychic' ],
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
        species: 'litwick',
        num: 607,
        types: [ 'Ghost', 'Fire' ],
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
        species: 'lampent',
        num: 608,
        types: [ 'Ghost', 'Fire' ],
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
        species: 'chandelure',
        num: 609,
        types: [ 'Ghost', 'Fire' ],
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
        species: 'axew',
        num: 610,
        types: [ 'Dragon' ],
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
        species: 'fraxure',
        num: 611,
        types: [ 'Dragon' ],
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
        species: 'haxorus',
        num: 612,
        types: [ 'Dragon' ],
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
        species: 'cubchoo',
        num: 613,
        types: [ 'Ice' ],
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
        species: 'beartic',
        num: 614,
        types: [ 'Ice' ],
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
        species: 'cryogonal',
        num: 615,
        types: [ 'Ice' ],
        gender: 'N',
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
        species: 'shelmet',
        num: 616,
        types: [ 'Bug' ],
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
        species: 'accelgor',
        num: 617,
        types: [ 'Bug' ],
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
        species: 'stunfisk',
        num: 618,
        types: [ 'Ground', 'Electric' ],
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
        species: 'mienfoo',
        num: 619,
        types: [ 'Fighting' ],
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
        species: 'mienshao',
        num: 620,
        types: [ 'Fighting' ],
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
        species: 'druddigon',
        num: 621,
        types: [ 'Dragon' ],
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
        species: 'golett',
        num: 622,
        types: [ 'Ground', 'Ghost' ],
        gender: 'N',
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
        species: 'golurk',
        num: 623,
        types: [ 'Ground', 'Ghost' ],
        gender: 'N',
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
        species: 'pawniard',
        num: 624,
        types: [ 'Dark', 'Steel' ],
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
        species: 'bisharp',
        num: 625,
        types: [ 'Dark', 'Steel' ],
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
        species: 'bouffalant',
        num: 626,
        types: [ 'Normal' ],
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
        species: 'rufflet',
        num: 627,
        types: [ 'Normal', 'Flying' ],
        gender: 'M',
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
        species: 'braviary',
        num: 628,
        types: [ 'Normal', 'Flying' ],
        gender: 'M',
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
        species: 'vullaby',
        num: 629,
        types: [ 'Dark', 'Flying' ],
        gender: 'F',
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
        species: 'mandibuzz',
        num: 630,
        types: [ 'Dark', 'Flying' ],
        gender: 'F',
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
        species: 'heatmor',
        num: 631,
        types: [ 'Fire' ],
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
        species: 'durant',
        num: 632,
        types: [ 'Bug', 'Steel' ],
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
        species: 'deino',
        num: 633,
        types: [ 'Dark', 'Dragon' ],
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
        species: 'zweilous',
        num: 634,
        types: [ 'Dark', 'Dragon' ],
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
        species: 'hydreigon',
        num: 635,
        types: [ 'Dark', 'Dragon' ],
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
        species: 'larvesta',
        num: 636,
        types: [ 'Bug', 'Fire' ],
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
        species: 'volcarona',
        num: 637,
        types: [ 'Bug', 'Fire' ],
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
        species: 'cobalion',
        num: 638,
        types: [ 'Steel', 'Fighting' ],
        gender: 'N',
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
        species: 'terrakion',
        num: 639,
        types: [ 'Rock', 'Fighting' ],
        gender: 'N',
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
        species: 'virizion',
        num: 640,
        types: [ 'Grass', 'Fighting' ],
        gender: 'N',
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
        species: 'tornadus',
        num: 641,
        baseForme: 'Incarnate',
        types: [ 'Flying' ],
        gender: 'M',
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
      'tornadus-therian',
      {
        species: 'tornadus-therian',
        num: 641,
        types: [ 'Flying' ],
        gender: 'M',
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
        species: 'thundurus',
        num: 642,
        types: [ 'Electric', 'Flying' ],
        baseForme: 'Incarnate',
        gender: 'M',
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
      'thundurus-therian',
      {
        species: 'thundurus-therian',
        num: 642,
        types: [ 'Electric', 'Flying' ],
        gender: 'M',
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
        species: 'reshiram',
        num: 643,
        types: [ 'Dragon', 'Fire' ],
        gender: 'N',
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
        species: 'zekrom',
        num: 644,
        types: [ 'Dragon', 'Electric' ],
        gender: 'N',
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
        species: 'landorus',
        num: 645,
        types: [ 'Ground', 'Flying' ],
        baseForme: 'Incarnate',
        gender: 'M',
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
      'landorus-therian',
      {
        species: 'landorus-therian',
        num: 645,
        types: [ 'Ground', 'Flying' ],
        gender: 'M',
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
        species: 'kyurem',
        num: 646,
        types: [ 'Dragon', 'Ice' ],
        gender: 'N',
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
      'kyurem-black',
      {
        species: 'kyurem-black',
        num: 646,
        types: [ 'Dragon', 'Ice' ],
        gender: 'N',
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
      'kyurem-white',
      {
        species: 'kyurem-white',
        num: 646,
        types: [ 'Dragon', 'Ice' ],
        gender: 'N',
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
        species: 'keldeo',
        num: 647,
        types: [ 'Water', 'Fighting' ],
        gender: 'N',
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
      'keldeo-resolute',
      {
        species: 'keldeo-resolute',
        num: 647,
        types: [ 'Water', 'Fighting' ],
        gender: 'N',
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
        species: 'meloetta',
        num: 648,
        types: [ 'Normal', 'Psychic' ],
        gender: 'N',
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
      'meloetta-pirouette',
      {
        species: 'meloetta-pirouette',
        num: 648,
        types: [ 'Normal', 'Fighting' ],
        gender: 'N',
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
        species: 'genesect',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        gender: 'N',
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
      'genesect-douse',
      {
        species: 'genesect-douse',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        gender: 'N',
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
      'genesect-shock',
      {
        species: 'genesect-shock',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        gender: 'N',
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
      'genesect-burn',
      {
        species: 'genesect-burn',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        gender: 'N',
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
      'genesect-chill',
      {
        species: 'genesect-chill',
        num: 649,
        types: [ 'Bug', 'Steel' ],
        gender: 'N',
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
        species: 'chespin',
        num: 650,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'quilladin',
        num: 651,
        types: [ 'Grass' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'chesnaught',
        num: 652,
        types: [ 'Grass', 'Fighting' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'fennekin',
        num: 653,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'braixen',
        num: 654,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'delphox',
        num: 655,
        types: [ 'Fire', 'Psychic' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'froakie',
        num: 656,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'frogadier',
        num: 657,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'greninja',
        num: 658,
        types: [ 'Water', 'Dark' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
      'greninja-ash',
      {
        species: 'greninja-ash',
        num: 658,
        types: [ 'Water', 'Dark' ],
        gender: 'M',
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
        species: 'bunnelby',
        num: 659,
        types: [ 'Normal' ],
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
        species: 'diggersby',
        num: 660,
        types: [ 'Normal', 'Ground' ],
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
        species: 'fletchling',
        num: 661,
        types: [ 'Normal', 'Flying' ],
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
        species: 'fletchinder',
        num: 662,
        types: [ 'Fire', 'Flying' ],
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
        species: 'talonflame',
        num: 663,
        types: [ 'Fire', 'Flying' ],
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
        species: 'scatterbug',
        num: 664,
        types: [ 'Bug' ],
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
        species: 'spewpa',
        num: 665,
        types: [ 'Bug' ],
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
        species: 'vivillon',
        num: 666,
        types: [ 'Bug', 'Flying' ],
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
      'vivillon-fancy',
      {
        species: 'vivillon-fancy',
        num: 666,
        types: [ 'Bug', 'Flying' ],
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
      'vivillon-pokeball',
      {
        species: 'vivillon-pokeball',
        num: 666,
        types: [ 'Bug', 'Flying' ],
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
        species: 'litleo',
        num: 667,
        types: [ 'Fire', 'Normal' ],
        genderRatio: { male: 0.125, female: 0.125 },
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
        species: 'pyroar',
        num: 668,
        types: [ 'Fire', 'Normal' ],
        genderRatio: { male: 0.125, female: 0.125 },
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
        species: 'flabebe',
        num: 669,
        types: [ 'Fairy' ],
        gender: 'F',
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
        species: 'floette',
        num: 670,
        types: [ 'Fairy' ],
        gender: 'F',
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
      'floette-eternal',
      {
        species: 'floette-eternal',
        num: 670,
        types: [ 'Fairy' ],
        gender: 'F',
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
        species: 'florges',
        num: 671,
        types: [ 'Fairy' ],
        gender: 'F',
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
        species: 'skiddo',
        num: 672,
        types: [ 'Grass' ],
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
        species: 'gogoat',
        num: 673,
        types: [ 'Grass' ],
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
        species: 'pancham',
        num: 674,
        types: [ 'Fighting' ],
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
        species: 'pangoro',
        num: 675,
        types: [ 'Fighting', 'Dark' ],
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
        species: 'furfrou',
        num: 676,
        types: [ 'Normal' ],
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
        species: 'espurr',
        num: 677,
        types: [ 'Psychic' ],
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
        species: 'meowstic',
        num: 678,
        types: [ 'Psychic' ],
        gender: 'M',
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
      'meowstic-f',
      {
        species: 'meowstic-f',
        num: 678,
        types: [ 'Psychic' ],
        gender: 'F',
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
        species: 'honedge',
        num: 679,
        types: [ 'Steel', 'Ghost' ],
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
        species: 'doublade',
        num: 680,
        types: [ 'Steel', 'Ghost' ],
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
        species: 'aegislash',
        num: 681,
        baseForme: 'Shield',
        types: [ 'Steel', 'Ghost' ],
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
      'aegislash-blade',
      {
        species: 'aegislash-blade',
        num: 681,
        types: [ 'Steel', 'Ghost' ],
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
        species: 'spritzee',
        num: 682,
        types: [ 'Fairy' ],
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
        species: 'aromatisse',
        num: 683,
        types: [ 'Fairy' ],
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
        species: 'swirlix',
        num: 684,
        types: [ 'Fairy' ],
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
        species: 'slurpuff',
        num: 685,
        types: [ 'Fairy' ],
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
        species: 'inkay',
        num: 686,
        types: [ 'Dark', 'Psychic' ],
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
        species: 'malamar',
        num: 687,
        types: [ 'Dark', 'Psychic' ],
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
        species: 'binacle',
        num: 688,
        types: [ 'Rock', 'Water' ],
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
        species: 'barbaracle',
        num: 689,
        types: [ 'Rock', 'Water' ],
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
        species: 'skrelp',
        num: 690,
        types: [ 'Poison', 'Water' ],
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
        species: 'dragalge',
        num: 691,
        types: [ 'Poison', 'Dragon' ],
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
        species: 'clauncher',
        num: 692,
        types: [ 'Water' ],
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
        species: 'clawitzer',
        num: 693,
        types: [ 'Water' ],
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
        species: 'helioptile',
        num: 694,
        types: [ 'Electric', 'Normal' ],
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
        species: 'heliolisk',
        num: 695,
        types: [ 'Electric', 'Normal' ],
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
        species: 'tyrunt',
        num: 696,
        types: [ 'Rock', 'Dragon' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'tyrantrum',
        num: 697,
        types: [ 'Rock', 'Dragon' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'amaura',
        num: 698,
        types: [ 'Rock', 'Ice' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'aurorus',
        num: 699,
        types: [ 'Rock', 'Ice' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'sylveon',
        num: 700,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'hawlucha',
        num: 701,
        types: [ 'Fighting', 'Flying' ],
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
        species: 'dedenne',
        num: 702,
        types: [ 'Electric', 'Fairy' ],
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
        species: 'carbink',
        num: 703,
        types: [ 'Rock', 'Fairy' ],
        gender: 'N',
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
        species: 'goomy',
        num: 704,
        types: [ 'Dragon' ],
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
        species: 'sliggoo',
        num: 705,
        types: [ 'Dragon' ],
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
        species: 'goodra',
        num: 706,
        types: [ 'Dragon' ],
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
        species: 'klefki',
        num: 707,
        types: [ 'Steel', 'Fairy' ],
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
        species: 'phantump',
        num: 708,
        types: [ 'Ghost', 'Grass' ],
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
        species: 'trevenant',
        num: 709,
        types: [ 'Ghost', 'Grass' ],
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
        species: 'pumpkaboo',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
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
      'pumpkaboo-small',
      {
        species: 'pumpkaboo-small',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
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
      'pumpkaboo-large',
      {
        species: 'pumpkaboo-large',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
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
      'pumpkaboo-super',
      {
        species: 'pumpkaboo-super',
        num: 710,
        types: [ 'Ghost', 'Grass' ],
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
        species: 'gourgeist',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
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
      'gourgeist-small',
      {
        species: 'gourgeist-small',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
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
      'gourgeist-large',
      {
        species: 'gourgeist-large',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
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
      'gourgeist-super',
      {
        species: 'gourgeist-super',
        num: 711,
        types: [ 'Ghost', 'Grass' ],
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
        species: 'bergmite',
        num: 712,
        types: [ 'Ice' ],
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
        species: 'avalugg',
        num: 713,
        types: [ 'Ice' ],
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
        species: 'noibat',
        num: 714,
        types: [ 'Flying', 'Dragon' ],
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
        species: 'noivern',
        num: 715,
        types: [ 'Flying', 'Dragon' ],
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
        species: 'xerneas',
        num: 716,
        types: [ 'Fairy' ],
        gender: 'N',
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
        species: 'yveltal',
        num: 717,
        types: [ 'Dark', 'Flying' ],
        gender: 'N',
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
        species: 'zygarde',
        num: 718,
        types: [ 'Dragon', 'Ground' ],
        gender: 'N',
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
      'zygarde-10%',
      {
        species: 'zygarde-10%',
        num: 718,
        types: [ 'Dragon', 'Ground' ],
        gender: 'N',
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
      'zygarde-complete',
      {
        species: 'zygarde-complete',
        num: 718,
        types: [ 'Dragon', 'Ground' ],
        gender: 'N',
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
        species: 'diancie',
        num: 719,
        types: [ 'Rock', 'Fairy' ],
        gender: 'N',
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
      'diancie-mega',
      {
        species: 'diancie-mega',
        num: 719,
        types: [ 'Rock', 'Fairy' ],
        gender: 'N',
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
        species: 'hoopa',
        num: 720,
        types: [ 'Psychic', 'Ghost' ],
        gender: 'N',
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
      'hoopa-unbound',
      {
        species: 'hoopa-unbound',
        num: 720,
        types: [ 'Psychic', 'Dark' ],
        gender: 'N',
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
        species: 'volcanion',
        num: 721,
        types: [ 'Fire', 'Water' ],
        gender: 'N',
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
        species: 'rowlet',
        num: 722,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'dartrix',
        num: 723,
        types: [ 'Grass', 'Flying' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'decidueye',
        num: 724,
        types: [ 'Grass', 'Ghost' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'litten',
        num: 725,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'torracat',
        num: 726,
        types: [ 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'incineroar',
        num: 727,
        types: [ 'Fire', 'Dark' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'popplio',
        num: 728,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'brionne',
        num: 729,
        types: [ 'Water' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'primarina',
        num: 730,
        types: [ 'Water', 'Fairy' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'pikipek',
        num: 731,
        types: [ 'Normal', 'Flying' ],
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
        species: 'trumbeak',
        num: 732,
        types: [ 'Normal', 'Flying' ],
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
        species: 'toucannon',
        num: 733,
        types: [ 'Normal', 'Flying' ],
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
        species: 'yungoos',
        num: 734,
        types: [ 'Normal' ],
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
        species: 'gumshoos',
        num: 735,
        types: [ 'Normal' ],
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
      'gumshoos-totem',
      {
        species: 'gumshoos-totem',
        num: 735,
        types: [ 'Normal' ],
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
        species: 'grubbin',
        num: 736,
        types: [ 'Bug' ],
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
        species: 'charjabug',
        num: 737,
        types: [ 'Bug', 'Electric' ],
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
        species: 'vikavolt',
        num: 738,
        types: [ 'Bug', 'Electric' ],
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
      'vikavolt-totem',
      {
        species: 'vikavolt-totem',
        num: 738,
        types: [ 'Bug', 'Electric' ],
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
        species: 'crabrawler',
        num: 739,
        types: [ 'Fighting' ],
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
        species: 'crabominable',
        num: 740,
        types: [ 'Fighting', 'Ice' ],
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
        species: 'oricorio',
        num: 741,
        types: [ 'Fire', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
      'oricorio-pompom',
      {
        species: 'oricorio-pompom',
        num: 741,
        types: [ 'Electric', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
      'oricorio-pa\'u',
      {
        species: 'oricorio-pa\'u',
        num: 741,
        types: [ 'Psychic', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
      'oricorio-sensu',
      {
        species: 'oricorio-sensu',
        num: 741,
        types: [ 'Ghost', 'Flying' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'cutiefly',
        num: 742,
        types: [ 'Bug', 'Fairy' ],
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
        species: 'ribombee',
        num: 743,
        types: [ 'Bug', 'Fairy' ],
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
      'ribombee-totem',
      {
        species: 'ribombee-totem',
        num: 743,
        types: [ 'Bug', 'Fairy' ],
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
        species: 'rockruff',
        num: 744,
        types: [ 'Rock' ],
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
        species: 'lycanroc',
        num: 745,
        types: [ 'Rock' ],
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
      'lycanroc-midnight',
      {
        species: 'lycanroc-midnight',
        num: 745,
        types: [ 'Rock' ],
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
      'lycanroc-dusk',
      {
        species: 'lycanroc-dusk',
        num: 745,
        types: [ 'Rock' ],
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
        species: 'wishiwashi',
        num: 746,
        types: [ 'Water' ],
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
      'wishiwashi-school',
      {
        species: 'wishiwashi-school',
        num: 746,
        types: [ 'Water' ],
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
        species: 'mareanie',
        num: 747,
        types: [ 'Poison', 'Water' ],
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
        species: 'toxapex',
        num: 748,
        types: [ 'Poison', 'Water' ],
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
        species: 'mudbray',
        num: 749,
        types: [ 'Ground' ],
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
        species: 'mudsdale',
        num: 750,
        types: [ 'Ground' ],
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
        species: 'dewpider',
        num: 751,
        types: [ 'Water', 'Bug' ],
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
        species: 'araquanid',
        num: 752,
        types: [ 'Water', 'Bug' ],
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
      'araquanid-totem',
      {
        species: 'araquanid-totem',
        num: 752,
        types: [ 'Water', 'Bug' ],
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
        species: 'fomantis',
        num: 753,
        types: [ 'Grass' ],
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
        species: 'lurantis',
        num: 754,
        types: [ 'Grass' ],
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
      'lurantis-totem',
      {
        species: 'lurantis-totem',
        num: 754,
        types: [ 'Grass' ],
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
        species: 'morelull',
        num: 755,
        types: [ 'Grass', 'Fairy' ],
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
        species: 'shiinotic',
        num: 756,
        types: [ 'Grass', 'Fairy' ],
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
        species: 'salandit',
        num: 757,
        types: [ 'Poison', 'Fire' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'salazzle',
        num: 758,
        types: [ 'Poison', 'Fire' ],
        gender: 'F',
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
      'salazzle-totem',
      {
        species: 'salazzle-totem',
        num: 758,
        types: [ 'Poison', 'Fire' ],
        gender: 'F',
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
        species: 'stufful',
        num: 759,
        types: [ 'Normal', 'Fighting' ],
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
        species: 'bewear',
        num: 760,
        types: [ 'Normal', 'Fighting' ],
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
        species: 'bounsweet',
        num: 761,
        types: [ 'Grass' ],
        gender: 'F',
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
        species: 'steenee',
        num: 762,
        types: [ 'Grass' ],
        gender: 'F',
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
        species: 'tsareena',
        num: 763,
        types: [ 'Grass' ],
        gender: 'F',
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
        species: 'comfey',
        num: 764,
        types: [ 'Fairy' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'oranguru',
        num: 765,
        types: [ 'Normal', 'Psychic' ],
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
        species: 'passimian',
        num: 766,
        types: [ 'Fighting' ],
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
        species: 'wimpod',
        num: 767,
        types: [ 'Bug', 'Water' ],
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
        species: 'golisopod',
        num: 768,
        types: [ 'Bug', 'Water' ],
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
        species: 'sandygast',
        num: 769,
        types: [ 'Ghost', 'Ground' ],
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
        species: 'palossand',
        num: 770,
        types: [ 'Ghost', 'Ground' ],
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
        species: 'pyukumuku',
        num: 771,
        types: [ 'Water' ],
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
      'type null',
      {
        species: 'type null',
        baseForme: 'Type: Null',
        num: 772,
        types: [ 'Normal' ],
        gender: 'N',
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
        species: 'silvally',
        num: 773,
        types: [ 'Normal' ],
        gender: 'N',
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
      'silvally-bug',
      {
        species: 'silvally-bug',
        num: 773,
        types: [ 'Bug' ],
        gender: 'N',
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
      'silvally-dark',
      {
        species: 'silvally-dark',
        num: 773,
        types: [ 'Dark' ],
        gender: 'N',
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
      'silvally-dragon',
      {
        species: 'silvally-dragon',
        num: 773,
        types: [ 'Dragon' ],
        gender: 'N',
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
      'silvally-electric',
      {
        species: 'silvally-electric',
        num: 773,
        types: [ 'Electric' ],
        gender: 'N',
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
      'silvally-fairy',
      {
        species: 'silvally-fairy',
        num: 773,
        types: [ 'Fairy' ],
        gender: 'N',
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
      'silvally-fighting',
      {
        species: 'silvally-fighting',
        num: 773,
        types: [ 'Fighting' ],
        gender: 'N',
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
      'silvally-fire',
      {
        species: 'silvally-fire',
        num: 773,
        types: [ 'Fire' ],
        gender: 'N',
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
      'silvally-flying',
      {
        species: 'silvally-flying',
        num: 773,
        types: [ 'Flying' ],
        gender: 'N',
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
      'silvally-ghost',
      {
        species: 'silvally-ghost',
        num: 773,
        types: [ 'Ghost' ],
        gender: 'N',
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
      'silvally-grass',
      {
        species: 'silvally-grass',
        num: 773,
        types: [ 'Grass' ],
        gender: 'N',
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
      'silvally-ground',
      {
        species: 'silvally-ground',
        num: 773,
        types: [ 'Ground' ],
        gender: 'N',
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
      'silvally-ice',
      {
        species: 'silvally-ice',
        num: 773,
        types: [ 'Ice' ],
        gender: 'N',
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
      'silvally-poison',
      {
        species: 'silvally-poison',
        num: 773,
        types: [ 'Poison' ],
        gender: 'N',
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
      'silvally-psychic',
      {
        species: 'silvally-psychic',
        num: 773,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'silvally-rock',
      {
        species: 'silvally-rock',
        num: 773,
        types: [ 'Rock' ],
        gender: 'N',
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
      'silvally-steel',
      {
        species: 'silvally-steel',
        num: 773,
        types: [ 'Steel' ],
        gender: 'N',
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
      'silvally-water',
      {
        species: 'silvally-water',
        num: 773,
        types: [ 'Water' ],
        gender: 'N',
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
        species: 'minior',
        num: 774,
        types: [ 'Rock', 'Flying' ],
        gender: 'N',
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
      'minior-meteor',
      {
        species: 'minior-meteor',
        num: 774,
        types: [ 'Rock', 'Flying' ],
        gender: 'N',
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
        species: 'komala',
        num: 775,
        types: [ 'Normal' ],
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
        species: 'turtonator',
        num: 776,
        types: [ 'Fire', 'Dragon' ],
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
        species: 'togedemaru',
        num: 777,
        types: [ 'Electric', 'Steel' ],
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
      'togedemaru-totem',
      {
        species: 'togedemaru-totem',
        num: 777,
        types: [ 'Electric', 'Steel' ],
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
        species: 'mimikyu',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
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
      'mimikyu-busted',
      {
        species: 'mimikyu-busted',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
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
      'mimikyu-totem',
      {
        species: 'mimikyu-totem',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
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
      'mimikyu-busted-totem',
      {
        species: 'mimikyu-busted-totem',
        num: 778,
        types: [ 'Ghost', 'Fairy' ],
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
        species: 'bruxish',
        num: 779,
        types: [ 'Water', 'Psychic' ],
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
        species: 'drampa',
        num: 780,
        types: [ 'Normal', 'Dragon' ],
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
        species: 'dhelmise',
        num: 781,
        types: [ 'Ghost', 'Grass' ],
        gender: 'N',
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
      'jangmo-o',
      {
        species: 'jangmo-o',
        num: 782,
        types: [ 'Dragon' ],
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
      'hakamo-o',
      {
        species: 'hakamo-o',
        num: 783,
        types: [ 'Dragon', 'Fighting' ],
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
      'kommo-o',
      {
        species: 'kommo-o',
        num: 784,
        types: [ 'Dragon', 'Fighting' ],
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
      'kommo-o-totem',
      {
        species: 'kommo-o-totem',
        num: 784,
        types: [ 'Dragon', 'Fighting' ],
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
      'tapu koko',
      {
        species: 'tapu koko',
        num: 785,
        types: [ 'Electric', 'Fairy' ],
        gender: 'N',
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
      'tapu lele',
      {
        species: 'tapu lele',
        num: 786,
        types: [ 'Psychic', 'Fairy' ],
        gender: 'N',
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
      'tapu bulu',
      {
        species: 'tapu bulu',
        num: 787,
        types: [ 'Grass', 'Fairy' ],
        gender: 'N',
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
      'tapu fini',
      {
        species: 'tapu fini',
        num: 788,
        types: [ 'Water', 'Fairy' ],
        gender: 'N',
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
        species: 'cosmog',
        num: 789,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'cosmoem',
        num: 790,
        types: [ 'Psychic' ],
        gender: 'N',
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
        species: 'solgaleo',
        num: 791,
        types: [ 'Psychic', 'Steel' ],
        gender: 'N',
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
        species: 'lunala',
        num: 792,
        types: [ 'Psychic', 'Ghost' ],
        gender: 'N',
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
        species: 'nihilego',
        num: 793,
        types: [ 'Rock', 'Poison' ],
        gender: 'N',
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
        species: 'buzzwole',
        num: 794,
        types: [ 'Bug', 'Fighting' ],
        gender: 'N',
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
        species: 'pheromosa',
        num: 795,
        types: [ 'Bug', 'Fighting' ],
        gender: 'N',
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
        species: 'xurkitree',
        num: 796,
        types: [ 'Electric' ],
        gender: 'N',
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
        species: 'celesteela',
        num: 797,
        types: [ 'Steel', 'Flying' ],
        gender: 'N',
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
        species: 'kartana',
        num: 798,
        types: [ 'Grass', 'Steel' ],
        gender: 'N',
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
        species: 'guzzlord',
        num: 799,
        types: [ 'Dark', 'Dragon' ],
        gender: 'N',
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
        species: 'necrozma',
        num: 800,
        types: [ 'Psychic' ],
        gender: 'N',
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
      'necrozma-duskmane',
      {
        species: 'necrozma-duskmane',
        num: 800,
        types: [ 'Psychic', 'Steel' ],
        gender: 'N',
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
      'necrozma-dawnwings',
      {
        species: 'necrozma-dawnwings',
        num: 800,
        types: [ 'Psychic', 'Ghost' ],
        gender: 'N',
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
      'necrozma-ultra',
      {
        species: 'necrozma-ultra',
        num: 800,
        types: [ 'Psychic', 'Dragon' ],
        gender: 'N',
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
        species: 'magearna',
        num: 801,
        types: [ 'Steel', 'Fairy' ],
        gender: 'N',
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
      'magearna-original',
      {
        species: 'magearna-original',
        num: 801,
        types: [ 'Steel', 'Fairy' ],
        gender: 'N',
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
        species: 'marshadow',
        num: 802,
        types: [ 'Fighting', 'Ghost' ],
        gender: 'N',
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
        species: 'poipole',
        num: 803,
        types: [ 'Poison' ],
        gender: 'N',
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
        species: 'naganadel',
        num: 804,
        types: [ 'Poison', 'Dragon' ],
        gender: 'N',
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
        species: 'stakataka',
        num: 805,
        types: [ 'Rock', 'Steel' ],
        gender: 'N',
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
        species: 'blacephalon',
        num: 806,
        types: [ 'Fire', 'Ghost' ],
        gender: 'N',
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
        species: 'zeraora',
        num: 807,
        types: [ 'Electric' ],
        gender: 'N',
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
      'missingno.',
      {
        species: 'missingno.',
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
        species: 'meltan',
        num: 808,
        types: [ 'Steel' ],
        gender: 'N',
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
        species: 'melmetal',
        num: 809,
        types: [ 'Steel' ],
        gender: 'N',
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
      }
    ],
    [
      'grookey',
      {
        species: 'grookey',
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
        species: 'thwackey',
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
        species: 'rillaboom',
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
        species: 'scorbunny',
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
        eggGroups: [ 'Field', 'HumanLike' ],
      }
    ],
    [
      'raboot',
      {
        species: 'raboot',
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
        eggGroups: [ 'Field', 'HumanLike' ],
      }
    ],
    [
      'cinderace',
      {
        species: 'cinderace',
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
        eggGroups: [ 'Field', 'HumanLike' ],
      }
    ],
    [
      'sobble',
      {
        species: 'sobble',
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
        eggGroups: [ 'Water1', 'Field' ],
      }
    ],
    [
      'drizzile',
      {
        species: 'drizzile',
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
        eggGroups: [ 'Water1', 'Field' ],
      }
    ],
    [
      'inteleon',
      {
        species: 'inteleon',
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
        eggGroups: [ 'Water1', 'Field' ],
      }
    ],
    [
      'skwovet',
      {
        species: 'skwovet',
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
        species: 'greedent',
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
        species: 'rookidee',
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
        species: 'corvisquire',
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
        species: 'corviknight',
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
      }
    ],
    [
      'blipbug',
      {
        species: 'blipbug',
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
        species: 'dottler',
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
        species: 'orbeetle',
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
      }
    ],
    [
      'nickit',
      {
        species: 'nickit',
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
        species: 'thievul',
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
        species: 'gossifleur',
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
        species: 'eldegoss',
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
        species: 'wooloo',
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
        species: 'dubwool',
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
        species: 'chewtle',
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
        eggGroups: [ 'Monster', 'Water1' ],
      }
    ],
    [
      'drednaw',
      {
        species: 'drednaw',
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
        eggGroups: [ 'Monster', 'Water1' ],
      }
    ],
    [
      'yamper',
      {
        species: 'yamper',
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
        species: 'drednaw',
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
        species: 'rolycoly',
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
        species: 'carkol',
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
        species: 'coalossal',
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
      }
    ],
    [
      'applin',
      {
        species: 'applin',
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
        species: 'flapple',
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
      }
    ],
    [
      'appletun',
      {
        species: 'appletun',
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
      }
    ],
    [
      'silicobra',
      {
        species: 'silicobra',
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
        species: 'sandaconda',
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
      }
    ],
    [
      'cramorant',
      {
        species: 'cramorant',
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
        eggGroups: [ 'Water1', 'Flying' ],
      }
    ],
    [
      'arrokuda',
      {
        species: 'arrokuda',
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
        eggGroups: [ 'Water2' ],
      }
    ],
    [
      'barraskewda',
      {
        species: 'barraskewda',
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
        eggGroups: [ 'Water2' ],
      }
    ],
    [
      'toxel',
      {
        species: 'toxel',
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
        eggGroups: [ 'Undiscovered' ],
      }
    ],
    /**
     * TODO: When Showdown adds data for Gen 8, verify Toxtricity's formes
     */
    [
      'toxtricity',
      {
        species: 'toxtricity',
        num: 849,
        types: [ 'Electric', 'Poison' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75,
        },
        abilities: { first: 'Punk Rock', second: 'Plus', hidden: 'Technician' },
        heightm: 1.60,
        weightkg: 40.0,
        color: 'Purple',
        prevo: 'toxel',
        evoLevel: '30 while Nintendo Switch is docked',
        eggGroups: [ 'HumanLike' ],
      }
    ],
    [
      'toxtricity-undocked',
      {
        species: 'toxtricity-undocked',
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
        evoLevel: '30 while Nintendo Switch is undocked',
        eggGroups: [ 'HumanLike' ],
      }
    ],
    [
      'sizzlipede',
      {
        species: 'sizzlipede',
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
        species: 'centiskorch',
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
        species: 'clobbopus',
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
        eggGroups: [ 'Water1', 'HumanLike' ],
      }
    ],
    [
      'grapploct',
      {
        species: 'grapploct',
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
        eggGroups: [ 'Water1', 'HumanLike' ],
      }
    ],
    [
      'sinistea-cracked',
      {
        species: 'sinistea-cracked',
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
        evos: [ 'polteageist-cracked' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'sinistea-chipped',
      {
        species: 'sinistea-chipped',
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
        evos: [ 'polteageist-chipped' ],
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'polteageist-cracked',
      {
        species: 'polteageist-cracked',
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
        prevo: 'sinistea-cracked',
        evoLevel: 'use Cracked Pot',
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'polteageist-chipped',
      {
        species: 'polteageist-chipped',
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
        prevo: 'sinistea-chipped',
        evoLevel: 'use Chipped Pot',
        eggGroups: [ 'Mineral', 'Amorphous' ],
      }
    ],
    [
      'hatenna',
      {
        species: 'hatenna',
        num: 856,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
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
        species: 'hattrem',
        num: 857,
        types: [ 'Psychic' ],
        genderRatio: { male: 0.50, female: 0.50 },
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
        species: 'hatterene',
        num: 858,
        types: [ 'Psychic', 'Fairy' ],
        genderRatio: { male: 0.50, female: 0.50 },
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
        species: 'impidimp',
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
        eggGroups: [ 'Fairy', 'HumanLike' ],
      }
    ],
    [
      'morgrem',
      {
        species: 'morgrem',
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
        eggGroups: [ 'Fairy', 'HumanLike' ],
      }
    ],
    [
      'grimmsnarl',
      {
        species: 'grimmsnarl',
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
        eggGroups: [ 'Fairy', 'HumanLike' ],
      }
    ],
    [
      'obstagoon',
      {
        species: 'obstagoon',
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
        prevo: 'linoone-galar',
        evoLevel: 'level 35 at night',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'perrserker',
      {
        species: 'perrserker',
        num: 863,
        types: [ 'Steel' ],
        genderRatio: { male: 0.50, female: 0.50 },
        baseStats: {
          hp: 70, atk: 110, def: 100, spa: 50, spd: 60, spe: 50,
        },
        abilities: { first: 'Battle Armor', second: 'Tough Claws', hidden: 'Steely Spirit' },
        heightm: 0.80,
        weightkg: 28.0,
        color: 'Brown',
        eggGroups: [ 'Field' ],
      }
    ],
    [
      'cursola',
      {
        species: 'cursola',
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
        prevo: 'morgrem',
        evoLevel: 42,
        eggGroups: [ 'Water1', 'Water3' ],
      }
    ],
    [
      'sirfetch\'d',
      {
        species: 'sirfetch\'d',
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
        prevo: 'farfetch\'d-galar',
        evoLevel: '???',
        eggGroups: [ 'Flying', 'Field' ],
      }
    ],
    [
      'syclant',
      {
        species: 'syclant',
        num: -1,
        types: [ 'Ice', 'Bug' ],
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
        species: 'revenankh',
        num: -2,
        types: [ 'Ghost', 'Fighting' ],
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
        species: 'pyroak',
        num: -3,
        types: [ 'Fire', 'Grass' ],
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
        species: 'fidgit',
        num: -4,
        types: [ 'Poison', 'Ground' ],
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
        species: 'stratagem',
        num: -5,
        types: [ 'Rock' ],
        gender: 'N',
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
        species: 'arghonaut',
        num: -6,
        types: [ 'Water', 'Fighting' ],
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
        species: 'kitsunoh',
        num: -7,
        types: [ 'Steel', 'Ghost' ],
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
        species: 'cyclohm',
        num: -8,
        types: [ 'Electric', 'Dragon' ],
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
        species: 'colossoil',
        num: -9,
        types: [ 'Dark', 'Ground' ],
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
        species: 'krilowatt',
        num: -10,
        types: [ 'Electric', 'Water' ],
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
        species: 'voodoom',
        num: -11,
        types: [ 'Fighting', 'Dark' ],
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
        species: 'tomohawk',
        num: -12,
        types: [ 'Flying', 'Fighting' ],
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
        species: 'necturna',
        num: -13,
        types: [ 'Grass', 'Ghost' ],
        gender: 'F',
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
        species: 'mollux',
        num: -14,
        types: [ 'Fire', 'Poison' ],
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
        species: 'aurumoth',
        num: -15,
        types: [ 'Bug', 'Psychic' ],
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
        species: 'malaconda',
        num: -16,
        types: [ 'Dark', 'Grass' ],
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
        species: 'cawmodore',
        num: -17,
        types: [ 'Steel', 'Flying' ],
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
        species: 'volkraken',
        num: -18,
        types: [ 'Water', 'Fire' ],
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
        species: 'plasmanta',
        num: -19,
        types: [ 'Electric', 'Poison' ],
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
        species: 'naviathan',
        num: -20,
        types: [ 'Water', 'Steel' ],
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
        species: 'crucibelle',
        num: -21,
        types: [ 'Rock', 'Poison' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
      'crucibelle-mega',
      {
        species: 'crucibelle-mega',
        num: -21,
        types: [ 'Rock', 'Poison' ],
        genderRatio: { male: 0.25, female: 0.25 },
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
        species: 'kerfluffle',
        num: -22,
        types: [ 'Fairy', 'Fighting' ],
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
        species: 'pajantom',
        num: -23,
        types: [ 'Dragon', 'Ghost' ],
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
        species: 'jumbao',
        num: -24,
        types: [ 'Grass', 'Fairy' ],
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
        species: 'caribolt',
        num: -25,
        types: [ 'Grass', 'Electric' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'smokomodo',
        num: -26,
        types: [ 'Fire', 'Ground' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'snaelstrom',
        num: -27,
        types: [ 'Water', 'Bug' ],
        genderRatio: { male: 0.875, female: 0.875 },
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
        species: 'equilibra',
        types: [ 'Steel', 'Ground' ],
        gender: 'N',
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
        species: 'syclar',
        num: -101,
        types: [ 'Ice', 'Bug' ],
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
        species: 'embirch',
        num: -102,
        types: [ 'Fire', 'Grass' ],
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
        species: 'flarelm',
        num: -103,
        types: [ 'Fire', 'Grass' ],
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
        species: 'breezi',
        num: -104,
        types: [ 'Poison', 'Flying' ],
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
        species: 'scratchet',
        num: -105,
        types: [ 'Normal', 'Fighting' ],
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
        species: 'necturine',
        num: -106,
        types: [ 'Grass', 'Ghost' ],
        gender: 'F',
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
        species: 'cupra',
        num: -107,
        types: [ 'Bug', 'Psychic' ],
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
        species: 'argalis',
        num: -108,
        types: [ 'Bug', 'Psychic' ],
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
        species: 'brattler',
        num: -109,
        types: [ 'Dark', 'Grass' ],
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
        species: 'cawdet',
        num: -110,
        types: [ 'Steel', 'Flying' ],
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
        species: 'volkritter',
        num: -111,
        types: [ 'Water', 'Fire' ],
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
        species: 'snugglow',
        num: -112,
        types: [ 'Electric', 'Poison' ],
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
        species: 'floatoy',
        num: -113,
        types: [ 'Water' ],
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
        species: 'caimanoe',
        num: -114,
        types: [ 'Water', 'Steel' ],
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
        species: 'pluffle',
        num: -115,
        types: [ 'Fairy' ],
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
        species: 'rebble',
        num: -116,
        types: [ 'Rock' ],
        gender: 'N',
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
        species: 'tactite',
        num: -117,
        types: [ 'Rock' ],
        gender: 'N',
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
        species: 'privatyke',
        num: -118,
        types: [ 'Water', 'Fighting' ],
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
        species: 'voodoll',
        num: -119,
        types: [ 'Normal', 'Dark' ],
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
        species: 'mumbao',
        num: -120,
        types: [ 'Grass', 'Fairy' ],
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
        species: 'fawnifer',
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
        species: 'electrelk',
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
        species: 'smogecko',
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
        species: 'smoguana',
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
        species: 'swirlpool',
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
        species: 'coribalis',
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
      'pokestar smeargle',
      {
        species: 'pokestar smeargle',
        num: -5000,
        types: [ 'Normal' ],
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
      'pokestar ufo',
      {
        species: 'pokestar ufo',
        num: -5001,
        types: [ 'Flying', 'Electric' ],
        gender: 'N',
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
      'pokestar ufo-2',
      {
        species: 'pokestar ufo-2',
        num: -5001,
        types: [ 'Psychic', 'Electric' ],
        gender: 'N',
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
      'pokestar brycen-man',
      {
        species: 'pokestar brycen-man',
        num: -5002,
        types: [ 'Dark', 'Psychic' ],
        gender: 'M',
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
      'pokestar mt',
      {
        species: 'pokestar mt',
        num: -5003,
        types: [ 'Steel' ],
        gender: 'N',
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
      'pokestar mt2',
      {
        species: 'pokestar mt2',
        num: -5004,
        types: [ 'Steel', 'Electric' ],
        gender: 'N',
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
      'pokestar transport',
      {
        species: 'pokestar transport',
        num: -5005,
        types: [ 'Steel' ],
        gender: 'N',
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
      'pokestar giant',
      {
        species: 'pokestar giant',
        num: -5006,
        types: [ 'Normal' ],
        gender: 'F',
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
      'pokestar humanoid',
      {
        species: 'pokestar humanoid',
        num: -5007,
        types: [ 'Normal' ],
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
      'pokestar monster',
      {
        species: 'pokestar monster',
        num: -5008,
        types: [ 'Dark' ],
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
      'pokestar f-00',
      {
        species: 'pokestar f-00',
        num: -5009,
        types: [ 'Steel', 'Normal' ],
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
      'pokestar f-002',
      {
        species: 'pokestar f-002',
        num: -5010,
        types: [ 'Steel', 'Normal' ],
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
      'pokestar spirit',
      {
        species: 'pokestar spirit',
        num: -5011,
        types: [ 'Dark', 'Ghost' ],
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
      'pokestar black door',
      {
        species: 'pokestar black door',
        num: -5012,
        types: [ 'Grass' ],
        gender: 'F',
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
      'pokestar white door',
      {
        species: 'pokestar white door',
        num: -5013,
        types: [ 'Fire' ],
        gender: 'M',
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
      'pokestar black belt',
      {
        species: 'pokestar black belt',
        num: -5014,
        types: [ 'Fighting' ],
        gender: 'M',
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
      'pokestar ufo-propu2',
      {
        species: 'pokestar ufo-propu2',
        num: -5001,
        types: [ 'Psychic', 'Electric' ],
        gender: 'N',
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