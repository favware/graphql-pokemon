import { Collection } from '@discordjs/collection';

export class GraphQLCollection<K extends string, V> extends Collection<K, V> {
  private cachedEnumObj!: Record<K, K> | null;

  public enumObject(): Record<K, K> {
    if (!this.cachedEnumObj) {
      const res: Record<K, K> = {} as Record<K, K>;
      for (const key of this.keys()) {
        res[key] = key;
      }

      this.cachedEnumObj = res;
    }

    return this.cachedEnumObj;
  }
}
