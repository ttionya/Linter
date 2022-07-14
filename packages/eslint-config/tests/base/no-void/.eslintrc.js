module.exports = {
  rules: {
    /**
     * 禁止使用 void
     * @see {@link https://eslint.org/docs/latest/rules/no-void}
     * @category Base
     */
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
  },
}
