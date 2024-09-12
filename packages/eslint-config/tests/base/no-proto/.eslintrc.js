module.exports = {
  rules: {
    /**
     * 禁止使用 __proto__
     * @see {@link https://eslint.org/docs/v8.x/rules/no-proto}
     * @category Base
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'error',
  },
}
