module.exports = {
  rules: {
    /**
     * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/prefer-ts-expect-error': 'error',
  },
}
