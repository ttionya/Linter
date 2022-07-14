module.exports = {
  rules: {
    /**
     * 禁止使用 Array 构造函数时传入的参数超过一个
     * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor}
     * @category Base
     * @reason 参数为一个时表示创建一个指定长度的数组，比较常用，参数为多个时容易出现问题

     */
    'no-array-constructor': 'error',
  },
}
