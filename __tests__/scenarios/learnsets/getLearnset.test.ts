import { getLearnset } from '#test-utils/queries/learnsets';
import { gCall } from '#test-utils/testUtils';

describe('getLearnset', () => {
  describe('Successful requests', () => {
    test('GIVEN valid pokemon and single move request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'charizard', moves: ['fireblast'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/charizard.gif',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif',
        color: 'Red',
        num: 6,
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/charizard.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard.gif',
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

    test('GIVEN valid pokemon and 2 moves request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'charizard', moves: ['fireblast', 'flamethrower'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/charizard.gif',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif',
        color: 'Red',
        num: 6,
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/charizard.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard.gif',
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

    test('GIVEN valid pokemon and 2 moves and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'charizard', moves: ['fireblast', 'flamethrower'], generation: 7 }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/charizard.gif',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif',
        color: 'Red',
        num: 6,
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/charizard.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/charizard.gif',
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

    test('GIVEN valid pokemon and event move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'dragonite', moves: ['extremespeed'], generation: 5 }
      });

      expect(data.getLearnset).toEqual({
        species: 'dragonite',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/dragonite.gif',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/dragonite.gif',
        color: 'Brown',
        num: 149,
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/dragonite.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/dragonite.gif',
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

    test('GIVEN valid pokemon and event move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await gCall<'getLearnset'>({
        source: getLearnset,
        variableValues: { pokemon: 'bunnelby', moves: ['defensecurl'], generation: 6 }
      });

      expect(data.getLearnset).toEqual({
        species: 'bunnelby',
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/bunnelby.gif',
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/bunnelby.gif',
        color: 'Brown',
        num: 659,
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/bunnelby.gif',
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/bunnelby.gif',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [{ name: 'defensecurl', generation: 6 }],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: []
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid pokemon THEN returns error', async () => {
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
