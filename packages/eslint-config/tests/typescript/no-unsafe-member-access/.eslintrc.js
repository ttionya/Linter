module.exports = {
  rules: {
    /**
     * 禁止获取 any 类型的变量中的属性
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
}
