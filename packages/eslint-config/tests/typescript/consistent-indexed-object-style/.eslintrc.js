module.exports = {
  rules: {
    /**
     * 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/consistent-indexed-object-style': 'off',
  },
}
