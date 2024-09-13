module.exports = {
  rules: {
    /**
     * 禁止范型的类型有默认值时，将范型设置为该默认值
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md}
     * @category TypeScript
     * @reason 写了类型表达可以更清晰
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  },
}
