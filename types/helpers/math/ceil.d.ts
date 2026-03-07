/**
 * Rounds a number up to the nearest integer (ceiling).
 * @param {number|string} val - The number (or numeric string) to round up.
 * @return {number} The smallest integer greater than or equal to the given number.
 * @example
 * // results in: 6
 * hbs.compile("{{ceil a}}")({"a": 5.1});
 *
 * // results in: -5
 * hbs.compile("{{ceil a}}")({"a": -5.9});
 */
declare const _default: (val: number | string) => number;
export default _default;
