import * as utils from '~/utils';

/**
 * Returns the first non-falsy value from the parameter list.
 * If all values are falsy, returns the last value.
 * @param {...any} args - Any number of values to evaluate.
 * @return {any} The first truthy value, or the last value if none are truthy.
 * @example
 * // results in: foo
 * hbs.compile("{{coalesce a b c}}")({"a": "foo", "b": "bar", "c": "baz"});
 *
 * // results in: bar
 * hbs.compile("{{coalesce a b c}}")({"a": "", "b": "bar", "c": "baz"});
 *
 * // results in: default
 * hbs.compile("{{coalesce a b 'default'}}")({"a": "", "b": null});
 */
export default (...args: any[]): any => {
  // Remove the Handlebars options object appended as the last argument.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  for (let i = 0; i < args.length; i++)
    if (args[i])
      return args[i];
  return args.pop();
}
