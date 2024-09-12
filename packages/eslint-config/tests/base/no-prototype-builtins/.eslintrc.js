module.exports = {
  rules: {
    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @see {@link https://eslint.org/docs/v8.x/rules/no-prototype-builtins}
     * @category Base
     * @recommended
     * @reason hasOwnProperty 常用
     */
    'no-prototype-builtins': 'off',
  },
}
