/**
 * Prettier Options
 * @see {@link https://prettier.io/docs/en/options.html}
 */
module.exports = {
  ...require('./prettierrc@v1'),

  // 自动识别内嵌的代码并格式化
  embeddedLanguageFormatting: 'auto',

  // 不强制 HTML Vue React 每行只有一个属性
  singleAttributePerLine: false,
}
