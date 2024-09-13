module.exports = {
  rules: {
    /**
     * 禁止将 any 类型的变量作为函数参数调用
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-argument.md}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
}
