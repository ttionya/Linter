module.exports = {
  rules: {
    /**
     * 禁止将 any 类型的变量作为函数参数调用
     * @see {@link https://typescript-eslint.io/rules/no-unsafe-argument/}
     * @category TypeScript
     * @recommended
     * @requires-type-information
     */
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
}
