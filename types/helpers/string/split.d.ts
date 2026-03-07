/**
 * Splits a string into an array by the specified separator.
 * If the separator is omitted, a comma (`","`) is used by default.
 * Returns an empty array if the value is not a string or is empty.
 * @param {string} val - The string to split.
 * @param {string} [separator=','] - The separator to split by. Defaults to `","`.
 * @return {string[]} An array of substrings.
 * @example
 * // results in: ['a', 'b', 'c']
 * hbs.compile("{{split list}}")({"list": "a,b,c"});
 *
 * // Using with {{#each}} to iterate over split values:
 * // results in: <ul><li>a</li><li>b</li><li>c</li></ul>
 * hbs.compile("<ul>{{#each (split list ',')}}<li>{{this}}</li>{{/each}}</ul>")({"list": "a,b,c"});
 */
declare const _default: (val: string, separator: string) => string[];
export default _default;
