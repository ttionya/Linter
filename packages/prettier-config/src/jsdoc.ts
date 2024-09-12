import { defineConfig } from './utils.js'

/**
 * Prettier Plugin jsdoc Options
 *
 * @see https://github.com/hosseinmd/prettier-plugin-jsdoc
 * @see https://github.com/hosseinmd/prettier-plugin-jsdoc/blob/master/src/index.ts
 */
export default defineConfig({
  plugins: ['prettier-plugin-jsdoc'],

  jsdocAddDefaultToDescription: false, // true
  jsdocCapitalizeDescription: false, // true
  jsdocCommentLineStrategy: 'keep', // singleLine
  jsdocDescriptionTag: false,
  jsdocDescriptionWithDot: false,
  jsdocKeepUnParseAbleExampleIndent: true, // false
  jsdocLineWrappingStyle: 'greedy',
  jsdocPreferCodeFences: false,
  // jsdocPrintWidth: undefined,
  jsdocSeparateReturnsFromParam: false,
  jsdocSeparateTagGroups: false,
  jsdocSpaces: 1,
  // jsdocTagsOrder: undefined
  jsdocVerticalAlignment: false,
  tsdoc: false,
})
