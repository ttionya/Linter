module.exports = {
  rules: {
    /**
     * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
     * @see {@link https://typescript-eslint.io/rules/explicit-module-boundary-types/}
     * @category TypeScript
     * @reason 使用 explicit-function-return-type 替代该规则
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
