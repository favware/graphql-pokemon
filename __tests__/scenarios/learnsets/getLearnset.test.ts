import {
  getLearnset,
  getLearnsetWithPokemonBacksprite,
  getLearnsetWithPokemonColor,
  getLearnsetWithPokemonNum,
  getLearnsetWithPokemonShinyBackSprite,
  getLearnsetWithPokemonShinySprite,
  getLearnsetWithPokemonSpecies,
  getLearnsetWithPokemonSprite
} from '#test-utils/queries/learnsets';
import { gCall } from '#test-utils/testUtils';

describe('getLearnset', () => {
  describe('Successful requests', () => {
    test('GIVEN valid Pokémon and single move request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'charizard', moves: ['fireblast'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        tmMoves: [
          { name: 'fireblast', generation: 8 },
          { name: 'fireblast', generation: 7 },
          { name: 'fireblast', generation: 6 },
          { name: 'fireblast', generation: 5 },
          { name: 'fireblast', generation: 4 },
          { name: 'fireblast', generation: 3 }
        ],
        virtualTransferMoves: [
          { name: 'fireblast', generation: 8 },
          { name: 'fireblast', generation: 7 }
        ],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and 2 moves request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'charizard', moves: ['fireblast', 'flamethrower'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        tmMoves: [
          { name: 'fireblast', generation: 8 },
          { name: 'fireblast', generation: 7 },
          { name: 'fireblast', generation: 6 },
          { name: 'fireblast', generation: 5 },
          { name: 'fireblast', generation: 4 },
          { name: 'fireblast', generation: 3 },
          { name: 'flamethrower', generation: 8 },
          { name: 'flamethrower', generation: 7 },
          { name: 'flamethrower', generation: 6 },
          { name: 'flamethrower', generation: 5 },
          { name: 'flamethrower', generation: 4 },
          { name: 'flamethrower', generation: 3 }
        ],
        virtualTransferMoves: [
          { name: 'fireblast', generation: 8 },
          { name: 'fireblast', generation: 7 },
          { name: 'flamethrower', generation: 8 },
          { name: 'flamethrower', generation: 7 }
        ],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [
          { name: 'flamethrower', generation: 8 },
          { name: 'flamethrower', generation: 7 },
          { name: 'flamethrower', generation: 6 }
        ],
        levelUpMoves: [
          { name: 'flamethrower', level: 30, generation: 8 },
          { name: 'flamethrower', level: 47, generation: 7 },
          { name: 'flamethrower', level: 47, generation: 6 },
          { name: 'flamethrower', level: 47, generation: 5 },
          { name: 'flamethrower', level: 42, generation: 4 },
          { name: 'flamethrower', level: 34, generation: 3 }
        ],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and 2 moves and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'charizard', moves: ['fireblast', 'flamethrower'], generation: 7 }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        tmMoves: [
          { name: 'fireblast', generation: 7 },
          { name: 'flamethrower', generation: 7 }
        ],
        virtualTransferMoves: [
          { name: 'fireblast', generation: 7 },
          { name: 'flamethrower', generation: 7 }
        ],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [{ name: 'flamethrower', generation: 7 }],
        levelUpMoves: [{ name: 'flamethrower', level: 47, generation: 7 }],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and event move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'dragonite', moves: ['extremespeed'], generation: 5 }
      });

      expect(data.getLearnset).toEqual({
        species: 'dragonite',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [
          { name: 'extremespeed', generation: 5 },
          { name: 'extremespeed', generation: 5 }
        ],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and tutor move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'pikachu', moves: ['risingvoltage'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        species: 'pikachu',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: [{ name: 'risingvoltage', generation: 8 }]
      });
    });

    test('GIVEN valid Pokémon and egg move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'bunnelby', moves: ['defensecurl'], generation: 6 }
      });

      expect(data.getLearnset).toEqual({
        species: 'bunnelby',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [{ name: 'defensecurl', generation: 6 }],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and dream world move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'vulpix', moves: ['darkpulse'], generation: 5 }
      });

      expect(data.getLearnset).toEqual({
        species: 'vulpix',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [{ name: 'darkpulse', generation: 5 }],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: [{ name: 'darkpulse', generation: 5 }]
      });
    });
  });

  describe('Requests with shouldIncludePokemonDetails', () => {
    test('GIVEN learnset WITH also requesting species THEN returns Learnset AND species', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonSpecies,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        species: 'victini',
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting backsprite THEN returns Learnset AND backsprite', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonBacksprite,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/victini.gif',
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting sprite THEN returns Learnset AND sprite', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonSprite,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/victini.gif',
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting shiny backsprite THEN returns Learnset AND shiny backsprite', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonShinyBackSprite,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/victini.gif',
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting shiny sprite THEN returns Learnset AND shiny sprite', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonShinySprite,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/victini.gif',
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting num THEN returns Learnset AND num', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonNum,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        num: 494,
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting color THEN returns Learnset AND color', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnsetWithPokemonColor,
        variableValues: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        color: 'Yellow',
        levelUpMoves: [
          {
            name: 'searingshot',
            level: 63,
            generation: 8
          }
        ]
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid Pokémon THEN returns error', async () => {
      const data = await gCall({
        source: getLearnset,
        variableValues: { pokemon: 'totally_invalid_pokemon' }
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors[0].message).toBe(
        'Variable "$pokemon" got invalid value "totally_invalid_pokemon"; Value "totally_invalid_pokemon" does not exist in "PokemonEnum" enum.'
      );
      expect(data.errors[1].message).toBe('Variable "$moves" of required type "[MovesEnum!]!" was not provided.');
    });

    test('GIVEN an invalid move THEN returns error', async () => {
      const data = await gCall({
        source: getLearnset,
        variableValues: { moves: ['totally_invalid_move'] }
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors[0].message).toBe('Variable "$pokemon" of required type "PokemonEnum!" was not provided.');
      expect(data.errors[1].message).toBe(
        'Variable "$moves" got invalid value "totally_invalid_move" at "moves[0]"; Value "totally_invalid_move" does not exist in "MovesEnum" enum.'
      );
    });

    test('GIVEN missing all required parameters THEN returns error', async () => {
      const data = await gCall({
        source: getLearnset,
        variableValues: {}
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors[0].message).toBe('Variable "$pokemon" of required type "PokemonEnum!" was not provided.');
      expect(data.errors[1].message).toBe('Variable "$moves" of required type "[MovesEnum!]!" was not provided.');
    });

    test('GIVEN invalid generation THEN returns error', async () => {
      const data = await gCall({
        source: getLearnset,
        variableValues: { moves: ['fly'], pokemon: 'dragonair', generation: 100 }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('Argument Validation Error');
    });
  });
});
