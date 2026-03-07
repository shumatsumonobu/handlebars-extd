/**
 * Checks whether two values are strictly not equal (`!==`).
 * @param {any} val1 - The first value.
 * @param {any} val2 - The second value.
 * @return {boolean} `true` if the values are strictly not equal, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{neq a b}}")({"a": 4, "b": 3});
 *
 * // results in: false
 * hbs.compile("{{neq a b}}")({"a": 3, "b": 3});
 */
export default (val1: any, val2: any): boolean => {
  return val1 !== val2;
}
