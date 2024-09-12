module.exports = {
  rules: {
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     * @see {@link https://eslint.org/docs/v8.x/rules/array-callback-return}
     * @category Base
     */
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
  },
}
