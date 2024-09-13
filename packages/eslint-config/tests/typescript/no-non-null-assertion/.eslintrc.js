module.exports = {
  rules: {
    /**
     * 禁止使用 non-null 断言
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md}
     * @category TypeScript
     * @recommended
     * @reason 使用 non-null 断言时就已经清楚了风险
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
