module.exports = {
  rules: {
    /**
     * 禁止在 Promise 的回调函数中直接 return
     * @see {@link https://eslint.org/docs/v8.x/rules/no-promise-executor-return}
     * @category Base
     */
    'no-promise-executor-return': 'error',
  },
}
