module.exports = {
  rules: {
    /**
     * 禁止给类的构造函数的参数添加修饰符
     * @see {@link https://typescript-eslint.io/rules/no-parameter-properties/}
     * @category TypeScript
     * @reason 单独列出清晰明了
     */
    '@typescript-eslint/no-parameter-properties': [
      'error',
      {
        allows: ['public readonly', 'readonly', 'public'],
      },
    ],
  },
}
