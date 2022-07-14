/* eslint-disable */
/* eslint-enable no-undef-init */

const foo = undefined

let { bar = undefined } = baz

;[quux = undefined] = quuux

;(foo = undefined) => {}

class Foo {
  bar = undefined
}
