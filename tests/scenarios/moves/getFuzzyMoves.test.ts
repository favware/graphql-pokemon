import { getFuzzyMoveName, getFuzzyMoveWithFullData } from '#test-utils/queries/moves';
import { executeGraphQL } from '#test-utils/testUtils';
import { IsNonStandard } from '#utils/isNonStandardEnum';

describe('getFuzzyMove', () => {
  describe('Fuzzy Move name only requests', () => {
    test('GIVEN a valid name THEN returns Move', async () => {
      const { data } = await executeGraphQL<'getFuzzyMove'>({
        query: getFuzzyMoveName,
        variables: { move: 'dragonclaw' }
      });

      expect(data.getFuzzyMove).toEqual([{ name: 'Dragon Claw' }]);
    });
  });

  describe('Fuzzy Move full data requests', () => {
    test('GIVEN valid move request THEN returns Move WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyMove'>({
        query: getFuzzyMoveWithFullData,
        variables: { move: 'dragonclaw' }
      });

      expect(data.getFuzzyMove).toEqual([
        {
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
        }
      ]);
    });

    test('GIVEN single letter move THEN returns multiple Moves WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyMove'>({
        query: getFuzzyMoveWithFullData,
        variables: { move: 'a', take: 3 }
      });

      expect(data.getFuzzyMove).toEqual([
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Sinister Arrow Raid',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/sinisterarrowraid.shtml',
          shortDesc: 'No additional effect.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/sinister-arrow-raid',
          target: 'Normal',
          type: 'Ghost',
          zMovePower: 200,
          basePower: '180',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Sinister_Arrow_Raid_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: 'No additional effect.',
          isFieldMove: null,
          isGMax: null,
          isNonstandard: IsNonStandard.Past,
          isZ: 'Decidium Z'
        },
        {
          accuracy: 100,
          maxMovePower: 70,
          name: 'Acid',
          pp: 30,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/acid.shtml',
          shortDesc: '10% chance to lower the foe(s) Sp. Def by 1.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/acid',
          target: 'Adjacent Foes',
          type: 'Poison',
          zMovePower: 100,
          basePower: '40',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Acid_(move)',
          category: 'Special',
          contestType: 'Clever',
          desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
          isFieldMove: null,
          isGMax: null,
          isNonstandard: null,
          isZ: null
        },
        {
          accuracy: 100,
          maxMovePower: 90,
          name: 'Absorb',
          pp: 25,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/absorb.shtml',
          shortDesc: 'User recovers 50% of the damage dealt.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/absorb',
          target: 'Normal',
          type: 'Grass',
          zMovePower: 100,
          basePower: '20',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Absorb_(move)',
          category: 'Special',
          contestType: 'Clever',
          desc: 'The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.',
          isFieldMove: null,
          isGMax: null,
          isNonstandard: null,
          isZ: null
        }
      ]);
    });

    test('GIVEN single letter move AND reverse:true THEN returns multiple Moves WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyMove'>({
        query: getFuzzyMoveWithFullData,
        variables: { move: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyMove).toEqual([
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Shattered Psyche',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/shatteredpsyche.shtml',
          shortDesc: "Power is equal to the base move's Z-Power.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/shattered-psyche',
          target: 'Normal',
          type: 'Psychic',
          zMovePower: 100,
          basePower: '1',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Shattered_Psyche_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: IsNonStandard.Past,
          isZ: 'Psychium Z'
        },
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Revival Blessing',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/revivalblessing.shtml',
          shortDesc: 'Revives a fainted Pokémon to 50% HP.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/revival-blessing',
          target: 'Self',
          type: 'Normal',
          zMovePower: 0,
          basePower: '0',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Revival_Blessing_(move)',
          category: 'Status',
          contestType: null,
          desc: 'A fainted party member is selected and revived with 1/2 its max HP, rounded down. Fails if there are no fainted party members.',
          isFieldMove: null,
          isGMax: null,
          isNonstandard: null,
          isZ: null
        },
        {
          accuracy: 100,
          maxMovePower: 130,
          name: 'Revelation Dance',
          pp: 15,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/revelationdance.shtml',
          shortDesc: "Type varies based on the user's primary type.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/revelation-dance',
          target: 'Normal',
          type: 'Normal',
          zMovePower: 175,
          basePower: '90',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Revelation_Dance_(move)',
          category: 'Special',
          contestType: 'Beautiful',
          desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
          isFieldMove: null,
          isGMax: null,
          isNonstandard: null,
          isZ: null
        }
      ]);
    });
  });
});
