module.exports = {
  rules: {
    /**
     * 禁止在 return 语句里赋值
     * @see {@link https://eslint.org/docs/v8.x/rules/no-return-assign}
     * @category Base
     */
    'no-return-assign': ['error', 'except-parens'],
  },
}
