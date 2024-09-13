module.exports = {
  rules: {
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值和 self
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-this-alias.md}
     * @category TypeScript
     * @recommended
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
  },
}
