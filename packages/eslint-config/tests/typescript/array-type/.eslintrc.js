module.exports = {
  rules: {
    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/array-type.md}
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
