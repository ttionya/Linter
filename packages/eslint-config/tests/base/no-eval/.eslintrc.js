module.exports = {
  rules: {
    /**
     * 禁止使用 eval
     * @see {@link https://eslint.org/docs/latest/rules/no-eval}
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
