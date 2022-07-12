module.exports = {
  rules: {
    /**
     * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
     * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
     * @category Base
     */
    'no-await-in-loop': 'error',
  },
}
