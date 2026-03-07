import * as utils from '~/utils';

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
export default (...args: any[]): boolean => {
  // Remove the Handlebars options object appended as the last argument.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i = 0; i < args.length; i++)
    if (!args[i])
      return false;
  return true;
}
