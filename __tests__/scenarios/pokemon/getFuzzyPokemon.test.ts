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
                  flavor: 'It has evolved to be suited for an aquatic life. It can become invisible when it melts away into water.',
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
                  flavor: 'It controls 10,000-volt power. When the fur covering its body stands on end, the fur is hard and sharp, like needles.',
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
                  flavor: 'It has a flame sac in its body. Its body temperature tops 1,650 degrees Fahrenheit before battle.',
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
                  flavor: 'Its fur has the look and feel of velvet. The orb on its forehead glows when it uses psychic power.',
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
                  flavor: "The light of the moon changed Eevee's genetic structure. It lurks in the darkness, waiting for prey.",
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
                  flavor: 'Just like a plant, it uses photosynthesis. As a result, it is always enveloped in clear air.',
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
                  flavor: 'As a defense mechanism, it can completely freeze its fur to make its hairs stand out like needles.',
                  game: 'Shining Pearl'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
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
              flavor: 'It is a rare Pokémon that adapts to harsh environments by changing its appearance and capabilities when it evolves.',
              game: 'Shining Pearl'
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
          evolutions: null,
          preevolutions: [
            {
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
                  flavor: 'Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.',
                  game: 'Red'
                },
                {
                  flavor: 'Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.',
                  game: 'Blue'
                },
                {
                  flavor: 'Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive.',
                  game: 'Yellow'
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
              catchRate: {
                base: 45,
                percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
              },
              color: 'Brown',
              cosmeticFormes: null
            }
          ],
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
              flavor: "It uses the fine hair that covers its body to sense air currents and predict its enemy's actions.",
              game: 'Gold'
            },
            {
              flavor: "By reading air currents, it can predict things such as the weather or its foe's next move.",
              game: 'Silver'
            },
            {
              flavor: "The tip of its forked tail quivers when it is predicting its opponent's next move.",
              game: 'Crystal'
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
          evolutions: null,
          preevolutions: [
            {
              abilities: {
                first: 'Swarm',
                second: 'Shed Skin',
                hidden: 'No Guard',
                special: null
              },
              eggGroups: ['Bug'],
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
                  flavor: 'These mysterious Pokémon evolve when they receive electrical stimulation while they are in the same place as Shelmet.',
                  game: 'Black'
                },
                {
                  flavor: 'When they feel threatened, they spit an acidic liquid to drive attackers away. This Pokémon targets Shelmet.',
                  game: 'White'
                },
                {
                  flavor: 'For some reason they evolve when they receive electrical energy while they are attacking Shelmet.',
                  game: 'Black 2'
                }
              ],
              forme: null,
              formeLetter: null,
              gender: { female: '50%', male: '50%' },
              height: 0.5,
              isEggObtainable: true,
              backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/karrablast.gif',
              levellingRate: 'Medium Fast',
              maximumHatchTime: 4111,
              minimumHatchTime: 3855,
              num: 588,
              otherFormes: null,
              serebiiPage: 'https://www.serebii.net/pokedex-swsh/karrablast',
              shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/karrablast.gif',
              shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/karrablast.gif',
              smogonPage: 'https://www.smogon.com/dex/ss/pokemon/karrablast',
              baseForme: null,
              smogonTier: 'LC',
              species: 'karrablast',
              sprite: 'https://play.pokemonshowdown.com/sprites/ani/karrablast.gif',
              types: ['Bug'],
              baseSpecies: null,
              baseStats: {
                hp: 50,
                attack: 75,
                defense: 45,
                specialattack: 40,
                specialdefense: 45,
                speed: 60
              },
              baseStatsTotal: 315,
              bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/karrablast_(Pokémon)',
              catchRate: {
                base: 200,
                percentageWithOrdinaryPokeballAtFullHealth: '36.6%'
              },
              color: 'Blue',
              cosmeticFormes: null
            }
          ],
          abilities: {
            first: 'Swarm',
            second: 'Shell Armor',
            hidden: 'Overcoat',
            special: null
          },
          eggGroups: ['Bug'],
          evYields: {
            hp: 0,
            attack: 2,
            defense: 0,
            specialattack: 0,
            specialdefense: 0,
            speed: 0
          },
          evolutionLevel: 'Trade for Shelmet',
          flavorTexts: [
            {
              flavor: 'They fly around at high speed, striking with their pointed spears. Even when in trouble, they face opponents bravely.',
              game: 'Black'
            },
            {
              flavor: 'These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.',
              game: 'White'
            },
            {
              flavor: 'Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.',
              game: 'Black 2'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: { female: '50%', male: '50%' },
          height: 1,
          isEggObtainable: true,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/escavalier.gif',
          levellingRate: 'Medium Fast',
          maximumHatchTime: 4111,
          minimumHatchTime: 3855,
          num: 589,
          otherFormes: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/escavalier',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/escavalier.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/escavalier.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/escavalier',
          baseForme: null,
          smogonTier: 'NU',
          species: 'escavalier',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/escavalier.gif',
          types: ['Bug', 'Steel'],
          baseSpecies: null,
          baseStats: {
            hp: 70,
            attack: 135,
            defense: 105,
            specialattack: 60,
            specialdefense: 105,
            speed: 20
          },
          baseStatsTotal: 495,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/escavalier_(Pokémon)',
          catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
          color: 'Gray',
          cosmeticFormes: null
        },
        {
          evolutions: [
            {
              abilities: {
                first: 'Intimidate',
                second: 'Shed Skin',
                hidden: 'Unnerve',
                special: null
              },
              eggGroups: ['Field', 'Dragon'],
              evYields: {
                hp: 0,
                attack: 2,
                defense: 0,
                specialattack: 0,
                specialdefense: 0,
                speed: 0
              },
              evolutionLevel: '22',
              flavorTexts: [
                {
                  flavor: 'It is rumored that the ferocious warning markings on its belly differ from area to area.',
                  game: 'Red'
                },
                {
                  flavor: 'It is rumored that the ferocious warning markings on its belly differ from area to area.',
                  game: 'Blue'
                },
                {
                  flavor: 'The frightening patterns on its belly have been studied. Six variations have been confirmed.',
                  game: 'Yellow'
                }
              ],
              forme: null,
              formeLetter: null,
              gender: { female: '50%', male: '50%' },
              height: 3.5,
              isEggObtainable: true,
              backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/arbok.gif',
              levellingRate: 'Medium Fast',
              maximumHatchTime: 5396,
              minimumHatchTime: 5140,
              num: 24,
              otherFormes: null,
              serebiiPage: 'https://www.serebii.net/pokedex-sm/024.shtml',
              shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/arbok.gif',
              shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/arbok.gif',
              smogonPage: 'https://www.smogon.com/dex/sm/pokemon/arbok',
              baseForme: null,
              smogonTier: 'Past',
              species: 'arbok',
              sprite: 'https://play.pokemonshowdown.com/sprites/ani/arbok.gif',
              types: ['Poison'],
              baseSpecies: null,
              baseStats: {
                hp: 60,
                attack: 95,
                defense: 69,
                specialattack: 65,
                specialdefense: 79,
                speed: 80
              },
              baseStatsTotal: 448,
              bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/arbok_(Pokémon)',
              catchRate: {
                base: 90,
                percentageWithOrdinaryPokeballAtFullHealth: '20.1%'
              },
              color: 'Purple',
              cosmeticFormes: null
            }
          ],
          preevolutions: null,
          abilities: {
            first: 'Intimidate',
            second: 'Shed Skin',
            hidden: 'Unnerve',
            special: null
          },
          eggGroups: ['Field', 'Dragon'],
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
              flavor: 'Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.',
              game: 'Red'
            },
            {
              flavor: 'Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.',
              game: 'Blue'
            },
            {
              flavor: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
              game: 'Yellow'
            }
          ],
          forme: null,
          formeLetter: null,
          gender: { female: '50%', male: '50%' },
          height: 2,
          isEggObtainable: true,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/ekans.gif',
          levellingRate: 'Medium Fast',
          maximumHatchTime: 5396,
          minimumHatchTime: 5140,
          num: 23,
          otherFormes: null,
          serebiiPage: 'https://www.serebii.net/pokedex-sm/023.shtml',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/ekans.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/ekans.gif',
          smogonPage: 'https://www.smogon.com/dex/sm/pokemon/ekans',
          baseForme: null,
          smogonTier: 'Past',
          species: 'ekans',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/ekans.gif',
          types: ['Poison'],
          baseSpecies: null,
          baseStats: {
            hp: 35,
            attack: 60,
            defense: 44,
            specialattack: 40,
            specialdefense: 54,
            speed: 55
          },
          baseStatsTotal: 288,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/ekans_(Pokémon)',
          catchRate: { base: 255, percentageWithOrdinaryPokeballAtFullHealth: '43.9%' },
          color: 'Purple',
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
          evolutions: null,
          preevolutions: null,
          abilities: { first: 'Unseen Fist', second: null, hidden: null, special: null },
          eggGroups: ['Undiscovered'],
          evYields: {
            hp: 0,
            attack: 3,
            defense: 0,
            specialattack: 0,
            specialdefense: 0,
            speed: 0
          },
          evolutionLevel: null,
          flavorTexts: [
            {
              flavor:
                "As it waits for the right moment to unleash its Gigantamax power, this Pokémon maintains a perfect one-legged stance. It won't even twitch.",
              game: 'Sword'
            },
            {
              flavor: 'All it takes is a glare from this Pokémon to take the lives of those with evil in their hearts — or so they say.',
              game: 'Shield'
            }
          ],
          forme: 'Rapid-Strike-Gmax',
          formeLetter: 'RSG',
          gender: { female: '12.5%', male: '87.5%' },
          height: 3,
          isEggObtainable: false,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/urshifu-rapid-strike-gmax.gif',
          levellingRate: 'Slow',
          maximumHatchTime: 31096,
          minimumHatchTime: 30840,
          num: 892,
          otherFormes: ['urshifu', 'urshifugmax', 'urshifurapidstrike'],
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/urshifu-rapid-strike',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/urshifu-rapid-strike-gmax.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/urshifu-rapid-strike-gmax.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/urshifu-rapid-strike-gmax',
          baseForme: null,
          smogonTier: 'Gigantamax',
          species: 'urshifu-rapid-strike-gmax',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/urshifu-rapid-strike-gmax.gif',
          types: ['Fighting', 'Water'],
          baseSpecies: 'Urshifu-Rapid-Strike',
          baseStats: {
            hp: 100,
            attack: 130,
            defense: 100,
            specialattack: 63,
            specialdefense: 60,
            speed: 97
          },
          baseStatsTotal: 550,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Urshifu-Rapid-Strike_(Pokémon)',
          catchRate: { base: 3, percentageWithOrdinaryPokeballAtFullHealth: '1.6%' },
          color: 'Gray',
          cosmeticFormes: null
        },
        {
          evolutions: null,
          preevolutions: null,
          abilities: {
            first: 'Flash Fire',
            second: 'White Smoke',
            hidden: 'Flame Body',
            special: null
          },
          eggGroups: ['Bug'],
          evYields: {
            hp: 0,
            attack: 2,
            defense: 0,
            specialattack: 0,
            specialdefense: 0,
            speed: 0
          },
          evolutionLevel: null,
          flavorTexts: [
            {
              flavor:
                'Gigantamax energy has evoked a rise in its body temperature, now reaching over 1,800 degrees Fahrenheit. Its heat waves incinerate its enemies.',
              game: 'Sword'
            },
            {
              flavor: 'The heat that comes off a Gigantamax Centiskorch may destabilize air currents. Sometimes it can even cause storms.',
              game: 'Shield'
            }
          ],
          forme: 'Gmax',
          formeLetter: 'G',
          gender: { female: '50%', male: '50%' },
          height: 10,
          isEggObtainable: true,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/centiskorch-gmax.gif',
          levellingRate: 'Medium Fast',
          maximumHatchTime: 5396,
          minimumHatchTime: 5140,
          num: 851,
          otherFormes: null,
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/centiskorch',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/centiskorch-gmax.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/centiskorch-gmax.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/centiskorch-gmax',
          baseForme: null,
          smogonTier: 'Gigantamax',
          species: 'centiskorch-gmax',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/centiskorch-gmax.gif',
          types: ['Fire', 'Bug'],
          baseSpecies: 'Centiskorch',
          baseStats: {
            hp: 100,
            attack: 15,
            defense: 65,
            specialattack: 90,
            specialdefense: 90,
            speed: 65
          },
          baseStatsTotal: 425,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Centiskorch_(Pokémon)',
          catchRate: { base: 75, percentageWithOrdinaryPokeballAtFullHealth: '17.5%' },
          color: 'Red',
          cosmeticFormes: null
        },
        {
          evolutions: null,
          preevolutions: null,
          abilities: {
            first: 'Pressure',
            second: 'Unnerve',
            hidden: 'Mirror Armor',
            special: null
          },
          eggGroups: ['Flying'],
          evYields: {
            hp: 0,
            attack: 0,
            defense: 3,
            specialattack: 0,
            specialdefense: 0,
            speed: 0
          },
          evolutionLevel: null,
          flavorTexts: [
            {
              flavor:
                'Imbued with Gigantamax energy, its wings can whip up winds more forceful than any a hurricane could muster. The gusts blow everything away.',
              game: 'Sword'
            },
            {
              flavor: 'The eight feathers on its back are called blade birds, and they can launch off its body to attack foes independently.',
              game: 'Shield'
            }
          ],
          forme: 'Gmax',
          formeLetter: 'G',
          gender: { female: '50%', male: '50%' },
          height: 14,
          isEggObtainable: true,
          backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/corviknight-gmax.gif',
          levellingRate: 'Medium Slow',
          maximumHatchTime: 4111,
          minimumHatchTime: 3855,
          num: 823,
          otherFormes: ['corviknight'],
          serebiiPage: 'https://www.serebii.net/pokedex-swsh/corviknight',
          shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/corviknight-gmax.gif',
          shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/corviknight-gmax.gif',
          smogonPage: 'https://www.smogon.com/dex/ss/pokemon/corviknight-gmax',
          baseForme: null,
          smogonTier: 'Gigantamax',
          species: 'corviknight-gmax',
          sprite: 'https://play.pokemonshowdown.com/sprites/ani/corviknight-gmax.gif',
          types: ['Flying', 'Steel'],
          baseSpecies: 'Corviknight',
          baseStats: {
            hp: 98,
            attack: 87,
            defense: 105,
            specialattack: 53,
            specialdefense: 85,
            speed: 67
          },
          baseStatsTotal: 495,
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Corviknight_(Pokémon)',
          catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
          color: 'Blue',
          cosmeticFormes: null
        }
      ]);
    });
  });
});
