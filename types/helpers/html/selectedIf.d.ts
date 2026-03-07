/**
 * Returns the `selected` attribute string if the condition is truthy, otherwise returns an empty string.
 * Useful for conditionally setting the selected state of `<option>` elements.
 * @param {boolean} expression - The condition to evaluate.
 * @return {string} `"selected"` if truthy, `""` otherwise.
 * @example
 * // results in: <option selected>Apple</option>
 * hbs.compile('<option {{selectedIf isDefault}}>Apple</option>')({isDefault: true});
 *
 * // results in: <option >Banana</option>
 * hbs.compile('<option {{selectedIf isDefault}}>Banana</option>')({isDefault: false});
 */
declare const _default: (expression: boolean) => string;
export default _default;
