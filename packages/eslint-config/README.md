# @ttionya/eslint-config

[![npm](https://img.shields.io/npm/v/@ttionya/eslint-config?label=NPM&logo=npm)](https://www.npmjs.com/package/@ttionya/eslint-config) [![npm](https://img.shields.io/npm/dm/@ttionya/eslint-config?label=Downloads&logo=npm)](https://www.npmjs.com/package/@ttionya/eslint-config) [![npm](https://img.shields.io/npm/l/@ttionya/eslint-config?label=License&logo=npm)](https://github.com/ttionya/Linter/blob/master/packages/eslint-config/LICENSE)

ESLint Rules.

<br>



## Config List

- [Base](#base)
- [Babel](#babel)
- [TypeScript](#typescript)

<br>



## Usage

### Base

Basic rules.

```bash
# NPM
npm i -D @ttionya/eslint-config

# PNPM
pnpm add -D @ttionya/eslint-config
```

```js
/* .eslintrc.js */

module.exports = {
  extends: ['@ttionya/eslint-config/base'],

  rules: {
    // custom ESLint rules
  },
}
```

### Babel

Basic rules, parser is `@babel/eslint-parser`, so you can use experimental and non-standard syntax provided by Babel.

```bash
# NPM
npm i -D @babel/core \
         @babel/eslint-parser \
         @ttionya/eslint-config

# PNPM
pnpm add -D @babel/core \
            @babel/eslint-parser \
            @ttionya/eslint-config
```

```js
/* .eslintrc.js */

module.exports = {
  extends: ['@ttionya/eslint-config/babel'],

  rules: {
    // custom ESLint rules
  },
}
```

### TypeScript

TypeScript rules.

```bash
# NPM
npm i -D typescript@~4.8.4 \
         @typescript-eslint/eslint-plugin \
         @typescript-eslint/parser \
         @ttionya/eslint-config

# PNPM
pnpm add -D typescript@~4.8.4 \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            @ttionya/eslint-config
```

Note: `@typescript-eslint/typescript-estree@5.43.0` does not support TypeScript 4.9, so please use version `4.8.x`. See [`typescript-eslint/typescript-eslint#5688`](https://github.com/typescript-eslint/typescript-eslint/issues/5688) for detailed discussion. 

```js
/* .eslintrc.js */

module.exports = {
  extends: ['@ttionya/eslint-config/typescript'],

  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        // custom @typescript-eslint/* rules
      },
    },
  ],

  rules: {
    // custom ESLint rules
  },
}
```

<br>



## References

- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
- [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

<br>



## License

ISC
