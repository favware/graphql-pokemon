import {
  getPokemonByNationalDexNumber,
  getPokemonSpecies,
  getPokemonSpeciesWithSprites,
  getPokemonWithFullData,
  getPokemonWithFullDataAndEvolutions
} from '#test-utils/queries/pokemon';
import { gCall } from '#test-utils/testUtils';

describe('getPokemon', () => {
  describe('Species only requests', () => {
    test('GIVEN a valid species THEN returns Pokémon', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonSpecies,
        variableValues: { pokemon: 'dragonite' }
      });

      expect(data.getPokemon.species).toEqual('dragonite');
    });
  });

  describe('Sprite only requests', () => {
    test('GIVEN CharizardMegaX THEN returns Species and Sprite', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonSpeciesWithSprites,
        variableValues: { pokemon: 'charizardmegax' }
      });

      expect(data.getPokemon).toEqual({
        species: 'charizard-mega-x',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/charizard-megax.gif',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/charizard-megax.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard-megax.gif',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/charizard-megax.gif'
      });
    });

    test('GIVEN CharizardMegaY THEN returns Species and Sprite', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonSpeciesWithSprites,
        variableValues: { pokemon: 'charizardmegay' }
      });

      expect(data.getPokemon).toEqual({
        species: 'charizard-mega-y',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/charizard-megay.gif',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/charizard-megay.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard-megay.gif',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/charizard-megay.gif'
      });
    });

    test("GIVEN Farfetch'd THEN returns Species and Sprite", async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonSpeciesWithSprites,
        variableValues: { pokemon: 'farfetchd' }
      });

      expect(data.getPokemon).toEqual({
        species: "farfetch'd",
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/farfetchd.gif',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/farfetchd.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/farfetchd.gif',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/farfetchd.gif'
      });
    });

    test("GIVEN Sirfetch'd THEN returns Species and Sprite", async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonSpeciesWithSprites,
        variableValues: { pokemon: 'sirfetchd' }
      });

      expect(data.getPokemon).toEqual({
        species: "sirfetch'd",
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/sirfetchd.gif',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/sirfetchd.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/sirfetchd.gif',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/sirfetchd.gif'
      });
    });
  });

  describe('Species only requests By National Dex Number', () => {
    test('GIVEN National Dex Number 1 THEN returns Bulbasaur', async () => {
      const { data } = await gCall<'getPokemonByDexNumber'>({
        source: getPokemonByNationalDexNumber,
        variableValues: { number: 1 }
      });

      expect(data.getPokemonByDexNumber.species).toEqual('bulbasaur');
    });

    test('GIVEN National Dex Number -60 THEN returns Chromera', async () => {
      const { data } = await gCall<'getPokemonByDexNumber'>({
        source: getPokemonByNationalDexNumber,
        variableValues: { number: -60 }
      });

      expect(data.getPokemonByDexNumber.species).toEqual('chromera');
    });

    test('GIVEN National Dex Number 905 THEN returns Enamorus', async () => {
      const { data } = await gCall<'getPokemonByDexNumber'>({
        source: getPokemonByNationalDexNumber,
        variableValues: { number: 905 }
      });

      expect(data.getPokemonByDexNumber.species).toEqual('enamorus');
    });
  });

  describe('Full data requests', () => {
    test('GIVEN request for Greninja THEN returns all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullData,
        variableValues: { pokemon: 'greninja' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: 'Torrent',
          hidden: 'Protean',
          second: null,
          special: 'Battle Bond'
        },
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/greninja.gif',
        baseForme: null,
        baseSpecies: null,
        baseStats: {
          attack: 95,
          defense: 67,
          hp: 72,
          specialattack: 103,
          specialdefense: 71,
          speed: 122
        },
        baseStatsTotal: 530,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/greninja_(Pokémon)',
        catchRate: {
          base: 45,
          percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
        },
        color: 'Blue',
        cosmeticFormes: null,
        eggGroups: ['Water 1'],
        evYields: {
          attack: 0,
          defense: 0,
          hp: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 3
        },
        evolutionLevel: '36',
        flavorTexts: [
          {
            flavor:
              "It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
            game: 'Alpha Sapphire'
          }
        ],
        forme: null,
        formeLetter: null,
        gender: { female: '12.5%', male: '87.5%' },
        height: 1.5,
        isEggObtainable: true,
        levellingRate: 'Medium Slow',
        maximumHatchTime: 5396,
        minimumHatchTime: 5140,
        num: 658,
        otherFormes: ['greninjaash'],
        serebiiPage: 'https://www.serebii.net/pokedex-sm/658.shtml',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/greninja.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/greninja.gif',
        smogonPage: 'https://www.smogon.com/dex/sm/pokemon/greninja',
        smogonTier: 'Past',
        species: 'greninja',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/greninja.gif',
        types: ['Water', 'Dark']
      });
    });

    test('GIVEN missingno THEN returns all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullData,
        variableValues: { pokemon: 'missingno' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: 'Breaking Your Game',
          hidden: null,
          second: null,
          special: null
        },
        backSprite: 'https://play.pokemonshowdown.com/sprites/afd-back/missingno.png',
        baseForme: null,
        baseSpecies: null,
        baseStats: {
          attack: 136,
          defense: 0,
          hp: 33,
          specialattack: 6,
          specialdefense: 6,
          speed: 29
        },
        baseStatsTotal: 210,
        bulbapediaPage: '',
        catchRate: {
          base: 0,
          percentageWithOrdinaryPokeballAtFullHealth: '0%'
        },
        color: 'Gray',
        cosmeticFormes: null,
        eggGroups: ['Undiscovered'],
        evYields: {
          attack: 0,
          defense: 0,
          hp: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 0
        },
        evolutionLevel: null,
        flavorTexts: [
          {
            flavor: 'A dual-type Bird/Normal Glitch Pokémon exclusive to the first generation',
            game: 'Red'
          }
        ],
        forme: null,
        formeLetter: null,
        gender: {
          female: '50%',
          male: '50%'
        },
        height: 3,
        isEggObtainable: false,
        levellingRate: null,
        maximumHatchTime: null,
        minimumHatchTime: null,
        num: 0,
        otherFormes: null,
        serebiiPage: '',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/afd-back-shiny/missingno.png',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/afd-shiny/missingno.png',
        smogonPage: '',
        smogonTier: 'Custom',
        species: 'missingno.',
        sprite: 'https://play.pokemonshowdown.com/sprites/afd/missingno.png',
        types: ['Bird', 'Normal']
      });
    });

    test('GIVEN Hisuian forme Typhlosion THEN returns all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullData,
        variableValues: { pokemon: 'typhlosionhisui' }
      });

      expect(data.getPokemon).toEqual({
        abilities: { first: 'Blaze', second: null, hidden: 'Flash Fire', special: null },
        eggGroups: ['Field'],
        evYields: {
          hp: 0,
          attack: 0,
          defense: 0,
          specialattack: 3,
          specialdefense: 0,
          speed: 0
        },
        evolutionLevel: '36',
        flavorTexts: [
          {
            flavor:
              'Said to purify lost, forsaken souls with its flames and guide them to the afterlife. I believe its form has been influenced by the energy of the [[Mount Coron',
            game: 'Legends Arceus'
          }
        ],
        forme: 'Hisui',
        formeLetter: 'H',
        gender: { female: '12.5%', male: '87.5%' },
        height: 1.6,
        isEggObtainable: true,
        backSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/typhlosion-hisui.png',
        levellingRate: 'Medium Slow',
        maximumHatchTime: 5396,
        minimumHatchTime: 5140,
        num: 157,
        otherFormes: ['typhlosion'],
        serebiiPage: 'https://www.serebii.net/pokedex-swsh/typhlosion',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/typhlosion-hisui.png',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/typhlosion-hisui.png',
        smogonPage: 'https://www.smogon.com/dex/ss/pokemon/typhlosion-hisui',
        baseForme: null,
        smogonTier: 'Future',
        species: 'typhlosion-hisui',
        sprite: 'https://play.pokemonshowdown.com/sprites/gen5/typhlosion-hisui.png',
        types: ['Fire', 'Ghost'],
        baseSpecies: 'Typhlosion',
        baseStats: {
          hp: 73,
          attack: 84,
          defense: 78,
          specialattack: 119,
          specialdefense: 85,
          speed: 95
        },
        baseStatsTotal: 534,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pokémon)',
        catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
        color: 'Yellow',
        cosmeticFormes: null
      });
    });
  });

  describe('Full data requests with evolutions', () => {
    test('GIVEN valid Pokémon request THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'eevee' }
      });

      expect(data.getPokemon).toEqual({
        evolutions: [
          {
            abilities: {
              first: 'Water Absorb',
              second: null,
              hidden: 'Hydration',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 2,
              attack: 0,
              defense: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: 'use Water Stone',
            flavorTexts: [
              {
                flavor:
                  'Tests show that its cells closely resemble water molecules, which perhaps explains its ability to conceal its form while submerged. I believe the origins of mermaid folklore lie with this Pokémon.',
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 1,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/vaporeon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 134,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/vaporeon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/vaporeon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/vaporeon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/vaporeon',
            baseForme: null,
            smogonTier: 'NU',
            species: 'vaporeon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/vaporeon.gif',
            types: ['Water'],
            baseSpecies: null,
            baseStats: {
              hp: 130,
              attack: 65,
              defense: 60,
              specialattack: 110,
              specialdefense: 95,
              speed: 65
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/vaporeon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Blue',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Volt Absorb',
              second: null,
              hidden: 'Quick Feet',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 2
            },
            evolutionLevel: 'use Thunder Stone',
            flavorTexts: [
              {
                flavor:
                  'Bristles its fur into sharp, needlelike points when enraged. One can hear electricity crackle in its breath when it exhales.',
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 0.8,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/jolteon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 135,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/jolteon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/jolteon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/jolteon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/jolteon',
            baseForme: null,
            smogonTier: 'PU',
            species: 'jolteon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/jolteon.gif',
            types: ['Electric'],
            baseSpecies: null,
            baseStats: {
              hp: 65,
              attack: 65,
              defense: 60,
              specialattack: 110,
              specialdefense: 95,
              speed: 130
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/jolteon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Yellow',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Flash Fire',
              second: null,
              hidden: 'Guts',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 2,
              defense: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: 'use Fire Stone',
            flavorTexts: [
              {
                flavor:
                  'Flames burn within a saclike organ inside this Pokémon. When Flareon inhales, these flames grow in intensity, reaching a mighty 3,000 degrees Fahrenheit.',
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 0.9,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/flareon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 136,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/flareon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/flareon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/flareon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/flareon',
            baseForme: null,
            smogonTier: '(PU)',
            species: 'flareon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/flareon.gif',
            types: ['Fire'],
            baseSpecies: null,
            baseStats: {
              hp: 65,
              attack: 130,
              defense: 60,
              specialattack: 95,
              specialdefense: 110,
              speed: 65
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/flareon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Red',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Synchronize',
              second: null,
              hidden: 'Magic Bounce',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 0,
              specialattack: 2,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: 'Level up during Daytime with happiness of at least 220',
            flavorTexts: [
              {
                flavor:
                  "Wields an arcane power with which it can predict the weather and even people's thoughts. When bathed in sunshine, the scarlet orb on its brow glows and builds energy.",
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 0.9,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/espeon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 196,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/espeon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/espeon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/espeon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/espeon',
            baseForme: null,
            smogonTier: 'PUBL',
            species: 'espeon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/espeon.gif',
            types: ['Psychic'],
            baseSpecies: null,
            baseStats: {
              hp: 65,
              attack: 65,
              defense: 60,
              specialattack: 130,
              specialdefense: 95,
              speed: 110
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/espeon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Purple',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Synchronize',
              second: null,
              hidden: 'Inner Focus',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 0,
              specialattack: 0,
              specialdefense: 2,
              speed: 0
            },
            evolutionLevel: 'Level up during Nighttime with happiness of at least 220',
            flavorTexts: [
              {
                flavor:
                  'It is most active in the wee hours of the night, when moonlight bathes the land. Its large eyes can pierce the darkness and perceive prey with absolute clarity.',
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 1,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/umbreon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 197,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/umbreon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/umbreon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/umbreon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/umbreon',
            baseForme: null,
            smogonTier: 'RU',
            species: 'umbreon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/umbreon.gif',
            types: ['Dark'],
            baseSpecies: null,
            baseStats: {
              hp: 95,
              attack: 65,
              defense: 110,
              specialattack: 60,
              specialdefense: 130,
              speed: 65
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/umbreon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Black',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Leaf Guard',
              second: null,
              hidden: 'Chlorophyll',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 2,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: 'use Leaf Stone',
            flavorTexts: [
              {
                flavor:
                  "Cells similar to those of plants have been found in its fur. Its hard tail can fell a large tree with one stroke, and the tail's sharpness exceeds even that of a sword crafted by a master.",
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 1,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/leafeon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 470,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/leafeon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/leafeon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/leafeon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/leafeon',
            baseForme: null,
            smogonTier: '(PU)',
            species: 'leafeon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/leafeon.gif',
            types: ['Grass'],
            baseSpecies: null,
            baseStats: {
              hp: 65,
              attack: 110,
              defense: 130,
              specialattack: 60,
              specialdefense: 65,
              speed: 95
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/leafeon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Green',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Snow Cloak',
              second: null,
              hidden: 'Ice Body',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 0,
              specialattack: 2,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: 'use Ice Stone',
            flavorTexts: [
              {
                flavor:
                  'Glaceon is able to lower its body temperature very quickly. It freezes the atmosphere, creating diamond dust that glitters like gems while it flutters and dances around.',
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 0.8,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/glaceon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 471,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/glaceon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/glaceon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/glaceon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/glaceon',
            baseForme: null,
            smogonTier: '(PU)',
            species: 'glaceon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/glaceon.gif',
            types: ['Ice'],
            baseSpecies: null,
            baseStats: {
              hp: 65,
              attack: 60,
              defense: 110,
              specialattack: 130,
              specialdefense: 95,
              speed: 65
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/glaceon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Blue',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          },
          {
            abilities: {
              first: 'Cute Charm',
              second: null,
              hidden: 'Pixilate',
              special: null
            },
            eggGroups: ['Field'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 0,
              specialattack: 0,
              specialdefense: 2,
              speed: 0
            },
            evolutionLevel: 'Level up while having high Affection and knowing a Fairy type move',
            flavorTexts: [
              {
                flavor:
                  'It emits a soothing aura from its ribbon-shaped organs. It wraps these appendages around quarrelers to instantly restore calm to the situation.',
                game: 'Legends Arceus'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '12.5%', male: '87.5%' },
            height: 1,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/sylveon.gif',
            levellingRate: 'Medium Fast',
            maximumHatchTime: 9251,
            minimumHatchTime: 8995,
            num: 700,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/sylveon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/sylveon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/sylveon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/sylveon',
            baseForme: null,
            smogonTier: 'NU',
            species: 'sylveon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/sylveon.gif',
            types: ['Fairy'],
            baseSpecies: null,
            baseStats: {
              hp: 95,
              attack: 65,
              defense: 65,
              specialattack: 110,
              specialdefense: 130,
              speed: 60
            },
            baseStatsTotal: 525,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/sylveon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'Pink',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: null
          }
        ],
        preevolutions: null,
        abilities: {
          first: 'Run Away',
          second: 'Adaptability',
          hidden: 'Anticipation',
          special: null
        },
        eggGroups: ['Field'],
        evYields: {
          hp: 0,
          attack: 0,
          defense: 0,
          specialattack: 0,
          specialdefense: 1,
          speed: 0
        },
        evolutionLevel: null,
        flavorTexts: [
          {
            flavor:
              "Harbors the potential to evolve into manifold forms. Within Eevee lies the key to the mysteries of Pokémon evolution—I'm certain of it.",
            game: 'Legends Arceus'
          }
        ],
        forme: null,
        formeLetter: null,
        gender: { female: '12.5%', male: '87.5%' },
        height: 0.3,
        isEggObtainable: true,
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/eevee.gif',
        levellingRate: 'Medium Fast',
        maximumHatchTime: 9251,
        minimumHatchTime: 8995,
        num: 133,
        otherFormes: ['eeveestarter', 'eeveegmax'],
        serebiiPage: 'https://www.serebii.net/pokedex-swsh/eevee',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/eevee.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/eevee.gif',
        smogonPage: 'https://www.smogon.com/dex/ss/pokemon/eevee',
        baseForme: null,
        smogonTier: 'LC',
        species: 'eevee',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/eevee.gif',
        types: ['Normal'],
        baseSpecies: null,
        baseStats: {
          hp: 55,
          attack: 55,
          defense: 50,
          specialattack: 45,
          specialdefense: 65,
          speed: 55
        },
        baseStatsTotal: 325,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/eevee_(Pokémon)',
        catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
        color: 'Brown',
        cosmeticFormes: null
      });
    });

    test('GIVEN cap Pokémon THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'syclar' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: 'Compound Eyes',
          hidden: 'Ice Body',
          second: 'Snow Cloak',
          special: null
        },
        backSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/syclar.png',
        baseForme: null,
        baseSpecies: null,
        baseStats: {
          attack: 76,
          defense: 45,
          hp: 40,
          specialattack: 74,
          specialdefense: 39,
          speed: 91
        },
        baseStatsTotal: 365,
        bulbapediaPage: '',
        catchRate: {
          base: 0,
          percentageWithOrdinaryPokeballAtFullHealth: '0%'
        },
        color: 'Blue',
        cosmeticFormes: null,
        eggGroups: ['Bug'],
        evYields: {
          attack: 0,
          defense: 0,
          hp: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 0
        },
        evolutionLevel: null,
        evolutions: [
          {
            abilities: {
              first: 'Compound Eyes',
              hidden: 'Ice Body',
              second: 'Mountaineer',
              special: null
            },
            backSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back/syclant.png',
            baseForme: null,
            baseSpecies: null,
            baseStats: {
              attack: 116,
              defense: 70,
              hp: 70,
              specialattack: 114,
              specialdefense: 64,
              speed: 121
            },
            baseStatsTotal: 555,
            bulbapediaPage: '',
            catchRate: {
              base: 0,
              percentageWithOrdinaryPokeballAtFullHealth: '0%'
            },
            color: 'Blue',
            cosmeticFormes: null,
            eggGroups: ['Bug'],
            evYields: {
              attack: 0,
              defense: 0,
              hp: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: '30',
            evolutions: null,
            flavorTexts: [],
            forme: null,
            formeLetter: null,
            gender: {
              female: '50%',
              male: '50%'
            },
            height: 1.7,
            isEggObtainable: false,
            levellingRate: null,
            maximumHatchTime: null,
            minimumHatchTime: null,
            num: -2,
            otherFormes: null,
            preevolutions: null,
            serebiiPage: '',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/syclant.png',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/syclant.png',
            smogonPage: '',
            smogonTier: 'CAP',
            species: 'syclant',
            sprite: 'https://play.pokemonshowdown.com/sprites/gen5/syclant.png',
            types: ['Ice', 'Bug']
          }
        ],
        flavorTexts: [],
        forme: null,
        formeLetter: null,
        gender: {
          female: '50%',
          male: '50%'
        },
        height: 0.2,
        isEggObtainable: false,
        levellingRate: null,
        maximumHatchTime: null,
        minimumHatchTime: null,
        num: -1,
        otherFormes: null,
        preevolutions: null,
        serebiiPage: '',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/syclar.png',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/syclar.png',
        smogonPage: '',
        smogonTier: 'CAP',
        species: 'syclar',
        sprite: 'https://play.pokemonshowdown.com/sprites/gen5/syclar.png',
        types: ['Ice', 'Bug']
      });
    });

    test('GIVEN Pokémon with evolution form THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'rattataalola' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: 'Gluttony',
          hidden: 'Thick Fat',
          second: 'Hustle',
          special: null
        },
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/rattata-alola.gif',
        baseForme: null,
        baseSpecies: 'Rattata',
        baseStats: {
          attack: 56,
          defense: 35,
          hp: 30,
          specialattack: 25,
          specialdefense: 35,
          speed: 72
        },
        baseStatsTotal: 253,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pokémon)',
        catchRate: {
          base: 255,
          percentageWithOrdinaryPokeballAtFullHealth: '43.9%'
        },
        color: 'Black',
        cosmeticFormes: null,
        eggGroups: ['Field'],
        evYields: {
          attack: 0,
          defense: 0,
          hp: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 1
        },
        evolutionLevel: null,
        evolutions: [
          {
            abilities: {
              first: 'Gluttony',
              hidden: 'Thick Fat',
              second: 'Hustle',
              special: null
            },
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/raticate-alola.gif',
            baseForme: null,
            baseSpecies: 'Raticate',
            baseStats: {
              attack: 71,
              defense: 70,
              hp: 75,
              specialattack: 40,
              specialdefense: 80,
              speed: 77
            },
            baseStatsTotal: 413,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pokémon)',
            catchRate: {
              base: 127,
              percentageWithOrdinaryPokeballAtFullHealth: '26%'
            },
            color: 'Black',
            cosmeticFormes: null,
            eggGroups: ['Field'],
            evYields: {
              attack: 0,
              defense: 0,
              hp: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 2
            },
            evolutionLevel: '20',
            evolutions: null,
            flavorTexts: [
              {
                flavor: 'It makes its Rattata underlings gather food for it, dining solely on the most nutritious and delicious fare.',
                game: "Let's Go Eevee"
              }
            ],
            forme: 'Alola',
            formeLetter: 'A',
            gender: {
              female: '50%',
              male: '50%'
            },
            height: 0.7,
            isEggObtainable: true,
            levellingRate: 'Medium Fast',
            maximumHatchTime: 4111,
            minimumHatchTime: 3855,
            num: 20,
            otherFormes: ['raticate', 'raticatealolatotem'],
            preevolutions: null,
            serebiiPage: 'https://www.serebii.net/pokedex-sm/020.shtml',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/raticate-alola.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/raticate-alola.gif',
            smogonPage: 'https://www.smogon.com/dex/sm/pokemon/raticate-alola',
            smogonTier: 'Past',
            species: 'raticate-alola',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/raticate-alola.gif',
            types: ['Dark', 'Normal']
          }
        ],
        flavorTexts: [
          {
            flavor: 'Its whiskers provide it with a keen sense of smell, enabling it to pick up the scent of hidden food and locate it instantly.',
            game: "Let's Go Eevee"
          }
        ],
        forme: 'Alola',
        formeLetter: 'A',
        gender: {
          female: '50%',
          male: '50%'
        },
        height: 0.3,
        isEggObtainable: true,
        levellingRate: 'Medium Fast',
        maximumHatchTime: 4111,
        minimumHatchTime: 3855,
        num: 19,
        otherFormes: ['rattata'],
        preevolutions: null,
        serebiiPage: 'https://www.serebii.net/pokedex-sm/019.shtml',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/rattata-alola.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/rattata-alola.gif',
        smogonPage: 'https://www.smogon.com/dex/sm/pokemon/rattata-alola',
        smogonTier: 'Past',
        species: 'rattata-alola',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/rattata-alola.gif',
        types: ['Dark', 'Normal']
      });
    });

    test('GIVEN Pokémon with 1 evolution and 1 pre-evolution THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'dragonair' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: 'Shed Skin',
          hidden: 'Marvel Scale',
          second: null,
          special: null
        },
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/dragonair.gif',
        baseForme: null,
        baseSpecies: null,
        baseStats: {
          attack: 84,
          defense: 65,
          hp: 61,
          specialattack: 70,
          specialdefense: 70,
          speed: 70
        },
        baseStatsTotal: 420,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/dragonair_(Pokémon)',
        catchRate: {
          base: 45,
          percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
        },
        color: 'Blue',
        cosmeticFormes: null,
        eggGroups: ['Water 1', 'Dragon'],
        evYields: {
          attack: 2,
          defense: 0,
          hp: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 0
        },
        evolutionLevel: '30',
        evolutions: [
          {
            abilities: {
              first: 'Inner Focus',
              hidden: 'Multiscale',
              second: null,
              special: null
            },
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/dragonite.gif',
            baseForme: null,
            baseSpecies: null,
            baseStats: {
              attack: 134,
              defense: 95,
              hp: 91,
              specialattack: 100,
              specialdefense: 100,
              speed: 80
            },
            baseStatsTotal: 600,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/dragonite_(Pokémon)',
            catchRate: {
              base: 45,
              percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
            },
            color: 'Brown',
            cosmeticFormes: null,
            eggGroups: ['Water 1', 'Dragon'],
            evYields: {
              attack: 3,
              defense: 0,
              hp: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: '55',
            evolutions: null,
            flavorTexts: [
              {
                flavor: 'This Pokémon is known as the Sea Incarnate. Figureheads that resemble Dragonite decorate the bows of many ships.',
                game: 'Shield'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: {
              female: '50%',
              male: '50%'
            },
            height: 2.2,
            isEggObtainable: true,
            levellingRate: 'Slow',
            maximumHatchTime: 10536,
            minimumHatchTime: 10280,
            num: 149,
            otherFormes: null,
            preevolutions: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/dragonite',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/dragonite.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/dragonite.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/dragonite',
            smogonTier: 'OU',
            species: 'dragonite',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/dragonite.gif',
            types: ['Dragon', 'Flying']
          }
        ],
        flavorTexts: [
          {
            flavor:
              'This Pokémon gathers power in the orbs on its tail and controls the weather. When enshrouded by an aura, Dragonair has a mystical appearance.',
            game: 'Shield'
          }
        ],
        forme: null,
        formeLetter: null,
        gender: {
          female: '50%',
          male: '50%'
        },
        height: 4,
        isEggObtainable: true,
        levellingRate: 'Slow',
        maximumHatchTime: 10536,
        minimumHatchTime: 10280,
        num: 148,
        otherFormes: null,
        preevolutions: [
          {
            abilities: {
              first: 'Shed Skin',
              hidden: 'Marvel Scale',
              second: null,
              special: null
            },
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/dratini.gif',
            baseForme: null,
            baseSpecies: null,
            baseStats: {
              attack: 64,
              defense: 45,
              hp: 41,
              specialattack: 50,
              specialdefense: 50,
              speed: 50
            },
            baseStatsTotal: 300,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/dratini_(Pokémon)',
            catchRate: {
              base: 45,
              percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
            },
            color: 'Blue',
            cosmeticFormes: null,
            eggGroups: ['Water 1', 'Dragon'],
            evYields: {
              attack: 1,
              defense: 0,
              hp: 0,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: null,
            evolutions: null,
            flavorTexts: [
              {
                flavor:
                  "This Pokémon was long considered to be no more than a myth. The small lump on a Dratini's forehead is actually a horn that's still coming in.",
                game: 'Shield'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: {
              female: '50%',
              male: '50%'
            },
            height: 1.8,
            isEggObtainable: true,
            levellingRate: 'Slow',
            maximumHatchTime: 10536,
            minimumHatchTime: 10280,
            num: 147,
            otherFormes: null,
            preevolutions: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/dratini',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/dratini.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/dratini.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/dratini',
            smogonTier: 'LC',
            species: 'dratini',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/dratini.gif',
            types: ['Dragon']
          }
        ],
        serebiiPage: 'https://www.serebii.net/pokedex-swsh/dragonair',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/dragonair.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/dragonair.gif',
        smogonPage: 'https://www.smogon.com/dex/ss/pokemon/dragonair',
        smogonTier: 'NFE',
        species: 'dragonair',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/dragonair.gif',
        types: ['Dragon']
      });
    });

    test('GIVEN Pokémon with 2 evolutions THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'beldum' }
      });

      expect(data.getPokemon).toEqual({
        evolutions: [
          {
            abilities: {
              first: 'Clear Body',
              second: null,
              hidden: 'Light Metal',
              special: null
            },
            eggGroups: ['Mineral'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 2,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: '20',
            flavorTexts: [
              {
                flavor: "It is formed by two Beldum joining together. Its steel body won't be scratched if it collides with a jet.",
                game: 'Shining Pearl'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '0%', male: '0%' },
            height: 1.2,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/metang.gif',
            levellingRate: 'Slow',
            maximumHatchTime: 10536,
            minimumHatchTime: 10280,
            num: 375,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/metang',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/metang.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/metang.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/metang',
            baseForme: null,
            smogonTier: 'NFE',
            species: 'metang',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/metang.gif',
            types: ['Steel', 'Psychic'],
            baseSpecies: null,
            baseStats: {
              hp: 60,
              attack: 75,
              defense: 100,
              specialattack: 55,
              specialdefense: 80,
              speed: 50
            },
            baseStatsTotal: 420,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/metang_(Pokémon)',
            catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
            color: 'Blue',
            cosmeticFormes: null,
            evolutions: [
              {
                abilities: {
                  first: 'Clear Body',
                  second: null,
                  hidden: 'Light Metal',
                  special: null
                },
                eggGroups: ['Mineral'],
                evYields: {
                  hp: 0,
                  attack: 0,
                  defense: 3,
                  specialattack: 0,
                  specialdefense: 0,
                  speed: 0
                },
                evolutionLevel: '45',
                flavorTexts: [
                  {
                    flavor: 'Metang combined to form it. With four brains, it has the intelligence of a supercomputer.',
                    game: 'Shining Pearl'
                  }
                ],
                forme: null,
                formeLetter: null,
                gender: { female: '0%', male: '0%' },
                height: 1.6,
                isEggObtainable: true,
                backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/metagross.gif',
                levellingRate: 'Slow',
                maximumHatchTime: 10536,
                minimumHatchTime: 10280,
                num: 376,
                otherFormes: ['metagrossmega'],
                serebiiPage: 'https://www.serebii.net/pokedex-swsh/metagross',
                shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/metagross.gif',
                shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/metagross.gif',
                smogonPage: 'https://www.smogon.com/dex/ss/pokemon/metagross',
                baseForme: null,
                smogonTier: 'RU',
                species: 'metagross',
                sprite: 'https://play.pokemonshowdown.com/sprites/ani/metagross.gif',
                types: ['Steel', 'Psychic'],
                baseSpecies: null,
                baseStats: {
                  hp: 80,
                  attack: 135,
                  defense: 130,
                  specialattack: 95,
                  specialdefense: 90,
                  speed: 70
                },
                baseStatsTotal: 600,
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/metagross_(Pokémon)',
                catchRate: {
                  base: 3,
                  percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
                },
                color: 'Blue',
                cosmeticFormes: null
              }
            ],
            preevolutions: null
          }
        ],
        preevolutions: null,
        abilities: {
          first: 'Clear Body',
          second: null,
          hidden: 'Light Metal',
          special: null
        },
        eggGroups: ['Mineral'],
        evYields: {
          hp: 0,
          attack: 0,
          defense: 1,
          specialattack: 0,
          specialdefense: 0,
          speed: 0
        },
        evolutionLevel: null,
        flavorTexts: [
          {
            flavor: 'They converse with one another by using magnetic pulses. In a swarm, they move in perfect unison.',
            game: 'Shining Pearl'
          }
        ],
        forme: null,
        formeLetter: null,
        gender: { female: '0%', male: '0%' },
        height: 0.6,
        isEggObtainable: true,
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/beldum.gif',
        levellingRate: 'Slow',
        maximumHatchTime: 10536,
        minimumHatchTime: 10280,
        num: 374,
        otherFormes: null,
        serebiiPage: 'https://www.serebii.net/pokedex-swsh/beldum',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/beldum.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/beldum.gif',
        smogonPage: 'https://www.smogon.com/dex/ss/pokemon/beldum',
        baseForme: null,
        smogonTier: 'LC',
        species: 'beldum',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/beldum.gif',
        types: ['Steel', 'Psychic'],
        baseSpecies: null,
        baseStats: {
          hp: 40,
          attack: 55,
          defense: 80,
          specialattack: 35,
          specialdefense: 60,
          speed: 30
        },
        baseStatsTotal: 300,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/beldum_(Pokémon)',
        catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
        color: 'Blue',
        cosmeticFormes: null
      });
    });

    test('GIVEN Pokémon with 2 pre-evolutions THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getPokemon'>({
        source: getPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'salamence' }
      });

      expect(data.getPokemon).toEqual({
        evolutions: null,
        preevolutions: [
          {
            abilities: {
              first: 'Rock Head',
              second: null,
              hidden: 'Overcoat',
              special: null
            },
            eggGroups: ['Dragon'],
            evYields: {
              hp: 0,
              attack: 0,
              defense: 2,
              specialattack: 0,
              specialdefense: 0,
              speed: 0
            },
            evolutionLevel: '30',
            flavorTexts: [
              {
                flavor: 'Within its rugged shell, its cells have begun changing. The shell peels off the instant the Pokémon evolves.',
                game: 'Shining Pearl'
              }
            ],
            forme: null,
            formeLetter: null,
            gender: { female: '50%', male: '50%' },
            height: 1.1,
            isEggObtainable: true,
            backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/shelgon.gif',
            levellingRate: 'Slow',
            maximumHatchTime: 10536,
            minimumHatchTime: 10280,
            num: 372,
            otherFormes: null,
            serebiiPage: 'https://www.serebii.net/pokedex-swsh/shelgon',
            shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/shelgon.gif',
            shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/shelgon.gif',
            smogonPage: 'https://www.smogon.com/dex/ss/pokemon/shelgon',
            baseForme: null,
            smogonTier: 'NFE',
            species: 'shelgon',
            sprite: 'https://play.pokemonshowdown.com/sprites/ani/shelgon.gif',
            types: ['Dragon'],
            baseSpecies: null,
            baseStats: {
              hp: 65,
              attack: 95,
              defense: 100,
              specialattack: 60,
              specialdefense: 50,
              speed: 50
            },
            baseStatsTotal: 420,
            bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/shelgon_(Pokémon)',
            catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
            color: 'White',
            cosmeticFormes: null,
            evolutions: null,
            preevolutions: [
              {
                abilities: {
                  first: 'Rock Head',
                  second: null,
                  hidden: 'Sheer Force',
                  special: null
                },
                eggGroups: ['Dragon'],
                evYields: {
                  hp: 0,
                  attack: 1,
                  defense: 0,
                  specialattack: 0,
                  specialdefense: 0,
                  speed: 0
                },
                evolutionLevel: null,
                flavorTexts: [
                  {
                    flavor: 'Dreaming of one day flying, it practices by leaping off cliffs every day.',
                    game: 'Shining Pearl'
                  }
                ],
                forme: null,
                formeLetter: null,
                gender: { female: '50%', male: '50%' },
                height: 0.6,
                isEggObtainable: true,
                backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/bagon.gif',
                levellingRate: 'Slow',
                maximumHatchTime: 10536,
                minimumHatchTime: 10280,
                num: 371,
                otherFormes: null,
                serebiiPage: 'https://www.serebii.net/pokedex-swsh/bagon',
                shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/bagon.gif',
                shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/bagon.gif',
                smogonPage: 'https://www.smogon.com/dex/ss/pokemon/bagon',
                baseForme: null,
                smogonTier: 'LC',
                species: 'bagon',
                sprite: 'https://play.pokemonshowdown.com/sprites/ani/bagon.gif',
                types: ['Dragon'],
                baseSpecies: null,
                baseStats: {
                  hp: 45,
                  attack: 75,
                  defense: 60,
                  specialattack: 40,
                  specialdefense: 30,
                  speed: 50
                },
                baseStatsTotal: 300,
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/bagon_(Pokémon)',
                catchRate: {
                  base: 45,
                  percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
                },
                color: 'Blue',
                cosmeticFormes: null
              }
            ]
          }
        ],
        abilities: { first: 'Intimidate', second: null, hidden: 'Moxie', special: null },
        eggGroups: ['Dragon'],
        evYields: {
          hp: 0,
          attack: 3,
          defense: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 0
        },
        evolutionLevel: '50',
        flavorTexts: [
          {
            flavor: 'As a result of its long-held dream of flying, its cellular structure changed, and wings grew out.',
            game: 'Shining Pearl'
          }
        ],
        forme: null,
        formeLetter: null,
        gender: { female: '50%', male: '50%' },
        height: 1.5,
        isEggObtainable: true,
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/salamence.gif',
        levellingRate: 'Slow',
        maximumHatchTime: 10536,
        minimumHatchTime: 10280,
        num: 373,
        otherFormes: ['salamencemega'],
        serebiiPage: 'https://www.serebii.net/pokedex-swsh/salamence',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/salamence.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/salamence.gif',
        smogonPage: 'https://www.smogon.com/dex/ss/pokemon/salamence',
        baseForme: null,
        smogonTier: 'UU',
        species: 'salamence',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/salamence.gif',
        types: ['Dragon', 'Flying'],
        baseSpecies: null,
        baseStats: {
          hp: 95,
          attack: 135,
          defense: 80,
          specialattack: 110,
          specialdefense: 80,
          speed: 100
        },
        baseStatsTotal: 600,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/salamence_(Pokémon)',
        catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
        color: 'Blue',
        cosmeticFormes: null
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid Pokémon THEN returns error', async () => {
      const data = await gCall({
        source: getPokemonSpecies,
        variableValues: { pokemon: 'totally_invalid_pokemon' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe(
        'Variable "$pokemon" got invalid value "totally_invalid_pokemon"; Value "totally_invalid_pokemon" does not exist in "PokemonEnum" enum.'
      );
    });
  });
});
