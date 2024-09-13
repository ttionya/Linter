module.exports = {
  rules: {
    /**
     * 禁止将变量或属性的类型设置为 any
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
}
