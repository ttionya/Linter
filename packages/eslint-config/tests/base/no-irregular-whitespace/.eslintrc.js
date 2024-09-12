module.exports = {
  rules: {
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     * @see {@link https://eslint.org/docs/v8.x/rules/no-irregular-whitespace}
     * @category Base
     * @recommended
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
  },
}
