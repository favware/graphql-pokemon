import { abilities as abilitiesData } from '#assets/abilities';
import { items as itemData } from '#assets/items';
import { moves as moveData } from '#assets/moves';
import { pokedex } from '#assets/pokedex';
import { typechart } from '#assets/typechart';

export const abilities = abilitiesData.enumObject();
export const pokemons = pokedex.enumObject();
export const items = itemData.enumObject();
export const moves = moveData.enumObject();
export const types = typechart.enumObject();
