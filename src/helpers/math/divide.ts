/**
 * Returns the result of dividing the first number by the second.
 * @param {number|string} val1 - The dividend (or numeric string).
 * @param {number|string} val2 - The divisor (or numeric string).
 * @return {number} The quotient of `val1 / val2`.
 * @example
 * // results in: 5
 * hbs.compile("{{divide a b}}")({"a": 10, "b": 2});
 *
 * // results in: 3.5
 * hbs.compile("{{divide a b}}")({"a": 7, "b": 2});
 */
export default (val1: number|string, val2: number|string): number => {
  return Number(val1) / Number(val2);
}
