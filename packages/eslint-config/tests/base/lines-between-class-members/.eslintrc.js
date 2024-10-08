module.exports = {
  rules: {
    /**
     * 类的成员之间需要空行
     * @see {@link https://eslint.org/docs/v8.x/rules/lines-between-class-members}
     * @category Base
     * @fixable
     */
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
  },
}
