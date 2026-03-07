const hbs = require('../dist/build.common.js');

describe('Comparison Helpers', () => {

  // eq - strict equality (===)
  describe('eq', () => {
    test('returns true for equal numbers', () => {
      expect(hbs.compile('{{eq a b}}')({a: 3, b: 3})).toBe('true');
    });
    test('returns false for different types', () => {
      expect(hbs.compile('{{eq a b}}')({a: '3', b: 3})).toBe('false');
    });
    test('returns true for equal strings', () => {
      expect(hbs.compile('{{eq a b}}')({a: 'hello', b: 'hello'})).toBe('true');
    });
    test('returns false for different values', () => {
      expect(hbs.compile('{{eq a b}}')({a: 1, b: 2})).toBe('false');
    });
  });

  // neq - strict inequality (!==)
  describe('neq', () => {
    test('returns true for different values', () => {
      expect(hbs.compile('{{neq a b}}')({a: 4, b: 3})).toBe('true');
    });
    test('returns false for equal values', () => {
      expect(hbs.compile('{{neq a b}}')({a: 3, b: 3})).toBe('false');
    });
    test('returns true for different types', () => {
      expect(hbs.compile('{{neq a b}}')({a: '3', b: 3})).toBe('true');
    });
  });

  // eqw - loose equality (==)
  describe('eqw', () => {
    test('returns true with type coercion', () => {
      expect(hbs.compile('{{eqw a b}}')({a: '3', b: 3})).toBe('true');
    });
    test('returns false for different values', () => {
      expect(hbs.compile('{{eqw a b}}')({a: 'hello', b: 'world'})).toBe('false');
    });
    test('returns true for null and undefined', () => {
      expect(hbs.compile('{{eqw a b}}')({a: null, b: undefined})).toBe('true');
    });
  });

  // neqw - loose inequality (!=)
  describe('neqw', () => {
    test('returns false with type coercion', () => {
      expect(hbs.compile('{{neqw a b}}')({a: '3', b: 3})).toBe('false');
    });
    test('returns true for different values', () => {
      expect(hbs.compile('{{neqw a b}}')({a: 'hello', b: 'world'})).toBe('true');
    });
  });

  // gt - greater than
  describe('gt', () => {
    test('returns true when a > b', () => {
      expect(hbs.compile('{{gt a b}}')({a: 5, b: 3})).toBe('true');
    });
    test('returns false when a < b', () => {
      expect(hbs.compile('{{gt a b}}')({a: 2, b: 3})).toBe('false');
    });
    test('returns false when equal', () => {
      expect(hbs.compile('{{gt a b}}')({a: 3, b: 3})).toBe('false');
    });
  });

  // gte - greater than or equal
  describe('gte', () => {
    test('returns true when a > b', () => {
      expect(hbs.compile('{{gte a b}}')({a: 5, b: 3})).toBe('true');
    });
    test('returns true when equal', () => {
      expect(hbs.compile('{{gte a b}}')({a: 3, b: 3})).toBe('true');
    });
    test('returns false when a < b', () => {
      expect(hbs.compile('{{gte a b}}')({a: 2, b: 3})).toBe('false');
    });
  });

  // lt - less than
  describe('lt', () => {
    test('returns true when a < b', () => {
      expect(hbs.compile('{{lt a b}}')({a: 2, b: 3})).toBe('true');
    });
    test('returns false when a > b', () => {
      expect(hbs.compile('{{lt a b}}')({a: 5, b: 3})).toBe('false');
    });
    test('returns false when equal', () => {
      expect(hbs.compile('{{lt a b}}')({a: 3, b: 3})).toBe('false');
    });
  });

  // lte - less than or equal
  describe('lte', () => {
    test('returns true when a < b', () => {
      expect(hbs.compile('{{lte a b}}')({a: 2, b: 3})).toBe('true');
    });
    test('returns true when equal', () => {
      expect(hbs.compile('{{lte a b}}')({a: 3, b: 3})).toBe('true');
    });
    test('returns false when a > b', () => {
      expect(hbs.compile('{{lte a b}}')({a: 5, b: 3})).toBe('false');
    });
  });

  // opr - generic operator comparison
  describe('opr', () => {
    test('=== strict equality', () => {
      expect(hbs.compile("{{opr a '===' b}}")({a: 3, b: 3})).toBe('true');
      expect(hbs.compile("{{opr a '===' b}}")({a: '3', b: 3})).toBe('false');
    });
    test('== loose equality', () => {
      expect(hbs.compile("{{opr a '==' b}}")({a: '3', b: 3})).toBe('true');
    });
    test('!== strict inequality', () => {
      expect(hbs.compile("{{opr a '!==' b}}")({a: '3', b: 3})).toBe('true');
    });
    test('!= loose inequality', () => {
      expect(hbs.compile("{{opr a '!=' b}}")({a: '3', b: 3})).toBe('false');
    });
    test('< less than', () => {
      expect(hbs.compile("{{opr a '<' b}}")({a: 2, b: 3})).toBe('true');
    });
    test('> greater than', () => {
      expect(hbs.compile("{{opr a '>' b}}")({a: 5, b: 3})).toBe('true');
    });
    test('<= less than or equal', () => {
      expect(hbs.compile("{{opr a '<=' b}}")({a: 3, b: 3})).toBe('true');
    });
    test('>= greater than or equal', () => {
      expect(hbs.compile("{{opr a '>=' b}}")({a: 3, b: 3})).toBe('true');
    });
  });

  // and - logical AND
  describe('and', () => {
    test('returns true when all truthy', () => {
      expect(hbs.compile('{{and a b}}')({a: true, b: true})).toBe('true');
    });
    test('returns false when one is falsy', () => {
      expect(hbs.compile('{{and a b}}')({a: false, b: true})).toBe('false');
    });
    test('works with three arguments', () => {
      expect(hbs.compile('{{and a b c}}')({a: true, b: true, c: false})).toBe('false');
      expect(hbs.compile('{{and a b c}}')({a: true, b: true, c: true})).toBe('true');
    });
  });

  // or - logical OR
  describe('or', () => {
    test('returns true when one is truthy', () => {
      expect(hbs.compile('{{or a b}}')({a: true, b: false})).toBe('true');
    });
    test('returns false when all falsy', () => {
      expect(hbs.compile('{{or a b}}')({a: false, b: false})).toBe('false');
    });
    test('works with three arguments', () => {
      expect(hbs.compile('{{or a b c}}')({a: false, b: false, c: true})).toBe('true');
    });
  });

  // not - logical NOT
  describe('not', () => {
    test('negates true', () => {
      expect(hbs.compile('{{not true}}')()).toBe('false');
    });
    test('negates false', () => {
      expect(hbs.compile('{{not false}}')()).toBe('true');
    });
    test('negates empty string', () => {
      expect(hbs.compile('{{not val}}')({val: ''})).toBe('true');
    });
    test('negates truthy value', () => {
      expect(hbs.compile('{{not val}}')({val: 'hello'})).toBe('false');
    });
  });

  // empty
  describe('empty', () => {
    test('returns true for empty array', () => {
      expect(hbs.compile('{{empty val}}')({val: []})).toBe('true');
    });
    test('returns false for non-empty array', () => {
      expect(hbs.compile('{{empty val}}')({val: ['foo']})).toBe('false');
    });
    test('returns true for empty string', () => {
      expect(hbs.compile('{{empty val}}')({val: ''})).toBe('true');
    });
    test('returns true for whitespace-only string', () => {
      expect(hbs.compile('{{empty val}}')({val: '   '})).toBe('true');
    });
    test('returns false for non-empty string', () => {
      expect(hbs.compile('{{empty val}}')({val: 'Hello'})).toBe('false');
    });
    test('returns true for null', () => {
      expect(hbs.compile('{{empty val}}')({val: null})).toBe('true');
    });
    test('returns true for undefined', () => {
      expect(hbs.compile('{{empty val}}')({val: undefined})).toBe('true');
    });
  });

  // notEmpty
  describe('notEmpty', () => {
    test('returns false for empty array', () => {
      expect(hbs.compile('{{notEmpty val}}')({val: []})).toBe('false');
    });
    test('returns true for non-empty array', () => {
      expect(hbs.compile('{{notEmpty val}}')({val: ['foo']})).toBe('true');
    });
    test('returns false for empty string', () => {
      expect(hbs.compile('{{notEmpty val}}')({val: ''})).toBe('false');
    });
    test('returns false for whitespace-only string', () => {
      expect(hbs.compile('{{notEmpty val}}')({val: '   '})).toBe('false');
    });
    test('returns true for non-empty string', () => {
      expect(hbs.compile('{{notEmpty val}}')({val: 'Hello'})).toBe('true');
    });
  });

  // ifx - ternary conditional
  describe('ifx', () => {
    test('returns trueValue when condition is true', () => {
      expect(hbs.compile('{{ifx true a b}}')({a: 'Yes', b: 'No'})).toBe('Yes');
    });
    test('returns falseValue when condition is false', () => {
      expect(hbs.compile('{{ifx false a b}}')({a: 'Yes', b: 'No'})).toBe('No');
    });
    test('returns empty string when falseValue omitted and condition is false', () => {
      expect(hbs.compile('{{ifx false a}}')({a: 'Yes'})).toBe('');
    });
  });

  // coalesce
  describe('coalesce', () => {
    test('returns first truthy value', () => {
      expect(hbs.compile('{{coalesce a b c}}')({a: '', b: 'bar', c: 'baz'})).toBe('bar');
    });
    test('returns literal default', () => {
      expect(hbs.compile("{{coalesce a b 'default'}}")({a: '', b: null})).toBe('default');
    });
    test('returns first value if truthy', () => {
      expect(hbs.compile('{{coalesce a b}}')({a: 'foo', b: 'bar'})).toBe('foo');
    });
  });

  // includes
  describe('includes', () => {
    test('returns true when value is in array', () => {
      expect(hbs.compile('{{includes list a}}')({list: [1, 2, 3], a: 2})).toBe('true');
    });
    test('returns false when value is not in array', () => {
      expect(hbs.compile('{{includes list a}}')({list: [1, 2, 3], a: 10})).toBe('false');
    });
    test('strict mode: string vs number', () => {
      expect(hbs.compile('{{includes list a}}')({list: [1, 2, 3], a: '3'})).toBe('false');
    });
    test('non-strict mode: string vs number', () => {
      expect(hbs.compile('{{includes list a strict}}')({list: [1, 2, 3], a: '3', strict: false})).toBe('true');
    });
    test('returns false for empty array', () => {
      expect(hbs.compile('{{includes list a}}')({list: [], a: 1})).toBe('false');
    });
    test('returns false for non-array', () => {
      expect(hbs.compile('{{includes list a}}')({list: 'not array', a: 1})).toBe('false');
    });
  });

  // count
  describe('count', () => {
    test('returns array length', () => {
      expect(hbs.compile('{{count collection}}')({collection: ['a', 'b', 'c']})).toBe('3');
    });
    test('returns 0 for empty array', () => {
      expect(hbs.compile('{{count collection}}')({collection: []})).toBe('0');
    });
    test('returns false for non-array', () => {
      expect(hbs.compile('{{count collection}}')({collection: 'not an array'})).toBe('false');
    });
  });

  // regexMatch
  describe('regexMatch', () => {
    test('matches simple pattern', () => {
      expect(hbs.compile("{{regexMatch 'foobar' 'foo'}}")()).toBe('true');
    });
    test('does not match when pattern absent', () => {
      expect(hbs.compile("{{regexMatch 'bar' 'foo'}}")()).toBe('false');
    });
    test('exact match with anchors', () => {
      expect(hbs.compile("{{regexMatch 'foobar' '^foo$'}}")()).toBe('false');
    });
    test('case-insensitive flag', () => {
      expect(hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")()).toBe('true');
    });
    test('case-sensitive by default', () => {
      expect(hbs.compile("{{regexMatch 'Visit Here' 'here'}}")()).toBe('false');
    });
    test('works inside {{#if}} block', () => {
      expect(hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")()).toBe('Match');
    });
  });
});
