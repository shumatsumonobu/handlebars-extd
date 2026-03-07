/**
 * Checks whether two values are loosely equal (`==`).
 * Unlike `eq`, this performs type coercion before comparison.
 * @param {any} val1 - The first value.
 * @param {any} val2 - The second value.
 * @return {boolean} `true` if both values are loosely equal, `false` otherwise.
 * @example
 * // results in: true (loose comparison: type coercion applied)
 * hbs.compile("{{eqw a b}}")({"a": "3", "b": 3});
 *
 * // results in: false
 * hbs.compile("{{eqw a b}}")({"a": "hello", "b": "world"});
 */
declare const _default: (val1: any, val2: any) => boolean;
export default _default;
