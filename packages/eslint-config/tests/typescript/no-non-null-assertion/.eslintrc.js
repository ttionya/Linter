module.exports = {
  rules: {
    /**
     * 禁止使用 non-null 断言
     * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion/}
     * @category TypeScript
     * @reason 使用 non-null 断言时就已经清楚了风险
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
