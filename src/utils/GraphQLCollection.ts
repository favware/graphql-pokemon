import Collection from '@discordjs/collection';
import Util from '#utils/util';

export default class GraphQLCollection<K extends string, V> extends Collection<K, V> {
  private cachedEnumObj!: Record<K, K> | null;
  private cachedSimplifiedEnumObj!: Record<K, K> | null;

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

  public simplifiedEnumObject(): Record<K, K> {
    if (!this.cachedSimplifiedEnumObj) {
      const res: Record<K, K> = {} as Record<K, K>;
      for (let key of this.keys()) {
        key = Util.toLowerSingleWordCase<K>(key);
        res[key] = key;
      }

      this.cachedSimplifiedEnumObj = res;
    }

    return this.cachedSimplifiedEnumObj;
  }
}
