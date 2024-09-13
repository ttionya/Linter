module.exports = {
  rules: {
    /**
     * 禁止在类之外的地方使用 this
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-invalid-this.md}
     * @category TypeScript
     */
    '@typescript-eslint/no-invalid-this': [
      'error',
      {
        capIsConstructor: true,
      },
    ],
  },
}
