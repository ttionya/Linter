module.exports = {
  rules: {
    /**
     * 禁止重复定义
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-redeclare.md}
     * @category TypeScript
     * @reason 禁止使用 var
     */
    '@typescript-eslint/no-redeclare': 'off',
  },
}
