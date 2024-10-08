module.exports = {
  rules: {
    /**
     * 指定类成员的排序规则
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/member-ordering.md}
     * @category TypeScript
     * @reason 优先级：
     *          1. static > instance
     *          2. field > constructor > method
     *          3. public > protected > private
     */
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],
  },
}
