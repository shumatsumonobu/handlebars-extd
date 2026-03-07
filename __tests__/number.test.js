const hbs = require('../dist/build.common.js');

describe('Number Helpers', () => {

  // number2locale
  describe('number2locale', () => {
    test('formats number with default locale', () => {
      const result = hbs.compile('{{number2locale val}}')({val: 123456.789});
      // Locale-dependent, but should contain digits and separators.
      expect(result).toMatch(/123.*456.*789/);
    });
    test('formats with de-DE locale', () => {
      const result = hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
      // German: period for thousands, comma for decimal.
      expect(result).toBe('123.456,789');
    });
    test('formats numeric string', () => {
      const result = hbs.compile('{{number2locale val}}')({val: '9876'});
      expect(result).toMatch(/9.*876/);
    });
    test('formats zero', () => {
      const result = hbs.compile('{{number2locale val}}')({val: 0});
      expect(result).toBe('0');
    });
    test('formats negative number', () => {
      const result = hbs.compile("{{number2locale val 'en-US'}}")({val: -42000});
      expect(result).toBe('-42,000');
    });
  });
});
