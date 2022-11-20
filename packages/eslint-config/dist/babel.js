/**
 * ESLint rules.
 * https://github.com/ttionya/Linter/tree/master/packages/eslint-config#readme
 *
 * Author: ttionya <git@ttionya.com>
 * Version: __VERSION__
 *
 * 本文件由脚本自动生成，请勿修改
 */
module.exports = {
  extends: require.resolve('./base'),

  parser: '@babel/eslint-parser',

  parserOptions: {
    // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },

  rules: {},
}
