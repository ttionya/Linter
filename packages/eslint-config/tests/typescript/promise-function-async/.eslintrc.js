module.exports = {
  rules: {
    /**
     * async 函数的返回值必须是 Promise
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/promise-function-async.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/promise-function-async': 'off',
  },
}
