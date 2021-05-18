/* eslint-disable max-len */
import GraphQLCollection from '#utils/GraphQLCollection';
import type { Pokemon } from '#utils/pokemon';

/** The abilities in Pokémon */
export default new GraphQLCollection<string, Pokemon.Ability>([
  [
    'adaptability',
    {
      desc: "This Pokémon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
      shortDesc: "This Pokémon's same-type attack bonus (STAB) is 2 instead of 1.5.",
      name: 'Adaptability'
    }
  ],
  [
    'aerilate',
    {
      desc: "This Pokémon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      shortDesc: "This Pokémon's Normal-type moves become Flying type and have 1.2x power.",
      name: 'Aerilate'
    }
  ],
  [
    'aftermath',
    {
      desc: "If this Pokémon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokémon has the Ability Damp, this effect is prevented.",
      shortDesc: "If this Pokémon is KOed with a contact move, that move's user loses 1/4 its max HP.",
      name: 'Aftermath'
    }
  ],
  [
    'airlock',
    {
      shortDesc: 'While this Pokémon is active, the effects of weather conditions are disabled.',
      name: 'Air Lock'
    }
  ],
  [
    'analytic',
    {
      desc: "The power of this Pokémon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
      shortDesc: "This Pokémon's attacks have 1.3x power if it is the last to move in a turn.",
      name: 'Analytic'
    }
  ],
  [
    'angerpoint',
    {
      desc: 'If this Pokémon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.',
      shortDesc: 'If this Pokémon (not its substitute) takes a critical hit, its Attack is raised 12 stages.',
      name: 'Anger Point'
    }
  ],
  [
    'anticipation',
    {
      desc: 'On switch-in, this Pokémon is alerted if any opposing Pokémon has an attack that is super effective on this Pokémon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, while Hidden Power, Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.',
      shortDesc: 'On switch-in, this Pokémon shudders if any foe has a supereffective or OHKO move.',
      name: 'Anticipation'
    }
  ],
  [
    'arenatrap',
    {
      desc: 'Prevents adjacent opposing Pokémon from choosing to switch out unless they are immune to trapping or are airborne.',
      shortDesc: 'Prevents adjacent foes from choosing to switch unless they are airborne.',
      name: 'Arena Trap',
      isFieldAbility:
        'Having a Pokémon with Arena Trap at the front of your party will double the encounter rate of all wild Pokémon, even if the Pokémon with Arena Trap has fainted.'
    }
  ],
  [
    'aromaveil',
    {
      desc: 'This Pokémon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.',
      shortDesc: 'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.',
      name: 'Aroma Veil'
    }
  ],
  [
    'asoneasoneglastrier',
    {
      shortDesc: 'The combination of Unnerve and Chilling Neigh.',
      name: 'As One (Glastrier)'
    }
  ],
  [
    'asonespectrier',
    {
      shortDesc: 'The combination of Unnerve and Grim Neigh.',
      name: 'As One (Spectrier)'
    }
  ],
  [
    'aurabreak',
    {
      desc: 'While this Pokémon is active, the effects of the Abilities Dark Aura and Fairy Aura are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.',
      shortDesc: 'While this Pokémon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.',
      name: 'Aura Break'
    }
  ],
  [
    'baddreams',
    {
      desc: 'Causes adjacent opposing Pokémon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.',
      shortDesc: 'Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.',
      name: 'Bad Dreams'
    }
  ],
  [
    'ballfetch',
    {
      desc: 'At any time after the first Poké Ball is thrown and fails to catch a Pokémon, at the end of a turn, if a Pokémon with Ball Fetch is on the field and not holding another item, it will pick up the same type of ball as the first one thrown. This can only occur once in a battle.',
      shortDesc: 'If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle.',
      name: 'Ball Fetch'
    }
  ],
  [
    'battery',
    {
      shortDesc: "This Pokémon's allies have the power of their special attacks multiplied by 1.3.",
      name: 'Battery'
    }
  ],
  [
    'battlearmor',
    {
      shortDesc: 'This Pokémon cannot be struck by a critical hit.',
      name: 'Battle Armor'
    }
  ],
  [
    'battlebond',
    {
      desc: 'If this Pokémon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokémon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.',
      shortDesc: 'After KOing a Pokémon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.',
      name: 'Battle Bond'
    }
  ],
  [
    'beastboost',
    {
      desc: "This Pokémon's highest stat is raised by 1 stage if it attacks and knocks out another Pokémon.",
      shortDesc: "This Pokémon's highest stat is raised by 1 if it attacks and KOes another Pokémon.",
      name: 'Beast Boost'
    }
  ],
  [
    'berserk',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
      shortDesc: "This Pokémon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
      name: 'Berserk'
    }
  ],
  [
    'bigpecks',
    {
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's Defense stat stage.",
      name: 'Big Pecks'
    }
  ],
  [
    'blaze',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's attacking stat is 1.5x with Fire attacks.",
      name: 'Blaze'
    }
  ],
  [
    'bulletproof',
    {
      desc: 'This Pokémon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.',
      shortDesc: 'Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).',
      name: 'Bulletproof'
    }
  ],
  [
    'cheekpouch',
    {
      desc: "If this Pokémon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect.",
      shortDesc: "If this Pokémon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
      name: 'Cheek Pouch'
    }
  ],
  [
    'chillingneigh',
    {
      desc: "This Pokémon's Attack is raised by 1 stage if it attacks and knocks out another Pokémon.",
      shortDesc: "This Pokémon's Attack is raised by 1 stage if it attacks and KOes another Pokémon.",
      name: 'Chilling Neigh'
    }
  ],
  [
    'chlorophyll',
    {
      desc: "If Sunny Day is active and this Pokémon is not holding Utility Umbrella, this Pokémon's Speed is doubled.",
      shortDesc: "If Sunny Day is active, this Pokémon's Speed is doubled.",
      name: 'Chlorophyll'
    }
  ],
  [
    'clearbody',
    {
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages.",
      name: 'Clear Body'
    }
  ],
  [
    'cloudnine',
    {
      shortDesc: 'While this Pokémon is active, the effects of weather conditions are disabled.',
      name: 'Cloud Nine'
    }
  ],
  [
    'colorchange',
    {
      desc: "This Pokémon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
      shortDesc: "This Pokémon's type changes to the type of a move it's hit by, unless it has the type.",
      name: 'Color Change'
    }
  ],
  [
    'comatose',
    {
      desc: 'This Pokémon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
      shortDesc: 'This Pokémon cannot be statused, and is considered to be asleep.',
      name: 'Comatose'
    }
  ],
  [
    'competitive',
    {
      desc: "This Pokémon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokémon.",
      shortDesc: "This Pokémon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
      name: 'Competitive'
    }
  ],
  [
    'compoundeyes',
    {
      shortDesc: "This Pokémon's moves have their accuracy multiplied by 1.3.",
      name: 'Compound Eyes',
      isFieldAbility:
        'Having a Pokémon with Compound Eyes at the front of your party increases the chances of finding a wild Pokémon holding an item increase from 50%/5% to 60%/20%. In dark grass in Generation 5, the chances increase from 50%/5%/1% to 60%/20%/5%.'
    }
  ],
  [
    'contrary',
    {
      desc: 'If this Pokémon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.',
      shortDesc: 'If this Pokémon has a stat stage raised it is lowered instead, and vice versa.',
      name: 'Contrary'
    }
  ],
  [
    'corrosion',
    {
      shortDesc: 'This Pokémon can poison or badly poison other Pokémon regardless of their typing.',
      name: 'Corrosion'
    }
  ],
  [
    'cottondown',
    {
      desc: 'When this Pokémon is hit by an attack, the Speed of all other Pokémon on the field is lowered by 1 stage.',
      shortDesc: 'If this Pokémon is hit, it lowers the Speed of all other Pokémon on the field 1 stage.',
      name: 'Cotton Down'
    }
  ],
  [
    'curiousmedicine',
    {
      shortDesc: "On switch-in, this Pokémon's allies have their stat stages reset to 0.",
      name: 'Curious Medicine'
    }
  ],
  [
    'cursedbody',
    {
      desc: "If this Pokémon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
      shortDesc: 'If this Pokémon is hit by an attack, there is a 30% chance that move gets disabled.',
      name: 'Cursed Body'
    }
  ],
  [
    'cutecharm',
    {
      desc: 'There is a 30% chance a Pokémon making contact with this Pokémon will become infatuated if it is of the opposite gender.',
      shortDesc: '30% chance of infatuating Pokémon of the opposite gender if they make contact.',
      name: 'Cute Charm',
      isFieldAbility:
        'If a Pokémon with Cute Charm is at the front of the party (even if fainted), there is a 66.7% chance that a Pokémon of the opposite gender to the Pokémon with Cute Charm will be encountered. This does not affect swarming Pokémon species (except in Generation 4) or Pokémon found in Hidden Grottos.'
    }
  ],
  [
    'damp',
    {
      desc: 'While this Pokémon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.',
      shortDesc: 'Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.',
      name: 'Damp'
    }
  ],
  [
    'dancer',
    {
      desc: 'After another Pokémon uses a dance move, this Pokémon uses the same move. Moves used by this Ability cannot be copied again.',
      shortDesc: 'After another Pokémon uses a dance move, this Pokémon uses the same move.',
      name: 'Dancer'
    }
  ],
  [
    'darkaura',
    {
      desc: 'While this Pokémon is active, the power of Dark-type moves used by active Pokémon is multiplied by 1.33.',
      shortDesc: 'While this Pokémon is active, a Dark move used by any Pokémon has 1.33x power.',
      name: 'Dark Aura'
    }
  ],
  [
    'dauntlessshield',
    {
      shortDesc: "On switch-in, this Pokémon's Defense is raised by 1 stage.",
      name: 'Dauntless Shield'
    }
  ],
  [
    'dazzling',
    {
      desc: 'While this Pokémon is active, priority moves from opposing Pokémon targeted at allies are prevented from having an effect.',
      shortDesc: 'While this Pokémon is active, allies are protected from opposing priority moves.',
      name: 'Dazzling'
    }
  ],
  [
    'defeatist',
    {
      desc: 'While this Pokémon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.',
      shortDesc: 'While this Pokémon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.',
      name: 'Defeatist'
    }
  ],
  [
    'defiant',
    {
      desc: "This Pokémon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokémon.",
      shortDesc: "This Pokémon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
      name: 'Defiant'
    }
  ],
  [
    'deltastream',
    {
      desc: 'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokémon. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by Desolate Land or Primordial Sea.',
      shortDesc: 'On switch-in, strong winds begin until this Ability is not active in battle.',
      name: 'Delta Stream'
    }
  ],
  [
    'desolateland',
    {
      desc: 'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by Delta Stream or Primordial Sea.',
      shortDesc: 'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.',
      name: 'Desolate Land'
    }
  ],
  [
    'disguise',
    {
      desc: 'If this Pokémon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.',
      shortDesc: '(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.',
      name: 'Disguise'
    }
  ],
  [
    'download',
    {
      desc: "On switch-in, this Pokémon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokémon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
      shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
      name: 'Download'
    }
  ],
  [
    'dragonsmaw',
    {
      shortDesc: "This Pokémon's attacking stat is multiplied by 1.5 while using a Dragon-type attack.",
      name: "Dragon's Maw"
    }
  ],
  [
    'drizzle',
    {
      shortDesc: 'On switch-in, this Pokémon summons Rain Dance.',
      name: 'Drizzle'
    }
  ],
  [
    'drought',
    {
      shortDesc: 'On switch-in, this Pokémon summons Sunny Day.',
      name: 'Drought'
    }
  ],
  [
    'dryskin',
    {
      desc: 'This Pokémon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokémon. At the end of each turn, this Pokémon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokémon is holding Utility Umbrella, the effects of weather are nullified.',
      shortDesc: 'This Pokémon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.',
      name: 'Dry Skin'
    }
  ],
  [
    'earlybird',
    {
      shortDesc: "This Pokémon's sleep counter drops by 2 instead of 1.",
      name: 'Early Bird'
    }
  ],
  [
    'effectspore',
    {
      desc: '30% chance a Pokémon making contact with this Pokémon will be poisoned, paralyzed, or fall asleep.',
      shortDesc: '30% chance of poison/paralysis/sleep on others making contact with this Pokémon.',
      name: 'Effect Spore'
    }
  ],
  [
    'electricsurge',
    {
      shortDesc: 'On switch-in, this Pokémon summons Electric Terrain.',
      name: 'Electric Surge'
    }
  ],
  [
    'emergencyexit',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
      shortDesc: 'This Pokémon switches out when it reaches 1/2 or less of its maximum HP.',
      name: 'Emergency Exit'
    }
  ],
  [
    'fairyaura',
    {
      desc: 'While this Pokémon is active, the power of Fairy-type moves used by active Pokémon is multiplied by 1.33.',
      shortDesc: 'While this Pokémon is active, a Fairy move used by any Pokémon has 1.33x power.',
      name: 'Fairy Aura'
    }
  ],
  [
    'filter',
    {
      shortDesc: 'This Pokémon receives 3/4 damage from supereffective attacks.',
      name: 'Filter'
    }
  ],
  [
    'flamebody',
    {
      shortDesc: '30% chance a Pokémon making contact with this Pokémon will be burned.',
      name: 'Flame Body',
      isFieldAbility: 'Having a Pokémon with Flame Body in your party will halve the number of cycles it takes for all eggs in the party to hatch.'
    }
  ],
  [
    'flareboost',
    {
      desc: 'While this Pokémon is burned, the power of its special attacks is multiplied by 1.5.',
      shortDesc: 'While this Pokémon is burned, its special attacks have 1.5x power.',
      name: 'Flare Boost'
    }
  ],
  [
    'flashfire',
    {
      desc: 'This Pokémon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokémon is frozen, it cannot be defrosted by Fire-type attacks.',
      shortDesc: "This Pokémon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
      name: 'Flash Fire',
      isFieldAbility:
        'In Pokémon Sword and Shield, If you have a Pokémon with Flash Fire at the front of your party (even if fainted), there is a 50% chance an encounter with a Fire-type Pokémon will be forced, if possible.'
    }
  ],
  [
    'flowergift',
    {
      desc: 'If this Pokémon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokémon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokémon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokémon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts.',
      shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
      name: 'Flower Gift'
    }
  ],
  [
    'flowerveil',
    {
      desc: "Grass-type Pokémon on this Pokémon's side cannot have their stat stages lowered by other Pokémon or have a non-volatile status condition inflicted on them by other Pokémon.",
      shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokémon.",
      name: 'Flower Veil'
    }
  ],
  [
    'fluffy',
    {
      desc: 'This Pokémon receives 1/2 damage from contact moves, but double damage from Fire moves.',
      shortDesc: 'This Pokémon takes 1/2 damage from contact moves, 2x damage from Fire moves.',
      name: 'Fluffy'
    }
  ],
  [
    'forecast',
    {
      desc: "If this Pokémon is a Castform, its type changes to the current weather condition's type, except Sandstorm. If this Pokémon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types.",
      shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
      name: 'Forecast'
    }
  ],
  [
    'forewarn',
    {
      desc: 'On switch-in, this Pokémon is alerted to the move with the highest power, at random, known by an opposing Pokémon.',
      shortDesc: "On switch-in, this Pokémon is alerted to the foes' move with the highest power.",
      name: 'Forewarn'
    }
  ],
  [
    'friendguard',
    {
      shortDesc: "This Pokémon's allies receive 3/4 damage from other Pokémon's attacks.",
      name: 'Friend Guard'
    }
  ],
  [
    'frisk',
    {
      shortDesc: 'On switch-in, this Pokémon identifies the held items of all opposing Pokémon.',
      name: 'Frisk'
    }
  ],
  [
    'fullmetalbody',
    {
      desc: "Prevents other Pokémon from lowering this Pokémon's stat stages. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages.",
      name: 'Full Metal Body'
    }
  ],
  ['furcoat', { shortDesc: "This Pokémon's Defense is doubled.", name: 'Fur Coat' }],
  [
    'galewings',
    {
      shortDesc: 'If this Pokémon is at full HP, its Flying-type moves have their priority increased by 1.',
      name: 'Gale Wings'
    }
  ],
  [
    'galvanize',
    {
      desc: "This Pokémon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      shortDesc: "This Pokémon's Normal-type moves become Electric type and have 1.2x power.",
      name: 'Galvanize'
    }
  ],
  [
    'gluttony',
    {
      shortDesc: 'When this Pokémon has 1/2 or less of its maximum HP, it uses certain Berries early.',
      name: 'Gluttony'
    }
  ],
  [
    'gooey',
    {
      shortDesc: 'Pokémon making contact with this Pokémon have their Speed lowered by 1 stage.',
      name: 'Gooey'
    }
  ],
  [
    'gorillatactics',
    {
      shortDesc: "This Pokémon's Attack is 1.5x, but it can only select the first move it executes.",
      name: 'Gorilla Tactics'
    }
  ],
  [
    'grasspelt',
    {
      shortDesc: "Boosts the Pokémon's Attack stat but only allows the use of the first selected move.",
      name: 'Grass Pelt'
    }
  ],
  [
    'grassysurge',
    {
      shortDesc: 'On switch-in, this Pokémon summons Grassy Terrain.',
      name: 'Grassy Surge'
    }
  ],
  [
    'grimneigh',
    {
      desc: "This Pokémon's Special Attack is raised by 1 stage if it attacks and knocks out another Pokémon.",
      shortDesc: "This Pokémon's Sp. Atk is raised by 1 stage if it attacks and KOes another Pokémon.",
      name: 'Grim Neigh'
    }
  ],
  [
    'gulpmissile',
    {
      desc: "If this Pokémon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes.",
      shortDesc: 'When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis.',
      name: 'Gulp Missile'
    }
  ],
  [
    'guts',
    {
      desc: "If this Pokémon has a non-volatile status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored.",

      shortDesc: 'If this Pokémon is statused, its Attack is 1.5x; ignores burn halving physical damage.',
      name: 'Guts'
    }
  ],
  [
    'harvest',
    {
      desc: 'If the last item this Pokémon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.',
      shortDesc: 'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.',
      name: 'Harvest',
      isFieldAbility:
        'In Pokémon Sword and Shield, If you have a Pokémon with Harvest at the front of your party (even if fainted), there is a 50% chance an encounter with a Grass-type Pokémon will be forced, if possible.'
    }
  ],
  [
    'healer',
    {
      desc: "There is a 30% chance of curing an adjacent ally's non-volatile status condition at the end of each turn.",

      shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
      name: 'Healer'
    }
  ],
  [
    'heatproof',
    {
      desc: 'The power of Fire-type attacks against this Pokémon is halved, and burn damage taken is halved.',
      shortDesc: 'The power of Fire-type attacks against this Pokémon is halved; burn damage halved.',
      name: 'Heatproof'
    }
  ],
  [
    'heavymetal',
    {
      shortDesc: "This Pokémon's weight is doubled.",
      name: 'Heavy Metal'
    }
  ],
  [
    'honeygather',
    {
      shortDesc: 'No competitive use.',
      name: 'Honey Gather',
      isFieldAbility:
        'A Pokémon with Honey Gather may collect Honey after a battle if it is not already holding an item. The chance for a Pokémon with Honey Gather to pick up Honey depends on its level, starting at 5% if the Pokémon is between levels 1 and 10, and going up by 5% every ten levels, ending at a 50% chance from levels 91-100.'
    }
  ],
  [
    'hugepower',
    {
      shortDesc: "This Pokémon's Attack is doubled.",
      name: 'Huge Power'
    }
  ],
  [
    'hungerswitch',
    {
      shortDesc: 'If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn.',
      name: 'Hunger Switch'
    }
  ],
  [
    'hustle',
    {
      desc: "This Pokémon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
      shortDesc: "This Pokémon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
      name: 'Hustle',
      isFieldAbility:
        'If you have a Pokémon with Hustle at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range.'
    }
  ],
  [
    'hydration',
    {
      desc: 'This Pokémon has its non-volatile status condition cured at the end of each turn if Rain Dance is active. If this Pokémon is holding Utility Umbrella, its non-volatile status condition will not be cured.',

      shortDesc: 'This Pokémon has its status cured at the end of each turn if Rain Dance is active.',
      name: 'Hydration'
    }
  ],
  [
    'hypercutter',
    {
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's Attack stat stage.",
      name: 'Hyper Cutter',
      isFieldAbility:
        "In Pokémon Emerald only, if a Pokémon with Hyper Cutter uses cut in the overworld, it will remove all tall grass within a two-square radius of the player's position, as opposed to a one-square radius without this Ability."
    }
  ],
  [
    'icebody',
    {
      desc: 'If Hail is active, this Pokémon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokémon takes no damage from Hail.',
      shortDesc: 'If Hail is active, this Pokémon heals 1/16 of its max HP each turn; immunity to Hail.',
      name: 'Ice Body'
    }
  ],
  [
    'iceface',
    {
      desc: 'If this Pokémon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Hail begins or when Eiscue switches in while Hail is active. Confusion damage also breaks the ice face.',
      shortDesc: 'If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail.',
      name: 'Ice Face'
    }
  ],
  [
    'icescales',
    {
      desc: 'The Pokémon is protected by ice scales, which halve the damage taken from special moves.',
      shortDesc: 'This Pokémon receives 1/2 damage from special attacks.',
      name: 'Ice Scales'
    }
  ],
  [
    'illuminate',
    {
      shortDesc: 'No competitive use.',
      name: 'Illuminate',
      isFieldAbility:
        'If a Pokémon with Illuminate is at the front of the the party (even if fainted), the wild Pokémon encounter rate of all Pokémon is doubled.'
    }
  ],
  [
    'illusion',
    {
      desc: "When this Pokémon switches in, it appears as the last unfainted Pokémon in its party until it takes direct damage from another Pokémon's attack. This Pokémon's actual level and HP are displayed instead of those of the mimicked Pokémon.",
      shortDesc: 'This Pokémon appears as the last Pokémon in the party until it takes direct damage.',
      name: 'Illusion'
    }
  ],
  [
    'immunity',
    {
      shortDesc: 'This Pokémon cannot be poisoned. Gaining this Ability while poisoned cures it.',
      name: 'Immunity'
    }
  ],
  [
    'imposter',
    {
      desc: 'On switch-in, this Pokémon Transforms into the opposing Pokémon that is facing it. If there is no Pokémon at that position, this Pokémon does not Transform.',
      shortDesc: 'On switch-in, this Pokémon Transforms into the opposing Pokémon that is facing it.',
      name: 'Imposter'
    }
  ],
  [
    'infiltrator',
    {
      desc: "This Pokémon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil.",
      shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
      name: 'Infiltrator',
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with Infiltrator is placed at the front of the party, wild Pokémon are less likely to appear.'
    }
  ],
  [
    'innardsout',
    {
      desc: "If this Pokémon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokémon.",
      shortDesc: "If this Pokémon is KOed with a move, that move's user loses an equal amount of HP.",
      name: 'Innards Out'
    }
  ],
  [
    'innerfocus',
    {
      shortDesc: 'This Pokémon cannot be made to flinch. Immune to Intimidate.',
      name: 'Inner Focus'
    }
  ],
  [
    'insomnia',
    {
      shortDesc: 'This Pokémon cannot fall asleep. Gaining this Ability while asleep cures it.',
      name: 'Insomnia'
    }
  ],
  [
    'intimidate',
    {
      desc: 'On switch-in, this Pokémon lowers the Attack of adjacent opposing Pokémon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokémon behind a substitute are immune.',
      shortDesc: 'On switch-in, this Pokémon lowers the Attack of adjacent opponents by 1 stage.',
      name: 'Intimidate',
      isFieldAbility:
        'If a Pokémon with Intimidate is at the front of your party (even if fainted), there is a 50% chance it will prevent a random wild encounter that would have occurred if the wild Pokémon would be at least 5 levels lower than the Pokémon with Intimidate.'
    }
  ],
  [
    'intrepidsword',
    {
      shortDesc: "On switch-in, this Pokémon's Attack is raised by 1 stage.",
      name: 'Intrepid Sword'
    }
  ],
  [
    'ironbarbs',
    {
      desc: 'Pokémon making contact with this Pokémon lose 1/8 of their maximum HP, rounded down.',
      shortDesc: 'Pokémon making contact with this Pokémon lose 1/8 of their max HP.',
      name: 'Iron Barbs'
    }
  ],
  [
    'ironfist',
    {
      desc: "This Pokémon's punch-based attacks have their power multiplied by 1.2.",
      shortDesc: "This Pokémon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
      name: 'Iron Fist'
    }
  ],
  [
    'justified',
    {
      shortDesc: "This Pokémon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
      name: 'Justified'
    }
  ],
  [
    'keeneye',
    {
      desc: "Prevents other Pokémon from lowering this Pokémon's accuracy stat stage. This Pokémon ignores a target's evasiveness stat stage.",
      shortDesc: "This Pokémon's accuracy can't be lowered by others; ignores their evasiveness stat.",
      name: 'Keen Eye',
      isFieldAbility:
        'If a Pokémon with Keen Eye is at the front of your party (even if fainted), there is a 50% chance it will prevent a random wild encounter that would have occurred if the wild Pokémon would be at least 5 levels lower than the Pokémon with Keen Eye.'
    }
  ],
  [
    'klutz',
    {
      desc: "This Pokémon's held item has no effect. This Pokémon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
      shortDesc: "This Pokémon's held item has no effect, except Macho Brace. Fling cannot be used.",
      name: 'Klutz'
    }
  ],
  [
    'leafguard',
    {
      desc: 'If Sunny Day is active and this Pokémon is not holding Utility Umbrella, this Pokémon cannot gain a non-volatile status condition and Rest will fail for it.',

      shortDesc: 'If Sunny Day is active, this Pokémon cannot be statused and Rest will fail for it.',
      name: 'Leaf Guard'
    }
  ],
  [
    'levitate',
    {
      desc: 'This Pokémon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.',
      shortDesc: 'This Pokémon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.',
      name: 'Levitate'
    }
  ],
  [
    'libero',
    {
      desc: "This Pokémon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
      shortDesc: "This Pokémon's type changes to match the type of the move it is about to use.",
      name: 'Libero'
    }
  ],
  [
    'lightmetal',
    {
      shortDesc: "This Pokémon's weight is halved.",
      name: 'Light Metal'
    }
  ],
  [
    'lightningrod',
    {
      desc: 'This Pokémon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokémon is not the target of a single-target Electric-type move used by another Pokémon, this Pokémon redirects that move to itself if it is within the range of that move.',
      shortDesc: 'This Pokémon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.',
      name: 'Lightning Rod',
      isFieldAbility:
        "In Pokémon Emerald, Trainers registered with the PokéNav's Match Call function will call twice as often if a Pokémon with Lightning Rod is in the first place in the party (even if fainted).\nIn Pokémon Sword and Shield, if a Pokémon with Lightning Rod is in the first place in the party, there is a 50% chance the game will force an encounter with an Electric-type Pokémon, if one is possible."
    }
  ],
  [
    'limber',
    {
      shortDesc: 'This Pokémon cannot be paralyzed. Gaining this Ability while paralyzed cures it.',
      name: 'Limber'
    }
  ],
  [
    'liquidooze',
    {
      shortDesc: 'This Pokémon damages those draining HP from it for as much as they would heal.',
      name: 'Liquid Ooze'
    }
  ],
  [
    'liquidvoice',
    {
      desc: "This Pokémon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      shortDesc: "This Pokémon's sound-based moves become Water type.",
      name: 'Liquid Voice'
    }
  ],
  [
    'longreach',
    {
      shortDesc: "This Pokémon's attacks do not make contact with the target.",
      name: 'Long Reach'
    }
  ],
  [
    'magicbounce',
    {
      desc: 'This Pokémon blocks certain status moves and instead uses the move against the original user.',
      shortDesc: 'This Pokémon blocks certain status moves and bounces them back to the user.',
      name: 'Magic Bounce'
    }
  ],
  [
    'magicguard',
    {
      desc: 'This Pokémon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.',
      shortDesc: 'This Pokémon can only be damaged by direct attacks.',
      name: 'Magic Guard'
    }
  ],
  [
    'magician',
    {
      desc: 'If this Pokémon has no item, it steals the item off a Pokémon it hits with an attack. Does not affect Doom Desire and Future Sight.',
      shortDesc: 'If this Pokémon has no item, it steals the item off a Pokémon it hits with an attack.',
      name: 'Magician'
    }
  ],
  [
    'magmaarmor',
    {
      shortDesc: 'This Pokémon cannot be frozen. Gaining this Ability while frozen cures it.',
      name: 'Magma Armor',
      isFieldAbility: 'Having a Pokémon with Magma Armor in your party will halve the number of cycles it takes for all eggs in the party to hatch.'
    }
  ],
  [
    'magnetpull',
    {
      desc: 'Prevents adjacent opposing Steel-type Pokémon from choosing to switch out unless they are immune to trapping.',
      shortDesc: 'Prevents adjacent Steel-type foes from choosing to switch.',
      name: 'Magnet Pull'
    }
  ],
  [
    'marvelscale',
    {
      desc: 'If this Pokémon has a non-volatile status condition, its Defense is multiplied by 1.5.',
      shortDesc: 'If this Pokémon is statused, its Defense is 1.5x.',
      name: 'Marvel Scale'
    }
  ],
  [
    'megalauncher',
    {
      desc: "This Pokémon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
      shortDesc: "This Pokémon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
      name: 'Mega Launcher'
    }
  ],
  [
    'merciless',
    {
      shortDesc: "This Pokémon's attacks are critical hits if the target is poisoned.",
      name: 'Merciless'
    }
  ],
  [
    'mimicry',
    {
      shortDesc: "This Pokémon's type changes to match the Terrain. Type reverts when Terrain ends.",
      name: 'Mimicry'
    }
  ],
  [
    'minus',
    {
      desc: "If an active ally has this Ability or the Ability Plus, this Pokémon's Special Attack is multiplied by 1.5.",
      shortDesc: "If an active ally has this Ability or the Ability Plus, this Pokémon's Sp. Atk is 1.5x.",
      name: 'Minus'
    }
  ],
  [
    'mirrorarmor',
    {
      desc: "When one of this Pokémon's stat stages would be lowered by another Pokémon, that Pokémon's stat stage is lowered instead. This effect does not happen if this Pokémon's stat stage was already -6.",
      shortDesc: "If this Pokémon's stat stages would be lowered, the attacker's are lowered instead.",
      name: 'Mirror Armor'
    }
  ],
  [
    'mistysurge',
    {
      shortDesc: 'On switch-in, this Pokémon summons Misty Terrain.',
      name: 'Misty Surge'
    }
  ],
  [
    'moldbreaker',
    {
      desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dazzling, Disguise, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
      shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
      name: 'Mold Breaker'
    }
  ],
  [
    'moody',
    {
      desc: 'This Pokémon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn.',
      shortDesc: 'Raises a random stat (except accuracy/evasion) by 2 and lowers another stat by 1 at the end of each turn.',
      name: 'Moody'
    }
  ],
  [
    'motordrive',
    {
      desc: 'This Pokémon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.',
      shortDesc: "This Pokémon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
      name: 'Motor Drive'
    }
  ],
  [
    'mountaineer',
    {
      shortDesc: 'On switch-in, this Pokémon avoids all Rock-type attacks and Stealth Rock.',
      name: 'Mountaineer'
    }
  ],
  [
    'moxie',
    {
      desc: "This Pokémon's Attack is raised by 1 stage if it attacks and knocks out another Pokémon.",
      shortDesc: "This Pokémon's Attack is raised by 1 stage if it attacks and KOes another Pokémon.",
      name: 'Moxie'
    }
  ],
  [
    'multiscale',
    {
      shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
      name: 'Multiscale'
    }
  ],
  [
    'multitype',
    {
      shortDesc: 'If this Pokémon is an Arceus, its type changes to match its held Plate or Z-Crystal.',
      name: 'Multitype'
    }
  ],
  [
    'mummy',
    {
      desc: 'Pokémon making contact with this Pokémon have their Ability changed to Mummy. Does not affect a Pokémon which already has Mummy or the Abilities As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode.',
      shortDesc: 'Pokémon making contact with this Pokémon have their Ability changed to Mummy.',
      name: 'Mummy'
    }
  ],
  [
    'naturalcure',
    {
      shortDesc: 'This Pokémon has its non-volatile status condition cured when it switches out.',
      name: 'Natural Cure'
    }
  ],
  [
    'neuroforce',
    {
      shortDesc: "This Pokémon's attacks that are super effective against the target do 1.25x damage.",
      name: 'Neuroforce'
    }
  ],
  ['noability', { shortDesc: 'Does nothing.', name: 'No Ability' }],
  [
    'neutralizinggas',
    {
      desc: 'While this Pokémon is active, Abilities have no effect. Does not affect the Abilities As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.',
      shortDesc: 'While this Pokémon is active, Abilities have no effect.',
      name: 'Neutralizing Gas'
    }
  ],
  [
    'noguard',
    {
      shortDesc: 'Every move used by or against this Pokémon will always hit.',
      name: 'No Guard',
      isFieldAbility:
        'If a Pokémon with No Guard is at the front of the the party (even if fainted), the wild Pokémon encounter rate of all Pokémon is doubled.'
    }
  ],
  [
    'normalize',
    {
      desc: "This Pokémon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
      shortDesc: "This Pokémon's moves are changed to be Normal type and have 1.2x power.",
      name: 'Normalize'
    }
  ],
  [
    'oblivious',
    {
      desc: 'This Pokémon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate.',
      shortDesc: 'This Pokémon cannot be infatuated or taunted. Immune to Intimidate.',
      name: 'Oblivious'
    }
  ],
  [
    'overcoat',
    {
      shortDesc: 'This Pokémon is immune to powder moves and damage from Sandstorm or Hail.',
      name: 'Overcoat'
    }
  ],
  [
    'overgrow',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's attacking stat is 1.5x with Grass attacks.",
      name: 'Overgrow'
    }
  ],
  [
    'owntempo',
    {
      desc: 'This Pokémon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate.',
      shortDesc: 'This Pokémon cannot be confused. Immune to Intimidate.',
      name: 'Own Tempo'
    }
  ],
  [
    'parentalbond',
    {
      desc: "This Pokémon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
      shortDesc: "This Pokémon's damaging moves hit twice. The second hit has its damage quartered.",
      name: 'Parental Bond'
    }
  ],
  [
    'persistent',
    {
      desc: 'The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokémon.',
      shortDesc: 'When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.',
      name: 'Persistent'
    }
  ],
  [
    'pastelveil',
    {
      desc: 'Pastel Veil prevents the Pokémon with this Ability and its allies from being afflicted by poison. It also heals the poisoned status condition of allies if a Pokémon with this Ability is sent out into battle.',
      shortDesc: 'This Pokémon and its allies cannot be poisoned. On switch-in, cures poisoned allies.',
      name: 'Pastel Veil'
    }
  ],
  [
    'perishbody',
    {
      desc: 'Making contact with this Pokémon starts the Perish Song effect for it and the attacker. This effect does not happen if this Pokémon already has a perish count.',
      shortDesc: 'Making contact with this Pokémon starts the Perish Song effect for it and the attacker.',
      name: 'Perish Body'
    }
  ],
  [
    'pickpocket',
    {
      desc: "If this Pokémon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
      shortDesc: "If this Pokémon has no item and is hit by a contact move, it steals the attacker's item.",
      name: 'Pickpocket'
    }
  ],
  [
    'pickup',
    {
      shortDesc: 'If this Pokémon has no item, it finds one used by an adjacent Pokémon this turn.',
      name: 'Pickup',
      isFieldAbility: 'After winning a battle, there is a 10% chance that a Pokémon with Pickup will create a held item for itself, even if fainted.'
    }
  ],
  [
    'pixilate',
    {
      desc: "This Pokémon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      shortDesc: "This Pokémon's Normal-type moves become Fairy type and have 1.2x power.",
      name: 'Pixilate'
    }
  ],
  [
    'plus',
    {
      desc: "If an active ally has this Ability or the Ability Minus, this Pokémon's Special Attack is multiplied by 1.5.",
      shortDesc: "If an active ally has this Ability or the Ability Minus, this Pokémon's Sp. Atk is 1.5x.",
      name: 'Plus'
    }
  ],
  [
    'poisonheal',
    {
      desc: 'If this Pokémon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.',
      shortDesc: 'This Pokémon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.',
      name: 'Poison Heal'
    }
  ],
  [
    'poisonpoint',
    {
      shortDesc: '30% chance a Pokémon making contact with this Pokémon will be poisoned.',
      name: 'Poison Point'
    }
  ],
  [
    'poisontouch',
    {
      shortDesc: "This Pokémon's contact moves have a 30% chance of poisoning.",
      name: 'Poison Touch'
    }
  ],
  [
    'powerconstruct',
    {
      desc: 'If this Pokémon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.',
      shortDesc: 'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.',
      name: 'Power Construct'
    }
  ],
  [
    'powerofalchemy',
    {
      desc: 'This Pokémon copies the Ability of an ally that faints. Abilities that cannot be copied are "No Ability", As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.',
      shortDesc: 'This Pokémon copies the Ability of an ally that faints.',
      name: 'Power of Alchemy'
    }
  ],
  [
    'powerspot',
    {
      shortDesc: "This Pokémon's allies have the power of their moves multiplied by 1.3.",
      name: 'Power Spot'
    }
  ],
  [
    'prankster',
    {
      shortDesc: "This Pokémon's Status moves have priority raised by 1, but Dark types are immune.",
      name: 'Prankster'
    }
  ],
  [
    'pressure',
    {
      desc: "If this Pokémon is the target of an opposing Pokémon's move, that move loses one additional PP.",
      shortDesc: "If this Pokémon is the target of a foe's move, that move loses one additional PP.",
      name: 'Pressure',
      isFieldAbility:
        'If you have a Pokémon with Pressure at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range.'
    }
  ],
  [
    'primordialsea',
    {
      desc: 'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by Delta Stream or Desolate Land.',
      shortDesc: 'On switch-in, heavy rain begins until this Ability is not active in battle.',
      name: 'Primordial Sea'
    }
  ],
  [
    'prismarmor',
    {
      desc: 'This Pokémon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
      shortDesc: 'This Pokémon receives 3/4 damage from supereffective attacks.',
      name: 'Prism Armor'
    }
  ],
  [
    'propellertail',
    {
      shortDesc: "This Pokémon's moves cannot be redirected to a different target by any effect.",
      name: 'Propeller Tail'
    }
  ],
  [
    'protean',
    {
      desc: "This Pokémon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
      shortDesc: "This Pokémon's type changes to match the type of the move it is about to use.",
      name: 'Protean'
    }
  ],
  [
    'psychicsurge',
    {
      shortDesc: 'On switch-in, this Pokémon summons Psychic Terrain.',
      name: 'Psychic Surge'
    }
  ],
  [
    'punkrock',
    {
      desc: "This Pokémon's sound-based moves have their power multiplied by 1.3. This Pokémon takes halved damage from sound-based moves.",
      shortDesc: 'This Pokémon receives 1/2 damage from sound moves. Its own have 1.3x power.',
      name: 'Punk Rock'
    }
  ],
  [
    'purepower',
    {
      shortDesc: 'Boosts the power of sound-based moves. The Pokémon also takes half the damage from sound-based moves.',
      name: 'Pure Power'
    }
  ],
  [
    'queenlymajesty',
    {
      desc: 'While this Pokémon is active, priority moves from opposing Pokémon targeted at allies are prevented from having an effect.',
      shortDesc: 'While this Pokémon is active, allies are protected from opposing priority moves.',
      name: 'Queenly Majesty'
    }
  ],
  [
    'quickdraw',
    {
      shortDesc: 'This Pokémon has a 30% chance to move first in its priority bracket with attacking moves.',
      name: 'Quick Draw'
    }
  ],
  [
    'quickfeet',
    {
      desc: 'If this Pokémon has a non-volatile status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.',
      shortDesc: 'If this Pokémon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.',
      name: 'Quick Feet',
      isFieldAbility:
        'If a Pokémon with Quick Feet is in the first place in the party (even if fainted), the chance of encountering a wild Pokémon is decreased by 50%.'
    }
  ],
  [
    'rkssystem',
    {
      shortDesc: 'If this Pokémon is a Silvally, its type changes to match its held Memory.',
      name: 'RKS System'
    }
  ],
  [
    'raindish',
    {
      desc: 'If Rain Dance is active, this Pokémon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokémon is holding Utility Umbrella, its HP does not get restored.',
      shortDesc: 'If Rain Dance is active, this Pokémon heals 1/16 of its max HP each turn.',
      name: 'Rain Dish'
    }
  ],
  [
    'rattled',
    {
      desc: "This Pokémon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate.",
      shortDesc: 'Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.',
      name: 'Rattled'
    }
  ],
  [
    'rebound',
    {
      desc: 'On switch-in, this Pokémon blocks certain status moves and instead uses the move against the original user.',
      shortDesc: 'On switch-in, blocks certain status moves and bounces them back to the user.',
      name: 'Rebound'
    }
  ],
  [
    'receiver',
    {
      desc: 'This Pokémon copies the Ability of an ally that faints. Abilities that cannot be copied are "No Ability", As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.',
      shortDesc: 'This Pokémon copies the Ability of an ally that faints.',
      name: 'Receiver'
    }
  ],
  [
    'reckless',
    {
      desc: "This Pokémon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
      shortDesc: "This Pokémon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
      name: 'Reckless'
    }
  ],
  [
    'refrigerate',
    {
      desc: "This Pokémon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      shortDesc: "This Pokémon's Normal-type moves become Ice type and have 1.2x power.",
      name: 'Refrigerate'
    }
  ],
  [
    'regenerator',
    {
      shortDesc: 'This Pokémon restores 1/3 of its maximum HP, rounded down, when it switches out.',
      name: 'Regenerator'
    }
  ],
  [
    'ripen',
    {
      shortDesc: 'When this Pokémon eats a Berry, its effect is doubled.',
      name: 'Ripen'
    }
  ],
  [
    'rivalry',
    {
      desc: "This Pokémon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokémon or the target is genderless.",
      shortDesc: "This Pokémon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
      name: 'Rivalry'
    }
  ],
  [
    'rockhead',
    {
      desc: 'This Pokémon does not take recoil damage besides Struggle, Life Orb, and crash damage.',
      shortDesc: 'This Pokémon does not take recoil damage besides Struggle/Life Orb/crash damage.',
      name: 'Rock Head'
    }
  ],
  [
    'roughskin',
    {
      desc: 'Pokémon making contact with this Pokémon lose 1/8 of their maximum HP, rounded down.',
      shortDesc: 'Pokémon making contact with this Pokémon lose 1/8 of their max HP.',
      name: 'Rough Skin'
    }
  ],
  ['runaway', { shortDesc: 'No competitive use.', name: 'Run Away' }],
  [
    'sandforce',
    {
      desc: "If Sandstorm is active, this Pokémon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokémon takes no damage from Sandstorm.",
      shortDesc: "This Pokémon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
      name: 'Sand Force'
    }
  ],
  [
    'sandrush',
    {
      desc: "If Sandstorm is active, this Pokémon's Speed is doubled. This Pokémon takes no damage from Sandstorm.",
      shortDesc: "If Sandstorm is active, this Pokémon's Speed is doubled; immunity to Sandstorm.",
      name: 'Sand Rush'
    }
  ],
  [
    'sandspit',
    {
      desc: 'When this Pokémon is hit by an attack, Sandstorm begins. This effect happens after the effects of Max and G-Max Moves.',
      shortDesc: 'When this Pokémon is hit, Sandstorm begins.',
      name: 'Sand Spit'
    }
  ],
  [
    'sandstream',
    {
      shortDesc: 'On switch-in, this Pokémon summons Sandstorm.',
      name: 'Sand Stream'
    }
  ],
  [
    'sandveil',
    {
      desc: "If Sandstorm is active, this Pokémon's evasiveness is multiplied by 1.25. This Pokémon takes no damage from Sandstorm.",
      shortDesc: "If Sandstorm is active, this Pokémon's evasiveness is 1.25x; immunity to Sandstorm.",
      name: 'Sand Veil',
      isFieldAbility:
        'If a Pokémon with Sand Veil is in the first place in the party (even if fainted) in an area with a sandstorm, the chance of encountering a wild Pokémon is decreased by 50%.'
    }
  ],
  [
    'sapsipper',
    {
      desc: 'This Pokémon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.',
      shortDesc: "This Pokémon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
      name: 'Sap Sipper'
    }
  ],
  [
    'schooling',
    {
      desc: 'On switch-in, if this Pokémon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.',
      shortDesc: 'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.',
      name: 'Schooling'
    }
  ],
  [
    'scrappy',
    {
      desc: 'This Pokémon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate.',
      shortDesc: 'Fighting, Normal moves hit Ghost. Immune to Intimidate.',
      name: 'Scrappy'
    }
  ],
  [
    'screencleaner',
    {
      shortDesc: 'On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides.',
      name: 'Screen Cleaner'
    }
  ],
  [
    'serenegrace',
    {
      shortDesc: "This Pokémon's moves have their secondary effect chance doubled.",
      name: 'Serene Grace'
    }
  ],
  [
    'shadowshield',
    {
      desc: 'If this Pokémon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
      shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
      name: 'Shadow Shield'
    }
  ],
  [
    'shadowtag',
    {
      desc: 'Prevents adjacent opposing Pokémon from choosing to switch out unless they are immune to trapping or also have this Ability.',
      shortDesc: 'Prevents adjacent foes from choosing to switch unless they also have this Ability.',
      name: 'Shadow Tag'
    }
  ],
  [
    'shedskin',
    {
      desc: 'This Pokémon has a 33% chance to have its non-volatile status condition cured at the end of each turn.',
      shortDesc: 'This Pokémon has a 33% chance to have its status cured at the end of each turn.',
      name: 'Shed Skin'
    }
  ],
  [
    'sheerforce',
    {
      desc: "This Pokémon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
      shortDesc: "This Pokémon's attacks with secondary effects have 1.3x power; nullifies the effects.",
      name: 'Sheer Force'
    }
  ],
  [
    'shellarmor',
    {
      shortDesc: 'This Pokémon cannot be struck by a critical hit.',
      name: 'Shell Armor'
    }
  ],
  [
    'shielddust',
    {
      shortDesc: "This Pokémon is not affected by the secondary effect of another Pokémon's attack.",
      name: 'Shield Dust'
    }
  ],
  [
    'shieldsdown',
    {
      desc: 'If this Pokémon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by non-volatile status conditions. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
      shortDesc: 'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.',
      name: 'Shields Down'
    }
  ],
  [
    'simple',
    {
      desc: "When this Pokémon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
      shortDesc: "When this Pokémon's stat stages are raised or lowered, the effect is doubled instead.",
      name: 'Simple'
    }
  ],
  [
    'skilllink',
    {
      shortDesc: "This Pokémon's multi-hit attacks always hit the maximum number of times.",
      name: 'Skill Link'
    }
  ],
  [
    'slowstart',
    {
      shortDesc: "On switch-in, this Pokémon's Attack and Speed are halved for 5 turns.",
      name: 'Slow Start'
    }
  ],
  [
    'slushrush',
    {
      shortDesc: "If Hail is active, this Pokémon's Speed is doubled.",
      name: 'Slush Rush'
    }
  ],
  [
    'sniper',
    {
      shortDesc: 'If this Pokémon strikes with a critical hit, the damage is multiplied by 1.5.',
      name: 'Sniper'
    }
  ],
  [
    'snowcloak',
    {
      desc: "If Hail is active, this Pokémon's evasiveness is multiplied by 1.25. This Pokémon takes no damage from Hail.",
      shortDesc: "If Hail is active, this Pokémon's evasiveness is 1.25x; immunity to Hail.",
      name: 'Snow Cloak',
      isFieldAbility:
        'If a Pokémon with Snow Cloak is in the first place in the party (even if fainted) in an area with hail, the chance of encountering a wild Pokémon is decreased by 50%.'
    }
  ],
  [
    'snowwarning',
    {
      shortDesc: 'On switch-in, this Pokémon summons Hail.',
      name: 'Snow Warning'
    }
  ],
  [
    'solarpower',
    {
      desc: "If Sunny Day is active, this Pokémon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokémon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
      shortDesc: "If Sunny Day is active, this Pokémon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
      name: 'Solar Power'
    }
  ],
  [
    'solidrock',
    {
      shortDesc: 'This Pokémon receives 3/4 damage from supereffective attacks.',
      name: 'Solid Rock'
    }
  ],
  [
    'soulheart',
    {
      desc: "This Pokémon's Special Attack is raised by 1 stage when another Pokémon faints.",
      shortDesc: "This Pokémon's Sp. Atk is raised by 1 stage when another Pokémon faints.",
      name: 'Soul-Heart'
    }
  ],
  [
    'soundproof',
    {
      shortDesc: 'This Pokémon is immune to sound-based moves, including Heal Bell.',
      name: 'Soundproof'
    }
  ],
  [
    'speedboost',
    {
      desc: "This Pokémon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
      shortDesc: "This Pokémon's Speed is raised 1 stage at the end of each full turn on the field.",
      name: 'Speed Boost'
    }
  ],
  [
    'stakeout',
    {
      shortDesc: "This Pokémon's attacking stat is doubled against a target that switched in this turn.",
      name: 'Stakeout'
    }
  ],
  [
    'stall',
    {
      shortDesc: 'This Pokémon moves last among Pokémon using the same or greater priority moves.',
      name: 'Stall'
    }
  ],
  [
    'stalwart',
    {
      shortDesc: "This Pokémon's moves cannot be redirected to a different target by any effect.",
      name: 'Stalwart'
    }
  ],
  [
    'stamina',
    {
      shortDesc: "This Pokémon's Defense is raised by 1 stage after it is damaged by a move.",
      name: 'Stamina'
    }
  ],
  [
    'stancechange',
    {
      desc: "If this Pokémon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
      shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
      name: 'Stance Change'
    }
  ],
  [
    'static',
    {
      shortDesc: '30% chance a Pokémon making contact with this Pokémon will be paralyzed.',
      name: 'Static',
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with Static is in the first place in the party, there is a 50% chance the game will force an encounter with an Electric-type Pokémon, if one is possible.'
    }
  ],
  [
    'steadfast',
    {
      shortDesc: 'If this Pokémon flinches, its Speed is raised by 1 stage.',
      name: 'Steadfast'
    }
  ],
  [
    'steamengine',
    {
      desc: 'When a Pokémon with Steam Engine is hit by a Fire-type or Water-type move, its Speed stat is increased by six stages.',
      shortDesc: "This Pokémon's Speed is raised by 6 stages after it is damaged by Fire/Water moves.",
      name: 'Steam Engine',
      isFieldAbility: 'Having a Pokémon with Steam Engine in your party will halve the number of cycles it takes for all eggs in the party to hatch.'
    }
  ],
  [
    'steelworker',
    {
      shortDesc: "This Pokémon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
      name: 'Steelworker'
    }
  ],
  [
    'steelyspirit',
    {
      shortDesc: "This Pokémon and its allies' Steel-type moves have their power multiplied by 1.5.",
      name: 'Steely Spirit'
    }
  ],
  [
    'stench',
    {
      desc: "This Pokémon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
      shortDesc: "This Pokémon's attacks without a chance to flinch gain a 10% chance to flinch.",

      name: 'Stench',
      isFieldAbility:
        'If a Pokémon with Stench is in the first place in the party (even if fainted), the chance of encountering a wild Pokémon is decreased by 50%.'
    }
  ],
  [
    'stickyhold',
    {
      shortDesc: "This Pokémon cannot lose its held item due to another Pokémon's attack.",
      name: 'Sticky Hold',
      isFieldAbility: 'If a Pokémon with Sticky Hold is in the first place in the party (even if fainted), bites will occur more often while fishing.'
    }
  ],
  [
    'stormdrain',
    {
      desc: 'This Pokémon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokémon is not the target of a single-target Water-type move used by another Pokémon, this Pokémon redirects that move to itself if it is within the range of that move.',
      shortDesc: 'This Pokémon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.',
      name: 'Storm Drain',
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with Storm Drain is in the first place in the party (even if fainted), then there is a 50% chance the game will force an encounter with a Water-type Pokémon, if one is possible.'
    }
  ],
  [
    'strongjaw',
    {
      desc: "This Pokémon's bite-based attacks have their power multiplied by 1.5.",
      shortDesc: "This Pokémon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
      name: 'Strong Jaw'
    }
  ],
  [
    'sturdy',
    {
      desc: 'If this Pokémon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokémon.',
      shortDesc: 'If this Pokémon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.',
      name: 'Sturdy'
    }
  ],
  [
    'suctioncups',
    {
      shortDesc: "This Pokémon cannot be forced to switch out by another Pokémon's attack or item.",
      name: 'Suction Cups',
      isFieldAbility:
        'If a Pokémon with Suction Cups is in the first place in the party (even if fainted), bites will occur more often while fishing.'
    }
  ],
  [
    'superluck',
    {
      shortDesc: "This Pokémon's critical hit ratio is raised by 1 stage.",
      name: 'Super Luck',
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with this Ability leads the party, the chances of finding a wild Pokémon holding an item increase.'
    }
  ],
  [
    'surgesurfer',
    {
      shortDesc: "If Electric Terrain is active, this Pokémon's Speed is doubled.",
      name: 'Surge Surfer'
    }
  ],
  [
    'swarm',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's attacking stat is 1.5x with Bug attacks.",
      name: 'Swarm',
      isFieldAbility: 'In Pokémon Emerald, this Ability also increases the frequency cries of wild Pokémon that are heard in the overworld.'
    }
  ],
  [
    'sweetveil',
    {
      shortDesc: 'This Pokémon and its allies cannot fall asleep.',
      name: 'Sweet Veil'
    }
  ],
  [
    'swiftswim',
    {
      desc: "If Rain Dance is active and this Pokémon is not holding Utility Umbrella, this Pokémon's Speed is doubled.",
      shortDesc: "If Rain Dance is active, this Pokémon's Speed is doubled.",
      name: 'Swift Swim'
    }
  ],
  [
    'symbiosis',
    {
      desc: "If an ally uses its item, this Pokémon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
      shortDesc: 'If an ally uses its item, this Pokémon gives its item to that ally immediately.',
      name: 'Symbiosis'
    }
  ],
  [
    'synchronize',
    {
      desc: 'If another Pokémon burns, paralyzes, poisons, or badly poisons this Pokémon, that Pokémon receives the same non-volatile status condition.',
      shortDesc: 'If another Pokémon burns/poisons/paralyzes this Pokémon, it also gets that status.',
      name: 'Synchronize',
      isFieldAbility:
        'If a Pokémon with Synchronize in the first slot in the party (even if fainted), chance of encountering a wild Pokémon with the same nature will be 50%. In Pokémon Sword and Shield however, all wild Pokémon are guaranteed to have the same nature as the Pokémon with Synchronize, exluding gift Pokémon and Pokémon obtained from max raid battles. Roaming Pokémon, Gift Pokémon (excluding Pokémon obtained via mystery gift or eggs in Omega Ruby and Alpha Sapphire to Ultra Sun/Moon), Stationary Pokémon in Pokémon Emerald, Pokémon in the Pokewalker and Pokémon found in Entree Forest are also not affected by this ability.'
    }
  ],
  [
    'tangledfeet',
    {
      shortDesc: "This Pokémon's evasiveness is doubled as long as it is confused.",
      name: 'Tangled Feet'
    }
  ],
  [
    'tanglinghair',
    {
      shortDesc: 'Pokémon making contact with this Pokémon have their Speed lowered by 1 stage.',
      name: 'Tangling Hair'
    }
  ],
  [
    'technician',
    {
      desc: "This Pokémon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
      shortDesc: "This Pokémon's moves of 60 power or less have 1.5x power. Includes Struggle.",
      name: 'Technician'
    }
  ],
  [
    'telepathy',
    {
      shortDesc: 'This Pokémon does not take damage from attacks made by its allies.',
      name: 'Telepathy'
    }
  ],
  [
    'teravolt',
    {
      desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dazzling, Disguise, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
      shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
      name: 'Teravolt'
    }
  ],
  [
    'thickfat',
    {
      desc: "If a Pokémon uses a Fire- or Ice-type attack against this Pokémon, that Pokémon's attacking stat is halved when calculating the damage to this Pokémon.",
      shortDesc: 'Fire/Ice-type moves against this Pokémon deal damage with a halved attacking stat.',
      name: 'Thick Fat'
    }
  ],
  [
    'tintedlens',
    {
      shortDesc: "This Pokémon's attacks that are not very effective on a target deal double damage.",
      name: 'Tinted Lens'
    }
  ],
  [
    'torrent',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's attacking stat is 1.5x with Water attacks.",
      name: 'Torrent'
    }
  ],
  [
    'toughclaws',
    {
      shortDesc: "This Pokémon's contact moves have their power multiplied by 1.3.",
      name: 'Tough Claws'
    }
  ],
  [
    'toxicboost',
    {
      desc: 'While this Pokémon is poisoned, the power of its physical attacks is multiplied by 1.5.',
      shortDesc: 'While this Pokémon is poisoned, its physical attacks have 1.5x power.',
      name: 'Toxic Boost'
    }
  ],
  [
    'trace',
    {
      desc: 'On switch-in, or when this Pokémon acquires this ability, this Pokémon copies a random adjacent opposing Pokémon\'s Ability. However, if one or more adjacent Pokémon has the Ability "No Ability", Trace won\'t copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned "No Ability", as well as As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode.',
      shortDesc: "On switch-in, or when it can, this Pokémon copies a random adjacent foe's Ability.",
      name: 'Trace'
    }
  ],
  [
    'transistor',
    {
      shortDesc: "This Pokémon's attacking stat is multiplied by 1.5 while using an Electric-type attack.",
      name: 'Transistor'
    }
  ],
  [
    'triage',
    {
      shortDesc: "This Pokémon's healing moves have their priority increased by 3.",
      name: 'Triage'
    }
  ],
  [
    'truant',
    {
      shortDesc: 'This Pokémon skips every other turn instead of using a move.',
      name: 'Truant'
    }
  ],
  [
    'turboblaze',
    {
      desc: "This Pokemon's moves and their effects ignore certain Abilities of other Pokemon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dark Aura, Dazzling, Disguise, Dry Skin, Fairy Aura, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokemon on the field, whether or not it is a target of this Pokemon's move, and whether or not their Ability is beneficial to this Pokemon.",
      shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
      name: 'Turboblaze'
    }
  ],
  [
    'unaware',
    {
      desc: "This Pokémon ignores other Pokémon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokémon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
      shortDesc: "This Pokémon ignores other Pokémon's stat stages when taking or doing damage.",
      name: 'Unaware'
    }
  ],
  [
    'unburden',
    {
      desc: 'If this Pokémon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.',
      shortDesc: 'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.',
      name: 'Unburden'
    }
  ],
  [
    'unnerve',
    {
      desc: "While this Pokémon is active, it prevents opposing Pokémon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokémon's Speed tiers.",
      shortDesc: 'While this Pokémon is active, it prevents opposing Pokémon from using their Berries.',
      name: 'Unnerve'
    }
  ],
  [
    'unseenfist',
    {
      desc: "All of this Pokémon's moves that make contact bypass protection.",
      shortDesc: 'All contact moves hit through protection.',
      name: 'Unseen Fist'
    }
  ],
  [
    'victorystar',
    {
      shortDesc: "This Pokémon and its allies' moves have their accuracy multiplied by 1.1.",
      name: 'Victory Star'
    }
  ],
  [
    'vitalspirit',
    {
      shortDesc: 'This Pokémon cannot fall asleep. Gaining this Ability while asleep cures it.',
      name: 'Vital Spirit',
      isFieldAbility:
        'If you have a Pokémon with Vital Spirit at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range. In Generation 5, Vital Spirit also prevented a Pokémon from visiting the Dream World before it was shut down.'
    }
  ],
  [
    'voltabsorb',
    {
      desc: 'This Pokémon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.',
      shortDesc: 'This Pokémon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.',
      name: 'Volt Absorb'
    }
  ],
  [
    'wanderingspirit',
    {
      desc: 'Pokémon making contact with this Pokémon have their Ability swapped with this one. Does not affect a Pokémon which has the Ability As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.',
      shortDesc: 'Pokémon making contact with this Pokémon have their Ability swapped with this one.',
      name: 'Wandering Spirit'
    }
  ],
  [
    'waterabsorb',
    {
      desc: 'This Pokémon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.',
      shortDesc: 'This Pokémon heals 1/4 of its max HP when hit by Water moves; Water immunity.',
      name: 'Water Absorb'
    }
  ],
  [
    'waterbubble',
    {
      desc: "This Pokémon's attacking stat is doubled while using a Water-type attack. If a Pokémon uses a Fire-type attack against this Pokémon, that Pokémon's attacking stat is halved when calculating the damage to this Pokémon. This Pokémon cannot be burned. Gaining this Ability while burned cures it.",
      shortDesc: "This Pokémon's Water power is 2x; it can't be burned; Fire power against it is halved.",
      name: 'Water Bubble'
    }
  ],
  [
    'watercompaction',
    {
      shortDesc: "This Pokémon's Defense is raised 2 stages after it is damaged by a Water-type move.",
      name: 'Water Compaction'
    }
  ],
  [
    'waterveil',
    {
      shortDesc: 'This Pokémon cannot be burned. Gaining this Ability while burned cures it.',
      name: 'Water Veil'
    }
  ],
  [
    'weakarmor',
    {
      desc: 'If a physical attack hits this Pokémon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.',
      shortDesc: 'If a physical attack hits this Pokémon, Defense is lowered by 1, Speed is raised by 2.',
      name: 'Weak Armor'
    }
  ],
  [
    'whitesmoke',
    {
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages.",
      name: 'White Smoke',
      isFieldAbility:
        'If a Pokémon with White Smoke is in the first place in the party (even if fainted), the chance of encountering a wild Pokémon is decreased by 50%.'
    }
  ],
  [
    'wimpout',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
      shortDesc: 'This Pokémon switches out when it reaches 1/2 or less of its maximum HP.',
      name: 'Wimp Out'
    }
  ],
  [
    'wonderguard',
    {
      shortDesc: 'This Pokémon can only be damaged by supereffective moves and indirect damage.',
      name: 'Wonder Guard'
    }
  ],
  [
    'wonderskin',
    {
      desc: 'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokémon. This change is done before any other accuracy modifying effects.',
      shortDesc: 'Status moves with accuracy checks are 50% accurate when used on this Pokémon.',
      name: 'Wonder Skin'
    }
  ],
  [
    'zenmode',
    {
      desc: "If this Pokémon is a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.",
      shortDesc: 'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.',
      name: 'Zen Mode'
    }
  ]
]);
