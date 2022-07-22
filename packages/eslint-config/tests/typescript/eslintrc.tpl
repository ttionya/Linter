module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      plugins: ['@typescript-eslint'],

      extends: ['plugin:@typescript-eslint/recommended'],

      parser: '@typescript-eslint/parser',

      rules: {},
    },
  ],
}
