module.exports = {
  rules: {
    /**
     * 禁止无用的联合类型或交叉类型
     * @see {@link https://typescript-eslint.io/rules/no-redundant-type-constituents/}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-redundant-type-constituents': 'error',
  },
}
