import { getMoveName, getMoveWithFullData } from '#test-utils/queries/moves';
import { gCall } from '#test-utils/testUtils';

describe('getMove', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Move', async () => {
      const { data } = await gCall<'getMove'>({
        source: getMoveName,
        variableValues: { move: 'dragonclaw' }
      });

      expect(data.getMove.name).toEqual('Dragon Claw');
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid move request THEN returns Move WITH all data', async () => {
      const { data } = await gCall<'getMove'>({
        source: getMoveWithFullData,
        variableValues: { move: 'dragonclaw' }
      });

      expect(data.getMove).toEqual({
        desc: 'No additional effect.',
        isFieldMove: null,
        name: 'Dragon Claw',
        shortDesc: 'No additional effect.',
        serebiiPage: 'https://www.serebii.net/attackdex-swsh/dragonclaw.shtml',
        smogonPage: 'https://www.smogon.com/dex/ss/moves/dragon-claw',
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(move)'
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid move THEN returns error', async () => {
      const data = await gCall({
        source: getMoveName,
        variableValues: { move: 'totally_invalid_move' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe(
        'Variable "$move" got invalid value "totally_invalid_move"; Value "totally_invalid_move" does not exist in "MovesEnum" enum.'
      );
    });
  });
});
