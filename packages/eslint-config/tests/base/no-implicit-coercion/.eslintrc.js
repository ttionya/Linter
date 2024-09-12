module.exports = {
  rules: {
    /**
     * 禁止难以理解的类型转换
     * @see {@link https://eslint.org/docs/v8.x/rules/no-implicit-coercion}
     * @category Base
     * @fixable
     */
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: false,
        allow: ['!!', '~', '+'],
      },
    ],
  },
}
