/**
 * Returns the boolean OR of two or more parameters.
 * Evaluates to `true` if any of the parameters is truthy.
 * @param {...any} args - Any number of values to evaluate.
 * @return {boolean} `true` if at least one parameter is truthy, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{or a b}}")({"a": true, "b": false});
 *
 * // results in: false
 * hbs.compile("{{or a b}}")({"a": false, "b": false});
 *
 * // results in: true
 * hbs.compile("{{or a b c}}")({"a": false, "b": false, "c": true});
 */
declare const _default: (...args: any[]) => boolean;
export default _default;
