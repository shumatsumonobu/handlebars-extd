/**
 * Returns the specified CSS class name if the condition is truthy, otherwise returns an empty string.
 * Useful for conditionally applying CSS classes in templates.
 * @param {boolean} expression - The condition to evaluate.
 * @param {string} className - The CSS class name to return if the condition is truthy.
 * @return {string} The class name if truthy, `""` otherwise.
 * @example
 * // results in: <div class="active">
 * hbs.compile('<div class="{{classIf isActive \'active\'}}">')({isActive: true});
 *
 * // results in: <div class="">
 * hbs.compile('<div class="{{classIf isActive \'active\'}}">')({isActive: false});
 */
declare const _default: (expression: boolean, className: string) => string;
export default _default;
