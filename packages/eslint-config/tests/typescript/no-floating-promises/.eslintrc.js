module.exports = {
  rules: {
    /**
     * 禁止调用 Promise 时没有处理异常情况
     * @see {@link https://typescript-eslint.io/rules/no-floating-promises/}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-floating-promises': 'off',
  },
}
