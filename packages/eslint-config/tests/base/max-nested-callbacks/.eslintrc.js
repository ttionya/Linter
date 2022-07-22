module.exports = {
  rules: {
    /**
     * 回调函数嵌套禁止超过 6 层，多了请用 async await 替代
     * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
     * @category Base
     */
    'max-nested-callbacks': ['error', 6],
  },
}
