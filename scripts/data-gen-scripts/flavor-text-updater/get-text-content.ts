export function getTextContent(bit1: string) {
  return bit1
    ?.split(/\|[a-z]+=/g)
    ?.at(-1)
    .replace(/}}$/, '')
    .replace(/{{p\|([a-zA-Z]+)}}/g, '$1')
    .replace(/{{p\|[a-zA-Z]+\|(evolve)}}/g, '$1')
    .replace(/{{m\|([a-zA-Z]+)}}/g, '$1')
    .replace(/{{tt\|([-a-zA-Z0-9, ]+)\|[-a-zA-Z0-9,\/ ]+}}/g, '$1')
    .replace(/{{a\|[-a-zA-Z0-9, ]+\|([-a-zA-Z0-9,\/ ]+)}}/g, '$1')
    .replaceAll('’', "'")
    .replaceAll('“', '"')
    .replaceAll('”', '"')
    .replaceAll('{{tt|*|Unused entry}}', '')
    .replaceAll('[[regional form]]', 'regional form')
    .replaceAll('[[Paldea]]', 'Paldea')
    .replaceAll('[[Kitakami|a new land]]', 'a new land')
    .replaceAll('[[Scarlet Book|an expedition journal]]', 'an expedition journal')
    .replaceAll('[[Mega Evolution|a phenomenon that occurs in a certain region]]', 'a phenomenon that occurs in a certain region')
    .replaceAll('[[Violet Book|certain expedition journal.]]', 'certain expedition journal.')
    .replaceAll('[[Scarlet Book|old expedition journal]]', 'old expedition journal.')
    .replaceAll('[[Violet Book|old book]]', 'old book.');
}
