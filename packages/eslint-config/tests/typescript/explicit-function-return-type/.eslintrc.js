module.exports = {
  rules: {
    /**
     * 函数返回值必须与声明的类型一致
     * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type/}
     * @category TypeScript
     * @reason 可以更清晰地分辨函数的返回值
     */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
  },
}
