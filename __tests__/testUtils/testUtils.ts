import { graphql, GraphQLSchema } from 'graphql';
import { buildGqlSchema } from '../../src/server';
import Maybe from 'graphql/tsutils/Maybe';

interface GCallOptions {
  source: string;
  variableValues?: Maybe<Record<string, unknown>>;
}

let schema: GraphQLSchema;

export const gCall = async ({ source, variableValues }: GCallOptions) => {
  if (!schema) schema = buildGqlSchema();

  return graphql({
    schema,
    source,
    variableValues
  });
};

export const formatResponse = (data: unknown) => JSON.parse(JSON.stringify(data));
