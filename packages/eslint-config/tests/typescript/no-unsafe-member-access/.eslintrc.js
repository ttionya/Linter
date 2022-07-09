module.exports = {
  rules: {
    /**
     * 禁止获取 any 类型的变量中的属性
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-member-access/}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
}
