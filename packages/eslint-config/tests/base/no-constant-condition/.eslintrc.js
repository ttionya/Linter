module.exports = {
  rules: {
    /**
     * 禁止将常量作为分支条件判断中的条件表达式，但允许作为循环条件判断中的条件表达式
     * @see {@link https://eslint.org/docs/v8.x/rules/no-constant-condition}
     * @category Base
     * @recommended
     * @reason 循环中可以根据条件中断循环
     */
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
  },
}
