module.exports = {
  rules: {
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     * @see {@link https://eslint.org/docs/v8.x/rules/no-implied-eval}
     * @category Base
     */
    'no-implied-eval': 'error',
  },
}
