module.exports = {
  rules: {
    /**
     * 使用 sort 时必须传入比较函数
     * @see {@link https://typescript-eslint.io/rules/require-array-sort-compare/}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: false,
      },
    ],
  },
}
