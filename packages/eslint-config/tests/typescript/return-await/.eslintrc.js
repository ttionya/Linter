module.exports = {
  rules: {
    /**
     * async 函数必须返回 await
     * @see {@link https://typescript-eslint.io/rules/return-await/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  },
}
