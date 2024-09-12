module.exports = {
  rules: {
    /**
     * 禁止在第一轮循环时就一定会退出循环的情况出现
     * @see {@link https://eslint.org/docs/v8.x/rules/no-unreachable-loop}
     * @category Base
     */
    'no-unreachable-loop': ['error', { ignore: [] }],
  },
}
