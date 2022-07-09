module.exports = {
  rules: {
    /**
     * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
     * @see {@link https://typescript-eslint.io/rules/prefer-reduce-type-parameter/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  },
}
