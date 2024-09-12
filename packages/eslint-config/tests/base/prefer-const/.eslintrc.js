module.exports = {
  rules: {
    /**
     * 申明后不再被修改的变量必须使用 const 来申明
     * @see {@link https://eslint.org/docs/v8.x/rules/prefer-const}
     * @category Base
     * @fixable
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}
