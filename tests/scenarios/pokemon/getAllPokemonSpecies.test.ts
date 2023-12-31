import { getAllPokemon } from '#test-utils/queries/pokemon';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getAllPokemon', () => {
  test('GIVEN a limit of 5 THEN returns the first 5 Pokémon', async () => {
    const { data } = await executeGraphQL<'getAllPokemon'>({
      query: getAllPokemon,
      variables: { take: 5 }
    });

    expect(data.getAllPokemon).toEqual([
      {
        key: 'pokestarsmeargle',
        species: 'Pokestar Smeargle'
      },
      {
        key: 'pokestarufo',
        species: 'Pokestar UFO'
      },
      {
        key: 'pokestarufo2',
        species: 'Pokestar UFO-2'
      },
      {
        key: 'pokestarbrycenman',
        species: 'Pokestar Brycen-Man'
      },
      {
        key: 'pokestarmt',
        species: 'Pokestar MT'
      }
    ]);
  });

  test('GIVEN a limit of 5 and offset of 5 THEN returns the second 5 Pokémon', async () => {
    const { data } = await executeGraphQL<'getAllPokemon'>({
      query: getAllPokemon,
      variables: { take: 5, offset: 5 }
    });

    expect(data.getAllPokemon).toEqual([
      {
        key: 'pokestarmt2',
        species: 'Pokestar MT2'
      },
      {
        key: 'pokestartransport',
        species: 'Pokestar Transport'
      },
      {
        key: 'pokestargiant',
        species: 'Pokestar Giant'
      },
      {
        key: 'pokestarhumanoid',
        species: 'Pokestar Humanoid'
      },
      {
        key: 'pokestarmonster',
        species: 'Pokestar Monster'
      }
    ]);
  });

  test('GIVEN a limit of 5 and reverse THEN returns the last 5 Pokémon', async () => {
    const { data } = await executeGraphQL<'getAllPokemon'>({
      query: getAllPokemon,
      variables: { take: 5, reverse: true }
    });

    expect(data.getAllPokemon).toEqual([
      {
        key: 'pokestarsmeargle',
        species: 'Pokestar Smeargle'
      },
      {
        key: 'pokestarufo',
        species: 'Pokestar UFO'
      },
      {
        key: 'pokestarufo2',
        species: 'Pokestar UFO-2'
      },
      {
        key: 'pokestarbrycenman',
        species: 'Pokestar Brycen-Man'
      },
      {
        key: 'pokestarmt',
        species: 'Pokestar MT'
      }
    ]);
  });

  test('GIVEN no parameters THEN returns all Pokémon', async () => {
    const { data } = await executeGraphQL<'getAllPokemon'>({
      query: getAllPokemon,
      variables: {}
    });

    expect(data.getAllPokemon).toEqual([
      {
        key: 'pokestarsmeargle',
        species: 'Pokestar Smeargle'
      },
      {
        key: 'pokestarufo',
        species: 'Pokestar UFO'
      },
      {
        key: 'pokestarufo2',
        species: 'Pokestar UFO-2'
      },
      {
        key: 'pokestarbrycenman',
        species: 'Pokestar Brycen-Man'
      },
      {
        key: 'pokestarmt',
        species: 'Pokestar MT'
      },
      {
        key: 'pokestarmt2',
        species: 'Pokestar MT2'
      },
      {
        key: 'pokestartransport',
        species: 'Pokestar Transport'
      },
      {
        key: 'pokestargiant',
        species: 'Pokestar Giant'
      },
      {
        key: 'pokestarhumanoid',
        species: 'Pokestar Humanoid'
      },
      {
        key: 'pokestarmonster',
        species: 'Pokestar Monster'
      },
      {
        key: 'pokestarf00',
        species: 'Pokestar F-00'
      },
      {
        key: 'pokestarf002',
        species: 'Pokestar F-002'
      },
      {
        key: 'pokestarspirit',
        species: 'Pokestar Spirit'
      },
      {
        key: 'pokestarblackdoor',
        species: 'Pokestar Black Door'
      },
      {
        key: 'pokestarwhitedoor',
        species: 'Pokestar White Door'
      },
      {
        key: 'pokestarblackbelt',
        species: 'Pokestar Black Belt'
      },
      {
        key: 'pokestarufopropu2',
        species: 'Pokestar UFO-PropU2'
      },
      { key: 'syclar', species: 'syclar' },
      { key: 'syclant', species: 'syclant' },
      { key: 'revenankh', species: 'revenankh' },
      { key: 'embirch', species: 'embirch' },
      { key: 'flarelm', species: 'flarelm' },
      { key: 'pyroak', species: 'pyroak' },
      { key: 'breezi', species: 'breezi' },
      { key: 'fidgit', species: 'fidgit' },
      { key: 'rebble', species: 'rebble' },
      { key: 'tactite', species: 'tactite' },
      { key: 'stratagem', species: 'stratagem' },
      { key: 'privatyke', species: 'privatyke' },
      { key: 'arghonaut', species: 'arghonaut' },
      { key: 'kitsunoh', species: 'kitsunoh' },
      { key: 'cyclohm', species: 'cyclohm' },
      { key: 'colossoil', species: 'colossoil' },
      { key: 'krilowatt', species: 'krilowatt' },
      { key: 'voodoll', species: 'voodoll' },
      { key: 'voodoom', species: 'voodoom' },
      { key: 'scratchet', species: 'scratchet' },
      { key: 'tomohawk', species: 'tomohawk' },
      { key: 'necturine', species: 'necturine' },
      { key: 'necturna', species: 'necturna' },
      { key: 'mollux', species: 'mollux' },
      { key: 'cupra', species: 'cupra' },
      { key: 'argalis', species: 'argalis' },
      { key: 'aurumoth', species: 'aurumoth' },
      { key: 'brattler', species: 'brattler' },
      { key: 'malaconda', species: 'malaconda' },
      { key: 'cawdet', species: 'cawdet' },
      { key: 'cawmodore', species: 'cawmodore' },
      { key: 'volkritter', species: 'volkritter' },
      { key: 'volkraken', species: 'volkraken' },
      { key: 'snugglow', species: 'snugglow' },
      { key: 'plasmanta', species: 'plasmanta' },
      { key: 'floatoy', species: 'floatoy' },
      { key: 'caimanoe', species: 'caimanoe' },
      { key: 'naviathan', species: 'naviathan' },
      { key: 'crucibelle', species: 'crucibelle' },
      {
        key: 'crucibellemega',
        species: 'crucibelle-mega'
      },
      { key: 'pluffle', species: 'pluffle' },
      { key: 'kerfluffle', species: 'kerfluffle' },
      { key: 'pajantom', species: 'pajantom' },
      { key: 'mumbao', species: 'mumbao' },
      { key: 'jumbao', species: 'jumbao' },
      { key: 'fawnifer', species: 'fawnifer' },
      { key: 'electrelk', species: 'electrelk' },
      { key: 'caribolt', species: 'caribolt' },
      { key: 'smogecko', species: 'smogecko' },
      { key: 'smoguana', species: 'smoguana' },
      { key: 'smokomodo', species: 'smokomodo' },
      { key: 'swirlpool', species: 'swirlpool' },
      { key: 'coribalis', species: 'coribalis' },
      { key: 'snaelstrom', species: 'snaelstrom' },
      { key: 'justyke', species: 'justyke' },
      { key: 'equilibra', species: 'equilibra' },
      { key: 'solotl', species: 'solotl' },
      { key: 'astrolotl', species: 'astrolotl' },
      { key: 'miasmite', species: 'miasmite' },
      { key: 'miasmaw', species: 'miasmaw' },
      { key: 'chromera', species: 'chromera' },
      { key: 'nohface', species: 'nohface' },
      { key: 'monohm', species: 'monohm' },
      { key: 'duohm', species: 'duohm' },
      { key: 'dorsoil', species: 'dorsoil' },
      { key: 'protowatt', species: 'protowatt' },
      { key: 'venomicon', species: 'venomicon' },
      {
        key: 'venomiconepilogue',
        species: 'venomicon-epilogue'
      },
      { key: 'saharascal', species: 'saharascal' },
      { key: 'saharaja', species: 'saharaja' },
      { key: 'ababo', species: 'ababo' },
      {
        key: 'scattervein',
        species: 'scattervein'
      },
      { key: 'hemogoblin', species: 'hemogoblin' },
      { key: 'cresceidon', species: 'cresceidon' },
      { key: 'missingno', species: 'missingno.' },
      { key: 'm00', species: "'m (00)" },
      { key: 'bulbasaur', species: 'bulbasaur' },
      { key: 'ivysaur', species: 'ivysaur' },
      { key: 'venusaur', species: 'venusaur' },
      {
        key: 'venusaurgmax',
        species: 'venusaur-gmax'
      },
      {
        key: 'venusaurmega',
        species: 'venusaur-mega'
      },
      { key: 'charmander', species: 'charmander' },
      { key: 'charmeleon', species: 'charmeleon' },
      { key: 'charizard', species: 'charizard' },
      {
        key: 'charizardmegax',
        species: 'charizard-mega-x'
      },
      {
        key: 'charizardmegay',
        species: 'charizard-mega-y'
      },
      {
        key: 'charizardgmax',
        species: 'charizard-gmax'
      },
      { key: 'squirtle', species: 'squirtle' },
      { key: 'wartortle', species: 'wartortle' },
      { key: 'blastoise', species: 'blastoise' },
      {
        key: 'blastoisegmax',
        species: 'blastoise-gmax'
      },
      {
        key: 'blastoisemega',
        species: 'blastoise-mega'
      },
      { key: 'caterpie', species: 'caterpie' },
      { key: 'metapod', species: 'metapod' },
      { key: 'butterfree', species: 'butterfree' },
      {
        key: 'butterfreegmax',
        species: 'butterfree-gmax'
      },
      { key: 'weedle', species: 'weedle' },
      { key: 'kakuna', species: 'kakuna' },
      { key: 'beedrill', species: 'beedrill' },
      {
        key: 'beedrillmega',
        species: 'beedrill-mega'
      },
      { key: 'pidgey', species: 'pidgey' },
      { key: 'pidgeotto', species: 'pidgeotto' },
      { key: 'pidgeot', species: 'pidgeot' },
      {
        key: 'pidgeotmega',
        species: 'pidgeot-mega'
      },
      { key: 'rattata', species: 'rattata' },
      {
        key: 'rattataalola',
        species: 'rattata-alola'
      },
      { key: 'raticate', species: 'raticate' },
      {
        key: 'raticatealola',
        species: 'raticate-alola'
      },
      {
        key: 'raticatealolatotem',
        species: 'raticate-alola-totem'
      },
      { key: 'spearow', species: 'spearow' },
      { key: 'fearow', species: 'fearow' },
      { key: 'ekans', species: 'ekans' },
      { key: 'arbok', species: 'arbok' },
      { key: 'pikachu', species: 'pikachu' },
      {
        key: 'pikachugmax',
        species: 'pikachu-gmax'
      },
      {
        key: 'pikachucosplay',
        species: 'pikachu-cosplay'
      },
      {
        key: 'pikachurockstar',
        species: 'pikachu-rock-star'
      },
      {
        key: 'pikachubelle',
        species: 'pikachu-belle'
      },
      {
        key: 'pikachupopstar',
        species: 'pikachu-pop-star'
      },
      {
        key: 'pikachuphd',
        species: 'pikachu-phd'
      },
      {
        key: 'pikachulibre',
        species: 'pikachu-libre'
      },
      {
        key: 'pikachuoriginal',
        species: 'pikachu-original'
      },
      {
        key: 'pikachuhoenn',
        species: 'pikachu-hoenn'
      },
      {
        key: 'pikachusinnoh',
        species: 'pikachu-sinnoh'
      },
      {
        key: 'pikachuunova',
        species: 'pikachu-unova'
      },
      {
        key: 'pikachukalos',
        species: 'pikachu-kalos'
      },
      {
        key: 'pikachualola',
        species: 'pikachu-alola'
      },
      {
        key: 'pikachupartner',
        species: 'pikachu-partner'
      },
      {
        key: 'pikachustarter',
        species: 'pikachu-starter'
      },
      {
        key: 'pikachuworld',
        species: 'pikachu-world'
      },
      { key: 'raichu', species: 'raichu' },
      {
        key: 'raichualola',
        species: 'raichu-alola'
      },
      { key: 'sandshrew', species: 'sandshrew' },
      {
        key: 'sandshrewalola',
        species: 'sandshrew-alola'
      },
      { key: 'sandslash', species: 'sandslash' },
      {
        key: 'sandslashalola',
        species: 'sandslash-alola'
      },
      { key: 'nidoranf', species: 'nidoranf' },
      { key: 'nidorina', species: 'nidorina' },
      { key: 'nidoqueen', species: 'nidoqueen' },
      { key: 'nidoranm', species: 'nidoranm' },
      { key: 'nidorino', species: 'nidorino' },
      { key: 'nidoking', species: 'nidoking' },
      { key: 'clefairy', species: 'clefairy' },
      { key: 'clefable', species: 'clefable' },
      { key: 'vulpix', species: 'vulpix' },
      {
        key: 'vulpixalola',
        species: 'vulpix-alola'
      },
      { key: 'ninetales', species: 'ninetales' },
      {
        key: 'ninetalesalola',
        species: 'ninetales-alola'
      },
      { key: 'jigglypuff', species: 'jigglypuff' },
      { key: 'wigglytuff', species: 'wigglytuff' },
      { key: 'zubat', species: 'zubat' },
      { key: 'golbat', species: 'golbat' },
      { key: 'oddish', species: 'oddish' },
      { key: 'gloom', species: 'gloom' },
      { key: 'vileplume', species: 'vileplume' },
      { key: 'paras', species: 'paras' },
      { key: 'parasect', species: 'parasect' },
      { key: 'venonat', species: 'venonat' },
      { key: 'venomoth', species: 'venomoth' },
      { key: 'diglett', species: 'diglett' },
      {
        key: 'diglettalola',
        species: 'diglett-alola'
      },
      { key: 'dugtrio', species: 'dugtrio' },
      {
        key: 'dugtrioalola',
        species: 'dugtrio-alola'
      },
      { key: 'meowth', species: 'meowth' },
      {
        key: 'meowthalola',
        species: 'meowth-alola'
      },
      {
        key: 'meowthgalar',
        species: 'meowth-galar'
      },
      {
        key: 'meowthgmax',
        species: 'meowth-gmax'
      },
      { key: 'persian', species: 'persian' },
      {
        key: 'persianalola',
        species: 'persian-alola'
      },
      { key: 'psyduck', species: 'psyduck' },
      { key: 'golduck', species: 'golduck' },
      { key: 'mankey', species: 'mankey' },
      { key: 'primeape', species: 'primeape' },
      { key: 'growlithe', species: 'growlithe' },
      {
        key: 'growlithehisui',
        species: 'growlithe-hisui'
      },
      { key: 'arcanine', species: 'arcanine' },
      {
        key: 'arcaninehisui',
        species: 'arcanine-hisui'
      },
      { key: 'poliwag', species: 'poliwag' },
      { key: 'poliwhirl', species: 'poliwhirl' },
      { key: 'poliwrath', species: 'poliwrath' },
      { key: 'abra', species: 'abra' },
      { key: 'kadabra', species: 'kadabra' },
      { key: 'alakazam', species: 'alakazam' },
      {
        key: 'alakazammega',
        species: 'alakazam-mega'
      },
      { key: 'machop', species: 'machop' },
      { key: 'machoke', species: 'machoke' },
      { key: 'machamp', species: 'machamp' },
      {
        key: 'machampgmax',
        species: 'machamp-gmax'
      },
      { key: 'bellsprout', species: 'bellsprout' },
      { key: 'weepinbell', species: 'weepinbell' },
      { key: 'victreebel', species: 'victreebel' },
      { key: 'tentacool', species: 'tentacool' },
      { key: 'tentacruel', species: 'tentacruel' },
      { key: 'geodude', species: 'geodude' },
      {
        key: 'geodudealola',
        species: 'geodude-alola'
      },
      { key: 'graveler', species: 'graveler' },
      {
        key: 'graveleralola',
        species: 'graveler-alola'
      },
      { key: 'golem', species: 'golem' },
      {
        key: 'golemalola',
        species: 'golem-alola'
      },
      { key: 'ponyta', species: 'ponyta' },
      {
        key: 'ponytagalar',
        species: 'ponyta-galar'
      },
      { key: 'rapidash', species: 'rapidash' },
      {
        key: 'rapidashgalar',
        species: 'rapidash-galar'
      },
      { key: 'slowpoke', species: 'slowpoke' },
      {
        key: 'slowpokegalar',
        species: 'slowpoke-galar'
      },
      { key: 'slowbro', species: 'slowbro' },
      {
        key: 'slowbrogalar',
        species: 'slowbro-galar'
      },
      {
        key: 'slowbromega',
        species: 'slowbro-mega'
      },
      { key: 'magnemite', species: 'magnemite' },
      { key: 'magneton', species: 'magneton' },
      { key: 'farfetchd', species: "farfetch'd" },
      {
        key: 'farfetchdgalar',
        species: "farfetch'd-galar"
      },
      { key: 'doduo', species: 'doduo' },
      { key: 'dodrio', species: 'dodrio' },
      { key: 'seel', species: 'seel' },
      { key: 'dewgong', species: 'dewgong' },
      { key: 'grimer', species: 'grimer' },
      {
        key: 'grimeralola',
        species: 'grimer-alola'
      },
      { key: 'muk', species: 'muk' },
      { key: 'mukalola', species: 'muk-alola' },
      { key: 'shellder', species: 'shellder' },
      { key: 'cloyster', species: 'cloyster' },
      { key: 'gastly', species: 'gastly' },
      { key: 'haunter', species: 'haunter' },
      { key: 'gengar', species: 'gengar' },
      {
        key: 'gengarmega',
        species: 'gengar-mega'
      },
      {
        key: 'gengargmax',
        species: 'gengar-gmax'
      },
      { key: 'onix', species: 'onix' },
      { key: 'drowzee', species: 'drowzee' },
      { key: 'hypno', species: 'hypno' },
      { key: 'krabby', species: 'krabby' },
      { key: 'kingler', species: 'kingler' },
      {
        key: 'kinglergmax',
        species: 'kingler-gmax'
      },
      { key: 'voltorb', species: 'voltorb' },
      {
        key: 'voltorbhisui',
        species: 'voltorb-hisui'
      },
      { key: 'electrode', species: 'electrode' },
      {
        key: 'electrodehisui',
        species: 'electrode-hisui'
      },
      { key: 'exeggcute', species: 'exeggcute' },
      { key: 'exeggutor', species: 'exeggutor' },
      {
        key: 'exeggutoralola',
        species: 'exeggutor-alola'
      },
      { key: 'cubone', species: 'cubone' },
      { key: 'marowak', species: 'marowak' },
      {
        key: 'marowakalola',
        species: 'marowak-alola'
      },
      {
        key: 'marowakalolatotem',
        species: 'marowak-alola-totem'
      },
      { key: 'hitmonlee', species: 'hitmonlee' },
      { key: 'hitmonchan', species: 'hitmonchan' },
      { key: 'lickitung', species: 'lickitung' },
      { key: 'koffing', species: 'koffing' },
      { key: 'weezing', species: 'weezing' },
      {
        key: 'weezinggalar',
        species: 'weezing-galar'
      },
      { key: 'rhyhorn', species: 'rhyhorn' },
      { key: 'rhydon', species: 'rhydon' },
      { key: 'chansey', species: 'chansey' },
      { key: 'tangela', species: 'tangela' },
      { key: 'kangaskhan', species: 'kangaskhan' },
      {
        key: 'kangaskhanmega',
        species: 'kangaskhan-mega'
      },
      { key: 'horsea', species: 'horsea' },
      { key: 'seadra', species: 'seadra' },
      { key: 'goldeen', species: 'goldeen' },
      { key: 'seaking', species: 'seaking' },
      { key: 'staryu', species: 'staryu' },
      { key: 'starmie', species: 'starmie' },
      { key: 'mrmime', species: 'Mr. Mime' },
      {
        key: 'mrmimegalar',
        species: 'Mr. Mime-Galar'
      },
      { key: 'scyther', species: 'scyther' },
      { key: 'jynx', species: 'jynx' },
      { key: 'electabuzz', species: 'electabuzz' },
      { key: 'magmar', species: 'magmar' },
      { key: 'pinsir', species: 'pinsir' },
      {
        key: 'pinsirmega',
        species: 'pinsir-mega'
      },
      { key: 'tauros', species: 'tauros' },
      {
        key: 'taurospaldeacombat',
        species: 'tauros-paldea-combat'
      },
      {
        key: 'taurospaldeablaze',
        species: 'tauros-paldea-blaze'
      },
      {
        key: 'taurospaldeaaqua',
        species: 'tauros-paldea-aqua'
      },
      { key: 'magikarp', species: 'magikarp' },
      { key: 'gyarados', species: 'gyarados' },
      {
        key: 'gyaradosmega',
        species: 'gyarados-mega'
      },
      { key: 'lapras', species: 'lapras' },
      {
        key: 'laprasgmax',
        species: 'lapras-gmax'
      },
      { key: 'ditto', species: 'ditto' },
      { key: 'eevee', species: 'eevee' },
      {
        key: 'eeveestarter',
        species: 'eevee-starter'
      },
      { key: 'eeveegmax', species: 'eevee-gmax' },
      { key: 'vaporeon', species: 'vaporeon' },
      { key: 'jolteon', species: 'jolteon' },
      { key: 'flareon', species: 'flareon' },
      { key: 'porygon', species: 'porygon' },
      { key: 'omanyte', species: 'omanyte' },
      { key: 'omastar', species: 'omastar' },
      { key: 'kabuto', species: 'kabuto' },
      { key: 'kabutops', species: 'kabutops' },
      { key: 'aerodactyl', species: 'aerodactyl' },
      {
        key: 'aerodactylmega',
        species: 'aerodactyl-mega'
      },
      { key: 'snorlax', species: 'snorlax' },
      {
        key: 'snorlaxgmax',
        species: 'snorlax-gmax'
      },
      { key: 'articuno', species: 'articuno' },
      {
        key: 'articunogalar',
        species: 'articuno-galar'
      },
      { key: 'zapdos', species: 'zapdos' },
      {
        key: 'zapdosgalar',
        species: 'zapdos-galar'
      },
      { key: 'moltres', species: 'moltres' },
      {
        key: 'moltresgalar',
        species: 'moltres-galar'
      },
      { key: 'dratini', species: 'dratini' },
      { key: 'dragonair', species: 'dragonair' },
      { key: 'dragonite', species: 'dragonite' },
      { key: 'mewtwo', species: 'mewtwo' },
      {
        key: 'mewtwomegax',
        species: 'mewtwo-mega-x'
      },
      {
        key: 'mewtwomegay',
        species: 'mewtwo-mega-y'
      },
      { key: 'mew', species: 'mew' },
      { key: 'chikorita', species: 'chikorita' },
      { key: 'bayleef', species: 'bayleef' },
      { key: 'meganium', species: 'meganium' },
      { key: 'cyndaquil', species: 'cyndaquil' },
      { key: 'quilava', species: 'quilava' },
      { key: 'typhlosion', species: 'typhlosion' },
      {
        key: 'typhlosionhisui',
        species: 'typhlosion-hisui'
      },
      { key: 'totodile', species: 'totodile' },
      { key: 'croconaw', species: 'croconaw' },
      { key: 'feraligatr', species: 'feraligatr' },
      { key: 'sentret', species: 'sentret' },
      { key: 'furret', species: 'furret' },
      { key: 'hoothoot', species: 'hoothoot' },
      { key: 'noctowl', species: 'noctowl' },
      { key: 'ledyba', species: 'ledyba' },
      { key: 'ledian', species: 'ledian' },
      { key: 'spinarak', species: 'spinarak' },
      { key: 'ariados', species: 'ariados' },
      { key: 'crobat', species: 'crobat' },
      { key: 'chinchou', species: 'chinchou' },
      { key: 'lanturn', species: 'lanturn' },
      { key: 'pichu', species: 'pichu' },
      {
        key: 'pichuspikyeared',
        species: 'pichu-spiky-eared'
      },
      { key: 'cleffa', species: 'cleffa' },
      { key: 'igglybuff', species: 'igglybuff' },
      { key: 'togepi', species: 'togepi' },
      { key: 'togetic', species: 'togetic' },
      { key: 'natu', species: 'natu' },
      { key: 'xatu', species: 'xatu' },
      { key: 'mareep', species: 'mareep' },
      { key: 'flaaffy', species: 'flaaffy' },
      { key: 'ampharos', species: 'ampharos' },
      {
        key: 'ampharosmega',
        species: 'ampharos-mega'
      },
      { key: 'bellossom', species: 'bellossom' },
      { key: 'marill', species: 'marill' },
      { key: 'azumarill', species: 'azumarill' },
      { key: 'sudowoodo', species: 'sudowoodo' },
      { key: 'politoed', species: 'politoed' },
      { key: 'hoppip', species: 'hoppip' },
      { key: 'skiploom', species: 'skiploom' },
      { key: 'jumpluff', species: 'jumpluff' },
      { key: 'aipom', species: 'aipom' },
      { key: 'sunkern', species: 'sunkern' },
      { key: 'sunflora', species: 'sunflora' },
      { key: 'yanma', species: 'yanma' },
      { key: 'wooper', species: 'wooper' },
      {
        key: 'wooperpaldea',
        species: 'wooper-paldea'
      },
      { key: 'quagsire', species: 'quagsire' },
      { key: 'espeon', species: 'espeon' },
      { key: 'umbreon', species: 'umbreon' },
      { key: 'murkrow', species: 'murkrow' },
      { key: 'slowking', species: 'slowking' },
      {
        key: 'slowkinggalar',
        species: 'slowking-galar'
      },
      { key: 'misdreavus', species: 'misdreavus' },
      { key: 'unown', species: 'unown' },
      { key: 'wobbuffet', species: 'wobbuffet' },
      { key: 'girafarig', species: 'girafarig' },
      { key: 'pineco', species: 'pineco' },
      { key: 'forretress', species: 'forretress' },
      { key: 'dunsparce', species: 'dunsparce' },
      { key: 'gligar', species: 'gligar' },
      { key: 'steelix', species: 'steelix' },
      {
        key: 'steelixmega',
        species: 'steelix-mega'
      },
      { key: 'snubbull', species: 'snubbull' },
      { key: 'granbull', species: 'granbull' },
      { key: 'qwilfish', species: 'qwilfish' },
      {
        key: 'qwilfishhisui',
        species: 'qwilfish'
      },
      { key: 'scizor', species: 'scizor' },
      {
        key: 'scizormega',
        species: 'scizor-mega'
      },
      { key: 'shuckle', species: 'shuckle' },
      { key: 'heracross', species: 'heracross' },
      {
        key: 'heracrossmega',
        species: 'heracross-mega'
      },
      { key: 'sneasel', species: 'sneasel' },
      { key: 'sneaselhisui', species: 'sneasel' },
      { key: 'teddiursa', species: 'teddiursa' },
      { key: 'ursaring', species: 'ursaring' },
      { key: 'slugma', species: 'slugma' },
      { key: 'magcargo', species: 'magcargo' },
      { key: 'swinub', species: 'swinub' },
      { key: 'piloswine', species: 'piloswine' },
      { key: 'corsola', species: 'corsola' },
      {
        key: 'corsolagalar',
        species: 'corsola-galar'
      },
      { key: 'remoraid', species: 'remoraid' },
      { key: 'octillery', species: 'octillery' },
      { key: 'delibird', species: 'delibird' },
      { key: 'mantine', species: 'mantine' },
      { key: 'skarmory', species: 'skarmory' },
      { key: 'houndour', species: 'houndour' },
      { key: 'houndoom', species: 'houndoom' },
      {
        key: 'houndoommega',
        species: 'houndoom-mega'
      },
      { key: 'kingdra', species: 'kingdra' },
      { key: 'phanpy', species: 'phanpy' },
      { key: 'donphan', species: 'donphan' },
      { key: 'porygon2', species: 'porygon2' },
      { key: 'stantler', species: 'stantler' },
      { key: 'smeargle', species: 'smeargle' },
      { key: 'tyrogue', species: 'tyrogue' },
      { key: 'hitmontop', species: 'hitmontop' },
      { key: 'smoochum', species: 'smoochum' },
      { key: 'elekid', species: 'elekid' },
      { key: 'magby', species: 'magby' },
      { key: 'miltank', species: 'miltank' },
      { key: 'blissey', species: 'blissey' },
      { key: 'raikou', species: 'raikou' },
      { key: 'entei', species: 'entei' },
      { key: 'suicune', species: 'suicune' },
      { key: 'larvitar', species: 'larvitar' },
      { key: 'pupitar', species: 'pupitar' },
      { key: 'tyranitar', species: 'tyranitar' },
      {
        key: 'tyranitarmega',
        species: 'tyranitar-mega'
      },
      { key: 'lugia', species: 'lugia' },
      { key: 'hooh', species: 'ho-oh' },
      { key: 'celebi', species: 'celebi' },
      { key: 'treecko', species: 'treecko' },
      { key: 'grovyle', species: 'grovyle' },
      { key: 'sceptile', species: 'sceptile' },
      {
        key: 'sceptilemega',
        species: 'sceptile-mega'
      },
      { key: 'torchic', species: 'torchic' },
      { key: 'combusken', species: 'combusken' },
      { key: 'blaziken', species: 'blaziken' },
      {
        key: 'blazikenmega',
        species: 'blaziken-mega'
      },
      { key: 'mudkip', species: 'mudkip' },
      { key: 'marshtomp', species: 'marshtomp' },
      { key: 'swampert', species: 'swampert' },
      {
        key: 'swampertmega',
        species: 'swampert-mega'
      },
      { key: 'poochyena', species: 'poochyena' },
      { key: 'mightyena', species: 'mightyena' },
      { key: 'zigzagoon', species: 'zigzagoon' },
      {
        key: 'zigzagoongalar',
        species: 'zigzagoon-galar'
      },
      { key: 'linoone', species: 'linoone' },
      {
        key: 'linoonegalar',
        species: 'linoone-galar'
      },
      { key: 'wurmple', species: 'wurmple' },
      { key: 'silcoon', species: 'silcoon' },
      { key: 'beautifly', species: 'beautifly' },
      { key: 'cascoon', species: 'cascoon' },
      { key: 'dustox', species: 'dustox' },
      { key: 'lotad', species: 'lotad' },
      { key: 'lombre', species: 'lombre' },
      { key: 'ludicolo', species: 'ludicolo' },
      { key: 'seedot', species: 'seedot' },
      { key: 'nuzleaf', species: 'nuzleaf' },
      { key: 'shiftry', species: 'shiftry' },
      { key: 'taillow', species: 'taillow' },
      { key: 'swellow', species: 'swellow' },
      { key: 'wingull', species: 'wingull' },
      { key: 'pelipper', species: 'pelipper' },
      { key: 'ralts', species: 'ralts' },
      { key: 'kirlia', species: 'kirlia' },
      { key: 'gardevoir', species: 'gardevoir' },
      {
        key: 'gardevoirmega',
        species: 'gardevoir-mega'
      },
      { key: 'surskit', species: 'surskit' },
      { key: 'masquerain', species: 'masquerain' },
      { key: 'shroomish', species: 'shroomish' },
      { key: 'breloom', species: 'breloom' },
      { key: 'slakoth', species: 'slakoth' },
      { key: 'vigoroth', species: 'vigoroth' },
      { key: 'slaking', species: 'slaking' },
      { key: 'nincada', species: 'nincada' },
      { key: 'ninjask', species: 'ninjask' },
      { key: 'shedinja', species: 'shedinja' },
      { key: 'whismur', species: 'whismur' },
      { key: 'loudred', species: 'loudred' },
      { key: 'exploud', species: 'exploud' },
      { key: 'makuhita', species: 'makuhita' },
      { key: 'hariyama', species: 'hariyama' },
      { key: 'azurill', species: 'azurill' },
      { key: 'nosepass', species: 'nosepass' },
      { key: 'skitty', species: 'skitty' },
      { key: 'delcatty', species: 'delcatty' },
      { key: 'sableye', species: 'sableye' },
      {
        key: 'sableyemega',
        species: 'sableye-mega'
      },
      { key: 'mawile', species: 'mawile' },
      {
        key: 'mawilemega',
        species: 'mawile-mega'
      },
      { key: 'aron', species: 'aron' },
      { key: 'lairon', species: 'lairon' },
      { key: 'aggron', species: 'aggron' },
      {
        key: 'aggronmega',
        species: 'aggron-mega'
      },
      { key: 'meditite', species: 'meditite' },
      { key: 'medicham', species: 'medicham' },
      {
        key: 'medichammega',
        species: 'medicham-mega'
      },
      { key: 'electrike', species: 'electrike' },
      { key: 'manectric', species: 'manectric' },
      {
        key: 'manectricmega',
        species: 'manectric-mega'
      },
      { key: 'plusle', species: 'plusle' },
      { key: 'minun', species: 'minun' },
      { key: 'volbeat', species: 'volbeat' },
      { key: 'illumise', species: 'illumise' },
      { key: 'roselia', species: 'roselia' },
      { key: 'gulpin', species: 'gulpin' },
      { key: 'swalot', species: 'swalot' },
      { key: 'carvanha', species: 'carvanha' },
      { key: 'sharpedo', species: 'sharpedo' },
      {
        key: 'sharpedomega',
        species: 'sharpedo-mega'
      },
      { key: 'wailmer', species: 'wailmer' },
      { key: 'wailord', species: 'wailord' },
      { key: 'numel', species: 'numel' },
      { key: 'camerupt', species: 'camerupt' },
      {
        key: 'cameruptmega',
        species: 'camerupt-mega'
      },
      { key: 'torkoal', species: 'torkoal' },
      { key: 'spoink', species: 'spoink' },
      { key: 'grumpig', species: 'grumpig' },
      { key: 'spinda', species: 'spinda' },
      { key: 'trapinch', species: 'trapinch' },
      { key: 'vibrava', species: 'vibrava' },
      { key: 'flygon', species: 'flygon' },
      { key: 'cacnea', species: 'cacnea' },
      { key: 'cacturne', species: 'cacturne' },
      { key: 'swablu', species: 'swablu' },
      { key: 'altaria', species: 'altaria' },
      {
        key: 'altariamega',
        species: 'altaria-mega'
      },
      { key: 'zangoose', species: 'zangoose' },
      { key: 'seviper', species: 'seviper' },
      { key: 'lunatone', species: 'lunatone' },
      { key: 'solrock', species: 'solrock' },
      { key: 'barboach', species: 'barboach' },
      { key: 'whiscash', species: 'whiscash' },
      { key: 'corphish', species: 'corphish' },
      { key: 'crawdaunt', species: 'crawdaunt' },
      { key: 'baltoy', species: 'baltoy' },
      { key: 'claydol', species: 'claydol' },
      { key: 'lileep', species: 'lileep' },
      { key: 'cradily', species: 'cradily' },
      { key: 'anorith', species: 'anorith' },
      { key: 'armaldo', species: 'armaldo' },
      { key: 'feebas', species: 'feebas' },
      { key: 'milotic', species: 'milotic' },
      { key: 'castform', species: 'castform' },
      {
        key: 'castformsunny',
        species: 'castform-sunny'
      },
      {
        key: 'castformrainy',
        species: 'castform-rainy'
      },
      {
        key: 'castformsnowy',
        species: 'castform-snowy'
      },
      { key: 'kecleon', species: 'kecleon' },
      { key: 'shuppet', species: 'shuppet' },
      { key: 'banette', species: 'banette' },
      {
        key: 'banettemega',
        species: 'banette-mega'
      },
      { key: 'duskull', species: 'duskull' },
      { key: 'dusclops', species: 'dusclops' },
      { key: 'tropius', species: 'tropius' },
      { key: 'chimecho', species: 'chimecho' },
      { key: 'absol', species: 'absol' },
      { key: 'absolmega', species: 'absol-mega' },
      { key: 'wynaut', species: 'wynaut' },
      { key: 'snorunt', species: 'snorunt' },
      { key: 'glalie', species: 'glalie' },
      {
        key: 'glaliemega',
        species: 'glalie-mega'
      },
      { key: 'spheal', species: 'spheal' },
      { key: 'sealeo', species: 'sealeo' },
      { key: 'walrein', species: 'walrein' },
      { key: 'clamperl', species: 'clamperl' },
      { key: 'huntail', species: 'huntail' },
      { key: 'gorebyss', species: 'gorebyss' },
      { key: 'relicanth', species: 'relicanth' },
      { key: 'luvdisc', species: 'luvdisc' },
      { key: 'bagon', species: 'bagon' },
      { key: 'shelgon', species: 'shelgon' },
      { key: 'salamence', species: 'salamence' },
      {
        key: 'salamencemega',
        species: 'salamence-mega'
      },
      { key: 'beldum', species: 'beldum' },
      { key: 'metang', species: 'metang' },
      { key: 'metagross', species: 'metagross' },
      {
        key: 'metagrossmega',
        species: 'metagross-mega'
      },
      { key: 'regirock', species: 'regirock' },
      { key: 'regice', species: 'regice' },
      { key: 'registeel', species: 'registeel' },
      { key: 'latias', species: 'latias' },
      {
        key: 'latiasmega',
        species: 'latias-mega'
      },
      { key: 'latios', species: 'latios' },
      {
        key: 'latiosmega',
        species: 'latios-mega'
      },
      { key: 'kyogre', species: 'kyogre' },
      {
        key: 'kyogreprimal',
        species: 'kyogre-primal'
      },
      { key: 'groudon', species: 'groudon' },
      {
        key: 'groudonprimal',
        species: 'groudon-primal'
      },
      { key: 'rayquaza', species: 'rayquaza' },
      {
        key: 'rayquazamega',
        species: 'rayquaza-mega'
      },
      { key: 'jirachi', species: 'jirachi' },
      { key: 'deoxys', species: 'deoxys' },
      {
        key: 'deoxysattack',
        species: 'deoxys-attack'
      },
      {
        key: 'deoxysdefense',
        species: 'deoxys-defense'
      },
      {
        key: 'deoxysspeed',
        species: 'deoxys-speed'
      },
      { key: 'turtwig', species: 'turtwig' },
      { key: 'grotle', species: 'grotle' },
      { key: 'torterra', species: 'torterra' },
      { key: 'chimchar', species: 'chimchar' },
      { key: 'monferno', species: 'monferno' },
      { key: 'infernape', species: 'infernape' },
      { key: 'piplup', species: 'piplup' },
      { key: 'prinplup', species: 'prinplup' },
      { key: 'empoleon', species: 'empoleon' },
      { key: 'starly', species: 'starly' },
      { key: 'staravia', species: 'staravia' },
      { key: 'staraptor', species: 'staraptor' },
      { key: 'bidoof', species: 'bidoof' },
      { key: 'bibarel', species: 'bibarel' },
      { key: 'kricketot', species: 'kricketot' },
      { key: 'kricketune', species: 'kricketune' },
      { key: 'shinx', species: 'shinx' },
      { key: 'luxio', species: 'luxio' },
      { key: 'luxray', species: 'luxray' },
      { key: 'budew', species: 'budew' },
      { key: 'roserade', species: 'roserade' },
      { key: 'cranidos', species: 'cranidos' },
      { key: 'rampardos', species: 'rampardos' },
      { key: 'shieldon', species: 'shieldon' },
      { key: 'bastiodon', species: 'bastiodon' },
      { key: 'burmy', species: 'burmy' },
      { key: 'wormadam', species: 'wormadam' },
      {
        key: 'wormadamsandy',
        species: 'wormadam-sandy'
      },
      {
        key: 'wormadamtrash',
        species: 'wormadam-trash'
      },
      { key: 'mothim', species: 'mothim' },
      { key: 'combee', species: 'combee' },
      { key: 'vespiquen', species: 'vespiquen' },
      { key: 'pachirisu', species: 'pachirisu' },
      { key: 'buizel', species: 'buizel' },
      { key: 'floatzel', species: 'floatzel' },
      { key: 'cherubi', species: 'cherubi' },
      { key: 'cherrim', species: 'cherrim' },
      {
        key: 'cherrimsunshine',
        species: 'cherrim-sunshine'
      },
      { key: 'shellos', species: 'shellos' },
      { key: 'gastrodon', species: 'gastrodon' },
      { key: 'ambipom', species: 'ambipom' },
      { key: 'drifloon', species: 'drifloon' },
      { key: 'drifblim', species: 'drifblim' },
      { key: 'buneary', species: 'buneary' },
      { key: 'lopunny', species: 'lopunny' },
      {
        key: 'lopunnymega',
        species: 'lopunny-mega'
      },
      { key: 'mismagius', species: 'mismagius' },
      { key: 'honchkrow', species: 'honchkrow' },
      { key: 'glameow', species: 'glameow' },
      { key: 'purugly', species: 'purugly' },
      { key: 'chingling', species: 'chingling' },
      { key: 'stunky', species: 'stunky' },
      { key: 'skuntank', species: 'skuntank' },
      { key: 'bronzor', species: 'bronzor' },
      { key: 'bronzong', species: 'bronzong' },
      { key: 'bonsly', species: 'bonsly' },
      { key: 'mimejr', species: 'Mime Jr.' },
      { key: 'happiny', species: 'happiny' },
      { key: 'chatot', species: 'chatot' },
      { key: 'spiritomb', species: 'spiritomb' },
      { key: 'gible', species: 'gible' },
      { key: 'gabite', species: 'gabite' },
      { key: 'garchomp', species: 'garchomp' },
      {
        key: 'garchompmega',
        species: 'garchomp-mega'
      },
      { key: 'munchlax', species: 'munchlax' },
      { key: 'riolu', species: 'riolu' },
      { key: 'lucario', species: 'lucario' },
      {
        key: 'lucariomega',
        species: 'lucario-mega'
      },
      { key: 'hippopotas', species: 'hippopotas' },
      { key: 'hippowdon', species: 'hippowdon' },
      { key: 'skorupi', species: 'skorupi' },
      { key: 'drapion', species: 'drapion' },
      { key: 'croagunk', species: 'croagunk' },
      { key: 'toxicroak', species: 'toxicroak' },
      { key: 'carnivine', species: 'carnivine' },
      { key: 'finneon', species: 'finneon' },
      { key: 'lumineon', species: 'lumineon' },
      { key: 'mantyke', species: 'mantyke' },
      { key: 'snover', species: 'snover' },
      { key: 'abomasnow', species: 'abomasnow' },
      {
        key: 'abomasnowmega',
        species: 'abomasnow-mega'
      },
      { key: 'weavile', species: 'weavile' },
      { key: 'magnezone', species: 'magnezone' },
      { key: 'lickilicky', species: 'lickilicky' },
      { key: 'rhyperior', species: 'rhyperior' },
      { key: 'tangrowth', species: 'tangrowth' },
      { key: 'electivire', species: 'electivire' },
      { key: 'magmortar', species: 'magmortar' },
      { key: 'togekiss', species: 'togekiss' },
      { key: 'yanmega', species: 'yanmega' },
      { key: 'leafeon', species: 'leafeon' },
      { key: 'glaceon', species: 'glaceon' },
      { key: 'gliscor', species: 'gliscor' },
      { key: 'mamoswine', species: 'mamoswine' },
      { key: 'porygonz', species: 'porygon-z' },
      { key: 'gallade', species: 'gallade' },
      {
        key: 'gallademega',
        species: 'gallade-mega'
      },
      { key: 'probopass', species: 'probopass' },
      { key: 'dusknoir', species: 'dusknoir' },
      { key: 'froslass', species: 'froslass' },
      { key: 'rotom', species: 'rotom' },
      { key: 'rotomheat', species: 'rotom-heat' },
      { key: 'rotomwash', species: 'rotom-wash' },
      {
        key: 'rotomfrost',
        species: 'rotom-frost'
      },
      { key: 'rotomfan', species: 'rotom-fan' },
      { key: 'rotommow', species: 'rotom-mow' },
      { key: 'uxie', species: 'uxie' },
      { key: 'mesprit', species: 'mesprit' },
      { key: 'azelf', species: 'azelf' },
      { key: 'dialga', species: 'dialga' },
      {
        key: 'dialgaorigin',
        species: 'dialga-origin'
      },
      { key: 'palkia', species: 'palkia' },
      {
        key: 'palkiaorigin',
        species: 'palkia-origin'
      },
      { key: 'heatran', species: 'heatran' },
      { key: 'regigigas', species: 'regigigas' },
      { key: 'giratina', species: 'giratina' },
      {
        key: 'giratinaorigin',
        species: 'giratina-origin'
      },
      { key: 'cresselia', species: 'cresselia' },
      { key: 'phione', species: 'phione' },
      { key: 'manaphy', species: 'manaphy' },
      { key: 'darkrai', species: 'darkrai' },
      { key: 'shaymin', species: 'shaymin' },
      {
        key: 'shayminsky',
        species: 'shaymin-sky'
      },
      { key: 'arceus', species: 'arceus' },
      { key: 'arceusbug', species: 'arceus-bug' },
      {
        key: 'arceusdark',
        species: 'arceus-dark'
      },
      {
        key: 'arceusdragon',
        species: 'arceus-dragon'
      },
      {
        key: 'arceuselectric',
        species: 'arceus-electric'
      },
      {
        key: 'arceusfairy',
        species: 'arceus-fairy'
      },
      {
        key: 'arceusfighting',
        species: 'arceus-fighting'
      },
      {
        key: 'arceusfire',
        species: 'arceus-fire'
      },
      {
        key: 'arceusflying',
        species: 'arceus-flying'
      },
      {
        key: 'arceusghost',
        species: 'arceus-ghost'
      },
      {
        key: 'arceusgrass',
        species: 'arceus-grass'
      },
      {
        key: 'arceusground',
        species: 'arceus-ground'
      },
      { key: 'arceusice', species: 'arceus-ice' },
      {
        key: 'arceuspoison',
        species: 'arceus-poison'
      },
      {
        key: 'arceuspsychic',
        species: 'arceus-psychic'
      },
      {
        key: 'arceusrock',
        species: 'arceus-rock'
      },
      {
        key: 'arceussteel',
        species: 'arceus-steel'
      },
      {
        key: 'arceuswater',
        species: 'arceus-water'
      },
      {
        key: 'arceuslegend',
        species: 'arceus-legend'
      },
      { key: 'victini', species: 'victini' },
      { key: 'snivy', species: 'snivy' },
      { key: 'servine', species: 'servine' },
      { key: 'serperior', species: 'serperior' },
      { key: 'tepig', species: 'tepig' },
      { key: 'pignite', species: 'pignite' },
      { key: 'emboar', species: 'emboar' },
      { key: 'oshawott', species: 'oshawott' },
      { key: 'dewott', species: 'dewott' },
      { key: 'samurott', species: 'samurott' },
      {
        key: 'samurotthisui',
        species: 'samurott-hisui'
      },
      { key: 'patrat', species: 'patrat' },
      { key: 'watchog', species: 'watchog' },
      { key: 'lillipup', species: 'lillipup' },
      { key: 'herdier', species: 'herdier' },
      { key: 'stoutland', species: 'stoutland' },
      { key: 'purrloin', species: 'purrloin' },
      { key: 'liepard', species: 'liepard' },
      { key: 'pansage', species: 'pansage' },
      { key: 'simisage', species: 'simisage' },
      { key: 'pansear', species: 'pansear' },
      { key: 'simisear', species: 'simisear' },
      { key: 'panpour', species: 'panpour' },
      { key: 'simipour', species: 'simipour' },
      { key: 'munna', species: 'munna' },
      { key: 'musharna', species: 'musharna' },
      { key: 'pidove', species: 'pidove' },
      { key: 'tranquill', species: 'tranquill' },
      { key: 'unfezant', species: 'unfezant' },
      { key: 'blitzle', species: 'blitzle' },
      { key: 'zebstrika', species: 'zebstrika' },
      { key: 'roggenrola', species: 'roggenrola' },
      { key: 'boldore', species: 'boldore' },
      { key: 'gigalith', species: 'gigalith' },
      { key: 'woobat', species: 'woobat' },
      { key: 'swoobat', species: 'swoobat' },
      { key: 'drilbur', species: 'drilbur' },
      { key: 'excadrill', species: 'excadrill' },
      { key: 'audino', species: 'audino' },
      {
        key: 'audinomega',
        species: 'audino-mega'
      },
      { key: 'timburr', species: 'timburr' },
      { key: 'gurdurr', species: 'gurdurr' },
      { key: 'conkeldurr', species: 'conkeldurr' },
      { key: 'tympole', species: 'tympole' },
      { key: 'palpitoad', species: 'palpitoad' },
      { key: 'seismitoad', species: 'seismitoad' },
      { key: 'throh', species: 'throh' },
      { key: 'sawk', species: 'sawk' },
      { key: 'sewaddle', species: 'sewaddle' },
      { key: 'swadloon', species: 'swadloon' },
      { key: 'leavanny', species: 'leavanny' },
      { key: 'venipede', species: 'venipede' },
      { key: 'whirlipede', species: 'whirlipede' },
      { key: 'scolipede', species: 'scolipede' },
      { key: 'cottonee', species: 'cottonee' },
      { key: 'whimsicott', species: 'whimsicott' },
      { key: 'petilil', species: 'petilil' },
      { key: 'lilligant', species: 'lilligant' },
      {
        key: 'lilliganthisui',
        species: 'lilligant-hisui'
      },
      { key: 'basculin', species: 'basculin' },
      {
        key: 'basculinbluestriped',
        species: 'basculin-blue-striped'
      },
      {
        key: 'basculinwhitestriped',
        species: 'basculin-white-striped'
      },
      { key: 'sandile', species: 'sandile' },
      { key: 'krokorok', species: 'krokorok' },
      { key: 'krookodile', species: 'krookodile' },
      { key: 'darumaka', species: 'darumaka' },
      {
        key: 'darumakagalar',
        species: 'darumaka-galar'
      },
      { key: 'darmanitan', species: 'darmanitan' },
      {
        key: 'darmanitangalar',
        species: 'darmanitan-galar'
      },
      {
        key: 'darmanitanzen',
        species: 'darmanitan-zen'
      },
      {
        key: 'darmanitangalarzen',
        species: 'darmanitan-galar-zen'
      },
      { key: 'maractus', species: 'maractus' },
      { key: 'dwebble', species: 'dwebble' },
      { key: 'crustle', species: 'crustle' },
      { key: 'scraggy', species: 'scraggy' },
      { key: 'scrafty', species: 'scrafty' },
      { key: 'sigilyph', species: 'sigilyph' },
      { key: 'yamask', species: 'yamask' },
      {
        key: 'yamaskgalar',
        species: 'yamask-galar'
      },
      { key: 'cofagrigus', species: 'cofagrigus' },
      { key: 'tirtouga', species: 'tirtouga' },
      { key: 'carracosta', species: 'carracosta' },
      { key: 'archen', species: 'archen' },
      { key: 'archeops', species: 'archeops' },
      { key: 'trubbish', species: 'trubbish' },
      { key: 'garbodor', species: 'garbodor' },
      {
        key: 'garbodorgmax',
        species: 'garbodor-gmax'
      },
      { key: 'zorua', species: 'zorua' },
      {
        key: 'zoruahisui',
        species: 'zorua-hisui'
      },
      { key: 'zoroark', species: 'zoroark' },
      {
        key: 'zoroarkhisui',
        species: 'zoroark-hisui'
      },
      { key: 'minccino', species: 'minccino' },
      { key: 'cinccino', species: 'cinccino' },
      { key: 'gothita', species: 'gothita' },
      { key: 'gothorita', species: 'gothorita' },
      { key: 'gothitelle', species: 'gothitelle' },
      { key: 'solosis', species: 'solosis' },
      { key: 'duosion', species: 'duosion' },
      { key: 'reuniclus', species: 'reuniclus' },
      { key: 'ducklett', species: 'ducklett' },
      { key: 'swanna', species: 'swanna' },
      { key: 'vanillite', species: 'vanillite' },
      { key: 'vanillish', species: 'vanillish' },
      { key: 'vanilluxe', species: 'vanilluxe' },
      { key: 'deerling', species: 'deerling' },
      { key: 'sawsbuck', species: 'sawsbuck' },
      { key: 'emolga', species: 'emolga' },
      { key: 'karrablast', species: 'karrablast' },
      { key: 'escavalier', species: 'escavalier' },
      { key: 'foongus', species: 'foongus' },
      { key: 'amoonguss', species: 'amoonguss' },
      { key: 'frillish', species: 'frillish' },
      {
        key: 'frillishfemale',
        species: 'frillish-female'
      },
      { key: 'jellicent', species: 'jellicent' },
      {
        key: 'jellicentfemale',
        species: 'jellicent-female'
      },
      { key: 'alomomola', species: 'alomomola' },
      { key: 'joltik', species: 'joltik' },
      { key: 'galvantula', species: 'galvantula' },
      { key: 'ferroseed', species: 'ferroseed' },
      { key: 'ferrothorn', species: 'ferrothorn' },
      { key: 'klink', species: 'klink' },
      { key: 'klang', species: 'klang' },
      { key: 'klinklang', species: 'klinklang' },
      { key: 'tynamo', species: 'tynamo' },
      { key: 'eelektrik', species: 'eelektrik' },
      { key: 'eelektross', species: 'eelektross' },
      { key: 'elgyem', species: 'elgyem' },
      { key: 'beheeyem', species: 'beheeyem' },
      { key: 'litwick', species: 'litwick' },
      { key: 'lampent', species: 'lampent' },
      { key: 'chandelure', species: 'chandelure' },
      { key: 'axew', species: 'axew' },
      { key: 'fraxure', species: 'fraxure' },
      { key: 'haxorus', species: 'haxorus' },
      { key: 'cubchoo', species: 'cubchoo' },
      { key: 'beartic', species: 'beartic' },
      { key: 'cryogonal', species: 'cryogonal' },
      { key: 'shelmet', species: 'shelmet' },
      { key: 'accelgor', species: 'accelgor' },
      { key: 'stunfisk', species: 'stunfisk' },
      {
        key: 'stunfiskgalar',
        species: 'stunfisk-galar'
      },
      { key: 'mienfoo', species: 'mienfoo' },
      { key: 'mienshao', species: 'mienshao' },
      { key: 'druddigon', species: 'druddigon' },
      { key: 'golett', species: 'golett' },
      { key: 'golurk', species: 'golurk' },
      { key: 'pawniard', species: 'pawniard' },
      { key: 'bisharp', species: 'bisharp' },
      { key: 'bouffalant', species: 'bouffalant' },
      { key: 'rufflet', species: 'rufflet' },
      { key: 'braviary', species: 'braviary' },
      {
        key: 'braviaryhisui',
        species: 'braviary-hisui'
      },
      { key: 'vullaby', species: 'vullaby' },
      { key: 'mandibuzz', species: 'mandibuzz' },
      { key: 'heatmor', species: 'heatmor' },
      { key: 'durant', species: 'durant' },
      { key: 'deino', species: 'deino' },
      { key: 'zweilous', species: 'zweilous' },
      { key: 'hydreigon', species: 'hydreigon' },
      { key: 'larvesta', species: 'larvesta' },
      { key: 'volcarona', species: 'volcarona' },
      { key: 'cobalion', species: 'cobalion' },
      { key: 'terrakion', species: 'terrakion' },
      { key: 'virizion', species: 'virizion' },
      { key: 'tornadus', species: 'tornadus' },
      {
        key: 'tornadustherian',
        species: 'tornadus-therian'
      },
      { key: 'thundurus', species: 'thundurus' },
      {
        key: 'thundurustherian',
        species: 'thundurus-therian'
      },
      { key: 'reshiram', species: 'reshiram' },
      { key: 'zekrom', species: 'zekrom' },
      { key: 'landorus', species: 'landorus' },
      {
        key: 'landorustherian',
        species: 'landorus-therian'
      },
      { key: 'kyurem', species: 'kyurem' },
      {
        key: 'kyuremblack',
        species: 'kyurem-black'
      },
      {
        key: 'kyuremwhite',
        species: 'kyurem-white'
      },
      { key: 'keldeo', species: 'keldeo' },
      {
        key: 'keldeoresolute',
        species: 'keldeo-resolute'
      },
      { key: 'meloetta', species: 'meloetta' },
      {
        key: 'meloettapirouette',
        species: 'meloetta-pirouette'
      },
      { key: 'genesect', species: 'genesect' },
      {
        key: 'genesectdouse',
        species: 'genesect-douse'
      },
      {
        key: 'genesectshock',
        species: 'genesect-shock'
      },
      {
        key: 'genesectburn',
        species: 'genesect-burn'
      },
      {
        key: 'genesectchill',
        species: 'genesect-chill'
      },
      { key: 'chespin', species: 'chespin' },
      { key: 'quilladin', species: 'quilladin' },
      { key: 'chesnaught', species: 'chesnaught' },
      { key: 'fennekin', species: 'fennekin' },
      { key: 'braixen', species: 'braixen' },
      { key: 'delphox', species: 'delphox' },
      { key: 'froakie', species: 'froakie' },
      { key: 'frogadier', species: 'frogadier' },
      { key: 'greninja', species: 'greninja' },
      {
        key: 'greninjaash',
        species: 'greninja-ash'
      },
      { key: 'bunnelby', species: 'bunnelby' },
      { key: 'diggersby', species: 'diggersby' },
      { key: 'fletchling', species: 'fletchling' },
      {
        key: 'fletchinder',
        species: 'fletchinder'
      },
      { key: 'talonflame', species: 'talonflame' },
      { key: 'scatterbug', species: 'scatterbug' },
      { key: 'spewpa', species: 'spewpa' },
      { key: 'vivillon', species: 'vivillon' },
      {
        key: 'vivillonfancy',
        species: 'vivillon-fancy'
      },
      {
        key: 'vivillonpokeball',
        species: 'vivillon-pokeball'
      },
      { key: 'litleo', species: 'litleo' },
      { key: 'pyroar', species: 'pyroar' },
      { key: 'flabebe', species: 'flabebe' },
      { key: 'floette', species: 'floette' },
      {
        key: 'floetteeternal',
        species: 'floette-eternal'
      },
      { key: 'florges', species: 'florges' },
      { key: 'skiddo', species: 'skiddo' },
      { key: 'gogoat', species: 'gogoat' },
      { key: 'pancham', species: 'pancham' },
      { key: 'pangoro', species: 'pangoro' },
      { key: 'furfrou', species: 'furfrou' },
      { key: 'espurr', species: 'espurr' },
      { key: 'meowstic', species: 'meowstic' },
      { key: 'meowsticf', species: 'meowstic-f' },
      { key: 'honedge', species: 'honedge' },
      { key: 'doublade', species: 'doublade' },
      { key: 'aegislash', species: 'aegislash' },
      {
        key: 'aegislashblade',
        species: 'aegislash-blade'
      },
      { key: 'spritzee', species: 'spritzee' },
      { key: 'aromatisse', species: 'aromatisse' },
      { key: 'swirlix', species: 'swirlix' },
      { key: 'slurpuff', species: 'slurpuff' },
      { key: 'inkay', species: 'inkay' },
      { key: 'malamar', species: 'malamar' },
      { key: 'binacle', species: 'binacle' },
      { key: 'barbaracle', species: 'barbaracle' },
      { key: 'skrelp', species: 'skrelp' },
      { key: 'dragalge', species: 'dragalge' },
      { key: 'clauncher', species: 'clauncher' },
      { key: 'clawitzer', species: 'clawitzer' },
      { key: 'helioptile', species: 'helioptile' },
      { key: 'heliolisk', species: 'heliolisk' },
      { key: 'tyrunt', species: 'tyrunt' },
      { key: 'tyrantrum', species: 'tyrantrum' },
      { key: 'amaura', species: 'amaura' },
      { key: 'aurorus', species: 'aurorus' },
      { key: 'sylveon', species: 'sylveon' },
      { key: 'hawlucha', species: 'hawlucha' },
      { key: 'dedenne', species: 'dedenne' },
      { key: 'carbink', species: 'carbink' },
      { key: 'goomy', species: 'goomy' },
      { key: 'sliggoo', species: 'sliggoo' },
      {
        key: 'sliggoohisui',
        species: 'sliggoo-hisui'
      },
      { key: 'goodra', species: 'goodra' },
      {
        key: 'goodrahisui',
        species: 'goodra-hisui'
      },
      { key: 'klefki', species: 'klefki' },
      { key: 'phantump', species: 'phantump' },
      { key: 'trevenant', species: 'trevenant' },
      { key: 'pumpkaboo', species: 'pumpkaboo' },
      {
        key: 'pumpkaboosmall',
        species: 'pumpkaboo-small'
      },
      {
        key: 'pumpkaboolarge',
        species: 'pumpkaboo-large'
      },
      {
        key: 'pumpkaboosuper',
        species: 'pumpkaboo-super'
      },
      { key: 'gourgeist', species: 'gourgeist' },
      {
        key: 'gourgeistsmall',
        species: 'gourgeist-small'
      },
      {
        key: 'gourgeistlarge',
        species: 'gourgeist-large'
      },
      {
        key: 'gourgeistsuper',
        species: 'gourgeist-super'
      },
      { key: 'bergmite', species: 'bergmite' },
      { key: 'avalugg', species: 'avalugg' },
      {
        key: 'avalugghisui',
        species: 'avalugg-hisui'
      },
      { key: 'noibat', species: 'noibat' },
      { key: 'noivern', species: 'noivern' },
      { key: 'xerneas', species: 'xerneas' },
      {
        key: 'xerneasneutral',
        species: 'xerneas-neutral'
      },
      { key: 'yveltal', species: 'yveltal' },
      { key: 'zygarde', species: 'zygarde' },
      { key: 'zygarde10', species: 'zygarde-10' },
      {
        key: 'zygardecomplete',
        species: 'zygarde-complete'
      },
      { key: 'diancie', species: 'diancie' },
      {
        key: 'dianciemega',
        species: 'diancie-mega'
      },
      { key: 'hoopa', species: 'hoopa' },
      {
        key: 'hoopaunbound',
        species: 'hoopa-unbound'
      },
      { key: 'volcanion', species: 'volcanion' },
      { key: 'rowlet', species: 'rowlet' },
      { key: 'dartrix', species: 'dartrix' },
      { key: 'decidueye', species: 'decidueye' },
      {
        key: 'decidueyehisui',
        species: 'decidueye-hisui'
      },
      { key: 'litten', species: 'litten' },
      { key: 'torracat', species: 'torracat' },
      { key: 'incineroar', species: 'incineroar' },
      { key: 'popplio', species: 'popplio' },
      { key: 'brionne', species: 'brionne' },
      { key: 'primarina', species: 'primarina' },
      { key: 'pikipek', species: 'pikipek' },
      { key: 'trumbeak', species: 'trumbeak' },
      { key: 'toucannon', species: 'toucannon' },
      { key: 'yungoos', species: 'yungoos' },
      { key: 'gumshoos', species: 'gumshoos' },
      {
        key: 'gumshoostotem',
        species: 'gumshoos-totem'
      },
      { key: 'grubbin', species: 'grubbin' },
      { key: 'charjabug', species: 'charjabug' },
      { key: 'vikavolt', species: 'vikavolt' },
      {
        key: 'vikavolttotem',
        species: 'vikavolt-totem'
      },
      { key: 'crabrawler', species: 'crabrawler' },
      {
        key: 'crabominable',
        species: 'crabominable'
      },
      { key: 'oricorio', species: 'oricorio' },
      {
        key: 'oricoriopompom',
        species: 'oricorio-pom-pom'
      },
      {
        key: 'oricoriopau',
        species: "oricorio-pa'u"
      },
      {
        key: 'oricoriosensu',
        species: 'oricorio-sensu'
      },
      { key: 'cutiefly', species: 'cutiefly' },
      { key: 'ribombee', species: 'ribombee' },
      {
        key: 'ribombeetotem',
        species: 'ribombee-totem'
      },
      { key: 'rockruff', species: 'rockruff' },
      { key: 'lycanroc', species: 'lycanroc' },
      {
        key: 'lycanrocmidnight',
        species: 'lycanroc-midnight'
      },
      {
        key: 'lycanrocdusk',
        species: 'lycanroc-dusk'
      },
      { key: 'wishiwashi', species: 'wishiwashi' },
      {
        key: 'wishiwashischool',
        species: 'wishiwashi-school'
      },
      { key: 'mareanie', species: 'mareanie' },
      { key: 'toxapex', species: 'toxapex' },
      { key: 'mudbray', species: 'mudbray' },
      { key: 'mudsdale', species: 'mudsdale' },
      { key: 'dewpider', species: 'dewpider' },
      { key: 'araquanid', species: 'araquanid' },
      {
        key: 'araquanidtotem',
        species: 'araquanid-totem'
      },
      { key: 'fomantis', species: 'fomantis' },
      { key: 'lurantis', species: 'lurantis' },
      {
        key: 'lurantistotem',
        species: 'lurantis-totem'
      },
      { key: 'morelull', species: 'morelull' },
      { key: 'shiinotic', species: 'shiinotic' },
      { key: 'salandit', species: 'salandit' },
      { key: 'salazzle', species: 'salazzle' },
      {
        key: 'salazzletotem',
        species: 'salazzle-totem'
      },
      { key: 'stufful', species: 'stufful' },
      { key: 'bewear', species: 'bewear' },
      { key: 'bounsweet', species: 'bounsweet' },
      { key: 'steenee', species: 'steenee' },
      { key: 'tsareena', species: 'tsareena' },
      { key: 'comfey', species: 'comfey' },
      { key: 'oranguru', species: 'oranguru' },
      { key: 'passimian', species: 'passimian' },
      { key: 'wimpod', species: 'wimpod' },
      { key: 'golisopod', species: 'golisopod' },
      { key: 'sandygast', species: 'sandygast' },
      { key: 'palossand', species: 'palossand' },
      { key: 'pyukumuku', species: 'pyukumuku' },
      { key: 'typenull', species: 'Type: Null' },
      { key: 'silvally', species: 'silvally' },
      {
        key: 'silvallybug',
        species: 'silvally-bug'
      },
      {
        key: 'silvallydark',
        species: 'silvally-dark'
      },
      {
        key: 'silvallydragon',
        species: 'silvally-dragon'
      },
      {
        key: 'silvallyelectric',
        species: 'silvally-electric'
      },
      {
        key: 'silvallyfairy',
        species: 'silvally-fairy'
      },
      {
        key: 'silvallyfighting',
        species: 'silvally-fighting'
      },
      {
        key: 'silvallyfire',
        species: 'silvally-fire'
      },
      {
        key: 'silvallyflying',
        species: 'silvally-flying'
      },
      {
        key: 'silvallyghost',
        species: 'silvally-ghost'
      },
      {
        key: 'silvallygrass',
        species: 'silvally-grass'
      },
      {
        key: 'silvallyground',
        species: 'silvally-ground'
      },
      {
        key: 'silvallyice',
        species: 'silvally-ice'
      },
      {
        key: 'silvallypoison',
        species: 'silvally-poison'
      },
      {
        key: 'silvallypsychic',
        species: 'silvally-psychic'
      },
      {
        key: 'silvallyrock',
        species: 'silvally-rock'
      },
      {
        key: 'silvallysteel',
        species: 'silvally-steel'
      },
      {
        key: 'silvallywater',
        species: 'silvally-water'
      },
      { key: 'minior', species: 'minior' },
      {
        key: 'miniormeteor',
        species: 'minior-meteor'
      },
      { key: 'komala', species: 'komala' },
      { key: 'turtonator', species: 'turtonator' },
      { key: 'togedemaru', species: 'togedemaru' },
      {
        key: 'togedemarutotem',
        species: 'togedemaru-totem'
      },
      { key: 'mimikyu', species: 'mimikyu' },
      {
        key: 'mimikyubusted',
        species: 'mimikyu-busted'
      },
      {
        key: 'mimikyutotem',
        species: 'mimikyu-totem'
      },
      {
        key: 'mimikyubustedtotem',
        species: 'mimikyu-busted-totem'
      },
      { key: 'bruxish', species: 'bruxish' },
      { key: 'drampa', species: 'drampa' },
      { key: 'dhelmise', species: 'dhelmise' },
      { key: 'jangmoo', species: 'jangmo-o' },
      { key: 'hakamoo', species: 'hakamo-o' },
      { key: 'kommoo', species: 'kommo-o' },
      {
        key: 'kommoototem',
        species: 'kommo-o-totem'
      },
      { key: 'tapukoko', species: 'Tapu Koko' },
      { key: 'tapulele', species: 'Tapu Lele' },
      { key: 'tapubulu', species: 'Tapu Bulu' },
      { key: 'tapufini', species: 'Tapu Fini' },
      { key: 'cosmog', species: 'cosmog' },
      { key: 'cosmoem', species: 'cosmoem' },
      { key: 'solgaleo', species: 'solgaleo' },
      { key: 'lunala', species: 'lunala' },
      { key: 'nihilego', species: 'nihilego' },
      { key: 'buzzwole', species: 'buzzwole' },
      { key: 'pheromosa', species: 'pheromosa' },
      { key: 'xurkitree', species: 'xurkitree' },
      { key: 'celesteela', species: 'celesteela' },
      { key: 'kartana', species: 'kartana' },
      { key: 'guzzlord', species: 'guzzlord' },
      { key: 'necrozma', species: 'necrozma' },
      {
        key: 'necrozmaduskmane',
        species: 'necrozma-dusk-mane'
      },
      {
        key: 'necrozmadawnwings',
        species: 'necrozma-dawn-wings'
      },
      {
        key: 'necrozmaultra',
        species: 'necrozma-ultra'
      },
      { key: 'magearna', species: 'magearna' },
      {
        key: 'magearnaoriginal',
        species: 'magearna-original'
      },
      { key: 'marshadow', species: 'marshadow' },
      { key: 'poipole', species: 'poipole' },
      { key: 'naganadel', species: 'naganadel' },
      { key: 'stakataka', species: 'stakataka' },
      {
        key: 'blacephalon',
        species: 'blacephalon'
      },
      { key: 'zeraora', species: 'zeraora' },
      { key: 'meltan', species: 'meltan' },
      { key: 'melmetal', species: 'melmetal' },
      {
        key: 'melmetalgmax',
        species: 'melmetal-gmax'
      },
      { key: 'grookey', species: 'grookey' },
      { key: 'thwackey', species: 'thwackey' },
      { key: 'rillaboom', species: 'rillaboom' },
      {
        key: 'rillaboomgmax',
        species: 'rillaboom-gmax'
      },
      { key: 'scorbunny', species: 'scorbunny' },
      { key: 'raboot', species: 'raboot' },
      { key: 'cinderace', species: 'cinderace' },
      {
        key: 'cinderacegmax',
        species: 'cinderace-gmax'
      },
      { key: 'sobble', species: 'sobble' },
      { key: 'drizzile', species: 'drizzile' },
      { key: 'inteleon', species: 'inteleon' },
      {
        key: 'inteleongmax',
        species: 'inteleon-gmax'
      },
      { key: 'skwovet', species: 'skwovet' },
      { key: 'greedent', species: 'greedent' },
      { key: 'rookidee', species: 'rookidee' },
      {
        key: 'corvisquire',
        species: 'corvisquire'
      },
      {
        key: 'corviknight',
        species: 'corviknight'
      },
      {
        key: 'corviknightgmax',
        species: 'corviknight-gmax'
      },
      { key: 'blipbug', species: 'blipbug' },
      { key: 'dottler', species: 'dottler' },
      { key: 'orbeetle', species: 'orbeetle' },
      {
        key: 'orbeetlegmax',
        species: 'orbeetle-gmax'
      },
      { key: 'nickit', species: 'nickit' },
      { key: 'thievul', species: 'thievul' },
      { key: 'gossifleur', species: 'gossifleur' },
      { key: 'eldegoss', species: 'eldegoss' },
      { key: 'wooloo', species: 'wooloo' },
      { key: 'dubwool', species: 'dubwool' },
      { key: 'chewtle', species: 'chewtle' },
      { key: 'drednaw', species: 'drednaw' },
      {
        key: 'drednawgmax',
        species: 'drednaw-gmax'
      },
      { key: 'yamper', species: 'yamper' },
      { key: 'boltund', species: 'boltund' },
      { key: 'rolycoly', species: 'rolycoly' },
      { key: 'carkol', species: 'carkol' },
      { key: 'coalossal', species: 'coalossal' },
      {
        key: 'coalossalgmax',
        species: 'coalossal-gmax'
      },
      { key: 'applin', species: 'applin' },
      { key: 'flapple', species: 'flapple' },
      {
        key: 'flapplegmax',
        species: 'flapple-gmax'
      },
      { key: 'appletun', species: 'appletun' },
      {
        key: 'appletungmax',
        species: 'appletun-gmax'
      },
      { key: 'silicobra', species: 'silicobra' },
      { key: 'sandaconda', species: 'sandaconda' },
      {
        key: 'sandacondagmax',
        species: 'sandaconda-gmax'
      },
      { key: 'cramorant', species: 'cramorant' },
      {
        key: 'cramorantgulping',
        species: 'Cramorant-Gulping'
      },
      {
        key: 'cramorantgorging',
        species: 'Cramorant-Gorging'
      },
      { key: 'arrokuda', species: 'arrokuda' },
      {
        key: 'barraskewda',
        species: 'barraskewda'
      },
      { key: 'toxel', species: 'toxel' },
      { key: 'toxtricity', species: 'toxtricity' },
      {
        key: 'toxtricitylowkey',
        species: 'toxtricity-low-key'
      },
      {
        key: 'toxtricitygmax',
        species: 'toxtricity-gmax'
      },
      {
        key: 'toxtricitylowkeygmax',
        species: 'toxtricity-low-key-gmax'
      },
      { key: 'sizzlipede', species: 'sizzlipede' },
      {
        key: 'centiskorch',
        species: 'centiskorch'
      },
      {
        key: 'centiskorchgmax',
        species: 'centiskorch-gmax'
      },
      { key: 'clobbopus', species: 'clobbopus' },
      { key: 'grapploct', species: 'grapploct' },
      { key: 'sinistea', species: 'sinistea' },
      {
        key: 'sinisteaantique',
        species: 'sinistea-antique'
      },
      {
        key: 'polteageist',
        species: 'polteageist'
      },
      {
        key: 'polteageistantique',
        species: 'polteageist-antique'
      },
      { key: 'hatenna', species: 'hatenna' },
      { key: 'hattrem', species: 'hattrem' },
      { key: 'hatterene', species: 'hatterene' },
      {
        key: 'hatterenegmax',
        species: 'hatterene-gmax'
      },
      { key: 'impidimp', species: 'impidimp' },
      { key: 'morgrem', species: 'morgrem' },
      { key: 'grimmsnarl', species: 'grimmsnarl' },
      {
        key: 'grimmsnarlgmax',
        species: 'grimmsnarl-gmax'
      },
      { key: 'obstagoon', species: 'obstagoon' },
      { key: 'perrserker', species: 'perrserker' },
      { key: 'cursola', species: 'cursola' },
      { key: 'sirfetchd', species: "sirfetch'd" },
      { key: 'mrrime', species: 'Mr. Rime' },
      { key: 'runerigus', species: 'runerigus' },
      { key: 'milcery', species: 'milcery' },
      { key: 'alcremie', species: 'alcremie' },
      {
        key: 'alcremiegmax',
        species: 'alcremie-gmax'
      },
      { key: 'falinks', species: 'falinks' },
      { key: 'pincurchin', species: 'pincurchin' },
      { key: 'snom', species: 'snom' },
      { key: 'frosmoth', species: 'frosmoth' },
      {
        key: 'stonjourner',
        species: 'stonjourner'
      },
      { key: 'eiscue', species: 'eiscue' },
      {
        key: 'eiscuenoice',
        species: 'eiscue-noice'
      },
      { key: 'indeedee', species: 'indeedee' },
      { key: 'indeedeef', species: 'indeedee-f' },
      { key: 'morpeko', species: 'morpeko' },
      {
        key: 'morpekohangry',
        species: 'morpeko-hangry'
      },
      { key: 'cufant', species: 'cufant' },
      { key: 'copperajah', species: 'copperajah' },
      {
        key: 'copperajahgmax',
        species: 'copperajah-gmax'
      },
      { key: 'dracozolt', species: 'dracozolt' },
      { key: 'arctozolt', species: 'arctozolt' },
      { key: 'dracovish', species: 'dracovish' },
      { key: 'arctovish', species: 'arctovish' },
      { key: 'duraludon', species: 'duraludon' },
      {
        key: 'duraludongmax',
        species: 'duraludon-gmax'
      },
      { key: 'dreepy', species: 'dreepy' },
      { key: 'drakloak', species: 'drakloak' },
      { key: 'dragapult', species: 'dragapult' },
      { key: 'zacian', species: 'zacian' },
      {
        key: 'zaciancrowned',
        species: 'zacian-crowned'
      },
      { key: 'zamazenta', species: 'zamazenta' },
      {
        key: 'zamazentacrowned',
        species: 'zamazenta-crowned'
      },
      { key: 'eternatus', species: 'eternatus' },
      {
        key: 'eternatuseternamax',
        species: 'eternatus-eternamax'
      },
      { key: 'kubfu', species: 'kubfu' },
      { key: 'urshifu', species: 'urshifu' },
      {
        key: 'urshifurapidstrike',
        species: 'urshifu-rapid-strike'
      },
      {
        key: 'urshifugmax',
        species: 'urshifu-gmax'
      },
      {
        key: 'urshifurapidstrikegmax',
        species: 'urshifu-rapid-strike-gmax'
      },
      { key: 'zarude', species: 'zarude' },
      {
        key: 'zarudedada',
        species: 'zarude-dada'
      },
      { key: 'regieleki', species: 'regieleki' },
      { key: 'regidrago', species: 'regidrago' },
      { key: 'glastrier', species: 'glastrier' },
      { key: 'spectrier', species: 'spectrier' },
      { key: 'calyrex', species: 'calyrex' },
      {
        key: 'calyrexice',
        species: 'calyrex-ice'
      },
      {
        key: 'calyrexshadow',
        species: 'calyrex-shadow'
      },
      { key: 'wyrdeer', species: 'wyrdeer' },
      { key: 'kleavor', species: 'kleavor' },
      { key: 'ursaluna', species: 'ursaluna' },
      {
        key: 'ursalunabloodmoon',
        species: 'ursaluna-bloodmoon'
      },
      {
        key: 'basculegion',
        species: 'basculegion'
      },
      {
        key: 'basculegionf',
        species: 'basculegion-f'
      },
      { key: 'sneasler', species: 'sneasler' },
      { key: 'overqwil', species: 'overqwil' },
      { key: 'enamorus', species: 'enamorus' },
      {
        key: 'enamorustherian',
        species: 'enamorus-therian'
      },
      { key: 'sprigatito', species: 'sprigatito' },
      { key: 'floragato', species: 'floragato' },
      {
        key: 'meowscarada',
        species: 'meowscarada'
      },
      { key: 'fuecoco', species: 'fuecoco' },
      { key: 'crocalor', species: 'crocalor' },
      { key: 'skeledirge', species: 'skeledirge' },
      { key: 'quaxly', species: 'quaxly' },
      { key: 'quaxwell', species: 'quaxwell' },
      { key: 'quaquaval', species: 'quaquaval' },
      { key: 'lechonk', species: 'lechonk' },
      { key: 'oinkologne', species: 'oinkologne' },
      {
        key: 'oinkolognef',
        species: 'oinkolognef'
      },
      { key: 'tarountula', species: 'tarountula' },
      { key: 'spidops', species: 'spidops' },
      { key: 'nymble', species: 'nymble' },
      { key: 'lokix', species: 'lokix' },
      { key: 'pawmi', species: 'pawmi' },
      { key: 'pawmo', species: 'pawmo' },
      { key: 'pawmot', species: 'pawmot' },
      { key: 'tandemaus', species: 'tandemaus' },
      { key: 'maushold', species: 'maushold' },
      {
        key: 'mausholdfour',
        species: 'mausholdfour'
      },
      { key: 'fidough', species: 'fidough' },
      { key: 'dachsbun', species: 'dachsbun' },
      { key: 'smoliv', species: 'smoliv' },
      { key: 'dolliv', species: 'dolliv' },
      { key: 'arboliva', species: 'arboliva' },
      {
        key: 'squawkabilly',
        species: 'squawkabilly'
      },
      {
        key: 'squawkabillyblue',
        species: 'squawkabillyblue'
      },
      {
        key: 'squawkabillyyellow',
        species: 'squawkabillyyellow'
      },
      {
        key: 'squawkabillywhite',
        species: 'squawkabillywhite'
      },
      { key: 'nacli', species: 'nacli' },
      { key: 'naclstack', species: 'naclstack' },
      { key: 'garganacl', species: 'garganacl' },
      { key: 'charcadet', species: 'charcadet' },
      { key: 'armarouge', species: 'armarouge' },
      { key: 'ceruledge', species: 'ceruledge' },
      { key: 'tadbulb', species: 'tadbulb' },
      { key: 'bellibolt', species: 'bellibolt' },
      { key: 'wattrel', species: 'wattrel' },
      {
        key: 'kilowattrel',
        species: 'kilowattrel'
      },
      { key: 'maschiff', species: 'maschiff' },
      { key: 'mabosstiff', species: 'mabosstiff' },
      { key: 'shroodle', species: 'shroodle' },
      { key: 'grafaiai', species: 'grafaiai' },
      { key: 'bramblin', species: 'bramblin' },
      {
        key: 'brambleghast',
        species: 'brambleghast'
      },
      { key: 'toedscool', species: 'toedscool' },
      { key: 'toedscruel', species: 'toedscruel' },
      { key: 'klawf', species: 'klawf' },
      { key: 'capsakid', species: 'capsakid' },
      { key: 'scovillain', species: 'scovillain' },
      { key: 'rellor', species: 'rellor' },
      { key: 'rabsca', species: 'rabsca' },
      { key: 'flittle', species: 'flittle' },
      { key: 'espathra', species: 'espathra' },
      { key: 'tinkatink', species: 'tinkatink' },
      { key: 'tinkatuff', species: 'tinkatuff' },
      { key: 'tinkaton', species: 'tinkaton' },
      { key: 'wiglett', species: 'wiglett' },
      { key: 'wugtrio', species: 'wugtrio' },
      { key: 'bombirdier', species: 'bombirdier' },
      { key: 'finizen', species: 'finizen' },
      { key: 'palafin', species: 'palafin' },
      {
        key: 'palafinhero',
        species: 'palafin-hero'
      },
      { key: 'varoom', species: 'varoom' },
      { key: 'revavroom', species: 'revavroom' },
      { key: 'cyclizar', species: 'cyclizar' },
      { key: 'orthworm', species: 'orthworm' },
      { key: 'glimmet', species: 'glimmet' },
      { key: 'glimmora', species: 'glimmora' },
      { key: 'greavard', species: 'greavard' },
      { key: 'houndstone', species: 'houndstone' },
      { key: 'flamigo', species: 'flamigo' },
      { key: 'cetoddle', species: 'cetoddle' },
      { key: 'cetitan', species: 'cetitan' },
      { key: 'veluza', species: 'veluza' },
      { key: 'dondozo', species: 'dondozo' },
      { key: 'tatsugiri', species: 'tatsugiri' },
      { key: 'annihilape', species: 'annihilape' },
      { key: 'clodsire', species: 'clodsire' },
      { key: 'farigiraf', species: 'farigiraf' },
      {
        key: 'dudunsparce',
        species: 'dudunsparce'
      },
      {
        key: 'dudunsparcethreesegment',
        species: 'dudunsparcethreesegment'
      },
      { key: 'kingambit', species: 'kingambit' },
      { key: 'greattusk', species: 'Great Tusk' },
      {
        key: 'screamtail',
        species: 'Scream Tail'
      },
      {
        key: 'brutebonnet',
        species: 'Brute Bonnet'
      },
      {
        key: 'fluttermane',
        species: 'Flutter Mane'
      },
      {
        key: 'slitherwing',
        species: 'Slither Wing'
      },
      {
        key: 'sandyshocks',
        species: 'Sandy Shocks'
      },
      {
        key: 'irontreads',
        species: 'Iron Treads'
      },
      {
        key: 'ironbundle',
        species: 'Iron Bundle'
      },
      { key: 'ironhands', species: 'Iron Hands' },
      {
        key: 'ironjugulis',
        species: 'Iron Jugulis'
      },
      { key: 'ironmoth', species: 'Iron Moth' },
      {
        key: 'ironthorns',
        species: 'Iron Thorns'
      },
      { key: 'frigibax', species: 'frigibax' },
      { key: 'arctibax', species: 'arctibax' },
      { key: 'baxcalibur', species: 'baxcalibur' },
      { key: 'gimmighoul', species: 'gimmighoul' },
      {
        key: 'gimmighoulroaming',
        species: 'gimmighoulroaming'
      },
      { key: 'gholdengo', species: 'gholdengo' },
      { key: 'wochien', species: 'Wo-Chien' },
      { key: 'chienpao', species: 'Chien-Pao' },
      { key: 'tinglu', species: 'Ting-Lu' },
      { key: 'chiyu', species: 'Chi-Yu' },
      {
        key: 'roaringmoon',
        species: 'Roaring Moon'
      },
      {
        key: 'ironvaliant',
        species: 'Iron Valiant'
      },
      { key: 'koraidon', species: 'koraidon' },
      { key: 'miraidon', species: 'miraidon' },
      {
        key: 'walkingwake',
        species: 'Walking Wake'
      },
      {
        key: 'ironleaves',
        species: 'Iron Leaves'
      },
      { key: 'dipplin', species: 'dipplin' },
      {
        key: 'poltchageist',
        species: 'poltchageist'
      },
      {
        key: 'poltchageistartisan',
        species: 'poltchageist-artisan'
      },
      { key: 'sinistcha', species: 'sinistcha' },
      {
        key: 'sinistchamasterpiece',
        species: 'sinistcha-masterpiece'
      },
      { key: 'okidogi', species: 'okidogi' },
      { key: 'munkidori', species: 'munkidori' },
      {
        key: 'fezandipiti',
        species: 'fezandipiti'
      },
      { key: 'ogerpon', species: 'ogerpon' },
      {
        key: 'ogerponcornerstone',
        species: 'ogerpon-cornerstone'
      },
      {
        key: 'ogerponcornerstonetera',
        species: 'ogerpon-cornerstonetera'
      },
      {
        key: 'ogerponhearthflame',
        species: 'ogerpon-hearthflame'
      },
      {
        key: 'ogerponhearthflametera',
        species: 'ogerpon-hearthflametera'
      },
      {
        key: 'ogerponwellspring',
        species: 'ogerpon-wellspring'
      },
      {
        key: 'ogerponwellspringtera',
        species: 'ogerpon-wellspringtera'
      },
      {
        key: 'ogerpontealtera',
        species: 'ogerpon-tealtera'
      },
      { key: 'archaludon', species: 'archaludon' },
      { key: 'hydrapple', species: 'hydrapple' },
      {
        key: 'gougingfire',
        species: 'Gouging Fire'
      },
      {
        key: 'ragingbolt',
        species: 'Raging Bolt'
      },
      {
        key: 'ironboulder',
        species: 'Iron Boulder'
      },
      { key: 'ironcrown', species: 'Iron Crown' },
      { key: 'terapagos', species: 'terapagos' },
      {
        key: 'terapagosterastal',
        species: 'terapagos-terastal'
      },
      {
        key: 'terapagosstellar',
        species: 'terapagos-stellar'
      },
      {
        key: 'pecharunt',
        species: 'pecharunt'
      }
    ]);
  });
});
