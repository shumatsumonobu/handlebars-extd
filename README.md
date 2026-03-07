# handlebars-extd

**40+ production-ready Handlebars helpers** for comparison, string manipulation, math, dates, HTML generation, and more.

Works in Node.js and the browser. Zero config. Just `import` and go.

```bash
npm install handlebars-extd
```

```js
const hbs = require('handlebars-extd');

hbs.compile('{{#if (gt price 100)}}Expensive{{/if}}')({price: 250});
// => "Expensive"

hbs.compile('{{formatDate "YYYY/MM/DD" date}}')({date: '2024-01-15T09:30:00Z'});
// => "2024/01/15"

hbs.compile('{{uppercase greeting}}')({greeting: 'hello world'});
// => "HELLO WORLD"
```

## Comparison Helpers

### `eq` / `neq`

Strict equality (`===`) and strict inequality (`!==`).

```js
hbs.compile('{{eq a b}}')({a: 3, b: 3});           // true
hbs.compile('{{eq a b}}')({a: '3', b: 3});          // false (different types)
hbs.compile('{{neq a b}}')({a: 4, b: 3});           // true
```

### `eqw` / `neqw`

Loose equality (`==`) and loose inequality (`!=`). Type coercion is applied.

```js
hbs.compile('{{eqw a b}}')({a: '3', b: 3});         // true
hbs.compile('{{neqw a b}}')({a: '3', b: 3});         // false
```

### `gt` / `gte` / `lt` / `lte`

Greater than, greater than or equal, less than, less than or equal.

```js
hbs.compile('{{gt a b}}')({a: 5, b: 3});             // true
hbs.compile('{{gte a b}}')({a: 3, b: 3});            // true
hbs.compile('{{lt a b}}')({a: 2, b: 3});             // true
hbs.compile('{{lte a b}}')({a: 3, b: 3});            // true
```

### `opr`

Generic comparison operator. Supports `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`.

```js
hbs.compile("{{opr a '===' b}}")({a: '3', b: 3});   // false
hbs.compile("{{opr a '==' b}}")({a: '3', b: 3});    // true
hbs.compile("{{opr a '<' b}}")({a: 2, b: 3});       // true
```

### `and` / `or` / `not`

Logical operators. `and` and `or` accept any number of arguments.

```js
hbs.compile('{{and a b}}')({a: true, b: true});      // true
hbs.compile('{{and a b c}}')({a: true, b: true, c: false}); // false
hbs.compile('{{or a b}}')({a: false, b: true});      // true
hbs.compile('{{not false}}')();                       // true
```

### `empty` / `notEmpty`

Checks whether a value is empty. Trims whitespace (including full-width spaces) from strings. Treats empty arrays as empty.

```js
hbs.compile('{{empty val}}')({val: []});              // true
hbs.compile('{{empty val}}')({val: ''});              // true
hbs.compile('{{empty val}}')({val: ' '});             // true
hbs.compile('{{notEmpty val}}')({val: 'Hello'});      // true
```

### `ifx`

Ternary conditional, similar to `condition ? trueValue : falseValue`.

```js
hbs.compile('{{ifx true a b}}')({a: 'Yes', b: 'No'}); // "Yes"
hbs.compile('{{ifx false a b}}')({a: 'Yes', b: 'No'}); // "No"
```

### `coalesce`

Returns the first truthy value from the argument list. Falls back to the last value if none are truthy.

```js
hbs.compile('{{coalesce a b c}}')({a: '', b: 'bar', c: 'baz'}); // "bar"
hbs.compile("{{coalesce a b 'default'}}")({a: '', b: null});     // "default"
```

### `includes`

Checks whether an array contains a value. Uses strict equality by default.

```js
hbs.compile('{{includes list a}}')({list: [1, 2, 3], a: 2});                  // true
hbs.compile('{{includes list a}}')({list: [1, 2, 3], a: '3'});                // false (strict)
hbs.compile('{{includes list a strict}}')({list: [1, 2, 3], a: '3', strict: false}); // true
```

### `count`

Returns the length of an array, or `false` if the value is not an array.

```js
hbs.compile('{{count collection}}')({collection: ['a', 'b', 'c']}); // 3
hbs.compile('{{count collection}}')({collection: 'not an array'});   // false
```

### `regexMatch`

Tests whether a string matches a regular expression pattern.

```js
hbs.compile("{{regexMatch 'foobar' 'foo'}}")();                  // true
hbs.compile("{{regexMatch 'foobar' '^foo$'}}")();                 // false
hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();         // true (case-insensitive)
hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")(); // "Match"
```

## String Helpers

### `uppercase` / `lowercase`

Converts a string to uppercase or lowercase.

```js
hbs.compile('{{uppercase str}}')({str: 'hello world'});   // "HELLO WORLD"
hbs.compile('{{lowercase str}}')({str: 'Hello World'});   // "hello world"
```

### `concat`

Concatenates any number of strings.

```js
hbs.compile("{{concat 'Hello' ' world' '!'}}")();            // "Hello world!"
hbs.compile('{{concat a b}}')({a: 'foo', b: 'bar'});         // "foobar"
```

### `join`

Joins the elements of an array with a separator. Defaults to `","`.

```js
hbs.compile("{{{join collection ', '}}}")({collection: ['apple', 'banana', 'cherry']});
// "apple, banana, cherry"

hbs.compile("{{{join collection '-'}}}")({collection: ['a', 'b', 'c']});
// "a-b-c"
```

### `split`

Splits a string into an array by a separator. Defaults to `","`.

```js
hbs.compile("{{split list}}")({list: 'a,b,c'});
// ['a', 'b', 'c']

// Useful with {{#each}}:
hbs.compile("<ul>{{#each (split list ',')}}<li>{{this}}</li>{{/each}}</ul>")({list: 'a,b,c'});
// "<ul><li>a</li><li>b</li><li>c</li></ul>"
```

### `slice`

Extracts a portion of a string. Supports negative indices.

```js
hbs.compile('{{slice str 0 4}}')({str: 'Just Wow'});   // "Just"
hbs.compile('{{slice str 5}}')({str: 'Just Wow'});     // "Wow"
hbs.compile('{{slice str -4}}')({str: 'Just Wow'});    // " Wow"
```

### `nltobr`

Replaces newline characters with `<br>` tags. Use triple-stache `{{{ }}}` to avoid HTML escaping.

```js
hbs.compile('{{{nltobr str}}}')({str: 'Line 1\nLine 2\nLine 3'});
// "Line 1<br>Line 2<br>Line 3"
```

### `sprintf`

Formats a string using sprintf-style specifiers. Powered by [sprintf-js](https://github.com/alexei/sprintf.js).

```js
hbs.compile("{{sprintf '%s %s!' s1 s2}}")({s1: 'Hello', s2: 'World'});
// "Hello World!"

hbs.compile("{{sprintf 'Item count: %d, price: $%.2f' count price}}")({count: 42, price: 9.99});
// "Item count: 42, price: $9.99"

// Named arguments:
hbs.compile("{{sprintf 'Hello %(name)s' user}}")({user: {name: 'Alice'}});
// "Hello Alice"
```

## Math Helpers

### `add` / `sub` / `multiply` / `divide`

Basic arithmetic. Accepts numbers or numeric strings.

```js
hbs.compile('{{add a b}}')({a: 10, b: 5});       // 15
hbs.compile('{{sub a b}}')({a: 10, b: 3});        // 7
hbs.compile('{{multiply a b}}')({a: 5, b: 2});    // 10
hbs.compile('{{divide a b}}')({a: 7, b: 2});      // 3.5
```

### `abs`

Returns the absolute value.

```js
hbs.compile('{{abs a}}')({a: -5.6});              // 5.6
```

### `ceil` / `floor`

Rounds up (ceiling) or down (floor) to the nearest integer.

```js
hbs.compile('{{ceil a}}')({a: 5.1});              // 6
hbs.compile('{{floor a}}')({a: 5.9});             // 5
```

## Date Helpers

### `formatDate`

Formats a date using [Moment.js](https://momentjs.com/docs/#/displaying/format/) format strings. Uses the current date if none is provided.

```js
hbs.compile("{{formatDate 'YYYY/MM/DD' date}}")({date: '2024-01-15T09:30:00Z'});
// "2024/01/15"

// With locale:
hbs.compile("{{formatDate 'dddd' date 'es'}}")({date: '2024-01-15T09:30:00Z'});
// "lunes"
```

## HTML Helpers

### `checkedIf` / `selectedIf`

Returns `"checked"` or `"selected"` when the condition is truthy, otherwise an empty string.

```js
hbs.compile('<input type="checkbox" {{checkedIf isActive}}>')({isActive: true});
// '<input type="checkbox" checked>'

hbs.compile('<option {{selectedIf isDefault}}>Apple</option>')({isDefault: true});
// '<option selected>Apple</option>'
```

### `classIf`

Returns a CSS class name when the condition is truthy.

```js
hbs.compile('<div class="{{classIf isActive \'active\'}}">')({isActive: true});
// '<div class="active">'
```

### `options`

Generates `<option>` elements for a `<select>` dropdown. Supports custom property names and pre-selection.

```js
hbs.compile("{{{options data selected='2'}}}")({
  data: [{value: 1, text: 'foo'}, {value: 2, text: 'bar'}]
});
// '<option value="1">foo</option>\n<option value="2" selected>bar</option>'

// Custom keys:
hbs.compile("{{{options data selected='392' value='code' text='name'}}}")({
  data: [{code: 392, name: 'JAPAN'}, {code: 840, name: 'UNITED STATES'}]
});
```

### `stripTags`

Strips HTML tags from a string. Can preserve specific tags or replace removed tags with custom text.

```js
hbs.compile('{{{stripTags html}}}')({
  html: '<a href="#">lorem <strong>ipsum</strong> dolor</a>'
});
// "lorem ipsum dolor"

// Preserve specific tags:
hbs.compile('{{{stripTags html allowedTags}}}')({
  html: '<a href="#">lorem <strong>ipsum</strong> dolor</a>',
  allowedTags: ['strong']
});
// "lorem <strong>ipsum</strong> dolor"
```

## Number Helpers

### `number2locale`

Formats a number using locale-sensitive formatting via `toLocaleString()`.

```js
hbs.compile('{{number2locale val}}')({val: 123456.789});
// "123,456.789"

hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
// "123.456,789"
```

## Array Helpers

### `findObjectInArray`

Finds the first object in an array matching a field name and value.

```js
const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];

hbs.compile("{{lookup (findObjectInArray users 'id' 1) 'name'}}")({users});
// "Alice"
```

## Supported Environments

| Format | File | Usage |
|--------|------|-------|
| ESM | `dist/build.esm.js` | `import hbs from 'handlebars-extd'` |
| CommonJS | `dist/build.common.js` | `const hbs = require('handlebars-extd')` |
| UMD | `dist/build.js` | `<script>` tag or AMD loaders |

## Testing

```bash
npm test
```

## Author

**shumatsumonobu**
&nbsp; [GitHub](https://github.com/shumatsumonobu) | [X](https://x.com/shumatsumonobu) | [Facebook](https://www.facebook.com/takuya.motoshima.7)

## License

[MIT](LICENSE)
