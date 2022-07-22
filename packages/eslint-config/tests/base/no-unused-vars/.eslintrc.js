module.exports = {
  rules: {
    /**
     * 已定义的变量必须使用
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars}
     * @category Base
     * @recommended
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrors: 'none',
      },
    ],
  },
}
