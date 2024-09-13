module.exports = {
  rules: {
    /**
     * 禁止调用 Promise 时没有处理异常情况
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-floating-promises.md}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-floating-promises': 'off',
  },
}
