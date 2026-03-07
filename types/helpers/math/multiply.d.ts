/**
 * Returns the product of two numbers.
 * @param {number|string} val1 - The first number (or numeric string).
 * @param {number|string} val2 - The second number (or numeric string).
 * @return {number} The product of `val1 * val2`.
 * @example
 * // results in: 10
 * hbs.compile("{{multiply a b}}")({"a": 5, "b": 2});
 *
 * // results in: 7.5
 * hbs.compile("{{multiply a b}}")({"a": 2.5, "b": 3});
 */
declare const _default: (val1: number | string, val2: number | string) => number;
export default _default;
