/**
 * Strips HTML tags from a string.
 * Optionally allows specific tags to be preserved, and supports replacing removed tags with a custom string.
 * @param {string} str - The HTML string to strip tags from.
 * @param {string|string[]} [allowedTags=[]] - Tags to preserve (e.g., `['strong', 'em']`). Defaults to none.
 * @param {string} [replacement=''] - A string to replace removed tags with. Defaults to an empty string.
 * @return {string} The string with HTML tags removed (or replaced).
 * @example
 * // Strip all tags:
 * // results in: lorem ipsum dolor sit amet
 * hbs.compile("{{{stripTags html}}}")({
 *   html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
 * });
 *
 * // Preserve specific tags:
 * // results in: lorem ipsum <strong>dolor</strong> sit amet
 * hbs.compile("{{{stripTags html allowedTags}}}")({
 *   html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
 *   allowedTags: ['strong'],
 * });
 *
 * // Replace tags with a custom string:
 * // results in: [removed]lorem ipsum [removed]dolor[removed] [removed]sit[removed] amet[removed]
 * hbs.compile("{{{stripTags html allowedTags replacement}}}")({
 *   html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
 *   allowedTags: [],
 *   replacement: '[removed]',
 * });
 */
declare const _default: (str: string, allowedTags?: string | string[], replacement?: string) => string;
export default _default;
