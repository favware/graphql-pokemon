import type { GraphQLSet } from '#utils/GraphQLSet';
import { isFunction, isNullish } from '@sapphire/utilities';

/**
 * Adds a property to an object conditionally based on a given condition.
 *
 * @template T - The type of the object.
 * @template K - The type of the property key.
 * @param {AddPropertyToObjectConditionalParameters<T, K>} params - The parameters for adding the property.
 * @returns The object with the property added conditionally.
 */
export function addPropertyToObjectConditional<T extends object, K extends keyof T>({
  objectTarget,
  propertyKey,
  propertyValue,
  condition
}: AddPropertyToObjectConditionalParameters<T, K>): T {
  if (condition) {
    addPropertyToObject({
      objectTarget,
      propertyKey,
      propertyValue
    });
  }

  return objectTarget;
}

/**
 * Adds a property to an object based on the requested fields.
 * If the requested fields include the field accessor, the property is added to the object.
 *
 * @template T - The type of the object.
 * @template K - The type of the property key.
 * @param {AddPropertyToObjectParameters<T, K>} params - The parameters for adding the property.
 * @returns The object with the property added.
 */
export function addPropertyToObjectFieldBased<T extends object, K extends keyof T>({
  objectTarget,
  propertyKey,
  propertyValue,
  requestedFields,
  fieldAccessor = propertyKey as string
}: AddPropertyToObjectParameters<T, K>): T {
  if (requestedFields.has(fieldAccessor as K)) {
    addPropertyToObject({
      objectTarget,
      propertyKey,
      propertyValue
    });
  }

  return objectTarget;
}

/**
 * Adds a property to an object.
 *
 * @template T - The type of the object.
 * @template K - The key of the property to be added.
 * @param params - The `objectTarget`, `propertyKey`, and `propertyValue` parameters.
 */
function addPropertyToObject<T extends object, K extends keyof T>({
  objectTarget,
  propertyKey,
  propertyValue
}: Omit<AddPropertyToObjectParameters<T, K>, 'requestedFields' | 'fieldAccessor'>): void {
  const resolvedPropertyValue = isFunction(propertyValue) ? (propertyValue as () => T[K] | null)() : propertyValue;

  if (!isNullish(resolvedPropertyValue)) {
    Reflect.set(objectTarget, propertyKey, resolvedPropertyValue);
  }
}

/**
 * Represents the conditional parameters for adding a property to an object.
 * @template T - The type of the object.
 * @template K - The key of the property to be added.
 */
type AddPropertyToObjectConditionalParameters<T extends object, K extends keyof T> = Omit<
  AddPropertyToObjectParameters<T, K>,
  'requestedFields' | 'fieldAccessor'
> & {
  condition: boolean;
};

/**
 * Represents the parameters for adding a property to an object.
 * @template T - The type of the object.
 * @template K - The type of the property key.
 */
interface AddPropertyToObjectParameters<T extends object, K extends keyof T> {
  objectTarget: T;
  propertyKey: K;
  propertyValue: T[K] | (() => T[K] | null);
  requestedFields: GraphQLSet<K>;
  fieldAccessor?: string;
}
