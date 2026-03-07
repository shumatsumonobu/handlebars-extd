/**
 * Returns the boolean AND of two or more parameters.
 * Evaluates to `true` only if all parameters are truthy.
 * @param {...any} args - Any number of values to evaluate.
 * @return {boolean} `true` if all parameters are truthy, `false` otherwise.
 * @example
 * // results in: true
 * hbs.compile("{{and a b}}")({"a": true, "b": true});
 *
 * // results in: false
 * hbs.compile("{{and a b}}")({"a": false, "b": true});
 *
 * // results in: false
 * hbs.compile("{{and a b c}}")({"a": true, "b": true, "c": false});
 */
declare const _default: (...args: any[]) => boolean;
export default _default;
