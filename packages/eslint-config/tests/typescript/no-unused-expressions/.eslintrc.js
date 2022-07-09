module.exports = {
  rules: {
    /**
     * 禁止无用的表达式
     * @see {@link https://typescript-eslint.io/rules/no-unused-expressions/}
     * @category TypeScript
     */
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
  },
}
