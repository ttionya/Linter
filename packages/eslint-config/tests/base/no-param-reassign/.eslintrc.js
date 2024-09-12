module.exports = {
  rules: {
    /**
     * 禁止对函数的参数重新赋值
     * @see {@link https://eslint.org/docs/v8.x/rules/no-param-reassign}
     * @category Base
     */
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
}
