import type { Cache } from '@klasa/cache';
import Fuse from 'fuse.js/dist/fuse.basic.min.js';

export default class FuzzySearch<K extends string, V> {
  private readonly CollectionArray: ReadonlyArray<V>;
  private readonly FuseOptions?: Fuse.IFuseOptions<V>;

  constructor(collection: Cache<K, V>, keys: string[], options?: Fuse.IFuseOptions<V>) {
    this.CollectionArray = [...collection.values()];
    this.FuseOptions = {
      ...options,
      keys
    };
  }

  public runFuzzy(query: string): Fuse.FuseResult<V>[] {
    const locquery = query.toLowerCase();

    const fuzzyFuse = new Fuse(this.CollectionArray, this.FuseOptions);

    return fuzzyFuse.search(locquery);
  }
}
