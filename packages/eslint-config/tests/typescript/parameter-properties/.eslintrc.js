module.exports = {
  rules: {
    /**
     * 类的构造函数参数作为类属性时，必须加上可访问性修饰符
     * @see {@link https://typescript-eslint.io/rules/parameter-properties/}
     * @category TypeScript
     * @reason 单独列出清晰明了
     */
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        allow: ['public readonly', 'readonly', 'public'],
        prefer: 'class-property',
      },
    ],
  },
}
