import { getFuzzyAbilityName, getFuzzyAbilityWithFullData } from '#test-utils/queries/abilities';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getFuzzyAbility', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid fuzzy name THEN returns Ability', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityName,
        variables: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          name: 'Multiscale'
        }
      ]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid fuzzy ability request THEN returns Ability WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityWithFullData,
        variables: { ability: 'multiscale' }
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
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityWithFullData,
        variables: { ability: 'a', take: 3 }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          desc: 'While this Pokémon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.',
          isFieldAbility: null,
          name: 'Damp',
          shortDesc: 'Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.',
          serebiiPage: 'https://www.serebii.net/abilitydex/damp.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/damp',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Damp_(Ability)'
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
          desc: null,
          isFieldAbility: null,
          name: 'Air Lock',
          shortDesc: 'While this Pokémon is active, the effects of weather conditions are disabled.',
          serebiiPage: 'https://www.serebii.net/abilitydex/air_lock.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/air_lock',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Air_Lock_(Ability)'
        }
      ]);
    });

    test('GIVEN single letter ability AND reverse:true THEN returns multiple Abilities WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityWithFullData,
        variables: { ability: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          desc: null,
          isFieldAbility: null,
          name: 'Water Compaction',
          shortDesc: "This Pokémon's Defense is raised 2 stages after it is damaged by a Water-type move.",
          serebiiPage: 'https://www.serebii.net/abilitydex/water_compaction.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/water_compaction',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Water_Compaction_(Ability)'
        },
        {
          desc: 'Pokémon making contact with this Pokémon have their Ability swapped with this one. Does not affect a Pokémon which has the Ability As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.',
          isFieldAbility: null,
          name: 'Wandering Spirit',
          shortDesc: 'Pokémon making contact with this Pokémon have their Ability swapped with this one.',
          serebiiPage: 'https://www.serebii.net/abilitydex/wandering_spirit.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/wandering_spirit',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Wandering_Spirit_(Ability)'
        },
        {
          desc: 'While this Pokémon is active, Abilities have no effect. Does not affect the Abilities As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.',
          isFieldAbility: null,
          name: 'Neutralizing Gas',
          shortDesc: 'While this Pokémon is active, Abilities have no effect.',
          serebiiPage: 'https://www.serebii.net/abilitydex/neutralizing_gas.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/neutralizing_gas',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Neutralizing_Gas_(Ability)'
        }
      ]);
    });
  });
});
