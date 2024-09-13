module.exports = {
  rules: {
    /**
     * 禁止函数返回 any 类型
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-return': 'off',
  },
}
