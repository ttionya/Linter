module.exports = {
  rules: {
    /**
     * 禁止定义空的接口
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-empty-interface.md}
     * @category TypeScript
     * @recommended
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
