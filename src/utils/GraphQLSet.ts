export interface GraphQLSetConstructor {
  new (): GraphQLSet<unknown>;

  new <V>(entries?: ReadonlyArray<V> | null): GraphQLSet<V>;

  new <V>(iterable: Iterable<V>): GraphQLSet<V>;

  readonly [Symbol.species]: GraphQLSetConstructor;

  readonly prototype: GraphQLSet<unknown>;
}

/**
 * A Set with additional utility methods. This is used throughout Graphql-Pokemon rather than Arrays for anything that has
 * needs to have unique entries, for significantly improved performance and ease-of-use.
 * @extends {Set}
 * @property size - The amount of elements in this GraphQLSet.
 */
export class GraphQLSet<V> extends Set<V> {
  public ['constructor']!: typeof GraphQLSet;

  public constructor(entries?: ReadonlyArray<V> | null) {
    super(entries);
  }

  /**
   * Similar to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * but returns a GraphQLSet instead of an Array.
   * Also instead of receiving a callback predicate this will use {@link String.startsWith}.
   *
   * If the value starts with the given {@link checkString} then that {@link checkString}
   * is removed from the start of the value and the remaining value is added to the result.
   *
   * @param checkString The string that will be used in the `.startsWith` check
   * @example graphqlSet.filter('parentKey.');
   */
  public filterStartsWith<R extends GraphQLSet<unknown>>(checkString: string): R {
    const results = new this.constructor[Symbol.species]<V>() as R;

    for (const val of this) {
      if (typeof val === 'string' && val.startsWith(checkString)) {
        results.add(val.replace(checkString, '') as unknown as V);
      }
    }

    return results;
  }

  public static readonly default: typeof GraphQLSet = GraphQLSet;
}
