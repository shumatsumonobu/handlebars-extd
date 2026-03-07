/**
 * Returns the sum of two numbers.
 * @param {number|string} val1 - The first number (or numeric string).
 * @param {number|string} val2 - The second number (or numeric string).
 * @return {number} The sum of `val1` and `val2`.
 * @example
 * // results in: 15
 * hbs.compile("{{add a b}}")({"a": 10, "b": 5});
 *
 * // results in: 30
 * hbs.compile("{{add a b}}")({"a": "20", "b": 10});
 */
declare const _default: (val1: number | string, val2: number | string) => number;
export default _default;
