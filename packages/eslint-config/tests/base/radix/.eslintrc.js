module.exports = {
  rules: {
    /**
     * parseInt 必须传入第二个参数
     * @see {@link https://eslint.org/docs/v8.x/rules/radix}
     * @category Base
     */
    radix: ['error', 'as-needed'],
  },
}
