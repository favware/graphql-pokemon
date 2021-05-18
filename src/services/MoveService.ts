import MovePaginatedArgs from '#arguments/MovePaginatedArgs';
import moves from '#assets/moves';
import MoveEntry from '#structures/MoveEntry';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type Pokemon from '#utils/pokemon';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Arg, Args } from 'type-graphql';

export default class MoveService {
  public findByName(@Arg('name') name: string): Pokemon.Move | undefined {
    return moves.get(name);
  }

  public findByFuzzy(@Args() { move, skip, take, reverse }: MovePaginatedArgs): Fuse.FuseResult<Pokemon.Move>[] {
    const fuzzyResult = new FuzzySearch(moves, ['name'], { threshold: 0.3 }).runFuzzy(move);

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(moveData: Pokemon.Move, requestedFields: GraphQLSet<keyof MoveEntry>): MoveEntry {
    const moveEntry = new MoveEntry();
    addPropertyToClass(moveEntry, 'name', moveData.name, requestedFields);
    addPropertyToClass(moveEntry, 'desc', moveData.desc, requestedFields);
    addPropertyToClass(moveEntry, 'shortDesc', moveData.shortDesc, requestedFields);
    addPropertyToClass(moveEntry, 'type', moveData.type, requestedFields);
    addPropertyToClass(moveEntry, 'contestType', moveData.contestType, requestedFields);
    addPropertyToClass(moveEntry, 'basePower', moveData.basePower, requestedFields);
    addPropertyToClass(moveEntry, 'pp', moveData.pp, requestedFields);
    addPropertyToClass(moveEntry, 'category', moveData.category, requestedFields);
    addPropertyToClass(moveEntry, 'accuracy', moveData.accuracy, requestedFields);
    addPropertyToClass(moveEntry, 'priority', moveData.priority, requestedFields);
    addPropertyToClass(moveEntry, 'target', moveData.target, requestedFields);
    addPropertyToClass(moveEntry, 'isNonstandard', moveData.isNonstandard, requestedFields);
    addPropertyToClass(moveEntry, 'isGMax', moveData.isGMax, requestedFields);
    addPropertyToClass(moveEntry, 'isZ', Util.parseZCrystal(moveData.isZ), requestedFields);
    addPropertyToClass(moveEntry, 'isFieldMove', moveData.isFieldMove, requestedFields);
    addPropertyToClass(moveEntry, 'maxMovePower', moveData.maxMovePower, requestedFields);
    addPropertyToClass(moveEntry, 'zMovePower', this.parseZMovePower(moveData.basePower, moveData.zMovePower), requestedFields);
    addPropertyToClass(
      moveEntry,
      'serebiiPage',
      `https://www.serebii.net/attackdex-swsh/${Util.toLowerSingleWordCase(moveData.name)}.shtml`,
      requestedFields
    );
    addPropertyToClass(
      moveEntry,
      'bulbapediaPage',
      `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleSnakeCase(moveData.name)}_(move)`,
      requestedFields
    );
    addPropertyToClass(moveEntry, 'smogonPage', `https://www.smogon.com/dex/ss/moves/${Util.toLowerHyphenCase(moveData.name)}`, requestedFields);

    return moveEntry;
  }

  /**
   * Converts basePower and zMovePower to the correct Z-Move power, using datamined convertion table seen below.
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
  private parseZMovePower(basePower: string, zMovePower: number | undefined): number {
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

    // If somehow none of these cases matched we return Infinity, just to ensure it gets caught more easily
    return Infinity;
  }
}
