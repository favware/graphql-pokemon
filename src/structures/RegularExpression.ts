import { GraphQLScalarType } from 'graphql/type/definition';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

type RegularExpressionErrorMessageFn = (r: RegExp, v: unknown) => string;

export interface RegularExpressionOptions {
  errorMessage?: RegularExpressionErrorMessageFn;
}

export default class RegularExpression extends GraphQLScalarType {
  constructor(
    name: string,
    regex: RegExp,
    options: RegularExpressionOptions = {},
  ) {
    const REGEX = new RegExp(regex);
    const errorMessage: RegularExpressionErrorMessageFn = options.errorMessage
      ? options.errorMessage
      : (r, v) => `Value does not match the regular expression ${r}: ${v}`;
    super({
      name,

      description: `A field whose value matches the provided regular expression ${regex}.`,

      serialize(value) {
        if (typeof value !== 'string') {
          throw new TypeError(`Value is not string: ${value}`);
        }

        if (!REGEX.test(value)) {
          throw new TypeError(errorMessage(regex, value));
        }

        return value;
      },

      parseValue(value) {
        if (typeof value !== 'string') {
          throw new TypeError(`Value is not string: ${value}`);
        }

        if (!REGEX.test(value)) {
          throw new TypeError(errorMessage(regex, value));
        }

        return value;
      },

      parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
          throw new GraphQLError(
            `Can only validate strings as regular expressions but got a: ${
              ast.kind
            }`,
          );
        }

        if (!REGEX.test(ast.value)) {
          throw new TypeError(errorMessage(regex, ast.value));
        }

        return ast.value;
      },
    });
  }
}

export const MoveCategoryUnion = new RegularExpression('MoveCategoryUnion', /^(?:Physical|Special|Status)$/);
export const MoveTargetUnion = new RegularExpression(
  'MoveTargetUnion',
  /^(?=randomNormal|Self|Adjacent ally or self|Adjacent Ally|Adjacent foes|Adjacent foe|All adjacent foes|All adjacent|Any|Foe that last hit user|Foe\\'s side|Ally\\'s side|Normal|All)[\w \\']+$/
);