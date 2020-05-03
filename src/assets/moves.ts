/* eslint-disable max-len*/
import { Pokemon } from '../utils/pokemon';
import GraphQLCollection from '../utils/GraphQLCollection';

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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
    }
  ],
  [
    'airslash',
    {
      accuracy: 95,
      basePower: '75',
      category: 'Special',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Air Slash',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool'
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
      shortDesc: 'Prevents the target from switching out.',
      name: 'Anchor Shot',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      type: 'Grass'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'armthrust',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Physical',
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Arm Thrust',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Fighting',
      contestType: 'Tough'
    }
  ],
  [
    'aromatherapy',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      desc:
        "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
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
      contestType: 'Clever'
    }
  ],
  [
    'astonish',
    {
      accuracy: 100,
      basePower: '30',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Astonish',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cute'
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'aurawheel',
    {
      accuracy: 100,
      basePower: '110',
      category: 'Physical',
      desc:
        "Has a 100% chance to raise the user's Speed by 1 stage. If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
      shortDesc: 'Morpeko: Electric; Hangry: Dark; 100% +1 Spe.',
      name: 'Aura Wheel',
      pp: 10,
      priority: 0,
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
      desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
      shortDesc: "10% chance to lower the foe's Attack by 1.",
      name: 'Aurora Beam',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      desc:
        "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      contestType: 'Tough'
    }
  ],
  [
    'beatup',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      shortDesc: 'All healthy allies aid in damaging the target.',
      name: 'Beat Up',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
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
      type: 'Steel'
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
      type: 'Steel'
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
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Bind',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'bite',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Bite',
      pp: 25,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'block',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      contestType: 'Beautiful'
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
      type: 'Fighting'
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
      contestType: 'Tough'
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
      type: 'Electric'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'boneclub',
    {
      accuracy: 85,
      basePower: '65',
      category: 'Physical',
      desc: 'Has a 10% chance to flinch the target.',
      shortDesc: '10% chance to flinch the target.',
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
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Bone Rush',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Tough'
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
      contestType: 'Tough'
    }
  ],
  [
    'boomburst',
    {
      accuracy: 100,
      basePower: '140',
      category: 'Special',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent Pokemon.',
      name: 'Boomburst',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Tough'
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
      contestType: 'Cute'
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
      contestType: 'Cool'
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
      shortDesc: '100% chance to lower the foe(s) Attack by 1.',
      name: 'Breaking Swipe',
      pp: 15,
      priority: 0,
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
      contestType: 'Cool'
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
      contestType: 'Tough'
    }
  ],
  [
    'brutalswing',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'No additional effect.',
      shortDesc: 'No additional effect. Hits adjacent Pokemon.',
      name: 'Brutal Swing',
      pp: 20,
      priority: 0,
      target: 'All Adjacent',
      type: 'Dark',
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Cute'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
    }
  ],
  [
    'bulletseed',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Bullet Seed',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Cute'
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
      contestType: 'Cool'
    }
  ],
  [
    'clamp',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Physical',
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
      contestType: 'Tough'
    }
  ],
  [
    'clangoroussoul',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage in exchange for the user losing 1/3 of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Defense, Special Attack, Special Defense, and Speed stat stages would not change.",
      shortDesc: 'User loses 1/3 its max HP. Raises all stats by 1.',
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      desc:
        "The user uses the last move used by any Pokemon, including itself. The base move of Max and G-Max Moves is considered for this purpose. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Dragon Tail, Dynamax Cannon, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Obstruct, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, or Whirlwind.",
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
      desc:
        "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
      shortDesc: 'Nullifies the foe(s) Ability if the target moves first.',
      name: 'Core Enforcer',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon',
      contestType: 'Tough'
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
      shortDesc: 'If hit by physical attack, returns double damage.',
      name: 'Counter',
      pp: 20,
      priority: -5,
      target: 'Foe that last hit user',
      type: 'Fighting',
      contestType: 'Tough'
    }
  ],
  [
    'courtchange',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "Switches the Mist, Light Screen, Reflect, Spikes, Safeguard, Tailwind, Toxic Spikes, Stealth Rock, Water Pledge, Fire Pledge, Grass Pledge, Sticky Web, Aurora Veil, G-Max Steelsurge, and G-Max Wildfire effects from the user's side to the opposing side and vice versa.",
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
      contestType: 'Cute'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      target: 'Normal',
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
      contestType: 'Cool'
    }
  ],
  [
    'darkpulse',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 20% chance to flinch the target.',
      shortDesc: '20% chance to flinch the target.',
      name: 'Dark Pulse',
      pp: 15,
      priority: 0,
      target: 'Any',
      type: 'Dark',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      shortDesc: "-1 evasion; clears user and target side's hazards.",
      name: 'Defog',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Flying',
      contestType: 'Cool'
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
      desc:
        "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      shortDesc: "50% chance to raise user's Def by 2 for each hit.",
      name: 'Diamond Storm',
      pp: 5,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Rock',
      contestType: 'Beautiful'
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
      contestType: 'Tough'
    }
  ],
  [
    'disable',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: "For 4 turns, disables the target's last move used.",
      desc:
        "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
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
      contestType: 'Cute'
    }
  ],
  [
    'discharge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 30% chance to paralyze the target.',
      shortDesc: '30% chance to paralyze adjacent Pokemon.',
      name: 'Discharge',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Electric',
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
    }
  ],
  [
    'doubleironbash',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      shortDesc: 'Hits twice. 30% chance to flinch.',
      name: 'Double Iron Bash',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Clever'
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
      contestType: 'Cool'
    }
  ],
  [
    'doubleslap',
    {
      accuracy: 85,
      basePower: '15',
      category: 'Physical',
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      desc:
        "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokemon and its ally once each. If hitting one of these Pokemon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokemon twice instead. If this move is redirected, it hits that target twice.",
      shortDesc: 'Hits twice. Doubles: Tries to hit each foe once.',
      name: 'Dragon Darts',
      pp: 10,
      priority: 0,
      target: 'Normal',
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      shortDesc: '20% chance to flinch the target.',
      name: 'Dragon Rush',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Dragon',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Cute'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      type: 'Grass'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      type: 'Dragon'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'earthquake',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      desc: 'Damage doubles if the target is using Dig.',
      shortDesc: 'Hits adjacent Pokemon. Power doubles on Dig.',
      name: 'Earthquake',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Ground',
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      desc:
        'For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.',
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Cute'
    }
  ],
  [
    'encore',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'The target repeats its last move for 3 turns.',
      desc:
        'For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, if the move is Assist, Copycat, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, or Transform, or if the target is Dynamaxed.',
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
      contestType: 'Tough'
    }
  ],
  [
    'endure',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      contestType: 'Beautiful'
    }
  ],
  [
    'entrainment',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or the same Ability as the user, or if the user's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, or Zen Mode.",
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
      contestType: 'Beautiful'
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
      type: 'Dragon'
    }
  ],
  [
    'explosion',
    {
      accuracy: 100,
      basePower: '250',
      category: 'Physical',
      shortDesc: 'Hits adjacent Pokemon. The user faints.',
      name: 'Explosion',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'extrasensory',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 10% chance to flinch the target.',
      shortDesc: '10% chance to flinch the target.',
      name: 'Extrasensory',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cute'
    }
  ],
  [
    'fairylock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'Prevents all Pokemon from switching next turn.',
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
      contestType: 'Beautiful'
    }
  ],
  [
    'fakeout',
    {
      accuracy: 100,
      basePower: '40',
      category: 'Physical',
      shortDesc: 'Hits first. First turn out only. 100% flinch chance.',
      name: 'Fake Out',
      pp: 10,
      priority: 3,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
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
      type: 'Dark'
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
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'firefang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      shortDesc: '10% chance to burn. 10% chance to flinch.',
      name: 'Fire Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Cool'
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
      contestType: 'Cute'
    }
  ],
  [
    'firepledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'Use with Grass or Water Pledge for added effect.',
      name: 'Fire Pledge',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful'
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
      contestType: 'Tough'
    }
  ],
  [
    'firespin',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Special',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Fire Spin',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful'
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
      type: 'Water'
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
      contestType: 'Cute'
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
      contestType: 'Tough'
    }
  ],
  [
    'flail',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Physical',
      desc:
        "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
      shortDesc: 'More power the less HP the user has left.',
      name: 'Flail',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
    }
  ],
  [
    'flameburst',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Special',
      shortDesc: 'Damages Pokemon next to the target as well.',
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cute'
    }
  ],
  [
    'floatyfall',
    {
      accuracy: 95,
      basePower: '90',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
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
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'freezyfrost',
    {
      accuracy: 90,
      basePower: '100',
      category: 'Special',
      desc: 'Resets the stat stages of all active Pokemon to 0.',
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Fury Attack',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
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
      contestType: 'Cool'
    }
  ],
  [
    'furyswipes',
    {
      accuracy: 80,
      basePower: '18',
      category: 'Physical',
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Fury Swipes',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'fusionbolt',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Physical',
      shortDesc: 'Power doubles if used after Fusion Flare.',
      name: 'Fusion Bolt',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'fusionflare',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: 'Power doubles if used after Fusion Bolt.',
      name: 'Fusion Flare',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Beautiful'
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
      contestType: 'Clever'
    }
  ],
  [
    'gastroacid',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
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
      contestType: 'Clever'
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
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side either falls asleep, becomes poisoned, or becomes paralyzed, even if they have a substitute.",
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
    'gmaxcentiferno',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the user's side gains the Focus Energy effect, even if they have a substitute.",
      shortDesc: 'Base move affects power. Allies: Focus Energy.',
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes infatuated, even if they have a substitute. This effect does not happen for a target if both it and the user are the same gender, if either is genderless, or if the target is already infatuated.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side loses 2 PP from its last move used, even if they have a substitute.",
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
    'gmaxfinale',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the user's side restores 1/6 of its current maximum HP, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the evasiveness of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
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
    'gmaxvolcalith',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Rock-type Pokemon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes paralyzed, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, for 4 turns each non-Fire-type Pokemon on the opposing side takes damage equal to 1/6 of its maximum HP, rounded down, at the end of each turn during effect, including the last turn.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain end, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, G-Max Steelsurge, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of G-Max Steelsurge, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side.",
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
    'gmaxfoamburst',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the opposing side is lowered by 2 stages, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes confused, even if they have a substitute.",
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
    'gmaxmalodor',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes poisoned, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Torment begins for each Pokemon on the opposing side, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side either becomes poisoned or paralyzed, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the user's side has its status condition cured, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side is prevented from switching out, even if they have a substitute. They can still switch out if they are holding Shed Shell or use Baton Pass, Parting Shot, U-turn, or Volt Switch. If a target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
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
    'gmaxreplenish',
    {
      accuracy: 100,
      basePower: '10',
      category: 'Physical',
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, there is a 50% chance every Pokemon on the user's side has its Berry restored, even if they have a substitute.",
      shortDesc: 'Base move affects power. 50% restores Berries.',
      name: 'G-Max Replenish',
      pp: 10,
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side is prevented from switching for four or five turns (seven turns if the user is holding Grip Claw), even if they have a substitute. Causes damage equal to 1/8 of their maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. They can still switch out if they are holding Shed Shell or use Baton Pass, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends for a target if it leaves the field, or if it uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes confused, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Steel type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
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
      contestType: 'Cute'
    }
  ],
  [
    'grasspledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'Use with Fire or Water Pledge for added effect.',
      name: 'Grass Pledge',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Beautiful'
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
    'grassyterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        'For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.3, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.',
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
      type: 'Grass'
    }
  ],
  [
    'gravity',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'For 5 turns, negates all Ground immunities.',
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
      desc:
        "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day or Desolate Land, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sunny Day or Desolate Land.",
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      desc: 'Resets the stat stages of all active Pokemon to 0.',
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
      contestType: 'Tough'
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
      contestType: 'Tough'
    }
  ],
  [
    'headbutt',
    {
      accuracy: 100,
      basePower: '70',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Headbutt',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
    }
  ],
  [
    'healbell',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      desc:
        'The user faints and the next injured or statused Pokemon brought in has its HP fully restored along with having any major status condition cured. The healing happens before hazards take effect. Is not consumed if the Pokemon sent out is not injured or statused. Fails if the user is the last unfainted Pokemon in its party.',
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
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      desc: 'Power doubles if the target has a major status condition.',
      shortDesc: 'Power doubles if the target has a status ailment.',
      name: 'Hex',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Clever'
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
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      desc:
        "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
      shortDesc: "30% chance to confuse target. Can't miss in rain.",
      name: 'Hurricane',
      pp: 10,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
    }
  ],
  [
    'hyperfang',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 10% chance to flinch the target.',
      shortDesc: '10% chance to flinch the target.',
      name: 'Hyper Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'icefang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      shortDesc: '10% chance to freeze. 10% chance to flinch.',
      name: 'Ice Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'iciclecrash',
    {
      accuracy: 90,
      basePower: '85',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Icicle Crash',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful'
    }
  ],
  [
    'iciclespear',
    {
      accuracy: 100,
      basePower: '25',
      category: 'Physical',
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Icicle Spear',
      pp: 30,
      priority: 0,
      target: 'Normal',
      type: 'Ice',
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Infestation',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cute'
    }
  ],
  [
    'ingrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      desc:
        "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Celebrate, Copycat, Dynamax Cannon, Focus Punch, Ice Ball, Instruct, King's Shield, Me First, Metronome, Mimic, Mirror Move, Nature Power, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, any two-turn move, any recharge move, or any Z-Move.",
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
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Iron Head',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Tough'
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
      contestType: 'Cool'
    }
  ],
  [
    'jawlock',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc:
        'Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if either the user or the target leaves the field.',
      shortDesc: 'Prevents both user and target from switching out.',
      name: 'Jaw Lock',
      pp: 15,
      priority: 0,
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
      desc: "This move's type depends on the user's held Plate.",
      shortDesc: 'Type varies based on the held Plate.',
      name: 'Judgment',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful'
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
      isNonstandard: 'Past',
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
      desc:
        "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Attack lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      desc:
        "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
      shortDesc: '1.5x damage if foe holds an item. Removes item.',
      name: 'Knock Off',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Dark',
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Cute'
    }
  ],
  [
    'lavaplume',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      desc: 'Has a 30% chance to burn the target.',
      shortDesc: '30% chance to burn adjacent Pokemon.',
      name: 'Lava Plume',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fire',
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      contestType: 'Cute'
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
      desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up.",
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      shortDesc: 'User faints. Replacement is fully healed, with PP.',
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
      contestType: 'Cute'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Magma Storm',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Fire',
      contestType: 'Tough'
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
      shortDesc: 'Hits adjacent Pokemon. Power varies; 2x on Dig.',
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
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
      desc:
        "The user is protected from nearly all attacks made by other Pokemon during this turn, including Max and G-Max Moves. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
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
      desc:
        "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
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
      desc: "Power is equal to the base move's Max Move power. If this move is successful, the Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute.",
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      shortDesc: 'Ignores the Abilities of other Pokemon.',
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
      shortDesc: 'If hit by an attack, returns 1.5x damage.',
      name: 'Metal Burst',
      pp: 10,
      priority: 0,
      target: 'Foe that last hit user',
      type: 'Steel',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      type: 'Fighting'
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
      contestType: 'Cool'
    }
  ],
  [
    'metronome',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "A random move is selected for use, other than After You, Apple Acid, Assist, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Clangorous Soul, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Double Iron Bash, Dragon Ascent, Drum Beating, Dynamax Cannon, Endure, Eternabeam, False Surrender, Feint, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Grav Apple, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, King's Shield, Life Dew, Light of Ruin, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Obstruct, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spirit Break, Spotlight, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
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
      contestType: 'Cute'
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
      shortDesc: 'User loses 50% max HP. Hits adjacent Pokemon.',
      name: 'Mind Blown',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fire',
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Clever'
    }
  ],
  [
    'mistyterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      contestType: 'Beautiful'
    }
  ],
  [
    'moongeistbeam',
    {
      accuracy: 100,
      basePower: '100',
      category: 'Special',
      shortDesc: 'Ignores the Abilities of other Pokemon.',
      name: 'Moongeist Beam',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Cool'
    }
  ],
  [
    'moonlight',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
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
      desc:
        'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
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
      contestType: 'Tough'
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
      contestType: 'Cute'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
    }
  ],
  [
    'needlearm',
    {
      accuracy: 100,
      basePower: '60',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
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
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      desc:
        "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Fails if the user has already been prevented from switching by this effect.",
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
      contestType: 'Cute'
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
      contestType: 'Cool'
    }
  ],
  [
    'obstruct',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Defense lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      contestType: 'Tough'
    }
  ],
  [
    'octolock',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "Prevents the target from switching out. At the end of each turn during effect, the target's Defense and Special Defense are lowered by 1 stage. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      type: 'Electric'
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
      contestType: 'Beautiful'
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
      contestType: 'Clever'
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
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
    }
  ],
  [
    'perishsong',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      shortDesc: 'All active Pokemon will faint in 3 turns.',
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
      shortDesc: 'No additional effect. Hits adjacent Pokemon.',
      name: 'Petal Blizzard',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Grass',
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Pin Missile',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Bug',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cute'
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
      contestType: 'Cute'
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
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      contestType: 'Clever'
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
      contestType: 'Cute'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Cute'
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
      contestType: 'Cool'
    }
  ],
  [
    'protect',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      contestType: 'Beautiful'
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
      contestType: 'Clever'
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
      contestType: 'Clever'
    }
  ],
  [
    'psychicterrain',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
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
      contestType: 'Clever'
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
      contestType: 'Cool'
    }
  ],
  [
    'psychoshift',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      shortDesc: "Cures target's status; heals user 1/2 maxHP if so.",
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
      shortDesc: 'Power doubles if a foe is switching out.',
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
      type: 'Fire'
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
      contestType: 'Cool'
    }
  ],
  [
    'quickguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokemon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
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
      desc:
        "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
      shortDesc: 'Free user from hazards/binding/Leech Seed;+1 Spe.',
      name: 'Rapid Spin',
      pp: 40,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'rest',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'rockblast',
    {
      accuracy: 90,
      basePower: '25',
      category: 'Physical',
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Rock Blast',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Rock',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the foe(s).',
      name: 'Rock Slide',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Rock',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      contestType: 'Tough'
    }
  ],
  [
    'roleplay',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or already matches the target, or if the target's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
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
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
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
      contestType: 'Cute'
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
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
    }
  ],
  [
    'safeguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Sand Tomb',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Ground',
      contestType: 'Clever'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      shortDesc: '30% chance to burn adjacent Pokemon.',
      name: 'Searing Shot',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Fire',
      contestType: 'Cool'
    }
  ],
  [
    'searingsunrazesmash',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Physical',
      shortDesc: 'Ignores the Abilities of other Pokemon.',
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
    }
  ],
  [
    'selfdestruct',
    {
      accuracy: 100,
      basePower: '200',
      category: 'Physical',
      shortDesc: 'Hits adjacent Pokemon. The user faints.',
      name: 'Self-Destruct',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
      type: 'Normal',
      contestType: 'Beautiful'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      contestType: 'Clever'
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
      contestType: 'Beautiful'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      desc:
        "Causes the target's Ability to become Simple. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Truant, or Zen Mode.",
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
      desc:
        "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
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
      contestType: 'Tough'
    }
  ],
  [
    'skyattack',
    {
      accuracy: 90,
      basePower: '140',
      category: 'Physical',
      shortDesc: 'Charges, then hits turn 2. 30% flinch. High crit.',
      name: 'Sky Attack',
      pp: 5,
      priority: 0,
      target: 'Any',
      type: 'Flying',
      contestType: 'Cool'
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
      shortDesc: 'Can hit Pokemon using Bounce, Fly, or Sky Drop.',
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      desc:
        "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Max Move.",
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
      contestType: 'Tough'
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
      contestType: 'Tough'
    }
  ],
  [
    'sludgewave',
    {
      accuracy: 100,
      basePower: '95',
      category: 'Special',
      desc: 'Has a 10% chance to poison the target.',
      shortDesc: '10% chance to poison adjacent Pokemon.',
      name: 'Sludge Wave',
      pp: 10,
      priority: 0,
      target: 'All Adjacent',
      type: 'Poison',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      desc:
        'Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Snap Trap',
      pp: 15,
      priority: 0,
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
      shortDesc: '100% chance to lower the foe(s) Sp. Atk by 1.',
      name: 'Snarl',
      pp: 15,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dark',
      contestType: 'Tough'
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
      type: 'Water'
    }
  ],
  [
    'snore',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      shortDesc: 'User must be asleep. 30% chance to flinch target.',
      name: 'Snore',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
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
      contestType: 'Cute'
    }
  ],
  [
    'solarbeam',
    {
      accuracy: 100,
      basePower: '120',
      category: 'Special',
      desc:
        'This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.',
      shortDesc: 'Charges turn 1. Hits turn 2. No charge in sunlight.',
      name: 'Solar Beam',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool'
    }
  ],
  [
    'solarblade',
    {
      accuracy: 100,
      basePower: '125',
      category: 'Physical',
      desc:
        'This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.',
      shortDesc: 'Charges turn 1. Hits turn 2. No charge in sunlight.',
      name: 'Solar Blade',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Grass',
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
    }
  ],
  [
    'sparklyswirl',
    {
      accuracy: 85,
      basePower: '120',
      category: 'Special',
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
      contestType: 'Cool'
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
      desc:
        "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
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
      type: 'Fairy'
    }
  ],
  [
    'spiritshackle',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      shortDesc: 'Prevents the target from switching out.',
      name: 'Spirit Shackle',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Ghost',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      shortDesc: 'Ends the effects of Terrain.',
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
      shortDesc: '30% chance to burn the target.',
      name: 'Steam Eruption',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful'
    }
  ],
  [
    'steamroller',
    {
      accuracy: 100,
      basePower: '65',
      category: 'Physical',
      shortDesc: '30% chance to flinch the target.',
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
      desc: 'If this move is successful, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.',
      shortDesc: 'User loses 50% max HP. Hits adjacent Pokemon.',
      name: 'Steel Beam',
      pp: 5,
      priority: 0,
      target: 'All Adjacent',
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
      contestType: 'Cool'
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
      shortDesc: '30% chance to flinch the target.',
      name: 'Stomp',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
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
      contestType: 'Cool'
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
      type: 'Fairy'
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
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Cute'
    }
  ],
  [
    'stuffcheeks',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        'The user eats its Berry and raises its Defense by 2 stages. This effect is not prevented by the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if the user is not holding a Berry.',
      shortDesc: 'User eats its Berry and raises its Defense by 2.',
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
      contestType: 'Cool'
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
      contestType: 'Clever'
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
      shortDesc: 'Ignores the Abilities of other Pokemon.',
      name: 'Sunsteel Strike',
      pp: 5,
      priority: 0,
      target: 'Normal',
      type: 'Steel',
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      shortDesc: 'Hits adjacent Pokemon. Power doubles on Dive.',
      name: 'Surf',
      pp: 15,
      priority: 0,
      target: 'All Adjacent',
      type: 'Water',
      contestType: 'Beautiful'
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
      contestType: 'Cute'
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
      contestType: 'Cool'
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
      shortDesc: "Hits adjacent Pokemon sharing the user's type.",
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
      desc:
        'The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.',
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
      contestType: 'Tough'
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
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Tail Slap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cute'
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
      contestType: 'Tough'
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
      desc:
        'All active Pokemon consume their held Berries. This effect is not prevented by substitutes, the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if no active Pokemon is holding a Berry.',
      shortDesc: 'All active Pokemon consume held Berries.',
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
      isNonstandard: 'Past',
      target: 'Normal',
      type: 'Normal',
      contestType: 'Cool'
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
      shortDesc: 'Confuses adjacent Pokemon.',
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
      desc:
        'If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.',
      shortDesc: 'User switches out.',
      name: 'Teleport',
      pp: 20,
      priority: -6,
      target: 'Self',
      type: 'Psychic',
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'thousandwaves',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Physical',
      shortDesc: 'Hits adjacent foes. Prevents them from switching.',
      name: 'Thousand Waves',
      pp: 10,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Ground',
      contestType: 'Tough'
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
      contestType: 'Tough'
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
      contestType: 'Clever'
    }
  ],
  [
    'thunder',
    {
      accuracy: 70,
      basePower: '110',
      category: 'Special',
      desc:
        "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
      shortDesc: "30% chance to paralyze target. Can't miss in rain.",
      name: 'Thunder',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
    }
  ],
  [
    'thunderfang',
    {
      accuracy: 95,
      basePower: '65',
      category: 'Physical',
      shortDesc: '10% chance to paralyze. 10% chance to flinch.',
      name: 'Thunder Fang',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      desc:
        "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
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
      contestType: 'Cool'
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
      contestType: 'Cute'
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
      shortDesc: '20% chance to flinch the foe(s).',
      name: 'Twister',
      pp: 20,
      priority: 0,
      target: 'Adjacent Foes',
      type: 'Dragon',
      contestType: 'Cool'
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
      contestType: 'Cute'
    }
  ],
  [
    'uproar',
    {
      accuracy: 100,
      basePower: '90',
      category: 'Special',
      shortDesc: 'Lasts 3 turns. Active Pokemon cannot fall asleep.',
      name: 'Uproar',
      pp: 10,
      priority: 0,
      target: 'Random',
      type: 'Normal',
      contestType: 'Cute'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Beautiful'
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
      contestType: 'Cool'
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
      contestType: 'Tough'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cool'
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
      contestType: 'Cute'
    }
  ],
  [
    'waterpledge',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Special',
      shortDesc: 'Use with Grass or Fire Pledge for added effect.',
      name: 'Water Pledge',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'watershuriken',
    {
      accuracy: 100,
      basePower: '15',
      category: 'Special',
      shortDesc: 'Hits 2-5 times in one turn.',
      name: 'Water Shuriken',
      pp: 20,
      priority: 1,
      target: 'Normal',
      type: 'Water',
      contestType: 'Cool'
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
      contestType: 'Beautiful'
    }
  ],
  [
    'waterfall',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 20% chance to flinch the target.',
      shortDesc: '20% chance to flinch the target.',
      name: 'Waterfall',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Tough'
    }
  ],
  [
    'weatherball',
    {
      accuracy: 100,
      basePower: '50',
      category: 'Special',
      desc:
        "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, the move is still Normal-type and does not have a base power boost.",
      shortDesc: 'Power doubles and type varies in each weather.',
      name: 'Weather Ball',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Beautiful'
    }
  ],
  [
    'whirlpool',
    {
      accuracy: 85,
      basePower: '35',
      category: 'Special',
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Whirlpool',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Water',
      contestType: 'Beautiful'
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
    'wideguard',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
      desc:
        "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target Adjacent Foes or All Adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
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
      contestType: 'Tough'
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
      contestType: 'Cool'
    }
  ],
  [
    'wish',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      contestType: 'Tough'
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
      desc:
        "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
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
      shortDesc: 'Traps and damages the target for 4-5 turns.',
      name: 'Wrap',
      pp: 20,
      priority: 0,
      target: 'Normal',
      type: 'Normal',
      contestType: 'Tough'
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
      contestType: 'Cool'
    }
  ],
  [
    'yawn',
    {
      accuracy: 100,
      basePower: '0',
      category: 'Status',
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
      contestType: 'Cool'
    }
  ],
  [
    'zenheadbutt',
    {
      accuracy: 90,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 20% chance to flinch the target.',
      shortDesc: '20% chance to flinch the target.',
      name: 'Zen Headbutt',
      pp: 15,
      priority: 0,
      target: 'Normal',
      type: 'Psychic',
      contestType: 'Clever'
    }
  ],
  [
    'zingzap',
    {
      accuracy: 100,
      basePower: '80',
      category: 'Physical',
      desc: 'Has a 30% chance to flinch the target.',
      shortDesc: '30% chance to flinch the target.',
      name: 'Zing Zap',
      pp: 10,
      priority: 0,
      target: 'Normal',
      type: 'Electric',
      contestType: 'Cool'
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
