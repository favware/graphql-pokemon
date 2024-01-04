/**
 * Parses a Bulbapedia-like URL to be properly embeddable on Discord
 *
 * What this essentially does is replace spaces with underscores
 * and parentheses with their URL-encoded counterparts
 *
 * @param url - The URL to be parsed.
 * @returns The parsed URL with spaces replaced by underscores and parentheses encoded.
 *
 * @example
 * ```typescript
 * const url = 'https://bulbapedia.org/wiki/Pikachu_(Pokémon)';
 * const parsedUrl = parseBulbapediaURL(url);
 * console.log(parsedUrl);
 * // Output: 'https://bulbapedia.org/wiki/Pikachu_%28Pokémon%29'
 * ```
 */
export function parseBulbapediaURL(url: string) {
  return url.replace(/[ ]/g, '_').replace(/\(/g, '%28').replace(/\)/g, '%29');
}
