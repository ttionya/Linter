module.exports = {
  rules: {
    /**
     * 必须使用 ! 而不是 as
     * @see {@link https://typescript-eslint.io/rules/non-nullable-type-assertion-style/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  },
}
