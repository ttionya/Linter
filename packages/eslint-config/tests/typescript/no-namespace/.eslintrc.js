module.exports = {
  rules: {
    /**
     * 禁止使用 namespace 来定义命名空间
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-namespace.md}
     * @category TypeScript
     * @recommended
     * @reason 使用 ES6 Module 代替，但是允许 declare namespace ... {} 这样定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
  },
}
