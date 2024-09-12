module.exports = {
  rules: {
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     * @see {@link https://eslint.org/docs/v8.x/rules/prefer-promise-reject-errors}
     * @category Base
     */
    'prefer-promise-reject-errors': 'off',
  },
}
