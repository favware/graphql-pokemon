import type { Collection } from '@discordjs/collection';
import { jaroWinkler } from '@skyra/jaro-winkler';

/**
 * FuzzySearch is a utility class that performs fuzzy search on a collection of items.
 * It allows searching for items based on a query string and returns the most relevant results.
 *
 * @template K - The type of the keys in the collection.
 * @template V - The type of the values in the collection.
 */
export class FuzzySearch<K extends string, V> {
  readonly #collection: Collection<K, V>;
  readonly #accessKeys: (keyof V)[];

  /**
   * Constructs a new instance of the {@link FuzzySearch} class.
   * @param collection The collection to perform fuzzy search on.
   * @param keys The keys of the collection to search on.
   */
  public constructor(collection: Collection<K, V>, keys: (keyof V)[]) {
    this.#collection = collection;
    this.#accessKeys = keys;
  }

  /**
   * Runs a fuzzy search on the collection using the provided query.
   * @param query - The search query.
   * @returns An array of values that match the search query, sorted by similarity.
   */
  public runFuzzy(query: string): V[] {
    const results: [K, V, number][] = [];
    const threshold = 0.3;

    let current: V[keyof V];
    let lowerCaseName: string;
    let similarity: number;
    let almostExacts = 0;

    // Loop over all items in the collection
    for (const [key, value] of this.#collection.entries()) {
      /** Entries of the same pokemon but from different accessKeys */
      const resultsFromAccessKeys: [K, V, number][] = [];

      // Loop over all provided access keys
      for (const accessKey of this.#accessKeys) {
        current = value[accessKey];

        // If the value at the current accessKey is an array then we need to loop over its values
        if (Array.isArray(current)) {
          /** Entries from the same pokemon but from different entries in the array at the current accessKey (i.e. aliases) */
          const resultsFromArray: [K, V, number][] = [];

          // Loop over each value in the array
          for (const arrayEntry of current) {
            lowerCaseName = arrayEntry.toLowerCase();

            // If lowercase result, go next
            if (lowerCaseName === query) {
              similarity = 1;
            } else {
              similarity = jaroWinkler(query, lowerCaseName);
            }

            // If the similarity is bigger than the threshold, skip
            if (similarity < threshold) continue;

            // Push the results
            resultsFromArray.push([key, value, similarity]);

            // Continue earlier
            if (similarity >= 0.9) almostExacts++;
            if (almostExacts === 10) break;
          }

          if (resultsFromArray.length) {
            const sorted = resultsFromArray.sort((a, b) => b[2] - a[2]);

            resultsFromAccessKeys.push(sorted[0]);
          }
        } else if (typeof current === 'string') {
          lowerCaseName = current.toLowerCase();

          // If lowercase result, go next
          if (lowerCaseName === query) {
            similarity = 1;
          } else {
            similarity = jaroWinkler(query, lowerCaseName);
          }

          // If the similarity is bigger than the threshold, skip
          if (similarity < threshold) continue;

          // Push the results
          resultsFromAccessKeys.push([key, value, similarity]);

          // Continue earlier
          if (similarity >= 0.9) almostExacts++;
          if (almostExacts === 10) break;
        }
      }

      if (resultsFromAccessKeys.length) {
        const sorted = resultsFromAccessKeys.sort((a, b) => b[2] - a[2]);

        results.push(sorted[0]);
      }
    }

    if (!results.length) return [];

    const finalSortedResults = results.sort((a, b) => b[2] - a[2]);

    return finalSortedResults.map(([, value]) => value);
  }
}
