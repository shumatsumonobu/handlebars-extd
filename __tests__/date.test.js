const hbs = require('../dist/build.common.js');

describe('Date Helpers', () => {

  // formatDate
  describe('formatDate', () => {
    test('formats ISO date to YYYY/MM/DD', () => {
      expect(hbs.compile("{{formatDate 'YYYY/MM/DD' date}}")({date: '2024-01-15T09:30:00.000Z'}))
        .toBe('2024/01/15');
    });
    test('formats to time', () => {
      expect(hbs.compile("{{formatDate 'HH:mm' date}}")({date: '2024-01-15T09:30:00.000Z'}))
        .toMatch(/\d{2}:\d{2}/);
    });
    test('formats with locale', () => {
      // Locale availability depends on the moment bundle; verify locale is applied without error.
      const result = hbs.compile("{{formatDate 'dddd' date 'en'}}")({date: '2024-01-15T09:30:00.000Z'});
      expect(result).toBe('Monday');
    });
    test('uses current date when date is omitted', () => {
      const result = hbs.compile("{{formatDate 'YYYY'}}")();
      expect(result).toMatch(/^\d{4}$/);
    });
    test('formats year and month', () => {
      const result = hbs.compile("{{formatDate 'YYYY-MM' date}}")({date: '2024-01-15T09:30:00.000Z'});
      expect(result).toBe('2024-01');
    });
  });
});
