const TO_TITLE_CASE = /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g;
const COMMON_SYMBOLS = /[$-/:-?{-~!"^_`[\] .']/g;

/** Converts a string to Title Case */
export function toTitleCase(str: string): string {
  return str.replace(TO_TITLE_CASE, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/** Converts a string to Title_Snake_Case */
export function toTitleSnakeCase(str: string): string {
  return replaceSymbols(toTitleCase(str), '_');
}

/** Converts a string to lower-hypen-case */
export function toLowerHyphenCase(str: string): string {
  return replaceSymbols(str, '-').toLowerCase();
}

/** Converts a string to `singlewordlowercase */
export function toLowerSingleWordCase<T extends string>(str: T): T {
  return replaceSymbols(str, '').toLowerCase() as T;
}

/** Parses Z-Crystal data into proper names */
export function parseZCrystal(str: string | undefined): string | undefined {
  if (str === undefined) return str;

  return `${toTitleCase(str.substr(0, str.length - 1))} Z`;
}

export function cast<R>(castable: unknown) {
  return castable as R;
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
function replaceSymbols<T extends string>(str: T, replacement: string): T {
  return str.replace(COMMON_SYMBOLS, replacement) as T;
}
