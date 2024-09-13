module.exports = {
  rules: {
    /**
     * 类的方法返回值是 this 时，类型必须设置为 this
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-return-this-type.md}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-return-this-type': 'error',
  },
}
