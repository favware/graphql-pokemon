import Collection from '@discordjs/collection';
import Fuse from 'fuse.js/dist/fuse.basic.min.js';

export default class FuzzySearch<K extends string, V> {
  private readonly collectionArray: ReadonlyArray<V>;
  private readonly fuseOptions?: Fuse.IFuseOptions<V>;

  constructor(collection: Collection<K, V>, keys: string[], options?: Fuse.IFuseOptions<V>) {
    this.collectionArray = [...collection.values()];
    this.fuseOptions = {
      ...options,
      keys
    };
  }

  public runFuzzy(query: string) {
    const locquery = query.toLowerCase();

    const fuzzyFuse = new Fuse(this.collectionArray, this.fuseOptions);

    return fuzzyFuse.search(locquery);
  }
}
