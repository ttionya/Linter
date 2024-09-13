module.exports = {
  rules: {
    /**
     * 禁止非空断言后面跟着双问号
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md}
     * @category TypeScript
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  },
}
