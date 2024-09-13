module.exports = {
  rules: {
    /**
     * 必须使用 ! 而不是 as
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  },
}
