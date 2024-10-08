module.exports = {
  rules: {
    /**
     * 禁止直接 new 一个类而不赋值
     * @see {@link https://eslint.org/docs/v8.x/rules/no-new}
     * @category Base
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': 'error',
  },
}
