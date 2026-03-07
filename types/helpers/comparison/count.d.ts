/**
 * Returns the length of an array.
 * If the value is not an array, returns `false`.
 * @param {any[]} collection - The array whose length to determine.
 * @return {number|false} The number of elements in the array, or `false` if the value is not an array.
 * @example
 * // results in: 3
 * hbs.compile("{{count collection}}")({"collection": ["apple", "banana", "cherry"]});
 *
 * // results in: 0
 * hbs.compile("{{count collection}}")({"collection": []});
 *
 * // results in: false
 * hbs.compile("{{count collection}}")({"collection": "not an array"});
 */
declare const _default: (collection: any[]) => number | false;
export default _default;
