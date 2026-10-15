import { s, type SchemaOf } from '@sapphire/shapeshift';
import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base';

export interface GetFuzzyMoveArgs extends BaseFuzzyArgs {
	/**
	 * The move to fuzzily search
	 */
	move: string;
}

const getFuzzyMoveSchema: SchemaOf<GetFuzzyMoveArgs> = baseFuzzySchema.extend({
	move: s.string({ message: 'The move has to be a string' })
});

export function validateGetFuzzyMoveArgs(args: GetFuzzyMoveArgs): GetFuzzyMoveArgs {
	return getFuzzyMoveSchema.parse(args);
}
