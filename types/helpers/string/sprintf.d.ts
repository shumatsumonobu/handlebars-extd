/**
 * Formats a string using sprintf-style format specifiers.
 * Uses sprintf-js internally. See https://github.com/alexei/sprintf.js for full format specification.
 * @param {string} format - The format string containing specifiers like `%s`, `%d`, `%(name)s`, etc.
 * @param {...any} args - Values to substitute into the format string.
 * @return {string} The formatted string.
 * @example
 * // Positional arguments:
 * // results in: Hello World!
 * hbs.compile("{{sprintf '%s %s!' str1 str2}}")({"str1": "Hello", "str2": "World"});
 *
 * // Mixed types:
 * // results in: Item count: 42, price: $9.99
 * hbs.compile("{{sprintf 'Item count: %d, price: $%.2f' count price}}")({"count": 42, "price": 9.99});
 *
 * // Named arguments:
 * // results in: Hello Alice
 * hbs.compile("{{sprintf 'Hello %(name)s' user}}")({"user": {"name": "Alice"}});
 *
 * // Named arguments with hash:
 * // results in: Hello Bob
 * hbs.compile("{{sprintf 'Hello %(name)s' name=str}}")({"str": "Bob"});
 */
declare const _default: (format: string, ...args: any[]) => string;
export default _default;
