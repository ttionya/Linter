module.exports = {
  rules: {
    /**
     * 禁止使用返回值为 void 的函数的返回值
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-confusing-void-expression': 'off',
  },
}
