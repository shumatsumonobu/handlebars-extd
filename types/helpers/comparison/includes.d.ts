/**
 * Checks whether an array contains a specific value.
 * By default, uses strict equality (`===`). Set `strict` to `false` for loose equality (`==`).
 * @param {any[]} collection - The array to search in.
 * @param {any} val - The value to search for.
 * @param {boolean} [strict=true] - Whether to use strict equality. Defaults to `true`.
 * @return {boolean} `true` if the value is found, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{includes collection a}}")({"collection": [1, 2, 3, 4], "a": 2});
 *
 * // results in: false
 * hbs.compile("{{includes collection a}}")({"collection": [1, 2, 3, 4], "a": 10});
 *
 * // results in: false (strict: "3" !== 3)
 * hbs.compile("{{includes collection a}}")({"collection": [1, 2, 3, 4], "a": "3"});
 *
 * // results in: true (non-strict: "3" == 3)
 * hbs.compile("{{includes collection a strict}}")({"collection": [1, 2, 3, 4], "a": "3", "strict": false});
 */
declare const _default: (collection: any[], val: any, strict?: boolean) => boolean;
export default _default;
