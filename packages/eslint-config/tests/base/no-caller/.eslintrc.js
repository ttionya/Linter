module.exports = {
  rules: {
    /**
     * 禁止使用 caller 或 callee
     * @see {@link https://eslint.org/docs/v8.x/rules/no-caller}
     * @category Base
     * @reason 已废弃的语法
     */
    'no-caller': 'error',
  },
}
