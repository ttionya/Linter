module.exports = {
  rules: {
    /**
     * 优先使用 interface 而不是 type
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-type-definitions.md}
     * @category TypeScript
     * @reason interface 可以 implement, extend 和 merge
     * @fixable
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
}
