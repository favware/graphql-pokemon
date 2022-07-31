import type { PokemonTypes } from '#assets/pokemon-source';
import { Collection } from '@discordjs/collection';

/** The moves in Pokémon */
export const moves = new Collection<string, PokemonTypes.Move>([
  [
    'tenmillionvoltthunderbolt',
    {
      accuracy: 100,
      basePower: '195',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a very high chance for a critical hit.',
      isNonstandard: 'Past',
      isZ: 'pikashuniumz',
      name: '10,000,000 Volt Thunderbolt',
      pp: 1,
      priority: 0,
      shortDesc: 'Very high critical hit ratio.',
      target: 'Normal',
      type: 'Electric',
      aliases: ['10000000voltthunderbolt', '10mv', '10mvt', 'zpikachucap', 'zthunderbolt']
    }
  ],
  [
    'absorb',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 90,
      name: 'Absorb',
      pp: 25,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'accelerock',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Accelerock',
      pp: 20,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'acid',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 70,
      name: 'Acid',
      pp: 30,
      priority: 0,
      shortDesc: '10% chance to lower the foe(s) Sp. Def by 1.',
      target: 'Adjacent Foes',
      type: 'Poison'
    }
  ],
  [
    'acidarmor',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Raises the user's Defense by 2 stages.",
      name: 'Acid Armor',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Defense by 2.",
      target: 'Self',
      type: 'Poison'
    }
  ],
  [
    'aciddownpour',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'poisoniumz',
      name: 'Acid Downpour',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Poison',
      aliases: ['zpoison']
    }
  ],
  [
    'acidspray',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 70,
      name: 'Acid Spray',
      pp: 20,
      priority: 0,
      shortDesc: "100% chance to lower the target's Sp. Def by 2.",
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'acrobatics',
    {
      accuracy: 100,
      basePower: '55',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Power doubles if the user has no held item.',
      maxMovePower: 110,
      name: 'Acrobatics',
      pp: 15,
      priority: 0,
      shortDesc: 'Power doubles if the user has no held item.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'acupressure',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Acupressure',
      pp: 30,
      priority: 0,
      shortDesc: 'Raises a random stat of the user or an ally by 2.',
      target: 'Adjacent Ally or Self',
      type: 'Normal'
    }
  ],
  [
    'aerialace',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'This move does not check accuracy.',
      maxMovePower: 110,
      name: 'Aerial Ace',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'aeroblast',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Aeroblast',
      pp: 5,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'afteryou',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'After You',
      pp: 15,
      priority: 0,
      shortDesc: 'The target makes its move right after the user.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'agility',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Raises the user's Speed by 2 stages.",
      name: 'Agility',
      pp: 30,
      priority: 0,
      shortDesc: "Raises the user's Speed by 2.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'aircutter',
    {
      accuracy: 95,
      basePower: '60',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 110,
      name: 'Air Cutter',
      pp: 25,
      priority: 0,
      shortDesc: 'High critical hit ratio. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Flying'
    }
  ],
  [
    'airslash',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Air Slash',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'alloutpummeling',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'fightiniumz',
      name: 'All-Out Pummeling',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Fighting',
      aliases: ['zfighting']
    }
  ],
  [
    'allyswitch',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Ally Switch',
      pp: 15,
      priority: 2,
      shortDesc: 'The user swaps positions with its ally.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'amnesia',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Raises the user's Special Defense by 2 stages.",
      name: 'Amnesia',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Sp. Def by 2.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'anchorshot',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      maxMovePower: 130,
      name: 'Anchor Shot',
      pp: 20,
      priority: 0,
      shortDesc: 'Prevents the target from switching out.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'ancientpower',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 110,
      name: 'Ancient Power',
      pp: 5,
      priority: 0,
      shortDesc: '10% chance to raise all stats by 1 (not acc/eva).',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'appleacid',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: "Has a 100% chance to lower the target's Special Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Apple Acid',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'aquajet',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Aqua Jet',
      pp: 20,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'aquaring',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Aqua Ring',
      pp: 20,
      priority: 0,
      shortDesc: 'User recovers 1/16 max HP per turn.',
      target: 'Self',
      type: 'Water'
    }
  ],
  [
    'aquatail',
    {
      accuracy: 90,
      basePower: '90',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Aqua Tail',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'armthrust',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 70,
      name: 'Arm Thrust',
      pp: 20,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'aromatherapy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Every Pokémon in the user's party is cured of its non-volatile status condition. Active Pokémon with the Sap Sipper Ability are not cured, unless they are the user.",
      name: 'Aromatherapy',
      pp: 5,
      priority: 0,
      shortDesc: "Cures the user's party of all status conditions.",
      target: "Ally's Side",
      type: 'Grass'
    }
  ],
  [
    'aromaticmist',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Aromatic Mist',
      pp: 20,
      priority: 0,
      shortDesc: "Raises an ally's Sp. Def by 1.",
      target: 'Adjacent Ally',
      type: 'Fairy'
    }
  ],
  [
    'assist',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
      isNonstandard: 'Past',
      name: 'Assist',
      pp: 20,
      priority: 0,
      shortDesc: 'Uses a random move known by a team member.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'assurance',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 110,
      name: 'Assurance',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if target was damaged this turn.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'astralbarrage',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      name: 'Astral Barrage',
      pp: 5,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Ghost'
    }
  ],
  [
    'astonish',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      contestType: 'Cute',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 90,
      name: 'Astonish',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'attackorder',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Attack Order',
      pp: 15,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'attract',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Attract',
      pp: 15,
      priority: 0,
      shortDesc: 'A target of the opposite gender gets infatuated.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'aurasphere',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'This move does not check accuracy.',
      maxMovePower: 90,
      name: 'Aura Sphere',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Any',
      type: 'Fighting'
    }
  ],
  [
    'aurawheel',
    {
      accuracy: 100,
      basePower: '110',
      category: 'Physical',
      desc: "Has a 100% chance to raise the user's Speed by 1 stage. If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
      maxMovePower: 140,
      name: 'Aura Wheel',
      pp: 10,
      priority: 0,
      shortDesc: 'Morpeko: Electric; Hangry: Dark; 100% +1 Spe.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'aurorabeam',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
      maxMovePower: 120,
      name: 'Aurora Beam',
      pp: 20,
      priority: 0,
      shortDesc: "10% chance to lower the foe's Attack by 1.",
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'auroraveil',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Aurora Veil',
      pp: 20,
      priority: 0,
      shortDesc: 'For 5 turns, damage to allies is halved. Hail only.',
      target: "Ally's Side",
      type: 'Ice'
    }
  ],
  [
    'autotomize',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Autotomize',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the user's Speed by 2; user loses 100 kg.",
      target: 'Self',
      type: 'Steel'
    }
  ],
  [
    'avalanche',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'Power doubles if the user was hit by the target this turn.',
      maxMovePower: 110,
      name: 'Avalanche',
      pp: 10,
      priority: -4,
      shortDesc: 'Power doubles if user is damaged by the target.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'babydolleyes',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Attack by 1 stage.",
      name: 'Baby-Doll Eyes',
      pp: 30,
      priority: 1,
      shortDesc: "Lowers the target's Attack by 1.",
      target: 'Normal',
      type: 'Fairy',
      aliases: ['bde']
    }
  ],
  [
    'baddybad',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Special',
      contestType: 'Clever',
      desc: 'This move summons Reflect for 5 turns upon use.',
      name: 'Baddy Bad',
      pp: 15,
      priority: 0,
      shortDesc: 'Summons Reflect.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'banefulbunker',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Baneful Bunker',
      pp: 10,
      priority: 4,
      shortDesc: 'Protects from moves. Contact: poison.',
      target: 'Self',
      type: 'Poison'
    }
  ],
  [
    'barbbarrage',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'The user launches countless toxic barbs to inflict damage. This may also poison the target. This move’s power is doubled if the target has a status condition.',
      name: 'Barb Barrage',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'barrage',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      isNonstandard: 'Past',
      name: 'Barrage',
      pp: 20,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'barrier',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Raises the user's Defense by 2 stages.",
      isNonstandard: 'Past',
      name: 'Barrier',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Defense by 2.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'batonpass',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Baton Pass',
      pp: 40,
      priority: 0,
      shortDesc: 'User switches, passing stat changes and more.',
      target: 'Self',
      type: 'Normal',
      aliases: ['bp', 'bpass']
    }
  ],
  [
    'beakblast',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Beak Blast',
      pp: 15,
      priority: -3,
      shortDesc: 'Burns on contact with the user before it moves.',
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'beatup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Clever',
      desc: "Hits one time for the user and one time for each unfainted Pokémon without a non-volatile status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokémon's base Attack; each hit is considered to come from the user.",
      maxMovePower: 100,
      name: 'Beat Up',
      pp: 10,
      priority: 0,
      shortDesc: 'All healthy allies aid in damaging the target.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'belch',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Special',
      desc: 'This move cannot be selected until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokémon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selected and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one.',
      maxMovePower: 95,
      name: 'Belch',
      pp: 10,
      priority: 0,
      shortDesc: 'Cannot be selected until the user eats a Berry.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'behemothbash',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      maxMovePower: 130,
      name: 'Behemoth Bash',
      pp: 5,
      priority: 0,
      shortDesc: 'Damage doubles if the target is Dynamaxed.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'behemothblade',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      maxMovePower: 130,
      name: 'Behemoth Blade',
      pp: 5,
      priority: 0,
      shortDesc: 'Damage doubles if the target is Dynamaxed.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'bellydrum',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Belly Drum',
      pp: 10,
      priority: 0,
      shortDesc: 'User loses 50% max HP. Maximizes Attack.',
      target: 'Self',
      type: 'Normal',
      aliases: ['bd']
    }
  ],
  [
    'bestow',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      isNonstandard: 'Past',
      name: 'Bestow',
      pp: 15,
      priority: 0,
      shortDesc: 'User passes its held item to the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'bide',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Bide',
      pp: 10,
      priority: 1,
      shortDesc: 'Waits 2 turns; deals double the damage taken.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'bind',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 90,
      name: 'Bind',
      pp: 20,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'bite',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 110,
      name: 'Bite',
      pp: 25,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'bittermalice',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: 'The user attacks its target with spine-chilling resentment. This may also leave the target with frostbite. This move’s power is doubled if the target has a status condition.',
      name: 'Bitter Malice',
      pp: 15,
      priority: 0,
      shortDesc: 'Has a 30% chance to leave the target with frostbite.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'blackholeeclipse',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'darkiniumz',
      name: 'Black Hole Eclipse',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Dark',
      aliases: ['zdark']
    }
  ],
  [
    'blastburn',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'If this move is successful, the user must recharge on the following turn and cannot select a move.',
      maxMovePower: 150,
      name: 'Blast Burn',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'blazekick',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Blaze Kick',
      pp: 10,
      priority: 0,
      shortDesc: 'High critical hit ratio. 10% chance to burn.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'bleakwindstorm',
    {
      accuracy: 80,
      basePower: '95',
      category: 'Special',
      desc: 'The user attacks with savagely cold winds that cause both body and spirit to tremble. This may also leave the target with frostbite.',
      name: 'Bleakwind Storm',
      pp: 5,
      priority: 0,
      shortDesc: 'Has a 30% chance to leave the target with frostbite.',
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'blizzard',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Blizzard',
      pp: 5,
      priority: 0,
      shortDesc: "10% chance to freeze foe(s). Can't miss in hail.",
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'block',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      name: 'Block',
      pp: 5,
      priority: 0,
      shortDesc: 'Prevents the target from switching out.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'bloomdoom',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'grassiumz',
      name: 'Bloom Doom',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Grass',
      aliases: ['zgrass']
    }
  ],
  [
    'blueflare',
    {
      accuracy: 85,
      basePower: '130',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 20% chance to burn the target.',
      maxMovePower: 140,
      name: 'Blue Flare',
      pp: 5,
      priority: 0,
      shortDesc: '20% chance to burn the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'bodypress',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Damage is calculated using the user's Defense stat as its Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
      maxMovePower: 90,
      name: 'Body Press',
      pp: 10,
      priority: 0,
      shortDesc: "Uses user's Def stat as Atk in damage calculation.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'bodyslam',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Body Slam',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to paralyze the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'boltbeak',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: 'Power doubles if the user moves before the target.',
      maxMovePower: 130,
      name: 'Bolt Beak',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if user moves before the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'boltstrike',
    {
      accuracy: 85,
      basePower: '130',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'Has a 20% chance to paralyze the target.',
      maxMovePower: 140,
      name: 'Bolt Strike',
      pp: 5,
      priority: 0,
      shortDesc: '20% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'boneclub',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 10% chance to make the target flinch.',
      isNonstandard: 'Past',
      name: 'Bone Club',
      pp: 20,
      priority: 0,
      shortDesc: '10% chance to make the target flinch.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'bonerush',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 130,
      name: 'Bone Rush',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'bonemerang',
    {
      accuracy: 90,
      basePower: '50',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Bonemerang',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2 times in one turn.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'boomburst',
    {
      accuracy: 100,
      basePower: '140',
      category: 'Special',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Boomburst',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Normal'
    }
  ],
  [
    'bounce',
    {
      accuracy: 85,
      basePower: '85',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 130,
      name: 'Bounce',
      pp: 5,
      priority: 0,
      shortDesc: 'Bounces turn 1. Hits turn 2. 30% paralyze.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'bouncybubble',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      name: 'Bouncy Bubble',
      pp: 20,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'bravebird',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 140,
      name: 'Brave Bird',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 33% recoil.',
      target: 'Any',
      type: 'Flying',
      aliases: ['bb']
    }
  ],
  [
    'branchpoke',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Branch Poke',
      pp: 40,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'breakingswipe',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
      maxMovePower: 110,
      name: 'Breaking Swipe',
      pp: 15,
      priority: 0,
      shortDesc: '100% chance to lower the foe(s) Attack by 1.',
      target: 'Adjacent Foes',
      type: 'Dragon'
    }
  ],
  [
    'breakneckblitz',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'normaliumz',
      name: 'Breakneck Blitz',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Normal',
      aliases: ['znormal']
    }
  ],
  [
    'brickbreak',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 90,
      name: 'Brick Break',
      pp: 15,
      priority: 0,
      shortDesc: 'Destroys screens, unless the target is immune.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'brine',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 120,
      name: 'Brine',
      pp: 10,
      priority: 0,
      shortDesc: "Power doubles if the target's HP is 50% or less.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'brutalswing',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 110,
      name: 'Brutal Swing',
      pp: 20,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Dark'
    }
  ],
  [
    'bubble',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cute',
      desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
      isNonstandard: 'Past',
      name: 'Bubble',
      pp: 30,
      priority: 0,
      shortDesc: '10% chance to lower the foe(s) Speed by 1.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'bubblebeam',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 120,
      name: 'Bubble Beam',
      pp: 20,
      priority: 0,
      shortDesc: "10% chance to lower the target's Speed by 1.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'bugbite',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 110,
      name: 'Bug Bite',
      pp: 20,
      priority: 0,
      shortDesc: "User steals and eats the target's Berry.",
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'bugbuzz',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Bug Buzz',
      pp: 10,
      priority: 0,
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'bulkup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Raises the user's Attack and Defense by 1 stage.",
      name: 'Bulk Up',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Attack and Defense by 1.",
      target: 'Self',
      type: 'Fighting'
    }
  ],
  [
    'bulldoze',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 110,
      name: 'Bulldoze',
      pp: 20,
      priority: 0,
      shortDesc: '100% chance to lower adjacent Pkmn Speed by 1.',
      target: 'All Adjacent',
      type: 'Ground'
    }
  ],
  [
    'bulletpunch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Bullet Punch',
      pp: 30,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'bulletseed',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 130,
      name: 'Bullet Seed',
      pp: 30,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'burningjealousy',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Has a 100% chance to burn the target if it had a stat stage raised this turn.',
      name: 'Burning Jealousy',
      pp: 5,
      priority: 0,
      shortDesc: '100% burns a target that had a stat rise this turn.',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'burnup',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 140,
      name: 'Burn Up',
      pp: 5,
      priority: 0,
      shortDesc: "User's Fire type becomes typeless; must be Fire.",
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'buzzybuzz',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: 'Has a 100% chance to paralyze the foe.',
      name: 'Buzzy Buzz',
      pp: 20,
      priority: 0,
      shortDesc: '100% chance to paralyze the foe.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'calmmind',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Calm Mind',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1.",
      target: 'Self',
      type: 'Psychic',
      aliases: ['cm']
    }
  ],
  [
    'camouflage',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Camouflage',
      pp: 20,
      priority: 0,
      shortDesc: "Changes user's type by terrain (default Normal).",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'captivate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      isNonstandard: 'Past',
      name: 'Captivate',
      pp: 20,
      priority: 0,
      shortDesc: 'Lowers the foe(s) Sp. Atk by 2 if opposite gender.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'catastropika',
    {
      accuracy: 100,
      basePower: '210',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      isZ: 'pikaniumz',
      name: 'Catastropika',
      pp: 1,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Electric',
      aliases: ['zpikachu', 'zvolttackle']
    }
  ],
  [
    'ceaselessedge',
    {
      accuracy: 90,
      basePower: '65',
      category: 'Physical',
      desc: 'The user slashes its shell blade at the target, aiming to land a critical hit. Shell splinters left behind by this attack will continue to damage the target for several turns.',
      name: 'Ceaseless Edge',
      pp: 15,
      priority: 0,
      shortDesc: 'For 4 turns, deals damage at the end of each turn.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'celebrate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'It is your birthday.',
      name: 'Celebrate',
      pp: 40,
      priority: 0,
      shortDesc: 'No competitive use. Or any use.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'charge',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Charge',
      pp: 20,
      priority: 0,
      shortDesc: "Boosts next Electric move and user's Sp. Def by 1.",
      target: 'Self',
      type: 'Electric'
    }
  ],
  [
    'chargebeam',
    {
      accuracy: 90,
      basePower: '50',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 70% chance to raise the user's Special Attack by 1 stage.",
      maxMovePower: 100,
      name: 'Charge Beam',
      pp: 10,
      priority: 0,
      shortDesc: "70% chance to raise the user's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'charm',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Attack by 2 stages.",
      name: 'Charm',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Attack by 2.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'chatter',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Cute',
      desc: 'Has a 100% chance to confuse the target.',
      isFieldMove:
        "It can be used to record and temporarily alter the battle cry of a Chatot. It does not function correctly with other Pokémon. The recorded audio is reset to Chatot's default cry when it is deposited into a box.",
      maxMovePower: 120,
      name: 'Chatter',
      pp: 20,
      priority: 0,
      shortDesc: '100% chance to confuse the target.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'chipaway',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Ignores the target's stat stage changes, including evasiveness.",
      isNonstandard: 'Past',
      name: 'Chip Away',
      pp: 20,
      priority: 0,
      shortDesc: "Ignores the target's stat stage changes.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'chloroblast',
    {
      accuracy: 95,
      basePower: '120',
      category: 'Special',
      desc: 'The user launches its amassed chlorophyll to inflict damage on the target. This also damages the user for half of its maximum HP rounded up and lowers the user’s action speed.',
      name: 'Chloroblast',
      pp: 5,
      priority: 0,
      shortDesc: "User loses 50% of its max HP as recoil and user's action speed is lowered.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'circlethrow',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 80,
      name: 'Circle Throw',
      pp: 10,
      priority: -6,
      shortDesc: 'Forces the target to switch to a random ally.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'clamp',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      isNonstandard: 'Past',
      name: 'Clamp',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'clangingscales',
    {
      accuracy: 100,
      basePower: '110',
      category: 'Special',
      contestType: 'Tough',
      desc: "Lowers the user's Defense by 1 stage.",
      maxMovePower: 140,
      name: 'Clanging Scales',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Defense by 1.",
      target: 'Adjacent Foes',
      type: 'Dragon'
    }
  ],
  [
    'clangoroussoul',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage in exchange for the user losing 33% of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Defense, Special Attack, Special Defense, and Speed stat stages would not change.",
      name: 'Clangorous Soul',
      pp: 5,
      priority: 0,
      shortDesc: 'User loses 33% of its max HP. +1 to all stats.',
      target: 'Self',
      type: 'Dragon'
    }
  ],
  [
    'clangoroussoulblaze',
    {
      accuracy: 100,
      basePower: '185',
      category: 'Special',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'kommoniumz',
      name: 'Clangorous Soulblaze',
      pp: 1,
      priority: 0,
      shortDesc: "Raises the user's Atk/Def/SpAtk/SpDef/Spe by 1.",
      target: 'Adjacent Foes',
      type: 'Dragon',
      aliases: ['clangorous', 'cs', 'zclangingscales', 'zkommoo']
    }
  ],
  [
    'clearsmog',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Resets all of the target's stat stages to 0.",
      maxMovePower: 75,
      name: 'Clear Smog',
      pp: 15,
      priority: 0,
      shortDesc: "Eliminates the target's stat changes.",
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'closecombat',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Lowers the user's Defense and Special Defense by 1 stage.",
      maxMovePower: 95,
      name: 'Close Combat',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
      target: 'Normal',
      type: 'Fighting',
      aliases: ['cc']
    }
  ],
  [
    'coaching',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Attack and Defense by 1 stage. Fails if there is no ally adjacent to the user.",
      name: 'Coaching',
      pp: 10,
      priority: 0,
      shortDesc: "Raises an ally's Attack and Defense by 1.",
      target: 'Adjacent Ally',
      type: 'Fighting'
    }
  ],
  [
    'coil',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Raises the user's Attack, Defense, and accuracy by 1 stage.",
      name: 'Coil',
      pp: 20,
      priority: 0,
      shortDesc: "Raises user's Attack, Defense, and accuracy by 1.",
      target: 'Self',
      type: 'Poison'
    }
  ],
  [
    'cometpunch',
    {
      accuracy: 85,
      basePower: '18',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      isNonstandard: 'Past',
      name: 'Comet Punch',
      pp: 15,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'confide',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Special Attack by 1 stage.",
      name: 'Confide',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'confuseray',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Causes the target to become confused.',
      name: 'Confuse Ray',
      pp: 10,
      priority: 0,
      shortDesc: 'Confuses the target.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'confusion',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      contestType: 'Clever',
      desc: 'Has a 10% chance to confuse the target.',
      maxMovePower: 100,
      name: 'Confusion',
      pp: 25,
      priority: 0,
      shortDesc: '10% chance to confuse the target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'constrict',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
      isNonstandard: 'Past',
      name: 'Constrict',
      pp: 35,
      priority: 0,
      shortDesc: "10% chance to lower the target's Speed by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'continentalcrush',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'rockiumz',
      name: 'Continental Crush',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Rock',
      aliases: ['zrock']
    }
  ],
  [
    'conversion',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Conversion',
      pp: 30,
      priority: 0,
      shortDesc: "Changes user's type to match its first move.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'conversion2',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Conversion 2',
      pp: 30,
      priority: 0,
      shortDesc: "Changes user's type to resist target's last move.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'copycat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "The user uses the last move used by any Pokémon, including itself. The base move of Max and G-Max Moves is considered for this purpose. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Dragon Tail, Dynamax Cannon, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Obstruct, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, or Whirlwind.",
      name: 'Copycat',
      pp: 20,
      priority: 0,
      shortDesc: 'Uses the last move used in the battle.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'coreenforcer',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Tough',
      desc: "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
      maxMovePower: 130,
      name: 'Core Enforcer',
      pp: 10,
      priority: 0,
      shortDesc: 'Nullifies the foe(s) Ability if the foe(s) move first.',
      target: 'Adjacent Foes',
      type: 'Dragon',
      zMovePower: 140
    }
  ],
  [
    'corkscrewcrash',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'steeliumz',
      name: 'Corkscrew Crash',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Steel',
      aliases: ['zsteel']
    }
  ],
  [
    'corrosivegas',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The target loses its held item. This move cannot cause Pokémon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.',
      name: 'Corrosive Gas',
      pp: 40,
      priority: 0,
      shortDesc: "Removes adjacent Pokémon's held items.",
      target: 'All Adjacent',
      type: 'Poison'
    }
  ],
  [
    'cosmicpower',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Raises the user's Defense and Special Defense by 1 stage.",
      name: 'Cosmic Power',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Defense and Sp. Def by 1.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'cottonguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Raises the user's Defense by 3 stages.",
      name: 'Cotton Guard',
      pp: 10,
      priority: 0,
      shortDesc: "Raises the user's Defense by 3.",
      target: 'Self',
      type: 'Grass'
    }
  ],
  [
    'cottonspore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Lowers the target's Speed by 2 stages.",
      name: 'Cotton Spore',
      pp: 40,
      priority: 0,
      shortDesc: "Lowers the target's Speed by 2.",
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'counter',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Deals damage to the opposing Pokémon equal to twice the damage dealt by the last move used in the battle. This move ignores type immunity. Fails if the user moves first, or if the opposing side's last move was Counter, had 0 power, or was not Normal or Fighting type. Fails if the last move used by either side did 0 damage and was not Confuse Ray, Conversion, Focus Energy, Glare, Haze, Leech Seed, Light Screen, Mimic, Mist, Poison Gas, Poison Powder, Recover, Reflect, Rest, Soft-Boiled, Splash, Stun Spore, Substitute, Supersonic, Teleport, Thunder Wave, Toxic, or Transform.",
      maxMovePower: 75,
      name: 'Counter',
      pp: 20,
      priority: -5,
      shortDesc: 'If hit by Normal/Fighting move, deals 2x damage.',
      target: 'Foe that last hit user',
      type: 'Fighting'
    }
  ],
  [
    'courtchange',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Switches the Mist, Light Screen, Reflect, Spikes, Safeguard, Tailwind, Toxic Spikes, Stealth Rock, Water Pledge, Fire Pledge, Grass Pledge, Sticky Web, Aurora Veil, G-Max Steelsurge, G-Max Cannonade, G-Max Vine Lash, and G-Max Wildfire effects from the user's side to the opposing side and vice versa.",
      name: 'Court Change',
      pp: 10,
      priority: 0,
      shortDesc: "Swaps user's field effects with the opposing side.",
      target: 'All',
      type: 'Normal'
    }
  ],
  [
    'covet',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 110,
      name: 'Covet',
      pp: 25,
      priority: 0,
      shortDesc: "If the user has no item, it steals the target's.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'crabhammer',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Crabhammer',
      pp: 10,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'craftyshield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Crafty Shield',
      pp: 10,
      priority: 3,
      shortDesc: 'Protects allies from Status moves this turn.',
      target: "Ally's Side",
      type: 'Fairy'
    }
  ],
  [
    'crosschop',
    {
      accuracy: 80,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 90,
      name: 'Cross Chop',
      pp: 5,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'crosspoison',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 85,
      name: 'Cross Poison',
      pp: 20,
      priority: 0,
      shortDesc: 'High critical hit ratio. 10% chance to poison.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'crunch',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Crunch',
      pp: 15,
      priority: 0,
      shortDesc: "20% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'crushclaw',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Crush Claw',
      pp: 10,
      priority: 0,
      shortDesc: "50% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'crushgrip',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 140,
      name: 'Crush Grip',
      pp: 5,
      priority: 0,
      shortDesc: 'More power the more HP the target has left.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'curse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Curse',
      pp: 10,
      priority: 0,
      shortDesc: 'Curses if Ghost, else +1 Atk, +1 Def, -1 Spe.',
      target: 'Random',
      type: 'Ghost'
    }
  ],
  [
    'cut',
    {
      accuracy: 95,
      basePower: '50',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isFieldMove:
        'The Pokémon is able to cut down small trees, and prior to gen 4, tall grass. It is taught to Pokémon with HM01 in all generations.',
      maxMovePower: 100,
      name: 'Cut',
      pp: 30,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'darkpulse',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 20% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Dark Pulse',
      pp: 15,
      priority: 0,
      shortDesc: '20% chance to make the target flinch.',
      target: 'Any',
      type: 'Dark'
    }
  ],
  [
    'darkvoid',
    {
      accuracy: 50,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Dark Void',
      pp: 10,
      priority: 0,
      shortDesc: 'Darkrai: Puts the foe(s) to sleep.',
      target: 'Adjacent Foes',
      type: 'Dark',
      aliases: ['dv']
    }
  ],
  [
    'darkestlariat',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Ignores the target's stat stage changes, including evasiveness.",
      maxMovePower: 130,
      name: 'Darkest Lariat',
      pp: 10,
      priority: 0,
      shortDesc: "Ignores the target's stat stage changes.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'dazzlinggleam',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Dazzling Gleam',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Fairy'
    }
  ],
  [
    'decorate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Attack and Special Attack by 2 stages.",
      name: 'Decorate',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the target's Attack and Sp. Atk by 2.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'defendorder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Raises the user's Defense and Special Defense by 1 stage.",
      name: 'Defend Order',
      pp: 10,
      priority: 0,
      shortDesc: "Raises the user's Defense and Sp. Def by 1.",
      target: 'Self',
      type: 'Bug'
    }
  ],
  [
    'defensecurl',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Defense Curl',
      pp: 40,
      priority: 0,
      shortDesc: "Raises the user's Defense by 1.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'defog',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Lowers the target's evasiveness by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of evasiveness. If there is a terrain active and this move is successful, the terrain will be cleared.",
      isFieldMove:
        'The Pokémon can clear out fog on the field. Defog can be taught to a Pokémon by using HM05 in Diamond, Pearl, and Platinum. Since Generation V, it has lost its HM status.',
      name: 'Defog',
      pp: 15,
      priority: 0,
      shortDesc: '-1 evasion; clears terrain and hazards on both sides.',
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'destinybond',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Destiny Bond',
      pp: 5,
      priority: 0,
      shortDesc: 'If an opponent knocks out the user, it also faints.',
      target: 'Self',
      type: 'Ghost',
      aliases: ['dbond']
    }
  ],
  [
    'detect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "The user is protected from most attacks made by other Pokémon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Detect',
      pp: 5,
      priority: 4,
      shortDesc: 'Prevents moves from affecting the user this turn.',
      target: 'Self',
      type: 'Fighting'
    }
  ],
  [
    'devastatingdrake',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'dragoniumz',
      name: 'Devastating Drake',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Dragon',
      aliases: ['zdragon']
    }
  ],
  [
    'diamondstorm',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: "Has a 50% chance to raise the user's Defense by 2 stages.",
      maxMovePower: 130,
      name: 'Diamond Storm',
      pp: 5,
      priority: 0,
      shortDesc: "50% chance to raise user's Defense by 2.",
      target: 'Adjacent Foes',
      type: 'Rock'
    }
  ],
  [
    'dig',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      isFieldMove:
        'The Pokémon can dig the player out of a cavern to the place where the player entered it, similar to an Escape Rope. It can be taught to a Pokémon by using TM28 in all generations. Several Pokémon can also learn the move by leveling up.',
      maxMovePower: 130,
      name: 'Dig',
      pp: 10,
      priority: 0,
      shortDesc: 'Digs underground turn 1, strikes turn 2.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'direclaw',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'The user lashes out at the target with ruinous claws, aiming to land a critical hit. Has a 50% chance to inflict Poison, Paralyze, or cause Drowsiness on the target',
      name: 'Dire Claw',
      pp: 15,
      priority: 0,
      shortDesc: 'Has a 50% chance to inflict Poison, Paralyze, or cause Drowsiness on the target',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'disable',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
      name: 'Disable',
      pp: 20,
      priority: 0,
      shortDesc: "For 4 turns, disables the target's last move used.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'disarmingvoice',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cute',
      desc: 'This move does not check accuracy.',
      maxMovePower: 90,
      name: 'Disarming Voice',
      pp: 15,
      priority: 0,
      shortDesc: 'This move does not check accuracy. Hits foes.',
      target: 'Adjacent Foes',
      type: 'Fairy'
    }
  ],
  [
    'discharge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 30% chance to paralyze the target.',
      maxMovePower: 130,
      name: 'Discharge',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to paralyze adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Electric'
    }
  ],
  [
    'dive',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Beautiful',
      isFieldMove:
        "The player can dive underwater on the Pokémon's back while surfing over deep waters. It can be taught to a Pokémon by using HM08 in Ruby, Sapphire, and Emerald. Since Generation IV it has been a regular level-up move. In Generation V, it has regained HM status as HM06; in Pokémon X and Y, it again lost its HM status; in Omega Ruby and Alpha Sapphire, it again regained HM status as HM07.",
      maxMovePower: 130,
      name: 'Dive',
      pp: 10,
      priority: 0,
      shortDesc: 'Dives underwater turn 1, strikes turn 2.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'dizzypunch',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cute',
      desc: 'Has a 20% chance to confuse the target.',
      isNonstandard: 'Past',
      name: 'Dizzy Punch',
      pp: 10,
      priority: 0,
      shortDesc: '20% chance to confuse the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'doomdesire',
    {
      accuracy: 100,
      basePower: '140',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Doom Desire',
      pp: 5,
      priority: 0,
      shortDesc: 'Hits two turns after being used.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'doublehit',
    {
      accuracy: 90,
      basePower: '35',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 120,
      name: 'Double Hit',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'doubleironbash',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to make the target flinch.",
      maxMovePower: 140,
      name: 'Double Iron Bash',
      pp: 5,
      priority: 0,
      shortDesc: 'Hits twice. 30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'doublekick',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 80,
      name: 'Double Kick',
      pp: 30,
      priority: 0,
      shortDesc: 'Hits 2 times in one turn.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'doubleslap',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      isNonstandard: 'Past',
      name: 'Double Slap',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'doubleteam',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Raises the user's evasiveness by 1 stage.",
      name: 'Double Team',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the user's evasiveness by 1.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'doubleedge',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 140,
      name: 'Double-Edge',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 33% recoil.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'dracometeor',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Lowers the user's Special Attack by 2 stages.",
      maxMovePower: 140,
      name: 'Draco Meteor',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragonascent',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: "Lowers the user's Defense and Special Defense by 1 stage.",
      maxMovePower: 140,
      name: 'Dragon Ascent',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'dragonbreath',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 30% chance to paralyze the target.',
      maxMovePower: 110,
      name: 'Dragon Breath',
      pp: 20,
      priority: 0,
      shortDesc: '30% chance to paralyze the target.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragonclaw',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Dragon Claw',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragondance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Raises the user's Attack and Speed by 1 stage.",
      name: 'Dragon Dance',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Attack and Speed by 1.",
      target: 'Self',
      type: 'Dragon',
      aliases: ['dd']
    }
  ],
  [
    'dragondarts',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokémon and its ally once each. If hitting one of these Pokémon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokémon twice instead. If this move is redirected, it hits that target twice.",
      maxMovePower: 130,
      name: 'Dragon Darts',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits twice. Doubles: Tries to hit each foe once.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragonenergy',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
      name: 'Dragon Energy',
      pp: 5,
      priority: 0,
      shortDesc: "Less power as user's HP decreases. Hits foe(s).",
      target: 'Adjacent Foes',
      type: 'Dragon'
    }
  ],
  [
    'dragonhammer',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Dragon Hammer',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragonpulse',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Dragon Pulse',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Any',
      type: 'Dragon'
    }
  ],
  [
    'dragonrage',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Deals 40 HP of damage to the target.',
      isNonstandard: 'Past',
      name: 'Dragon Rage',
      pp: 10,
      priority: 0,
      shortDesc: 'Always does 40 HP of damage.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragonrush',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 20% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.',
      maxMovePower: 130,
      name: 'Dragon Rush',
      pp: 10,
      priority: 0,
      shortDesc: '20% chance to make the target flinch.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dragontail',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 110,
      name: 'Dragon Tail',
      pp: 10,
      priority: -6,
      shortDesc: 'Forces the target to switch to a random ally.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'drainpunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 90,
      name: 'Drain Punch',
      pp: 10,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'drainingkiss',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      contestType: 'Cute',
      maxMovePower: 100,
      name: 'Draining Kiss',
      pp: 10,
      priority: 0,
      shortDesc: 'User recovers 75% of the damage dealt.',
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'dreameater',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Dream Eater',
      pp: 15,
      priority: 0,
      shortDesc: 'User gains 1/2 HP inflicted. Sleeping target only.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'drillpeck',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Drill Peck',
      pp: 20,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'drillrun',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Drill Run',
      pp: 10,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'drumbeating',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 130,
      name: 'Drum Beating',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower the target's Speed by 1.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'dualchop',
    {
      accuracy: 90,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Dual Chop',
      pp: 15,
      priority: 0,
      shortDesc: 'Hits 2 times in one turn.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'dynamicpunch',
    {
      accuracy: 50,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 100% chance to confuse the target.',
      maxMovePower: 90,
      name: 'Dynamic Punch',
      pp: 5,
      priority: 0,
      shortDesc: '100% chance to confuse the target.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'dualwingbeat',
    {
      accuracy: 90,
      basePower: '40',
      category: 'Physical',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
      name: 'Dual Wingbeat',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2 times in one turn.',
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'dynamaxcannon',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      maxMovePower: 140,
      name: 'Dynamax Cannon',
      pp: 5,
      priority: 0,
      shortDesc: 'Damage doubles if the target is Dynamaxed.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'earthpower',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Earth Power',
      pp: 10,
      priority: 0,
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'earthquake',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Damage doubles if the target is using Dig.',
      maxMovePower: 130,
      name: 'Earthquake',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits adjacent Pokémon. Power doubles on Dig.',
      target: 'All Adjacent',
      type: 'Ground',
      aliases: ['eq']
    }
  ],
  [
    'echoedvoice',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 90,
      name: 'Echoed Voice',
      pp: 15,
      priority: 0,
      shortDesc: 'Power increases when used on consecutive turns.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'eerieimpulse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Lowers the target's Special Attack by 2 stages.",
      name: 'Eerie Impulse',
      pp: 15,
      priority: 0,
      shortDesc: "Lowers the target's Sp. Atk by 2.",
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'eeriespell',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'If this move is successful and the user has not fainted, the target loses 3 PP from its last move.',
      name: 'Eerie Spell',
      pp: 5,
      priority: 0,
      shortDesc: "Removes 3 PP from the target's last move.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'eggbomb',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cute',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      name: 'Egg Bomb',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'electricterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokémon is multiplied by 1.3 and grounded Pokémon cannot fall asleep; Pokémon already asleep do not wake up. Grounded Pokémon cannot become affected by Yawn or fall asleep from its effect. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.',
      name: 'Electric Terrain',
      pp: 10,
      priority: 0,
      shortDesc: "5 turns. Grounded: +Electric power, can't sleep.",
      target: 'All',
      type: 'Electric'
    }
  ],
  [
    'electrify',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Electrify',
      pp: 20,
      priority: 0,
      shortDesc: "Changes the target's move to Electric this turn.",
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'electroball',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Electro Ball',
      pp: 10,
      priority: 0,
      shortDesc: 'More power the faster the user is than the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'electroweb',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 110,
      name: 'Electroweb',
      pp: 15,
      priority: 0,
      shortDesc: '100% chance to lower the foe(s) Speed by 1.',
      target: 'Adjacent Foes',
      type: 'Electric'
    }
  ],
  [
    'embargo',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Embargo',
      pp: 15,
      priority: 0,
      shortDesc: "For 5 turns, the target's item has no effect.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'ember',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cute',
      desc: 'Has a 10% chance to burn the target.',
      maxMovePower: 90,
      name: 'Ember',
      pp: 25,
      priority: 0,
      shortDesc: '10% chance to burn the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'encore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, if the move is Assist, Copycat, Dynamax Cannon, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, or Transform, or if the target is Dynamaxed.',
      name: 'Encore',
      pp: 5,
      priority: 0,
      shortDesc: 'The target repeats its last move for 3 turns.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'endeavor',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Endeavor',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the target's HP to the user's HP.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'endure',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "The user will survive attacks made by other Pokémon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Endure',
      pp: 10,
      priority: 4,
      shortDesc: 'The user survives the next hit with at least 1 HP.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'energyball',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Energy Ball',
      pp: 10,
      priority: 0,
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'entrainment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode, or the same Ability as the user, or if the user's Ability is As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, or Zen Mode.",
      name: 'Entrainment',
      pp: 15,
      priority: 0,
      shortDesc: "The target's Ability changes to match the user's.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'eruption',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 150,
      name: 'Eruption',
      pp: 5,
      priority: 0,
      shortDesc: "Less power as user's HP decreases. Hits foe(s).",
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'esperwing',
    {
      accuracy: 90,
      basePower: '75',
      category: 'Physical',
      desc: "The user slashes the target with aura-enriched wings. This also raises the user's action speed. This move has a heightened chance of landing a critical hit",
      name: 'Esper Wing',
      pp: 10,
      priority: 0,
      shortDesc: "High critical hit chance. Raises user's action speed",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'eternabeam',
    {
      accuracy: 90,
      basePower: '160',
      category: 'Special',
      desc: 'If this move is successful, the user must recharge on the following turn and cannot select a move.',
      maxMovePower: 150,
      name: 'Eternabeam',
      pp: 10,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'expandingforce',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'If the current terrain is Psychic Terrain and the user is grounded, this move hits all opposing Pokémon and has its power multiplied by 1.5.',
      name: 'Expanding Force',
      pp: 10,
      priority: 0,
      shortDesc: 'User on Psychic Terrain: 1.5x power, hits foes.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'explosion',
    {
      accuracy: 100,
      basePower: '250',
      category: 'Physical',
      contestType: 'Beautiful',
      maxMovePower: 150,
      name: 'Explosion',
      pp: 5,
      priority: 0,
      shortDesc: 'Hits adjacent Pokémon. The user faints.',
      target: 'All Adjacent',
      type: 'Normal'
    }
  ],
  [
    'extrasensory',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 10% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Extrasensory',
      pp: 20,
      priority: 0,
      shortDesc: '10% chance to make the target flinch.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'extremeevoboost',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      isNonstandard: 'Past',
      isZ: 'eeviumz',
      name: 'Extreme Evoboost',
      pp: 1,
      priority: 0,
      shortDesc: "Raises user's Atk, Def, SpA, SpD, and Spe by 2.",
      target: 'Self',
      type: 'Normal',
      aliases: ['ee', 'extreme', 'zeevee', 'zevo', 'zlastresort']
    }
  ],
  [
    'extremespeed',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Extreme Speed',
      pp: 5,
      priority: 2,
      shortDesc: 'Nearly always goes first.',
      target: 'Normal',
      type: 'Normal',
      aliases: ['espeed']
    }
  ],
  [
    'facade',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 120,
      name: 'Facade',
      pp: 20,
      priority: 0,
      shortDesc: 'Power doubles if user is burn/poison/paralyzed.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'fairylock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Prevents all active Pokémon from switching next turn. A Pokémon can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. Fails if the effect is already active.',
      name: 'Fairy Lock',
      pp: 10,
      priority: 0,
      shortDesc: 'Prevents all Pokémon from switching next turn.',
      target: 'All',
      type: 'Fairy'
    }
  ],
  [
    'fairywind',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Fairy Wind',
      pp: 30,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'fakeout',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
      maxMovePower: 90,
      name: 'Fake Out',
      pp: 10,
      priority: 3,
      shortDesc: 'Hits first. First turn out only. 100% flinch chance.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'faketears',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Special Defense by 2 stages.",
      name: 'Fake Tears',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Sp. Def by 2.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'falsesurrender',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      maxMovePower: 130,
      name: 'False Surrender',
      pp: 10,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'falseswipe',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Leaves the target with at least 1 HP.',
      maxMovePower: 90,
      name: 'False Swipe',
      pp: 40,
      priority: 0,
      shortDesc: 'Always leaves the target with at least 1 HP.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'featherdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Lowers the target's Attack by 2 stages.",
      name: 'Feather Dance',
      pp: 15,
      priority: 0,
      shortDesc: "Lowers the target's Attack by 2.",
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'feint',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 90,
      name: 'Feint',
      pp: 10,
      priority: 2,
      shortDesc: 'Nullifies Detect, Protect, and Quick/Wide Guard.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'feintattack',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'This move does not check accuracy.',
      isNonstandard: 'Past',
      name: 'Feint Attack',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Dark',
      aliases: ['faintattack']
    }
  ],
  [
    'fellstinger',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 100,
      name: 'Fell Stinger',
      pp: 25,
      priority: 0,
      shortDesc: "Raises user's Attack by 3 if this KOes the target.",
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'fierydance',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 50% chance to raise the user's Special Attack by 1 stage.",
      maxMovePower: 130,
      name: 'Fiery Dance',
      pp: 10,
      priority: 0,
      shortDesc: "50% chance to raise the user's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'fierywrath',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 20% chance to make the target flinch.',
      name: 'Fiery Wrath',
      pp: 10,
      priority: 0,
      shortDesc: '20% chance to make the foe(s) flinch.',
      target: 'Adjacent Foes',
      type: 'Dark'
    }
  ],
  [
    'finalgambit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Final Gambit',
      pp: 5,
      priority: 0,
      shortDesc: "Does damage equal to the user's HP. User faints.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'fireblast',
    {
      accuracy: 85,
      basePower: '110',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to burn the target.',
      maxMovePower: 140,
      name: 'Fire Blast',
      pp: 5,
      priority: 0,
      shortDesc: '10% chance to burn the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'firefang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 10% chance to burn the target and a 10% chance to make it flinch.',
      maxMovePower: 120,
      name: 'Fire Fang',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to burn. 10% chance to flinch.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'firelash',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Fire Lash',
      pp: 15,
      priority: 0,
      shortDesc: "100% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'firepledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "If one of the user's allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Fire Gem.",
      maxMovePower: 130,
      name: 'Fire Pledge',
      pp: 10,
      priority: 0,
      shortDesc: 'Use with Grass or Water Pledge for added effect.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'firepunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 10% chance to burn the target.',
      maxMovePower: 130,
      name: 'Fire Punch',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to burn the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'firespin',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 90,
      name: 'Fire Spin',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'firstimpression',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Fails unless it is the user's first turn on the field.",
      maxMovePower: 130,
      name: 'First Impression',
      pp: 10,
      priority: 2,
      shortDesc: 'Hits first. First turn out only.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'fishiousrend',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: 'Power doubles if the user moves before the target.',
      maxMovePower: 130,
      name: 'Fishious Rend',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if user moves before the target.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'fissure',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Fissure',
      pp: 5,
      priority: 0,
      shortDesc: 'OHKOs the target. Fails if user is a lower level.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'flail',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cute',
      desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
      maxMovePower: 130,
      name: 'Flail',
      pp: 15,
      priority: 0,
      shortDesc: 'More power the less HP the user has left.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'flameburst',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      contestType: 'Beautiful',
      isNonstandard: 'Past',
      name: 'Flame Burst',
      pp: 15,
      priority: 0,
      shortDesc: 'Damages Pokémon next to the target as well.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'flamecharge',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
      maxMovePower: 100,
      name: 'Flame Charge',
      pp: 20,
      priority: 0,
      shortDesc: "100% chance to raise the user's Speed by 1.",
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'flamewheel',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to burn the target.',
      maxMovePower: 110,
      name: 'Flame Wheel',
      pp: 25,
      priority: 0,
      shortDesc: '10% chance to burn the target. Thaws user.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'flamethrower',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to burn the target.',
      maxMovePower: 130,
      name: 'Flamethrower',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to burn the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'flareblitz',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 140,
      name: 'Flare Blitz',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 33% recoil. 10% chance to burn. Thaws user.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'flash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Lowers the target's accuracy by 1 stage.",
      isFieldMove:
        'The Pokémon is able to light up dark caverns. Flash is taught to Pokémon with HM05 in the first three generations, and with TM70 since Generation IV.',
      isNonstandard: 'Past',
      name: 'Flash',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's accuracy by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'flashcannon',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Flash Cannon',
      pp: 10,
      priority: 0,
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'flatter',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Raises the target's Special Attack by 1 stage and confuses it.",
      name: 'Flatter',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the target's Sp. Atk by 1 and confuses it.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'fleurcannon',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Lowers the user's Special Attack by 2 stages.",
      maxMovePower: 140,
      name: 'Fleur Cannon',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'fling',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 100,
      name: 'Fling',
      pp: 10,
      priority: 0,
      shortDesc: "Flings the user's item at the target. Power varies.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'flipturn',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.',
      name: 'Flip Turn',
      pp: 20,
      priority: 0,
      shortDesc: 'User switches out after damaging the target.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'floatyfall',
    {
      accuracy: 95,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 30% chance to make the target flinch.',
      name: 'Floaty Fall',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'floralhealing',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Floral Healing',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the target by 50% of its max HP.',
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'flowershield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Flower Shield',
      pp: 10,
      priority: 0,
      shortDesc: 'Raises Defense by 1 of all active Grass types.',
      target: 'All',
      type: 'Fairy'
    }
  ],
  [
    'fly',
    {
      accuracy: 95,
      basePower: '90',
      category: 'Physical',
      contestType: 'Clever',
      isFieldMove:
        'The Pokémon can fly the player to any previously visited town/landmark. Fly can be taught to Pokémon with HM02 in all generations.',
      maxMovePower: 130,
      name: 'Fly',
      pp: 15,
      priority: 0,
      shortDesc: 'Flies up on first turn, then strikes the next turn.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'flyingpress',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 90,
      name: 'Flying Press',
      pp: 10,
      priority: 0,
      shortDesc: 'Combines Flying in its type effectiveness.',
      target: 'Any',
      type: 'Fighting',
      zMovePower: 170
    }
  ],
  [
    'focusblast',
    {
      accuracy: 70,
      basePower: '120',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 95,
      name: 'Focus Blast',
      pp: 5,
      priority: 0,
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'focusenergy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Focus Energy',
      pp: 30,
      priority: 0,
      shortDesc: "Raises the user's critical hit ratio by 2.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'focuspunch',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Focus Punch',
      pp: 20,
      priority: -3,
      shortDesc: 'Fails if the user takes damage before it hits.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'followme',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Follow Me',
      pp: 20,
      priority: 2,
      shortDesc: "The foes' moves target the user on the turn used.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'forcepalm',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 30% chance to paralyze the target.',
      maxMovePower: 80,
      name: 'Force Palm',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to paralyze the target.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'foresight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Foresight',
      pp: 40,
      priority: 0,
      shortDesc: 'Fighting, Normal hit Ghost. Evasiveness ignored.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'forestscurse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: "Forest's Curse",
      pp: 20,
      priority: 0,
      shortDesc: "Adds Grass to the target's type(s).",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'foulplay',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Foul Play',
      pp: 15,
      priority: 0,
      shortDesc: "Uses target's Attack stat in damage calculation.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'freezeshock',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Physical',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Freeze Shock',
      pp: 5,
      priority: 0,
      shortDesc: 'Charges turn 1. Hits turn 2. 30% paralyze.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'freezedry',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 120,
      name: 'Freeze-Dry',
      pp: 20,
      priority: 0,
      shortDesc: '10% chance to freeze. Super effective on Water.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'freezingglare',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 10% chance to freeze the target.',
      name: 'Freezing Glare',
      pp: 10,
      priority: 0,
      shortDesc: '10% chance to freeze the target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'freezyfrost',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Special',
      contestType: 'Clever',
      desc: 'Resets the stat stages of all active Pokémon to 0.',
      name: 'Freezy Frost',
      pp: 20,
      priority: 0,
      shortDesc: 'Eliminates all stat changes.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'frenzyplant',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 150,
      name: 'Frenzy Plant',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'frostbreath',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 110,
      name: 'Frost Breath',
      pp: 10,
      priority: 0,
      shortDesc: 'Always results in a critical hit.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'frustration',
    {
      accuracy: 100,
      basePower: "(255 - user's Happiness) * 2/5",
      category: 'Physical',
      contestType: 'Cute',
      desc: "Power is equal to the greater of ((255 - user's Happiness) * 2/5), rounded down, or 1.",
      isNonstandard: 'Past',
      name: 'Frustration',
      pp: 20,
      priority: 0,
      shortDesc: 'Max 102 power at minimum Happiness.',
      target: 'Normal',
      type: 'Normal',
      zMovePower: 160
    }
  ],
  [
    'furyattack',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 90,
      name: 'Fury Attack',
      pp: 20,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'furycutter',
    {
      accuracy: 95,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 90,
      name: 'Fury Cutter',
      pp: 20,
      priority: 0,
      shortDesc: 'Power doubles with each hit, up to 160.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'furyswipes',
    {
      accuracy: 80,
      basePower: '18',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 100,
      name: 'Fury Swipes',
      pp: 15,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'fusionbolt',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Fusion Bolt',
      pp: 5,
      priority: 0,
      shortDesc: 'Power doubles if used after Fusion Flare this turn.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'fusionflare',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Fusion Flare',
      pp: 5,
      priority: 0,
      shortDesc: 'Power doubles if used after Fusion Bolt this turn.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'futuresight',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 140,
      name: 'Future Sight',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits two turns after being used.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'gastroacid',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
      name: 'Gastro Acid',
      pp: 10,
      priority: 0,
      shortDesc: "Nullifies the target's Ability.",
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'geargrind',
    {
      accuracy: 85,
      basePower: '50',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Gear Grind',
      pp: 15,
      priority: 0,
      shortDesc: 'Hits 2 times in one turn.',
      target: 'Normal',
      type: 'Steel',
      zMovePower: 180
    }
  ],
  [
    'gearup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Gear Up',
      pp: 20,
      priority: 0,
      shortDesc: 'Raises Atk, Sp. Atk of allies with Plus/Minus by 1.',
      target: "Ally's Side",
      type: 'Steel'
    }
  ],
  [
    'genesissupernova',
    {
      accuracy: 100,
      basePower: '185',
      category: 'Special',
      contestType: 'Cool',
      desc: 'The terrain becomes Psychic Terrain.',
      isNonstandard: 'Past',
      isZ: 'mewniumz',
      name: 'Genesis Supernova',
      pp: 1,
      priority: 0,
      shortDesc: 'Summons Psychic Terrain.',
      target: 'Normal',
      type: 'Psychic',
      aliases: ['genesis', 'gs', 'zmew']
    }
  ],
  [
    'geomancy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Geomancy',
      pp: 10,
      priority: 0,
      shortDesc: 'Charges, then raises SpA, SpD, Spe by 2 turn 2.',
      target: 'Self',
      type: 'Fairy'
    }
  ],
  [
    'gigadrain',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Giga Drain',
      pp: 10,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'gigaimpact',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 150,
      name: 'Giga Impact',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'gigavolthavoc',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'electriumz',
      name: 'Gigavolt Havoc',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Electric',
      aliases: ['zelectric']
    }
  ],
  [
    'glaciallance',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Physical',
      desc: 'No additional effect.',
      name: 'Glacial Lance',
      pp: 5,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'glaciate',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 120,
      name: 'Glaciate',
      pp: 10,
      priority: 0,
      shortDesc: '100% chance to lower the foe(s) Speed by 1.',
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'glare',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: 'Paralyzes the target.',
      name: 'Glare',
      pp: 30,
      priority: 0,
      shortDesc: 'Paralyzes the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'glitzyglow',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Special',
      contestType: 'Clever',
      desc: 'This move summons Light Screen for 5 turns upon use.',
      name: 'Glitzy Glow',
      pp: 15,
      priority: 0,
      shortDesc: 'Summons Light Screen.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'gmaxbefuddle',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side either falls asleep, becomes poisoned, or becomes paralyzed, even if they have a substitute.",
      isGMax: 'Butterfree',
      name: 'G-Max Befuddle',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: slp or psn or par.',
      target: 'Adjacent Foes',
      type: 'Bug'
    }
  ],
  [
    'gmaxcannonade',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Water-type Pokémon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
      isGMax: 'Blastoise',
      name: 'G-Max Cannonade',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'gmaxcentiferno',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
      isGMax: 'Centiskorch',
      name: 'G-Max Centiferno',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: bound 4-5 turns.',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'gmaxchistrike',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the user's side has their critical hit ratio raised by 1 stage, even if they have a substitute.",
      isGMax: 'Machamp',
      name: 'G-Max Chi Strike',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: Crit Ratio +1.',
      target: 'Adjacent Foes',
      type: 'Fighting'
    }
  ],
  [
    'gmaxcuddle',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side becomes infatuated, even if they have a substitute. This effect does not happen for a target if both it and the user are the same gender, if either is genderless, or if the target is already infatuated.",
      isGMax: 'Eevee',
      name: 'G-Max Cuddle',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: infatuated.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'gmaxdepletion',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side loses 2 PP from its last move used, even if they have a substitute.",
      isGMax: 'Duraludon',
      name: 'G-Max Depletion',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: last move -2 PP.',
      target: 'Adjacent Foes',
      type: 'Dragon'
    }
  ],
  [
    'gmaxdrumsolo',
    {
      accuracy: 100,
      basePower: '160',
      category: 'Physical',
      desc: "Power is 160 regardless of the base move's Max Move power. This move and its effects ignore the Abilities of other Pokémon.",
      isGMax: 'Rillaboom',
      name: 'G-Max Drum Solo',
      pp: 5,
      priority: 0,
      shortDesc: 'Always 160 power. Ignores Abilities.',
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'gmaxfinale',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the user's side restores 1/6 of its current maximum HP, even if they have a substitute.",
      isGMax: 'Alcremie',
      name: 'G-Max Finale',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: +1/6 max HP.',
      target: 'Adjacent Foes',
      type: 'Fairy'
    }
  ],
  [
    'gmaxtartness',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the evasiveness of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute.",
      isGMax: 'Flapple',
      name: 'G-Max Tartness',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1 evasiveness.',
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'gmaxvinelash',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Grass-type Pokémon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
      isGMax: 'Venusaur',
      name: 'G-Max Vine Lash',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'gmaxvolcalith',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Rock-type Pokémon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
      isGMax: 'Coalossal',
      name: 'G-Max Volcalith',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      target: 'Adjacent Foes',
      type: 'Ghost'
    }
  ],
  [
    'gmaxvoltcrash',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side becomes paralyzed, even if they have a substitute.",
      isGMax: 'Pikachu',
      name: 'G-Max Volt Crash',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: paralyzed.',
      target: 'Adjacent Foes',
      type: 'Electric'
    }
  ],
  [
    'gmaxwildfire',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Fire-type Pokémon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
      isGMax: 'Charizard',
      name: 'G-Max Wildfire',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'gmaxwindrage',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain end, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, G-Max Steelsurge, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of G-Max Steelsurge, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side.",
      isGMax: 'Corviknight',
      name: 'G-Max Wind Rage',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Ends Terrain, hazards.',
      target: 'Adjacent Foes',
      type: 'Flying'
    }
  ],
  [
    'gmaxfireball',
    {
      accuracy: 100,
      basePower: '160',
      category: 'Physical',
      desc: "Power is 160 regardless of the base move's Max Move power. This move and its effects ignore the Abilities of other Pokémon.",
      isGMax: 'Cinderace',
      name: 'G-Max Fireball',
      pp: 5,
      priority: 0,
      shortDesc: 'Always 160 power. Ignores Abilities.',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'gmaxfoamburst',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokémon on the opposing side is lowered by 2 stages, even if they have a substitute.",
      isGMax: 'Kingler',
      name: 'G-Max Foam Burst',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -2 Speed.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'gmaxgoldrush',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side becomes confused, even if they have a substitute.",
      isGMax: 'Meowth',
      name: 'G-Max Gold Rush',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: confused.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'gmaxgravitas',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Gravity begins.",
      isGMax: 'Orbeetle',
      name: 'G-Max Gravitas',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Gravity.',
      target: 'Adjacent Foes',
      type: 'Psychic'
    }
  ],
  [
    'gmaxhydrosnipe',
    {
      accuracy: 100,
      basePower: '160',
      category: 'Physical',
      desc: "Power is 160 regardless of the base move's Max Move power. This move and its effects ignore the Abilities of other Pokémon.",
      isGMax: 'Inteleon',
      name: 'G-Max Hydrosnipe',
      pp: 5,
      priority: 0,
      shortDesc: 'Always 160 power. Ignores Abilities.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'gmaxmalodor',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side becomes poisoned, even if they have a substitute.",
      isGMax: 'Garbodor',
      name: 'G-Max Malodor',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: poisoned.',
      target: 'Adjacent Foes',
      type: 'Poison'
    }
  ],
  [
    'gmaxmeltdown',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Torment begins for each Pokémon on the opposing side, even if they have a substitute.",
      isGMax: 'Melmetal',
      name: 'G-Max Meltdown',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: Tormented.',
      target: 'Adjacent Foes',
      type: 'Steel'
    }
  ],
  [
    'gmaxstonesurge',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokémon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokémon uses Rapid Spin or Defog successfully, or is hit by Defog.",
      isGMax: 'Drednaw',
      name: 'G-Max Stonesurge',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: Stealth Rock.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'gmaxstunshock',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side either becomes poisoned or paralyzed, even if they have a substitute.",
      isGMax: 'Toxtricity',
      name: 'G-Max Stun Shock',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: psn or par.',
      target: 'Adjacent Foes',
      type: 'Electric'
    }
  ],
  [
    'gmaxsweetness',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the user's side has its status condition cured, even if they have a substitute.",
      isGMax: 'Toxtricity',
      name: 'G-Max Sweetness',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: status cured.',
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'gmaxterror',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side is prevented from switching out, even if they have a substitute. They can still switch out if they are holding Shed Shell or use Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If a target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
      isGMax: 'Gengar',
      name: 'G-Max Terror',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: trapped.',
      target: 'Adjacent Foes',
      type: 'Ghost'
    }
  ],
  [
    'gmaxoneblow',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. This move bypasses all protection effects, including Max Guard.",
      isGMax: 'Urshifu',
      name: 'G-Max One Blow',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Bypasses Max Guard.',
      target: 'Adjacent Foes',
      type: 'Dark'
    }
  ],
  [
    'gmaxrapidflow',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. This move bypasses all protection effects, including Max Guard.",
      isGMax: 'Urshifu-Rapid-Strike',
      name: 'G-Max Rapid Flow',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Bypasses Max Guard.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'gmaxreplenish',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, there is a 50% chance every Pokémon on the user's side has its Berry restored, even if they have a substitute.",
      isGMax: 'Snorlax',
      name: 'G-Max Replenish',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. 50% restores Berries.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'gmaxresonance',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Aurora Veil begins on the user's side.",
      isGMax: 'Lapras',
      name: 'G-Max Resonance',
      pp: 10,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: Aurora Veil.',
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'gmaxsandblast',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side is prevented from switching out, even if they have a substitute. They can still switch out if they are holding Shed Shell or use Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If a target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
      isGMax: 'Sandaconda',
      name: 'G-Max Sandblast',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: trapped.',
      target: 'Adjacent Foes',
      type: 'Ground'
    }
  ],
  [
    'gmaxsmite',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side becomes confused, even if they have a substitute.",
      isGMax: 'Hatterene',
      name: 'G-Max Smite',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: confused.',
      target: 'Adjacent Foes',
      type: 'Fairy'
    }
  ],
  [
    'gmaxsnooze',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, there is a 50% chance the effect of Yawn begins on the target, even if it has a substitute.",
      isGMax: 'Grimmsnarl',
      name: 'G-Max Snooze',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Target: 50% Yawn.',
      target: 'Adjacent Foes',
      type: 'Fairy'
    }
  ],
  [
    'gmaxsteelsurge',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokémon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Steel type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokémon uses Rapid Spin or Defog successfully, or is hit by Defog.",
      isGMax: 'Copperajah',
      name: 'G-Max Steelsurge',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: Steel hazard.',
      target: 'Adjacent Foes',
      type: 'Steel'
    }
  ],
  [
    'grassknot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Cute',
      maxMovePower: 130,
      name: 'Grass Knot',
      pp: 20,
      priority: 0,
      shortDesc: 'More power the heavier the target.',
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'grasspledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "If one of the user's allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokémon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Grass Gem.",
      maxMovePower: 130,
      name: 'Grass Pledge',
      pp: 10,
      priority: 0,
      shortDesc: 'Use with Fire or Water Pledge for added effect.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'grasswhistle',
    {
      accuracy: 55,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Causes the target to fall asleep.',
      isNonstandard: 'Past',
      name: 'Grass Whistle',
      pp: 15,
      priority: 0,
      shortDesc: 'Puts the target to sleep.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'grassyglide',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'If the current terrain is Grassy Terrain and the user is grounded, this move has its priority increased by 1.',
      name: 'Grassy Glide',
      pp: 20,
      priority: 0,
      shortDesc: 'User on Grassy Terrain: +1 priority.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'grassyterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokémon is multiplied by 1.3, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokémon is multiplied by 0.5, and grounded Pokémon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.',
      name: 'Grassy Terrain',
      pp: 10,
      priority: 0,
      shortDesc: '5 turns. Grounded: +Grass power,+1/16 max HP.',
      target: 'All',
      type: 'Grass'
    }
  ],
  [
    'gravapple',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Defense by 1 stage. Power is multiplied by 1.5 during Gravity's effect.",
      maxMovePower: 130,
      name: 'Grav Apple',
      pp: 10,
      priority: 0,
      shortDesc: 'Target: 100% -1 Def. During Gravity: 1.5x power.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'gravity',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Gravity',
      pp: 5,
      priority: 0,
      shortDesc: '5 turns: no Ground immunities, 1.67x accuracy.',
      target: 'All',
      type: 'Psychic'
    }
  ],
  [
    'growl',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Attack by 1 stage.",
      name: 'Growl',
      pp: 40,
      priority: 0,
      shortDesc: 'Lowers the foe(s) Attack by 1.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'growth',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day or Desolate Land, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sunny Day or Desolate Land.",
      name: 'Growth',
      pp: 20,
      priority: 0,
      shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sun.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'grudge',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Grudge',
      pp: 5,
      priority: 0,
      shortDesc: 'If the user faints, the attack used loses all its PP.',
      target: 'Self',
      type: 'Ghost'
    }
  ],
  [
    'guardsplit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Guard Split',
      pp: 10,
      priority: 0,
      shortDesc: 'Averages Defense and Sp. Def stats with target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'guardswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Guard Swap',
      pp: 10,
      priority: 0,
      shortDesc: 'Swaps Defense and Sp. Def changes with target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'guardianofalola',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Tough',
      isNonstandard: 'Past',
      isZ: 'tapuniumz',
      name: 'Guardian of Alola',
      pp: 1,
      priority: 0,
      shortDesc: "Does damage equal to 3/4 target's current HP.",
      target: 'Normal',
      type: 'Fairy',
      aliases: ['goa', 'guardian', 'znaturesmadness', 'ztapu']
    }
  ],
  [
    'guillotine',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Guillotine',
      pp: 5,
      priority: 0,
      shortDesc: 'OHKOs the target. Fails if user is a lower level.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'gunkshot',
    {
      accuracy: 80,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to poison the target.',
      maxMovePower: 95,
      name: 'Gunk Shot',
      pp: 5,
      priority: 0,
      shortDesc: '30% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'gust',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Clever',
      desc: 'Damage doubles if the target is using Bounce, Fly, or Sky Drop.',
      maxMovePower: 90,
      name: 'Gust',
      pp: 35,
      priority: 0,
      shortDesc: 'Power doubles during Fly, Bounce, and Sky Drop.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'gyroball',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Gyro Ball',
      pp: 5,
      priority: 0,
      shortDesc: 'More power the slower the user than the target.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'hail',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Hail',
      pp: 10,
      priority: 0,
      shortDesc: 'For 5 turns, hail crashes down.',
      target: 'All',
      type: 'Ice'
    }
  ],
  [
    'hammerarm',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Lowers the user's Speed by 1 stage.",
      maxMovePower: 90,
      name: 'Hammer Arm',
      pp: 10,
      priority: 0,
      shortDesc: "Lowers the user's Speed by 1.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'happyhour',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Money falls from the sky.',
      name: 'Happy Hour',
      pp: 30,
      priority: 0,
      shortDesc: 'No competitive use.',
      target: "Ally's Side",
      type: 'Normal'
    }
  ],
  [
    'harden',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Raises the user's Defense by 1 stage.",
      name: 'Harden',
      pp: 30,
      priority: 0,
      shortDesc: "Raises the user's Defense by 1.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'haze',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'Resets the stat stages of all active Pokémon to 0.',
      name: 'Haze',
      pp: 30,
      priority: 0,
      shortDesc: 'Eliminates all stat changes.',
      target: 'All',
      type: 'Ice'
    }
  ],
  [
    'headcharge',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 140,
      name: 'Head Charge',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 1/4 recoil.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'headsmash',
    {
      accuracy: 80,
      basePower: '150',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 150,
      name: 'Head Smash',
      pp: 5,
      priority: 0,
      shortDesc: 'Has 1/2 recoil.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'headbutt',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to make the target flinch.',
      isFieldMove:
        "The Pokémon can shake a small tree which may cause a wild Pokémon to fall down. It can be taught to a Pokémon by using TM02 in Generation II. Though available as a level up move in Generation I and future generations, it only had status as a field move in Generation II and Generation IV's HeartGold and SoulSilver.",
      maxMovePower: 120,
      name: 'Headbutt',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'headlongrush',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      desc: 'The user smashes into the target in a full-body tackle. This also lowers the user’s defensive stats.',
      name: 'Headlong Rush',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's defensive stats",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'healbell',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Every Pokémon in the user's party is cured of its non-volatile status condition. Active Pokémon with the Soundproof Ability are not cured, unless they are the user.",
      name: 'Heal Bell',
      pp: 5,
      priority: 0,
      shortDesc: "Cures the user's party of all status conditions.",
      target: "Ally's Side",
      type: 'Normal'
    }
  ],
  [
    'healblock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Heal Block',
      pp: 15,
      priority: 0,
      shortDesc: 'For 5 turns, the foe(s) is prevented from healing.',
      target: 'Adjacent Foes',
      type: 'Psychic'
    }
  ],
  [
    'healorder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      isNonstandard: 'Past',
      name: 'Heal Order',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user by 50% of its max HP.',
      target: 'Self',
      type: 'Bug'
    }
  ],
  [
    'healpulse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Heal Pulse',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the target by 50% of its max HP.',
      target: 'Any',
      type: 'Psychic'
    }
  ],
  [
    'healingwish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "The user faints, and if the Pokémon brought out to replace it does not have full HP or has a non-volatile status condition, its HP is fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokémon that meets either of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokémon in its party.",
      name: 'Healing Wish',
      pp: 10,
      priority: 0,
      shortDesc: 'User faints. Next hurt Pokémon is fully healed.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'heartstamp',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cute',
      desc: 'Has a 30% chance to make the target flinch.',
      isNonstandard: 'Past',
      name: 'Heart Stamp',
      pp: 25,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'heartswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user swaps all its stat stage changes with the target.',
      name: 'Heart Swap',
      pp: 10,
      priority: 0,
      shortDesc: 'Swaps all stat changes with target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'heatcrash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Heat Crash',
      pp: 10,
      priority: 0,
      shortDesc: 'More power the heavier the user than the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'heatwave',
    {
      accuracy: 90,
      basePower: '95',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to burn the target.',
      maxMovePower: 130,
      name: 'Heat Wave',
      pp: 10,
      priority: 0,
      shortDesc: '10% chance to burn the foe(s).',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'heavyslam',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Heavy Slam',
      pp: 10,
      priority: 0,
      shortDesc: 'More power the heavier the user than the target.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'helpinghand',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Helping Hand',
      pp: 20,
      priority: 5,
      shortDesc: "One adjacent ally's move power is 1.5x this turn.",
      target: 'Adjacent Ally',
      type: 'Normal'
    }
  ],
  [
    'hex',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Clever',
      desc: 'Power doubles if the target has a non-volatile status condition.',
      maxMovePower: 120,
      name: 'Hex',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if the target has a status ailment.',
      target: 'Normal',
      type: 'Ghost',
      zMovePower: 160
    }
  ],
  [
    'hiddenpower',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Normal',
      aliases: ['hp']
    }
  ],
  [
    'hiddenpowerbug',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Bug',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Bug',
      aliases: ['hpbug']
    }
  ],
  [
    'hiddenpowerdark',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Dark',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Dark',
      aliases: ['hpdark']
    }
  ],
  [
    'hiddenpowerdragon',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Dragon',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Dragon',
      aliases: ['hpdragon']
    }
  ],
  [
    'hiddenpowerelectric',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Electric',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Electric',
      aliases: ['hpelectric']
    }
  ],
  [
    'hiddenpowerfighting',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Fighting',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Fighting',
      aliases: ['hpfighting']
    }
  ],
  [
    'hiddenpowerfire',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Fire',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Fire',
      aliases: ['hpfire']
    }
  ],
  [
    'hiddenpowerflying',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Flying',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Flying',
      aliases: ['hpflying']
    }
  ],
  [
    'hiddenpowerghost',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Ghost',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Ghost',
      aliases: ['hpghost']
    }
  ],
  [
    'hiddenpowergrass',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Grass',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Grass',
      aliases: ['hpgrass']
    }
  ],
  [
    'hiddenpowerground',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Ground',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Ground',
      aliases: ['hpground']
    }
  ],
  [
    'hiddenpowerice',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Ice',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Ice',
      aliases: ['hpice']
    }
  ],
  [
    'hiddenpowerpoison',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Poison',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Poison',
      aliases: ['hppoison']
    }
  ],
  [
    'hiddenpowerpsychic',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Psychic',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Psychic',
      aliases: ['hppsychic']
    }
  ],
  [
    'hiddenpowerrock',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Rock',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Rock',
      aliases: ['hprock']
    }
  ],
  [
    'hiddenpowersteel',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Steel',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Steel',
      aliases: ['hpsteel']
    }
  ],
  [
    'hiddenpowerwater',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Clever',
      desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
      isNonstandard: 'Past',
      maxMovePower: 80,
      name: 'Hidden Power Water',
      pp: 15,
      priority: 0,
      shortDesc: "Varies in type based on the user's IVs.",
      target: 'Normal',
      type: 'Water',
      aliases: ['hpwater']
    }
  ],
  [
    'highhorsepower',
    {
      accuracy: 95,
      basePower: '95',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'High Horsepower',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'highjumpkick',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 95,
      name: 'High Jump Kick',
      pp: 10,
      priority: 0,
      shortDesc: 'User is hurt by 50% of its max HP if it misses.',
      target: 'Normal',
      type: 'Fighting',
      aliases: ['hijumpkick', 'hjk']
    }
  ],
  [
    'holdback',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Leaves the target with at least 1 HP.',
      maxMovePower: 90,
      name: 'Hold Back',
      pp: 40,
      priority: 0,
      shortDesc: 'Always leaves the target with at least 1 HP.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'holdhands',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Hold Hands',
      pp: 40,
      priority: 0,
      shortDesc: 'No competitive use. Or any use.',
      target: 'Adjacent Ally',
      type: 'Normal'
    }
  ],
  [
    'honeclaws',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Raises the user's Attack and accuracy by 1 stage.",
      name: 'Hone Claws',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the user's Attack and accuracy by 1.",
      target: 'Self',
      type: 'Dark'
    }
  ],
  [
    'hornattack',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 120,
      name: 'Horn Attack',
      pp: 25,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'horndrill',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Horn Drill',
      pp: 5,
      priority: 0,
      shortDesc: 'OHKOs the target. Fails if user is a lower level.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'hornleech',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Horn Leech',
      pp: 10,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'howl',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: 'Raises the Attack of the user and all allies 1 stage.',
      name: 'Howl',
      pp: 40,
      priority: 0,
      shortDesc: "Raises the user's and ally's Attack by 1.",
      target: "Ally's Side",
      type: 'Normal'
    }
  ],
  [
    'hurricane',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      contestType: 'Tough',
      desc: "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokémon holding Utility Umbrella, this move's accuracy remains at 70%.",
      maxMovePower: 140,
      name: 'Hurricane',
      pp: 10,
      priority: 0,
      shortDesc: "30% chance to confuse target. Can't miss in rain.",
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'hydrocannon',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 150,
      name: 'Hydro Cannon',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'hydropump',
    {
      accuracy: 80,
      basePower: '110',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Hydro Pump',
      pp: 5,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'hydrovortex',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'wateriumz',
      name: 'Hydro Vortex',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Water',
      aliases: ['zwater']
    }
  ],
  [
    'hyperbeam',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 150,
      name: 'Hyper Beam',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'hyperfang',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 10% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Hyper Fang',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to make the target flinch.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'hypervoice',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Hyper Voice',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'hyperspacefury',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Hyperspace Fury',
      pp: 5,
      priority: 0,
      shortDesc: "Hoopa-U: Lowers user's Def by 1; breaks protection.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'hyperspacehole',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Hyperspace Hole',
      pp: 5,
      priority: 0,
      shortDesc: "Breaks the target's protection for this turn.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'hypnosis',
    {
      accuracy: 60,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Causes the target to fall asleep.',
      name: 'Hypnosis',
      pp: 20,
      priority: 0,
      shortDesc: 'Puts the target to sleep.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'iceball',
    {
      accuracy: 90,
      basePower: '30',
      category: 'Physical',
      contestType: 'Beautiful',
      isNonstandard: 'Past',
      name: 'Ice Ball',
      pp: 20,
      priority: 0,
      shortDesc: 'Power doubles with each hit. Repeats for 5 turns.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'icebeam',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to freeze the target.',
      maxMovePower: 130,
      name: 'Ice Beam',
      pp: 10,
      priority: 0,
      shortDesc: '10% chance to freeze the target.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'iceburn',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Ice Burn',
      pp: 5,
      priority: 0,
      shortDesc: 'Charges turn 1. Hits turn 2. 30% burn.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'icefang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 10% chance to freeze the target and a 10% chance to make it flinch.',
      maxMovePower: 120,
      name: 'Ice Fang',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to freeze. 10% chance to flinch.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'icehammer',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Lowers the user's Speed by 1 stage.",
      maxMovePower: 130,
      name: 'Ice Hammer',
      pp: 10,
      priority: 0,
      shortDesc: "Lowers the user's Speed by 1.",
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'icepunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to freeze the target.',
      maxMovePower: 130,
      name: 'Ice Punch',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to freeze the target.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'iceshard',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Ice Shard',
      pp: 30,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'iciclecrash',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Icicle Crash',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'iciclespear',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 130,
      name: 'Icicle Spear',
      pp: 30,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'icywind',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 110,
      name: 'Icy Wind',
      pp: 15,
      priority: 0,
      shortDesc: '100% chance to lower the foe(s) Speed by 1.',
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'imprison',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Imprison',
      pp: 10,
      priority: 0,
      shortDesc: 'No foe can use any move known by the user.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'incinerate',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 110,
      name: 'Incinerate',
      pp: 15,
      priority: 0,
      shortDesc: 'Destroys the foe(s) Berry/Gem.',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'infernalparade',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: "The user attacks with myriad fireballs. This may also leave the target with a burn. This move's power is doubled if the target has a status condition.",
      name: 'Infernal Parade',
      pp: 15,
      priority: 0,
      shortDesc: 'Has a 30% chance to burn. Power doubled if target has status condition.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'inferno',
    {
      accuracy: 50,
      basePower: '100',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 100% chance to burn the target.',
      maxMovePower: 130,
      name: 'Inferno',
      pp: 5,
      priority: 0,
      shortDesc: '100% chance to burn the target.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'infernooverdrive',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'firiumz',
      name: 'Inferno Overdrive',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Fire',
      aliases: ['zfire']
    }
  ],
  [
    'infestation',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      contestType: 'Cute',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 90,
      name: 'Infestation',
      pp: 20,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'ingrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokémon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.',
      name: 'Ingrain',
      pp: 20,
      priority: 0,
      shortDesc: 'Traps/grounds user; heals 1/16 max HP per turn.',
      target: 'Self',
      type: 'Grass'
    }
  ],
  [
    'instruct',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is Dynamaxed, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Celebrate, Copycat, Dynamax Cannon, Focus Punch, Ice Ball, Instruct, King's Shield, Me First, Metronome, Mimic, Mirror Move, Nature Power, Obstruct, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, any two-turn move, any recharge move, any Z-Move, or any Max or G-Max Move.",
      name: 'Instruct',
      pp: 15,
      priority: 0,
      shortDesc: 'Picks a random move.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'iondeluge',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'Causes Normal-type moves to become Electric type this turn.',
      isNonstandard: 'Past',
      name: 'Ion Deluge',
      pp: 25,
      priority: 1,
      shortDesc: 'Normal moves become Electric type this turn.',
      target: 'All',
      type: 'Electric'
    }
  ],
  [
    'irondefense',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Raises the user's Defense by 2 stages.",
      name: 'Iron Defense',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the user's Defense by 2.",
      target: 'Self',
      type: 'Steel'
    }
  ],
  [
    'ironhead',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Iron Head',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'irontail',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Iron Tail',
      pp: 15,
      priority: 0,
      shortDesc: "30% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'jawlock',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.',
      maxMovePower: 130,
      name: 'Jaw Lock',
      pp: 15,
      priority: 0,
      shortDesc: 'Prevents both user and target from switching out.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'judgment',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "This move's type depends on the user's held Plate. If the user has activated the Legend Plate, automatically changes type to the type that will inflict the most damage on the opponent while making it so the user would take the last damage.",
      maxMovePower: 130,
      name: 'Judgment',
      pp: 10,
      priority: 0,
      shortDesc: 'Type varies based on the held Plate.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'jumpkick',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      name: 'Jump Kick',
      pp: 10,
      priority: 0,
      shortDesc: 'User is hurt by 50% of its max HP if it misses.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'junglehealing',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Each Pokémon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status condition cured.",
      name: 'Jungle Healing',
      pp: 10,
      priority: 0,
      shortDesc: 'User and allies: healed 1/4 max HP, status cured.',
      target: "Ally's Side",
      type: 'Grass'
    }
  ],
  [
    'karatechop',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a higher chance for a critical hit.',
      isNonstandard: 'Past',
      name: 'Karate Chop',
      pp: 25,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'kinesis',
    {
      accuracy: 80,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Lowers the target's accuracy by 1 stage.",
      name: 'Kinesis',
      pp: 15,
      priority: 0,
      shortDesc: "Lowers the target's accuracy by 1.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'kingsshield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon trying to make contact with the user have their Attack lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: "King's Shield",
      pp: 10,
      priority: 4,
      shortDesc: 'Protects from damaging attacks. Contact: -1 Atk.',
      target: 'Self',
      type: 'Steel'
    }
  ],
  [
    'knockoff',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokémon with the Pickup Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.',
      maxMovePower: 120,
      name: 'Knock Off',
      pp: 20,
      priority: 0,
      shortDesc: '1.5x damage if foe holds an item. Removes item.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'landswrath',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: "Land's Wrath",
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Ground'
    }
  ],
  [
    'laserfocus',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Laser Focus',
      pp: 30,
      priority: 0,
      shortDesc: "Next turn, the user's attack will be a critical hit.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'lashout',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: 'Power doubles if the user had a stat stage lowered this turn.',
      name: 'Lash Out',
      pp: 5,
      priority: 0,
      shortDesc: '2x power if the user had a stat lowered this turn.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'lastresort',
    {
      accuracy: 100,
      basePower: '140',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 140,
      name: 'Last Resort',
      pp: 5,
      priority: 0,
      shortDesc: 'Fails unless each known move has been used.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'lavaplume',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Has a 30% chance to burn the target.',
      maxMovePower: 130,
      name: 'Lava Plume',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to burn adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Fire'
    }
  ],
  [
    'leafblade',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Leaf Blade',
      pp: 15,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'leafstorm',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Lowers the user's Special Attack by 2 stages.",
      maxMovePower: 140,
      name: 'Leaf Storm',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'leaftornado',
    {
      accuracy: 90,
      basePower: '65',
      category: 'Special',
      contestType: 'Cool',
      desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
      maxMovePower: 120,
      name: 'Leaf Tornado',
      pp: 10,
      priority: 0,
      shortDesc: "50% chance to lower the target's accuracy by 1.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'leafage',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Leafage',
      pp: 40,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'leechlife',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Leech Life',
      pp: 10,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'leechseed',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Leech Seed',
      pp: 10,
      priority: 0,
      shortDesc: "1/8 of target's HP is restored to user every turn.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'leer',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "Lowers the target's Defense by 1 stage.",
      name: 'Leer',
      pp: 30,
      priority: 0,
      shortDesc: 'Lowers the foe(s) Defense by 1.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'letssnuggleforever',
    {
      accuracy: 100,
      basePower: '190',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      isZ: 'mimikiumz',
      name: "Let's Snuggle Forever",
      pp: 1,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Fairy',
      aliases: ['lets', 'lsf', 'zmimikyu', 'zplayrough']
    }
  ],
  [
    'lick',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      contestType: 'Cute',
      desc: 'Has a 30% chance to paralyze the target.',
      maxMovePower: 90,
      name: 'Lick',
      pp: 30,
      priority: 0,
      shortDesc: '30% chance to paralyze the target.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'lightscreen',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Light Screen',
      pp: 30,
      priority: 0,
      shortDesc: 'For 5 turns, special damage to allies is halved.',
      target: "Ally's Side",
      type: 'Psychic'
    }
  ],
  [
    'lightthatburnsthesky',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Special',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'ultranecroziumz',
      name: 'Light That Burns the Sky',
      pp: 1,
      priority: 0,
      shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
      target: 'Normal',
      type: 'Psychic',
      aliases: ['light', 'ltbts', 'znecrozma', 'zphotongeyser', 'zultranecrozma']
    }
  ],
  [
    'lifedew',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Each Pokémon on the user's side restores 1/4 of its maximum HP, rounded half up.",
      name: 'Life Dew',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user and its allies by 1/4 their max HP.',
      target: "Ally's Side",
      type: 'Water'
    }
  ],
  [
    'lightofruin',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Light of Ruin',
      pp: 5,
      priority: 0,
      shortDesc: 'Has 1/2 recoil.',
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'liquidation',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Liquidation',
      pp: 10,
      priority: 0,
      shortDesc: "20% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'lockon',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Lock-On',
      pp: 5,
      priority: 0,
      shortDesc: "User's next move will not miss the target.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'lovelykiss',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'Causes the target to fall asleep.',
      name: 'Lovely Kiss',
      pp: 10,
      priority: 0,
      shortDesc: 'Puts the target to sleep.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'lowkick',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Low Kick',
      pp: 20,
      priority: 0,
      shortDesc: 'More power the heavier the target.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'lowsweep',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      contestType: 'Clever',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 85,
      name: 'Low Sweep',
      pp: 20,
      priority: 0,
      shortDesc: "100% chance to lower the target's Speed by 1.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'luckychant',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      isNonstandard: 'Past',
      name: 'Lucky Chant',
      pp: 30,
      priority: 0,
      shortDesc: "For 5 turns, shields user's party from critical hits.",
      target: "Ally's Side",
      type: 'Normal'
    }
  ],
  [
    'lunarblessing',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user heals its own status conditions and restores its HP. Incoming moves also become more likely to miss.',
      name: 'Lunar Blessing',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals own status condition and increases evasiveness',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'lunardance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "The user faints, and if the Pokémon brought out to replace it does not have full HP or PP, or has a non-volatile status condition, its HP and PP are fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokémon that meets any of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokémon in its party.",
      name: 'Lunar Dance',
      pp: 10,
      priority: 0,
      shortDesc: 'User faints. Next hurt Pkmn is cured, max HP/PP.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'lunge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
      maxMovePower: 130,
      name: 'Lunge',
      pp: 15,
      priority: 0,
      shortDesc: "100% chance to lower the target's Attack by 1.",
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'lusterpurge',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 120,
      name: 'Luster Purge',
      pp: 5,
      priority: 0,
      shortDesc: "50% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'machpunch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 70,
      name: 'Mach Punch',
      pp: 30,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'magiccoat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Magic Coat',
      pp: 15,
      priority: 4,
      shortDesc: 'Bounces back certain non-damaging moves.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'magicpowder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to become a Psychic type. Fails if the target is an Arceus or a Silvally, or if the target is already purely Psychic type.',
      name: 'Magic Powder',
      pp: 20,
      priority: 0,
      shortDesc: "Changes the target's type to Psychic.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'magicroom',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Magic Room',
      pp: 10,
      priority: 0,
      shortDesc: 'For 5 turns, all held items have no effect.',
      target: 'All',
      type: 'Psychic'
    }
  ],
  [
    'magicalleaf',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'This move does not check accuracy.',
      maxMovePower: 110,
      name: 'Magical Leaf',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'magikarpsrevenge',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cute',
      name: "Magikarp's Revenge",
      pp: 10,
      priority: 0,
      shortDesc: "Does many things turn 1. Can't move turn 2.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'magmastorm',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 130,
      name: 'Magma Storm',
      pp: 5,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'magnetbomb',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'This move does not check accuracy.',
      name: 'Magnet Bomb',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'magnetrise',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Magnet Rise',
      pp: 10,
      priority: 0,
      shortDesc: 'For 5 turns, the user is immune to Ground moves.',
      target: 'Self',
      type: 'Electric'
    }
  ],
  [
    'magneticflux',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Magnetic Flux',
      pp: 20,
      priority: 0,
      shortDesc: 'Raises Def, Sp. Def of allies with Plus/Minus by 1.',
      target: "Ally's Side",
      type: 'Electric'
    }
  ],
  [
    'magnitude',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Magnitude',
      pp: 30,
      priority: 0,
      shortDesc: 'Hits adjacent Pokémon. Power varies; 2x on Dig.',
      target: 'All Adjacent',
      type: 'Ground'
    }
  ],
  [
    'maliciousmoonsault',
    {
      accuracy: 100,
      basePower: '180',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'inciniumz',
      name: 'Malicious Moonsault',
      pp: 1,
      priority: 0,
      shortDesc: 'Damage doubles if the target used Minimize.',
      target: 'Normal',
      type: 'Dark',
      aliases: ['malicious', 'moonsault', 'zdarkestlariat', 'zincineroar']
    }
  ],
  [
    'matblock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Mat Block',
      pp: 10,
      priority: 0,
      shortDesc: 'Protects allies from damaging attacks. Turn 1 only.',
      target: "Ally's Side",
      type: 'Fighting'
    }
  ],
  [
    'mefirst',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Me First',
      pp: 20,
      priority: 0,
      shortDesc: 'Copies a foe at 1.5x power. User must be faster.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'maxairstream',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Airstream',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: +1 Speed.',
      target: 'Adjacent Foes',
      type: 'Flying',
      aliases: ['maxflying']
    }
  ],
  [
    'maxdarkness',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Darkness',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1 Sp. Def.',
      target: 'Adjacent Foes',
      type: 'Dark',
      aliases: ['maxdark']
    }
  ],
  [
    'maxflare',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sunny Day begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Flare',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Sunny Day.',
      target: 'Adjacent Foes',
      type: 'Fire',
      aliases: ['maxfire']
    }
  ],
  [
    'maxflutterby',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Flutterby',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1 Sp. Atk.',
      target: 'Adjacent Foes',
      type: 'Bug',
      aliases: ['maxbug']
    }
  ],
  [
    'maxgeyser',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Rain Dance begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Geyser',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Rain Dance.',
      target: 'Adjacent Foes',
      type: 'Water',
      aliases: ['maxwater']
    }
  ],
  [
    'maxguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from nearly all attacks made by other Pokémon during this turn, including Max and G-Max Moves. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Max Guard',
      pp: 5,
      priority: 0,
      shortDesc: 'Protects user from moves & Max Moves this turn.',
      target: 'Self',
      type: 'Normal',
      aliases: ['maxprotect', 'maxstatus']
    }
  ],
  [
    'meanlook',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      name: 'Mean Look',
      pp: 5,
      priority: 0,
      shortDesc: 'Prevents the target from switching out.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'maxhailstorm',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Hail begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Hailstorm',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Hail.',
      target: 'Adjacent Foes',
      type: 'Ice',
      aliases: ['maxice']
    }
  ],
  [
    'maxknuckle',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Boosts the user and its allies' Attack by 1 stage. BP scales with the base move's BP. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Knuckle',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: +1 Attack.',
      target: 'Adjacent Foes',
      type: 'Fighting',
      aliases: ['maxfighting']
    }
  ],
  [
    'maxlightning',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Electric Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Lightning',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Electric Terrain.',
      target: 'Adjacent Foes',
      type: 'Electric',
      aliases: ['maxelectric']
    }
  ],
  [
    'maxmindstorm',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Psychic Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Mindstorm',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Psychic Terrain.',
      target: 'Adjacent Foes',
      type: 'Psychic',
      aliases: ['maxpsychic']
    }
  ],
  [
    'maxooze',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Ooze',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: +1 Sp. Atk.',
      target: 'Adjacent Foes',
      type: 'Poison',
      aliases: ['maxpoison']
    }
  ],
  [
    'maxovergrowth',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Grassy Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Overgrowth',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Grassy Terrain.',
      target: 'Adjacent Foes',
      type: 'Grass',
      aliases: ['maxgrass']
    }
  ],
  [
    'maxphantasm',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Phantasm',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1 Defense.',
      target: 'Adjacent Foes',
      type: 'Ghost',
      aliases: ['maxghost']
    }
  ],
  [
    'maxquake',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Quake',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: +1 Sp. Def.',
      target: 'Adjacent Foes',
      type: 'Ground',
      aliases: ['maxground']
    }
  ],
  [
    'maxrockfall',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sandstorm begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Rockfall',
      pp: 5,
      priority: 0,
      shortDesc: 'For 5 turns, a sandstorm rages. Rock: 1.5x SpD.',
      target: 'Adjacent Foes',
      type: 'Rock',
      aliases: ['maxrock']
    }
  ],
  [
    'maxstarfall',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Misty Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Starfall',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Starts Misty Terrain.',
      target: 'Adjacent Foes',
      type: 'Fairy',
      aliases: ['maxfairy']
    }
  ],
  [
    'maxsteelspike',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Steelspike',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Allies: +1 Defense.',
      target: 'Adjacent Foes',
      type: 'Steel',
      aliases: ['maxsteel']
    }
  ],
  [
    'maxstrike',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Strike',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1 Speed.',
      target: 'Adjacent Foes',
      type: 'Normal',
      aliases: ['maxnormal']
    }
  ],
  [
    'maxwyrmwind',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Attack of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
      name: 'Max Wyrmwind',
      pp: 5,
      priority: 0,
      shortDesc: 'Base move affects power. Foes: -1 Attack.',
      target: 'Adjacent Foes',
      type: 'Dragon',
      aliases: ['maxdragon']
    }
  ],
  [
    'meditate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Raises the user's Attack by 1 stage.",
      isNonstandard: 'Past',
      name: 'Meditate',
      pp: 40,
      priority: 0,
      shortDesc: "Raises the user's Attack by 1.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'megadrain',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 90,
      name: 'Mega Drain',
      pp: 15,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'Normal',
      type: 'Grass',
      zMovePower: 120
    }
  ],
  [
    'megakick',
    {
      accuracy: 75,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Mega Kick',
      pp: 5,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'megapunch',
    {
      accuracy: 85,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Mega Punch',
      pp: 20,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'megahorn',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Megahorn',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'memento',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Memento',
      pp: 10,
      priority: 0,
      shortDesc: "Lowers target's Attack, Sp. Atk by 2. User faints.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'menacingmoonrazemaelstrom',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Special',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'lunaliumz',
      name: 'Menacing Moonraze Maelstrom',
      pp: 1,
      priority: 0,
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      target: 'Normal',
      type: 'Ghost',
      aliases: ['menacing', 'mmm', 'zdawnwingsnecrozma', 'zlunala', 'zmoongeistbeam']
    }
  ],
  [
    'metalburst',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Deals damage to the last opposing Pokémon to hit the user with a physical or special attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from that attack, this move deals 1 HP of damage instead. If that opposing Pokémon's position is no longer in use and there is another opposing Pokémon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokémon's physical or special attack this turn.",
      maxMovePower: 100,
      name: 'Metal Burst',
      pp: 10,
      priority: 0,
      shortDesc: 'If hit by an attack, returns 1.5x damage.',
      target: 'Foe that last hit user',
      type: 'Steel'
    }
  ],
  [
    'metalclaw',
    {
      accuracy: 95,
      basePower: '50',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 10% chance to raise the user's Attack by 1 stage.",
      maxMovePower: 100,
      name: 'Metal Claw',
      pp: 35,
      priority: 0,
      shortDesc: "10% chance to raise the user's Attack by 1.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'metalsound',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Lowers the target's Special Defense by 2 stages.",
      name: 'Metal Sound',
      pp: 40,
      priority: 0,
      shortDesc: "Lowers the target's Sp. Def by 2.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'meteorassault',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Physical',
      desc: 'If this move is successful, the user must recharge on the following turn and cannot select a move.',
      maxMovePower: 100,
      name: 'Meteor Assault',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'meteorbeam',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Special',
      desc: "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
      name: 'Meteor Beam',
      pp: 10,
      priority: 0,
      shortDesc: "Raises user's Sp. Atk by 1 on turn 1. Hits turn 2.",
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'meteormash',
    {
      accuracy: 90,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
      maxMovePower: 130,
      name: 'Meteor Mash',
      pp: 10,
      priority: 0,
      shortDesc: "20% chance to raise the user's Attack by 1.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'metronome',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "A random move is selected for use, other than After You, Apple Acid, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Clangorous Soul, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Double Iron Bash, Dragon Ascent, Dragon Energy, Dragon Hammer, Drum Beating, Dynamax Cannon, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Obstruct, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spirit Break, Spotlight, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Transform, Trick, V-create, Wicked Blow, or Wide Guard.",
      name: 'Metronome',
      pp: 10,
      priority: 0,
      shortDesc: 'Picks a random move.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'milkdrink',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      isFieldMove:
        "Tthe Pokémon cuts some of its HP to recover another Pokémon's HP. It can be learned by Miltank, Skiddo and Gogoat by leveling up.",
      name: 'Milk Drink',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user by 50% of its max HP.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'mimic',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Behemoth Bash, Behemoth Blade, Chatter, Dynamax Cannon, Mimic, Sketch, Struggle, Transform, or any Z-Move.',
      name: 'Mimic',
      pp: 10,
      priority: 0,
      shortDesc: 'The last move the target used replaces this one.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'mindblown',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 150,
      name: 'Mind Blown',
      pp: 5,
      priority: 0,
      shortDesc: 'User loses 50% max HP. Hits adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Fire'
    }
  ],
  [
    'mindreader',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Mind Reader',
      pp: 5,
      priority: 0,
      shortDesc: "User's next move will not miss the target.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'minimize',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Minimize',
      pp: 10,
      priority: 0,
      shortDesc: "Raises the user's evasiveness by 2.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'miracleeye',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Miracle Eye',
      pp: 40,
      priority: 0,
      shortDesc: 'Psychic hits Dark. Evasiveness ignored.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'mirrorcoat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 100,
      name: 'Mirror Coat',
      pp: 20,
      priority: -5,
      shortDesc: 'If hit by special attack, returns double damage.',
      target: 'Foe that last hit user',
      type: 'Psychic'
    }
  ],
  [
    'mirrormove',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Mirror Move',
      pp: 20,
      priority: 0,
      shortDesc: "User uses the target's last used move against it.",
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'mirrorshot',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
      isNonstandard: 'Past',
      name: 'Mirror Shot',
      pp: 10,
      priority: 0,
      shortDesc: "30% chance to lower the target's accuracy by 1.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'mist',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Mist',
      pp: 30,
      priority: 0,
      shortDesc: "For 5 turns, protects user's party from stat drops.",
      target: "Ally's Side",
      type: 'Ice'
    }
  ],
  [
    'mistball',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 120,
      name: 'Mist Ball',
      pp: 5,
      priority: 0,
      shortDesc: "50% chance to lower the target's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'mistyexplosion',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokémon has the Damp Ability.",
      name: 'Misty Explosion',
      pp: 5,
      priority: 0,
      shortDesc: 'User faints. User on Misty Terrain: 1.5x power.',
      target: 'All Adjacent',
      type: 'Fairy'
    }
  ],
  [
    'mistyterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokémon is multiplied by 0.5 and grounded Pokémon cannot be inflicted with a non-volatile status condition nor confusion. Grounded Pokémon can become affected by Yawn but cannot fall asleep from its effect. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain.',
      name: 'Misty Terrain',
      pp: 10,
      priority: 0,
      shortDesc: "5 turns. Can't status,-Dragon power vs grounded.",
      target: 'All',
      type: 'Fairy'
    }
  ],
  [
    'moonblast',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Moonblast',
      pp: 15,
      priority: 0,
      shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'moongeistbeam',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Moongeist Beam',
      pp: 5,
      priority: 0,
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'moonlight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
      name: 'Moonlight',
      pp: 5,
      priority: 0,
      shortDesc: 'Heals the user by a weather-dependent amount.',
      target: 'Self',
      type: 'Fairy'
    }
  ],
  [
    'morningsun',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
      name: 'Morning Sun',
      pp: 5,
      priority: 0,
      shortDesc: 'Heals the user by a weather-dependent amount.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'mountaingale',
    {
      accuracy: 85,
      basePower: '100',
      category: 'Physical',
      name: 'Mountain Gale',
      pp: 5,
      priority: 0,
      shortDesc: 'The user hurls giant chunks of ice at the target to inflict damage.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'mudbomb',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Special',
      contestType: 'Cute',
      desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
      isNonstandard: 'Past',
      name: 'Mud Bomb',
      pp: 10,
      priority: 0,
      shortDesc: "30% chance to lower the target's accuracy by 1.",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'mudshot',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      contestType: 'Tough',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 110,
      name: 'Mud Shot',
      pp: 15,
      priority: 0,
      shortDesc: "100% chance to lower the target's Speed by 1.",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'mudsport',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      isNonstandard: 'Past',
      name: 'Mud Sport',
      pp: 15,
      priority: 0,
      shortDesc: 'For 5 turns, Electric-type attacks have 1/3 power.',
      target: 'All',
      type: 'Ground'
    }
  ],
  [
    'mudslap',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      contestType: 'Cute',
      desc: "Has a 100% chance to lower the target's accuracy by 1 stage.",
      maxMovePower: 90,
      name: 'Mud-Slap',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower the target's accuracy by 1.",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'muddywater',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Special',
      contestType: 'Tough',
      desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
      maxMovePower: 130,
      name: 'Muddy Water',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to lower the foe(s) accuracy by 1.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'multiattack',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      desc: "This move's type depends on the user's held Memory.",
      maxMovePower: 95,
      name: 'Multi-Attack',
      pp: 10,
      priority: 0,
      shortDesc: 'Type varies based on the held Memory.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'mysticalfire',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Mystical Fire',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'mysticalpower',
    {
      accuracy: 90,
      basePower: '70',
      category: 'Special',
      desc: 'The user strengthens itself with a mysterious power. If it excels in offense, its offensive stats are raised. If it excels in defense, its defensive stats are raised.',
      name: 'Mystical Power',
      pp: 10,
      priority: 0,
      shortDesc: "Offensive or Defensive stats are raised based on the user's higher stat.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'nastyplot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Raises the user's Special Attack by 2 stages.",
      name: 'Nasty Plot',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Sp. Atk by 2.",
      target: 'Self',
      type: 'Dark',
      aliases: ['np']
    }
  ],
  [
    'naturalgift',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Natural Gift',
      pp: 15,
      priority: 0,
      shortDesc: "Power and type depends on the user's Berry.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'naturepower',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Nature Power',
      pp: 20,
      priority: 0,
      shortDesc: 'Attack depends on terrain (default Tri Attack).',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'naturesmadness',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 100,
      name: "Nature's Madness",
      pp: 10,
      priority: 0,
      shortDesc: "Does damage equal to 1/2 target's current HP.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'needlearm',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Has a 30% chance to make the target flinch.',
      isNonstandard: 'Past',
      name: 'Needle Arm',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'neverendingnightmare',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'ghostiumz',
      name: 'Never-Ending Nightmare',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Ghost',
      aliases: ['zghost']
    }
  ],
  [
    'nightdaze',
    {
      accuracy: 95,
      basePower: '85',
      category: 'Special',
      contestType: 'Cool',
      desc: "Has a 40% chance to lower the target's accuracy by 1 stage.",
      maxMovePower: 130,
      name: 'Night Daze',
      pp: 10,
      priority: 0,
      shortDesc: "40% chance to lower the target's accuracy by 1.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'nightshade',
    {
      accuracy: 100,
      basePower: 'level',
      category: 'Special',
      contestType: 'Clever',
      desc: "Deals damage to the target equal to the user's level.",
      maxMovePower: 100,
      name: 'Night Shade',
      pp: 15,
      priority: 0,
      shortDesc: "Does damage equal to the user's level.",
      target: 'Normal',
      type: 'Ghost',
      zMovePower: 100
    }
  ],
  [
    'nightslash',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 120,
      name: 'Night Slash',
      pp: 15,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'nightmare',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Nightmare',
      pp: 15,
      priority: 0,
      shortDesc: 'A sleeping target is hurt by 1/4 max HP per turn.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'nobleroar',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Lowers the target's Attack and Special Attack by 1 stage.",
      name: 'Noble Roar',
      pp: 30,
      priority: 0,
      shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'noretreat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Fails if the user has already been prevented from switching by this effect.",
      name: 'No Retreat',
      pp: 5,
      priority: 0,
      shortDesc: 'Raises all stats by 1 (not acc/eva). Traps user.',
      target: 'Self',
      type: 'Fighting'
    }
  ],
  [
    'nuzzle',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      contestType: 'Cute',
      desc: 'Has a 100% chance to paralyze the target.',
      maxMovePower: 90,
      name: 'Nuzzle',
      pp: 20,
      priority: 0,
      shortDesc: '100% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'oblivionwing',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Oblivion Wing',
      pp: 10,
      priority: 0,
      shortDesc: 'User recovers 75% of the damage dealt.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'obstruct',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon trying to make contact with the user have their Defense lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Obstruct',
      pp: 10,
      priority: 4,
      shortDesc: 'Protects from damaging attacks. Contact: -2 Def.',
      target: 'Self',
      type: 'Dark'
    }
  ],
  [
    'oceanicoperetta',
    {
      accuracy: 100,
      basePower: '195',
      category: 'Special',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      isZ: 'primariumz',
      name: 'Oceanic Operetta',
      pp: 1,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Water',
      aliases: ['oceanic', 'oo', 'zprimarina', 'zsparklingaria']
    }
  ],
  [
    'octazooka',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Special',
      contestType: 'Tough',
      desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
      maxMovePower: 120,
      name: 'Octazooka',
      pp: 10,
      priority: 0,
      shortDesc: "50% chance to lower the target's accuracy by 1.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'octolock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Prevents the target from switching out. At the end of each turn during effect, the target's Defense and Special Defense are lowered by 1 stage. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
      name: 'Octolock',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps target, lowers Def and SpD by 1 each turn.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'odorsleuth',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Odor Sleuth',
      pp: 40,
      priority: 0,
      shortDesc: 'Fighting, Normal hit Ghost. Evasiveness ignored.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'ominouswind',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Beautiful',
      isNonstandard: 'Past',
      name: 'Ominous Wind',
      pp: 5,
      priority: 0,
      shortDesc: '10% chance to raise all stats by 1 (not acc/eva).',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'originpulse',
    {
      accuracy: 85,
      basePower: '110',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Origin Pulse',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'outrage',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 140,
      name: 'Outrage',
      pp: 10,
      priority: 0,
      shortDesc: 'Lasts 2-3 turns. Confuses the user afterwards.',
      target: 'Random',
      type: 'Dragon'
    }
  ],
  [
    'overdrive',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      maxMovePower: 130,
      name: 'Overdrive',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits foe(s).',
      target: 'Adjacent Foes',
      type: 'Electric'
    }
  ],
  [
    'overheat',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Lowers the user's Special Attack by 2 stages.",
      maxMovePower: 140,
      name: 'Overheat',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'painsplit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Pain Split',
      pp: 20,
      priority: 0,
      shortDesc: 'Shares HP of user and target equally.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'paleowave',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Has a 20% chance to lower the target's Attack by 1 stage.",
      name: 'Paleo Wave',
      pp: 15,
      priority: 0,
      shortDesc: "20% chance to lower the target's Attack by 1.",
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'paraboliccharge',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 120,
      name: 'Parabolic Charge',
      pp: 20,
      priority: 0,
      shortDesc: 'User recovers 50% of the damage dealt.',
      target: 'All Adjacent',
      type: 'Electric'
    }
  ],
  [
    'partingshot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Parting Shot',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers target's Atk, Sp. Atk by 1. User switches.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'payday',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Pay Day',
      pp: 20,
      priority: 0,
      shortDesc: 'Scatters coins.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'payback',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Payback',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if the user moves after the target.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'peck',
    {
      accuracy: 100,
      basePower: '35',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Peck',
      pp: 35,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'perishsong',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Perish Song',
      pp: 5,
      priority: 0,
      shortDesc: 'All active Pokémon will faint in 3 turns.',
      target: 'All',
      type: 'Normal'
    }
  ],
  [
    'petalblizzard',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Petal Blizzard',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Grass'
    }
  ],
  [
    'petaldance',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Petal Dance',
      pp: 10,
      priority: 0,
      shortDesc: 'Lasts 2-3 turns. Confuses the user afterwards.',
      target: 'Random',
      type: 'Grass'
    }
  ],
  [
    'phantomforce',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Phantom Force',
      pp: 10,
      priority: 0,
      shortDesc: 'Disappears turn 1. Hits turn 2. Breaks protection.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'photongeyser',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Photon Geyser',
      pp: 5,
      priority: 0,
      shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'pikapapow',
    {
      accuracy: 100,
      basePower: '(happiness * 10) / 25',
      category: 'Special',
      contestType: 'Cute',
      name: 'Pika Papow',
      pp: 20,
      priority: 0,
      shortDesc: "Max happiness: 102 power. Can't miss.",
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'pinmissile',
    {
      accuracy: 95,
      basePower: '25',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 130,
      name: 'Pin Missile',
      pp: 20,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'plasmafists',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Plasma Fists',
      pp: 15,
      priority: 0,
      shortDesc: 'Normal moves become Electric type this turn.',
      target: 'Normal',
      type: 'Electric',
      aliases: ['pfists']
    }
  ],
  [
    'playnice',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Attack by 1 stage.",
      name: 'Play Nice',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Attack by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'playrough',
    {
      accuracy: 90,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
      maxMovePower: 130,
      name: 'Play Rough',
      pp: 10,
      priority: 0,
      shortDesc: "10% chance to lower the target's Attack by 1.",
      target: 'Normal',
      type: 'Fairy',
      aliases: ['playaround']
    }
  ],
  [
    'pluck',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 110,
      name: 'Pluck',
      pp: 20,
      priority: 0,
      shortDesc: "User steals and eats the target's Berry.",
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'poisonfang',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Has a 50% chance to badly poison the target.',
      maxMovePower: 75,
      name: 'Poison Fang',
      pp: 15,
      priority: 0,
      shortDesc: '50% chance to badly poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'poisongas',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Poisons the target.',
      name: 'Poison Gas',
      pp: 40,
      priority: 0,
      shortDesc: 'Poisons the foe(s).',
      target: 'Adjacent Foes',
      type: 'Poison'
    }
  ],
  [
    'poisonjab',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to poison the target.',
      maxMovePower: 90,
      name: 'Poison Jab',
      pp: 20,
      priority: 0,
      shortDesc: '30% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'poisonpowder',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Poisons the target.',
      name: 'Poison Powder',
      pp: 35,
      priority: 0,
      shortDesc: 'Poisons the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'poisonsting',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Has a 30% chance to poison the target.',
      maxMovePower: 70,
      name: 'Poison Sting',
      pp: 35,
      priority: 0,
      shortDesc: '30% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'poisontail',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 75,
      name: 'Poison Tail',
      pp: 25,
      priority: 0,
      shortDesc: 'High critical hit ratio. 10% chance to poison.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'pollenpuff',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Cute',
      maxMovePower: 130,
      name: 'Pollen Puff',
      pp: 15,
      priority: 0,
      shortDesc: 'If the target is an ally, heals 50% of its max HP.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'poltergeist',
    {
      accuracy: 90,
      basePower: '110',
      category: 'Physical',
      desc: "This move fails if the target doesn't have an item or is afflicted with Embargo. Additionally, this move fails if Magic Room is up, or the target has the ability Klutz and is not holding an item that ignores Klutz.",
      name: 'Poltergeist',
      pp: 5,
      priority: 0,
      shortDesc: 'Fails if the target has no item.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'pound',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Pound',
      pp: 35,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'powder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Powder',
      pp: 20,
      priority: 1,
      shortDesc: 'If using a Fire move, target loses 1/4 max HP.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'powdersnow',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to freeze the target.',
      maxMovePower: 90,
      name: 'Powder Snow',
      pp: 25,
      priority: 0,
      shortDesc: '10% chance to freeze the foe(s).',
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'powergem',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Power Gem',
      pp: 20,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'powershift',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      name: 'Power Shift',
      pp: 10,
      priority: 0,
      shortDesc: 'The user swaps its offensive and defensive stats.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'powersplit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Power Split',
      pp: 10,
      priority: 0,
      shortDesc: 'Averages Attack and Sp. Atk stats with target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'powerswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Power Swap',
      pp: 10,
      priority: 0,
      shortDesc: 'Swaps Attack and Sp. Atk stat stages with target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'powertrick',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Power Trick',
      pp: 10,
      priority: 0,
      shortDesc: "Switches user's Attack and Defense stats.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'powertrip',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Power Trip',
      pp: 10,
      priority: 0,
      shortDesc: " + 20 power for each of the user's stat boosts.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'powerwhip',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Power Whip',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'poweruppunch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Has a 100% chance to raise the user's Attack by 1 stage.",
      maxMovePower: 70,
      name: 'Power-Up Punch',
      pp: 20,
      priority: 0,
      shortDesc: "100% chance to raise the user's Attack by 1.",
      target: 'Normal',
      type: 'Fighting',
      aliases: ['glowpunch', 'pup']
    }
  ],
  [
    'precipiceblades',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 140,
      name: 'Precipice Blades',
      pp: 10,
      priority: 0,
      shortDesc: 'No additional effect. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Ground'
    }
  ],
  [
    'present',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 100,
      name: 'Present',
      pp: 15,
      priority: 0,
      shortDesc: '40, 80, 120 power, or heals target by 1/4 max HP.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'prismaticlaser',
    {
      accuracy: 100,
      basePower: '160',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 150,
      name: 'Prismatic Laser',
      pp: 10,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'protect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "The user is protected from most attacks made by other Pokémon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Protect',
      pp: 10,
      priority: 4,
      shortDesc: 'Prevents moves from affecting the user this turn.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'psybeam',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to confuse the target.',
      maxMovePower: 120,
      name: 'Psybeam',
      pp: 20,
      priority: 0,
      shortDesc: '10% chance to confuse the target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psychup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "The user copies all of the target's current stat stage changes.",
      name: 'Psych Up',
      pp: 10,
      priority: 0,
      shortDesc: "Copies the target's current stat stages.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'psychic',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Psychic',
      pp: 10,
      priority: 0,
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psychicfangs',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Psychic Fangs',
      pp: 10,
      priority: 0,
      shortDesc: 'Destroys screens, unless the target is immune.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psychicterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokémon is multiplied by 1.3 and grounded Pokémon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
      name: 'Psychic Terrain',
      pp: 10,
      priority: 0,
      shortDesc: '5 turns. Grounded: +Psychic power, priority-safe.',
      target: 'All',
      type: 'Psychic'
    }
  ],
  [
    'psychoboost',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Special',
      contestType: 'Clever',
      desc: "Lowers the user's Special Attack by 2 stages.",
      maxMovePower: 140,
      name: 'Psycho Boost',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psychocut',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 120,
      name: 'Psycho Cut',
      pp: 20,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psychoshift',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "The user's non-volatile status condition is transferred to the target, and the user is then cured. Fails if the user has no non-volatile status condition or if the target already has one.",
      name: 'Psycho Shift',
      pp: 10,
      priority: 0,
      shortDesc: "Transfers the user's status ailment to the target.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psyshieldbash',
    {
      accuracy: 90,
      basePower: '70',
      category: 'Physical',
      desc: 'Cloaking itself in psychic energy, the user slams into the target. This may also raise the user’s defensive stats.',
      name: 'Psyshield Bash',
      pp: 10,
      priority: 0,
      shortDesc: "Has a chance to raise user's defensive stats.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psyshock',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Psyshock',
      pp: 10,
      priority: 0,
      shortDesc: 'Damages target based on Defense, not Sp. Def.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psystrike',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Psystrike',
      pp: 10,
      priority: 0,
      shortDesc: 'Damages target based on Defense, not Sp. Def.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'psywave',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Psywave',
      pp: 15,
      priority: 0,
      shortDesc: "Random damage equal to 0.5x-1.5x user's level.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'pulverizingpancake',
    {
      accuracy: 100,
      basePower: '210',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      isZ: 'snorliumz',
      name: 'Pulverizing Pancake',
      pp: 1,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal',
      aliases: ['pp', 'pulverizing', 'zgigaimpact', 'zsnorlax']
    }
  ],
  [
    'punishment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      name: 'Punishment',
      pp: 5,
      priority: 0,
      shortDesc: "60 power +20 for each of the target's stat boosts.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'purify',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'The target is cured if it has a non-volatile status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded down.',
      name: 'Purify',
      pp: 20,
      priority: 0,
      shortDesc: "Cures target's status; heals user 1/2 max HP if so.",
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'pursuit',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Clever',
      desc: "If an opposing Pokémon switches out this turn, this move hits that Pokémon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokémon does not become active until the end of the turn.",
      isNonstandard: 'Past',
      name: 'Pursuit',
      pp: 20,
      priority: 0,
      shortDesc: 'If a foe is switching out, hits it at 2x power.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'pyroball',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Physical',
      maxMovePower: 140,
      name: 'Pyro Ball',
      pp: 5,
      priority: 0,
      shortDesc: '10% chance to burn the target. Thaws user.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'quash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Quash',
      pp: 15,
      priority: 0,
      shortDesc: 'Forces the target to move last this turn.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'quickattack',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Quick Attack',
      pp: 30,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'quickguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokémon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
      name: 'Quick Guard',
      pp: 15,
      priority: 3,
      shortDesc: 'Protects allies from priority attacks this turn.',
      target: "Ally's Side",
      type: 'Fighting'
    }
  ],
  [
    'quiverdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Quiver Dance',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Sp. Atk, Sp. Def, Speed by 1.",
      target: 'Self',
      type: 'Bug',
      aliases: ['qd']
    }
  ],
  [
    'rage',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Rage',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Attack by 1 if hit during use.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'ragepowder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Rage Powder',
      pp: 20,
      priority: 2,
      shortDesc: "The foes' moves target the user on the turn used.",
      target: 'Self',
      type: 'Bug'
    }
  ],
  [
    'ragingfury',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Physical',
      name: 'Raging Fury',
      pp: 10,
      priority: 0,
      shortDesc: 'The user rampages and spews vicious flames to inflict damage on the target, then becomes fixated on using this move.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'raindance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Rain Dance',
      pp: 5,
      priority: 0,
      shortDesc: 'For 5 turns, heavy rain powers Water moves.',
      target: 'All',
      type: 'Water'
    }
  ],
  [
    'rapidspin',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Cool',
      desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
      maxMovePower: 100,
      name: 'Rapid Spin',
      pp: 40,
      priority: 0,
      shortDesc: 'Free user from hazards/binding/Leech Seed;+1 Spe.',
      target: 'Normal',
      type: 'Normal',
      aliases: ['spin']
    }
  ],
  [
    'razorleaf',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 110,
      name: 'Razor Leaf',
      pp: 25,
      priority: 0,
      shortDesc: 'High critical hit ratio. Hits adjacent foes.',
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'razorshell',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Razor Shell',
      pp: 10,
      priority: 0,
      shortDesc: "50% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'razorwind',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Cool',
      isNonstandard: 'Past',
      name: 'Razor Wind',
      pp: 10,
      priority: 0,
      shortDesc: 'Charges, then hits foe(s) turn 2. High crit ratio.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'recover',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      name: 'Recover',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user by 50% of its max HP.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'recycle',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokémon with the Pickup Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.',
      name: 'Recycle',
      pp: 10,
      priority: 0,
      shortDesc: 'Restores the item the user last used.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'reflect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Reflect',
      pp: 20,
      priority: 0,
      shortDesc: 'For 5 turns, physical damage to allies is halved.',
      target: "Ally's Side",
      type: 'Psychic'
    }
  ],
  [
    'reflecttype',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Reflect Type',
      pp: 15,
      priority: 0,
      shortDesc: 'User becomes the same type as the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'refresh',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'The user cures its burn, poison, or paralysis.',
      isNonstandard: 'Past',
      name: 'Refresh',
      pp: 20,
      priority: 0,
      shortDesc: 'User cures its burn, poison, or paralysis.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'relicsong',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Relic Song',
      pp: 10,
      priority: 0,
      shortDesc: '10% chance to sleep foe(s). Meloetta transforms.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'rest',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.',
      name: 'Rest',
      pp: 10,
      priority: 0,
      shortDesc: 'User sleeps 2 turns and restores HP and status.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'retaliate',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 20,
      name: 'Retaliate',
      pp: 5,
      priority: 0,
      shortDesc: 'Power doubles if an ally fainted last turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'return',
    {
      accuracy: 100,
      basePower: "(user's Happiness * 2/5)",
      category: 'Physical',
      contestType: 'Cute',
      desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
      isNonstandard: 'Past',
      name: 'Return',
      pp: 20,
      priority: 0,
      shortDesc: 'Max 102 power at maximum Happiness.',
      target: 'Normal',
      type: 'Normal',
      zMovePower: 160
    }
  ],
  [
    'revelationdance',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "This move's type depends on the user's primary type.",
      maxMovePower: 130,
      name: 'Revelation Dance',
      pp: 15,
      priority: 0,
      shortDesc: "Type varies based on the user's primary type.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'revenge',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Power doubles if the user was hit by the target this turn.',
      maxMovePower: 80,
      name: 'Revenge',
      pp: 10,
      priority: -4,
      shortDesc: 'Power doubles if user is damaged by the target.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'reversal',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 100,
      name: 'Reversal',
      pp: 15,
      priority: 0,
      shortDesc: 'More power the less HP the user has left.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'risingvoltage',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: "If the current terrain is Electric Terrain and the target is grounded, this move's power is doubled.",
      maxMovePower: 140,
      name: 'Rising Voltage',
      pp: 20,
      priority: 0,
      shortDesc: '2x power if target is grounded in Electric Terrain.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'roar',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Roar',
      pp: 20,
      priority: -6,
      shortDesc: 'Forces the target to switch to a random ally.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'roaroftime',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 150,
      name: 'Roar of Time',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'rockblast',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 130,
      name: 'Rock Blast',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'rockclimb',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 20% chance to confuse the target.',
      isFieldMove:
        'The Pokémon can climb up rocky walls. Rock climb can be taught to a Pokémon by using HM08 in Generation IV. Since Generation V, it has lost its HM status.',
      isNonstandard: 'Past',
      name: 'Rock Climb',
      pp: 20,
      priority: 0,
      shortDesc: '20% chance to confuse the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'rockpolish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Raises the user's Speed by 2 stages.",
      name: 'Rock Polish',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Speed by 2.",
      target: 'Self',
      type: 'Rock'
    }
  ],
  [
    'rockslide',
    {
      accuracy: 90,
      basePower: '75',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Rock Slide',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to make the foe(s) flinch.',
      target: 'Adjacent Foes',
      type: 'Rock'
    }
  ],
  [
    'rocksmash',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      isFieldMove:
        'The Pokémon can smash small boulders. Rock smash can be taught to a Pokémon by using TM08 in Generation II, by using HM06 in Generations III and IV, TM94 in Generation V and Pokémon X and Y, and HM06 in Omega Ruby and Alpha Sapphire.',
      maxMovePower: 70,
      name: 'Rock Smash',
      pp: 15,
      priority: 0,
      shortDesc: "50% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'rockthrow',
    {
      accuracy: 90,
      basePower: '50',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 100,
      name: 'Rock Throw',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'rocktomb',
    {
      accuracy: 95,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      maxMovePower: 110,
      name: 'Rock Tomb',
      pp: 15,
      priority: 0,
      shortDesc: "100% chance to lower the target's Speed by 1.",
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'rockwrecker',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 150,
      name: 'Rock Wrecker',
      pp: 5,
      priority: 0,
      shortDesc: 'User cannot move next turn.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'roleplay',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
      name: 'Role Play',
      pp: 10,
      priority: 0,
      shortDesc: "User replaces its Ability with the target's.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'rollingkick',
    {
      accuracy: 85,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 30% chance to make the target flinch.',
      isNonstandard: 'Past',
      name: 'Rolling Kick',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'rollout',
    {
      accuracy: 90,
      basePower: '30',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 90,
      name: 'Rollout',
      pp: 20,
      priority: 0,
      shortDesc: 'Power doubles with each hit. Repeats for 5 turns.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'roost',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Roost',
      pp: 10,
      priority: 0,
      shortDesc: "Heals 50% HP. Flying-type removed 'til turn ends.",
      target: 'Self',
      type: 'Flying'
    }
  ],
  [
    'rototiller',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Rototiller',
      pp: 10,
      priority: 0,
      shortDesc: 'Raises Atk, Sp. Atk of grounded Grass types by 1.',
      target: 'All',
      type: 'Ground'
    }
  ],
  [
    'round',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 110,
      name: 'Round',
      pp: 15,
      priority: 0,
      shortDesc: 'Power doubles if others used Round this turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'sacredfire',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      contestType: 'Beautiful',
      desc: 'Has a 50% chance to burn the target.',
      maxMovePower: 130,
      name: 'Sacred Fire',
      pp: 5,
      priority: 0,
      shortDesc: '50% chance to burn the target. Thaws user.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'sacredsword',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Ignores the target's stat stage changes, including evasiveness.",
      maxMovePower: 90,
      name: 'Sacred Sword',
      pp: 15,
      priority: 0,
      shortDesc: "Ignores the target's stat stage changes.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'safeguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokémon. Pokémon on the user's side cannot become affected by Yawn but can fall asleep from its effect. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
      name: 'Safeguard',
      pp: 25,
      priority: 0,
      shortDesc: "For 5 turns, protects user's party from status.",
      target: "Ally's Side",
      type: 'Normal'
    }
  ],
  [
    'sandattack',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's accuracy by 1 stage.",
      name: 'Sand Attack',
      pp: 15,
      priority: 0,
      shortDesc: "Lowers the target's accuracy by 1.",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'sandtomb',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 90,
      name: 'Sand Tomb',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'sandsearstorm',
    {
      accuracy: 80,
      basePower: '95',
      category: 'Special',
      desc: 'The user attacks by wrapping the target in fierce winds and searingly hot sand. This also leaves the target with a burn.',
      name: 'Sandsear Storm',
      pp: 5,
      priority: 0,
      shortDesc: 'Has a 30% chance of burning the target',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'sandstorm',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Sandstorm',
      pp: 10,
      priority: 0,
      shortDesc: 'For 5 turns, a sandstorm rages.',
      target: 'All',
      type: 'Rock'
    }
  ],
  [
    'sappyseed',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'This move summons Leech Seed on the foe.',
      name: 'Sappy Seed',
      pp: 20,
      priority: 0,
      shortDesc: 'Summons Leech Seed.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'savagespinout',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'buginiumz',
      name: 'Savage Spin-Out',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Bug',
      aliases: ['zbug']
    }
  ],
  [
    'scald',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Scald',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to burn the target. Thaws target.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'scaleshot',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Lowers the user's Defense by 1 stage and raises the user's Speed by 1 stage after the last hit. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      name: 'Scale Shot',
      pp: 20,
      priority: 0,
      shortDesc: 'Hits 2-5 times. User: -1 Def, +1 Spe after last hit.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'scaryface',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Lowers the target's Speed by 2 stages.",
      name: 'Scary Face',
      pp: 10,
      priority: 0,
      shortDesc: "Lowers the target's Speed by 2.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'scorchingsands',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: 'Has a 30% chance to burn the target. The target thaws out if it is frozen.',
      name: 'Scorching Sands',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to burn the target. Thaws target.',
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'scratch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Scratch',
      pp: 35,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'screech',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Lowers the target's Defense by 2 stages.",
      name: 'Screech',
      pp: 40,
      priority: 0,
      shortDesc: "Lowers the target's Defense by 2.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'searingshot',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 30% chance to burn the target.',
      maxMovePower: 130,
      name: 'Searing Shot',
      pp: 5,
      priority: 0,
      shortDesc: '30% chance to burn adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Fire'
    }
  ],
  [
    'searingsunrazesmash',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'solganiumz',
      name: 'Searing Sunraze Smash',
      pp: 1,
      priority: 0,
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      target: 'Normal',
      type: 'Steel',
      aliases: ['searing', 'sss', 'zduskmanenecrozma', 'zsolgaleo', 'zsunsteelstrike']
    }
  ],
  [
    'secretpower',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Clever',
      isFieldMove:
        "The Pokémon can clear an entrance into a big tree, a bush or an indent in a wall in order to create a Secret Base in Generation III's Ruby, Sapphire and Emerald and Generation VI's Omega Ruby and Alpha Sapphire. It is taught to Pokémon using TM43 in Generations III and IV, and TM94 in Generation VI.",
      isNonstandard: 'Past',
      name: 'Secret Power',
      pp: 20,
      priority: 0,
      shortDesc: 'Effect varies with terrain. (30% paralysis chance)',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'secretsword',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 90,
      name: 'Secret Sword',
      pp: 10,
      priority: 0,
      shortDesc: 'Damages target based on Defense, not Sp. Def.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'seedbomb',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Seed Bomb',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'seedflare',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Seed Flare',
      pp: 5,
      priority: 0,
      shortDesc: "40% chance to lower the target's Sp. Def by 2.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'seismictoss',
    {
      accuracy: 100,
      basePower: 'level',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Deals damage to the target equal to the user's level.",
      maxMovePower: 75,
      name: 'Seismic Toss',
      pp: 20,
      priority: 0,
      shortDesc: "Does damage equal to the user's level.",
      target: 'Normal',
      type: 'Fighting',
      zMovePower: 100
    }
  ],
  [
    'selfdestruct',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Physical',
      contestType: 'Beautiful',
      maxMovePower: 150,
      name: 'Self-Destruct',
      pp: 5,
      priority: 0,
      shortDesc: 'Hits adjacent Pokémon. The user faints.',
      target: 'All Adjacent',
      type: 'Normal'
    }
  ],
  [
    'shadowball',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Shadow Ball',
      pp: 15,
      priority: 0,
      shortDesc: "20% chance to lower the target's Sp. Def by 1.",
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'shadowbone',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
      maxMovePower: 130,
      name: 'Shadow Bone',
      pp: 10,
      priority: 0,
      shortDesc: "20% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'shadowclaw',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 120,
      name: 'Shadow Claw',
      pp: 15,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'shadowforce',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 140,
      name: 'Shadow Force',
      pp: 5,
      priority: 0,
      shortDesc: 'Disappears turn 1. Hits turn 2. Breaks protection.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'shadowpunch',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'This move does not check accuracy.',
      maxMovePower: 110,
      name: 'Shadow Punch',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'shadowsneak',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Shadow Sneak',
      pp: 30,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'shadowstrike',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Physical',
      contestType: 'Clever',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      name: 'Shadow Strike',
      pp: 10,
      priority: 0,
      shortDesc: "50% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'sharpen',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Raises the user's Attack by 1 stage.",
      isNonstandard: 'Past',
      name: 'Sharpen',
      pp: 30,
      priority: 0,
      shortDesc: "Raises the user's Attack by 1.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'shatteredpsyche',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'psychiumz',
      name: 'Shattered Psyche',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Psychic',
      aliases: ['zpsychic']
    }
  ],
  [
    'sheercold',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Sheer Cold',
      pp: 5,
      priority: 0,
      shortDesc: "OHKOs non-Ice targets. Fails if user's lower level.",
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'shellsidearm',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Tough',
      desc: "Has a 20% chance to poison the target. This move becomes a physical attack that makes contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
      name: 'Shell Side Arm',
      pp: 10,
      priority: 0,
      shortDesc: '20% poison. Phys+contact if it would be stronger.',
      target: 'Normal',
      type: 'Poison',
      aliases: ['sideshellarm', 'ssa']
    }
  ],
  [
    'shellsmash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Shell Smash',
      pp: 15,
      priority: 0,
      shortDesc: 'Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'shelltrap',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 150,
      name: 'Shell Trap',
      pp: 5,
      priority: -3,
      shortDesc: 'User must take physical damage before moving.',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'shelter',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user makes its skin as hard as an iron shield, raising its defensive stats. Incoming moves also become more likely to miss.',
      name: 'Shelter',
      pp: 10,
      priority: 0,
      shortDesc: 'Raises defensive stats and evasiveness',
      target: 'Self',
      type: 'Steel'
    }
  ],
  [
    'shiftgear',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Raises the user's Speed by 2 stages and its Attack by 1 stage.",
      name: 'Shift Gear',
      pp: 10,
      priority: 0,
      shortDesc: "Raises the user's Speed by 2 and Attack by 1.",
      target: 'Self',
      type: 'Steel'
    }
  ],
  [
    'shockwave',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Cool',
      desc: 'This move does not check accuracy.',
      maxMovePower: 110,
      name: 'Shock Wave',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'shoreup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Shore Up',
      pp: 10,
      priority: 0,
      shortDesc: 'User restores 1/2 its max HP; 2/3 in Sandstorm.',
      target: 'Self',
      type: 'Ground'
    }
  ],
  [
    'signalbeam',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 10% chance to confuse the target.',
      isNonstandard: 'Past',
      name: 'Signal Beam',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to confuse the target.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'silverwind',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Beautiful',
      isNonstandard: 'Past',
      name: 'Silver Wind',
      pp: 5,
      priority: 0,
      shortDesc: '10% chance to raise all stats by 1 (not acc/eva).',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'simplebeam',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Causes the target's Ability to become Simple. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Truant, or Zen Mode.",
      name: 'Simple Beam',
      pp: 15,
      priority: 0,
      shortDesc: "The target's Ability becomes Simple.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'sing',
    {
      accuracy: 55,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Causes the target to fall asleep.',
      name: 'Sing',
      pp: 15,
      priority: 0,
      shortDesc: 'Puts the target to sleep.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'sinisterarrowraid',
    {
      accuracy: 100,
      basePower: '180',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      isZ: 'decidiumz',
      name: 'Sinister Arrow Raid',
      pp: 1,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Ghost',
      aliases: ['sar', 'sinister', 'zdecidueye', 'zspiritshackle']
    }
  ],
  [
    'sizzlyslide',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Has a 100% chance to burn the foe.',
      name: 'Sizzly Slide',
      pp: 20,
      priority: 0,
      shortDesc: '100% chance to burn the foe.',
      target: 'Normal',
      type: 'Fire'
    }
  ],
  [
    'sketch',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Sketch',
      pp: 1,
      priority: 0,
      shortDesc: 'Permanently copies the last move target used.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'skillswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
      name: 'Skill Swap',
      pp: 10,
      priority: 0,
      shortDesc: 'The user and the target trade Abilities.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'skittersmack',
    {
      accuracy: 90,
      basePower: '70',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
      name: 'Skitter Smack',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower target's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'skullbash',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 140,
      name: 'Skull Bash',
      pp: 10,
      priority: 0,
      shortDesc: "Raises user's Defense by 1 on turn 1. Hits turn 2.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'skyattack',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 30% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.',
      maxMovePower: 140,
      name: 'Sky Attack',
      pp: 5,
      priority: 0,
      shortDesc: 'Charges, then hits turn 2. 30% flinch. High crit.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'skydrop',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Sky Drop',
      pp: 10,
      priority: 0,
      shortDesc: 'User and foe fly up turn 1. Damages on turn 2.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'skyuppercut',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'This move can hit a target using Bounce, Fly, or Sky Drop.',
      isNonstandard: 'Past',
      name: 'Sky Uppercut',
      pp: 15,
      priority: 0,
      shortDesc: 'Can hit Pokémon using Bounce, Fly, or Sky Drop.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'slackoff',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      name: 'Slack Off',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user by 50% of its max HP.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'slam',
    {
      accuracy: 75,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'Slam',
      pp: 20,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'slash',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 120,
      name: 'Slash',
      pp: 20,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'sleeppowder',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Causes the target to fall asleep.',
      name: 'Sleep Powder',
      pp: 15,
      priority: 0,
      shortDesc: 'Puts the target to sleep.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'sleeptalk',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Max Move.",
      name: 'Sleep Talk',
      pp: 10,
      priority: 0,
      shortDesc: 'User must be asleep. Uses another known move.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'sludge',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Has a 30% chance to poison the target.',
      maxMovePower: 85,
      name: 'Sludge',
      pp: 20,
      priority: 0,
      shortDesc: '30% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'sludgebomb',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Has a 30% chance to poison the target.',
      maxMovePower: 90,
      name: 'Sludge Bomb',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'sludgewave',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Has a 10% chance to poison the target.',
      maxMovePower: 90,
      name: 'Sludge Wave',
      pp: 10,
      priority: 0,
      shortDesc: '10% chance to poison adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Poison'
    }
  ],
  [
    'smackdown',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Smack Down',
      pp: 15,
      priority: 0,
      shortDesc: "Removes the target's Ground immunity.",
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'smartstrike',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'This move does not check accuracy.',
      maxMovePower: 120,
      name: 'Smart Strike',
      pp: 10,
      priority: 0,
      shortDesc: 'This move does not check accuracy.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'smellingsalts',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Smelling Salts',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if target is paralyzed, and cures it.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'smog',
    {
      accuracy: 70,
      basePower: '30',
      category: 'Special',
      contestType: 'Tough',
      desc: 'Has a 40% chance to poison the target.',
      maxMovePower: 70,
      name: 'Smog',
      pp: 20,
      priority: 0,
      shortDesc: '40% chance to poison the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'smokescreen',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Lowers the target's accuracy by 1 stage.",
      name: 'Smokescreen',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's accuracy by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'snaptrap',
    {
      accuracy: 100,
      basePower: '35',
      category: 'Physical',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 90,
      name: 'Snap Trap',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'snarl',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 110,
      name: 'Snarl',
      pp: 15,
      priority: 0,
      shortDesc: '100% chance to lower the foe(s) Sp. Atk by 1.',
      target: 'Adjacent Foes',
      type: 'Dark'
    }
  ],
  [
    'snatch',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Snatch',
      pp: 10,
      priority: 4,
      shortDesc: 'User steals certain support moves to use itself.',
      target: 'Self',
      type: 'Dark'
    }
  ],
  [
    'snipeshot',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a higher chance for a critical hit. This move cannot be redirected to a different target by any effect.',
      maxMovePower: 130,
      name: 'Snipe Shot',
      pp: 15,
      priority: 0,
      shortDesc: 'High critical hit ratio. Cannot be redirected.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'snore',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      contestType: 'Cute',
      desc: 'Has a 30% chance to make the target flinch. Fails if the user is not asleep.',
      maxMovePower: 100,
      name: 'Snore',
      pp: 15,
      priority: 0,
      shortDesc: 'User must be asleep. 30% chance to flinch target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'soak',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Soak',
      pp: 20,
      priority: 0,
      shortDesc: "Changes the target's type to Water.",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'softboiled',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      isFieldMove:
        "The Pokémon cuts 20% of its HP to recover another Pokémon's HP. It can be taught to a Pokémon by using TM41 in Generation I, and it can be learned via level-up by Chansey and Blissey as well as certain Pokémon via a Move Tutor in Pokémon FireRed and LeafGreen.",
      name: 'Soft-Boiled',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user by 50% of its max HP.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'solarbeam',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      contestType: 'Cool',
      desc: 'This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.',
      maxMovePower: 140,
      name: 'Solar Beam',
      pp: 10,
      priority: 0,
      shortDesc: 'Charges turn 1. Hits turn 2. No charge in sunlight.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'solarblade',
    {
      accuracy: 100,
      basePower: '125',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.',
      maxMovePower: 140,
      name: 'Solar Blade',
      pp: 10,
      priority: 0,
      shortDesc: 'Charges turn 1. Hits turn 2. No charge in sunlight.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'sonicboom',
    {
      accuracy: 90,
      basePower: '20',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Deals 20 HP of damage to the target.',
      isNonstandard: 'Past',
      name: 'Sonic Boom',
      pp: 20,
      priority: 0,
      shortDesc: 'Always does 20 HP of damage.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'soulstealing7starstrike',
    {
      accuracy: 100,
      basePower: '195',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      isNonstandard: 'Past',
      isZ: 'marshadiumz',
      name: 'Soul-Stealing 7-Star Strike',
      pp: 1,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Ghost',
      aliases: ['soul', 'soulstealingsevenstarstrike', 'ss7ss', 'sssss', 'zmarshadow', 'zspectralthief']
    }
  ],
  [
    'spacialrend',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Spacial Rend',
      pp: 5,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'spark',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 30% chance to paralyze the target.',
      maxMovePower: 120,
      name: 'Spark',
      pp: 20,
      priority: 0,
      shortDesc: '30% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'sparklingaria',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Tough',
      desc: 'If the user has not fainted, the target is cured of its burn.',
      maxMovePower: 30,
      name: 'Sparkling Aria',
      pp: 10,
      priority: 0,
      shortDesc: 'The target is cured of its burn.',
      target: 'All Adjacent',
      type: 'Water'
    }
  ],
  [
    'sparklyswirl',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Special',
      contestType: 'Clever',
      desc: "Every Pokémon in the user's party is cured of its non-volatile status condition.",
      name: 'Sparkly Swirl',
      pp: 5,
      priority: 0,
      shortDesc: "Cures the user's party of all status conditions.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'spectralthief',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Spectral Thief',
      pp: 10,
      priority: 0,
      shortDesc: "Steals target's boosts before dealing damage.",
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'speedswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user swaps its raw Speed stat with the target.',
      name: 'Speed Swap',
      pp: 10,
      priority: 0,
      shortDesc: 'Swaps Speed stat with target.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'spiderweb',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      isNonstandard: 'Past',
      name: 'Spider Web',
      pp: 10,
      priority: 0,
      shortDesc: 'Prevents the target from switching out.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'spikecannon',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      isNonstandard: 'Past',
      name: 'Spike Cannon',
      pp: 15,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'spikes',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Spikes',
      pp: 20,
      priority: 0,
      shortDesc: 'Hurts grounded foes on switch-in. Max 3 layers.',
      target: "Foe's Side",
      type: 'Ground'
    }
  ],
  [
    'spikyshield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      name: 'Spiky Shield',
      pp: 10,
      priority: 4,
      shortDesc: 'Protects from moves. Contact: loses 1/8 max HP.',
      target: 'Self',
      type: 'Grass'
    }
  ],
  [
    'spiritbreak',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
      maxMovePower: 130,
      name: 'Spirit Break',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'spiritshackle',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      maxMovePower: 130,
      name: 'Spirit Shackle',
      pp: 10,
      priority: 0,
      shortDesc: 'Prevents the target from switching out.',
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'spitup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Spit Up',
      pp: 10,
      priority: 0,
      shortDesc: 'More power with more uses of Stockpile.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'spite',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Spite',
      pp: 10,
      priority: 0,
      shortDesc: "Lowers the PP of the target's last move by 4.",
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'splash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Nothing happens...',
      name: 'Splash',
      pp: 40,
      priority: 0,
      shortDesc: 'Does nothing (but we still love it).',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'splinteredstormshards',
    {
      accuracy: 100,
      basePower: '190',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'lycaniumz',
      name: 'Splintered Stormshards',
      pp: 1,
      priority: 0,
      shortDesc: 'Ends the effects of terrain.',
      target: 'Normal',
      type: 'Rock',
      aliases: ['splintered', 'stormshards', 'zlycanroc', 'zstoneedge']
    }
  ],
  [
    'splishysplash',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 30% chance to paralyze the target.',
      name: 'Splishy Splash',
      pp: 15,
      priority: 0,
      shortDesc: '30% chance to paralyze the target.',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'spore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'Causes the target to fall asleep.',
      name: 'Spore',
      pp: 15,
      priority: 0,
      shortDesc: 'Puts the target to sleep.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'spotlight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      isNonstandard: 'Past',
      name: 'Spotlight',
      pp: 15,
      priority: 3,
      shortDesc: "Target's foes' moves are redirected to it this turn.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'springtidestorm',
    {
      accuracy: 80,
      basePower: '95',
      category: 'Special',
      desc: "The user attacks by wrapping the target in fierce winds brimming with love and hate. If Enamorus is in its Incarnate Forme, it has a 30% chance of boosting all the user's stats for 3 turns. In its Therian Form, it has a 30% chance of lowering the target's Defenses for 3 turns",
      name: 'Springtide Storm',
      pp: 5,
      priority: 0,
      shortDesc: "30% chance to boost all stats (Incarnate) or 30% to lower target's defensive stats (Therian)",
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'stealthrock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      target: "Foe's Side",
      type: 'Rock',
      aliases: ['rocks', 'sr']
    }
  ],
  [
    'steameruption',
    {
      accuracy: 95,
      basePower: '110',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 140,
      name: 'Steam Eruption',
      pp: 5,
      priority: 0,
      shortDesc: '30% chance to burn the target. Thaws target.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'steamroller',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.',
      isNonstandard: 'Past',
      name: 'Steamroller',
      pp: 20,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'steelbeam',
    {
      accuracy: 95,
      basePower: '140',
      category: 'Special',
      desc: 'Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.',
      maxMovePower: 140,
      name: 'Steel Beam',
      pp: 5,
      priority: 0,
      shortDesc: 'User loses 50% max HP. Hits adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Steel'
    }
  ],
  [
    'steelroller',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Physical',
      desc: 'Fails if there is no terrain active. Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.',
      name: 'Steel Roller',
      pp: 5,
      priority: 0,
      shortDesc: 'Fails if there is no terrain active. Ends the terrain.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'steelwing',
    {
      accuracy: 90,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
      maxMovePower: 120,
      name: 'Steel Wing',
      pp: 25,
      priority: 0,
      shortDesc: "10% chance to raise the user's Defense by 1.",
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'stickyweb',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Sticky Web',
      pp: 20,
      priority: 0,
      shortDesc: 'Lowers Speed of grounded foes by 1 on switch-in.',
      target: "Foe's Side",
      type: 'Bug',
      aliases: ['web']
    }
  ],
  [
    'stockpile',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Stockpile',
      pp: 20,
      priority: 0,
      shortDesc: "Raises user's Defense, Sp. Def by 1. Max 3 uses.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'stokedsparksurfer',
    {
      accuracy: 100,
      basePower: '175',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 100% chance to paralyze the target.',
      isNonstandard: 'Past',
      isZ: 'aloraichiumz',
      name: 'Stoked Sparksurfer',
      pp: 1,
      priority: 0,
      shortDesc: '100% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric',
      aliases: ['ss', 'stoked', 'zraichu']
    }
  ],
  [
    'stomp',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.',
      maxMovePower: 120,
      name: 'Stomp',
      pp: 20,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'stompingtantrum',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Stomping Tantrum',
      pp: 10,
      priority: 0,
      shortDesc: "Power doubles if the user's last move failed.",
      target: 'Normal',
      type: 'Ground'
    }
  ],
  [
    'stoneaxe',
    {
      accuracy: 90,
      basePower: '65',
      category: 'Physical',
      desc: 'The user swings its stone axes at the target, aiming to land a critical hit. Stone splinters left behind by this attack continue to damage the target for 4 turns.',
      name: 'Stone Axe',
      pp: 15,
      priority: 0,
      shortDesc: 'For 4 turns will deal damage at the end of each turn',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'stoneedge',
    {
      accuracy: 80,
      basePower: '100',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a higher chance for a critical hit.',
      maxMovePower: 130,
      name: 'Stone Edge',
      pp: 5,
      priority: 0,
      shortDesc: 'High critical hit ratio.',
      target: 'Normal',
      type: 'Rock',
      aliases: ['se']
    }
  ],
  [
    'storedpower',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      contestType: 'Clever',
      maxMovePower: 130,
      name: 'Stored Power',
      pp: 10,
      priority: 0,
      shortDesc: " + 20 power for each of the user's stat boosts.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'stormthrow',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 80,
      name: 'Storm Throw',
      pp: 10,
      priority: 0,
      shortDesc: 'Always results in a critical hit.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'strangesteam',
    {
      accuracy: 95,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 20% chance to confuse the target.',
      maxMovePower: 130,
      name: 'Strange Steam',
      pp: 10,
      priority: 0,
      shortDesc: '20% chance to confuse the target.',
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'strength',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      isFieldMove: 'The Pokémon is able to push certain types of boulders around. Strength can be taught to Pokémon with HM04 in all generations.',
      maxMovePower: 130,
      name: 'Strength',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'strengthsap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Strength Sap',
      pp: 10,
      priority: 0,
      shortDesc: "User heals HP=target's Atk stat. Lowers Atk by 1.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'stringshot',
    {
      accuracy: 95,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Lowers the target's Speed by 2 stages.",
      name: 'String Shot',
      pp: 40,
      priority: 0,
      shortDesc: 'Lowers the foe(s) Speed by 2.',
      target: 'Adjacent Foes',
      type: 'Bug'
    }
  ],
  [
    'struggle',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 1,
      name: 'Struggle',
      pp: 1,
      priority: 0,
      shortDesc: 'User loses 25% of its max HP as recoil.',
      target: 'Random',
      type: 'Normal',
      zMovePower: 1
    }
  ],
  [
    'strugglebug',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      contestType: 'Cute',
      maxMovePower: 100,
      name: 'Struggle Bug',
      pp: 20,
      priority: 0,
      shortDesc: '100% chance to lower the foe(s) Sp. Atk by 1.',
      target: 'Adjacent Foes',
      type: 'Bug'
    }
  ],
  [
    'stuffcheeks',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'This move cannot be selected unless the user is holding a Berry. The user eats its Berry and raises its Defense by 2 stages. This effect is not prevented by the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if the user is not holding a Berry.',
      name: 'Stuff Cheeks',
      pp: 10,
      priority: 0,
      shortDesc: 'Must hold Berry to use. User eats Berry, Def +2.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'stunspore',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Paralyzes the target.',
      name: 'Stun Spore',
      pp: 30,
      priority: 0,
      shortDesc: 'Paralyzes the target.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'submission',
    {
      accuracy: 80,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 90,
      name: 'Submission',
      pp: 20,
      priority: 0,
      shortDesc: 'Has 1/4 recoil.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'substitute',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Substitute',
      pp: 10,
      priority: 0,
      shortDesc: 'User takes 1/4 its max HP to put in a Substitute.',
      target: 'Self',
      type: 'Normal',
      aliases: ['sub']
    }
  ],
  [
    'subzeroslammer',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'iciumz',
      name: 'Subzero Slammer',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Ice',
      aliases: ['zice']
    }
  ],
  [
    'suckerpunch',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Clever',
      maxMovePower: 120,
      name: 'Sucker Punch',
      pp: 5,
      priority: 1,
      shortDesc: 'Usually goes first. Fails if target is not attacking.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'sunnyday',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      name: 'Sunny Day',
      pp: 5,
      priority: 0,
      shortDesc: 'For 5 turns, intense sunlight powers Fire moves.',
      target: 'All',
      type: 'Fire'
    }
  ],
  [
    'sunsteelstrike',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 130,
      name: 'Sunsteel Strike',
      pp: 5,
      priority: 0,
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      target: 'Normal',
      type: 'Steel'
    }
  ],
  [
    'superfang',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 100,
      name: 'Super Fang',
      pp: 10,
      priority: 0,
      shortDesc: "Does damage equal to 1/2 target's current HP.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'superpower',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      desc: "Lowers the user's Attack and Defense by 1 stage.",
      name: 'Superpower',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Attack and Defense by 1.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'supersonic',
    {
      accuracy: 55,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'Causes the target to become confused.',
      name: 'Supersonic',
      pp: 20,
      priority: 0,
      shortDesc: 'Confuses the target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'supersonicskystrike',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'flyiniumz',
      name: 'Supersonic Skystrike',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Flying',
      aliases: ['zflying']
    }
  ],
  [
    'surf',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Damage doubles if the target is using Dive.',
      isFieldMove: "The player can travel across water on the Pokémon's back. Surf can be taught to Pokémon with HMO3 in all generations.",
      maxMovePower: 130,
      name: 'Surf',
      pp: 15,
      priority: 0,
      shortDesc: 'Hits adjacent Pokémon. Power doubles on Dive.',
      target: 'All Adjacent',
      type: 'Water'
    }
  ],
  [
    'surgingstrikes',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      desc: 'Hits three times. This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.',
      maxMovePower: 130,
      name: 'Surging Strikes',
      pp: 5,
      priority: 0,
      shortDesc: 'Always results in a critical hit. Hits 3 times.',
      target: 'Normal',
      type: 'Water',
      zMovePower: 140
    }
  ],
  [
    'swagger',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Raises the target's Attack by 2 stages and confuses it.",
      name: 'Swagger',
      pp: 15,
      priority: 0,
      shortDesc: "Raises the target's Attack by 2 and confuses it.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'swallow',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Swallow',
      pp: 10,
      priority: 0,
      shortDesc: 'Heals the user based on uses of Stockpile.',
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'sweetkiss',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Causes the target to become confused.',
      name: 'Sweet Kiss',
      pp: 10,
      priority: 0,
      shortDesc: 'Confuses the target.',
      target: 'Normal',
      type: 'Fairy'
    }
  ],
  [
    'sweetscent',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's evasiveness by 2 stages.",
      isFieldMove:
        'The Pokémon can activate a wild Pokémon battle in tall grass, caves, and water. It can be taught to a Pokémon by using TM12 in Generation II, and it can be learned by many Grass-type Pokémon.',
      name: 'Sweet Scent',
      pp: 20,
      priority: 0,
      shortDesc: 'Lowers the foe(s) evasiveness by 2.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'swift',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Cool',
      desc: 'This move does not check accuracy.',
      maxMovePower: 110,
      name: 'Swift',
      pp: 20,
      priority: 0,
      shortDesc: 'This move does not check accuracy. Hits foes.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'switcheroo',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Switcheroo',
      pp: 10,
      priority: 0,
      shortDesc: "User switches its held item with the target's.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'swordsdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Raises the user's Attack by 2 stages.",
      name: 'Swords Dance',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Attack by 2.",
      target: 'Self',
      type: 'Normal',
      aliases: ['sd']
    }
  ],
  [
    'synchronoise',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      contestType: 'Clever',
      desc: 'The target is immune if it does not share a type with the user.',
      isNonstandard: 'Past',
      name: 'Synchronoise',
      pp: 10,
      priority: 0,
      shortDesc: "Hits adjacent Pokémon sharing the user's type.",
      target: 'All Adjacent',
      type: 'Psychic'
    }
  ],
  [
    'synthesis',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: 'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
      name: 'Synthesis',
      pp: 5,
      priority: 0,
      shortDesc: 'Heals the user by a weather-dependent amount.',
      target: 'Self',
      type: 'Grass'
    }
  ],
  [
    'tackle',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Tackle',
      pp: 35,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'tailglow',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: "Raises the user's Special Attack by 3 stages.",
      name: 'Tail Glow',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Sp. Atk by 3.",
      target: 'Self',
      type: 'Bug'
    }
  ],
  [
    'tailslap',
    {
      accuracy: 85,
      basePower: '25',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      maxMovePower: 130,
      name: 'Tail Slap',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'tailwhip',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Defense by 1 stage.",
      name: 'Tail Whip',
      pp: 30,
      priority: 0,
      shortDesc: 'Lowers the foe(s) Defense by 1.',
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'tailwind',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      name: 'Tailwind',
      pp: 15,
      priority: 0,
      shortDesc: "For 4 turns, allies' Speed is doubled.",
      target: "Ally's Side",
      type: 'Flying'
    }
  ],
  [
    'takedown',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Take Down',
      pp: 20,
      priority: 0,
      shortDesc: 'Has 1/4 recoil.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'takeheart',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user lifts its spirits, healing its own status conditions and raising its offensive and defensive stats.',
      name: 'Take Heart',
      pp: 10,
      priority: 0,
      shortDesc: "Heals user's status conditions and raises offensive and defensive stats.",
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'tarshot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Speed by 1 stage. Until the target switches out, the effectiveness of Fire-type moves is doubled against it.",
      name: 'Tar Shot',
      pp: 20,
      priority: 0,
      shortDesc: 'Target gets -1 Spe and becomes weaker to Fire.',
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'taunt',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Taunt',
      pp: 20,
      priority: 0,
      shortDesc: "For 3 turns, the target can't use status moves.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'tearfullook',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Attack and Special Attack by 1 stage.",
      name: 'Tearful Look',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'teatime',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'All active Pokémon consume their held Berries. This effect is not prevented by substitutes, the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if no active Pokémon is holding a Berry.',
      name: 'Teatime',
      pp: 10,
      priority: 0,
      shortDesc: 'All active Pokémon consume held Berries.',
      target: 'Any',
      type: 'Normal'
    }
  ],
  [
    'technoblast',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      contestType: 'Cool',
      desc: "This move's type depends on the user's held Drive.",
      maxMovePower: 140,
      name: 'Techno Blast',
      pp: 5,
      priority: 0,
      shortDesc: 'Type varies based on the held Drive.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'tectonicrage',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isZ: 'groundiumz',
      name: 'Tectonic Rage',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Ground',
      aliases: ['zground']
    }
  ],
  [
    'teeterdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Causes the target to become confused.',
      name: 'Teeter Dance',
      pp: 20,
      priority: 0,
      shortDesc: 'Confuses adjacent Pokémon.',
      target: 'All Adjacent',
      type: 'Normal'
    }
  ],
  [
    'telekinesis',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      isNonstandard: 'Past',
      name: 'Telekinesis',
      pp: 15,
      priority: 0,
      shortDesc: "For 3 turns, target floats but moves can't miss it.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'teleport',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: 'If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.',
      isFieldMove:
        'The Pokémon can teleport the player to the front of the last visited Pokémon Center by using telekinesis. It can be taught to a Pokémon by using TM30 in Generation I, and it can be learned by many Psychic-type Pokémon.',
      name: 'Teleport',
      pp: 20,
      priority: -6,
      shortDesc: 'User switches out.',
      target: 'Self',
      type: 'Psychic'
    }
  ],
  [
    'terrainpulse',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc: "Power doubles if the user is grounded and a terrain is active, and this move's type changes to match. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain.",
      name: 'Terrain Pulse',
      pp: 10,
      priority: 0,
      shortDesc: 'User on terrain: power doubles, type varies.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'thief',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 110,
      name: 'Thief',
      pp: 25,
      priority: 0,
      shortDesc: "If the user has no item, it steals the target's.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'thousandarrows',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Beautiful',
      maxMovePower: 130,
      name: 'Thousand Arrows',
      pp: 10,
      priority: 0,
      shortDesc: 'Grounds adjacent foes. First hit neutral on Flying.',
      target: 'Adjacent Foes',
      type: 'Ground'
    }
  ],
  [
    'thousandwaves',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      maxMovePower: 130,
      name: 'Thousand Waves',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits adjacent foes. Prevents them from switching.',
      target: 'Adjacent Foes',
      type: 'Ground'
    }
  ],
  [
    'thrash',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 40,
      name: 'Thrash',
      pp: 10,
      priority: 0,
      shortDesc: 'Lasts 2-3 turns. Confuses the user afterwards.',
      target: 'Random',
      type: 'Normal'
    }
  ],
  [
    'throatchop',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'For 2 turns, the target cannot use sound-based moves.',
      maxMovePower: 130,
      name: 'Throat Chop',
      pp: 15,
      priority: 0,
      shortDesc: 'For 2 turns, the target cannot use sound moves.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'thunder',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      contestType: 'Cool',
      desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokémon holding Utility Umbrella, this move's accuracy remains at 70%.",
      maxMovePower: 40,
      name: 'Thunder',
      pp: 10,
      priority: 0,
      shortDesc: "30% chance to paralyze target. Can't miss in rain.",
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'thundercage',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Special',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      name: 'Thunder Cage',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'thunderfang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 10% chance to paralyze the target and a 10% chance to make it flinch.',
      maxMovePower: 120,
      name: 'Thunder Fang',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to paralyze. 10% chance to flinch.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'thunderouskick',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
      name: 'Thunderous Kick',
      pp: 10,
      priority: 0,
      shortDesc: "100% chance to lower the target's Defense by 1.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'thunderpunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 10% chance to paralyze the target.',
      maxMovePower: 130,
      name: 'Thunder Punch',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'thundershock',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 10% chance to paralyze the target.',
      maxMovePower: 90,
      name: 'Thunder Shock',
      pp: 30,
      priority: 0,
      shortDesc: '10% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'thunderwave',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      contestType: 'Cool',
      desc: 'Paralyzes the target.',
      name: 'Thunder Wave',
      pp: 20,
      priority: 0,
      shortDesc: 'Paralyzes the target.',
      target: 'Normal',
      type: 'Electric',
      aliases: ['twave']
    }
  ],
  [
    'thunderbolt',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 10% chance to paralyze the target.',
      maxMovePower: 130,
      name: 'Thunderbolt',
      pp: 15,
      priority: 0,
      shortDesc: '10% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric',
      aliases: ['tbolt']
    }
  ],
  [
    'tickle',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Lowers the target's Attack and Defense by 1 stage.",
      name: 'Tickle',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Attack and Defense by 1.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'topsyturvy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Topsy-Turvy',
      pp: 20,
      priority: 0,
      shortDesc: "Inverts the target's stat stages.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'torment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      name: 'Torment',
      pp: 15,
      priority: 0,
      shortDesc: "Target can't select the same move twice in a row.",
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'toxic',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Toxic',
      pp: 10,
      priority: 0,
      shortDesc: 'Badly poisons the target.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'toxicspikes',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Toxic Spikes',
      pp: 20,
      priority: 0,
      shortDesc: 'Poisons grounded foes on switch-in. Max 2 layers.',
      target: "Foe's Side",
      type: 'Poison',
      aliases: ['tspikes']
    }
  ],
  [
    'toxicthread',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Lowers the target's Speed by 1 stage and poisons it.",
      name: 'Toxic Thread',
      pp: 20,
      priority: 0,
      shortDesc: "Lowers the target's Speed by 1 and poisons it.",
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'transform',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Transform',
      pp: 10,
      priority: 0,
      shortDesc: "Copies target's stats, moves, types, and Ability.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'triattack',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 80,
      name: 'Tri Attack',
      pp: 10,
      priority: 0,
      shortDesc: '20% chance to paralyze or burn or freeze target.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'trick',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Trick',
      pp: 10,
      priority: 0,
      shortDesc: "User switches its held item with the target's.",
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'trickroom',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "For 5 turns, the Speed of every Pokémon is recalculated for the purposes of determining turn order. During the effect, each Pokémon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
      name: 'Trick Room',
      pp: 5,
      priority: -7,
      shortDesc: 'Goes last. For 5 turns, turn order is reversed.',
      target: 'All',
      type: 'Psychic',
      aliases: ['tr', 'troom']
    }
  ],
  [
    'trickortreat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      name: 'Trick-or-Treat',
      pp: 20,
      priority: 0,
      shortDesc: "Adds Ghost to the target's type(s).",
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'triplearrows',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      desc: "The user delivers an axe kick, then fires three arrows. This raises the chance of its future attacks landing critical hits and also lowers the target's defensive stats.",
      name: 'Triple Arrows',
      pp: 15,
      priority: 0,
      shortDesc: "Decreases target's defensive stats by 1 stage.",
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'tripleaxel',
    {
      accuracy: 90,
      basePower: '20',
      category: 'Physical',
      desc: "Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
      name: 'Triple Axel',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 3 times. Each hit can miss, but power rises.',
      target: 'Normal',
      type: 'Ice'
    }
  ],
  [
    'triplekick',
    {
      accuracy: 90,
      basePower: '10',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 80,
      name: 'Triple Kick',
      pp: 10,
      priority: 0,
      shortDesc: 'Hits 3 times. Each hit can miss, but power rises.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'tropkick',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cute',
      desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
      maxMovePower: 120,
      name: 'Trop Kick',
      pp: 15,
      priority: 0,
      shortDesc: "100% chance to lower the target's Attack by 1.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'trumpcard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Cool',
      isNonstandard: 'Past',
      name: 'Trump Card',
      pp: 5,
      priority: 0,
      shortDesc: 'More power the fewer PP this move has left.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'twineedle',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      name: 'Twineedle',
      pp: 20,
      priority: 0,
      shortDesc: 'Hits 2 times. Each hit has 20% chance to poison.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'twinkletackle',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      contestType: 'Cool',
      isNonstandard: 'Past',
      isZ: 'fairiumz',
      name: 'Twinkle Tackle',
      pp: 1,
      priority: 0,
      shortDesc: "Power is equal to the base move's Z-Power.",
      target: 'Normal',
      type: 'Fairy',
      aliases: ['zfairy']
    }
  ],
  [
    'twister',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.',
      maxMovePower: 90,
      name: 'Twister',
      pp: 20,
      priority: 0,
      shortDesc: '20% chance to make the foe(s) flinch.',
      target: 'Adjacent Foes',
      type: 'Dragon'
    }
  ],
  [
    'uturn',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cute',
      maxMovePower: 120,
      name: 'U-turn',
      pp: 20,
      priority: 0,
      shortDesc: 'User switches out after damaging the target.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'uproar',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      contestType: 'Cute',
      maxMovePower: 30,
      name: 'Uproar',
      pp: 10,
      priority: 0,
      shortDesc: 'Lasts 3 turns. Active Pokémon cannot fall asleep.',
      target: 'Random',
      type: 'Normal'
    }
  ],
  [
    'vcreate',
    {
      accuracy: 95,
      basePower: '180',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 150,
      name: 'V-create',
      pp: 5,
      priority: 0,
      shortDesc: "Lowers the user's Defense, Sp. Def, Speed by 1.",
      target: 'Normal',
      type: 'Fire',
      zMovePower: 220
    }
  ],
  [
    'vacuumwave',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 70,
      name: 'Vacuum Wave',
      pp: 30,
      priority: 1,
      shortDesc: 'Usually goes first.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'veeveevolley',
    {
      accuracy: 100,
      basePower: '(happiness * 10) / 25',
      category: 'Physical',
      contestType: 'Cute',
      name: 'Veevee Volley',
      pp: 20,
      priority: 0,
      shortDesc: "Max happiness: 102 power. Can't miss.",
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'venomdrench',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Venom Drench',
      pp: 20,
      priority: 0,
      shortDesc: 'Lowers Atk, Sp. Atk, Speed of poisoned foes by 1.',
      target: 'Adjacent Foes',
      type: 'Poison'
    }
  ],
  [
    'venoshock',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Power doubles if the target is poisoned.',
      maxMovePower: 85,
      name: 'Venoshock',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if the target is poisoned.',
      target: 'Normal',
      type: 'Poison'
    }
  ],
  [
    'victorydance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user performs a dance to usher in victory. This raises the user’s offensive and defensive stats by 1 stage and increases the damage dealt by the user’s moves by 50%.',
      name: 'Victory Dance',
      pp: 20,
      priority: 0,
      shortDesc: "Raises the user's Attack and Defense stat by 1 stage and boosts damage dealt by user by 50%",
      target: 'Self',
      type: 'Fighting'
    }
  ],
  [
    'vinewhip',
    {
      accuracy: 100,
      basePower: '45',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 100,
      name: 'Vine Whip',
      pp: 25,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'visegrip',
    {
      accuracy: 100,
      basePower: '55',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'No additional effect.',
      maxMovePower: 110,
      name: 'Vise Grip',
      pp: 30,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Normal',
      aliases: ['vicegrip']
    }
  ],
  [
    'vitalthrow',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'This move does not check accuracy.',
      maxMovePower: 85,
      name: 'Vital Throw',
      pp: 10,
      priority: -1,
      shortDesc: 'This move does not check accuracy. Goes last.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'voltswitch',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      contestType: 'Cool',
      maxMovePower: 120,
      name: 'Volt Switch',
      pp: 20,
      priority: 0,
      shortDesc: 'User switches out after damaging the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'volttackle',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Cool',
      maxMovePower: 140,
      name: 'Volt Tackle',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 33% recoil. 10% chance to paralyze target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'wakeupslap',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Wake-Up Slap',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles if target is asleep, and wakes it.',
      target: 'Normal',
      type: 'Fighting'
    }
  ],
  [
    'watergun',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      contestType: 'Cute',
      desc: 'No additional effect.',
      maxMovePower: 90,
      name: 'Water Gun',
      pp: 25,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'waterpledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokémon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
      maxMovePower: 130,
      name: 'Water Pledge',
      pp: 10,
      priority: 0,
      shortDesc: 'Use with Grass or Fire Pledge for added effect.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'waterpulse',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Has a 20% chance to confuse the target.',
      maxMovePower: 110,
      name: 'Water Pulse',
      pp: 20,
      priority: 0,
      shortDesc: '20% chance to confuse the target.',
      target: 'Any',
      type: 'Water'
    }
  ],
  [
    'watershuriken',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Special',
      contestType: 'Cool',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times.",
      maxMovePower: 90,
      name: 'Water Shuriken',
      pp: 20,
      priority: 1,
      shortDesc: 'Hits 2-5 times in one turn.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'watersport',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      isNonstandard: 'Past',
      name: 'Water Sport',
      pp: 15,
      priority: 0,
      shortDesc: 'For 5 turns, Fire-type attacks have 1/3 power.',
      target: 'All',
      type: 'Water'
    }
  ],
  [
    'waterspout',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      contestType: 'Beautiful',
      maxMovePower: 150,
      name: 'Water Spout',
      pp: 5,
      priority: 0,
      shortDesc: "Less power as user's HP decreases. Hits foe(s).",
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'waterfall',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Has a 20% chance to make the target flinch.',
      isFieldMove:
        "The player can climb up waterfalls on the Pokémon's back. Waterfall can be taught to Pokémon with HM07 in generations II, III and IV, and HM05 in generation 5 onwards. It was available in generation I as a level-up move, but did not have any out-of-battle effects.",
      maxMovePower: 130,
      name: 'Waterfall',
      pp: 15,
      priority: 0,
      shortDesc: '20% chance to make the target flinch.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'wavecrash',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: 'The user shrouds itself in water and slams into the target with its whole body to inflict damage. This also damages the user and raises the user’s action speed.',
      name: 'Wave Crash',
      pp: 10,
      priority: 0,
      shortDesc: "Has 33% recoil and raises user's action speed",
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'weatherball',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      contestType: 'Beautiful',
      desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, the move is still Normal-type and does not have a base power boost.",
      maxMovePower: 130,
      name: 'Weather Ball',
      pp: 10,
      priority: 0,
      shortDesc: 'Power doubles and type varies in each weather.',
      target: 'Normal',
      type: 'Normal',
      zMovePower: 160
    }
  ],
  [
    'whirlpool',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Special',
      contestType: 'Beautiful',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      isFieldMove:
        "The Pokémon can dismiss small whirlpools in the water. Whirlpool is taught to Pokémon with HM06 in generation II and generation IV's HeartGold and SoulSilver as HM05",
      maxMovePower: 90,
      name: 'Whirlpool',
      pp: 15,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'whirlwind',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Whirlwind',
      pp: 20,
      priority: -6,
      shortDesc: 'Forces the target to switch to a random ally.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'wickedblow',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.',
      name: 'Wicked Blow',
      pp: 5,
      priority: 0,
      shortDesc: 'Always results in a critical hit.',
      target: 'Normal',
      type: 'Dark'
    }
  ],
  [
    'wideguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "The user and its party members are protected from moves made by other Pokémon, including allies, during this turn that target all adjacent foes or all adjacent Pokémon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
      name: 'Wide Guard',
      pp: 10,
      priority: 3,
      shortDesc: 'Protects allies from multi-target damage this turn.',
      target: "Ally's Side",
      type: 'Rock'
    }
  ],
  [
    'wildboltstorm',
    {
      accuracy: 80,
      basePower: '95',
      category: 'Special',
      desc: 'The user summons a thunderous tempest and savagely attacks with lightning and wind. Has a 30% chance to paralyze the target.',
      name: 'Wildbolt Storm',
      pp: 5,
      priority: 0,
      shortDesc: 'Has a 30% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'wildcharge',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 130,
      name: 'Wild Charge',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 1/4 recoil.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'willowisp',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      contestType: 'Beautiful',
      desc: 'Burns the target.',
      name: 'Will-O-Wisp',
      pp: 15,
      priority: 0,
      shortDesc: 'Burns the target.',
      target: 'Normal',
      type: 'Fire',
      aliases: ['wow']
    }
  ],
  [
    'wingattack',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 110,
      name: 'Wing Attack',
      pp: 35,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Any',
      type: 'Flying'
    }
  ],
  [
    'wish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "At the end of the next turn, the Pokémon at the user's position has 1/2 of the user's maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
      name: 'Wish',
      pp: 10,
      priority: 0,
      shortDesc: "Next turn, 50% of the user's max HP is restored.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'withdraw',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: "Raises the user's Defense by 1 stage.",
      name: 'Withdraw',
      pp: 40,
      priority: 0,
      shortDesc: "Raises the user's Defense by 1.",
      target: 'Self',
      type: 'Water'
    }
  ],
  [
    'wonderroom',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      name: 'Wonder Room',
      pp: 10,
      priority: 0,
      shortDesc: 'For 5 turns, all Defense and Sp. Def stats switch.',
      target: 'All',
      type: 'Psychic'
    }
  ],
  [
    'woodhammer',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      contestType: 'Tough',
      maxMovePower: 140,
      name: 'Wood Hammer',
      pp: 15,
      priority: 0,
      shortDesc: 'Has 33% recoil.',
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'workup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Tough',
      desc: "Raises the user's Attack and Special Attack by 1 stage.",
      name: 'Work Up',
      pp: 30,
      priority: 0,
      shortDesc: "Raises the user's Attack and Sp. Atk by 1.",
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'worryseed',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Clever',
      desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
      name: 'Worry Seed',
      pp: 10,
      priority: 0,
      shortDesc: "The target's Ability becomes Insomnia.",
      target: 'Normal',
      type: 'Grass'
    }
  ],
  [
    'wrap',
    {
      accuracy: 90,
      basePower: '15',
      category: 'Physical',
      contestType: 'Tough',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      maxMovePower: 90,
      name: 'Wrap',
      pp: 20,
      priority: 0,
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'wringout',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      contestType: 'Tough',
      isNonstandard: 'Past',
      name: 'Wring Out',
      pp: 5,
      priority: 0,
      shortDesc: 'More power the more HP the target has left.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'xscissor',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'No additional effect.',
      maxMovePower: 130,
      name: 'X-Scissor',
      pp: 15,
      priority: 0,
      shortDesc: 'No additional effect.',
      target: 'Normal',
      type: 'Bug'
    }
  ],
  [
    'yawn',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      contestType: 'Cute',
      desc: 'Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.',
      name: 'Yawn',
      pp: 10,
      priority: 0,
      shortDesc: 'Puts the target to sleep after 1 turn.',
      target: 'Normal',
      type: 'Normal'
    }
  ],
  [
    'zapcannon',
    {
      accuracy: 50,
      basePower: '120',
      category: 'Special',
      contestType: 'Cool',
      desc: 'Has a 100% chance to paralyze the target.',
      maxMovePower: 140,
      name: 'Zap Cannon',
      pp: 5,
      priority: 0,
      shortDesc: '100% chance to paralyze the target.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'zenheadbutt',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Physical',
      contestType: 'Clever',
      desc: 'Has a 20% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Zen Headbutt',
      pp: 15,
      priority: 0,
      shortDesc: '20% chance to make the target flinch.',
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'zingzap',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      contestType: 'Cool',
      desc: 'Has a 30% chance to make the target flinch.',
      maxMovePower: 130,
      name: 'Zing Zap',
      pp: 10,
      priority: 0,
      shortDesc: '30% chance to make the target flinch.',
      target: 'Normal',
      type: 'Electric'
    }
  ],
  [
    'zippyzap',
    {
      accuracy: 80,
      basePower: '50',
      category: 'Physical',
      contestType: 'Cool',
      desc: "Has a 100% chance to raise the user's evasion by 1 stage.",
      name: 'Zippy Zap',
      pp: 10,
      priority: 2,
      shortDesc: "Goes first. Raises user's evasion by 1.",
      target: 'Normal',
      type: 'Electric'
    }
  ]
]);

for (const [key, value] of moves.entries()) {
  value.key = key;
}
