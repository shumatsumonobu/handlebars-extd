/**
 * Rollup configuration for ESM and UMD builds.
 * Outputs: dist/build.esm.js (ES module) and dist/build.js (UMD for browsers).
 */
import common from './rollup.common.config.js';
import alias from '@rollup/plugin-alias';
import pkg from './package.json' with { type: 'json' };

// Alias dependencies to their browser-compatible bundles.
common.plugins.unshift(
  alias({
    entries: {
      handlebars: 'handlebars/dist/handlebars.js',
      'sprintf-js': 'sprintf-js/dist/sprintf.min.js'
    }
  })
);

common.output = [
  {
    format: 'esm',
    file: pkg.module
  },
  {
    format: 'umd',
    file: pkg.browser,
    // Convert package name to camelCase for the global variable name.
    name: pkg.name
      .replace(/^.*\/|\.js$/g, '')
      .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
  }
];

export default common;
