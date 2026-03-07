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
declare const _default: (...args: string[]) => string;
export default _default;
