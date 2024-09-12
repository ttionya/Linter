module.exports = {
  rules: {
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @see {@link https://eslint.org/docs/v8.x/rules/block-scoped-var}
     * @category Base
     * @reason 禁止使用 var
     */
    'block-scoped-var': 'off',
  },
}
