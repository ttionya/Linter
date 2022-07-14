module.exports = {
  rules: {
    /**
     * 必须使用 !a 替代 a ? false : true
     * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
     * @category Base
     * @fixable
     */
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true,
      },
    ],
  },
}
