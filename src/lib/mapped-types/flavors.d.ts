declare module '#jsonAssets/flavorText.json' {
  import type { PokemonTypes } from '#assets/pokemon-source';
  const flavors: Record<string, PokemonTypes.FlavorText[]>;

  export default flavors;
}
