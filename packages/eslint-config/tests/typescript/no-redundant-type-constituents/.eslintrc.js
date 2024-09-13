module.exports = {
  rules: {
    /**
     * 禁止无用的联合类型或交叉类型
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-redundant-type-constituents.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/no-redundant-type-constituents': 'error',
  },
}
