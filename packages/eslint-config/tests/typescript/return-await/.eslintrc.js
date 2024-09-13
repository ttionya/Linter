module.exports = {
  rules: {
    /**
     * async 函数必须返回 await
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/return-await.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  },
}
