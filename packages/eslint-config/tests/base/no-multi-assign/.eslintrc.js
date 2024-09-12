module.exports = {
  rules: {
    /**
     * 禁止连续赋值
     * @see {@link https://eslint.org/docs/v8.x/rules/no-multi-assign}
     * @category Base
     */
    'no-multi-assign': [
      'error',
      {
        ignoreNonDeclaration: false,
      },
    ],
  },
}
