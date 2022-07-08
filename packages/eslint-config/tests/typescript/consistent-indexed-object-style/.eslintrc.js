module.exports = {
  rules: {
    /**
     * 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
     * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/consistent-indexed-object-style': 'off',
  },
}
