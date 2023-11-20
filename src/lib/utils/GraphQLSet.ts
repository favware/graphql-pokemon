import { cast } from '@sapphire/utilities';

/**
 * Represents the constructor for the GraphQLSet class.
 */
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
  public constructor(entries?: ReadonlyArray<V> | null) {
    super(entries);
  }

  /**
   * Similar to
   * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * but returns a GraphQLSet instead of an Array.
   * Also instead of receiving a callback predicate this will use `String.startsWith`.
   *
   * If the value starts with the given {@link checkString}, and {@link removeCheckString} is true,
   * then that {@link checkString} is removed from the start of the value
   * and the remaining value is added to the result.
   *
   * @param checkString The string that will be used in the `.startsWith` check
   * @param removeCheckString Whether the {@link checkString} should be removed from the start of the value
   * @example graphqlSet.filter('parentKey.');
   */
  public filterStartsWith<T>(checkString: `${string}.`, removeCheckString = false): GraphQLSet<T> {
    const results = new GraphQLSet<T>();

    for (const val of this) {
      if (typeof val === 'string' && val.startsWith(checkString)) {
        const resolvedValue = cast<T>(removeCheckString ? val.replace(checkString, '') : val);
        results.add(resolvedValue);
      }
    }

    return results;
  }

  /**
   * Similar to
   * [Set.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has),
   * but checks whether the set that has a value that starts with the given {@link checkString}.
   * This will use `String.startsWith`.
   *
   * @param checkString The string that will be used in the `.startsWith` check
   * @example graphqlSet.hasStartsWith('parentKey.');
   */
  public hasStartsWith(checkString: `${string}.`): boolean {
    for (const val of this) {
      if (typeof val === 'string' && val.startsWith(checkString)) {
        return true;
      }
    }

    return false;
  }
}
