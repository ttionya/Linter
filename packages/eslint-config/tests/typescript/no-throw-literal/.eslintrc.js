module.exports = {
  rules: {
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-throw-literal.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-throw-literal': [
      'error',
      {
        allowThrowingAny: true,
        allowThrowingUnknown: true,
      },
    ],
  },
}
