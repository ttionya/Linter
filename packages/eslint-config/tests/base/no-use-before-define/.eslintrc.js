module.exports = {
  rules: {
    /**
     * 变量必须先定义后使用
     * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define}
     * @category Base
     * @reason 存在函数后调用的问题
     */
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
        allowNamedExports: false,
      },
    ],
  },
}
