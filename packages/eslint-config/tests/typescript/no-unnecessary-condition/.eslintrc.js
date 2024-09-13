module.exports = {
  rules: {
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md}
     * @category TypeScript
     * @reason 经常无法正确判断
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-condition': 'off',
  },
}
