module.exports = {
  rules: {
    /**
     * 使用 String#startsWith 而不是其他方式
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  },
}
