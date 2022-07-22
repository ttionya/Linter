module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  extends: ['eslint:recommended'],

  parser: '@babel/eslint-parser',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 使用全局严格模式
      impliedStrict: true,
      // 启用 jsx 支持
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },

  // 标示行内注释未使用的情况
  reportUnusedDisableDirectives: true,

  rules: {},
}
