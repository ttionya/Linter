module.exports = {
  rules: {
    /**
     * 禁止出现 javascript:
     * @see {@link https://eslint.org/docs/latest/rules/no-script-url}
     * @category Base
     * @reason 有可能需要出现这样的场景
     */
    'no-script-url': 'off',
  },
}
