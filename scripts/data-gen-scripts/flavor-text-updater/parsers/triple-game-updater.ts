import type { FlavorsModule } from '#utils/flavorsModule.js';
import { green, yellow } from 'colorette';
import { log } from '../append-to-log.js';
import type { ParsedPokemon } from '../constants.js';
import { getTextContent } from '../get-text-content.js';

export async function tripleGameUpdater(
  text: string | undefined,
  flavorTexts: FlavorsModule,
  pokemon: ParsedPokemon,
  game1: string,
  game2: string,
  game3: string,
  logPrefix: string
): Promise<boolean> {
  const regexGame123 = new RegExp(`^(?:{{Dex/Entry2\\|v=${game1}\\|v2=${game2}\\|v3=${game3}\\|)`);
  const regexGame132 = new RegExp(`^(?:{{Dex/Entry2\\|v=${game1}\\|v2=${game3}\\|v3=${game2}\\|)`);

  const regexGame213 = new RegExp(`^(?:{{Dex/Entry3\\|v=${game2}\\|v2=${game1}\\|v3=${game3}\\|)`);
  const regexGame231 = new RegExp(`^(?:{{Dex/Entry3\\|v=${game2}\\|v2=${game3}\\|v3=${game1}\\|)`);

  const regexGame321 = new RegExp(`^(?:{{Dex/Entry3\\|v=${game3}\\|v2=${game2}\\|v3=${game1}\\|)`);
  const regexGame312 = new RegExp(`^(?:{{Dex/Entry3\\|v=${game3}\\|v2=${game1}\\|v3=${game2}\\|)`);

  const textSplitByNewLine = text?.split('\n');
  const game123Based = getTextContent(textSplitByNewLine?.find((e) => regexGame123.test(e)));
  const game132Based = getTextContent(textSplitByNewLine?.find((e) => regexGame132.test(e)));
  const game213Based = getTextContent(textSplitByNewLine?.find((e) => regexGame213.test(e)));
  const game231Based = getTextContent(textSplitByNewLine?.find((e) => regexGame231.test(e)));
  const game321Based = getTextContent(textSplitByNewLine?.find((e) => regexGame321.test(e)));
  const game312Based = getTextContent(textSplitByNewLine?.find((e) => regexGame312.test(e)));

  const gameData = game123Based || game132Based || game213Based || game231Based || game321Based || game312Based;

  await log(`${logPrefix}Retrieved ${game1}-${game2}-${game3} Combined data, it is ${gameData ? 'defined' : 'not defined'}`, yellow, false, true);

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

      const game3FlavorText = flavorTexts[pokemon.number].find((a) => a.version_id === game3);
      if (game3FlavorText) {
        game3FlavorText.flavor_text = gameData;
      } else {
        flavorTexts[pokemon.number].push({
          version_id: game3,
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
        },
        {
          version_id: game3,
          flavor_text: gameData
        }
      ];
    }

    await log(`${logPrefix}Stored new ${game1}-${game2}-${game3} Combined entries in flavor texts`, green, false, true);
  }

  return Boolean(gameData);
}
