module.exports = {
  rules: {
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @see {@link https://typescript-eslint.io/rules/dot-notation/}
     * @category TypeScript
     * @reason 有时可以统一属性写法
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/dot-notation': 'off',
  },
}
