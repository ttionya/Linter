module.exports = {
  rules: {
    /**
     * 变量必须先定义后使用
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-use-before-define.md}
     * @category TypeScript
     */
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        variables: false,
        classes: false,
        enums: false,
        typedefs: false,
        ignoreTypeReferences: true,
      },
    ],
  },
}
