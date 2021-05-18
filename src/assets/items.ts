import GraphQLCollection from '#utils/GraphQLCollection';
import type { Pokemon } from '#utils/pokemon';

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
      desc: 'If held by a Dialga, its Steel- and Dragon-type attacks have 1.2x power.'
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
      desc: 'A special Poké Ball designed to catch Ultra Beasts.'
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
      desc: "Used for Hyper Training. One of a Pokémon's stats is calculated with an IV of 31."
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
      desc: 'A rare Poké Ball that has been crafted to commemorate an occasion.'
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
      desc: 'Holder moves first in its priority bracket when at 1/4 max HP or less. Single use.'
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
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
      desc: 'If holder becomes infatuated, the other Pokémon also becomes infatuated.'
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
      desc: 'A Poké Ball that works especially well on Pokémon that live underwater.'
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
      desc: "A Poké Ball that makes it easier to catch wild Pokémon while they're asleep."
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
      desc: 'A Poké Ball that makes it easier to catch wild Pokémon at night or in caves.'
    }
  ],
  [
    'duskstone',
    {
      name: 'Dusk Stone',
      gen: 4,
      desc: 'Evolves Murkrow into Honchkrow, Misdreavus into Mismagius, Lampent into Chandelure, and Doublade into Aegislash when used.',
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
      desc: 'Restores 60 HP to one Pokémon.'
    }
  ],
  [
    'enigmaberry',
    {
      name: 'Enigma Berry',
      gen: 3,
      desc: 'Restores 1/4 max HP after holder is hit by a supereffective move. Single use.'
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
      desc: 'A Poké Ball that makes it easier to catch Pokémon which are quick to run away.'
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
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
      desc: 'A Poké Ball that makes caught Pokémon more friendly.'
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
    'fullrestore',
    {
      name: 'Full Restore',
      gen: 1,
      desc: 'A medicine that can be used to fully restore the HP of a single Pokémon and heal any status conditions it has. '
    }
  ],
  [
    'galaricacuff',
    {
      name: 'Galarica Cuff',
      gen: 8,
      desc: 'Evolves Galarian Slowpoke into Galarian Slowbro when used.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/galaricacuff.png'
    }
  ],
  [
    'galaricawreath',
    {
      name: 'Galarica Wreath',
      gen: 8,
      desc: 'Evolves Galarian Slowpoke into Galarian Slowking when used.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/galaricawreath.png'
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
      desc: "Used for Hyper Training. All of a Pokémon's stats are calculated with an IV of 31."
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
      desc: 'A high-performance Ball that provides a higher catch rate than a Poké Ball.'
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
      desc: 'If held by a Giratina, its Ghost- and Dragon-type attacks have 1.2x power.'
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
      desc: "A remedial Poké Ball that restores the caught Pokémon's HP and status problem."
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
      desc: 'A Poké Ball for catching very heavy Pokémon.'
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
    'hyperpotion',
    {
      name: 'Hyper Potion',
      gen: 1,
      desc: 'A spray-type medicine for treating wounds. It can be used to restore 120 HP to a single Pokémon.'
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
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
      desc: 'If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use.'
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
      desc: "Holder's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch. Evolves Poliwhirl into Politoed and Slowpoke into Slowking when traded.",

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
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
      desc: 'A Poké Ball for catching Pokémon that are a lower level than your own.'
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
      desc: 'Poké Ball for catching Pokémon that are the opposite gender of your Pokémon.'
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
      desc: 'Holder cures itself if it has a non-volatile status or is confused. Single use.'
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
      desc: 'A Poké Ball for catching Pokémon hooked by a Rod when fishing.'
    }
  ],
  [
    'lustrousorb',
    {
      name: 'Lustrous Orb',
      gen: 4,
      desc: 'If held by a Palkia, its Water- and Dragon-type attacks have 1.2x power.'
    }
  ],
  [
    'luxuryball',
    {
      name: 'Luxury Ball',
      gen: 3,
      desc: 'A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.'
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
      desc: 'Cannot be given to or taken from a Pokémon, except by Covet/Knock Off/Thief.'
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
      desc: 'The best Ball with the ultimate performance. It will catch any wild Pokémon.'
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
    'maxpotion',
    {
      name: 'Max Potion',
      gen: 1,
      desc: 'A spray-type medicine for treating wounds. It can be used to completely restore the max HP of a single Pokémon.'
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
      desc: "Holder's next move has 1.2x accuracy when at 1/4 max HP or less. Single use."
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
      desc: 'A Poké Ball for catching Pokémon that evolve using the Moon Stone.'
    }
  ],
  [
    'moonstone',
    {
      name: 'Moon Stone',
      gen: 1,
      desc: 'Evolves Nidorina into Nidoqueen, Nidorino into Nidoking, Clefairy into Clefable, Jigglypuff into Wigglytuff, Skitty into Delcatty, and Munna into Musharna when used.',
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
      desc: 'A Poké Ball that works especially well on weaker Pokémon in the wild.'
    }
  ],
  [
    'netball',
    {
      name: 'Net Ball',
      gen: 3,
      desc: 'A Poké Ball that works especially well on Water- and Bug-type Pokémon.'
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
      desc: 'A special Poké Ball for the Pal Park.'
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
      name: 'Poké Ball',
      gen: 1,
      desc: 'A device for catching wild Pokémon. It is designed as a capsule system.'
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
    'potion',
    {
      name: 'Potion',
      gen: 1,
      desc: 'A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.'
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
      desc: 'A rare Poké Ball that has been crafted to commemorate an event.'
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
      desc: 'A Poké Ball that provides a better catch rate at the start of a wild encounter.'
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
      desc: "Holder's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch. Evolves Gligar into Gliscor when held and leveled up during the night.",
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
      desc: 'A Poké Ball that works well on Pokémon species that were previously caught.'
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
      desc: 'If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use.'
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
      desc: 'A special Poké Ball that is used only in the Safari Zone and Great Marsh.'
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
      desc: 'Holder may switch out even when trapped by another Pokémon, or by Ingrain.'
    }
  ],
  [
    'shellbell',
    {
      name: 'Shell Bell',
      gen: 3,
      desc: 'After an attack, holder gains 1/8 of the damage in HP dealt to other Pokémon.'
    }
  ],
  [
    'shinystone',
    {
      name: 'Shiny Stone',
      gen: 4,
      desc: 'Evolves Togetic into Togekiss, Roselia into Roserade, Minccino into Cinccino, and Floette into Florges when used.',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'shockdrive',
    {
      name: 'Shock Drive',
      gen: 5,
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
      name: 'Silver Powder',
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
      desc: 'If held by a Latias/Latios, its Dragon- and Psychic-type moves have 1.2x power.'
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
      desc: 'A special Poké Ball for the Bug-Catching Contest.'
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
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'superpotion',
    {
      name: 'Super Potion',
      gen: 1,
      desc: 'A spray-type medicine for treating wounds. It can be used to restore 60 HP to a single Pokémon. '
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
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'timerball',
    {
      name: 'Timer Ball',
      gen: 3,
      desc: 'A Poké Ball that becomes better the more turns there are in a battle.'
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
      shortDesc: 'Evolves certain species of Pokémon when used.'
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
  ],
  [
    'acrobike',
    {
      name: 'Acro Bike',
      gen: 3,
      desc: 'This folding bike allows you to perform actions such as wheelies and bunny hops.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/acrobike.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'adventureguide',
    {
      name: 'Adventure Guide',
      gen: 6,
      desc: 'A compact device that automatically collects and records advice when a Trainer is out on an adventure.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/adventureguide.png',
      keyItem: true
    }
  ],
  [
    'apricornbox',
    {
      name: 'Apricorn Box',
      gen: 4,
      desc: 'A handy box where you can store up to 99 of each kind of Apricorn.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/apricornbox.png',
      keyItem: true
    }
  ],
  [
    'aquasuit',
    {
      name: 'Aqua Suit',
      gen: 6,
      desc: 'A suit made with the collective technological know-how of Team Aqua. It can withstand any impact.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/aquasuit.png',
      keyItem: true
    }
  ],
  [
    'auroraticket',
    {
      name: 'Aurora Ticket',
      gen: 3,
      desc: 'A ticket required to board the ship to Birth Island. It glows beautifully.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/auroraticket.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'autograph',
    {
      name: 'Autograph',
      gen: 7,
      desc: 'The autograph you got from the Vermilion City Gym Leader, Lt. Surge. He wrote, “Good luck!”',
      keyItem: true
    }
  ],
  [
    'azureflute',
    {
      name: 'Azure Flute',
      gen: 4,
      desc: 'A flute that puts out echoing sounds that do not seem to be of this world. No one knows who made it.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/azureflute.png',
      keyItem: true
    }
  ],
  [
    'bandautograph',
    {
      name: 'Band Autograph',
      gen: 8,
      desc: "It's signed by all members of the Galar region's most charismatic band, the Maximizers.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bandautograph.png',
      keyItem: true
    }
  ],
  [
    'basementkey',
    {
      name: 'Basement Key',
      gen: 2,
      desc: 'A key that opens a door in the Goldenrod Tunnel.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/basementkey.png',
      keyItem: true
    }
  ],
  [
    'berrypots',
    {
      name: 'Berry Pots',
      gen: 4,
      desc: 'Handy containers for cultivating Berries wherever you go.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/berrypots.png',
      keyItem: true
    }
  ],
  [
    'berrypouch',
    {
      name: 'Berry Pouch',
      gen: 3,
      desc: "A pouch for carrying Berries. It is attached to the bag's compartment for important items.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/berrypouch.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'bicycle',
    {
      name: 'Bicycle',
      gen: 1,
      desc: 'A folding bike that enables a rider to get around much faster than with Running Shoes.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bicycle.png',
      keyItem: true
    }
  ],
  [
    'bikevoucher',
    {
      name: 'Bike Voucher',
      gen: 3,
      desc: 'Take this voucher to the BIKE SHOP in CERULEAN CITY and exchange it for a bicycle.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bikevoucher.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'bluecard',
    {
      name: 'Blue Card',
      gen: 2,
      desc: "A card to save points for the Buena's Password show.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bluecard.png',
      keyItem: true
    }
  ],
  [
    'blueorb',
    {
      name: 'Blue Orb',
      desc: "A shiny blue orb that is said to have a legend tied to it. It's known to have a deep connection with the Hoenn region.",
      gen: 3,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/blueorb.png',
      keyItem: true
    }
  ],
  [
    'bluepetal',
    {
      name: 'Blue Petal',
      desc: "A pressed flower petal you receive from Lana during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bluepetal.png',
      keyItem: true
    }
  ],
  [
    'campinggear',
    {
      name: 'Camping Gear',
      desc: 'Everything you need to set up a tent and get cooking in a Wild Area or at a camping spot.',
      gen: 8,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/campinggear.png',
      keyItem: true
    }
  ],
  [
    'cardkey',
    {
      name: 'Card Key',
      desc: 'A card key that opens a shutter in the Radio Tower.',
      gen: 1,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/cardkey.png',
      keyItem: true
    }
  ],
  [
    'catchingcharm',
    {
      name: 'Catching Charm',
      desc: "Holding it is said to increase the chance of getting a critical catch. Curiously, the charm doesn't shake much.",
      gen: 8,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/catchingcharm.png',
      keyItem: true
    }
  ],
  [
    'clearbell',
    {
      name: 'Clear Bell',
      desc: 'A very old-fashioned bell that makes a gentle ringing sound.',
      gen: 2,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/clearbell.png',
      keyItem: true
    }
  ],
  [
    'coincase',
    {
      name: 'Coin Case',
      desc: 'A case for holding coins obtained at the Game Corner. It can hold up to 50,000 coins.',
      gen: 1,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coincase.png',
      keyItem: true
    }
  ],
  [
    'colressmchn',
    {
      name: 'Colress MCHN',
      desc: "A special device that wrings out the potential of Pokémon. It's an imperfect prototype.",
      gen: 5,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/colressmchn.png',
      keyItem: true
    }
  ],
  [
    'contestcostume',
    {
      name: 'Contest Costume',
      desc: 'A very cool suit to be worn during the Contest Spectacular.',
      gen: 6,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/contestcostume.png',
      keyItem: true
    }
  ],
  [
    'contestpass',
    {
      name: 'Contest Pass',
      desc: 'A pass required for entering Pokémon Contests. It has a drawing of an award ribbon on its front.',
      gen: 3,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/contestpass.png',
      keyItem: true
    }
  ],
  [
    'coupon1',
    {
      name: 'Coupon 1',
      desc: 'A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.',
      gen: 4,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coupon1.png',
      keyItem: true
    }
  ],
  [
    'coupon2',
    {
      name: 'Coupon 2',
      desc: 'A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.',
      gen: 4,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coupon2.png',
      keyItem: true
    }
  ],
  [
    'coupon3',
    {
      name: 'Coupon 3',
      desc: 'A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.',
      gen: 4,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coupon3.png',
      keyItem: true
    }
  ],
  [
    'dnasplicers',
    {
      name: 'DNA Splicers',
      desc: 'A splicer that fuses Kyurem and a certain Pokémon. They are said to have been one in the beginning.',
      gen: 5,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dnasplicers.png',
      keyItem: true
    }
  ],
  [
    'darkstone',
    {
      name: 'Dark Stone',
      desc: "Zekrom's body was destroyed and changed into this stone. It is said to be waiting for the emergence of a hero.",
      gen: 5,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/darkstone.png',
      keyItem: true
    }
  ],
  [
    'devongoods',
    {
      name: 'Devon Goods',
      desc: "A package that contains DEVON's machine parts.",
      gen: 3,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devongoods.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'devonparts',
    {
      name: 'Devon Parts',
      desc: 'A case that contains mechanical parts of some sort made by the Devon Corporation.',
      gen: 6,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devonparts.png',
      keyItem: true
    }
  ],
  [
    'devonscope',
    {
      name: 'Devon Scope',
      desc: 'A special device made by Devon Corporation that signals the presence of any unseen Pokémon.',
      gen: 6,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devonscope.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'devonscubagear',
    {
      name: 'Devon Scuba Gear',
      desc: 'A device made by Devon Corporation that provides oxygen to users during the use of Dive.',
      gen: 6,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devonscubagear.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'dowsingmchn',
    {
      name: 'Dowsing MCHN',
      desc: "A high-tech machine that shows the location of invisible items. It's attached to the head when in use.",
      gen: 4,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dowsingmchn.png',
      keyItem: true
    }
  ],
  [
    'dowsingmachine',
    {
      name: 'Dowsing Machine',
      desc: "This high-tech machine shows the location of invisible items. It's attached to the head when in use.",
      gen: 6,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dowsingmachine.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'dragonskull',
    {
      name: 'Dragon Skull',
      desc: 'A skull of a Pokémon that was said to have braved the angry waters to fly around the world.',
      gen: 5,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dragonskull.png',
      keyItem: true
    }
  ],
  [
    'droppeditem',
    {
      name: 'Dropped Item',
      desc: "This item, when found, causes you to be in contact with the owner who will then request for it to be returned From there, you will be called when you enter random areas by the owner of the item. After the 10th call, the person will call you and tell you to meet in Nimbasa to return their Item. When you do, they will be added to your Xtransceiver. Call them to total 30 times, but you can only call from places which fulfill the conditions. On the 30th call they'll tell you they want to meet at Nimbasa City where they'll ride the Ferris Wheel with you. Call them to total 50 times, in the 40th call they'll be 'SOUND ONLY', in the 50th call they'll be wearing their work clothes, and cut the line in a second or so. Call them a 51st time. wait a day and then call them again and they'll meet you in Nimbasa City and offer to trade, willing to have any Pokémon. This can be repeated each day to go through all of their Pokémon. The Pokémon you receive varies based on your gender",
      shortDesc: 'The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy or girl.',
      gen: 5,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/droppeditem.png',
      keyItem: true
    }
  ],
  [
    'dynamaxband',
    {
      name: 'Dynamax Band',
      desc: 'A Wishing Star has been affixed to it. It lets out a light that allows Pokémon to Dynamax when at a Power Spot.',
      gen: 8,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dynamaxband.png',
      keyItem: true
    }
  ],
  [
    'eggcard',
    {
      name: 'Egg Card',
      desc: 'This item is to be taken to the Breeding Centre in Route 34 and exchanged for the Odd Egg which may hold Pichu, Cleffa, Igglybuff, Tyrogue, Smoochum, Elekid or Magby.',
      shortDesc: 'Might be used at the Pokémon Communication Centre.',
      gen: 2,
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'elevatorkey',
    {
      name: 'Elevator Key',
      desc: "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare's logo.",
      gen: 7,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/elevatorkey.png',
      keyItem: true
    }
  ],
  [
    'endorsement',
    {
      name: 'Endorsement',
      desc: "A letter of recommendation that you'll need in order to participate in the Gym Challenge.",
      gen: 8,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/endorsement.png',
      keyItem: true
    }
  ],
  [
    'enigmastone',
    {
      name: 'Enigma Stone',
      desc: "A crystal ball that was excavated from the ground. It's a very beautiful stone that is covered with bits of rock and earth.",
      gen: 4,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/enigmastone.png',
      keyItem: true
    }
  ],
  [
    'enigmaticcard',
    {
      name: 'Enigmatic Card',
      desc: 'A mysterious card. Written on it is a request for you to go to a guest room in an Akala motel on Route 8.',
      gen: 7,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/enigmaticcard.png',
      keyItem: true
    }
  ],
  [
    'eonflute',
    {
      name: 'Eon Flute',
      desc: 'A flute that can be used to summon Latios or Latias no matter where you are.',
      gen: 6,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/eonflute.png',
      keyItem: true
    }
  ],
  [
    'eonticket',
    {
      name: 'Eon Ticket',
      desc: 'The ticket required for sailing on a ferry to the Southern Island. Does Norman, the Petalburg Gym Leader, know a secret?!',
      gen: 3,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/eonticket.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'escaperope',
    {
      name: 'Escape Rope',
      desc: 'A long and durable rope. Use it to escape instantly from locations like caves or dungeons. It can be used any number of times.',
      gen: 8,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/escaperope.png',
      keyItem: true
    }
  ],
  [
    'expshare',
    {
      name: 'Exp. Share',
      desc: 'Turning on this special device will allow all the Pokémon on your team to receive Exp. Points from battles.',
      gen: 2,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/exp.share.png',
      keyItem: true
    }
  ],
  [
    'explorerkit',
    {
      name: 'Explorer Kit',
      desc: 'A bag filled with convenient tools for exploring. It provides access to the Underground in the Sinnoh region.',
      gen: 4,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/explorerkit.png',
      keyItem: true
    }
  ],
  [
    'famechecker',
    {
      name: 'Fame Checker',
      desc: "A device that enables you to recall what you've heard and seen about famous people.",
      gen: 3,
      specialSprite: 'https://www.serebii.net/itemdex/sprites/famechecker.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'fashioncase',
    {
      name: 'Fashion Case',
      gen: 4,
      desc: 'A lovely case to store colorful Props for your Pokémon to wear in a musical.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/fashioncase.png',
      keyItem: true
    }
  ],
  [
    'fishingrod',
    {
      name: 'Fishing Rod',
      gen: 1,
      desc: 'Use it by the water to fish up various kinds of Pokémon.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/fishingrod.png',
      keyItem: true
    }
  ],
  [
    'foragebag',
    {
      name: 'foragebag',
      gen: 7,
      desc: '	A bag to carry ingredients gathered during Mallow’s trial in the jungle.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/foragebag.png',
      keyItem: true
    }
  ],
  [
    'gbsounds',
    {
      name: 'GB Sounds',
      gen: 4,
      desc: "A music player that allows you to listen to nostalgic songs. It's operated with the flip of a single switch.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gbsounds.png',
      keyItem: true
    }
  ],
  [
    'gsball',
    {
      name: 'GS Ball',
      gen: 2,
      desc: 'The mysterious BALL.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gsball.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'galactickey',
    {
      name: 'GS Ball',
      gen: 4,
      desc: 'A card key for disengaging the security systems in the Galactic HQ. Losing it can result in punishment, apparently.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/galactickey.png',
      keyItem: true
    }
  ],
  [
    'gogoggles',
    {
      name: 'Go-Goggles',
      gen: 3,
      desc: 'Nifty goggles to protect eyes from desert sandstorms.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/go-goggles.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'godstone',
    {
      name: 'God Stone',
      gen: 5,
      desc: 'A rare stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/godstone.png',
      keyItem: true
    }
  ],
  [
    'goldteeth',
    {
      name: 'Gold Teeth',
      gen: 1,
      desc: "A set of golden false teeth lost by the Safari Zone's warden. They make his smile sparkle.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/goldteeth.png',
      keyItem: true
    }
  ],
  [
    'goodrod',
    {
      name: 'Good Rod',
      gen: 1,
      desc: 'A new, good-quality fishing rod. Use it at any body of water to fish for wild aquatic Pokémon.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/goodrod.png',
      keyItem: true
    }
  ],
  [
    'gracidea',
    {
      name: 'Gracidea',
      gen: 4,
      desc: 'A flower sometimes bundled in bouquets to convey gratitude on special occasions, such as birthdays.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gracidea.png',
      keyItem: true
    }
  ],
  [
    'gram1',
    {
      name: 'Gram 1',
      gen: 5,
      desc: 'An important letter that Wingull delivers.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gram1.png',
      keyItem: true
    }
  ],
  [
    'gram2',
    {
      name: 'Gram 2',
      gen: 5,
      desc: 'An important letter that Wingull delivers.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gram2.png',
      keyItem: true
    }
  ],
  [
    'gram3',
    {
      name: 'Gram 3',
      gen: 5,
      desc: 'An important letter that Wingull delivers.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gram3.png',
      keyItem: true
    }
  ],
  [
    'greenpetal',
    {
      name: 'Green Petal',
      gen: 7,
      desc: "A pressed flower petal you receive from Mallow during Mina's trial. The goal is to collect seven different kinds of petals.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/greenpetal.png',
      keyItem: true
    }
  ],
  [
    'grubbyhanky',
    {
      name: 'Grubby Hanky',
      gen: 5,
      desc: 'A handkerchief dropped by a regular at Café Warehouse. It smells faintly like a Pokémon.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/grubbyhanky.png',
      keyItem: true
    }
  ],
  [
    'hitechearbuds',
    {
      name: 'Hi-tech Earbuds',
      gen: 8,
      desc: 'Strange earbuds that allow you to freely control the volume of various sounds.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/hi-techearbuds.png',
      keyItem: true
    }
  ],
  [
    'holocaster',
    {
      name: 'Holo Caster',
      gen: 6,
      desc: "A device that allows users to receive and view hologram clips at any time. It's also used to chat with others.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/holocaster.png',
      keyItem: true
    }
  ],
  [
    'honorofkalos',
    {
      name: 'Honor of Kalos',
      gen: 6,
      desc: 'A precious symbol that is awarded only to an individual who has done great things for the Kalos region.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/honorofkalos.png',
      keyItem: true
    }
  ],
  [
    'ilimasnormaliumz',
    {
      name: "Ilima's Normalium Z",
      gen: 7,
      desc: 'The Normalium Z you were entrusted with by Ilima. You were asked to place it on the pedestal at the back of Verdant Cavern.',
      specialSprite: "https://www.serebii.net/itemdex/sprites/ilima'snormaliumz.png",
      keyItem: true
    }
  ],
  [
    'intriguingstone',
    {
      name: 'Intriguing Stone',
      gen: 6,
      desc: "A rather curious stone that might appear valuable to some. It's all in the eye of the beholder.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/intriguingstone.png',
      keyItem: true
    }
  ],
  [
    'itemfinder',
    {
      name: 'itemfinder',
      gen: 1,
      desc: 'A device used for finding items. If there is a hidden item nearby when it is used, it emits a signal.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/itemfinder.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'jadeorb',
    {
      name: 'Jade Orb',
      gen: 4,
      desc: "A shiny green orb that is said to have a legend tied to it. It's known to have a deep connection with the Hoenn region.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/jadeorb.png',
      keyItem: true
    }
  ],
  [
    'journal',
    {
      name: 'journal',
      gen: 4,
      desc: 'A notebook that keeps a day-to-day record of your adventure so far.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/journal.png',
      keyItem: true
    }
  ],
  [
    'keystone',
    {
      name: 'Key Stone',
      gen: 6,
      desc: 'A stone filled with an unexplained power. It makes Pokémon that battle with a Mega Stone Mega Evolve.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keystone.png',
      keyItem: true
    }
  ],
  [
    'keytoroom1',
    {
      name: 'Key to Room 1',
      gen: 6,
      desc: 'A key that opens a door inside Sea Mauville',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom1.png',
      keyItem: true
    }
  ],
  [
    'keytoroom2',
    {
      name: 'Key to Room 2',
      gen: 6,
      desc: 'A key that opens a door inside Sea Mauville',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom2.png',
      keyItem: true
    }
  ],
  [
    'keytoroom4',
    {
      name: 'Key to Room 4',
      gen: 6,
      desc: 'A key that opens a door inside Sea Mauville',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom4.png',
      keyItem: true
    }
  ],
  [
    'keytoroom6',
    {
      name: 'Key to Room 6',
      gen: 6,
      desc: 'A key that opens a door inside Sea Mauville',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom6.png',
      keyItem: true
    }
  ],
  [
    'leftpokeball',
    {
      name: 'Left Poké Ball',
      gen: 7,
      desc: "A Poké Ball with a Pokémon that lost its Trainer inside. It seems to be from Ula'ula Island.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/leftpokeball.png',
      keyItem: true
    }
  ],
  [
    'lenscase',
    {
      name: 'Lens Case',
      gen: 6,
      desc: 'A rather chic-looking case for carrying contact lenses.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lenscase.png',
      keyItem: true
    }
  ],
  [
    'letter',
    {
      name: 'Letter',
      gen: 3,
      desc: 'An extremely important letter to Steven from the President of Devon Corporation.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/letter.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'libertypass',
    {
      name: 'Liberty Pass',
      gen: 5,
      desc: 'A special pass to go to Liberty Garden. Board the ship in Castelia City.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/libertypass.png',
      keyItem: true
    }
  ],
  [
    'liftkey',
    {
      name: 'Lift Key',
      gen: 1,
      desc: 'A key that operates the elevator in the Team Rocket Hideout. It bears the Team Rocket logo.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/liftkey.png',
      keyItem: true
    }
  ],
  [
    'lightstone',
    {
      name: 'Light Stone',
      gen: 5,
      desc: "Reshiram's body was destroyed and changed into this stone. It is said to be waiting for the emergence of a hero.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lightstone.png',
      keyItem: true
    }
  ],
  [
    'lockcapsule',
    {
      name: 'Lock Capsule',
      gen: 4,
      desc: 'A sturdy Capsule that can only be opened with a special key.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lockcapsule.png',
      keyItem: true
    }
  ],
  [
    'lookerticket',
    {
      name: 'Looker Ticket',
      gen: 6,
      desc: "A ticket that was handmade by Looker. It's decorated with a liberal amount of glittery paint.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lookerticket.png',
      keyItem: true
    }
  ],
  [
    'lootsack',
    {
      name: 'Loot Sack',
      gen: 4,
      desc: 'A sturdy, spacious bag that is used to carry any treasures or loot obtained in the coal mine.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lootsack.png',
      keyItem: true
    }
  ],
  [
    'lostitem',
    {
      name: 'Lost Item',
      gen: 2,
      desc: 'The Clefairy doll that was lost by the Copycat.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lostitem.png',
      keyItem: true
    }
  ],
  [
    'lunarwing',
    {
      name: 'Lunar Wing',
      gen: 4,
      desc: "A feather that glows like the moon. It's said to possess the power to dispel nightmares.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lunarwing.png',
      keyItem: true
    }
  ],
  [
    'machbike',
    {
      name: 'Mach Bike',
      gen: 3,
      desc: 'This folding Bike more than doubles your movement speed.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/machbike.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'machinepart',
    {
      name: 'Machine Part',
      gen: 2,
      desc: 'An important part of a machine that was stolen from the Power Plant.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/machinepart.png',
      keyItem: true
    }
  ],
  [
    'magmaemblem',
    {
      name: 'Magma Emblem',
      gen: 3,
      desc: "A medal-like item in the same shape as Team Magma's mark.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/magmaemblem.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'magmastone',
    {
      name: 'Magma Stone',
      gen: 4,
      desc: 'A stone formed by boulders melting in intensely hot magma, then hardening. Magma remains sealed inside it.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/magmastone.png',
      keyItem: true
    }
  ],
  [
    'magmasuit',
    {
      name: 'Magma Suit',
      gen: 6,
      desc: 'A suit made with the collective technological know-how of Team Magma. It can withstand any impact.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/magmasuit.png',
      keyItem: true
    }
  ],
  [
    'makeupbag',
    {
      name: 'Make-Up Bag',
      gen: 7,
      desc: 'A rather chic-looking case for carrying lipsticks.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/make-upbag.png',
      keyItem: true
    }
  ],
  [
    'medalbox',
    {
      name: 'Medal Box',
      gen: 5,
      desc: 'A box-shaped machine that stores Medals and Medal information.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/medalbox.png',
      keyItem: true
    }
  ],
  [
    'megabracelet',
    {
      name: 'Mega Bracelet',
      gen: 6,
      desc: 'This cuff contains an untold power that somehow enables Pokémon carrying a Mega Stone to Mega Evolve in battle.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/megabracelet.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'megaring',
    {
      name: 'Mega Ring',
      gen: 6,
      desc: 'This ring contains an untold power that somehow enables Pokémon carrying a Mega Stone to Mega Evolve in battle.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/megaring.png',
      keyItem: true
    }
  ],
  [
    'membercard',
    {
      name: 'Member Card',
      gen: 4,
      desc: 'A card needed for entering the inn in Canalave City. Oddly, the last date marked on it was 50 years ago.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/membercard.png',
      keyItem: true
    }
  ],
  [
    'meteorite',
    {
      name: 'Meteorite',
      gen: 3,
      desc: "A meteorite that you got at Mt. Chimney. Some sort of pattern has risen to the surface, and it's shining with seven colors of light.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/meteorite.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'meteoriteshard',
    {
      name: 'Meteorite Shard',
      gen: 6,
      desc: "One of the fragments of a Meteorite from Granite Cave. It's faintly warm to the touch.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/meteoriteshard.png',
      keyItem: true
    }
  ],
  [
    'moonflute',
    {
      name: 'Moon Flute',
      gen: 7,
      desc: 'It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/moonflute.png',
      keyItem: true
    }
  ],
  [
    'mysteryegg',
    {
      name: 'Mystery Egg',
      gen: 2,
      desc: "A mysterious Egg obtained from Mr. Pokémon. What's in the Egg is unknown.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/mysteryegg.png',
      keyItem: true
    }
  ],
  [
    'mysticticket',
    {
      name: 'MysticTicket',
      gen: 3,
      desc: '	A ticket required to board the ship to Navel Rock. It glows with a mystic light.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/mysticticket.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'nlunarizer',
    {
      name: 'N-Lunarizer',
      gen: 7,
      desc: 'A machine to fuse and separate Necrozma, which needs light, and Lunala.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/n-lunarizer.png',
      keyItem: true
    }
  ],
  [
    'nsolarizer',
    {
      name: 'N-Solarizer',
      gen: 7,
      desc: 'A machine to fuse and separate Necrozma, which needs light, and Solgaleo.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/n-solarizer.png'
    }
  ],
  [
    'oaksletter',
    {
      name: "Oak's Letter",
      gen: 4,
      desc: 'A letter from Professor Oak. Written in it is a request for you to go to Route 224.',
      specialSprite: "https://www.serebii.net/itemdex/sprites/oak'sletter.png",
      keyItem: true
    }
  ],
  [
    'oaksparcel',
    {
      name: "Oak's Parcel",
      gen: 1,
      desc: "A parcel to be delivered to Prof. Oak from Viridian City's Pokémon Mart.",
      specialSprite: "https://www.serebii.net/itemdex/sprites/oak'sparcel.png",
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'oldcharm',
    {
      name: 'Old Charm',
      gen: 4,
      desc: 'An ancient good-luck charm made of Pokémon bones to be taken to the elder of Celestic Town.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldcharm.png',
      keyItem: true
    }
  ],
  [
    'oldletter',
    {
      name: 'Old Letter',
      gen: 8,
      desc: 'A letter entrusted to you by a girl, to be delivered to a boy. Strangely, it looks old to you.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldletter.png',
      keyItem: true
    }
  ],
  [
    'oldrod',
    {
      name: 'Old Rod',
      gen: 1,
      desc: 'An old and beat-up fishing rod. Use it at any body of water to fish for wild aquatic Pokémon.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldrod.png',
      keyItem: true
    }
  ],
  [
    'oldseamap',
    {
      name: 'Old Sea Map',
      gen: 3,
      desc: 'A chart that can take you to Faraway Island.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldseamap.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'orangepetal',
    {
      name: 'Orange Petal',
      gen: 7,
      desc: "A pressed flower petal you receive from Ilima during Mina's trial. The goal is to collect seven different kinds of petals.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/orangepetal.png',
      keyItem: true
    }
  ],
  [
    'ovalcharm',
    {
      name: 'Oval Charm',
      gen: 5,
      desc: 'An oval charm said to increase the chance of Pokémon Eggs being found at the Nursery.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ovalcharm.png',
      keyItem: true
    }
  ],
  [
    'pairoftickets',
    {
      name: 'Pair of Tickets',
      gen: 6,
      desc: 'Tickets for two to the astronomical show being held at the Mossdeep Space Center.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pairoftickets.png',
      keyItem: true
    }
  ],
  [
    'palpad',
    {
      name: 'palpad',
      gen: 4,
      desc: 'A convenient notepad that is used to register your friends and friend codes and keep a record of your gameplay.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/palpad.png',
      keyItem: true
    }
  ],
  [
    'parcel',
    {
      name: 'Parcel',
      gen: 4,
      desc: "A parcel entrusted into your care. You're supposed to deliver it to your childhood friend who left Twinleaf Town.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/parcel.png',
      keyItem: true
    }
  ],
  [
    'pass',
    {
      name: 'Pass',
      gen: 2,
      desc: "A pass required for riding the Magnet Train. It allows you to ride whenever and however much you'd like.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pass.png',
      keyItem: true
    }
  ],
  [
    'permit',
    {
      name: 'Permit',
      gen: 5,
      desc: 'A permit that is needed to enter the Nature Preserve. Not many know about it.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/permit.png',
      keyItem: true
    }
  ],
  [
    'photoalbum',
    {
      name: 'Photo Album',
      gen: 4,
      desc: 'A nice photo album for storing all the photos taken along your adventure.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/photoalbum.png',
      keyItem: true
    }
  ],
  [
    'pinkpetal',
    {
      name: 'Pink Petal',
      gen: 7,
      desc: "A pressed flower petal you receive from Mina during Mina's trial. The goal is to collect seven different kinds of petals.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pinkpetal.png',
      keyItem: true
    }
  ],
  [
    'plasmacard',
    {
      name: 'Plasma Card',
      gen: 5,
      desc: 'A card key needed to enter the password inside the Plasma Frigate.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/plasmacard.png',
      keyItem: true
    }
  ],
  [
    'poffincase',
    {
      name: 'Poffin Case',
      gen: 4,
      desc: 'A case for storing Poffins cooked from Berries.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/poffincase.png',
      keyItem: true
    }
  ],
  [
    'pointcard',
    {
      name: 'Point Card',
      gen: 4,
      desc: 'A card that lists how many Battle Points you have earned.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pointcard.png',
      keyItem: true
    }
  ],
  [
    'pokeradar',
    {
      name: 'Poké Radar',
      gen: 4,
      desc: 'A tool that can search out Pokémon that are hiding in the tall grass. Its battery is recharged as you walk.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeradar.png',
      keyItem: true
    }
  ],
  [
    'pokeblockkit',
    {
      name: 'Pokéblock Kit',
      gen: 6,
      desc: 'A set containing a Berry Blender for making Pokéblocks and a Pokéblock Case for storing Pokéblocks.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeblockkit.png',
      keyItem: true
    }
  ],
  [
    'pokeblockcase',
    {
      name: 'Pokéblock Case',
      gen: 3,
      desc: 'A case for holding Pokéblock made with a Berry Blender.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeblockcase.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'pokeflute',
    {
      name: 'Poké Flute',
      gen: 1,
      desc: 'A flute that can play with such a beautiful tone that even sleeping Pokémon find themselves woken up.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeflute.png',
      keyItem: true
    }
  ],
  [
    'pokemonboxlink',
    {
      name: 'Pokémon Box Link',
      gen: 8,
      desc: "A device that allows you to access the Pokémon storage system. There are some places where it won't work.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokemonboxlink.png',
      keyItem: true
    }
  ],
  [
    'powderjar',
    {
      name: 'Powder Jar',
      gen: 3,
      desc: 'A jar for storing Berry Powder made using a Berry Crusher.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/powderjar.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'powerplantpass',
    {
      name: 'Power Plant Pass',
      gen: 6,
      desc: 'This pass serves as an ID card for gaining access to the Power Plant that lies along Route 13.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/powerplantpass.png',
      keyItem: true
    }
  ],
  [
    'prisonbottle',
    {
      name: 'Prison Bottle',
      gen: 6,
      desc: 'A bottle believed to have been used to seal away the power of a certain Pokémon long, long ago.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/prisonbottle.png',
      keyItem: true
    }
  ],
  [
    'profsletter',
    {
      name: "Prof's Letter",
      gen: 6,
      desc: 'A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.',
      specialSprite: "https://www.serebii.net/itemdex/sprites/prof'sletter.png",
      keyItem: true
    }
  ],
  [
    'professorsmask',
    {
      name: "Professor's Mask",
      gen: 7,
      desc: 'The mask that belongs to The Masked Royal. This pro wrestler apparently sews his mask on a machine himself.',
      specialSprite: "https://www.serebii.net/itemdex/sprites/professor'smask.png",
      keyItem: true
    }
  ],
  [
    'propcase',
    {
      name: 'Prop Case',
      gen: 5,
      desc: 'A lovely case to store colorful Props for your Pokémon to wear in a musical.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/propcase.png',
      keyItem: true
    }
  ],
  [
    'purplepetal',
    {
      name: 'Purple Petal',
      gen: 7,
      desc: "A pressed flower petal you receive from Nanu during Mina's trial. The goal is to collect seven different kinds of petals.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/purplepetal.png',
      keyItem: true
    }
  ],
  [
    'ragecandybar',
    {
      name: 'Rage Candy Bar',
      gen: 2,
      desc: "Mahogany Town's famous candy. It can be used once to heal all the status conditions of a Pokémon.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ragecandybar.png',
      keyItem: true
    }
  ],
  [
    'rainbowflower',
    {
      name: 'Rainbow Flower',
      gen: 7,
      desc: "A flower made of the petals you received from captains. It's proof that your growth has been recognized by them.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rainbowflower.png',
      keyItem: true
    }
  ],
  [
    'rainbowpass',
    {
      name: 'Rainbow Pass',
      gen: 3,
      desc: 'A pass for ferries between Vermilion and the Sevii Islands. It features a drawing of a rainbow.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rainbowpass.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'rainbowwing',
    {
      name: 'Rainbow Wing',
      gen: 2,
      desc: 'A mystical rainbow feather that sparkles.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rainbowwing.png',
      keyItem: true
    }
  ],
  [
    'redchain',
    {
      name: 'Red Chain',
      gen: 4,
      desc: 'A mythical chain that is said to link the Legendary Pokémon that created the Sinnoh region.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redchain.png',
      keyItem: true
    }
  ],
  [
    'redorb',
    {
      name: 'Red Orb',
      gen: 3,
      desc: "A shiny red orb that is said to have a legend tied to it. It's known to have a deep connection with the Hoenn region.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redorb.png',
      keyItem: true
    }
  ],
  [
    'redpetal',
    {
      name: 'Red Petal',
      gen: 7,
      desc: "A pressed flower petal you receive from Kiawe during Mina's trial. The goal is to collect seven different kinds of petals.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redpetal.png',
      keyItem: true
    }
  ],
  [
    'redscale',
    {
      name: 'Red Scale',
      gen: 2,
      desc: 'A scale from a red Gyarados. It glows red like a flame.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redscale.png',
      keyItem: true
    }
  ],
  [
    'revealglass',
    {
      name: 'Reveal Glass',
      gen: 5,
      desc: "A looking glass that reveals the truth. It's a mysterious glass that returns a Pokémon to its original shape.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/revealglass.png',
      keyItem: true
    }
  ],
  [
    'ridepager',
    {
      name: 'Ride Pager',
      gen: 7,
      desc: 'By entering certain numbers on this pager, you can summon Ride Pokémon in an instant.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ridepager.png',
      keyItem: true
    }
  ],
  [
    'rm1key',
    {
      name: 'Rm. 1 Key',
      gen: 3,
      desc: 'A key that opens a door inside the Abandoned Ship.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.1key.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'rm2key',
    {
      name: 'Rm. 2 Key',
      gen: 3,
      desc: 'A key that opens a door inside the Abandoned Ship.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.2key.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'rm4key',
    {
      name: 'Rm. 4 Key',
      gen: 3,
      desc: 'A key that opens a door inside the Abandoned Ship.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.4key.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'rm6key',
    {
      name: 'Rm. 6 Key',
      gen: 3,
      desc: 'A key that opens a door inside the Abandoned Ship.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.6key.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'rollerskates',
    {
      name: 'Roller Skates',
      gen: 6,
      desc: 'Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rollerskates.png',
      keyItem: true
    }
  ],
  [
    'rotombike',
    {
      name: 'Rotom Bike',
      gen: 8,
      desc: 'This bike can be combined with the Pokémon Rotom to not only do a turbo boost but also run on the water.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rotombike.png',
      keyItem: true
    }
  ],
  [
    'rotomcatalog',
    {
      name: 'Rotom Catalog',
      gen: 8,
      desc: 'A catalog of devices that Rotom like. Use the catalog to have Rotom hop in and out of the various devices listed within.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rotomcatalog.png',
      keyItem: true
    }
  ],
  [
    'ruby',
    {
      name: 'Ruby',
      gen: 3,
      desc: 'An exquisitely beautiful gem that has a red glow. It symbolizes passion.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ruby.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'rulebook',
    {
      name: 'Rule Book',
      gen: 4,
      desc: 'It lists the rules for holding battles. For Link Battles, you may choose which set of rules you wish to use.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rulebook.png',
      keyItem: true
    }
  ],
  [
    'ssticket',
    {
      name: 'S.S. Ticket',
      gen: 1,
      desc: 'A ticket required for sailing on the ferry S.S. Aqua. It has a drawing of a ship on its front.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/s.s.ticket.png',
      keyItem: true
    }
  ],
  [
    'sapphire',
    {
      name: 'Sapphire',
      gen: 3,
      desc: 'An exquisitely beautiful gem that has a blue glow. It symbolizes honesty.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sapphire.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'scanner',
    {
      name: 'Scanner',
      gen: 6,
      desc: 'A device found inside Sea Mauville.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/scanner.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'sealbag',
    {
      name: 'Seal Bag',
      gen: 4,
      desc: 'A tiny bag that can hold 10 Seals for decorating Poké Balls.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sealbag.png',
      keyItem: true
    }
  ],
  [
    'sealcase',
    {
      name: 'Seal Case',
      gen: 4,
      desc: 'A case for storing Seals that can be applied to the exteriors of Poké Balls.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sealcase.png',
      keyItem: true
    }
  ],
  [
    'secretkey',
    {
      name: 'Secret Key',
      gen: 1,
      desc: 'A high-tech key that has to be used at a specific location. It emits a special electronic signal to open a door.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/secretkey.png',
      keyItem: true
    }
  ],
  [
    'secretpotion',
    {
      name: 'SecretPotion',
      gen: 2,
      desc: 'A fantastic medicine dispensed by the pharmacy in Cianwood City. It fully heals a Pokémon of any ailment.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/secretpotion.png',
      keyItem: true
    }
  ],
  [
    'shinycharm',
    {
      name: 'Shiny Charm',
      gen: 5,
      desc: 'A shiny charm said to increase the chance of finding a Shiny Pokémon in the wild.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/shinycharm.png',
      keyItem: true
    }
  ],
  [
    'silphscope',
    {
      name: 'Silph Scope',
      gen: 1,
      desc: 'A scope that lets you see what cannot usually be seen. It is made by Silph Co.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/silphscope.png',
      keyItem: true
    }
  ],
  [
    'silverwing',
    {
      name: 'Silver Wing',
      gen: 2,
      desc: 'A strange, silvery feather that sparkles.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/silverwing.png',
      keyItem: true
    }
  ],
  [
    'slowpoketail',
    {
      name: 'Slowpoketail',
      gen: 2,
      desc: 'A very tasty tail of something. It can be sold at a high price to shops.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/slowpoketail.png',
      keyItem: true
    }
  ],
  [
    'soniasbook',
    {
      name: "Sonia's Book",
      gen: 8,
      desc: "Professor Sonia's published writings. Her new discoveries about the Galar region's legends are recorded in this enjoyable read.",
      specialSprite: "https://www.serebii.net/itemdex/sprites/sonia'sbook.png",
      keyItem: true
    }
  ],
  [
    'sootsack',
    {
      name: 'sootsack',
      gen: 3,
      desc: '	A sack used to gather and hold volcanic ash.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sootsack.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'sparklingstone',
    {
      name: 'Sparkling Stone',
      gen: 7,
      desc: 'A stone entrusted by a Pokémon that has been venerated as a guardian deity in the Alola region. There is said to be some secret in how it sparkles.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sparklingstone.png',
      keyItem: true
    }
  ],
  [
    'sprayduck',
    {
      name: 'Sprayduck',
      gen: 4,
      desc: 'A watering can shaped like a Psyduck. It helps promote the healthy growth of any Berries planted in good, soft soil.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sprayduck.png',
      keyItem: true
    }
  ],
  [
    'sprinklotad',
    {
      name: 'Sprinklotad',
      gen: 6,
      desc: 'A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sprinklotad.png',
      keyItem: true
    }
  ],
  [
    'squirtbottle',
    {
      name: 'Squirtbottle',
      gen: 2,
      desc: 'A bottle used for watering plants in the Berry Pots.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/squirtbottle.png',
      keyItem: true
    }
  ],
  [
    'storagekey',
    {
      name: 'Storage Key',
      gen: 4,
      desc: "The key to Team Galactic's sinister warehouse located at the edge of Veilstone City.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/storagekey.png',
      keyItem: true
    }
  ],
  [
    'suitekey',
    {
      name: 'Suite Key',
      gen: 4,
      desc: 'A key to one of the suites at a certain luxury hotel by a lake. For some odd reason, it often disappears.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/suitekey.png',
      keyItem: true
    }
  ],
  [
    'sunflute',
    {
      name: 'Sun Flute',
      gen: 7,
      desc: 'It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sunflute.png',
      keyItem: true
    }
  ],
  [
    'superrod',
    {
      name: 'Super Rod',
      gen: 1,
      desc: 'An awesome, high-tech fishing rod. Use it at any body of water to fish for wild aquatic Pokémon.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/superrod.png',
      keyItem: true
    }
  ],
  [
    'surgebadge',
    {
      name: 'Surge Badge',
      gen: 7,
      desc: 'A novelty badge that you can receive at the Kantonian Gym. Rumor has it that it imitates the Badge of a Gym somewhere.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/surgebadge.png',
      keyItem: true
    }
  ],
  [
    'tmcase',
    {
      name: 'TM Case',
      gen: 3,
      desc: "A case that holds TMs and HMs. It is attached to the Bag's compartment for important items.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tmcase.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'tmvpass',
    {
      name: 'TMV Pass',
      gen: 6,
      desc: 'A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tmvpass.png',
      keyItem: true
    }
  ],
  [
    'tea',
    {
      name: 'tea',
      gen: 3,
      desc: 'Aromatic tea that has a slightly bitter taste. It soothes a dry throat.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tea.png',
      keyItem: true
    }
  ],
  [
    'teachytv',
    {
      name: 'Teachy TV',
      gen: 3,
      desc: 'A television set that is tuned to a program with useful tips for novice Trainers.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/teachytv.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'tidalbell',
    {
      name: 'Tidal Bell',
      gen: 1,
      desc: 'A very old-fashioned bell that makes a gentle ringing sound.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tidalbell.png',
      keyItem: true
    }
  ],
  [
    'townmap',
    {
      name: 'Town Map',
      gen: 1,
      desc: 'A very convenient map that can be viewed anytime. It even shows you your present location in the region.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/townmap.png',
      keyItem: true
    }
  ],
  [
    'traveltrunk',
    {
      name: 'Travel Trunk',
      gen: 6,
      desc: 'A light and yet incredibly effective trunk, which can contain every last piece of clothing that can be bought.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/traveltrunk.png',
      keyItem: true
    }
  ],
  [
    'tripass',
    {
      name: 'tripass',
      gen: 3,
      desc: 'A pass for ferries between One, Two, and Three Island. It has a drawing of three islands.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tripass.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'unownreport',
    {
      name: 'Unown Report',
      gen: 4,
      desc: 'A report of all the discovered kinds of Unown.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/unownreport.png',
      keyItem: true
    }
  ],
  [
    'vsrecorder',
    {
      name: 'Vs. Recorder',
      gen: 5,
      desc: 'An amazing device that can record a battle between friends or the battles at certain special battle facilities.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/vs.recorder.png',
      keyItem: true
    }
  ],
  [
    'vsseeker',
    {
      name: 'Vs. Seeker',
      gen: 3,
      desc: 'A device that indicates Trainers who want to battle. Its battery charges while you walk.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/vs.seeker.png',
      keyItem: true
    }
  ],
  [
    'wailmerpail',
    {
      name: 'Wailmer Pail',
      gen: 3,
      desc: 'This is a tool for watering Berries you planted to make them grow more quickly.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/wailmerpail.png',
      keyItem: true,
      isNonstandard: 'Past'
    }
  ],
  [
    'wishingstar',
    {
      name: 'Wishing Star',
      gen: 8,
      desc: "A stone found in the Galar region with a mysterious power. It's said that your dreams come true if you find one.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/wishingstar.png',
      keyItem: true
    }
  ],
  [
    'workskey',
    {
      name: 'Works Key',
      gen: 4,
      desc: 'A large key for operating the doors of the Valley Windworks in the canyon. It was held by a Team Galactic Grunt.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/workskey.png',
      keyItem: true
    }
  ],
  [
    'xtransceiver',
    {
      name: 'Xtransceiver',
      gen: 5,
      desc: 'A high-tech transceiver with a camera function. It allows up to four-way calls.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/xtransceiver.png',
      keyItem: true
    }
  ],
  [
    'yellowpetal',
    {
      name: 'Yellow Petal',
      gen: 7,
      desc: "A pressed flower petal you receive from Ilima during Mina's trial. The goal is to collect seven different kinds of petals.",
      specialSprite: 'https://www.serebii.net/itemdex/sprites/yellowpetal.png',
      keyItem: true
    }
  ],
  [
    'zpowering',
    {
      name: 'Z-Power Ring',
      gen: 7,
      desc: 'A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/z-powerring.png',
      keyItem: true
    }
  ],
  [
    'zring',
    {
      name: 'Z-Ring',
      gen: 7,
      desc: 'A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/z-ring.png',
      keyItem: true
    }
  ],
  [
    'zygardecube',
    {
      name: 'Zygarde Cube',
      gen: 7,
      desc: 'An item to store Zygarde Cores and Cells. You can also use it to teach Zygarde moves.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/zygardecube.png',
      keyItem: true
    }
  ]
]);
