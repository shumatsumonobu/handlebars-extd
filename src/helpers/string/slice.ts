/**
 * Extracts a portion of a string between the specified indices.
 * Supports negative indices for extraction from the end of the string.
 * @param {string} val - The string to extract from.
 * @param {number} start - The zero-based start index of extraction.
 * @param {number} [end] - The zero-based end index (exclusive). If omitted, extracts to the end of the string.
 * @return {string} The extracted substring.
 * @example
 * // results in: Just
 * hbs.compile("{{slice str 0 4}}")({"str": "Just Wow"});
 *
 * // results in: Wow
 * hbs.compile("{{slice str 5}}")({"str": "Just Wow"});
 *
 * // results in:  Wow (negative index: last 4 characters)
 * hbs.compile("{{slice str -4}}")({"str": "Just Wow"});
 */
export default (val: string, start: number, end?: number) => {
  if (typeof val !== 'string' || typeof start !== 'number')
    return val;
  if (val.length < start)
    return val;
  if (typeof end !== 'number')
    return val.slice(start);
  return val.slice(start, end);
}
