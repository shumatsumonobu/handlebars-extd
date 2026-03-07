/**
 * Converts a string to uppercase.
 * If the value is not a string, it is returned as-is.
 * @param {string} val - The string to convert.
 * @return {string} The uppercase string.
 * @example
 * // results in: HELLO WORLD
 * hbs.compile("{{uppercase str}}")({"str": "hello world"});
 *
 * // results in: ALREADY UPPERCASE
 * hbs.compile("{{uppercase str}}")({"str": "ALREADY UPPERCASE"});
 */
declare const _default: (val: string) => string;
export default _default;
