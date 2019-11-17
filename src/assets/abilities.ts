/* eslint-disable max-len */
import { Pokemon } from '../utils/pokemon';
import GraphQLCollection from '../utils/GraphQLCollection';

const abilities = new GraphQLCollection<string, Pokemon.Ability>(
  [
    [ 'persistent',
      {
        desc: 'The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.',
        shortDesc: 'When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.',
        name: 'Persistent',
      }
    ],
    [
      'rebound',
      {
        desc: 'On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.',
        shortDesc: 'On switch-in, blocks certain status moves and bounces them back to the user.',
        name: 'Rebound',
      }
    ],
    [
      'mountaineer',
      {
        shortDesc: 'On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.',
        name: 'Mountaineer',
      }
    ],
    [ 'noability',
      {
        shortDesc: 'Does nothing.',
        name: 'No Ability',
      }
    ],
    [ 'stench',
      {
        shortDesc: 'This Pokemon\'s attacks without a chance to flinch have a 10% chance to flinch.',
        name: 'Stench',
      }
    ],
    [ 'drizzle',
      {
        shortDesc: 'On switch-in, this Pokemon summons Rain Dance.',
        name: 'Drizzle',
      }
    ],
    [ 'speedboost',
      {
        desc: 'This Pokemon\'s Speed is raised by 1 stage at the end of each full turn it has been on the field.',
        shortDesc: 'This Pokemon\'s Speed is raised 1 stage at the end of each full turn on the field.',
        name: 'Speed Boost',
      }
    ],
    [ 'battlearmor',
      {
        shortDesc: 'This Pokemon cannot be struck by a critical hit.',
        name: 'Battle Armor',
      }
    ],
    [ 'sturdy',
      {
        desc: 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.',
        shortDesc: 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.',
        name: 'Sturdy',
      }
    ],
    [ 'damp',
      {
        desc: 'While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Ability Aftermath are prevented from having an effect.',
        shortDesc: 'Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.',
        name: 'Damp',
      }
    ],
    [ 'limber',
      {
        shortDesc: 'This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.',
        name: 'Limber',
      }
    ],
    [
      'sandveil',
      {
        desc: 'If Sandstorm is active, this Pokemon\'s evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.',
        shortDesc: 'If Sandstorm is active, this Pokemon\'s evasiveness is 1.25x; immunity to Sandstorm.',
        name: 'Sand Veil',
      }
    ],
    [
      'static',
      {
        shortDesc: '30% chance a Pokemon making contact with this Pokemon will be paralyzed.',
        name: 'Static',
      }
    ],
    [
      'voltabsorb',
      {
        desc: 'This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.',
        shortDesc: 'This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.',
        name: 'Volt Absorb',
      }
    ],
    [
      'waterabsorb',
      {
        desc: 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.',
        shortDesc: 'This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.',
        name: 'Water Absorb',
      }
    ],
    [
      'oblivious',
      {
        desc: 'This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it.',
        shortDesc: 'This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.',
        name: 'Oblivious',
      }
    ],
    [
      'cloudnine',
      {
        shortDesc: 'While this Pokemon is active, the effects of weather conditions are disabled.',
        name: 'Cloud Nine',
      }
    ],
    [
      'compoundeyes',
      {
        shortDesc: 'This Pokemon\'s moves have their accuracy multiplied by 1.3.',
        name: 'Compound Eyes',
      }
    ],
    [
      'insomnia',
      {
        shortDesc: 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
        name: 'Insomnia',
      }
    ],
    [
      'colorchange',
      {
        desc: 'This Pokemon\'s type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
        shortDesc: 'This Pokemon\'s type changes to the type of a move it\'s hit by, unless it has the type.',
        name: 'Color Change',
      }
    ],
    [
      'immunity',
      {
        shortDesc: 'This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.',
        name: 'Immunity',
      }
    ],
    [
      'flashfire',
      {
        desc: 'This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.',
        shortDesc: 'This Pokemon\'s Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.',
        name: 'Flash Fire',
      }
    ],
    [
      'shielddust',
      {
        shortDesc: 'This Pokemon is not affected by the secondary effect of another Pokemon\'s attack.',
        name: 'Shield Dust',
      }
    ],
    [
      'owntempo',
      {
        shortDesc: 'This Pokemon cannot be confused. Gaining this Ability while confused cures it.',
        name: 'Own Tempo',
      }
    ],
    [
      'suctioncups',
      {
        shortDesc: 'This Pokemon cannot be forced to switch out by another Pokemon\'s attack or item.',
        name: 'Suction Cups',
      }
    ],
    [
      'intimidate',
      {
        desc: 'On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.',
        shortDesc: 'On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.',
        name: 'Intimidate',
      }
    ],
    [
      'shadowtag',
      {
        desc: 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.',
        shortDesc: 'Prevents adjacent foes from choosing to switch unless they also have this Ability.',
        name: 'Shadow Tag',
      }
    ],
    [
      'roughskin',
      {
        desc: 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
        shortDesc: 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
        name: 'Rough Skin',
      }
    ],
    [
      'wonderguard',
      {
        shortDesc: 'This Pokemon can only be damaged by supereffective moves and indirect damage.',
        name: 'Wonder Guard',
      }
    ],
    [
      'levitate',
      {
        desc: 'This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.',
        shortDesc: 'This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.',
        name: 'Levitate',
      }
    ],
    [
      'effectspore',
      {
        desc: '30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.',
        shortDesc: '30% chance of poison/paralysis/sleep on others making contact with this Pokemon.',
        name: 'Effect Spore',
      }
    ],
    [
      'synchronize',
      {
        desc: 'If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.',
        shortDesc: 'If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.',
        name: 'Synchronize',
      }
    ],
    [
      'clearbody',
      {
        shortDesc: 'Prevents other Pokemon from lowering this Pokemon\'s stat stages.',
        name: 'Clear Body',
      }
    ],
    [
      'naturalcure',
      {
        shortDesc: 'This Pokemon has its major status condition cured when it switches out.',
        name: 'Natural Cure',
      }
    ],
    [
      'lightningrod',
      {
        desc: 'This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
        shortDesc: 'This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.',
        name: 'Lightning Rod',
      }
    ],
    [
      'serenegrace',
      {
        shortDesc: 'This Pokemon\'s moves have their secondary effect chance doubled.',
        name: 'Serene Grace',
      }
    ],
    [
      'swiftswim',
      {
        shortDesc: 'If Rain Dance is active, this Pokemon\'s Speed is doubled.',
        name: 'Swift Swim',
      }
    ],
    [
      'chlorophyll',
      {
        shortDesc: 'If Sunny Day is active, this Pokemon\'s Speed is doubled.',
        name: 'Chlorophyll',
      }
    ],
    [
      'illuminate',
      { shortDesc: 'No competitive use.', name: 'Illuminate' }
    ],
    [
      'trace',
      {
        desc: 'On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon\'s Ability. However, if one or more adjacent Pokemon has the Ability "No Ability", Trace won\'t copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned "No Ability", as well as Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Schooling, Stance Change, Trace, and Zen Mode.',
        shortDesc: 'On switch-in, or when it can, this Pokemon copies a random adjacent foe\'s Ability.',
        name: 'Trace',
      }
    ],
    [
      'hugepower',
      {
        shortDesc: 'This Pokemon\'s Attack is doubled.',
        name: 'Huge Power',
      }
    ],
    [
      'poisonpoint',
      {
        shortDesc: '30% chance a Pokemon making contact with this Pokemon will be poisoned.',
        name: 'Poison Point',
      }
    ],
    [
      'innerfocus',
      {
        shortDesc: 'This Pokemon cannot be made to flinch.',
        name: 'Inner Focus',
      }
    ],
    [
      'magmaarmor',
      {
        shortDesc: 'This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.',
        name: 'Magma Armor',
      }
    ],
    [
      'waterveil',
      {
        shortDesc: 'This Pokemon cannot be burned. Gaining this Ability while burned cures it.',
        name: 'Water Veil',
      }
    ],
    [
      'magnetpull',
      {
        desc: 'Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.',
        shortDesc: 'Prevents adjacent Steel-type foes from choosing to switch.',
        name: 'Magnet Pull',
      }
    ],
    [
      'soundproof',
      {
        shortDesc: 'This Pokemon is immune to sound-based moves, including Heal Bell.',
        name: 'Soundproof',
      }
    ],
    [
      'raindish',
      {
        desc: 'If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.',
        shortDesc: 'If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.',
        name: 'Rain Dish',
      }
    ],
    [
      'sandstream',
      {
        shortDesc: 'On switch-in, this Pokemon summons Sandstorm.',
        name: 'Sand Stream',
      }
    ],
    [
      'pressure',
      {
        desc: 'If this Pokemon is the target of an opposing Pokemon\'s move, that move loses one additional PP.',
        shortDesc: 'If this Pokemon is the target of a foe\'s move, that move loses one additional PP.',
        name: 'Pressure',
      }
    ],
    [
      'thickfat',
      {
        desc: 'If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon\'s attacking stat is halved when calculating the damage to this Pokemon.',
        shortDesc: 'Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.',
        name: 'Thick Fat',
      }
    ],
    [
      'earlybird',
      {
        shortDesc: 'This Pokemon\'s sleep counter drops by 2 instead of 1.',
        name: 'Early Bird',
      }
    ],
    [
      'flamebody',
      {
        shortDesc: '30% chance a Pokemon making contact with this Pokemon will be burned.',
        name: 'Flame Body',
      }
    ],
    [
      'runaway',
      { shortDesc: 'No competitive use.', name: 'Run Away' }
    ],
    [
      'keeneye',
      {
        desc: 'Prevents other Pokemon from lowering this Pokemon\'s accuracy stat stage. This Pokemon ignores a target\'s evasiveness stat stage.',
        shortDesc: 'This Pokemon\'s accuracy can\'t be lowered by others; ignores their evasiveness stat.',
        name: 'Keen Eye',
      }
    ],
    [
      'hypercutter',
      {
        shortDesc: 'Prevents other Pokemon from lowering this Pokemon\'s Attack stat stage.',
        name: 'Hyper Cutter',
      }
    ],
    [
      'pickup',
      {
        shortDesc: 'If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.',
        name: 'Pickup',
      }
    ],
    [
      'truant',
      {
        shortDesc: 'This Pokemon skips every other turn instead of using a move.',
        name: 'Truant',
      }
    ],
    [
      'hustle',
      {
        desc: 'This Pokemon\'s Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.',
        shortDesc: 'This Pokemon\'s Attack is 1.5x and accuracy of its physical attacks is 0.8x.',
        name: 'Hustle',
      }
    ],
    [
      'cutecharm',
      {
        desc: 'There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.',
        shortDesc: '30% chance of infatuating Pokemon of the opposite gender if they make contact.',
        name: 'Cute Charm',
      }
    ],
    [
      'plus',
      {
        desc: 'If an active ally has this Ability or the Ability Minus, this Pokemon\'s Special Attack is multiplied by 1.5.',
        shortDesc: 'If an active ally has this Ability or the Ability Minus, this Pokemon\'s Sp. Atk is 1.5x.',
        name: 'Plus',
      }
    ],
    [
      'minus',
      {
        desc: 'If an active ally has this Ability or the Ability Plus, this Pokemon\'s Special Attack is multiplied by 1.5.',
        shortDesc: 'If an active ally has this Ability or the Ability Plus, this Pokemon\'s Sp. Atk is 1.5x.',
        name: 'Minus',
      }
    ],
    [
      'forecast',
      {
        desc: 'If this Pokemon is a Castform, its type changes to the current weather condition\'s type, except Sandstorm.',
        shortDesc: 'Castform\'s type changes to the current weather condition\'s type, except Sandstorm.',
        name: 'Forecast',
      }
    ],
    [
      'stickyhold',
      {
        shortDesc: 'This Pokemon cannot lose its held item due to another Pokemon\'s attack.',
        name: 'Sticky Hold',
      }
    ],
    [
      'shedskin',
      {
        desc: 'This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.',
        shortDesc: 'This Pokemon has a 33% chance to have its status cured at the end of each turn.',
        name: 'Shed Skin',
      }
    ],
    [
      'guts',
      {
        desc: 'If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn\'s physical damage halving is ignored.',
        shortDesc: 'If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.',
        name: 'Guts',
      }
    ],
    [
      'marvelscale',
      {
        desc: 'If this Pokemon has a major status condition, its Defense is multiplied by 1.5.',
        shortDesc: 'If this Pokemon is statused, its Defense is 1.5x.',
        name: 'Marvel Scale',
      }
    ],
    [
      'liquidooze',
      {
        shortDesc: 'This Pokemon damages those draining HP from it for as much as they would heal.',
        name: 'Liquid Ooze',
      }
    ],
    [
      'overgrow',
      {
        desc: 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.',
        shortDesc: 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Grass attacks.',
        name: 'Overgrow',
      }
    ],
    [
      'blaze',
      {
        desc: 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.',
        shortDesc: 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Fire attacks.',
        name: 'Blaze',
      }
    ],
    [
      'torrent',
      {
        desc: 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.',
        shortDesc: 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Water attacks.',
        name: 'Torrent',
      }
    ],
    [
      'swarm',
      {
        desc: 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.',
        shortDesc: 'At 1/3 or less of its max HP, this Pokemon\'s attacking stat is 1.5x with Bug attacks.',
        name: 'Swarm',
      }
    ],
    [
      'rockhead',
      {
        desc: 'This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.',
        shortDesc: 'This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.',
        name: 'Rock Head',
      }
    ],
    [
      'drought',
      {
        shortDesc: 'On switch-in, this Pokemon summons Sunny Day.',
        name: 'Drought',
      }
    ],
    [
      'arenatrap',
      {
        desc: 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.',
        shortDesc: 'Prevents adjacent foes from choosing to switch unless they are airborne.',
        name: 'Arena Trap',
      }
    ],
    [
      'vitalspirit',
      {
        shortDesc: 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
        name: 'Vital Spirit',
      }
    ],
    [
      'whitesmoke',
      {
        shortDesc: 'Prevents other Pokemon from lowering this Pokemon\'s stat stages.',
        name: 'White Smoke',
      }
    ],
    [
      'purepower',
      {
        shortDesc: 'This Pokemon\'s Attack is doubled.',
        name: 'Pure Power',
      }
    ],
    [
      'shellarmor',
      {
        shortDesc: 'This Pokemon cannot be struck by a critical hit.',
        name: 'Shell Armor',
      }
    ],
    [
      'airlock',
      {
        shortDesc: 'While this Pokemon is active, the effects of weather conditions are disabled.',
        name: 'Air Lock',
      }
    ],
    [
      'tangledfeet',
      {
        shortDesc: 'This Pokemon\'s evasiveness is doubled as long as it is confused.',
        name: 'Tangled Feet',
      }
    ],
    [
      'motordrive',
      {
        desc: 'This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.',
        shortDesc: 'This Pokemon\'s Speed is raised 1 stage if hit by an Electric move; Electric immunity.',
        name: 'Motor Drive',
      }
    ],
    [
      'rivalry',
      {
        desc: 'This Pokemon\'s attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.',
        shortDesc: 'This Pokemon\'s attacks do 1.25x on same gender targets; 0.75x on opposite gender.',
        name: 'Rivalry',
      }
    ],
    [
      'steadfast',
      {
        shortDesc: 'If this Pokemon flinches, its Speed is raised by 1 stage.',
        name: 'Steadfast',
      }
    ],
    [
      'snowcloak',
      {
        desc: 'If Hail is active, this Pokemon\'s evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.',
        shortDesc: 'If Hail is active, this Pokemon\'s evasiveness is 1.25x; immunity to Hail.',
        name: 'Snow Cloak',
      }
    ],
    [
      'gluttony',
      {
        shortDesc: 'When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.',
        name: 'Gluttony',
      }
    ],
    [
      'angerpoint',
      {
        desc: 'If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.',
        shortDesc: 'If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.',
        name: 'Anger Point',
      }
    ],
    [
      'unburden',
      {
        desc: 'If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.',
        shortDesc: 'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.',
        name: 'Unburden',
      }
    ],
    [
      'heatproof',
      {
        desc: 'The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.',
        shortDesc: 'The power of Fire-type attacks against this Pokemon is halved; burn damage halved.',
        name: 'Heatproof',
      }
    ],
    [
      'simple',
      {
        desc: 'When this Pokemon\'s stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.',
        shortDesc: 'When this Pokemon\'s stat stages are raised or lowered, the effect is doubled instead.',
        name: 'Simple',
      }
    ],
    [
      'dryskin',
      {
        desc: 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.',
        shortDesc: 'This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.',
        name: 'Dry Skin',
      }
    ],
    [
      'download',
      {
        desc: 'On switch-in, this Pokemon\'s Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.',
        shortDesc: 'On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes\' weaker Defense.',
        name: 'Download',
      }
    ],
    [
      'ironfist',
      {
        desc: 'This Pokemon\'s punch-based attacks have their power multiplied by 1.2.',
        shortDesc: 'This Pokemon\'s punch-based attacks have 1.2x power. Sucker Punch is not boosted.',
        name: 'Iron Fist',
      }
    ],
    [
      'poisonheal',
      {
        desc: 'If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.',
        shortDesc: 'This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.',
        name: 'Poison Heal',
      }
    ],
    [
      'adaptability',
      {
        desc: 'This Pokemon\'s moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.',
        shortDesc: 'This Pokemon\'s same-type attack bonus (STAB) is 2 instead of 1.5.',
        name: 'Adaptability',
      }
    ],
    [
      'skilllink',
      {
        shortDesc: 'This Pokemon\'s multi-hit attacks always hit the maximum number of times.',
        name: 'Skill Link',
      }
    ],
    [
      'hydration',
      {
        desc: 'This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active.',
        shortDesc: 'This Pokemon has its status cured at the end of each turn if Rain Dance is active.',
        name: 'Hydration',
      }
    ],
    [
      'solarpower',
      {
        desc: 'If Sunny Day is active, this Pokemon\'s Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.',
        shortDesc: 'If Sunny Day is active, this Pokemon\'s Sp. Atk is 1.5x; loses 1/8 max HP per turn.',
        name: 'Solar Power',
      }
    ],
    [
      'quickfeet',
      {
        desc: 'If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.',
        shortDesc: 'If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.',
        name: 'Quick Feet',
      }
    ],
    [
      'normalize',
      {
        desc: 'This Pokemon\'s moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move\'s type.',
        shortDesc: 'This Pokemon\'s moves are changed to be Normal type and have 1.2x power.',
        name: 'Normalize',
      }
    ],
    [
      'sniper',
      {
        shortDesc: 'If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.',
        name: 'Sniper',
      }
    ],
    [
      'magicguard',
      {
        desc: 'This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.',
        shortDesc: 'This Pokemon can only be damaged by direct attacks.',
        name: 'Magic Guard',
      }
    ],
    [
      'noguard',
      {
        shortDesc: 'Every move used by or against this Pokemon will always hit.',
        name: 'No Guard',
      }
    ],
    [
      'stall',
      {
        shortDesc: 'This Pokemon moves last among Pokemon using the same or greater priority moves.',
        name: 'Stall',
      }
    ],
    [
      'technician',
      {
        desc: 'This Pokemon\'s moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.',
        shortDesc: 'This Pokemon\'s moves of 60 power or less have 1.5x power. Includes Struggle.',
        name: 'Technician',
      }
    ],
    [
      'leafguard',
      {
        desc: 'If Sunny Day is active, this Pokemon cannot gain a major status condition and Rest will fail for it.',
        shortDesc: 'If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.',
        name: 'Leaf Guard',
      }
    ],
    [
      'klutz',
      {
        desc: 'This Pokemon\'s held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.',
        shortDesc: 'This Pokemon\'s held item has no effect, except Macho Brace. Fling cannot be used.',
        name: 'Klutz',
      }
    ],
    [
      'moldbreaker',
      {
        shortDesc: 'This Pokemon\'s moves and their effects ignore the Abilities of other Pokemon.',
        name: 'Mold Breaker',
      }
    ],
    [
      'superluck',
      {
        shortDesc: 'This Pokemon\'s critical hit ratio is raised by 1 stage.',
        name: 'Super Luck',
      }
    ],
    [
      'aftermath',
      {
        desc: 'If this Pokemon is knocked out with a contact move, that move\'s user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Ability Damp, this effect is prevented.',
        shortDesc: 'If this Pokemon is KOed with a contact move, that move\'s user loses 1/4 its max HP.',
        name: 'Aftermath',
      }
    ],
    [
      'anticipation',
      {
        desc: 'On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, while Hidden Power, Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.',
        shortDesc: 'On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.',
        name: 'Anticipation',
      }
    ],
    [
      'forewarn',
      {
        desc: 'On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.',
        shortDesc: 'On switch-in, this Pokemon is alerted to the foes\' move with the highest power.',
        name: 'Forewarn',
      }
    ],
    [
      'unaware',
      {
        desc: 'This Pokemon ignores other Pokemon\'s Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon\'s Defense, Special Defense, and evasiveness stat stages when dealing damage.',
        shortDesc: 'This Pokemon ignores other Pokemon\'s stat stages when taking or doing damage.',
        name: 'Unaware',
      }
    ],
    [
      'tintedlens',
      {
        shortDesc: 'This Pokemon\'s attacks that are not very effective on a target deal double damage.',
        name: 'Tinted Lens',
      }
    ],
    [
      'filter',
      {
        shortDesc: 'This Pokemon receives 3/4 damage from supereffective attacks.',
        name: 'Filter',
      }
    ],
    [
      'slowstart',
      {
        shortDesc: 'On switch-in, this Pokemon\'s Attack and Speed are halved for 5 turns.',
        name: 'Slow Start',
      }
    ],
    [
      'scrappy',
      {
        shortDesc: 'This Pokemon can hit Ghost types with Normal- and Fighting-type moves.',
        name: 'Scrappy',
      }
    ],
    [
      'stormdrain',
      {
        desc: 'This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
        shortDesc: 'This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.',
        name: 'Storm Drain',
      }
    ],
    [
      'icebody',
      {
        desc: 'If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.',
        shortDesc: 'If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.',
        name: 'Ice Body',
      }
    ],
    [
      'solidrock',
      {
        shortDesc: 'This Pokemon receives 3/4 damage from supereffective attacks.',
        name: 'Solid Rock',
      }
    ],
    [
      'snowwarning',
      {
        shortDesc: 'On switch-in, this Pokemon summons Hail.',
        name: 'Snow Warning',
      }
    ],
    [
      'honeygather',
      { shortDesc: 'No competitive use.', name: 'Honey Gather' }
    ],
    [
      'frisk',
      {
        shortDesc: 'On switch-in, this Pokemon identifies the held items of all opposing Pokemon.',
        name: 'Frisk',
      }
    ],
    [
      'reckless',
      {
        desc: 'This Pokemon\'s attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.',
        shortDesc: 'This Pokemon\'s attacks with recoil or crash damage have 1.2x power; not Struggle.',
        name: 'Reckless',
      }
    ],
    [
      'multitype',
      {
        shortDesc: 'If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.',
        name: 'Multitype',
      }
    ],
    [
      'flowergift',
      {
        desc: 'If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.',
        shortDesc: 'If user is Cherrim and Sunny Day is active, it and allies\' Attack and Sp. Def are 1.5x.',
        name: 'Flower Gift',
      }
    ],
    [
      'baddreams',
      {
        desc: 'Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.',
        shortDesc: 'Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.',
        name: 'Bad Dreams',
      }
    ],
    [
      'pickpocket',
      {
        desc: 'If this Pokemon has no item, it steals the item off a Pokemon that makes contact with it. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
        shortDesc: 'If this Pokemon has no item, it steals the item off a Pokemon making contact with it.',
        name: 'Pickpocket',
      }
    ],
    [
      'sheerforce',
      {
        desc: 'This Pokemon\'s attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.',
        shortDesc: 'This Pokemon\'s attacks with secondary effects have 1.3x power; nullifies the effects.',
        name: 'Sheer Force',
      }
    ],
    [
      'contrary',
      {
        desc: 'If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.',
        shortDesc: 'If this Pokemon has a stat stage raised it is lowered instead, and vice versa.',
        name: 'Contrary',
      }
    ],
    [
      'unnerve',
      {
        desc: 'While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon\'s Speed tiers.',
        shortDesc: 'While this Pokemon is active, it prevents opposing Pokemon from using their Berries.',
        name: 'Unnerve',
      }
    ],
    [
      'defiant',
      {
        desc: 'This Pokemon\'s Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.',
        shortDesc: 'This Pokemon\'s Attack is raised by 2 for each of its stats that is lowered by a foe.',
        name: 'Defiant',
      }
    ],
    [
      'defeatist',
      {
        desc: 'While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.',
        shortDesc: 'While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.',
        name: 'Defeatist',
      }
    ],
    [
      'cursedbody',
      {
        desc: 'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker\'s moves is already disabled.',
        shortDesc: 'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.',
        name: 'Cursed Body',
      }
    ],
    [
      'healer',
      {
        desc: 'There is a 30% chance of curing an adjacent ally\'s major status condition at the end of each turn.',
        shortDesc: '30% chance of curing an adjacent ally\'s status at the end of each turn.',
        name: 'Healer',
      }
    ],
    [
      'friendguard',
      {
        shortDesc: 'This Pokemon\'s allies receive 3/4 damage from other Pokemon\'s attacks.',
        name: 'Friend Guard',
      }
    ],
    [
      'weakarmor',
      {
        desc: 'If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.',
        shortDesc: 'If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.',
        name: 'Weak Armor',
      }
    ],
    [
      'heavymetal',
      {
        shortDesc: 'This Pokemon\'s weight is doubled.',
        name: 'Heavy Metal',
      }
    ],
    [
      'lightmetal',
      {
        shortDesc: 'This Pokemon\'s weight is halved.',
        name: 'Light Metal',
      }
    ],
    [
      'multiscale',
      {
        shortDesc: 'If this Pokemon is at full HP, damage taken from attacks is halved.',
        name: 'Multiscale',
      }
    ],
    [
      'toxicboost',
      {
        desc: 'While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.',
        shortDesc: 'While this Pokemon is poisoned, its physical attacks have 1.5x power.',
        name: 'Toxic Boost',
      }
    ],
    [
      'flareboost',
      {
        desc: 'While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.',
        shortDesc: 'While this Pokemon is burned, its special attacks have 1.5x power.',
        name: 'Flare Boost',
      }
    ],
    [
      'harvest',
      {
        desc: 'If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.',
        shortDesc: 'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.',
        name: 'Harvest',
      }
    ],
    [
      'telepathy',
      {
        shortDesc: 'This Pokemon does not take damage from attacks made by its allies.',
        name: 'Telepathy',
      }
    ],
    [
      'moody',
      {
        desc: 'This Pokemon has a random stat raised by 2 stages and another stat lowered by 1 stage at the end of each turn.',
        shortDesc: 'Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.',
        name: 'Moody',
      }
    ],
    [
      'overcoat',
      {
        shortDesc: 'This Pokemon is immune to powder moves and damage from Sandstorm or Hail.',
        name: 'Overcoat',
      }
    ],
    [
      'poisontouch',
      {
        shortDesc: 'This Pokemon\'s contact moves have a 30% chance of poisoning.',
        name: 'Poison Touch',
      }
    ],
    [
      'regenerator',
      {
        shortDesc: 'This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.',
        name: 'Regenerator',
      }
    ],
    [
      'bigpecks',
      {
        shortDesc: 'Prevents other Pokemon from lowering this Pokemon\'s Defense stat stage.',
        name: 'Big Pecks',
      }
    ],
    [
      'sandrush',
      {
        desc: 'If Sandstorm is active, this Pokemon\'s Speed is doubled. This Pokemon takes no damage from Sandstorm.',
        shortDesc: 'If Sandstorm is active, this Pokemon\'s Speed is doubled; immunity to Sandstorm.',
        name: 'Sand Rush',
      }
    ],
    [
      'wonderskin',
      {
        desc: 'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.',
        shortDesc: 'Status moves with accuracy checks are 50% accurate when used on this Pokemon.',
        name: 'Wonder Skin',
      }
    ],
    [
      'analytic',
      {
        desc: 'The power of this Pokemon\'s move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.',
        shortDesc: 'This Pokemon\'s attacks have 1.3x power if it is the last to move in a turn.',
        name: 'Analytic',
      }
    ],
    [
      'illusion',
      {
        desc: 'When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon\'s attack. This Pokemon\'s actual level and HP are displayed instead of those of the mimicked Pokemon.',
        shortDesc: 'This Pokemon appears as the last Pokemon in the party until it takes direct damage.',
        name: 'Illusion',
      }
    ],
    [
      'imposter',
      {
        desc: 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.',
        shortDesc: 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.',
        name: 'Imposter',
      }
    ],
    [
      'infiltrator',
      {
        desc: 'This Pokemon\'s moves ignore substitutes and the opposing side\'s Reflect, Light Screen, Safeguard, Mist and Aurora Veil.',
        shortDesc: 'Moves ignore substitutes and foe\'s Reflect/Light Screen/Safeguard/Mist/Aurora Veil.',
        name: 'Infiltrator',
      }
    ],
    [
      'mummy',
      {
        desc: 'Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.',
        shortDesc: 'Pokemon making contact with this Pokemon have their Ability changed to Mummy.',
        name: 'Mummy',
      }
    ],
    [
      'moxie',
      {
        desc: 'This Pokemon\'s Attack is raised by 1 stage if it attacks and knocks out another Pokemon.',
        shortDesc: 'This Pokemon\'s Attack is raised by 1 stage if it attacks and KOes another Pokemon.',
        name: 'Moxie',
      }
    ],
    [
      'justified',
      {
        shortDesc: 'This Pokemon\'s Attack is raised by 1 stage after it is damaged by a Dark-type move.',
        name: 'Justified',
      }
    ],
    [
      'rattled',
      {
        desc: 'This Pokemon\'s Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.',
        shortDesc: 'This Pokemon\'s Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.',
        name: 'Rattled',
      }
    ],
    [
      'magicbounce',
      {
        desc: 'This Pokemon blocks certain status moves and instead uses the move against the original user.',
        shortDesc: 'This Pokemon blocks certain status moves and bounces them back to the user.',
        name: 'Magic Bounce',
      }
    ],
    [
      'sapsipper',
      {
        desc: 'This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.',
        shortDesc: 'This Pokemon\'s Attack is raised 1 stage if hit by a Grass move; Grass immunity.',
        name: 'Sap Sipper',
      }
    ],
    [
      'prankster',
      {
        shortDesc: 'This Pokemon\'s Status moves have priority raised by 1, but Dark types are immune.',
        name: 'Prankster',
      }
    ],
    [
      'sandforce',
      {
        desc: 'If Sandstorm is active, this Pokemon\'s Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.',
        shortDesc: 'This Pokemon\'s Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.',
        name: 'Sand Force',
      }
    ],
    [
      'ironbarbs',
      {
        desc: 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
        shortDesc: 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
        name: 'Iron Barbs',
      }
    ],
    [
      'zenmode',
      {
        desc: 'If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan\'s HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.',
        shortDesc: 'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.',
        name: 'Zen Mode',
      }
    ],
    [
      'victorystar',
      {
        shortDesc: 'This Pokemon and its allies\' moves have their accuracy multiplied by 1.1.',
        name: 'Victory Star',
      }
    ],
    [
      'turboblaze',
      {
        shortDesc: 'This Pokemon\'s moves and their effects ignore the Abilities of other Pokemon.',
        name: 'Turboblaze',
      }
    ],
    [
      'teravolt',
      {
        shortDesc: 'This Pokemon\'s moves and their effects ignore the Abilities of other Pokemon.',
        name: 'Teravolt',
      }
    ],
    [
      'aromaveil',
      {
        desc: 'This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.',
        shortDesc: 'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.',
        name: 'Aroma Veil',
      }
    ],
    [
      'flowerveil',
      {
        desc: 'Grass-type Pokemon on this Pokemon\'s side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.',
        shortDesc: 'This side\'s Grass types can\'t have stats lowered or status inflicted by other Pokemon.',
        name: 'Flower Veil',
      }
    ],
    [
      'cheekpouch',
      {
        desc: 'If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry\'s effect.',
        shortDesc: 'If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry\'s effect.',
        name: 'Cheek Pouch',
      }
    ],
    [
      'protean',
      {
        desc: 'This Pokemon\'s type changes to match the type of the move it is about to use. This effect comes after all effects that change a move\'s type.',
        shortDesc: 'This Pokemon\'s type changes to match the type of the move it is about to use.',
        name: 'Protean',
      }
    ],
    [
      'furcoat',
      {
        shortDesc: 'This Pokemon\'s Defense is doubled.',
        name: 'Fur Coat',
      }
    ],
    [
      'magician',
      {
        desc: 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.',
        shortDesc: 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.',
        name: 'Magician',
      }
    ],
    [
      'bulletproof',
      {
        desc: 'This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.',
        shortDesc: 'Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).',
        name: 'Bulletproof',
      }
    ],
    [
      'competitive',
      {
        desc: 'This Pokemon\'s Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.',
        shortDesc: 'This Pokemon\'s Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.',
        name: 'Competitive',
      }
    ],
    [
      'strongjaw',
      {
        desc: 'This Pokemon\'s bite-based attacks have their power multiplied by 1.5.',
        shortDesc: 'This Pokemon\'s bite-based attacks have 1.5x power. Bug Bite is not boosted.',
        name: 'Strong Jaw',
      }
    ],
    [
      'refrigerate',
      {
        desc: 'This Pokemon\'s Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.',
        shortDesc: 'This Pokemon\'s Normal-type moves become Ice type and have 1.2x power.',
        name: 'Refrigerate',
      }
    ],
    [
      'sweetveil',
      {
        shortDesc: 'This Pokemon and its allies cannot fall asleep.',
        name: 'Sweet Veil',
      }
    ],
    [
      'stancechange',
      {
        desc: 'If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King\'s Shield.',
        shortDesc: 'If Aegislash, changes Forme to Blade before attacks and Shield before King\'s Shield.',
        name: 'Stance Change',
      }
    ],
    [
      'galewings',
      {
        shortDesc: 'If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.',
        name: 'Gale Wings',
      }
    ],
    [
      'megalauncher',
      {
        desc: 'This Pokemon\'s pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target\'s maximum HP, rounded half down.',
        shortDesc: 'This Pokemon\'s pulse moves have 1.5x power. Heal Pulse heals 3/4 target\'s max HP.',
        name: 'Mega Launcher',
      }
    ],
    [
      'grasspelt',
      {
        shortDesc: 'If Grassy Terrain is active, this Pokemon\'s Defense is multiplied by 1.5.',
        name: 'Grass Pelt',
      }
    ],
    [
      'symbiosis',
      {
        desc: 'If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally\'s item was stolen or knocked off.',
        shortDesc: 'If an ally uses its item, this Pokemon gives its item to that ally immediately.',
        name: 'Symbiosis',
      }
    ],
    [
      'toughclaws',
      {
        shortDesc: 'This Pokemon\'s contact moves have their power multiplied by 1.3.',
        name: 'Tough Claws',
      }
    ],
    [
      'pixilate',
      {
        desc: 'This Pokemon\'s Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.',
        shortDesc: 'This Pokemon\'s Normal-type moves become Fairy type and have 1.2x power.',
        name: 'Pixilate',
      }
    ],
    [
      'gooey',
      {
        shortDesc: 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
        name: 'Gooey',
      }
    ],
    [
      'parentalbond',
      {
        desc: 'This Pokemon\'s damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.',
        shortDesc: 'This Pokemon\'s damaging moves hit twice. The second hit has its damage quartered.',
        name: 'Parental Bond',
      }
    ],
    [
      'aerilate',
      {
        desc: 'This Pokemon\'s Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.',
        shortDesc: 'This Pokemon\'s Normal-type moves become Flying type and have 1.2x power.',
        name: 'Aerilate',
      }
    ],
    [
      'darkaura',
      {
        desc: 'While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.',
        shortDesc: 'While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.',
        name: 'Dark Aura',
      }
    ],
    [
      'fairyaura',
      {
        desc: 'While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.',
        shortDesc: 'While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.',
        name: 'Fairy Aura',
      }
    ],
    [
      'aurabreak',
      {
        desc: 'While this Pokemon is active, the effects of the Abilities Dark Aura and Fairy Aura are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.',
        shortDesc: 'While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.',
        name: 'Aura Break',
      }
    ],
    [
      'primordialsea',
      {
        desc: 'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.',
        shortDesc: 'On switch-in, heavy rain begins until this Ability is not active in battle.',
        name: 'Primordial Sea',
      }
    ],
    [
      'desolateland',
      {
        desc: 'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.',
        shortDesc: 'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.',
        name: 'Desolate Land',
      }
    ],
    [
      'deltastream',
      {
        desc: 'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.',
        shortDesc: 'On switch-in, strong winds begin until this Ability is not active in battle.',
        name: 'Delta Stream',
      }
    ],
    [
      'stamina',
      {
        shortDesc: 'This Pokemon\'s Defense is raised by 1 stage after it is damaged by a move.',
        name: 'Stamina',
      }
    ],
    [
      'wimpout',
      {
        desc: 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
        shortDesc: 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
        name: 'Wimp Out',
      }
    ],
    [
      'emergencyexit',
      {
        desc: 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
        shortDesc: 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
        name: 'Emergency Exit',
      }
    ],
    [
      'watercompaction',
      {
        shortDesc: 'This Pokemon\'s Defense is raised 2 stages after it is damaged by a Water-type move.',
        name: 'Water Compaction',
      }
    ],
    [
      'merciless',
      {
        shortDesc: 'This Pokemon\'s attacks are critical hits if the target is poisoned.',
        name: 'Merciless',
      }
    ],
    [
      'shieldsdown',
      {
        desc: 'If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc: 'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.',
        name: 'Shields Down',
      }
    ],
    [
      'stakeout',
      {
        shortDesc: 'This Pokemon\'s attacking stat is doubled against a target that switched in this turn.',
        name: 'Stakeout',
      }
    ],
    [
      'waterbubble',
      {
        desc: 'This Pokemon\'s attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon\'s attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.',
        shortDesc: 'This Pokemon\'s Water power is 2x; it can\'t be burned; Fire power against it is halved.',
        name: 'Water Bubble',
      }
    ],
    [
      'steelworker',
      {
        shortDesc: 'This Pokemon\'s attacking stat is multiplied by 1.5 while using a Steel-type attack.',
        name: 'Steelworker',
      }
    ],
    [
      'berserk',
      {
        desc: 'When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
        shortDesc: 'This Pokemon\'s Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.',
        name: 'Berserk',
      }
    ],
    [
      'slushrush',
      {
        shortDesc: 'If Hail is active, this Pokemon\'s Speed is doubled.',
        name: 'Slush Rush',
      }
    ],
    [
      'longreach',
      {
        shortDesc: 'This Pokemon\'s attacks do not make contact with the target.',
        name: 'Long Reach',
      }
    ],
    [
      'liquidvoice',
      {
        desc: 'This Pokemon\'s sound-based moves become Water-type moves. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.',
        shortDesc: 'This Pokemon\'s sound-based moves become Water type.',
        name: 'Liquid Voice',
      }
    ],
    [
      'triage',
      {
        shortDesc: 'This Pokemon\'s healing moves have their priority increased by 3.',
        name: 'Triage',
      }
    ],
    [
      'galvanize',
      {
        desc: 'This Pokemon\'s Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move\'s type, but before Ion Deluge and Electrify\'s effects.',
        shortDesc: 'This Pokemon\'s Normal-type moves become Electric type and have 1.2x power.',
        name: 'Galvanize',
      }
    ],
    [
      'surgesurfer',
      {
        shortDesc: 'If Electric Terrain is active, this Pokemon\'s Speed is doubled.',
        name: 'Surge Surfer',
      }
    ],
    [
      'schooling',
      {
        desc: 'On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.',
        shortDesc: 'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.',
        name: 'Schooling',
      }
    ],
    [
      'disguise',
      {
        desc: 'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.',
        shortDesc: 'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage.',
        name: 'Disguise',
      }
    ],
    [
      'battlebond',
      {
        desc: 'If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.',
        shortDesc: 'After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.',
        name: 'Battle Bond',
      }
    ],
    [
      'powerconstruct',
      {
        desc: 'If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.',
        shortDesc: 'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.',
        name: 'Power Construct',
      }
    ],
    [
      'corrosion',
      {
        shortDesc: 'This Pokemon can poison or badly poison other Pokemon regardless of their typing.',
        name: 'Corrosion',
      }
    ],
    [
      'comatose',
      {
        desc: 'This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc: 'This Pokemon cannot be statused, and is considered to be asleep.',
        name: 'Comatose',
      }
    ],
    [
      'queenlymajesty',
      {
        desc: 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
        shortDesc: 'While this Pokemon is active, allies are protected from opposing priority moves.',
        name: 'Queenly Majesty',
      }
    ],
    [
      'innardsout',
      {
        desc: 'If this Pokemon is knocked out with a move, that move\'s user loses HP equal to the amount of damage inflicted on this Pokemon.',
        shortDesc: 'If this Pokemon is KOed with a move, that move\'s user loses an equal amount of HP.',
        name: 'Innards Out',
      }
    ],
    [
      'dancer',
      {
        desc: 'After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.',
        shortDesc: 'After another Pokemon uses a dance move, this Pokemon uses the same move.',
        name: 'Dancer',
      }
    ],
    [
      'battery',
      {
        shortDesc: 'This Pokemon\'s allies have the power of their special attacks multiplied by 1.3.',
        name: 'Battery',
      }
    ],
    [
      'fluffy',
      {
        desc: 'This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.',
        shortDesc: 'This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.',
        name: 'Fluffy',
      }
    ],
    [
      'dazzling',
      {
        desc: 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
        shortDesc: 'While this Pokemon is active, allies are protected from opposing priority moves.',
        name: 'Dazzling',
      }
    ],
    [
      'soulheart',
      {
        desc: 'This Pokemon\'s Special Attack is raised by 1 stage when another Pokemon faints.',
        shortDesc: 'This Pokemon\'s Sp. Atk is raised by 1 stage when another Pokemon faints.',
        name: 'Soul-Heart',
      }
    ],
    [
      'tanglinghair',
      {
        shortDesc: 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
        name: 'Tangling Hair',
      }
    ],
    [
      'receiver',
      {
        desc: 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
        shortDesc: 'This Pokemon copies the Ability of an ally that faints.',
        name: 'Receiver',
      }
    ],
    [
      'powerofalchemy',
      {
        desc: 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
        shortDesc: 'This Pokemon copies the Ability of an ally that faints.',
        name: 'Power of Alchemy',
      }
    ],
    [
      'beastboost',
      {
        desc: 'This Pokemon\'s highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.',
        shortDesc: 'This Pokemon\'s highest stat is raised by 1 if it attacks and KOes another Pokemon.',
        name: 'Beast Boost',
      }
    ],
    [
      'rkssystem',
      {
        shortDesc: 'If this Pokemon is a Silvally, its type changes to match its held Memory.',
        name: 'RKS System',
      }
    ],
    [
      'electricsurge',
      {
        shortDesc: 'On switch-in, this Pokemon summons Electric Terrain.',
        name: 'Electric Surge',
      }
    ],
    [
      'psychicsurge',
      {
        shortDesc: 'On switch-in, this Pokemon summons Psychic Terrain.',
        name: 'Psychic Surge',
      }
    ],
    [
      'mistysurge',
      {
        shortDesc: 'On switch-in, this Pokemon summons Misty Terrain.',
        name: 'Misty Surge',
      }
    ],
    [
      'grassysurge',
      {
        shortDesc: 'On switch-in, this Pokemon summons Grassy Terrain.',
        name: 'Grassy Surge',
      }
    ],
    [
      'fullmetalbody',
      {
        desc: 'Prevents other Pokemon from lowering this Pokemon\'s stat stages. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc: 'Prevents other Pokemon from lowering this Pokemon\'s stat stages.',
        name: 'Full Metal Body',
      }
    ],
    [
      'shadowshield',
      {
        desc: 'If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc: 'If this Pokemon is at full HP, damage taken from attacks is halved.',
        name: 'Shadow Shield',
      }
    ],
    [
      'prismarmor',
      {
        desc: 'This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
        shortDesc: 'This Pokemon receives 3/4 damage from supereffective attacks.',
        name: 'Prism Armor',
      }
    ],
    [
      'neuroforce',
      {
        shortDesc: 'This Pokemon\'s attacks that are super effective against the target do 1.25x damage.',
        name: 'Neuroforce',
      }
    ],
    [
      'ballfetch',
      {
        desc: 'A Pokémon with Ball Fetch will collect the first Poké Ball thrown that fails to catch a Pokémon if they are not holding anything.',
        shortDesc: 'If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle.',
        name: 'Ball Fetch',
      }
    ]
  ]
);

export default abilities;