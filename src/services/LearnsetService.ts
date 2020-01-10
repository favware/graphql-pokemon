import { Args } from 'type-graphql';
import LearnsetArgs from '../arguments/LearnsetArgs';
import learnsets from '../assets/learnsets';
import LearnsetEntry, { LearnsetLevelUpMove, LearnsetMove } from '../structures/LearnsetEntry';
import pokedex from '../assets/pokedex';
import Util from '../utils/util';
import Pokemon from '../utils/pokemon';

export default class LearnsetService {
  public findLearnsets(@Args() { pokemon, moves, generation }: LearnsetArgs) {
    const learnset = learnsets.get(pokemon);

    if (!learnset) {
      throw new Error(`No Pokémon found for ${pokemon}`);
    }

    const learnsetEntry = new LearnsetEntry();
    const levelupMoves: LearnsetLevelUpMove[] = [];
    const virtualTransferMoves: LearnsetMove[] = [];
    const tutorMoves: LearnsetMove[] = [];
    const tmMoves: LearnsetMove[] = [];
    const eggMoves: LearnsetMove[] = [];
    const eventMoves: LearnsetMove[] = [];
    const dreamworldMoves: LearnsetMove[] = [];

    for (const move of moves) {
      if (move in learnset) {
        const methods = learnset[move] as string[];

        for (const method of methods) {
          if (generation && this.getMethodGeneration(method) !== generation) continue;

          switch (this.getMethodType(method)) {
            case 'L':
              levelupMoves.push(this.createLevelupMove(move, this.getMethodLevel(method), this.getMethodGeneration(method)));
              break;
            case 'V':
              virtualTransferMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
              break;
            case 'T':
              tutorMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
              break;
            case 'M':
              tmMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
              break;
            case 'E':
              eggMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
              break;
            case 'S':
              eventMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
              break;
            case 'D':
              dreamworldMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
              break;
            default:
              break;
          }
        }
      }
    }

    learnsetEntry.levelUpMoves = levelupMoves;
    learnsetEntry.virtualTransferMoves = virtualTransferMoves;
    learnsetEntry.tutorMoves = tutorMoves;
    learnsetEntry.tmMoves = tmMoves;
    learnsetEntry.eggMoves = eggMoves;
    learnsetEntry.eventMoves = eventMoves;
    learnsetEntry.dreamworldMoves = dreamworldMoves;

    const pokemonEntry = pokedex.get(pokemon) as Pokemon.DexEntry;
    learnsetEntry.sprite = this.parseSpeciesForSprite(pokemonEntry.species, pokemonEntry.baseSpecies, pokemonEntry.specialSprite, pokemonEntry.specialShinySprite);
    learnsetEntry.shinySprite = this.parseSpeciesForSprite(pokemonEntry.species, pokemonEntry.baseSpecies, pokemonEntry.specialSprite, pokemonEntry.specialShinySprite, true);
    learnsetEntry.num = pokemonEntry.num;
    learnsetEntry.color = pokemonEntry.color;
    learnsetEntry.species = pokemonEntry.species;

    return learnsetEntry;
  }

  private createLearnsetMove(move: string, generation: number) {
    const learnsetMove = new LearnsetMove();
    learnsetMove.name = move;
    learnsetMove.generation = generation;

    return learnsetMove;
  }

  private createLevelupMove(move: string, level: number, generation: number) {
    const levelUpMove = new LearnsetLevelUpMove();
    levelUpMove.name = move;
    levelUpMove.generation = generation;
    levelUpMove.level = level;

    return levelUpMove;
  }

  private getMethodGeneration(method: string) {
    return parseInt(method.slice(0, 1));
  }

  private getMethodLevel(method: string) {
    return parseInt(method.slice(2));
  }

  private getMethodType(method: string) {
    return method.slice(1, 2) as MethodTypes;
  }

  private parseSpeciesForSprite(pokemonName: string, baseForme?: string, specialSprite?: string, specialShinySprite?: string, shiny = false) {
    if (specialShinySprite && shiny === true) return specialShinySprite;
    if (specialSprite && shiny === false) return specialSprite;

    if (!baseForme) pokemonName = Util.toLowerSingleWordCase(pokemonName);

    if (pokemonName.match(/^(.+)-(x|y)$/g)) pokemonName = pokemonName.replace(/^(.+)-(x|y)$/g, '$1$2');

    return `https://play.pokemonshowdown.com/sprites/${shiny ? 'ani-shiny' : 'ani'}/${pokemonName}.gif`;
  }
}

type MethodTypes = 'L' | 'V' | 'T' | 'M' | 'E' | 'S' | 'D';
