module.exports = {
  rules: {
    /**
     * 限制函数的循环复杂度
     * @see {@link https://eslint.org/docs/v8.x/rules/complexity}
     * @category Base
     */
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
  },
}
