module.exports = {
  rules: {
    /**
     * 条件判断必须传入布尔值
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
}
