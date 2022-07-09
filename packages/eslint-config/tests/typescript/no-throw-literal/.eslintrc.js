module.exports = {
  rules: {
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     * @see {@link https://typescript-eslint.io/rules/no-throw-literal/}
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
