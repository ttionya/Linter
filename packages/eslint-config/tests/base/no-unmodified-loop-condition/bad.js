/* eslint-disable */
/* eslint-enable no-unmodified-loop-condition */

// errorCount 2

let node = ''

while (node) {
  doSomething(node)
}
node = other

while (node !== root) {
  doSomething(node)
}
