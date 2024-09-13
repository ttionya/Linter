module.exports = {
  rules: {
    /**
     * 使用 sort 时必须传入比较函数
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true,
      },
    ],
  },
}
