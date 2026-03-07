/**
 * Rounds a number down to the nearest integer (floor).
 * @param {number|string} val - The number (or numeric string) to round down.
 * @return {number} The largest integer less than or equal to the given number.
 * @example
 * // results in: 5
 * hbs.compile("{{floor a}}")({"a": 5.9});
 *
 * // results in: -6
 * hbs.compile("{{floor a}}")({"a": -5.1});
 */
declare const _default: (val: number | string) => number;
export default _default;
