module.exports = {
  rules: {
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值和 self
     * @see {@link https://typescript-eslint.io/rules/no-this-alias/}
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
