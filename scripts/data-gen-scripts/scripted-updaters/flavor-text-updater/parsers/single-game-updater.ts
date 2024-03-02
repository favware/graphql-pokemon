import type { FlavorsModule } from '#utils/flavorsModule.js';
import { green, yellow } from 'colorette';
import type { ParsedPokemon } from '../../utils/bulbapedia-utils.js';
import { getTextContent } from '../get-text-content.js';
import { log } from '../log-wrapper.js';

export async function singleGameUpdater(
  text: string | undefined,
  flavorTexts: FlavorsModule,
  pokemon: ParsedPokemon,
  game: string,
  logPrefix: string
): Promise<boolean> {
  const regexGame = new RegExp(`^(?:{{Dex/Entry1\\|v=${game}\\|)`);

  const textSplitByNewLine = text?.split('\n');
  const gameData = getTextContent(textSplitByNewLine?.find((e) => regexGame.test(e)));

  await log({
    msg: `${logPrefix}Retrieved ${game} data, it is ${gameData ? 'defined' : 'not defined'}`,
    color: yellow,
    isBold: false,
    isIndent: true
  });

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

    await log({ msg: `${logPrefix}Stored new ${game} Singular entry in flavor texts`, color: green, isBold: false, isIndent: true });
  }

  return Boolean(gameData);
}
