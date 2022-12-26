import { getMoveName, getMoveWithFullData, getMoveZPower } from '#test-utils/queries/moves';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getMove', () => {
  describe('Regular Move name only requests', () => {
    test('GIVEN a valid name THEN returns Move', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveName,
        variables: { move: 'dragonclaw' }
      });

      expect(data.getMove.name).toEqual('Dragon Claw');
    });
  });

  describe('Regular Move full data requests', () => {
    test('GIVEN valid move request THEN returns Move WITH all data', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveWithFullData,
        variables: { move: 'dragonclaw' }
      });

      expect(data.getMove).toEqual({
        accuracy: 100,
        maxMovePower: 130,
        name: 'Dragon Claw',
        pp: 15,
        priority: 0,
        serebiiPage: 'https://www.serebii.net/attackdex-swsh/dragonclaw.shtml',
        shortDesc: 'No additional effect.',
        smogonPage: 'https://www.smogon.com/dex/ss/moves/dragon-claw',
        target: 'Normal',
        type: 'Dragon',
        zMovePower: 160,
        basePower: '80',
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(move)',
        category: 'Physical',
        contestType: 'Cool',
        desc: 'No additional effect.',
        isFieldMove: null,
        isGMax: null,
        isNonstandard: null,
        isZ: null
      });
    });
  });

  describe('Get differently computed Z-Power', () => {
    test('GIVEN move with custom z-power THEN returns predefined Z-Power', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'flyingpress' }
      });

      expect(data.getMove.zMovePower).toEqual(170);
    });

    test('GIVEN move base power between 0 and 55 THEN returns Z-Power: 100', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'electroweb' }
      });

      expect(data.getMove.zMovePower).toEqual(100);
    });

    test('GIVEN move base power between 60 and 65 THEN returns Z-Power: 120', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'firefang' }
      });

      expect(data.getMove.zMovePower).toEqual(120);
    });

    test('GIVEN move base power between 70 and 75 THEN returns Z-Power: 140', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'burningjealousy' }
      });

      expect(data.getMove.zMovePower).toEqual(140);
    });

    test('GIVEN move base power between 80 and 85 THEN returns Z-Power: 160', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'anchorshot' }
      });

      expect(data.getMove.zMovePower).toEqual(160);
    });

    test('GIVEN move base power between 90 and 95 THEN returns Z-Power: 175', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'aquatail' }
      });

      expect(data.getMove.zMovePower).toEqual(175);
    });

    test('GIVEN move base power of 100 THEN returns Z-Power: 180', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'aeroblast' }
      });

      expect(data.getMove.zMovePower).toEqual(180);
    });

    test('GIVEN move base power of 110 THEN returns Z-Power: 185', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'aurawheel' }
      });

      expect(data.getMove.zMovePower).toEqual(185);
    });

    test('GIVEN move base power between 120 and 125 THEN returns Z-Power: 190', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'astralbarrage' }
      });

      expect(data.getMove.zMovePower).toEqual(190);
    });

    test('GIVEN move base power of 130 THEN returns Z-Power: 195', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'blueflare' }
      });

      expect(data.getMove.zMovePower).toEqual(195);
    });

    test('GIVEN move base power greater than 140 THEN returns Z-Power: 200', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'focuspunch' }
      });

      expect(data.getMove.zMovePower).toEqual(200);
    });

    test('GIVEN move which cannot be Z-Move THEN returns Z-Power: 0', async () => {
      const { data } = await executeGraphQL<'getMove'>({
        query: getMoveZPower,
        variables: { move: 'pikapapow' }
      });

      expect(data.getMove.zMovePower).toEqual(0);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid move THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getMoveName,
        variables: { move: 'totally_invalid_move' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe(
        'Variable "$move" got invalid value "totally_invalid_move"; Value "totally_invalid_move" does not exist in "MovesEnum" enum.'
      );
    });
  });
});
