module.exports = {
  rules: {
    /**
     * 禁止使用无意义的 void 类型
     * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type/}
     * @category TypeScript
     */
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],
  },
}
