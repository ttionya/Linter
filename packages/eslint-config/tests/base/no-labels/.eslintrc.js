module.exports = {
  rules: {
    /**
     * 禁止使用 label
     * @see {@link https://eslint.org/docs/latest/rules/no-labels}
     * @category Base
     */
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
  },
}
