/* eslint-disable */
/* eslint-enable no-useless-computed-key */

const a1 = { a: 0 }
const a2 = { 0: 0 }
const a3 = { x() {} }
const a4 = { a: 0 }
const a5 = { '0+1,234': 0 }

const a6 = {
  __proto__: foo,

  ['__proto__']: bar,
}

class Foo1 {
  foo = 'bar'

  0() {}
  a() {}
  get b() {}
  set c(value) {}

  static foo = 'bar'

  static a() {}
}

class Foo2 {
  ['constructor']

  constructor() {}

  ['constructor']() {}

  static ['constructor']

  static ['prototype']
}
