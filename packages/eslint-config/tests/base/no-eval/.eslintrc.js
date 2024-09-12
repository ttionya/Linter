module.exports = {
  rules: {
    /**
     * 禁止使用 eval
     * @see {@link https://eslint.org/docs/v8.x/rules/no-eval}
     * @category Base
     */
    'no-eval': [
      'error',
      {
        allowIndirect: true,
      },
    ],
  },
}
