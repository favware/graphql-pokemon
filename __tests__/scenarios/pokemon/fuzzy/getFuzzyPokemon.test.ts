import { getFuzzyPokemonSpecies, getFuzzyPokemonWithFullData, getFuzzyPokemonWithFullDataAndEvolutions } from '#test-utils/queries/pokemon';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyPokemon', () => {
  describe('Species only requests', () => {
    test('GIVEN a valid species THEN returns Pokemon', async () => {
      const { data } = await gCall<'getFuzzyPokemon'>({
        source: getFuzzyPokemonSpecies,
        variableValues: { pokemon: 'dragonite' }
      });

      expect(data.getFuzzyPokemon).toEqual([{ species: 'dragonite' }]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid pokemon request THEN returns Pokemon WITH all data', async () => {
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
    test('GIVEN valid pokemon request THEN returns Pokemon WITH all data', async () => {
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
              smogonTier: 'NU',
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
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid pokemon THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyPokemonSpecies,
        variableValues: { pokemon: 'totally_invalid_pokemon' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No Pokémon found for totally_invalid_pokemon');
    });
  });
});
