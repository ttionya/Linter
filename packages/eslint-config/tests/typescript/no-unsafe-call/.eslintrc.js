module.exports = {
  rules: {
    /**
     * 禁止调用 any 类型的变量上的方法
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-call/}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-call': 'off',
  },
}
