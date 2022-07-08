module.exports = {
  rules: {
    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @see {@link https://typescript-eslint.io/rules/array-type/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
  },
}
