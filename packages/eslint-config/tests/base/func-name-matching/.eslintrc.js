module.exports = {
  rules: {
    /**
     * 函数赋值给变量的时候，函数名必须与变量名一致
     * @see {@link https://eslint.org/docs/v8.x/rules/func-name-matching}
     * @category Base
     */
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: false,
        includeCommonJSModuleExports: false,
      },
    ],
  },
}
