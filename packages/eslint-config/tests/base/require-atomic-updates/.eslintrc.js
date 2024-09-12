module.exports = {
  rules: {
    /**
     * 禁止将 await 或 yield 的结果做为运算符的后面项
     * @see {@link https://eslint.org/docs/v8.x/rules/require-atomic-updates}
     * @category Base
     */
    'require-atomic-updates': [
      'error',
      {
        allowProperties: false,
      },
    ],
  },
}
