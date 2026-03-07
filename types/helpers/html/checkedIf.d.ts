/**
 * Returns the `checked` attribute string if the condition is truthy, otherwise returns an empty string.
 * Useful for conditionally setting the checked state of checkboxes and radio buttons.
 * @param {boolean} expression - The condition to evaluate.
 * @return {string} `"checked"` if truthy, `""` otherwise.
 * @example
 * // results in: <input type="checkbox" checked>
 * hbs.compile('<input type="checkbox" {{checkedIf isActive}}>')({isActive: true});
 *
 * // results in: <input type="checkbox" >
 * hbs.compile('<input type="checkbox" {{checkedIf isActive}}>')({isActive: false});
 */
declare const _default: (expression: boolean) => string;
export default _default;
