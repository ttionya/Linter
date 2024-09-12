module.exports = {
  rules: {
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar
     * @see {@link https://eslint.org/docs/v8.x/rules/no-useless-rename}
     * @category Base
     * @fixable
     */
    'no-useless-rename': [
      'error',
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
  },
}
