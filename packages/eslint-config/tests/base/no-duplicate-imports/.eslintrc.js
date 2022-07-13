module.exports = {
  rules: {
    /**
     * 禁止重复导入模块
     * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports}
     * @category Base
     */
    'no-duplicate-imports': [
      'error',
      {
        includeExports: false,
      },
    ],
  },
}
