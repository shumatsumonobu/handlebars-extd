/**
 * Replaces newline characters (`\n`, `\r\n`, `\r`) with HTML `<br>` tags.
 * Use triple-stache `{{{nltobr ...}}}` to prevent HTML escaping.
 * @param {string} val - The string containing newlines to convert.
 * @return {string} The string with newlines replaced by `<br>`.
 * @example
 * // results in: Line 1<br>Line 2<br>Line 3
 * hbs.compile("{{{nltobr str}}}")({"str": "Line 1\nLine 2\nLine 3"});
 */
export default (val: string): string => {
  return val.replace(/\r?\n|\r/g, '<br>');
}
