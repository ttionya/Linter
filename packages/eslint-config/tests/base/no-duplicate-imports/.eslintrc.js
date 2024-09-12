module.exports = {
  rules: {
    /**
     * 禁止重复导入模块
     * @see {@link https://eslint.org/docs/v8.x/rules/no-duplicate-imports}
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
