module.exports = {
  rules: {
    /**
     * 使用 Map 或 Set 时，必须在构造函数上用泛型定义类型
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-generic-constructors.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
  },
}
