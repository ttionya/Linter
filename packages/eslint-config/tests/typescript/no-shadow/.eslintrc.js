module.exports = {
  rules: {
    /**
     * 禁止变量名与上层作用域内的已定义的变量重复
     * @see {@link https://typescript-eslint.io/rules/no-shadow/}
     * @category TypeScript
     * @reason 很多时候函数的形参和传参是同名的
     */
    '@typescript-eslint/no-shadow': 'off',
  },
}
