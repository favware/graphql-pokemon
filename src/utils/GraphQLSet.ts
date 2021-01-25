export interface GraphQLSetConstructor {
  new (): GraphQLSet<unknown>;
  new <V>(entries?: ReadonlyArray<V> | null): GraphQLSet<V>;
  new <V>(iterable: Iterable<V>): GraphQLSet<V>;
  readonly prototype: GraphQLSet<unknown>;
  readonly [Symbol.species]: GraphQLSetConstructor;
}

/**
 * A Set with additional utility methods. This is used throughout Graphql-Pokemon rather than Arrays for anything that has
 * needs to have unique entries, for significantly improved performance and ease-of-use.
 * @extends {Set}
 * @property size - The amount of elements in this GraphQLSet.
 */
export default class GraphQLSet<V> extends Set<V> {
  public ['constructor']: typeof GraphQLSet;

  public constructor(entries?: ReadonlyArray<V> | null) {
    super(entries);
  }

  /**
   * Identical to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * but returns a GraphQLSet instead of an Array.
   * @param fn The function to test with (should return boolean)
   * @param [thisArg] Value to use as `this` when executing function
   * @returns {GraphQLSet}
   * @example graphqlset.filter((v) => v.startsWith('parentKey'));
   */
  public filter(fn: (value: V, set: this) => boolean): this;
  public filter<R>(fn: (value: V, set: this) => boolean): R;
  public filter<T>(fn: (this: T, value: V, set: this) => boolean, thisArg: T): this;
  public filter<T, R>(fn: (this: T, value: V, set: this) => boolean, thisArg: T): R;
  public filter(fn: (value: V, set: this) => boolean, thisArg?: unknown): this {
    if (typeof thisArg !== 'undefined') fn = fn.bind(thisArg);
    const results = new this.constructor[Symbol.species]<V>() as this;

    for (const val of this) {
      if (fn(val, this)) results.add(val);
    }

    return results;
  }

  public static readonly default: typeof GraphQLSet = GraphQLSet;
}
