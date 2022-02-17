import { GraphQLCollection } from '#utils/GraphQLCollection';
import type { PokemonTypes } from '#utils/pokemon';

/** The item in Pokémon */
export const items = new GraphQLCollection<string, PokemonTypes.Item>([
  [
    'abomasite',
    {
      desc: 'If held by an Abomasnow, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Abomasite'
    }
  ],
  [
    'absolite',
    {
      desc: 'If held by an Absol, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Absolite'
    }
  ],
  [
    'absorbbulb',
    {
      desc: "Raises holder's Sp. Atk by 1 stage if hit by a Water-type attack. Single use.",
      gen: 5,
      name: 'Absorb Bulb'
    }
  ],
  [
    'adamantorb',
    {
      desc: 'If held by a Dialga, its Steel- and Dragon-type attacks have 1.2x power.',
      gen: 4,
      name: 'Adamant Orb'
    }
  ],
  [
    'adrenalineorb',
    {
      desc: "Raises holder's Speed by 1 stage if it gets affected by Intimidate. Single use.",
      gen: 7,
      name: 'Adrenaline Orb'
    }
  ],
  [
    'aerodactylite',
    {
      desc: 'If held by an Aerodactyl, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Aerodactylite'
    }
  ],
  [
    'aggronite',
    {
      desc: 'If held by an Aggron, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Aggronite'
    }
  ],
  [
    'aguavberry',
    {
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.',
      gen: 3,
      name: 'Aguav Berry'
    }
  ],
  [
    'airballoon',
    {
      desc: 'Holder is immune to Ground-type attacks. Pops when holder is hit.',
      gen: 5,
      name: 'Air Balloon'
    }
  ],
  [
    'alakazite',
    {
      desc: 'If held by an Alakazam, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Alakazite'
    }
  ],
  [
    'aloraichiumz',
    {
      desc: 'If held by an Alolan Raichu with Thunderbolt, it can use Stoked Sparksurfer.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Aloraichium Z'
    }
  ],
  [
    'altarianite',
    {
      desc: 'If held by an Altaria, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Altarianite'
    }
  ],
  [
    'ampharosite',
    {
      desc: 'If held by an Ampharos, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Ampharosite'
    }
  ],
  [
    'apicotberry',
    {
      desc: "Raises holder's Sp. Def by 1 stage when at 1/4 max HP or less. Single use.",
      gen: 3,
      name: 'Apicot Berry'
    }
  ],
  [
    'armorfossil',
    {
      desc: 'Can be revived into Shieldon.',
      gen: 4,
      isNonstandard: 'Past',
      name: 'Armor Fossil'
    }
  ],
  [
    'aspearberry',
    {
      desc: 'Holder is cured if it is frozen. Single use.',
      gen: 3,
      name: 'Aspear Berry'
    }
  ],
  [
    'assaultvest',
    {
      desc: "Holder's Sp. Def is 1.5x, but it can only select damaging moves.",
      gen: 6,
      name: 'Assault Vest',
      aliases: ['assvest', 'av']
    }
  ],
  [
    'audinite',
    {
      desc: 'If held by an Audino, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Audinite'
    }
  ],
  [
    'babiriberry',
    {
      desc: 'Halves damage taken from a supereffective Steel-type attack. Single use.',
      gen: 4,
      name: 'Babiri Berry'
    }
  ],
  [
    'banettite',
    {
      desc: 'If held by a Banette, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Banettite'
    }
  ],
  [
    'beastball',
    {
      desc: 'A special Poké Ball designed to catch Ultra Beasts.',
      gen: 7,
      name: 'Beast Ball'
    }
  ],
  [
    'beedrillite',
    {
      desc: 'If held by a Beedrill, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Beedrillite'
    }
  ],
  [
    'belueberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Belue Berry'
    }
  ],
  [
    'berry',
    {
      desc: '(Gen 2) Restores 10 HP when at 1/2 max HP or less. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Berry'
    }
  ],
  [
    'berryjuice',
    {
      desc: 'Restores 20 HP when at 1/2 max HP or less. Single use.',
      gen: 2,
      name: 'Berry Juice'
    }
  ],
  [
    'berrysweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Berry Sweet'
    }
  ],
  [
    'berserkgene',
    {
      desc: "(Gen 2) On switch-in, raises holder's Attack by 2 and confuses it. Single use.",
      gen: 2,
      isNonstandard: 'Past',
      name: 'Berserk Gene'
    }
  ],
  [
    'bigroot',
    {
      desc: 'Holder gains 1.3x HP from draining/Aqua Ring/Ingrain/Leech Seed/Strength Sap.',
      gen: 4,
      name: 'Big Root'
    }
  ],
  [
    'bindingband',
    {
      desc: "Holder's partial-trapping moves deal 1/6 max HP per turn instead of 1/8.",
      gen: 5,
      name: 'Binding Band'
    }
  ],
  [
    'bitterberry',
    {
      desc: '(Gen 2) Holder is cured if it is confused. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Bitter Berry'
    }
  ],
  [
    'blackbelt',
    {
      desc: "Holder's Fighting-type attacks have 1.2x power.",
      gen: 2,
      name: 'Black Belt'
    }
  ],
  [
    'blackglasses',
    {
      desc: "Holder's Dark-type attacks have 1.2x power.",
      gen: 2,
      name: 'Black Glasses'
    }
  ],
  [
    'blacksludge',
    {
      desc: 'Each turn, if holder is a Poison type, restores 1/16 max HP; loses 1/8 if not.',
      gen: 4,
      name: 'Black Sludge'
    }
  ],
  [
    'blastoisinite',
    {
      desc: 'If held by a Blastoise, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Blastoisinite'
    }
  ],
  [
    'blazikenite',
    {
      desc: 'If held by a Blaziken, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Blazikenite'
    }
  ],
  [
    'blueorb',
    {
      desc: "A shiny blue orb that is said to have a legend tied to it. It's known to have a deep connection with the Hoenn region.",
      gen: 3,
      keyItem: true,
      name: 'Blue Orb',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/blueorb.png'
    }
  ],
  [
    'blukberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Bluk Berry'
    }
  ],
  [
    'blunderpolicy',
    {
      desc: 'If the holder misses due to accuracy, its Speed is raised by 2 stages. Single use.',
      gen: 8,
      name: 'Blunder Policy'
    }
  ],
  [
    'bottlecap',
    {
      desc: "Used for Hyper Training. One of a Pokémon's stats is calculated with an IV of 31.",
      gen: 7,
      name: 'Bottle Cap'
    }
  ],
  [
    'brightpowder',
    {
      desc: 'The accuracy of attacks against the holder is 0.9x.',
      gen: 2,
      name: 'BrightPowder'
    }
  ],
  [
    'buggem',
    {
      desc: "Holder's first successful Bug-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Bug Gem'
    }
  ],
  [
    'bugmemory',
    {
      desc: "Holder's Multi-Attack is Bug type.",
      gen: 7,
      name: 'Bug Memory'
    }
  ],
  [
    'buginiumz',
    {
      desc: 'If holder has a Bug move, this item allows it to use a Bug Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Buginium Z'
    }
  ],
  [
    'burndrive',
    {
      desc: "Holder's Techno Blast is Fire type.",
      gen: 5,
      name: 'Burn Drive'
    }
  ],
  [
    'burntberry',
    {
      desc: '(Gen 2) Holder is cured if it is frozen. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Burnt Berry'
    }
  ],
  [
    'cameruptite',
    {
      desc: 'If held by a Camerupt, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Cameruptite'
    }
  ],
  [
    'cellbattery',
    {
      desc: "Raises holder's Attack by 1 if hit by an Electric-type attack. Single use.",
      gen: 5,
      name: 'Cell Battery'
    }
  ],
  [
    'charcoal',
    {
      desc: "Holder's Fire-type attacks have 1.2x power.",
      gen: 2,
      name: 'Charcoal'
    }
  ],
  [
    'charizarditex',
    {
      desc: 'If held by a Charizard, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Charizardite X'
    }
  ],
  [
    'charizarditey',
    {
      desc: 'If held by a Charizard, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Charizardite Y'
    }
  ],
  [
    'chartiberry',
    {
      desc: 'Halves damage taken from a supereffective Rock-type attack. Single use.',
      gen: 4,
      name: 'Charti Berry'
    }
  ],
  [
    'cheriberry',
    {
      desc: 'Holder cures itself if it is paralyzed. Single use.',
      gen: 3,
      name: 'Cheri Berry'
    }
  ],
  [
    'cherishball',
    {
      desc: 'A rare Poké Ball that has been crafted to commemorate an occasion.',
      gen: 4,
      name: 'Cherish Ball'
    }
  ],
  [
    'chestoberry',
    {
      desc: 'Holder wakes up if it is asleep. Single use.',
      gen: 3,
      name: 'Chesto Berry',
      aliases: ['chesto']
    }
  ],
  [
    'chilanberry',
    {
      desc: 'Halves damage taken from a Normal-type attack. Single use.',
      gen: 4,
      name: 'Chilan Berry'
    }
  ],
  [
    'chilldrive',
    {
      desc: "Holder's Techno Blast is Ice type.",
      gen: 5,
      name: 'Chill Drive'
    }
  ],
  [
    'chippedpot',
    {
      desc: 'Evolves Sinistea-Antique into Polteageist-Antique when used.',
      gen: 8,
      name: 'Chipped Pot'
    }
  ],
  [
    'choiceband',
    {
      desc: "Holder's Attack is 1.5x, but it can only select the first move it executes.",
      gen: 3,
      name: 'Choice Band',
      aliases: ['band', 'cb']
    }
  ],
  [
    'choicescarf',
    {
      desc: "Holder's Speed is 1.5x, but it can only select the first move it executes.",
      gen: 4,
      name: 'Choice Scarf',
      aliases: ['scarf']
    }
  ],
  [
    'choicespecs',
    {
      desc: "Holder's Sp. Atk is 1.5x, but it can only select the first move it executes.",
      gen: 4,
      name: 'Choice Specs',
      aliases: ['specs']
    }
  ],
  [
    'chopleberry',
    {
      desc: 'Halves damage taken from a supereffective Fighting-type attack. Single use.',
      gen: 4,
      name: 'Chople Berry',
      aliases: ['chople']
    }
  ],
  [
    'clawfossil',
    {
      desc: 'Can be revived into Anorith.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Claw Fossil'
    }
  ],
  [
    'cloversweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Clover Sweet'
    }
  ],
  [
    'cobaberry',
    {
      desc: 'Halves damage taken from a supereffective Flying-type attack. Single use.',
      gen: 4,
      name: 'Coba Berry'
    }
  ],
  [
    'colburberry',
    {
      desc: 'Halves damage taken from a supereffective Dark-type attack. Single use.',
      gen: 4,
      name: 'Colbur Berry'
    }
  ],
  [
    'cornnberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Cornn Berry'
    }
  ],
  [
    'coverfossil',
    {
      desc: 'Can be revived into Tirtouga.',
      gen: 5,
      isNonstandard: 'Past',
      name: 'Cover Fossil'
    }
  ],
  [
    'crucibellite',
    {
      desc: 'If held by a Crucibelle, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Crucibellite'
    }
  ],
  [
    'crackedpot',
    {
      desc: 'Evolves Sinistea-Chipped into Polteageist-Chipped when used.',
      gen: 8,
      name: 'Cracked Pot'
    }
  ],
  [
    'custapberry',
    {
      desc: 'Holder moves first in its priority bracket when at 1/4 max HP or less. Single use.',
      gen: 4,
      name: 'Custap Berry',
      aliases: ['custap']
    }
  ],
  [
    'damprock',
    {
      desc: "Holder's use of Rain Dance lasts 8 turns instead of 5.",
      gen: 4,
      name: 'Damp Rock'
    }
  ],
  [
    'darkgem',
    {
      desc: "Holder's first successful Dark-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Dark Gem'
    }
  ],
  [
    'darkmemory',
    {
      desc: "Holder's Multi-Attack is Dark type.",
      gen: 7,
      name: 'Dark Memory'
    }
  ],
  [
    'darkiniumz',
    {
      desc: 'If holder has a Dark move, this item allows it to use a Dark Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Darkinium Z'
    }
  ],
  [
    'dawnstone',
    {
      desc: 'Evolves male Kirlia into Gallade and female Snorunt into Froslass when used.',
      gen: 4,
      name: 'Dawn Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'decidiumz',
    {
      desc: 'If held by a Decidueye with Spirit Shackle, it can use Sinister Arrow Raid.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Decidium Z'
    }
  ],
  [
    'deepseascale',
    {
      desc: 'If held by a Clamperl, its Sp. Def is doubled. Evolves Clamperl into Gorebyss when traded.',
      gen: 3,
      name: 'Deep Sea Scale',
      shortDesc: 'If held by a Clamperl, its Sp. Def is doubled.'
    }
  ],
  [
    'deepseatooth',
    {
      desc: 'If held by a Clamperl, its Sp. Atk is doubled. Evolves Clamperl into Huntail when traded.',
      gen: 3,
      name: 'Deep Sea Tooth',
      shortDesc: 'If held by a Clamperl, its Sp. Atk is doubled.'
    }
  ],
  [
    'destinyknot',
    {
      desc: 'If holder becomes infatuated, the other Pokémon also becomes infatuated.',
      gen: 4,
      name: 'Destiny Knot'
    }
  ],
  [
    'diancite',
    {
      desc: 'If held by a Diancie, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Diancite'
    }
  ],
  [
    'diveball',
    {
      desc: 'A Poké Ball that works especially well on Pokémon that live underwater.',
      gen: 3,
      name: 'Dive Ball'
    }
  ],
  [
    'domefossil',
    {
      desc: 'Can be revived into Kabuto.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Dome Fossil'
    }
  ],
  [
    'dousedrive',
    {
      desc: "Holder's Techno Blast is Water type.",
      gen: 5,
      name: 'Douse Drive'
    }
  ],
  [
    'dracoplate',
    {
      desc: "Holder's Dragon-type attacks have 1.2x power. Judgment is Dragon type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Draco Plate'
    }
  ],
  [
    'dragonfang',
    {
      desc: "Holder's Dragon-type attacks have 1.2x power.",
      gen: 2,
      name: 'Dragon Fang'
    }
  ],
  [
    'dragongem',
    {
      desc: "Holder's first successful Dragon-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Dragon Gem'
    }
  ],
  [
    'dragonmemory',
    {
      desc: "Holder's Multi-Attack is Dragon type.",
      gen: 7,
      name: 'Dragon Memory'
    }
  ],
  [
    'dragonscale',
    {
      desc: 'Evolves Seadra into Kingdra when traded.',
      gen: 2,
      name: 'Dragon Scale'
    }
  ],
  [
    'dragoniumz',
    {
      desc: 'If holder has a Dragon move, this item allows it to use a Dragon Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Dragonium Z'
    }
  ],
  [
    'dreadplate',
    {
      desc: "Holder's Dark-type attacks have 1.2x power. Judgment is Dark type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Dread Plate'
    }
  ],
  [
    'dreamball',
    {
      desc: "A Poké Ball that makes it easier to catch wild Pokémon while they're asleep.",
      gen: 5,
      name: 'Dream Ball'
    }
  ],
  [
    'dubiousdisc',
    {
      desc: 'Evolves Porygon2 into Porygon-Z when traded.',
      gen: 4,
      name: 'Dubious Disc'
    }
  ],
  [
    'durinberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Durin Berry'
    }
  ],
  [
    'duskball',
    {
      desc: 'A Poké Ball that makes it easier to catch wild Pokémon at night or in caves.',
      gen: 4,
      name: 'Dusk Ball'
    }
  ],
  [
    'duskstone',
    {
      desc: 'Evolves Murkrow into Honchkrow, Misdreavus into Mismagius, Lampent into Chandelure, and Doublade into Aegislash when used.',
      gen: 4,
      name: 'Dusk Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'earthplate',
    {
      desc: "Holder's Ground-type attacks have 1.2x power. Judgment is Ground type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Earth Plate'
    }
  ],
  [
    'eeviumz',
    {
      desc: 'If held by an Eevee with Last Resort, it can use Extreme Evoboost.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Eevium Z'
    }
  ],
  [
    'ejectbutton',
    {
      desc: 'If holder survives a hit, it immediately switches out to a chosen ally. Single use.',
      gen: 5,
      name: 'Eject Button'
    }
  ],
  [
    'ejectpack',
    {
      desc: "If the holder's stat stages are lowered, it switches to a chosen ally. Single use.",
      gen: 8,
      name: 'Eject Pack'
    }
  ],
  [
    'electirizer',
    {
      desc: 'Evolves Electabuzz into Electivire when traded.',
      gen: 4,
      name: 'Electirizer'
    }
  ],
  [
    'electricgem',
    {
      desc: "Holder's first successful Electric-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Electric Gem'
    }
  ],
  [
    'electricmemory',
    {
      desc: "Holder's Multi-Attack is Electric type.",
      gen: 7,
      name: 'Electric Memory'
    }
  ],
  [
    'electricseed',
    {
      desc: "If the terrain is Electric Terrain, raises holder's Defense by 1 stage. Single use.",
      gen: 7,
      name: 'Electric Seed'
    }
  ],
  [
    'electriumz',
    {
      desc: 'If holder has an Electric move, this item allows it to use an Electric Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Electrium Z'
    }
  ],
  [
    'energypowder',
    {
      desc: 'Restores 60 HP to one Pokémon.',
      gen: 2,
      name: 'Energy Powder'
    }
  ],
  [
    'enigmaberry',
    {
      desc: 'Restores 1/4 max HP after holder is hit by a supereffective move. Single use.',
      gen: 3,
      name: 'Enigma Berry'
    }
  ],
  [
    'eviolite',
    {
      desc: "If holder's species can evolve, its Defense and Sp. Def are 1.5x.",
      gen: 5,
      name: 'Eviolite'
    }
  ],
  [
    'expertbelt',
    {
      desc: "Holder's attacks that are super effective against the target do 1.2x damage.",
      gen: 4,
      name: 'Expert Belt',
      aliases: ['ebelt']
    }
  ],
  [
    'fairiumz',
    {
      desc: 'If holder has a Fairy move, this item allows it to use a Fairy Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Fairium Z'
    }
  ],
  [
    'fairygem',
    {
      desc: "Holder's first successful Fairy-type attack will have 1.3x power. Single use.",
      gen: 6,
      isNonstandard: 'Past',
      name: 'Fairy Gem'
    }
  ],
  [
    'fairymemory',
    {
      desc: "Holder's Multi-Attack is Fairy type.",
      gen: 7,
      name: 'Fairy Memory'
    }
  ],
  [
    'fastball',
    {
      desc: 'A Poké Ball that makes it easier to catch Pokémon which are quick to run away.',
      gen: 2,
      name: 'Fast Ball'
    }
  ],
  [
    'fightinggem',
    {
      desc: "Holder's first successful Fighting-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Fighting Gem',
      aliases: ['fightgem']
    }
  ],
  [
    'fightingmemory',
    {
      desc: "Holder's Multi-Attack is Fighting type.",
      gen: 7,
      name: 'Fighting Memory'
    }
  ],
  [
    'fightiniumz',
    {
      desc: 'If holder has a Fighting move, this item allows it to use a Fighting Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Fightinium Z'
    }
  ],
  [
    'figyberry',
    {
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use.',
      gen: 3,
      name: 'Figy Berry'
    }
  ],
  [
    'firegem',
    {
      desc: "Holder's first successful Fire-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Fire Gem'
    }
  ],
  [
    'firememory',
    {
      desc: "Holder's Multi-Attack is Fire type.",
      gen: 7,
      name: 'Fire Memory'
    }
  ],
  [
    'firestone',
    {
      desc: 'Evolves Vulpix into Ninetales, Growlithe into Arcanine, Eevee into Flareon, and Pansear into Simisear when used.',
      gen: 1,
      name: 'Fire Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'firiumz',
    {
      desc: 'If holder has a Fire move, this item allows it to use a Fire Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Firium Z'
    }
  ],
  [
    'fistplate',
    {
      desc: "Holder's Fighting-type attacks have 1.2x power. Judgment is Fighting type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Fist Plate'
    }
  ],
  [
    'flameorb',
    {
      desc: 'At the end of every turn, this item attempts to burn the holder.',
      gen: 4,
      name: 'Flame Orb'
    }
  ],
  [
    'flameplate',
    {
      desc: "Holder's Fire-type attacks have 1.2x power. Judgment is Fire type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Flame Plate'
    }
  ],
  ['floatstone', { desc: "Holder's weight is halved.", gen: 5, name: 'Float Stone' }],
  [
    'flowersweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Flower Sweet'
    }
  ],
  [
    'flyinggem',
    {
      desc: "Holder's first successful Flying-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Flying Gem',
      aliases: ['flightgem']
    }
  ],
  [
    'flyingmemory',
    {
      desc: "Holder's Multi-Attack is Flying type.",
      gen: 7,
      name: 'Flying Memory'
    }
  ],
  [
    'flyiniumz',
    {
      desc: 'If holder has a Flying move, this item allows it to use a Flying Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Flyinium Z'
    }
  ],
  [
    'focusband',
    {
      desc: 'Holder has a 10% chance to survive an attack that would KO it with 1 HP.',
      gen: 2,
      name: 'Focus Band'
    }
  ],
  [
    'focussash',
    {
      desc: "If holder's HP is full, will survive an attack that would KO it with 1 HP. Single use.",
      gen: 4,
      name: 'Focus Sash',
      aliases: ['sash']
    }
  ],
  [
    'fossilizedbird',
    {
      desc: 'Can revive into Arctovish with Fossilized Fish or Arctozolt with Fossilized Dino.',
      gen: 8,
      name: 'Fossilized Bird'
    }
  ],
  [
    'fossilizeddino',
    {
      desc: 'Can revive into Dracozolt with Fossilized Drake or Arctozolt with Fossilized Bird.',
      gen: 8,
      name: 'Fossilized Dino'
    }
  ],
  [
    'fossilizeddrake',
    {
      desc: 'Can revive into Dracozolt with Fossilized Dino or Dracovish with Fossilized Fish.',
      gen: 8,
      name: 'Fossilized Drake'
    }
  ],
  [
    'fossilizedfish',
    {
      desc: 'Can revive into Dracovish with Fossilized Drake or Arctovish with Fossilized Bird.',
      gen: 8,
      name: 'Fossilized Fish'
    }
  ],
  [
    'friendball',
    {
      desc: 'A Poké Ball that makes caught Pokémon more friendly.',
      gen: 2,
      name: 'Friend Ball'
    }
  ],
  [
    'fullincense',
    {
      desc: 'Holder moves last in its priority bracket.',
      gen: 4,
      name: 'Full Incense'
    }
  ],
  [
    'fullrestore',
    {
      desc: 'A medicine that can be used to fully restore the HP of a single Pokémon and heal any status conditions it has. ',
      gen: 1,
      name: 'Full Restore'
    }
  ],
  [
    'galaricacuff',
    {
      desc: 'Evolves Galarian Slowpoke into Galarian Slowbro when used.',
      gen: 8,
      name: 'Galarica Cuff',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/galaricacuff.png'
    }
  ],
  [
    'galaricawreath',
    {
      desc: 'Evolves Galarian Slowpoke into Galarian Slowking when used.',
      gen: 8,
      name: 'Galarica Wreath',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/galaricawreath.png'
    }
  ],
  [
    'galladite',
    {
      desc: 'If held by a Gallade, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Galladite'
    }
  ],
  [
    'ganlonberry',
    {
      desc: "Raises holder's Defense by 1 stage when at 1/4 max HP or less. Single use.",
      gen: 3,
      name: 'Ganlon Berry'
    }
  ],
  [
    'garchompite',
    {
      desc: 'If held by a Garchomp, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Garchompite'
    }
  ],
  [
    'gardevoirite',
    {
      desc: 'If held by a Gardevoir, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Gardevoirite'
    }
  ],
  [
    'gengarite',
    {
      desc: 'If held by a Gengar, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Gengarite'
    }
  ],
  [
    'ghostgem',
    {
      desc: "Holder's first successful Ghost-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Ghost Gem'
    }
  ],
  [
    'ghostmemory',
    {
      desc: "Holder's Multi-Attack is Ghost type.",
      gen: 7,
      name: 'Ghost Memory'
    }
  ],
  [
    'ghostiumz',
    {
      desc: 'If holder has a Ghost move, this item allows it to use a Ghost Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Ghostium Z'
    }
  ],
  [
    'glalitite',
    {
      desc: 'If held by a Glalie, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Glalitite'
    }
  ],
  [
    'goldberry',
    {
      desc: '(Gen 2) Restores 30 HP when at 1/2 max HP or less. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Gold Berry'
    }
  ],
  [
    'goldbottlecap',
    {
      desc: "Used for Hyper Training. All of a Pokémon's stats are calculated with an IV of 31.",
      gen: 7,
      name: 'Gold Bottle Cap'
    }
  ],
  [
    'grassgem',
    {
      desc: "Holder's first successful Grass-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Grass Gem'
    }
  ],
  [
    'grassmemory',
    {
      desc: "Holder's Multi-Attack is Grass type.",
      gen: 7,
      name: 'Grass Memory'
    }
  ],
  [
    'grassiumz',
    {
      desc: 'If holder has a Grass move, this item allows it to use a Grass Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Grassium Z'
    }
  ],
  [
    'grassyseed',
    {
      desc: "If the terrain is Grassy Terrain, raises holder's Defense by 1 stage. Single use.",
      gen: 7,
      name: 'Grassy Seed'
    }
  ],
  [
    'greatball',
    {
      desc: 'A high-performance Ball that provides a higher catch rate than a Poké Ball.',
      gen: 1,
      name: 'Great Ball'
    }
  ],
  [
    'grepaberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Grepa Berry'
    }
  ],
  [
    'gripclaw',
    {
      desc: "Holder's partial-trapping moves always last 7 turns.",
      gen: 4,
      name: 'Grip Claw'
    }
  ],
  [
    'griseousorb',
    {
      desc: 'If held by a Giratina, its Ghost- and Dragon-type attacks have 1.2x power.',
      gen: 4,
      name: 'Griseous Orb'
    }
  ],
  [
    'groundgem',
    {
      desc: "Holder's first successful Ground-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Ground Gem'
    }
  ],
  [
    'groundmemory',
    {
      desc: "Holder's Multi-Attack is Ground type.",
      gen: 7,
      name: 'Ground Memory'
    }
  ],
  [
    'groundiumz',
    {
      desc: 'If holder has a Ground move, this item allows it to use a Ground Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Groundium Z'
    }
  ],
  [
    'gyaradosite',
    {
      desc: 'If held by a Gyarados, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Gyaradosite'
    }
  ],
  [
    'habanberry',
    {
      desc: 'Halves damage taken from a supereffective Dragon-type attack. Single use.',
      gen: 4,
      name: 'Haban Berry'
    }
  ],
  [
    'hardstone',
    {
      desc: "Holder's Rock-type attacks have 1.2x power.",
      gen: 2,
      name: 'Hard Stone'
    }
  ],
  [
    'healball',
    {
      desc: "A remedial Poké Ball that restores the caught Pokémon's HP and status problem.",
      gen: 4,
      name: 'Heal Ball'
    }
  ],
  [
    'heatrock',
    {
      desc: "Holder's use of Sunny Day lasts 8 turns instead of 5.",
      gen: 4,
      name: 'Heat Rock'
    }
  ],
  [
    'heavyball',
    {
      desc: 'A Poké Ball for catching very heavy Pokémon.',
      gen: 2,
      name: 'Heavy Ball'
    }
  ],
  [
    'heavydutyboots',
    {
      desc: 'When switching in, the holder is unaffected by hazards on its side of the field.',
      gen: 8,
      name: 'Heavy-Duty Boots',
      aliases: ['boots', 'hdb']
    }
  ],
  [
    'helixfossil',
    {
      desc: 'Can be revived into Omanyte.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Helix Fossil'
    }
  ],
  [
    'heracronite',
    {
      desc: 'If held by a Heracross, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Heracronite'
    }
  ],
  [
    'hondewberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Hondew Berry'
    }
  ],
  [
    'houndoominite',
    {
      desc: 'If held by a Houndoom, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Houndoominite'
    }
  ],
  [
    'hyperpotion',
    {
      desc: 'A spray-type medicine for treating wounds. It can be used to restore 120 HP to a single Pokémon.',
      gen: 1,
      name: 'Hyper Potion'
    }
  ],
  [
    'iapapaberry',
    {
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -Def Nature. Single use.',
      gen: 3,
      name: 'Iapapa Berry'
    }
  ],
  [
    'iceberry',
    {
      desc: '(Gen 2) Holder is cured if it is burned. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Ice Berry'
    }
  ],
  [
    'icegem',
    {
      desc: "Holder's first successful Ice-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Ice Gem'
    }
  ],
  [
    'icememory',
    {
      desc: "Holder's Multi-Attack is Ice type.",
      gen: 7,
      name: 'Ice Memory'
    }
  ],
  [
    'icestone',
    {
      desc: 'Evolves Alolan Sandshrew into Alolan Sandslash, Alolan Vulpix into Alolan Ninetales, and Eevee into Glaceon when used.',
      gen: 7,
      name: 'Ice Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'icicleplate',
    {
      desc: "Holder's Ice-type attacks have 1.2x power. Judgment is Ice type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Icicle Plate'
    }
  ],
  [
    'iciumz',
    {
      desc: 'If holder has an Ice move, this item allows it to use an Ice Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Icium Z'
    }
  ],
  [
    'icyrock',
    {
      desc: "Holder's use of Hail lasts 8 turns instead of 5.",
      gen: 4,
      name: 'Icy Rock'
    }
  ],
  [
    'inciniumz',
    {
      desc: 'If held by an Incineroar with Darkest Lariat, it can use Malicious Moonsault.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Incinium Z'
    }
  ],
  [
    'insectplate',
    {
      desc: "Holder's Bug-type attacks have 1.2x power. Judgment is Bug type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Insect Plate'
    }
  ],
  [
    'ironball',
    {
      desc: 'Holder is grounded, Speed halved. If Flying type, takes neutral Ground damage.',
      gen: 4,
      name: 'Iron Ball'
    }
  ],
  [
    'ironplate',
    {
      desc: "Holder's Steel-type attacks have 1.2x power. Judgment is Steel type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Iron Plate'
    }
  ],
  [
    'jabocaberry',
    {
      desc: 'If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use.',
      gen: 4,
      name: 'Jaboca Berry'
    }
  ],
  [
    'jawfossil',
    {
      desc: 'Can be revived into Tyrunt.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Jaw Fossil'
    }
  ],
  [
    'kangaskhanite',
    {
      desc: 'If held by a Kangaskhan, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Kangaskhanite'
    }
  ],
  [
    'kasibberry',
    {
      desc: 'Halves damage taken from a supereffective Ghost-type attack. Single use.',
      gen: 4,
      name: 'Kasib Berry'
    }
  ],
  [
    'kebiaberry',
    {
      desc: 'Halves damage taken from a supereffective Poison-type attack. Single use.',
      gen: 4,
      name: 'Kebia Berry'
    }
  ],
  [
    'keeberry',
    {
      desc: "Raises holder's Defense by 1 stage after it is hit by a physical attack. Single use.",
      gen: 6,
      name: 'Kee Berry'
    }
  ],
  [
    'kelpsyberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Kelpsy Berry'
    }
  ],
  [
    'kingsrock',
    {
      desc: "Holder's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch. Evolves Poliwhirl into Politoed and Slowpoke into Slowking when traded.",
      gen: 2,
      name: "King's Rock",
      shortDesc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
    }
  ],
  [
    'kommoniumz',
    {
      desc: 'If held by a Kommo-o with Clanging Scales, it can use Clangorous Soulblaze.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Kommonium Z'
    }
  ],
  [
    'laggingtail',
    {
      desc: 'Holder moves last in its priority bracket.',
      gen: 4,
      name: 'Lagging Tail'
    }
  ],
  [
    'lansatberry',
    {
      desc: 'Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use.',
      gen: 3,
      name: 'Lansat Berry'
    }
  ],
  [
    'latiasite',
    {
      desc: 'If held by a Latias, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Latiasite'
    }
  ],
  [
    'latiosite',
    {
      desc: 'If held by a Latios, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Latiosite'
    }
  ],
  [
    'laxincense',
    {
      desc: 'The accuracy of attacks against the holder is 0.9x.',
      gen: 3,
      name: 'Lax Incense'
    }
  ],
  [
    'leafstone',
    {
      desc: 'Evolves Gloom into Vileplume, Weepinbell into Victreebel, Exeggcute into Exeggutor or Alolan Exeggutor, Eevee into Leafeon, Nuzleaf into Shiftry, and Pansage into Simisage when used.',
      gen: 1,
      name: 'Leaf Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'leek',
    {
      desc: "If held by a Farfetch'd or Sirfetch'd, its critical hit ratio is raised by 2 stages.",
      gen: 8,
      name: 'Leek'
    }
  ],
  [
    'leftovers',
    {
      desc: 'At the end of every turn, holder restores 1/16 of its max HP.',
      gen: 2,
      name: 'Leftovers',
      aliases: ['lefties']
    }
  ],
  [
    'leppaberry',
    {
      desc: "Restores 10 PP to the first of the holder's moves to reach 0 PP. Single use.",
      gen: 3,
      name: 'Leppa Berry',
      aliases: ['leppa']
    }
  ],
  [
    'levelball',
    {
      desc: 'A Poké Ball for catching Pokémon that are a lower level than your own.',
      gen: 2,
      name: 'Level Ball'
    }
  ],
  [
    'liechiberry',
    {
      desc: "Raises holder's Attack by 1 stage when at 1/4 max HP or less. Single use.",
      gen: 3,
      name: 'Liechi Berry'
    }
  ],
  [
    'lifeorb',
    {
      desc: "Holder's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
      gen: 4,
      name: 'Life Orb',
      aliases: ['lo', 'lorb']
    }
  ],
  [
    'lightball',
    {
      desc: 'If held by a Pikachu, its Attack and Sp. Atk are doubled.',
      gen: 2,
      name: 'Light Ball'
    }
  ],
  [
    'lightclay',
    {
      desc: "Holder's use of Aurora Veil, Light Screen, or Reflect lasts 8 turns instead of 5.",
      gen: 4,
      name: 'Light Clay'
    }
  ],
  [
    'lopunnite',
    {
      desc: 'If held by a Lopunny, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Lopunnite'
    }
  ],
  [
    'loveball',
    {
      desc: 'Poké Ball for catching Pokémon that are the opposite gender of your Pokémon.',
      gen: 2,
      name: 'Love Ball'
    }
  ],
  [
    'lovesweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Love Sweet'
    }
  ],
  [
    'lucarionite',
    {
      desc: 'If held by a Lucario, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Lucarionite'
    }
  ],
  [
    'luckypunch',
    {
      desc: 'If held by a Chansey, its critical hit ratio is raised by 2 stages.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Lucky Punch'
    }
  ],
  [
    'lumberry',
    {
      desc: 'Holder cures itself if it has a non-volatile status or is confused. Single use.',
      gen: 3,
      name: 'Lum Berry',
      aliases: ['lum']
    }
  ],
  [
    'luminousmoss',
    {
      desc: "Raises holder's Sp. Def by 1 stage if hit by a Water-type attack. Single use.",
      gen: 6,
      name: 'Luminous Moss'
    }
  ],
  [
    'lunaliumz',
    {
      desc: 'Lunala or Dawn Wings Necrozma with Moongeist Beam can use a special Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Lunalium Z'
    }
  ],
  [
    'lureball',
    {
      desc: 'A Poké Ball for catching Pokémon hooked by a Rod when fishing.',
      gen: 2,
      name: 'Lure Ball'
    }
  ],
  [
    'lustrousorb',
    {
      desc: 'If held by a Palkia, its Water- and Dragon-type attacks have 1.2x power.',
      gen: 4,
      name: 'Lustrous Orb'
    }
  ],
  [
    'luxuryball',
    {
      desc: 'A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly.',
      gen: 3,
      name: 'Luxury Ball'
    }
  ],
  [
    'lycaniumz',
    {
      desc: 'If held by a Lycanroc forme with Stone Edge, it can use Splintered Stormshards.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Lycanium Z'
    }
  ],
  [
    'machobrace',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 3,
      name: 'Macho Brace'
    }
  ],
  [
    'magmarizer',
    {
      desc: 'Evolves Magmar into Magmortar when traded.',
      gen: 4,
      name: 'Magmarizer'
    }
  ],
  [
    'magnet',
    {
      desc: "Holder's Electric-type attacks have 1.2x power.",
      gen: 2,
      name: 'Magnet'
    }
  ],
  [
    'magoberry',
    {
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -Spe Nature. Single use.',
      gen: 3,
      name: 'Mago Berry'
    }
  ],
  [
    'magostberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Magost Berry'
    }
  ],
  [
    'mail',
    {
      desc: 'Cannot be given to or taken from a Pokémon, except by Covet/Knock Off/Thief.',
      gen: 2,
      name: 'Mail'
    }
  ],
  [
    'manectite',
    {
      desc: 'If held by a Manectric, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Manectite'
    }
  ],
  [
    'marangaberry',
    {
      desc: "Raises holder's Sp. Def by 1 stage after it is hit by a special attack. Single use.",
      gen: 6,
      name: 'Maranga Berry'
    }
  ],
  [
    'marshadiumz',
    {
      desc: 'If held by Marshadow with Spectral Thief, it can use Soul-Stealing 7-Star Strike.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Marshadium Z'
    }
  ],
  [
    'masterball',
    {
      desc: 'The best Ball with the ultimate performance. It will catch any wild Pokémon.',
      gen: 1,
      name: 'Master Ball'
    }
  ],
  [
    'mawilite',
    {
      desc: 'If held by a Mawile, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Mawilite'
    }
  ],
  [
    'maxpotion',
    {
      desc: 'A spray-type medicine for treating wounds. It can be used to completely restore the max HP of a single Pokémon.',
      gen: 1,
      name: 'Max Potion'
    }
  ],
  [
    'meadowplate',
    {
      desc: "Holder's Grass-type attacks have 1.2x power. Judgment is Grass type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Meadow Plate'
    }
  ],
  [
    'medichamite',
    {
      desc: 'If held by a Medicham, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Medichamite'
    }
  ],
  [
    'mentalherb',
    {
      desc: 'Cures holder of Attract, Disable, Encore, Heal Block, Taunt, Torment. Single use.',
      gen: 3,
      name: 'Mental Herb'
    }
  ],
  [
    'metagrossite',
    {
      desc: 'If held by a Metagross, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Metagrossite'
    }
  ],
  [
    'metalcoat',
    {
      desc: "Holder's Steel-type attacks have 1.2x power. Evolves Onix into Steelix and Scyther into Scizor when traded.",
      gen: 2,
      name: 'Metal Coat',
      shortDesc: "Holder's Steel-type attacks have 1.2x power."
    }
  ],
  [
    'metalpowder',
    {
      desc: "If held by a Ditto that hasn't Transformed, its Defense is doubled.",
      gen: 2,
      name: 'Metal Powder'
    }
  ],
  [
    'metronome',
    {
      desc: 'Damage of moves used on consecutive turns is increased. Max 2x after 5 turns.',
      gen: 4,
      name: 'Metronome'
    }
  ],
  [
    'mewniumz',
    {
      desc: 'If held by a Mew with Psychic, it can use Genesis Supernova.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Mewnium Z'
    }
  ],
  [
    'mewtwonitex',
    {
      desc: 'If held by a Mewtwo, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Mewtwonite X'
    }
  ],
  [
    'mewtwonitey',
    {
      desc: 'If held by a Mewtwo, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Mewtwonite Y'
    }
  ],
  [
    'micleberry',
    {
      desc: "Holder's next move has 1.2x accuracy when at 1/4 max HP or less. Single use.",
      gen: 4,
      name: 'Micle Berry'
    }
  ],
  [
    'mimikiumz',
    {
      desc: "If held by a Mimikyu with Play Rough, it can use Let's Snuggle Forever.",
      gen: 7,
      isNonstandard: 'Past',
      name: 'Mimikium Z'
    }
  ],
  [
    'mindplate',
    {
      desc: "Holder's Psychic-type attacks have 1.2x power. Judgment is Psychic type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Mind Plate'
    }
  ],
  [
    'mintberry',
    {
      desc: '(Gen 2) Holder wakes up if it is asleep. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Mint Berry'
    }
  ],
  [
    'miracleberry',
    {
      desc: '(Gen 2) Holder cures itself if it is confused or has a status condition. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'Miracle Berry'
    }
  ],
  [
    'miracleseed',
    {
      desc: "Holder's Grass-type attacks have 1.2x power.",
      gen: 2,
      name: 'Miracle Seed'
    }
  ],
  [
    'mistyseed',
    {
      desc: "If the terrain is Misty Terrain, raises holder's Sp. Def by 1 stage. Single use.",
      gen: 7,
      name: 'Misty Seed'
    }
  ],
  [
    'moonball',
    {
      desc: 'A Poké Ball for catching Pokémon that evolve using the Moon Stone.',
      gen: 2,
      name: 'Moon Ball'
    }
  ],
  [
    'moonstone',
    {
      desc: 'Evolves Nidorina into Nidoqueen, Nidorino into Nidoking, Clefairy into Clefable, Jigglypuff into Wigglytuff, Skitty into Delcatty, and Munna into Musharna when used.',
      gen: 1,
      name: 'Moon Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'muscleband',
    {
      desc: "Holder's physical attacks have 1.1x power.",
      gen: 4,
      name: 'Muscle Band'
    }
  ],
  [
    'mysteryberry',
    {
      desc: "(Gen 2) Restores 5 PP to the first of the holder's moves to reach 0 PP. Single use.",
      gen: 2,
      isNonstandard: 'Past',
      name: 'Mystery Berry'
    }
  ],
  [
    'mysticwater',
    {
      desc: "Holder's Water-type attacks have 1.2x power.",
      gen: 2,
      name: 'Mystic Water'
    }
  ],
  [
    'nanabberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Nanab Berry'
    }
  ],
  [
    'nestball',
    {
      desc: 'A Poké Ball that works especially well on weaker Pokémon in the wild.',
      gen: 3,
      name: 'Nest Ball'
    }
  ],
  [
    'netball',
    {
      desc: 'A Poké Ball that works especially well on Water- and Bug-type Pokémon.',
      gen: 3,
      name: 'Net Ball'
    }
  ],
  [
    'nevermeltice',
    {
      desc: "Holder's Ice-type attacks have 1.2x power.",
      gen: 2,
      name: 'Never-Melt Ice'
    }
  ],
  [
    'nomelberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Nomel Berry'
    }
  ],
  [
    'normalgem',
    {
      desc: "Holder's first successful Normal-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Normal Gem'
    }
  ],
  [
    'normaliumz',
    {
      desc: 'If holder has a Normal move, this item allows it to use a Normal Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Normalium Z'
    }
  ],
  [
    'occaberry',
    {
      desc: 'Halves damage taken from a supereffective Fire-type attack. Single use.',
      gen: 4,
      name: 'Occa Berry',
      aliases: ['occa']
    }
  ],
  [
    'oddincense',
    {
      desc: "Holder's Psychic-type attacks have 1.2x power.",
      gen: 4,
      name: 'Odd Incense'
    }
  ],
  [
    'oldamber',
    {
      desc: 'Can be revived into Aerodactyl.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Old Amber'
    }
  ],
  [
    'oranberry',
    {
      desc: 'Restores 10 HP when at 1/2 max HP or less. Single use.',
      gen: 3,
      name: 'Oran Berry'
    }
  ],
  [
    'ovalstone',
    {
      desc: 'Evolves Happiny into Chansey when held and leveled up during the day.',
      gen: 4,
      name: 'Oval Stone'
    }
  ],
  [
    'przcureberry',
    {
      desc: '(Gen 2) Holder cures itself if it is paralyzed. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'PRZ Cure Berry'
    }
  ],
  [
    'psncureberry',
    {
      desc: '(Gen 2) Holder is cured if it is poisoned. Single use.',
      gen: 2,
      isNonstandard: 'Past',
      name: 'PSN Cure Berry'
    }
  ],
  [
    'pamtreberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Pamtre Berry'
    }
  ],
  [
    'parkball',
    {
      desc: 'A special Poké Ball for the Pal Park.',
      gen: 4,
      name: 'Park Ball'
    }
  ],
  [
    'passhoberry',
    {
      desc: 'Halves damage taken from a supereffective Water-type attack. Single use.',
      gen: 4,
      name: 'Passho Berry'
    }
  ],
  [
    'payapaberry',
    {
      desc: 'Halves damage taken from a supereffective Psychic-type attack. Single use.',
      gen: 4,
      name: 'Payapa Berry'
    }
  ],
  [
    'pechaberry',
    {
      desc: 'Holder is cured if it is poisoned. Single use.',
      gen: 3,
      name: 'Pecha Berry'
    }
  ],
  [
    'persimberry',
    {
      desc: 'Holder is cured if it is confused. Single use.',
      gen: 3,
      name: 'Persim Berry'
    }
  ],
  [
    'petayaberry',
    {
      desc: "Raises holder's Sp. Atk by 1 stage when at 1/4 max HP or less. Single use.",
      gen: 3,
      name: 'Petaya Berry',
      aliases: ['petaya']
    }
  ],
  [
    'pidgeotite',
    {
      desc: 'If held by a Pidgeot, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Pidgeotite'
    }
  ],
  [
    'pikaniumz',
    {
      desc: 'If held by a Pikachu with Volt Tackle, it can use Catastropika.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Pikanium Z'
    }
  ],
  [
    'pikashuniumz',
    {
      desc: 'If held by cap Pikachu with Thunderbolt, it can use 10,000,000 Volt Thunderbolt.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Pikashunium Z'
    }
  ],
  [
    'pinapberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Pinap Berry'
    }
  ],
  [
    'pinkbow',
    {
      desc: "(Gen 2) Holder's Normal-type attacks have 1.1x power.",
      gen: 2,
      isNonstandard: 'Past',
      name: 'Pink Bow'
    }
  ],
  [
    'pinsirite',
    {
      desc: 'If held by a Pinsir, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Pinsirite'
    }
  ],
  [
    'pixieplate',
    {
      desc: "Holder's Fairy-type attacks have 1.2x power. Judgment is Fairy type.",
      gen: 6,
      name: 'Pixie Plate'
    }
  ],
  [
    'plumefossil',
    {
      desc: 'Can be revived into Archen.',
      gen: 5,
      isNonstandard: 'Past',
      name: 'Plume Fossil'
    }
  ],
  [
    'poisonbarb',
    {
      desc: "Holder's Poison-type attacks have 1.2x power.",
      gen: 2,
      name: 'Poison Barb'
    }
  ],
  [
    'poisongem',
    {
      desc: "Holder's first successful Poison-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Poison Gem'
    }
  ],
  [
    'poisonmemory',
    {
      desc: "Holder's Multi-Attack is Poison type.",
      gen: 7,
      name: 'Poison Memory'
    }
  ],
  [
    'poisoniumz',
    {
      desc: 'If holder has a Poison move, this item allows it to use a Poison Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Poisonium Z'
    }
  ],
  [
    'pokeball',
    {
      desc: 'A device for catching wild Pokémon. It is designed as a capsule system.',
      gen: 1,
      name: 'Poké Ball'
    }
  ],
  [
    'polkadotbow',
    {
      desc: "(Gen 2) Holder's Normal-type attacks have 1.1x power.",
      gen: 2,
      isNonstandard: 'Past',
      name: 'Polkadot Bow'
    }
  ],
  [
    'pomegberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Pomeg Berry'
    }
  ],
  [
    'poweranklet',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 4,
      name: 'Power Anklet'
    }
  ],
  [
    'powerband',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 4,
      name: 'Power Band'
    }
  ],
  [
    'potion',
    {
      desc: 'A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.',
      gen: 1,
      name: 'Potion'
    }
  ],
  [
    'powerbelt',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 4,
      name: 'Power Belt'
    }
  ],
  [
    'powerbracer',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 4,
      name: 'Power Bracer'
    }
  ],
  [
    'powerherb',
    {
      desc: "Holder's two-turn moves complete in one turn (except Sky Drop). Single use.",
      gen: 4,
      name: 'Power Herb'
    }
  ],
  [
    'powerlens',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 4,
      name: 'Power Lens'
    }
  ],
  [
    'powerweight',
    {
      desc: "Holder's Speed is halved. The Ability Klutz does not ignore this effect.",
      gen: 4,
      name: 'Power Weight'
    }
  ],
  [
    'premierball',
    {
      desc: 'A rare Poké Ball that has been crafted to commemorate an event.',
      gen: 3,
      name: 'Premier Ball'
    }
  ],
  [
    'primariumz',
    {
      desc: 'If held by a Primarina with Sparkling Aria, it can use Oceanic Operetta.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Primarium Z'
    }
  ],
  [
    'prismscale',
    {
      desc: 'Evolves Feebas into Milotic when traded.',
      gen: 5,
      name: 'Prism Scale'
    }
  ],
  [
    'protectivepads',
    {
      desc: "Holder's moves are protected from adverse contact effects, except Pickpocket.",
      gen: 7,
      name: 'Protective Pads'
    }
  ],
  [
    'protector',
    {
      desc: 'Evolves Rhydon into Rhyperior when traded.',
      gen: 4,
      name: 'Protector'
    }
  ],
  [
    'psychicgem',
    {
      desc: "Holder's first successful Psychic-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Psychic Gem'
    }
  ],
  [
    'psychicmemory',
    {
      desc: "Holder's Multi-Attack is Psychic type.",
      gen: 7,
      name: 'Psychic Memory'
    }
  ],
  [
    'psychicseed',
    {
      desc: "If the terrain is Psychic Terrain, raises holder's Sp. Def by 1 stage. Single use.",
      gen: 7,
      name: 'Psychic Seed'
    }
  ],
  [
    'psychiumz',
    {
      desc: 'If holder has a Psychic move, this item allows it to use a Psychic Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Psychium Z'
    }
  ],
  [
    'qualotberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Qualot Berry'
    }
  ],
  [
    'quickball',
    {
      desc: 'A Poké Ball that provides a better catch rate at the start of a wild encounter.',
      gen: 4,
      name: 'Quick Ball'
    }
  ],
  [
    'quickclaw',
    {
      desc: 'Each turn, holder has a 20% chance to move first in its priority bracket.',
      gen: 2,
      name: 'Quick Claw'
    }
  ],
  [
    'quickpowder',
    {
      desc: "If held by a Ditto that hasn't Transformed, its Speed is doubled.",
      gen: 4,
      name: 'Quick Powder'
    }
  ],
  [
    'rabutaberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Rabuta Berry'
    }
  ],
  [
    'rarebone',
    {
      desc: 'No competitive use other than when used with Fling.',
      gen: 4,
      name: 'Rare Bone'
    }
  ],
  [
    'rawstberry',
    {
      desc: 'Holder is cured if it is burned. Single use.',
      gen: 3,
      name: 'Rawst Berry'
    }
  ],
  [
    'razorclaw',
    {
      desc: "Holder's critical hit ratio is raised by 1 stage. Evolves Sneasel into Weavile when held and leveled up during the night.",
      gen: 4,
      name: 'Razor Claw',
      shortDesc: "Holder's critical hit ratio is raised by 1 stage."
    }
  ],
  [
    'razorfang',
    {
      desc: "Holder's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch. Evolves Gligar into Gliscor when held and leveled up during the night.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Razor Fang',
      shortDesc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
    }
  ],
  [
    'razzberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Razz Berry'
    }
  ],
  [
    'reapercloth',
    {
      desc: 'Evolves Dusclops into Dusknoir when traded.',
      gen: 4,
      name: 'Reaper Cloth'
    }
  ],
  [
    'redcard',
    {
      desc: 'If holder survives a hit, attacker is forced to switch to a random ally. Single use.',
      gen: 5,
      name: 'Red Card'
    }
  ],
  [
    'redorb',
    {
      desc: "A shiny red orb that is said to have a legend tied to it. It's known to have a deep connection with the Hoenn region.",
      gen: 3,
      keyItem: true,
      name: 'Red Orb',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redorb.png'
    }
  ],
  [
    'repeatball',
    {
      desc: 'A Poké Ball that works well on Pokémon species that were previously caught.',
      gen: 3,
      name: 'Repeat Ball'
    }
  ],
  [
    'ribbonsweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Ribbon Sweet'
    }
  ],
  [
    'rindoberry',
    {
      desc: 'Halves damage taken from a supereffective Grass-type attack. Single use.',
      gen: 4,
      name: 'Rindo Berry'
    }
  ],
  [
    'ringtarget',
    {
      desc: "The holder's type immunities granted solely by its typing are negated.",
      gen: 5,
      name: 'Ring Target'
    }
  ],
  [
    'rockgem',
    {
      desc: "Holder's first successful Rock-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Rock Gem'
    }
  ],
  [
    'rockincense',
    {
      desc: "Holder's Rock-type attacks have 1.2x power.",
      gen: 4,
      name: 'Rock Incense'
    }
  ],
  [
    'rockmemory',
    {
      desc: "Holder's Multi-Attack is Rock type.",
      gen: 7,
      name: 'Rock Memory'
    }
  ],
  [
    'rockiumz',
    {
      desc: 'If holder has a Rock move, this item allows it to use a Rock Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Rockium Z'
    }
  ],
  [
    'roseincense',
    {
      desc: "Holder's Grass-type attacks have 1.2x power.",
      gen: 4,
      name: 'Rose Incense'
    }
  ],
  [
    'rockyhelmet',
    {
      desc: 'If holder is hit by a contact move, the attacker loses 1/6 of its max HP.',
      gen: 5,
      name: 'Rocky Helmet'
    }
  ],
  [
    'roomservice',
    {
      desc: "If Trick Room is active, the holder's Speed is lowered by 1 stage. Single use.",
      gen: 8,
      name: 'Room Service'
    }
  ],
  [
    'rootfossil',
    {
      desc: 'Can be revived into Lileep.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Root Fossil'
    }
  ],
  [
    'roseliberry',
    {
      desc: 'Halves damage taken from a supereffective Fairy-type attack. Single use.',
      gen: 6,
      name: 'Roseli Berry'
    }
  ],
  [
    'rowapberry',
    {
      desc: 'If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use.',
      gen: 4,
      name: 'Rowap Berry'
    }
  ],
  [
    'rustedshield',
    {
      desc: 'If held by a Zamazenta, this item changes its forme to Crowned Shield.',
      gen: 8,
      name: 'Rusted Shield'
    }
  ],
  [
    'rustedsword',
    {
      desc: 'If held by a Zacian, this item changes its forme to Crowned Sword.',
      gen: 8,
      name: 'Rusted Sword'
    }
  ],
  [
    'sablenite',
    {
      desc: 'If held by a Sableye, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Sablenite'
    }
  ],
  [
    'sachet',
    {
      desc: 'Evolves Spritzee into Aromatisse when traded.',
      gen: 6,
      name: 'Sachet'
    }
  ],
  [
    'safariball',
    {
      desc: 'A special Poké Ball that is used only in the Safari Zone and Great Marsh.',
      gen: 1,
      name: 'Safari Ball'
    }
  ],
  [
    'safetygoggles',
    {
      desc: 'Holder is immune to powder moves and damage from Sandstorm or Hail.',
      gen: 6,
      name: 'Safety Goggles',
      aliases: ['goggles']
    }
  ],
  [
    'sailfossil',
    {
      desc: 'Can be revived into Amaura.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Sail Fossil'
    }
  ],
  [
    'salacberry',
    {
      desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.',
      gen: 6,
      name: 'Salac Berry',
      aliases: ['salac']
    }
  ],
  [
    'salamencite',
    {
      desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Salamencite'
    }
  ],
  [
    'sceptilite',
    {
      desc: 'If held by a Sceptile, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Sceptilite'
    }
  ],
  [
    'scizorite',
    {
      desc: 'If held by a Scizor, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Scizorite'
    }
  ],
  [
    'scopelens',
    {
      desc: "Holder's critical hit ratio is raised by 1 stage.",
      gen: 2,
      name: 'Scope Lens'
    }
  ],
  [
    'seaincense',
    {
      desc: "Holder's Water-type attacks have 1.2x power.",
      gen: 3,
      name: 'Sea Incense'
    }
  ],
  [
    'sharpbeak',
    {
      desc: "Holder's Flying-type attacks have 1.2x power.",
      gen: 2,
      name: 'Sharp Beak'
    }
  ],
  [
    'sharpedonite',
    {
      desc: 'If held by a Sharpedo, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Sharpedonite'
    }
  ],
  [
    'shedshell',
    {
      desc: 'Holder may switch out even when trapped by another Pokémon, or by Ingrain.',
      gen: 4,
      name: 'Shed Shell'
    }
  ],
  [
    'shellbell',
    {
      desc: 'After an attack, holder gains 1/8 of the damage in HP dealt to other Pokémon.',
      gen: 3,
      name: 'Shell Bell'
    }
  ],
  [
    'shinystone',
    {
      desc: 'Evolves Togetic into Togekiss, Roselia into Roserade, Minccino into Cinccino, and Floette into Florges when used.',
      gen: 4,
      name: 'Shiny Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'shockdrive',
    {
      desc: "Holder's Techno Blast is Electric type.",
      gen: 5,
      name: 'Shock Drive'
    }
  ],
  [
    'shucaberry',
    {
      desc: 'Halves damage taken from a supereffective Ground-type attack. Single use.',
      gen: 4,
      name: 'Shuca Berry'
    }
  ],
  [
    'silkscarf',
    {
      desc: "Holder's Normal-type attacks have 1.2x power.",
      gen: 3,
      name: 'Silk Scarf'
    }
  ],
  [
    'silverpowder',
    {
      desc: "Holder's Bug-type attacks have 1.2x power.",
      gen: 2,
      name: 'Silver Powder'
    }
  ],
  [
    'sitrusberry',
    {
      desc: 'Restores 1/4 max HP when at 1/2 max HP or less. Single use.',
      gen: 3,
      name: 'Sitrus Berry',
      aliases: ['sitrus']
    }
  ],
  [
    'skullfossil',
    {
      desc: 'Can be revived into Cranidos.',
      gen: 4,
      isNonstandard: 'Past',
      name: 'Skull Fossil'
    }
  ],
  [
    'skyplate',
    {
      desc: "Holder's Flying-type attacks have 1.2x power. Judgment is Flying type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Sky Plate'
    }
  ],
  [
    'slowbronite',
    {
      desc: 'If held by a Slowbro, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Slowbronite'
    }
  ],
  [
    'smoothrock',
    {
      desc: "Holder's use of Sandstorm lasts 8 turns instead of 5.",
      gen: 4,
      name: 'Smooth Rock'
    }
  ],
  [
    'snorliumz',
    {
      desc: 'If held by a Snorlax with Giga Impact, it can use Pulverizing Pancake.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Snorlium Z'
    }
  ],
  [
    'snowball',
    {
      desc: "Raises holder's Attack by 1 if hit by an Ice-type attack. Single use.",
      gen: 6,
      name: 'Snowball'
    }
  ],
  [
    'softsand',
    {
      desc: "Holder's Ground-type attacks have 1.2x power.",
      gen: 2,
      name: 'Soft Sand'
    }
  ],
  [
    'solganiumz',
    {
      desc: 'Solgaleo or Dusk Mane Necrozma with Sunsteel Strike can use a special Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Solganium Z'
    }
  ],
  [
    'souldew',
    {
      desc: 'If held by a Latias/Latios, its Dragon- and Psychic-type moves have 1.2x power.',
      gen: 3,
      name: 'Soul Dew'
    }
  ],
  [
    'spelltag',
    {
      desc: "Holder's Ghost-type attacks have 1.2x power.",
      gen: 2,
      name: 'Spell Tag'
    }
  ],
  [
    'spelonberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Spelon Berry'
    }
  ],
  [
    'splashplate',
    {
      desc: "Holder's Water-type attacks have 1.2x power. Judgment is Water type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Splash Plate'
    }
  ],
  [
    'spookyplate',
    {
      desc: "Holder's Ghost-type attacks have 1.2x power. Judgment is Ghost type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Spooky Plate'
    }
  ],
  [
    'sportball',
    {
      desc: 'A special Poké Ball for the Bug-Catching Contest.',
      gen: 2,
      name: 'Sport Ball'
    }
  ],
  [
    'starfberry',
    {
      desc: 'Raises a random stat by 2 when at 1/4 max HP or less (not acc/eva). Single use.',
      gen: 3,
      name: 'Starf Berry'
    }
  ],
  [
    'steelgem',
    {
      desc: "Holder's first successful Steel-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Steel Gem'
    }
  ],
  [
    'steelmemory',
    {
      desc: "Holder's Multi-Attack is Steel type.",
      gen: 7,
      name: 'Steel Memory'
    }
  ],
  [
    'steeliumz',
    {
      desc: 'If holder has a Steel move, this item allows it to use a Steel Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Steelium Z'
    }
  ],
  [
    'starsweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Star Sweet'
    }
  ],
  [
    'steelixite',
    {
      desc: 'If held by a Steelix, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Steelixite'
    }
  ],
  [
    'stick',
    {
      desc: "If held by a Farfetch'd, its critical hit ratio is raised by 2 stages.",
      gen: 2,
      isNonstandard: 'Past',
      name: 'Stick'
    }
  ],
  [
    'stickybarb',
    {
      desc: 'Each turn, holder loses 1/8 max HP. An attacker making contact can receive it.',
      gen: 4,
      name: 'Sticky Barb'
    }
  ],
  [
    'stoneplate',
    {
      desc: "Holder's Rock-type attacks have 1.2x power. Judgment is Rock type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Stone Plate'
    }
  ],
  [
    'strawberrysweet',
    {
      desc: 'Evolves Milcery into Alcremie when held and spun around.',
      gen: 8,
      name: 'Strawberry Sweet'
    }
  ],
  [
    'sunstone',
    {
      desc: 'Evolves Gloom into Bellossom, Sunkern into Sunflora, Cottonee into Whimsicott, Petilil into Lilligant, and Helioptile into Heliolisk when used.',
      gen: 2,
      name: 'Sun Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'superpotion',
    {
      desc: 'A spray-type medicine for treating wounds. It can be used to restore 60 HP to a single Pokémon. ',
      gen: 1,
      name: 'Super Potion'
    }
  ],
  [
    'swampertite',
    {
      desc: 'If held by a Swampert, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Swampertite'
    }
  ],
  [
    'sweetapple',
    {
      desc: 'Evolves Applin into Appletun when used.',
      gen: 8,
      name: 'Sweet Apple'
    }
  ],
  [
    'tamatoberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      name: 'Tamato Berry'
    }
  ],
  [
    'tangaberry',
    {
      desc: 'Halves damage taken from a supereffective Bug-type attack. Single use.',
      gen: 4,
      name: 'Tanga Berry'
    }
  ],
  [
    'tapuniumz',
    {
      desc: "If held by a Tapu with Nature's Madness, it can use Guardian of Alola.",
      gen: 7,
      isNonstandard: 'Past',
      name: 'Tapunium Z'
    }
  ],
  [
    'tartapple',
    {
      desc: 'Evolves Applin into Flapple when used.',
      gen: 8,
      name: 'Tart Apple'
    }
  ],
  [
    'terrainextender',
    {
      desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.",
      gen: 7,
      name: 'Terrain Extender'
    }
  ],
  [
    'thickclub',
    {
      desc: 'If held by a Cubone or a Marowak, its Attack is doubled.',
      gen: 2,
      name: 'Thick Club'
    }
  ],
  [
    'throatspray',
    {
      desc: "Raises holder's Special Attack by 1 stage after it uses a sound move. Single use.",
      gen: 8,
      name: 'Throat Spray'
    }
  ],
  [
    'thunderstone',
    {
      desc: 'Evolves Pikachu into Raichu or Alolan Raichu, Eevee into Jolteon, Eelektrik into Eelektross, and Charjabug into Vikavolt when used.',
      gen: 1,
      name: 'Thunder Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'timerball',
    {
      desc: 'A Poké Ball that becomes better the more turns there are in a battle.',
      gen: 3,
      name: 'Timer Ball'
    }
  ],
  [
    'toxicorb',
    {
      desc: 'At the end of every turn, this item attempts to badly poison the holder.',
      gen: 4,
      name: 'Toxic Orb'
    }
  ],
  [
    'toxicplate',
    {
      desc: "Holder's Poison-type attacks have 1.2x power. Judgment is Poison type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Toxic Plate'
    }
  ],
  [
    'twistedspoon',
    {
      desc: "Holder's Psychic-type attacks have 1.2x power.",
      gen: 2,
      name: 'Twisted Spoon'
    }
  ],
  [
    'tyranitarite',
    {
      desc: 'If held by a Tyranitar, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Tyranitarite'
    }
  ],
  [
    'ultraball',
    {
      desc: 'An ultra-performance Ball that provides a higher catch rate than a Great Ball.',
      gen: 1,
      name: 'Ultra Ball'
    }
  ],
  [
    'ultranecroziumz',
    {
      desc: 'Dusk Mane/Dawn Wings Necrozma: Ultra Burst, then Z-Move w/ Photon Geyser.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Ultranecrozium Z'
    }
  ],
  [
    'upgrade',
    {
      desc: 'Evolves Porygon into Porygon2 when traded.',
      gen: 2,
      name: 'Up-Grade'
    }
  ],
  [
    'utilityumbrella',
    {
      desc: 'The holder ignores rain- and sun-based effects. Damage and accuracy calculations from attacks used by the holder are affected by rain and sun, but not attacks used against the holder.',
      gen: 8,
      name: 'Utility Umbrella',
      shortDesc: 'The holder ignores rain- and sun-based effects.'
    }
  ],
  [
    'venusaurite',
    {
      desc: 'If held by a Venusaur, this item allows it to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      name: 'Venusaurite'
    }
  ],
  [
    'vilevial',
    {
      desc: 'If held by a Venomicon, its Poison- and Flying-type attacks have 1.2x power.',
      gen: 8,
      isNonstandard: 'CAP',
      name: 'Vile Vial'
    }
  ],
  [
    'wacanberry',
    {
      desc: 'Halves damage taken from a supereffective Electric-type attack. Single use.',
      gen: 4,
      name: 'Wacan Berry'
    }
  ],
  [
    'watergem',
    {
      desc: "Holder's first successful Water-type attack will have 1.3x power. Single use.",
      gen: 5,
      isNonstandard: 'Past',
      name: 'Water Gem'
    }
  ],
  [
    'watermemory',
    {
      desc: "Holder's Multi-Attack is Water type.",
      gen: 7,
      name: 'Water Memory'
    }
  ],
  [
    'waterstone',
    {
      desc: 'Evolves Poliwhirl into Poliwrath, Shellder into Cloyster, Staryu into Starmie, Eevee into Vaporeon, Lombre into Ludicolo, and Panpour into Simipour when used.',
      gen: 1,
      name: 'Water Stone',
      shortDesc: 'Evolves certain species of Pokémon when used.'
    }
  ],
  [
    'wateriumz',
    {
      desc: 'If holder has a Water move, this item allows it to use a Water Z-Move.',
      gen: 7,
      isNonstandard: 'Past',
      name: 'Waterium Z'
    }
  ],
  [
    'watmelberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Watmel Berry'
    }
  ],
  [
    'waveincense',
    {
      desc: "Holder's Water-type attacks have 1.2x power.",
      gen: 4,
      name: 'Wave Incense'
    }
  ],
  [
    'weaknesspolicy',
    {
      desc: 'If holder is hit super effectively, raises Attack, Sp. Atk by 2 stages. Single use.',
      gen: 6,
      name: 'Weakness Policy',
      aliases: ['wp']
    }
  ],
  [
    'wepearberry',
    {
      desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      gen: 3,
      isNonstandard: 'Past',
      name: 'Wepear Berry'
    }
  ],
  [
    'whippeddream',
    {
      desc: 'Evolves Swirlix into Slurpuff when traded.',
      gen: 6,
      name: 'Whipped Dream'
    }
  ],
  [
    'whiteherb',
    {
      desc: 'Restores all lowered stat stages to 0 when one is less than 0. Single use.',
      gen: 3,
      name: 'White Herb'
    }
  ],
  [
    'widelens',
    {
      desc: 'The accuracy of attacks by the holder is 1.1x.',
      gen: 4,
      name: 'Wide Lens'
    }
  ],
  [
    'wikiberry',
    {
      desc: 'Restores 33% max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use.',
      gen: 3,
      name: 'Wiki Berry'
    }
  ],
  [
    'wiseglasses',
    {
      desc: "Holder's special attacks have 1.1x power.",
      gen: 4,
      name: 'Wise Glasses'
    }
  ],
  [
    'yacheberry',
    {
      desc: 'Halves damage taken from a supereffective Ice-type attack. Single use.',
      gen: 4,
      name: 'Yache Berry',
      aliases: ['yache']
    }
  ],
  [
    'zapplate',
    {
      desc: "Holder's Electric-type attacks have 1.2x power. Judgment is Electric type.",
      gen: 4,
      isNonstandard: 'Past',
      name: 'Zap Plate'
    }
  ],
  [
    'zoomlens',
    {
      desc: 'The accuracy of attacks by the holder is 1.2x if it moves after its target.',
      gen: 4,
      name: 'Zoom Lens'
    }
  ],
  [
    'acrobike',
    {
      desc: 'This folding bike allows you to perform actions such as wheelies and bunny hops.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Acro Bike',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/acrobike.png'
    }
  ],
  [
    'adventureguide',
    {
      desc: 'A compact device that automatically collects and records advice when a Trainer is out on an adventure.',
      gen: 6,
      keyItem: true,
      name: 'Adventure Guide',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/adventureguide.png'
    }
  ],
  [
    'apricornbox',
    {
      desc: 'A handy box where you can store up to 99 of each kind of Apricorn.',
      gen: 4,
      keyItem: true,
      name: 'Apricorn Box',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/apricornbox.png'
    }
  ],
  [
    'aquasuit',
    {
      desc: 'A suit made with the collective technological know-how of Team Aqua. It can withstand any impact.',
      gen: 6,
      keyItem: true,
      name: 'Aqua Suit',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/aquasuit.png'
    }
  ],
  [
    'auroraticket',
    {
      desc: 'A ticket required to board the ship to Birth Island. It glows beautifully.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Aurora Ticket',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/auroraticket.png'
    }
  ],
  [
    'autograph',
    {
      desc: 'The autograph you got from the Vermilion City Gym Leader, Lt. Surge. He wrote, "Good luck!"',
      gen: 7,
      keyItem: true,
      name: 'Autograph'
    }
  ],
  [
    'azureflute',
    {
      desc: 'A flute that puts out echoing sounds that do not seem to be of this world. No one knows who made it.',
      gen: 4,
      keyItem: true,
      name: 'Azure Flute',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/azureflute.png'
    }
  ],
  [
    'bandautograph',
    {
      desc: "It's signed by all members of the Galar region's most charismatic band, the Maximizers.",
      gen: 8,
      keyItem: true,
      name: 'Band Autograph',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bandautograph.png'
    }
  ],
  [
    'basementkey',
    {
      desc: 'A key that opens a door in the Goldenrod Tunnel.',
      gen: 2,
      keyItem: true,
      name: 'Basement Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/basementkey.png'
    }
  ],
  [
    'berrypots',
    {
      desc: 'Handy containers for cultivating Berries wherever you go.',
      gen: 4,
      keyItem: true,
      name: 'Berry Pots',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/berrypots.png'
    }
  ],
  [
    'berrypouch',
    {
      desc: "A pouch for carrying Berries. It is attached to the bag's compartment for important items.",
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Berry Pouch',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/berrypouch.png'
    }
  ],
  [
    'bicycle',
    {
      desc: 'A folding bike that enables a rider to get around much faster than with Running Shoes.',
      gen: 1,
      keyItem: true,
      name: 'Bicycle',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bicycle.png'
    }
  ],
  [
    'bikevoucher',
    {
      desc: 'Take this voucher to the BIKE SHOP in CERULEAN CITY and exchange it for a bicycle.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Bike Voucher',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bikevoucher.png'
    }
  ],
  [
    'bluecard',
    {
      desc: "A card to save points for the Buena's Password show.",
      gen: 2,
      keyItem: true,
      name: 'Blue Card',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bluecard.png'
    }
  ],
  [
    'bluepetal',
    {
      desc: "A pressed flower petal you receive from Lana during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Blue Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/bluepetal.png'
    }
  ],
  [
    'campinggear',
    {
      desc: 'Everything you need to set up a tent and get cooking in a Wild Area or at a camping spot.',
      gen: 8,
      keyItem: true,
      name: 'Camping Gear',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/campinggear.png'
    }
  ],
  [
    'cardkey',
    {
      desc: 'A card key that opens a shutter in the Radio Tower.',
      gen: 1,
      keyItem: true,
      name: 'Card Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/cardkey.png'
    }
  ],
  [
    'catchingcharm',
    {
      desc: "Holding it is said to increase the chance of getting a critical catch. Curiously, the charm doesn't shake much.",
      gen: 8,
      keyItem: true,
      name: 'Catching Charm',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/catchingcharm.png'
    }
  ],
  [
    'clearbell',
    {
      desc: 'A very old-fashioned bell that makes a gentle ringing sound.',
      gen: 2,
      keyItem: true,
      name: 'Clear Bell',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/clearbell.png'
    }
  ],
  [
    'coincase',
    {
      desc: 'A case for holding coins obtained at the Game Corner. It can hold up to 50,000 coins.',
      gen: 1,
      keyItem: true,
      name: 'Coin Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coincase.png'
    }
  ],
  [
    'colressmchn',
    {
      desc: "A special device that wrings out the potential of Pokémon. It's an imperfect prototype.",
      gen: 5,
      keyItem: true,
      name: 'Colress MCHN',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/colressmchn.png'
    }
  ],
  [
    'contestcostume',
    {
      desc: 'A very cool suit to be worn during the Contest Spectacular.',
      gen: 6,
      keyItem: true,
      name: 'Contest Costume',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/contestcostume.png'
    }
  ],
  [
    'contestpass',
    {
      desc: 'A pass required for entering Pokémon Contests. It has a drawing of an award ribbon on its front.',
      gen: 3,
      keyItem: true,
      name: 'Contest Pass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/contestpass.png'
    }
  ],
  [
    'coupon1',
    {
      desc: 'A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.',
      gen: 4,
      keyItem: true,
      name: 'Coupon 1',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coupon1.png'
    }
  ],
  [
    'coupon2',
    {
      desc: 'A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.',
      gen: 4,
      keyItem: true,
      name: 'Coupon 2',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coupon2.png'
    }
  ],
  [
    'coupon3',
    {
      desc: 'A coupon to be exchanged for a Pokémon Watch (Pokétch for short). Three coupons are needed.',
      gen: 4,
      keyItem: true,
      name: 'Coupon 3',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/coupon3.png'
    }
  ],
  [
    'dnasplicers',
    {
      desc: 'A splicer that fuses Kyurem and a certain Pokémon. They are said to have been one in the beginning.',
      gen: 5,
      keyItem: true,
      name: 'DNA Splicers',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dnasplicers.png'
    }
  ],
  [
    'darkstone',
    {
      desc: "Zekrom's body was destroyed and changed into this stone. It is said to be waiting for the emergence of a hero.",
      gen: 5,
      keyItem: true,
      name: 'Dark Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/darkstone.png'
    }
  ],
  [
    'devongoods',
    {
      desc: "A package that contains DEVON's machine parts.",
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Devon Goods',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devongoods.png'
    }
  ],
  [
    'devonparts',
    {
      desc: 'A case that contains mechanical parts of some sort made by the Devon Corporation.',
      gen: 6,
      keyItem: true,
      name: 'Devon Parts',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devonparts.png'
    }
  ],
  [
    'devonscope',
    {
      desc: 'A special device made by Devon Corporation that signals the presence of any unseen Pokémon.',
      gen: 6,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Devon Scope',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devonscope.png'
    }
  ],
  [
    'devonscubagear',
    {
      desc: 'A device made by Devon Corporation that provides oxygen to users during the use of Dive.',
      gen: 6,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Devon Scuba Gear',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/devonscubagear.png'
    }
  ],
  [
    'dowsingmchn',
    {
      desc: "A high-tech machine that shows the location of invisible items. It's attached to the head when in use.",
      gen: 4,
      keyItem: true,
      name: 'Dowsing MCHN',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dowsingmchn.png'
    }
  ],
  [
    'dowsingmachine',
    {
      desc: "This high-tech machine shows the location of invisible items. It's attached to the head when in use.",
      gen: 6,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Dowsing Machine',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dowsingmachine.png'
    }
  ],
  [
    'dragonskull',
    {
      desc: 'A skull of a Pokémon that was said to have braved the angry waters to fly around the world.',
      gen: 5,
      keyItem: true,
      name: 'Dragon Skull',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dragonskull.png'
    }
  ],
  [
    'droppeditem',
    {
      desc: "This item, when found, causes you to be in contact with the owner who will then request for it to be returned From there, you will be called when you enter random areas by the owner of the item. After the 10th call, the person will call you and tell you to meet in Nimbasa to return their Item. When you do, they will be added to your Xtransceiver. Call them to total 30 times, but you can only call from places which fulfill the conditions. On the 30th call they'll tell you they want to meet at Nimbasa City where they'll ride the Ferris Wheel with you. Call them to total 50 times, in the 40th call they'll be 'SOUND ONLY', in the 50th call they'll be wearing their work clothes, and cut the line in a second or so. Call them a 51st time. wait a day and then call them again and they'll meet you in Nimbasa City and offer to trade, willing to have any Pokémon. This can be repeated each day to go through all of their Pokémon. The Pokémon you receive varies based on your gender",
      gen: 5,
      keyItem: true,
      name: 'Dropped Item',
      shortDesc: 'The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy or girl.',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/droppeditem.png'
    }
  ],
  [
    'dynamaxband',
    {
      desc: 'A Wishing Star has been affixed to it. It lets out a light that allows Pokémon to Dynamax when at a Power Spot.',
      gen: 8,
      keyItem: true,
      name: 'Dynamax Band',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/dynamaxband.png'
    }
  ],
  [
    'eggcard',
    {
      desc: 'This item is to be taken to the Breeding Centre in Route 34 and exchanged for the Odd Egg which may hold Pichu, Cleffa, Igglybuff, Tyrogue, Smoochum, Elekid or Magby.',
      gen: 2,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Egg Card',
      shortDesc: 'Might be used at the Pokémon Communication Centre.'
    }
  ],
  [
    'elevatorkey',
    {
      desc: "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare's logo.",
      gen: 7,
      keyItem: true,
      name: 'Elevator Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/elevatorkey.png'
    }
  ],
  [
    'endorsement',
    {
      desc: "A letter of recommendation that you'll need in order to participate in the Gym Challenge.",
      gen: 8,
      keyItem: true,
      name: 'Endorsement',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/endorsement.png'
    }
  ],
  [
    'enigmastone',
    {
      desc: "A crystal ball that was excavated from the ground. It's a very beautiful stone that is covered with bits of rock and earth.",
      gen: 4,
      keyItem: true,
      name: 'Enigma Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/enigmastone.png'
    }
  ],
  [
    'enigmaticcard',
    {
      desc: 'A mysterious card. Written on it is a request for you to go to a guest room in an Akala motel on Route 8.',
      gen: 7,
      keyItem: true,
      name: 'Enigmatic Card',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/enigmaticcard.png'
    }
  ],
  [
    'eonflute',
    {
      desc: 'A flute that can be used to summon Latios or Latias no matter where you are.',
      gen: 6,
      keyItem: true,
      name: 'Eon Flute',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/eonflute.png'
    }
  ],
  [
    'eonticket',
    {
      desc: 'The ticket required for sailing on a ferry to the Southern Island. Does Norman, the Petalburg Gym Leader, know a secret?!',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Eon Ticket',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/eonticket.png'
    }
  ],
  [
    'escaperope',
    {
      desc: 'A long and durable rope. Use it to escape instantly from locations like caves or dungeons. It can be used any number of times.',
      gen: 8,
      keyItem: true,
      name: 'Escape Rope',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/escaperope.png'
    }
  ],
  [
    'expshare',
    {
      desc: 'Turning on this special device will allow all the Pokémon on your team to receive Exp. Points from battles.',
      gen: 2,
      keyItem: true,
      name: 'Exp. Share',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/exp.share.png'
    }
  ],
  [
    'explorerkit',
    {
      desc: 'A bag filled with convenient tools for exploring. It provides access to the Underground in the Sinnoh region.',
      gen: 4,
      keyItem: true,
      name: 'Explorer Kit',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/explorerkit.png'
    }
  ],
  [
    'famechecker',
    {
      desc: "A device that enables you to recall what you've heard and seen about famous people.",
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Fame Checker',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/famechecker.png'
    }
  ],
  [
    'fashioncase',
    {
      desc: 'A lovely case to store colorful Props for your Pokémon to wear in a musical.',
      gen: 4,
      keyItem: true,
      name: 'Fashion Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/fashioncase.png'
    }
  ],
  [
    'fishingrod',
    {
      desc: 'Use it by the water to fish up various kinds of Pokémon.',
      gen: 1,
      keyItem: true,
      name: 'Fishing Rod',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/fishingrod.png'
    }
  ],
  [
    'foragebag',
    {
      desc: "A bag to carry ingredients gathered during Mallow's trial in the jungle.",
      gen: 7,
      keyItem: true,
      name: 'foragebag',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/foragebag.png'
    }
  ],
  [
    'gbsounds',
    {
      desc: "A music player that allows you to listen to nostalgic songs. It's operated with the flip of a single switch.",
      gen: 4,
      keyItem: true,
      name: 'GB Sounds',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gbsounds.png'
    }
  ],
  [
    'gsball',
    {
      desc: 'The mysterious BALL.',
      gen: 2,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'GS Ball',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gsball.png'
    }
  ],
  [
    'galactickey',
    {
      desc: 'A card key for disengaging the security systems in the Galactic HQ. Losing it can result in punishment, apparently.',
      gen: 4,
      keyItem: true,
      name: 'GS Ball',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/galactickey.png'
    }
  ],
  [
    'gogoggles',
    {
      desc: 'Nifty goggles to protect eyes from desert sandstorms.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Go-Goggles',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/go-goggles.png'
    }
  ],
  [
    'godstone',
    {
      desc: 'A rare stone',
      gen: 5,
      keyItem: true,
      name: 'God Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/godstone.png'
    }
  ],
  [
    'goldteeth',
    {
      desc: "A set of golden false teeth lost by the Safari Zone's warden. They make his smile sparkle.",
      gen: 1,
      keyItem: true,
      name: 'Gold Teeth',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/goldteeth.png'
    }
  ],
  [
    'goodrod',
    {
      desc: 'A new, good-quality fishing rod. Use it at any body of water to fish for wild aquatic Pokémon.',
      gen: 1,
      keyItem: true,
      name: 'Good Rod',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/goodrod.png'
    }
  ],
  [
    'gracidea',
    {
      desc: 'A flower sometimes bundled in bouquets to convey gratitude on special occasions, such as birthdays.',
      gen: 4,
      keyItem: true,
      name: 'Gracidea',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gracidea.png'
    }
  ],
  [
    'gram1',
    {
      desc: 'An important letter that Wingull delivers.',
      gen: 5,
      keyItem: true,
      name: 'Gram 1',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gram1.png'
    }
  ],
  [
    'gram2',
    {
      desc: 'An important letter that Wingull delivers.',
      gen: 5,
      keyItem: true,
      name: 'Gram 2',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gram2.png'
    }
  ],
  [
    'gram3',
    {
      desc: 'An important letter that Wingull delivers.',
      gen: 5,
      keyItem: true,
      name: 'Gram 3',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/gram3.png'
    }
  ],
  [
    'greenpetal',
    {
      desc: "A pressed flower petal you receive from Mallow during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Green Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/greenpetal.png'
    }
  ],
  [
    'grubbyhanky',
    {
      desc: 'A handkerchief dropped by a regular at Café Warehouse. It smells faintly like a Pokémon.',
      gen: 5,
      keyItem: true,
      name: 'Grubby Hanky',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/grubbyhanky.png'
    }
  ],
  [
    'hitechearbuds',
    {
      desc: 'Strange earbuds that allow you to freely control the volume of various sounds.',
      gen: 8,
      keyItem: true,
      name: 'Hi-tech Earbuds',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/hi-techearbuds.png'
    }
  ],
  [
    'holocaster',
    {
      desc: "A device that allows users to receive and view hologram clips at any time. It's also used to chat with others.",
      gen: 6,
      keyItem: true,
      name: 'Holo Caster',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/holocaster.png'
    }
  ],
  [
    'honorofkalos',
    {
      desc: 'A precious symbol that is awarded only to an individual who has done great things for the Kalos region.',
      gen: 6,
      keyItem: true,
      name: 'Honor of Kalos',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/honorofkalos.png'
    }
  ],
  [
    'ilimasnormaliumz',
    {
      desc: 'The Normalium Z you were entrusted with by Ilima. You were asked to place it on the pedestal at the back of Verdant Cavern.',
      gen: 7,
      keyItem: true,
      name: "Ilima's Normalium Z",
      specialSprite: "https://www.serebii.net/itemdex/sprites/ilima'snormaliumz.png"
    }
  ],
  [
    'intriguingstone',
    {
      desc: "A rather curious stone that might appear valuable to some. It's all in the eye of the beholder.",
      gen: 6,
      keyItem: true,
      name: 'Intriguing Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/intriguingstone.png'
    }
  ],
  [
    'itemfinder',
    {
      desc: 'A device used for finding items. If there is a hidden item nearby when it is used, it emits a signal.',
      gen: 1,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'itemfinder',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/itemfinder.png'
    }
  ],
  [
    'jadeorb',
    {
      desc: "A shiny green orb that is said to have a legend tied to it. It's known to have a deep connection with the Hoenn region.",
      gen: 4,
      keyItem: true,
      name: 'Jade Orb',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/jadeorb.png'
    }
  ],
  [
    'journal',
    {
      desc: 'A notebook that keeps a day-to-day record of your adventure so far.',
      gen: 4,
      keyItem: true,
      name: 'journal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/journal.png'
    }
  ],
  [
    'keystone',
    {
      desc: 'A stone filled with an unexplained power. It makes Pokémon that battle with a Mega Stone Mega Evolve.',
      gen: 6,
      keyItem: true,
      name: 'Key Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keystone.png'
    }
  ],
  [
    'keytoroom1',
    {
      desc: 'A key that opens a door inside Sea Mauville',
      gen: 6,
      keyItem: true,
      name: 'Key to Room 1',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom1.png'
    }
  ],
  [
    'keytoroom2',
    {
      desc: 'A key that opens a door inside Sea Mauville',
      gen: 6,
      keyItem: true,
      name: 'Key to Room 2',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom2.png'
    }
  ],
  [
    'keytoroom4',
    {
      desc: 'A key that opens a door inside Sea Mauville',
      gen: 6,
      keyItem: true,
      name: 'Key to Room 4',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom4.png'
    }
  ],
  [
    'keytoroom6',
    {
      desc: 'A key that opens a door inside Sea Mauville',
      gen: 6,
      keyItem: true,
      name: 'Key to Room 6',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/keytoroom6.png'
    }
  ],
  [
    'leftpokeball',
    {
      desc: "A Poké Ball with a Pokémon that lost its Trainer inside. It seems to be from Ula'ula Island.",
      gen: 7,
      keyItem: true,
      name: 'Left Poké Ball',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/leftpokeball.png'
    }
  ],
  [
    'lenscase',
    {
      desc: 'A rather chic-looking case for carrying contact lenses.',
      gen: 6,
      keyItem: true,
      name: 'Lens Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lenscase.png'
    }
  ],
  [
    'letter',
    {
      desc: 'An extremely important letter to Steven from the President of Devon Corporation.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Letter',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/letter.png'
    }
  ],
  [
    'libertypass',
    {
      desc: 'A special pass to go to Liberty Garden. Board the ship in Castelia City.',
      gen: 5,
      keyItem: true,
      name: 'Liberty Pass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/libertypass.png'
    }
  ],
  [
    'liftkey',
    {
      desc: 'A key that operates the elevator in the Team Rocket Hideout. It bears the Team Rocket logo.',
      gen: 1,
      keyItem: true,
      name: 'Lift Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/liftkey.png'
    }
  ],
  [
    'lightstone',
    {
      desc: "Reshiram's body was destroyed and changed into this stone. It is said to be waiting for the emergence of a hero.",
      gen: 5,
      keyItem: true,
      name: 'Light Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lightstone.png'
    }
  ],
  [
    'lockcapsule',
    {
      desc: 'A sturdy Capsule that can only be opened with a special key.',
      gen: 4,
      keyItem: true,
      name: 'Lock Capsule',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lockcapsule.png'
    }
  ],
  [
    'lookerticket',
    {
      desc: "A ticket that was handmade by Looker. It's decorated with a liberal amount of glittery paint.",
      gen: 6,
      keyItem: true,
      name: 'Looker Ticket',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lookerticket.png'
    }
  ],
  [
    'lootsack',
    {
      desc: 'A sturdy, spacious bag that is used to carry any treasures or loot obtained in the coal mine.',
      gen: 4,
      keyItem: true,
      name: 'Loot Sack',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lootsack.png'
    }
  ],
  [
    'lostitem',
    {
      desc: 'The Clefairy doll that was lost by the Copycat.',
      gen: 2,
      keyItem: true,
      name: 'Lost Item',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lostitem.png'
    }
  ],
  [
    'lunarwing',
    {
      desc: "A feather that glows like the moon. It's said to possess the power to dispel nightmares.",
      gen: 4,
      keyItem: true,
      name: 'Lunar Wing',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/lunarwing.png'
    }
  ],
  [
    'machbike',
    {
      desc: 'This folding Bike more than doubles your movement speed.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Mach Bike',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/machbike.png'
    }
  ],
  [
    'machinepart',
    {
      desc: 'An important part of a machine that was stolen from the Power Plant.',
      gen: 2,
      keyItem: true,
      name: 'Machine Part',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/machinepart.png'
    }
  ],
  [
    'magmaemblem',
    {
      desc: "A medal-like item in the same shape as Team Magma's mark.",
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Magma Emblem',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/magmaemblem.png'
    }
  ],
  [
    'magmastone',
    {
      desc: 'A stone formed by boulders melting in intensely hot magma, then hardening. Magma remains sealed inside it.',
      gen: 4,
      keyItem: true,
      name: 'Magma Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/magmastone.png'
    }
  ],
  [
    'magmasuit',
    {
      desc: 'A suit made with the collective technological know-how of Team Magma. It can withstand any impact.',
      gen: 6,
      keyItem: true,
      name: 'Magma Suit',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/magmasuit.png'
    }
  ],
  [
    'makeupbag',
    {
      desc: 'A rather chic-looking case for carrying lipsticks.',
      gen: 7,
      keyItem: true,
      name: 'Make-Up Bag',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/make-upbag.png'
    }
  ],
  [
    'medalbox',
    {
      desc: 'A box-shaped machine that stores Medals and Medal information.',
      gen: 5,
      keyItem: true,
      name: 'Medal Box',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/medalbox.png'
    }
  ],
  [
    'megabracelet',
    {
      desc: 'This cuff contains an untold power that somehow enables Pokémon carrying a Mega Stone to Mega Evolve in battle.',
      gen: 6,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Mega Bracelet',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/megabracelet.png'
    }
  ],
  [
    'megaring',
    {
      desc: 'This ring contains an untold power that somehow enables Pokémon carrying a Mega Stone to Mega Evolve in battle.',
      gen: 6,
      keyItem: true,
      name: 'Mega Ring',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/megaring.png'
    }
  ],
  [
    'membercard',
    {
      desc: 'A card needed for entering the inn in Canalave City. Oddly, the last date marked on it was 50 years ago.',
      gen: 4,
      keyItem: true,
      name: 'Member Card',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/membercard.png'
    }
  ],
  [
    'meteorite',
    {
      desc: "A meteorite that you got at Mt. Chimney. Some sort of pattern has risen to the surface, and it's shining with seven colors of light.",
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Meteorite',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/meteorite.png'
    }
  ],
  [
    'meteoriteshard',
    {
      desc: "One of the fragments of a Meteorite from Granite Cave. It's faintly warm to the touch.",
      gen: 6,
      keyItem: true,
      name: 'Meteorite Shard',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/meteoriteshard.png'
    }
  ],
  [
    'moonflute',
    {
      desc: 'It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the moon.',
      gen: 7,
      keyItem: true,
      name: 'Moon Flute',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/moonflute.png'
    }
  ],
  [
    'mysteryegg',
    {
      desc: "A mysterious Egg obtained from Mr. Pokémon. What's in the Egg is unknown.",
      gen: 2,
      keyItem: true,
      name: 'Mystery Egg',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/mysteryegg.png'
    }
  ],
  [
    'mysticticket',
    {
      desc: 'A ticket required to board the ship to Navel Rock. It glows with a mystic light.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'MysticTicket',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/mysticticket.png'
    }
  ],
  [
    'nlunarizer',
    {
      desc: 'A machine to fuse and separate Necrozma, which needs light, and Lunala.',
      gen: 7,
      keyItem: true,
      name: 'N-Lunarizer',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/n-lunarizer.png'
    }
  ],
  [
    'nsolarizer',
    {
      desc: 'A machine to fuse and separate Necrozma, which needs light, and Solgaleo.',
      gen: 7,
      name: 'N-Solarizer',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/n-solarizer.png'
    }
  ],
  [
    'oaksletter',
    {
      desc: 'A letter from Professor Oak. Written in it is a request for you to go to Route 224.',
      gen: 4,
      keyItem: true,
      name: "Oak's Letter",
      specialSprite: "https://www.serebii.net/itemdex/sprites/oak'sletter.png"
    }
  ],
  [
    'oaksparcel',
    {
      desc: "A parcel to be delivered to Prof. Oak from Viridian City's Pokémon Mart.",
      gen: 1,
      isNonstandard: 'Past',
      keyItem: true,
      name: "Oak's Parcel",
      specialSprite: "https://www.serebii.net/itemdex/sprites/oak'sparcel.png"
    }
  ],
  [
    'oldcharm',
    {
      desc: 'An ancient good-luck charm made of Pokémon bones to be taken to the elder of Celestic Town.',
      gen: 4,
      keyItem: true,
      name: 'Old Charm',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldcharm.png'
    }
  ],
  [
    'oldletter',
    {
      desc: 'A letter entrusted to you by a girl, to be delivered to a boy. Strangely, it looks old to you.',
      gen: 8,
      keyItem: true,
      name: 'Old Letter',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldletter.png'
    }
  ],
  [
    'oldrod',
    {
      desc: 'An old and beat-up fishing rod. Use it at any body of water to fish for wild aquatic Pokémon.',
      gen: 1,
      keyItem: true,
      name: 'Old Rod',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldrod.png'
    }
  ],
  [
    'oldseamap',
    {
      desc: 'A chart that can take you to Faraway Island.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Old Sea Map',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/oldseamap.png'
    }
  ],
  [
    'orangepetal',
    {
      desc: "A pressed flower petal you receive from Ilima during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Orange Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/orangepetal.png'
    }
  ],
  [
    'ovalcharm',
    {
      desc: 'An oval charm said to increase the chance of Pokémon Eggs being found at the Nursery.',
      gen: 5,
      keyItem: true,
      name: 'Oval Charm',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ovalcharm.png'
    }
  ],
  [
    'pairoftickets',
    {
      desc: 'Tickets for two to the astronomical show being held at the Mossdeep Space Center.',
      gen: 6,
      keyItem: true,
      name: 'Pair of Tickets',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pairoftickets.png'
    }
  ],
  [
    'palpad',
    {
      desc: 'A convenient notepad that is used to register your friends and friend codes and keep a record of your gameplay.',
      gen: 4,
      keyItem: true,
      name: 'palpad',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/palpad.png'
    }
  ],
  [
    'parcel',
    {
      desc: "A parcel entrusted into your care. You're supposed to deliver it to your childhood friend who left Twinleaf Town.",
      gen: 4,
      keyItem: true,
      name: 'Parcel',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/parcel.png'
    }
  ],
  [
    'pass',
    {
      desc: "A pass required for riding the Magnet Train. It allows you to ride whenever and however much you'd like.",
      gen: 2,
      keyItem: true,
      name: 'Pass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pass.png'
    }
  ],
  [
    'permit',
    {
      desc: 'A permit that is needed to enter the Nature Preserve. Not many know about it.',
      gen: 5,
      keyItem: true,
      name: 'Permit',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/permit.png'
    }
  ],
  [
    'photoalbum',
    {
      desc: 'A nice photo album for storing all the photos taken along your adventure.',
      gen: 4,
      keyItem: true,
      name: 'Photo Album',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/photoalbum.png'
    }
  ],
  [
    'pinkpetal',
    {
      desc: "A pressed flower petal you receive from Mina during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Pink Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pinkpetal.png'
    }
  ],
  [
    'plasmacard',
    {
      desc: 'A card key needed to enter the password inside the Plasma Frigate.',
      gen: 5,
      keyItem: true,
      name: 'Plasma Card',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/plasmacard.png'
    }
  ],
  [
    'poffincase',
    {
      desc: 'A case for storing Poffins cooked from Berries.',
      gen: 4,
      keyItem: true,
      name: 'Poffin Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/poffincase.png'
    }
  ],
  [
    'pointcard',
    {
      desc: 'A card that lists how many Battle Points you have earned.',
      gen: 4,
      keyItem: true,
      name: 'Point Card',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pointcard.png'
    }
  ],
  [
    'pokeradar',
    {
      desc: 'A tool that can search out Pokémon that are hiding in the tall grass. Its battery is recharged as you walk.',
      gen: 4,
      keyItem: true,
      name: 'Poké Radar',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeradar.png'
    }
  ],
  [
    'pokeblockkit',
    {
      desc: 'A set containing a Berry Blender for making Pokéblocks and a Pokéblock Case for storing Pokéblocks.',
      gen: 6,
      keyItem: true,
      name: 'Pokéblock Kit',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeblockkit.png'
    }
  ],
  [
    'pokeblockcase',
    {
      desc: 'A case for holding Pokéblock made with a Berry Blender.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Pokéblock Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeblockcase.png'
    }
  ],
  [
    'pokeflute',
    {
      desc: 'A flute that can play with such a beautiful tone that even sleeping Pokémon find themselves woken up.',
      gen: 1,
      keyItem: true,
      name: 'Poké Flute',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokeflute.png'
    }
  ],
  [
    'pokemonboxlink',
    {
      desc: "A device that allows you to access the Pokémon storage system. There are some places where it won't work.",
      gen: 8,
      keyItem: true,
      name: 'Pokémon Box Link',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/pokemonboxlink.png'
    }
  ],
  [
    'powderjar',
    {
      desc: 'A jar for storing Berry Powder made using a Berry Crusher.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Powder Jar',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/powderjar.png'
    }
  ],
  [
    'powerplantpass',
    {
      desc: 'This pass serves as an ID card for gaining access to the Power Plant that lies along Route 13.',
      gen: 6,
      keyItem: true,
      name: 'Power Plant Pass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/powerplantpass.png'
    }
  ],
  [
    'prisonbottle',
    {
      desc: 'A bottle believed to have been used to seal away the power of a certain Pokémon long, long ago.',
      gen: 6,
      keyItem: true,
      name: 'Prison Bottle',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/prisonbottle.png'
    }
  ],
  [
    'profsletter',
    {
      desc: 'A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.',
      gen: 6,
      keyItem: true,
      name: "Prof's Letter",
      specialSprite: "https://www.serebii.net/itemdex/sprites/prof'sletter.png"
    }
  ],
  [
    'professorsmask',
    {
      desc: 'The mask that belongs to The Masked Royal. This pro wrestler apparently sews his mask on a machine himself.',
      gen: 7,
      keyItem: true,
      name: "Professor's Mask",
      specialSprite: "https://www.serebii.net/itemdex/sprites/professor'smask.png"
    }
  ],
  [
    'propcase',
    {
      desc: 'A lovely case to store colorful Props for your Pokémon to wear in a musical.',
      gen: 5,
      keyItem: true,
      name: 'Prop Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/propcase.png'
    }
  ],
  [
    'purplepetal',
    {
      desc: "A pressed flower petal you receive from Nanu during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Purple Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/purplepetal.png'
    }
  ],
  [
    'ragecandybar',
    {
      desc: "Mahogany Town's famous candy. It can be used once to heal all the status conditions of a Pokémon.",
      gen: 2,
      keyItem: true,
      name: 'Rage Candy Bar',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ragecandybar.png'
    }
  ],
  [
    'rainbowflower',
    {
      desc: "A flower made of the petals you received from captains. It's proof that your growth has been recognized by them.",
      gen: 7,
      keyItem: true,
      name: 'Rainbow Flower',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rainbowflower.png'
    }
  ],
  [
    'rainbowpass',
    {
      desc: 'A pass for ferries between Vermilion and the Sevii Islands. It features a drawing of a rainbow.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Rainbow Pass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rainbowpass.png'
    }
  ],
  [
    'rainbowwing',
    {
      desc: 'A mystical rainbow feather that sparkles.',
      gen: 2,
      keyItem: true,
      name: 'Rainbow Wing',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rainbowwing.png'
    }
  ],
  [
    'redchain',
    {
      desc: 'A mythical chain that is said to link the Legendary Pokémon that created the Sinnoh region.',
      gen: 4,
      keyItem: true,
      name: 'Red Chain',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redchain.png'
    }
  ],
  [
    'redpetal',
    {
      desc: "A pressed flower petal you receive from Kiawe during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Red Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redpetal.png'
    }
  ],
  [
    'redscale',
    {
      desc: 'A scale from a red Gyarados. It glows red like a flame.',
      gen: 2,
      keyItem: true,
      name: 'Red Scale',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/redscale.png'
    }
  ],
  [
    'revealglass',
    {
      desc: "A looking glass that reveals the truth. It's a mysterious glass that returns a Pokémon to its original shape.",
      gen: 5,
      keyItem: true,
      name: 'Reveal Glass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/revealglass.png'
    }
  ],
  [
    'ridepager',
    {
      desc: 'By entering certain numbers on this pager, you can summon Ride Pokémon in an instant.',
      gen: 7,
      keyItem: true,
      name: 'Ride Pager',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ridepager.png'
    }
  ],
  [
    'rm1key',
    {
      desc: 'A key that opens a door inside the Abandoned Ship.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Rm. 1 Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.1key.png'
    }
  ],
  [
    'rm2key',
    {
      desc: 'A key that opens a door inside the Abandoned Ship.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Rm. 2 Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.2key.png'
    }
  ],
  [
    'rm4key',
    {
      desc: 'A key that opens a door inside the Abandoned Ship.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Rm. 4 Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.4key.png'
    }
  ],
  [
    'rm6key',
    {
      desc: 'A key that opens a door inside the Abandoned Ship.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Rm. 6 Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rm.6key.png'
    }
  ],
  [
    'rollerskates',
    {
      desc: 'Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.',
      gen: 6,
      keyItem: true,
      name: 'Roller Skates',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rollerskates.png'
    }
  ],
  [
    'rotombike',
    {
      desc: 'This bike can be combined with the Pokémon Rotom to not only do a turbo boost but also run on the water.',
      gen: 8,
      keyItem: true,
      name: 'Rotom Bike',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rotombike.png'
    }
  ],
  [
    'rotomcatalog',
    {
      desc: 'A catalog of devices that Rotom like. Use the catalog to have Rotom hop in and out of the various devices listed within.',
      gen: 8,
      keyItem: true,
      name: 'Rotom Catalog',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rotomcatalog.png'
    }
  ],
  [
    'ruby',
    {
      desc: 'An exquisitely beautiful gem that has a red glow. It symbolizes passion.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Ruby',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/ruby.png'
    }
  ],
  [
    'rulebook',
    {
      desc: 'It lists the rules for holding battles. For Link Battles, you may choose which set of rules you wish to use.',
      gen: 4,
      keyItem: true,
      name: 'Rule Book',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/rulebook.png'
    }
  ],
  [
    'ssticket',
    {
      desc: 'A ticket required for sailing on the ferry S.S. Aqua. It has a drawing of a ship on its front.',
      gen: 1,
      keyItem: true,
      name: 'S.S. Ticket',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/s.s.ticket.png'
    }
  ],
  [
    'sapphire',
    {
      desc: 'An exquisitely beautiful gem that has a blue glow. It symbolizes honesty.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Sapphire',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sapphire.png'
    }
  ],
  [
    'scanner',
    {
      desc: 'A device found inside Sea Mauville.',
      gen: 6,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Scanner',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/scanner.png'
    }
  ],
  [
    'sealbag',
    {
      desc: 'A tiny bag that can hold 10 Seals for decorating Poké Balls.',
      gen: 4,
      keyItem: true,
      name: 'Seal Bag',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sealbag.png'
    }
  ],
  [
    'sealcase',
    {
      desc: 'A case for storing Seals that can be applied to the exteriors of Poké Balls.',
      gen: 4,
      keyItem: true,
      name: 'Seal Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sealcase.png'
    }
  ],
  [
    'secretkey',
    {
      desc: 'A high-tech key that has to be used at a specific location. It emits a special electronic signal to open a door.',
      gen: 1,
      keyItem: true,
      name: 'Secret Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/secretkey.png'
    }
  ],
  [
    'secretpotion',
    {
      desc: 'A fantastic medicine dispensed by the pharmacy in Cianwood City. It fully heals a Pokémon of any ailment.',
      gen: 2,
      keyItem: true,
      name: 'SecretPotion',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/secretpotion.png'
    }
  ],
  [
    'shinycharm',
    {
      desc: 'A shiny charm said to increase the chance of finding a Shiny Pokémon in the wild.',
      gen: 5,
      keyItem: true,
      name: 'Shiny Charm',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/shinycharm.png'
    }
  ],
  [
    'silphscope',
    {
      desc: 'A scope that lets you see what cannot usually be seen. It is made by Silph Co.',
      gen: 1,
      keyItem: true,
      name: 'Silph Scope',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/silphscope.png'
    }
  ],
  [
    'silverwing',
    {
      desc: 'A strange, silvery feather that sparkles.',
      gen: 2,
      keyItem: true,
      name: 'Silver Wing',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/silverwing.png'
    }
  ],
  [
    'slowpoketail',
    {
      desc: 'A very tasty tail of something. It can be sold at a high price to shops.',
      gen: 2,
      keyItem: true,
      name: 'Slowpoketail',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/slowpoketail.png'
    }
  ],
  [
    'soniasbook',
    {
      desc: "Professor Sonia's published writings. Her new discoveries about the Galar region's legends are recorded in this enjoyable read.",
      gen: 8,
      keyItem: true,
      name: "Sonia's Book",
      specialSprite: "https://www.serebii.net/itemdex/sprites/sonia'sbook.png"
    }
  ],
  [
    'sootsack',
    {
      desc: 'A sack used to gather and hold volcanic ash.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'sootsack',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sootsack.png'
    }
  ],
  [
    'sparklingstone',
    {
      desc: 'A stone entrusted by a Pokémon that has been venerated as a guardian deity in the Alola region. There is said to be some secret in how it sparkles.',
      gen: 7,
      keyItem: true,
      name: 'Sparkling Stone',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sparklingstone.png'
    }
  ],
  [
    'sprayduck',
    {
      desc: 'A watering can shaped like a Psyduck. It helps promote the healthy growth of any Berries planted in good, soft soil.',
      gen: 4,
      keyItem: true,
      name: 'Sprayduck',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sprayduck.png'
    }
  ],
  [
    'sprinklotad',
    {
      desc: 'A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.',
      gen: 6,
      keyItem: true,
      name: 'Sprinklotad',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sprinklotad.png'
    }
  ],
  [
    'squirtbottle',
    {
      desc: 'A bottle used for watering plants in the Berry Pots.',
      gen: 2,
      keyItem: true,
      name: 'Squirtbottle',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/squirtbottle.png'
    }
  ],
  [
    'storagekey',
    {
      desc: "The key to Team Galactic's sinister warehouse located at the edge of Veilstone City.",
      gen: 4,
      keyItem: true,
      name: 'Storage Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/storagekey.png'
    }
  ],
  [
    'suitekey',
    {
      desc: 'A key to one of the suites at a certain luxury hotel by a lake. For some odd reason, it often disappears.',
      gen: 4,
      keyItem: true,
      name: 'Suite Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/suitekey.png'
    }
  ],
  [
    'sunflute',
    {
      desc: 'It is said that the tones it produces were offered up as an expression of gratitude to the Legendary Pokémon of the sun.',
      gen: 7,
      keyItem: true,
      name: 'Sun Flute',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/sunflute.png'
    }
  ],
  [
    'superrod',
    {
      desc: 'An awesome, high-tech fishing rod. Use it at any body of water to fish for wild aquatic Pokémon.',
      gen: 1,
      keyItem: true,
      name: 'Super Rod',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/superrod.png'
    }
  ],
  [
    'surgebadge',
    {
      desc: 'A novelty badge that you can receive at the Kantonian Gym. Rumor has it that it imitates the Badge of a Gym somewhere.',
      gen: 7,
      keyItem: true,
      name: 'Surge Badge',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/surgebadge.png'
    }
  ],
  [
    'tmcase',
    {
      desc: "A case that holds TMs and HMs. It is attached to the Bag's compartment for important items.",
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'TM Case',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tmcase.png'
    }
  ],
  [
    'tmvpass',
    {
      desc: 'A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.',
      gen: 6,
      keyItem: true,
      name: 'TMV Pass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tmvpass.png'
    }
  ],
  [
    'tea',
    {
      desc: 'Aromatic tea that has a slightly bitter taste. It soothes a dry throat.',
      gen: 3,
      keyItem: true,
      name: 'tea',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tea.png'
    }
  ],
  [
    'teachytv',
    {
      desc: 'A television set that is tuned to a program with useful tips for novice Trainers.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Teachy TV',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/teachytv.png'
    }
  ],
  [
    'tidalbell',
    {
      desc: 'A very old-fashioned bell that makes a gentle ringing sound.',
      gen: 1,
      keyItem: true,
      name: 'Tidal Bell',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tidalbell.png'
    }
  ],
  [
    'townmap',
    {
      desc: 'A very convenient map that can be viewed anytime. It even shows you your present location in the region.',
      gen: 1,
      keyItem: true,
      name: 'Town Map',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/townmap.png'
    }
  ],
  [
    'traveltrunk',
    {
      desc: 'A light and yet incredibly effective trunk, which can contain every last piece of clothing that can be bought.',
      gen: 6,
      keyItem: true,
      name: 'Travel Trunk',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/traveltrunk.png'
    }
  ],
  [
    'tripass',
    {
      desc: 'A pass for ferries between One, Two, and Three Island. It has a drawing of three islands.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'tripass',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/tripass.png'
    }
  ],
  [
    'unownreport',
    {
      desc: 'A report of all the discovered kinds of Unown.',
      gen: 4,
      keyItem: true,
      name: 'Unown Report',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/unownreport.png'
    }
  ],
  [
    'vsrecorder',
    {
      desc: 'An amazing device that can record a battle between friends or the battles at certain special battle facilities.',
      gen: 5,
      keyItem: true,
      name: 'Vs. Recorder',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/vs.recorder.png'
    }
  ],
  [
    'vsseeker',
    {
      desc: 'A device that indicates Trainers who want to battle. Its battery charges while you walk.',
      gen: 3,
      keyItem: true,
      name: 'Vs. Seeker',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/vs.seeker.png'
    }
  ],
  [
    'wailmerpail',
    {
      desc: 'This is a tool for watering Berries you planted to make them grow more quickly.',
      gen: 3,
      isNonstandard: 'Past',
      keyItem: true,
      name: 'Wailmer Pail',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/wailmerpail.png'
    }
  ],
  [
    'wishingstar',
    {
      desc: "A stone found in the Galar region with a mysterious power. It's said that your dreams come true if you find one.",
      gen: 8,
      keyItem: true,
      name: 'Wishing Star',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/wishingstar.png'
    }
  ],
  [
    'workskey',
    {
      desc: 'A large key for operating the doors of the Valley Windworks in the canyon. It was held by a Team Galactic Grunt.',
      gen: 4,
      keyItem: true,
      name: 'Works Key',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/workskey.png'
    }
  ],
  [
    'xtransceiver',
    {
      desc: 'A high-tech transceiver with a camera function. It allows up to four-way calls.',
      gen: 5,
      keyItem: true,
      name: 'Xtransceiver',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/xtransceiver.png'
    }
  ],
  [
    'yellowpetal',
    {
      desc: "A pressed flower petal you receive from Ilima during Mina's trial. The goal is to collect seven different kinds of petals.",
      gen: 7,
      keyItem: true,
      name: 'Yellow Petal',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/yellowpetal.png'
    }
  ],
  [
    'zpowering',
    {
      desc: 'A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.',
      gen: 7,
      keyItem: true,
      name: 'Z-Power Ring',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/z-powerring.png'
    }
  ],
  [
    'zring',
    {
      desc: 'A mysterious ring that enables Pokémon to use Z-Power. It requires both the willpower and the physical power of the Trainer wearing it.',
      gen: 7,
      keyItem: true,
      name: 'Z-Ring',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/z-ring.png'
    }
  ],
  [
    'zygardecube',
    {
      desc: 'An item to store Zygarde Cores and Cells. You can also use it to teach Zygarde moves.',
      gen: 7,
      keyItem: true,
      name: 'Zygarde Cube',
      specialSprite: 'https://www.serebii.net/itemdex/sprites/zygardecube.png'
    }
  ]
]);

for (const [key, value] of items.entries()) {
  value.key = key;
}
