import { defineConfig } from './utils.js'

/**
 * Prettier Plugin jsdoc Options
 *
 * @see https://github.com/hosseinmd/prettier-plugin-jsdoc
 * @see https://github.com/hosseinmd/prettier-plugin-jsdoc/blob/master/src/index.ts
 */
export default defineConfig({
  plugins: ['prettier-plugin-jsdoc'],

  jsdocSpaces: 1,
  jsdocDescriptionWithDot: false,
  jsdocDescriptionTag: false,
  jsdocVerticalAlignment: false,
  jsdocKeepUnParseAbleExampleIndent: true, // false
  jsdocCommentLineStrategy: 'keep', // singleLine
  jsdocSeparateReturnsFromParam: false,
  jsdocSeparateTagGroups: false,
  jsdocCapitalizeDescription: false, // true
  tsdoc: false,
  // jsdocPrintWidth: undefined,
  jsdocAddDefaultToDescription: false, // true
  jsdocPreferCodeFences: false,
  jsdocLineWrappingStyle: 'greedy',
})
