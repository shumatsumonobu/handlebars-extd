/**
 * Checks whether the first value is less than or equal to the second (`a <= b`).
 * @param {any} val1 - The first value.
 * @param {any} val2 - The second value.
 * @return {boolean} `true` if `val1 <= val2`, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{lte a b}}")({"a": 2, "b": 3});
 *
 * // results in: true
 * hbs.compile("{{lte a b}}")({"a": 3, "b": 3});
 *
 * // results in: false
 * hbs.compile("{{lte a b}}")({"a": 5, "b": 3});
 */
declare const _default: (val1: any, val2: any) => boolean;
export default _default;
