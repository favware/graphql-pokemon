import { getFuzzyAbilityName, getFuzzyAbilityWithFullData } from '#test-utils/queries/abilities';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyAbility', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Ability', async () => {
      const { data } = await gCall<'getFuzzyAbility'>({
        source: getFuzzyAbilityName,
        variableValues: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          name: 'Multiscale'
        }
      ]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid ability request THEN returns Ability WITH all data', async () => {
      const { data } = await gCall<'getFuzzyAbility'>({
        source: getFuzzyAbilityWithFullData,
        variableValues: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
          desc: null,
          isFieldAbility: null,
          name: 'Multiscale',
          serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
          shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
        }
      ]);
    });

    test('GIVEN single letter ability THEN returns multiple Abilities WITH all data', async () => {
      const { data } = await gCall<'getFuzzyAbility'>({
        source: getFuzzyAbilityWithFullData,
        variableValues: { ability: 'a', take: 3 }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          desc: "This Pokémon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
          isFieldAbility: null,
          name: 'Adaptability',
          shortDesc: "This Pokémon's same-type attack bonus (STAB) is 2 instead of 1.5.",
          serebiiPage: 'https://www.serebii.net/abilitydex/adaptability.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/adaptability',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Adaptability_(Ability)'
        },
        {
          desc: "This Pokémon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
          isFieldAbility: null,
          name: 'Aerilate',
          shortDesc: "This Pokémon's Normal-type moves become Flying type and have 1.2x power.",
          serebiiPage: 'https://www.serebii.net/abilitydex/aerilate.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/aerilate',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Aerilate_(Ability)'
        },
        {
          desc: "If this Pokémon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokémon has the Ability Damp, this effect is prevented.",
          isFieldAbility: null,
          name: 'Aftermath',
          shortDesc: "If this Pokémon is KOed with a contact move, that move's user loses 1/4 its max HP.",
          serebiiPage: 'https://www.serebii.net/abilitydex/aftermath.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/aftermath',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Aftermath_(Ability)'
        }
      ]);
    });

    test('GIVEN single letter ability AND reverse:true THEN returns multiple Abilities WITH all data', async () => {
      const { data } = await gCall<'getFuzzyAbility'>({
        source: getFuzzyAbilityWithFullData,
        variableValues: { ability: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          desc: 'This Pokémon copies the Ability of an ally that faints. Abilities that cannot be copied are "No Ability", As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.',
          isFieldAbility: null,
          name: 'Power of Alchemy',
          shortDesc: 'This Pokémon copies the Ability of an ally that faints.',
          serebiiPage: 'https://www.serebii.net/abilitydex/power_of_alchemy.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/power_of_alchemy',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Power_Of_Alchemy_(Ability)'
        },
        {
          desc: "Prevents other Pokémon from lowering this Pokémon's stat stages. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
          isFieldAbility: null,
          name: 'Full Metal Body',
          shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages.",
          serebiiPage: 'https://www.serebii.net/abilitydex/full_metal_body.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/full_metal_body',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Full_Metal_Body_(Ability)'
        },
        {
          desc: null,
          isFieldAbility: null,
          name: 'Propeller Tail',
          shortDesc: "This Pokémon's moves cannot be redirected to a different target by any effect.",
          serebiiPage: 'https://www.serebii.net/abilitydex/propeller_tail.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/propeller_tail',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Propeller_Tail_(Ability)'
        }
      ]);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid ability THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyAbilityName,
        variableValues: { ability: 'totally_invalid_ability' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No abilities found for: totally_invalid_ability');
    });
  });
});
