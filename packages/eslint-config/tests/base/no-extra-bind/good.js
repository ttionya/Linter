/* eslint-disable */
/* eslint-enable no-extra-bind */

const x1 = function () {
  this.foo()
}.bind(bar)

const x2 = function (a) {
  return a + 1
}.bind(foo, bar)
