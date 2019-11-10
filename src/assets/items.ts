import GraphQLCollection from '../utils/GraphQLCollection';
import { Pokemon } from '../utils/pokemon';

const items = new GraphQLCollection<string, Pokemon.Item>(
  [
    [
      'crucibellite',
      {
        name: 'Crucibellite',
        num: -1,
        gen: 6,
        desc: 'If held by a Crucibelle, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'mail',
      {
        name: 'Mail',
        num: 0,
        gen: 2,
        desc: 'Cannot be given to or taken from a Pokemon, except by Covet/Knock Off/Thief.',
      }
    ],
    [
      'berserkgene',
      {
        name: 'Berserk Gene',
        num: 0,
        gen: 2,
        desc: '(Gen 2) On switch-in, raises holder\'s Attack by 2 and confuses it. Single use.',
      }
    ],
    [
      'masterball',
      {
        name: 'Master Ball',
        num: 1,
        gen: 1,
        desc: 'The best Ball with the ultimate performance. It will catch any wild Pokemon.',
      }
    ],
    [
      'ultraball',
      {
        name: 'Ultra Ball',
        num: 2,
        gen: 1,
        desc: 'An ultra-performance Ball that provides a higher catch rate than a Great Ball.',
      }
    ],
    [
      'greatball',
      {
        name: 'Great Ball',
        num: 3,
        gen: 1,
        desc: 'A high-performance Ball that provides a higher catch rate than a Poke Ball.',
      }
    ],
    [
      'pokeball',
      {
        name: 'Poke Ball',
        num: 4,
        gen: 1,
        desc: 'A device for catching wild Pokemon. It is designed as a capsule system.',
      }
    ],
    [
      'safariball',
      {
        name: 'Safari Ball',
        num: 5,
        gen: 1,
        desc: 'A special Poke Ball that is used only in the Safari Zone and Great Marsh.',
      }
    ],
    [
      'netball',
      {
        name: 'Net Ball',
        num: 6,
        gen: 3,
        desc: 'A Poke Ball that works especially well on Water- and Bug-type Pokemon.',
      }
    ],
    [
      'diveball',
      {
        name: 'Dive Ball',
        num: 7,
        gen: 3,
        desc: 'A Poke Ball that works especially well on Pokemon that live underwater.',
      }
    ],
    [
      'nestball',
      {
        name: 'Nest Ball',
        num: 8,
        gen: 3,
        desc: 'A Poke Ball that works especially well on weaker Pokemon in the wild.',
      }
    ],
    [
      'repeatball',
      {
        name: 'Repeat Ball',
        num: 9,
        gen: 3,
        desc: 'A Poke Ball that works well on Pokemon species that were previously caught.',
      }
    ],
    [
      'timerball',
      {
        name: 'Timer Ball',
        num: 10,
        gen: 3,
        desc: 'A Poke Ball that becomes better the more turns there are in a battle.',
      }
    ],
    [
      'luxuryball',
      {
        name: 'Luxury Ball',
        num: 11,
        gen: 3,
        desc: 'A comfortable Poke Ball that makes a caught wild Pokemon quickly grow friendly.',
      }
    ],
    [
      'premierball',
      {
        name: 'Premier Ball',
        num: 12,
        gen: 3,
        desc: 'A rare Poke Ball that has been crafted to commemorate an event.',
      }
    ],
    [
      'duskball',
      {
        name: 'Dusk Ball',
        num: 13,
        gen: 4,
        desc: 'A Poke Ball that makes it easier to catch wild Pokemon at night or in caves.',
      }
    ],
    [
      'healball',
      {
        name: 'Heal Ball',
        num: 14,
        gen: 4,
        desc: 'A remedial Poke Ball that restores the caught Pokemon\'s HP and status problem.',
      }
    ],
    [
      'quickball',
      {
        name: 'Quick Ball',
        num: 15,
        gen: 4,
        desc: 'A Poke Ball that provides a better catch rate at the start of a wild encounter.',
      }
    ],
    [
      'cherishball',
      {
        name: 'Cherish Ball',
        num: 16,
        gen: 4,
        desc: 'A rare Poke Ball that has been crafted to commemorate an occasion.',
      }
    ],
    [
      'energypowder',
      {
        name: 'Energy Powder',
        num: 34,
        gen: 2,
        desc: 'Restores 50 HP to one Pokemon but lowers Happiness.',
      }
    ],
    [
      'berryjuice',
      {
        name: 'Berry Juice',
        num: 43,
        gen: 2,
        desc: 'Restores 20 HP when at 1/2 max HP or less. Single use.',
      }
    ],
    [
      'sunstone',
      {
        name: 'Sun Stone',
        num: 80,
        gen: 2,
        desc: 'Evolves Gloom into Bellossom, Sunkern into Sunflora, Cottonee into Whimsicott, Petilil into Lilligant, and Helioptile into Heliolisk when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'moonstone',
      {
        name: 'Moon Stone',
        num: 81,
        gen: 1,
        desc: 'Evolves Nidorina into Nidoqueen, Nidorino into Nidoking, Clefairy into Clefable, Jigglypuff into Wigglytuff, Skitty into Delcatty, and Munna into Musharna when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'firestone',
      {
        name: 'Fire Stone',
        num: 82,
        gen: 1,
        desc: 'Evolves Vulpix into Ninetales, Growlithe into Arcanine, Eevee into Flareon, and Pansear into Simisear when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'thunderstone',
      {
        name: 'Thunder Stone',
        num: 83,
        gen: 1,
        desc: 'Evolves Pikachu into Raichu or Alolan Raichu, Eevee into Jolteon, and Eelektrik into Eelektross when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'waterstone',
      {
        name: 'Water Stone',
        num: 84,
        gen: 1,
        desc: 'Evolves Poliwhirl into Poliwrath, Shellder into Cloyster, Staryu into Starmie, Eevee into Vaporeon, Lombre into Ludicolo, and Panpour into Simipour when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'leafstone',
      {
        name: 'Leaf Stone',
        num: 85,
        gen: 1,
        desc: 'Evolves Gloom into Vileplume, Weepinbell into Victreebel, Exeggcute into Exeggutor or Alolan Exeggutor, Nuzleaf into Shiftry, and Pansage into Simisage when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'rootfossil',
      {
        name: 'Root Fossil',
        num: 99,
        gen: 3,
        desc: 'Can be revived into Lileep.',
      }
    ],
    [
      'clawfossil',
      {
        name: 'Claw Fossil',
        num: 100,
        gen: 3,
        desc: 'Can be revived into Anorith.',
      }
    ],
    [
      'helixfossil',
      {
        name: 'Helix Fossil',
        num: 101,
        gen: 3,
        desc: 'Can be revived into Omanyte.',
      }
    ],
    [
      'domefossil',
      {
        name: 'Dome Fossil',
        num: 102,
        gen: 3,
        desc: 'Can be revived into Kabuto.',
      }
    ],
    [
      'oldamber',
      {
        name: 'Old Amber',
        num: 103,
        gen: 3,
        desc: 'Can be revived into Aerodactyl.',
      }
    ],
    [
      'armorfossil',
      {
        name: 'Armor Fossil',
        num: 104,
        gen: 4,
        desc: 'Can be revived into Shieldon.',
      }
    ],
    [
      'skullfossil',
      {
        name: 'Skull Fossil',
        num: 105,
        gen: 4,
        desc: 'Can be revived into Cranidos.',
      }
    ],
    [
      'rarebone',
      {
        name: 'Rare Bone',
        num: 106,
        gen: 4,
        desc: 'No competitive use other than when used with Fling.',
      }
    ],
    [
      'shinystone',
      {
        name: 'Shiny Stone',
        num: 107,
        gen: 4,
        desc: 'Evolves Togetic into Togekiss, Roselia into Roserade, Minccino into Cinccino, and Floette into Florges when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'duskstone',
      {
        name: 'Dusk Stone',
        num: 108,
        gen: 4,
        desc: 'Evolves Murkrow into Honchkrow, Misdreavus into Mismagius, Lampent into Chandelure, and Doublade into Aegislash when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'dawnstone',
      {
        name: 'Dawn Stone',
        num: 109,
        gen: 4,
        desc: 'Evolves male Kirlia into Gallade and female Snorunt into Froslass when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'ovalstone',
      {
        name: 'Oval Stone',
        num: 110,
        gen: 4,
        desc: 'Evolves Happiny into Chansey when held and leveled up during the day.',
      }
    ],
    [
      'griseousorb',
      {
        name: 'Griseous Orb',
        num: 112,
        gen: 4,
        desc: 'If held by a Giratina, its Ghost- and Dragon-type attacks have 1.2x power.',
      }
    ],
    [
      'dousedrive',
      {
        name: 'Douse Drive',
        num: 116,
        gen: 5,
        desc: 'Holder\'s Techno Blast is Water type.',
      }
    ],
    [
      'shockdrive',
      {
        name: 'Shock Drive',
        num: 117,
        gen: 5,
        desc: 'Holder\'s Techno Blast is Electric type.',
      }
    ],
    [
      'burndrive',
      {
        name: 'Burn Drive',
        num: 118,
        gen: 5,
        desc: 'Holder\'s Techno Blast is Fire type.',
      }
    ],
    [
      'chilldrive',
      {
        name: 'Chill Drive',
        num: 119,
        gen: 5,
        desc: 'Holder\'s Techno Blast is Ice type.',
      }
    ],
    [
      'adamantorb',
      {
        name: 'Adamant Orb',
        num: 135,
        gen: 4,
        desc: 'If held by a Dialga, its Steel- and Dragon-type attacks have 1.2x power.',
      }
    ],
    [
      'lustrousorb',
      {
        name: 'Lustrous Orb',
        num: 136,
        gen: 4,
        desc: 'If held by a Palkia, its Water- and Dragon-type attacks have 1.2x power.',
      }
    ],
    [
      'cheriberry',
      {
        name: 'Cheri Berry',
        num: 149,
        gen: 3,
        desc: 'Holder cures itself if it is paralyzed. Single use.',
      }
    ],
    [
      'przcureberry',
      {
        name: 'PRZ Cure Berry',
        num: 149,
        gen: 2,
        desc: '(Gen 2) Holder cures itself if it is paralyzed. Single use.',
      }
    ],
    [
      'chestoberry',
      {
        name: 'Chesto Berry',
        num: 150,
        gen: 3,
        desc: 'Holder wakes up if it is asleep. Single use.',
      }
    ],
    [
      'mintberry',
      {
        name: 'Mint Berry',
        num: 150,
        gen: 2,
        desc: '(Gen 2) Holder wakes up if it is asleep. Single use.',
      }
    ],
    [
      'pechaberry',
      {
        name: 'Pecha Berry',
        num: 151,
        gen: 3,
        desc: 'Holder is cured if it is poisoned. Single use.',
      }
    ],
    [
      'psncureberry',
      {
        name: 'PSN Cure Berry',
        num: 151,
        gen: 2,
        desc: '(Gen 2) Holder is cured if it is poisoned. Single use.',
      }
    ],
    [
      'rawstberry',
      {
        name: 'Rawst Berry',
        num: 152,
        gen: 3,
        desc: 'Holder is cured if it is burned. Single use.',
      }
    ],
    [
      'iceberry',
      {
        name: 'Ice Berry',
        num: 152,
        gen: 2,
        desc: '(Gen 2) Holder is cured if it is burned. Single use.',
      }
    ],
    [
      'aspearberry',
      {
        name: 'Aspear Berry',
        num: 153,
        gen: 3,
        desc: 'Holder is cured if it is frozen. Single use.',
      }
    ],
    [
      'burntberry',
      {
        name: 'Burnt Berry',
        num: 153,
        gen: 2,
        desc: '(Gen 2) Holder is cured if it is frozen. Single use.',
      }
    ],
    [
      'leppaberry',
      {
        name: 'Leppa Berry',
        num: 154,
        gen: 3,
        desc: 'Restores 10 PP to the first of the holder\'s moves to reach 0 PP. Single use.',
      }
    ],
    [
      'mysteryberry',
      {
        name: 'Mystery Berry',
        num: 154,
        gen: 2,
        desc: '(Gen 2) Restores 5 PP to the first of the holder\'s moves to reach 0 PP. Single use.',
      }
    ],
    [
      'oranberry',
      {
        name: 'Oran Berry',
        num: 155,
        gen: 3,
        desc: 'Restores 10 HP when at 1/2 max HP or less. Single use.',
      }
    ],
    [
      'berry',
      {
        name: 'Berry',
        num: 155,
        gen: 2,
        desc: '(Gen 2) Restores 10 HP when at 1/2 max HP or less. Single use.',
      }
    ],
    [
      'persimberry',
      {
        name: 'Persim Berry',
        num: 156,
        gen: 3,
        desc: 'Holder is cured if it is confused. Single use.',
      }
    ],
    [
      'bitterberry',
      {
        name: 'Bitter Berry',
        num: 156,
        gen: 2,
        desc: '(Gen 2) Holder is cured if it is confused. Single use.',
      }
    ],
    [
      'lumberry',
      {
        name: 'Lum Berry',
        num: 157,
        gen: 3,
        desc: 'Holder cures itself if it is confused or has a major status condition. Single use.',
      }
    ],
    [
      'miracleberry',
      {
        name: 'Miracle Berry',
        num: 157,
        gen: 2,
        desc: '(Gen 2) Holder cures itself if it is confused or has a status condition. Single use.',
      }
    ],
    [
      'sitrusberry',
      {
        name: 'Sitrus Berry',
        num: 158,
        gen: 3,
        desc: 'Restores 1/4 max HP when at 1/2 max HP or less. Single use.',
      }
    ],
    [
      'goldberry',
      {
        name: 'Gold Berry',
        num: 158,
        gen: 2,
        desc: '(Gen 2) Restores 30 HP when at 1/2 max HP or less. Single use.',
      }
    ],
    [
      'figyberry',
      {
        name: 'Figy Berry',
        num: 159,
        gen: 3,
        desc: 'Restores 1/2 max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use.',
      }
    ],
    [
      'wikiberry',
      {
        name: 'Wiki Berry',
        num: 160,
        gen: 3,
        desc: 'Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use.',
      }
    ],
    [
      'magoberry',
      {
        name: 'Mago Berry',
        num: 161,
        gen: 3,
        desc: 'Restores 1/2 max HP at 1/4 max HP or less; confuses if -Spe Nature. Single use.',
      }
    ],
    [
      'aguavberry',
      {
        name: 'Aguav Berry',
        num: 162,
        gen: 3,
        desc: 'Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.',
      }
    ],
    [
      'iapapaberry',
      {
        name: 'Iapapa Berry',
        num: 163,
        gen: 3,
        desc: 'Restores 1/2 max HP at 1/4 max HP or less; confuses if -Def Nature. Single use.',
      }
    ],
    [
      'razzberry',
      {
        name: 'Razz Berry',
        num: 164,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'blukberry',
      {
        name: 'Bluk Berry',
        num: 165,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'nanabberry',
      {
        name: 'Nanab Berry',
        num: 166,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'wepearberry',
      {
        name: 'Wepear Berry',
        num: 167,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'pinapberry',
      {
        name: 'Pinap Berry',
        num: 168,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'pomegberry',
      {
        name: 'Pomeg Berry',
        num: 169,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'kelpsyberry',
      {
        name: 'Kelpsy Berry',
        num: 170,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'qualotberry',
      {
        name: 'Qualot Berry',
        num: 171,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'hondewberry',
      {
        name: 'Hondew Berry',
        num: 172,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'grepaberry',
      {
        name: 'Grepa Berry',
        num: 173,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'tamatoberry',
      {
        name: 'Tamato Berry',
        num: 174,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'cornnberry',
      {
        name: 'Cornn Berry',
        num: 175,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'magostberry',
      {
        name: 'Magost Berry',
        num: 176,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'rabutaberry',
      {
        name: 'Rabuta Berry',
        num: 177,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'nomelberry',
      {
        name: 'Nomel Berry',
        num: 178,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'spelonberry',
      {
        name: 'Spelon Berry',
        num: 179,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'pamtreberry',
      {
        name: 'Pamtre Berry',
        num: 180,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'watmelberry',
      {
        name: 'Watmel Berry',
        num: 181,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'durinberry',
      {
        name: 'Durin Berry',
        num: 182,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'belueberry',
      {
        name: 'Belue Berry',
        num: 183,
        gen: 3,
        desc: 'Cannot be eaten by the holder. No effect when eaten with Bug Bite or Pluck.',
      }
    ],
    [
      'occaberry',
      {
        name: 'Occa Berry',
        num: 184,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Fire-type attack. Single use.',
      }
    ],
    [
      'passhoberry',
      {
        name: 'Passho Berry',
        num: 185,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Water-type attack. Single use.',
      }
    ],
    [
      'wacanberry',
      {
        name: 'Wacan Berry',
        num: 186,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Electric-type attack. Single use.',
      }
    ],
    [
      'rindoberry',
      {
        name: 'Rindo Berry',
        num: 187,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Grass-type attack. Single use.',
      }
    ],
    [
      'yacheberry',
      {
        name: 'Yache Berry',
        num: 188,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Ice-type attack. Single use.',
      }
    ],
    [
      'chopleberry',
      {
        name: 'Chople Berry',
        num: 189,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Fighting-type attack. Single use.',
      }
    ],
    [
      'kebiaberry',
      {
        name: 'Kebia Berry',
        num: 190,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Poison-type attack. Single use.',
      }
    ],
    [
      'shucaberry',
      {
        name: 'Shuca Berry',
        num: 191,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Ground-type attack. Single use.',
      }
    ],
    [
      'cobaberry',
      {
        name: 'Coba Berry',
        num: 192,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Flying-type attack. Single use.',
      }
    ],
    [
      'payapaberry',
      {
        name: 'Payapa Berry',
        num: 193,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Psychic-type attack. Single use.',
      }
    ],
    [
      'tangaberry',
      {
        name: 'Tanga Berry',
        num: 194,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Bug-type attack. Single use.',
      }
    ],
    [
      'chartiberry',
      {
        name: 'Charti Berry',
        num: 195,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Rock-type attack. Single use.',
      }
    ],
    [
      'kasibberry',
      {
        name: 'Kasib Berry',
        num: 196,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Ghost-type attack. Single use.',
      }
    ],
    [
      'habanberry',
      {
        name: 'Haban Berry',
        num: 197,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Dragon-type attack. Single use.',
      }
    ],
    [
      'colburberry',
      {
        name: 'Colbur Berry',
        num: 198,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Dark-type attack. Single use.',
      }
    ],
    [
      'babiriberry',
      {
        name: 'Babiri Berry',
        num: 199,
        gen: 4,
        desc: 'Halves damage taken from a supereffective Steel-type attack. Single use.',
      }
    ],
    [
      'chilanberry',
      {
        name: 'Chilan Berry',
        num: 200,
        gen: 4,
        desc: 'Halves damage taken from a Normal-type attack. Single use.',
      }
    ],
    [
      'liechiberry',
      {
        name: 'Liechi Berry',
        num: 201,
        gen: 3,
        desc: 'Raises holder\'s Attack by 1 stage when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'ganlonberry',
      {
        name: 'Ganlon Berry',
        num: 202,
        gen: 3,
        desc: 'Raises holder\'s Defense by 1 stage when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'petayaberry',
      {
        name: 'Petaya Berry',
        num: 204,
        gen: 3,
        desc: 'Raises holder\'s Sp. Atk by 1 stage when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'apicotberry',
      {
        name: 'Apicot Berry',
        num: 205,
        gen: 3,
        desc: 'Raises holder\'s Sp. Def by 1 stage when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'lansatberry',
      {
        name: 'Lansat Berry',
        num: 206,
        gen: 3,
        desc: 'Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'starfberry',
      {
        name: 'Starf Berry',
        num: 207,
        gen: 3,
        desc: 'Raises a random stat by 2 when at 1/4 max HP or less (not acc/eva). Single use.',
      }
    ],
    [
      'enigmaberry',
      {
        name: 'Enigma Berry',
        num: 208,
        gen: 3,
        desc: 'Restores 1/4 max HP after holder is hit by a supereffective move. Single use.',
      }
    ],
    [
      'micleberry',
      {
        name: 'Micle Berry',
        num: 209,
        gen: 4,
        desc: 'Holder\'s next move has 1.2x accuracy when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'custapberry',
      {
        name: 'Custap Berry',
        num: 210,
        gen: 4,
        desc: 'Holder moves first in its priority bracket when at 1/4 max HP or less. Single use.',
      }
    ],
    [
      'jabocaberry',
      {
        name: 'Jaboca Berry',
        num: 211,
        gen: 4,
        desc: 'If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use.',
      }
    ],
    [
      'rowapberry',
      {
        name: 'Rowap Berry',
        num: 212,
        gen: 4,
        desc: 'If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use.',
      }
    ],
    [
      'brightpowder',
      {
        name: 'BrightPowder',
        num: 213,
        gen: 2,
        desc: 'The accuracy of attacks against the holder is 0.9x.',
      }
    ],
    [
      'whiteherb',
      {
        name: 'White Herb',
        num: 214,
        gen: 3,
        desc: 'Restores all lowered stat stages to 0 when one is less than 0. Single use.',
      }
    ],
    [
      'machobrace',
      {
        name: 'Macho Brace',
        num: 215,
        gen: 3,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'quickclaw',
      {
        name: 'Quick Claw',
        num: 217,
        gen: 2,
        desc: 'Each turn, holder has a 20% chance to move first in its priority bracket.',
      }
    ],
    [
      'mentalherb',
      {
        name: 'Mental Herb',
        num: 219,
        gen: 3,
        desc: 'Cures holder of Attract, Disable, Encore, Heal Block, Taunt, Torment. Single use.',
      }
    ],
    [
      'choiceband',
      {
        name: 'Choice Band',
        num: 220,
        gen: 3,
        desc: 'Holder\'s Attack is 1.5x, but it can only select the first move it executes.',
      }
    ],
    [
      'kingsrock',
      {
        name: 'King\'s Rock',
        num: 221,
        gen: 2,
        desc: 'Holder\'s attacks without a chance to flinch gain a 10% chance to flinch. Evolves Poliwhirl into Politoed and Slowpoke into Slowking when traded.',
        shortDesc: 'Holder\'s attacks without a chance to flinch gain a 10% chance to flinch.',
      }
    ],
    [
      'silverpowder',
      {
        name: 'SilverPowder',
        num: 222,
        gen: 2,
        desc: 'Holder\'s Bug-type attacks have 1.2x power.',
      }
    ],
    [
      'souldew',
      {
        name: 'Soul Dew',
        num: 225,
        gen: 3,
        desc: 'If held by a Latias/Latios, its Dragon- and Psychic-type moves have 1.2x power.',
      }
    ],
    [
      'deepseatooth',
      {
        name: 'Deep Sea Tooth',
        num: 226,
        gen: 3,
        desc: 'If held by a Clamperl, its Sp. Atk is doubled. Evolves Clamperl into Huntail when traded.',
        shortDesc: 'If held by a Clamperl, its Sp. Atk is doubled.',
      }
    ],
    [
      'deepseascale',
      {
        name: 'Deep Sea Scale',
        num: 227,
        gen: 3,
        desc: 'If held by a Clamperl, its Sp. Def is doubled. Evolves Clamperl into Gorebyss when traded.',
        shortDesc: 'If held by a Clamperl, its Sp. Def is doubled.',
      }
    ],
    [
      'focusband',
      {
        name: 'Focus Band',
        num: 230,
        gen: 2,
        desc: 'Holder has a 10% chance to survive an attack that would KO it with 1 HP.',
      }
    ],
    [
      'scopelens',
      {
        name: 'Scope Lens',
        num: 232,
        gen: 2,
        desc: 'Holder\'s critical hit ratio is raised by 1 stage.',
      }
    ],
    [
      'metalcoat',
      {
        name: 'Metal Coat',
        num: 233,
        gen: 2,
        desc: 'Holder\'s Steel-type attacks have 1.2x power. Evolves Onix into Steelix and Scyther into Scizor when traded.',
        shortDesc: 'Holder\'s Steel-type attacks have 1.2x power.',
      }
    ],
    [
      'leftovers',
      {
        name: 'Leftovers',
        num: 234,
        gen: 2,
        desc: 'At the end of every turn, holder restores 1/16 of its max HP.',
      }
    ],
    [
      'lightball',
      {
        name: 'Light Ball',
        num: 236,
        gen: 2,
        desc: 'If held by a Pikachu, its Attack and Sp. Atk are doubled.',
      }
    ],
    [
      'softsand',
      {
        name: 'Soft Sand',
        num: 237,
        gen: 2,
        desc: 'Holder\'s Ground-type attacks have 1.2x power.',
      }
    ],
    [
      'hardstone',
      {
        name: 'Hard Stone',
        num: 238,
        gen: 2,
        desc: 'Holder\'s Rock-type attacks have 1.2x power.',
      }
    ],
    [
      'miracleseed',
      {
        name: 'Miracle Seed',
        num: 239,
        gen: 2,
        desc: 'Holder\'s Grass-type attacks have 1.2x power.',
      }
    ],
    [
      'blackglasses',
      {
        name: 'Black Glasses',
        num: 240,
        gen: 2,
        desc: 'Holder\'s Dark-type attacks have 1.2x power.',
      }
    ],
    [
      'blackbelt',
      {
        name: 'Black Belt',
        num: 241,
        gen: 2,
        desc: 'Holder\'s Fighting-type attacks have 1.2x power.',
      }
    ],
    [
      'magnet',
      {
        name: 'Magnet',
        num: 242,
        gen: 2,
        desc: 'Holder\'s Electric-type attacks have 1.2x power.',
      }
    ],
    [
      'mysticwater',
      {
        name: 'Mystic Water',
        num: 243,
        gen: 2,
        desc: 'Holder\'s Water-type attacks have 1.2x power.',
      }
    ],
    [
      'sharpbeak',
      {
        name: 'Sharp Beak',
        num: 244,
        gen: 2,
        desc: 'Holder\'s Flying-type attacks have 1.2x power.',
      }
    ],
    [
      'poisonbarb',
      {
        name: 'Poison Barb',
        num: 245,
        gen: 2,
        desc: 'Holder\'s Poison-type attacks have 1.2x power.',
      }
    ],
    [
      'nevermeltice',
      {
        name: 'Never-Melt Ice',
        num: 246,
        gen: 2,
        desc: 'Holder\'s Ice-type attacks have 1.2x power.',
      }
    ],
    [
      'spelltag',
      {
        name: 'Spell Tag',
        num: 247,
        gen: 2,
        desc: 'Holder\'s Ghost-type attacks have 1.2x power.',
      }
    ],
    [
      'twistedspoon',
      {
        name: 'Twisted Spoon',
        num: 248,
        gen: 2,
        desc: 'Holder\'s Psychic-type attacks have 1.2x power.',
      }
    ],
    [
      'charcoal',
      {
        name: 'Charcoal',
        num: 249,
        gen: 2,
        desc: 'Holder\'s Fire-type attacks have 1.2x power.',
      }
    ],
    [
      'dragonfang',
      {
        name: 'Dragon Fang',
        num: 250,
        gen: 2,
        desc: 'Holder\'s Dragon-type attacks have 1.2x power.',
      }
    ],
    [
      'dragonscale',
      {
        name: 'Dragon Scale',
        num: 250,
        gen: 2,
        desc: 'Evolves Seadra into Kingdra when traded.',
      }
    ],
    [
      'silkscarf',
      {
        name: 'Silk Scarf',
        num: 251,
        gen: 3,
        desc: 'Holder\'s Normal-type attacks have 1.2x power.',
      }
    ],
    [
      'pinkbow',
      {
        name: 'Pink Bow',
        num: 251,
        gen: 2,
        desc: '(Gen 2) Holder\'s Normal-type attacks have 1.1x power.',
      }
    ],
    [
      'polkadotbow',
      {
        name: 'Polkadot Bow',
        num: 251,
        gen: 2,
        desc: '(Gen 2) Holder\'s Normal-type attacks have 1.1x power.',
      }
    ],
    [
      'upgrade',
      {
        name: 'Up-Grade',
        num: 252,
        gen: 2,
        desc: 'Evolves Porygon into Porygon2 when traded.',
      }
    ],
    [
      'shellbell',
      {
        name: 'Shell Bell',
        num: 253,
        gen: 3,
        desc: 'After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon.',
      }
    ],
    [
      'seaincense',
      {
        name: 'Sea Incense',
        num: 254,
        gen: 3,
        desc: 'Holder\'s Water-type attacks have 1.2x power.',
      }
    ],
    [
      'laxincense',
      {
        name: 'Lax Incense',
        num: 255,
        gen: 3,
        desc: 'The accuracy of attacks against the holder is 0.9x.',
      }
    ],
    [
      'luckypunch',
      {
        name: 'Lucky Punch',
        num: 256,
        gen: 2,
        desc: 'If held by a Chansey, its critical hit ratio is raised by 2 stages.',
      }
    ],
    [
      'metalpowder',
      {
        name: 'Metal Powder',
        num: 257,
        gen: 2,
        desc: 'If held by a Ditto that hasn\'t Transformed, its Defense is doubled.',
      }
    ],
    [
      'thickclub',
      {
        name: 'Thick Club',
        num: 258,
        gen: 2,
        desc: 'If held by a Cubone or a Marowak, its Attack is doubled.',
      }
    ],
    [
      'stick',
      {
        name: 'Stick',
        num: 259,
        gen: 2,
        desc: 'If held by a Farfetch\'d, its critical hit ratio is raised by 2 stages.',
      }
    ],
    [
      'widelens',
      {
        name: 'Wide Lens',
        num: 265,
        gen: 4,
        desc: 'The accuracy of attacks by the holder is 1.1x.',
      }
    ],
    [
      'muscleband',
      {
        name: 'Muscle Band',
        num: 266,
        gen: 4,
        desc: 'Holder\'s physical attacks have 1.1x power.',
      }
    ],
    [
      'wiseglasses',
      {
        name: 'Wise Glasses',
        num: 267,
        gen: 4,
        desc: 'Holder\'s special attacks have 1.1x power.',
      }
    ],
    [
      'expertbelt',
      {
        name: 'Expert Belt',
        num: 268,
        gen: 4,
        desc: 'Holder\'s attacks that are super effective against the target do 1.2x damage.',
      }
    ],
    [
      'lightclay',
      {
        name: 'Light Clay',
        num: 269,
        gen: 4,
        desc: 'Holder\'s use of Aurora Veil, Light Screen, or Reflect lasts 8 turns instead of 5.',
      }
    ],
    [
      'lifeorb',
      {
        name: 'Life Orb',
        num: 270,
        gen: 4,
        desc: 'Holder\'s attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.',
      }
    ],
    [
      'powerherb',
      {
        name: 'Power Herb',
        num: 271,
        gen: 4,
        desc: 'Holder\'s two-turn moves complete in one turn (except Sky Drop). Single use.',
      }
    ],
    [
      'toxicorb',
      {
        name: 'Toxic Orb',
        num: 272,
        gen: 4,
        desc: 'At the end of every turn, this item attempts to badly poison the holder.',
      }
    ],
    [
      'flameorb',
      {
        name: 'Flame Orb',
        num: 273,
        gen: 4,
        desc: 'At the end of every turn, this item attempts to burn the holder.',
      }
    ],
    [
      'quickpowder',
      {
        name: 'Quick Powder',
        num: 274,
        gen: 4,
        desc: 'If held by a Ditto that hasn\'t Transformed, its Speed is doubled.',
      }
    ],
    [
      'focussash',
      {
        name: 'Focus Sash',
        num: 275,
        gen: 4,
        desc: 'If holder\'s HP is full, will survive an attack that would KO it with 1 HP. Single use.',
      }
    ],
    [
      'zoomlens',
      {
        name: 'Zoom Lens',
        num: 276,
        gen: 4,
        desc: 'The accuracy of attacks by the holder is 1.2x if it moves after its target.',
      }
    ],
    [
      'metronome',
      {
        name: 'Metronome',
        num: 277,
        gen: 4,
        desc: 'Damage of moves used on consecutive turns is increased. Max 2x after 5 turns.',
      }
    ],
    [
      'ironball',
      {
        name: 'Iron Ball',
        num: 278,
        gen: 4,
        desc: 'Holder is grounded, Speed halved. If Flying type, takes neutral Ground damage.',
      }
    ],
    [
      'laggingtail',
      {
        name: 'Lagging Tail',
        num: 279,
        gen: 4,
        desc: 'Holder moves last in its priority bracket.',
      }
    ],
    [
      'destinyknot',
      {
        name: 'Destiny Knot',
        num: 280,
        gen: 4,
        desc: 'If holder becomes infatuated, the other Pokemon also becomes infatuated.',
      }
    ],
    [
      'blacksludge',
      {
        name: 'Black Sludge',
        num: 281,
        gen: 4,
        desc: 'Each turn, if holder is a Poison type, restores 1/16 max HP; loses 1/8 if not.',
      }
    ],
    [
      'icyrock',
      {
        name: 'Icy Rock',
        num: 282,
        gen: 4,
        desc: 'Holder\'s use of Hail lasts 8 turns instead of 5.',
      }
    ],
    [
      'smoothrock',
      {
        name: 'Smooth Rock',
        num: 283,
        gen: 4,
        desc: 'Holder\'s use of Sandstorm lasts 8 turns instead of 5.',
      }
    ],
    [
      'heatrock',
      {
        name: 'Heat Rock',
        num: 284,
        gen: 4,
        desc: 'Holder\'s use of Sunny Day lasts 8 turns instead of 5.',
      }
    ],
    [
      'damprock',
      {
        name: 'Damp Rock',
        num: 285,
        gen: 4,
        desc: 'Holder\'s use of Rain Dance lasts 8 turns instead of 5.',
      }
    ],
    [
      'gripclaw',
      {
        name: 'Grip Claw',
        num: 286,
        gen: 4,
        desc: 'Holder\'s partial-trapping moves always last 7 turns.',
      }
    ],
    [
      'choicescarf',
      {
        name: 'Choice Scarf',
        num: 287,
        gen: 4,
        desc: 'Holder\'s Speed is 1.5x, but it can only select the first move it executes.',
      }
    ],
    [
      'stickybarb',
      {
        name: 'Sticky Barb',
        num: 288,
        gen: 4,
        desc: 'Each turn, holder loses 1/8 max HP. An attacker making contact can receive it.',
      }
    ],
    [
      'powerbracer',
      {
        name: 'Power Bracer',
        num: 289,
        gen: 4,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'powerbelt',
      {
        name: 'Power Belt',
        num: 290,
        gen: 4,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'powerlens',
      {
        name: 'Power Lens',
        num: 291,
        gen: 4,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'powerband',
      {
        name: 'Power Band',
        num: 292,
        gen: 4,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'poweranklet',
      {
        name: 'Power Anklet',
        num: 293,
        gen: 4,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'powerweight',
      {
        name: 'Power Weight',
        num: 294,
        gen: 4,
        desc: 'Holder\'s Speed is halved. The Ability Klutz does not ignore this effect.',
      }
    ],
    [
      'shedshell',
      {
        name: 'Shed Shell',
        num: 295,
        gen: 4,
        desc: 'Holder may switch out even when trapped by another Pokemon, or by Ingrain.',
      }
    ],
    [
      'bigroot',
      {
        name: 'Big Root',
        num: 296,
        gen: 4,
        desc: 'Holder gains 1.3x HP from draining/Aqua Ring/Ingrain/Leech Seed/Strength Sap.',
      }
    ],
    [
      'choicespecs',
      {
        name: 'Choice Specs',
        num: 297,
        gen: 4,
        desc: 'Holder\'s Sp. Atk is 1.5x, but it can only select the first move it executes.',
      }
    ],
    [
      'flameplate',
      {
        name: 'Flame Plate',
        num: 298,
        gen: 4,
        desc: 'Holder\'s Fire-type attacks have 1.2x power. Judgment is Fire type.',
      }
    ],
    [
      'splashplate',
      {
        name: 'Splash Plate',
        num: 299,
        gen: 4,
        desc: 'Holder\'s Water-type attacks have 1.2x power. Judgment is Water type.',
      }
    ],
    [
      'zapplate',
      {
        name: 'Zap Plate',
        num: 300,
        gen: 4,
        desc: 'Holder\'s Electric-type attacks have 1.2x power. Judgment is Electric type.',
      }
    ],
    [
      'meadowplate',
      {
        name: 'Meadow Plate',
        num: 301,
        gen: 4,
        desc: 'Holder\'s Grass-type attacks have 1.2x power. Judgment is Grass type.',
      }
    ],
    [
      'icicleplate',
      {
        name: 'Icicle Plate',
        num: 302,
        gen: 4,
        desc: 'Holder\'s Ice-type attacks have 1.2x power. Judgment is Ice type.',
      }
    ],
    [
      'fistplate',
      {
        name: 'Fist Plate',
        num: 303,
        gen: 4,
        desc: 'Holder\'s Fighting-type attacks have 1.2x power. Judgment is Fighting type.',
      }
    ],
    [
      'toxicplate',
      {
        name: 'Toxic Plate',
        num: 304,
        gen: 4,
        desc: 'Holder\'s Poison-type attacks have 1.2x power. Judgment is Poison type.',
      }
    ],
    [
      'earthplate',
      {
        name: 'Earth Plate',
        num: 305,
        gen: 4,
        desc: 'Holder\'s Ground-type attacks have 1.2x power. Judgment is Ground type.',
      }
    ],
    [
      'skyplate',
      {
        name: 'Sky Plate',
        num: 306,
        gen: 4,
        desc: 'Holder\'s Flying-type attacks have 1.2x power. Judgment is Flying type.',
      }
    ],
    [
      'mindplate',
      {
        name: 'Mind Plate',
        num: 307,
        gen: 4,
        desc: 'Holder\'s Psychic-type attacks have 1.2x power. Judgment is Psychic type.',
      }
    ],
    [
      'insectplate',
      {
        name: 'Insect Plate',
        num: 308,
        gen: 4,
        desc: 'Holder\'s Bug-type attacks have 1.2x power. Judgment is Bug type.',
      }
    ],
    [
      'stoneplate',
      {
        name: 'Stone Plate',
        num: 309,
        gen: 4,
        desc: 'Holder\'s Rock-type attacks have 1.2x power. Judgment is Rock type.',
      }
    ],
    [
      'spookyplate',
      {
        name: 'Spooky Plate',
        num: 310,
        gen: 4,
        desc: 'Holder\'s Ghost-type attacks have 1.2x power. Judgment is Ghost type.',
      }
    ],
    [
      'dracoplate',
      {
        name: 'Draco Plate',
        num: 311,
        gen: 4,
        desc: 'Holder\'s Dragon-type attacks have 1.2x power. Judgment is Dragon type.',
      }
    ],
    [
      'dreadplate',
      {
        name: 'Dread Plate',
        num: 312,
        gen: 4,
        desc: 'Holder\'s Dark-type attacks have 1.2x power. Judgment is Dark type.',
      }
    ],
    [
      'ironplate',
      {
        name: 'Iron Plate',
        num: 313,
        gen: 4,
        desc: 'Holder\'s Steel-type attacks have 1.2x power. Judgment is Steel type.',
      }
    ],
    [
      'oddincense',
      {
        name: 'Odd Incense',
        num: 314,
        gen: 4,
        desc: 'Holder\'s Psychic-type attacks have 1.2x power.',
      }
    ],
    [
      'rockincense',
      {
        name: 'Rock Incense',
        num: 315,
        gen: 4,
        desc: 'Holder\'s Rock-type attacks have 1.2x power.',
      }
    ],
    [
      'fullincense',
      {
        name: 'Full Incense',
        num: 316,
        gen: 4,
        desc: 'Holder moves last in its priority bracket.',
      }
    ],
    [
      'waveincense',
      {
        name: 'Wave Incense',
        num: 317,
        gen: 4,
        desc: 'Holder\'s Water-type attacks have 1.2x power.',
      }
    ],
    [
      'roseincense',
      {
        name: 'Rose Incense',
        num: 318,
        gen: 4,
        desc: 'Holder\'s Grass-type attacks have 1.2x power.',
      }
    ],
    [
      'protector',
      {
        name: 'Protector',
        num: 321,
        gen: 4,
        desc: 'Evolves Rhydon into Rhyperior when traded.',
      }
    ],
    [
      'electirizer',
      {
        name: 'Electirizer',
        num: 322,
        gen: 4,
        desc: 'Evolves Electabuzz into Electivire when traded.',
      }
    ],
    [
      'magmarizer',
      {
        name: 'Magmarizer',
        num: 323,
        gen: 4,
        desc: 'Evolves Magmar into Magmortar when traded.',
      }
    ],
    [
      'dubiousdisc',
      {
        name: 'Dubious Disc',
        num: 324,
        gen: 4,
        desc: 'Evolves Porygon2 into Porygon-Z when traded.',
      }
    ],
    [
      'reapercloth',
      {
        name: 'Reaper Cloth',
        num: 325,
        gen: 4,
        desc: 'Evolves Dusclops into Dusknoir when traded.',
      }
    ],
    [
      'razorclaw',
      {
        name: 'Razor Claw',
        num: 326,
        gen: 4,
        desc: 'Holder\'s critical hit ratio is raised by 1 stage. Evolves Sneasel into Weavile when held and leveled up during the night.',
        shortDesc: 'Holder\'s critical hit ratio is raised by 1 stage.',
      }
    ],
    [
      'razorfang',
      {
        name: 'Razor Fang',
        num: 327,
        gen: 4,
        desc: 'Holder\'s attacks without a chance to flinch gain a 10% chance to flinch. Evolves Gligar into Gliscor when held and leveled up during the night.',
        shortDesc: 'Holder\'s attacks without a chance to flinch gain a 10% chance to flinch.',
      }
    ],
    [
      'fastball',
      {
        name: 'Fast Ball',
        num: 492,
        gen: 2,
        desc: 'A Poke Ball that makes it easier to catch Pokemon which are quick to run away.',
      }
    ],
    [
      'levelball',
      {
        name: 'Level Ball',
        num: 493,
        gen: 2,
        desc: 'A Poke Ball for catching Pokemon that are a lower level than your own.',
      }
    ],
    [
      'lureball',
      {
        name: 'Lure Ball',
        num: 494,
        gen: 2,
        desc: 'A Poke Ball for catching Pokemon hooked by a Rod when fishing.',
      }
    ],
    [
      'heavyball',
      {
        name: 'Heavy Ball',
        num: 495,
        gen: 2,
        desc: 'A Poke Ball for catching very heavy Pokemon.',
      }
    ],
    [
      'loveball',
      {
        name: 'Love Ball',
        num: 496,
        gen: 2,
        desc: 'Poke Ball for catching Pokemon that are the opposite gender of your Pokemon.',
      }
    ],
    [
      'friendball',
      {
        name: 'Friend Ball',
        num: 497,
        gen: 2,
        desc: 'A Poke Ball that makes caught Pokemon more friendly.',
      }
    ],
    [
      'moonball',
      {
        name: 'Moon Ball',
        num: 498,
        gen: 2,
        desc: 'A Poke Ball for catching Pokemon that evolve using the Moon Stone.',
      }
    ],
    [
      'sportball',
      {
        name: 'Sport Ball',
        num: 499,
        gen: 2,
        desc: 'A special Poke Ball for the Bug-Catching Contest.',
      }
    ],
    [
      'parkball',
      {
        name: 'Park Ball',
        num: 500,
        gen: 4,
        desc: 'A special Poke Ball for the Pal Park.',
      }
    ],
    [
      'redorb',
      {
        name: 'Red Orb',
        num: 534,
        gen: 6,
        desc: 'If held by a Groudon, this item triggers its Primal Reversion in battle.',
      }
    ],
    [
      'blueorb',
      {
        name: 'Blue Orb',
        num: 535,
        gen: 6,
        desc: 'If held by a Kyogre, this item triggers its Primal Reversion in battle.',
      }
    ],
    [
      'prismscale',
      {
        name: 'Prism Scale',
        num: 537,
        gen: 5,
        desc: 'Evolves Feebas into Milotic when traded.',
      }
    ],
    [
      'eviolite',
      {
        name: 'Eviolite',
        num: 538,
        gen: 5,
        desc: 'If holder\'s species can evolve, its Defense and Sp. Def are 1.5x.',
      }
    ],
    [
      'floatstone',
      {
        name: 'Float Stone',
        num: 539,
        gen: 5,
        desc: 'Holder\'s weight is halved.',
      }
    ],
    [
      'rockyhelmet',
      {
        name: 'Rocky Helmet',
        num: 540,
        gen: 5,
        desc: 'If holder is hit by a contact move, the attacker loses 1/6 of its max HP.',
      }
    ],
    [
      'airballoon',
      {
        name: 'Air Balloon',
        num: 541,
        gen: 5,
        desc: 'Holder is immune to Ground-type attacks. Pops when holder is hit.',
      }
    ],
    [
      'redcard',
      {
        name: 'Red Card',
        num: 542,
        gen: 5,
        desc: 'If holder survives a hit, attacker is forced to switch to a random ally. Single use.',
      }
    ],
    [
      'ringtarget',
      {
        name: 'Ring Target',
        num: 543,
        gen: 5,
        desc: 'The holder\'s type immunities granted solely by its typing are negated.',
      }
    ],
    [
      'bindingband',
      {
        name: 'Binding Band',
        num: 544,
        gen: 5,
        desc: 'Holder\'s partial-trapping moves deal 1/6 max HP per turn instead of 1/8.',
      }
    ],
    [
      'absorbbulb',
      {
        name: 'Absorb Bulb',
        num: 545,
        gen: 5,
        desc: 'Raises holder\'s Sp. Atk by 1 stage if hit by a Water-type attack. Single use.',
      }
    ],
    [
      'cellbattery',
      {
        name: 'Cell Battery',
        num: 546,
        gen: 5,
        desc: 'Raises holder\'s Attack by 1 if hit by an Electric-type attack. Single use.',
      }
    ],
    [
      'ejectbutton',
      {
        name: 'Eject Button',
        num: 547,
        gen: 5,
        desc: 'If holder survives a hit, it immediately switches out to a chosen ally. Single use.',
      }
    ],
    [
      'firegem',
      {
        name: 'Fire Gem',
        num: 548,
        gen: 5,
        desc: 'Holder\'s first successful Fire-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'watergem',
      {
        name: 'Water Gem',
        num: 549,
        gen: 5,
        desc: 'Holder\'s first successful Water-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'electricgem',
      {
        name: 'Electric Gem',
        num: 550,
        gen: 5,
        desc: 'Holder\'s first successful Electric-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'grassgem',
      {
        name: 'Grass Gem',
        num: 551,
        gen: 5,
        desc: 'Holder\'s first successful Grass-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'icegem',
      {
        name: 'Ice Gem',
        num: 552,
        gen: 5,
        desc: 'Holder\'s first successful Ice-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'fightinggem',
      {
        name: 'Fighting Gem',
        num: 553,
        gen: 5,
        desc: 'Holder\'s first successful Fighting-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'poisongem',
      {
        name: 'Poison Gem',
        num: 554,
        gen: 5,
        desc: 'Holder\'s first successful Poison-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'groundgem',
      {
        name: 'Ground Gem',
        num: 555,
        gen: 5,
        desc: 'Holder\'s first successful Ground-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'flyinggem',
      {
        name: 'Flying Gem',
        num: 556,
        gen: 5,
        desc: 'Holder\'s first successful Flying-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'psychicgem',
      {
        name: 'Psychic Gem',
        num: 557,
        gen: 5,
        desc: 'Holder\'s first successful Psychic-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'buggem',
      {
        name: 'Bug Gem',
        num: 558,
        gen: 5,
        desc: 'Holder\'s first successful Bug-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'rockgem',
      {
        name: 'Rock Gem',
        num: 559,
        gen: 5,
        desc: 'Holder\'s first successful Rock-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'ghostgem',
      {
        name: 'Ghost Gem',
        num: 560,
        gen: 5,
        desc: 'Holder\'s first successful Ghost-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'dragongem',
      {
        name: 'Dragon Gem',
        num: 561,
        gen: 5,
        desc: 'Holder\'s first successful Dragon-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'darkgem',
      {
        name: 'Dark Gem',
        num: 562,
        gen: 5,
        desc: 'Holder\'s first successful Dark-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'steelgem',
      {
        name: 'Steel Gem',
        num: 563,
        gen: 5,
        desc: 'Holder\'s first successful Steel-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'normalgem',
      {
        name: 'Normal Gem',
        num: 564,
        gen: 5,
        desc: 'Holder\'s first successful Normal-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'coverfossil',
      {
        name: 'Cover Fossil',
        num: 572,
        gen: 5,
        desc: 'Can be revived into Tirtouga.',
      }
    ],
    [
      'plumefossil',
      {
        name: 'Plume Fossil',
        num: 573,
        gen: 5,
        desc: 'Can be revived into Archen.',
      }
    ],
    [
      'dreamball',
      {
        name: 'Dream Ball',
        num: 576,
        gen: 5,
        desc: 'A special Poke Ball that appears out of nowhere in a bag at the Entree Forest.',
      }
    ],
    [
      'weaknesspolicy',
      {
        name: 'Weakness Policy',
        num: 639,
        gen: 6,
        desc: 'If holder is hit super effectively, raises Attack, Sp. Atk by 2 stages. Single use.',
      }
    ],
    [
      'assaultvest',
      {
        name: 'Assault Vest',
        num: 640,
        gen: 6,
        desc: 'Holder\'s Sp. Def is 1.5x, but it can only select damaging moves.',
      }
    ],
    [
      'pixieplate',
      {
        name: 'Pixie Plate',
        num: 644,
        gen: 6,
        desc: 'Holder\'s Fairy-type attacks have 1.2x power. Judgment is Fairy type.',
      }
    ],
    [
      'whippeddream',
      {
        name: 'Whipped Dream',
        num: 646,
        gen: 6,
        desc: 'Evolves Swirlix into Slurpuff when traded.',
      }
    ],
    [
      'sachet',
      {
        name: 'Sachet',
        num: 647,
        gen: 6,
        desc: 'Evolves Spritzee into Aromatisse when traded.',
      }
    ],
    [
      'luminousmoss',
      {
        name: 'Luminous Moss',
        num: 648,
        gen: 6,
        desc: 'Raises holder\'s Sp. Def by 1 stage if hit by a Water-type attack. Single use.',
      }
    ],
    [
      'snowball',
      {
        name: 'Snowball',
        num: 649,
        gen: 6,
        desc: 'Raises holder\'s Attack by 1 if hit by an Ice-type attack. Single use.',
      }
    ],
    [
      'safetygoggles',
      {
        name: 'Safety Goggles',
        num: 650,
        gen: 6,
        desc: 'Holder is immune to powder moves and damage from Sandstorm or Hail.',
      }
    ],
    [
      'gengarite',
      {
        name: 'Gengarite',
        num: 656,
        gen: 6,
        desc: 'If held by a Gengar, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'gardevoirite',
      {
        name: 'Gardevoirite',
        num: 657,
        gen: 6,
        desc: 'If held by a Gardevoir, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'ampharosite',
      {
        name: 'Ampharosite',
        num: 658,
        gen: 6,
        desc: 'If held by an Ampharos, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'venusaurite',
      {
        name: 'Venusaurite',
        num: 659,
        gen: 6,
        desc: 'If held by a Venusaur, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'charizarditex',
      {
        name: 'Charizardite X',
        num: 660,
        gen: 6,
        desc: 'If held by a Charizard, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'blastoisinite',
      {
        name: 'Blastoisinite',
        num: 661,
        gen: 6,
        desc: 'If held by a Blastoise, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'mewtwonitex',
      {
        name: 'Mewtwonite X',
        num: 662,
        gen: 6,
        desc: 'If held by a Mewtwo, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'mewtwonitey',
      {
        name: 'Mewtwonite Y',
        num: 663,
        gen: 6,
        desc: 'If held by a Mewtwo, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'blazikenite',
      {
        name: 'Blazikenite',
        num: 664,
        gen: 6,
        desc: 'If held by a Blaziken, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'medichamite',
      {
        name: 'Medichamite',
        num: 665,
        gen: 6,
        desc: 'If held by a Medicham, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'houndoominite',
      {
        name: 'Houndoominite',
        num: 666,
        gen: 6,
        desc: 'If held by a Houndoom, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'aggronite',
      {
        name: 'Aggronite',
        num: 667,
        gen: 6,
        desc: 'If held by an Aggron, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'banettite',
      {
        name: 'Banettite',
        num: 668,
        gen: 6,
        desc: 'If held by a Banette, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'tyranitarite',
      {
        name: 'Tyranitarite',
        num: 669,
        gen: 6,
        desc: 'If held by a Tyranitar, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'scizorite',
      {
        name: 'Scizorite',
        num: 670,
        gen: 6,
        desc: 'If held by a Scizor, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'pinsirite',
      {
        name: 'Pinsirite',
        num: 671,
        gen: 6,
        desc: 'If held by a Pinsir, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'aerodactylite',
      {
        name: 'Aerodactylite',
        num: 672,
        gen: 6,
        desc: 'If held by an Aerodactyl, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'lucarionite',
      {
        name: 'Lucarionite',
        num: 673,
        gen: 6,
        desc: 'If held by a Lucario, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'abomasite',
      {
        name: 'Abomasite',
        num: 674,
        gen: 6,
        desc: 'If held by an Abomasnow, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'kangaskhanite',
      {
        name: 'Kangaskhanite',
        num: 675,
        gen: 6,
        desc: 'If held by a Kangaskhan, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'gyaradosite',
      {
        name: 'Gyaradosite',
        num: 676,
        gen: 6,
        desc: 'If held by a Gyarados, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'absolite',
      {
        name: 'Absolite',
        num: 677,
        gen: 6,
        desc: 'If held by an Absol, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'charizarditey',
      {
        name: 'Charizardite Y',
        num: 678,
        gen: 6,
        desc: 'If held by a Charizard, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'alakazite',
      {
        name: 'Alakazite',
        num: 679,
        gen: 6,
        desc: 'If held by an Alakazam, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'heracronite',
      {
        name: 'Heracronite',
        num: 680,
        gen: 6,
        desc: 'If held by a Heracross, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'mawilite',
      {
        name: 'Mawilite',
        num: 681,
        gen: 6,
        desc: 'If held by a Mawile, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'manectite',
      {
        name: 'Manectite',
        num: 682,
        gen: 6,
        desc: 'If held by a Manectric, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'garchompite',
      {
        name: 'Garchompite',
        num: 683,
        gen: 6,
        desc: 'If held by a Garchomp, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'latiasite',
      {
        name: 'Latiasite',
        num: 684,
        gen: 6,
        desc: 'If held by a Latias, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'latiosite',
      {
        name: 'Latiosite',
        num: 685,
        gen: 6,
        desc: 'If held by a Latios, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'roseliberry',
      {
        name: 'Roseli Berry',
        num: 686,
        gen: 6,
        desc: 'Halves damage taken from a supereffective Fairy-type attack. Single use.',
      }
    ],
    [
      'keeberry',
      {
        name: 'Kee Berry',
        num: 687,
        gen: 6,
        desc: 'Raises holder\'s Defense by 1 stage after it is hit by a physical attack. Single use.',
      }
    ],
    [
      'marangaberry',
      {
        name: 'Maranga Berry',
        num: 688,
        gen: 6,
        desc: 'Raises holder\'s Sp. Def by 1 stage after it is hit by a special attack. Single use.',
      }
    ],
    [
      'jawfossil',
      {
        name: 'Jaw Fossil',
        num: 710,
        gen: 6,
        desc: 'Can be revived into Tyrunt.',
      }
    ],
    [
      'sailfossil',
      {
        name: 'Sail Fossil',
        num: 711,
        gen: 6,
        desc: 'Can be revived into Amaura.',
      }
    ],
    [
      'fairygem',
      {
        name: 'Fairy Gem',
        num: 715,
        gen: 6,
        desc: 'Holder\'s first successful Fairy-type attack will have 1.3x power. Single use.',
      }
    ],
    [
      'swampertite',
      {
        name: 'Swampertite',
        num: 752,
        gen: 6,
        desc: 'If held by a Swampert, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'sceptilite',
      {
        name: 'Sceptilite',
        num: 753,
        gen: 6,
        desc: 'If held by a Sceptile, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'sablenite',
      {
        name: 'Sablenite',
        num: 754,
        gen: 6,
        desc: 'If held by a Sableye, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'altarianite',
      {
        name: 'Altarianite',
        num: 755,
        gen: 6,
        desc: 'If held by an Altaria, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'galladite',
      {
        name: 'Galladite',
        num: 756,
        gen: 6,
        desc: 'If held by a Gallade, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'audinite',
      {
        name: 'Audinite',
        num: 757,
        gen: 6,
        desc: 'If held by an Audino, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'metagrossite',
      {
        name: 'Metagrossite',
        num: 758,
        gen: 6,
        desc: 'If held by a Metagross, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'sharpedonite',
      {
        name: 'Sharpedonite',
        num: 759,
        gen: 6,
        desc: 'If held by a Sharpedo, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'slowbronite',
      {
        name: 'Slowbronite',
        num: 760,
        gen: 6,
        desc: 'If held by a Slowbro, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'steelixite',
      {
        name: 'Steelixite',
        num: 761,
        gen: 6,
        desc: 'If held by a Steelix, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'pidgeotite',
      {
        name: 'Pidgeotite',
        num: 762,
        gen: 6,
        desc: 'If held by a Pidgeot, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'glalitite',
      {
        name: 'Glalitite',
        num: 763,
        gen: 6,
        desc: 'If held by a Glalie, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'diancite',
      {
        name: 'Diancite',
        num: 764,
        gen: 6,
        desc: 'If held by a Diancie, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'cameruptite',
      {
        name: 'Cameruptite',
        num: 767,
        gen: 6,
        desc: 'If held by a Camerupt, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'lopunnite',
      {
        name: 'Lopunnite',
        num: 768,
        gen: 6,
        desc: 'If held by a Lopunny, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'salacberry',
      {
        name: 'Salac Berry',
        num: 769,
        gen: 6,
        desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'salamencite',
      {
        name: 'Salamencite',
        num: 769,
        gen: 6,
        desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'beedrillite',
      {
        name: 'Beedrillite',
        num: 770,
        gen: 6,
        desc: 'If held by a Beedrill, this item allows it to Mega Evolve in battle.',
      }
    ],
    [
      'normaliumz',
      {
        name: 'Normalium Z',
        num: 776,
        gen: 7,
        desc: 'If holder has a Normal move, this item allows it to use a Normal Z-Move.',
      }
    ],
    [
      'firiumz',
      {
        name: 'Firium Z',
        num: 777,
        gen: 7,
        desc: 'If holder has a Fire move, this item allows it to use a Fire Z-Move.',
      }
    ],
    [
      'wateriumz',
      {
        name: 'Waterium Z',
        num: 778,
        gen: 7,
        desc: 'If holder has a Water move, this item allows it to use a Water Z-Move.',
      }
    ],
    [
      'electriumz',
      {
        name: 'Electrium Z',
        num: 779,
        gen: 7,
        desc: 'If holder has an Electric move, this item allows it to use an Electric Z-Move.',
      }
    ],
    [
      'grassiumz',
      {
        name: 'Grassium Z',
        num: 780,
        gen: 7,
        desc: 'If holder has a Grass move, this item allows it to use a Grass Z-Move.',
      }
    ],
    [
      'iciumz',
      {
        name: 'Icium Z',
        num: 781,
        gen: 7,
        desc: 'If holder has an Ice move, this item allows it to use an Ice Z-Move.',
      }
    ],
    [
      'fightiniumz',
      {
        name: 'Fightinium Z',
        num: 782,
        gen: 7,
        desc: 'If holder has a Fighting move, this item allows it to use a Fighting Z-Move.',
      }
    ],
    [
      'poisoniumz',
      {
        name: 'Poisonium Z',
        num: 783,
        gen: 7,
        desc: 'If holder has a Poison move, this item allows it to use a Poison Z-Move.',
      }
    ],
    [
      'groundiumz',
      {
        name: 'Groundium Z',
        num: 784,
        gen: 7,
        desc: 'If holder has a Ground move, this item allows it to use a Ground Z-Move.',
      }
    ],
    [
      'flyiniumz',
      {
        name: 'Flyinium Z',
        num: 785,
        gen: 7,
        desc: 'If holder has a Flying move, this item allows it to use a Flying Z-Move.',
      }
    ],
    [
      'psychiumz',
      {
        name: 'Psychium Z',
        num: 786,
        gen: 7,
        desc: 'If holder has a Psychic move, this item allows it to use a Psychic Z-Move.',
      }
    ],
    [
      'buginiumz',
      {
        name: 'Buginium Z',
        num: 787,
        gen: 7,
        desc: 'If holder has a Bug move, this item allows it to use a Bug Z-Move.',
      }
    ],
    [
      'rockiumz',
      {
        name: 'Rockium Z',
        num: 788,
        gen: 7,
        desc: 'If holder has a Rock move, this item allows it to use a Rock Z-Move.',
      }
    ],
    [
      'ghostiumz',
      {
        name: 'Ghostium Z',
        num: 789,
        gen: 7,
        desc: 'If holder has a Ghost move, this item allows it to use a Ghost Z-Move.',
      }
    ],
    [
      'dragoniumz',
      {
        name: 'Dragonium Z',
        num: 790,
        gen: 7,
        desc: 'If holder has a Dragon move, this item allows it to use a Dragon Z-Move.',
      }
    ],
    [
      'darkiniumz',
      {
        name: 'Darkinium Z',
        num: 791,
        gen: 7,
        desc: 'If holder has a Dark move, this item allows it to use a Dark Z-Move.',
      }
    ],
    [
      'steeliumz',
      {
        name: 'Steelium Z',
        num: 792,
        gen: 7,
        desc: 'If holder has a Steel move, this item allows it to use a Steel Z-Move.',
      }
    ],
    [
      'fairiumz',
      {
        name: 'Fairium Z',
        num: 793,
        gen: 7,
        desc: 'If holder has a Fairy move, this item allows it to use a Fairy Z-Move.',
      }
    ],
    [
      'pikaniumz',
      {
        name: 'Pikanium Z',
        num: 794,
        gen: 7,
        desc: 'If held by a Pikachu with Volt Tackle, it can use Catastropika.',
      }
    ],
    [
      'bottlecap',
      {
        name: 'Bottle Cap',
        num: 795,
        gen: 7,
        desc: 'Used for Hyper Training. One of a Pokemon\'s stats is calculated with an IV of 31.',
      }
    ],
    [
      'goldbottlecap',
      {
        name: 'Gold Bottle Cap',
        num: 796,
        gen: 7,
        desc: 'Used for Hyper Training. All of a Pokemon\'s stats are calculated with an IV of 31.',
      }
    ],
    [
      'decidiumz',
      {
        name: 'Decidium Z',
        num: 798,
        gen: 7,
        desc: 'If held by a Decidueye with Spirit Shackle, it can use Sinister Arrow Raid.',
      }
    ],
    [
      'inciniumz',
      {
        name: 'Incinium Z',
        num: 799,
        gen: 7,
        desc: 'If held by an Incineroar with Darkest Lariat, it can use Malicious Moonsault.',
      }
    ],
    [
      'primariumz',
      {
        name: 'Primarium Z',
        num: 800,
        gen: 7,
        desc: 'If held by a Primarina with Sparkling Aria, it can use Oceanic Operetta.',
      }
    ],
    [
      'tapuniumz',
      {
        name: 'Tapunium Z',
        num: 801,
        gen: 7,
        desc: 'If held by a Tapu with Nature\'s Madness, it can use Guardian of Alola.',
      }
    ],
    [
      'marshadiumz',
      {
        name: 'Marshadium Z',
        num: 802,
        gen: 7,
        desc: 'If held by Marshadow with Spectral Thief, it can use Soul-Stealing 7-Star Strike.',
      }
    ],
    [
      'aloraichiumz',
      {
        name: 'Aloraichium Z',
        num: 803,
        gen: 7,
        desc: 'If held by an Alolan Raichu with Thunderbolt, it can use Stoked Sparksurfer.',
      }
    ],
    [
      'snorliumz',
      {
        name: 'Snorlium Z',
        num: 804,
        gen: 7,
        desc: 'If held by a Snorlax with Giga Impact, it can use Pulverizing Pancake.',
      }
    ],
    [
      'eeviumz',
      {
        name: 'Eevium Z',
        num: 805,
        gen: 7,
        desc: 'If held by an Eevee with Last Resort, it can use Extreme Evoboost.',
      }
    ],
    [
      'mewniumz',
      {
        name: 'Mewnium Z',
        num: 806,
        gen: 7,
        desc: 'If held by a Mew with Psychic, it can use Genesis Supernova.',
      }
    ],
    [
      'pikashuniumz',
      {
        name: 'Pikashunium Z',
        num: 836,
        gen: 7,
        desc: 'If held by cap Pikachu with Thunderbolt, it can use 10,000,000 Volt Thunderbolt.',
      }
    ],
    [
      'adrenalineorb',
      {
        name: 'Adrenaline Orb',
        num: 846,
        gen: 7,
        desc: 'Raises holder\'s Speed by 1 stage if it gets affected by Intimidate. Single use.',
      }
    ],
    [
      'icestone',
      {
        name: 'Ice Stone',
        num: 849,
        gen: 7,
        desc: 'Evolves Alolan Sandshrew into Alolan Sandslash and Alolan Vulpix into Alolan Ninetales when used.',
        shortDesc: 'Evolves certain species of Pokemon when used.',
      }
    ],
    [
      'beastball',
      {
        name: 'Beast Ball',
        num: 851,
        gen: 7,
        desc: 'A special Poke Ball designed to catch Ultra Beasts.',
      }
    ],
    [
      'terrainextender',
      {
        name: 'Terrain Extender',
        num: 879,
        gen: 7,
        desc: 'Holder\'s use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.',
      }
    ],
    [
      'protectivepads',
      {
        name: 'Protective Pads',
        num: 880,
        gen: 7,
        desc: 'Holder\'s moves are protected from adverse contact effects, except Pickpocket.',
      }
    ],
    [
      'electricseed',
      {
        name: 'Electric Seed',
        num: 881,
        gen: 7,
        desc: 'If the terrain is Electric Terrain, raises holder\'s Defense by 1 stage. Single use.',
      }
    ],
    [
      'psychicseed',
      {
        name: 'Psychic Seed',
        num: 882,
        gen: 7,
        desc: 'If the terrain is Psychic Terrain, raises holder\'s Sp. Def by 1 stage. Single use.',
      }
    ],
    [
      'mistyseed',
      {
        name: 'Misty Seed',
        num: 883,
        gen: 7,
        desc: 'If the terrain is Misty Terrain, raises holder\'s Sp. Def by 1 stage. Single use.',
      }
    ],
    [
      'grassyseed',
      {
        name: 'Grassy Seed',
        num: 884,
        gen: 7,
        desc: 'If the terrain is Grassy Terrain, raises holder\'s Defense by 1 stage. Single use.',
      }
    ],
    [
      'fightingmemory',
      {
        name: 'Fighting Memory',
        num: 904,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Fighting type.',
      }
    ],
    [
      'flyingmemory',
      {
        name: 'Flying Memory',
        num: 905,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Flying type.',
      }
    ],
    [
      'poisonmemory',
      {
        name: 'Poison Memory',
        num: 906,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Poison type.',
      }
    ],
    [
      'groundmemory',
      {
        name: 'Ground Memory',
        num: 907,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Ground type.',
      }
    ],
    [
      'rockmemory',
      {
        name: 'Rock Memory',
        num: 908,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Rock type.',
      }
    ],
    [
      'bugmemory',
      {
        name: 'Bug Memory',
        num: 909,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Bug type.',
      }
    ],
    [
      'ghostmemory',
      {
        name: 'Ghost Memory',
        num: 910,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Ghost type.',
      }
    ],
    [
      'steelmemory',
      {
        name: 'Steel Memory',
        num: 911,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Steel type.',
      }
    ],
    [
      'firememory',
      {
        name: 'Fire Memory',
        num: 912,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Fire type.',
      }
    ],
    [
      'watermemory',
      {
        name: 'Water Memory',
        num: 913,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Water type.',
      }
    ],
    [
      'grassmemory',
      {
        name: 'Grass Memory',
        num: 914,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Grass type.',
      }
    ],
    [
      'electricmemory',
      {
        name: 'Electric Memory',
        num: 915,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Electric type.',
      }
    ],
    [
      'psychicmemory',
      {
        name: 'Psychic Memory',
        num: 916,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Psychic type.',
      }
    ],
    [
      'icememory',
      {
        name: 'Ice Memory',
        num: 917,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Ice type.',
      }
    ],
    [
      'dragonmemory',
      {
        name: 'Dragon Memory',
        num: 918,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Dragon type.',
      }
    ],
    [
      'darkmemory',
      {
        name: 'Dark Memory',
        num: 919,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Dark type.',
      }
    ],
    [
      'fairymemory',
      {
        name: 'Fairy Memory',
        num: 920,
        gen: 7,
        desc: 'Holder\'s Multi-Attack is Fairy type.',
      }
    ],
    [
      'solganiumz',
      {
        name: 'Solganium Z',
        num: 921,
        gen: 7,
        desc: 'Solgaleo or Dusk Mane Necrozma with Sunsteel Strike can use a special Z-Move.',
      }
    ],
    [
      'lunaliumz',
      {
        name: 'Lunalium Z',
        num: 922,
        gen: 7,
        desc: 'Lunala or Dawn Wings Necrozma with Moongeist Beam can use a special Z-Move.',
      }
    ],
    [
      'ultranecroziumz',
      {
        name: 'Ultranecrozium Z',
        num: 923,
        gen: 7,
        desc: 'Dusk Mane/Dawn Wings Necrozma: Ultra Burst, then Z-Move w/ Photon Geyser.',
      }
    ],
    [
      'mimikiumz',
      {
        name: 'Mimikium Z',
        num: 924,
        gen: 7,
        desc: 'If held by a Mimikyu with Play Rough, it can use Let\'s Snuggle Forever.',
      }
    ],
    [
      'lycaniumz',
      {
        name: 'Lycanium Z',
        num: 925,
        gen: 7,
        desc: 'If held by a Lycanroc forme with Stone Edge, it can use Splintered Stormshards.',
      }
    ],
    [
      'kommoniumz',
      {
        name: 'Kommonium Z',
        num: 926,
        gen: 7,
        desc: 'If held by a Kommo-o with Clanging Scales, it can use Clangorous Soulblaze.',
      }
    ]
  ]
);

export default items;