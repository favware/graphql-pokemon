import Collection from '@discordjs/collection';
import Fuse, { FuseOptions } from 'fuse.js';

export default class FuzzySearch<K extends string, V> {
  private readonly collectionArray: ReadonlyArray<V>;
  private readonly fuseOptions?: FuseOptions<V>;

  constructor(collection: Collection<K, V>, keys: (keyof V)[], options?: FuseOptions<V>) {
    this.collectionArray = [ ...collection.values() ];
    this.fuseOptions = {
      ...options,
      keys,
    };
  }

  public run(query: string) {
    const locquery = query.toLowerCase();

    const fuzzyFuse = new Fuse(this.collectionArray, this.fuseOptions);

    return fuzzyFuse.search(locquery);
  }
}