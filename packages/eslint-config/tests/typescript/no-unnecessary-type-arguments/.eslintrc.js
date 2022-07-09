module.exports = {
  rules: {
    /**
     * 禁止范型的类型有默认值时，将范型设置为该默认值
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments/}
     * @category TypeScript
     * @reason 写了类型表达可以更清晰
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  },
}
