import { getFuzzyMoveName, getFuzzyMoveWithFullData } from '#test-utils/queries/moves';
import { executeGraphQL } from '#test-utils/testUtils';

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
        },
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Assist',
          pp: 20,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/assist.shtml',
          shortDesc: 'Uses a random move known by a team member.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/assist',
          target: 'Self',
          type: 'Normal',
          zMovePower: 0,
          basePower: '0',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Assist_(move)',
          category: 'Status',
          contestType: 'Cute',
          desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Blazing Torque, Bounce, Celebrate, Chatter, Circle Throw, Combat Torque, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Magical Torque, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Noxious Torque, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or Wicked Torque.",
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
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
          basePower: '1',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Black_Hole_Eclipse_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Darkinium Z',
          maxMovePower: null,
          name: 'Black Hole Eclipse',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/blackholeeclipse.shtml',
          shortDesc: "Power is equal to the base move's Z-Power.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/black-hole-eclipse',
          target: 'Normal',
          type: 'Dark',
          zMovePower: 100
        },
        {
          accuracy: 100,
          basePower: '1',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Devastating_Drake_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Dragonium Z',
          maxMovePower: null,
          name: 'Devastating Drake',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/devastatingdrake.shtml',
          shortDesc: "Power is equal to the base move's Z-Power.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/devastating-drake',
          target: 'Normal',
          type: 'Dragon',
          zMovePower: 100
        },
        {
          accuracy: 100,
          basePower: '1',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Shattered_Psyche_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Psychium Z',
          maxMovePower: null,
          name: 'Shattered Psyche',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/shatteredpsyche.shtml',
          shortDesc: "Power is equal to the base move's Z-Power.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/shattered-psyche',
          target: 'Normal',
          type: 'Psychic',
          zMovePower: 100
        }
      ]);
    });
  });
});
