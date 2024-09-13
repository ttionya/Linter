module.exports = {
  rules: {
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/dot-notation.md}
     * @category TypeScript
     * @reason 有时可以统一属性写法
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/dot-notation': 'off',
  },
}
