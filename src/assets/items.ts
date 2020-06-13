import GraphQLCollection from '../utils/GraphQLCollection';
import type { Pokemon } from '../utils/pokemon';

/** The item in Pokémon */
export default new GraphQLCollection<string, Pokemon.Item>([
  [
    'abomasite',
    {
      name: 'Abomasite',
      gen: 6,
      desc: 'If held by an Abomasnow, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'absolite',
    {
      name: 'Absolite',
      gen: 6,
      desc: 'If held by an Absol, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'absorbbulb',
    {
      name: 'Absorb Bulb',
      gen: 5,
      desc: "Raises holder's Sp. Atk by 1 stage if hit by a Water-type attack. Single use."
    }
  ],
  [
    'adamantorb',
    {
      name: 'Adamant Orb',
      gen: 4,
      desc: 'If held by a Dialga, its Steel- and Dragon-type attacks have 1.2x power.',
      isNonstandard: 'Past'
    }
  ],
  [
    'adrenalineorb',
    {
      name: 'Adrenaline Orb',
      gen: 7,
      desc: "Raises holder's Speed by 1 stage if it gets affected by Intimidate. Single use."
    }
  ],
  [
    'aerodactylite',
    {
      name: 'Aerodactylite',
      gen: 6,
      desc: 'If held by an Aerodactyl, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'aggronite',
    {
      name: 'Aggronite',
      gen: 6,
      desc: 'If held by an Aggron, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'aguavberry',
    {
      name: 'Aguav Berry',
      gen: 3,
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.'
    }
  ],
  [
    'airballoon',
    {
      name: 'Air Balloon',
      gen: 5,
      desc: 'Holder is immune to Ground-type attacks. Pops when holder is hit.'
    }
  ],
  [
    'alakazite',
    {
      name: 'Alakazite',
      gen: 6,
      desc: 'If held by an Alakazam, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'aloraichiumz',
    {
      name: 'Aloraichium Z',
      gen: 7,
      desc: 'If held by an Alolan Raichu with Thunderbolt, it can use Stoked Sparksurfer.',
      isNonstandard: 'Past'
    }
  ],
  [
    'altarianite',
    {
      name: 'Altarianite',
      gen: 6,
      desc: 'If held by an Altaria, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'ampharosite',
    {
      name: 'Ampharosite',
      gen: 6,
      desc: 'If held by an Ampharos, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'apicotberry',
    {
      name: 'Apicot Berry',
      gen: 3,
      desc: "Raises holder's Sp. Def by 1 stage when at 1/4 max HP or less. Single use."
    }
  ],
  [
    'armorfossil',
    {
      name: 'Armor Fossil',
      gen: 4,
      isNonstandard: 'Past',
      desc: 'Can be revived into Shieldon.'
    }
  ],
  [
    'aspearberry',
    {
      name: 'Aspear Berry',
      gen: 3,
      desc: 'Holder is cured if it is frozen. Single use.'
    }
  ],
  [
    'assaultvest',
    {
      name: 'Assault Vest',
      gen: 6,
      desc: "Holder's Sp. Def is 1.5x, but it can only select damaging moves."
    }
  ],
  [
    'audinite',
    {
      name: 'Audinite',
      gen: 6,
      desc: 'If held by an Audino, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'babiriberry',
    {
      name: 'Babiri Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Steel-type attack. Single use.'
    }
  ],
  [
    'banettite',
    {
      name: 'Banettite',
      gen: 6,
      desc: 'If held by a Banette, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'beastball',
    {
      name: 'Beast Ball',
      gen: 7,
      desc: 'A special Poke Ball designed to catch Ultra Beasts.'
    }
  ],
  [
    'beedrillite',
    {
      name: 'Beedrillite',
      gen: 6,
      desc: 'If held by a Beedrill, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'belueberry',
    {
      name: 'Belue Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'berry',
    {
      name: 'Berry',
      gen: 2,
      desc: '(Gen 2) Restores 10 HP when at 1/2 max HP or less. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'berryjuice',
    {
      name: 'Berry Juice',
      gen: 2,
      desc: 'Restores 20 HP when at 1/2 max HP or less. Single use.'
    }
  ],
  [
    'berrysweet',
    {
      name: 'Berry Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'berserkgene',
    {
      name: 'Berserk Gene',
      gen: 2,
      desc: "(Gen 2) On switch-in, raises holder's Attack by 2 and confuses it. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'bigroot',
    {
      name: 'Big Root',
      gen: 4,
      desc: 'Holder gains 1.3x HP from draining/Aqua Ring/Ingrain/Leech Seed/Strength Sap.'
    }
  ],
  [
    'bindingband',
    {
      name: 'Binding Band',
      gen: 5,
      desc: "Holder's partial-trapping moves deal 1/6 max HP per turn instead of 1/8."
    }
  ],
  [
    'bitterberry',
    {
      name: 'Bitter Berry',
      gen: 2,
      desc: '(Gen 2) Holder is cured if it is confused. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'blackbelt',
    {
      name: 'Black Belt',
      gen: 2,
      desc: "Holder's Fighting-type attacks have 1.2x power."
    }
  ],
  [
    'blackglasses',
    {
      name: 'Black Glasses',
      gen: 2,
      desc: "Holder's Dark-type attacks have 1.2x power."
    }
  ],
  [
    'blacksludge',
    {
      name: 'Black Sludge',
      gen: 4,
      desc: 'Each turn, if holder is a Poison type, restores 1/16 max HP; loses 1/8 if not.'
    }
  ],
  [
    'blastoisinite',
    {
      name: 'Blastoisinite',
      gen: 6,
      desc: 'If held by a Blastoise, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'blazikenite',
    {
      name: 'Blazikenite',
      gen: 6,
      desc: 'If held by a Blaziken, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'blueorb',
    {
      name: 'Blue Orb',
      gen: 6,
      desc: 'If held by a Kyogre, this item triggers its Primal Reversion in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'blukberry',
    {
      name: 'Bluk Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'blunderpolicy',
    {
      name: 'Blunder Policy',
      gen: 8,
      desc: 'If the holder misses due to accuracy, its Speed is raised by 2 stages. Single use.'
    }
  ],
  [
    'bottlecap',
    {
      name: 'Bottle Cap',
      gen: 7,
      desc: "Used for Hyper Training. One of a Pokemon's stats is calculated with an IV of 31."
    }
  ],
  [
    'brightpowder',
    {
      name: 'BrightPowder',
      gen: 2,
      desc: 'The accuracy of attacks against the holder is 0.9x.'
    }
  ],
  [
    'buggem',
    {
      name: 'Bug Gem',
      gen: 5,
      desc: "Holder's first successful Bug-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'bugmemory',
    {
      name: 'Bug Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Bug type."
    }
  ],
  [
    'buginiumz',
    {
      name: 'Buginium Z',
      gen: 7,
      desc: 'If holder has a Bug move, this item allows it to use a Bug Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'burndrive',
    {
      name: 'Burn Drive',
      gen: 5,
      isNonstandard: 'Past',
      desc: "Holder's Techno Blast is Fire type."
    }
  ],
  [
    'burntberry',
    {
      name: 'Burnt Berry',
      gen: 2,
      desc: '(Gen 2) Holder is cured if it is frozen. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'cameruptite',
    {
      name: 'Cameruptite',
      gen: 6,
      desc: 'If held by a Camerupt, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'cellbattery',
    {
      name: 'Cell Battery',
      gen: 5,
      desc: "Raises holder's Attack by 1 if hit by an Electric-type attack. Single use."
    }
  ],
  [
    'charcoal',
    {
      name: 'Charcoal',
      gen: 2,
      desc: "Holder's Fire-type attacks have 1.2x power."
    }
  ],
  [
    'charizarditex',
    {
      name: 'Charizardite X',
      gen: 6,
      desc: 'If held by a Charizard, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'charizarditey',
    {
      name: 'Charizardite Y',
      gen: 6,
      desc: 'If held by a Charizard, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'chartiberry',
    {
      name: 'Charti Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Rock-type attack. Single use.'
    }
  ],
  [
    'cheriberry',
    {
      name: 'Cheri Berry',
      gen: 3,
      desc: 'Holder cures itself if it is paralyzed. Single use.'
    }
  ],
  [
    'cherishball',
    {
      name: 'Cherish Ball',
      gen: 4,
      desc: 'A rare Poke Ball that has been crafted to commemorate an occasion.'
    }
  ],
  [
    'chestoberry',
    {
      name: 'Chesto Berry',
      gen: 3,
      desc: 'Holder wakes up if it is asleep. Single use.'
    }
  ],
  [
    'chilanberry',
    {
      name: 'Chilan Berry',
      gen: 4,
      desc: 'Halves damage taken from a Normal-type attack. Single use.'
    }
  ],
  [
    'chilldrive',
    {
      name: 'Chill Drive',
      gen: 5,
      isNonstandard: 'Past',
      desc: "Holder's Techno Blast is Ice type."
    }
  ],
  [
    'chippedpot',
    {
      name: 'Chipped Pot',
      gen: 8,
      desc: 'Evolves Sinistea-Antique into Polteageist-Antique when used.'
    }
  ],
  [
    'choiceband',
    {
      name: 'Choice Band',
      gen: 3,
      desc: "Holder's Attack is 1.5x, but it can only select the first move it executes."
    }
  ],
  [
    'choicescarf',
    {
      name: 'Choice Scarf',
      gen: 4,
      desc: "Holder's Speed is 1.5x, but it can only select the first move it executes."
    }
  ],
  [
    'choicespecs',
    {
      name: 'Choice Specs',
      gen: 4,
      desc: "Holder's Sp. Atk is 1.5x, but it can only select the first move it executes."
    }
  ],
  [
    'chopleberry',
    {
      name: 'Chople Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Fighting-type attack. Single use.'
    }
  ],
  [
    'clawfossil',
    {
      name: 'Claw Fossil',
      gen: 3,
      isNonstandard: 'Past',
      desc: 'Can be revived into Anorith.'
    }
  ],
  [
    'cloversweet',
    {
      name: 'Clover Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'cobaberry',
    {
      name: 'Coba Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Flying-type attack. Single use.'
    }
  ],
  [
    'colburberry',
    {
      name: 'Colbur Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Dark-type attack. Single use.'
    }
  ],
  [
    'cornnberry',
    {
      name: 'Cornn Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'coverfossil',
    {
      name: 'Cover Fossil',
      gen: 5,
      isNonstandard: 'Past',
      desc: 'Can be revived into Tirtouga.'
    }
  ],
  [
    'crucibellite',
    {
      name: 'Crucibellite',
      gen: 6,
      desc: 'If held by a Crucibelle, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'crackedpot',
    {
      name: 'Cracked Pot',
      gen: 8,
      desc: 'Evolves Sinistea-Chipped into Polteageist-Chipped when used.'
    }
  ],
  [
    'custapberry',
    {
      name: 'Custap Berry',
      gen: 4,
      desc: 'Holder moves first in its priority bracket when at 1/4 max HP or less. Single use.',
      isNonstandard: 'Unobtainable'
    }
  ],
  [
    'damprock',
    {
      name: 'Damp Rock',
      gen: 4,
      desc: "Holder's use of Rain Dance lasts 8 turns instead of 5."
    }
  ],
  [
    'darkgem',
    {
      name: 'Dark Gem',
      gen: 5,
      desc: "Holder's first successful Dark-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'darkmemory',
    {
      name: 'Dark Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Dark type."
    }
  ],
  [
    'darkiniumz',
    {
      name: 'Darkinium Z',
      gen: 7,
      desc: 'If holder has a Dark move, this item allows it to use a Dark Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'dawnstone',
    {
      name: 'Dawn Stone',
      gen: 4,
      desc: 'Evolves male Kirlia into Gallade and female Snorunt into Froslass when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'decidiumz',
    {
      name: 'Decidium Z',
      gen: 7,
      desc: 'If held by a Decidueye with Spirit Shackle, it can use Sinister Arrow Raid.',
      isNonstandard: 'Past'
    }
  ],
  [
    'deepseascale',
    {
      name: 'Deep Sea Scale',
      gen: 3,
      desc: 'If held by a Clamperl, its Sp. Def is doubled. Evolves Clamperl into Gorebyss when traded.',
      shortDesc: 'If held by a Clamperl, its Sp. Def is doubled.'
    }
  ],
  [
    'deepseatooth',
    {
      name: 'Deep Sea Tooth',
      gen: 3,
      desc: 'If held by a Clamperl, its Sp. Atk is doubled. Evolves Clamperl into Huntail when traded.',
      shortDesc: 'If held by a Clamperl, its Sp. Atk is doubled.'
    }
  ],
  [
    'destinyknot',
    {
      name: 'Destiny Knot',
      gen: 4,
      desc: 'If holder becomes infatuated, the other Pokemon also becomes infatuated.'
    }
  ],
  [
    'diancite',
    {
      name: 'Diancite',
      gen: 6,
      desc: 'If held by a Diancie, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'diveball',
    {
      name: 'Dive Ball',
      gen: 3,
      desc: 'A Poke Ball that works especially well on Pokemon that live underwater.'
    }
  ],
  [
    'domefossil',
    {
      name: 'Dome Fossil',
      gen: 3,
      isNonstandard: 'Past',
      desc: 'Can be revived into Kabuto.'
    }
  ],
  [
    'dousedrive',
    {
      name: 'Douse Drive',
      gen: 5,
      isNonstandard: 'Past',
      desc: "Holder's Techno Blast is Water type."
    }
  ],
  [
    'dracoplate',
    {
      name: 'Draco Plate',
      gen: 4,
      desc: "Holder's Dragon-type attacks have 1.2x power. Judgment is Dragon type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'dragonfang',
    {
      name: 'Dragon Fang',
      gen: 2,
      desc: "Holder's Dragon-type attacks have 1.2x power."
    }
  ],
  [
    'dragongem',
    {
      name: 'Dragon Gem',
      gen: 5,
      desc: "Holder's first successful Dragon-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'dragonmemory',
    {
      name: 'Dragon Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Dragon type."
    }
  ],
  [
    'dragonscale',
    {
      name: 'Dragon Scale',
      gen: 2,
      desc: 'Evolves Seadra into Kingdra when traded.'
    }
  ],
  [
    'dragoniumz',
    {
      name: 'Dragonium Z',
      gen: 7,
      desc: 'If holder has a Dragon move, this item allows it to use a Dragon Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'dreadplate',
    {
      name: 'Dread Plate',
      gen: 4,
      desc: "Holder's Dark-type attacks have 1.2x power. Judgment is Dark type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'dreamball',
    {
      name: 'Dream Ball',
      gen: 5,
      desc: "A Poke Ball that makes it easier to catch wild Pokémon while they're asleep."
    }
  ],
  [
    'dubiousdisc',
    {
      name: 'Dubious Disc',
      gen: 4,
      desc: 'Evolves Porygon2 into Porygon-Z when traded.'
    }
  ],
  [
    'durinberry',
    {
      name: 'Durin Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'duskball',
    {
      name: 'Dusk Ball',
      gen: 4,
      desc: 'A Poke Ball that makes it easier to catch wild Pokemon at night or in caves.'
    }
  ],
  [
    'duskstone',
    {
      name: 'Dusk Stone',
      gen: 4,
      desc: 'Evolves Murkrow into Honchkrow, Misdreavus into Mismagius, Lampent into Chandelure, and Doublade into Aegislash when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'earthplate',
    {
      name: 'Earth Plate',
      gen: 4,
      desc: "Holder's Ground-type attacks have 1.2x power. Judgment is Ground type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'eeviumz',
    {
      name: 'Eevium Z',
      gen: 7,
      desc: 'If held by an Eevee with Last Resort, it can use Extreme Evoboost.',
      isNonstandard: 'Past'
    }
  ],
  [
    'ejectbutton',
    {
      name: 'Eject Button',
      gen: 5,
      desc: 'If holder survives a hit, it immediately switches out to a chosen ally. Single use.'
    }
  ],
  [
    'ejectpack',
    {
      name: 'Eject Pack',
      gen: 8,
      desc: "If the holder's stat stages are lowered, it switches to a chosen ally. Single use."
    }
  ],
  [
    'electirizer',
    {
      name: 'Electirizer',
      gen: 4,
      desc: 'Evolves Electabuzz into Electivire when traded.'
    }
  ],
  [
    'electricgem',
    {
      name: 'Electric Gem',
      gen: 5,
      desc: "Holder's first successful Electric-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'electricmemory',
    {
      name: 'Electric Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Electric type."
    }
  ],
  [
    'electricseed',
    {
      name: 'Electric Seed',
      gen: 7,
      desc: "If the terrain is Electric Terrain, raises holder's Defense by 1 stage. Single use."
    }
  ],
  [
    'electriumz',
    {
      name: 'Electrium Z',
      gen: 7,
      desc: 'If holder has an Electric move, this item allows it to use an Electric Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'energypowder',
    {
      name: 'Energy Powder',
      gen: 2,
      desc: 'Restores 60 HP to one Pokemon.'
    }
  ],
  [
    'enigmaberry',
    {
      name: 'Enigma Berry',
      gen: 3,
      desc: 'Restores 1/4 max HP after holder is hit by a supereffective move. Single use.',
      isNonstandard: 'Unobtainable'
    }
  ],
  [
    'eviolite',
    {
      name: 'Eviolite',
      gen: 5,
      desc: "If holder's species can evolve, its Defense and Sp. Def are 1.5x."
    }
  ],
  [
    'expertbelt',
    {
      name: 'Expert Belt',
      gen: 4,
      desc: "Holder's attacks that are super effective against the target do 1.2x damage."
    }
  ],
  [
    'fairiumz',
    {
      name: 'Fairium Z',
      gen: 7,
      desc: 'If holder has a Fairy move, this item allows it to use a Fairy Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'fairygem',
    {
      name: 'Fairy Gem',
      gen: 6,
      desc: "Holder's first successful Fairy-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'fairymemory',
    {
      name: 'Fairy Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Fairy type."
    }
  ],
  [
    'fastball',
    {
      name: 'Fast Ball',
      gen: 2,
      desc: 'A Poke Ball that makes it easier to catch Pokemon which are quick to run away.'
    }
  ],
  [
    'fightinggem',
    {
      name: 'Fighting Gem',
      gen: 5,
      desc: "Holder's first successful Fighting-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'fightingmemory',
    {
      name: 'Fighting Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Fighting type."
    }
  ],
  [
    'fightiniumz',
    {
      name: 'Fightinium Z',
      gen: 7,
      desc: 'If holder has a Fighting move, this item allows it to use a Fighting Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'figyberry',
    {
      name: 'Figy Berry',
      gen: 3,
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use.'
    }
  ],
  [
    'firegem',
    {
      name: 'Fire Gem',
      gen: 5,
      desc: "Holder's first successful Fire-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'firememory',
    {
      name: 'Fire Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Fire type."
    }
  ],
  [
    'firestone',
    {
      name: 'Fire Stone',
      gen: 1,
      desc: 'Evolves Vulpix into Ninetales, Growlithe into Arcanine, Eevee into Flareon, and Pansear into Simisear when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'firiumz',
    {
      name: 'Firium Z',
      gen: 7,
      desc: 'If holder has a Fire move, this item allows it to use a Fire Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'fistplate',
    {
      name: 'Fist Plate',
      gen: 4,
      desc: "Holder's Fighting-type attacks have 1.2x power. Judgment is Fighting type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'flameorb',
    {
      name: 'Flame Orb',
      gen: 4,
      desc: 'At the end of every turn, this item attempts to burn the holder.'
    }
  ],
  [
    'flameplate',
    {
      name: 'Flame Plate',
      gen: 4,
      desc: "Holder's Fire-type attacks have 1.2x power. Judgment is Fire type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'floatstone',
    {
      name: 'Float Stone',
      gen: 5,
      desc: "Holder's weight is halved."
    }
  ],
  [
    'flowersweet',
    {
      name: 'Flower Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'flyinggem',
    {
      name: 'Flying Gem',
      gen: 5,
      desc: "Holder's first successful Flying-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'flyingmemory',
    {
      name: 'Flying Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Flying type."
    }
  ],
  [
    'flyiniumz',
    {
      name: 'Flyinium Z',
      gen: 7,
      desc: 'If holder has a Flying move, this item allows it to use a Flying Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'focusband',
    {
      name: 'Focus Band',
      gen: 2,
      desc: 'Holder has a 10% chance to survive an attack that would KO it with 1 HP.'
    }
  ],
  [
    'focussash',
    {
      name: 'Focus Sash',
      gen: 4,
      desc: "If holder's HP is full, will survive an attack that would KO it with 1 HP. Single use."
    }
  ],
  [
    'fossilizedbird',
    {
      name: 'Fossilized Bird',
      gen: 8,
      desc: 'Can revive into Arctovish with Fossilized Fish or Arctozolt with Fossilized Dino.'
    }
  ],
  [
    'fossilizeddino',
    {
      name: 'Fossilized Dino',
      gen: 8,
      desc: 'Can revive into Dracozolt with Fossilized Drake or Arctozolt with Fossilized Bird.'
    }
  ],
  [
    'fossilizeddrake',
    {
      name: 'Fossilized Drake',
      gen: 8,
      desc: 'Can revive into Dracozolt with Fossilized Dino or Dracovish with Fossilized Fish.'
    }
  ],
  [
    'fossilizedfish',
    {
      name: 'Fossilized Fish',
      gen: 8,
      desc: 'Can revive into Dracovish with Fossilized Drake or Arctovish with Fossilized Bird.'
    }
  ],
  [
    'friendball',
    {
      name: 'Friend Ball',
      gen: 2,
      desc: 'A Poke Ball that makes caught Pokemon more friendly.'
    }
  ],
  [
    'fullincense',
    {
      name: 'Full Incense',
      gen: 4,
      desc: 'Holder moves last in its priority bracket.'
    }
  ],
  [
    'galladite',
    {
      name: 'Galladite',
      gen: 6,
      desc: 'If held by a Gallade, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'ganlonberry',
    {
      name: 'Ganlon Berry',
      gen: 3,
      desc: "Raises holder's Defense by 1 stage when at 1/4 max HP or less. Single use."
    }
  ],
  [
    'garchompite',
    {
      name: 'Garchompite',
      gen: 6,
      desc: 'If held by a Garchomp, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'gardevoirite',
    {
      name: 'Gardevoirite',
      gen: 6,
      desc: 'If held by a Gardevoir, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'gengarite',
    {
      name: 'Gengarite',
      gen: 6,
      desc: 'If held by a Gengar, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'ghostgem',
    {
      name: 'Ghost Gem',
      gen: 5,
      desc: "Holder's first successful Ghost-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'ghostmemory',
    {
      name: 'Ghost Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Ghost type."
    }
  ],
  [
    'ghostiumz',
    {
      name: 'Ghostium Z',
      gen: 7,
      desc: 'If holder has a Ghost move, this item allows it to use a Ghost Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'glalitite',
    {
      name: 'Glalitite',
      gen: 6,
      desc: 'If held by a Glalie, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'goldberry',
    {
      name: 'Gold Berry',
      gen: 2,
      desc: '(Gen 2) Restores 30 HP when at 1/2 max HP or less. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'goldbottlecap',
    {
      name: 'Gold Bottle Cap',
      gen: 7,
      desc: "Used for Hyper Training. All of a Pokemon's stats are calculated with an IV of 31."
    }
  ],
  [
    'grassgem',
    {
      name: 'Grass Gem',
      gen: 5,
      desc: "Holder's first successful Grass-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'grassmemory',
    {
      name: 'Grass Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Grass type."
    }
  ],
  [
    'grassiumz',
    {
      name: 'Grassium Z',
      gen: 7,
      desc: 'If holder has a Grass move, this item allows it to use a Grass Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'grassyseed',
    {
      name: 'Grassy Seed',
      gen: 7,
      desc: "If the terrain is Grassy Terrain, raises holder's Defense by 1 stage. Single use."
    }
  ],
  [
    'greatball',
    {
      name: 'Great Ball',
      gen: 1,
      desc: 'A high-performance Ball that provides a higher catch rate than a Poke Ball.'
    }
  ],
  [
    'grepaberry',
    {
      name: 'Grepa Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'gripclaw',
    {
      name: 'Grip Claw',
      gen: 4,
      desc: "Holder's partial-trapping moves always last 7 turns."
    }
  ],
  [
    'griseousorb',
    {
      name: 'Griseous Orb',
      gen: 4,
      desc: 'If held by a Giratina, its Ghost- and Dragon-type attacks have 1.2x power.',
      isNonstandard: 'Past'
    }
  ],
  [
    'groundgem',
    {
      name: 'Ground Gem',
      gen: 5,
      desc: "Holder's first successful Ground-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'groundmemory',
    {
      name: 'Ground Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Ground type."
    }
  ],
  [
    'groundiumz',
    {
      name: 'Groundium Z',
      gen: 7,
      desc: 'If holder has a Ground move, this item allows it to use a Ground Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'gyaradosite',
    {
      name: 'Gyaradosite',
      gen: 6,
      desc: 'If held by a Gyarados, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'habanberry',
    {
      name: 'Haban Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Dragon-type attack. Single use.'
    }
  ],
  [
    'hardstone',
    {
      name: 'Hard Stone',
      gen: 2,
      desc: "Holder's Rock-type attacks have 1.2x power."
    }
  ],
  [
    'healball',
    {
      name: 'Heal Ball',
      gen: 4,
      desc: "A remedial Poke Ball that restores the caught Pokemon's HP and status problem."
    }
  ],
  [
    'heatrock',
    {
      name: 'Heat Rock',
      gen: 4,
      desc: "Holder's use of Sunny Day lasts 8 turns instead of 5."
    }
  ],
  [
    'heavyball',
    {
      name: 'Heavy Ball',
      gen: 2,
      desc: 'A Poke Ball for catching very heavy Pokemon.'
    }
  ],
  [
    'heavydutyboots',
    {
      name: 'Heavy-Duty Boots',
      gen: 8,
      desc: 'When switching in, the holder is unaffected by hazards on its side of the field.'
    }
  ],
  [
    'helixfossil',
    {
      name: 'Helix Fossil',
      gen: 3,
      isNonstandard: 'Past',
      desc: 'Can be revived into Omanyte.'
    }
  ],
  [
    'heracronite',
    {
      name: 'Heracronite',
      gen: 6,
      desc: 'If held by a Heracross, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'hondewberry',
    {
      name: 'Hondew Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'houndoominite',
    {
      name: 'Houndoominite',
      gen: 6,
      desc: 'If held by a Houndoom, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'iapapaberry',
    {
      name: 'Iapapa Berry',
      gen: 3,
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -Def Nature. Single use.'
    }
  ],
  [
    'iceberry',
    {
      name: 'Ice Berry',
      gen: 2,
      desc: '(Gen 2) Holder is cured if it is burned. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'icegem',
    {
      name: 'Ice Gem',
      gen: 5,
      desc: "Holder's first successful Ice-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'icememory',
    {
      name: 'Ice Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Ice type."
    }
  ],
  [
    'icestone',
    {
      name: 'Ice Stone',
      gen: 7,
      desc: 'Evolves Alolan Sandshrew into Alolan Sandslash, Alolan Vulpix into Alolan Ninetales, and Eevee into Glaceon when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'icicleplate',
    {
      name: 'Icicle Plate',
      gen: 4,
      desc: "Holder's Ice-type attacks have 1.2x power. Judgment is Ice type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'iciumz',
    {
      name: 'Icium Z',
      gen: 7,
      desc: 'If holder has an Ice move, this item allows it to use an Ice Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'icyrock',
    {
      name: 'Icy Rock',
      gen: 4,
      desc: "Holder's use of Hail lasts 8 turns instead of 5."
    }
  ],
  [
    'inciniumz',
    {
      name: 'Incinium Z',
      gen: 7,
      desc: 'If held by an Incineroar with Darkest Lariat, it can use Malicious Moonsault.',
      isNonstandard: 'Past'
    }
  ],
  [
    'insectplate',
    {
      name: 'Insect Plate',
      gen: 4,
      desc: "Holder's Bug-type attacks have 1.2x power. Judgment is Bug type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'ironball',
    {
      name: 'Iron Ball',
      gen: 4,
      desc: 'Holder is grounded, Speed halved. If Flying type, takes neutral Ground damage.'
    }
  ],
  [
    'ironplate',
    {
      name: 'Iron Plate',
      gen: 4,
      desc: "Holder's Steel-type attacks have 1.2x power. Judgment is Steel type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'jabocaberry',
    {
      name: 'Jaboca Berry',
      gen: 4,
      desc: 'If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use.',
      isNonstandard: 'Unobtainable'
    }
  ],
  [
    'jawfossil',
    {
      name: 'Jaw Fossil',
      gen: 6,
      isNonstandard: 'Past',
      desc: 'Can be revived into Tyrunt.'
    }
  ],
  [
    'kangaskhanite',
    {
      name: 'Kangaskhanite',
      gen: 6,
      desc: 'If held by a Kangaskhan, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'kasibberry',
    {
      name: 'Kasib Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Ghost-type attack. Single use.'
    }
  ],
  [
    'kebiaberry',
    {
      name: 'Kebia Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Poison-type attack. Single use.'
    }
  ],
  [
    'keeberry',
    {
      name: 'Kee Berry',
      gen: 6,
      desc: "Raises holder's Defense by 1 stage after it is hit by a physical attack. Single use."
    }
  ],
  [
    'kelpsyberry',
    {
      name: 'Kelpsy Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'kingsrock',
    {
      name: "King's Rock",
      gen: 2,
      desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch. Evolves Poliwhirl into Politoed and Slowpoke into Slowking when traded.",
      shortDesc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
    }
  ],
  [
    'kommoniumz',
    {
      name: 'Kommonium Z',
      gen: 7,
      desc: 'If held by a Kommo-o with Clanging Scales, it can use Clangorous Soulblaze.',
      isNonstandard: 'Past'
    }
  ],
  [
    'laggingtail',
    {
      name: 'Lagging Tail',
      gen: 4,
      desc: 'Holder moves last in its priority bracket.'
    }
  ],
  [
    'lansatberry',
    {
      name: 'Lansat Berry',
      gen: 3,
      desc: 'Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use.'
    }
  ],
  [
    'latiasite',
    {
      name: 'Latiasite',
      gen: 6,
      desc: 'If held by a Latias, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'latiosite',
    {
      name: 'Latiosite',
      gen: 6,
      desc: 'If held by a Latios, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'laxincense',
    {
      name: 'Lax Incense',
      gen: 3,
      desc: 'The accuracy of attacks against the holder is 0.9x.'
    }
  ],
  [
    'leafstone',
    {
      name: 'Leaf Stone',
      gen: 1,
      desc: 'Evolves Gloom into Vileplume, Weepinbell into Victreebel, Exeggcute into Exeggutor or Alolan Exeggutor, Eevee into Leafeon, Nuzleaf into Shiftry, and Pansage into Simisage when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'leek',
    {
      name: 'Leek',
      gen: 8,
      desc: 'If held by a Farfetch\u2019d or Sirfetch\u2019d, its critical hit ratio is raised by 2 stages.'
    }
  ],
  [
    'leftovers',
    {
      name: 'Leftovers',
      gen: 2,
      desc: 'At the end of every turn, holder restores 1/16 of its max HP.'
    }
  ],
  [
    'leppaberry',
    {
      name: 'Leppa Berry',
      gen: 3,
      desc: "Restores 10 PP to the first of the holder's moves to reach 0 PP. Single use."
    }
  ],
  [
    'levelball',
    {
      name: 'Level Ball',
      gen: 2,
      desc: 'A Poke Ball for catching Pokemon that are a lower level than your own.'
    }
  ],
  [
    'liechiberry',
    {
      name: 'Liechi Berry',
      gen: 3,
      desc: "Raises holder's Attack by 1 stage when at 1/4 max HP or less. Single use."
    }
  ],
  [
    'lifeorb',
    {
      name: 'Life Orb',
      gen: 4,
      desc: "Holder's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack."
    }
  ],
  [
    'lightball',
    {
      name: 'Light Ball',
      gen: 2,
      desc: 'If held by a Pikachu, its Attack and Sp. Atk are doubled.'
    }
  ],
  [
    'lightclay',
    {
      name: 'Light Clay',
      gen: 4,
      desc: "Holder's use of Aurora Veil, Light Screen, or Reflect lasts 8 turns instead of 5."
    }
  ],
  [
    'lopunnite',
    {
      name: 'Lopunnite',
      gen: 6,
      desc: 'If held by a Lopunny, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'loveball',
    {
      name: 'Love Ball',
      gen: 2,
      desc: 'Poke Ball for catching Pokemon that are the opposite gender of your Pokemon.'
    }
  ],
  [
    'lovesweet',
    {
      name: 'Love Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'lucarionite',
    {
      name: 'Lucarionite',
      gen: 6,
      desc: 'If held by a Lucario, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'luckypunch',
    {
      name: 'Lucky Punch',
      gen: 2,
      desc: 'If held by a Chansey, its critical hit ratio is raised by 2 stages.',
      isNonstandard: 'Past'
    }
  ],
  [
    'lumberry',
    {
      name: 'Lum Berry',
      gen: 3,
      desc: 'Holder cures itself if it is confused or has a major status condition. Single use.'
    }
  ],
  [
    'luminousmoss',
    {
      name: 'Luminous Moss',
      gen: 6,
      desc: "Raises holder's Sp. Def by 1 stage if hit by a Water-type attack. Single use."
    }
  ],
  [
    'lunaliumz',
    {
      name: 'Lunalium Z',
      gen: 7,
      desc: 'Lunala or Dawn Wings Necrozma with Moongeist Beam can use a special Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'lureball',
    {
      name: 'Lure Ball',
      gen: 2,
      desc: 'A Poke Ball for catching Pokemon hooked by a Rod when fishing.'
    }
  ],
  [
    'lustrousorb',
    {
      name: 'Lustrous Orb',
      gen: 4,
      desc: 'If held by a Palkia, its Water- and Dragon-type attacks have 1.2x power.',
      isNonstandard: 'Past'
    }
  ],
  [
    'luxuryball',
    {
      name: 'Luxury Ball',
      gen: 3,
      desc: 'A comfortable Poke Ball that makes a caught wild Pokemon quickly grow friendly.'
    }
  ],
  [
    'lycaniumz',
    {
      name: 'Lycanium Z',
      gen: 7,
      desc: 'If held by a Lycanroc forme with Stone Edge, it can use Splintered Stormshards.',
      isNonstandard: 'Past'
    }
  ],
  [
    'machobrace',
    {
      name: 'Macho Brace',
      gen: 3,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'magmarizer',
    {
      name: 'Magmarizer',
      gen: 4,
      desc: 'Evolves Magmar into Magmortar when traded.'
    }
  ],
  [
    'magnet',
    {
      name: 'Magnet',
      gen: 2,
      desc: "Holder's Electric-type attacks have 1.2x power."
    }
  ],
  [
    'magoberry',
    {
      name: 'Mago Berry',
      gen: 3,
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -Spe Nature. Single use.'
    }
  ],
  [
    'magostberry',
    {
      name: 'Magost Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'mail',
    {
      name: 'Mail',
      gen: 2,
      desc: 'Cannot be given to or taken from a Pokemon, except by Covet/Knock Off/Thief.'
    }
  ],
  [
    'manectite',
    {
      name: 'Manectite',
      gen: 6,
      desc: 'If held by a Manectric, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'marangaberry',
    {
      name: 'Maranga Berry',
      gen: 6,
      desc: "Raises holder's Sp. Def by 1 stage after it is hit by a special attack. Single use."
    }
  ],
  [
    'marshadiumz',
    {
      name: 'Marshadium Z',
      gen: 7,
      desc: 'If held by Marshadow with Spectral Thief, it can use Soul-Stealing 7-Star Strike.',
      isNonstandard: 'Past'
    }
  ],
  [
    'masterball',
    {
      name: 'Master Ball',
      gen: 1,
      desc: 'The best Ball with the ultimate performance. It will catch any wild Pokemon.'
    }
  ],
  [
    'mawilite',
    {
      name: 'Mawilite',
      gen: 6,
      desc: 'If held by a Mawile, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'meadowplate',
    {
      name: 'Meadow Plate',
      gen: 4,
      desc: "Holder's Grass-type attacks have 1.2x power. Judgment is Grass type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'medichamite',
    {
      name: 'Medichamite',
      gen: 6,
      desc: 'If held by a Medicham, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'mentalherb',
    {
      name: 'Mental Herb',
      gen: 3,
      desc: 'Cures holder of Attract, Disable, Encore, Heal Block, Taunt, Torment. Single use.'
    }
  ],
  [
    'metagrossite',
    {
      name: 'Metagrossite',
      gen: 6,
      desc: 'If held by a Metagross, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'metalcoat',
    {
      name: 'Metal Coat',
      gen: 2,
      desc: "Holder's Steel-type attacks have 1.2x power. Evolves Onix into Steelix and Scyther into Scizor when traded.",
      shortDesc: "Holder's Steel-type attacks have 1.2x power."
    }
  ],
  [
    'metalpowder',
    {
      name: 'Metal Powder',
      gen: 2,
      desc: "If held by a Ditto that hasn't Transformed, its Defense is doubled."
    }
  ],
  [
    'metronome',
    {
      name: 'Metronome',
      gen: 4,
      desc: 'Damage of moves used on consecutive turns is increased. Max 2x after 5 turns.'
    }
  ],
  [
    'mewniumz',
    {
      name: 'Mewnium Z',
      gen: 7,
      desc: 'If held by a Mew with Psychic, it can use Genesis Supernova.',
      isNonstandard: 'Past'
    }
  ],
  [
    'mewtwonitex',
    {
      name: 'Mewtwonite X',
      gen: 6,
      desc: 'If held by a Mewtwo, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'mewtwonitey',
    {
      name: 'Mewtwonite Y',
      gen: 6,
      desc: 'If held by a Mewtwo, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'micleberry',
    {
      name: 'Micle Berry',
      gen: 4,
      desc: "Holder's next move has 1.2x accuracy when at 1/4 max HP or less. Single use.",
      isNonstandard: 'Unobtainable'
    }
  ],
  [
    'mimikiumz',
    {
      name: 'Mimikium Z',
      gen: 7,
      desc: "If held by a Mimikyu with Play Rough, it can use Let's Snuggle Forever.",
      isNonstandard: 'Past'
    }
  ],
  [
    'mindplate',
    {
      name: 'Mind Plate',
      gen: 4,
      desc: "Holder's Psychic-type attacks have 1.2x power. Judgment is Psychic type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'mintberry',
    {
      name: 'Mint Berry',
      gen: 2,
      desc: '(Gen 2) Holder wakes up if it is asleep. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'miracleberry',
    {
      name: 'Miracle Berry',
      gen: 2,
      desc: '(Gen 2) Holder cures itself if it is confused or has a status condition. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'miracleseed',
    {
      name: 'Miracle Seed',
      gen: 2,
      desc: "Holder's Grass-type attacks have 1.2x power."
    }
  ],
  [
    'mistyseed',
    {
      name: 'Misty Seed',
      gen: 7,
      desc: "If the terrain is Misty Terrain, raises holder's Sp. Def by 1 stage. Single use."
    }
  ],
  [
    'moonball',
    {
      name: 'Moon Ball',
      gen: 2,
      desc: 'A Poke Ball for catching Pokemon that evolve using the Moon Stone.'
    }
  ],
  [
    'moonstone',
    {
      name: 'Moon Stone',
      gen: 1,
      desc: 'Evolves Nidorina into Nidoqueen, Nidorino into Nidoking, Clefairy into Clefable, Jigglypuff into Wigglytuff, Skitty into Delcatty, and Munna into Musharna when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'muscleband',
    {
      name: 'Muscle Band',
      gen: 4,
      desc: "Holder's physical attacks have 1.1x power."
    }
  ],
  [
    'mysteryberry',
    {
      name: 'Mystery Berry',
      gen: 2,
      desc: "(Gen 2) Restores 5 PP to the first of the holder's moves to reach 0 PP. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'mysticwater',
    {
      name: 'Mystic Water',
      gen: 2,
      desc: "Holder's Water-type attacks have 1.2x power."
    }
  ],
  [
    'nanabberry',
    {
      name: 'Nanab Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'nestball',
    {
      name: 'Nest Ball',
      gen: 3,
      desc: 'A Poke Ball that works especially well on weaker Pokemon in the wild.'
    }
  ],
  [
    'netball',
    {
      name: 'Net Ball',
      gen: 3,
      desc: 'A Poke Ball that works especially well on Water- and Bug-type Pokemon.'
    }
  ],
  [
    'nevermeltice',
    {
      name: 'Never-Melt Ice',
      gen: 2,
      desc: "Holder's Ice-type attacks have 1.2x power."
    }
  ],
  [
    'nomelberry',
    {
      name: 'Nomel Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'normalgem',
    {
      name: 'Normal Gem',
      gen: 5,
      desc: "Holder's first successful Normal-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'normaliumz',
    {
      name: 'Normalium Z',
      gen: 7,
      desc: 'If holder has a Normal move, this item allows it to use a Normal Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'occaberry',
    {
      name: 'Occa Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Fire-type attack. Single use.'
    }
  ],
  [
    'oddincense',
    {
      name: 'Odd Incense',
      gen: 4,
      desc: "Holder's Psychic-type attacks have 1.2x power."
    }
  ],
  [
    'oldamber',
    {
      name: 'Old Amber',
      gen: 3,
      isNonstandard: 'Past',
      desc: 'Can be revived into Aerodactyl.'
    }
  ],
  [
    'oranberry',
    {
      name: 'Oran Berry',
      gen: 3,
      desc: 'Restores 10 HP when at 1/2 max HP or less. Single use.'
    }
  ],
  [
    'ovalstone',
    {
      name: 'Oval Stone',
      gen: 4,
      desc: 'Evolves Happiny into Chansey when held and leveled up during the day.'
    }
  ],
  [
    'przcureberry',
    {
      name: 'PRZ Cure Berry',
      gen: 2,
      desc: '(Gen 2) Holder cures itself if it is paralyzed. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'psncureberry',
    {
      name: 'PSN Cure Berry',
      gen: 2,
      desc: '(Gen 2) Holder is cured if it is poisoned. Single use.',
      isNonstandard: 'Past'
    }
  ],
  [
    'pamtreberry',
    {
      name: 'Pamtre Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'parkball',
    {
      name: 'Park Ball',
      gen: 4,
      desc: 'A special Poke Ball for the Pal Park.'
    }
  ],
  [
    'passhoberry',
    {
      name: 'Passho Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Water-type attack. Single use.'
    }
  ],
  [
    'payapaberry',
    {
      name: 'Payapa Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Psychic-type attack. Single use.'
    }
  ],
  [
    'pechaberry',
    {
      name: 'Pecha Berry',
      gen: 3,
      desc: 'Holder is cured if it is poisoned. Single use.'
    }
  ],
  [
    'persimberry',
    {
      name: 'Persim Berry',
      gen: 3,
      desc: 'Holder is cured if it is confused. Single use.'
    }
  ],
  [
    'petayaberry',
    {
      name: 'Petaya Berry',
      gen: 3,
      desc: "Raises holder's Sp. Atk by 1 stage when at 1/4 max HP or less. Single use."
    }
  ],
  [
    'pidgeotite',
    {
      name: 'Pidgeotite',
      gen: 6,
      desc: 'If held by a Pidgeot, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'pikaniumz',
    {
      name: 'Pikanium Z',
      gen: 7,
      desc: 'If held by a Pikachu with Volt Tackle, it can use Catastropika.',
      isNonstandard: 'Past'
    }
  ],
  [
    'pikashuniumz',
    {
      name: 'Pikashunium Z',
      gen: 7,
      desc: 'If held by cap Pikachu with Thunderbolt, it can use 10,000,000 Volt Thunderbolt.',
      isNonstandard: 'Past'
    }
  ],
  [
    'pinapberry',
    {
      name: 'Pinap Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'pinkbow',
    {
      name: 'Pink Bow',
      gen: 2,
      desc: "(Gen 2) Holder's Normal-type attacks have 1.1x power.",
      isNonstandard: 'Past'
    }
  ],
  [
    'pinsirite',
    {
      name: 'Pinsirite',
      gen: 6,
      desc: 'If held by a Pinsir, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'pixieplate',
    {
      name: 'Pixie Plate',
      gen: 6,
      desc: "Holder's Fairy-type attacks have 1.2x power. Judgment is Fairy type."
    }
  ],
  [
    'plumefossil',
    {
      name: 'Plume Fossil',
      gen: 5,
      isNonstandard: 'Past',
      desc: 'Can be revived into Archen.'
    }
  ],
  [
    'poisonbarb',
    {
      name: 'Poison Barb',
      gen: 2,
      desc: "Holder's Poison-type attacks have 1.2x power."
    }
  ],
  [
    'poisongem',
    {
      name: 'Poison Gem',
      gen: 5,
      desc: "Holder's first successful Poison-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'poisonmemory',
    {
      name: 'Poison Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Poison type."
    }
  ],
  [
    'poisoniumz',
    {
      name: 'Poisonium Z',
      gen: 7,
      desc: 'If holder has a Poison move, this item allows it to use a Poison Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'pokeball',
    {
      name: 'Poke Ball',
      gen: 1,
      desc: 'A device for catching wild Pokemon. It is designed as a capsule system.'
    }
  ],
  [
    'polkadotbow',
    {
      name: 'Polkadot Bow',
      gen: 2,
      desc: "(Gen 2) Holder's Normal-type attacks have 1.1x power.",
      isNonstandard: 'Past'
    }
  ],
  [
    'pomegberry',
    {
      name: 'Pomeg Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'poweranklet',
    {
      name: 'Power Anklet',
      gen: 4,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'powerband',
    {
      name: 'Power Band',
      gen: 4,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'powerbelt',
    {
      name: 'Power Belt',
      gen: 4,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'powerbracer',
    {
      name: 'Power Bracer',
      gen: 4,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'powerherb',
    {
      name: 'Power Herb',
      gen: 4,
      desc: "Holder's two-turn moves complete in one turn (except Sky Drop). Single use."
    }
  ],
  [
    'powerlens',
    {
      name: 'Power Lens',
      gen: 4,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'powerweight',
    {
      name: 'Power Weight',
      gen: 4,
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect."
    }
  ],
  [
    'premierball',
    {
      name: 'Premier Ball',
      gen: 3,
      desc: 'A rare Poke Ball that has been crafted to commemorate an event.'
    }
  ],
  [
    'primariumz',
    {
      name: 'Primarium Z',
      gen: 7,
      desc: 'If held by a Primarina with Sparkling Aria, it can use Oceanic Operetta.',
      isNonstandard: 'Past'
    }
  ],
  [
    'prismscale',
    {
      name: 'Prism Scale',
      gen: 5,
      desc: 'Evolves Feebas into Milotic when traded.'
    }
  ],
  [
    'protectivepads',
    {
      name: 'Protective Pads',
      gen: 7,
      desc: "Holder's moves are protected from adverse contact effects, except Pickpocket."
    }
  ],
  [
    'protector',
    {
      name: 'Protector',
      gen: 4,
      desc: 'Evolves Rhydon into Rhyperior when traded.'
    }
  ],
  [
    'psychicgem',
    {
      name: 'Psychic Gem',
      gen: 5,
      desc: "Holder's first successful Psychic-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'psychicmemory',
    {
      name: 'Psychic Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Psychic type."
    }
  ],
  [
    'psychicseed',
    {
      name: 'Psychic Seed',
      gen: 7,
      desc: "If the terrain is Psychic Terrain, raises holder's Sp. Def by 1 stage. Single use."
    }
  ],
  [
    'psychiumz',
    {
      name: 'Psychium Z',
      gen: 7,
      desc: 'If holder has a Psychic move, this item allows it to use a Psychic Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'qualotberry',
    {
      name: 'Qualot Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'quickball',
    {
      name: 'Quick Ball',
      gen: 4,
      desc: 'A Poke Ball that provides a better catch rate at the start of a wild encounter.'
    }
  ],
  [
    'quickclaw',
    {
      name: 'Quick Claw',
      gen: 2,
      desc: 'Each turn, holder has a 20% chance to move first in its priority bracket.'
    }
  ],
  [
    'quickpowder',
    {
      name: 'Quick Powder',
      gen: 4,
      desc: "If held by a Ditto that hasn't Transformed, its Speed is doubled."
    }
  ],
  [
    'rabutaberry',
    {
      name: 'Rabuta Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'rarebone',
    {
      name: 'Rare Bone',
      gen: 4,
      desc: 'No competitive use other than when used with Fling.'
    }
  ],
  [
    'rawstberry',
    {
      name: 'Rawst Berry',
      gen: 3,
      desc: 'Holder is cured if it is burned. Single use.'
    }
  ],
  [
    'razorclaw',
    {
      name: 'Razor Claw',
      gen: 4,
      desc: "Holder's critical hit ratio is raised by 1 stage. Evolves Sneasel into Weavile when held and leveled up during the night.",
      shortDesc: "Holder's critical hit ratio is raised by 1 stage."
    }
  ],
  [
    'razorfang',
    {
      name: 'Razor Fang',
      gen: 4,
      desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch. Evolves Gligar into Gliscor when held and leveled up during the night.",
      shortDesc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch.",
      isNonstandard: 'Past'
    }
  ],
  [
    'razzberry',
    {
      name: 'Razz Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'reapercloth',
    {
      name: 'Reaper Cloth',
      gen: 4,
      desc: 'Evolves Dusclops into Dusknoir when traded.'
    }
  ],
  [
    'redcard',
    {
      name: 'Red Card',
      gen: 5,
      desc: 'If holder survives a hit, attacker is forced to switch to a random ally. Single use.'
    }
  ],
  [
    'redorb',
    {
      name: 'Red Orb',
      gen: 6,
      desc: 'If held by a Groudon, this item triggers its Primal Reversion in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'repeatball',
    {
      name: 'Repeat Ball',
      gen: 3,
      desc: 'A Poke Ball that works well on Pokemon species that were previously caught.'
    }
  ],
  [
    'ribbonsweet',
    {
      name: 'Ribbon Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'rindoberry',
    {
      name: 'Rindo Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Grass-type attack. Single use.'
    }
  ],
  [
    'ringtarget',
    {
      name: 'Ring Target',
      gen: 5,
      desc: "The holder's type immunities granted solely by its typing are negated."
    }
  ],
  [
    'rockgem',
    {
      name: 'Rock Gem',
      gen: 5,
      desc: "Holder's first successful Rock-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'rockincense',
    {
      name: 'Rock Incense',
      gen: 4,
      desc: "Holder's Rock-type attacks have 1.2x power."
    }
  ],
  [
    'rockmemory',
    {
      name: 'Rock Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Rock type."
    }
  ],
  [
    'rockiumz',
    {
      name: 'Rockium Z',
      gen: 7,
      desc: 'If holder has a Rock move, this item allows it to use a Rock Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'roseincense',
    {
      name: 'Rose Incense',
      gen: 4,
      desc: "Holder's Grass-type attacks have 1.2x power."
    }
  ],
  [
    'rockyhelmet',
    {
      name: 'Rocky Helmet',
      gen: 5,
      desc: 'If holder is hit by a contact move, the attacker loses 1/6 of its max HP.'
    }
  ],
  [
    'roomservice',
    {
      name: 'Room Service',
      gen: 8,
      desc: "If Trick Room is active, the holder's Speed is lowered by 1 stage. Single use."
    }
  ],
  [
    'rootfossil',
    {
      name: 'Root Fossil',
      gen: 3,
      isNonstandard: 'Past',
      desc: 'Can be revived into Lileep.'
    }
  ],
  [
    'roseliberry',
    {
      name: 'Roseli Berry',
      gen: 6,
      desc: 'Halves damage taken from a supereffective Fairy-type attack. Single use.'
    }
  ],
  [
    'rowapberry',
    {
      name: 'Rowap Berry',
      gen: 4,
      desc: 'If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use.',
      isNonstandard: 'Unobtainable'
    }
  ],
  [
    'rustedshield',
    {
      name: 'Rusted Shield',
      gen: 8,
      desc: 'If held by a Zamazenta, this item changes its forme to Crowned Shield.'
    }
  ],
  [
    'rustedsword',
    {
      name: 'Rusted Sword',
      gen: 8,
      desc: 'If held by a Zacian, this item changes its forme to Crowned Sword.'
    }
  ],
  [
    'sablenite',
    {
      name: 'Sablenite',
      gen: 6,
      desc: 'If held by a Sableye, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'sachet',
    {
      name: 'Sachet',
      gen: 6,
      desc: 'Evolves Spritzee into Aromatisse when traded.'
    }
  ],
  [
    'safariball',
    {
      name: 'Safari Ball',
      gen: 1,
      desc: 'A special Poke Ball that is used only in the Safari Zone and Great Marsh.'
    }
  ],
  [
    'safetygoggles',
    {
      name: 'Safety Goggles',
      gen: 6,
      desc: 'Holder is immune to powder moves and damage from Sandstorm or Hail.'
    }
  ],
  [
    'sailfossil',
    {
      name: 'Sail Fossil',
      gen: 6,
      isNonstandard: 'Past',
      desc: 'Can be revived into Amaura.'
    }
  ],
  [
    'salacberry',
    {
      name: 'Salac Berry',
      gen: 6,
      desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.'
    }
  ],
  [
    'salamencite',
    {
      name: 'Salamencite',
      gen: 6,
      desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'sceptilite',
    {
      name: 'Sceptilite',
      gen: 6,
      desc: 'If held by a Sceptile, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'scizorite',
    {
      name: 'Scizorite',
      gen: 6,
      desc: 'If held by a Scizor, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'scopelens',
    {
      name: 'Scope Lens',
      gen: 2,
      desc: "Holder's critical hit ratio is raised by 1 stage."
    }
  ],
  [
    'seaincense',
    {
      name: 'Sea Incense',
      gen: 3,
      desc: "Holder's Water-type attacks have 1.2x power."
    }
  ],
  [
    'sharpbeak',
    {
      name: 'Sharp Beak',
      gen: 2,
      desc: "Holder's Flying-type attacks have 1.2x power."
    }
  ],
  [
    'sharpedonite',
    {
      name: 'Sharpedonite',
      gen: 6,
      desc: 'If held by a Sharpedo, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'shedshell',
    {
      name: 'Shed Shell',
      gen: 4,
      desc: 'Holder may switch out even when trapped by another Pokemon, or by Ingrain.'
    }
  ],
  [
    'shellbell',
    {
      name: 'Shell Bell',
      gen: 3,
      desc: 'After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon.'
    }
  ],
  [
    'shinystone',
    {
      name: 'Shiny Stone',
      gen: 4,
      desc: 'Evolves Togetic into Togekiss, Roselia into Roserade, Minccino into Cinccino, and Floette into Florges when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'shockdrive',
    {
      name: 'Shock Drive',
      gen: 5,
      isNonstandard: 'Past',
      desc: "Holder's Techno Blast is Electric type."
    }
  ],
  [
    'shucaberry',
    {
      name: 'Shuca Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Ground-type attack. Single use.'
    }
  ],
  [
    'silkscarf',
    {
      name: 'Silk Scarf',
      gen: 3,
      desc: "Holder's Normal-type attacks have 1.2x power."
    }
  ],
  [
    'silverpowder',
    {
      name: 'SilverPowder',
      gen: 2,
      desc: "Holder's Bug-type attacks have 1.2x power."
    }
  ],
  [
    'sitrusberry',
    {
      name: 'Sitrus Berry',
      gen: 3,
      desc: 'Restores 1/4 max HP when at 1/2 max HP or less. Single use.'
    }
  ],
  [
    'skullfossil',
    {
      name: 'Skull Fossil',
      gen: 4,
      isNonstandard: 'Past',
      desc: 'Can be revived into Cranidos.'
    }
  ],
  [
    'skyplate',
    {
      name: 'Sky Plate',
      gen: 4,
      desc: "Holder's Flying-type attacks have 1.2x power. Judgment is Flying type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'slowbronite',
    {
      name: 'Slowbronite',
      gen: 6,
      desc: 'If held by a Slowbro, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'smoothrock',
    {
      name: 'Smooth Rock',
      gen: 4,
      desc: "Holder's use of Sandstorm lasts 8 turns instead of 5."
    }
  ],
  [
    'snorliumz',
    {
      name: 'Snorlium Z',
      gen: 7,
      desc: 'If held by a Snorlax with Giga Impact, it can use Pulverizing Pancake.',
      isNonstandard: 'Past'
    }
  ],
  [
    'snowball',
    {
      name: 'Snowball',
      gen: 6,
      desc: "Raises holder's Attack by 1 if hit by an Ice-type attack. Single use."
    }
  ],
  [
    'softsand',
    {
      name: 'Soft Sand',
      gen: 2,
      desc: "Holder's Ground-type attacks have 1.2x power."
    }
  ],
  [
    'solganiumz',
    {
      name: 'Solganium Z',
      gen: 7,
      desc: 'Solgaleo or Dusk Mane Necrozma with Sunsteel Strike can use a special Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'souldew',
    {
      name: 'Soul Dew',
      gen: 3,
      desc: 'If held by a Latias/Latios, its Dragon- and Psychic-type moves have 1.2x power.',
      isNonstandard: 'Past'
    }
  ],
  [
    'spelltag',
    {
      name: 'Spell Tag',
      gen: 2,
      desc: "Holder's Ghost-type attacks have 1.2x power."
    }
  ],
  [
    'spelonberry',
    {
      name: 'Spelon Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'splashplate',
    {
      name: 'Splash Plate',
      gen: 4,
      desc: "Holder's Water-type attacks have 1.2x power. Judgment is Water type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'spookyplate',
    {
      name: 'Spooky Plate',
      gen: 4,
      desc: "Holder's Ghost-type attacks have 1.2x power. Judgment is Ghost type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'sportball',
    {
      name: 'Sport Ball',
      gen: 2,
      desc: 'A special Poke Ball for the Bug-Catching Contest.'
    }
  ],
  [
    'starfberry',
    {
      name: 'Starf Berry',
      gen: 3,
      desc: 'Raises a random stat by 2 when at 1/4 max HP or less (not acc/eva). Single use.'
    }
  ],
  [
    'steelgem',
    {
      name: 'Steel Gem',
      gen: 5,
      desc: "Holder's first successful Steel-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'steelmemory',
    {
      name: 'Steel Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Steel type."
    }
  ],
  [
    'steeliumz',
    {
      name: 'Steelium Z',
      gen: 7,
      desc: 'If holder has a Steel move, this item allows it to use a Steel Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'starsweet',
    {
      name: 'Star Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'steelixite',
    {
      name: 'Steelixite',
      gen: 6,
      desc: 'If held by a Steelix, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'stick',
    {
      name: 'Stick',
      gen: 2,
      desc: 'If held by a Farfetch\u2019d, its critical hit ratio is raised by 2 stages.',
      isNonstandard: 'Past'
    }
  ],
  [
    'stickybarb',
    {
      name: 'Sticky Barb',
      gen: 4,
      desc: 'Each turn, holder loses 1/8 max HP. An attacker making contact can receive it.'
    }
  ],
  [
    'stoneplate',
    {
      name: 'Stone Plate',
      gen: 4,
      desc: "Holder's Rock-type attacks have 1.2x power. Judgment is Rock type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'strawberrysweet',
    {
      name: 'Strawberry Sweet',
      gen: 8,
      desc: 'Evolves Milcery into Alcremie when held and spun around.'
    }
  ],
  [
    'sunstone',
    {
      name: 'Sun Stone',
      gen: 2,
      desc: 'Evolves Gloom into Bellossom, Sunkern into Sunflora, Cottonee into Whimsicott, Petilil into Lilligant, and Helioptile into Heliolisk when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'swampertite',
    {
      name: 'Swampertite',
      gen: 6,
      desc: 'If held by a Swampert, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'sweetapple',
    {
      name: 'Sweet Apple',
      gen: 8,
      desc: 'Evolves Applin into Appletun when used.'
    }
  ],
  [
    'tamatoberry',
    {
      name: 'Tamato Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.'
    }
  ],
  [
    'tangaberry',
    {
      name: 'Tanga Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Bug-type attack. Single use.'
    }
  ],
  [
    'tapuniumz',
    {
      name: 'Tapunium Z',
      gen: 7,
      desc: "If held by a Tapu with Nature's Madness, it can use Guardian of Alola.",
      isNonstandard: 'Past'
    }
  ],
  [
    'tartapple',
    {
      name: 'Tart Apple',
      gen: 8,
      desc: 'Evolves Applin into Flapple when used.'
    }
  ],
  [
    'terrainextender',
    {
      name: 'Terrain Extender',
      gen: 7,
      desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5."
    }
  ],
  [
    'thickclub',
    {
      name: 'Thick Club',
      gen: 2,
      desc: 'If held by a Cubone or a Marowak, its Attack is doubled.'
    }
  ],
  [
    'throatspray',
    {
      name: 'Throat Spray',
      gen: 8,
      desc: "Raises holder's Special Attack by 1 stage after it uses a sound move. Single use."
    }
  ],
  [
    'thunderstone',
    {
      name: 'Thunder Stone',
      gen: 1,
      desc: 'Evolves Pikachu into Raichu or Alolan Raichu, Eevee into Jolteon, Eelektrik into Eelektross, and Charjabug into Vikavolt when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'timerball',
    {
      name: 'Timer Ball',
      gen: 3,
      desc: 'A Poke Ball that becomes better the more turns there are in a battle.'
    }
  ],
  [
    'toxicorb',
    {
      name: 'Toxic Orb',
      gen: 4,
      desc: 'At the end of every turn, this item attempts to badly poison the holder.'
    }
  ],
  [
    'toxicplate',
    {
      name: 'Toxic Plate',
      gen: 4,
      desc: "Holder's Poison-type attacks have 1.2x power. Judgment is Poison type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'twistedspoon',
    {
      name: 'Twisted Spoon',
      gen: 2,
      desc: "Holder's Psychic-type attacks have 1.2x power."
    }
  ],
  [
    'tyranitarite',
    {
      name: 'Tyranitarite',
      gen: 6,
      desc: 'If held by a Tyranitar, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'ultraball',
    {
      name: 'Ultra Ball',
      gen: 1,
      desc: 'An ultra-performance Ball that provides a higher catch rate than a Great Ball.'
    }
  ],
  [
    'ultranecroziumz',
    {
      name: 'Ultranecrozium Z',
      gen: 7,
      desc: 'Dusk Mane/Dawn Wings Necrozma: Ultra Burst, then Z-Move w/ Photon Geyser.',
      isNonstandard: 'Past'
    }
  ],
  [
    'upgrade',
    {
      name: 'Up-Grade',
      gen: 2,
      desc: 'Evolves Porygon into Porygon2 when traded.'
    }
  ],
  [
    'utilityumbrella',
    {
      name: 'Utility Umbrella',
      gen: 8,
      desc: 'The holder ignores rain- and sun-based effects. Damage and accuracy calculations from attacks used by the holder are affected by rain and sun, but not attacks used against the holder.',
      shortDesc: 'The holder ignores rain- and sun-based effects.'
    }
  ],
  [
    'venusaurite',
    {
      name: 'Venusaurite',
      gen: 6,
      desc: 'If held by a Venusaur, this item allows it to Mega Evolve in battle.',
      isNonstandard: 'Past'
    }
  ],
  [
    'wacanberry',
    {
      name: 'Wacan Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Electric-type attack. Single use.'
    }
  ],
  [
    'watergem',
    {
      name: 'Water Gem',
      gen: 5,
      desc: "Holder's first successful Water-type attack will have 1.3x power. Single use.",
      isNonstandard: 'Past'
    }
  ],
  [
    'watermemory',
    {
      name: 'Water Memory',
      gen: 7,
      desc: "Holder's Multi-Attack is Water type."
    }
  ],
  [
    'waterstone',
    {
      name: 'Water Stone',
      gen: 1,
      desc: 'Evolves Poliwhirl into Poliwrath, Shellder into Cloyster, Staryu into Starmie, Eevee into Vaporeon, Lombre into Ludicolo, and Panpour into Simipour when used.',
      shortDesc: 'Evolves certain species of Pokemon when used.'
    }
  ],
  [
    'wateriumz',
    {
      name: 'Waterium Z',
      gen: 7,
      desc: 'If holder has a Water move, this item allows it to use a Water Z-Move.',
      isNonstandard: 'Past'
    }
  ],
  [
    'watmelberry',
    {
      name: 'Watmel Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'waveincense',
    {
      name: 'Wave Incense',
      gen: 4,
      desc: "Holder's Water-type attacks have 1.2x power."
    }
  ],
  [
    'weaknesspolicy',
    {
      name: 'Weakness Policy',
      gen: 6,
      desc: 'If holder is hit super effectively, raises Attack, Sp. Atk by 2 stages. Single use.'
    }
  ],
  [
    'wepearberry',
    {
      name: 'Wepear Berry',
      gen: 3,
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      isNonstandard: 'Past'
    }
  ],
  [
    'whippeddream',
    {
      name: 'Whipped Dream',
      gen: 6,
      desc: 'Evolves Swirlix into Slurpuff when traded.'
    }
  ],
  [
    'whiteherb',
    {
      name: 'White Herb',
      gen: 3,
      desc: 'Restores all lowered stat stages to 0 when one is less than 0. Single use.'
    }
  ],
  [
    'widelens',
    {
      name: 'Wide Lens',
      gen: 4,
      desc: 'The accuracy of attacks by the holder is 1.1x.'
    }
  ],
  [
    'wikiberry',
    {
      name: 'Wiki Berry',
      gen: 3,
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use.'
    }
  ],
  [
    'wiseglasses',
    {
      name: 'Wise Glasses',
      gen: 4,
      desc: "Holder's special attacks have 1.1x power."
    }
  ],
  [
    'yacheberry',
    {
      name: 'Yache Berry',
      gen: 4,
      desc: 'Halves damage taken from a supereffective Ice-type attack. Single use.'
    }
  ],
  [
    'zapplate',
    {
      name: 'Zap Plate',
      gen: 4,
      desc: "Holder's Electric-type attacks have 1.2x power. Judgment is Electric type.",
      isNonstandard: 'Past'
    }
  ],
  [
    'zoomlens',
    {
      name: 'Zoom Lens',
      gen: 4,
      desc: 'The accuracy of attacks by the holder is 1.2x if it moves after its target.'
    }
  ]
]);
