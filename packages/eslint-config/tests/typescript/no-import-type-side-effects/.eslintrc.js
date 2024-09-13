module.exports = {
  rules: {
    /**
     * 禁止带副作用的导入
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-import-type-side-effects.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
}
