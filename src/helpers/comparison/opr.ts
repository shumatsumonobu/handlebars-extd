/**
 * Compares two values using the specified operator.
 * Supports all standard comparison operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`.
 * @param {any} val1 - The first value (left operand).
 * @param {'=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>='} operator - The comparison operator. Must be enclosed in quotes in the template.
 * @param {any} val2 - The second value (right operand).
 * @return {boolean} The result of the comparison.
 * @throws {Error} If an unsupported operator is provided.
 * @example
 * // results in: false (strict: different types)
 * hbs.compile("{{opr a '===' b}}")({"a": "3", "b": 3});
 *
 * // results in: true (loose: type coercion)
 * hbs.compile("{{opr a '==' b}}")({"a": "3", "b": 3});
 *
 * // results in: true
 * hbs.compile("{{opr a '<' b}}")({"a": 2, "b": 3});
 *
 * // results in: true
 * hbs.compile("{{opr a '>=' b}}")({"a": 3, "b": 3});
 */
export default (val1: any, operator: '=='|'==='|'!='|'!=='|'<'|'>'|'<='|'>=', val2: any): boolean => {
  switch (operator) {
    case '==':  return val1 == val2;
    case '===': return val1 === val2;
    case '!=':  return val1 != val2;
    case '!==': return val1 !== val2;
    case '<':   return val1 < val2;
    case '>':   return val1 > val2;
    case '<=':  return val1 <= val2;
    case '>=':  return val1 >= val2;
    default:    throw new Error(`opr helper: unsupported operator "${operator}"`);
  }
}
