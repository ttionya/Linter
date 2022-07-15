# `@ttionya/prettier-config`

[![npm](https://img.shields.io/npm/v/@ttionya/prettier-config?label=NPM&logo=npm)](https://www.npmjs.com/package/@ttionya/prettier-config) [![npm](https://img.shields.io/npm/dm/@ttionya/prettier-config?label=Downloads&logo=npm)](https://www.npmjs.com/package/@ttionya/prettier-config) [![npm](https://img.shields.io/npm/l/@ttionya/prettier-config?label=License&logo=npm)](https://www.npmjs.com/package/@ttionya/prettier-config)

Prettier rules.

**Note: Prettier v2 started supporting shared configurations.**

<br>



## Usage

### Prettier v1

If you still want to use Prettier v1, copy `prettierrc@v1.js` to the root of your project and rename it to `.prettierrc.js`.



### Prettier v2 (recommend)

#### Install

```shell
npm i -D @ttionya/prettier-config
```

#### Configure

```js
/* .prettierrc.js */

module.exports = {
  ...require('@ttionya/prettier-config'),

  // You can overwrite some properties from the shared configuration.
}
```

<br>



## License

ISC
