import type { PokemonTypes } from '#assets/pokemon-source';
import { IsNonStandard } from '#utils/isNonStandardEnum';
import { Collection } from '@discordjs/collection';

/** The abilities in Pokémon */
export const abilities = new Collection<string, PokemonTypes.Ability>([
  [
    'adaptability',
    {
      desc: "This Pokémon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
      name: 'Adaptability',
      shortDesc: "This Pokémon's same-type attack bonus (STAB) is 2 instead of 1.5."
    }
  ],
  [
    'aerilate',
    {
      desc: "This Pokémon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: 'Aerilate',
      shortDesc: "This Pokémon's Normal-type moves become Flying type and have 1.2x power."
    }
  ],
  [
    'aftermath',
    {
      desc: "If this Pokémon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokémon has the Damp Ability, this effect is prevented.",
      name: 'Aftermath',
      shortDesc: "If this Pokémon is KOed with a contact move, that move's user loses 1/4 its max HP."
    }
  ],
  [
    'airlock',
    {
      name: 'Air Lock',
      shortDesc: 'While this Pokémon is active, the effects of weather conditions are disabled.'
    }
  ],
  [
    'analytic',
    {
      desc: "The power of this Pokémon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
      name: 'Analytic',
      shortDesc: "This Pokémon's attacks have 1.3x power if it is the last to move in a turn."
    }
  ],
  [
    'angerpoint',
    {
      desc: 'If this Pokémon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.',
      name: 'Anger Point',
      shortDesc: 'If this Pokémon (not its substitute) takes a critical hit, its Attack is raised 12 stages.'
    }
  ],
  [
    'angershell',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Attack, Special Attack, and Speed are raised by 1 stage, and its Defense and Special Defense are lowered by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.',
      name: 'Anger Shell',
      shortDesc: "At 1/2 or less of this Pokémon's max HP: +1 Atk, Sp. Atk, Spe, and -1 Def, Sp. Def."
    }
  ],
  [
    'anticipation',
    {
      desc: 'On switch-in, this Pokémon is alerted if any opposing Pokémon has an attack that is super effective against this Pokémon, or an OHKO move. This effect considers any move that deals direct damage as an attacking move of its respective type, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.',
      name: 'Anticipation',
      shortDesc: 'On switch-in, this Pokémon shudders if any foe has a supereffective or OHKO move.'
    }
  ],
  [
    'arenatrap',
    {
      desc: 'Prevents opposing Pokémon from choosing to switch out unless they are airborne, are holding a Shed Shell, or are a Ghost type.',
      isFieldAbility:
        'Having a Pokémon with Arena Trap at the front of your party will double the encounter rate of all wild Pokémon, even if the Pokémon with Arena Trap has fainted.',
      name: 'Arena Trap',
      shortDesc: 'Prevents opposing Pokémon from choosing to switch out unless they are airborne.'
    }
  ],
  [
    'armortail',
    {
      desc: 'Priority moves used by opposing Pokémon targeting this Pokémon or its allies are prevented from having an effect.',
      name: 'Armor Tail',
      shortDesc: 'This Pokémon and its allies are protected from opposing priority moves.'
    }
  ],
  [
    'aromaveil',
    {
      desc: 'This Pokémon and its allies cannot become affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.',
      name: 'Aroma Veil',
      shortDesc: 'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.'
    }
  ],
  [
    'asoneglastrier',
    {
      name: 'As One (Glastrier)',
      shortDesc: 'Combination of the Unnerve and Chilling Neigh Abilities.'
    }
  ],
  [
    'asonespectrier',
    {
      name: 'As One (Spectrier)',
      shortDesc: 'Combination of the Unnerve and Grim Neigh Abilities.'
    }
  ],
  [
    'aurabreak',
    {
      desc: 'While this Pokémon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.',
      name: 'Aura Break',
      shortDesc: 'While this Pokémon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.'
    }
  ],
  [
    'baddreams',
    {
      desc: 'Causes opposing Pokémon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.',
      name: 'Bad Dreams',
      shortDesc: 'Causes sleeping foes to lose 1/8 of their max HP at the end of each turn.'
    }
  ],
  [
    'ballfetch',
    {
      desc: 'At any time after the first Poké Ball is thrown and fails to catch a Pokémon, at the end of a turn, if a Pokémon with Ball Fetch is on the field and not holding another item, it will pick up the same type of ball as the first one thrown. This can only occur once in a battle.',
      name: 'Ball Fetch',
      shortDesc: 'No competitive use.'
    }
  ],
  [
    'battery',
    {
      name: 'Battery',
      shortDesc: "This Pokémon's allies have the power of their special attacks multiplied by 1.3."
    }
  ],
  [
    'battlearmor',
    {
      name: 'Battle Armor',
      shortDesc: 'This Pokémon cannot be struck by a critical hit.'
    }
  ],
  [
    'battlebond',
    {
      desc: 'If this Pokémon is a Greninja, its Attack, Special Attack, and Speed are raised by 1 stage if it attacks and knocks out another Pokémon. This effect can only happen once per battle.',
      name: 'Battle Bond',
      shortDesc: 'After KOing a Pokémon: raises Attack, Sp. Atk, Speed by 1 stage. Once per battle.'
    }
  ],
  [
    'beadsofruin',
    {
      name: 'Beads of Ruin',
      shortDesc: 'Active Pokémon without this Ability have their Special Defense multiplied by 0.75.'
    }
  ],
  [
    'beastboost',
    {
      desc: "This Pokémon's highest stat is raised by 1 stage if it attacks and knocks out another Pokémon. Stat stage changes are not considered. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order.",
      name: 'Beast Boost',
      shortDesc: "This Pokémon's highest stat is raised by 1 if it attacks and KOes another Pokémon."
    }
  ],
  [
    'berserk',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.',
      name: 'Berserk',
      shortDesc: "This Pokémon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP."
    }
  ],
  [
    'bigpecks',
    {
      name: 'Big Pecks',
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's Defense stat stage."
    }
  ],
  [
    'blaze',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.',
      name: 'Blaze',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's offensive stat is 1.5x with Fire attacks."
    }
  ],
  [
    'bulletproof',
    {
      desc: 'This Pokémon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.',
      name: 'Bulletproof',
      shortDesc: 'This Pokémon is immune to bullet moves.'
    }
  ],
  [
    'cheekpouch',
    {
      desc: "If this Pokémon eats a held Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect. This effect can also activate after the effects of Bug Bite, Fling, Pluck, Stuff Cheeks, and Teatime if the eaten Berry had an effect on this Pokémon.",
      name: 'Cheek Pouch',
      shortDesc: "If this Pokémon eats a Berry, it restores 1/3 of its max HP after the Berry's effect."
    }
  ],
  [
    'chillingneigh',
    {
      desc: "This Pokémon's Attack is raised by 1 stage if it attacks and knocks out another Pokémon.",
      name: 'Chilling Neigh',
      shortDesc: "This Pokémon's Attack is raised by 1 stage if it attacks and KOes another Pokémon."
    }
  ],
  [
    'chlorophyll',
    {
      desc: "If Sunny Day is active, this Pokémon's Speed is doubled. This effect is prevented if this Pokémon is holding a Utility Umbrella.",
      name: 'Chlorophyll',
      shortDesc: "If Sunny Day is active, this Pokémon's Speed is doubled."
    }
  ],
  [
    'clearbody',
    {
      name: 'Clear Body',
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages."
    }
  ],
  [
    'cloudnine',
    {
      name: 'Cloud Nine',
      shortDesc: 'While this Pokémon is active, the effects of weather conditions are disabled.'
    }
  ],
  [
    'colorchange',
    {
      desc: "This Pokémon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
      name: 'Color Change',
      shortDesc: "This Pokémon's type changes to the type of a move it's hit by, unless it has the type."
    }
  ],
  [
    'comatose',
    {
      desc: 'This Pokémon is considered to be asleep and cannot become affected by a non-volatile status condition or Yawn.',
      name: 'Comatose',
      shortDesc: 'This Pokémon cannot be statused, and is considered to be asleep.'
    }
  ],
  [
    'commander',
    {
      desc: "If this Pokémon is a Tatsugiri and a Dondozo is an active ally, this Pokémon goes into the Dondozo's mouth. The Dondozo has its Attack, Special Attack, Speed, Defense, and Special Defense raised by 2 stages. During the effect, the Dondozo cannot be switched out, this Pokémon cannot select an action, and attacks targeted at this Pokémon will be avoided but it will still take indirect damage. If this Pokémon faints during the effect, a Pokémon can be switched in as a replacement but the Dondozo remains unable to be switched out. If the Dondozo faints during the effect, this Pokémon regains the ability to select an action.",
      name: 'Commander',
      shortDesc: "If ally is Dondozo: this Pokémon cannot act or be hit, +2 to all Dondozo's stats."
    }
  ],
  [
    'competitive',
    {
      desc: "This Pokémon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokémon.",
      name: 'Competitive',
      shortDesc: "This Pokémon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe."
    }
  ],
  [
    'compoundeyes',
    {
      isFieldAbility:
        'Having a Pokémon with Compound Eyes at the front of your party increases the chances of finding a wild Pokémon holding an item increase from 50%/5% to 60%/20%. In dark grass in Generation 5, the chances increase from 50%/5%/1% to 60%/20%/5%.',
      name: 'Compound Eyes',
      shortDesc: "This Pokémon's moves have their accuracy multiplied by 1.3."
    }
  ],
  [
    'contrary',
    {
      desc: 'If this Pokémon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.',
      name: 'Contrary',
      shortDesc: 'If this Pokémon has a stat stage raised it is lowered instead, and vice versa.'
    }
  ],
  [
    'corrosion',
    {
      name: 'Corrosion',
      shortDesc: 'This Pokémon can poison or badly poison a Pokémon regardless of its typing.'
    }
  ],
  [
    'costar',
    {
      name: 'Costar',
      shortDesc: "On switch-in, this Pokémon copies all of its ally's stat stage changes."
    }
  ],
  [
    'cottondown',
    {
      desc: 'When this Pokémon is hit by an attack, the Speed of all other Pokémon on the field is lowered by 1 stage.',
      name: 'Cotton Down',
      shortDesc: 'If this Pokémon is hit, it lowers the Speed of all other Pokémon on the field 1 stage.'
    }
  ],
  [
    'cudchew',
    {
      desc: 'When this Pokémon consumes a berry, it will consume the berry again at the end of the following turn.',
      name: 'Cud Chew',
      shortDesc: 'If this Pokémon eats a Berry, it will eat that Berry again at the end of the next turn.'
    }
  ],
  [
    'curiousmedicine',
    {
      name: 'Curious Medicine',
      shortDesc: "On switch-in, this Pokémon's allies have their stat stages reset to 0."
    }
  ],
  [
    'cursedbody',
    {
      desc: "If this Pokémon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
      name: 'Cursed Body',
      shortDesc: 'If this Pokémon is hit by an attack, there is a 30% chance that move gets disabled.'
    }
  ],
  [
    'cutecharm',
    {
      desc: 'There is a 30% chance a Pokémon making contact with this Pokémon will become infatuated if it is of the opposite gender.',
      isFieldAbility:
        'If a Pokémon with Cute Charm is at the front of the party (even if fainted), there is a 66.7% chance that a Pokémon of the opposite gender to the Pokémon with Cute Charm will be encountered. This does not affect swarming Pokémon species (except in Generation 4) or Pokémon found in Hidden Grottos.',
      name: 'Cute Charm',
      shortDesc: '30% chance of infatuating Pokémon of the opposite gender if they make contact.'
    }
  ],
  [
    'damp',
    {
      desc: 'While this Pokémon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.',
      name: 'Damp',
      shortDesc: 'Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.'
    }
  ],
  [
    'dancer',
    {
      desc: 'After another Pokémon uses a dance move, this Pokémon uses the same move. The copied move is subject to all effects that can prevent a move from being executed. A move used through this Ability cannot be copied again by other Pokémon with this Ability.',
      name: 'Dancer',
      shortDesc: 'After another Pokémon uses a dance move, this Pokémon uses the same move.'
    }
  ],
  [
    'darkaura',
    {
      desc: 'While this Pokémon is active, the power of Dark-type moves used by active Pokémon is multiplied by 1.33.',
      name: 'Dark Aura',
      shortDesc: 'While this Pokémon is active, a Dark move used by any Pokémon has 1.33x power.'
    }
  ],
  [
    'dauntlessshield',
    {
      name: 'Dauntless Shield',
      shortDesc: "On switch-in, this Pokémon's Defense is raised by 1 stage. Once per battle."
    }
  ],
  [
    'dazzling',
    {
      desc: 'Priority moves used by opposing Pokémon targeting this Pokémon or its allies are prevented from having an effect.',
      name: 'Dazzling',
      shortDesc: 'This Pokémon and its allies are protected from opposing priority moves.'
    }
  ],
  [
    'defeatist',
    {
      desc: 'While this Pokémon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.',
      name: 'Defeatist',
      shortDesc: 'While this Pokémon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.'
    }
  ],
  [
    'defiant',
    {
      desc: "This Pokémon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokémon.",
      name: 'Defiant',
      shortDesc: "This Pokémon's Attack is raised by 2 for each of its stats that is lowered by a foe."
    }
  ],
  [
    'deltastream',
    {
      desc: 'On switch-in, the weather becomes Delta Stream, which removes the weaknesses of the Flying type from Flying-type Pokémon. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by the Desolate Land or Primordial Sea Abilities.',
      name: 'Delta Stream',
      shortDesc: 'On switch-in, strong winds begin until this Ability is not active in battle.'
    }
  ],
  [
    'desolateland',
    {
      desc: 'On switch-in, the weather becomes Desolate Land, which includes all the effects of Sunny Day and prevents damaging Water-type moves from executing. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by the Delta Stream or Primordial Sea Abilities.',
      name: 'Desolate Land',
      shortDesc: 'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.'
    }
  ],
  [
    'disguise',
    {
      desc: 'If this Pokémon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.',
      name: 'Disguise',
      shortDesc: '(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.'
    }
  ],
  [
    'download',
    {
      desc: "On switch-in, this Pokémon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokémon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
      name: 'Download',
      shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense."
    }
  ],
  [
    'dragonsmaw',
    {
      name: "Dragon's Maw",
      shortDesc: "This Pokémon's offensive stat is multiplied by 1.5 while using a Dragon-type attack."
    }
  ],
  [
    'drizzle',
    {
      name: 'Drizzle',
      shortDesc: 'On switch-in, this Pokémon summons Rain Dance.'
    }
  ],
  [
    'drought',
    {
      name: 'Drought',
      shortDesc: 'On switch-in, this Pokémon summons Sunny Day.'
    }
  ],
  [
    'dryskin',
    {
      desc: 'This Pokémon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokémon. At the end of each turn, this Pokémon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. The weather effects are prevented if this Pokémon is holding a Utility Umbrella.',
      name: 'Dry Skin',
      shortDesc: 'This Pokémon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.'
    }
  ],
  [
    'earlybird',
    {
      name: 'Early Bird',
      shortDesc: "This Pokémon's sleep counter drops by 2 instead of 1."
    }
  ],
  [
    'eartheater',
    {
      desc: 'This Pokémon is immune to Ground-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Ground-type move.',
      name: 'Earth Eater',
      shortDesc: 'This Pokémon heals 1/4 of its max HP when hit by Ground moves; Ground immunity.'
    }
  ],
  [
    'effectspore',
    {
      desc: '30% chance a Pokémon making contact with this Pokémon will be poisoned, paralyzed, or fall asleep.',
      name: 'Effect Spore',
      shortDesc: '30% chance of poison/paralysis/sleep on others making contact with this Pokémon.'
    }
  ],
  [
    'electricsurge',
    {
      name: 'Electric Surge',
      shortDesc: 'On switch-in, this Pokémon summons Electric Terrain.'
    }
  ],
  [
    'electromorphosis',
    {
      desc: "This Pokémon's next Electric-type attack will have its power doubled if it takes direct damage.",
      name: 'Electromorphosis',
      shortDesc: 'This Pokémon gains the Charge effect when it takes a hit from an attack.'
    }
  ],
  [
    'embodyaspectcornerstone',
    {
      name: 'Embody Aspect (Cornerstone)',
      shortDesc: "On switch-in, this Pokémon's Defense is raised by 1 stage."
    }
  ],
  [
    'embodyaspecthearthflame',
    {
      name: 'Embody Aspect (Hearthflame)',
      shortDesc: "On switch-in, this Pokémon's Attack is raised by 1 stage."
    }
  ],
  [
    'embodyaspectteal',
    {
      name: 'Embody Aspect (Teal)',
      shortDesc: "On switch-in, this Pokémon's Speed is raised by 1 stage."
    }
  ],
  [
    'embodyaspectwellspring',
    {
      name: 'Embody Aspect (Wellspring)',
      shortDesc: "On switch-in, this Pokémon's Special Defense is raised by 1 stage."
    }
  ],
  [
    'emergencyexit',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
      name: 'Emergency Exit',
      shortDesc: 'This Pokémon switches out when it reaches 1/2 or less of its maximum HP.'
    }
  ],
  [
    'fairyaura',
    {
      desc: 'While this Pokémon is active, the power of Fairy-type moves used by active Pokémon is multiplied by 1.33.',
      name: 'Fairy Aura',
      shortDesc: 'While this Pokémon is active, a Fairy move used by any Pokémon has 1.33x power.'
    }
  ],
  [
    'filter',
    {
      name: 'Filter',
      shortDesc: 'This Pokémon receives 3/4 damage from supereffective attacks.'
    }
  ],
  [
    'flamebody',
    {
      isFieldAbility: 'Having a Pokémon with Flame Body in your party will halve the number of cycles it takes for all eggs in the party to hatch.',
      name: 'Flame Body',
      shortDesc: '30% chance a Pokémon making contact with this Pokémon will be burned.'
    }
  ],
  [
    'flareboost',
    {
      desc: 'While this Pokémon is burned, the power of its special attacks is multiplied by 1.5.',
      name: 'Flare Boost',
      shortDesc: 'While this Pokémon is burned, its special attacks have 1.5x power.'
    }
  ],
  [
    'flashfire',
    {
      desc: 'This Pokémon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its offensive stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokémon is frozen, it cannot be defrosted by Fire-type attacks.',
      isFieldAbility:
        'In Pokémon Sword and Shield, If you have a Pokémon with Flash Fire at the front of your party (even if fainted), there is a 50% chance an encounter with a Fire-type Pokémon will be forced, if possible.',
      name: 'Flash Fire',
      shortDesc: "This Pokémon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity."
    }
  ],
  [
    'flowergift',
    {
      desc: 'If this Pokémon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. These effects are prevented if the Pokémon is holding a Utility Umbrella.',
      name: 'Flower Gift',
      shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x."
    }
  ],
  [
    'flowerveil',
    {
      desc: "Grass-type Pokémon on this Pokémon's side cannot have their stat stages lowered by other Pokémon or have a non-volatile status condition inflicted on them by other Pokémon.",
      name: 'Flower Veil',
      shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokémon."
    }
  ],
  [
    'fluffy',
    {
      desc: 'This Pokémon receives 1/2 damage from contact moves, but double damage from Fire moves.',
      name: 'Fluffy',
      shortDesc: 'This Pokémon takes 1/2 damage from contact moves, 2x damage from Fire moves.'
    }
  ],
  [
    'forecast',
    {
      desc: "If this Pokémon is a Castform, its type changes to the current weather condition's type, except Sandstorm. This effect is prevented if this Pokémon is holding a Utility Umbrella and the weather is Rain Dance or Sunny Day.",
      name: 'Forecast',
      shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm."
    }
  ],
  [
    'forewarn',
    {
      desc: 'On switch-in, this Pokémon is alerted to the move with the highest power, at random, known by an opposing Pokémon. This effect considers OHKO moves to have 150 power, Counter, Mirror Coat, and Metal Burst to have 120 power, every other attacking move with an unspecified power to have 80 power, and non-damaging moves to have 1 power.',
      name: 'Forewarn',
      shortDesc: "On switch-in, this Pokémon is alerted to the foes' move with the highest power."
    }
  ],
  [
    'friendguard',
    {
      name: 'Friend Guard',
      shortDesc: "This Pokémon's allies receive 3/4 damage from other Pokémon's attacks."
    }
  ],
  [
    'frisk',
    {
      name: 'Frisk',
      shortDesc: 'On switch-in, this Pokémon identifies the held items of all opposing Pokémon.'
    }
  ],
  [
    'fullmetalbody',
    {
      desc: "Prevents other Pokémon from lowering this Pokémon's stat stages. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
      name: 'Full Metal Body',
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages."
    }
  ],
  [
    'furcoat',
    {
      name: 'Fur Coat',
      shortDesc: "This Pokémon's Defense is doubled."
    }
  ],
  [
    'galewings',
    {
      name: 'Gale Wings',
      shortDesc: 'If this Pokémon is at full HP, its Flying-type moves have their priority increased by 1.'
    }
  ],
  [
    'galvanize',
    {
      desc: "This Pokémon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: 'Galvanize',
      shortDesc: "This Pokémon's Normal-type moves become Electric type and have 1.2x power."
    }
  ],
  [
    'gluttony',
    {
      desc: 'When this Pokémon is holding a Berry that usually activates with 1/4 or less of its maximum HP, it is eaten at 1/2 or less of its maximum HP instead.',
      name: 'Gluttony',
      shortDesc: 'This Pokémon eats Berries at 1/2 max HP or less instead of their usual 1/4 max HP.'
    }
  ],
  [
    'goodasgold',
    {
      name: 'Good as Gold',
      shortDesc: 'This Pokémon is immune to Status moves.'
    }
  ],
  [
    'gooey',
    {
      name: 'Gooey',
      shortDesc: 'Pokémon making contact with this Pokémon have their Speed lowered by 1 stage.'
    }
  ],
  [
    'gorillatactics',
    {
      desc: "This Pokémon's Attack is multiplied by 1.5, but it can only select the first move it executes. These effects are prevented while this Pokémon is Dynamaxed.",
      name: 'Gorilla Tactics',
      shortDesc: "This Pokémon's Attack is 1.5x, but it can only select the first move it executes."
    }
  ],
  [
    'grasspelt',
    {
      name: 'Grass Pelt',
      shortDesc: "If Grassy Terrain is active, this Pokémon's Defense is multiplied by 1.5."
    }
  ],
  [
    'grassysurge',
    {
      name: 'Grassy Surge',
      shortDesc: 'On switch-in, this Pokémon summons Grassy Terrain.'
    }
  ],
  [
    'grimneigh',
    {
      desc: "This Pokémon's Special Attack is raised by 1 stage if it attacks and knocks out another Pokémon.",
      name: 'Grim Neigh',
      shortDesc: "This Pokémon's Sp. Atk is raised by 1 stage if it attacks and KOes another Pokémon."
    }
  ],
  [
    'guarddog',
    {
      desc: "This Pokémon is immune to the effect of the Intimidate Ability and raises its Attack by 1 stage instead. This Pokémon cannot be forced to switch out by another Pokémon's attack or item.",
      name: 'Guard Dog',
      shortDesc: 'Immune to Intimidate. Intimidated: +1 Attack. Cannot be forced to switch out.'
    }
  ],
  [
    'gulpmissile',
    {
      desc: "If this Pokémon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes.",
      name: 'Gulp Missile',
      shortDesc: 'When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis.'
    }
  ],
  [
    'guts',
    {
      desc: "If this Pokémon has a non-volatile status condition, its Attack is multiplied by 1.5. This Pokémon's physical attacks ignore the burn effect of halving damage.",
      name: 'Guts',
      shortDesc: 'If this Pokémon is statused, its Attack is 1.5x; ignores burn halving physical damage.'
    }
  ],
  [
    'hadronengine',
    {
      name: 'Hadron Engine',
      shortDesc: 'On switch-in, summons Electric Terrain. During Electric Terrain, Sp. Atk is 1.3333x.'
    }
  ],
  [
    'harvest',
    {
      desc: 'If the last item this Pokémon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.',
      isFieldAbility:
        'In Pokémon Sword and Shield, If you have a Pokémon with Harvest at the front of your party (even if fainted), there is a 50% chance an encounter with a Grass-type Pokémon will be forced, if possible.',
      name: 'Harvest',
      shortDesc: 'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.'
    }
  ],
  [
    'healer',
    {
      desc: "30% chance this Pokémon's ally has its non-volatile status condition cured at the end of each turn.",
      name: 'Healer',
      shortDesc: "30% chance this Pokémon's ally has its status cured at the end of each turn."
    }
  ],
  [
    'heatproof',
    {
      desc: "If a Pokémon uses a Fire-type attack against this Pokémon, that Pokémon's offensive stat is halved when calculating the damage to this Pokémon. This Pokémon takes half of the usual burn damage, rounded down.",
      name: 'Heatproof',
      shortDesc: 'Fire damage against this Pokémon is dealt with 1/2 offensive stat; 1/2 burn damage.'
    }
  ],
  [
    'heavymetal',
    {
      desc: "This Pokémon's weight is doubled. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone.",
      name: 'Heavy Metal',
      shortDesc: "This Pokémon's weight is doubled."
    }
  ],
  [
    'honeygather',
    {
      isFieldAbility:
        'A Pokémon with Honey Gather may collect Honey after a battle if it is not already holding an item. The chance for a Pokémon with Honey Gather to pick up Honey depends on its level, starting at 5% if the Pokémon is between levels 1 and 10, and going up by 5% every ten levels, ending at a 50% chance from levels 91-100.',
      name: 'Honey Gather',
      shortDesc: 'No competitive use.'
    }
  ],
  [
    'hospitality',
    {
      name: 'Hospitality',
      shortDesc: "On switch-in, this Pokémon restores 1/4 of its ally's maximum HP, rounded down."
    }
  ],
  [
    'hugepower',
    {
      name: 'Huge Power',
      shortDesc: "This Pokémon's Attack is doubled."
    }
  ],
  [
    'hungerswitch',
    {
      desc: 'If this Pokémon is a Morpeko, it changes formes between its Full Belly Mode and Hangry Mode at the end of each turn.',
      name: 'Hunger Switch',
      shortDesc: 'If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn.'
    }
  ],
  [
    'hustle',
    {
      desc: "This Pokémon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
      isFieldAbility:
        'If you have a Pokémon with Hustle at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range.',
      name: 'Hustle',
      shortDesc: "This Pokémon's Attack is 1.5x and accuracy of its physical attacks is 0.8x."
    }
  ],
  [
    'hydration',
    {
      desc: 'This Pokémon has its non-volatile status condition cured at the end of each turn if Rain Dance is active. This effect is prevented if this Pokémon is holding a Utility Umbrella.',
      name: 'Hydration',
      shortDesc: 'This Pokémon has its status cured at the end of each turn if Rain Dance is active.'
    }
  ],
  [
    'hypercutter',
    {
      isFieldAbility:
        "In Pokémon Emerald only, if a Pokémon with Hyper Cutter uses cut in the overworld, it will remove all tall grass within a two-square radius of the player's position, as opposed to a one-square radius without this Ability.",
      name: 'Hyper Cutter',
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's Attack stat stage."
    }
  ],
  [
    'icebody',
    {
      desc: 'If Snow is active, this Pokémon restores 1/16 of its maximum HP, rounded down, at the end of each turn.',
      name: 'Ice Body',
      shortDesc: 'If Snow is active, this Pokémon heals 1/16 of its max HP each turn.'
    }
  ],
  [
    'iceface',
    {
      desc: 'If this Pokémon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Snow begins or when Eiscue switches in while Snow is active. Confusion damage also breaks the ice face.',
      name: 'Ice Face',
      shortDesc: 'If Eiscue, the first physical hit it takes deals 0 damage. Effect is restored in Snow.'
    }
  ],
  [
    'icescales',
    {
      desc: 'The Pokémon is protected by ice scales, which halve the damage taken from special moves.',
      name: 'Ice Scales',
      shortDesc: 'This Pokémon receives 1/2 damage from special attacks.'
    }
  ],
  [
    'illuminate',
    {
      desc: "Prevents other Pokémon from lowering this Pokémon's accuracy stat stage. This Pokémon ignores a target's evasiveness stat stage.",
      isFieldAbility:
        'If a Pokémon with Illuminate is at the front of the the party (even if fainted), the wild Pokémon encounter rate of all Pokémon is doubled.',
      name: 'Illuminate',
      shortDesc: "This Pokémon's accuracy can't be lowered by others; ignores their evasiveness stat."
    }
  ],
  [
    'illusion',
    {
      desc: "When this Pokémon switches in, it appears as the last unfainted Pokémon in its party until it takes direct damage from another Pokémon's attack. This Pokémon's actual level and HP are displayed instead of those of the mimicked Pokémon.",
      name: 'Illusion',
      shortDesc: 'This Pokémon appears as the last Pokémon in the party until it takes direct damage.'
    }
  ],
  [
    'immunity',
    {
      name: 'Immunity',
      shortDesc: 'This Pokémon cannot be poisoned. Gaining this Ability while poisoned cures it.'
    }
  ],
  [
    'imposter',
    {
      desc: 'On switch-in, this Pokémon Transforms into the opposing Pokémon that is facing it. If there is no Pokémon at that position, this Pokémon does not Transform.',
      name: 'Imposter',
      shortDesc: 'On switch-in, this Pokémon Transforms into the opposing Pokémon that is facing it.'
    }
  ],
  [
    'infiltrator',
    {
      desc: "This Pokémon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist, and Aurora Veil.",
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with Infiltrator is placed at the front of the party, wild Pokémon are less likely to appear.',
      name: 'Infiltrator',
      shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil."
    }
  ],
  [
    'innardsout',
    {
      desc: "If this Pokémon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokémon.",
      name: 'Innards Out',
      shortDesc: "If this Pokémon is KOed with a move, that move's user loses an equal amount of HP."
    }
  ],
  [
    'innerfocus',
    {
      desc: 'This Pokémon cannot be made to flinch. This Pokémon is immune to the effect of the Intimidate Ability.',
      name: 'Inner Focus',
      shortDesc: 'This Pokémon cannot be made to flinch. Immune to Intimidate.'
    }
  ],
  [
    'insomnia',
    {
      name: 'Insomnia',
      shortDesc: 'This Pokémon cannot fall asleep. Gaining this Ability while asleep cures it.'
    }
  ],
  [
    'intimidate',
    {
      desc: 'On switch-in, this Pokémon lowers the Attack of opposing Pokémon by 1 stage. Pokémon with the Inner Focus, Oblivious, Own Tempo, or Scrappy Abilities and Pokémon behind a substitute are immune.',
      isFieldAbility:
        'If a Pokémon with Intimidate is at the front of your party (even if fainted), there is a 50% chance it will prevent a random wild encounter that would have occurred if the wild Pokémon would be at least 5 levels lower than the Pokémon with Intimidate.',
      name: 'Intimidate',
      shortDesc: 'On switch-in, this Pokémon lowers the Attack of opponents by 1 stage.'
    }
  ],
  [
    'intrepidsword',
    {
      name: 'Intrepid Sword',
      shortDesc: "On switch-in, this Pokémon's Attack is raised by 1 stage. Once per battle."
    }
  ],
  [
    'ironbarbs',
    {
      desc: 'Pokémon making contact with this Pokémon lose 1/8 of their maximum HP, rounded down.',
      name: 'Iron Barbs',
      shortDesc: 'Pokémon making contact with this Pokémon lose 1/8 of their max HP.'
    }
  ],
  [
    'ironfist',
    {
      desc: "This Pokémon's punch-based attacks have their power multiplied by 1.2.",
      name: 'Iron Fist',
      shortDesc: "This Pokémon's punch-based attacks have 1.2x power. Sucker Punch is not boosted."
    }
  ],
  [
    'justified',
    {
      name: 'Justified',
      shortDesc: "This Pokémon's Attack is raised by 1 stage after it is damaged by a Dark-type move."
    }
  ],
  [
    'keeneye',
    {
      desc: "Prevents other Pokémon from lowering this Pokémon's accuracy stat stage. This Pokémon ignores a target's evasiveness stat stage.",
      isFieldAbility:
        'If a Pokémon with Keen Eye is at the front of your party (even if fainted), there is a 50% chance it will prevent a random wild encounter that would have occurred if the wild Pokémon would be at least 5 levels lower than the Pokémon with Keen Eye.',
      name: 'Keen Eye',
      shortDesc: "This Pokémon's accuracy can't be lowered by others; ignores their evasiveness stat."
    }
  ],
  [
    'klutz',
    {
      desc: "This Pokémon's held item has no effect. This Pokémon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
      name: 'Klutz',
      shortDesc: "This Pokémon's held item has no effect, except Macho Brace. Fling cannot be used."
    }
  ],
  [
    'leafguard',
    {
      desc: 'If Sunny Day is active, this Pokémon cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it. This effect is prevented if this Pokémon is holding a Utility Umbrella.',
      name: 'Leaf Guard',
      shortDesc: 'If Sunny Day is active, this Pokémon cannot be statused and Rest will fail for it.'
    }
  ],
  [
    'levitate',
    {
      desc: 'This Pokémon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity. Thousand Arrows can hit this Pokémon as if it did not have this Ability.',
      name: 'Levitate',
      shortDesc: 'This Pokémon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.'
    }
  ],
  [
    'libero',
    {
      desc: "This Pokémon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type. This effect can only happen once per switch-in, and only if this Pokémon is not Terastallized.",
      name: 'Libero',
      shortDesc: "This Pokémon's type changes to the type of the move it is using. Once per switch-in."
    }
  ],
  [
    'lightmetal',
    {
      desc: "This Pokémon's weight is halved, rounded down to a tenth of a kilogram. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone. A Pokémon's weight will not drop below 0.1 kg.",
      name: 'Light Metal',
      shortDesc: "This Pokémon's weight is halved."
    }
  ],
  [
    'lightningrod',
    {
      desc: 'This Pokémon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokémon is not the target of a single-target Electric-type move used by another Pokémon, this Pokémon redirects that move to itself if it is within the range of that move. If multiple Pokémon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.',
      isFieldAbility:
        "In Pokémon Emerald, Trainers registered with the PokéNav's Match Call function will call twice as often if a Pokémon with Lightning Rod is in the first place in the party (even if fainted).\n" +
        'In Pokémon Sword and Shield, if a Pokémon with Lightning Rod is in the first place in the party, there is a 50% chance the game will force an encounter with an Electric-type Pokémon, if one is possible.',
      name: 'Lightning Rod',
      shortDesc: 'This Pokémon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.'
    }
  ],
  [
    'limber',
    {
      name: 'Limber',
      shortDesc: 'This Pokémon cannot be paralyzed. Gaining this Ability while paralyzed cures it.'
    }
  ],
  [
    'lingeringaroma',
    {
      desc: 'Pokémon making contact with this Pokémon have their Ability changed to Lingering Aroma. Does not affect Pokémon with the As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Lingering Aroma, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or Zero to Hero Abilities.',
      name: 'Lingering Aroma',
      shortDesc: "Making contact with this Pokémon has the attacker's Ability become Lingering Aroma."
    }
  ],
  [
    'liquidooze',
    {
      name: 'Liquid Ooze',
      shortDesc: 'This Pokémon damages those draining HP from it for as much as they would heal.'
    }
  ],
  [
    'liquidvoice',
    {
      desc: "This Pokémon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: 'Liquid Voice',
      shortDesc: "This Pokémon's sound-based moves become Water type."
    }
  ],
  [
    'longreach',
    {
      name: 'Long Reach',
      shortDesc: "This Pokémon's attacks do not make contact with the target."
    }
  ],
  [
    'magicbounce',
    {
      desc: "This Pokémon is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or Magic Coat's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokémon under this or Magic Coat's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this Ability takes effect.",
      name: 'Magic Bounce',
      shortDesc: 'This Pokémon blocks certain Status moves and bounces them back to the user.'
    }
  ],
  [
    'magicguard',
    {
      desc: 'This Pokémon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.',
      name: 'Magic Guard',
      shortDesc: 'This Pokémon can only be damaged by direct attacks.'
    }
  ],
  [
    'magician',
    {
      desc: 'If this Pokémon has no item, it steals the item off a Pokémon it hits with an attack. Does not affect Doom Desire and Future Sight.',
      name: 'Magician',
      shortDesc: 'If this Pokémon has no item, it steals the item off a Pokémon it hits with an attack.'
    }
  ],
  [
    'magmaarmor',
    {
      isFieldAbility: 'Having a Pokémon with Magma Armor in your party will halve the number of cycles it takes for all eggs in the party to hatch.',
      name: 'Magma Armor',
      shortDesc: 'This Pokémon cannot be frozen. Gaining this Ability while frozen cures it.'
    }
  ],
  [
    'magnetpull',
    {
      desc: 'Prevents opposing Steel-type Pokémon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.',
      name: 'Magnet Pull',
      shortDesc: 'Prevents opposing Steel-type Pokémon from choosing to switch out.'
    }
  ],
  [
    'marvelscale',
    {
      desc: 'If this Pokémon has a non-volatile status condition, its Defense is multiplied by 1.5.',
      name: 'Marvel Scale',
      shortDesc: 'If this Pokémon has a non-volatile status condition, its Defense is multiplied by 1.5.'
    }
  ],
  [
    'megalauncher',
    {
      desc: "This Pokémon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
      name: 'Mega Launcher',
      shortDesc: "This Pokémon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP."
    }
  ],
  [
    'merciless',
    {
      name: 'Merciless',
      shortDesc: "This Pokémon's attacks are critical hits if the target is poisoned."
    }
  ],
  [
    'mimicry',
    {
      desc: "This Pokémon's types change to match the active Terrain when this Pokémon acquires this Ability, or whenever a Terrain begins. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain. If this Ability is acquired without an active Terrain, or a Terrain ends, this Pokémon's types become the original types for its species.",
      name: 'Mimicry',
      shortDesc: "This Pokémon's types change to match the Terrain. Type reverts when Terrain ends."
    }
  ],
  [
    'mindseye',
    {
      desc: "This Pokémon can hit Ghost types with Normal- and Fighting-type moves. Prevents other Pokémon from lowering this Pokémon's accuracy stat stage. This Pokémon ignores a target's evasiveness stat stage.",
      name: "Mind's Eye",
      shortDesc: "Fighting, Normal moves hit Ghost. Accuracy can't be lowered, ignores evasiveness."
    }
  ],
  [
    'minus',
    {
      desc: "If an active ally has this Ability or the Plus Ability, this Pokémon's Special Attack is multiplied by 1.5.",
      name: 'Minus',
      shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokémon's Sp. Atk is 1.5x."
    }
  ],
  [
    'mirrorarmor',
    {
      desc: "When one of this Pokémon's stat stages would be lowered by another Pokémon, that Pokémon's stat stage is lowered instead. This effect does not happen if this Pokémon's stat stage was already -6. If the other Pokémon has a substitute, neither Pokémon has its stat stage lowered.",
      name: 'Mirror Armor',
      shortDesc: "If this Pokémon's stat stages would be lowered, the attacker's are lowered instead."
    }
  ],
  [
    'mistysurge',
    {
      name: 'Misty Surge',
      shortDesc: 'On switch-in, this Pokémon summons Misty Terrain.'
    }
  ],
  [
    'moldbreaker',
    {
      desc: "This Pokémon's moves and their effects ignore certain Abilities of other Pokémon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokémon on the field, whether or not it is a target of this Pokémon's move, and whether or not their Ability is beneficial to this Pokémon.",
      name: 'Mold Breaker',
      shortDesc: "This Pokémon's moves and their effects ignore the Abilities of other Pokémon."
    }
  ],
  [
    'moody',
    {
      desc: 'This Pokémon has a random stat, other than accuracy or evasiveness, raised by 2 stages and another stat lowered by 1 stage at the end of each turn.',
      name: 'Moody',
      shortDesc: 'Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn.'
    }
  ],
  [
    'motordrive',
    {
      desc: 'This Pokémon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.',
      name: 'Motor Drive',
      shortDesc: "This Pokémon's Speed is raised 1 stage if hit by an Electric move; Electric immunity."
    }
  ],
  [
    'mountaineer',
    {
      isNonstandard: IsNonStandard.Cap,
      name: 'Mountaineer',
      shortDesc: 'On switch-in, this Pokémon avoids all Rock-type attacks and Stealth Rock.'
    }
  ],
  [
    'moxie',
    {
      desc: "This Pokémon's Attack is raised by 1 stage if it attacks and knocks out another Pokémon.",
      name: 'Moxie',
      shortDesc: "This Pokémon's Attack is raised by 1 stage if it attacks and KOes another Pokémon."
    }
  ],
  [
    'multiscale',
    {
      name: 'Multiscale',
      shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.'
    }
  ],
  [
    'multitype',
    {
      name: 'Multitype',
      shortDesc: 'If this Pokémon is an Arceus, its type changes to match its held Plate.'
    }
  ],
  [
    'mummy',
    {
      desc: 'Pokémon making contact with this Pokémon have their Ability changed to Mummy. Does not affect Pokémon with the As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Mummy, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or Zero to Hero Abilities.',
      name: 'Mummy',
      shortDesc: 'Pokémon making contact with this Pokémon have their Ability changed to Mummy.'
    }
  ],
  [
    'myceliummight',
    {
      desc: "This Pokémon's Status moves ignore certain Abilities of other Pokémon, and go last among Pokémon using the same or greater priority moves.",
      name: 'Mycelium Might',
      shortDesc: "This Pokémon's Status moves go last in their priority bracket and ignore Abilities."
    }
  ],
  [
    'naturalcure',
    {
      name: 'Natural Cure',
      shortDesc: 'This Pokémon has its non-volatile status condition cured when it switches out.'
    }
  ],
  [
    'neuroforce',
    {
      desc: "This Pokémon's attacks that are super effective against the target have their damage multiplied by 1.25.",
      name: 'Neuroforce',
      shortDesc: "This Pokémon's attacks that are super effective against the target do 1.25x damage."
    }
  ],
  [
    'neutralizinggas',
    {
      desc: 'While this Pokémon is active, Abilities have no effect. This Ability activates before hazards and other Abilities take effect. Does not affect the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode or Zero to Hero Abilities.',
      name: 'Neutralizing Gas',
      shortDesc: 'While this Pokémon is active, Abilities have no effect.'
    }
  ],
  [
    'noability',
    {
      isNonstandard: IsNonStandard.Past,
      name: 'No Ability',
      shortDesc: 'Does nothing.'
    }
  ],
  [
    'noguard',
    {
      isFieldAbility:
        'If a Pokémon with No Guard is at the front of the the party (even if fainted), the wild Pokémon encounter rate of all Pokémon is doubled.',
      name: 'No Guard',
      shortDesc: 'Every move used by or against this Pokémon will always hit.'
    }
  ],
  [
    'normalize',
    {
      desc: "This Pokémon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
      name: 'Normalize',
      shortDesc: "This Pokémon's moves are changed to be Normal type and have 1.2x power."
    }
  ],
  [
    'oblivious',
    {
      desc: 'This Pokémon cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it. This Pokémon is immune to the effect of the Intimidate Ability.',
      name: 'Oblivious',
      shortDesc: 'This Pokémon cannot be infatuated or taunted. Immune to Intimidate.'
    }
  ],
  [
    'opportunist',
    {
      name: 'Opportunist',
      shortDesc: 'When an opposing Pokémon has a stat stage raised, this Pokémon copies the effect.'
    }
  ],
  [
    'orichalcumpulse',
    {
      name: 'Orichalcum Pulse',
      shortDesc: 'On switch-in, summons Sunny Day. During Sunny Day, Attack is 1.3333x.'
    }
  ],
  [
    'overcoat',
    {
      desc: 'This Pokémon is immune to powder moves, damage from Sandstorm, and the effects of Rage Powder and the Effect Spore Ability.',
      name: 'Overcoat',
      shortDesc: 'This Pokémon is immune to powder moves, Sandstorm damage, and Effect Spore.'
    }
  ],
  [
    'overgrow',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.',
      name: 'Overgrow',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's offensive stat is 1.5x with Grass attacks."
    }
  ],
  [
    'owntempo',
    {
      desc: 'This Pokémon cannot be confused. Gaining this Ability while confused cures it. This Pokémon is immune to the effect of the Intimidate Ability.',
      name: 'Own Tempo',
      shortDesc: 'This Pokémon cannot be confused. Immune to Intimidate.'
    }
  ],
  [
    'parentalbond',
    {
      desc: "This Pokémon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect Doom Desire, Dragon Darts, Dynamax Cannon, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, or any two-turn move.",
      name: 'Parental Bond',
      shortDesc: "This Pokémon's damaging moves hit twice. The second hit has its damage quartered."
    }
  ],
  [
    'pastelveil',
    {
      desc: 'This Pokémon and its allies cannot be poisoned. Gaining this Ability while this Pokémon or its ally is poisoned cures them. If this Ability is being ignored during an effect that causes poison, this Pokémon is cured immediately but its ally is not.',
      name: 'Pastel Veil',
      shortDesc: 'This Pokémon and its allies cannot be poisoned. On switch-in, cures poisoned allies.'
    }
  ],
  [
    'perishbody',
    {
      desc: 'Making contact with this Pokémon starts the Perish Song effect for it and the attacker. This effect does not happen for this Pokémon if the attacker already has a perish count.',
      name: 'Perish Body',
      shortDesc: 'Making contact with this Pokémon starts the Perish Song effect for it and the attacker.'
    }
  ],
  [
    'persistent',
    {
      desc: 'The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokémon.',
      isNonstandard: IsNonStandard.Cap,
      name: 'Persistent',
      shortDesc: 'When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.'
    }
  ],
  [
    'pickpocket',
    {
      desc: "If this Pokémon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
      name: 'Pickpocket',
      shortDesc: "If this Pokémon has no item and is hit by a contact move, it steals the attacker's item."
    }
  ],
  [
    'pickup',
    {
      isFieldAbility: 'After winning a battle, there is a 10% chance that a Pokémon with Pickup will create a held item for itself, even if fainted.',
      name: 'Pickup',
      shortDesc: 'If this Pokémon has no item, it finds one used by an adjacent Pokémon this turn.'
    }
  ],
  [
    'pixilate',
    {
      desc: "This Pokémon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: 'Pixilate',
      shortDesc: "This Pokémon's Normal-type moves become Fairy type and have 1.2x power."
    }
  ],
  [
    'plus',
    {
      desc: "If an active ally has this Ability or the Minus Ability, this Pokémon's Special Attack is multiplied by 1.5.",
      name: 'Plus',
      shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokémon's Sp. Atk is 1.5x."
    }
  ],
  [
    'poisonheal',
    {
      aliases: ['ph'],
      desc: 'If this Pokémon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.',
      name: 'Poison Heal',
      shortDesc: 'This Pokémon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.'
    }
  ],
  [
    'poisonpoint',
    {
      name: 'Poison Point',
      shortDesc: '30% chance a Pokémon making contact with this Pokémon will be poisoned.'
    }
  ],
  [
    'poisonpuppeteer',
    {
      name: 'Poison Puppeteer',
      shortDesc: 'If this Pokémon poisons or badly poisons a target, the target also becomes confused.'
    }
  ],
  [
    'poisontouch',
    {
      desc: "This Pokémon's contact moves have a 30% chance of poisoning. This effect comes after a move's inherent secondary effect chance.",
      name: 'Poison Touch',
      shortDesc: "This Pokémon's contact moves have a 30% chance of poisoning."
    }
  ],
  [
    'powerconstruct',
    {
      desc: 'If this Pokémon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.',
      name: 'Power Construct',
      shortDesc: 'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.'
    }
  ],
  [
    'powerofalchemy',
    {
      desc: 'This Pokémon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, Zen Mode, and Zero to Hero.',
      name: 'Power of Alchemy',
      shortDesc: 'This Pokémon copies the Ability of an ally that faints.'
    }
  ],
  [
    'powerspot',
    {
      desc: "This Pokémon's allies have the power of their moves multiplied by 1.3. This affects Doom Desire and Future Sight, even if the user is not on the field.",
      name: 'Power Spot',
      shortDesc: "This Pokémon's allies have the power of their moves multiplied by 1.3."
    }
  ],
  [
    'prankster',
    {
      desc: "This Pokémon's non-damaging moves have their priority increased by 1. Opposing Dark-type Pokémon are immune to these moves, and any move called by these moves, if the resulting user of the move has this Ability.",
      name: 'Prankster',
      shortDesc: "This Pokémon's Status moves have priority raised by 1, but Dark types are immune."
    }
  ],
  [
    'pressure',
    {
      desc: "If this Pokémon is the target of an opposing Pokémon's move, that move loses one additional PP. Imprison, Snatch, and Tera Blast also lose one additional PP when used by an opposing Pokémon, but Sticky Web does not.",
      isFieldAbility:
        'If you have a Pokémon with Pressure at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range.',
      name: 'Pressure',
      shortDesc: "If this Pokémon is the target of a foe's move, that move loses one additional PP."
    }
  ],
  [
    'primordialsea',
    {
      desc: 'On switch-in, the weather becomes Primordial Sea, which includes all the effects of Rain Dance and prevents damaging Fire-type moves from executing. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by the Delta Stream or Desolate Land Abilities.',
      name: 'Primordial Sea',
      shortDesc: 'On switch-in, heavy rain begins until this Ability is not active in battle.'
    }
  ],
  [
    'prismarmor',
    {
      desc: 'This Pokémon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
      name: 'Prism Armor',
      shortDesc: 'This Pokémon receives 3/4 damage from supereffective attacks.'
    }
  ],
  [
    'propellertail',
    {
      name: 'Propeller Tail',
      shortDesc: "This Pokémon's moves cannot be redirected to a different target by any effect."
    }
  ],
  [
    'protean',
    {
      desc: "This Pokémon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type. This effect can only happen once per switch-in, and only if this Pokémon is not Terastallized.",
      name: 'Protean',
      shortDesc: "This Pokémon's type changes to the type of the move it is using. Once per switch-in."
    }
  ],
  [
    'protosynthesis',
    {
      desc: "If Sunny Day is active or this Pokémon uses a held Booster Energy, this Pokémon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed. Stat stage changes are considered at the time this Ability activates. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order. If this effect was started by Sunny Day, a held Booster Energy will not activate and the effect ends when Sunny Day is no longer active. If this effect was started by a held Booster Energy, it ends when this Pokémon is no longer active.",
      name: 'Protosynthesis',
      shortDesc: 'Sunny Day active or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed.'
    }
  ],
  [
    'psychicsurge',
    {
      name: 'Psychic Surge',
      shortDesc: 'On switch-in, this Pokémon summons Psychic Terrain.'
    }
  ],
  [
    'punkrock',
    {
      desc: "This Pokémon's sound-based moves have their power multiplied by 1.3. This Pokémon takes halved damage from sound-based moves.",
      name: 'Punk Rock',
      shortDesc: 'This Pokémon receives 1/2 damage from sound moves. Its own have 1.3x power.'
    }
  ],
  [
    'purepower',
    {
      name: 'Pure Power',
      shortDesc: "This Pokémon's Attack is doubled."
    }
  ],
  [
    'purifyingsalt',
    {
      desc: "This Pokémon cannot become affected by a non-volatile status condition or Yawn. If a Pokémon uses a Ghost-type attack against this Pokémon, that Pokémon's offensive stat is halved when calculating the damage to this Pokémon.",
      name: 'Purifying Salt',
      shortDesc: "Ghost damage to this Pokémon dealt with a halved offensive stat; can't be statused."
    }
  ],
  [
    'quarkdrive',
    {
      desc: "If Electric Terrain is active or this Pokémon uses a held Booster Energy, this Pokémon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed. Stat stage changes are considered at the time this Ability activates. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order. If this effect was started by Electric Terrain, a held Booster Energy will not activate and the effect ends when Electric Terrain is no longer active. If this effect was started by a held Booster Energy, it ends when this Pokémon is no longer active.",
      name: 'Quark Drive',
      shortDesc: 'Electric Terrain active or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed.'
    }
  ],
  [
    'queenlymajesty',
    {
      desc: 'Priority moves used by opposing Pokémon targeting this Pokémon or its allies are prevented from having an effect.',
      name: 'Queenly Majesty',
      shortDesc: 'This Pokémon and its allies are protected from opposing priority moves.'
    }
  ],
  [
    'quickdraw',
    {
      name: 'Quick Draw',
      shortDesc: 'This Pokémon has a 30% chance to move first in its priority bracket with attacking moves.'
    }
  ],
  [
    'quickfeet',
    {
      desc: 'If this Pokémon has a non-volatile status condition, its Speed is multiplied by 1.5. This Pokémon ignores the paralysis effect of halving Speed.',
      isFieldAbility:
        'If a Pokémon with Quick Feet is in the first place in the party (even if fainted), the chance of encountering a wild Pokémon is decreased by 50%.',
      name: 'Quick Feet',
      shortDesc: 'If this Pokémon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.'
    }
  ],
  [
    'raindish',
    {
      desc: 'If Rain Dance is active, this Pokémon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This effect is prevented if this Pokémon is holding a Utility Umbrella.',
      name: 'Rain Dish',
      shortDesc: 'If Rain Dance is active, this Pokémon heals 1/16 of its max HP each turn.'
    }
  ],
  [
    'rattled',
    {
      desc: "This Pokémon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or if an opposing Pokémon affected this Pokémon with the Intimidate Ability.",
      name: 'Rattled',
      shortDesc: 'Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.'
    }
  ],
  [
    'rebound',
    {
      desc: 'On switch-in, this Pokémon blocks certain status moves and instead uses the move against the original user.',
      isNonstandard: IsNonStandard.Cap,
      name: 'Rebound',
      shortDesc: 'On switch-in, blocks certain status moves and bounces them back to the user.'
    }
  ],
  [
    'receiver',
    {
      desc: 'This Pokémon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, Zen Mode, and Zero to Hero.',
      name: 'Receiver',
      shortDesc: 'This Pokémon copies the Ability of an ally that faints.'
    }
  ],
  [
    'reckless',
    {
      desc: "This Pokémon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
      name: 'Reckless',
      shortDesc: "This Pokémon's attacks with recoil or crash damage have 1.2x power; not Struggle."
    }
  ],
  [
    'refrigerate',
    {
      desc: "This Pokémon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: 'Refrigerate',
      shortDesc: "This Pokémon's Normal-type moves become Ice type and have 1.2x power."
    }
  ],
  [
    'regenerator',
    {
      name: 'Regenerator',
      shortDesc: 'This Pokémon restores 1/3 of its maximum HP, rounded down, when it switches out.'
    }
  ],
  [
    'ripen',
    {
      desc: 'When this Pokémon eats certain Berries, the effects are doubled. Berries that restore HP or PP have the amount doubled, Berries that raise stat stages have the amount doubled, Berries that halve damage taken quarter it instead, and a Jaboca Berry or Rowap Berry has the attacker lose 1/4 of its maximum HP, rounded down.',
      name: 'Ripen',
      shortDesc: 'When this Pokémon eats certain Berries, the effects are doubled.'
    }
  ],
  [
    'rivalry',
    {
      desc: "This Pokémon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokémon or the target is genderless.",
      name: 'Rivalry',
      shortDesc: "This Pokémon's attacks do 1.25x on same gender targets; 0.75x on opposite gender."
    }
  ],
  [
    'rkssystem',
    {
      name: 'RKS System',
      shortDesc: 'If this Pokémon is a Silvally, its type changes to match its held Memory.'
    }
  ],
  [
    'rockhead',
    {
      desc: 'This Pokémon does not take recoil damage, except Struggle. Does not affect Life Orb damage or crash damage.',
      name: 'Rock Head',
      shortDesc: 'This Pokémon does not take recoil damage besides Struggle/Life Orb/crash damage.'
    }
  ],
  [
    'rockypayload',
    {
      name: 'Rocky Payload',
      shortDesc: "This Pokémon's offensive stat is multiplied by 1.5 while using a Rock-type attack."
    }
  ],
  [
    'roughskin',
    {
      desc: 'Pokémon making contact with this Pokémon lose 1/8 of their maximum HP, rounded down.',
      name: 'Rough Skin',
      shortDesc: 'Pokémon making contact with this Pokémon lose 1/8 of their max HP.'
    }
  ],
  ['runaway', { name: 'Run Away', shortDesc: 'No competitive use.' }],
  [
    'sandforce',
    {
      desc: "If Sandstorm is active, this Pokémon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokémon takes no damage from Sandstorm.",
      name: 'Sand Force',
      shortDesc: "This Pokémon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it."
    }
  ],
  [
    'sandrush',
    {
      desc: "If Sandstorm is active, this Pokémon's Speed is doubled. This Pokémon takes no damage from Sandstorm.",
      name: 'Sand Rush',
      shortDesc: "If Sandstorm is active, this Pokémon's Speed is doubled; immunity to Sandstorm."
    }
  ],
  [
    'sandspit',
    {
      desc: 'When this Pokémon is hit by an attack, the effect of Sandstorm begins. This effect comes after the effects of Max and G-Max Moves.',
      name: 'Sand Spit',
      shortDesc: 'When this Pokémon is hit by an attack, the effect of Sandstorm begins.'
    }
  ],
  [
    'sandstream',
    {
      name: 'Sand Stream',
      shortDesc: 'On switch-in, this Pokémon summons Sandstorm.'
    }
  ],
  [
    'sandveil',
    {
      desc: 'If Sandstorm is active, the accuracy of moves used against this Pokémon is multiplied by 0.8. This Pokémon takes no damage from Sandstorm.',
      isFieldAbility:
        'If a Pokémon with Sand Veil is in the first place in the party (even if fainted) in an area with a sandstorm, the chance of encountering a wild Pokémon is decreased by 50%.',
      name: 'Sand Veil',
      shortDesc: "If Sandstorm is active, this Pokémon's evasiveness is 1.25x; immunity to Sandstorm."
    }
  ],
  [
    'sapsipper',
    {
      desc: 'This Pokémon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.',
      name: 'Sap Sipper',
      shortDesc: "This Pokémon's Attack is raised 1 stage if hit by a Grass move; Grass immunity."
    }
  ],
  [
    'schooling',
    {
      desc: 'On switch-in, if this Pokémon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.',
      name: 'Schooling',
      shortDesc: 'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.'
    }
  ],
  [
    'scrappy',
    {
      desc: 'This Pokémon can hit Ghost types with Normal- and Fighting-type moves. This Pokémon is immune to the effect of the Intimidate Ability.',
      name: 'Scrappy',
      shortDesc: 'Fighting, Normal moves hit Ghost. Immune to Intimidate.'
    }
  ],
  [
    'screencleaner',
    {
      name: 'Screen Cleaner',
      shortDesc: 'On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides.'
    }
  ],
  [
    'seedsower',
    {
      desc: 'When this Pokémon is hit by an attack, the effect of Grassy Terrain begins.',
      name: 'Seed Sower',
      shortDesc: 'When this Pokémon is hit by an attack, the effect of Grassy Terrain begins.'
    }
  ],
  [
    'serenegrace',
    {
      desc: "This Pokémon's moves have their secondary effect chance doubled. This effect stacks with the Rainbow effect, except for secondary effects that cause the target to flinch.",
      name: 'Serene Grace',
      shortDesc: "This Pokémon's moves have their secondary effect chance doubled."
    }
  ],
  [
    'shadowshield',
    {
      desc: 'If this Pokémon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.',
      name: 'Shadow Shield',
      shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.'
    }
  ],
  [
    'shadowtag',
    {
      aliases: ['stag'],
      desc: 'Prevents opposing Pokémon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.',
      name: 'Shadow Tag',
      shortDesc: 'Prevents foes from choosing to switch unless they also have this Ability.'
    }
  ],
  [
    'sharpness',
    {
      desc: "This Pokémon's slicing attacks have their power multiplied by 1.5.",
      name: 'Sharpness',
      shortDesc: "This Pokémon's slicing moves have their power multiplied by 1.5."
    }
  ],
  [
    'shedskin',
    {
      desc: 'This Pokémon has a 33% chance to have its non-volatile status condition cured at the end of each turn.',
      name: 'Shed Skin',
      shortDesc: 'This Pokémon has a 33% chance to have its status cured at the end of each turn.'
    }
  ],
  [
    'sheerforce',
    {
      desc: "This Pokémon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Anger Shell, Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
      name: 'Sheer Force',
      shortDesc: "This Pokémon's attacks with secondary effects have 1.3x power; nullifies the effects."
    }
  ],
  [
    'shellarmor',
    {
      name: 'Shell Armor',
      shortDesc: 'This Pokémon cannot be struck by a critical hit.'
    }
  ],
  [
    'shielddust',
    {
      name: 'Shield Dust',
      shortDesc: "This Pokémon is not affected by the secondary effect of another Pokémon's attack."
    }
  ],
  [
    'shieldsdown',
    {
      desc: 'If this Pokémon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by a non-volatile status condition or Yawn.',
      name: 'Shields Down',
      shortDesc: 'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.'
    }
  ],
  [
    'simple',
    {
      desc: "When this Pokémon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
      name: 'Simple',
      shortDesc: "When one of this Pokémon's stat stages is raised or lowered, the amount is doubled."
    }
  ],
  [
    'skilllink',
    {
      desc: "This Pokémon's multi-hit attacks always hit the maximum number of times. Triple Kick and Triple Axel do not check accuracy for the second and third hits.",
      name: 'Skill Link',
      shortDesc: "This Pokémon's multi-hit attacks always hit the maximum number of times."
    }
  ],
  [
    'slowstart',
    {
      name: 'Slow Start',
      shortDesc: "On switch-in, this Pokémon's Attack and Speed are halved for 5 turns."
    }
  ],
  [
    'slushrush',
    {
      name: 'Slush Rush',
      shortDesc: "If Snow is active, this Pokémon's Speed is doubled."
    }
  ],
  [
    'sniper',
    {
      name: 'Sniper',
      shortDesc: 'If this Pokémon strikes with a critical hit, the damage is multiplied by 1.5.'
    }
  ],
  [
    'snowcloak',
    {
      desc: 'If Snow is active, the accuracy of moves used against this Pokémon is multiplied by 0.8.',
      isFieldAbility:
        'If a Pokémon with Snow Cloak is in the first place in the party (even if fainted) in an area with hail, the chance of encountering a wild Pokémon is decreased by 50%.',
      name: 'Snow Cloak',
      shortDesc: "If Snow is active, this Pokémon's evasiveness is 1.25x."
    }
  ],
  [
    'snowwarning',
    {
      name: 'Snow Warning',
      shortDesc: 'On switch-in, this Pokémon summons Snow.'
    }
  ],
  [
    'solarpower',
    {
      desc: "If Sunny Day is active, this Pokémon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. These effects are prevented if the Pokémon is holding a Utility Umbrella.",
      name: 'Solar Power',
      shortDesc: "If Sunny Day is active, this Pokémon's Sp. Atk is 1.5x; loses 1/8 max HP per turn."
    }
  ],
  [
    'solidrock',
    {
      name: 'Solid Rock',
      shortDesc: 'This Pokémon receives 3/4 damage from supereffective attacks.'
    }
  ],
  [
    'soulheart',
    {
      desc: "This Pokémon's Special Attack is raised by 1 stage when another Pokémon faints.",
      name: 'Soul-Heart',
      shortDesc: "This Pokémon's Special Attack is raised by 1 stage when another Pokémon faints."
    }
  ],
  [
    'soundproof',
    {
      name: 'Soundproof',
      shortDesc: 'This Pokémon is immune to sound-based moves, unless it used the move.'
    }
  ],
  [
    'speedboost',
    {
      desc: "This Pokémon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
      name: 'Speed Boost',
      shortDesc: "This Pokémon's Speed is raised 1 stage at the end of each full turn on the field."
    }
  ],
  [
    'stakeout',
    {
      name: 'Stakeout',
      shortDesc: "This Pokémon's offensive stat is doubled against a target that switched in this turn."
    }
  ],
  [
    'stall',
    {
      name: 'Stall',
      shortDesc: 'This Pokémon moves last among Pokémon using the same or greater priority moves.'
    }
  ],
  [
    'stalwart',
    {
      name: 'Stalwart',
      shortDesc: "This Pokémon's moves cannot be redirected to a different target by any effect."
    }
  ],
  [
    'stamina',
    {
      name: 'Stamina',
      shortDesc: "This Pokémon's Defense is raised by 1 stage after it is damaged by a move."
    }
  ],
  [
    'stancechange',
    {
      desc: "If this Pokémon is an Aegislash, it changes to Blade Forme before using an attacking move, and changes to Shield Forme before using King's Shield.",
      name: 'Stance Change',
      shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield."
    }
  ],
  [
    'static',
    {
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with Static is in the first place in the party, there is a 50% chance the game will force an encounter with an Electric-type Pokémon, if one is possible.',
      name: 'Static',
      shortDesc: '30% chance a Pokémon making contact with this Pokémon will be paralyzed.'
    }
  ],
  [
    'steadfast',
    {
      name: 'Steadfast',
      shortDesc: 'If this Pokémon flinches, its Speed is raised by 1 stage.'
    }
  ],
  [
    'steamengine',
    {
      desc: "This Pokémon's Speed is raised by 6 stages after it is damaged by a Fire- or Water-type move.",
      isFieldAbility: 'Having a Pokémon with Steam Engine in your party will halve the number of cycles it takes for all eggs in the party to hatch.',
      name: 'Steam Engine',
      shortDesc: "This Pokémon's Speed is raised by 6 stages after it is damaged by Fire/Water moves."
    }
  ],
  [
    'steelworker',
    {
      name: 'Steelworker',
      shortDesc: "This Pokémon's offensive stat is multiplied by 1.5 while using a Steel-type attack."
    }
  ],
  [
    'steelyspirit',
    {
      desc: "This Pokémon and its allies' Steel-type moves have their power multiplied by 1.5. This affects Doom Desire even if the user is not on the field.",
      name: 'Steely Spirit',
      shortDesc: "This Pokémon and its allies' Steel-type moves have their power multiplied by 1.5."
    }
  ],
  [
    'stench',
    {
      desc: "This Pokémon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
      isFieldAbility:
        'If a Pokémon with Stench is in the first place in the party (even if fainted), the chance of encountering a wild Pokémon is decreased by 50%.',
      name: 'Stench',
      shortDesc: "This Pokémon's attacks without a chance to flinch gain a 10% chance to flinch."
    }
  ],
  [
    'stickyhold',
    {
      desc: "This Pokémon cannot lose its held item due to another Pokémon's Ability or attack, unless the attack knocks out this Pokémon. A Sticky Barb will be transferred to other Pokémon regardless of this Ability.",
      isFieldAbility:
        'If a Pokémon with Sticky Hold is in the first place in the party (even if fainted), bites will occur more often while fishing.',
      name: 'Sticky Hold',
      shortDesc: "This Pokémon cannot lose its held item due to another Pokémon's Ability or attack."
    }
  ],
  [
    'stormdrain',
    {
      desc: 'This Pokémon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokémon is not the target of a single-target Water-type move used by another Pokémon, this Pokémon redirects that move to itself if it is within the range of that move. If multiple Pokémon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.',
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with Storm Drain is in the first place in the party (even if fainted), then there is a 50% chance the game will force an encounter with a Water-type Pokémon, if one is possible.',
      name: 'Storm Drain',
      shortDesc: 'This Pokémon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.'
    }
  ],
  [
    'strongjaw',
    {
      desc: "This Pokémon's bite-based attacks have their power multiplied by 1.5.",
      name: 'Strong Jaw',
      shortDesc: "This Pokémon's bite-based attacks have 1.5x power. Bug Bite is not boosted."
    }
  ],
  [
    'sturdy',
    {
      desc: 'If this Pokémon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokémon.',
      name: 'Sturdy',
      shortDesc: 'If this Pokémon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.'
    }
  ],
  [
    'suctioncups',
    {
      isFieldAbility:
        'If a Pokémon with Suction Cups is in the first place in the party (even if fainted), bites will occur more often while fishing.',
      name: 'Suction Cups',
      shortDesc: "This Pokémon cannot be forced to switch out by another Pokémon's attack or item."
    }
  ],
  [
    'superluck',
    {
      isFieldAbility:
        'In Pokémon Sword and Shield, if a Pokémon with this Ability leads the party, the chances of finding a wild Pokémon holding an item increase.',
      name: 'Super Luck',
      shortDesc: "This Pokémon's critical hit ratio is raised by 1 stage."
    }
  ],
  [
    'supersweetsyrup',
    {
      name: 'Supersweet Syrup',
      shortDesc: 'On switch-in, this Pokémon lowers the evasiveness of opponents 1 stage. Once per battle.'
    }
  ],
  [
    'supremeoverlord',
    {
      desc: "This Pokémon's moves have their power multiplied by 1+(X*0.1), where X is the total number of times any Pokémon has fainted on the user's side when this Ability became active, and X cannot be greater than 5.",
      name: 'Supreme Overlord',
      shortDesc: "This Pokémon's moves have 10% more power for each fainted ally, up to 5 allies."
    }
  ],
  [
    'surgesurfer',
    {
      name: 'Surge Surfer',
      shortDesc: "If Electric Terrain is active, this Pokémon's Speed is doubled."
    }
  ],
  [
    'swarm',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Bug-type attack.',
      isFieldAbility: 'In Pokémon Emerald, this Ability also increases the frequency cries of wild Pokémon that are heard in the overworld.',
      name: 'Swarm',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's offensive stat is 1.5x with Bug attacks."
    }
  ],
  [
    'sweetveil',
    {
      desc: 'This Pokémon and its allies cannot fall asleep, but those already asleep do not wake up immediately. This Pokémon and its allies cannot use Rest successfully or become affected by Yawn, and those previously affected will not fall asleep.',
      name: 'Sweet Veil',
      shortDesc: 'This Pokémon and its allies cannot fall asleep; those already asleep do not wake up.'
    }
  ],
  [
    'swiftswim',
    {
      desc: "If Rain Dance is active, this Pokémon's Speed is doubled. This effect is prevented if this Pokémon is holding a Utility Umbrella.",
      name: 'Swift Swim',
      shortDesc: "If Rain Dance is active, this Pokémon's Speed is doubled."
    }
  ],
  [
    'swordofruin',
    {
      name: 'Sword of Ruin',
      shortDesc: 'Active Pokémon without this Ability have their Defense multiplied by 0.75.'
    }
  ],
  [
    'symbiosis',
    {
      desc: "If an ally uses its item, this Pokémon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off, or if the ally used an Eject Button or Eject Pack.",
      name: 'Symbiosis',
      shortDesc: 'If an ally uses its item, this Pokémon gives its item to that ally immediately.'
    }
  ],
  [
    'synchronize',
    {
      desc: 'If another Pokémon burns, paralyzes, poisons, or badly poisons this Pokémon, that Pokémon receives the same non-volatile status condition.',
      isFieldAbility:
        'If a Pokémon with Synchronize in the first slot in the party (even if fainted), chance of encountering a wild Pokémon with the same nature will be 50%. In Pokémon Sword and Shield however, all wild Pokémon are guaranteed to have the same nature as the Pokémon with Synchronize, exluding gift Pokémon and Pokémon obtained from max raid battles. Roaming Pokémon, Gift Pokémon (excluding Pokémon obtained via mystery gift or eggs in Omega Ruby and Alpha Sapphire to Ultra Sun/Moon), Stationary Pokémon in Pokémon Emerald, Pokémon in the Pokewalker and Pokémon found in Entree Forest are also not affected by this ability.',
      name: 'Synchronize',
      shortDesc: 'If another Pokémon burns/poisons/paralyzes this Pokémon, it also gets that status.'
    }
  ],
  [
    'tabletsofruin',
    {
      name: 'Tablets of Ruin',
      shortDesc: 'Active Pokémon without this Ability have their Attack multiplied by 0.75.'
    }
  ],
  [
    'tangledfeet',
    {
      name: 'Tangled Feet',
      shortDesc: "This Pokémon's evasiveness is doubled as long as it is confused."
    }
  ],
  [
    'tanglinghair',
    {
      name: 'Tangling Hair',
      shortDesc: 'Pokémon making contact with this Pokémon have their Speed lowered by 1 stage.'
    }
  ],
  [
    'technician',
    {
      desc: "This Pokémon's moves of 60 power or less have their power multiplied by 1.5, including Struggle. This effect comes after a move's effect changes its own power.",
      name: 'Technician',
      shortDesc: "This Pokémon's moves of 60 power or less have 1.5x power, including Struggle."
    }
  ],
  [
    'telepathy',
    {
      name: 'Telepathy',
      shortDesc: 'This Pokémon does not take damage from attacks made by its allies.'
    }
  ],
  [
    'teraformzero',
    {
      name: 'Teraform Zero',
      shortDesc: 'Terapagos: Terastallizing ends the effects of weather and terrain. Once per battle.'
    }
  ],
  [
    'terashell',
    {
      desc: 'If this Pokemon is a Terapagos at full HP, the effectiveness of attacks against it is changed to 0.5 unless this Pokemon is immune to the move. Multi-hit moves retain the same effectiveness throughout the attack.',
      name: 'Tera Shell',
      shortDesc: 'Terapagos: If full HP, attacks taken have 0.5x effectiveness unless naturally immune.'
    }
  ],
  [
    'terashift',
    {
      name: 'Tera Shift',
      shortDesc: 'If this Pokémon is a Terapagos, it transforms into its Terastal Form on entry.'
    }
  ],
  [
    'teravolt',
    {
      desc: "This Pokémon's moves and their effects ignore certain Abilities of other Pokémon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokémon on the field, whether or not it is a target of this Pokémon's move, and whether or not their Ability is beneficial to this Pokémon.",
      name: 'Teravolt',
      shortDesc: "This Pokémon's moves and their effects ignore the Abilities of other Pokémon."
    }
  ],
  [
    'thermalexchange',
    {
      desc: "This Pokémon's Attack is raised 1 stage after it is damaged by a Fire-type move. This Pokémon cannot be burned. Gaining this Ability while burned cures it.",
      name: 'Thermal Exchange',
      shortDesc: "This Pokémon's Attack is raised by 1 when damaged by Fire moves; can't be burned."
    }
  ],
  [
    'thickfat',
    {
      desc: "If a Pokémon uses a Fire- or Ice-type attack against this Pokémon, that Pokémon's offensive stat is halved when calculating the damage to this Pokémon.",
      name: 'Thick Fat',
      shortDesc: 'Fire-/Ice-type moves against this Pokémon deal damage with a halved offensive stat.'
    }
  ],
  [
    'tintedlens',
    {
      name: 'Tinted Lens',
      shortDesc: "This Pokémon's attacks that are not very effective on a target deal double damage."
    }
  ],
  [
    'torrent',
    {
      desc: 'When this Pokémon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.',
      name: 'Torrent',
      shortDesc: "At 1/3 or less of its max HP, this Pokémon's offensive stat is 1.5x with Water attacks."
    }
  ],
  [
    'toughclaws',
    {
      name: 'Tough Claws',
      shortDesc: "This Pokémon's contact moves have their power multiplied by 1.3."
    }
  ],
  [
    'toxicboost',
    {
      desc: 'While this Pokémon is poisoned, the power of its physical attacks is multiplied by 1.5.',
      name: 'Toxic Boost',
      shortDesc: 'While this Pokémon is poisoned, its physical attacks have 1.5x power.'
    }
  ],
  [
    'toxicchain',
    {
      desc: "This Pokémon's moves have a 30% chance of badly poisoning. This effect comes after a move's inherent secondary effect chance.",
      name: 'Toxic Chain',
      shortDesc: "This Pokémon's moves have a 30% chance of badly poisoning."
    }
  ],
  [
    'toxicdebris',
    {
      desc: 'When this Pokémon is hit by a physical attack, Toxic Spikes are set on the opposing side of the field.',
      name: 'Toxic Debris',
      shortDesc: 'If this Pokémon is hit by a physical attack, Toxic Spikes are set on the opposing side.'
    }
  ],
  [
    'trace',
    {
      desc: "On switch-in, this Pokémon copies a random opposing Pokémon's Ability. Abilities that cannot be copied are As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Zen Mode, and Zero to Hero. If no opposing Pokémon has an Ability that can be copied, this Ability will activate as soon as one does.",
      name: 'Trace',
      shortDesc: "On switch-in, or when it can, this Pokémon copies a random adjacent foe's Ability."
    }
  ],
  [
    'transistor',
    {
      name: 'Transistor',
      shortDesc: "This Pokémon's offensive stat is multiplied by 1.3 while using an Electric-type attack."
    }
  ],
  [
    'triage',
    {
      name: 'Triage',
      shortDesc: "This Pokémon's healing moves have their priority increased by 3."
    }
  ],
  [
    'truant',
    {
      name: 'Truant',
      shortDesc: 'This Pokémon skips every other turn instead of using a move.'
    }
  ],
  [
    'turboblaze',
    {
      desc: "This Pokémon's moves and their effects ignore certain Abilities of other Pokémon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pokémon on the field, whether or not it is a target of this Pokémon's move, and whether or not their Ability is beneficial to this Pokémon.",
      name: 'Turboblaze',
      shortDesc: "This Pokémon's moves and their effects ignore the Abilities of other Pokémon."
    }
  ],
  [
    'unaware',
    {
      desc: "This Pokémon ignores other Pokémon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokémon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
      name: 'Unaware',
      shortDesc: "This Pokémon ignores other Pokémon's stat stages when taking or doing damage."
    }
  ],
  [
    'unburden',
    {
      desc: 'If this Pokémon loses its held item for any reason, its Speed is doubled as long as it remains active, has this Ability, and is not holding an item.',
      name: 'Unburden',
      shortDesc: 'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.'
    }
  ],
  [
    'unnerve',
    {
      desc: 'While this Pokémon is active, it prevents opposing Pokémon from using their Berries. This Ability activates before hazards and other Abilities take effect.',
      name: 'Unnerve',
      shortDesc: 'While this Pokémon is active, it prevents opposing Pokémon from using their Berries.'
    }
  ],
  [
    'unseenfist',
    {
      desc: "All of this Pokémon's moves that make contact bypass protection.",
      name: 'Unseen Fist',
      shortDesc: "This Pokémon's contact moves ignore the target's protection, except Max Guard."
    }
  ],
  [
    'vesselofruin',
    {
      name: 'Vessel of Ruin',
      shortDesc: 'Active Pokémon without this Ability have their Special Attack multiplied by 0.75.'
    }
  ],
  [
    'victorystar',
    {
      name: 'Victory Star',
      shortDesc: "This Pokémon and its allies' moves have their accuracy multiplied by 1.1."
    }
  ],
  [
    'vitalspirit',
    {
      isFieldAbility:
        'If you have a Pokémon with Vital Spirit at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range. In Generation 5, Vital Spirit also prevented a Pokémon from visiting the Dream World before it was shut down.',
      name: 'Vital Spirit',
      shortDesc: 'This Pokémon cannot fall asleep. Gaining this Ability while asleep cures it.'
    }
  ],
  [
    'voltabsorb',
    {
      desc: 'This Pokémon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.',
      name: 'Volt Absorb',
      shortDesc: 'This Pokémon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.'
    }
  ],
  [
    'wanderingspirit',
    {
      desc: 'Pokémon making contact with this Pokémon have their Ability swapped with this one. Does not affect Pokémon with the As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, Zen Mode, or Zero to Hero Abilities.',
      name: 'Wandering Spirit',
      shortDesc: 'Pokémon making contact with this Pokémon have their Ability swapped with this one.'
    }
  ],
  [
    'waterabsorb',
    {
      desc: 'This Pokémon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.',
      name: 'Water Absorb',
      shortDesc: 'This Pokémon heals 1/4 of its max HP when hit by Water moves; Water immunity.'
    }
  ],
  [
    'waterbubble',
    {
      desc: "This Pokémon's offensive stat is doubled while using a Water-type attack. If a Pokémon uses a Fire-type attack against this Pokémon, that Pokémon's offensive stat is halved when calculating the damage to this Pokémon. This Pokémon cannot be burned. Gaining this Ability while burned cures it.",
      name: 'Water Bubble',
      shortDesc: "This Pokémon's Water power is 2x; it can't be burned; Fire power against it is halved."
    }
  ],
  [
    'watercompaction',
    {
      name: 'Water Compaction',
      shortDesc: "This Pokémon's Defense is raised 2 stages after it is damaged by a Water-type move."
    }
  ],
  [
    'waterveil',
    {
      name: 'Water Veil',
      shortDesc: 'This Pokémon cannot be burned. Gaining this Ability while burned cures it.'
    }
  ],
  [
    'weakarmor',
    {
      desc: 'If a physical attack hits this Pokémon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.',
      name: 'Weak Armor',
      shortDesc: 'If a physical attack hits this Pokémon, Defense is lowered by 1, Speed is raised by 2.'
    }
  ],
  [
    'wellbakedbody',
    {
      desc: 'This Pokémon is immune to Fire-type moves and raises its Defense by 2 stages when hit by a Fire-type move.',
      name: 'Well-Baked Body',
      shortDesc: "This Pokémon's Defense is raised 2 stages if hit by a Fire move; Fire immunity."
    }
  ],
  [
    'whitesmoke',
    {
      isFieldAbility:
        'If a Pokémon with White Smoke is in the first place in the party (even if fainted), the chance of encountering a wild Pokémon is decreased by 50%.',
      name: 'White Smoke',
      shortDesc: "Prevents other Pokémon from lowering this Pokémon's stat stages."
    }
  ],
  [
    'wimpout',
    {
      desc: 'When this Pokémon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
      name: 'Wimp Out',
      shortDesc: 'This Pokémon switches out when it reaches 1/2 or less of its maximum HP.'
    }
  ],
  [
    'windpower',
    {
      desc: "This Pokémon gains the Charge effect when it takes a hit from a wind move or when Tailwind begins on this Pokémon's side.",
      name: 'Wind Power',
      shortDesc: 'This Pokémon gains the Charge effect when hit by a wind move or Tailwind begins.'
    }
  ],
  [
    'windrider',
    {
      desc: "This Pokémon is immune to wind moves and raises its Attack by 1 stage when hit by a wind move or when Tailwind begins on this Pokémon's side.",
      name: 'Wind Rider',
      shortDesc: 'Attack raised by 1 if hit by a wind move or Tailwind begins. Wind move immunity.'
    }
  ],
  [
    'wonderguard',
    {
      name: 'Wonder Guard',
      shortDesc: 'This Pokémon can only be damaged by supereffective moves and indirect damage.'
    }
  ],
  [
    'wonderskin',
    {
      desc: 'Non-damaging moves that check accuracy have their accuracy changed to 50% when used against this Pokémon. This effect comes before other effects that modify accuracy.',
      name: 'Wonder Skin',
      shortDesc: 'Status moves with accuracy checks are 50% accurate when used on this Pokémon.'
    }
  ],
  [
    'zenmode',
    {
      desc: "If this Pokémon is a Darmanitan or Galarian Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode.",
      name: 'Zen Mode',
      shortDesc: 'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.'
    }
  ],
  [
    'zerotohero',
    {
      name: 'Zero to Hero',
      shortDesc: 'If this Pokémon is a Palafin in Zero Form, switching out has it change to Hero Form.'
    }
  ]
]);

for (const [key, value] of abilities.entries()) {
  value.key = key;
}
