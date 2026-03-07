/**
 * Tests whether a string matches a regular expression pattern.
 * @param {string} val - The string to test against the regular expression.
 * @param {string} pattern - The regular expression pattern.
 * @param {string} [flags] - Optional regex flags (e.g., `'i'` for case-insensitive, `'g'` for global).
 * @return {boolean} `true` if the string matches the pattern, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{regexMatch 'foobar' 'foo'}}")();
 *
 * // results in: false
 * hbs.compile("{{regexMatch 'bar' 'foo'}}")();
 *
 * // results in: false (exact match required)
 * hbs.compile("{{regexMatch 'foobar' '^foo$'}}")();
 *
 * // results in: true (case-insensitive flag)
 * hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();
 *
 * // results in: false (case-sensitive by default)
 * hbs.compile("{{regexMatch 'Visit Here' 'here'}}")();
 *
 * // Can be used with {{#if}} blocks:
 * // results in: Match
 * hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")();
 */
declare const _default: (val: string, pattern: string, flags?: string) => boolean;
export default _default;
