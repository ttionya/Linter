module.exports = {
  rules: {
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-promise-reject-errors.md}
     * @category TypeScript
     */
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
  },
}
