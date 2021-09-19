import type { BaseFuzzyArgs } from '#arguments/FuzzyArgs/Base';
import { FuzzyLearnsetArgs } from '#arguments/FuzzyArgs/FuzzyLearnsetArgs';
import { LearnsetArgs } from '#arguments/LearnsetArgs';
import type { BasePokemonArgs } from '#arguments/PokemonArgs/Base';
import { DexService } from '#services/DexService';
import { LearnsetService } from '#services/LearnsetService';
import { MoveService } from '#services/MoveService';
import { Learnset } from '#structures/Learnset';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { toLowerSingleWordCase } from '#utils/util';
import { Args, Query, Resolver } from 'type-graphql';
import type { NonFunctionKeys } from 'utility-types';

@Resolver(Learnset)
export class LearnsetResolver {
  @Query(() => Learnset, {
    description: [
      'Gets the learnsets for a given Pokémon and move.',
      'Multiple moves are possible by putting them in an array: [move1, move2].',
      'You can also apply a generation filter (only results for the given generation will be returned) with the generation argument'
    ].join('')
  })
  public getLearnset(@Args(() => LearnsetArgs) args: LearnsetArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Learnset>): Learnset {
    const graphqlObject = LearnsetService.mapPokemonAndMovesToLearnsetGraphQL(args, requestedFields);

    if (graphqlObject === undefined) {
      throw new Error(
        `Failed to get learnsets for the combination of Pokémon "${args.pokemon}", and move(s) "${args.moves.join(', ')}" ${
          args.generation ? `with generation filter set to ${args.generation}` : ''
        }`
      );
    }

    return graphqlObject;
  }

  @Query(() => Learnset, {
    description: [
      'Gets the learnset for a given Pokémon and move.',
      'A fuzzy search is performed to find a matching Pokémon and move',
      'Multiple moves are possible by putting them in an array: [move1, move2].',
      'You can also apply a generation filter (only results for the given generation will be returned) with the generation argument'
    ].join('')
  })
  public getFuzzyLearnset(
    @Args(() => FuzzyLearnsetArgs) { pokemon, moves, generation }: FuzzyLearnsetArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof Learnset>
  ): Learnset {
    // Try and get an exactly matching Pokémon
    const pokemonEntry = DexService.getBySpecies({ pokemon, ...basePokemonArgs });

    // If it not an exact move then perform a fuzzy search
    if (!pokemonEntry) {
      const fuzzyEntry = DexService.findByFuzzy({ pokemon, ...basePokemonArgs, ...baseFuzzyArgs });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
      }
      pokemon = toLowerSingleWordCase(fuzzyEntry[0].item.species);
    }

    for (const [index, move] of moves.entries()) {
      // Try and get an exactly matching move
      const moveEntry = MoveService.getByMoveName({ move });

      // If it not an exact move then perform a fuzzy search
      if (!moveEntry) {
        const fuzzyEntry = MoveService.findByFuzzy({ move, ...baseFuzzyArgs });

        if (fuzzyEntry === undefined || !fuzzyEntry.length) {
          throw new Error(`Failed to get data for move: ${move}`);
        }

        // And overwrite the move at  this index with the proper entry
        moves[index] = toLowerSingleWordCase(fuzzyEntry[0].item.name);
      }
    }

    return this.getLearnset({ pokemon, moves, generation }, requestedFields);
  }
}

const baseFuzzyArgs: Pick<BaseFuzzyArgs, NonFunctionKeys<BaseFuzzyArgs>> = {
  offset: 0,
  take: 1,
  reverse: false
};

const basePokemonArgs: Pick<BasePokemonArgs, NonFunctionKeys<BasePokemonArgs>> = {
  offsetFlavorTexts: 0,
  reverseFlavorTexts: false,
  takeFlavorTexts: 1
};

Object.freeze(baseFuzzyArgs);
Object.freeze(basePokemonArgs);
