module.exports = {
  rules: {
    /**
     * 使用 RegExp#exec 而不是 String#match
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-regexp-exec': 'error',
  },
}
