import type { FlavorsModule } from '#utils/flavorsModule.js';
import { green, yellow } from 'colorette';
import { log } from '../append-to-log.js';
import type { ParsedPokemon } from '../constants.js';
import { getTextContent } from '../get-text-content.js';

export async function doubleGameUpdater(
  text: string | undefined,
  flavorTexts: FlavorsModule,
  pokemon: ParsedPokemon,
  game1: string,
  game2: string,
  logPrefix: string
): Promise<boolean> {
  const regexGame12 = new RegExp(`^(?:{{Dex/Entry2\\|v=${game1}\\|v2=${game2}\\|)`);
  const regexGame21 = new RegExp(`^(?:{{Dex/Entry2\\|v=${game2}\\|v2=${game1}\\|)`);

  const textSplitByNewLine = text?.split('\n');
  const game1Based = getTextContent(textSplitByNewLine?.find((e) => regexGame12.test(e)));
  const game2Based = getTextContent(textSplitByNewLine?.find((e) => regexGame21.test(e)));

  const gameData = game1Based || game2Based;
  await log(`${logPrefix}Retrieved ${game1}-${game2} Combined data, it is ${gameData ? 'defined' : 'not defined'}`, yellow, false, true);

  if (gameData) {
    if (flavorTexts[pokemon.number]) {
      const game1FlavorText = flavorTexts[pokemon.number].find((a) => a.version_id === game1);
      if (game1FlavorText) {
        game1FlavorText.flavor_text = gameData;
      } else {
        flavorTexts[pokemon.number].push({
          version_id: game1,
          flavor_text: gameData
        });
      }

      const game2FlavorText = flavorTexts[pokemon.number].find((a) => a.version_id === game2);
      if (game2FlavorText) {
        game2FlavorText.flavor_text = gameData;
      } else {
        flavorTexts[pokemon.number].push({
          version_id: game2,
          flavor_text: gameData
        });
      }
    } else {
      flavorTexts[pokemon.number] = [
        {
          version_id: game1,
          flavor_text: gameData
        },
        {
          version_id: game2,
          flavor_text: gameData
        }
      ];
    }
    await log(`${logPrefix}Stored new ${game1}-${game2} Combined entries in flavor texts`, green, false, true);
  }

  return Boolean(gameData);
}
