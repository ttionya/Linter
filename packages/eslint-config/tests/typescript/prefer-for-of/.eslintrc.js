module.exports = {
  rules: {
    /**
     * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-for-of.md}
     * @category TypeScript
     * @reason for of 循环更加易读
     */
    '@typescript-eslint/prefer-for-of': 'error',
  },
}
