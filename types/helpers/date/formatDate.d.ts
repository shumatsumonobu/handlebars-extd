/**
 * Formats a date using Moment.js format strings.
 * If no date is provided, the current date/time is used.
 * @param {string} format - A Moment.js format string (e.g., `'YYYY/MM/DD'`, `'HH:mm:ss'`).
 * @param {string} date - The date string to format. If omitted, uses the current date.
 * @param {string|string[]} [locale] - A locale string (e.g., `'ja'`, `'en'`) or array of locale strings for localized formatting.
 * @return {string} The formatted date string.
 * @example
 * // results in: 2024/01/15
 * hbs.compile("{{formatDate 'YYYY/MM/DD' date}}")({"date": "2024-01-15T09:30:00.000Z"});
 *
 * // With locale (Japanese month name):
 * // results in: 2024年1月15日
 * hbs.compile("{{formatDate 'YYYY\u5E74M\u6708D\u65E5' date 'ja'}}")({"date": "2024-01-15T09:30:00.000Z"});
 *
 * // With locale (Spanish day name):
 * // results in: lunes
 * hbs.compile("{{formatDate 'dddd' date 'es'}}")({"date": "2024-01-15T09:30:00.000Z"});
 */
declare const _default: (format: string, date: string, locale: string | string[]) => string;
export default _default;
