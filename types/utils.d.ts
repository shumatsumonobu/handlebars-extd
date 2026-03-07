/**
 * Checks whether the given value is a function.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is a function, `false` otherwise.
 */
declare function isFunction(value: unknown): value is Function;
/**
 * Checks whether the given value is a string.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is a string, `false` otherwise.
 */
declare function isString(value: unknown): value is string;
/**
 * Checks whether the given value is undefined.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is undefined, `false` otherwise.
 */
declare function isUndefined(value: unknown): value is undefined;
/**
 * Checks whether the given value is defined (not undefined).
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is not undefined, `false` otherwise.
 */
declare function isDefined(value: unknown): boolean;
/**
 * Checks whether the given value is a plain object (not null, not an array).
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is a plain object, `false` otherwise.
 */
declare function isObject(value: unknown): value is Record<string, unknown>;
/**
 * Checks whether the given value is an array.
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is an array, `false` otherwise.
 */
declare function isArray(value: unknown): value is unknown[];
/**
 * Checks whether the given value is numeric (can be parsed as a finite number).
 * @param {unknown} value - The value to check.
 * @return {boolean} `true` if the value is numeric, `false` otherwise.
 */
declare function isNumeric(value: unknown): boolean;
export { isFunction, isString, isUndefined, isDefined, isObject, isArray, isNumeric };
