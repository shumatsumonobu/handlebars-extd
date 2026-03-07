/**
 * Returns the difference of two numbers (subtraction).
 * @param {number|string} val1 - The first number (or numeric string) to subtract from.
 * @param {number|string} val2 - The second number (or numeric string) to subtract.
 * @return {number} The result of `val1 - val2`.
 * @example
 * // results in: 3
 * hbs.compile("{{sub a b}}")({"a": 5, "b": 2});
 *
 * // results in: -5
 * hbs.compile("{{sub a b}}")({"a": 10, "b": 15});
 */
export default (val1: number|string, val2: number|string): number => {
  return Number(val1) - Number(val2);
}
