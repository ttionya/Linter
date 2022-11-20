module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
  },

  extends: ['eslint:recommended'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 使用全局严格模式
      impliedStrict: true,
      // 启用 jsx 支持
      jsx: true,
    },
  },

  // 标示行内注释未使用的情况
  reportUnusedDisableDirectives: true,

  rules: {},
}
