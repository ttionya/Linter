module.exports = {
  rules: {
    /**
     * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],
  },
}
