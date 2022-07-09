module.exports = {
  rules: {
    /**
     * 禁止定义空的接口
     * @see {@link https://typescript-eslint.io/rules/no-empty-interface/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
}
