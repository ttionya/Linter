module.exports = {
  rules: {
    /**
     * 使用 array.find 替代 array.filter[0]
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-find.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/prefer-find': 'error',
  },
}
