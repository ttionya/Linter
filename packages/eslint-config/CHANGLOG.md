# Changelog

## v2.4.0

### Dependencies

- `eslint-config-prettier@^8.5.0` => `eslint-config-prettier@^8.7.0`
- `typescript@~4.9.0` => `typescript@~4.9.5`
- `eslint@^8.28.0` => `eslint@^8.35.0`
- `@typescript-eslint/eslint-plugin@>=5.44.0` => `@typescript-eslint/eslint-plugin@>=5.54.0`
- `@typescript-eslint/parser@>=5.44.0` => `@typescript-eslint/parser@>=5.54.0`

### Feature

- Add `@typescript-eslint/no-import-type-side-effects` rule
- Add `@typescript-eslint/no-mixed-enums` rule

### Chore

- Clean up root directory after publishing
- Use shared tsconfig
- Support the type checking
- Update GitHub Actions

<br>

## v2.3.1

### Dependencies

- `typescript@~4.8.4` => `typescript@~4.9.0`
- `@typescript-eslint/eslint-plugin@>=5.43.0` => `@typescript-eslint/eslint-plugin@>=5.44.0`
- `@typescript-eslint/parser@>=5.43.0` => `@typescript-eslint/parser@>=5.44.0`

<br>

## v2.3.0

### Dependencies

- `eslint@^8.26.0` => `eslint@^8.28.0`
- `@typescript-eslint/eslint-plugin@>=5.42.0` => `@typescript-eslint/eslint-plugin@>=5.43.0`
- `@typescript-eslint/parser@>=5.42.0` => `@typescript-eslint/parser@>=5.43.0`

### Feature

- Add `no-empty-static-block` rule
- Add `no-new-native-nonconstructor` rule
- Remove Vue and React support
- Split base and babel config
- Support `.cts` and `.mts` file extension for TypeScript

<br>

## v2.2.0

### Dependencies

- `eslint@^8.25.0` => `eslint@^8.26.0`
- `@typescript-eslint/eslint-plugin@>=5.38.0` => `@typescript-eslint/eslint-plugin@>=5.42.0`
- `@typescript-eslint/parser@>=5.38.0` => `@typescript-eslint/parser@>=5.42.0`

### Feature

- Rename `@typescript-eslint/sort-type-union-intersection-members` to `@typescript-eslint/sort-type-constituents`
- Add `@typescript-eslint/no-unsafe-declaration-merging` rule

### Chore

- Skip GitHub Actions "Sync" when dependabot create a PR

<br>

## before v2.2.0

outdated
