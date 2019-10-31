/* eslint-disable */
// import { Router } from 'express';
// import FuzzySearch from '../utils/FuzzySearch';
// import { pokedex } from '../assets/pokedex';
// import { pokedexAliases } from '../assets/aliases';
// import { ParamsDictionary } from 'express-serve-static-core';
// import { Pokemon } from '../utils/typings/pokemon';
// import { sentencecase, getPokemonForSpeciesOrId } from '../utils/util';

// const router = Router();

// router.get('/', (req, res) => {
//   const queryParams = req.query as DexRequestByQuerystring;

//   if (!queryParams.q && !queryParams.pokemon) {
//     return res.status(BAD_REQUEST).json({
//       error: 'Invalid queryparameters',
//       message: 'This endpoint requires either a queryparam of "q" or "pokemon" specifying the species of the pokemon name to find',
//     });
//   }

//   let pokemon = queryParams.q || queryParams.pokemon;
//   if (pokemon.split(' ')[0] === 'mega') {
//     pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-mega`;
//   }

//   const fuzzyPokemon = new FuzzySearch(pokedex, [ 'num', 'species' ], { threshold: 0.3 });

//   let fuzzyResult = fuzzyPokemon.run(pokemon);

//   if (!fuzzyResult.length) {
//     const fuzzyAliasResult = new FuzzySearch(pokedexAliases, [ 'alias', 'name' ], { threshold: 0.4 }).run(pokemon);

//     if (fuzzyAliasResult.length) {
//       fuzzyResult = fuzzyPokemon.run(fuzzyAliasResult[0].name);
//     }
//   }

//   if (!fuzzyResult.length) {
//     return res.status(NOT_FOUND).json({
//       error: 'No pokemon found',
//       message: 'No pokemon was found for the given name',
//     });
//   }

//   return res.send(fuzzyResult);
// });

// router.get<DexRequestByParam>('/:speciesOrId', (req, res) => {
//   const pokemon = req.params.speciesOrId;
//   const pokemonData = getPokemonForSpeciesOrId(pokemon);

//   if (!pokemonData) {
//     return res.status(NOT_FOUND).json({
//       error: 'No pokemon found',
//       message: 'No pokemon was found for the given species name',
//     });
//   }

//   return res.send(pokemonData);
// });

// router.get<DexRequestByParam>('/:speciesOrId/details', async (req, res) => {
//   const pokemon = req.params.speciesOrId;
//   const pokemonData = getPokemonForSpeciesOrId(pokemon);

//   if (!pokemonData) {
//     return res.status(NOT_FOUND).json({
//       error: 'No pokemon found',
//       message: 'No pokemon was found for the given species name',
//     });
//   }

//   const [ flavorsImport, tiersImport ] = await Promise.all([
//     import('../assets/flavorText.json'),
//     import('../assets/formats.json')
//   ]);

//   const {default: flavors} = flavorsImport as { default: Record<string, Pokemon.FlavorText[]>};
//   const {default: tiers} = tiersImport as { default: Record<string, string>};

//   const smogonTier = tiers[pokemon.replace(/([-% ])/gm, '')] || 'Undiscovered';

//   const pokemonDetails = {
//     abilities: '',
//     evos: `**${sentencecase(pokemon)}**`,
//     flavors: '*PokéDex data not found for this Pokémon*',
//     genders: '',
//     sprite: '',
//     tier: smogonTier,
//   };

//   return res.send(pokemonDetails);
// });

// export default router;

// interface DexRequestByQuerystring {
//   q: string;
//   pokemon?: string;
// }

// interface DexRequestByParam extends ParamsDictionary {
//   speciesOrId: string;
// }