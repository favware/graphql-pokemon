import type Fuse from 'fuse.js';
import { Arg, Args } from 'type-graphql';
import MovePaginatedArgs from '../arguments/MovePaginatedArgs';
import { moveAliases } from '../assets/aliases';
import moves from '../assets/moves';
import MoveEntry from '../structures/MoveEntry';
import { addPropertyToClass } from '../utils/addPropertyToClass';
import FuzzySearch from '../utils/FuzzySearch';
import GraphQLSet from '../utils/GraphQLSet';
import type Pokemon from '../utils/pokemon';
import Util from '../utils/util';

export default class MoveService {
  public findByName(@Arg('name') name: string): Pokemon.Move | undefined {
    return moves.get(name);
  }

  public findByFuzzy(@Args() { move, skip, take, reverse }: MovePaginatedArgs): Fuse.FuseResult<Pokemon.Move>[] {
    const fuzzyMove = new FuzzySearch(moves, ['name'], { threshold: 0.3 });

    let fuzzyResult = fuzzyMove.runFuzzy(move);
    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(moveAliases, ['alias', 'move'], {
        threshold: 0.4
      }).runFuzzy(move);

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyMove.runFuzzy(fuzzyAliasResult[0].item.move);
      }
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(@Arg('move') move: string, requestedFields: GraphQLSet<keyof MoveEntry>): MoveEntry {
    const moveData = this.findByName(move);

    if (!moveData) {
      throw new Error(`No move found for ${move}`);
    }

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
    addPropertyToClass(
      moveEntry,
      'serebiiPage',
      `https://www.serebii.net/attackdex-sm/${Util.toLowerSingleWordCase(moveData.name)}.shtml`,
      requestedFields
    );
    addPropertyToClass(
      moveEntry,
      'bulbapediaPage',
      `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleSnakeCase(moveData.name)}_(move)`,
      requestedFields
    );
    addPropertyToClass(
      moveEntry,
      'smogonPage',
      `https://www.smogon.com/dex/sm/moves/${Util.toLowerHyphenCase(moveData.name)}`,
      requestedFields
    );

    return moveEntry;
  }
}
