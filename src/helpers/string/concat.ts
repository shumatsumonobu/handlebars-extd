import * as utils from '~/utils';

/**
 * Concatenates two or more strings together.
 * @param {...string} args - Any number of string arguments to concatenate.
 * @return {string} The concatenated string.
 * @example
 * // results in: Hello world!
 * hbs.compile("{{concat 'Hello' ' world' '!'}}")();
 *
 * // results in: foobar
 * hbs.compile("{{concat a b}}")({"a": "foo", "b": "bar"});
 */
export default (...args: string[]) => {
  // Remove the Handlebars options object appended as the last argument.
  if (utils.isObject(args[args.length - 1]))
    args.pop();
  return args.join('');
}
