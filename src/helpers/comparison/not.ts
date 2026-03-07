/**
 * Returns the logical NOT of the given expression.
 * @param {any} expression - The expression to negate.
 * @return {boolean} `true` if the expression is falsy, `false` if truthy.
 * @example
 * // results in: false
 * hbs.compile("{{not true}}")();
 *
 * // results in: true
 * hbs.compile("{{not false}}")();
 *
 * // results in: true
 * hbs.compile("{{not val}}")({"val": ""});
 */
export default (expression: any): boolean => {
  return !expression;
}
