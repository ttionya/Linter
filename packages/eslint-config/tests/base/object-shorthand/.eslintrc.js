module.exports = {
  rules: {
    /**
     * 必须使用 a = {b} 而不是 a = {b: b}
     * @see {@link https://eslint.org/docs/v8.x/rules/object-shorthand}
     * @category Base
     * @fixable
     */
    'object-shorthand': 'off',
  },
}
