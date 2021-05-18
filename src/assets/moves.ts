/* eslint-disable max-len*/
import GraphQLCollection from '#utils/GraphQLCollection';
import type { Pokemon } from '#utils/pokemon';

/** The moves in Pokémon */
export default new GraphQLCollection<string, Pokemon.Move>([
  [
    '10000000voltthunderbolt',
    {
      accuracy: 100,
      basePower: '195',
      category: 'Special',
      desc: 'Has a very high chance for a critical hit.',
      shortDesc: 'Very high critical hit ratio.',
      name: '10,000,000 Volt Thunderbolt',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'pikashuniumz',
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'absorb',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Absorb',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever',
      maxMovePower: 90
    }
  ],
  [
    'accelerock',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Accelerock',
      pp: 20,
      priority: 1,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'acid',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      shortDesc: '10% chance to lower the foe(s) Sp. Def by 1.',
      name: 'Acid',
      pp: 30,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Poison',
      contestType: 'Clever',
      maxMovePower: 70
    }
  ],
  [
    'acidarmor',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Defense by 2 stages.",
      shortDesc: "Raises the user's Defense by 2.",
      name: 'Acid Armor',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'aciddownpour',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Acid Downpour',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'poisoniumz',
      target: 'Normal',
      type: 'Poison',
      contestType: 'Cool'
    }
  ],
  [
    'acidspray',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      shortDesc: "100% chance to lower the target's Sp. Def by 2.",
      name: 'Acid Spray',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Beautiful',
      maxMovePower: 70
    }
  ],
  [
    'acrobatics',
    {
      accuracy: 100,
      basePower: '55',
      category: 'Physical',
      desc: 'Power doubles if the user has no held item.',
      shortDesc: 'Power doubles if the user has no held item.',
      name: 'Acrobatics',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'acupressure',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Raises a random stat of the user or an ally by 2.',
      name: 'Acupressure',
      pp: 30,
      priority: 0,
      target: 'Adjacent Ally or Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'aerialace',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Aerial Ace',
      pp: 20,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'aeroblast',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Special',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Aeroblast',
      pp: 5,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'afteryou',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'The target makes its move right after the user.',
      name: 'After You',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'agility',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Speed by 2 stages.",
      shortDesc: "Raises the user's Speed by 2.",
      name: 'Agility',
      pp: 30,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Cool'
    }
  ],
  [
    'aircutter',
    {
      accuracy: 95,
      basePower: '60',
      category: 'Special',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio. Hits adjacent foes.',
      name: 'Air Cutter',
      pp: 25,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'airslash',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Special',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Air Slash',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'alloutpummeling',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'All-Out Pummeling',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'fightiniumz',
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'allyswitch',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'The user swaps positions with its ally.',
      name: 'Ally Switch',
      pp: 15,
      priority: 2,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'amnesia',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Special Defense by 2 stages.",
      shortDesc: "Raises the user's Sp. Def by 2.",
      name: 'Amnesia',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Cute'
    }
  ],
  [
    'anchorshot',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',

      shortDesc: 'Prevents the target from switching out.',
      name: 'Anchor Shot',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'ancientpower',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      shortDesc: '10% chance to raise all stats by 1 (not acc/eva).',
      name: 'Ancient Power',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'appleacid',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: "Has a 100% chance to lower the target's Special Defense by 1 stage.",
      shortDesc: "100% chance to lower the target's Sp. Def by 1.",
      name: 'Apple Acid',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      maxMovePower: 130
    }
  ],
  [
    'aquajet',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Aqua Jet',
      pp: 20,
      priority: 1,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'aquaring',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User recovers 1/16 max HP per turn.',
      name: 'Aqua Ring',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Water',
      contestType: 'Beautiful'
    }
  ],
  [
    'aquatail',
    {
      accuracy: 90,
      basePower: '90',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Aqua Tail',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'armthrust',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Arm Thrust',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 70
    }
  ],
  [
    'aromatherapy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Every Pokémon in the user's party is cured of its non-volatile status condition. Active Pokémon with the Sap Sipper Ability are not cured, unless they are the user.",

      shortDesc: "Cures the user's party of all status conditions.",
      name: 'Aromatherapy',
      pp: 5,
      priority: 0,
      target: "Ally's Side",
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'aromaticmist',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises an ally's Sp. Def by 1.",
      name: 'Aromatic Mist',
      pp: 20,
      priority: 0,
      target: 'Adjacent Ally',
      type: 'Fairy',
      contestType: 'Beautiful'
    }
  ],
  [
    'assist',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
      shortDesc: 'Uses a random move known by a team member.',
      name: 'Assist',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'assurance',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      shortDesc: 'Power doubles if target was damaged this turn.',
      name: 'Assurance',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 110
    }
  ],
  [
    'astralbarrage',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: 'Astral Barrage',
      pp: 5,
      priority: 0,
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
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Astonish',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'attackorder',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Attack Order',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'attract',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'A target of the opposite gender gets infatuated.',
      name: 'Attract',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'aurasphere',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Aura Sphere',
      pp: 20,
      priority: 0,
      target: 'Any',
      type: 'Fighting',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'aurawheel',
    {
      accuracy: 100,
      basePower: '110',
      category: 'Physical',
      desc: "Has a 100% chance to raise the user's Speed by 1 stage. If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
      shortDesc: 'Morpeko: Electric; Hangry: Dark; 100% +1 Spe.',
      name: 'Aura Wheel',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      maxMovePower: 140
    }
  ],
  [
    'aurorabeam',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
      shortDesc: "10% chance to lower the foe's Attack by 1.",
      name: 'Aurora Beam',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 120
    }
  ],
  [
    'auroraveil',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, damage to allies is halved. Hail only.',
      name: 'Aurora Veil',
      pp: 20,
      priority: 0,
      target: "Ally's Side",
      type: 'Ice',
      contestType: 'Beautiful'
    }
  ],
  [
    'autotomize',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises the user's Speed by 2; user loses 100 kg.",
      name: 'Autotomize',
      pp: 15,
      priority: 0,
      target: 'Self',
      type: 'Steel',
      contestType: 'Beautiful'
    }
  ],
  [
    'avalanche',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Power doubles if the user was hit by the target this turn.',
      shortDesc: 'Power doubles if user is damaged by the target.',
      name: 'Avalanche',
      pp: 10,
      priority: -4,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'babydolleyes',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack by 1 stage.",
      shortDesc: "Lowers the target's Attack by 1.",
      name: 'Baby-Doll Eyes',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cute'
    }
  ],
  [
    'baddybad',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Special',
      desc: 'This move summons Reflect for 5 turns upon use.',
      shortDesc: 'Summons Reflect.',
      name: 'Baddy Bad',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'banefulbunker',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Protects from moves. Contact: poison.',
      name: 'Baneful Bunker',
      pp: 10,
      priority: 4,
      target: 'Self',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'barrage',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Barrage',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'barrier',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Defense by 2 stages.",
      shortDesc: "Raises the user's Defense by 2.",
      name: 'Barrier',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Psychic',
      contestType: 'Cool'
    }
  ],
  [
    'batonpass',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User switches, passing stat changes and more.',
      name: 'Baton Pass',
      pp: 40,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'beakblast',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Burns on contact with the user before it moves.',
      name: 'Beak Blast',
      pp: 15,
      priority: -3,
      target: 'Normal',
      type: 'Flying',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'beatup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      desc: "Hits one time for the user and one time for each unfainted Pokémon without a non-volatile status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokémon's base Attack; each hit is considered to come from the user.",

      shortDesc: 'All healthy allies aid in damaging the target.',
      name: 'Beat Up',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 100
    }
  ],
  [
    'belch',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Special',
      shortDesc: 'Cannot be selected until the user eats a Berry.',
      name: 'Belch',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'behemothbash',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Damage doubles if the target is Dynamaxed.',
      name: 'Behemoth Bash',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      maxMovePower: 130
    }
  ],
  [
    'behemothblade',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Damage doubles if the target is Dynamaxed.',
      name: 'Behemoth Blade',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      maxMovePower: 130
    }
  ],
  [
    'belch',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Special',
      desc: 'This move cannot be selected until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokémon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selected and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one.',
      shortDesc: 'Cannot be selected until the user eats a Berry.',
      name: 'Belch',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      maxMovePower: 95
    }
  ],
  [
    'bellydrum',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User loses 50% max HP. Maximizes Attack.',
      name: 'Belly Drum',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'bestow',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User passes its held item to the target.',
      name: 'Bestow',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'bide',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'Waits 2 turns; deals double the damage taken.',
      name: 'Bide',
      pp: 10,
      priority: 1,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'bind',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Bind',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'bite',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Bite',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'blackholeeclipse',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Black Hole Eclipse',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'darkiniumz',
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool'
    }
  ],
  [
    'blastburn',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User cannot move next turn.',
      desc: 'If this move is successful, the user must recharge on the following turn and cannot select a move.',
      name: 'Blast Burn',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'blazekick',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      shortDesc: 'High critical hit ratio. 10% chance to burn.',
      name: 'Blaze Kick',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'blizzard',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      shortDesc: "10% chance to freeze foe(s). Can't miss in hail.",
      name: 'Blizzard',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'block',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',
      shortDesc: 'The target cannot switch out.',
      name: 'Block',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'bloomdoom',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Bloom Doom',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'grassiumz',
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool'
    }
  ],
  [
    'blueflare',
    {
      accuracy: 85,
      basePower: '130',
      category: 'Special',
      desc: 'Has a 20% chance to burn the target.',
      shortDesc: '20% chance to burn the target.',
      name: 'Blue Flare',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'bodypress',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Damage is calculated using the user's Defense stat as its Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
      shortDesc: "Uses user's Def stat as Atk in damage calculation.",
      name: 'Body Press',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      maxMovePower: 90
    }
  ],
  [
    'bodyslam',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      shortDesc: '30% chance to paralyze the target.',
      name: 'Body Slam',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'boltbeak',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: 'Power doubles if the user moves before the target.',
      shortDesc: 'Power doubles if user moves before the target.',
      name: 'Bolt Beak',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      maxMovePower: 130
    }
  ],
  [
    'boltstrike',
    {
      accuracy: 85,
      basePower: '130',
      category: 'Physical',
      desc: 'Has a 20% chance to paralyze the target.',
      shortDesc: '20% chance to paralyze the target.',
      name: 'Bolt Strike',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'boneclub',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 10% chance to make the target flinch.',
      shortDesc: '10% chance to make the target flinch.',
      name: 'Bone Club',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough'
    }
  ],
  [
    'bonerush',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Bone Rush',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'bonemerang',
    {
      accuracy: 90,
      basePower: '50',
      category: 'Physical',
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Bonemerang',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'boomburst',
    {
      accuracy: 100,
      basePower: '140',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent Pokémon.',
      name: 'Boomburst',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'bounce',
    {
      accuracy: 85,
      basePower: '85',
      category: 'Physical',
      shortDesc: 'Bounces turn 1. Hits turn 2. 30% paralyze.',
      name: 'Bounce',
      pp: 5,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'bouncybubble',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Bouncy Bubble',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Clever'
    }
  ],
  [
    'bravebird',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Has 33% recoil.',
      name: 'Brave Bird',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'branchpoke',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Branch Poke',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      maxMovePower: 90
    }
  ],
  [
    'breakingswipe',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
      shortDesc: '100% chance to lower the foe(s) Attack by 1.',
      name: 'Breaking Swipe',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon',
      maxMovePower: 110
    }
  ],
  [
    'breakneckblitz',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Breakneck Blitz',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'normaliumz',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'brickbreak',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      shortDesc: 'Destroys screens, unless the target is immune.',
      name: 'Brick Break',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'brine',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      shortDesc: "Power doubles if the target's HP is 50% or less.",
      name: 'Brine',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 120
    }
  ],
  [
    'brutalswing',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent Pokémon.',
      name: 'Brutal Swing',
      pp: 20,
      priority: 0,
      target: 'All Adjacent',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'bubble',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
      shortDesc: '10% chance to lower the foe(s) Speed by 1.',
      name: 'Bubble',
      pp: 30,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Adjacent Foes',
      type: 'Water',
      contestType: 'Cute'
    }
  ],
  [
    'bubblebeam',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
      shortDesc: "10% chance to lower the target's Speed by 1.",
      name: 'Bubble Beam',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 120
    }
  ],
  [
    'bugbite',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      shortDesc: "User steals and eats the target's Berry.",
      name: 'Bug Bite',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 110
    }
  ],
  [
    'bugbuzz',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      name: 'Bug Buzz',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'bulkup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack and Defense by 1 stage.",
      shortDesc: "Raises the user's Attack and Defense by 1.",
      name: 'Bulk Up',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'bulldoze',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: '100% chance to lower adjacent Pkmn Speed by 1.',
      name: 'Bulldoze',
      pp: 20,
      priority: 0,
      target: 'All Adjacent',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'bulletpunch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Bullet Punch',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'bulletseed',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Bullet Seed',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'burningjealousy',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: 'Has a 100% chance to burn the target if it had a stat stage raised this turn.',
      shortDesc: '100% burns a target that had a stat rise this turn.',
      name: 'Burning Jealousy',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fire',
      contestType: 'Tough'
    }
  ],
  [
    'burningjealousy',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: 'Has a 100% chance to burn the target if it had a stat stage raised this turn.',
      shortDesc: '100% burns a target that had a stat rise this turn.',
      name: 'Burning Jealousy',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fire',
      contestType: 'Tough'
    }
  ],
  [
    'burnup',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Special',
      shortDesc: "User's Fire type becomes typeless; must be Fire.",
      name: 'Burn Up',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Clever',
      maxMovePower: 140
    }
  ],
  [
    'buzzybuzz',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Special',
      desc: 'Has a 100% chance to paralyze the foe.',
      shortDesc: '100% chance to paralyze the foe.',
      name: 'Buzzy Buzz',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'calmmind',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1.",
      name: 'Calm Mind',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'camouflage',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Changes user's type by terrain (default Normal).",
      name: 'Camouflage',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'captivate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Lowers the foe(s) Sp. Atk by 2 if opposite gender.',
      name: 'Captivate',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'catastropika',
    {
      accuracy: 100,
      basePower: '210',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Catastropika',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'pikaniumz',
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'celebrate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'It is your birthday.',
      shortDesc: 'No competitive use. Or any use.',
      name: 'Celebrate',
      pp: 40,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'charge',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Boosts next Electric move and user's Sp. Def by 1.",
      name: 'Charge',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'chargebeam',
    {
      accuracy: 90,
      basePower: '50',
      category: 'Special',
      desc: "Has a 70% chance to raise the user's Special Attack by 1 stage.",
      shortDesc: "70% chance to raise the user's Sp. Atk by 1.",
      name: 'Charge Beam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Beautiful',
      maxMovePower: 100
    }
  ],
  [
    'charm',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack by 2 stages.",
      shortDesc: "Lowers the target's Attack by 2.",
      name: 'Charm',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cute'
    }
  ],
  [
    'chatter',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: 'Has a 100% chance to confuse the target.',
      shortDesc: '100% chance to confuse the target.',
      name: 'Chatter',
      pp: 20,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cute',
      maxMovePower: 120,
      isFieldMove:
        "It can be used to record and temporarily alter the battle cry of a Chatot. It does not function correctly with other Pokémon. The recorded audio is reset to Chatot's default cry when it is deposited into a box."
    }
  ],
  [
    'chipaway',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: "Ignores the target's stat stage changes, including evasiveness.",
      shortDesc: "Ignores the target's stat stage changes.",
      name: 'Chip Away',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'circlethrow',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Physical',
      shortDesc: 'Forces the target to switch to a random ally.',
      name: 'Circle Throw',
      pp: 10,
      priority: -6,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 80
    }
  ],
  [
    'clamp',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Physical',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Clamp',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough'
    }
  ],
  [
    'clangingscales',
    {
      accuracy: 100,
      basePower: '110',
      category: 'Special',
      desc: "Lowers the user's Defense by 1 stage.",
      shortDesc: "Lowers the user's Defense by 1.",
      name: 'Clanging Scales',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'clangoroussoul',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage in exchange for the user losing 33% of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Defense, Special Attack, Special Defense, and Speed stat stages would not change.",
      shortDesc: 'User loses 33% of its max HP. +1 to all stats.',
      name: 'Clangorous Soul',
      pp: 5,
      priority: 0,
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
      shortDesc: "Raises the user's Atk/Def/SpAtk/SpDef/Spe by 1.",
      name: 'Clangorous Soulblaze',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'kommoniumz',
      target: 'Adjacent Foes',
      type: 'Dragon',
      contestType: 'Cool'
    }
  ],
  [
    'clearsmog',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc: "Resets all of the target's stat stages to 0.",
      shortDesc: "Eliminates the target's stat changes.",
      name: 'Clear Smog',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Beautiful',
      maxMovePower: 75
    }
  ],
  [
    'closecombat',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      desc: "Lowers the user's Defense and Special Defense by 1 stage.",
      shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
      name: 'Close Combat',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 95
    }
  ],
  [
    'coaching',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Attack and Defense by 1 stage. Fails if there is no ally adjacent to the user.",
      shortDesc: "Raises an ally's Attack and Defense by 1.",
      name: 'Coaching',
      pp: 10,
      priority: 0,
      target: 'Adjacent Ally',
      type: 'Fighting'
    }
  ],
  [
    'coaching',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Attack and Defense by 1 stage. Fails if there is no ally adjacent to the user.",
      shortDesc: "Raises an ally's Attack and Defense by 1.",
      name: 'Coaching',
      pp: 10,
      priority: 0,
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
      desc: "Raises the user's Attack, Defense, and accuracy by 1 stage.",
      shortDesc: "Raises user's Attack, Defense, and accuracy by 1.",
      name: 'Coil',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'cometpunch',
    {
      accuracy: 85,
      basePower: '18',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Comet Punch',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'confide',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Special Attack by 1 stage.",
      shortDesc: "Lowers the target's Sp. Atk by 1.",
      name: 'Confide',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'confuseray',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to become confused.',
      shortDesc: 'Confuses the target.',
      name: 'Confuse Ray',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever'
    }
  ],
  [
    'confusion',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc: 'Has a 10% chance to confuse the target.',
      shortDesc: '10% chance to confuse the target.',
      name: 'Confusion',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 100
    }
  ],
  [
    'constrict',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
      shortDesc: "10% chance to lower the target's Speed by 1.",
      name: 'Constrict',
      pp: 35,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'continentalcrush',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Continental Crush',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'rockiumz',
      target: 'Normal',
      type: 'Rock',
      contestType: 'Cool'
    }
  ],
  [
    'conversion',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Changes user's type to match its first move.",
      name: 'Conversion',
      pp: 30,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'conversion2',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Changes user's type to resist target's last move.",
      name: 'Conversion 2',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'copycat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user uses the last move used by any Pokemon, including itself. The base move of Max and G-Max Moves is considered for this purpose. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Dragon Tail, Dynamax Cannon, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Obstruct, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, or Whirlwind.",
      shortDesc: 'Uses the last move used in the battle.',
      name: 'Copycat',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'coreenforcer',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      desc: "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
      shortDesc: 'Nullifies the foe(s) Ability if the target moves first.',
      name: 'Core Enforcer',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon',
      contestType: 'Tough',
      maxMovePower: 130,
      zMovePower: 140
    }
  ],
  [
    'corkscrewcrash',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Corkscrew Crash',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'steeliumz',
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool'
    }
  ],
  [
    'corrosivegas',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The target loses its held item. This move cannot cause Pokémon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.',
      shortDesc: "Removes adjacent Pokémon's held items.",
      name: 'Corrosive Gas',
      pp: 40,
      priority: 0,
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
      desc: "Raises the user's Defense and Special Defense by 1 stage.",
      shortDesc: "Raises the user's Defense and Sp. Def by 1.",
      name: 'Cosmic Power',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'cottonguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Defense by 3 stages.",
      shortDesc: "Raises the user's Defense by 3.",
      name: 'Cotton Guard',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Grass',
      contestType: 'Cute'
    }
  ],
  [
    'cottonspore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Speed by 2 stages.",
      shortDesc: "Lowers the target's Speed by 2.",
      name: 'Cotton Spore',
      pp: 40,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Grass',
      contestType: 'Beautiful'
    }
  ],
  [
    'counter',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      desc: "Deals damage to the opposing Pokémon equal to twice the damage dealt by the last move used in the battle. This move ignores type immunity. Fails if the user moves first, or if the opposing side's last move was Counter, had 0 power, or was not Normal or Fighting type. Fails if the last move used by either side did 0 damage and was not Confuse Ray, Conversion, Focus Energy, Glare, Haze, Leech Seed, Light Screen, Mimic, Mist, Poison Gas, Poison Powder, Recover, Reflect, Rest, Soft-Boiled, Splash, Stun Spore, Substitute, Supersonic, Teleport, Thunder Wave, Toxic, or Transform.",
      shortDesc: 'If hit by Normal/Fighting move, deals 2x damage.',
      name: 'Counter',
      pp: 20,
      priority: -5,
      target: 'Foe that last hit user',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 75
    }
  ],
  [
    'courtchange',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Switches the Mist, Light Screen, Reflect, Spikes, Safeguard, Tailwind, Toxic Spikes, Stealth Rock, Water Pledge, Fire Pledge, Grass Pledge, Sticky Web, Aurora Veil, G-Max Steelsurge, G-Max Cannonade, G-Max Vine Lash, and G-Max Wildfire effects from the user's side to the opposing side and vice versa.",
      shortDesc: "Swaps user's field effects with the opposing side.",
      name: 'Court Change',
      pp: 10,
      priority: 0,
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
      shortDesc: "If the user has no item, it steals the target's.",
      name: 'Covet',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 110
    }
  ],
  [
    'crabhammer',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Crabhammer',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'craftyshield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Protects allies from Status moves this turn.',
      name: 'Crafty Shield',
      pp: 10,
      priority: 3,
      target: "Ally's Side",
      type: 'Fairy',
      contestType: 'Clever'
    }
  ],
  [
    'crosschop',
    {
      accuracy: 80,
      basePower: '100',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Cross Chop',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'crosspoison',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'High critical hit ratio. 10% chance to poison.',
      name: 'Cross Poison',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Cool',
      maxMovePower: 85
    }
  ],
  [
    'crunch',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
      shortDesc: "20% chance to lower the target's Defense by 1.",
      name: 'Crunch',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'crushclaw',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Physical',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      shortDesc: "50% chance to lower the target's Defense by 1.",
      name: 'Crush Claw',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'crushgrip',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'More power the more HP the target has left.',
      name: 'Crush Grip',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'curse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Curses if Ghost, else +1 Atk, +1 Def, -1 Spe.',
      name: 'Curse',
      pp: 10,
      priority: 0,
      target: 'Random',
      type: 'Ghost',
      contestType: 'Tough'
    }
  ],
  [
    'cut',
    {
      accuracy: 95,
      basePower: '50',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Cut',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 100,
      isFieldMove:
        'The Pokémon is able to cut down small trees, and prior to gen 4, tall grass. It is taught to Pokémon with HM01 in all generations.'
    }
  ],
  [
    'darkpulse',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 20% chance to make the target flinch.',
      shortDesc: '20% chance to make the target flinch.',
      name: 'Dark Pulse',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Dark',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'darkvoid',
    {
      accuracy: 50,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Darkrai: Puts the foe(s) to sleep.',
      name: 'Dark Void',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'darkestlariat',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: "Ignores the target's stat stage changes, including evasiveness.",
      shortDesc: "Ignores the target's stat stage changes.",
      name: 'Darkest Lariat',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'dazzlinggleam',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: 'Dazzling Gleam',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fairy',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'decorate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Attack and Special Attack by 2 stages.",
      shortDesc: "Raises the target's Attack and Sp. Atk by 2.",
      name: 'Decorate',
      pp: 15,
      priority: 0,
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
      desc: "Raises the user's Defense and Special Defense by 1 stage.",
      shortDesc: "Raises the user's Defense and Sp. Def by 1.",
      name: 'Defend Order',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Bug',
      contestType: 'Clever'
    }
  ],
  [
    'defensecurl',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises the user's Defense by 1.",
      name: 'Defense Curl',
      pp: 40,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'defog',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's evasiveness by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of evasiveness. If there is a terrain active and this move is successful, the terrain will be cleared.",
      shortDesc: '-1 evasion; clears terrain and hazards on both sides.',
      name: 'Defog',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Flying',
      contestType: 'Cool',
      isFieldMove:
        'The Pokémon can clear out fog on the field. Defog can be taught to a Pokémon by using HM05 in Diamond, Pearl, and Platinum. Since Generation V, it has lost its HM status.'
    }
  ],
  [
    'destinybond',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'If an opponent knocks out the user, it also faints.',
      name: 'Destiny Bond',
      pp: 5,
      priority: 0,
      target: 'Self',
      type: 'Ghost',
      contestType: 'Clever'
    }
  ],
  [
    'detect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Prevents moves from affecting the user this turn.',
      name: 'Detect',
      pp: 5,
      priority: 4,
      target: 'Self',
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'devastatingdrake',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Devastating Drake',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'dragoniumz',
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Cool'
    }
  ],
  [
    'diamondstorm',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      desc: "Has a 50% chance to raise the user's Defense by 2 stages.",
      shortDesc: "50% chance to raise user's Defense by 2.",
      name: 'Diamond Storm',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Rock',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'dig',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      shortDesc: 'Digs underground turn 1, strikes turn 2.',
      name: 'Dig',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130,
      isFieldMove:
        'The Pokémon can dig the player out of a cavern to the place where the player entered it, similar to an Escape Rope. It can be taught to a Pokémon by using TM28 in all generations. Several Pokémon can also learn the move by leveling up.'
    }
  ],
  [
    'disable',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 4 turns, disables the target's last move used.",
      desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
      name: 'Disable',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'disarmingvoice',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy. Hits foes.',
      name: 'Disarming Voice',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fairy',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'discharge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze adjacent Pokémon.',
      name: 'Discharge',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Electric',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'dive',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      shortDesc: 'Dives underwater turn 1, strikes turn 2.',
      name: 'Dive',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 130,
      isFieldMove:
        "The player can dive underwater on the Pokémon's back while surfing over deep waters. It can be taught to a Pokémon by using HM08 in Ruby, Sapphire, and Emerald. Since Generation IV it has been a regular level-up move. In Generation V, it has regained HM status as HM06; in Pokémon X and Y, it again lost its HM status; in Omega Ruby and Alpha Sapphire, it again regained HM status as HM07."
    }
  ],
  [
    'dizzypunch',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a 20% chance to confuse the target.',
      shortDesc: '20% chance to confuse the target.',
      name: 'Dizzy Punch',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'doomdesire',
    {
      accuracy: 100,
      basePower: '140',
      category: 'Special',
      shortDesc: 'Hits two turns after being used.',
      name: 'Doom Desire',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'doublehit',
    {
      accuracy: 90,
      basePower: '35',
      category: 'Physical',
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Double Hit',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'doubleironbash',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to make the target flinch.",
      shortDesc: 'Hits twice. 30% chance to make the target flinch.',
      name: 'Double Iron Bash',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Clever',
      maxMovePower: 140
    }
  ],
  [
    'doublekick',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Double Kick',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 80
    }
  ],
  [
    'doubleslap',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Double Slap',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'doubleteam',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's evasiveness by 1 stage.",
      shortDesc: "Raises the user's evasiveness by 1.",
      name: 'Double Team',
      pp: 15,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'doubleedge',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Has 33% recoil.',
      name: 'Double-Edge',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'dracometeor',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      desc: "Lowers the user's Special Attack by 2 stages.",
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      name: 'Draco Meteor',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'dragonascent',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      desc: "Lowers the user's Defense and Special Defense by 1 stage.",
      shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
      name: 'Dragon Ascent',
      pp: 5,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'dragonbreath',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze the target.',
      name: 'Dragon Breath',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'dragonclaw',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Dragon Claw',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'dragondance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack and Speed by 1 stage.",
      shortDesc: "Raises the user's Attack and Speed by 1.",
      name: 'Dragon Dance',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Dragon',
      contestType: 'Cool'
    }
  ],
  [
    'dragondarts',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokémon and its ally once each. If hitting one of these Pokémon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokémon twice instead. If this move is redirected, it hits that target twice.",
      shortDesc: 'Hits twice. Doubles: Tries to hit each foe once.',
      name: 'Dragon Darts',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      maxMovePower: 130
    }
  ],
  [
    'dragonenergy',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
      shortDesc: "Less power as user's HP decreases. Hits foe(s).",
      name: 'Dragon Energy',
      pp: 5,
      priority: 0,
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
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Dragon Hammer',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'dragonpulse',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Dragon Pulse',
      pp: 10,
      priority: 0,
      target: 'Any',
      type: 'Dragon',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'dragonrage',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'Deals 40 HP of damage to the target.',
      shortDesc: 'Always does 40 HP of damage.',
      name: 'Dragon Rage',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Cool'
    }
  ],
  [
    'dragonrush',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Physical',
      desc: 'Has a 20% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.',
      shortDesc: '20% chance to make the target flinch.',
      name: 'Dragon Rush',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'dragontail',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Physical',
      shortDesc: 'Forces the target to switch to a random ally.',
      name: 'Dragon Tail',
      pp: 10,
      priority: -6,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'drainpunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Drain Punch',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'drainingkiss',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      shortDesc: 'User recovers 75% of the damage dealt.',
      name: 'Draining Kiss',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cute',
      maxMovePower: 100
    }
  ],
  [
    'dreameater',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: 'User gains 1/2 HP inflicted. Sleeping target only.',
      name: 'Dream Eater',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'drillpeck',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Drill Peck',
      pp: 20,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'drillrun',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Drill Run',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'drumbeating',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: "100% chance to lower the target's Speed by 1.",
      name: 'Drum Beating',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      maxMovePower: 130
    }
  ],
  [
    'dualchop',
    {
      accuracy: 90,
      basePower: '40',
      category: 'Physical',
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Dual Chop',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'dynamicpunch',
    {
      accuracy: 50,
      basePower: '100',
      category: 'Physical',
      desc: 'Has a 100% chance to confuse the target.',
      shortDesc: '100% chance to confuse the target.',
      name: 'Dynamic Punch',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'dualwingbeat',
    {
      accuracy: 90,
      basePower: '40',
      category: 'Physical',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Dual Wingbeat',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Flying'
    }
  ],
  [
    'dualwingbeat',
    {
      accuracy: 90,
      basePower: '40',
      category: 'Physical',
      desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Dual Wingbeat',
      pp: 10,
      priority: 0,
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
      shortDesc: 'Damage doubles if the target is Dynamaxed.',
      name: 'Dynamax Cannon',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      maxMovePower: 140
    }
  ],
  [
    'earthpower',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      name: 'Earth Power',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'earthquake',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      desc: 'Damage doubles if the target is using Dig.',
      shortDesc: 'Hits adjacent Pokémon. Power doubles on Dig.',
      name: 'Earthquake',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'echoedvoice',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      shortDesc: 'Power increases when used on consecutive turns.',
      name: 'Echoed Voice',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'eerieimpulse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Special Attack by 2 stages.",
      shortDesc: "Lowers the target's Sp. Atk by 2.",
      name: 'Eerie Impulse',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'eeriespell',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'If this move is successful and the user has not fainted, the target loses 3 PP from its last move.',
      shortDesc: "Removes 3 PP from the target's last move.",
      name: 'Eerie Spell',
      pp: 5,
      priority: 0,
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
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Egg Bomb',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'electricterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokémon is multiplied by 1.3 and grounded Pokémon cannot fall asleep; Pokémon already asleep do not wake up. Grounded Pokémon cannot become affected by Yawn or fall asleep from its effect. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.',
      shortDesc: "5 turns. Grounded: +Electric power, can't sleep.",
      name: 'Electric Terrain',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'electrify',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Changes the target's move to Electric this turn.",
      name: 'Electrify',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'electroball',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: 'More power the faster the user is than the target.',
      name: 'Electro Ball',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'electroweb',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: '100% chance to lower the foe(s) Speed by 1.',
      name: 'Electroweb',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Electric',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'embargo',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 5 turns, the target's item has no effect.",
      name: 'Embargo',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'ember',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'Has a 10% chance to burn the target.',
      shortDesc: '10% chance to burn the target.',
      name: 'Ember',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'encore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'The target repeats its last move for 3 turns.',
      desc: 'For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, if the move is Assist, Copycat, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, or Transform, or if the target is Dynamaxed.',
      name: 'Encore',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'endeavor',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: "Lowers the target's HP to the user's HP.",
      name: 'Endeavor',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'endure',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user will survive attacks made by other Pokémon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'The user survives the next hit with at least 1 HP.',
      name: 'Endure',
      pp: 10,
      priority: 4,
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'energyball',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      name: 'Energy Ball',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'entrainment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode, or the same Ability as the user, or if the user's Ability is As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, or Zen Mode.",
      shortDesc: "The target's Ability changes to match the user's.",
      name: 'Entrainment',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'eruption',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      shortDesc: "Less power as user's HP decreases. Hits foe(s).",
      name: 'Eruption',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'eternabeam',
    {
      accuracy: 90,
      basePower: '160',
      category: 'Special',
      desc: 'If this move is successful, the user must recharge on the following turn and cannot select a move.',
      shortDesc: 'User cannot move next turn.',
      name: 'Eternabeam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      maxMovePower: 150
    }
  ],
  [
    'expandingforce',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'If the current terrain is Psychic Terrain and the user is grounded, this move hits all opposing Pokémon and has its power multiplied by 1.5.',
      shortDesc: 'User on Psychic Terrain: 1.5x power, hits foes.',
      name: 'Expanding Force',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic'
    }
  ],
  [
    'expandingforce',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'If the current terrain is Psychic Terrain and the user is grounded, this move hits all opposing Pokémon and has its power multiplied by 1.5.',
      shortDesc: 'User on Psychic Terrain: 1.5x power, hits foes.',
      name: 'Expanding Force',
      pp: 10,
      priority: 0,
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
      shortDesc: 'Hits adjacent Pokémon. The user faints.',
      name: 'Explosion',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'extrasensory',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 10% chance to make the target flinch.',
      shortDesc: '10% chance to make the target flinch.',
      name: 'Extrasensory',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'extremeevoboost',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises user's Atk, Def, SpA, SpD, and Spe by 2.",
      name: 'Extreme Evoboost',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'eeviumz',
      target: 'Self',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'extremespeed',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Nearly always goes first.',
      name: 'Extreme Speed',
      pp: 5,
      priority: 2,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'facade',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'Power doubles if user is burn/poison/paralyzed.',
      name: 'Facade',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 120
    }
  ],
  [
    'fairylock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Prevents all active Pokémon from switching next turn. A Pokémon can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. Fails if the effect is already active.',
      shortDesc: 'Prevents all Pokémon from switching next turn.',
      name: 'Fairy Lock',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Fairy',
      contestType: 'Clever'
    }
  ],
  [
    'fairywind',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Fairy Wind',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'fakeout',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
      shortDesc: 'Hits first. First turn out only. 100% flinch chance.',
      name: 'Fake Out',
      pp: 10,
      priority: 3,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'faketears',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Special Defense by 2 stages.",
      shortDesc: "Lowers the target's Sp. Def by 2.",
      name: 'Fake Tears',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cute'
    }
  ],
  [
    'falsesurrender',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      shortDesc: 'This move does not check accuracy.',
      name: 'False Surrender',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      maxMovePower: 130
    }
  ],
  [
    'falseswipe',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'Leaves the target with at least 1 HP.',
      shortDesc: 'Always leaves the target with at least 1 HP.',
      name: 'False Swipe',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'featherdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack by 2 stages.",
      shortDesc: "Lowers the target's Attack by 2.",
      name: 'Feather Dance',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Flying',
      contestType: 'Beautiful'
    }
  ],
  [
    'feint',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      shortDesc: 'Nullifies Detect, Protect, and Quick/Wide Guard.',
      name: 'Feint',
      pp: 10,
      priority: 2,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever',
      maxMovePower: 90
    }
  ],
  [
    'feintattack',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Feint Attack',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'fellstinger',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      shortDesc: "Raises user's Attack by 3 if this KOes the target.",
      name: 'Fell Stinger',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'fierydance',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: "Has a 50% chance to raise the user's Special Attack by 1 stage.",
      shortDesc: "50% chance to raise the user's Sp. Atk by 1.",
      name: 'Fiery Dance',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'fierywrath',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 20% chance to make the target flinch.',
      shortDesc: '20% chance to make the foe(s) flinch.',
      name: 'Fiery Wrath',
      pp: 10,
      priority: 0,
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
      shortDesc: "Does damage equal to the user's HP. User faints.",
      name: 'Final Gambit',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'fireblast',
    {
      accuracy: 85,
      basePower: '110',
      category: 'Special',
      desc: 'Has a 10% chance to burn the target.',
      shortDesc: '10% chance to burn the target.',
      name: 'Fire Blast',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'firefang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 10% chance to burn the target and a 10% chance to make it flinch.',
      shortDesc: '10% chance to burn. 10% chance to flinch.',
      name: 'Fire Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'firelash',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
      shortDesc: "100% chance to lower the target's Defense by 1.",
      name: 'Fire Lash',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'firepledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: "If one of the user's allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Fire Gem.",
      shortDesc: 'Use with Grass or Water Pledge for added effect.',
      name: 'Fire Pledge',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'firepunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: 'Has a 10% chance to burn the target.',
      shortDesc: '10% chance to burn the target.',
      name: 'Fire Punch',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'firespin',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Special',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Fire Spin',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'firstimpression',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: "Fails unless it is the user's first turn on the field.",
      shortDesc: 'Hits first. First turn out only.',
      name: 'First Impression',
      pp: 10,
      priority: 2,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'fishiousrend',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: 'Power doubles if the user moves before the target.',
      shortDesc: 'Power doubles if user moves before the target.',
      name: 'Fishious Rend',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      maxMovePower: 130
    }
  ],
  [
    'fissure',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'OHKOs the target. Fails if user is a lower level.',
      name: 'Fissure',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'flail',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
      shortDesc: 'More power the less HP the user has left.',
      name: 'Flail',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'flameburst',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      shortDesc: 'Damages Pokémon next to the target as well.',
      name: 'Flame Burst',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful'
    }
  ],
  [
    'flamecharge',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
      shortDesc: "100% chance to raise the user's Speed by 1.",
      name: 'Flame Charge',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'flamewheel',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 10% chance to burn the target.',
      shortDesc: '10% chance to burn the target. Thaws user.',
      name: 'Flame Wheel',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'flamethrower',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 10% chance to burn the target.',
      shortDesc: '10% chance to burn the target.',
      name: 'Flamethrower',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'flareblitz',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Has 33% recoil. 10% chance to burn. Thaws user.',
      name: 'Flare Blitz',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'flash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's accuracy by 1 stage.",
      shortDesc: "Lowers the target's accuracy by 1.",
      name: 'Flash',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      isFieldMove:
        'The Pokémon is able to light up dark caverns. Flash is taught to Pokémon with HM05 in the first three generations, and with TM70 since Generation IV.'
    }
  ],
  [
    'flashcannon',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      name: 'Flash Cannon',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'flatter',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Special Attack by 1 stage and confuses it.",
      shortDesc: "Raises the target's Sp. Atk by 1 and confuses it.",
      name: 'Flatter',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'fleurcannon',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      desc: "Lowers the user's Special Attack by 2 stages.",
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      name: 'Fleur Cannon',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'fling',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: "Flings the user's item at the target. Power varies.",
      name: 'Fling',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cute',
      maxMovePower: 100
    }
  ],
  [
    'flipturn',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.',
      shortDesc: 'User switches out after damaging the target.',
      name: 'Flip Turn',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Water'
    }
  ],
  [
    'flipturn',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.',
      shortDesc: 'User switches out after damaging the target.',
      name: 'Flip Turn',
      pp: 20,
      priority: 0,
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
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Floaty Fall',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Flying',
      contestType: 'Cool'
    }
  ],
  [
    'floralhealing',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Heals the target by 50% of its max HP.',
      name: 'Floral Healing',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Beautiful'
    }
  ],
  [
    'flowershield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Raises Defense by 1 of all active Grass types.',
      name: 'Flower Shield',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Fairy',
      contestType: 'Beautiful'
    }
  ],
  [
    'fly',
    {
      accuracy: 95,
      basePower: '90',
      category: 'Physical',
      shortDesc: 'Flies up on first turn, then strikes the next turn.',
      name: 'Fly',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Clever',
      maxMovePower: 130,
      isFieldMove:
        'The Pokémon can fly the player to any previously visited town/landmark. Fly can be taught to Pokémon with HM02 in all generations.'
    }
  ],
  [
    'flyingpress',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Combines Flying in its type effectiveness.',
      name: 'Flying Press',
      pp: 10,
      priority: 0,
      target: 'Any',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 90,
      zMovePower: 170
    }
  ],
  [
    'focusblast',
    {
      accuracy: 70,
      basePower: '120',
      category: 'Special',
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      name: 'Focus Blast',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 95
    }
  ],
  [
    'focusenergy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises the user's critical hit ratio by 2.",
      name: 'Focus Energy',
      pp: 30,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'focuspunch',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Physical',
      shortDesc: 'Fails if the user takes damage before it hits.',
      name: 'Focus Punch',
      pp: 20,
      priority: -3,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'followme',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "The foes' moves target the user on the turn used.",
      name: 'Follow Me',
      pp: 20,
      priority: 2,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'forcepalm',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze the target.',
      name: 'Force Palm',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 80
    }
  ],
  [
    'foresight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Fighting, Normal hit Ghost. Evasiveness ignored.',
      name: 'Foresight',
      pp: 40,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'forestscurse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Adds Grass to the target's type(s).",
      name: "Forest's Curse",
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'foulplay',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Physical',
      shortDesc: "Uses target's Attack stat in damage calculation.",
      name: 'Foul Play',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'freezeshock',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Physical',
      shortDesc: 'Charges turn 1. Hits turn 2. 30% paralyze.',
      name: 'Freeze Shock',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'freezedry',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      shortDesc: '10% chance to freeze. Super effective on Water.',
      name: 'Freeze-Dry',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 120
    }
  ],
  [
    'freezingglare',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 10% chance to freeze the target.',
      shortDesc: '10% chance to freeze the target.',
      name: 'Freezing Glare',
      pp: 10,
      priority: 0,
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
      desc: 'Resets the stat stages of all active Pokémon to 0.',
      shortDesc: 'Eliminates all stat changes.',
      name: 'Freezy Frost',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Clever'
    }
  ],
  [
    'frenzyplant',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User cannot move next turn.',
      name: 'Frenzy Plant',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 150
    }
  ],
  [
    'frostbreath',
    {
      accuracy: 90,
      basePower: '60',
      category: 'Special',
      shortDesc: 'Always results in a critical hit.',
      name: 'Frost Breath',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'frustration',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'Max 102 power at minimum Happiness.',
      name: 'Frustration',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'furyattack',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Fury Attack',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'furycutter',
    {
      accuracy: 95,
      basePower: '40',
      category: 'Physical',
      shortDesc: 'Power doubles with each hit, up to 160.',
      name: 'Fury Cutter',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'furyswipes',
    {
      accuracy: 80,
      basePower: '18',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Fury Swipes',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'fusionbolt',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Power doubles if used after Fusion Flare this turn.',
      name: 'Fusion Bolt',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'fusionflare',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: 'Power doubles if used after Fusion Bolt this turn.',
      name: 'Fusion Flare',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'futuresight',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      shortDesc: 'Hits two turns after being used.',
      name: 'Future Sight',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 140
    }
  ],
  [
    'gastroacid',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
      shortDesc: "Nullifies the target's Ability.",
      name: 'Gastro Acid',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'geargrind',
    {
      accuracy: 85,
      basePower: '50',
      category: 'Physical',
      shortDesc: 'Hits 2 times in one turn.',
      name: 'Gear Grind',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Clever',
      maxMovePower: 130,
      zMovePower: 180
    }
  ],
  [
    'gearup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Raises Atk, Sp. Atk of allies with Plus/Minus by 1.',
      name: 'Gear Up',
      pp: 20,
      priority: 0,
      target: "Ally's Side",
      type: 'Steel',
      contestType: 'Clever'
    }
  ],
  [
    'genesissupernova',
    {
      accuracy: 100,
      basePower: '185',
      category: 'Special',
      desc: 'The terrain becomes Psychic Terrain.',
      shortDesc: 'Summons Psychic Terrain.',
      name: 'Genesis Supernova',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'mewniumz',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool'
    }
  ],
  [
    'geomancy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Charges, then raises SpA, SpD, Spe by 2 turn 2.',
      name: 'Geomancy',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Fairy',
      contestType: 'Beautiful'
    }
  ],
  [
    'gigadrain',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Giga Drain',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'gigaimpact',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Physical',
      shortDesc: 'User cannot move next turn.',
      name: 'Giga Impact',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 150
    }
  ],
  [
    'gigavolthavoc',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Gigavolt Havoc',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'electriumz',
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'glaciallance',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: 'Glacial Lance',
      pp: 5,
      priority: 0,
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
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: '100% chance to lower the foe(s) Speed by 1.',
      name: 'Glaciate',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 120
    }
  ],
  [
    'glare',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Paralyzes the target.',
      shortDesc: 'Paralyzes the target.',
      name: 'Glare',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'glitzyglow',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Special',
      desc: 'This move summons Light Screen for 5 turns upon use.',
      shortDesc: 'Summons Light Screen.',
      name: 'Glitzy Glow',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'gmaxbefuddle',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side either falls asleep, becomes poisoned, or becomes paralyzed, even if they have a substitute.",
      shortDesc: 'Base move affects power. Foes: slp or psn or par.',
      name: 'G-Max Befuddle',
      pp: 5,
      priority: 0,
      isGMax: 'Butterfree',
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
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      name: 'G-Max Cannonade',
      pp: 10,
      priority: 0,
      isGMax: 'Blastoise',
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'gmaxcentiferno',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",

      shortDesc: 'Base move affects power. Foes: bound 4-5 turns.',
      name: 'G-Max Centiferno',
      pp: 5,
      priority: 0,
      isGMax: 'Centiskorch',
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'gmaxcentiferno',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: 'Traps and damages opponents. BP scales with base move.',
      name: 'G-Max Centiferno',
      pp: 5,
      priority: 0,
      isGMax: 'Centiskorch',
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
      shortDesc: 'Base move affects power. Allies: Crit Ratio +1.',
      name: 'G-Max Chi Strike',
      pp: 5,
      priority: 0,
      isGMax: 'Machamp',
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
      shortDesc: 'Base move affects power. Foes: infatuated.',
      name: 'G-Max Cuddle',
      pp: 5,
      priority: 0,
      isGMax: 'Eevee',
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
      shortDesc: 'Base move affects power. Foes: last move -2 PP.',
      name: 'G-Max Depletion',
      pp: 5,
      priority: 0,
      isGMax: 'Duraludon',
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
      desc: "Power is 160 regardless of the base move's Max Move power. This move and its effects ignore the Abilities of other Pokemon.",
      shortDesc: 'Always 160 power. Ignores Abilities.',
      name: 'G-Max Drum Solo',
      pp: 5,
      priority: 0,
      isGMax: 'Rillaboom',
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
      shortDesc: 'Base move affects power. Allies: +1/6 max HP.',
      name: 'G-Max Finale',
      pp: 5,
      priority: 0,
      isGMax: 'Alcremie',
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
      shortDesc: 'Base move affects power. Foes: -1 evasiveness.',
      name: 'G-Max Tartness',
      pp: 5,
      priority: 0,
      isGMax: 'Flapple',
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
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      name: 'G-Max Vine Lash',
      pp: 10,
      priority: 0,
      isGMax: 'Venusaur',
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
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      name: 'G-Max Volcalith',
      pp: 5,
      priority: 0,
      isGMax: 'Coalossal',
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
      shortDesc: 'Base move affects power. Foes: paralyzed.',
      name: 'G-Max Volt Crash',
      pp: 10,
      priority: 0,
      isGMax: 'Pikachu',
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
      shortDesc: 'Base move affects power. Foes: -1/6 HP, 4 turns.',
      name: 'G-Max Wildfire',
      pp: 10,
      priority: 0,
      isGMax: 'Charizard',
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
      shortDesc: 'Base move affects power. Ends Terrain, hazards.',
      name: 'G-Max Wind Rage',
      pp: 10,
      priority: 0,
      isGMax: 'Corviknight',
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
      desc: "Power is 160 regardless of the base move's Max Move power. This move and its effects ignore the Abilities of other Pokemon.",
      shortDesc: 'Always 160 power. Ignores Abilities.',
      name: 'G-Max Fireball',
      pp: 5,
      priority: 0,
      isGMax: 'Cinderace',
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
      shortDesc: 'Base move affects power. Foes: -2 Speed.',
      name: 'G-Max Foam Burst',
      pp: 5,
      priority: 0,
      isGMax: 'Kingler',
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
      shortDesc: 'Base move affects power. Foes: confused.',
      name: 'G-Max Gold Rush',
      pp: 5,
      priority: 0,
      isGMax: 'Meowth',
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
      shortDesc: 'Base move affects power. Starts Gravity.',
      name: 'G-Max Gravitas',
      pp: 5,
      priority: 0,
      isGMax: 'Orbeetle',
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
      desc: "Power is 160 regardless of the base move's Max Move power. This move and its effects ignore the Abilities of other Pokemon.",
      shortDesc: 'Always 160 power. Ignores Abilities.',
      name: 'G-Max Hydrosnipe',
      pp: 5,
      priority: 0,
      isGMax: 'Inteleon',
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
      shortDesc: 'Base move affects power. Foes: poisoned.',
      name: 'G-Max Malodor',
      pp: 5,
      priority: 0,
      isGMax: 'Garbodor',
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
      shortDesc: 'Base move affects power. Foes: Tormented.',
      name: 'G-Max Meltdown',
      pp: 5,
      priority: 0,
      isGMax: 'Melmetal',
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
      shortDesc: 'Base move affects power. Foes: Stealth Rock.',
      name: 'G-Max Stonesurge',
      pp: 5,
      priority: 0,
      isGMax: 'Drednaw',
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
      shortDesc: 'Base move affects power. Foes: psn or par.',
      name: 'G-Max Stun Shock',
      pp: 10,
      priority: 0,
      isGMax: 'Toxtricity',
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
      shortDesc: 'Base move affects power. Allies: status cured.',
      name: 'G-Max Sweetness',
      pp: 10,
      priority: 0,
      isGMax: 'Toxtricity',
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
      shortDesc: 'Base move affects power. Foes: trapped.',
      name: 'G-Max Terror',
      pp: 10,
      priority: 0,
      isGMax: 'Gengar',
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
      shortDesc: 'Base move affects power. Bypasses Max Guard.',
      name: 'G-Max One Blow',
      pp: 5,
      priority: 0,
      isGMax: 'Urshifu',
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
      shortDesc: 'Base move affects power. Bypasses Max Guard.',
      name: 'G-Max Rapid Flow',
      pp: 5,
      priority: 0,
      isGMax: 'Urshifu-Rapid-Strike',
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
      shortDesc: 'Base move affects power. 50% restores Berries.',
      name: 'G-Max Replenish',
      pp: 5,
      priority: 0,
      isGMax: 'Snorlax',
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
      shortDesc: 'Base move affects power. Allies: Aurora Veil.',
      name: 'G-Max Resonance',
      pp: 10,
      priority: 0,
      isGMax: 'Lapras',
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokémon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",

      shortDesc: 'Base move affects power. Foes: bound 4-5 turns.',
      name: 'G-Max Sandblast',
      pp: 5,
      priority: 0,
      isGMax: 'Sandaconda',
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
      shortDesc: 'Base move affects power. Foes: confused.',
      name: 'G-Max Smite',
      pp: 5,
      priority: 0,
      isGMax: 'Hatterene',
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
      shortDesc: 'Base move affects power. Target: 50% Yawn.',
      name: 'G-Max Snooze',
      pp: 5,
      priority: 0,
      isGMax: 'Grimmsnarl',
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
      shortDesc: 'Base move affects power. Foes: Steel hazard.',
      name: 'G-Max Steelsurge',
      pp: 5,
      priority: 0,
      isGMax: 'Copperajah',
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
      shortDesc: 'More power the heavier the target.',
      name: 'Grass Knot',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Grass',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'grasspledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: "If one of the user's allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Grass Gem.",
      shortDesc: 'Use with Fire or Water Pledge for added effect.',
      name: 'Grass Pledge',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'grasswhistle',
    {
      accuracy: 55,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep.',
      shortDesc: 'Puts the target to sleep.',
      name: 'Grass Whistle',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'grassyglide',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'If the current terrain is Grassy Terrain and the user is grounded, this move has its priority increased by 1.',
      shortDesc: 'User on Grassy Terrain: +1 priority.',
      name: 'Grassy Glide',
      pp: 20,
      priority: 0,
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
      desc: 'For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokémon is multiplied by 1.3, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokémon is multiplied by 0.5, and grounded Pokémon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.',
      shortDesc: '5 turns. Grounded: +Grass power,+1/16 max HP.',
      name: 'Grassy Terrain',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Grass',
      contestType: 'Beautiful'
    }
  ],
  [
    'gravapple',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Defense by 1 stage. Power is multiplied by 1.5 during Gravity's effect.",
      shortDesc: 'Target: 100% -1 Def. During Gravity: 1.5x power.',
      name: 'Grav Apple',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      maxMovePower: 130
    }
  ],
  [
    'gravity',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: '5 turns: no Ground immunities, 1.67x accuracy.',
      name: 'Gravity',
      pp: 5,
      priority: 0,
      target: 'All',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'growl',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack by 1 stage.",
      shortDesc: 'Lowers the foe(s) Attack by 1.',
      name: 'Growl',
      pp: 40,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'growth',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day or Desolate Land, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sunny Day or Desolate Land.",
      shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sun.",
      name: 'Growth',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'grudge',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'If the user faints, the attack used loses all its PP.',
      name: 'Grudge',
      pp: 5,
      priority: 0,
      target: 'Self',
      type: 'Ghost',
      contestType: 'Tough'
    }
  ],
  [
    'guardsplit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Averages Defense and Sp. Def stats with target.',
      name: 'Guard Split',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'guardswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Swaps Defense and Sp. Def changes with target.',
      name: 'Guard Swap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'guardianofalola',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: "Does damage equal to 3/4 target's current HP.",
      name: 'Guardian of Alola',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'tapuniumz',
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Tough'
    }
  ],
  [
    'guillotine',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'OHKOs the target. Fails if user is a lower level.',
      name: 'Guillotine',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'gunkshot',
    {
      accuracy: 80,
      basePower: '120',
      category: 'Physical',
      desc: 'Has a 30% chance to poison the target.',
      shortDesc: '30% chance to poison the target.',
      name: 'Gunk Shot',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough',
      maxMovePower: 95
    }
  ],
  [
    'gust',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'Damage doubles if the target is using Bounce, Fly, or Sky Drop.',
      shortDesc: 'Power doubles during Fly, Bounce, and Sky Drop.',
      name: 'Gust',
      pp: 35,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Clever',
      maxMovePower: 90
    }
  ],
  [
    'gyroball',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'More power the slower the user than the target.',
      name: 'Gyro Ball',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'hail',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, hail crashes down.',
      name: 'Hail',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Ice',
      contestType: 'Beautiful'
    }
  ],
  [
    'hammerarm',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      desc: "Lowers the user's Speed by 1 stage.",
      shortDesc: "Lowers the user's Speed by 1.",
      name: 'Hammer Arm',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'happyhour',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Money falls from the sky.',
      shortDesc: 'No competitive use.',
      name: 'Happy Hour',
      pp: 30,
      priority: 0,
      target: "Ally's Side",
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'harden',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Defense by 1 stage.",
      shortDesc: "Raises the user's Defense by 1.",
      name: 'Harden',
      pp: 30,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'haze',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Resets the stat stages of all active Pokémon to 0.',
      shortDesc: 'Eliminates all stat changes.',
      name: 'Haze',
      pp: 30,
      priority: 0,
      target: 'All',
      type: 'Ice',
      contestType: 'Beautiful'
    }
  ],
  [
    'headcharge',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Has 1/4 recoil.',
      name: 'Head Charge',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'headsmash',
    {
      accuracy: 80,
      basePower: '150',
      category: 'Physical',
      shortDesc: 'Has 1/2 recoil.',
      name: 'Head Smash',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 150
    }
  ],
  [
    'headbutt',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Headbutt',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 120,
      isFieldMove:
        "The Pokémon can shake a small tree which may cause a wild Pokémon to fall down. It can be taught to a Pokémon by using TM02 in Generation II. Though available as a level up move in Generation I and future generations, it only had status as a field move in Generation II and Generation IV's HeartGold and SoulSilver."
    }
  ],
  [
    'healbell',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Every Pokémon in the user's party is cured of its non-volatile status condition. Active Pokémon with the Soundproof Ability are not cured, unless they are the user.",
      shortDesc: "Cures the user's party of all status conditions.",
      name: 'Heal Bell',
      pp: 5,
      priority: 0,
      target: "Ally's Side",
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'healblock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, the foe(s) is prevented from healing.',
      name: 'Heal Block',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Adjacent Foes',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'healorder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      shortDesc: 'Heals the user by 50% of its max HP.',
      name: 'Heal Order',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Bug',
      contestType: 'Clever'
    }
  ],
  [
    'healpulse',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Heals the target by 50% of its max HP.',
      name: 'Heal Pulse',
      pp: 10,
      priority: 0,
      target: 'Any',
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'healingwish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user faints, and if the Pokemon brought out to replace it does not have full HP or has a non-volatile status condition, its HP is fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokemon that meets either of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokemon in its party.",
      shortDesc: 'User faints. Next hurt Pokemon is fully healed.',
      name: 'Healing Wish',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'heartstamp',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Heart Stamp',
      pp: 25,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cute'
    }
  ],
  [
    'heartswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user swaps all its stat stage changes with the target.',
      shortDesc: 'Swaps all stat changes with target.',
      name: 'Heart Swap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'heatcrash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'More power the heavier the user than the target.',
      name: 'Heat Crash',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'heatwave',
    {
      accuracy: 90,
      basePower: '95',
      category: 'Special',
      desc: 'Has a 10% chance to burn the target.',
      shortDesc: '10% chance to burn the foe(s).',
      name: 'Heat Wave',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'heavyslam',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'More power the heavier the user than the target.',
      name: 'Heavy Slam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'helpinghand',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "One adjacent ally's move power is 1.5x this turn.",
      name: 'Helping Hand',
      pp: 20,
      priority: 5,
      target: 'Adjacent Ally',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'hex',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: 'Power doubles if the target has a non-volatile status condition.',
      shortDesc: 'Power doubles if the target has a status ailment.',
      name: 'Hex',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever',
      maxMovePower: 120,
      zMovePower: 160
    }
  ],
  [
    'hiddenpower',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: '',
      shortDesc: '',
      name: 'Hidden Power Water',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Water',
      contestType: 'Clever',
      maxMovePower: 80
    }
  ],
  [
    'highhorsepower',
    {
      accuracy: 95,
      basePower: '95',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'High Horsepower',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'highjumpkick',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Physical',
      shortDesc: 'User is hurt by 50% of its max HP if it misses.',
      name: 'High Jump Kick',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 95
    }
  ],
  [
    'holdback',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'Leaves the target with at least 1 HP.',
      shortDesc: 'Always leaves the target with at least 1 HP.',
      name: 'Hold Back',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'holdhands',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'No competitive use. Or any use.',
      name: 'Hold Hands',
      pp: 40,
      priority: 0,
      target: 'Adjacent Ally',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'honeclaws',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack and accuracy by 1 stage.",
      shortDesc: "Raises the user's Attack and accuracy by 1.",
      name: 'Hone Claws',
      pp: 15,
      priority: 0,
      target: 'Self',
      type: 'Dark',
      contestType: 'Cute'
    }
  ],
  [
    'hornattack',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Horn Attack',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'horndrill',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'OHKOs the target. Fails if user is a lower level.',
      name: 'Horn Drill',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'hornleech',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Horn Leech',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'howl',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Raises the Attack of the user and all allies 1 stage.',
      shortDesc: "Raises the user's and ally's Attack by 1.",
      name: 'Howl',
      pp: 40,
      priority: 0,
      target: "Ally's Side",
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'hurricane',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      desc: "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokémon holding Utility Umbrella, this move's accuracy remains at 70%.",
      shortDesc: "30% chance to confuse target. Can't miss in rain.",
      name: 'Hurricane',
      pp: 10,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'hydrocannon',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User cannot move next turn.',
      name: 'Hydro Cannon',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'hydropump',
    {
      accuracy: 80,
      basePower: '110',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Hydro Pump',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'hydrovortex',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Hydro Vortex',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'wateriumz',
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool'
    }
  ],
  [
    'hyperbeam',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User cannot move next turn.',
      name: 'Hyper Beam',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 150
    }
  ],
  [
    'hyperfang',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 10% chance to make the target flinch.',
      shortDesc: '10% chance to make the target flinch.',
      name: 'Hyper Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'hypervoice',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: 'Hyper Voice',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'hyperspacefury',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: "Hoopa-U: Lowers user's Def by 1; breaks protection.",
      name: 'Hyperspace Fury',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'hyperspacehole',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: "Breaks the target's protection for this turn.",
      name: 'Hyperspace Hole',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'hypnosis',
    {
      accuracy: 60,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep.',
      shortDesc: 'Puts the target to sleep.',
      name: 'Hypnosis',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'iceball',
    {
      accuracy: 90,
      basePower: '30',
      category: 'Physical',
      shortDesc: 'Power doubles with each hit. Repeats for 5 turns.',
      name: 'Ice Ball',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful'
    }
  ],
  [
    'icebeam',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 10% chance to freeze the target.',
      shortDesc: '10% chance to freeze the target.',
      name: 'Ice Beam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'iceburn',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Special',
      shortDesc: 'Charges turn 1. Hits turn 2. 30% burn.',
      name: 'Ice Burn',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'icefang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 10% chance to freeze the target and a 10% chance to make it flinch.',
      shortDesc: '10% chance to freeze. 10% chance to flinch.',
      name: 'Ice Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'icehammer',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      desc: "Lowers the user's Speed by 1 stage.",
      shortDesc: "Lowers the user's Speed by 1.",
      name: 'Ice Hammer',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'icepunch',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: 'Has a 10% chance to freeze the target.',
      shortDesc: '10% chance to freeze the target.',
      name: 'Ice Punch',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'iceshard',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Ice Shard',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'iciclecrash',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Icicle Crash',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'iciclespear',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Icicle Spear',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'icywind',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: '100% chance to lower the foe(s) Speed by 1.',
      name: 'Icy Wind',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'imprison',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'No foe can use any move known by the user.',
      name: 'Imprison',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'incinerate',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      shortDesc: 'Destroys the foe(s) Berry/Gem.',
      name: 'Incinerate',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fire',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'inferno',
    {
      accuracy: 50,
      basePower: '100',
      category: 'Special',
      desc: 'Has a 100% chance to burn the target.',
      shortDesc: '100% chance to burn the target.',
      name: 'Inferno',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'infernooverdrive',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Inferno Overdrive',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'firiumz',
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool'
    }
  ],
  [
    'infestation',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',

      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Infestation',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'ingrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokémon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.',

      shortDesc: 'Traps/grounds user; heals 1/16 max HP per turn.',
      name: 'Ingrain',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'instruct',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is Dynamaxed, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Celebrate, Copycat, Dynamax Cannon, Focus Punch, Ice Ball, Instruct, King's Shield, Me First, Metronome, Mimic, Mirror Move, Nature Power, Obstruct, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, any two-turn move, any recharge move, any Z-Move, or any Max or G-Max Move.",
      shortDesc: 'The target immediately uses its last used move.',
      name: 'Instruct',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'iondeluge',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes Normal-type moves to become Electric type this turn.',
      shortDesc: 'Normal moves become Electric type this turn.',
      name: 'Ion Deluge',
      pp: 25,
      priority: 1,
      isNonstandard: 'Past',
      target: 'All',
      type: 'Electric',
      contestType: 'Beautiful'
    }
  ],
  [
    'irondefense',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Defense by 2 stages.",
      shortDesc: "Raises the user's Defense by 2.",
      name: 'Iron Defense',
      pp: 15,
      priority: 0,
      target: 'Self',
      type: 'Steel',
      contestType: 'Tough'
    }
  ],
  [
    'ironhead',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Iron Head',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'irontail',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Physical',
      desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
      shortDesc: "30% chance to lower the target's Defense by 1.",
      name: 'Iron Tail',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'jawlock',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.',
      shortDesc: 'Prevents both user and target from switching out.',
      name: 'Jaw Lock',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      maxMovePower: 130
    }
  ],
  [
    'judgment',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      desc: "This move's type depends on the user's held Plate.",
      shortDesc: 'Type varies based on the held Plate.',
      name: 'Judgment',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'jumpkick',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'User is hurt by 50% of its max HP if it misses.',
      name: 'Jump Kick',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'junglehealing',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Each Pokémon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status condition cured.",
      shortDesc: 'User and allies: healed 1/4 max HP, status cured.',
      name: 'Jungle Healing',
      pp: 10,
      priority: 0,
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
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Karate Chop',
      pp: 25,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough'
    }
  ],
  [
    'kinesis',
    {
      accuracy: 80,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's accuracy by 1 stage.",
      shortDesc: "Lowers the target's accuracy by 1.",
      name: 'Kinesis',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'kingsshield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon trying to make contact with the user have their Attack lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Protects from damaging attacks. Contact: -1 Atk.',
      name: "King's Shield",
      pp: 10,
      priority: 4,
      target: 'Self',
      type: 'Steel',
      contestType: 'Cool'
    }
  ],
  [
    'knockoff',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      desc: "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot cause Pokémon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
      shortDesc: '1.5x damage if foe holds an item. Removes item.',
      name: 'Knock Off',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 120
    }
  ],
  [
    'landswrath',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: "Land's Wrath",
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ground',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'laserfocus',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Next turn, the user's attack will be a critical hit.",
      name: 'Laser Focus',
      pp: 30,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'lashout',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: 'Power doubles if the user had a stat stage lowered this turn.',
      shortDesc: '2x power if the user had a stat lowered this turn.',
      name: 'Lash Out',
      pp: 5,
      priority: 0,
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
      shortDesc: 'Fails unless each known move has been used.',
      name: 'Last Resort',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 140
    }
  ],
  [
    'lavaplume',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 30% chance to burn the target.',
      shortDesc: '30% chance to burn adjacent Pokémon.',
      name: 'Lava Plume',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fire',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'leafblade',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Leaf Blade',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'leafstorm',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      desc: "Lowers the user's Special Attack by 2 stages.",
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      name: 'Leaf Storm',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'leaftornado',
    {
      accuracy: 90,
      basePower: '65',
      category: 'Special',
      desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
      shortDesc: "50% chance to lower the target's accuracy by 1.",
      name: 'Leaf Tornado',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'leafage',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Leafage',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'leechlife',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Leech Life',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'leechseed',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      shortDesc: "1/8 of target's HP is restored to user every turn.",
      name: 'Leech Seed',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'leer',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Defense by 1 stage.",
      shortDesc: 'Lowers the foe(s) Defense by 1.',
      name: 'Leer',
      pp: 30,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'letssnuggleforever',
    {
      accuracy: 100,
      basePower: '190',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: "Let's Snuggle Forever",
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'mimikiumz',
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cool'
    }
  ],
  [
    'lick',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze the target.',
      name: 'Lick',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'lightscreen',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, special damage to allies is halved.',
      name: 'Light Screen',
      pp: 30,
      priority: 0,
      target: "Ally's Side",
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'lightthatburnsthesky',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Special',
      shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
      name: 'Light That Burns the Sky',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'ultranecroziumz',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool'
    }
  ],
  [
    'lifedew',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Each Pokémon on the user's side restores 1/4 of its maximum HP, rounded half up.",
      shortDesc: 'Heals the user and its allies by 1/4 their max HP.',
      name: 'Life Dew',
      pp: 10,
      priority: 0,
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
      shortDesc: 'Has 1/2 recoil.',
      name: 'Light of Ruin',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'liquidation',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
      shortDesc: "20% chance to lower the target's Defense by 1.",
      name: 'Liquidation',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'lockon',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "User's next move will not miss the target.",
      name: 'Lock-On',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'lovelykiss',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep.',
      shortDesc: 'Puts the target to sleep.',
      name: 'Lovely Kiss',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'lowkick',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'More power the heavier the target.',
      name: 'Low Kick',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'lowsweep',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: "100% chance to lower the target's Speed by 1.",
      name: 'Low Sweep',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Clever',
      maxMovePower: 85
    }
  ],
  [
    'luckychant',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 5 turns, shields user's party from critical hits.",
      name: 'Lucky Chant',
      pp: 30,
      priority: 0,
      isNonstandard: 'Past',
      target: "Ally's Side",
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'lunardance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user faints, and if the Pokemon brought out to replace it does not have full HP or PP, or has a non-volatile status condition, its HP and PP are fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokemon that meets any of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokemon in its party.",
      shortDesc: 'User faints. Next hurt Pkmn is cured, max HP/PP.',
      name: 'Lunar Dance',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'lunge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
      shortDesc: "100% chance to lower the target's Attack by 1.",
      name: 'Lunge',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'lusterpurge',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      shortDesc: "50% chance to lower the target's Sp. Def by 1.",
      name: 'Luster Purge',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 120
    }
  ],
  [
    'machpunch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Mach Punch',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 70
    }
  ],
  [
    'magiccoat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Bounces back certain non-damaging moves.',
      name: 'Magic Coat',
      pp: 15,
      priority: 4,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'magicpowder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to become a Psychic type. Fails if the target is an Arceus or a Silvally, or if the target is already purely Psychic type.',
      shortDesc: "Changes the target's type to Psychic.",
      name: 'Magic Powder',
      pp: 20,
      priority: 0,
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
      shortDesc: 'For 5 turns, all held items have no effect.',
      name: 'Magic Room',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'All',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'magicalleaf',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Magical Leaf',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'magikarpsrevenge',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: "Does many things turn 1. Can't move turn 2.",
      name: "Magikarp's Revenge",
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cute'
    }
  ],
  [
    'magmastorm',
    {
      accuracy: 75,
      basePower: '100',
      category: 'Special',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Magma Storm',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'magnetbomb',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Magnet Bomb',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool'
    }
  ],
  [
    'magnetrise',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, the user is immune to Ground moves.',
      name: 'Magnet Rise',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'magneticflux',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Raises Def, Sp. Def of allies with Plus/Minus by 1.',
      name: 'Magnetic Flux',
      pp: 20,
      priority: 0,
      target: "Ally's Side",
      type: 'Electric',
      contestType: 'Clever'
    }
  ],
  [
    'magnitude',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'Hits adjacent Pokémon. Power varies; 2x on Dig.',
      name: 'Magnitude',
      pp: 30,
      priority: 0,
      isNonstandard: 'Past',
      target: 'All Adjacent',
      type: 'Ground',
      contestType: 'Tough'
    }
  ],
  [
    'maliciousmoonsault',
    {
      accuracy: 100,
      basePower: '180',
      category: 'Physical',
      shortDesc: 'Damage doubles if the target used Minimize.',
      name: 'Malicious Moonsault',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'inciniumz',
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool'
    }
  ],
  [
    'matblock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Protects allies from damaging attacks. Turn 1 only.',
      name: 'Mat Block',
      pp: 10,
      priority: 0,
      target: "Ally's Side",
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'mefirst',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Copies a foe at 1.5x power. User must be faster.',
      name: 'Me First',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'maxairstream',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Allies: +1 Speed.',
      name: 'Max Airstream',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Flying'
    }
  ],
  [
    'maxdarkness',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Foes: -1 Sp. Def.',
      name: 'Max Darkness',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dark'
    }
  ],
  [
    'maxflare',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sunny Day begins.",
      shortDesc: 'Base move affects power. Starts Sunny Day.',
      name: 'Max Flare',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fire'
    }
  ],
  [
    'maxflutterby',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Foes: -1 Sp. Atk.',
      name: 'Max Flutterby',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Bug'
    }
  ],
  [
    'maxgeyser',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Rain Dance begins.",
      shortDesc: 'Base move affects power. Starts Rain Dance.',
      name: 'Max Geyser',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Water'
    }
  ],
  [
    'maxguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from nearly all attacks made by other Pokémon during this turn, including Max and G-Max Moves. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Protects user from moves & Max Moves this turn.',
      name: 'Max Guard',
      pp: 5,
      priority: 0,
      target: 'Self',
      type: 'Normal'
    }
  ],
  [
    'meanlook',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',

      shortDesc: 'The target cannot switch out.',
      name: 'Mean Look',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'maxhailstorm',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Hail begins.",
      shortDesc: 'Base move affects power. Starts Hail.',
      name: 'Max Hailstorm',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ice'
    }
  ],
  [
    'maxknuckle',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Boosts the user and its allies' Attack by 1 stage. BP scales with the base move's BP.",
      shortDesc: 'Base move affects power. Allies: +1 Attack.',
      name: 'Max Knuckle',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fighting'
    }
  ],
  [
    'maxlightning',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Electric Terrain begins.",
      shortDesc: 'Base move affects power. Starts Electric Terrain.',
      name: 'Max Lightning',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Electric'
    }
  ],
  [
    'maxmindstorm',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Psychic Terrain begins.",
      shortDesc: 'Base move affects power. Starts Psychic Terrain.',
      name: 'Max Mindstorm',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Psychic'
    }
  ],
  [
    'maxooze',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Allies: +1 Sp. Atk.',
      name: 'Max Ooze',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Poison'
    }
  ],
  [
    'maxovergrowth',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Grassy Terrain begins.",
      shortDesc: 'Base move affects power. Starts Grassy Terrain.',
      name: 'Max Overgrowth',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Grass'
    }
  ],
  [
    'maxphantasm',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Foes: -1 Defense.',
      name: 'Max Phantasm',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ghost'
    }
  ],
  [
    'maxquake',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Allies: +1 Sp. Def.',
      name: 'Max Quake',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Groudon'
    }
  ],
  [
    'maxrockfall',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sandstorm begins.",
      shortDesc: 'Base move affects power. Starts Sandstorm.',
      name: 'Max Rockfall',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Rock'
    }
  ],
  [
    'maxstarfall',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Misty Terrain begins.",
      shortDesc: 'Base move affects power. Starts Misty Terrain.',
      name: 'Max Starfall',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Fairy'
    }
  ],
  [
    'maxsteelspike',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokémon on the user's side is raised by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Allies: +1 Defense.',
      name: 'Max Steelspike',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Steel'
    }
  ],
  [
    'maxstrike',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Foes: -1 Speed.',
      name: 'Max Strike',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal'
    }
  ],
  [
    'maxwyrmwind',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Attack of each Pokémon on the opposing side is lowered by 1 stage, even if they have a substitute.",
      shortDesc: 'Base move affects power. Foes: -1 Attack.',
      name: 'Max Wyrmwind',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon'
    }
  ],
  [
    'meditate',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack by 1 stage.",
      shortDesc: "Raises the user's Attack by 1.",
      name: 'Meditate',
      pp: 40,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Psychic',
      contestType: 'Beautiful'
    }
  ],
  [
    'megadrain',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Mega Drain',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever',
      maxMovePower: 90,
      zMovePower: 120
    }
  ],
  [
    'megakick',
    {
      accuracy: 75,
      basePower: '120',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Mega Kick',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'megapunch',
    {
      accuracy: 85,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Mega Punch',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'megahorn',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Megahorn',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'memento',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Lowers target's Attack, Sp. Atk by 2. User faints.",
      name: 'Memento',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough'
    }
  ],
  [
    'menacingmoonrazemaelstrom',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Special',
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      name: 'Menacing Moonraze Maelstrom',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'lunaliumz',
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool'
    }
  ],
  [
    'metalburst',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      desc: "Deals damage to the last opposing Pokemon to hit the user with a physical or special attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from that attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical or special attack this turn.",
      shortDesc: 'If hit by an attack, returns 1.5x damage.',
      name: 'Metal Burst',
      pp: 10,
      priority: 0,
      target: 'Foe that last hit user',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'metalclaw',
    {
      accuracy: 95,
      basePower: '50',
      category: 'Physical',
      desc: "Has a 10% chance to raise the user's Attack by 1 stage.",
      shortDesc: "10% chance to raise the user's Attack by 1.",
      name: 'Metal Claw',
      pp: 35,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'metalsound',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Special Defense by 2 stages.",
      shortDesc: "Lowers the target's Sp. Def by 2.",
      name: 'Metal Sound',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Clever'
    }
  ],
  [
    'meteorassault',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Physical',
      desc: 'If this move is successful, the user must recharge on the following turn and cannot select a move.',
      shortDesc: 'User cannot move next turn.',
      name: 'Meteor Assault',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      maxMovePower: 100
    }
  ],
  [
    'meteorbeam',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Special',
      desc: "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
      shortDesc: "Raises user's Sp. Atk by 1 on turn 1. Hits turn 2.",
      name: 'Meteor Beam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Rock'
    }
  ],
  [
    'meteorbeam',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Special',
      desc: "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
      shortDesc: "Raises user's Sp. Atk by 1 on turn 1. Hits turn 2.",
      name: 'Meteor Beam',
      pp: 10,
      priority: 0,
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
      desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
      shortDesc: "20% chance to raise the user's Attack by 1.",
      name: 'Meteor Mash',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'metronome',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "A random move is selected for use, other than After You, Apple Acid, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Clangorous Soul, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Double Iron Bash, Dragon Ascent, Dragon Energy, Drum Beating, Dynamax Cannon, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Obstruct, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spirit Break, Spotlight, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Transform, Trick, V-create, Wicked Blow, Wide Guard",
      shortDesc: 'Picks a random move.',
      name: 'Metronome',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'milkdrink',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      shortDesc: 'Heals the user by 50% of its max HP.',
      name: 'Milk Drink',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute',
      isFieldMove: "Tthe Pokémon cuts some of its HP to recover another Pokémon's HP. It can be learned by Miltank, Skiddo and Gogoat by leveling up."
    }
  ],
  [
    'mimic',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'The last move the target used replaces this one.',
      name: 'Mimic',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'mindblown',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User loses 50% max HP. Hits adjacent Pokémon.',
      name: 'Mind Blown',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 150
    }
  ],
  [
    'mindreader',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "User's next move will not miss the target.",
      name: 'Mind Reader',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'minimize',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises the user's evasiveness by 2.",
      name: 'Minimize',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'miracleeye',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Psychic hits Dark. Evasiveness ignored.',
      name: 'Miracle Eye',
      pp: 40,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'mirrorcoat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: 'If hit by special attack, returns double damage.',
      name: 'Mirror Coat',
      pp: 20,
      priority: -5,
      target: 'Foe that last hit user',
      type: 'Psychic',
      contestType: 'Beautiful',
      maxMovePower: 100
    }
  ],
  [
    'mirrormove',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "User uses the target's last used move against it.",
      name: 'Mirror Move',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Flying',
      contestType: 'Clever'
    }
  ],
  [
    'mirrorshot',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Special',
      desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
      shortDesc: "30% chance to lower the target's accuracy by 1.",
      name: 'Mirror Shot',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Steel',
      contestType: 'Beautiful'
    }
  ],
  [
    'mist',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 5 turns, protects user's party from stat drops.",
      name: 'Mist',
      pp: 30,
      priority: 0,
      target: "Ally's Side",
      type: 'Ice',
      contestType: 'Beautiful'
    }
  ],
  [
    'mistball',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      shortDesc: "50% chance to lower the target's Sp. Atk by 1.",
      name: 'Mist Ball',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 120
    }
  ],
  [
    'mistyexplosion',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokémon has the Damp Ability.",
      shortDesc: 'User faints. User on Misty Terrain: 1.5x power.',
      name: 'Misty Explosion',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fairy'
    }
  ],
  [
    'mistyexplosion',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokémon has the Damp Ability.",
      shortDesc: 'User faints. User on Misty Terrain: 1.5x power.',
      name: 'Misty Explosion',
      pp: 5,
      priority: 0,
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
      desc: 'For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokémon is multiplied by 0.5 and grounded Pokémon cannot be inflicted with a non-volatile status condition nor confusion. Grounded Pokémon can become affected by Yawn but cannot fall asleep from its effect. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain.',
      shortDesc: "5 turns. Can't status,-Dragon power vs grounded.",
      name: 'Misty Terrain',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Fairy',
      contestType: 'Beautiful'
    }
  ],
  [
    'moonblast',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Special',
      shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
      name: 'Moonblast',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'moongeistbeam',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      name: 'Moongeist Beam',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'moonlight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
      shortDesc: 'Heals the user by a weather-dependent amount.',
      name: 'Moonlight',
      pp: 5,
      priority: 0,
      target: 'Self',
      type: 'Fairy',
      contestType: 'Beautiful'
    }
  ],
  [
    'morningsun',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
      shortDesc: 'Heals the user by a weather-dependent amount.',
      name: 'Morning Sun',
      pp: 5,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'mudbomb',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Special',
      desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
      shortDesc: "30% chance to lower the target's accuracy by 1.",
      name: 'Mud Bomb',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Ground',
      contestType: 'Cute'
    }
  ],
  [
    'mudshot',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: "100% chance to lower the target's Speed by 1.",
      name: 'Mud Shot',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'mudsport',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, Electric-type attacks have 1/3 power.',
      name: 'Mud Sport',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'All',
      type: 'Ground',
      contestType: 'Cute'
    }
  ],
  [
    'mudslap',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      desc: "Has a 100% chance to lower the target's accuracy by 1 stage.",
      shortDesc: "100% chance to lower the target's accuracy by 1.",
      name: 'Mud-Slap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'muddywater',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Special',
      desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
      shortDesc: '30% chance to lower the foe(s) accuracy by 1.',
      name: 'Muddy Water',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'multiattack',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      desc: "This move's type depends on the user's held Memory.",
      shortDesc: 'Type varies based on the held Memory.',
      name: 'Multi-Attack',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 95
    }
  ],
  [
    'mysticalfire',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
      name: 'Mystical Fire',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'nastyplot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Special Attack by 2 stages.",
      shortDesc: "Raises the user's Sp. Atk by 2.",
      name: 'Nasty Plot',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'naturalgift',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: "Power and type depends on the user's Berry.",
      name: 'Natural Gift',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'naturepower',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Attack depends on terrain (default Tri Attack).',
      name: 'Nature Power',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'naturesmadness',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Special',
      shortDesc: "Does damage equal to 1/2 target's current HP.",
      name: "Nature's Madness",
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'needlearm',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Needle Arm',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'neverendingnightmare',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Never-Ending Nightmare',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'ghostiumz',
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool'
    }
  ],
  [
    'nightdaze',
    {
      accuracy: 95,
      basePower: '85',
      category: 'Special',
      desc: "Has a 40% chance to lower the target's accuracy by 1 stage.",
      shortDesc: "40% chance to lower the target's accuracy by 1.",
      name: 'Night Daze',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'nightshade',
    {
      accuracy: 100,
      basePower: 'level',
      category: 'Special',
      desc: "Deals damage to the target equal to the user's level.",
      shortDesc: "Does damage equal to the user's level.",
      name: 'Night Shade',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever',
      maxMovePower: 100
    }
  ],
  [
    'nightslash',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Night Slash',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'nightmare',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'A sleeping target is hurt by 1/4 max HP per turn.',
      name: 'Nightmare',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever'
    }
  ],
  [
    'nobleroar',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack and Special Attack by 1 stage.",
      shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
      name: 'Noble Roar',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'noretreat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Fails if the user has already been prevented from switching by this effect.",

      shortDesc: 'Raises all stats by 1 (not acc/eva). Traps user.',
      name: 'No Retreat',
      pp: 5,
      priority: 0,
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
      desc: 'Has a 100% chance to paralyze the target.',
      shortDesc: '100% chance to paralyze the target.',
      name: 'Nuzzle',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'oblivionwing',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'User recovers 75% of the damage dealt.',
      name: 'Oblivion Wing',
      pp: 10,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'obstruct',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon trying to make contact with the user have their Defense lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Protects from damaging attacks. Contact: -2 Def.',
      name: 'Obstruct',
      pp: 10,
      priority: 4,
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
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Oceanic Operetta',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'primariumz',
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool'
    }
  ],
  [
    'octazooka',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Special',
      desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
      shortDesc: "50% chance to lower the target's accuracy by 1.",
      name: 'Octazooka',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 120
    }
  ],
  [
    'octolock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Prevents the target from switching out. At the end of each turn during effect, the target's Defense and Special Defense are lowered by 1 stage. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",

      shortDesc: 'Traps target, lowers Def and SpD by 1 each turn.',
      name: 'Octolock',
      pp: 15,
      priority: 0,
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
      shortDesc: 'Fighting, Normal hit Ghost. Evasiveness ignored.',
      name: 'Odor Sleuth',
      pp: 40,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'ominouswind',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      shortDesc: '10% chance to raise all stats by 1 (not acc/eva).',
      name: 'Ominous Wind',
      pp: 5,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Beautiful'
    }
  ],
  [
    'originpulse',
    {
      accuracy: 85,
      basePower: '110',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: 'Origin Pulse',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'outrage',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Lasts 2-3 turns. Confuses the user afterwards.',
      name: 'Outrage',
      pp: 10,
      priority: 0,
      target: 'Random',
      type: 'Dragon',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'overdrive',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'No additional effect. Hits foe(s).',
      name: 'Overdrive',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Electric',
      maxMovePower: 130
    }
  ],
  [
    'overheat',
    {
      accuracy: 90,
      basePower: '130',
      category: 'Special',
      desc: "Lowers the user's Special Attack by 2 stages.",
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      name: 'Overheat',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'painsplit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Shares HP of user and target equally.',
      name: 'Pain Split',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'paleowave',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Special',
      desc: "Has a 20% chance to lower the target's Attack by 1 stage.",
      shortDesc: "20% chance to lower the target's Attack by 1.",
      name: 'Paleo Wave',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Beautiful'
    }
  ],
  [
    'paraboliccharge',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      shortDesc: 'User recovers 50% of the damage dealt.',
      name: 'Parabolic Charge',
      pp: 20,
      priority: 0,
      target: 'All Adjacent',
      type: 'Electric',
      contestType: 'Clever',
      maxMovePower: 120
    }
  ],
  [
    'partingshot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Lowers target's Atk, Sp. Atk by 1. User switches.",
      name: 'Parting Shot',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool'
    }
  ],
  [
    'payday',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Scatters coins.',
      name: 'Pay Day',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever',
      maxMovePower: 90
    }
  ],
  [
    'payback',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      shortDesc: 'Power doubles if the user moves after the target.',
      name: 'Payback',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'peck',
    {
      accuracy: 100,
      basePower: '35',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Peck',
      pp: 35,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'perishsong',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'All active Pokémon will faint in 3 turns.',
      name: 'Perish Song',
      pp: 5,
      priority: 0,
      target: 'All',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'petalblizzard',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent Pokémon.',
      name: 'Petal Blizzard',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'petaldance',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      shortDesc: 'Lasts 2-3 turns. Confuses the user afterwards.',
      name: 'Petal Dance',
      pp: 10,
      priority: 0,
      target: 'Random',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'phantomforce',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      shortDesc: 'Disappears turn 1. Hits turn 2. Breaks protection.',
      name: 'Phantom Force',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'photongeyser',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
      name: 'Photon Geyser',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'pikapapow',
    {
      accuracy: 100,
      basePower: '(happiness * 10) / 25',
      category: 'Special',
      shortDesc: "Max happiness: 102 power. Can't miss.",
      name: 'Pika Papow',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cute'
    }
  ],
  [
    'pinmissile',
    {
      accuracy: 95,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Pin Missile',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'plasmafists',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Normal moves become Electric type this turn.',
      name: 'Plasma Fists',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'playnice',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack by 1 stage.",
      shortDesc: "Lowers the target's Attack by 1.",
      name: 'Play Nice',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'playrough',
    {
      accuracy: 90,
      basePower: '90',
      category: 'Physical',
      desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
      shortDesc: "10% chance to lower the target's Attack by 1.",
      name: 'Play Rough',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'pluck',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      shortDesc: "User steals and eats the target's Berry.",
      name: 'Pluck',
      pp: 20,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cute',
      maxMovePower: 110
    }
  ],
  [
    'poisonfang',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      desc: 'Has a 50% chance to badly poison the target.',
      shortDesc: '50% chance to badly poison the target.',
      name: 'Poison Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Clever',
      maxMovePower: 75
    }
  ],
  [
    'poisongas',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      desc: 'Poisons the target.',
      shortDesc: 'Poisons the foe(s).',
      name: 'Poison Gas',
      pp: 40,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Poison',
      contestType: 'Clever'
    }
  ],
  [
    'poisonjab',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 30% chance to poison the target.',
      shortDesc: '30% chance to poison the target.',
      name: 'Poison Jab',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'poisonpowder',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      desc: 'Poisons the target.',
      shortDesc: 'Poisons the target.',
      name: 'Poison Powder',
      pp: 35,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Clever'
    }
  ],
  [
    'poisonsting',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Physical',
      desc: 'Has a 30% chance to poison the target.',
      shortDesc: '30% chance to poison the target.',
      name: 'Poison Sting',
      pp: 35,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Clever',
      maxMovePower: 70
    }
  ],
  [
    'poisontail',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      shortDesc: 'High critical hit ratio. 10% chance to poison.',
      name: 'Poison Tail',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Clever',
      maxMovePower: 75
    }
  ],
  [
    'pollenpuff',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: 'If the target is an ally, heals 50% of its max HP.',
      name: 'Pollen Puff',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'poltergeist',
    {
      accuracy: 90,
      basePower: '110',
      category: 'Physical',
      desc: "This move fails if the target doesn't have an item or is afflicted with Embargo. Additionally, this move fails if Magic Room is up, or the target has the ability Klutz and is not holding an item that ignores Klutz.",
      shortDesc: 'Fails if the target has no item.',
      name: 'Poltergeist',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ghost'
    }
  ],
  [
    'poltergeist',
    {
      accuracy: 90,
      basePower: '110',
      category: 'Physical',
      desc: "This move fails if the target doesn't have an item or is afflicted with Embargo. Additionally, this move fails if Magic Room is up, or the target has the ability Klutz and is not holding an item that ignores Klutz.",
      shortDesc: 'Fails if the target has no item.',
      name: 'Poltergeist',
      pp: 5,
      priority: 0,
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
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Pound',
      pp: 35,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'powder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'If using a Fire move, target loses 1/4 max HP.',
      name: 'Powder',
      isNonstandard: 'Past',
      pp: 20,
      priority: 1,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Clever'
    }
  ],
  [
    'powdersnow',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'Has a 10% chance to freeze the target.',
      shortDesc: '10% chance to freeze the foe(s).',
      name: 'Powder Snow',
      pp: 25,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'powergem',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Power Gem',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'powersplit',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Averages Attack and Sp. Atk stats with target.',
      name: 'Power Split',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'powerswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Swaps Attack and Sp. Atk stat stages with target.',
      name: 'Power Swap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'powertrick',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Switches user's Attack and Defense stats.",
      name: 'Power Trick',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'powertrip',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      shortDesc: " + 20 power for each of the user's stat boosts.",
      name: 'Power Trip',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'powerwhip',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Power Whip',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'poweruppunch',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: "Has a 100% chance to raise the user's Attack by 1 stage.",
      shortDesc: "100% chance to raise the user's Attack by 1.",
      name: 'Power-Up Punch',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 70
    }
  ],
  [
    'precipiceblades',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent foes.',
      name: 'Precipice Blades',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ground',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'present',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Physical',
      shortDesc: '40, 80, 120 power, or heals target by 1/4 max HP.',
      name: 'Present',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 100
    }
  ],
  [
    'prismaticlaser',
    {
      accuracy: 100,
      basePower: '160',
      category: 'Special',
      shortDesc: 'User cannot move next turn.',
      name: 'Prismatic Laser',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool',
      maxMovePower: 150
    }
  ],
  [
    'protect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Prevents moves from affecting the user this turn.',
      name: 'Protect',
      pp: 10,
      priority: 4,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'psybeam',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: 'Has a 10% chance to confuse the target.',
      shortDesc: '10% chance to confuse the target.',
      name: 'Psybeam',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Beautiful',
      maxMovePower: 120
    }
  ],
  [
    'psychup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user copies all of the target's current stat stage changes.",
      shortDesc: "Copies the target's current stat stages.",
      name: 'Psych Up',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'psychic',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: "10% chance to lower the target's Sp. Def by 1.",
      name: 'Psychic',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'psychicfangs',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      shortDesc: 'Destroys screens, unless the target is immune.',
      name: 'Psychic Fangs',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'psychicterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokémon is multiplied by 1.3 and grounded Pokémon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
      shortDesc: '5 turns. Grounded: +Psychic power, priority-safe.',
      name: 'Psychic Terrain',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'psychoboost',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Special',
      desc: "Lowers the user's Special Attack by 2 stages.",
      shortDesc: "Lowers the user's Sp. Atk by 2.",
      name: 'Psycho Boost',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 140
    }
  ],
  [
    'psychocut',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Psycho Cut',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'psychoshift',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user's non-volatile status condition is transferred to the target, and the user is then cured. Fails if the user has no non-volatile status condition or if the target already has one.",
      shortDesc: "Transfers the user's status ailment to the target.",
      name: 'Psycho Shift',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'psyshock',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'Damages target based on Defense, not Sp. Def.',
      name: 'Psyshock',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'psystrike',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: 'Damages target based on Defense, not Sp. Def.',
      name: 'Psystrike',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'psywave',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: "Random damage equal to 0.5x-1.5x user's level.",
      name: 'Psywave',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'pulverizingpancake',
    {
      accuracy: 100,
      basePower: '210',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Pulverizing Pancake',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'snorliumz',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'punishment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: "60 power +20 for each of the target's stat boosts.",
      name: 'Punishment',
      pp: 5,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Dark',
      contestType: 'Cool'
    }
  ],
  [
    'purify',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The target is cured if it has a non-volatile status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded down.',
      shortDesc: "Cures target's status; heals user 1/2 max HP if so.",
      name: 'Purify',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Beautiful'
    }
  ],
  [
    'pursuit',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      shortDesc: 'If a foe is switching out, hits it at 2x power.',
      name: 'Pursuit',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'pyroball',
    {
      accuracy: 90,
      basePower: '120',
      category: 'Physical',
      shortDesc: '10% chance to burn the target. Thaws user.',
      name: 'Pyro Ball',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      maxMovePower: 140
    }
  ],
  [
    'quash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Forces the target to move last this turn.',
      name: 'Quash',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'quickattack',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Quick Attack',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'quickguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokémon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
      shortDesc: 'Protects allies from priority attacks this turn.',
      name: 'Quick Guard',
      pp: 15,
      priority: 3,
      target: "Ally's Side",
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'quiverdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises the user's Sp. Atk, Sp. Def, Speed by 1.",
      name: 'Quiver Dance',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Bug',
      contestType: 'Beautiful'
    }
  ],
  [
    'rage',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      shortDesc: "Raises the user's Attack by 1 if hit during use.",
      name: 'Rage',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'ragepowder',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "The foes' moves target the user on the turn used.",
      name: 'Rage Powder',
      pp: 20,
      priority: 2,
      target: 'Self',
      type: 'Bug',
      contestType: 'Clever'
    }
  ],
  [
    'raindance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, heavy rain powers Water moves.',
      name: 'Rain Dance',
      pp: 5,
      priority: 0,
      target: 'All',
      type: 'Water',
      contestType: 'Beautiful'
    }
  ],
  [
    'rapidspin',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
      shortDesc: 'Free user from hazards/binding/Leech Seed;+1 Spe.',
      name: 'Rapid Spin',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'razorleaf',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio. Hits adjacent foes.',
      name: 'Razor Leaf',
      pp: 25,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'razorshell',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Physical',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      shortDesc: "50% chance to lower the target's Defense by 1.",
      name: 'Razor Shell',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'razorwind',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'Charges, then hits foe(s) turn 2. High crit ratio.',
      name: 'Razor Wind',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'recover',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      shortDesc: 'Heals the user by 50% of its max HP.',
      name: 'Recover',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'recycle',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.',
      shortDesc: 'Restores the item the user last used.',
      name: 'Recycle',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'reflect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, physical damage to allies is halved.',
      name: 'Reflect',
      pp: 20,
      priority: 0,
      target: "Ally's Side",
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'reflecttype',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User becomes the same type as the target.',
      name: 'Reflect Type',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'refresh',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user cures its burn, poison, or paralysis.',
      shortDesc: 'User cures its burn, poison, or paralysis.',
      name: 'Refresh',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'relicsong',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      shortDesc: '10% chance to sleep foe(s). Meloetta transforms.',
      name: 'Relic Song',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'rest',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.',
      shortDesc: 'User sleeps 2 turns and restores HP and status.',
      name: 'Rest',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Cute'
    }
  ],
  [
    'retaliate',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'Power doubles if an ally fainted last turn.',
      name: 'Retaliate',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 20
    }
  ],
  [
    'return',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
      shortDesc: 'Max 102 power at maximum Happiness.',
      name: 'Return',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'revelationdance',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: "This move's type depends on the user's primary type.",
      shortDesc: "Type varies based on the user's primary type.",
      name: 'Revelation Dance',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'revenge',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Power doubles if the user was hit by the target this turn.',
      shortDesc: 'Power doubles if user is damaged by the target.',
      name: 'Revenge',
      pp: 10,
      priority: -4,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 80
    }
  ],
  [
    'reversal',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'More power the less HP the user has left.',
      name: 'Reversal',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'risingvoltage',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: "If the current terrain is Electric Terrain and the target is grounded, this move's power is doubled.",
      shortDesc: '2x power if target is grounded in Electric Terrain.',
      name: 'Rising Voltage',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      maxMovePower: 140
    }
  ],
  [
    'risingvoltage',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: "If the current terrain is Electric Terrain and the target is grounded, this move's power is doubled.",
      shortDesc: '2x power if target is grounded in Electric Terrain.',
      name: 'Rising Voltage',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      maxMovePower: 140
    }
  ],
  [
    'roar',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Forces the target to switch to a random ally.',
      name: 'Roar',
      pp: 20,
      priority: -6,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'roaroftime',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User cannot move next turn.',
      name: 'Roar of Time',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'rockblast',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Rock Blast',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'rockclimb',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Physical',
      desc: 'Has a 20% chance to confuse the target.',
      shortDesc: '20% chance to confuse the target.',
      name: 'Rock Climb',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      isFieldMove:
        'The Pokémon can climb up rocky walls. Rock climb can be taught to a Pokémon by using HM08 in Generation IV. Since Generation V, it has lost its HM status.'
    }
  ],
  [
    'rockpolish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Speed by 2 stages.",
      shortDesc: "Raises the user's Speed by 2.",
      name: 'Rock Polish',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Rock',
      contestType: 'Tough'
    }
  ],
  [
    'rockslide',
    {
      accuracy: 90,
      basePower: '75',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the foe(s) flinch.',
      name: 'Rock Slide',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'rocksmash',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      shortDesc: "50% chance to lower the target's Defense by 1.",
      name: 'Rock Smash',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 70,
      isFieldMove:
        'The Pokémon can smash small boulders. Rock smash can be taught to a Pokémon by using TM08 in Generation II, by using HM06 in Generations III and IV, TM94 in Generation V and Pokémon X and Y, and HM06 in Omega Ruby and Alpha Sapphire.'
    }
  ],
  [
    'rockthrow',
    {
      accuracy: 90,
      basePower: '50',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Rock Throw',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'rocktomb',
    {
      accuracy: 95,
      basePower: '60',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
      shortDesc: "100% chance to lower the target's Speed by 1.",
      name: 'Rock Tomb',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Clever',
      maxMovePower: 110
    }
  ],
  [
    'rockwrecker',
    {
      accuracy: 90,
      basePower: '150',
      category: 'Physical',
      shortDesc: 'User cannot move next turn.',
      name: 'Rock Wrecker',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 150
    }
  ],
  [
    'roleplay',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
      shortDesc: "User replaces its Ability with the target's.",
      name: 'Role Play',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cute'
    }
  ],
  [
    'rollingkick',
    {
      accuracy: 85,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Rolling Kick',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'rollout',
    {
      accuracy: 90,
      basePower: '30',
      category: 'Physical',
      shortDesc: 'Power doubles with each hit. Repeats for 5 turns.',
      name: 'Rollout',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'roost',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Heals 50% HP. Flying-type removed 'til turn ends.",
      name: 'Roost',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Flying',
      contestType: 'Clever'
    }
  ],
  [
    'rototiller',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Raises Atk, Sp. Atk of grounded Grass types by 1.',
      name: 'Rototiller',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'All',
      type: 'Ground',
      contestType: 'Tough'
    }
  ],
  [
    'round',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      shortDesc: 'Power doubles if others used Round this turn.',
      name: 'Round',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'sacredfire',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Physical',
      desc: 'Has a 50% chance to burn the target.',
      shortDesc: '50% chance to burn the target. Thaws user.',
      name: 'Sacred Fire',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'sacredsword',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: "Ignores the target's stat stage changes, including evasiveness.",
      shortDesc: "Ignores the target's stat stage changes.",
      name: 'Sacred Sword',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'safeguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokémon. Pokémon on the user's side cannot become affected by Yawn but can fall asleep from its effect. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",

      shortDesc: "For 5 turns, protects user's party from status.",
      name: 'Safeguard',
      pp: 25,
      priority: 0,
      target: "Ally's Side",
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'sandattack',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's accuracy by 1 stage.",
      shortDesc: "Lowers the target's accuracy by 1.",
      name: 'Sand Attack',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Cute'
    }
  ],
  [
    'sandtomb',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Physical',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',

      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Sand Tomb',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Clever',
      maxMovePower: 90
    }
  ],
  [
    'sandstorm',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, a sandstorm rages.',
      name: 'Sandstorm',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Rock',
      contestType: 'Tough'
    }
  ],
  [
    'sappyseed',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Physical',
      desc: 'This move summons Leech Seed on the foe.',
      shortDesc: 'Summons Leech Seed.',
      name: 'Sappy Seed',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'savagespinout',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Savage Spin-Out',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'buginiumz',
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool'
    }
  ],
  [
    'scald',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: '30% chance to burn the target. Thaws target.',
      name: 'Scald',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'scaleshot',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Lowers the user's Defense by 1 stage and raises the user's Speed by 1 stage after the last hit. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times. User: -1 Def, +1 Spe after last hit.',
      name: 'Scale Shot',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dragon'
    }
  ],
  [
    'scaleshot',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Lowers the user's Defense by 1 stage and raises the user's Speed by 1 stage after the last hit. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times. User: -1 Def, +1 Spe after last hit.',
      name: 'Scale Shot',
      pp: 20,
      priority: 0,
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
      desc: "Lowers the target's Speed by 2 stages.",
      shortDesc: "Lowers the target's Speed by 2.",
      name: 'Scary Face',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'scorchingsands',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      desc: 'Has a 30% chance to burn the target. The target thaws out if it is frozen.',
      shortDesc: '30% chance to burn the target. Thaws target.',
      name: 'Scorching Sands',
      pp: 10,
      priority: 0,
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
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Scratch',
      pp: 35,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'screech',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Defense by 2 stages.",
      shortDesc: "Lowers the target's Defense by 2.",
      name: 'Screech',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'searingshot',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      desc: 'Has a 30% chance to burn the target.',
      shortDesc: '30% chance to burn adjacent Pokémon.',
      name: 'Searing Shot',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'searingsunrazesmash',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Physical',
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      name: 'Searing Sunraze Smash',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'solganiumz',
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool'
    }
  ],
  [
    'secretpower',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'Effect varies with terrain. (30% paralysis chance)',
      name: 'Secret Power',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever',
      isFieldMove:
        "The Pokémon can clear an entrance into a big tree, a bush or an indent in a wall in order to create a Secret Base in Generation III's Ruby, Sapphire and Emerald and Generation VI's Omega Ruby and Alpha Sapphire. It is taught to Pokémon using TM43 in Generations III and IV, and TM94 in Generation VI."
    }
  ],
  [
    'secretsword',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Special',
      shortDesc: 'Damages target based on Defense, not Sp. Def.',
      name: 'Secret Sword',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Beautiful',
      maxMovePower: 90
    }
  ],
  [
    'seedbomb',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Seed Bomb',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'seedflare',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Special',
      shortDesc: "40% chance to lower the target's Sp. Def by 2.",
      name: 'Seed Flare',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'seismictoss',
    {
      accuracy: 100,
      basePower: 'level',
      category: 'Physical',
      desc: "Deals damage to the target equal to the user's level.",
      shortDesc: "Does damage equal to the user's level.",
      name: 'Seismic Toss',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough',
      maxMovePower: 75
    }
  ],
  [
    'selfdestruct',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Physical',
      shortDesc: 'Hits adjacent Pokémon. The user faints.',
      name: 'Self-Destruct',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'shadowball',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: "20% chance to lower the target's Sp. Def by 1.",
      name: 'Shadow Ball',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'shadowbone',
    {
      accuracy: 100,
      basePower: '85',
      category: 'Physical',
      desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
      shortDesc: "20% chance to lower the target's Defense by 1.",
      name: 'Shadow Bone',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'shadowclaw',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Shadow Claw',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'shadowforce',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Disappears turn 1. Hits turn 2. Breaks protection.',
      name: 'Shadow Force',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'shadowpunch',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Shadow Punch',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever',
      maxMovePower: 110
    }
  ],
  [
    'shadowsneak',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Shadow Sneak',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever',
      maxMovePower: 90
    }
  ],
  [
    'shadowstrike',
    {
      accuracy: 95,
      basePower: '80',
      category: 'Physical',
      desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
      shortDesc: "50% chance to lower the target's Defense by 1.",
      name: 'Shadow Strike',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever'
    }
  ],
  [
    'sharpen',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack by 1 stage.",
      shortDesc: "Raises the user's Attack by 1.",
      name: 'Sharpen',
      pp: 30,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'shatteredpsyche',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Shattered Psyche',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'psychiumz',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool'
    }
  ],
  [
    'sheercold',
    {
      accuracy: 30,
      basePower: '0',
      category: 'Special',
      shortDesc: "OHKOs non-Ice targets. Fails if user's lower level.",
      name: 'Sheer Cold',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'shellsidearm',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: "Has a 20% chance to poison the target. This move becomes a physical attack that makes contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
      shortDesc: '20% poison. Phys+contact if it would be stronger.',
      name: 'Shell Side Arm',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'shellsmash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2.',
      name: 'Shell Smash',
      pp: 15,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'shelltrap',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      shortDesc: 'User must take physical damage before moving.',
      name: 'Shell Trap',
      pp: 5,
      priority: -3,
      target: 'Adjacent Foes',
      type: 'Fire',
      contestType: 'Tough',
      maxMovePower: 150
    }
  ],
  [
    'shiftgear',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Speed by 2 stages and its Attack by 1 stage.",
      shortDesc: "Raises the user's Speed by 2 and Attack by 1.",
      name: 'Shift Gear',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Steel',
      contestType: 'Clever'
    }
  ],
  [
    'shockwave',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Shock Wave',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'shoreup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User restores 1/2 its max HP; 2/3 in Sandstorm.',
      name: 'Shore Up',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Ground',
      contestType: 'Beautiful'
    }
  ],
  [
    'signalbeam',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Special',
      desc: 'Has a 10% chance to confuse the target.',
      shortDesc: '10% chance to confuse the target.',
      name: 'Signal Beam',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Bug',
      contestType: 'Beautiful'
    }
  ],
  [
    'silverwind',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      shortDesc: '10% chance to raise all stats by 1 (not acc/eva).',
      name: 'Silver Wind',
      pp: 5,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Bug',
      contestType: 'Beautiful'
    }
  ],
  [
    'simplebeam',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Causes the target's Ability to become Simple. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Truant, or Zen Mode.",
      shortDesc: "The target's Ability becomes Simple.",
      name: 'Simple Beam',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'sing',
    {
      accuracy: 55,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep.',
      shortDesc: 'Puts the target to sleep.',
      name: 'Sing',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'sinisterarrowraid',
    {
      accuracy: 100,
      basePower: '180',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Sinister Arrow Raid',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'decidiumz',
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool'
    }
  ],
  [
    'sizzlyslide',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 100% chance to burn the foe.',
      shortDesc: '100% chance to burn the foe.',
      name: 'Sizzly Slide',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Clever'
    }
  ],
  [
    'sketch',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Permanently copies the last move target used.',
      name: 'Sketch',
      pp: 1,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'skillswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
      shortDesc: 'The user and the target trade Abilities.',
      name: 'Skill Swap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'skittersmack',
    {
      accuracy: 90,
      basePower: '70',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
      shortDesc: "100% chance to lower target's Sp. Atk by 1.",
      name: 'Skitter Smack',
      pp: 10,
      priority: 0,
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
      shortDesc: "Raises user's Defense by 1 on turn 1. Hits turn 2.",
      name: 'Skull Bash',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'skyattack',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.',
      shortDesc: 'Charges, then hits turn 2. 30% flinch. High crit.',
      name: 'Sky Attack',
      pp: 5,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'skydrop',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      shortDesc: 'User and foe fly up turn 1. Damages on turn 2.',
      name: 'Sky Drop',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Any',
      type: 'Flying',
      contestType: 'Tough'
    }
  ],
  [
    'skyuppercut',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      desc: 'This move can hit a target using Bounce, Fly, or Sky Drop.',
      shortDesc: 'Can hit Pokémon using Bounce, Fly, or Sky Drop.',
      name: 'Sky Uppercut',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool'
    }
  ],
  [
    'slackoff',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      shortDesc: 'Heals the user by 50% of its max HP.',
      name: 'Slack Off',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'slam',
    {
      accuracy: 75,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Slam',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'slash',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Slash',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'sleeppowder',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep.',
      shortDesc: 'Puts the target to sleep.',
      name: 'Sleep Powder',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'sleeptalk',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Max Move.",
      shortDesc: 'User must be asleep. Uses another known move.',
      name: 'Sleep Talk',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'sludge',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: 'Has a 30% chance to poison the target.',
      shortDesc: '30% chance to poison the target.',
      name: 'Sludge',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough',
      maxMovePower: 85
    }
  ],
  [
    'sludgebomb',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 30% chance to poison the target.',
      shortDesc: '30% chance to poison the target.',
      name: 'Sludge Bomb',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'sludgewave',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Special',
      desc: 'Has a 10% chance to poison the target.',
      shortDesc: '10% chance to poison adjacent Pokémon.',
      name: 'Sludge Wave',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Poison',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'smackdown',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      shortDesc: "Removes the target's Ground immunity.",
      name: 'Smack Down',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'smartstrike',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy.',
      name: 'Smart Strike',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'smellingsalts',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'Power doubles if target is paralyzed, and cures it.',
      name: 'Smelling Salts',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'smog',
    {
      accuracy: 70,
      basePower: '30',
      category: 'Special',
      desc: 'Has a 40% chance to poison the target.',
      shortDesc: '40% chance to poison the target.',
      name: 'Smog',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough',
      maxMovePower: 70
    }
  ],
  [
    'smokescreen',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's accuracy by 1 stage.",
      shortDesc: "Lowers the target's accuracy by 1.",
      name: 'Smokescreen',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'snaptrap',
    {
      accuracy: 100,
      basePower: '35',
      category: 'Physical',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',

      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Snap Trap',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      maxMovePower: 90
    }
  ],
  [
    'snarl',
    {
      accuracy: 95,
      basePower: '55',
      category: 'Special',
      shortDesc: '100% chance to lower the foe(s) Sp. Atk by 1.',
      name: 'Snarl',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'snatch',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User steals certain support moves to use itself.',
      name: 'Snatch',
      isNonstandard: 'Past',
      pp: 10,
      priority: 4,
      target: 'Self',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'snipeshot',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a higher chance for a critical hit. This move cannot be redirected to a different target by any effect.',
      shortDesc: 'High critical hit ratio. Cannot be redirected.',
      name: 'Snipe Shot',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      maxMovePower: 130
    }
  ],
  [
    'snore',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc: 'Has a 30% chance to make the target flinch. Fails if the user is not asleep.',
      shortDesc: 'User must be asleep. 30% chance to flinch target.',
      name: 'Snore',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 100
    }
  ],
  [
    'soak',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Changes the target's type to Water.",
      name: 'Soak',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cute'
    }
  ],
  [
    'softboiled',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP, rounded half up.',
      shortDesc: 'Heals the user by 50% of its max HP.',
      name: 'Soft-Boiled',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute',
      isFieldMove:
        "The Pokémon cuts 20% of its HP to recover another Pokémon's HP. It can be taught to a Pokémon by using TM41 in Generation I, and it can be learned via level-up by Chansey and Blissey as well as certain Pokémon via a Move Tutor in Pokémon FireRed and LeafGreen."
    }
  ],
  [
    'solarbeam',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      desc: 'This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.',
      shortDesc: 'Charges turn 1. Hits turn 2. No charge in sunlight.',
      name: 'Solar Beam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'solarblade',
    {
      accuracy: 100,
      basePower: '125',
      category: 'Physical',
      desc: 'This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.',
      shortDesc: 'Charges turn 1. Hits turn 2. No charge in sunlight.',
      name: 'Solar Blade',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'sonicboom',
    {
      accuracy: 90,
      basePower: '20',
      category: 'Special',
      desc: 'Deals 20 HP of damage to the target.',
      shortDesc: 'Always does 20 HP of damage.',
      name: 'Sonic Boom',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'soulstealing7starstrike',
    {
      accuracy: 100,
      basePower: '195',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Soul-Stealing 7-Star Strike',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'marshadiumz',
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool'
    }
  ],
  [
    'spacialrend',
    {
      accuracy: 95,
      basePower: '100',
      category: 'Special',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Spacial Rend',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'spark',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze the target.',
      name: 'Spark',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'sparklingaria',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'If the user has not fainted, the target is cured of its burn.',
      shortDesc: 'The target is cured of its burn.',
      name: 'Sparkling Aria',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 30
    }
  ],
  [
    'sparklyswirl',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Special',
      desc: "Every Pokémon in the user's party is cured of its non-volatile status condition.",
      shortDesc: "Cures the user's party of all status conditions.",
      name: 'Sparkly Swirl',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Clever'
    }
  ],
  [
    'spectralthief',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      shortDesc: "Steals target's boosts before dealing damage.",
      name: 'Spectral Thief',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'speedswap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user swaps its raw Speed stat with the target.',
      shortDesc: 'Swaps Speed stat with target.',
      name: 'Speed Swap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'spiderweb',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',

      shortDesc: 'The target cannot switch out.',
      name: 'Spider Web',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Bug',
      contestType: 'Clever'
    }
  ],
  [
    'spikecannon',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Spike Cannon',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'spikes',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Hurts grounded foes on switch-in. Max 3 layers.',
      name: 'Spikes',
      pp: 20,
      priority: 0,
      target: "Foe's Side",
      type: 'Ground',
      contestType: 'Clever'
    }
  ],
  [
    'spikyshield',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "The user is protected from most attacks made by other Pokémon during this turn, and Pokémon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
      shortDesc: 'Protects from moves. Contact: loses 1/8 max HP.',
      name: 'Spiky Shield',
      pp: 10,
      priority: 4,
      target: 'Self',
      type: 'Grass',
      contestType: 'Tough'
    }
  ],
  [
    'spiritbreak',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
      shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
      name: 'Spirit Break',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      maxMovePower: 130
    }
  ],
  [
    'spiritshackle',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',

      shortDesc: 'Prevents the target from switching out.',
      name: 'Spirit Shackle',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'spitup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: 'More power with more uses of Stockpile.',
      name: 'Spit Up',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'spite',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Lowers the PP of the target's last move by 4.",
      name: 'Spite',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Tough'
    }
  ],
  [
    'splash',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Nothing happens...',
      shortDesc: 'Does nothing (but we still love it).',
      name: 'Splash',
      pp: 40,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'splinteredstormshards',
    {
      accuracy: 100,
      basePower: '190',
      category: 'Physical',
      shortDesc: 'Ends the effects of terrain.',
      name: 'Splintered Stormshards',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'lycaniumz',
      target: 'Normal',
      type: 'Rock',
      contestType: 'Cool'
    }
  ],
  [
    'splishysplash',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze the target.',
      name: 'Splishy Splash',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Water',
      contestType: 'Cool'
    }
  ],
  [
    'spore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep.',
      shortDesc: 'Puts the target to sleep.',
      name: 'Spore',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful'
    }
  ],
  [
    'spotlight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Target's foes' moves are redirected to it this turn.",
      name: 'Spotlight',
      isNonstandard: 'Past',
      pp: 15,
      priority: 3,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'stealthrock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      target: "Foe's Side",
      type: 'Rock',
      contestType: 'Cool'
    }
  ],
  [
    'steameruption',
    {
      accuracy: 95,
      basePower: '110',
      category: 'Special',
      shortDesc: '30% chance to burn the target. Thaws target.',
      name: 'Steam Eruption',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 140
    }
  ],
  [
    'steamroller',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Steamroller',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Bug',
      contestType: 'Tough'
    }
  ],
  [
    'steelbeam',
    {
      accuracy: 95,
      basePower: '140',
      category: 'Special',
      desc: 'Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.',
      shortDesc: 'User loses 50% max HP. Hits adjacent Pokémon.',
      name: 'Steel Beam',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Steel',
      maxMovePower: 140
    }
  ],
  [
    'steelroller',
    {
      accuracy: 100,
      basePower: '130',
      category: 'Physical',
      desc: 'Fails if there is no terrain active. Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.',
      shortDesc: 'Fails if there is no terrain active. Ends the terrain.',
      name: 'Steel Roller',
      pp: 5,
      priority: 0,
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
      desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
      shortDesc: "10% chance to raise the user's Defense by 1.",
      name: 'Steel Wing',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'stickyweb',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Lowers Speed of grounded foes by 1 on switch-in.',
      name: 'Sticky Web',
      pp: 20,
      priority: 0,
      target: "Foe's Side",
      type: 'Bug',
      contestType: 'Tough'
    }
  ],
  [
    'stockpile',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Raises user's Defense, Sp. Def by 1. Max 3 uses.",
      name: 'Stockpile',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'stokedsparksurfer',
    {
      accuracy: 100,
      basePower: '175',
      category: 'Special',
      desc: 'Has a 100% chance to paralyze the target.',
      shortDesc: '100% chance to paralyze the target.',
      name: 'Stoked Sparksurfer',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'aloraichiumz',
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'stomp',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Stomp',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 120
    }
  ],
  [
    'stompingtantrum',
    {
      accuracy: 100,
      basePower: '75',
      category: 'Physical',
      shortDesc: "Power doubles if the user's last move failed.",
      name: 'Stomping Tantrum',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'stoneedge',
    {
      accuracy: 80,
      basePower: '100',
      category: 'Physical',
      desc: 'Has a higher chance for a critical hit.',
      shortDesc: 'High critical hit ratio.',
      name: 'Stone Edge',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'storedpower',
    {
      accuracy: 100,
      basePower: '20',
      category: 'Special',
      shortDesc: " + 20 power for each of the user's stat boosts.",
      name: 'Stored Power',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'stormthrow',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      shortDesc: 'Always results in a critical hit.',
      name: 'Storm Throw',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 80
    }
  ],
  [
    'strangesteam',
    {
      accuracy: 95,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 20% chance to confuse the target.',
      shortDesc: '20% chance to confuse the target.',
      name: 'Strange Steam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      maxMovePower: 130
    }
  ],
  [
    'strength',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Strength',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 130,
      isFieldMove: 'The Pokémon is able to push certain types of boulders around. Strength can be taught to Pokémon with HM04 in all generations.'
    }
  ],
  [
    'strengthsap',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "User heals HP=target's Atk stat. Lowers Atk by 1.",
      name: 'Strength Sap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cute'
    }
  ],
  [
    'stringshot',
    {
      accuracy: 95,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Speed by 2 stages.",
      shortDesc: 'Lowers the foe(s) Speed by 2.',
      name: 'String Shot',
      pp: 40,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Bug',
      contestType: 'Clever'
    }
  ],
  [
    'struggle',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Physical',
      shortDesc: 'User loses 25% of its max HP as recoil.',
      name: 'Struggle',
      pp: 1,
      priority: 0,
      target: 'Random',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 1,
      zMovePower: 1
    }
  ],
  [
    'strugglebug',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      shortDesc: '100% chance to lower the foe(s) Sp. Atk by 1.',
      name: 'Struggle Bug',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 100
    }
  ],
  [
    'stuffcheeks',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'This move cannot be selected unless the user is holding a Berry. The user eats its Berry and raises its Defense by 2 stages. This effect is not prevented by the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if the user is not holding a Berry.',
      shortDesc: 'Must hold Berry to use. User eats Berry, Def +2.',
      name: 'Stuff Cheeks',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'stunspore',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      desc: 'Paralyzes the target.',
      shortDesc: 'Paralyzes the target.',
      name: 'Stun Spore',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'submission',
    {
      accuracy: 80,
      basePower: '80',
      category: 'Physical',
      shortDesc: 'Has 1/4 recoil.',
      name: 'Submission',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'substitute',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'User takes 1/4 its max HP to put in a Substitute.',
      name: 'Substitute',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'subzeroslammer',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Subzero Slammer',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'iciumz',
      target: 'Normal',
      type: 'Ice',
      contestType: 'Cool'
    }
  ],
  [
    'suckerpunch',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'Usually goes first. Fails if target is not attacking.',
      name: 'Sucker Punch',
      pp: 5,
      priority: 1,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 120
    }
  ],
  [
    'sunnyday',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, intense sunlight powers Fire moves.',
      name: 'Sunny Day',
      pp: 5,
      priority: 0,
      target: 'All',
      type: 'Fire',
      contestType: 'Beautiful'
    }
  ],
  [
    'sunsteelstrike',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Ignores the Abilities of other Pokémon.',
      name: 'Sunsteel Strike',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'superfang',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Physical',
      shortDesc: "Does damage equal to 1/2 target's current HP.",
      name: 'Super Fang',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 100
    }
  ],
  [
    'superpower',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      desc: "Lowers the user's Attack and Defense by 1 stage.",
      shortDesc: "Lowers the user's Attack and Defense by 1.",
      name: 'Superpower',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough'
    }
  ],
  [
    'supersonic',
    {
      accuracy: 55,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to become confused.',
      shortDesc: 'Confuses the target.',
      name: 'Supersonic',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'supersonicskystrike',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Supersonic Skystrike',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'flyiniumz',
      target: 'Normal',
      type: 'Flying',
      contestType: 'Cool'
    }
  ],
  [
    'surf',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Damage doubles if the target is using Dive.',
      shortDesc: 'Hits adjacent Pokémon. Power doubles on Dive.',
      name: 'Surf',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 130,
      isFieldMove: "The player can travel across water on the Pokémon's back. Surf can be taught to Pokémon with HMO3 in all generations."
    }
  ],
  [
    'surgingstrikes',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      desc: 'Hits three times. This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.',
      shortDesc: 'Always results in a critical hit. Hits 3 times.',
      name: 'Surging Strikes',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      maxMovePower: 130,
      zMovePower: 140
    }
  ],
  [
    'surgingstrikes',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      desc: 'Hits three times. This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.',
      shortDesc: 'Always results in a critical hit. Hits 3 times.',
      name: 'Surging Strikes',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      maxMovePower: 130,
      zMovePower: 140
    }
  ],
  [
    'swagger',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      desc: "Raises the target's Attack by 2 stages and confuses it.",
      shortDesc: "Raises the target's Attack by 2 and confuses it.",
      name: 'Swagger',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'swallow',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Heals the user based on uses of Stockpile.',
      name: 'Swallow',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'sweetkiss',
    {
      accuracy: 75,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to become confused.',
      shortDesc: 'Confuses the target.',
      name: 'Sweet Kiss',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cute'
    }
  ],
  [
    'sweetscent',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's evasiveness by 2 stages.",
      shortDesc: 'Lowers the foe(s) evasiveness by 2.',
      name: 'Sweet Scent',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cute',
      isFieldMove:
        'The Pokémon can activate a wild Pokémon battle in tall grass, caves, and water. It can be taught to a Pokémon by using TM12 in Generation II, and it can be learned by many Grass-type Pokémon.'
    }
  ],
  [
    'swift',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy. Hits foes.',
      name: 'Swift',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'switcheroo',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "User switches its held item with the target's.",
      name: 'Switcheroo',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'swordsdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack by 2 stages.",
      shortDesc: "Raises the user's Attack by 2.",
      name: 'Swords Dance',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'synchronoise',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      desc: 'The target is immune if it does not share a type with the user.',
      shortDesc: "Hits adjacent Pokémon sharing the user's type.",
      name: 'Synchronoise',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'All Adjacent',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'synthesis',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
      shortDesc: 'Heals the user by a weather-dependent amount.',
      name: 'Synthesis',
      pp: 5,
      priority: 0,
      target: 'Self',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'tackle',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Tackle',
      pp: 35,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'tailglow',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Special Attack by 3 stages.",
      shortDesc: "Raises the user's Sp. Atk by 3.",
      name: 'Tail Glow',
      pp: 20,
      priority: 0,
      target: 'Self',
      type: 'Bug',
      contestType: 'Beautiful'
    }
  ],
  [
    'tailslap',
    {
      accuracy: 85,
      basePower: '25',
      category: 'Physical',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Tail Slap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 130
    }
  ],
  [
    'tailwhip',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Defense by 1 stage.",
      shortDesc: 'Lowers the foe(s) Defense by 1.',
      name: 'Tail Whip',
      pp: 30,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'tailwind',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 4 turns, allies' Speed is doubled.",
      name: 'Tailwind',
      pp: 15,
      priority: 0,
      target: "Ally's Side",
      type: 'Flying',
      contestType: 'Cool'
    }
  ],
  [
    'takedown',
    {
      accuracy: 85,
      basePower: '90',
      category: 'Physical',
      shortDesc: 'Has 1/4 recoil.',
      name: 'Take Down',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'tarshot',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Speed by 1 stage. Until the target switches out, the effectiveness of Fire-type moves is doubled against it.",
      shortDesc: 'Target gets -1 Spe and becomes weaker to Fire.',
      name: 'Tar Shot',
      pp: 20,
      priority: 0,
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
      shortDesc: "For 3 turns, the target can't use status moves.",
      name: 'Taunt',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'tearfullook',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack and Special Attack by 1 stage.",
      shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
      name: 'Tearful Look',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'teatime',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'All active Pokémon consume their held Berries. This effect is not prevented by substitutes, the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if no active Pokémon is holding a Berry.',
      shortDesc: 'All active Pokémon consume held Berries.',
      name: 'Teatime',
      pp: 10,
      priority: 0,
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
      desc: "This move's type depends on the user's held Drive.",
      shortDesc: 'Type varies based on the held Drive.',
      name: 'Techno Blast',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'tectonicrage',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Tectonic Rage',
      pp: 1,
      priority: 0,
      isZ: 'groundiumz',
      target: 'Normal',
      type: 'Ground',
      contestType: 'Cool'
    }
  ],
  [
    'teeterdance',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to become confused.',
      shortDesc: 'Confuses adjacent Pokémon.',
      name: 'Teeter Dance',
      pp: 20,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'telekinesis',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 3 turns, target floats but moves can't miss it.",
      name: 'Telekinesis',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'teleport',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.',
      shortDesc: 'User switches out.',
      name: 'Teleport',
      pp: 20,
      priority: -6,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Cool',
      isFieldMove:
        'The Pokémon can teleport the player to the front of the last visited Pokémon Center by using telekinesis. It can be taught to a Pokémon by using TM30 in Generation I, and it can be learned by many Psychic-type Pokémon.'
    }
  ],
  [
    'terrainpulse',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc: "Power doubles if the user is grounded and a terrain is active, and this move's type changes to match. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain.",
      shortDesc: 'User on terrain: power doubles, type varies.',
      name: 'Terrain Pulse',
      pp: 10,
      priority: 0,
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
      shortDesc: "If the user has no item, it steals the target's.",
      name: 'Thief',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'thousandarrows',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      shortDesc: 'Grounds adjacent foes. First hit neutral on Flying.',
      name: 'Thousand Arrows',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ground',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'thousandwaves',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: 'Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.',

      shortDesc: 'Hits adjacent foes. Prevents them from switching.',
      name: 'Thousand Waves',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ground',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'thrash',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Lasts 2-3 turns. Confuses the user afterwards.',
      name: 'Thrash',
      pp: 10,
      priority: 0,
      target: 'Random',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 40
    }
  ],
  [
    'throatchop',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'For 2 turns, the target cannot use sound-based moves.',
      shortDesc: 'For 2 turns, the target cannot use sound moves.',
      name: 'Throat Chop',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'thunder',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokémon holding Utility Umbrella, this move's accuracy remains at 70%.",
      shortDesc: "30% chance to paralyze target. Can't miss in rain.",
      name: 'Thunder',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 40
    }
  ],
  [
    'thundercage',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Special',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',

      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Thunder Cage',
      pp: 15,
      priority: 0,
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
      desc: 'Has a 10% chance to paralyze the target and a 10% chance to make it flinch.',
      shortDesc: '10% chance to paralyze. 10% chance to flinch.',
      name: 'Thunder Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'thunderouskick',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
      shortDesc: "100% chance to lower the target's Defense by 1.",
      name: 'Thunderous Kick',
      pp: 10,
      priority: 0,
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
      desc: 'Has a 10% chance to paralyze the target.',
      shortDesc: '10% chance to paralyze the target.',
      name: 'Thunder Punch',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'thundershock',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'Has a 10% chance to paralyze the target.',
      shortDesc: '10% chance to paralyze the target.',
      name: 'Thunder Shock',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'thunderwave',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      desc: 'Paralyzes the target.',
      shortDesc: 'Paralyzes the target.',
      name: 'Thunder Wave',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'thunderbolt',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      desc: 'Has a 10% chance to paralyze the target.',
      shortDesc: '10% chance to paralyze the target.',
      name: 'Thunderbolt',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'tickle',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Attack and Defense by 1 stage.",
      shortDesc: "Lowers the target's Attack and Defense by 1.",
      name: 'Tickle',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'topsyturvy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Inverts the target's stat stages.",
      name: 'Topsy-Turvy',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
    }
  ],
  [
    'torment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Target can't select the same move twice in a row.",
      name: 'Torment',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough'
    }
  ],
  [
    'toxic',
    {
      accuracy: 90,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Badly poisons the target.',
      name: 'Toxic',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Clever'
    }
  ],
  [
    'toxicspikes',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Poisons grounded foes on switch-in. Max 2 layers.',
      name: 'Toxic Spikes',
      pp: 20,
      priority: 0,
      target: "Foe's Side",
      type: 'Poison',
      contestType: 'Clever'
    }
  ],
  [
    'toxicthread',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Lowers the target's Speed by 1 stage and poisons it.",
      shortDesc: "Lowers the target's Speed by 1 and poisons it.",
      name: 'Toxic Thread',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Tough'
    }
  ],
  [
    'transform',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Copies target's stats, moves, types, and Ability.",
      name: 'Transform',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'triattack',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: '20% chance to paralyze or burn or freeze target.',
      name: 'Tri Attack',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 80
    }
  ],
  [
    'trick',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "User switches its held item with the target's.",
      name: 'Trick',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'trickroom',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "For 5 turns, the Speed of every Pokémon is recalculated for the purposes of determining turn order. During the effect, each Pokémon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
      shortDesc: 'Goes last. For 5 turns, turn order is reversed.',
      name: 'Trick Room',
      pp: 5,
      priority: -7,
      target: 'All',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'trickortreat',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "Adds Ghost to the target's type(s).",
      name: 'Trick-or-Treat',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cute'
    }
  ],
  [
    'tripleaxel',
    {
      accuracy: 90,
      basePower: '20',
      category: 'Physical',
      desc: "Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
      shortDesc: 'Hits 3 times. Each hit can miss, but power rises.',
      name: 'Triple Axel',
      pp: 10,
      priority: 0,
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
      shortDesc: 'Hits 3 times. Each hit can miss, but power rises.',
      name: 'Triple Kick',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 80
    }
  ],
  [
    'tropkick',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
      shortDesc: "100% chance to lower the target's Attack by 1.",
      name: 'Trop Kick',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cute',
      maxMovePower: 120
    }
  ],
  [
    'trumpcard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: 'More power the fewer PP this move has left.',
      name: 'Trump Card',
      pp: 5,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
    }
  ],
  [
    'twineedle',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      shortDesc: 'Hits 2 times. Each hit has 20% chance to poison.',
      name: 'Twineedle',
      pp: 20,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool'
    }
  ],
  [
    'twinkletackle',
    {
      accuracy: 100,
      basePower: '1',
      category: 'Physical',
      shortDesc: "Power is equal to the base move's Z-Power.",
      name: 'Twinkle Tackle',
      pp: 1,
      priority: 0,
      isNonstandard: 'Past',
      isZ: 'fairiumz',
      target: 'Normal',
      type: 'Fairy',
      contestType: 'Cool'
    }
  ],
  [
    'twister',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.',
      shortDesc: '20% chance to make the foe(s) flinch.',
      name: 'Twister',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'uturn',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'User switches out after damaging the target.',
      name: 'U-turn',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute',
      maxMovePower: 120
    }
  ],
  [
    'uproar',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: 'Lasts 3 turns. Active Pokémon cannot fall asleep.',
      name: 'Uproar',
      pp: 10,
      priority: 0,
      target: 'Random',
      type: 'Normal',
      contestType: 'Cute',
      maxMovePower: 30
    }
  ],
  [
    'vcreate',
    {
      accuracy: 95,
      basePower: '180',
      category: 'Physical',
      shortDesc: "Lowers the user's Defense, Sp. Def, Speed by 1.",
      name: 'V-create',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool',
      maxMovePower: 150,
      zMovePower: 220
    }
  ],
  [
    'vacuumwave',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'Usually goes first.',
      name: 'Vacuum Wave',
      pp: 30,
      priority: 1,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 70
    }
  ],
  [
    'veeveevolley',
    {
      accuracy: 100,
      basePower: '(happiness * 10) / 25',
      category: 'Physical',
      shortDesc: "Max happiness: 102 power. Can't miss.",
      name: 'Veevee Volley',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'venomdrench',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Lowers Atk, Sp. Atk, Speed of poisoned foes by 1.',
      name: 'Venom Drench',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Poison',
      contestType: 'Clever'
    }
  ],
  [
    'venoshock',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Special',
      desc: 'Power doubles if the target is poisoned.',
      shortDesc: 'Power doubles if the target is poisoned.',
      name: 'Venoshock',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Poison',
      contestType: 'Beautiful',
      maxMovePower: 85
    }
  ],
  [
    'vinewhip',
    {
      accuracy: 100,
      basePower: '45',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Vine Whip',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool',
      maxMovePower: 100
    }
  ],
  [
    'visegrip',
    {
      accuracy: 100,
      basePower: '55',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Vise Grip',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 110
    }
  ],
  [
    'vitalthrow',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'This move does not check accuracy.',
      shortDesc: 'This move does not check accuracy. Goes last.',
      name: 'Vital Throw',
      pp: 10,
      priority: -1,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Cool',
      maxMovePower: 85
    }
  ],
  [
    'voltswitch',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      shortDesc: 'User switches out after damaging the target.',
      name: 'Volt Switch',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 120
    }
  ],
  [
    'volttackle',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Has 33% recoil. 10% chance to paralyze target.',
      name: 'Volt Tackle',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'wakeupslap',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      shortDesc: 'Power doubles if target is asleep, and wakes it.',
      name: 'Wake-Up Slap',
      pp: 10,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough'
    }
  ],
  [
    'watergun',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Water Gun',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cute',
      maxMovePower: 90
    }
  ],
  [
    'waterpledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
      shortDesc: 'Use with Grass or Fire Pledge for added effect.',
      name: 'Water Pledge',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 130
    }
  ],
  [
    'waterpulse',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Special',
      desc: 'Has a 20% chance to confuse the target.',
      shortDesc: '20% chance to confuse the target.',
      name: 'Water Pulse',
      pp: 20,
      priority: 0,
      target: 'Any',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 110
    }
  ],
  [
    'watershuriken',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Special',
      desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times.",
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Water Shuriken',
      pp: 20,
      priority: 1,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool',
      maxMovePower: 90
    }
  ],
  [
    'watersport',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, Fire-type attacks have 1/3 power.',
      name: 'Water Sport',
      pp: 15,
      priority: 0,
      isNonstandard: 'Past',
      target: 'All',
      type: 'Water',
      contestType: 'Cute'
    }
  ],
  [
    'waterspout',
    {
      accuracy: 100,
      basePower: '150',
      category: 'Special',
      shortDesc: "Less power as user's HP decreases. Hits foe(s).",
      name: 'Water Spout',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 150
    }
  ],
  [
    'waterfall',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 20% chance to make the target flinch.',
      shortDesc: '20% chance to make the target flinch.',
      name: 'Waterfall',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough',
      maxMovePower: 130,
      isFieldMove:
        "The player can climb up waterfalls on the Pokémon's back. Waterfall can be taught to Pokémon with HM07 in generations II, III and IV, and HM05 in generation 5 onwards. It was available in generation I as a level-up move, but did not have any out-of-battle effects."
    }
  ],
  [
    'weatherball',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, the move is still Normal-type and does not have a base power boost.",
      shortDesc: 'Power doubles and type varies in each weather.',
      name: 'Weather Ball',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful',
      maxMovePower: 130,
      zMovePower: 160
    }
  ],
  [
    'whirlpool',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Special',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',

      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Whirlpool',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful',
      maxMovePower: 90,
      isFieldMove:
        "The Pokémon can dismiss small whirlpools in the water. Whirlpool is taught to Pokémon with HM06 in generation II and generation IV's HeartGold and SoulSilver as HM05"
    }
  ],
  [
    'whirlwind',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Forces the target to switch to a random ally.',
      name: 'Whirlwind',
      pp: 20,
      priority: -6,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Clever'
    }
  ],
  [
    'wickedblow',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.',
      shortDesc: 'Always results in a critical hit.',
      name: 'Wicked Blow',
      pp: 5,
      priority: 0,
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
      desc: "The user and its party members are protected from moves made by other Pokémon, including allies, during this turn that target Adjacent Foes or All Adjacent Pokémon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
      shortDesc: 'Protects allies from multi-target damage this turn.',
      name: 'Wide Guard',
      pp: 10,
      priority: 3,
      target: "Ally's Side",
      type: 'Rock',
      contestType: 'Tough'
    }
  ],
  [
    'wildcharge',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      shortDesc: 'Has 1/4 recoil.',
      name: 'Wild Charge',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Tough',
      maxMovePower: 130
    }
  ],
  [
    'willowisp',
    {
      accuracy: 85,
      basePower: '0',
      category: 'Status',
      desc: 'Burns the target.',
      shortDesc: 'Burns the target.',
      name: 'Will-O-Wisp',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful'
    }
  ],
  [
    'wingattack',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'Wing Attack',
      pp: 35,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool',
      maxMovePower: 110
    }
  ],
  [
    'wish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
      shortDesc: "Next turn, 50% of the user's max HP is restored.",
      name: 'Wish',
      pp: 10,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'withdraw',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Defense by 1 stage.",
      shortDesc: "Raises the user's Defense by 1.",
      name: 'Withdraw',
      pp: 40,
      priority: 0,
      target: 'Self',
      type: 'Water',
      contestType: 'Cute'
    }
  ],
  [
    'wonderroom',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, all Defense and Sp. Def stats switch.',
      name: 'Wonder Room',
      pp: 10,
      priority: 0,
      target: 'All',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'woodhammer',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Physical',
      shortDesc: 'Has 33% recoil.',
      name: 'Wood Hammer',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Tough',
      maxMovePower: 140
    }
  ],
  [
    'workup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Raises the user's Attack and Special Attack by 1 stage.",
      shortDesc: "Raises the user's Attack and Sp. Atk by 1.",
      name: 'Work Up',
      pp: 30,
      priority: 0,
      target: 'Self',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'worryseed',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
      shortDesc: "The target's Ability becomes Insomnia.",
      name: 'Worry Seed',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Clever'
    }
  ],
  [
    'wrap',
    {
      accuracy: 90,
      basePower: '15',
      category: 'Physical',
      desc: 'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Wrap',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough',
      maxMovePower: 90
    }
  ],
  [
    'wringout',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Special',
      shortDesc: 'More power the more HP the target has left.',
      name: 'Wring Out',
      pp: 5,
      priority: 0,
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'xscissor',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect.',
      name: 'X-Scissor',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'yawn',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc: 'Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.',

      shortDesc: 'Puts the target to sleep after 1 turn.',
      name: 'Yawn',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'zapcannon',
    {
      accuracy: 50,
      basePower: '120',
      category: 'Special',
      desc: 'Has a 100% chance to paralyze the target.',
      shortDesc: '100% chance to paralyze the target.',
      name: 'Zap Cannon',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 140
    }
  ],
  [
    'zenheadbutt',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 20% chance to make the target flinch.',
      shortDesc: '20% chance to make the target flinch.',
      name: 'Zen Headbutt',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever',
      maxMovePower: 130
    }
  ],
  [
    'zingzap',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 30% chance to make the target flinch.',
      shortDesc: '30% chance to make the target flinch.',
      name: 'Zing Zap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool',
      maxMovePower: 130
    }
  ],
  [
    'zippyzap',
    {
      accuracy: 80,
      basePower: '50',
      category: 'Physical',
      desc: "Has a 100% chance to raise the user's evasion by 1 stage.",
      shortDesc: "Goes first. Raises user's evasion by 1.",
      name: 'Zippy Zap',
      pp: 10,
      priority: 2,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ]
]);
