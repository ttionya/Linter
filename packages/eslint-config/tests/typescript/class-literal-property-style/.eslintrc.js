module.exports = {
  rules: {
    /**
     * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
  },
}
