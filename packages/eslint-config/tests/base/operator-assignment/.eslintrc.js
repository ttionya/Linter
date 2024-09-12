module.exports = {
  rules: {
    /**
     * 必须使用 x = x + y 而不是 x += y
     * @see {@link https://eslint.org/docs/v8.x/rules/operator-assignment}
     * @category Base
     * @fixable
     */
    'operator-assignment': 'off',
  },
}
