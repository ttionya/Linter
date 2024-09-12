module.exports = {
  rules: {
    /**
     * 使用 Object.hasOwn() 而不是 Object.prototype.hasOwnProperty.call()
     * @see {@link https://eslint.org/docs/v8.x/rules/prefer-object-has-own}
     * @category Base
     * @fixable
     */
    'prefer-object-has-own': 'error',
  },
}
