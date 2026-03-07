import * as utils from '~/utils';

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
export default (val: string): string => {
  return utils.isString(val) ? val.toUpperCase() : val;
}
