/* eslint-disable */
/* eslint-enable guard-for-in */

for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key)
  }
}

for (key in foo) {
  if ({}.hasOwnProperty.call(foo, key)) {
    doSomething(key)
  }
}
