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
import { executeGraphQL } from '#test-utils/testUtils';

describe('getLearnset', () => {
  describe('Successful requests', () => {
    test('GIVEN valid Pokémon and single move request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'charizard', moves: ['fireblast'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        tmMoves: [
          {
            move: { name: 'Fire Blast' },
            generation: 9
          },
          {
            move: { name: 'Fire Blast' },
            generation: 8
          },
          {
            move: { name: 'Fire Blast' },
            generation: 7
          },
          {
            move: { name: 'Fire Blast' },
            generation: 6
          },
          {
            move: { name: 'Fire Blast' },
            generation: 5
          },
          {
            move: { name: 'Fire Blast' },
            generation: 4
          },
          {
            move: { name: 'Fire Blast' },
            generation: 3
          }
        ],
        virtualTransferMoves: [
          {
            move: { name: 'Fire Blast' },
            generation: 8
          },
          {
            move: { name: 'Fire Blast' },
            generation: 7
          }
        ],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and 2 moves request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'charizard', moves: ['fireblast', 'flamethrower'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        tmMoves: [
          {
            move: { name: 'Fire Blast' },
            generation: 9
          },
          {
            move: { name: 'Fire Blast' },
            generation: 8
          },
          {
            move: { name: 'Fire Blast' },
            generation: 7
          },
          {
            move: { name: 'Fire Blast' },
            generation: 6
          },
          {
            move: { name: 'Fire Blast' },
            generation: 5
          },
          {
            move: { name: 'Fire Blast' },
            generation: 4
          },
          {
            move: { name: 'Fire Blast' },
            generation: 3
          },
          {
            move: { name: 'Flamethrower' },
            generation: 9
          },
          {
            move: { name: 'Flamethrower' },
            generation: 8
          },
          {
            move: { name: 'Flamethrower' },
            generation: 7
          },
          {
            move: { name: 'Flamethrower' },
            generation: 6
          },
          {
            move: { name: 'Flamethrower' },
            generation: 5
          },
          {
            move: { name: 'Flamethrower' },
            generation: 4
          },
          {
            move: { name: 'Flamethrower' },
            generation: 3
          }
        ],
        virtualTransferMoves: [
          {
            move: { name: 'Fire Blast' },
            generation: 8
          },
          {
            move: { name: 'Fire Blast' },
            generation: 7
          },
          {
            move: { name: 'Flamethrower' },
            generation: 8
          },
          {
            move: { name: 'Flamethrower' },
            generation: 7
          }
        ],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [
          {
            move: { name: 'Flamethrower' },
            generation: 8
          },
          {
            move: { name: 'Flamethrower' },
            generation: 7
          },
          {
            move: { name: 'Flamethrower' },
            generation: 6
          }
        ],
        levelUpMoves: [
          {
            move: { name: 'Flamethrower' },
            level: 30,
            generation: 9
          },
          {
            move: { name: 'Flamethrower' },
            level: 30,
            generation: 8
          },
          {
            move: { name: 'Flamethrower' },
            level: 47,
            generation: 7
          },
          {
            move: { name: 'Flamethrower' },
            level: 47,
            generation: 6
          },
          {
            move: { name: 'Flamethrower' },
            level: 47,
            generation: 5
          },
          {
            move: { name: 'Flamethrower' },
            level: 42,
            generation: 4
          },
          {
            move: { name: 'Flamethrower' },
            level: 34,
            generation: 3
          }
        ],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and 2 moves and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'charizard', moves: ['fireblast', 'flamethrower'], generation: 7 }
      });

      expect(data.getLearnset).toEqual({
        species: 'charizard',
        tmMoves: [
          { move: { name: 'Fire Blast' }, generation: 7 },
          { move: { name: 'Flamethrower' }, generation: 7 }
        ],
        virtualTransferMoves: [
          { move: { name: 'Fire Blast' }, generation: 7 },
          { move: { name: 'Flamethrower' }, generation: 7 }
        ],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [{ move: { name: 'Flamethrower' }, generation: 7 }],
        levelUpMoves: [{ move: { name: 'Flamethrower' }, level: 47, generation: 7 }],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and event move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'dragonite', moves: ['extremespeed'], generation: 5 }
      });

      expect(data.getLearnset).toEqual({
        species: 'dragonite',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [
          { move: { name: 'Extreme Speed' }, generation: 5 },
          { move: { name: 'Extreme Speed' }, generation: 5 }
        ],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and tutor move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'pikachu', moves: ['risingvoltage'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        species: 'pikachu',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: [{ move: { name: 'Rising Voltage' }, generation: 8 }]
      });
    });

    test('GIVEN valid Pokémon and egg move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'bunnelby', moves: ['defensecurl'], generation: 6 }
      });

      expect(data.getLearnset).toEqual({
        species: 'bunnelby',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [{ move: { name: 'Defense Curl' }, generation: 6 }],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN valid Pokémon and dream world move and custom generation request THEN returns Learnset WITH all data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'vulpix', moves: ['darkpulse'], generation: 5 }
      });

      expect(data.getLearnset).toEqual({
        species: 'vulpix',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [
          {
            move: { name: 'Dark Pulse' },
            generation: 5
          }
        ],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: [
          {
            move: { name: 'Dark Pulse' },
            generation: 5
          }
        ]
      });
    });

    test('GIVEN valid Pokémon and null generation request THEN returns Learnset WITH all generation 9 data', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'vulpix', moves: ['darkpulse'], generation: null }
      });

      expect(data.getLearnset).toEqual({
        species: 'vulpix',
        tmMoves: [
          {
            generation: 9,
            move: {
              name: 'Dark Pulse'
            }
          }
        ],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [],
        levelUpMoves: [],
        tutorMoves: []
      });
    });

    test('GIVEN special form Pokémon THEN returns Learnset of base pokemon', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnset,
        variables: { pokemon: 'dialgaorigin', moves: ['roaroftime'] }
      });

      expect(data.getLearnset).toEqual({
        species: 'dialga-origin',
        tmMoves: [],
        virtualTransferMoves: [],
        dreamworldMoves: [],
        eggMoves: [],
        eventMoves: [
          {
            move: { name: 'Roar of Time' },
            generation: 8
          },
          {
            move: { name: 'Roar of Time' },
            generation: 7
          },
          {
            move: { name: 'Roar of Time' },
            generation: 7
          },
          {
            move: { name: 'Roar of Time' },
            generation: 7
          },
          {
            move: { name: 'Roar of Time' },
            generation: 7
          },
          {
            move: { name: 'Roar of Time' },
            generation: 6
          },
          {
            move: { name: 'Roar of Time' },
            generation: 6
          },
          {
            move: { name: 'Roar of Time' },
            generation: 5
          },
          {
            move: { name: 'Roar of Time' },
            generation: 4
          },
          {
            move: { name: 'Roar of Time' },
            generation: 4
          }
        ],
        levelUpMoves: [
          {
            move: { name: 'Roar of Time' },
            level: 88,
            generation: 9
          },
          {
            move: { name: 'Roar of Time' },
            level: 88,
            generation: 8
          },
          {
            move: { name: 'Roar of Time' },
            level: 46,
            generation: 7
          },
          {
            move: { name: 'Roar of Time' },
            level: 46,
            generation: 6
          },
          {
            move: { name: 'Roar of Time' },
            level: 46,
            generation: 5
          },
          {
            move: { name: 'Roar of Time' },
            level: 40,
            generation: 4
          }
        ],
        tutorMoves: []
      });
    });
  });

  describe('Requests with shouldIncludePokemonDetails', () => {
    test('GIVEN learnset WITH also requesting species THEN returns Learnset AND species', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonSpecies,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        species: 'victini',
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting backsprite THEN returns Learnset AND backsprite', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonBacksprite,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        backSprite: 'https://play.pokemonshowdown.com/sprites/ani-back/victini.gif',
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting sprite THEN returns Learnset AND sprite', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonSprite,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        sprite: 'https://play.pokemonshowdown.com/sprites/ani/victini.gif',
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting shiny backsprite THEN returns Learnset AND shiny backsprite', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonShinyBackSprite,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        shinyBackSprite: 'https://play.pokemonshowdown.com/sprites/ani-back-shiny/victini.gif',
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting shiny sprite THEN returns Learnset AND shiny sprite', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonShinySprite,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        shinySprite: 'https://play.pokemonshowdown.com/sprites/ani-shiny/victini.gif',
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting num THEN returns Learnset AND num', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonNum,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        num: 494,
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });

    test('GIVEN learnset WITH also requesting color THEN returns Learnset AND color', async () => {
      const { data } = await executeGraphQL<'getLearnset'>({
        query: getLearnsetWithPokemonColor,
        variables: { pokemon: 'victini', moves: ['searingshot'], generation: 8 }
      });

      expect(data.getLearnset).toEqual({
        color: 'Yellow',
        levelUpMoves: [
          {
            move: { name: 'Searing Shot' },
            level: 63,
            generation: 8
          }
        ]
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid Pokémon THEN returns learnset error', async () => {
      const data = await executeGraphQL({
        query: getLearnset,
        variables: { pokemon: 'totally_invalid_pokemon' }
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors?.[0].message).toBe(
        'Variable "$pokemon" got invalid value "totally_invalid_pokemon"; Value "totally_invalid_pokemon" does not exist in "PokemonEnum" enum.'
      );
      expect(data.errors?.[1].message).toBe('Variable "$moves" of required type "[MovesEnum!]!" was not provided.');
    });

    test('GIVEN an invalid move THEN returns learnset error', async () => {
      const data = await executeGraphQL({
        query: getLearnset,
        variables: { moves: ['totally_invalid_move'] }
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors?.[0].message).toBe('Variable "$pokemon" of required type "PokemonEnum!" was not provided.');
      expect(data.errors?.[1].message).toBe(
        'Variable "$moves" got invalid value "totally_invalid_move" at "moves[0]"; Value "totally_invalid_move" does not exist in "MovesEnum" enum.'
      );
    });

    test('GIVEN missing all required parameters THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getLearnset,
        variables: {}
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors?.[0].message).toBe('Variable "$pokemon" of required type "PokemonEnum!" was not provided.');
      expect(data.errors?.[1].message).toBe('Variable "$moves" of required type "[MovesEnum!]!" was not provided.');
    });

    test('GIVEN invalid generation THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getLearnset,
        variables: { moves: ['fly'], pokemon: 'dragonair', generation: 100 }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe('Received one or more errors');
    });
  });
});
