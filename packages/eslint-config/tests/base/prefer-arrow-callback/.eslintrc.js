module.exports = {
  rules: {
    /**
     * 回调函数必须使用箭头函数
     * @see {@link https://eslint.org/docs/v8.x/rules/prefer-arrow-callback}
     * @category Base
     * @fixable
     */
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
  },
}
