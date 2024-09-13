module.exports = {
  rules: {
    /**
     * 禁止使用 tslint 注释
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md}
     * @category TypeScript
     * @reason 使用 eslint 替代 tslint
     * @fixable
     */
    '@typescript-eslint/ban-tslint-comment': 'error',
  },
}
