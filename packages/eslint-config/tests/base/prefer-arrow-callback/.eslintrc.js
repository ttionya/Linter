module.exports = {
  rules: {
    /**
     * 回调函数必须使用箭头函数
     * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
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
