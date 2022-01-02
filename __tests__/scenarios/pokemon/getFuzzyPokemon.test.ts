import { getFuzzyPokemonSpecies, getFuzzyPokemonWithFullData, getFuzzyPokemonWithFullDataAndEvolutions } from '#test-utils/queries/pokemon';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyPokemon', () => {
  describe('Species only requests', () => {
    test('GIVEN a valid species THEN returns Pokémon', async () => {
      const { data } = await gCall<'getFuzzyPokemon'>({
        source: getFuzzyPokemonSpecies,
        variableValues: { pokemon: 'dragonite' }
      });

      expect(data.getFuzzyPokemon).toEqual([{ species: 'dragonite' }]);
    });

    describe('GIVEN a Pokémon with a forme prefix and a space', () => {
      test('GIVEN a mega-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'mega salamence' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'salamence-mega' }]);
      });

      test('GIVEN a gigantamax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'gigantamax pikachu' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'pikachu-gmax' }]);
      });

      test('GIVEN a gmax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'gmax meowth' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'meowth-gmax' }]);
      });

      test('GIVEN a alola-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'alola marowak' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'marowak-alola' }]);
      });

      test('GIVEN a alolan-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'alolan vulpix' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'vulpix-alola' }]);
      });

      test('GIVEN a galar-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'galar ponyta' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'ponyta-galar' }]);
      });

      test('GIVEN a galarian-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'galarian moltres' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'moltres-galar' }]);
      });
    });

    describe('GIVEN a Pokémon with a forme prefix WITHOUT a space', () => {
      test('GIVEN a mega-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'megabeedirll' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'beedrill-mega' }]);
      });

      test('GIVEN a gigantamax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'gigantamaxvenusaur' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'venusaur-gmax' }]);
      });

      test('GIVEN a gmax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'gmaxlapras' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'lapras-gmax' }]);
      });

      test('GIVEN a alola-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'alolaexeggutor' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'exeggutor-alola' }]);
      });

      test('GIVEN a alolan-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'alolangrimer' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'grimer-alola' }]);
      });

      test('GIVEN a galar-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'galardarumaka' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'darumaka-galar' }]);
      });

      test('GIVEN a galarian-prefixed query THEN returns Pokémon', async () => {
        const { data } = await gCall<'getFuzzyPokemon'>({
          source: getFuzzyPokemonSpecies,
          variableValues: { pokemon: 'galarianzigzagoon' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'zigzagoon-galar' }]);
      });
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid Pokémon request THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getFuzzyPokemon'>({
        source: getFuzzyPokemonWithFullData,
        variableValues: { pokemon: 'greninja' }
      });

      expect(data.getFuzzyPokemon).toEqual([
        {
          abilities: { first: 'Torrent', second: null, hidden: 'Protean', special: 'Battle Bond' },
          eggGroups: ['Water 1'],
          evYields: { hp: 0, attack: 0, defense: 0, specialattack: 0, specialdefense: 0, speed: 3 },
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
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/greninja.gif',
          levellingRate: 'Medium Slow',
          maximumHatchTime: 5396,
          minimumHatchTime: 5140,
          num: 658,
          otherFormes: ['greninjaash'],
          serebiiPage: 'https://www.serebii.net/pokedex-sm/658.shtml',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/greninja.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/greninja.gif',
          smogonPage: 'https://www.smogon.com/dex/sm/pokemon/greninja',
          baseForme: null,
          smogonTier: 'Past',
          species: 'greninja',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/greninja.gif',
          types: ['Water', 'Dark'],
          baseSpecies: null,
          baseStats: { hp: 72, attack: 95, defense: 67, specialattack: 103, specialdefense: 71, speed: 122 },
          baseStatsTotal: 530,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/greninja_(Pokémon)',
          catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
          color: 'Blue',
          cosmeticFormes: null
        }
      ]);
    });
  });

  describe('Full data requests with evolutions', () => {
    test('GIVEN valid Pokémon request THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getFuzzyPokemon'>({
        source: getFuzzyPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'eevee' }
      });

      expect(data.getFuzzyPokemon).toEqual([
        {
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
                  flavor: "Its body's cellular structure is similar to the molecular composition of water. It can melt invisibly in water.",
                  game: 'Shield'
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
              cosmeticFormes: null
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
                  flavor: 'It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.',
                  game: 'Shield'
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
              cosmeticFormes: null
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
                  flavor: 'It stores some of the air it inhales in its internal flame pouch, which heats it to over 3,000 degrees Fahrenheit.',
                  game: 'Shield'
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
              cosmeticFormes: null
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
                  flavor: 'It unleashes psychic power from the orb on its forehead. When its power is exhausted, the orb grows dull and dark.',
                  game: 'Shield'
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
              smogonTier: 'PU',
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
              cosmeticFormes: null
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
                  flavor: 'On the night of a full moon, or when it gets excited, the ring patterns on its body glow yellow.',
                  game: 'Shield'
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
              cosmeticFormes: null
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
                  flavor: "This Pokémon's tail is blade sharp, with a fantastic cutting edge that can slice right though large trees.",
                  game: 'Shield'
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
              cosmeticFormes: null
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
                  flavor: 'The coldness emanating from Glaceon causes powdery snow to form, making it quite a popular Pokémon at ski resorts.',
                  game: 'Shield'
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
              cosmeticFormes: null
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
                  flavor: "There's a Galarian fairy tale that describes a beautiful Sylveon vanquishing a dreadful dragon Pokémon.",
                  game: 'Shield'
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
              cosmeticFormes: null
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
              flavor: 'Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.',
              game: 'Shield'
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
        }
      ]);
    });

    test('GIVEN single letter Pokémon THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getFuzzyPokemon'>({
        source: getFuzzyPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'e', take: 3, takeFlavorTexts: 3, reverseFlavorTexts: false }
      });

      expect(data.getFuzzyPokemon).toEqual([
        {
          evolutions: [
            {
              abilities: { first: 'Flower Veil', second: null, hidden: 'Symbiosis', special: null },
              eggGroups: ['Fairy'],
              evYields: { hp: 0, attack: 0, defense: 0, specialattack: 0, specialdefense: 2, speed: 0 },
              evolutionLevel: '19',
              flavorTexts: [
                {
                  flavor:
                    'It flutters around fields of flowers and cares for flowers that are starting to wilt. It draws out the hidden power of flowers to battle.',
                  game: 'X'
                },
                { flavor: 'When the flowers of a well-tended flower bed bloom, it appears and celebrates with an elegant dance.', game: 'Y' },
                {
                  flavor:
                    'It flutters around fields of flowers and cares for flowers that are starting to wilt. It draws out the hidden power of flowers to battle.',
                  game: 'Omega Ruby'
                }
              ],
              forme: null,
              formeLetter: null,
              gender: { female: '100%', male: '0%' },
              height: 0.2,
              isEggObtainable: true,
              backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/floette.gif',
              levellingRate: 'Medium Fast',
              maximumHatchTime: 5396,
              minimumHatchTime: 5140,
              num: 670,
              otherFormes: null,
              serebiiPage: 'https://www.serebii.net/pokedex-sm/670.shtml',
              shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/floette.gif',
              shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/floette.gif',
              smogonPage: 'https://www.smogon.com/dex/sm/pokemon/floette',
              baseForme: 'Red',
              smogonTier: 'Past',
              species: 'floette',
              sprite: 'https://play.pokemonshowdown.com/sprites/ani/floette.gif',
              types: ['Fairy'],
              baseSpecies: null,
              baseStats: { hp: 54, attack: 45, defense: 47, specialattack: 75, specialdefense: 98, speed: 52 },
              baseStatsTotal: 371,
              bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/floette_(Pokémon)',
              catchRate: { base: 120, percentageWithOrdinaryPokeballAtFullHealth: '24.9%' },
              color: 'White',
              cosmeticFormes: ['Floette-Blue', 'Floette-Orange', 'Floette-White', 'Floette-Yellow']
            }
          ],
          preevolutions: null,
          abilities: { first: 'Flower Veil', second: null, hidden: 'Symbiosis', special: null },
          eggGroups: ['Fairy'],
          evYields: { hp: 0, attack: 0, defense: 0, specialattack: 0, specialdefense: 1, speed: 0 },
          evolutionLevel: null,
          flavorTexts: [
            {
              flavor: 'It draws out and controls the hidden power of flowers. The flower Flabébé holds is most likely part of its body.',
              game: 'X'
            },
            {
              flavor:
                "When it finds a flower it likes, it dwells on that flower its whole life long. It floats in the wind's embrace with an untroubled heart.",
              game: 'Y'
            },
            {
              flavor: 'It draws out and controls the hidden power of flowers. The flower Flabébé holds is most likely part of its body.',
              game: 'Omega Ruby'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: { female: '100%', male: '0%' },
          height: 0.1,
          isEggObtainable: true,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/flabebe.gif',
          levellingRate: 'Medium Fast',
          maximumHatchTime: 5396,
          minimumHatchTime: 5140,
          num: 669,
          otherFormes: null,
          serebiiPage: 'https://www.serebii.net/pokedex-sm/669.shtml',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/flabebe.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/flabebe.gif',
          smogonPage: 'https://www.smogon.com/dex/sm/pokemon/flabebe',
          baseForme: 'Red',
          smogonTier: 'Past',
          species: 'flabebe',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/flabebe.gif',
          types: ['Fairy'],
          baseSpecies: null,
          baseStats: { hp: 44, attack: 38, defense: 39, specialattack: 61, specialdefense: 79, speed: 42 },
          baseStatsTotal: 303,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Flabébé_(Pokémon)',
          catchRate: { base: 225, percentageWithOrdinaryPokeballAtFullHealth: '39.9%' },
          color: 'White',
          cosmeticFormes: ['Flabébé-Blue', 'Flabébé-Orange', 'Flabébé-White', 'Flabébé-Yellow']
        },
        {
          evolutions: null,
          preevolutions: null,
          abilities: { first: 'Prism Armor', second: null, hidden: null, special: null },
          eggGroups: ['Undiscovered'],
          evYields: { hp: 0, attack: 3, defense: 0, specialattack: 0, specialdefense: 0, speed: 0 },
          evolutionLevel: null,
          flavorTexts: [
            {
              flavor:
                'This is its form while it is devouring the light of Solgaleo. It pounces on foes and then slashes them with the claws on its four limbs and back.',
              game: 'Ultra Sun'
            },
            {
              flavor: "This is Necrozma's form while it's absorbing the power of Solgaleo, making it extremely ferocious and impossible to control.",
              game: 'Ultra Moon'
            },
            {
              flavor:
                "When it dominates Solgaleo, it takes on this form. It's a vicious Pokémon, mangling prey with its many claws, including those on its back.",
              game: 'Sword'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: { female: '0%', male: '0%' },
          height: 3.8,
          isEggObtainable: false,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/necrozma-dusk-mane.gif',
          levellingRate: 'Slow',
          maximumHatchTime: 31096,
          minimumHatchTime: 30840,
          num: 800,
          otherFormes: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/necrozma',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/necrozma-dusk-mane.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/necrozma-dusk-mane.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/necrozma-dusk-mane',
          baseForme: null,
          smogonTier: 'Uber',
          species: 'necrozma-dusk-mane',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/necrozma-dusk-mane.gif',
          types: ['Psychic', 'Steel'],
          baseSpecies: 'Necrozma',
          baseStats: { hp: 97, attack: 157, defense: 127, specialattack: 113, specialdefense: 109, speed: 77 },
          baseStatsTotal: 680,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pokémon)',
          catchRate: { base: 255, percentageWithOrdinaryPokeballAtFullHealth: '43.9%' },
          color: 'Yellow',
          cosmeticFormes: null
        },
        {
          evolutions: null,
          preevolutions: null,
          abilities: { first: 'Prism Armor', second: null, hidden: null, special: null },
          eggGroups: ['Undiscovered'],
          evYields: { hp: 0, attack: 0, defense: 0, specialattack: 3, specialdefense: 0, speed: 0 },
          evolutionLevel: null,
          flavorTexts: [
            {
              flavor: 'Lunala no longer has a will of its own. Now under the control of Necrozma, it continuously expels all of its energy.',
              game: 'Ultra Sun'
            },
            {
              flavor:
                "This is its form while it's devouring the light of Lunala. It grasps foes in its giant claws and rips them apart with brute force.",
              game: 'Ultra Moon'
            },
            {
              flavor: 'Necrozma has subjugated Lunala entirely, forcing the unfortunate Pokémon to emit its light energy for Necrozma to consume.',
              game: 'Sword'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: { female: '0%', male: '0%' },
          height: 4.2,
          isEggObtainable: false,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/necrozma-dawn-wings.gif',
          levellingRate: 'Slow',
          maximumHatchTime: 31096,
          minimumHatchTime: 30840,
          num: 800,
          otherFormes: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/necrozma',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/necrozma-dawn-wings.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/necrozma-dawn-wings.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/necrozma-dawn-wings',
          baseForme: null,
          smogonTier: 'Uber',
          species: 'necrozma-dawn-wings',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/necrozma-dawn-wings.gif',
          types: ['Psychic', 'Ghost'],
          baseSpecies: 'Necrozma',
          baseStats: { hp: 97, attack: 113, defense: 109, specialattack: 157, specialdefense: 127, speed: 77 },
          baseStatsTotal: 680,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Necrozma_(Pokémon)',
          catchRate: { base: 255, percentageWithOrdinaryPokeballAtFullHealth: '43.9%' },
          color: 'Blue',
          cosmeticFormes: null
        }
      ]);
    });

    test('GIVEN single letter Pokémon WITH reverse:true THEN returns Pokémon WITH all data', async () => {
      const { data } = await gCall<'getFuzzyPokemon'>({
        source: getFuzzyPokemonWithFullDataAndEvolutions,
        variableValues: { pokemon: 'a', take: 3, reverse: true, takeFlavorTexts: 3, reverseFlavorTexts: false }
      });

      expect(data.getFuzzyPokemon).toEqual([
        {
          abilities: {
            first: 'Punk Rock',
            hidden: 'Technician',
            second: 'Minus',
            special: null
          },
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/toxtricity-low-key-gmax.gif',
          baseForme: null,
          baseSpecies: 'Toxtricity-Low-Key',
          baseStats: {
            attack: 98,
            defense: 70,
            hp: 75,
            specialattack: 114,
            specialdefense: 70,
            speed: 75
          },
          baseStatsTotal: 502,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Toxtricity-Low-Key_(Pokémon)',
          catchRate: {
            base: 45,
            percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
          },
          color: 'Purple',
          cosmeticFormes: null,
          eggGroups: ['Human-Like'],
          evYields: {
            attack: 0,
            defense: 0,
            hp: 0,
            specialattack: 2,
            specialdefense: 0,
            speed: 0
          },
          evolutionLevel: null,
          evolutions: null,
          flavorTexts: [
            {
              flavor:
                "When this Pokémon sounds as if it's strumming a guitar, it's actually clawing at the protrusions on its chest to generate electricity.",
              game: 'Sword'
            },
            {
              flavor: 'This short-tempered and aggressive Pokémon chugs stagnant water to absorb any toxins it might contain.',
              game: 'Shield'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: {
            female: '50%',
            male: '50%'
          },
          height: 5,
          isEggObtainable: true,
          levellingRate: 'Medium Slow',
          maximumHatchTime: 6681,
          minimumHatchTime: 6425,
          num: 849,
          otherFormes: null,
          preevolutions: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/toxtricity-low-key',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/toxtricity-low-key-gmax.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/toxtricity-low-key-gmax.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/toxtricity-low-key-gmax',
          smogonTier: 'Gigantamax',
          species: 'toxtricity-low-key-gmax',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/toxtricity-low-key-gmax.gif',
          types: ['Electric', 'Poison']
        },
        {
          abilities: {
            first: 'Vital Spirit',
            hidden: 'Ice Body',
            second: 'Screen Cleaner',
            special: null
          },
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/Mr. Mime-Galar.gif',
          baseForme: null,
          baseSpecies: 'Mr. Mime',
          baseStats: {
            attack: 65,
            defense: 65,
            hp: 50,
            specialattack: 90,
            specialdefense: 90,
            speed: 100
          },
          baseStatsTotal: 460,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Mr. Mime_(Pokémon)',
          catchRate: {
            base: 45,
            percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
          },
          color: 'White',
          cosmeticFormes: null,
          eggGroups: ['Human-Like'],
          evYields: {
            attack: 0,
            defense: 0,
            hp: 0,
            specialattack: 0,
            specialdefense: 2,
            speed: 0
          },
          evolutionLevel: null,
          evolutions: [
            {
              abilities: {
                first: 'Tangled Feet',
                hidden: 'Ice Body',
                second: 'Screen Cleaner',
                special: null
              },
              backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/mrrime.gif',
              baseForme: null,
              baseSpecies: null,
              baseStats: {
                attack: 85,
                defense: 75,
                hp: 80,
                specialattack: 110,
                specialdefense: 100,
                speed: 70
              },
              baseStatsTotal: 520,
              bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Mr. Rime_(Pokémon)',
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
              color: 'Purple',
              cosmeticFormes: null,
              eggGroups: ['Human-Like'],
              evYields: {
                attack: 0,
                defense: 0,
                hp: 0,
                specialattack: 3,
                specialdefense: 0,
                speed: 0
              },
              evolutionLevel: '42',
              flavorTexts: [
                {
                  flavor: "It's highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements.",
                  game: 'Sword'
                },
                {
                  flavor: 'Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly.',
                  game: 'Shield'
                }
              ],
              forme: null,
              formeLetter: null,
              gender: {
                female: '50%',
                male: '50%'
              },
              height: 1.5,
              isEggObtainable: true,
              levellingRate: 'Medium Fast',
              maximumHatchTime: 6681,
              minimumHatchTime: 6425,
              num: 866,
              otherFormes: null,
              serebiiPage: 'https://www.serebii.net/pokedex-swsh/mr.rime',
              shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/mrrime.gif',
              shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/mrrime.gif',
              smogonPage: 'https://www.smogon.com/dex/ss/pokemon/mr--rime',
              smogonTier: '(PU)',
              species: 'Mr. Rime',
              sprite: 'https://play.pokemonshowdown.com/sprites/ani/mrrime.gif',
              types: ['Ice', 'Psychic']
            }
          ],
          flavorTexts: [
            {
              flavor:
                'Its talent is tap-dancing. It can also manipulate temperatures to create a floor of ice, which this Pokémon can kick up to use as a barrier.',
              game: 'Sword'
            },
            {
              flavor: "It can radiate chilliness from the bottoms of its feet. It'll spend the whole day tap-dancing on a frozen floor.",
              game: 'Shield'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: {
            female: '50%',
            male: '50%'
          },
          height: 1.4,
          isEggObtainable: true,
          levellingRate: 'Medium Fast',
          maximumHatchTime: 6681,
          minimumHatchTime: 6425,
          num: 122,
          otherFormes: null,
          preevolutions: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/mr.mime',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/Mr. Mime-Galar.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/Mr. Mime-Galar.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/mr--mime-galar',
          smogonTier: 'NFE',
          species: 'Mr. Mime-Galar',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/Mr. Mime-Galar.gif',
          types: ['Ice', 'Psychic']
        },
        {
          abilities: {
            first: 'Volt Absorb',
            hidden: null,
            second: null,
            special: null
          },
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/thundurus-therian.gif',
          baseForme: null,
          baseSpecies: 'Thundurus',
          baseStats: {
            attack: 105,
            defense: 70,
            hp: 79,
            specialattack: 145,
            specialdefense: 80,
            speed: 101
          },
          baseStatsTotal: 580,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Thundurus_(Pokémon)',
          catchRate: {
            base: 3,
            percentageWithOrdinaryPokeballAtFullHealth: '1.6%'
          },
          color: 'Blue',
          cosmeticFormes: null,
          eggGroups: ['Undiscovered'],
          evYields: {
            attack: 0,
            defense: 0,
            hp: 0,
            specialattack: 3,
            specialdefense: 0,
            speed: 0
          },
          evolutionLevel: null,
          evolutions: null,
          flavorTexts: [
            {
              flavor: 'Countless charred remains mar the landscape of places through which Thundurus has passed.',
              game: 'Black'
            },
            {
              flavor: 'The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.',
              game: 'White'
            },
            {
              flavor: 'As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.',
              game: 'Black 2'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: {
            female: '0%',
            male: '100%'
          },
          height: 3,
          isEggObtainable: false,
          levellingRate: 'Slow',
          maximumHatchTime: 31096,
          minimumHatchTime: 30840,
          num: 642,
          otherFormes: null,
          preevolutions: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/thundurus',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/thundurus-therian.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/thundurus-therian.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/thundurus-therian',
          smogonTier: 'UU',
          species: 'thundurus-therian',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/thundurus-therian.gif',
          types: ['Electric', 'Flying']
        }
      ]);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid Pokémon THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyPokemonSpecies,
        variableValues: { pokemon: 'totally_invalid_pokemon' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No Pokémon found for totally_invalid_pokemon');
    });
  });
});
