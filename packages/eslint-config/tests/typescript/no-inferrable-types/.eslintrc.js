module.exports = {
  rules: {
    /**
     * 禁止对初始化为数字、字符串或布尔等直接字面量的变量或参数进行显式类型声明
     * @see {@link https://typescript-eslint.io/rules/no-inferrable-types/}
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
  },
}
