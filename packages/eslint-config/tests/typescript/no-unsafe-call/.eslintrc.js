module.exports = {
  rules: {
    /**
     * 禁止调用 any 类型的变量上的方法
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-call': 'off',
  },
}
