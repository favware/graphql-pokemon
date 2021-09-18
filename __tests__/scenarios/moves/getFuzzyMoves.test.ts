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
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(move)',
          desc: 'No additional effect.',
          isFieldMove: null,
          name: 'Dragon Claw',
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/dragonclaw.shtml',
          shortDesc: 'No additional effect.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/dragon-claw'
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
          desc: null,
          isFieldMove: null,
          name: 'Guardian of Alola',
          shortDesc: "Does damage equal to 3/4 target's current HP.",
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/guardianofalola.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/guardian-of-alola',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Guardian_Of_Alola_(move)'
        },
        {
          desc: null,
          isFieldMove: null,
          name: 'Malicious Moonsault',
          shortDesc: 'Damage doubles if the target used Minimize.',
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/maliciousmoonsault.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/malicious-moonsault',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Malicious_Moonsault_(move)'
        },
        {
          desc: null,
          isFieldMove: null,
          name: 'Menacing Moonraze Maelstrom',
          shortDesc: 'Ignores the Abilities of other Pokémon.',
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/menacingmoonrazemaelstrom.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/menacing-moonraze-maelstrom',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Menacing_Moonraze_Maelstrom_(move)'
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
          desc: null,
          isFieldMove: null,
          name: 'Never-Ending Nightmare',
          shortDesc: "Power is equal to the base move's Z-Power.",
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/neverendingnightmare.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/never-ending-nightmare',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Never_ending_Nightmare_(move)'
        },
        {
          desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to make the target flinch.",
          isFieldMove: null,
          name: 'Double Iron Bash',
          shortDesc: 'Hits twice. 30% chance to make the target flinch.',
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/doubleironbash.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/double-iron-bash',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Double_Iron_Bash_(move)'
        },
        {
          desc: 'The terrain becomes Psychic Terrain.',
          isFieldMove: null,
          name: 'Genesis Supernova',
          shortDesc: 'Summons Psychic Terrain.',
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/genesissupernova.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/genesis-supernova',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Genesis_Supernova_(move)'
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
