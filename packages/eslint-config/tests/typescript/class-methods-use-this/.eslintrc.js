module.exports = {
  rules: {
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/class-methods-use-this.md}
     * @category TypeScript
     */
    '@typescript-eslint/class-methods-use-this': 'off',
  },
}
