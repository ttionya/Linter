module.exports = {
  rules: {
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @see {@link https://eslint.org/docs/latest/rules/dot-notation}
     * @category Base
     * @reason 有时可以统一属性写法
     * @fixable
     */
    'dot-notation': 'off',
  },
}
