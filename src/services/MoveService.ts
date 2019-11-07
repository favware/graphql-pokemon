import { Arg, Args } from 'type-graphql';
import moves from '../assets/moves';
import { SimpleFuseOptions } from '../typings/common';
import MovePaginatedArgs from '../arguments/MovePaginatedArgs';
import { GraphQLJSONObject } from 'graphql-type-json';
import FuzzySearch from '../utils/FuzzySearch';
import { moveAliases } from '../assets/aliases';
import MoveEntry from '../structures/MoveEntry';
import Util from '../utils/util';

export default class MoveService {
  public findByName(@Arg('name') name: string) {
    return moves.get(name);
  }

  public findByFuzzy(@Args() {
    move, skip, take, reverse,
  }: MovePaginatedArgs, @Arg('fuseOptions', () => GraphQLJSONObject) fuseOptions?: SimpleFuseOptions) {
    const fuzzyMove = new FuzzySearch(moves, [ 'name', 'num' ], { threshold: 0.3, ...fuseOptions });

    let fuzzyResult = fuzzyMove.run(move);
    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(moveAliases, [ 'alias', 'move' ], { threshold: 0.4 }).run(move);

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyMove.run(fuzzyAliasResult[0].move);
      }
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(@Arg('move') move: string) {
    const moveData = this.findByName(move);

    if (!moveData) {
      throw new Error(`No move found for ${move}`);
    }

    const moveEntry = new MoveEntry();
    moveEntry.num = moveData.num;
    moveEntry.name = moveData.name;
    moveEntry.shortDesc = moveData.shortDesc;
    moveEntry.type = moveData.type;
    moveEntry.contestType = moveData.contestType;
    moveEntry.basePower = moveData.basePower;
    moveEntry.pp = moveData.pp;
    moveEntry.category = moveData.category;
    moveEntry.accuracy = moveData.accuracy;
    moveEntry.priority = moveData.priority;
    moveEntry.target = moveData.target;
    moveEntry.serebiiPage = `https://www.serebii.net/attackdex-sm/${Util.toLowerSingleWordCase(moveData.name)}.shtml`;
    moveEntry.bulbapediaPage = `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleSnakeCase(moveData.name)}_(move)`;
    moveEntry.smogonPage = `https://www.smogon.com/dex/sm/moves/${Util.toLowerHyphenCase(moveData.name)}`;
    moveEntry.isZ = Util.parseZCrystal(moveData.isZ) || undefined;
    moveEntry.desc = moveData.desc;

    return moveEntry;
  }
}