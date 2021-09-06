const TO_TITLE_CASE = /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g;
const COMMON_SYMBOLS = /[$-/:-?{-~!"^_`[\] .']/g;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Util {
  /** Converts a string to Title Case */
  public static toTitleCase(str: string): string {
    return str.replace(TO_TITLE_CASE, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  /** Converts a string to Title_Snake_Case */
  public static toTitleSnakeCase(str: string): string {
    return Util.replaceSymbols(Util.toTitleCase(str), '_');
  }

  /** Converts a string to lower-hypen-case */
  public static toLowerHyphenCase(str: string): string {
    return Util.replaceSymbols(str, '-').toLowerCase();
  }

  /** Converts a string to `singlewordlowercase */
  public static toLowerSingleWordCase<T extends string>(str: T): T {
    return Util.replaceSymbols(str, '').toLowerCase() as T;
  }

  /** Parses Z-Crystal data into proper names */
  public static parseZCrystal(str: string | undefined): string | undefined {
    if (str === undefined) return str;

    return `${Util.toTitleCase(str.substr(0, str.length - 1))} Z`;
  }

  public static cast<R>(castable: unknown) {
    return castable as R;
  }

  /** Lowercases string and trims spaces */
  public static preParseInput(str: string): string {
    return str.toLowerCase().trim();
  }

  /**
   * Removes common symbols and spaces from any string replacing it with something else
   * @param str The string to get symbols removed from
   * @param replacement The replacement to fill instead of the symbols
   */
  private static replaceSymbols<T extends string>(str: T, replacement: string): T {
    return str.replace(COMMON_SYMBOLS, replacement) as T;
  }
}
