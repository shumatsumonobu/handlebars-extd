const hbs = require('../dist/build.common.js');

describe('String Helpers', () => {

  // uppercase
  describe('uppercase', () => {
    test('converts to uppercase', () => {
      expect(hbs.compile('{{uppercase str}}')({str: 'hello world'})).toBe('HELLO WORLD');
    });
    test('already uppercase stays the same', () => {
      expect(hbs.compile('{{uppercase str}}')({str: 'HELLO'})).toBe('HELLO');
    });
    test('non-string value returned as-is', () => {
      expect(hbs.compile('{{uppercase str}}')({str: 123})).toBe('123');
    });
  });

  // lowercase
  describe('lowercase', () => {
    test('converts to lowercase', () => {
      expect(hbs.compile('{{lowercase str}}')({str: 'Hello World'})).toBe('hello world');
    });
    test('already lowercase stays the same', () => {
      expect(hbs.compile('{{lowercase str}}')({str: 'hello'})).toBe('hello');
    });
    test('non-string value returned as-is', () => {
      expect(hbs.compile('{{lowercase str}}')({str: 456})).toBe('456');
    });
  });

  // concat
  describe('concat', () => {
    test('concatenates two strings', () => {
      expect(hbs.compile('{{concat a b}}')({a: 'foo', b: 'bar'})).toBe('foobar');
    });
    test('concatenates literal strings', () => {
      expect(hbs.compile("{{concat 'Hello' ' world' '!'}}")()).toBe('Hello world!');
    });
    test('concatenates multiple strings', () => {
      expect(hbs.compile('{{concat a b c}}')({a: 'a', b: 'b', c: 'c'})).toBe('abc');
    });
  });

  // join
  describe('join', () => {
    test('joins with custom separator', () => {
      expect(hbs.compile("{{{join collection ', '}}}")({collection: ['apple', 'banana', 'cherry']}))
        .toBe('apple, banana, cherry');
    });
    test('joins with dash separator', () => {
      expect(hbs.compile("{{{join collection '-'}}}")({collection: ['a', 'b', 'c']}))
        .toBe('a-b-c');
    });
    test('joins with default comma separator', () => {
      expect(hbs.compile('{{{join collection}}}')({collection: ['a', 'b', 'c']}))
        .toBe('a,b,c');
    });
    test('returns false for non-array', () => {
      expect(hbs.compile('{{{join collection}}}')({collection: 'not array'}))
        .toBe('false');
    });
  });

  // split
  describe('split', () => {
    test('splits by default comma separator', () => {
      const result = hbs.compile("{{#each (split list)}}{{this}} {{/each}}")({list: 'a,b,c'});
      expect(result).toBe('a b c ');
    });
    test('splits by custom separator', () => {
      const result = hbs.compile("{{#each (split list '-')}}{{this}} {{/each}}")({list: 'x-y-z'});
      expect(result).toBe('x y z ');
    });
    test('returns empty for empty string', () => {
      const result = hbs.compile("{{#each (split list)}}{{this}}{{/each}}")({list: ''});
      expect(result).toBe('');
    });
    test('returns empty for non-string', () => {
      const result = hbs.compile("{{#each (split list)}}{{this}}{{/each}}")({list: 123});
      expect(result).toBe('');
    });
    test('works with each to generate HTML', () => {
      const result = hbs.compile("<ul>{{#each (split list ',')}}<li>{{this}}</li>{{/each}}</ul>")({list: 'a,b,c'});
      expect(result).toBe('<ul><li>a</li><li>b</li><li>c</li></ul>');
    });
  });

  // slice
  describe('slice', () => {
    test('slices with start and end', () => {
      expect(hbs.compile('{{slice str 0 4}}')({str: 'Just Wow'})).toBe('Just');
    });
    test('slices from start to end of string', () => {
      expect(hbs.compile('{{slice str 5}}')({str: 'Just Wow'})).toBe('Wow');
    });
    test('supports negative index', () => {
      expect(hbs.compile('{{slice str -3}}')({str: 'Just Wow'})).toBe('Wow');
    });
    test('returns original if start exceeds length', () => {
      expect(hbs.compile('{{slice str 100}}')({str: 'short'})).toBe('short');
    });
    test('returns value as-is for non-string', () => {
      expect(hbs.compile('{{slice str 0}}')({str: 123})).toBe('123');
    });
  });

  // nltobr
  describe('nltobr', () => {
    test('replaces newlines with <br>', () => {
      expect(hbs.compile('{{{nltobr str}}}')({str: 'Line 1\nLine 2\nLine 3'}))
        .toBe('Line 1<br>Line 2<br>Line 3');
    });
    test('handles \\r\\n', () => {
      expect(hbs.compile('{{{nltobr str}}}')({str: 'A\r\nB'}))
        .toBe('A<br>B');
    });
    test('handles \\r only', () => {
      expect(hbs.compile('{{{nltobr str}}}')({str: 'A\rB'}))
        .toBe('A<br>B');
    });
  });

  // sprintf
  describe('sprintf', () => {
    test('formats with positional %s', () => {
      expect(hbs.compile("{{sprintf '%s %s!' s1 s2}}")({s1: 'Hello', s2: 'World'}))
        .toBe('Hello World!');
    });
    test('formats with %d and %.2f', () => {
      expect(hbs.compile("{{sprintf 'Count: %d, Price: $%.2f' count price}}")({count: 42, price: 9.99}))
        .toBe('Count: 42, Price: $9.99');
    });
    test('returns format string when no args', () => {
      expect(hbs.compile("{{sprintf 'Hello'}}")()).toBe('Hello');
    });
    test('named arguments with hash', () => {
      expect(hbs.compile("{{sprintf 'Hello %(name)s' name=str}}")({str: 'Bob'}))
        .toBe('Hello Bob');
    });
  });
});
