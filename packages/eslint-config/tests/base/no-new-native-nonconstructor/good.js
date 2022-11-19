/* eslint-disable */
/* eslint-enable no-new-native-nonconstructor */

var foo = Symbol('foo')
var bar = BigInt(9007199254740991)

function baz(Symbol) {
  const qux = new Symbol('baz')
}
function quux(BigInt) {
  const corge = new BigInt(9007199254740991)
}
