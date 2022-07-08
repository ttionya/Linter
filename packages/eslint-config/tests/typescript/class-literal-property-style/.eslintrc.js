module.exports = {
  rules: {
    /**
     * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
     * @see {@link https://typescript-eslint.io/rules/class-literal-property-style/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
  },
}
