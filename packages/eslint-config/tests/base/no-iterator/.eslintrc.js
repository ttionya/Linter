module.exports = {
  rules: {
    /**
     * 禁止使用 __iterator__
     * @see {@link https://eslint.org/docs/v8.x/rules/no-iterator}
     * @category Base
     * @reason __iterator__ 是一个已废弃的属性，使用 [Symbol.iterator] 替代
     */
    'no-iterator': 'error',
  },
}
