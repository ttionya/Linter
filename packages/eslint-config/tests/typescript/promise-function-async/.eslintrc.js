module.exports = {
  rules: {
    /**
     * async 函数的返回值必须是 Promise
     * @see {@link https://typescript-eslint.io/rules/promise-function-async/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/promise-function-async': 'off',
  },
}
