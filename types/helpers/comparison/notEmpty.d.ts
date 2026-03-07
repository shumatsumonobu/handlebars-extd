/**
 * Checks whether the given value is not empty.
 * For strings, leading and trailing whitespace (including full-width spaces) is trimmed before checking.
 * For arrays, returns `false` if the array has no elements.
 * @param {any} val - The value to check (string, array, object, etc.).
 * @return {boolean} `true` if the value is not empty, `false` otherwise.
 * @example
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val": []});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val": ["foo"]});
 *
 * // results in: true
 * hbs.compile("{{notEmpty val}}")({"val": "Hello"});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val": ""});
 *
 * // results in: false
 * hbs.compile("{{notEmpty val}}")({"val": " "});
 */
declare const _default: (val: any) => boolean;
export default _default;
