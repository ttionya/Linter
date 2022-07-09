/* eslint-disable */
/* eslint-enable @typescript-eslint/no-invalid-this */

// errorCount 8

export default 1

function foo1() {
  this.a = 0
  baz(() => this)
}

;(function () {
  this.a = 0
  baz(() => this)
})()

var foo2 = function () {
  this.a = 0
  baz(() => this)
}

var obj = {
  aaa: function () {
    return function foo() {
      this.a = 0
      baz(() => this)
    }
  },
}
