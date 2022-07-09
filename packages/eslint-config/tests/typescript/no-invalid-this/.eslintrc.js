module.exports = {
  rules: {
    /**
     * 禁止在类之外的地方使用 this
     * @see {@link https://typescript-eslint.io/rules/no-invalid-this/}
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
