module.exports = {
  rules: {
    /**
     * 使用 RegExp#exec 而不是 String#match
     * @see {@link https://typescript-eslint.io/rules/prefer-regexp-exec/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-regexp-exec': 'error',
  },
}
