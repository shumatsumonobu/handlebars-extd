import * as utils from '~/utils';

/**
 * Ternary conditional helper, similar to the `?:` operator.
 * Returns `trueValue` if the condition is truthy, otherwise returns `falseValue`.
 * If `falseValue` is omitted, an empty string is returned when the condition is falsy.
 * @param {boolean} condition - The condition to evaluate.
 * @param {any} trueValue - The value to return when the condition is truthy.
 * @param {any} falseValue - The value to return when the condition is falsy (optional, defaults to `""`).
 * @return {any} `trueValue` if condition is truthy, `falseValue` otherwise.
 * @example
 * // results in: Yes
 * hbs.compile("{{ifx true a b}}")({"a": "Yes", "b": "No"});
 *
 * // results in: No
 * hbs.compile("{{ifx false a b}}")({"a": "Yes", "b": "No"});
 *
 * // results in: (empty string, falseValue omitted)
 * hbs.compile("{{ifx false a}}")({"a": "Yes"});
 */
export default (condition: boolean, trueValue: any, falseValue: any): any => {
  // When the user omits falseValue, Handlebars passes its options object
  // as the last argument. Detect this and default to an empty string.
  if (utils.isObject(falseValue) && falseValue.name === 'ifx' && falseValue.hasOwnProperty('hash'))
    falseValue = '';
  return condition ? trueValue : falseValue;
}
