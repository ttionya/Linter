module.exports = {
  rules: {
    /**
     * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
     * @see {@link https://eslint.org/docs/v8.x/rules/no-div-regex}
     * @category Base
     * @reason 有代码高亮在不会出现歧义
     * @fixable
     */
    'no-div-regex': 'off',
  },
}
