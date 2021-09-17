/* eslint-disable */ // This is a generated file so we disable linting
import type { GraphQLResolveInfo } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type Exact<
  T extends {
    [key: string]: unknown;
  }
> = {
  [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};
/** A Pokémon's abilities entry */
export declare type Abilities = {
  readonly __typename?: 'Abilities';
  /** The first ability of a Pokémon */
  readonly first: Scalars['String'];
  /** The hidden ability of a Pokémon */
  readonly hidden?: Maybe<Scalars['String']>;
  /** The second ability of a Pokémon */
  readonly second?: Maybe<Scalars['String']>;
  /** The special ability of a Pokémon */
  readonly special?: Maybe<Scalars['String']>;
};
/** The supported abilities */
export declare const enum AbilitiesEnum {
  Adaptability = 'adaptability',
  Aerilate = 'aerilate',
  Aftermath = 'aftermath',
  Airlock = 'airlock',
  Analytic = 'analytic',
  Angerpoint = 'angerpoint',
  Anticipation = 'anticipation',
  Arenatrap = 'arenatrap',
  Aromaveil = 'aromaveil',
  Asoneasoneglastrier = 'asoneasoneglastrier',
  Asonespectrier = 'asonespectrier',
  Aurabreak = 'aurabreak',
  Baddreams = 'baddreams',
  Ballfetch = 'ballfetch',
  Battery = 'battery',
  Battlearmor = 'battlearmor',
  Battlebond = 'battlebond',
  Beastboost = 'beastboost',
  Berserk = 'berserk',
  Bigpecks = 'bigpecks',
  Blaze = 'blaze',
  Bulletproof = 'bulletproof',
  Cheekpouch = 'cheekpouch',
  Chillingneigh = 'chillingneigh',
  Chlorophyll = 'chlorophyll',
  Clearbody = 'clearbody',
  Cloudnine = 'cloudnine',
  Colorchange = 'colorchange',
  Comatose = 'comatose',
  Competitive = 'competitive',
  Compoundeyes = 'compoundeyes',
  Contrary = 'contrary',
  Corrosion = 'corrosion',
  Cottondown = 'cottondown',
  Curiousmedicine = 'curiousmedicine',
  Cursedbody = 'cursedbody',
  Cutecharm = 'cutecharm',
  Damp = 'damp',
  Dancer = 'dancer',
  Darkaura = 'darkaura',
  Dauntlessshield = 'dauntlessshield',
  Dazzling = 'dazzling',
  Defeatist = 'defeatist',
  Defiant = 'defiant',
  Deltastream = 'deltastream',
  Desolateland = 'desolateland',
  Disguise = 'disguise',
  Download = 'download',
  Dragonsmaw = 'dragonsmaw',
  Drizzle = 'drizzle',
  Drought = 'drought',
  Dryskin = 'dryskin',
  Earlybird = 'earlybird',
  Effectspore = 'effectspore',
  Electricsurge = 'electricsurge',
  Emergencyexit = 'emergencyexit',
  Fairyaura = 'fairyaura',
  Filter = 'filter',
  Flamebody = 'flamebody',
  Flareboost = 'flareboost',
  Flashfire = 'flashfire',
  Flowergift = 'flowergift',
  Flowerveil = 'flowerveil',
  Fluffy = 'fluffy',
  Forecast = 'forecast',
  Forewarn = 'forewarn',
  Friendguard = 'friendguard',
  Frisk = 'frisk',
  Fullmetalbody = 'fullmetalbody',
  Furcoat = 'furcoat',
  Galewings = 'galewings',
  Galvanize = 'galvanize',
  Gluttony = 'gluttony',
  Gooey = 'gooey',
  Gorillatactics = 'gorillatactics',
  Grasspelt = 'grasspelt',
  Grassysurge = 'grassysurge',
  Grimneigh = 'grimneigh',
  Gulpmissile = 'gulpmissile',
  Guts = 'guts',
  Harvest = 'harvest',
  Healer = 'healer',
  Heatproof = 'heatproof',
  Heavymetal = 'heavymetal',
  Honeygather = 'honeygather',
  Hugepower = 'hugepower',
  Hungerswitch = 'hungerswitch',
  Hustle = 'hustle',
  Hydration = 'hydration',
  Hypercutter = 'hypercutter',
  Icebody = 'icebody',
  Iceface = 'iceface',
  Icescales = 'icescales',
  Illuminate = 'illuminate',
  Illusion = 'illusion',
  Immunity = 'immunity',
  Imposter = 'imposter',
  Infiltrator = 'infiltrator',
  Innardsout = 'innardsout',
  Innerfocus = 'innerfocus',
  Insomnia = 'insomnia',
  Intimidate = 'intimidate',
  Intrepidsword = 'intrepidsword',
  Ironbarbs = 'ironbarbs',
  Ironfist = 'ironfist',
  Justified = 'justified',
  Keeneye = 'keeneye',
  Klutz = 'klutz',
  Leafguard = 'leafguard',
  Levitate = 'levitate',
  Libero = 'libero',
  Lightmetal = 'lightmetal',
  Lightningrod = 'lightningrod',
  Limber = 'limber',
  Liquidooze = 'liquidooze',
  Liquidvoice = 'liquidvoice',
  Longreach = 'longreach',
  Magicbounce = 'magicbounce',
  Magicguard = 'magicguard',
  Magician = 'magician',
  Magmaarmor = 'magmaarmor',
  Magnetpull = 'magnetpull',
  Marvelscale = 'marvelscale',
  Megalauncher = 'megalauncher',
  Merciless = 'merciless',
  Mimicry = 'mimicry',
  Minus = 'minus',
  Mirrorarmor = 'mirrorarmor',
  Mistysurge = 'mistysurge',
  Moldbreaker = 'moldbreaker',
  Moody = 'moody',
  Motordrive = 'motordrive',
  Mountaineer = 'mountaineer',
  Moxie = 'moxie',
  Multiscale = 'multiscale',
  Multitype = 'multitype',
  Mummy = 'mummy',
  Naturalcure = 'naturalcure',
  Neuroforce = 'neuroforce',
  Neutralizinggas = 'neutralizinggas',
  Noability = 'noability',
  Noguard = 'noguard',
  Normalize = 'normalize',
  Oblivious = 'oblivious',
  Overcoat = 'overcoat',
  Overgrow = 'overgrow',
  Owntempo = 'owntempo',
  Parentalbond = 'parentalbond',
  Pastelveil = 'pastelveil',
  Perishbody = 'perishbody',
  Persistent = 'persistent',
  Pickpocket = 'pickpocket',
  Pickup = 'pickup',
  Pixilate = 'pixilate',
  Plus = 'plus',
  Poisonheal = 'poisonheal',
  Poisonpoint = 'poisonpoint',
  Poisontouch = 'poisontouch',
  Powerconstruct = 'powerconstruct',
  Powerofalchemy = 'powerofalchemy',
  Powerspot = 'powerspot',
  Prankster = 'prankster',
  Pressure = 'pressure',
  Primordialsea = 'primordialsea',
  Prismarmor = 'prismarmor',
  Propellertail = 'propellertail',
  Protean = 'protean',
  Psychicsurge = 'psychicsurge',
  Punkrock = 'punkrock',
  Purepower = 'purepower',
  Queenlymajesty = 'queenlymajesty',
  Quickdraw = 'quickdraw',
  Quickfeet = 'quickfeet',
  Raindish = 'raindish',
  Rattled = 'rattled',
  Rebound = 'rebound',
  Receiver = 'receiver',
  Reckless = 'reckless',
  Refrigerate = 'refrigerate',
  Regenerator = 'regenerator',
  Ripen = 'ripen',
  Rivalry = 'rivalry',
  Rkssystem = 'rkssystem',
  Rockhead = 'rockhead',
  Roughskin = 'roughskin',
  Runaway = 'runaway',
  Sandforce = 'sandforce',
  Sandrush = 'sandrush',
  Sandspit = 'sandspit',
  Sandstream = 'sandstream',
  Sandveil = 'sandveil',
  Sapsipper = 'sapsipper',
  Schooling = 'schooling',
  Scrappy = 'scrappy',
  Screencleaner = 'screencleaner',
  Serenegrace = 'serenegrace',
  Shadowshield = 'shadowshield',
  Shadowtag = 'shadowtag',
  Shedskin = 'shedskin',
  Sheerforce = 'sheerforce',
  Shellarmor = 'shellarmor',
  Shielddust = 'shielddust',
  Shieldsdown = 'shieldsdown',
  Simple = 'simple',
  Skilllink = 'skilllink',
  Slowstart = 'slowstart',
  Slushrush = 'slushrush',
  Sniper = 'sniper',
  Snowcloak = 'snowcloak',
  Snowwarning = 'snowwarning',
  Solarpower = 'solarpower',
  Solidrock = 'solidrock',
  Soulheart = 'soulheart',
  Soundproof = 'soundproof',
  Speedboost = 'speedboost',
  Stakeout = 'stakeout',
  Stall = 'stall',
  Stalwart = 'stalwart',
  Stamina = 'stamina',
  Stancechange = 'stancechange',
  Static = 'static',
  Steadfast = 'steadfast',
  Steamengine = 'steamengine',
  Steelworker = 'steelworker',
  Steelyspirit = 'steelyspirit',
  Stench = 'stench',
  Stickyhold = 'stickyhold',
  Stormdrain = 'stormdrain',
  Strongjaw = 'strongjaw',
  Sturdy = 'sturdy',
  Suctioncups = 'suctioncups',
  Superluck = 'superluck',
  Surgesurfer = 'surgesurfer',
  Swarm = 'swarm',
  Sweetveil = 'sweetveil',
  Swiftswim = 'swiftswim',
  Symbiosis = 'symbiosis',
  Synchronize = 'synchronize',
  Tangledfeet = 'tangledfeet',
  Tanglinghair = 'tanglinghair',
  Technician = 'technician',
  Telepathy = 'telepathy',
  Teravolt = 'teravolt',
  Thickfat = 'thickfat',
  Tintedlens = 'tintedlens',
  Torrent = 'torrent',
  Toughclaws = 'toughclaws',
  Toxicboost = 'toxicboost',
  Trace = 'trace',
  Transistor = 'transistor',
  Triage = 'triage',
  Truant = 'truant',
  Turboblaze = 'turboblaze',
  Unaware = 'unaware',
  Unburden = 'unburden',
  Unnerve = 'unnerve',
  Unseenfist = 'unseenfist',
  Victorystar = 'victorystar',
  Vitalspirit = 'vitalspirit',
  Voltabsorb = 'voltabsorb',
  Wanderingspirit = 'wanderingspirit',
  Waterabsorb = 'waterabsorb',
  Waterbubble = 'waterbubble',
  Watercompaction = 'watercompaction',
  Waterveil = 'waterveil',
  Weakarmor = 'weakarmor',
  Whitesmoke = 'whitesmoke',
  Wimpout = 'wimpout',
  Wonderguard = 'wonderguard',
  Wonderskin = 'wonderskin',
  Zenmode = 'zenmode'
}
/** A single Pokémon ability entry */
export declare type Ability = {
  readonly __typename?: 'Ability';
  /** Bulbapedia page for an ability */
  readonly bulbapediaPage: Scalars['String'];
  /** The long description for an ability */
  readonly desc?: Maybe<Scalars['String']>;
  /** Whether this ability has effects outside of battle, and if so what the effect is */
  readonly isFieldAbility?: Maybe<Scalars['String']>;
  /** The name for an ability */
  readonly name: Scalars['String'];
  /** Serebii page for an ability */
  readonly serebiiPage: Scalars['String'];
  /** The short description for an ability */
  readonly shortDesc: Scalars['String'];
  /** Smogon page for an ability */
  readonly smogonPage: Scalars['String'];
};
/** A Pokémon catch rate entry */
export declare type CatchRate = {
  readonly __typename?: 'CatchRate';
  /** The base catch rate for a Pokémon that will be used to calculate the final catch rate */
  readonly base: Scalars['Int'];
  /** The chance to capture a Pokémon when an ordinary Poké Ball is thrown at full health without any status condition */
  readonly percentageWithOrdinaryPokeballAtFullHealth: Scalars['String'];
};
/** A Pokémon's EV yields */
export declare type EvYields = {
  readonly __typename?: 'EvYields';
  /** The attack EV yield of a Pokémon */
  readonly attack: Scalars['Int'];
  /** The defense EV yield of a Pokémon */
  readonly defense: Scalars['Int'];
  /** The HP EV yield of a pokémon */
  readonly hp: Scalars['Int'];
  /** The special attack EV yield of a Pokémon */
  readonly specialattack: Scalars['Int'];
  /** The special defense EV yield of a Pokémon */
  readonly specialdefense: Scalars['Int'];
  /** The speed EV yield of a Pokémon */
  readonly speed: Scalars['Int'];
};
/** A flavor text entry for a Pokémon */
export declare type Flavor = {
  readonly __typename?: 'Flavor';
  /** The flavor text for this entry */
  readonly flavor: Scalars['String'];
  /** The name of the game this flavor text is from */
  readonly game: Scalars['String'];
};
/** A Pokémon gender ratio entry */
export declare type Gender = {
  readonly __typename?: 'Gender';
  /** The percentage for female occurrences */
  readonly female: Scalars['String'];
  /** The percentage of male occurrences */
  readonly male: Scalars['String'];
};
/** A single item entry */
export declare type Item = {
  readonly __typename?: 'Item';
  /** Bulbapedia page for an item */
  readonly bulbapediaPage: Scalars['String'];
  /** The long description for an item */
  readonly desc: Scalars['String'];
  /** The generation in which this item was introduced */
  readonly generationIntroduced: Scalars['Int'];
  /** Whether an item is non-standard, and if it is why */
  readonly isNonstandard?: Maybe<Scalars['String']>;
  /** The name for an item */
  readonly name: Scalars['String'];
  /** Serebii page for an item */
  readonly serebiiPage: Scalars['String'];
  /** The long description for an item */
  readonly shortDesc?: Maybe<Scalars['String']>;
  /** Smogon page for an item */
  readonly smogonPage?: Maybe<Scalars['String']>;
  /** The sprite for an item */
  readonly sprite: Scalars['String'];
};
/** The supported items */
export declare const enum ItemsEnum {
  Abomasite = 'abomasite',
  Absolite = 'absolite',
  Absorbbulb = 'absorbbulb',
  Acrobike = 'acrobike',
  Adamantorb = 'adamantorb',
  Adrenalineorb = 'adrenalineorb',
  Adventureguide = 'adventureguide',
  Aerodactylite = 'aerodactylite',
  Aggronite = 'aggronite',
  Aguavberry = 'aguavberry',
  Airballoon = 'airballoon',
  Alakazite = 'alakazite',
  Aloraichiumz = 'aloraichiumz',
  Altarianite = 'altarianite',
  Ampharosite = 'ampharosite',
  Apicotberry = 'apicotberry',
  Apricornbox = 'apricornbox',
  Aquasuit = 'aquasuit',
  Armorfossil = 'armorfossil',
  Aspearberry = 'aspearberry',
  Assaultvest = 'assaultvest',
  Audinite = 'audinite',
  Auroraticket = 'auroraticket',
  Autograph = 'autograph',
  Azureflute = 'azureflute',
  Babiriberry = 'babiriberry',
  Bandautograph = 'bandautograph',
  Banettite = 'banettite',
  Basementkey = 'basementkey',
  Beastball = 'beastball',
  Beedrillite = 'beedrillite',
  Belueberry = 'belueberry',
  Berry = 'berry',
  Berryjuice = 'berryjuice',
  Berrypots = 'berrypots',
  Berrypouch = 'berrypouch',
  Berrysweet = 'berrysweet',
  Berserkgene = 'berserkgene',
  Bicycle = 'bicycle',
  Bigroot = 'bigroot',
  Bikevoucher = 'bikevoucher',
  Bindingband = 'bindingband',
  Bitterberry = 'bitterberry',
  Blackbelt = 'blackbelt',
  Blackglasses = 'blackglasses',
  Blacksludge = 'blacksludge',
  Blastoisinite = 'blastoisinite',
  Blazikenite = 'blazikenite',
  Bluecard = 'bluecard',
  Blueorb = 'blueorb',
  Bluepetal = 'bluepetal',
  Blukberry = 'blukberry',
  Blunderpolicy = 'blunderpolicy',
  Bottlecap = 'bottlecap',
  Brightpowder = 'brightpowder',
  Buggem = 'buggem',
  Buginiumz = 'buginiumz',
  Bugmemory = 'bugmemory',
  Burndrive = 'burndrive',
  Burntberry = 'burntberry',
  Cameruptite = 'cameruptite',
  Campinggear = 'campinggear',
  Cardkey = 'cardkey',
  Catchingcharm = 'catchingcharm',
  Cellbattery = 'cellbattery',
  Charcoal = 'charcoal',
  Charizarditex = 'charizarditex',
  Charizarditey = 'charizarditey',
  Chartiberry = 'chartiberry',
  Cheriberry = 'cheriberry',
  Cherishball = 'cherishball',
  Chestoberry = 'chestoberry',
  Chilanberry = 'chilanberry',
  Chilldrive = 'chilldrive',
  Chippedpot = 'chippedpot',
  Choiceband = 'choiceband',
  Choicescarf = 'choicescarf',
  Choicespecs = 'choicespecs',
  Chopleberry = 'chopleberry',
  Clawfossil = 'clawfossil',
  Clearbell = 'clearbell',
  Cloversweet = 'cloversweet',
  Cobaberry = 'cobaberry',
  Coincase = 'coincase',
  Colburberry = 'colburberry',
  Colressmchn = 'colressmchn',
  Contestcostume = 'contestcostume',
  Contestpass = 'contestpass',
  Cornnberry = 'cornnberry',
  Coupon1 = 'coupon1',
  Coupon2 = 'coupon2',
  Coupon3 = 'coupon3',
  Coverfossil = 'coverfossil',
  Crackedpot = 'crackedpot',
  Crucibellite = 'crucibellite',
  Custapberry = 'custapberry',
  Damprock = 'damprock',
  Darkgem = 'darkgem',
  Darkiniumz = 'darkiniumz',
  Darkmemory = 'darkmemory',
  Darkstone = 'darkstone',
  Dawnstone = 'dawnstone',
  Decidiumz = 'decidiumz',
  Deepseascale = 'deepseascale',
  Deepseatooth = 'deepseatooth',
  Destinyknot = 'destinyknot',
  Devongoods = 'devongoods',
  Devonparts = 'devonparts',
  Devonscope = 'devonscope',
  Devonscubagear = 'devonscubagear',
  Diancite = 'diancite',
  Diveball = 'diveball',
  Dnasplicers = 'dnasplicers',
  Domefossil = 'domefossil',
  Dousedrive = 'dousedrive',
  Dowsingmachine = 'dowsingmachine',
  Dowsingmchn = 'dowsingmchn',
  Dracoplate = 'dracoplate',
  Dragonfang = 'dragonfang',
  Dragongem = 'dragongem',
  Dragoniumz = 'dragoniumz',
  Dragonmemory = 'dragonmemory',
  Dragonscale = 'dragonscale',
  Dragonskull = 'dragonskull',
  Dreadplate = 'dreadplate',
  Dreamball = 'dreamball',
  Droppeditem = 'droppeditem',
  Dubiousdisc = 'dubiousdisc',
  Durinberry = 'durinberry',
  Duskball = 'duskball',
  Duskstone = 'duskstone',
  Dynamaxband = 'dynamaxband',
  Earthplate = 'earthplate',
  Eeviumz = 'eeviumz',
  Eggcard = 'eggcard',
  Ejectbutton = 'ejectbutton',
  Ejectpack = 'ejectpack',
  Electirizer = 'electirizer',
  Electricgem = 'electricgem',
  Electricmemory = 'electricmemory',
  Electricseed = 'electricseed',
  Electriumz = 'electriumz',
  Elevatorkey = 'elevatorkey',
  Endorsement = 'endorsement',
  Energypowder = 'energypowder',
  Enigmaberry = 'enigmaberry',
  Enigmastone = 'enigmastone',
  Enigmaticcard = 'enigmaticcard',
  Eonflute = 'eonflute',
  Eonticket = 'eonticket',
  Escaperope = 'escaperope',
  Eviolite = 'eviolite',
  Expertbelt = 'expertbelt',
  Explorerkit = 'explorerkit',
  Expshare = 'expshare',
  Fairiumz = 'fairiumz',
  Fairygem = 'fairygem',
  Fairymemory = 'fairymemory',
  Famechecker = 'famechecker',
  Fashioncase = 'fashioncase',
  Fastball = 'fastball',
  Fightinggem = 'fightinggem',
  Fightingmemory = 'fightingmemory',
  Fightiniumz = 'fightiniumz',
  Figyberry = 'figyberry',
  Firegem = 'firegem',
  Firememory = 'firememory',
  Firestone = 'firestone',
  Firiumz = 'firiumz',
  Fishingrod = 'fishingrod',
  Fistplate = 'fistplate',
  Flameorb = 'flameorb',
  Flameplate = 'flameplate',
  Floatstone = 'floatstone',
  Flowersweet = 'flowersweet',
  Flyinggem = 'flyinggem',
  Flyingmemory = 'flyingmemory',
  Flyiniumz = 'flyiniumz',
  Focusband = 'focusband',
  Focussash = 'focussash',
  Foragebag = 'foragebag',
  Fossilizedbird = 'fossilizedbird',
  Fossilizeddino = 'fossilizeddino',
  Fossilizeddrake = 'fossilizeddrake',
  Fossilizedfish = 'fossilizedfish',
  Friendball = 'friendball',
  Fullincense = 'fullincense',
  Fullrestore = 'fullrestore',
  Galactickey = 'galactickey',
  Galaricacuff = 'galaricacuff',
  Galaricawreath = 'galaricawreath',
  Galladite = 'galladite',
  Ganlonberry = 'ganlonberry',
  Garchompite = 'garchompite',
  Gardevoirite = 'gardevoirite',
  Gbsounds = 'gbsounds',
  Gengarite = 'gengarite',
  Ghostgem = 'ghostgem',
  Ghostiumz = 'ghostiumz',
  Ghostmemory = 'ghostmemory',
  Glalitite = 'glalitite',
  Godstone = 'godstone',
  Gogoggles = 'gogoggles',
  Goldberry = 'goldberry',
  Goldbottlecap = 'goldbottlecap',
  Goldteeth = 'goldteeth',
  Goodrod = 'goodrod',
  Gracidea = 'gracidea',
  Gram1 = 'gram1',
  Gram2 = 'gram2',
  Gram3 = 'gram3',
  Grassgem = 'grassgem',
  Grassiumz = 'grassiumz',
  Grassmemory = 'grassmemory',
  Grassyseed = 'grassyseed',
  Greatball = 'greatball',
  Greenpetal = 'greenpetal',
  Grepaberry = 'grepaberry',
  Gripclaw = 'gripclaw',
  Griseousorb = 'griseousorb',
  Groundgem = 'groundgem',
  Groundiumz = 'groundiumz',
  Groundmemory = 'groundmemory',
  Grubbyhanky = 'grubbyhanky',
  Gsball = 'gsball',
  Gyaradosite = 'gyaradosite',
  Habanberry = 'habanberry',
  Hardstone = 'hardstone',
  Healball = 'healball',
  Heatrock = 'heatrock',
  Heavyball = 'heavyball',
  Heavydutyboots = 'heavydutyboots',
  Helixfossil = 'helixfossil',
  Heracronite = 'heracronite',
  Hitechearbuds = 'hitechearbuds',
  Holocaster = 'holocaster',
  Hondewberry = 'hondewberry',
  Honorofkalos = 'honorofkalos',
  Houndoominite = 'houndoominite',
  Hyperpotion = 'hyperpotion',
  Iapapaberry = 'iapapaberry',
  Iceberry = 'iceberry',
  Icegem = 'icegem',
  Icememory = 'icememory',
  Icestone = 'icestone',
  Icicleplate = 'icicleplate',
  Iciumz = 'iciumz',
  Icyrock = 'icyrock',
  Ilimasnormaliumz = 'ilimasnormaliumz',
  Inciniumz = 'inciniumz',
  Insectplate = 'insectplate',
  Intriguingstone = 'intriguingstone',
  Ironball = 'ironball',
  Ironplate = 'ironplate',
  Itemfinder = 'itemfinder',
  Jabocaberry = 'jabocaberry',
  Jadeorb = 'jadeorb',
  Jawfossil = 'jawfossil',
  Journal = 'journal',
  Kangaskhanite = 'kangaskhanite',
  Kasibberry = 'kasibberry',
  Kebiaberry = 'kebiaberry',
  Keeberry = 'keeberry',
  Kelpsyberry = 'kelpsyberry',
  Keystone = 'keystone',
  Keytoroom1 = 'keytoroom1',
  Keytoroom2 = 'keytoroom2',
  Keytoroom4 = 'keytoroom4',
  Keytoroom6 = 'keytoroom6',
  Kingsrock = 'kingsrock',
  Kommoniumz = 'kommoniumz',
  Laggingtail = 'laggingtail',
  Lansatberry = 'lansatberry',
  Latiasite = 'latiasite',
  Latiosite = 'latiosite',
  Laxincense = 'laxincense',
  Leafstone = 'leafstone',
  Leek = 'leek',
  Leftovers = 'leftovers',
  Leftpokeball = 'leftpokeball',
  Lenscase = 'lenscase',
  Leppaberry = 'leppaberry',
  Letter = 'letter',
  Levelball = 'levelball',
  Libertypass = 'libertypass',
  Liechiberry = 'liechiberry',
  Lifeorb = 'lifeorb',
  Liftkey = 'liftkey',
  Lightball = 'lightball',
  Lightclay = 'lightclay',
  Lightstone = 'lightstone',
  Lockcapsule = 'lockcapsule',
  Lookerticket = 'lookerticket',
  Lootsack = 'lootsack',
  Lopunnite = 'lopunnite',
  Lostitem = 'lostitem',
  Loveball = 'loveball',
  Lovesweet = 'lovesweet',
  Lucarionite = 'lucarionite',
  Luckypunch = 'luckypunch',
  Lumberry = 'lumberry',
  Luminousmoss = 'luminousmoss',
  Lunaliumz = 'lunaliumz',
  Lunarwing = 'lunarwing',
  Lureball = 'lureball',
  Lustrousorb = 'lustrousorb',
  Luxuryball = 'luxuryball',
  Lycaniumz = 'lycaniumz',
  Machbike = 'machbike',
  Machinepart = 'machinepart',
  Machobrace = 'machobrace',
  Magmaemblem = 'magmaemblem',
  Magmarizer = 'magmarizer',
  Magmastone = 'magmastone',
  Magmasuit = 'magmasuit',
  Magnet = 'magnet',
  Magoberry = 'magoberry',
  Magostberry = 'magostberry',
  Mail = 'mail',
  Makeupbag = 'makeupbag',
  Manectite = 'manectite',
  Marangaberry = 'marangaberry',
  Marshadiumz = 'marshadiumz',
  Masterball = 'masterball',
  Mawilite = 'mawilite',
  Maxpotion = 'maxpotion',
  Meadowplate = 'meadowplate',
  Medalbox = 'medalbox',
  Medichamite = 'medichamite',
  Megabracelet = 'megabracelet',
  Megaring = 'megaring',
  Membercard = 'membercard',
  Mentalherb = 'mentalherb',
  Metagrossite = 'metagrossite',
  Metalcoat = 'metalcoat',
  Metalpowder = 'metalpowder',
  Meteorite = 'meteorite',
  Meteoriteshard = 'meteoriteshard',
  Metronome = 'metronome',
  Mewniumz = 'mewniumz',
  Mewtwonitex = 'mewtwonitex',
  Mewtwonitey = 'mewtwonitey',
  Micleberry = 'micleberry',
  Mimikiumz = 'mimikiumz',
  Mindplate = 'mindplate',
  Mintberry = 'mintberry',
  Miracleberry = 'miracleberry',
  Miracleseed = 'miracleseed',
  Mistyseed = 'mistyseed',
  Moonball = 'moonball',
  Moonflute = 'moonflute',
  Moonstone = 'moonstone',
  Muscleband = 'muscleband',
  Mysteryberry = 'mysteryberry',
  Mysteryegg = 'mysteryegg',
  Mysticticket = 'mysticticket',
  Mysticwater = 'mysticwater',
  Nanabberry = 'nanabberry',
  Nestball = 'nestball',
  Netball = 'netball',
  Nevermeltice = 'nevermeltice',
  Nlunarizer = 'nlunarizer',
  Nomelberry = 'nomelberry',
  Normalgem = 'normalgem',
  Normaliumz = 'normaliumz',
  Nsolarizer = 'nsolarizer',
  Oaksletter = 'oaksletter',
  Oaksparcel = 'oaksparcel',
  Occaberry = 'occaberry',
  Oddincense = 'oddincense',
  Oldamber = 'oldamber',
  Oldcharm = 'oldcharm',
  Oldletter = 'oldletter',
  Oldrod = 'oldrod',
  Oldseamap = 'oldseamap',
  Oranberry = 'oranberry',
  Orangepetal = 'orangepetal',
  Ovalcharm = 'ovalcharm',
  Ovalstone = 'ovalstone',
  Pairoftickets = 'pairoftickets',
  Palpad = 'palpad',
  Pamtreberry = 'pamtreberry',
  Parcel = 'parcel',
  Parkball = 'parkball',
  Pass = 'pass',
  Passhoberry = 'passhoberry',
  Payapaberry = 'payapaberry',
  Pechaberry = 'pechaberry',
  Permit = 'permit',
  Persimberry = 'persimberry',
  Petayaberry = 'petayaberry',
  Photoalbum = 'photoalbum',
  Pidgeotite = 'pidgeotite',
  Pikaniumz = 'pikaniumz',
  Pikashuniumz = 'pikashuniumz',
  Pinapberry = 'pinapberry',
  Pinkbow = 'pinkbow',
  Pinkpetal = 'pinkpetal',
  Pinsirite = 'pinsirite',
  Pixieplate = 'pixieplate',
  Plasmacard = 'plasmacard',
  Plumefossil = 'plumefossil',
  Poffincase = 'poffincase',
  Pointcard = 'pointcard',
  Poisonbarb = 'poisonbarb',
  Poisongem = 'poisongem',
  Poisoniumz = 'poisoniumz',
  Poisonmemory = 'poisonmemory',
  Pokeball = 'pokeball',
  Pokeblockcase = 'pokeblockcase',
  Pokeblockkit = 'pokeblockkit',
  Pokeflute = 'pokeflute',
  Pokemonboxlink = 'pokemonboxlink',
  Pokeradar = 'pokeradar',
  Polkadotbow = 'polkadotbow',
  Pomegberry = 'pomegberry',
  Potion = 'potion',
  Powderjar = 'powderjar',
  Poweranklet = 'poweranklet',
  Powerband = 'powerband',
  Powerbelt = 'powerbelt',
  Powerbracer = 'powerbracer',
  Powerherb = 'powerherb',
  Powerlens = 'powerlens',
  Powerplantpass = 'powerplantpass',
  Powerweight = 'powerweight',
  Premierball = 'premierball',
  Primariumz = 'primariumz',
  Prismscale = 'prismscale',
  Prisonbottle = 'prisonbottle',
  Professorsmask = 'professorsmask',
  Profsletter = 'profsletter',
  Propcase = 'propcase',
  Protectivepads = 'protectivepads',
  Protector = 'protector',
  Przcureberry = 'przcureberry',
  Psncureberry = 'psncureberry',
  Psychicgem = 'psychicgem',
  Psychicmemory = 'psychicmemory',
  Psychicseed = 'psychicseed',
  Psychiumz = 'psychiumz',
  Purplepetal = 'purplepetal',
  Qualotberry = 'qualotberry',
  Quickball = 'quickball',
  Quickclaw = 'quickclaw',
  Quickpowder = 'quickpowder',
  Rabutaberry = 'rabutaberry',
  Ragecandybar = 'ragecandybar',
  Rainbowflower = 'rainbowflower',
  Rainbowpass = 'rainbowpass',
  Rainbowwing = 'rainbowwing',
  Rarebone = 'rarebone',
  Rawstberry = 'rawstberry',
  Razorclaw = 'razorclaw',
  Razorfang = 'razorfang',
  Razzberry = 'razzberry',
  Reapercloth = 'reapercloth',
  Redcard = 'redcard',
  Redchain = 'redchain',
  Redorb = 'redorb',
  Redpetal = 'redpetal',
  Redscale = 'redscale',
  Repeatball = 'repeatball',
  Revealglass = 'revealglass',
  Ribbonsweet = 'ribbonsweet',
  Ridepager = 'ridepager',
  Rindoberry = 'rindoberry',
  Ringtarget = 'ringtarget',
  Rm1key = 'rm1key',
  Rm2key = 'rm2key',
  Rm4key = 'rm4key',
  Rm6key = 'rm6key',
  Rockgem = 'rockgem',
  Rockincense = 'rockincense',
  Rockiumz = 'rockiumz',
  Rockmemory = 'rockmemory',
  Rockyhelmet = 'rockyhelmet',
  Rollerskates = 'rollerskates',
  Roomservice = 'roomservice',
  Rootfossil = 'rootfossil',
  Roseincense = 'roseincense',
  Roseliberry = 'roseliberry',
  Rotombike = 'rotombike',
  Rotomcatalog = 'rotomcatalog',
  Rowapberry = 'rowapberry',
  Ruby = 'ruby',
  Rulebook = 'rulebook',
  Rustedshield = 'rustedshield',
  Rustedsword = 'rustedsword',
  Sablenite = 'sablenite',
  Sachet = 'sachet',
  Safariball = 'safariball',
  Safetygoggles = 'safetygoggles',
  Sailfossil = 'sailfossil',
  Salacberry = 'salacberry',
  Salamencite = 'salamencite',
  Sapphire = 'sapphire',
  Scanner = 'scanner',
  Sceptilite = 'sceptilite',
  Scizorite = 'scizorite',
  Scopelens = 'scopelens',
  Seaincense = 'seaincense',
  Sealbag = 'sealbag',
  Sealcase = 'sealcase',
  Secretkey = 'secretkey',
  Secretpotion = 'secretpotion',
  Sharpbeak = 'sharpbeak',
  Sharpedonite = 'sharpedonite',
  Shedshell = 'shedshell',
  Shellbell = 'shellbell',
  Shinycharm = 'shinycharm',
  Shinystone = 'shinystone',
  Shockdrive = 'shockdrive',
  Shucaberry = 'shucaberry',
  Silkscarf = 'silkscarf',
  Silphscope = 'silphscope',
  Silverpowder = 'silverpowder',
  Silverwing = 'silverwing',
  Sitrusberry = 'sitrusberry',
  Skullfossil = 'skullfossil',
  Skyplate = 'skyplate',
  Slowbronite = 'slowbronite',
  Slowpoketail = 'slowpoketail',
  Smoothrock = 'smoothrock',
  Snorliumz = 'snorliumz',
  Snowball = 'snowball',
  Softsand = 'softsand',
  Solganiumz = 'solganiumz',
  Soniasbook = 'soniasbook',
  Sootsack = 'sootsack',
  Souldew = 'souldew',
  Sparklingstone = 'sparklingstone',
  Spelltag = 'spelltag',
  Spelonberry = 'spelonberry',
  Splashplate = 'splashplate',
  Spookyplate = 'spookyplate',
  Sportball = 'sportball',
  Sprayduck = 'sprayduck',
  Sprinklotad = 'sprinklotad',
  Squirtbottle = 'squirtbottle',
  Ssticket = 'ssticket',
  Starfberry = 'starfberry',
  Starsweet = 'starsweet',
  Steelgem = 'steelgem',
  Steeliumz = 'steeliumz',
  Steelixite = 'steelixite',
  Steelmemory = 'steelmemory',
  Stick = 'stick',
  Stickybarb = 'stickybarb',
  Stoneplate = 'stoneplate',
  Storagekey = 'storagekey',
  Strawberrysweet = 'strawberrysweet',
  Suitekey = 'suitekey',
  Sunflute = 'sunflute',
  Sunstone = 'sunstone',
  Superpotion = 'superpotion',
  Superrod = 'superrod',
  Surgebadge = 'surgebadge',
  Swampertite = 'swampertite',
  Sweetapple = 'sweetapple',
  Tamatoberry = 'tamatoberry',
  Tangaberry = 'tangaberry',
  Tapuniumz = 'tapuniumz',
  Tartapple = 'tartapple',
  Tea = 'tea',
  Teachytv = 'teachytv',
  Terrainextender = 'terrainextender',
  Thickclub = 'thickclub',
  Throatspray = 'throatspray',
  Thunderstone = 'thunderstone',
  Tidalbell = 'tidalbell',
  Timerball = 'timerball',
  Tmcase = 'tmcase',
  Tmvpass = 'tmvpass',
  Townmap = 'townmap',
  Toxicorb = 'toxicorb',
  Toxicplate = 'toxicplate',
  Traveltrunk = 'traveltrunk',
  Tripass = 'tripass',
  Twistedspoon = 'twistedspoon',
  Tyranitarite = 'tyranitarite',
  Ultraball = 'ultraball',
  Ultranecroziumz = 'ultranecroziumz',
  Unownreport = 'unownreport',
  Upgrade = 'upgrade',
  Utilityumbrella = 'utilityumbrella',
  Venusaurite = 'venusaurite',
  Vsrecorder = 'vsrecorder',
  Vsseeker = 'vsseeker',
  Wacanberry = 'wacanberry',
  Wailmerpail = 'wailmerpail',
  Watergem = 'watergem',
  Wateriumz = 'wateriumz',
  Watermemory = 'watermemory',
  Waterstone = 'waterstone',
  Watmelberry = 'watmelberry',
  Waveincense = 'waveincense',
  Weaknesspolicy = 'weaknesspolicy',
  Wepearberry = 'wepearberry',
  Whippeddream = 'whippeddream',
  Whiteherb = 'whiteherb',
  Widelens = 'widelens',
  Wikiberry = 'wikiberry',
  Wiseglasses = 'wiseglasses',
  Wishingstar = 'wishingstar',
  Workskey = 'workskey',
  Xtransceiver = 'xtransceiver',
  Yacheberry = 'yacheberry',
  Yellowpetal = 'yellowpetal',
  Zapplate = 'zapplate',
  Zoomlens = 'zoomlens',
  Zpowering = 'zpowering',
  Zring = 'zring',
  Zygardecube = 'zygardecube'
}
/** A learnset entry */
export declare type Learnset = {
  readonly __typename?: 'Learnset';
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly backSprite: Scalars['String'];
  /** The PokéDex colour for the Pokémon */
  readonly color: Scalars['String'];
  /** The moves that are exclusively learned in the Unova Dream World */
  readonly dreamworldMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be passed as egg moves */
  readonly eggMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that are exclusive to event variants of the Pokémon */
  readonly eventMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be learned through levelling up */
  readonly levelUpMoves?: Maybe<ReadonlyArray<LearnsetLevelUpMove>>;
  /** The dex number for a Pokémon */
  readonly num: Scalars['Int'];
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinyBackSprite: Scalars['String'];
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinySprite: Scalars['String'];
  /** The species name for a Pokémon */
  readonly species: Scalars['String'];
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly sprite: Scalars['String'];
  /** The moves that can be learned from a Technical Machine or Technical Record */
  readonly tmMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be learned from a move tutor */
  readonly tutorMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
  /** The moves that can be learned through virtual console transfer */
  readonly virtualTransferMoves?: Maybe<ReadonlyArray<LearnsetMove>>;
};
/** A learnset level up move entry */
export declare type LearnsetLevelUpMove = {
  readonly __typename?: 'LearnsetLevelUpMove';
  /** The generation in which this pokémon learned the move this way */
  readonly generation?: Maybe<Scalars['Int']>;
  /** The level at which the move is learned */
  readonly level?: Maybe<Scalars['Int']>;
  /** The name of the move */
  readonly name?: Maybe<Scalars['String']>;
};
/** A learnset move entry */
export declare type LearnsetMove = {
  readonly __typename?: 'LearnsetMove';
  /** The generation in which this pokémon learned the move this way */
  readonly generation?: Maybe<Scalars['Int']>;
  /** The name of the move */
  readonly name?: Maybe<Scalars['String']>;
};
/** A single Pokémon move entry */
export declare type Move = {
  readonly __typename?: 'Move';
  /** The accuracy for a move */
  readonly accuracy: Scalars['Int'];
  /** The base power for a move */
  readonly basePower: Scalars['String'];
  /** Bulbapedia page for a move */
  readonly bulbapediaPage: Scalars['String'];
  /** The category for a move */
  readonly category: Scalars['String'];
  /** The contest type for a move */
  readonly contestType?: Maybe<Scalars['String']>;
  /** The long description for a move */
  readonly desc?: Maybe<Scalars['String']>;
  /** Whether this move can be used outside of battle, and if it can what the effect of the field move is */
  readonly isFieldMove?: Maybe<Scalars['String']>;
  /** Whether this move is a G-MAX move, and if it is which Gigantamaxed Pokémon can use it */
  readonly isGMax?: Maybe<Scalars['String']>;
  /** Whether a move is non-standard, and if it is why */
  readonly isNonstandard?: Maybe<Scalars['String']>;
  /** Whether this move is a Z-Move, and if it is the Z-Crystal required to trigger it */
  readonly isZ?: Maybe<Scalars['String']>;
  /** The power this move will have when used with its Max Move equivalent */
  readonly maxMovePower?: Maybe<Scalars['Int']>;
  /** The name for a move */
  readonly name: Scalars['String'];
  /** The power points for a move */
  readonly pp: Scalars['Int'];
  /** The priority for a move */
  readonly priority: Scalars['Int'];
  /** Serebii page for a move */
  readonly serebiiPage: Scalars['String'];
  /** The short description for a move */
  readonly shortDesc: Scalars['String'];
  /** Smogon page for a move */
  readonly smogonPage: Scalars['String'];
  /** The target for a move */
  readonly target: Scalars['String'];
  /** The type for a move */
  readonly type: Scalars['String'];
  /** The power this move will have when used with its Z-move equivalent */
  readonly zMovePower?: Maybe<Scalars['Int']>;
};
/** The supported moves */
export declare const enum MovesEnum {
  Absorb = 'absorb',
  Accelerock = 'accelerock',
  Acid = 'acid',
  Acidarmor = 'acidarmor',
  Aciddownpour = 'aciddownpour',
  Acidspray = 'acidspray',
  Acrobatics = 'acrobatics',
  Acupressure = 'acupressure',
  Aerialace = 'aerialace',
  Aeroblast = 'aeroblast',
  Afteryou = 'afteryou',
  Agility = 'agility',
  Aircutter = 'aircutter',
  Airslash = 'airslash',
  Alloutpummeling = 'alloutpummeling',
  Allyswitch = 'allyswitch',
  Amnesia = 'amnesia',
  Anchorshot = 'anchorshot',
  Ancientpower = 'ancientpower',
  Appleacid = 'appleacid',
  Aquajet = 'aquajet',
  Aquaring = 'aquaring',
  Aquatail = 'aquatail',
  Armthrust = 'armthrust',
  Aromatherapy = 'aromatherapy',
  Aromaticmist = 'aromaticmist',
  Assist = 'assist',
  Assurance = 'assurance',
  Astonish = 'astonish',
  Astralbarrage = 'astralbarrage',
  Attackorder = 'attackorder',
  Attract = 'attract',
  Aurasphere = 'aurasphere',
  Aurawheel = 'aurawheel',
  Aurorabeam = 'aurorabeam',
  Auroraveil = 'auroraveil',
  Autotomize = 'autotomize',
  Avalanche = 'avalanche',
  Babydolleyes = 'babydolleyes',
  Baddybad = 'baddybad',
  Banefulbunker = 'banefulbunker',
  Barrage = 'barrage',
  Barrier = 'barrier',
  Batonpass = 'batonpass',
  Beakblast = 'beakblast',
  Beatup = 'beatup',
  Behemothbash = 'behemothbash',
  Behemothblade = 'behemothblade',
  Belch = 'belch',
  Bellydrum = 'bellydrum',
  Bestow = 'bestow',
  Bide = 'bide',
  Bind = 'bind',
  Bite = 'bite',
  Blackholeeclipse = 'blackholeeclipse',
  Blastburn = 'blastburn',
  Blazekick = 'blazekick',
  Blizzard = 'blizzard',
  Block = 'block',
  Bloomdoom = 'bloomdoom',
  Blueflare = 'blueflare',
  Bodypress = 'bodypress',
  Bodyslam = 'bodyslam',
  Boltbeak = 'boltbeak',
  Boltstrike = 'boltstrike',
  Boneclub = 'boneclub',
  Bonemerang = 'bonemerang',
  Bonerush = 'bonerush',
  Boomburst = 'boomburst',
  Bounce = 'bounce',
  Bouncybubble = 'bouncybubble',
  Branchpoke = 'branchpoke',
  Bravebird = 'bravebird',
  Breakingswipe = 'breakingswipe',
  Breakneckblitz = 'breakneckblitz',
  Brickbreak = 'brickbreak',
  Brine = 'brine',
  Brutalswing = 'brutalswing',
  Bubble = 'bubble',
  Bubblebeam = 'bubblebeam',
  Bugbite = 'bugbite',
  Bugbuzz = 'bugbuzz',
  Bulkup = 'bulkup',
  Bulldoze = 'bulldoze',
  Bulletpunch = 'bulletpunch',
  Bulletseed = 'bulletseed',
  Burningjealousy = 'burningjealousy',
  Burnup = 'burnup',
  Buzzybuzz = 'buzzybuzz',
  Calmmind = 'calmmind',
  Camouflage = 'camouflage',
  Captivate = 'captivate',
  Catastropika = 'catastropika',
  Celebrate = 'celebrate',
  Charge = 'charge',
  Chargebeam = 'chargebeam',
  Charm = 'charm',
  Chatter = 'chatter',
  Chipaway = 'chipaway',
  Circlethrow = 'circlethrow',
  Clamp = 'clamp',
  Clangingscales = 'clangingscales',
  Clangoroussoul = 'clangoroussoul',
  Clangoroussoulblaze = 'clangoroussoulblaze',
  Clearsmog = 'clearsmog',
  Closecombat = 'closecombat',
  Coaching = 'coaching',
  Coil = 'coil',
  Cometpunch = 'cometpunch',
  Confide = 'confide',
  Confuseray = 'confuseray',
  Confusion = 'confusion',
  Constrict = 'constrict',
  Continentalcrush = 'continentalcrush',
  Conversion = 'conversion',
  Conversion2 = 'conversion2',
  Copycat = 'copycat',
  Coreenforcer = 'coreenforcer',
  Corkscrewcrash = 'corkscrewcrash',
  Corrosivegas = 'corrosivegas',
  Cosmicpower = 'cosmicpower',
  Cottonguard = 'cottonguard',
  Cottonspore = 'cottonspore',
  Counter = 'counter',
  Courtchange = 'courtchange',
  Covet = 'covet',
  Crabhammer = 'crabhammer',
  Craftyshield = 'craftyshield',
  Crosschop = 'crosschop',
  Crosspoison = 'crosspoison',
  Crunch = 'crunch',
  Crushclaw = 'crushclaw',
  Crushgrip = 'crushgrip',
  Curse = 'curse',
  Cut = 'cut',
  Darkestlariat = 'darkestlariat',
  Darkpulse = 'darkpulse',
  Darkvoid = 'darkvoid',
  Dazzlinggleam = 'dazzlinggleam',
  Decorate = 'decorate',
  Defendorder = 'defendorder',
  Defensecurl = 'defensecurl',
  Defog = 'defog',
  Destinybond = 'destinybond',
  Detect = 'detect',
  Devastatingdrake = 'devastatingdrake',
  Diamondstorm = 'diamondstorm',
  Dig = 'dig',
  Disable = 'disable',
  Disarmingvoice = 'disarmingvoice',
  Discharge = 'discharge',
  Dive = 'dive',
  Dizzypunch = 'dizzypunch',
  Doomdesire = 'doomdesire',
  Doubleedge = 'doubleedge',
  Doublehit = 'doublehit',
  Doubleironbash = 'doubleironbash',
  Doublekick = 'doublekick',
  Doubleslap = 'doubleslap',
  Doubleteam = 'doubleteam',
  Dracometeor = 'dracometeor',
  Dragonascent = 'dragonascent',
  Dragonbreath = 'dragonbreath',
  Dragonclaw = 'dragonclaw',
  Dragondance = 'dragondance',
  Dragondarts = 'dragondarts',
  Dragonenergy = 'dragonenergy',
  Dragonhammer = 'dragonhammer',
  Dragonpulse = 'dragonpulse',
  Dragonrage = 'dragonrage',
  Dragonrush = 'dragonrush',
  Dragontail = 'dragontail',
  Drainingkiss = 'drainingkiss',
  Drainpunch = 'drainpunch',
  Dreameater = 'dreameater',
  Drillpeck = 'drillpeck',
  Drillrun = 'drillrun',
  Drumbeating = 'drumbeating',
  Dualchop = 'dualchop',
  Dualwingbeat = 'dualwingbeat',
  Dynamaxcannon = 'dynamaxcannon',
  Dynamicpunch = 'dynamicpunch',
  Earthpower = 'earthpower',
  Earthquake = 'earthquake',
  Echoedvoice = 'echoedvoice',
  Eerieimpulse = 'eerieimpulse',
  Eeriespell = 'eeriespell',
  Eggbomb = 'eggbomb',
  Electricterrain = 'electricterrain',
  Electrify = 'electrify',
  Electroball = 'electroball',
  Electroweb = 'electroweb',
  Embargo = 'embargo',
  Ember = 'ember',
  Encore = 'encore',
  Endeavor = 'endeavor',
  Endure = 'endure',
  Energyball = 'energyball',
  Entrainment = 'entrainment',
  Eruption = 'eruption',
  Eternabeam = 'eternabeam',
  Expandingforce = 'expandingforce',
  Explosion = 'explosion',
  Extrasensory = 'extrasensory',
  Extremeevoboost = 'extremeevoboost',
  Extremespeed = 'extremespeed',
  Facade = 'facade',
  Fairylock = 'fairylock',
  Fairywind = 'fairywind',
  Fakeout = 'fakeout',
  Faketears = 'faketears',
  Falsesurrender = 'falsesurrender',
  Falseswipe = 'falseswipe',
  Featherdance = 'featherdance',
  Feint = 'feint',
  Feintattack = 'feintattack',
  Fellstinger = 'fellstinger',
  Fierydance = 'fierydance',
  Fierywrath = 'fierywrath',
  Finalgambit = 'finalgambit',
  Fireblast = 'fireblast',
  Firefang = 'firefang',
  Firelash = 'firelash',
  Firepledge = 'firepledge',
  Firepunch = 'firepunch',
  Firespin = 'firespin',
  Firstimpression = 'firstimpression',
  Fishiousrend = 'fishiousrend',
  Fissure = 'fissure',
  Flail = 'flail',
  Flameburst = 'flameburst',
  Flamecharge = 'flamecharge',
  Flamethrower = 'flamethrower',
  Flamewheel = 'flamewheel',
  Flareblitz = 'flareblitz',
  Flash = 'flash',
  Flashcannon = 'flashcannon',
  Flatter = 'flatter',
  Fleurcannon = 'fleurcannon',
  Fling = 'fling',
  Flipturn = 'flipturn',
  Floatyfall = 'floatyfall',
  Floralhealing = 'floralhealing',
  Flowershield = 'flowershield',
  Fly = 'fly',
  Flyingpress = 'flyingpress',
  Focusblast = 'focusblast',
  Focusenergy = 'focusenergy',
  Focuspunch = 'focuspunch',
  Followme = 'followme',
  Forcepalm = 'forcepalm',
  Foresight = 'foresight',
  Forestscurse = 'forestscurse',
  Foulplay = 'foulplay',
  Freezedry = 'freezedry',
  Freezeshock = 'freezeshock',
  Freezingglare = 'freezingglare',
  Freezyfrost = 'freezyfrost',
  Frenzyplant = 'frenzyplant',
  Frostbreath = 'frostbreath',
  Frustration = 'frustration',
  Furyattack = 'furyattack',
  Furycutter = 'furycutter',
  Furyswipes = 'furyswipes',
  Fusionbolt = 'fusionbolt',
  Fusionflare = 'fusionflare',
  Futuresight = 'futuresight',
  Gastroacid = 'gastroacid',
  Geargrind = 'geargrind',
  Gearup = 'gearup',
  Genesissupernova = 'genesissupernova',
  Geomancy = 'geomancy',
  Gigadrain = 'gigadrain',
  Gigaimpact = 'gigaimpact',
  Gigavolthavoc = 'gigavolthavoc',
  Glaciallance = 'glaciallance',
  Glaciate = 'glaciate',
  Glare = 'glare',
  Glitzyglow = 'glitzyglow',
  Gmaxbefuddle = 'gmaxbefuddle',
  Gmaxcannonade = 'gmaxcannonade',
  Gmaxcentiferno = 'gmaxcentiferno',
  Gmaxchistrike = 'gmaxchistrike',
  Gmaxcuddle = 'gmaxcuddle',
  Gmaxdepletion = 'gmaxdepletion',
  Gmaxdrumsolo = 'gmaxdrumsolo',
  Gmaxfinale = 'gmaxfinale',
  Gmaxfireball = 'gmaxfireball',
  Gmaxfoamburst = 'gmaxfoamburst',
  Gmaxgoldrush = 'gmaxgoldrush',
  Gmaxgravitas = 'gmaxgravitas',
  Gmaxhydrosnipe = 'gmaxhydrosnipe',
  Gmaxmalodor = 'gmaxmalodor',
  Gmaxmeltdown = 'gmaxmeltdown',
  Gmaxoneblow = 'gmaxoneblow',
  Gmaxrapidflow = 'gmaxrapidflow',
  Gmaxreplenish = 'gmaxreplenish',
  Gmaxresonance = 'gmaxresonance',
  Gmaxsandblast = 'gmaxsandblast',
  Gmaxsmite = 'gmaxsmite',
  Gmaxsnooze = 'gmaxsnooze',
  Gmaxsteelsurge = 'gmaxsteelsurge',
  Gmaxstonesurge = 'gmaxstonesurge',
  Gmaxstunshock = 'gmaxstunshock',
  Gmaxsweetness = 'gmaxsweetness',
  Gmaxtartness = 'gmaxtartness',
  Gmaxterror = 'gmaxterror',
  Gmaxvinelash = 'gmaxvinelash',
  Gmaxvolcalith = 'gmaxvolcalith',
  Gmaxvoltcrash = 'gmaxvoltcrash',
  Gmaxwildfire = 'gmaxwildfire',
  Gmaxwindrage = 'gmaxwindrage',
  Grassknot = 'grassknot',
  Grasspledge = 'grasspledge',
  Grasswhistle = 'grasswhistle',
  Grassyglide = 'grassyglide',
  Grassyterrain = 'grassyterrain',
  Gravapple = 'gravapple',
  Gravity = 'gravity',
  Growl = 'growl',
  Growth = 'growth',
  Grudge = 'grudge',
  Guardianofalola = 'guardianofalola',
  Guardsplit = 'guardsplit',
  Guardswap = 'guardswap',
  Guillotine = 'guillotine',
  Gunkshot = 'gunkshot',
  Gust = 'gust',
  Gyroball = 'gyroball',
  Hail = 'hail',
  Hammerarm = 'hammerarm',
  Happyhour = 'happyhour',
  Harden = 'harden',
  Haze = 'haze',
  Headbutt = 'headbutt',
  Headcharge = 'headcharge',
  Headsmash = 'headsmash',
  Healbell = 'healbell',
  Healblock = 'healblock',
  Healingwish = 'healingwish',
  Healorder = 'healorder',
  Healpulse = 'healpulse',
  Heartstamp = 'heartstamp',
  Heartswap = 'heartswap',
  Heatcrash = 'heatcrash',
  Heatwave = 'heatwave',
  Heavyslam = 'heavyslam',
  Helpinghand = 'helpinghand',
  Hex = 'hex',
  Hiddenpower = 'hiddenpower',
  Hiddenpowerbug = 'hiddenpowerbug',
  Hiddenpowerdark = 'hiddenpowerdark',
  Hiddenpowerdragon = 'hiddenpowerdragon',
  Hiddenpowerelectric = 'hiddenpowerelectric',
  Hiddenpowerfighting = 'hiddenpowerfighting',
  Hiddenpowerfire = 'hiddenpowerfire',
  Hiddenpowerflying = 'hiddenpowerflying',
  Hiddenpowerghost = 'hiddenpowerghost',
  Hiddenpowergrass = 'hiddenpowergrass',
  Hiddenpowerground = 'hiddenpowerground',
  Hiddenpowerice = 'hiddenpowerice',
  Hiddenpowerpoison = 'hiddenpowerpoison',
  Hiddenpowerpsychic = 'hiddenpowerpsychic',
  Hiddenpowerrock = 'hiddenpowerrock',
  Hiddenpowersteel = 'hiddenpowersteel',
  Hiddenpowerwater = 'hiddenpowerwater',
  Highhorsepower = 'highhorsepower',
  Highjumpkick = 'highjumpkick',
  Holdback = 'holdback',
  Holdhands = 'holdhands',
  Honeclaws = 'honeclaws',
  Hornattack = 'hornattack',
  Horndrill = 'horndrill',
  Hornleech = 'hornleech',
  Howl = 'howl',
  Hurricane = 'hurricane',
  Hydrocannon = 'hydrocannon',
  Hydropump = 'hydropump',
  Hydrovortex = 'hydrovortex',
  Hyperbeam = 'hyperbeam',
  Hyperfang = 'hyperfang',
  Hyperspacefury = 'hyperspacefury',
  Hyperspacehole = 'hyperspacehole',
  Hypervoice = 'hypervoice',
  Hypnosis = 'hypnosis',
  Iceball = 'iceball',
  Icebeam = 'icebeam',
  Iceburn = 'iceburn',
  Icefang = 'icefang',
  Icehammer = 'icehammer',
  Icepunch = 'icepunch',
  Iceshard = 'iceshard',
  Iciclecrash = 'iciclecrash',
  Iciclespear = 'iciclespear',
  Icywind = 'icywind',
  Imprison = 'imprison',
  Incinerate = 'incinerate',
  Inferno = 'inferno',
  Infernooverdrive = 'infernooverdrive',
  Infestation = 'infestation',
  Ingrain = 'ingrain',
  Instruct = 'instruct',
  Iondeluge = 'iondeluge',
  Irondefense = 'irondefense',
  Ironhead = 'ironhead',
  Irontail = 'irontail',
  Jawlock = 'jawlock',
  Judgment = 'judgment',
  Jumpkick = 'jumpkick',
  Junglehealing = 'junglehealing',
  Karatechop = 'karatechop',
  Kinesis = 'kinesis',
  Kingsshield = 'kingsshield',
  Knockoff = 'knockoff',
  Landswrath = 'landswrath',
  Laserfocus = 'laserfocus',
  Lashout = 'lashout',
  Lastresort = 'lastresort',
  Lavaplume = 'lavaplume',
  Leafage = 'leafage',
  Leafblade = 'leafblade',
  Leafstorm = 'leafstorm',
  Leaftornado = 'leaftornado',
  Leechlife = 'leechlife',
  Leechseed = 'leechseed',
  Leer = 'leer',
  Letssnuggleforever = 'letssnuggleforever',
  Lick = 'lick',
  Lifedew = 'lifedew',
  Lightofruin = 'lightofruin',
  Lightscreen = 'lightscreen',
  Lightthatburnsthesky = 'lightthatburnsthesky',
  Liquidation = 'liquidation',
  Lockon = 'lockon',
  Lovelykiss = 'lovelykiss',
  Lowkick = 'lowkick',
  Lowsweep = 'lowsweep',
  Luckychant = 'luckychant',
  Lunardance = 'lunardance',
  Lunge = 'lunge',
  Lusterpurge = 'lusterpurge',
  Machpunch = 'machpunch',
  Magicalleaf = 'magicalleaf',
  Magiccoat = 'magiccoat',
  Magicpowder = 'magicpowder',
  Magicroom = 'magicroom',
  Magikarpsrevenge = 'magikarpsrevenge',
  Magmastorm = 'magmastorm',
  Magnetbomb = 'magnetbomb',
  Magneticflux = 'magneticflux',
  Magnetrise = 'magnetrise',
  Magnitude = 'magnitude',
  Maliciousmoonsault = 'maliciousmoonsault',
  Matblock = 'matblock',
  Maxairstream = 'maxairstream',
  Maxdarkness = 'maxdarkness',
  Maxflare = 'maxflare',
  Maxflutterby = 'maxflutterby',
  Maxgeyser = 'maxgeyser',
  Maxguard = 'maxguard',
  Maxhailstorm = 'maxhailstorm',
  Maxknuckle = 'maxknuckle',
  Maxlightning = 'maxlightning',
  Maxmindstorm = 'maxmindstorm',
  Maxooze = 'maxooze',
  Maxovergrowth = 'maxovergrowth',
  Maxphantasm = 'maxphantasm',
  Maxquake = 'maxquake',
  Maxrockfall = 'maxrockfall',
  Maxstarfall = 'maxstarfall',
  Maxsteelspike = 'maxsteelspike',
  Maxstrike = 'maxstrike',
  Maxwyrmwind = 'maxwyrmwind',
  Meanlook = 'meanlook',
  Meditate = 'meditate',
  Mefirst = 'mefirst',
  Megadrain = 'megadrain',
  Megahorn = 'megahorn',
  Megakick = 'megakick',
  Megapunch = 'megapunch',
  Memento = 'memento',
  Menacingmoonrazemaelstrom = 'menacingmoonrazemaelstrom',
  Metalburst = 'metalburst',
  Metalclaw = 'metalclaw',
  Metalsound = 'metalsound',
  Meteorassault = 'meteorassault',
  Meteorbeam = 'meteorbeam',
  Meteormash = 'meteormash',
  Metronome = 'metronome',
  Milkdrink = 'milkdrink',
  Mimic = 'mimic',
  Mindblown = 'mindblown',
  Mindreader = 'mindreader',
  Minimize = 'minimize',
  Miracleeye = 'miracleeye',
  Mirrorcoat = 'mirrorcoat',
  Mirrormove = 'mirrormove',
  Mirrorshot = 'mirrorshot',
  Mist = 'mist',
  Mistball = 'mistball',
  Mistyexplosion = 'mistyexplosion',
  Mistyterrain = 'mistyterrain',
  Moonblast = 'moonblast',
  Moongeistbeam = 'moongeistbeam',
  Moonlight = 'moonlight',
  Morningsun = 'morningsun',
  Mudbomb = 'mudbomb',
  Muddywater = 'muddywater',
  Mudshot = 'mudshot',
  Mudslap = 'mudslap',
  Mudsport = 'mudsport',
  Multiattack = 'multiattack',
  Mysticalfire = 'mysticalfire',
  Nastyplot = 'nastyplot',
  Naturalgift = 'naturalgift',
  Naturepower = 'naturepower',
  Naturesmadness = 'naturesmadness',
  Needlearm = 'needlearm',
  Neverendingnightmare = 'neverendingnightmare',
  Nightdaze = 'nightdaze',
  Nightmare = 'nightmare',
  Nightshade = 'nightshade',
  Nightslash = 'nightslash',
  Nobleroar = 'nobleroar',
  Noretreat = 'noretreat',
  Nuzzle = 'nuzzle',
  Oblivionwing = 'oblivionwing',
  Obstruct = 'obstruct',
  Oceanicoperetta = 'oceanicoperetta',
  Octazooka = 'octazooka',
  Octolock = 'octolock',
  Odorsleuth = 'odorsleuth',
  Ominouswind = 'ominouswind',
  Originpulse = 'originpulse',
  Outrage = 'outrage',
  Overdrive = 'overdrive',
  Overheat = 'overheat',
  Painsplit = 'painsplit',
  Paleowave = 'paleowave',
  Paraboliccharge = 'paraboliccharge',
  Partingshot = 'partingshot',
  Payback = 'payback',
  Payday = 'payday',
  Peck = 'peck',
  Perishsong = 'perishsong',
  Petalblizzard = 'petalblizzard',
  Petaldance = 'petaldance',
  Phantomforce = 'phantomforce',
  Photongeyser = 'photongeyser',
  Pikapapow = 'pikapapow',
  Pinmissile = 'pinmissile',
  Plasmafists = 'plasmafists',
  Playnice = 'playnice',
  Playrough = 'playrough',
  Pluck = 'pluck',
  Poisonfang = 'poisonfang',
  Poisongas = 'poisongas',
  Poisonjab = 'poisonjab',
  Poisonpowder = 'poisonpowder',
  Poisonsting = 'poisonsting',
  Poisontail = 'poisontail',
  Pollenpuff = 'pollenpuff',
  Poltergeist = 'poltergeist',
  Pound = 'pound',
  Powder = 'powder',
  Powdersnow = 'powdersnow',
  Powergem = 'powergem',
  Powersplit = 'powersplit',
  Powerswap = 'powerswap',
  Powertrick = 'powertrick',
  Powertrip = 'powertrip',
  Poweruppunch = 'poweruppunch',
  Powerwhip = 'powerwhip',
  Precipiceblades = 'precipiceblades',
  Present = 'present',
  Prismaticlaser = 'prismaticlaser',
  Protect = 'protect',
  Psybeam = 'psybeam',
  Psychic = 'psychic',
  Psychicfangs = 'psychicfangs',
  Psychicterrain = 'psychicterrain',
  Psychoboost = 'psychoboost',
  Psychocut = 'psychocut',
  Psychoshift = 'psychoshift',
  Psychup = 'psychup',
  Psyshock = 'psyshock',
  Psystrike = 'psystrike',
  Psywave = 'psywave',
  Pulverizingpancake = 'pulverizingpancake',
  Punishment = 'punishment',
  Purify = 'purify',
  Pursuit = 'pursuit',
  Pyroball = 'pyroball',
  Quash = 'quash',
  Quickattack = 'quickattack',
  Quickguard = 'quickguard',
  Quiverdance = 'quiverdance',
  Rage = 'rage',
  Ragepowder = 'ragepowder',
  Raindance = 'raindance',
  Rapidspin = 'rapidspin',
  Razorleaf = 'razorleaf',
  Razorshell = 'razorshell',
  Razorwind = 'razorwind',
  Recover = 'recover',
  Recycle = 'recycle',
  Reflect = 'reflect',
  Reflecttype = 'reflecttype',
  Refresh = 'refresh',
  Relicsong = 'relicsong',
  Rest = 'rest',
  Retaliate = 'retaliate',
  Return = 'return',
  Revelationdance = 'revelationdance',
  Revenge = 'revenge',
  Reversal = 'reversal',
  Risingvoltage = 'risingvoltage',
  Roar = 'roar',
  Roaroftime = 'roaroftime',
  Rockblast = 'rockblast',
  Rockclimb = 'rockclimb',
  Rockpolish = 'rockpolish',
  Rockslide = 'rockslide',
  Rocksmash = 'rocksmash',
  Rockthrow = 'rockthrow',
  Rocktomb = 'rocktomb',
  Rockwrecker = 'rockwrecker',
  Roleplay = 'roleplay',
  Rollingkick = 'rollingkick',
  Rollout = 'rollout',
  Roost = 'roost',
  Rototiller = 'rototiller',
  Round = 'round',
  Sacredfire = 'sacredfire',
  Sacredsword = 'sacredsword',
  Safeguard = 'safeguard',
  Sandattack = 'sandattack',
  Sandstorm = 'sandstorm',
  Sandtomb = 'sandtomb',
  Sappyseed = 'sappyseed',
  Savagespinout = 'savagespinout',
  Scald = 'scald',
  Scaleshot = 'scaleshot',
  Scaryface = 'scaryface',
  Scorchingsands = 'scorchingsands',
  Scratch = 'scratch',
  Screech = 'screech',
  Searingshot = 'searingshot',
  Searingsunrazesmash = 'searingsunrazesmash',
  Secretpower = 'secretpower',
  Secretsword = 'secretsword',
  Seedbomb = 'seedbomb',
  Seedflare = 'seedflare',
  Seismictoss = 'seismictoss',
  Selfdestruct = 'selfdestruct',
  Shadowball = 'shadowball',
  Shadowbone = 'shadowbone',
  Shadowclaw = 'shadowclaw',
  Shadowforce = 'shadowforce',
  Shadowpunch = 'shadowpunch',
  Shadowsneak = 'shadowsneak',
  Shadowstrike = 'shadowstrike',
  Sharpen = 'sharpen',
  Shatteredpsyche = 'shatteredpsyche',
  Sheercold = 'sheercold',
  Shellsidearm = 'shellsidearm',
  Shellsmash = 'shellsmash',
  Shelltrap = 'shelltrap',
  Shiftgear = 'shiftgear',
  Shockwave = 'shockwave',
  Shoreup = 'shoreup',
  Signalbeam = 'signalbeam',
  Silverwind = 'silverwind',
  Simplebeam = 'simplebeam',
  Sing = 'sing',
  Sinisterarrowraid = 'sinisterarrowraid',
  Sizzlyslide = 'sizzlyslide',
  Sketch = 'sketch',
  Skillswap = 'skillswap',
  Skittersmack = 'skittersmack',
  Skullbash = 'skullbash',
  Skyattack = 'skyattack',
  Skydrop = 'skydrop',
  Skyuppercut = 'skyuppercut',
  Slackoff = 'slackoff',
  Slam = 'slam',
  Slash = 'slash',
  Sleeppowder = 'sleeppowder',
  Sleeptalk = 'sleeptalk',
  Sludge = 'sludge',
  Sludgebomb = 'sludgebomb',
  Sludgewave = 'sludgewave',
  Smackdown = 'smackdown',
  Smartstrike = 'smartstrike',
  Smellingsalts = 'smellingsalts',
  Smog = 'smog',
  Smokescreen = 'smokescreen',
  Snaptrap = 'snaptrap',
  Snarl = 'snarl',
  Snatch = 'snatch',
  Snipeshot = 'snipeshot',
  Snore = 'snore',
  Soak = 'soak',
  Softboiled = 'softboiled',
  Solarbeam = 'solarbeam',
  Solarblade = 'solarblade',
  Sonicboom = 'sonicboom',
  Soulstealing7starstrike = 'soulstealing7starstrike',
  Spacialrend = 'spacialrend',
  Spark = 'spark',
  Sparklingaria = 'sparklingaria',
  Sparklyswirl = 'sparklyswirl',
  Spectralthief = 'spectralthief',
  Speedswap = 'speedswap',
  Spiderweb = 'spiderweb',
  Spikecannon = 'spikecannon',
  Spikes = 'spikes',
  Spikyshield = 'spikyshield',
  Spiritbreak = 'spiritbreak',
  Spiritshackle = 'spiritshackle',
  Spite = 'spite',
  Spitup = 'spitup',
  Splash = 'splash',
  Splinteredstormshards = 'splinteredstormshards',
  Splishysplash = 'splishysplash',
  Spore = 'spore',
  Spotlight = 'spotlight',
  Stealthrock = 'stealthrock',
  Steameruption = 'steameruption',
  Steamroller = 'steamroller',
  Steelbeam = 'steelbeam',
  Steelroller = 'steelroller',
  Steelwing = 'steelwing',
  Stickyweb = 'stickyweb',
  Stockpile = 'stockpile',
  Stokedsparksurfer = 'stokedsparksurfer',
  Stomp = 'stomp',
  Stompingtantrum = 'stompingtantrum',
  Stoneedge = 'stoneedge',
  Storedpower = 'storedpower',
  Stormthrow = 'stormthrow',
  Strangesteam = 'strangesteam',
  Strength = 'strength',
  Strengthsap = 'strengthsap',
  Stringshot = 'stringshot',
  Struggle = 'struggle',
  Strugglebug = 'strugglebug',
  Stuffcheeks = 'stuffcheeks',
  Stunspore = 'stunspore',
  Submission = 'submission',
  Substitute = 'substitute',
  Subzeroslammer = 'subzeroslammer',
  Suckerpunch = 'suckerpunch',
  Sunnyday = 'sunnyday',
  Sunsteelstrike = 'sunsteelstrike',
  Superfang = 'superfang',
  Superpower = 'superpower',
  Supersonic = 'supersonic',
  Supersonicskystrike = 'supersonicskystrike',
  Surf = 'surf',
  Surgingstrikes = 'surgingstrikes',
  Swagger = 'swagger',
  Swallow = 'swallow',
  Sweetkiss = 'sweetkiss',
  Sweetscent = 'sweetscent',
  Swift = 'swift',
  Switcheroo = 'switcheroo',
  Swordsdance = 'swordsdance',
  Synchronoise = 'synchronoise',
  Synthesis = 'synthesis',
  Tackle = 'tackle',
  Tailglow = 'tailglow',
  Tailslap = 'tailslap',
  Tailwhip = 'tailwhip',
  Tailwind = 'tailwind',
  Takedown = 'takedown',
  Tarshot = 'tarshot',
  Taunt = 'taunt',
  Tearfullook = 'tearfullook',
  Teatime = 'teatime',
  Technoblast = 'technoblast',
  Tectonicrage = 'tectonicrage',
  Teeterdance = 'teeterdance',
  Telekinesis = 'telekinesis',
  Teleport = 'teleport',
  Terrainpulse = 'terrainpulse',
  Thief = 'thief',
  Thousandarrows = 'thousandarrows',
  Thousandwaves = 'thousandwaves',
  Thrash = 'thrash',
  Throatchop = 'throatchop',
  Thunder = 'thunder',
  Thunderbolt = 'thunderbolt',
  Thundercage = 'thundercage',
  Thunderfang = 'thunderfang',
  Thunderouskick = 'thunderouskick',
  Thunderpunch = 'thunderpunch',
  Thundershock = 'thundershock',
  Thunderwave = 'thunderwave',
  Tickle = 'tickle',
  Topsyturvy = 'topsyturvy',
  Torment = 'torment',
  Toxic = 'toxic',
  Toxicspikes = 'toxicspikes',
  Toxicthread = 'toxicthread',
  Transform = 'transform',
  Triattack = 'triattack',
  Trick = 'trick',
  Trickortreat = 'trickortreat',
  Trickroom = 'trickroom',
  Tripleaxel = 'tripleaxel',
  Triplekick = 'triplekick',
  Tropkick = 'tropkick',
  Trumpcard = 'trumpcard',
  Twineedle = 'twineedle',
  Twinkletackle = 'twinkletackle',
  Twister = 'twister',
  Uproar = 'uproar',
  Uturn = 'uturn',
  Vacuumwave = 'vacuumwave',
  Vcreate = 'vcreate',
  Veeveevolley = 'veeveevolley',
  Venomdrench = 'venomdrench',
  Venoshock = 'venoshock',
  Vinewhip = 'vinewhip',
  Visegrip = 'visegrip',
  Vitalthrow = 'vitalthrow',
  Voltswitch = 'voltswitch',
  Volttackle = 'volttackle',
  Wakeupslap = 'wakeupslap',
  Waterfall = 'waterfall',
  Watergun = 'watergun',
  Waterpledge = 'waterpledge',
  Waterpulse = 'waterpulse',
  Watershuriken = 'watershuriken',
  Watersport = 'watersport',
  Waterspout = 'waterspout',
  Weatherball = 'weatherball',
  Whirlpool = 'whirlpool',
  Whirlwind = 'whirlwind',
  Wickedblow = 'wickedblow',
  Wideguard = 'wideguard',
  Wildcharge = 'wildcharge',
  Willowisp = 'willowisp',
  Wingattack = 'wingattack',
  Wish = 'wish',
  Withdraw = 'withdraw',
  Wonderroom = 'wonderroom',
  Woodhammer = 'woodhammer',
  Workup = 'workup',
  Worryseed = 'worryseed',
  Wrap = 'wrap',
  Wringout = 'wringout',
  Xscissor = 'xscissor',
  Yawn = 'yawn',
  Zapcannon = 'zapcannon',
  Zenheadbutt = 'zenheadbutt',
  Zingzap = 'zingzap',
  Zippyzap = 'zippyzap'
}
/** A Pokémon's entry */
export declare type Pokemon = {
  readonly __typename?: 'Pokemon';
  /** The abilities for a Pokémon */
  readonly abilities: Abilities;
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly backSprite: Scalars['String'];
  /** Base form if this entry describes an alternate form */
  readonly baseForme?: Maybe<Scalars['String']>;
  /** Base species if this entry describes a special form */
  readonly baseSpecies?: Maybe<Scalars['String']>;
  /** Base stats for a Pokémon */
  readonly baseStats: Stats;
  /** The total of all base stats for a Pokémon */
  readonly baseStatsTotal: Scalars['Int'];
  /** Bulbapedia page for a Pokémon */
  readonly bulbapediaPage: Scalars['String'];
  /** The catch rate data for a Pokémon */
  readonly catchRate?: Maybe<CatchRate>;
  /** The colour of a Pokémon as listed in the Pokedex */
  readonly color: Scalars['String'];
  /** Any other *cosmetic* forms for a Pokémon, distinguished from other formes as cosmetic formes only change the look of the Pokémon, while other formes might also change an ability, moveset or other data. */
  readonly cosmeticFormes?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The egg groups a Pokémon is in */
  readonly eggGroups?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** EV yields for a Pokémon */
  readonly evYields: EvYields;
  /** The evolution level, or special method, for a Pokémon */
  readonly evolutionLevel?: Maybe<Scalars['String']>;
  /** The evolutions for a Pokémon, if any */
  readonly evolutions?: Maybe<ReadonlyArray<Pokemon>>;
  /** The flavor texts for a Pokémon */
  readonly flavorTexts: ReadonlyArray<Flavor>;
  /** The form identifier of a Pokémon */
  readonly forme?: Maybe<Scalars['String']>;
  /** The single letter identifier of the form */
  readonly formeLetter?: Maybe<Scalars['String']>;
  /** The gender data for a Pokémon */
  readonly gender: Gender;
  /** The height of a Pokémon in meters */
  readonly height: Scalars['Float'];
  /** Whether the egg of a Pokémon is obtainable */
  readonly isEggObtainable: Scalars['Boolean'];
  /** The levelling rate of a Pokémon */
  readonly levellingRate?: Maybe<Scalars['String']>;
  /** The maximum number of steps required for the egg of a Pokémon to hatch */
  readonly maximumHatchTime?: Maybe<Scalars['Int']>;
  /** The minimum number of steps required for the egg of a Pokémon to hatch */
  readonly minimumHatchTime?: Maybe<Scalars['Int']>;
  /** The dex number for a Pokémon */
  readonly num: Scalars['Int'];
  /** Any other forms for a Pokémon */
  readonly otherFormes?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The preevolutions for a Pokémon, if any */
  readonly preevolutions?: Maybe<ReadonlyArray<Pokemon>>;
  /** Serebii page for a Pokémon */
  readonly serebiiPage: Scalars['String'];
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinyBackSprite: Scalars['String'];
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly shinySprite: Scalars['String'];
  /** Smogon page for a Pokémon */
  readonly smogonPage: Scalars['String'];
  /** The smogon tier a Pokémon falls under */
  readonly smogonTier: Scalars['String'];
  /** The species name for a Pokémon */
  readonly species: Scalars['String'];
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  readonly sprite: Scalars['String'];
  /** The types for a Pokémon */
  readonly types: ReadonlyArray<Scalars['String']>;
  /** The weight of a Pokémon in kilograms */
  readonly weight: Scalars['Float'];
};
/** The supported Pokémon */
export declare const enum PokemonEnum {
  Abomasnow = 'abomasnow',
  Abomasnowmega = 'abomasnowmega',
  Abra = 'abra',
  Absol = 'absol',
  Absolmega = 'absolmega',
  Accelgor = 'accelgor',
  Aegislash = 'aegislash',
  Aegislashblade = 'aegislashblade',
  Aerodactyl = 'aerodactyl',
  Aerodactylmega = 'aerodactylmega',
  Aggron = 'aggron',
  Aggronmega = 'aggronmega',
  Aipom = 'aipom',
  Alakazam = 'alakazam',
  Alakazammega = 'alakazammega',
  Alcremie = 'alcremie',
  Alcremiegmax = 'alcremiegmax',
  Alomomola = 'alomomola',
  Altaria = 'altaria',
  Altariamega = 'altariamega',
  Amaura = 'amaura',
  Ambipom = 'ambipom',
  Amoonguss = 'amoonguss',
  Ampharos = 'ampharos',
  Ampharosmega = 'ampharosmega',
  Anorith = 'anorith',
  Appletun = 'appletun',
  Appletungmax = 'appletungmax',
  Applin = 'applin',
  Araquanid = 'araquanid',
  Araquanidtotem = 'araquanidtotem',
  Arbok = 'arbok',
  Arcanine = 'arcanine',
  Arceus = 'arceus',
  Arceusbug = 'arceusbug',
  Arceusdark = 'arceusdark',
  Arceusdragon = 'arceusdragon',
  Arceuselectric = 'arceuselectric',
  Arceusfairy = 'arceusfairy',
  Arceusfighting = 'arceusfighting',
  Arceusfire = 'arceusfire',
  Arceusflying = 'arceusflying',
  Arceusghost = 'arceusghost',
  Arceusgrass = 'arceusgrass',
  Arceusground = 'arceusground',
  Arceusice = 'arceusice',
  Arceuspoison = 'arceuspoison',
  Arceuspsychic = 'arceuspsychic',
  Arceusrock = 'arceusrock',
  Arceussteel = 'arceussteel',
  Arceuswater = 'arceuswater',
  Archen = 'archen',
  Archeops = 'archeops',
  Arctovish = 'arctovish',
  Arctozolt = 'arctozolt',
  Argalis = 'argalis',
  Arghonaut = 'arghonaut',
  Ariados = 'ariados',
  Armaldo = 'armaldo',
  Aromatisse = 'aromatisse',
  Aron = 'aron',
  Arrokuda = 'arrokuda',
  Articuno = 'articuno',
  Articunogalar = 'articunogalar',
  Astrolotl = 'astrolotl',
  Audino = 'audino',
  Audinomega = 'audinomega',
  Aurorus = 'aurorus',
  Aurumoth = 'aurumoth',
  Avalugg = 'avalugg',
  Axew = 'axew',
  Azelf = 'azelf',
  Azumarill = 'azumarill',
  Azurill = 'azurill',
  Bagon = 'bagon',
  Baltoy = 'baltoy',
  Banette = 'banette',
  Banettemega = 'banettemega',
  Barbaracle = 'barbaracle',
  Barboach = 'barboach',
  Barraskewda = 'barraskewda',
  Basculin = 'basculin',
  Basculinbluestriped = 'basculinbluestriped',
  Bastiodon = 'bastiodon',
  Bayleef = 'bayleef',
  Beartic = 'beartic',
  Beautifly = 'beautifly',
  Beedrill = 'beedrill',
  Beedrillmega = 'beedrillmega',
  Beheeyem = 'beheeyem',
  Beldum = 'beldum',
  Bellossom = 'bellossom',
  Bellsprout = 'bellsprout',
  Bergmite = 'bergmite',
  Bewear = 'bewear',
  Bibarel = 'bibarel',
  Bidoof = 'bidoof',
  Binacle = 'binacle',
  Bisharp = 'bisharp',
  Blacephalon = 'blacephalon',
  Blastoise = 'blastoise',
  Blastoisegmax = 'blastoisegmax',
  Blastoisemega = 'blastoisemega',
  Blaziken = 'blaziken',
  Blazikenmega = 'blazikenmega',
  Blipbug = 'blipbug',
  Blissey = 'blissey',
  Blitzle = 'blitzle',
  Boldore = 'boldore',
  Boltund = 'boltund',
  Bonsly = 'bonsly',
  Bouffalant = 'bouffalant',
  Bounsweet = 'bounsweet',
  Braixen = 'braixen',
  Brattler = 'brattler',
  Braviary = 'braviary',
  Breezi = 'breezi',
  Breloom = 'breloom',
  Brionne = 'brionne',
  Bronzong = 'bronzong',
  Bronzor = 'bronzor',
  Bruxish = 'bruxish',
  Budew = 'budew',
  Buizel = 'buizel',
  Bulbasaur = 'bulbasaur',
  Buneary = 'buneary',
  Bunnelby = 'bunnelby',
  Burmy = 'burmy',
  Butterfree = 'butterfree',
  Butterfreegmax = 'butterfreegmax',
  Buzzwole = 'buzzwole',
  Cacnea = 'cacnea',
  Cacturne = 'cacturne',
  Caimanoe = 'caimanoe',
  Calyrex = 'calyrex',
  Calyrexice = 'calyrexice',
  Calyrexshadow = 'calyrexshadow',
  Camerupt = 'camerupt',
  Cameruptmega = 'cameruptmega',
  Carbink = 'carbink',
  Caribolt = 'caribolt',
  Carkol = 'carkol',
  Carnivine = 'carnivine',
  Carracosta = 'carracosta',
  Carvanha = 'carvanha',
  Cascoon = 'cascoon',
  Castform = 'castform',
  Castformrainy = 'castformrainy',
  Castformsnowy = 'castformsnowy',
  Castformsunny = 'castformsunny',
  Caterpie = 'caterpie',
  Cawdet = 'cawdet',
  Cawmodore = 'cawmodore',
  Celebi = 'celebi',
  Celesteela = 'celesteela',
  Centiskorch = 'centiskorch',
  Centiskorchgmax = 'centiskorchgmax',
  Chandelure = 'chandelure',
  Chansey = 'chansey',
  Charizard = 'charizard',
  Charizardgmax = 'charizardgmax',
  Charizardmegax = 'charizardmegax',
  Charizardmegay = 'charizardmegay',
  Charjabug = 'charjabug',
  Charmander = 'charmander',
  Charmeleon = 'charmeleon',
  Chatot = 'chatot',
  Cherrim = 'cherrim',
  Cherrimsunshine = 'cherrimsunshine',
  Cherubi = 'cherubi',
  Chesnaught = 'chesnaught',
  Chespin = 'chespin',
  Chewtle = 'chewtle',
  Chikorita = 'chikorita',
  Chimchar = 'chimchar',
  Chimecho = 'chimecho',
  Chinchou = 'chinchou',
  Chingling = 'chingling',
  Chromera = 'chromera',
  Cinccino = 'cinccino',
  Cinderace = 'cinderace',
  Cinderacegmax = 'cinderacegmax',
  Clamperl = 'clamperl',
  Clauncher = 'clauncher',
  Clawitzer = 'clawitzer',
  Claydol = 'claydol',
  Clefable = 'clefable',
  Clefairy = 'clefairy',
  Cleffa = 'cleffa',
  Clobbopus = 'clobbopus',
  Cloyster = 'cloyster',
  Coalossal = 'coalossal',
  Coalossalgmax = 'coalossalgmax',
  Cobalion = 'cobalion',
  Cofagrigus = 'cofagrigus',
  Colossoil = 'colossoil',
  Combee = 'combee',
  Combusken = 'combusken',
  Comfey = 'comfey',
  Conkeldurr = 'conkeldurr',
  Copperajah = 'copperajah',
  Copperajahgmax = 'copperajahgmax',
  Coribalis = 'coribalis',
  Corphish = 'corphish',
  Corsola = 'corsola',
  Corsolagalar = 'corsolagalar',
  Corviknight = 'corviknight',
  Corviknightgmax = 'corviknightgmax',
  Corvisquire = 'corvisquire',
  Cosmoem = 'cosmoem',
  Cosmog = 'cosmog',
  Cottonee = 'cottonee',
  Crabominable = 'crabominable',
  Crabrawler = 'crabrawler',
  Cradily = 'cradily',
  Cramorant = 'cramorant',
  Cramorantgorging = 'cramorantgorging',
  Cramorantgulping = 'cramorantgulping',
  Cranidos = 'cranidos',
  Crawdaunt = 'crawdaunt',
  Cresselia = 'cresselia',
  Croagunk = 'croagunk',
  Crobat = 'crobat',
  Croconaw = 'croconaw',
  Crucibelle = 'crucibelle',
  Crucibellemega = 'crucibellemega',
  Crustle = 'crustle',
  Cryogonal = 'cryogonal',
  Cubchoo = 'cubchoo',
  Cubone = 'cubone',
  Cufant = 'cufant',
  Cupra = 'cupra',
  Cursola = 'cursola',
  Cutiefly = 'cutiefly',
  Cyclohm = 'cyclohm',
  Cyndaquil = 'cyndaquil',
  Darkrai = 'darkrai',
  Darmanitan = 'darmanitan',
  Darmanitangalar = 'darmanitangalar',
  Darmanitangalarzen = 'darmanitangalarzen',
  Darmanitanzen = 'darmanitanzen',
  Dartrix = 'dartrix',
  Darumaka = 'darumaka',
  Darumakagalar = 'darumakagalar',
  Decidueye = 'decidueye',
  Dedenne = 'dedenne',
  Deerling = 'deerling',
  Deino = 'deino',
  Delcatty = 'delcatty',
  Delibird = 'delibird',
  Delphox = 'delphox',
  Deoxys = 'deoxys',
  Deoxysattack = 'deoxysattack',
  Deoxysdefense = 'deoxysdefense',
  Deoxysspeed = 'deoxysspeed',
  Dewgong = 'dewgong',
  Dewott = 'dewott',
  Dewpider = 'dewpider',
  Dhelmise = 'dhelmise',
  Dialga = 'dialga',
  Diancie = 'diancie',
  Dianciemega = 'dianciemega',
  Diggersby = 'diggersby',
  Diglett = 'diglett',
  Diglettalola = 'diglettalola',
  Ditto = 'ditto',
  Dodrio = 'dodrio',
  Doduo = 'doduo',
  Donphan = 'donphan',
  Dottler = 'dottler',
  Doublade = 'doublade',
  Dracovish = 'dracovish',
  Dracozolt = 'dracozolt',
  Dragalge = 'dragalge',
  Dragapult = 'dragapult',
  Dragonair = 'dragonair',
  Dragonite = 'dragonite',
  Drakloak = 'drakloak',
  Drampa = 'drampa',
  Drapion = 'drapion',
  Dratini = 'dratini',
  Drednaw = 'drednaw',
  Drednawgmax = 'drednawgmax',
  Dreepy = 'dreepy',
  Drifblim = 'drifblim',
  Drifloon = 'drifloon',
  Drilbur = 'drilbur',
  Drizzile = 'drizzile',
  Drowzee = 'drowzee',
  Druddigon = 'druddigon',
  Dubwool = 'dubwool',
  Ducklett = 'ducklett',
  Dugtrio = 'dugtrio',
  Dugtrioalola = 'dugtrioalola',
  Dunsparce = 'dunsparce',
  Duosion = 'duosion',
  Duraludon = 'duraludon',
  Duraludongmax = 'duraludongmax',
  Durant = 'durant',
  Dusclops = 'dusclops',
  Dusknoir = 'dusknoir',
  Duskull = 'duskull',
  Dustox = 'dustox',
  Dwebble = 'dwebble',
  Eelektrik = 'eelektrik',
  Eelektross = 'eelektross',
  Eevee = 'eevee',
  Eeveegmax = 'eeveegmax',
  Eeveestarter = 'eeveestarter',
  Eiscue = 'eiscue',
  Eiscuenoice = 'eiscuenoice',
  Ekans = 'ekans',
  Eldegoss = 'eldegoss',
  Electabuzz = 'electabuzz',
  Electivire = 'electivire',
  Electrelk = 'electrelk',
  Electrike = 'electrike',
  Electrode = 'electrode',
  Elekid = 'elekid',
  Elgyem = 'elgyem',
  Embirch = 'embirch',
  Emboar = 'emboar',
  Emolga = 'emolga',
  Empoleon = 'empoleon',
  Entei = 'entei',
  Equilibra = 'equilibra',
  Escavalier = 'escavalier',
  Espeon = 'espeon',
  Espurr = 'espurr',
  Eternatus = 'eternatus',
  Eternatuseternamax = 'eternatuseternamax',
  Excadrill = 'excadrill',
  Exeggcute = 'exeggcute',
  Exeggutor = 'exeggutor',
  Exeggutoralola = 'exeggutoralola',
  Exploud = 'exploud',
  Falinks = 'falinks',
  Farfetchd = 'farfetchd',
  Farfetchdgalar = 'farfetchdgalar',
  Fawnifer = 'fawnifer',
  Fearow = 'fearow',
  Feebas = 'feebas',
  Fennekin = 'fennekin',
  Feraligatr = 'feraligatr',
  Ferroseed = 'ferroseed',
  Ferrothorn = 'ferrothorn',
  Fidgit = 'fidgit',
  Finneon = 'finneon',
  Flaaffy = 'flaaffy',
  Flabebe = 'flabebe',
  Flapple = 'flapple',
  Flapplegmax = 'flapplegmax',
  Flarelm = 'flarelm',
  Flareon = 'flareon',
  Fletchinder = 'fletchinder',
  Fletchling = 'fletchling',
  Floatoy = 'floatoy',
  Floatzel = 'floatzel',
  Floette = 'floette',
  Floetteeternal = 'floetteeternal',
  Florges = 'florges',
  Flygon = 'flygon',
  Fomantis = 'fomantis',
  Foongus = 'foongus',
  Forretress = 'forretress',
  Fraxure = 'fraxure',
  Frillish = 'frillish',
  Frillishfemale = 'frillishfemale',
  Froakie = 'froakie',
  Frogadier = 'frogadier',
  Froslass = 'froslass',
  Frosmoth = 'frosmoth',
  Furfrou = 'furfrou',
  Furret = 'furret',
  Gabite = 'gabite',
  Gallade = 'gallade',
  Gallademega = 'gallademega',
  Galvantula = 'galvantula',
  Garbodor = 'garbodor',
  Garbodorgmax = 'garbodorgmax',
  Garchomp = 'garchomp',
  Garchompmega = 'garchompmega',
  Gardevoir = 'gardevoir',
  Gardevoirmega = 'gardevoirmega',
  Gastly = 'gastly',
  Gastrodon = 'gastrodon',
  Genesect = 'genesect',
  Genesectburn = 'genesectburn',
  Genesectchill = 'genesectchill',
  Genesectdouse = 'genesectdouse',
  Genesectshock = 'genesectshock',
  Gengar = 'gengar',
  Gengargmax = 'gengargmax',
  Gengarmega = 'gengarmega',
  Geodude = 'geodude',
  Geodudealola = 'geodudealola',
  Gible = 'gible',
  Gigalith = 'gigalith',
  Girafarig = 'girafarig',
  Giratina = 'giratina',
  Giratinaorigin = 'giratinaorigin',
  Glaceon = 'glaceon',
  Glalie = 'glalie',
  Glaliemega = 'glaliemega',
  Glameow = 'glameow',
  Glastrier = 'glastrier',
  Gligar = 'gligar',
  Gliscor = 'gliscor',
  Gloom = 'gloom',
  Gogoat = 'gogoat',
  Golbat = 'golbat',
  Goldeen = 'goldeen',
  Golduck = 'golduck',
  Golem = 'golem',
  Golemalola = 'golemalola',
  Golett = 'golett',
  Golisopod = 'golisopod',
  Golurk = 'golurk',
  Goodra = 'goodra',
  Goomy = 'goomy',
  Gorebyss = 'gorebyss',
  Gossifleur = 'gossifleur',
  Gothita = 'gothita',
  Gothitelle = 'gothitelle',
  Gothorita = 'gothorita',
  Gourgeist = 'gourgeist',
  Gourgeistlarge = 'gourgeistlarge',
  Gourgeistsmall = 'gourgeistsmall',
  Gourgeistsuper = 'gourgeistsuper',
  Granbull = 'granbull',
  Grapploct = 'grapploct',
  Graveler = 'graveler',
  Graveleralola = 'graveleralola',
  Greedent = 'greedent',
  Greninja = 'greninja',
  Greninjaash = 'greninjaash',
  Grimer = 'grimer',
  Grimeralola = 'grimeralola',
  Grimmsnarl = 'grimmsnarl',
  Grimmsnarlgmax = 'grimmsnarlgmax',
  Grookey = 'grookey',
  Grotle = 'grotle',
  Groudon = 'groudon',
  Groudonprimal = 'groudonprimal',
  Grovyle = 'grovyle',
  Growlithe = 'growlithe',
  Grubbin = 'grubbin',
  Grumpig = 'grumpig',
  Gulpin = 'gulpin',
  Gumshoos = 'gumshoos',
  Gumshoostotem = 'gumshoostotem',
  Gurdurr = 'gurdurr',
  Guzzlord = 'guzzlord',
  Gyarados = 'gyarados',
  Gyaradosmega = 'gyaradosmega',
  Hakamoo = 'hakamoo',
  Happiny = 'happiny',
  Hariyama = 'hariyama',
  Hatenna = 'hatenna',
  Hatterene = 'hatterene',
  Hatterenegmax = 'hatterenegmax',
  Hattrem = 'hattrem',
  Haunter = 'haunter',
  Hawlucha = 'hawlucha',
  Haxorus = 'haxorus',
  Heatmor = 'heatmor',
  Heatran = 'heatran',
  Heliolisk = 'heliolisk',
  Helioptile = 'helioptile',
  Heracross = 'heracross',
  Heracrossmega = 'heracrossmega',
  Herdier = 'herdier',
  Hippopotas = 'hippopotas',
  Hippowdon = 'hippowdon',
  Hitmonchan = 'hitmonchan',
  Hitmonlee = 'hitmonlee',
  Hitmontop = 'hitmontop',
  Honchkrow = 'honchkrow',
  Honedge = 'honedge',
  Hooh = 'hooh',
  Hoopa = 'hoopa',
  Hoopaunbound = 'hoopaunbound',
  Hoothoot = 'hoothoot',
  Hoppip = 'hoppip',
  Horsea = 'horsea',
  Houndoom = 'houndoom',
  Houndoommega = 'houndoommega',
  Houndour = 'houndour',
  Huntail = 'huntail',
  Hydreigon = 'hydreigon',
  Hypno = 'hypno',
  Igglybuff = 'igglybuff',
  Illumise = 'illumise',
  Impidimp = 'impidimp',
  Incineroar = 'incineroar',
  Indeedee = 'indeedee',
  Indeedeef = 'indeedeef',
  Infernape = 'infernape',
  Inkay = 'inkay',
  Inteleon = 'inteleon',
  Inteleongmax = 'inteleongmax',
  Ivysaur = 'ivysaur',
  Jangmoo = 'jangmoo',
  Jellicent = 'jellicent',
  Jellicentfemale = 'jellicentfemale',
  Jigglypuff = 'jigglypuff',
  Jirachi = 'jirachi',
  Jolteon = 'jolteon',
  Joltik = 'joltik',
  Jumbao = 'jumbao',
  Jumpluff = 'jumpluff',
  Justyke = 'justyke',
  Jynx = 'jynx',
  Kabuto = 'kabuto',
  Kabutops = 'kabutops',
  Kadabra = 'kadabra',
  Kakuna = 'kakuna',
  Kangaskhan = 'kangaskhan',
  Kangaskhanmega = 'kangaskhanmega',
  Karrablast = 'karrablast',
  Kartana = 'kartana',
  Kecleon = 'kecleon',
  Keldeo = 'keldeo',
  Keldeoresolute = 'keldeoresolute',
  Kerfluffle = 'kerfluffle',
  Kingdra = 'kingdra',
  Kingler = 'kingler',
  Kinglergmax = 'kinglergmax',
  Kirlia = 'kirlia',
  Kitsunoh = 'kitsunoh',
  Klang = 'klang',
  Klefki = 'klefki',
  Klink = 'klink',
  Klinklang = 'klinklang',
  Koffing = 'koffing',
  Komala = 'komala',
  Kommoo = 'kommoo',
  Kommoototem = 'kommoototem',
  Krabby = 'krabby',
  Kricketot = 'kricketot',
  Kricketune = 'kricketune',
  Krilowatt = 'krilowatt',
  Krokorok = 'krokorok',
  Krookodile = 'krookodile',
  Kubfu = 'kubfu',
  Kyogre = 'kyogre',
  Kyogreprimal = 'kyogreprimal',
  Kyurem = 'kyurem',
  Kyuremblack = 'kyuremblack',
  Kyuremwhite = 'kyuremwhite',
  Lairon = 'lairon',
  Lampent = 'lampent',
  Landorus = 'landorus',
  Landorustherian = 'landorustherian',
  Lanturn = 'lanturn',
  Lapras = 'lapras',
  Laprasgmax = 'laprasgmax',
  Larvesta = 'larvesta',
  Larvitar = 'larvitar',
  Latias = 'latias',
  Latiasmega = 'latiasmega',
  Latios = 'latios',
  Latiosmega = 'latiosmega',
  Leafeon = 'leafeon',
  Leavanny = 'leavanny',
  Ledian = 'ledian',
  Ledyba = 'ledyba',
  Lickilicky = 'lickilicky',
  Lickitung = 'lickitung',
  Liepard = 'liepard',
  Lileep = 'lileep',
  Lilligant = 'lilligant',
  Lillipup = 'lillipup',
  Linoone = 'linoone',
  Linoonegalar = 'linoonegalar',
  Litleo = 'litleo',
  Litten = 'litten',
  Litwick = 'litwick',
  Lombre = 'lombre',
  Lopunny = 'lopunny',
  Lopunnymega = 'lopunnymega',
  Lotad = 'lotad',
  Loudred = 'loudred',
  Lucario = 'lucario',
  Lucariomega = 'lucariomega',
  Ludicolo = 'ludicolo',
  Lugia = 'lugia',
  Lumineon = 'lumineon',
  Lunala = 'lunala',
  Lunatone = 'lunatone',
  Lurantis = 'lurantis',
  Lurantistotem = 'lurantistotem',
  Luvdisc = 'luvdisc',
  Luxio = 'luxio',
  Luxray = 'luxray',
  Lycanroc = 'lycanroc',
  Lycanrocdusk = 'lycanrocdusk',
  Lycanrocmidnight = 'lycanrocmidnight',
  Machamp = 'machamp',
  Machampgmax = 'machampgmax',
  Machoke = 'machoke',
  Machop = 'machop',
  Magby = 'magby',
  Magcargo = 'magcargo',
  Magearna = 'magearna',
  Magearnaoriginal = 'magearnaoriginal',
  Magikarp = 'magikarp',
  Magmar = 'magmar',
  Magmortar = 'magmortar',
  Magnemite = 'magnemite',
  Magneton = 'magneton',
  Magnezone = 'magnezone',
  Makuhita = 'makuhita',
  Malaconda = 'malaconda',
  Malamar = 'malamar',
  Mamoswine = 'mamoswine',
  Manaphy = 'manaphy',
  Mandibuzz = 'mandibuzz',
  Manectric = 'manectric',
  Manectricmega = 'manectricmega',
  Mankey = 'mankey',
  Mantine = 'mantine',
  Mantyke = 'mantyke',
  Maractus = 'maractus',
  Mareanie = 'mareanie',
  Mareep = 'mareep',
  Marill = 'marill',
  Marowak = 'marowak',
  Marowakalola = 'marowakalola',
  Marowakalolatotem = 'marowakalolatotem',
  Marshadow = 'marshadow',
  Marshtomp = 'marshtomp',
  Masquerain = 'masquerain',
  Mawile = 'mawile',
  Mawilemega = 'mawilemega',
  Medicham = 'medicham',
  Medichammega = 'medichammega',
  Meditite = 'meditite',
  Meganium = 'meganium',
  Melmetal = 'melmetal',
  Melmetalgmax = 'melmetalgmax',
  Meloetta = 'meloetta',
  Meloettapirouette = 'meloettapirouette',
  Meltan = 'meltan',
  Meowstic = 'meowstic',
  Meowsticf = 'meowsticf',
  Meowth = 'meowth',
  Meowthalola = 'meowthalola',
  Meowthgalar = 'meowthgalar',
  Meowthgmax = 'meowthgmax',
  Mesprit = 'mesprit',
  Metagross = 'metagross',
  Metagrossmega = 'metagrossmega',
  Metang = 'metang',
  Metapod = 'metapod',
  Mew = 'mew',
  Mewtwo = 'mewtwo',
  Mewtwomegax = 'mewtwomegax',
  Mewtwomegay = 'mewtwomegay',
  Miasmaw = 'miasmaw',
  Miasmite = 'miasmite',
  Mienfoo = 'mienfoo',
  Mienshao = 'mienshao',
  Mightyena = 'mightyena',
  Milcery = 'milcery',
  Milotic = 'milotic',
  Miltank = 'miltank',
  Mimejr = 'mimejr',
  Mimikyu = 'mimikyu',
  Mimikyubusted = 'mimikyubusted',
  Mimikyubustedtotem = 'mimikyubustedtotem',
  Mimikyutotem = 'mimikyutotem',
  Minccino = 'minccino',
  Minior = 'minior',
  Miniormeteor = 'miniormeteor',
  Minun = 'minun',
  Misdreavus = 'misdreavus',
  Mismagius = 'mismagius',
  Missingno = 'missingno',
  Mollux = 'mollux',
  Moltres = 'moltres',
  Moltresgalar = 'moltresgalar',
  Monferno = 'monferno',
  Morelull = 'morelull',
  Morgrem = 'morgrem',
  Morpeko = 'morpeko',
  Morpekohangry = 'morpekohangry',
  Mothim = 'mothim',
  Mrmime = 'mrmime',
  Mrmimegalar = 'mrmimegalar',
  Mrrime = 'mrrime',
  Mudbray = 'mudbray',
  Mudkip = 'mudkip',
  Mudsdale = 'mudsdale',
  Muk = 'muk',
  Mukalola = 'mukalola',
  Mumbao = 'mumbao',
  Munchlax = 'munchlax',
  Munna = 'munna',
  Murkrow = 'murkrow',
  Musharna = 'musharna',
  Naganadel = 'naganadel',
  Natu = 'natu',
  Naviathan = 'naviathan',
  Necrozma = 'necrozma',
  Necrozmadawnwings = 'necrozmadawnwings',
  Necrozmaduskmane = 'necrozmaduskmane',
  Necrozmaultra = 'necrozmaultra',
  Necturine = 'necturine',
  Necturna = 'necturna',
  Nickit = 'nickit',
  Nidoking = 'nidoking',
  Nidoqueen = 'nidoqueen',
  Nidoranf = 'nidoranf',
  Nidoranm = 'nidoranm',
  Nidorina = 'nidorina',
  Nidorino = 'nidorino',
  Nihilego = 'nihilego',
  Nincada = 'nincada',
  Ninetales = 'ninetales',
  Ninetalesalola = 'ninetalesalola',
  Ninjask = 'ninjask',
  Noctowl = 'noctowl',
  Noibat = 'noibat',
  Noivern = 'noivern',
  Nosepass = 'nosepass',
  Numel = 'numel',
  Nuzleaf = 'nuzleaf',
  Obstagoon = 'obstagoon',
  Octillery = 'octillery',
  Oddish = 'oddish',
  Omanyte = 'omanyte',
  Omastar = 'omastar',
  Onix = 'onix',
  Oranguru = 'oranguru',
  Orbeetle = 'orbeetle',
  Orbeetlegmax = 'orbeetlegmax',
  Oricorio = 'oricorio',
  Oricoriopau = 'oricoriopau',
  Oricoriopompom = 'oricoriopompom',
  Oricoriosensu = 'oricoriosensu',
  Oshawott = 'oshawott',
  Pachirisu = 'pachirisu',
  Pajantom = 'pajantom',
  Palkia = 'palkia',
  Palossand = 'palossand',
  Palpitoad = 'palpitoad',
  Pancham = 'pancham',
  Pangoro = 'pangoro',
  Panpour = 'panpour',
  Pansage = 'pansage',
  Pansear = 'pansear',
  Paras = 'paras',
  Parasect = 'parasect',
  Passimian = 'passimian',
  Patrat = 'patrat',
  Pawniard = 'pawniard',
  Pelipper = 'pelipper',
  Perrserker = 'perrserker',
  Persian = 'persian',
  Persianalola = 'persianalola',
  Petilil = 'petilil',
  Phanpy = 'phanpy',
  Phantump = 'phantump',
  Pheromosa = 'pheromosa',
  Phione = 'phione',
  Pichu = 'pichu',
  Pichuspikyeared = 'pichuspikyeared',
  Pidgeot = 'pidgeot',
  Pidgeotmega = 'pidgeotmega',
  Pidgeotto = 'pidgeotto',
  Pidgey = 'pidgey',
  Pidove = 'pidove',
  Pignite = 'pignite',
  Pikachu = 'pikachu',
  Pikachualola = 'pikachualola',
  Pikachubelle = 'pikachubelle',
  Pikachucosplay = 'pikachucosplay',
  Pikachugmax = 'pikachugmax',
  Pikachuhoenn = 'pikachuhoenn',
  Pikachukalos = 'pikachukalos',
  Pikachulibre = 'pikachulibre',
  Pikachuoriginal = 'pikachuoriginal',
  Pikachupartner = 'pikachupartner',
  Pikachuphd = 'pikachuphd',
  Pikachupopstar = 'pikachupopstar',
  Pikachurockstar = 'pikachurockstar',
  Pikachusinnoh = 'pikachusinnoh',
  Pikachustarter = 'pikachustarter',
  Pikachuunova = 'pikachuunova',
  Pikachuworld = 'pikachuworld',
  Pikipek = 'pikipek',
  Piloswine = 'piloswine',
  Pincurchin = 'pincurchin',
  Pineco = 'pineco',
  Pinsir = 'pinsir',
  Pinsirmega = 'pinsirmega',
  Piplup = 'piplup',
  Plasmanta = 'plasmanta',
  Pluffle = 'pluffle',
  Plusle = 'plusle',
  Poipole = 'poipole',
  Pokestarblackbelt = 'pokestarblackbelt',
  Pokestarblackdoor = 'pokestarblackdoor',
  Pokestarbrycenman = 'pokestarbrycenman',
  Pokestarf00 = 'pokestarf00',
  Pokestarf002 = 'pokestarf002',
  Pokestargiant = 'pokestargiant',
  Pokestarhumanoid = 'pokestarhumanoid',
  Pokestarmonster = 'pokestarmonster',
  Pokestarmt = 'pokestarmt',
  Pokestarmt2 = 'pokestarmt2',
  Pokestarsmeargle = 'pokestarsmeargle',
  Pokestarspirit = 'pokestarspirit',
  Pokestartransport = 'pokestartransport',
  Pokestarufo = 'pokestarufo',
  Pokestarufo2 = 'pokestarufo2',
  Pokestarufopropu2 = 'pokestarufopropu2',
  Pokestarwhitedoor = 'pokestarwhitedoor',
  Politoed = 'politoed',
  Poliwag = 'poliwag',
  Poliwhirl = 'poliwhirl',
  Poliwrath = 'poliwrath',
  Polteageist = 'polteageist',
  Polteageistantique = 'polteageistantique',
  Ponyta = 'ponyta',
  Ponytagalar = 'ponytagalar',
  Poochyena = 'poochyena',
  Popplio = 'popplio',
  Porygon = 'porygon',
  Porygon2 = 'porygon2',
  Porygonz = 'porygonz',
  Primarina = 'primarina',
  Primeape = 'primeape',
  Prinplup = 'prinplup',
  Privatyke = 'privatyke',
  Probopass = 'probopass',
  Psyduck = 'psyduck',
  Pumpkaboo = 'pumpkaboo',
  Pumpkaboolarge = 'pumpkaboolarge',
  Pumpkaboosmall = 'pumpkaboosmall',
  Pumpkaboosuper = 'pumpkaboosuper',
  Pupitar = 'pupitar',
  Purrloin = 'purrloin',
  Purugly = 'purugly',
  Pyroak = 'pyroak',
  Pyroar = 'pyroar',
  Pyukumuku = 'pyukumuku',
  Quagsire = 'quagsire',
  Quilava = 'quilava',
  Quilladin = 'quilladin',
  Qwilfish = 'qwilfish',
  Raboot = 'raboot',
  Raichu = 'raichu',
  Raichualola = 'raichualola',
  Raikou = 'raikou',
  Ralts = 'ralts',
  Rampardos = 'rampardos',
  Rapidash = 'rapidash',
  Rapidashgalar = 'rapidashgalar',
  Raticate = 'raticate',
  Raticatealola = 'raticatealola',
  Raticatealolatotem = 'raticatealolatotem',
  Rattata = 'rattata',
  Rattataalola = 'rattataalola',
  Rayquaza = 'rayquaza',
  Rayquazamega = 'rayquazamega',
  Rebble = 'rebble',
  Regice = 'regice',
  Regidrago = 'regidrago',
  Regieleki = 'regieleki',
  Regigigas = 'regigigas',
  Regirock = 'regirock',
  Registeel = 'registeel',
  Relicanth = 'relicanth',
  Remoraid = 'remoraid',
  Reshiram = 'reshiram',
  Reuniclus = 'reuniclus',
  Revenankh = 'revenankh',
  Rhydon = 'rhydon',
  Rhyhorn = 'rhyhorn',
  Rhyperior = 'rhyperior',
  Ribombee = 'ribombee',
  Ribombeetotem = 'ribombeetotem',
  Rillaboom = 'rillaboom',
  Rillaboomgmax = 'rillaboomgmax',
  Riolu = 'riolu',
  Rockruff = 'rockruff',
  Roggenrola = 'roggenrola',
  Rolycoly = 'rolycoly',
  Rookidee = 'rookidee',
  Roselia = 'roselia',
  Roserade = 'roserade',
  Rotom = 'rotom',
  Rotomfan = 'rotomfan',
  Rotomfrost = 'rotomfrost',
  Rotomheat = 'rotomheat',
  Rotommow = 'rotommow',
  Rotomwash = 'rotomwash',
  Rowlet = 'rowlet',
  Rufflet = 'rufflet',
  Runerigus = 'runerigus',
  Sableye = 'sableye',
  Sableyemega = 'sableyemega',
  Salamence = 'salamence',
  Salamencemega = 'salamencemega',
  Salandit = 'salandit',
  Salazzle = 'salazzle',
  Salazzletotem = 'salazzletotem',
  Samurott = 'samurott',
  Sandaconda = 'sandaconda',
  Sandacondagmax = 'sandacondagmax',
  Sandile = 'sandile',
  Sandshrew = 'sandshrew',
  Sandshrewalola = 'sandshrewalola',
  Sandslash = 'sandslash',
  Sandslashalola = 'sandslashalola',
  Sandygast = 'sandygast',
  Sawk = 'sawk',
  Sawsbuck = 'sawsbuck',
  Scatterbug = 'scatterbug',
  Sceptile = 'sceptile',
  Sceptilemega = 'sceptilemega',
  Scizor = 'scizor',
  Scizormega = 'scizormega',
  Scolipede = 'scolipede',
  Scorbunny = 'scorbunny',
  Scrafty = 'scrafty',
  Scraggy = 'scraggy',
  Scratchet = 'scratchet',
  Scyther = 'scyther',
  Seadra = 'seadra',
  Seaking = 'seaking',
  Sealeo = 'sealeo',
  Seedot = 'seedot',
  Seel = 'seel',
  Seismitoad = 'seismitoad',
  Sentret = 'sentret',
  Serperior = 'serperior',
  Servine = 'servine',
  Seviper = 'seviper',
  Sewaddle = 'sewaddle',
  Sharpedo = 'sharpedo',
  Sharpedomega = 'sharpedomega',
  Shaymin = 'shaymin',
  Shayminsky = 'shayminsky',
  Shedinja = 'shedinja',
  Shelgon = 'shelgon',
  Shellder = 'shellder',
  Shellos = 'shellos',
  Shelmet = 'shelmet',
  Shieldon = 'shieldon',
  Shiftry = 'shiftry',
  Shiinotic = 'shiinotic',
  Shinx = 'shinx',
  Shroomish = 'shroomish',
  Shuckle = 'shuckle',
  Shuppet = 'shuppet',
  Sigilyph = 'sigilyph',
  Silcoon = 'silcoon',
  Silicobra = 'silicobra',
  Silvally = 'silvally',
  Silvallybug = 'silvallybug',
  Silvallydark = 'silvallydark',
  Silvallydragon = 'silvallydragon',
  Silvallyelectric = 'silvallyelectric',
  Silvallyfairy = 'silvallyfairy',
  Silvallyfighting = 'silvallyfighting',
  Silvallyfire = 'silvallyfire',
  Silvallyflying = 'silvallyflying',
  Silvallyghost = 'silvallyghost',
  Silvallygrass = 'silvallygrass',
  Silvallyground = 'silvallyground',
  Silvallyice = 'silvallyice',
  Silvallypoison = 'silvallypoison',
  Silvallypsychic = 'silvallypsychic',
  Silvallyrock = 'silvallyrock',
  Silvallysteel = 'silvallysteel',
  Silvallywater = 'silvallywater',
  Simipour = 'simipour',
  Simisage = 'simisage',
  Simisear = 'simisear',
  Sinistea = 'sinistea',
  Sinisteaantique = 'sinisteaantique',
  Sirfetchd = 'sirfetchd',
  Sizzlipede = 'sizzlipede',
  Skarmory = 'skarmory',
  Skiddo = 'skiddo',
  Skiploom = 'skiploom',
  Skitty = 'skitty',
  Skorupi = 'skorupi',
  Skrelp = 'skrelp',
  Skuntank = 'skuntank',
  Skwovet = 'skwovet',
  Slaking = 'slaking',
  Slakoth = 'slakoth',
  Sliggoo = 'sliggoo',
  Slowbro = 'slowbro',
  Slowbrogalar = 'slowbrogalar',
  Slowbromega = 'slowbromega',
  Slowking = 'slowking',
  Slowkinggalar = 'slowkinggalar',
  Slowpoke = 'slowpoke',
  Slowpokegalar = 'slowpokegalar',
  Slugma = 'slugma',
  Slurpuff = 'slurpuff',
  Smeargle = 'smeargle',
  Smogecko = 'smogecko',
  Smoguana = 'smoguana',
  Smokomodo = 'smokomodo',
  Smoochum = 'smoochum',
  Snaelstrom = 'snaelstrom',
  Sneasel = 'sneasel',
  Snivy = 'snivy',
  Snom = 'snom',
  Snorlax = 'snorlax',
  Snorlaxgmax = 'snorlaxgmax',
  Snorunt = 'snorunt',
  Snover = 'snover',
  Snubbull = 'snubbull',
  Snugglow = 'snugglow',
  Sobble = 'sobble',
  Solgaleo = 'solgaleo',
  Solosis = 'solosis',
  Solotl = 'solotl',
  Solrock = 'solrock',
  Spearow = 'spearow',
  Spectrier = 'spectrier',
  Spewpa = 'spewpa',
  Spheal = 'spheal',
  Spinarak = 'spinarak',
  Spinda = 'spinda',
  Spiritomb = 'spiritomb',
  Spoink = 'spoink',
  Spritzee = 'spritzee',
  Squirtle = 'squirtle',
  Stakataka = 'stakataka',
  Stantler = 'stantler',
  Staraptor = 'staraptor',
  Staravia = 'staravia',
  Starly = 'starly',
  Starmie = 'starmie',
  Staryu = 'staryu',
  Steelix = 'steelix',
  Steelixmega = 'steelixmega',
  Steenee = 'steenee',
  Stonjourner = 'stonjourner',
  Stoutland = 'stoutland',
  Stratagem = 'stratagem',
  Stufful = 'stufful',
  Stunfisk = 'stunfisk',
  Stunfiskgalar = 'stunfiskgalar',
  Stunky = 'stunky',
  Sudowoodo = 'sudowoodo',
  Suicune = 'suicune',
  Sunflora = 'sunflora',
  Sunkern = 'sunkern',
  Surskit = 'surskit',
  Swablu = 'swablu',
  Swadloon = 'swadloon',
  Swalot = 'swalot',
  Swampert = 'swampert',
  Swampertmega = 'swampertmega',
  Swanna = 'swanna',
  Swellow = 'swellow',
  Swinub = 'swinub',
  Swirlix = 'swirlix',
  Swirlpool = 'swirlpool',
  Swoobat = 'swoobat',
  Syclant = 'syclant',
  Syclar = 'syclar',
  Sylveon = 'sylveon',
  Tactite = 'tactite',
  Taillow = 'taillow',
  Talonflame = 'talonflame',
  Tangela = 'tangela',
  Tangrowth = 'tangrowth',
  Tapubulu = 'tapubulu',
  Tapufini = 'tapufini',
  Tapukoko = 'tapukoko',
  Tapulele = 'tapulele',
  Tauros = 'tauros',
  Teddiursa = 'teddiursa',
  Tentacool = 'tentacool',
  Tentacruel = 'tentacruel',
  Tepig = 'tepig',
  Terrakion = 'terrakion',
  Thievul = 'thievul',
  Throh = 'throh',
  Thundurus = 'thundurus',
  Thundurustherian = 'thundurustherian',
  Thwackey = 'thwackey',
  Timburr = 'timburr',
  Tirtouga = 'tirtouga',
  Togedemaru = 'togedemaru',
  Togedemarutotem = 'togedemarutotem',
  Togekiss = 'togekiss',
  Togepi = 'togepi',
  Togetic = 'togetic',
  Tomohawk = 'tomohawk',
  Torchic = 'torchic',
  Torkoal = 'torkoal',
  Tornadus = 'tornadus',
  Tornadustherian = 'tornadustherian',
  Torracat = 'torracat',
  Torterra = 'torterra',
  Totodile = 'totodile',
  Toucannon = 'toucannon',
  Toxapex = 'toxapex',
  Toxel = 'toxel',
  Toxicroak = 'toxicroak',
  Toxtricity = 'toxtricity',
  Toxtricitygmax = 'toxtricitygmax',
  Toxtricitylowkey = 'toxtricitylowkey',
  Toxtricitylowkeygmax = 'toxtricitylowkeygmax',
  Tranquill = 'tranquill',
  Trapinch = 'trapinch',
  Treecko = 'treecko',
  Trevenant = 'trevenant',
  Tropius = 'tropius',
  Trubbish = 'trubbish',
  Trumbeak = 'trumbeak',
  Tsareena = 'tsareena',
  Turtonator = 'turtonator',
  Turtwig = 'turtwig',
  Tympole = 'tympole',
  Tynamo = 'tynamo',
  Typenull = 'typenull',
  Typhlosion = 'typhlosion',
  Tyranitar = 'tyranitar',
  Tyranitarmega = 'tyranitarmega',
  Tyrantrum = 'tyrantrum',
  Tyrogue = 'tyrogue',
  Tyrunt = 'tyrunt',
  Umbreon = 'umbreon',
  Unfezant = 'unfezant',
  Unown = 'unown',
  Ursaring = 'ursaring',
  Urshifu = 'urshifu',
  Urshifugmax = 'urshifugmax',
  Urshifurapidstrike = 'urshifurapidstrike',
  Urshifurapidstrikegmax = 'urshifurapidstrikegmax',
  Uxie = 'uxie',
  Vanillish = 'vanillish',
  Vanillite = 'vanillite',
  Vanilluxe = 'vanilluxe',
  Vaporeon = 'vaporeon',
  Venipede = 'venipede',
  Venomoth = 'venomoth',
  Venonat = 'venonat',
  Venusaur = 'venusaur',
  Venusaurgmax = 'venusaurgmax',
  Venusaurmega = 'venusaurmega',
  Vespiquen = 'vespiquen',
  Vibrava = 'vibrava',
  Victini = 'victini',
  Victreebel = 'victreebel',
  Vigoroth = 'vigoroth',
  Vikavolt = 'vikavolt',
  Vikavolttotem = 'vikavolttotem',
  Vileplume = 'vileplume',
  Virizion = 'virizion',
  Vivillon = 'vivillon',
  Vivillonfancy = 'vivillonfancy',
  Vivillonpokeball = 'vivillonpokeball',
  Volbeat = 'volbeat',
  Volcanion = 'volcanion',
  Volcarona = 'volcarona',
  Volkraken = 'volkraken',
  Volkritter = 'volkritter',
  Voltorb = 'voltorb',
  Voodoll = 'voodoll',
  Voodoom = 'voodoom',
  Vullaby = 'vullaby',
  Vulpix = 'vulpix',
  Vulpixalola = 'vulpixalola',
  Wailmer = 'wailmer',
  Wailord = 'wailord',
  Walrein = 'walrein',
  Wartortle = 'wartortle',
  Watchog = 'watchog',
  Weavile = 'weavile',
  Weedle = 'weedle',
  Weepinbell = 'weepinbell',
  Weezing = 'weezing',
  Weezinggalar = 'weezinggalar',
  Whimsicott = 'whimsicott',
  Whirlipede = 'whirlipede',
  Whiscash = 'whiscash',
  Whismur = 'whismur',
  Wigglytuff = 'wigglytuff',
  Wimpod = 'wimpod',
  Wingull = 'wingull',
  Wishiwashi = 'wishiwashi',
  Wishiwashischool = 'wishiwashischool',
  Wobbuffet = 'wobbuffet',
  Woobat = 'woobat',
  Wooloo = 'wooloo',
  Wooper = 'wooper',
  Wormadam = 'wormadam',
  Wormadamsandy = 'wormadamsandy',
  Wormadamtrash = 'wormadamtrash',
  Wurmple = 'wurmple',
  Wynaut = 'wynaut',
  Xatu = 'xatu',
  Xerneas = 'xerneas',
  Xerneasneutral = 'xerneasneutral',
  Xurkitree = 'xurkitree',
  Yamask = 'yamask',
  Yamaskgalar = 'yamaskgalar',
  Yamper = 'yamper',
  Yanma = 'yanma',
  Yanmega = 'yanmega',
  Yungoos = 'yungoos',
  Yveltal = 'yveltal',
  Zacian = 'zacian',
  Zaciancrowned = 'zaciancrowned',
  Zamazenta = 'zamazenta',
  Zamazentacrowned = 'zamazentacrowned',
  Zangoose = 'zangoose',
  Zapdos = 'zapdos',
  Zapdosgalar = 'zapdosgalar',
  Zarude = 'zarude',
  Zarudedada = 'zarudedada',
  Zebstrika = 'zebstrika',
  Zekrom = 'zekrom',
  Zeraora = 'zeraora',
  Zigzagoon = 'zigzagoon',
  Zigzagoongalar = 'zigzagoongalar',
  Zoroark = 'zoroark',
  Zorua = 'zorua',
  Zubat = 'zubat',
  Zweilous = 'zweilous',
  Zygarde = 'zygarde',
  Zygarde10 = 'zygarde10',
  Zygardecomplete = 'zygardecomplete'
}
export declare type Query = {
  readonly __typename?: 'Query';
  /** Gets the details on a Pokémon ability, using the ability name */
  readonly getAbility: Ability;
  /**
   * Gets details on a Pokémon ability, using a fuzzy search on name
   * This can be used to find multiple results based on the query
   * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
   */
  readonly getFuzzyAbility: ReadonlyArray<Ability>;
  /**
   * Gets details on a Pokémon item, using a fuzzy search on name
   * This can be used to find multiple results based on the query
   * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
   */
  readonly getFuzzyItem: ReadonlyArray<Item>;
  /** Gets the learnset for a given Pokémon and move.A fuzzy search is performed to find a matching Pokémon and moveMultiple moves are possible by putting them in an array: [move1, move2].You can also apply a generation filter (only results for the given generation will be returned) with the generation argument */
  readonly getFuzzyLearnset: Learnset;
  /**
   * Gets details on a Pokémon move, using a fuzzy search on name
   * This can be used to find multiple results based on the query
   * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
   */
  readonly getFuzzyMove: ReadonlyArray<Move>;
  /**
   * Gets details on one or more Pokémon based on species name
   * You can provide "take" to limit the amount of Pokémon to return (default: 1), set the offset of where to start with "offset", and reverse the entire array with "reverse".
   * You can provide "takeFlavorTexts" to limit the amount of flavour texts to return (default: 1), set the offset of where to start with "offsetFlavorTexts", and reverse the entire array with "reverseFlavorTexts".
   * Reversal is applied before pagination!
   */
  readonly getFuzzyPokemon: ReadonlyArray<Pokemon>;
  /** Gets the details on a Pokémon item, using the item name */
  readonly getItem: Item;
  /** Gets the learnsets for a given Pokémon and move.Multiple moves are possible by putting them in an array: [move1, move2].You can also apply a generation filter (only results for the given generation will be returned) with the generation argument */
  readonly getLearnset: Learnset;
  /** Gets the details on a Pokémon move, using the move name */
  readonly getMove: Move;
  /**
   * Gets details on a single Pokémon based on species name
   * You can provide "takeFlavorTexts" to limit the amount of flavour texts to return, set the offset of where to start with "offsetFlavorTexts", and reverse the entire array with "reverseFlavorTexts".
   * Reversal is applied before pagination!
   */
  readonly getPokemon: Pokemon;
  /**
   * Gets details on a single Pokémon based on National Pokédex number
   * You can provide "takeFlavorTexts" to limit the amount of flavour texts to return, set the offset of where to start with "offsetFlavorTexts", and reverse the entire array with "reverseFlavorTexts".
   * Reversal is applied before pagination!
   */
  readonly getPokemonByDexNumber: Pokemon;
  /** Gets the type matchup data for the given type or types */
  readonly getTypeMatchup: TypeMatchup;
};
export declare type QueryGetAbilityArgs = {
  ability: AbilitiesEnum;
};
export declare type QueryGetFuzzyAbilityArgs = {
  ability: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
};
export declare type QueryGetFuzzyItemArgs = {
  item: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
};
export declare type QueryGetFuzzyLearnsetArgs = {
  generation?: Maybe<Scalars['Int']>;
  moves: ReadonlyArray<Scalars['String']>;
  pokemon: Scalars['String'];
};
export declare type QueryGetFuzzyMoveArgs = {
  move: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  reverse?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
};
export declare type QueryGetFuzzyPokemonArgs = {
  offset?: Maybe<Scalars['Int']>;
  offsetFlavorTexts?: Maybe<Scalars['Int']>;
  pokemon: Scalars['String'];
  reverse?: Maybe<Scalars['Boolean']>;
  reverseFlavorTexts?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
  takeFlavorTexts?: Maybe<Scalars['Int']>;
};
export declare type QueryGetItemArgs = {
  item: ItemsEnum;
};
export declare type QueryGetLearnsetArgs = {
  generation?: Maybe<Scalars['Int']>;
  moves: ReadonlyArray<MovesEnum>;
  pokemon: PokemonEnum;
};
export declare type QueryGetMoveArgs = {
  move: MovesEnum;
};
export declare type QueryGetPokemonArgs = {
  offsetFlavorTexts?: Maybe<Scalars['Int']>;
  pokemon: PokemonEnum;
  reverseFlavorTexts?: Maybe<Scalars['Boolean']>;
  takeFlavorTexts?: Maybe<Scalars['Int']>;
};
export declare type QueryGetPokemonByDexNumberArgs = {
  number: Scalars['Int'];
  offsetFlavorTexts?: Maybe<Scalars['Int']>;
  reverseFlavorTexts?: Maybe<Scalars['Boolean']>;
  takeFlavorTexts?: Maybe<Scalars['Int']>;
};
export declare type QueryGetTypeMatchupArgs = {
  types: ReadonlyArray<TypesEnum>;
};
/** A Pokémon's stats */
export declare type Stats = {
  readonly __typename?: 'Stats';
  /** The base attack stat of a Pokémon */
  readonly attack: Scalars['Int'];
  /** The base defense stat of a Pokémon */
  readonly defense: Scalars['Int'];
  /** The base HP stat of a pokémon */
  readonly hp: Scalars['Int'];
  /** The base special attack stat of a Pokémon */
  readonly specialattack: Scalars['Int'];
  /** The base special defense stat of a Pokémon */
  readonly specialdefense: Scalars['Int'];
  /** The base speed stat of a Pokémon */
  readonly speed: Scalars['Int'];
};
/** A type matchup entry */
export declare type Type = {
  readonly __typename?: 'Type';
  /** The types with 4x effectiveness */
  readonly doubleEffectiveTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 0.25x effectiveness */
  readonly doubleResistedTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 2x effectiveness */
  readonly effectiveTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 0x effectiveness */
  readonly effectlessTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 1x effectiveness */
  readonly normalTypes: ReadonlyArray<Scalars['String']>;
  /** The types with 0.5x effectiveness */
  readonly resistedTypes: ReadonlyArray<Scalars['String']>;
};
/** The type matchups for any one or two given types */
export declare type TypeMatchup = {
  readonly __typename?: 'TypeMatchup';
  /** The type matchups when attacking */
  readonly attacking: Type;
  /** The type matchups when defending */
  readonly defending: Type;
};
/** The types in Pokémon */
export declare const enum TypesEnum {
  Bug = 'bug',
  Dark = 'dark',
  Dragon = 'dragon',
  Electric = 'electric',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Flying = 'flying',
  Ghost = 'ghost',
  Grass = 'grass',
  Ground = 'ground',
  Ice = 'ice',
  Normal = 'normal',
  Poison = 'poison',
  Psychic = 'psychic',
  Rock = 'rock',
  Steel = 'steel',
  Water = 'water'
}
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<
    {
      [key in TKey]: TResult;
    },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {
      [key in TKey]: TResult;
    },
    TContext,
    TArgs
  >;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
  Abilities: ResolverTypeWrapper<Abilities>;
  AbilitiesEnum: AbilitiesEnum;
  Ability: ResolverTypeWrapper<Ability>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CatchRate: ResolverTypeWrapper<CatchRate>;
  EvYields: ResolverTypeWrapper<EvYields>;
  Flavor: ResolverTypeWrapper<Flavor>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Gender: ResolverTypeWrapper<Gender>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  ItemsEnum: ItemsEnum;
  Learnset: ResolverTypeWrapper<Learnset>;
  LearnsetLevelUpMove: ResolverTypeWrapper<LearnsetLevelUpMove>;
  LearnsetMove: ResolverTypeWrapper<LearnsetMove>;
  Move: ResolverTypeWrapper<Move>;
  MovesEnum: MovesEnum;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonEnum: PokemonEnum;
  Query: ResolverTypeWrapper<{}>;
  Stats: ResolverTypeWrapper<Stats>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Type: ResolverTypeWrapper<Type>;
  TypeMatchup: ResolverTypeWrapper<TypeMatchup>;
  TypesEnum: TypesEnum;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
  Abilities: Abilities;
  Ability: Ability;
  Boolean: Scalars['Boolean'];
  CatchRate: CatchRate;
  EvYields: EvYields;
  Flavor: Flavor;
  Float: Scalars['Float'];
  Gender: Gender;
  Int: Scalars['Int'];
  Item: Item;
  Learnset: Learnset;
  LearnsetLevelUpMove: LearnsetLevelUpMove;
  LearnsetMove: LearnsetMove;
  Move: Move;
  Pokemon: Pokemon;
  Query: {};
  Stats: Stats;
  String: Scalars['String'];
  Type: Type;
  TypeMatchup: TypeMatchup;
};
export declare type AbilitiesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Abilities'] = ResolversParentTypes['Abilities']
> = {
  first?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hidden?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  special?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type AbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = {
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFieldAbility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDesc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type CatchRateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CatchRate'] = ResolversParentTypes['CatchRate']
> = {
  base?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percentageWithOrdinaryPokeballAtFullHealth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type EvYieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvYields'] = ResolversParentTypes['EvYields']> = {
  attack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialattack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialdefense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  speed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type FlavorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flavor'] = ResolversParentTypes['Flavor']> = {
  flavor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  game?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type GenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gender'] = ResolversParentTypes['Gender']> = {
  female?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  male?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  desc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generationIntroduced?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isNonstandard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDesc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smogonPage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type LearnsetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Learnset'] = ResolversParentTypes['Learnset']> = {
  backSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dreamworldMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  eggMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  eventMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  levelUpMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetLevelUpMove']>>, ParentType, ContextType>;
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shinyBackSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinySprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tmMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  tutorMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  virtualTransferMoves?: Resolver<Maybe<ReadonlyArray<ResolversTypes['LearnsetMove']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type LearnsetLevelUpMoveResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LearnsetLevelUpMove'] = ResolversParentTypes['LearnsetLevelUpMove']
> = {
  generation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type LearnsetMoveResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LearnsetMove'] = ResolversParentTypes['LearnsetMove']
> = {
  generation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type MoveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Move'] = ResolversParentTypes['Move']> = {
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  basePower?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contestType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFieldMove?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isNonstandard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isZ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMovePower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDesc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zMovePower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  abilities?: Resolver<ResolversTypes['Abilities'], ParentType, ContextType>;
  backSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  baseForme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseSpecies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseStats?: Resolver<ResolversTypes['Stats'], ParentType, ContextType>;
  baseStatsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bulbapediaPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  catchRate?: Resolver<Maybe<ResolversTypes['CatchRate']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cosmeticFormes?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  eggGroups?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  evYields?: Resolver<ResolversTypes['EvYields'], ParentType, ContextType>;
  evolutionLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evolutions?: Resolver<Maybe<ReadonlyArray<ResolversTypes['Pokemon']>>, ParentType, ContextType>;
  flavorTexts?: Resolver<ReadonlyArray<ResolversTypes['Flavor']>, ParentType, ContextType>;
  forme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formeLetter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isEggObtainable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  levellingRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximumHatchTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minimumHatchTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  otherFormes?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
  preevolutions?: Resolver<Maybe<ReadonlyArray<ResolversTypes['Pokemon']>>, ParentType, ContextType>;
  serebiiPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinyBackSprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shinySprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonPage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  smogonTier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sprite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAbility?: Resolver<ResolversTypes['Ability'], ParentType, ContextType, RequireFields<QueryGetAbilityArgs, 'ability'>>;
  getFuzzyAbility?: Resolver<
    ReadonlyArray<ResolversTypes['Ability']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFuzzyAbilityArgs, 'ability' | 'offset' | 'reverse' | 'take'>
  >;
  getFuzzyItem?: Resolver<
    ReadonlyArray<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFuzzyItemArgs, 'item' | 'offset' | 'reverse' | 'take'>
  >;
  getFuzzyLearnset?: Resolver<ResolversTypes['Learnset'], ParentType, ContextType, RequireFields<QueryGetFuzzyLearnsetArgs, 'moves' | 'pokemon'>>;
  getFuzzyMove?: Resolver<
    ReadonlyArray<ResolversTypes['Move']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFuzzyMoveArgs, 'move' | 'offset' | 'reverse' | 'take'>
  >;
  getFuzzyPokemon?: Resolver<
    ReadonlyArray<ResolversTypes['Pokemon']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetFuzzyPokemonArgs,
      'offset' | 'offsetFlavorTexts' | 'pokemon' | 'reverse' | 'reverseFlavorTexts' | 'take' | 'takeFlavorTexts'
    >
  >;
  getItem?: Resolver<ResolversTypes['Item'], ParentType, ContextType, RequireFields<QueryGetItemArgs, 'item'>>;
  getLearnset?: Resolver<ResolversTypes['Learnset'], ParentType, ContextType, RequireFields<QueryGetLearnsetArgs, 'moves' | 'pokemon'>>;
  getMove?: Resolver<ResolversTypes['Move'], ParentType, ContextType, RequireFields<QueryGetMoveArgs, 'move'>>;
  getPokemon?: Resolver<
    ResolversTypes['Pokemon'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonArgs, 'offsetFlavorTexts' | 'pokemon' | 'reverseFlavorTexts' | 'takeFlavorTexts'>
  >;
  getPokemonByDexNumber?: Resolver<
    ResolversTypes['Pokemon'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPokemonByDexNumberArgs, 'number' | 'offsetFlavorTexts' | 'reverseFlavorTexts' | 'takeFlavorTexts'>
  >;
  getTypeMatchup?: Resolver<ResolversTypes['TypeMatchup'], ParentType, ContextType, RequireFields<QueryGetTypeMatchupArgs, 'types'>>;
};
export declare type StatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stats'] = ResolversParentTypes['Stats']> = {
  attack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialattack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialdefense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  speed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']> = {
  doubleEffectiveTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  doubleResistedTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  effectiveTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  effectlessTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  normalTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  resistedTypes?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type TypeMatchupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TypeMatchup'] = ResolversParentTypes['TypeMatchup']
> = {
  attacking?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  defending?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
  Abilities?: AbilitiesResolvers<ContextType>;
  Ability?: AbilityResolvers<ContextType>;
  CatchRate?: CatchRateResolvers<ContextType>;
  EvYields?: EvYieldsResolvers<ContextType>;
  Flavor?: FlavorResolvers<ContextType>;
  Gender?: GenderResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Learnset?: LearnsetResolvers<ContextType>;
  LearnsetLevelUpMove?: LearnsetLevelUpMoveResolvers<ContextType>;
  LearnsetMove?: LearnsetMoveResolvers<ContextType>;
  Move?: MoveResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stats?: StatsResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
  TypeMatchup?: TypeMatchupResolvers<ContextType>;
};
