module.exports = {
  rules: {
    /**
     * 禁止在 if 代码块内出现函数声明和用 var 定义变量
     * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations}
     * @category Base
     * @recommended
     * @reason var 定义的变量存在变量提升
     */
    'no-inner-declarations': ['error', 'both'],
  },
}
