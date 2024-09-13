module.exports = {
  rules: {
    /**
     * 禁止 interface 和 class 的声明合并
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-declaration-merging.md}
     * @category TypeScript
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  },
}
