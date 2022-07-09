module.exports = {
  rules: {
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     * @see {@link https://typescript-eslint.io/rules/unified-signatures/}
     * @category TypeScript
     */
    '@typescript-eslint/unified-signatures': [
      'error',
      {
        ignoreDifferentlyNamedParameters: false,
      },
    ],
  },
}
