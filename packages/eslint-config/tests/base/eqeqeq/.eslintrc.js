module.exports = {
  rules: {
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     * @see {@link https://eslint.org/docs/v8.x/rules/eqeqeq}
     * @category Base
     * @fixable
     */
    eqeqeq: ['error', 'always'],
  },
}
