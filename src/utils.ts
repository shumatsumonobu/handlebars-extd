/**
 * Checks whether the given value is a function.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is a function, `false` otherwise.
 */
function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Checks whether the given value is a string.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is a string, `false` otherwise.
 */
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Checks whether the given value is undefined.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is undefined, `false` otherwise.
 */
function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Checks whether the given value is defined (not undefined).
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is not undefined, `false` otherwise.
 */
function isDefined(value: unknown): boolean {
  return !isUndefined(value);
}

/**
 * Checks whether the given value is a plain object (not null, not an array).
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is a plain object, `false` otherwise.
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Checks whether the given value is an array.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is an array, `false` otherwise.
 */
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Checks whether the given value is numeric (can be parsed as a finite number).
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is numeric, `false` otherwise.
 */
function isNumeric(value: unknown): boolean {
  return !isNaN(parseFloat(value as string)) && isFinite(value as number);
}

export {isFunction, isString, isUndefined, isDefined, isObject, isArray, isNumeric}
