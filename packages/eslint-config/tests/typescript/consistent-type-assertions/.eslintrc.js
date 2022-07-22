module.exports = {
  rules: {
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，允许对参数中的对象字面量进行类型断言（其他情况下断言成 any 是允许的）
     * @see {@link https://typescript-eslint.io/rules/consistent-type-assertions/}
     * @category TypeScript
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
  },
}
