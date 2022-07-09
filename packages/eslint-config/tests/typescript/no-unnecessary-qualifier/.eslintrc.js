module.exports = {
  rules: {
    /**
     * 在命名空间或枚举中，可以直接使用内部变量，不需要添加命名空间前缀
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-qualifier/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
  },
}
