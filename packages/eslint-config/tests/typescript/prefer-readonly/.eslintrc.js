module.exports = {
  rules: {
    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-readonly.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-readonly': 'off',
  },
}
