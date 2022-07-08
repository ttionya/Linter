module.exports = {
  rules: {
    /**
     * 禁止使用 tslint 注释
     * @see {@link https://typescript-eslint.io/rules/ban-tslint-comment/}
     * @category TypeScript
     * @reason 使用 eslint 替代 tslint
     * @fixable
     */
    '@typescript-eslint/ban-tslint-comment': 'error',
  },
}
