module.exports = {
  rules: {
    /**
     * 类的方法返回值是 this 时，类型必须设置为 this
     * @see {@link https://typescript-eslint.io/rules/prefer-return-this-type/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/prefer-return-this-type': 'error',
  },
}
