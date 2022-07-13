/* eslint-disable */
/* eslint-enable no-unmodified-loop-condition */

let node = ''

while (node) {
  doSomething(node)
  node = node.parent
}

for (var j = 0; j < items.length; ++j) {
  doSomething(items[j])
}

while (node !== root) {
  doSomething(node)
  node = node.parent
}

while (node ? A : B) {
  doSomething(node)
  node = node.parent
}

while (obj.foo) {
  doSomething(obj)
}

while (check(obj)) {
  doSomething(obj)
}
