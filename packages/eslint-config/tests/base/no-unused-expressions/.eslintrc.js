module.exports = {
  rules: {
    /**
     * 禁止无用的表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
     * @category Base
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ],
  },
}
