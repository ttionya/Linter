/* eslint-disable */
/* eslint-enable no-useless-computed-key */

// errorCount 12

const a1 = { ['0']: 0 }
const a2 = { ['0+1,234']: 0 }
const a3 = { [0]: 0 }
const a4 = { ['x']: 0 }
const a5 = { ['x']() {} }

class Foo {
  ['foo'] = 'bar';

  [0]() {}
  ['a']() {}
  get ['b']() {}
  set ['c'](value) {}

  static ['foo'] = 'bar'

  static ['a']() {}
}
