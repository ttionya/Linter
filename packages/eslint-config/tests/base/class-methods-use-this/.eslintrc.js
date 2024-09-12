module.exports = {
  rules: {
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     * @see {@link https://eslint.org/docs/v8.x/rules/class-methods-use-this}
     * @category Base
     */
    'class-methods-use-this': 'off',
  },
}
