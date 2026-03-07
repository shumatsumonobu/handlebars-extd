/**
 * Checks whether the given value is empty.
 * For strings, leading and trailing whitespace (including full-width spaces) is trimmed before checking.
 * For arrays, returns `true` if the array has no elements.
 * @param {any} val - The value to check (string, array, object, etc.).
 * @return {boolean} `true` if the value is empty, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{empty val}}")({"val": []});
 *
 * // results in: false
 * hbs.compile("{{empty val}}")({"val": ["foo"]});
 *
 * // results in: false
 * hbs.compile("{{empty val}}")({"val": "Hello"});
 *
 * // results in: true
 * hbs.compile("{{empty val}}")({"val": ""});
 *
 * // results in: true
 * hbs.compile("{{empty val}}")({"val": " "});
 */
declare const _default: (val: any) => boolean;
export default _default;
