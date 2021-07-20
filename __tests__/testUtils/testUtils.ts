import { buildGqlSchema } from '#root/server';
import type { Query } from '#test-utils/types/types';
import { graphql, GraphQLSchema } from 'graphql';
import type { Maybe } from 'type-graphql';

export interface DataResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

interface GCallOptions {
  source: string;
  variableValues?: Maybe<Record<string, unknown>>;
}

/**
 * Cached GraphQL schema so it only has to be build once
 */
let schema: GraphQLSchema | null = null;

export const gCall = async ({ source, variableValues }: GCallOptions) => {
  if (schema === null) {
    schema = await buildGqlSchema();
  }

  return graphql({
    schema,
    source,
    variableValues
  });
};

/**
 * Formats the response data so it can be parsed by Jest
 * @param data The data to format
 * @returns Formatted data
 */
export const formatResponse = (data: unknown) => JSON.parse(JSON.stringify(data));

/**
 * Fake GraphQL tag that just returns everything passed in as a single combined string
 * @remark used to trick the GraphQL parser into treating some code as GraphQL parseable data for syntax checking
 * @param gqlData data to pass off as GraphQL code
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function gql(...args: any[]): string {
  return args[0].reduce((acc: string, str: string, idx: number) => {
    acc += str;
    if (Reflect.has(args, idx + 1)) acc += args[idx + 1];
    return acc;
  }, '');
}
