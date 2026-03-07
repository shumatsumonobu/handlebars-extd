/**
 * Formats a number as a locale-sensitive string using `Number.prototype.toLocaleString()`.
 * Accepts an optional BCP 47 language tag to specify the locale.
 * @param {number|string} val - The number (or numeric string) to format.
 * @param {string} [locales] - A BCP 47 language tag (e.g., `'en-US'`, `'de-DE'`, `'ja-JP'`).
 * @return {string} The locale-formatted number string.
 * @example
 * // results in: 123,456.789 (default locale)
 * hbs.compile("{{number2locale val}}")({val: 123456.789});
 *
 * // German: comma as decimal separator, period for thousands
 * // results in: 123.456,789
 * hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
 *
 * // Japanese:
 * // results in: 123,456.789
 * hbs.compile("{{number2locale val 'ja-JP'}}")({val: 123456.789});
 */
declare const _default: (val: number | string, locales?: string) => string;
export default _default;
