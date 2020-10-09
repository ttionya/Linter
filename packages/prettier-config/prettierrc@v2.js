/**
 * Prettier Options
 * @see {@link https://prettier.io/docs/en/options.html}
 */
module.exports = {
  ...require('./prettierrc@v1'),

  // 自动识别内嵌的代码并格式化
  embeddedLanguageFormatting: 'auto',
}
