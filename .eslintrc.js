module.exports = {
  extends: ['./packages/eslint-config/libs/lint.js'],

  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
