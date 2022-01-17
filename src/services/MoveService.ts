import { FuzzyMoveArgs } from '#arguments/FuzzyArgs/FuzzyMoveArgs';
import { MoveArgs } from '#arguments/MoveArgs';
import { moves } from '#assets/moves';
import { Move } from '#structures/Move';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import type PokemonTypes from '#utils/pokemon';
import { parseZCrystal, preParseInput, toLowerHyphenCase, toLowerSingleWordCase, toTitleSnakeCase } from '#utils/util';
import { Args } from 'type-graphql';

export class MoveService {
  private static readonly fuzzySearch = new FuzzySearch(moves, ['name', 'aliases']);
  public static getByMoveName(@Args(() => MoveArgs) { move }: MoveArgs): PokemonTypes.Move | undefined {
    return moves.get(move);
  }

  public static mapMoveDataToMoveGraphQL({ data, requestedFields }: MapMoveDataToMoveGraphQLParameters): Move {
    const move = new Move();

    addPropertyToClass(move, 'key', data.key, requestedFields);
    addPropertyToClass(move, 'name', data.name, requestedFields);
    addPropertyToClass(move, 'desc', data.desc, requestedFields);
    addPropertyToClass(move, 'shortDesc', data.shortDesc, requestedFields);
    addPropertyToClass(move, 'type', data.type, requestedFields);
    addPropertyToClass(move, 'contestType', data.contestType, requestedFields);
    addPropertyToClass(move, 'basePower', data.basePower, requestedFields);
    addPropertyToClass(move, 'pp', data.pp, requestedFields);
    addPropertyToClass(move, 'category', data.category, requestedFields);
    addPropertyToClass(move, 'accuracy', data.accuracy, requestedFields);
    addPropertyToClass(move, 'priority', data.priority, requestedFields);
    addPropertyToClass(move, 'target', data.target, requestedFields);
    addPropertyToClass(move, 'isNonstandard', data.isNonstandard, requestedFields);
    addPropertyToClass(move, 'isGMax', data.isGMax, requestedFields);
    addPropertyToClass(move, 'isZ', parseZCrystal(data.isZ), requestedFields);
    addPropertyToClass(move, 'isFieldMove', data.isFieldMove, requestedFields);
    addPropertyToClass(move, 'maxMovePower', data.maxMovePower, requestedFields);
    addPropertyToClass(move, 'zMovePower', this.parseZMovePower(data.basePower, data.zMovePower), requestedFields);
    addPropertyToClass(move, 'serebiiPage', `https://www.serebii.net/attackdex-swsh/${toLowerSingleWordCase(data.name)}.shtml`, requestedFields);
    addPropertyToClass(move, 'bulbapediaPage', `https://bulbapedia.bulbagarden.net/wiki/${toTitleSnakeCase(data.name)}_(move)`, requestedFields);
    addPropertyToClass(move, 'smogonPage', `https://www.smogon.com/dex/ss/moves/${toLowerHyphenCase(data.name)}`, requestedFields);

    return move;
  }

  public static findByFuzzy(@Args(() => FuzzyMoveArgs) { move, offset, reverse, take }: FuzzyMoveArgs): PokemonTypes.Move[] {
    move = preParseInput(move);

    const fuzzyResult = this.fuzzySearch.runFuzzy(move);

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(offset, offset + take);
  }

  /**
   * Converts basePower and zMovePower to the correct Z-Move power, using datamined conversion table seen below.
   *
   * | Base move power  | Z-Move power |
   * |------------------|--------------|
   * | 0-55             | 100          |
   * | 60-65            | 120          |
   * | 70-75            | 140          |
   * | 80-85            | 160          |
   * | 90-95            | 175          |
   * | 100              | 180          |
   * | 110              | 185          |
   * | 120-125          | 190          |
   * | 130              | 195          |
   * | 140+             | 200          |
   * @param basePower The basepower of a move
   * @param zMovePower The z-move power of a move, if specified it is preferred.
   */
  private static parseZMovePower(basePower: string, zMovePower: number | undefined): number {
    // If zMovePower was defined on the move data then just return that value
    if (typeof zMovePower === 'number') return zMovePower;

    // If the basePower is 0 (status moves) then return 0
    if (basePower === '0') return 0;

    const basePowerAsNumber = Number(basePower);

    if (basePowerAsNumber >= 0 && basePowerAsNumber <= 55) return 100;
    if (basePowerAsNumber >= 60 && basePowerAsNumber <= 65) return 120;

    if (basePowerAsNumber >= 70 && basePowerAsNumber <= 75) return 140;
    if (basePowerAsNumber >= 80 && basePowerAsNumber <= 85) return 160;
    if (basePowerAsNumber >= 90 && basePowerAsNumber <= 95) return 175;
    if (basePowerAsNumber === 100) return 180;
    if (basePowerAsNumber === 110) return 185;
    if (basePowerAsNumber >= 120 && basePowerAsNumber <= 125) return 190;
    if (basePowerAsNumber === 130) return 195;
    if (basePowerAsNumber >= 140) return 200;

    // If none of the cases matched then we return 0. This can happen if the move cannot be a Z-move
    // Which is the case for moves that were exclusive to a game that didn't feature Z-Moves
    // Such as "Pika Papow" and "Veevee Volley"
    return 0;
  }
}

interface MapMoveDataToMoveGraphQLParameters {
  data: PokemonTypes.Move;
  requestedFields: GraphQLSet<keyof Move>;
}
