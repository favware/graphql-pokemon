import { PokemonEnum } from '../codegen/graphql-pokemon';

const megaRegex = /^(?<name>[a-z]+)(?:mega)$/;
const gmaxRegex = /^(?<name>[a-z]+)(?:gmax)$/;
const alolanTotemRegex = /^(?<name>[a-z]+)(?:alolatotem)$/;
const alolanRegex = /^(?<name>[a-z]+)(?:alola)$/;
const hisuianRegex = /^(?<name>[a-z]+)(?:hisui)$/;
const paldeanRegex = /^(?<name>[a-z]+)(?:paldea)$/;
const galarianRegex = /^(?<name>[a-z]+)(?:galar)$/;
const totemRegex = /^(?<name>[a-z]+)(?:totem)$/;
const typeLikeRegex = /^(?<name>(?:arceus|silvally|genesect))(?<type>[a-z]+)?$/;
const pumpkinRegex = /^(?<name>(?:pumpkaboo|gourgeist))(?<size>(?:small|large|super))$/g;

/**
 * Converts a {@link PokemonEnum} value to its corresponding species name in a human-readable format.
 *
 * This can be useful when you want to display the name to the user, for example on a web dashboard or
 * in your application.
 *
 * If `undefined`, `null` or an empty string is passed in, the function will return the same value.
 *
 * @param pokemon - The {@link PokemonEnum} value to convert.
 * @returns The species name of the Pokemon in human-readable format
 */
export function pokemonEnumToSpecies(pokemon: PokemonEnum): string {
  if (!pokemon) {
    return pokemon;
  }

  switch (pokemon) {
    // Some exclusions that cannot be handled easily by the regex
    case PokemonEnum.Missingno:
      return 'MissingNo.';
    case PokemonEnum.M00:
      return "'M (00)";

    case PokemonEnum.Yanmega:
      return 'Yanmega';

    // The double forme Mega Pokemon
    case PokemonEnum.Charizardmegax:
      return 'Mega Charizard X';
    case PokemonEnum.Charizardmegay:
      return 'Mega Charizard Y';

    case PokemonEnum.Mewtwomegax:
      return 'Mega Mewtwo X';
    case PokemonEnum.Mewtwomegay:
      return 'Mega Mewtwo Y';

    case PokemonEnum.Venomiconepilogue:
      return 'Venomicon Epilogue';

    // The mimes
    case PokemonEnum.Mimejr:
      return 'Mime Jr.';
    case PokemonEnum.Mrmime:
      return 'Mr. Mime';
    case PokemonEnum.Mrmimegalar:
      return 'Galarian Mr. Mime';
    case PokemonEnum.Mrrime:
      return 'Mr. Rime';

    // The bird that had to have a hyphen in its name
    case PokemonEnum.Hooh:
      return 'Ho-Oh';

    // Castform
    case PokemonEnum.Castformrainy:
      return 'Castform Rainy';
    case PokemonEnum.Castformsunny:
      return 'Castform Sunny';
    case PokemonEnum.Castformsnowy:
      return 'Castform Snowy';

    // Primals
    case PokemonEnum.Kyogreprimal:
      return 'Primal Kyogre';
    case PokemonEnum.Groudonprimal:
      return 'Primal Groudon';

    // Deoxys
    case PokemonEnum.Deoxysattack:
      return 'Deoxys Attack';
    case PokemonEnum.Deoxysdefense:
      return 'Deoxys Defense';
    case PokemonEnum.Deoxysspeed:
      return 'Deoxys Speed';

    // Wormadam
    case PokemonEnum.Wormadamsandy:
      return 'Wormadam Sandy';
    case PokemonEnum.Wormadamtrash:
      return 'Wormadam Trash';

    // Cherrim
    case PokemonEnum.Cherrimsunshine:
      return 'Cherrim Sunshine';

    // Porygon hyphen z
    case PokemonEnum.Porygonz:
      return 'Porygon-Z';

    // Rotom forms
    case PokemonEnum.Rotomheat:
      return 'Rotom Heat';
    case PokemonEnum.Rotomwash:
      return 'Rotom Wash';
    case PokemonEnum.Rotomfrost:
      return 'Rotom Frost';
    case PokemonEnum.Rotomfan:
      return 'Rotom Fan';
    case PokemonEnum.Rotommow:
      return 'Rotom Mow';

    // Origin forms
    case PokemonEnum.Giratinaorigin:
      return 'Giratina Origin';
    case PokemonEnum.Dialgaorigin:
      return 'Dialga Origin';
    case PokemonEnum.Palkiaorigin:
      return 'Palkia Origin';

    // Shaymin
    case PokemonEnum.Shayminsky:
      return 'Shaymin Sky';

    // The Basculins
    case PokemonEnum.Basculinbluestriped:
      return 'Basculin Blue-Striped';
    case PokemonEnum.Basculegionf:
      return 'basculegion (Female)';

    // The Darmanitans
    case PokemonEnum.Darmanitanzen:
      return 'Darmanitan Zen';
    case PokemonEnum.Darmanitangalarzen:
      return 'Galarian Darmanitan Zen';

    // The Frillishes
    case PokemonEnum.Frillishfemale:
      return 'Frillish (Female)';
    case PokemonEnum.Jellicentfemale:
      return 'Jellicent (Female)';

    case PokemonEnum.Tornadustherian:
      return 'Tornadus Therian';
    case PokemonEnum.Thundurustherian:
      return 'Thundurus Therian';
    case PokemonEnum.Landorustherian:
      return 'Landorus Therian';

    case PokemonEnum.Kyuremblack:
      return 'Black Kyurem';
    case PokemonEnum.Kyuremwhite:
      return 'White Kyurem';

    case PokemonEnum.Keldeoresolute:
      return 'Keldeo Resolute Form';

    case PokemonEnum.Meloettapirouette:
      return 'Meloetta Pirouette Forme';

    case PokemonEnum.Greninjaash:
      return 'Ash Greninja';

    case PokemonEnum.Vivillonfancy:
      return 'Fancy Vivillon';
    case PokemonEnum.Vivillonpokeball:
      return 'Pokeball Vivillon';

    case PokemonEnum.Floetteeternal:
      return 'Eternal Flower Floette';

    case PokemonEnum.Meowsticf:
      return 'Meowstic (Female)';

    case PokemonEnum.Aegislashblade:
      return 'Aegislash Blade Forme';

    case PokemonEnum.Xerneasneutral:
      return 'Xerneas Neutral';

    case PokemonEnum.Zygarde10:
      return 'Zygarde 10%';
    case PokemonEnum.Zygardecomplete:
      return 'Zygarde Complete';

    case PokemonEnum.Hoopaunbound:
      return 'Hoopa Unbound';

    case PokemonEnum.Oricoriopompom:
      return 'Oricorio Pompom';
    case PokemonEnum.Oricoriosensu:
      return 'Oricorio Sensu';
    case PokemonEnum.Oricoriopau:
      return "Oricorio Pa'u";

    case PokemonEnum.Lycanrocmidnight:
      return 'Midnight Lycanroc';
    case PokemonEnum.Lycanrocdusk:
      return 'Dusk Lycanroc';

    case PokemonEnum.Wishiwashischool:
      return 'Wishiwashi School';

    case PokemonEnum.Typenull:
      return 'Type: Null';

    case PokemonEnum.Miniormeteor:
      return 'Minior Meteor';

    case PokemonEnum.Mimikyubusted:
      return 'Mimikyu Busted';
    case PokemonEnum.Mimikyubustedtotem:
      return 'Totem Mimikyu Busted';

    case PokemonEnum.Jangmoo:
      return 'Jangmo-o';
    case PokemonEnum.Hakamoo:
      return 'Hakamo-o';
    case PokemonEnum.Kommoo:
      return 'Kommo-o';
    case PokemonEnum.Kommoototem:
      return 'Totem Kommo-o';

    case PokemonEnum.Tapukoko:
      return 'Tapu Koko';
    case PokemonEnum.Tapulele:
      return 'Tapu Lele';
    case PokemonEnum.Tapubulu:
      return 'Tapu Bulu';
    case PokemonEnum.Tapufini:
      return 'Tapu Fini';

    case PokemonEnum.Necrozmaduskmane:
      return 'Duskmane Necrozma';
    case PokemonEnum.Necrozmadawnwings:
      return 'Dawnwings Necrozma';
    case PokemonEnum.Necrozmaultra:
      return 'Ultra Necrozma';

    case PokemonEnum.Magearnaoriginal:
      return 'Magearna Original';

    case PokemonEnum.Cramorantgulping:
      return 'Gulping Cramorant';
    case PokemonEnum.Cramorantgorging:
      return 'Gorging Cramorant';

    case PokemonEnum.Toxtricitylowkey:
      return 'Low Key Toxtricity';
    case PokemonEnum.Toxtricitylowkeygmax:
      return 'G-Max Low Key Toxtricity';

    case PokemonEnum.Sinisteaantique:
      return 'Antique Sinistea';
    case PokemonEnum.Polteageistantique:
      return 'Antique Polteageist';

    case PokemonEnum.Eiscuenoice:
      return 'Eiscue Noice';

    case PokemonEnum.Indeedeef:
      return 'Indeedee (Female)';

    case PokemonEnum.Morpekohangry:
      return 'Hangry Morpeko';

    case PokemonEnum.Zaciancrowned:
      return 'Zacian Crowned';
    case PokemonEnum.Zamazentacrowned:
      return 'Zamazenta Crowned';
    case PokemonEnum.Eternatuseternamax:
      return 'Eternatus Eternamax';

    case PokemonEnum.Urshifurapidstrike:
      return 'Rapid-Strike Urshifu';
    case PokemonEnum.Urshifurapidstrikegmax:
      return 'G-Max Rapid-Strike Urshifu';

    case PokemonEnum.Zarudedada:
      return 'Zarude Dada';

    case PokemonEnum.Calyrexice:
      return 'Calyrex Ice';
    case PokemonEnum.Calyrexshadow:
      return 'Calyrex Shadow';

    // All the PokeStar Pokémon
    case PokemonEnum.Pokestarsmeargle:
      return 'PokéStar Smeargle';
    case PokemonEnum.Pokestarufo:
      return 'PokéStar UFO';
    case PokemonEnum.Pokestarufo2:
      return 'PokéStar UFO-2';
    case PokemonEnum.Pokestarbrycenman:
      return 'PokéStar Brycen-Man';
    case PokemonEnum.Pokestarmt:
      return 'PokéStar MT';
    case PokemonEnum.Pokestarmt2:
      return 'PokéStar MT2';
    case PokemonEnum.Pokestartransport:
      return 'PokéStar Transport';
    case PokemonEnum.Pokestargiant:
      return 'PokéStar Giant';
    case PokemonEnum.Pokestarhumanoid:
      return 'PokéStar Humanoid';
    case PokemonEnum.Pokestarmonster:
      return 'PokéStar Monster';
    case PokemonEnum.Pokestarf00:
      return 'PokéStar F-00';
    case PokemonEnum.Pokestarf002:
      return 'PokéStar F-002';
    case PokemonEnum.Pokestarspirit:
      return 'PokéStar Spirit';
    case PokemonEnum.Pokestarblackdoor:
      return 'PokéStar Black Door';
    case PokemonEnum.Pokestarwhitedoor:
      return 'PokéStar White Door';
    case PokemonEnum.Pokestarblackbelt:
      return 'PokéStar Black Belt';
    case PokemonEnum.Pokestarufopropu2:
      return 'PokéStar UFO-PropU2';

    // All the Pikachu's
    case PokemonEnum.Pikachucosplay:
      return 'Pikachu Cosplay';
    case PokemonEnum.Pikachurockstar:
      return 'Pikachu Rock Star';
    case PokemonEnum.Pikachubelle:
      return 'Pikachu Belle';
    case PokemonEnum.Pikachupopstar:
      return 'Pikachu Pop Star';
    case PokemonEnum.Pikachuphd:
      return 'Pikachu PhD';
    case PokemonEnum.Pikachulibre:
      return 'Pikachu Libre';
    case PokemonEnum.Pikachuoriginal:
      return 'Pikachu Kanto Cap';
    case PokemonEnum.Pikachuhoenn:
      return 'Pikachu Honey Cap';
    case PokemonEnum.Pikachusinnoh:
      return 'Pikachu Sinnoh Cap';
    case PokemonEnum.Pikachuunova:
      return 'Pikachu Novae Cap';
    case PokemonEnum.Pikachukalos:
      return 'Pikachu Kalos Cap';
    case PokemonEnum.Pikachualola:
      return 'Pikachu Alola Cap';
    case PokemonEnum.Pikachupartner:
      return 'Pikachu (I Choose You)';
    case PokemonEnum.Pikachustarter:
      return "Pikachu (Let's Go)";
    case PokemonEnum.Pikachuworld:
      return 'Pikachu (Journeys)';
    case PokemonEnum.Pichuspikyeared:
      return 'Spiky Eared Pichu';
    case PokemonEnum.Eeveestarter:
      return "Eevee (Let's Go)";

    // All the Paradox Pokémon
    case PokemonEnum.Greattusk:
      return 'Great Tusk';
    case PokemonEnum.Screamtail:
      return 'Scream Tail';
    case PokemonEnum.Brutebonnet:
      return 'Brute Bonnet';
    case PokemonEnum.Fluttermane:
      return 'Flutter Mane';
    case PokemonEnum.Slitherwing:
      return 'Slither Wing';
    case PokemonEnum.Sandyshocks:
      return 'Sandy Shocks';
    case PokemonEnum.Irontreads:
      return 'Iron Treads';
    case PokemonEnum.Ironbundle:
      return 'Iron Bundle';
    case PokemonEnum.Ironhands:
      return 'Iron Hands';
    case PokemonEnum.Ironjugulis:
      return 'Iron Jugulis';
    case PokemonEnum.Ironmoth:
      return 'Iron Moth';
    case PokemonEnum.Ironthorns:
      return 'Iron Thorns';
    case PokemonEnum.Roaringmoon:
      return 'Roaring Moon';
    case PokemonEnum.Ironvaliant:
      return 'Iron Valiant';
    case PokemonEnum.Walkingwake:
      return 'Walking Wake';
    case PokemonEnum.Ironleaves:
      return 'Iron Leaves';

    // The Ruination Pokémon
    case PokemonEnum.Wochien:
      return 'Wo-Chien';
    case PokemonEnum.Chienpao:
      return 'Chien-Pao';
    case PokemonEnum.Tinglu:
      return 'Ting-Lu';
    case PokemonEnum.Chiyu:
      return 'Chi-Yu';

    // Special Paldean Forms
    case PokemonEnum.Taurospaldeacombat:
      return 'Paldean Tauros (Combat Breed)';
    case PokemonEnum.Taurospaldeaaqua:
      return 'Paldean Tauros (Aqua Breed)';
    case PokemonEnum.Taurospaldeablaze:
      return 'Paldean Tauros (Blaze Breed)';

    // Ogerpon
    case PokemonEnum.Ogerpon:
      return 'Ogerpon (Teal Mask)';
    case PokemonEnum.Ogerpontealtera:
      return 'Ogerpon (Teal Mask - Tera)';
    case PokemonEnum.Ogerponcornerstone:
      return 'Ogerpon (Cornerstone Mask)';
    case PokemonEnum.Ogerponcornerstonetera:
      return 'Ogerpon (Cornerstone Mask - Tera)';
    case PokemonEnum.Ogerponhearthflame:
      return 'Ogerpon (Hearthflame Mask)';
    case PokemonEnum.Ogerponhearthflametera:
      return 'Ogerpon (Hearthflame Mask - Tera)';
    case PokemonEnum.Ogerponwellspring:
      return 'Ogerpon (Wellspring Mask)';
    case PokemonEnum.Ogerponwellspringtera:
      return 'Ogerpon (Wellspring Mask - Tera)';

    // Other gen 9 special cases
    case PokemonEnum.Ursalunabloodmoon:
      return 'Ursaluna Bloodmoion';
    case PokemonEnum.Poltchageistartisan:
      return 'Poltchageist Artisan';
    case PokemonEnum.Sinistchamasterpiece:
      return 'Sinistcha Masterpiece';

    // All other cases
    default: {
      const megaResult = megaRegex.exec(pokemon);

      if (megaResult && megaResult.groups?.name) {
        return `Mega ${toTitleCase(megaResult.groups.name)}`;
      }

      const gmaxResult = gmaxRegex.exec(pokemon);

      if (gmaxResult && gmaxResult.groups?.name) {
        return `G-Max ${toTitleCase(gmaxResult.groups.name)}`;
      }

      const alolanTotemResult = alolanTotemRegex.exec(pokemon);

      if (alolanTotemResult && alolanTotemResult.groups?.name) {
        return `Alolan Totem ${toTitleCase(alolanTotemResult.groups.name)}`;
      }

      const totemResult = totemRegex.exec(pokemon);

      if (totemResult && totemResult.groups?.name) {
        return `Totem ${toTitleCase(totemResult.groups.name)}`;
      }

      const alolanResult = alolanRegex.exec(pokemon);

      if (alolanResult && alolanResult.groups?.name) {
        return `Alolan ${toTitleCase(alolanResult.groups.name)}`;
      }

      const galarianResult = galarianRegex.exec(pokemon);

      if (galarianResult && galarianResult.groups?.name) {
        return `Galarian ${toTitleCase(galarianResult.groups.name)}`;
      }

      const hisuianResult = hisuianRegex.exec(pokemon);

      if (hisuianResult && hisuianResult.groups?.name) {
        return `Hisuian ${toTitleCase(hisuianResult.groups.name)}`;
      }

      const paldeanResult = paldeanRegex.exec(pokemon);

      if (paldeanResult && paldeanResult.groups?.name) {
        return `Paldean ${toTitleCase(paldeanResult.groups.name)}`;
      }

      const typeLikeResult = typeLikeRegex.exec(pokemon);

      if (typeLikeResult && typeLikeResult.groups?.name && typeLikeResult.groups?.type) {
        return `${toTitleCase(typeLikeResult.groups.name)} ${toTitleCase(typeLikeResult.groups.type)}`;
      }

      const pumpkinResult = pumpkinRegex.exec(pokemon);

      if (pumpkinResult && pumpkinResult.groups?.name && pumpkinResult.groups?.size) {
        return `${toTitleCase(pumpkinResult.groups.name)} ${toTitleCase(pumpkinResult.groups.size)}`;
      }

      return toTitleCase(pokemon);
    }
  }
}

const TO_TITLE_CASE = /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g;
function toTitleCase(str: string) {
  return str.replace(TO_TITLE_CASE, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
