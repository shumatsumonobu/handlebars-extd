import * as utils from '~/utils';

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
export default (...args: any[]): boolean => {
  // Remove the Handlebars options object appended as the last argument.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i = 0; i < args.length; i++)
    if (args[i])
      return true;
  return false;
}
