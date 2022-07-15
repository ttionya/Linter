module.exports = {
  rules: {
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     * @see {@link https://eslint.org/docs/latest/rules/yoda}
     * @category Base
     * @fixable
     */
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true,
      },
    ],
  },
}
