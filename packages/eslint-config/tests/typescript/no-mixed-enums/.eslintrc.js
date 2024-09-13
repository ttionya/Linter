module.exports = {
  rules: {
    /**
     * 禁止枚举同时有字符串和数字成员
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-mixed-enums.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-mixed-enums': 'error',
  },
}
