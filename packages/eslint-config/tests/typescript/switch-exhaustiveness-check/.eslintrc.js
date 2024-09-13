module.exports = {
  rules: {
    /**
     * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md}
     * @category TypeScript
     * @requires-type-information
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
  },
}
