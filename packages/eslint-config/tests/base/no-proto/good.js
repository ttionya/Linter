/* eslint-disable */
/* eslint-enable no-proto */

const a = Object.getPrototypeOf(obj)

Object.setPrototypeOf(obj, b)

const c = { __proto__: a }
