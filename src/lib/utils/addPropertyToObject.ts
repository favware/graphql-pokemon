import type { GraphQLSet } from '#utils/GraphQLSet';
import { isFunction, isNullish } from '@sapphire/utilities';

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

type AddPropertyToObjectConditionalParameters<T extends object, K extends keyof T> = Omit<
  AddPropertyToObjectParameters<T, K>,
  'requestedFields' | 'fieldAccessor'
> & {
  condition: boolean;
};

interface AddPropertyToObjectParameters<T extends object, K extends keyof T> {
  objectTarget: T;
  propertyKey: K;
  propertyValue: T[K] | (() => T[K] | null);
  requestedFields: GraphQLSet<K>;
  fieldAccessor?: string;
}
