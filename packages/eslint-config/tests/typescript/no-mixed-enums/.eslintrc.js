module.exports = {
  rules: {
    /**
     * 禁止枚举同时有字符串和数字成员
     * @see {@link https://typescript-eslint.io/rules/no-mixed-enums/}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-mixed-enums': 'error',
  },
}
