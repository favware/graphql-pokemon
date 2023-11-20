import { toTitleCase } from '@sapphire/utilities';
const COMMON_SYMBOLS = /[$%&'()*+,./:'<>=?{}}~!"^_`[\] .'-]/g;
const COMMON_SYMBOLS_WITHOUT_HYPHEN = /[$%&'()*+,./:'<>=?{}}~!"^_`[\] .']/g;

/** Converts a string to Title_Snake_Case without converting hyphens */
export function toTitleSnakeCaseWithoutHyphenConvert(str: string): string {
  return replaceSymbols(toTitleCase(str), '_', COMMON_SYMBOLS_WITHOUT_HYPHEN);
}

/** Converts a string to lower-hyphen-case */
export function toLowerHyphenCase(str: string): string {
  return replaceSymbols(str, '-').toLowerCase();
}

/** Converts a string to `singlewordlowercase` */
export function toLowerSingleWordCase<T extends string>(str: T): T {
  return replaceSymbols(str, '').toLowerCase() as T;
}

/** Parses Z-Crystal data into proper names */
export function parseZCrystal(str: string | undefined): string | undefined {
  if (str === undefined) return str;

  return `${toTitleCase(str.substr(0, str.length - 1))} Z`;
}

/** Lowercases string and trims spaces */
export function preParseInput(str: string): string {
  return str.toLowerCase().trim();
}

/**
 * Removes common symbols and spaces from any string replacing it with something else
 * @param str The string to get symbols removed from
 * @param replacement The replacement to fill instead of the symbols
 */
function replaceSymbols<T extends string>(
  str: T,
  replacement: string,
  symbols: typeof COMMON_SYMBOLS | typeof COMMON_SYMBOLS_WITHOUT_HYPHEN = COMMON_SYMBOLS
): T {
  return str.replace(symbols, replacement) as T;
}
