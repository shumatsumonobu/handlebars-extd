/**
 * Shared Rollup configuration.
 * Used as a base by rollup.esm-and-umd.config.js and rollup.cjs.config.js.
 */
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';

// Check if building for production (minification, etc.).
const isProduction = () => {
  return process.env.NODE_ENV === 'production';
}

export default {
  input: './src/index.ts',
  plugins: [
    // Compile TypeScript and generate declaration files.
    typescript({
      tsconfigDefaults: {compilerOptions: {}},
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {compilerOptions: {}},
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true
    }),

    // Minify output in production builds.
    isProduction() && terser(),

    // Allow importing JSON files.
    json(),

    // Convert CommonJS modules to ES modules for bundling.
    commonjs(),

    // Resolve bare module imports from node_modules.
    nodeResolve({
      mainFields: ['module', 'main']
    })
  ],

  // Output targets are defined per-config (ESM/UMD, CJS).
  output: [],

  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}
