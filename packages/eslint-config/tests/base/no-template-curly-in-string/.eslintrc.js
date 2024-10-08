module.exports = {
  rules: {
    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     * @see {@link https://eslint.org/docs/v8.x/rules/no-template-curly-in-string}
     * @category Base
     * @reason 防止出错
     */
    'no-template-curly-in-string': 'error',
  },
}
