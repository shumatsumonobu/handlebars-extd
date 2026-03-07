const hbs = require('../dist/build.common.js');

describe('Array Helpers', () => {

  // findObjectInArray
  describe('findObjectInArray', () => {
    test('finds object by field value', () => {
      const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
      expect(hbs.compile("{{lookup (findObjectInArray users 'id' 1) 'name'}}")({users}))
        .toBe('Alice');
    });
    test('finds second object', () => {
      const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
      expect(hbs.compile("{{lookup (findObjectInArray users 'id' 2) 'name'}}")({users}))
        .toBe('Bob');
    });
    test('returns empty when no match', () => {
      const users = [{id: 1, name: 'Alice'}];
      expect(hbs.compile("{{findObjectInArray users 'id' 99}}")({users}))
        .toBe('');
    });
    test('returns empty for undefined field value', () => {
      const users = [{id: 1, name: 'Alice'}];
      expect(hbs.compile("{{findObjectInArray users 'id'}}")({users}))
        .toBe('');
    });
    test('returns empty for null array', () => {
      expect(hbs.compile("{{findObjectInArray users 'id' 1}}")({users: null}))
        .toBe('');
    });
    test('works with string field values', () => {
      const items = [{code: 'JP', name: 'Japan'}, {code: 'US', name: 'USA'}];
      expect(hbs.compile("{{lookup (findObjectInArray items 'code' 'JP') 'name'}}")({items}))
        .toBe('Japan');
    });
  });
});
