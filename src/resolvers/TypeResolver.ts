import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args, Query, Resolver } from 'type-graphql';
import TypeArgs, { types } from '../arguments/TypeArgs';
import TypeService from '../services/TypeService';
import TypeMatchups from '../structures/TypeMatchups';
import { getRequestedFields } from '../utils/getRequestedFields';
import GraphQLSet from '../utils/GraphQLSet';
import type Pokemon from '../utils/pokemon';

@Resolver(TypeMatchups)
export default class TypeResolver {
  private typeService: TypeService;

  constructor() {
    this.typeService = new TypeService();
  }

  @Query(() => TypeMatchups, { description: 'Gets the type matchup data for the given type or types' })
  getTypeMatchup(
    @Args() { types }: TypeArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof TypeMatchups>
  ): TypeMatchups {
    const entry = this.typeService.findTypeMatchups({ types }, requestedFields);

    if (entry === undefined) {
      throw new Error(`Failed to get type matchups for: ${types.join(', ')}`);
    }

    return entry;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the raw type matchup data for any one given type' })
  getTypeByName(@Arg('type', () => types) type: string): Pokemon.TypeMatchups {
    const typeEntry = this.typeService.findTypeMatchupByName(type);

    if (typeEntry === undefined) {
      throw new Error(`Failed to get type matchup data for: ${type}`);
    }

    return typeEntry;
  }
}
