module.exports = {
  rules: {
    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     * @see {@link https://typescript-eslint.io/rules/prefer-readonly/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-readonly': 'off',
  },
}
