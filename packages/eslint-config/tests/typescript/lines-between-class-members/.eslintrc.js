module.exports = {
  rules: {
    /**
     * 类的成员之间是否需要空行
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/lines-between-class-members.md}
     * @category TypeScript
     * @reason 重载方法不需要空行
     * @fixable
     */
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true,
      },
    ],
  },
}
