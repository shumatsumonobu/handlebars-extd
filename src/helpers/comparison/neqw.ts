/**
 * Checks whether two values are loosely not equal (`!=`).
 * Unlike `neq`, this performs type coercion before comparison.
 * @param {any} val1 - The first value.
 * @param {any} val2 - The second value.
 * @return {boolean} `true` if the values are loosely not equal, `false` otherwise.
 * @example
 * // results in: false (loose comparison: "3" == 3)
 * hbs.compile("{{neqw a b}}")({"a": "3", "b": 3});
 *
 * // results in: true
 * hbs.compile("{{neqw a b}}")({"a": "hello", "b": "world"});
 */
export default (val1: any, val2: any): boolean => {
  return val1 != val2;
}
