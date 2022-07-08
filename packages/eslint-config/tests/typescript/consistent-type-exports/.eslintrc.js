module.exports = {
  rules: {
    /**
     * 一致的类型导出语法
     * @see {@link https://typescript-eslint.io/rules/consistent-type-exports/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
  },
}
