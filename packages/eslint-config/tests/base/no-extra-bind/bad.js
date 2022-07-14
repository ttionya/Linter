/* eslint-disable */
/* eslint-enable no-extra-bind */

// errorCount 5

const x1 = function () {
  foo()
}.bind(bar)

const x2 = (() => {
  foo()
}).bind(bar)

const x3 = (() => {
  this.foo()
}).bind(bar)

const x4 = function () {
  ;(function () {
    this.foo()
  })()
}.bind(bar)

const x5 = function () {
  function foo() {
    this.bar()
  }
}.bind(baz)
