/**
 * Finds the first object in an array that matches the specified field name and value.
 * Returns the matched object, or `null` if no match is found.
 * @param {Array<{[key: string]: any}>} array - The array of objects to search.
 * @param {string} fieldName - The property name to match against.
 * @param {*} fieldValue - The value to match.
 * @return {object|null} The first matching object, or `null` if no match is found.
 * @example
 * // results in: "Alice"
 * const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
 * hbs.compile("{{lookup (findObjectInArray users 'id' 1) 'name'}}")({users});
 *
 * // results in: null
 * const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
 * hbs.compile("{{findObjectInArray users 'id' 99}}")({users});
 */
export default (array: Array<{[key: string]: any}>, fieldName: string, fieldValue: any): object|null => {
  if (!array || !fieldName || fieldValue === undefined)
    return null;
  return array.find(item => item[fieldName] === fieldValue) ?? null;
}
