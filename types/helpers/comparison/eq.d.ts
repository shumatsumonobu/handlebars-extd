/**
 * Checks whether two values are strictly equal (`===`).
 * @param {any} val1 - The first value.
 * @param {any} val2 - The second value.
 * @return {boolean} `true` if both values are strictly equal, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{eq a b}}")({"a": 3, "b": 3});
 *
 * // results in: false (strict comparison: different types)
 * hbs.compile("{{eq a b}}")({"a": "3", "b": 3});
 */
declare const _default: (val1: any, val2: any) => boolean;
export default _default;
