module.exports = {
  rules: {
    /**
     * 在命名空间或枚举中，可以直接使用内部变量，不需要添加命名空间前缀
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
  },
}
