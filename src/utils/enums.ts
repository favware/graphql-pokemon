import abilitiesData from '#assets/abilities';
import itemData from '#assets/items';
import moveData from '#assets/moves';
import pokedex from '#assets/pokedex';
import typechart from '#assets/typechart';

export const abilities = abilitiesData.enumObject();
export const pokemons = pokedex.enumObject();
export const items = itemData.enumObject();
export const moves = moveData.enumObject();
export const types = typechart.enumObject();
