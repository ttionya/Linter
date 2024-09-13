module.exports = {
  rules: {
    /**
     * 禁止对数组使用 `delete` 运算符
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-array-delete.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-array-delete': 'error',
  },
}
