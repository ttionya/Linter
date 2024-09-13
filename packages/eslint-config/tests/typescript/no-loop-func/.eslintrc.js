module.exports = {
  rules: {
    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-loop-func.md}
     * @category TypeScript
     */
    '@typescript-eslint/no-loop-func': 'off',
  },
}
