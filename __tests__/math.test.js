const hbs = require('../dist/build.common.js');

describe('Math Helpers', () => {

  // add
  describe('add', () => {
    test('adds two numbers', () => {
      expect(hbs.compile('{{add a b}}')({a: 10, b: 5})).toBe('15');
    });
    test('adds numeric strings', () => {
      expect(hbs.compile('{{add a b}}')({a: '20', b: 10})).toBe('30');
    });
    test('adds negative numbers', () => {
      expect(hbs.compile('{{add a b}}')({a: -3, b: 7})).toBe('4');
    });
    test('adds decimals', () => {
      expect(hbs.compile('{{add a b}}')({a: 1.5, b: 2.3})).toBe('3.8');
    });
  });

  // sub
  describe('sub', () => {
    test('subtracts two numbers', () => {
      expect(hbs.compile('{{sub a b}}')({a: 10, b: 3})).toBe('7');
    });
    test('returns negative result', () => {
      expect(hbs.compile('{{sub a b}}')({a: 3, b: 10})).toBe('-7');
    });
    test('subtracts numeric strings', () => {
      expect(hbs.compile('{{sub a b}}')({a: '20', b: '5'})).toBe('15');
    });
  });

  // multiply
  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(hbs.compile('{{multiply a b}}')({a: 5, b: 2})).toBe('10');
    });
    test('multiplies decimals', () => {
      expect(hbs.compile('{{multiply a b}}')({a: 2.5, b: 3})).toBe('7.5');
    });
    test('multiplies numeric strings', () => {
      expect(hbs.compile('{{multiply a b}}')({a: '4', b: '3'})).toBe('12');
    });
  });

  // divide
  describe('divide', () => {
    test('divides two numbers', () => {
      expect(hbs.compile('{{divide a b}}')({a: 10, b: 2})).toBe('5');
    });
    test('returns decimal result', () => {
      expect(hbs.compile('{{divide a b}}')({a: 7, b: 2})).toBe('3.5');
    });
    test('divides numeric strings', () => {
      expect(hbs.compile('{{divide a b}}')({a: '100', b: '4'})).toBe('25');
    });
  });

  // abs
  describe('abs', () => {
    test('returns absolute value of negative number', () => {
      expect(hbs.compile('{{abs a}}')({a: -5.6})).toBe('5.6');
    });
    test('returns positive number as-is', () => {
      expect(hbs.compile('{{abs a}}')({a: 42})).toBe('42');
    });
    test('works with numeric strings', () => {
      expect(hbs.compile('{{abs a}}')({a: '-10'})).toBe('10');
    });
    test('returns 0 for zero', () => {
      expect(hbs.compile('{{abs a}}')({a: 0})).toBe('0');
    });
  });

  // ceil
  describe('ceil', () => {
    test('rounds up positive decimal', () => {
      expect(hbs.compile('{{ceil a}}')({a: 5.1})).toBe('6');
    });
    test('rounds up negative decimal', () => {
      expect(hbs.compile('{{ceil a}}')({a: -5.9})).toBe('-5');
    });
    test('integer stays the same', () => {
      expect(hbs.compile('{{ceil a}}')({a: 3})).toBe('3');
    });
    test('works with numeric strings', () => {
      expect(hbs.compile('{{ceil a}}')({a: '4.2'})).toBe('5');
    });
  });

  // floor
  describe('floor', () => {
    test('rounds down positive decimal', () => {
      expect(hbs.compile('{{floor a}}')({a: 5.9})).toBe('5');
    });
    test('rounds down negative decimal', () => {
      expect(hbs.compile('{{floor a}}')({a: -5.1})).toBe('-6');
    });
    test('integer stays the same', () => {
      expect(hbs.compile('{{floor a}}')({a: 3})).toBe('3');
    });
    test('works with numeric strings', () => {
      expect(hbs.compile('{{floor a}}')({a: '7.8'})).toBe('7');
    });
  });
});
