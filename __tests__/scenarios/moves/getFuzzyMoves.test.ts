import { getFuzzyMoveName, getFuzzyMoveWithFullData } from '#test-utils/queries/moves';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyMove', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Move', async () => {
      const { data } = await gCall<'getFuzzyMove'>({
        source: getFuzzyMoveName,
        variableValues: { move: 'dragonclaw' }
      });

      expect(data.getFuzzyMove).toEqual([{ name: 'Dragon Claw' }]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid move request THEN returns Move WITH all data', async () => {
      const { data } = await gCall<'getFuzzyMove'>({
        source: getFuzzyMoveWithFullData,
        variableValues: { move: 'dragonclaw' }
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
      const { data } = await gCall<'getFuzzyMove'>({
        source: getFuzzyMoveWithFullData,
        variableValues: { move: 'a', take: 3 }
      });

      expect(data.getFuzzyMove).toEqual([
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Guardian of Alola',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/guardianofalola.shtml',
          shortDesc: "Does damage equal to 3/4 target's current HP.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/guardian-of-alola',
          target: 'Normal',
          type: 'Fairy',
          zMovePower: 0,
          basePower: '0',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Guardian_Of_Alola_(move)',
          category: 'Special',
          contestType: 'Tough',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Tapunium Z'
        },
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Malicious Moonsault',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/maliciousmoonsault.shtml',
          shortDesc: 'Damage doubles if the target used Minimize.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/malicious-moonsault',
          target: 'Normal',
          type: 'Dark',
          zMovePower: 200,
          basePower: '180',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Malicious_Moonsault_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Incinium Z'
        },
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Menacing Moonraze Maelstrom',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/menacingmoonrazemaelstrom.shtml',
          shortDesc: 'Ignores the Abilities of other Pokémon.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/menacing-moonraze-maelstrom',
          target: 'Normal',
          type: 'Ghost',
          zMovePower: 200,
          basePower: '200',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Menacing_Moonraze_Maelstrom_(move)',
          category: 'Special',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Lunalium Z'
        }
      ]);
    });

    test('GIVEN single letter move AND reverse:true THEN returns multiple Moves WITH all data', async () => {
      const { data } = await gCall<'getFuzzyMove'>({
        source: getFuzzyMoveWithFullData,
        variableValues: { move: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyMove).toEqual([
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Never-Ending Nightmare',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/neverendingnightmare.shtml',
          shortDesc: "Power is equal to the base move's Z-Power.",
          smogonPage: 'https://www.smogon.com/dex/ss/moves/never-ending-nightmare',
          target: 'Normal',
          type: 'Ghost',
          zMovePower: 100,
          basePower: '1',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Never_ending_Nightmare_(move)',
          category: 'Physical',
          contestType: 'Cool',
          desc: null,
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Ghostium Z'
        },
        {
          accuracy: 100,
          maxMovePower: 140,
          name: 'Double Iron Bash',
          pp: 5,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/doubleironbash.shtml',
          shortDesc: 'Hits twice. 30% chance to make the target flinch.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/double-iron-bash',
          target: 'Normal',
          type: 'Steel',
          zMovePower: 120,
          basePower: '60',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Double_Iron_Bash_(move)',
          category: 'Physical',
          contestType: 'Clever',
          desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to make the target flinch.",
          isFieldMove: null,
          isGMax: null,
          isNonstandard: null,
          isZ: null
        },
        {
          accuracy: 100,
          maxMovePower: null,
          name: 'Genesis Supernova',
          pp: 1,
          priority: 0,
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/genesissupernova.shtml',
          shortDesc: 'Summons Psychic Terrain.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/genesis-supernova',
          target: 'Normal',
          type: 'Psychic',
          zMovePower: 200,
          basePower: '185',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Genesis_Supernova_(move)',
          category: 'Special',
          contestType: 'Cool',
          desc: 'The terrain becomes Psychic Terrain.',
          isFieldMove: null,
          isGMax: null,
          isNonstandard: 'Past',
          isZ: 'Mewnium Z'
        }
      ]);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid move THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyMoveName,
        variableValues: { move: 'totally_invalid_move' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No moves found for: totally_invalid_move');
    });
  });
});
