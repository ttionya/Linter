module.exports = {
  rules: {
    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     * @see {@link https://eslint.org/docs/v8.x/rules/prefer-regex-literals}
     * @category Base
     */
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: false,
      },
    ],
  },
}
