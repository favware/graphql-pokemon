import { getPokemonByNationalDexNumber, getPokemonSpecies, getPokemonSpeciesWithSprites, getPokemonWithFullData } from '#test-utils/queries/pokemon';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getPokemon', () => {
  describe('Species only requests', () => {
    test('GIVEN a valid species THEN returns Pokémon', async () => {
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonSpecies,
        variables: { pokemon: 'dragonite' }
      });

      expect(data.getPokemon.species).toEqual('dragonite');
    });
  });

  describe('Sprite only requests', () => {
    test('GIVEN CharizardMegaX THEN returns Species and Sprite', async () => {
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonSpeciesWithSprites,
        variables: { pokemon: 'charizardmegax' }
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
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonSpeciesWithSprites,
        variables: { pokemon: 'charizardmegay' }
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
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonSpeciesWithSprites,
        variables: { pokemon: 'farfetchd' }
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
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonSpeciesWithSprites,
        variables: { pokemon: 'sirfetchd' }
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
      const { data } = await executeGraphQL<'getPokemonByDexNumber'>({
        query: getPokemonByNationalDexNumber,
        variables: { number: 1 }
      });

      expect(data.getPokemonByDexNumber.species).toEqual('bulbasaur');
    });

    test('GIVEN National Dex Number -60 THEN returns Chromera', async () => {
      const { data } = await executeGraphQL<'getPokemonByDexNumber'>({
        query: getPokemonByNationalDexNumber,
        variables: { number: -60 }
      });

      expect(data.getPokemonByDexNumber.species).toEqual('chromera');
    });

    test('GIVEN National Dex Number 905 THEN returns Enamorus', async () => {
      const { data } = await executeGraphQL<'getPokemonByDexNumber'>({
        query: getPokemonByNationalDexNumber,
        variables: { number: 905 }
      });

      expect(data.getPokemonByDexNumber.species).toEqual('enamorus');
    });
  });

  describe('Full data requests', () => {
    test('GIVEN request for Greninja THEN returns all data', async () => {
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonWithFullData,
        variables: { pokemon: 'greninja' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: { name: 'Torrent' },
          second: null,
          hidden: { name: 'Protean' },
          special: { name: 'Battle Bond' }
        },
        eggGroups: ['Water 1'],
        evYields: {
          hp: 0,
          attack: 0,
          defense: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 3
        },
        evolutionLevel: '36',
        flavorTexts: [
          {
            flavor: 'It makes shuriken out of mucus excreted from its thighs. These shuriken can cut cleanly through steel cables.',
            game: 'Violet'
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
        serebiiPage: 'https://www.serebii.net/pokedex-sv/greninja',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/greninja.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/greninja.gif',
        smogonPage: 'https://www.smogon.com/dex/sv/pokemon/greninja',
        baseForme: null,
        smogonTier: 'UU',
        species: 'greninja',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/greninja.gif',
        types: [{ name: 'Water' }, { name: 'Dark' }],
        baseSpecies: null,
        baseStats: {
          hp: 72,
          attack: 95,
          defense: 67,
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
        cosmeticFormes: null
      });
    });

    test('GIVEN missingno THEN returns all data', async () => {
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonWithFullData,
        variables: { pokemon: 'missingno' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: { name: 'Pressure' },
          second: null,
          hidden: null,
          special: null
        },
        eggGroups: ['Undiscovered'],
        evYields: {
          hp: 0,
          attack: 0,
          defense: 0,
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
        gender: { female: '50%', male: '50%' },
        height: 3.3,
        isEggObtainable: false,
        backSprite: 'https://play.pokemonshowdown.com/sprites/afd-back/missingno.png',
        levellingRate: null,
        maximumHatchTime: null,
        minimumHatchTime: null,
        num: 0,
        otherFormes: ['m00'],
        serebiiPage: '',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/afd-back-shiny/missingno.png',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/afd-shiny/missingno.png',
        smogonPage: '',
        baseForme: null,
        smogonTier: 'Custom',
        species: 'missingno.',
        sprite: 'https://play.pokemonshowdown.com/sprites/afd/missingno.png',
        types: [{ name: 'Normal' }],
        baseSpecies: null,
        baseStats: {
          hp: 33,
          attack: 136,
          defense: 0,
          specialattack: 6,
          specialdefense: 6,
          speed: 29
        },
        baseStatsTotal: 210,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/MissingNo._(Pokémon)',
        catchRate: {
          base: 0,
          percentageWithOrdinaryPokeballAtFullHealth: '0%'
        },
        color: 'Gray',
        cosmeticFormes: null
      });
    });

    test('GIVEN Hisuian forme Typhlosion THEN returns all data', async () => {
      const { data } = await executeGraphQL<'getPokemon'>({
        query: getPokemonWithFullData,
        variables: { pokemon: 'typhlosionhisui' }
      });

      expect(data.getPokemon).toEqual({
        abilities: {
          first: { name: 'Blaze' },
          second: null,
          hidden: { name: 'Frisk' },
          special: null
        },
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
              "Said to purify lost, forsaken souls with its flames and guide them to the afterlife. I believe its form has been influenced by the energy of the sacred mountain towering at Hisui's center.",
            game: 'Legends: Arceus'
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
        serebiiPage: 'https://www.serebii.net/pokedex-sv/typhlosion',
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/gen5-back-shiny/typhlosion-hisui.png',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/gen5-shiny/typhlosion-hisui.png',
        smogonPage: 'https://www.smogon.com/dex/sv/pokemon/typhlosion-hisui',
        baseForme: null,
        smogonTier: 'RU',
        species: 'typhlosion-hisui',
        sprite: 'https://play.pokemonshowdown.com/sprites/gen5/typhlosion-hisui.png',
        types: [{ name: 'Fire' }, { name: 'Ghost' }],
        baseSpecies: 'typhlosion',
        baseStats: {
          hp: 73,
          attack: 84,
          defense: 78,
          specialattack: 119,
          specialdefense: 85,
          speed: 95
        },
        baseStatsTotal: 534,
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/typhlosion_(Pokémon)',
        catchRate: {
          base: 45,
          percentageWithOrdinaryPokeballAtFullHealth: '11.9%'
        },
        color: 'Yellow',
        cosmeticFormes: null
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid Pokémon THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getPokemonSpecies,
        variables: { pokemon: 'totally_invalid_pokemon' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe(
        'Variable "$pokemon" got invalid value "totally_invalid_pokemon"; Value "totally_invalid_pokemon" does not exist in "PokemonEnum" enum.'
      );
    });
  });
});
