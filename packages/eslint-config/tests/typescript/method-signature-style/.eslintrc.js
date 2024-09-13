module.exports = {
  rules: {
    /**
     * 接口中的方法必须用属性的方式定义
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/method-signature-style.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],
  },
}
