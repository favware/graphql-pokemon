const TOTITLECASE = /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g;
const COMMON_SYMBOLS = /[$-/:-?{-~!"^_`[\] ]/g;

export default class Util {
  /**
   * Converts a string to Title Case
   * @since 1.0.0
   * @param str The string to title case
   */
  public static toTitleCase(str: string): string {
    return str.replace(TOTITLECASE, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  /**
   * Converts a string to Title_Snake_Case
   * @since 1.0.0
   * @param str The string to replace to title snake case
   */
  public static toTitleSnakeCase(str: string): string {
    return Util.replaceSymbols(Util.toTitleCase(str), '_');
  }

  /**
   * Converts a string to lower-hypen-case
   * @since 1.0.0
   * @param str The string to replace to lower-hypen-case
   */
  public static toLowerHyphenCase(str: string): string {
    return Util.replaceSymbols(str, '-').toLowerCase();
  }

  /**
   * Converts a string to singlewordlowercase
   * @since 1.0.0
   * @param str The string to replace to lowercase
   */
  public static toLowerSingleWordCase(str: string): string {
    return Util.replaceSymbols(str, '').toLowerCase();
  }

  /**
   * Removes common symbols and spaces from any string replacing it with something else
   * @since 1.0.0
   * @param str The string to get symbols removed from
   * @param replacement The replacement to fill instead of the symbols
   */
  private static replaceSymbols(str: string, replacement: string): string {
    return str.replace(COMMON_SYMBOLS, replacement);
  }
}