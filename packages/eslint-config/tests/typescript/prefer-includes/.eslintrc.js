module.exports = {
  rules: {
    /**
     * 使用 includes 而不是 indexOf
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-includes.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-includes': 'error',
  },
}
