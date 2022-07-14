module.exports = {
  rules: {
    /**
     * new 后面的类名必须首字母大写
     * @see {@link https://eslint.org/docs/latest/rules/new-cap}
     * @category Base
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
  },
}
