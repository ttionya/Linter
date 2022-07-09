module.exports = {
  rules: {
    /**
     * 变量必须先定义后使用
     * @see {@link https://typescript-eslint.io/rules/no-use-before-define/}
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
