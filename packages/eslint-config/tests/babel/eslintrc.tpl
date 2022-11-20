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
