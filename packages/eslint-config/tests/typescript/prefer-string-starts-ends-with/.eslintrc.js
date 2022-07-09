module.exports = {
  rules: {
    /**
     * 使用 String#startsWith 而不是其他方式
     * @see {@link https://typescript-eslint.io/rules/prefer-string-starts-ends-with/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  },
}
