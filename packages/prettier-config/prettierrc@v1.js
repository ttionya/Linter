/**
 * Prettier Options
 * @see {@link https://prettier.io/docs/en/options.html}
 */
module.exports = {
  // 一行最多 100 个字符
  printWidth: 100,

  // 使用 2 个空格缩进
  tabWidth: 2,

  // 使用空格作为缩进符
  useTabs: false,

  // 行尾不使用分号
  semi: false,

  // 使用单引号
  singleQuote: true,

  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',

  // JSX 使用双引号
  jsxSingleQuote: false,

  // 添加 ES5 支持的尾逗号
  trailingComma: 'es5',

  // 大括号内的首尾需要空格
  bracketSpacing: true,

  // JSX 标签的闭合尖括号需要换行
  jsxBracketSameLine: false,

  // 箭头函数需要括号
  arrowParens: 'always',

  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,

  // 不需要写文件开头的 @prettier
  requirePragma: false,

  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,

  // 使用默认的折行标准
  proseWrap: 'preserve',

  // 根据显示样式决定 HTML 要不要折行
  htmlWhitespaceSensitivity: 'css',

  // 不对 Vue 文件的 script 和 style 进行缩进
  vueIndentScriptAndStyle: false,

  // 换行符使用 LF
  endOfLine: 'lf',
}
