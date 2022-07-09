module.exports = {
  rules: {
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     * @see {@link https://typescript-eslint.io/rules/no-unnecessary-condition/}
     * @category TypeScript
     * @fixable
     * @requires-type-information
     */
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
  },
}
