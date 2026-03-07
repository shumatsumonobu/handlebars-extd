import * as utils from '~/utils';

/**
 * Joins the elements of an array into a string with the specified separator.
 * If the separator is omitted, a comma (`","`) is used by default.
 * Returns `false` if the input is not an array.
 * @param {string[]} collection - The array of strings to join.
 * @param {string} [separator=','] - The separator string. Defaults to `","`.
 * @return {string|boolean} The joined string, or `false` if the input is not an array.
 * @example
 * // results in: apple, banana, cherry
 * hbs.compile("{{{join collection ', '}}}")({"collection": ["apple", "banana", "cherry"]});
 *
 * // results in: a-b-c (custom separator)
 * hbs.compile("{{{join collection '-'}}}")({"collection": ["a", "b", "c"]});
 *
 * // results in: a,b,c (default separator)
 * hbs.compile("{{{join collection}}}")({"collection": ["a", "b", "c"]});
 */
export default (collection: string[], separator: string = ','): string|boolean => {
  // When separator is omitted, Handlebars passes its options object instead.
  if (!separator || utils.isObject(separator))
    separator = ',';
  if (!utils.isArray(collection))
    return false;
  return collection.join(separator);
}
