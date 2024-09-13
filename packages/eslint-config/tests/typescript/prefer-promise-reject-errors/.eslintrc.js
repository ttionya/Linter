module.exports = {
  rules: {
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     * @see {@link https://typescript-eslint.io/rules/prefer-promise-reject-errors/}
     * @category TypeScript
     */
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
  },
}
