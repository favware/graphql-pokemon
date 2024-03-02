export function getPokemonGenerationForDexNumber(dexNumber: number) {
  if (dexNumber >= 0 && dexNumber <= 151) return 1;
  if (dexNumber >= 152 && dexNumber <= 251) return 2;
  if (dexNumber >= 252 && dexNumber <= 386) return 3;
  if (dexNumber >= 387 && dexNumber <= 493) return 4;
  if (dexNumber >= 494 && dexNumber <= 649) return 5;
  if (dexNumber >= 650 && dexNumber <= 721) return 6;
  if (dexNumber >= 722 && dexNumber <= 809) return 7;
  if (dexNumber >= 810 && dexNumber <= 905) return 8;
  if (dexNumber >= 906 && dexNumber <= 1025) return 9;

  return -1;
}

export function getModulePathForGeneration(generation: number) {
  switch (generation) {
    case 1:
      return '#dexdata/gen1';
    case 2:
      return '#dexdata/gen2';
    case 3:
      return '#dexdata/gen3';
    case 4:
      return '#dexdata/gen4';
    case 5:
      return '#dexdata/gen5';
    case 6:
      return '#dexdata/gen6';
    case 7:
      return '#dexdata/gen7';
    case 8:
      return '#dexdata/gen8';
    case 9:
      return '#dexdata/gen9';
    default:
      throw new Error(`Invalid generation: ${generation}`);
  }
}
