module.exports = {
  rules: {
    /**
     * 禁止在类之外的地方使用 this
     * @see {@link https://eslint.org/docs/v8.x/rules/no-invalid-this}
     * @category Base
     * @reason 只允许在 class 和构造函数中使用 this
     */
    'no-invalid-this': [
      'error',
      {
        capIsConstructor: false,
      },
    ],
  },
}
