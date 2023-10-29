import { defineConfig } from './utils.js'

/**
 * Prettier Options
 *
 * @see https://prettier.io/docs/en/options
 */
export default defineConfig({
  printWidth: 100, // 80

  tabWidth: 2,

  useTabs: false,

  semi: false, // true

  singleQuote: true, // false

  quoteProps: 'as-needed',

  jsxSingleQuote: false,

  trailingComma: 'es5', // all

  bracketSpacing: true,

  bracketSameLine: false,

  arrowParens: 'always',

  rangeStart: 0,
  rangeEnd: Infinity,

  requirePragma: false,

  insertPragma: false,

  proseWrap: 'preserve',

  htmlWhitespaceSensitivity: 'css',

  vueIndentScriptAndStyle: false,

  endOfLine: 'lf',

  embeddedLanguageFormatting: 'auto',

  singleAttributePerLine: false,
})
