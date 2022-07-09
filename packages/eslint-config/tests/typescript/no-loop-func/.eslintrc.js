module.exports = {
  rules: {
    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     * @see {@link https://typescript-eslint.io/rules/no-loop-func/}
     * @category TypeScript
     */
    '@typescript-eslint/no-loop-func': 'off',
  },
}
