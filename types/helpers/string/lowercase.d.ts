/**
 * Converts a string to lowercase.
 * If the value is not a string, it is returned as-is.
 * @param {string} val - The string to convert.
 * @return {string} The lowercase string.
 * @example
 * // results in: hello world
 * hbs.compile("{{lowercase str}}")({"str": "Hello World"});
 *
 * // results in: already lowercase
 * hbs.compile("{{lowercase str}}")({"str": "already lowercase"});
 */
declare const _default: (val: string) => string;
export default _default;
