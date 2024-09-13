module.exports = {
  rules: {
    /**
     * 禁止 void 抛出空
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-meaningless-void-operator': 'off',
  },
}
