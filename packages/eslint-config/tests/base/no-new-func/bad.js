/* eslint-disable */
/* eslint-enable no-new-func */

// errorCount 6

const x1 = new Function('a', 'b', 'return a + b')
const x2 = Function('a', 'b', 'return a + b')
const x3 = Function.call(null, 'a', 'b', 'return a + b')
const x4 = Function.apply(null, ['a', 'b', 'return a + b'])
const x5 = Function.bind(null, 'a', 'b', 'return a + b')()
const f = Function.bind(null, 'a', 'b', 'return a + b')
