module.exports = {
  rules: {
    /**
     * setter 和 getter 必须写在一起
     * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
     * @category Base
     */
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  },
}
