module.exports = {
  rules: {
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     * @see {@link https://typescript-eslint.io/rules/class-methods-use-this/}
     * @category TypeScript
     */
    '@typescript-eslint/class-methods-use-this': 'off',
  },
}
