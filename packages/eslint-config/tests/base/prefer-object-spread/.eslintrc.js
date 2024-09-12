module.exports = {
  rules: {
    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     * @see {@link https://eslint.org/docs/v8.x/rules/prefer-object-spread}
     * @category Base
     * @fixable
     */
    'prefer-object-spread': 'error',
  },
}
