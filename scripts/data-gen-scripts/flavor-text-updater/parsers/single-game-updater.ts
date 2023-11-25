import type { PokemonTypes } from '#assets/pokemon-source';
import { green, yellow } from 'colorette';
import { appendToLog } from '../append-to-log.js';
import type { ParsedPokemon } from '../constants.js';
import { getTextContent } from '../get-text-content.js';

export async function singleGameUpdater(
  text: string | undefined,
  flavorTexts: Record<string, PokemonTypes.FlavorText[]>,
  pokemon: ParsedPokemon,
  game: string
): Promise<boolean> {
  const textSplitByNewLine = text?.split('\n');

  const gameData = getTextContent(textSplitByNewLine?.find((e) => e.startsWith(`{{Dex/Entry1|v=${game}`)));
  const retrievedGameMsg = `Retrieved ${game} data, it is ${gameData ? 'defined' : 'not defined'}`;
  console.log(yellow(retrievedGameMsg));
  await appendToLog(retrievedGameMsg);

  if (gameData) {
    if (flavorTexts[pokemon.number]) {
      const gameFlavorText = flavorTexts[pokemon.number].find((a) => a.version_id === game);
      if (gameFlavorText) {
        gameFlavorText.flavor_text = gameData;
      } else {
        flavorTexts[pokemon.number].push({
          version_id: game,
          flavor_text: gameData
        });
      }
    } else {
      flavorTexts[pokemon.number] = [
        {
          version_id: game,
          flavor_text: gameData
        }
      ];
    }
    const storedGameMsg = `Stored new ${game} Singular entry in flavor texts`;
    console.log(green(storedGameMsg));
    await appendToLog(storedGameMsg);
  }

  return Boolean(gameData);
}
