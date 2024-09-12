module.exports = {
  rules: {
    /**
     * 必须使用 !a 替代 a ? false : true
     * @see {@link https://eslint.org/docs/v8.x/rules/no-unneeded-ternary}
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
