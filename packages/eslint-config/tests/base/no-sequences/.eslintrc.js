module.exports = {
  rules: {
    /**
     * 禁止使用逗号操作符
     * @see {@link https://eslint.org/docs/v8.x/rules/no-sequences}
     * @category Base
     */
    'no-sequences': [
      'error',
      {
        allowInParentheses: true,
      },
    ],
  },
}
