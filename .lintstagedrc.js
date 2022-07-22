module.exports = {
  '**/*.{js,ts}': [
    'prettier --write',
    'eslint --ext .js,.ts --ignore-pattern "packages/eslint-config/tests/*/*/**" --fix',
  ],
}
