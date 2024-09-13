module.exports = {
  rules: {
    /**
     * 禁止使用无意义的 void 类型
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md}
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
