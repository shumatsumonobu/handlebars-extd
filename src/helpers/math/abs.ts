/**
 * Returns the absolute value of a number.
 * @param {number|string} val - The number (or numeric string) to compute the absolute value of.
 * @return {number} The absolute value.
 * @example
 * // results in: 5.6
 * hbs.compile("{{abs a}}")({"a": -5.6});
 *
 * // results in: 42
 * hbs.compile("{{abs a}}")({"a": 42});
 */
export default (val: number|string): number => {
  return Math.abs(Number(val));
}
