/**
 * Generates HTML `<option>` elements for a `<select>` dropdown from an array of data objects.
 * By default, each object is expected to have `value` and `text` properties.
 * Use the `value` and `text` hash options to specify custom property names.
 * Use the `selected` hash option to mark an option as selected.
 * @param {{[key: string]: string}[]} data - The array of data objects for generating options.
 * @param {object} options - Handlebars hash options: `selected`, `value`, `text`.
 * @return {string} A string of `<option>` HTML elements joined by newlines.
 * @example
 * // Basic usage:
 * // results in:
 * // <option value="1">foo</option>
 * // <option value="2" selected>bar</option>
 * hbs.compile("{{{options data selected='2'}}}")({
 *   "data": [
 *     {"value": 1, "text": "foo"},
 *     {"value": 2, "text": "bar"}
 *   ]
 * });
 *
 * // Custom key names:
 * // results in:
 * // <option value="392" selected>JAPAN</option>
 * // <option value="840">UNITED STATES</option>
 * hbs.compile("{{{options data selected='392' value='code' text='name'}}}")({
 *   "data": [
 *     {"code": 392, "name": "JAPAN"},
 *     {"code": 840, "name": "UNITED STATES"}
 *   ]
 * });
 */
export default (data: {[key: string]: string}[], options: {hash: {[key: string]: string}}): string => {
  // Determine which properties to use for value and display text.
  const valueKey = options.hash.value || 'value';
  const textKey = options.hash.text || 'text';

  // The value to mark as selected.
  const selectedValue = options.hash.selected || null;
  return data.map(item => {
    const value = item[valueKey] || '';
    const text = item[textKey] || '';
    const selected = value == selectedValue ? ' selected' : '';
    return `<option value="${value}"${selected}>${text}</option>`;
  }).join('\n');
}
