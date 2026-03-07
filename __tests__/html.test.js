const hbs = require('../dist/build.common.js');

describe('HTML Helpers', () => {

  // checkedIf
  describe('checkedIf', () => {
    test('returns "checked" when truthy', () => {
      expect(hbs.compile('<input {{checkedIf isActive}}>')({isActive: true}))
        .toBe('<input checked>');
    });
    test('returns empty string when falsy', () => {
      expect(hbs.compile('<input {{checkedIf isActive}}>')({isActive: false}))
        .toBe('<input >');
    });
  });

  // selectedIf
  describe('selectedIf', () => {
    test('returns "selected" when truthy', () => {
      expect(hbs.compile('<option {{selectedIf isDefault}}>A</option>')({isDefault: true}))
        .toBe('<option selected>A</option>');
    });
    test('returns empty string when falsy', () => {
      expect(hbs.compile('<option {{selectedIf isDefault}}>A</option>')({isDefault: false}))
        .toBe('<option >A</option>');
    });
  });

  // classIf
  describe('classIf', () => {
    test('returns class name when truthy', () => {
      expect(hbs.compile('<div class="{{classIf isActive \'active\'}}">')({isActive: true}))
        .toBe('<div class="active">');
    });
    test('returns empty string when falsy', () => {
      expect(hbs.compile('<div class="{{classIf isActive \'active\'}}">')({isActive: false}))
        .toBe('<div class="">');
    });
  });

  // options
  describe('options', () => {
    test('generates option elements', () => {
      const result = hbs.compile("{{{options data selected='2'}}}")({
        data: [{value: 1, text: 'foo'}, {value: 2, text: 'bar'}]
      });
      expect(result).toContain('<option value="1">foo</option>');
      expect(result).toContain('<option value="2" selected>bar</option>');
    });
    test('custom key names', () => {
      const result = hbs.compile("{{{options data selected='392' value='code' text='name'}}}")({
        data: [{code: 392, name: 'JAPAN'}, {code: 840, name: 'UNITED STATES'}]
      });
      expect(result).toContain('<option value="392" selected>JAPAN</option>');
      expect(result).toContain('<option value="840">UNITED STATES</option>');
    });
    test('no selection', () => {
      const result = hbs.compile("{{{options data}}}")({
        data: [{value: 'a', text: 'A'}, {value: 'b', text: 'B'}]
      });
      expect(result).not.toContain('selected');
    });
  });

  // stripTags
  describe('stripTags', () => {
    test('strips all HTML tags', () => {
      const result = hbs.compile('{{{stripTags html}}}')({
        html: '<a href="#">lorem <strong>ipsum</strong> dolor</a>'
      });
      expect(result).toBe('lorem ipsum dolor');
    });
    test('preserves allowed tags', () => {
      const result = hbs.compile('{{{stripTags html allowedTags}}}')({
        html: '<a href="#">lorem <strong>ipsum</strong> <em>dolor</em></a>',
        allowedTags: ['strong']
      });
      expect(result).toContain('<strong>ipsum</strong>');
      expect(result).not.toContain('<a');
      expect(result).not.toContain('<em');
    });
    test('replaces tags with custom string', () => {
      const result = hbs.compile('{{{stripTags html allowedTags replacement}}}')({
        html: '<p>hello</p>',
        allowedTags: [],
        replacement: '[x]'
      });
      expect(result).toContain('[x]');
      expect(result).toContain('hello');
      expect(result).not.toContain('<p>');
    });
  });
});
