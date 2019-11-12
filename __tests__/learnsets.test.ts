import { formatResponse, gCall } from './testUtils/testUtils';
import { DataResponse } from './testUtils/types';
import { GraphQLError } from 'graphql';

describe('getPokemonLearnset', () => {
  const lvlmovesFragment = 'fragment lvlmoves on LearnsetLevelUpMove { name generation level }';
  const movesFragment = 'fragment moves on LearnsetMove { name generation }';
  const entryFragment = `
    fragment entry on LearnsetEntry {
      levelUpMoves { ...lvlmoves }
      virtualTransferMoves { ...moves }
      tutorMoves { ...moves }
      tmMoves { ...moves }
      eggMoves { ...moves }
      eventMoves { ...moves }
      dreamworldMoves { ...moves }
    }
  `;

  const getPokemonLearnset = `
  ${lvlmovesFragment}
  ${movesFragment}
  ${entryFragment}

  query ($pokemon: Pokemon! $moves: [Moves!]! $generation: Int) {
    getPokemonLearnset(pokemon: $pokemon moves: $moves generation: $generation) {
      ...entry
    }
  }`;

  test('GIVEN a valid pokemon and move array THEN returns LearnsetEntry', async () => {
    const { data } = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: [ 'dragondance' ] },
    }).then(formatResponse) as DataResponse<'getPokemonLearnset'>;

    expect(data.getPokemonLearnset.levelUpMoves).toContainEqual({ name: 'dragondance', generation: 7, level: 61 });
    expect(data.getPokemonLearnset.eventMoves).toContainEqual({ name: 'dragondance', generation: 6 });
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a valid pokemon and single move THEN returns LearnsetEntry', async () => {
    const { data } = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: 'dragondance' },
    }).then(formatResponse) as DataResponse<'getPokemonLearnset'>;

    expect(data.getPokemonLearnset.levelUpMoves).toContainEqual({ name: 'dragondance', generation: 7, level: 61 });
    expect(data.getPokemonLearnset.eventMoves).toContainEqual({ name: 'dragondance', generation: 6 });
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a valid pokemon, move array and generation THEN returns LearnsetEntry', async () => {
    const { data } = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: [ 'dragondance' ], generation: 7 },
    }).then(formatResponse) as DataResponse<'getPokemonLearnset'>;

    expect(data.getPokemonLearnset.levelUpMoves).toContainEqual({ name: 'dragondance', generation: 7, level: 61 });
    expect(data.getPokemonLearnset.eventMoves).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a valid pokemon, a single move and generation THEN returns LearnsetEntry', async () => {
    const { data } = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: 'dragondance', generation: 7 },
    }).then(formatResponse) as DataResponse<'getPokemonLearnset'>;

    expect(data.getPokemonLearnset.levelUpMoves).toContainEqual({ name: 'dragondance', generation: 7, level: 61 });
    expect(data.getPokemonLearnset.eventMoves).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a valid pokemon and multiple moves THEN returns LearnsetEntry', async () => {
    const { data } = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: [ 'dragondance', 'dragonclaw' ] },
    }).then(formatResponse) as DataResponse<'getPokemonLearnset'>;

    expect(data.getPokemonLearnset.levelUpMoves).toContainEqual({ name: 'dragondance', generation: 7, level: 61 });
    expect(data.getPokemonLearnset.tmMoves).toContainEqual({name: 'dragonclaw', generation: 6});
    expect(data.getPokemonLearnset.eventMoves).toContainEqual({name: 'dragondance', generation: 5});
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a valid pokemon, multiple moves and generation THEN returns LearnsetEntry', async () => {
    const { data } = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: [ 'dragondance', 'dragonclaw' ], generation: 7 },
    }).then(formatResponse) as DataResponse<'getPokemonLearnset'>;

    expect(data.getPokemonLearnset.levelUpMoves).toContainEqual({ name: 'dragondance', generation: 7, level: 61 });
    expect(data.getPokemonLearnset.tmMoves).toContainEqual({name: 'dragonclaw', generation: 7});
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon THEN returns error', async () => {
    const data = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'totally_invalid_pokemon' },
    });

    data.errors!.forEach(error => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move THEN returns error', async () => {
    const data = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: 'totally_invalid_move' },
    });

    data.errors!.forEach(error => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid generation THEN returns error', async () => {
    const data = await gCall({
      source: getPokemonLearnset,
      variableValues: { pokemon: 'dragonite', moves: 'dragondance', generation: 0 },
    });

    data.errors!.forEach(error => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});