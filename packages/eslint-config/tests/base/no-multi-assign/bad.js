/* eslint-disable */
/* eslint-enable no-multi-assign */

// errorCount 6

const a1 = (b = c = 5)

const foo = (bar = 'baz')

let a2 = (b = c)

class Foo {
  a2 = (b = 10)
}

a2 = b = 'quux'
