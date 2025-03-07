# @ttionya/prettier-config

[![npm](https://img.shields.io/npm/v/@ttionya/prettier-config?label=NPM&logo=npm)](https://www.npmjs.com/package/@ttionya/prettier-config) [![npm](https://img.shields.io/npm/dm/@ttionya/prettier-config?label=Downloads&logo=npm)](https://www.npmjs.com/package/@ttionya/prettier-config) [![npm](https://img.shields.io/npm/l/@ttionya/prettier-config?label=License&logo=npm)](https://github.com/ttionya/Linter/blob/master/packages/prettier-config/LICENSE)

Prettier rules.

<br>

## Required

Prettier v3.0.0+

<br>

## Exports

Rules:

- [`@ttionya/prettier-config`](#base)
- [`@ttionya/prettier-config/jsdoc`](#plugin-jsdoc)

Utils (exported from `@ttionya/prettier-config/utils`):

- `mergeConfig` - Merge only two configuration options
- `mergeConfigs` - Merge multiple configuration options

<br>

## Usage

### Base

Basic rules.

```bash
# NPM
npm i -D prettier @ttionya/prettier-config

# PNPM
pnpm add -D prettier @ttionya/prettier-config
```

```js
/* Via CommonJS */
const base = require('@ttionya/prettier-config')

module.exports = {
  ...base,
  
  // your rules
}
```

```js
/* Via ESM */
import base from '@ttionya/prettier-config'

export default {
  ...base,

  // your rules
}
```

### Plugins

All plugins are **optional dependencies**, so you will need to install them yourself.

Each plugin is independent of the base rules, allowing you to combine them using the utility functions `mergeConfig` and `mergeConfigs` exported from `@ttionya/prettier-config/utils`.

#### Plugin JSDoc

[`prettier-plugin-jsdoc`](https://www.npmjs.com/package/prettier-plugin-jsdoc)

```bash
# NPM
npm i -D prettier prettier-plugin-jsdoc @ttionya/prettier-config

# PNPM
pnpm add -D prettier prettier-plugin-jsdoc @ttionya/prettier-config
```

```js
/* Via CommonJS */
const base = require('@ttionya/prettier-config')
const jsdoc = require('@ttionya/prettier-config/jsdoc')
const { mergeConfigs } = require('@ttionya/prettier-config/utils')

module.exports = mergeConfigs([
  base,
  jsdoc,
  {
    // your rules
  },
])
```

```js
/* Via ESM */
import base from '@ttionya/prettier-config'
import jsdoc from '@ttionya/prettier-config/jsdoc'
import { mergeConfigs } from '@ttionya/prettier-config/utils'

export default mergeConfigs([
  base,
  jsdoc,
  {
    // your rules
  },
])
```

<br>

## License

ISC
