module.exports = {
  rules: {
    /**
     * 禁止 else 中只有一个单独的 if
     * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if}
     * @category Base
     * @reason 单独的 if 可以把逻辑表达得更清楚
     * @fixable
     */
    'no-lonely-if': 'off',
  },
}
