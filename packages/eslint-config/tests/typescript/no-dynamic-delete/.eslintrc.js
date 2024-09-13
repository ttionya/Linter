module.exports = {
  rules: {
    /**
     * 禁止 delete 时传入的 key 是动态的
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-dynamic-delete.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-dynamic-delete': 'off',
  },
}
