module.exports = {
  rules: {
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     * @see {@link https://eslint.org/docs/v8.x/rules/no-eq-null}
     * @category Base
     */
    'no-eq-null': 'error',
  },
}
