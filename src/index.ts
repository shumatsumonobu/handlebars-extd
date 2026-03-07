import hbs from 'handlebars';
import * as array from '~/helpers/array';
import * as comparison from '~/helpers/comparison';
import * as date from '~/helpers/date';
import * as html from '~/helpers/html';
import * as math from '~/helpers/math';
import * as string from '~/helpers/string';
import * as number from '~/helpers/number';

// Register all helper functions from each category to Handlebars.
const helperCategories = [array, comparison, date, html, math, string, number];
for (const category of helperCategories) {
  for (const [name, func] of Object.entries(category))
    hbs.registerHelper(name, func);
}

export default hbs;
