import { LearnsetArgs } from '#arguments/LearnsetArgs';
import learnsets from '#assets/learnsets';
import pokedex from '#assets/pokedex';
import { Learnset, LearnsetLevelUpMove, LearnsetMove } from '#structures/Learnset';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import { GraphQLSet } from '#utils/GraphQLSet';
import type PokemonTypes from '#utils/pokemon';
import { parseSpeciesForSprite } from '#utils/spriteParser';
import { Args } from 'type-graphql';

export class LearnsetService {
  public static mapPokemonAndMovesToLearnsetGraphQL(
    @Args() { pokemon, moves, generation }: LearnsetArgs,
    requestedFields: GraphQLSet<keyof Learnset>
  ): Learnset {
    const learnset = learnsets.get(pokemon);

    if (!learnset) {
      throw new Error(`No Pokémon found for ${pokemon}`);
    }

    const learnsetEntry = new Learnset();

    if (learnset.eventOnly === undefined) {
      const levelupMoves: LearnsetLevelUpMove[] = [];
      const virtualTransferMoves: LearnsetMove[] = [];
      const tutorMoves: LearnsetMove[] = [];
      const tmMoves: LearnsetMove[] = [];
      const eggMoves: LearnsetMove[] = [];
      const eventMoves: LearnsetMove[] = [];
      const dreamworldMoves: LearnsetMove[] = [];

      for (const move of moves) {
        if (Reflect.has(learnset, move)) {
          const methods = learnset[move];

          for (const method of methods) {
            if (generation && this.getMethodGeneration(method) !== generation) continue;

            switch (this.getMethodType(method)) {
              case 'L':
                if (requestedFields.has('levelUpMoves')) {
                  levelupMoves.push(this.createLevelupMove(move, this.getMethodLevel(method), this.getMethodGeneration(method)));
                }
                break;
              case 'V':
                if (requestedFields.has('virtualTransferMoves')) {
                  virtualTransferMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
                }
                break;
              case 'T':
                if (requestedFields.has('tutorMoves')) {
                  tutorMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
                }
                break;
              case 'M':
                if (requestedFields.has('tmMoves')) {
                  tmMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
                }
                break;
              case 'E':
                if (requestedFields.has('eggMoves')) {
                  eggMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
                }
                break;
              case 'S':
                if (requestedFields.has('eventMoves')) {
                  eventMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
                }
                break;
              case 'D':
                if (requestedFields.has('dreamworldMoves')) {
                  dreamworldMoves.push(this.createLearnsetMove(move, this.getMethodGeneration(method)));
                }
                break;
            }
          }
        }
      }

      addPropertyToClass(learnsetEntry, 'levelUpMoves', levelupMoves, requestedFields);
      addPropertyToClass(learnsetEntry, 'virtualTransferMoves', virtualTransferMoves, requestedFields);
      addPropertyToClass(learnsetEntry, 'tutorMoves', tutorMoves, requestedFields);
      addPropertyToClass(learnsetEntry, 'tmMoves', tmMoves, requestedFields);
      addPropertyToClass(learnsetEntry, 'eggMoves', eggMoves, requestedFields);
      addPropertyToClass(learnsetEntry, 'eventMoves', eventMoves, requestedFields);
      addPropertyToClass(learnsetEntry, 'dreamworldMoves', dreamworldMoves, requestedFields);
    }

    if (this.shouldIncludePokemonDetails(requestedFields)) {
      const pokemonEntry = pokedex.get(pokemon) as PokemonTypes.DexEntry;

      addPropertyToClass(
        learnsetEntry,
        'sprite',
        parseSpeciesForSprite({
          pokemonName: pokemonEntry.species,
          baseSpecies: pokemonEntry.baseSpecies,
          specialSprite: pokemonEntry.specialSprite,
          specialShinySprite: pokemonEntry.specialShinySprite,
          specialBackSprite: pokemonEntry.specialBackSprite,
          specialShinyBackSprite: pokemonEntry.specialShinyBackSprite
        }),
        requestedFields
      );
      addPropertyToClass(
        learnsetEntry,
        'shinySprite',
        parseSpeciesForSprite({
          pokemonName: pokemonEntry.species,
          baseSpecies: pokemonEntry.baseSpecies,
          specialSprite: pokemonEntry.specialSprite,
          specialShinySprite: pokemonEntry.specialShinySprite,
          specialBackSprite: pokemonEntry.specialBackSprite,
          specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
          shiny: true
        }),
        requestedFields
      );
      addPropertyToClass(
        learnsetEntry,
        'backSprite',
        parseSpeciesForSprite({
          pokemonName: pokemonEntry.species,
          baseSpecies: pokemonEntry.baseSpecies,
          specialSprite: pokemonEntry.specialSprite,
          specialShinySprite: pokemonEntry.specialShinySprite,
          specialBackSprite: pokemonEntry.specialBackSprite,
          specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
          backSprite: true
        }),
        requestedFields
      );
      addPropertyToClass(
        learnsetEntry,
        'shinyBackSprite',
        parseSpeciesForSprite({
          pokemonName: pokemonEntry.species,
          baseSpecies: pokemonEntry.baseSpecies,
          specialSprite: pokemonEntry.specialSprite,
          specialShinySprite: pokemonEntry.specialShinySprite,
          specialBackSprite: pokemonEntry.specialBackSprite,
          specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
          shiny: true,
          backSprite: true
        }),
        requestedFields
      );

      addPropertyToClass(learnsetEntry, 'num', pokemonEntry.num, requestedFields);
      addPropertyToClass(learnsetEntry, 'color', pokemonEntry.color, requestedFields);
      addPropertyToClass(learnsetEntry, 'species', pokemonEntry.species, requestedFields);
    }

    return learnsetEntry;
  }

  private static createLearnsetMove(move: string, generation: number) {
    const learnsetMove = new LearnsetMove();
    learnsetMove.name = move;
    learnsetMove.generation = generation;

    return learnsetMove;
  }

  private static createLevelupMove(move: string, level: number, generation: number) {
    const levelUpMove = new LearnsetLevelUpMove();
    levelUpMove.name = move;
    levelUpMove.generation = generation;
    levelUpMove.level = level;

    return levelUpMove;
  }

  private static getMethodGeneration(method: string) {
    return parseInt(method.slice(0, 1), 10);
  }

  private static getMethodLevel(method: string) {
    return parseInt(method.slice(2), 10);
  }

  private static getMethodType(method: string) {
    return method.slice(1, 2) as MethodTypes;
  }

  private static shouldIncludePokemonDetails(requestedFields: GraphQLSet<keyof Learnset>) {
    return (
      requestedFields.has('sprite') ||
      requestedFields.has('backSprite') ||
      requestedFields.has('shinySprite') ||
      requestedFields.has('shinyBackSprite') ||
      requestedFields.has('num') ||
      requestedFields.has('color') ||
      requestedFields.has('species')
    );
  }
}

type MethodTypes = 'L' | 'V' | 'T' | 'M' | 'E' | 'S' | 'D';
