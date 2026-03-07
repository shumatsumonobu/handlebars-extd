# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/).

## [1.0.14] - 2026/3/8

### Added
- Unit tests for all 42 helpers (158 test cases).

### Changed
- Upgrade all dependencies to latest — Rollup v4, TypeScript 5.9, Jest 30, and more.
- Consolidate API reference into README. Remove separate documentation site (`docs/`).
- Improve JSDoc and inline comments across all helpers. Fix incorrect examples.
- Rename `helpers/strings/` directory to `helpers/string/` for consistency.
- Improve internal variable names (`clazz` → `className`, `opr` → `operator`, etc.) without breaking the public API.
- Clean up project config files (`tsconfig.json`, Rollup configs, `.gitignore`, `.npmignore`).

### Fixed
- Fix triple negation bug (`!!!val` → `!val`) in `empty` helper.
- Fix incorrect example results in `gte` and `lte` helpers.
- Fix duplicate condition bug in `split` helper (checked `val` twice instead of `separator`).
- Fix unused parameter in `abs` helper example.

## [1.0.13] - 2025/2/4

### Fixed
- Fix typo in `stripTags` example code.

## [1.0.12] - 2025/2/4

### Added
- New helper: **`stripTags`** — Strip HTML tags from a string, with support for allowlists and custom replacement text.
  ```js
  hbs.compile('{{{stripTags html}}}')({
    html: '<a href="#">lorem <strong>ipsum</strong> dolor</a>'
  });
  // => "lorem ipsum dolor"
  ```

## [1.0.11] - 2025/1/14

### Added
- New helper: **`findObjectInArray`** — Find an object in an array by field name and value.
  ```js
  const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
  hbs.compile("{{lookup (findObjectInArray users 'id' 1) 'name'}}")({users});
  // => "Alice"
  ```

## [1.0.10] - 2024/7/31

### Fixed
- Resolve `TypeError: Cannot read properties of undefined (reading 'Symbol')` when iterating over objects with `{{#each}}`.

## [1.0.9] - 2024/3/1

### Changed
- Reorganize helpers into category-based directories. No API changes.

## [1.0.8] - 2023/7/1

### Added
- New helper: **`regexMatch`** — Test strings against regular expression patterns with optional flags.
  ```js
  hbs.compile("{{regexMatch 'foobar' 'foo'}}")();           // true
  hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();  // true (case-insensitive)
  ```

## [1.0.7] - 2023/6/18

### Added
- New helpers: **`multiply`** and **`divide`** — Arithmetic multiplication and division.
  ```js
  hbs.compile('{{multiply a b}}')({a: 5, b: 2});   // 10
  hbs.compile('{{divide a b}}')({a: 10, b: 2});     // 5
  ```

## [1.0.6] - 2023/6/14

### Added
- New helper: **`number2locale`** — Format numbers with locale-sensitive separators via `toLocaleString()`.
  ```js
  hbs.compile('{{number2locale val}}')({val: 123456.789});             // "123,456.789"
  hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});     // "123.456,789"
  ```

## [1.0.5] - 2022/12/23

### Security
- Bump `moment` from 2.29.1 to 2.29.4 to address [GHSA-8hfj-j24r-96c4](https://github.com/moment/moment/security/advisories/GHSA-8hfj-j24r-96c4).

## [1.0.4] - 2022/4/20

### Fixed
- Fix runtime error in Node.js when using the `opr` helper.

## [1.0.3] - 2022/4/19

### Added
- New helper: **`split`** — Split a string into an array by separator, works great with `{{#each}}`.
  ```js
  hbs.compile("<ul>{{#each (split list ',')}}<li>{{this}}</li>{{/each}}</ul>")({list: 'a,b,c'});
  // => "<ul><li>a</li><li>b</li><li>c</li></ul>"
  ```

## [1.0.2] - 2022/1/17

### Changed
- **`empty`** now supports all types — previously only arrays were checked. Strings are trimmed before evaluation.

## [1.0.1] - 2022/1/17

### Added
- New helper: **`notEmpty`** — Inverse of `empty`. Returns `true` when the value is non-empty.

## [1.0.0] - 2021/10/24

### Added
- Initial release.

[1.0.0]: https://github.com/shumatsumonobu/handlebars-extd/releases/tag/v1.0.0
[1.0.1]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.5...v1.0.6
[1.0.7]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.6...v1.0.7
[1.0.8]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.7...v1.0.8
[1.0.9]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.8...v1.0.9
[1.0.10]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.9...v1.0.10
[1.0.11]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.10...v1.0.11
[1.0.12]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.11...v1.0.12
[1.0.13]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.12...v1.0.13
[1.0.14]: https://github.com/shumatsumonobu/handlebars-extd/compare/v1.0.13...v1.0.14
