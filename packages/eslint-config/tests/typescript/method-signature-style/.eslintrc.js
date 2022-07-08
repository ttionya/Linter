module.exports = {
  rules: {
    /**
     * 接口中的方法必须用属性的方式定义
     * @see {@link https://typescript-eslint.io/rules/method-signature-style/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],
  },
}
