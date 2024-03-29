module.exports = {
  rules: {
    /**
     * 禁止使用 require
     * @see {@link https://typescript-eslint.io/rules/no-require-imports/}
     * @category TypeScript
     * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
     */
    '@typescript-eslint/no-require-imports': 'error',
  },
}
