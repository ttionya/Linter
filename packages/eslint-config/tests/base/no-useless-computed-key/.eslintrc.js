module.exports = {
  rules: {
    /**
     * 禁止出现没必要的计算键名
     * @see {@link https://eslint.org/docs/v8.x/rules/no-useless-computed-key}
     * @category Base
     * @fixable
     */
    'no-useless-computed-key': [
      'error',
      {
        enforceForClassMembers: true,
      },
    ],
  },
}
