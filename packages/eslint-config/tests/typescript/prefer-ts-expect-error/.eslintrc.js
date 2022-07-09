module.exports = {
  rules: {
    /**
     * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     * @see {@link https://typescript-eslint.io/rules/prefer-ts-expect-error/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/prefer-ts-expect-error': 'error',
  },
}
