/* eslint-disable */
/* eslint-enable no-invalid-this */

// errorCount 12

;(function () {
  this.a = 0
  baz(() => this)
})()

function foo1() {
  this.a = 0
  baz(() => this)
}

const foo2 = function () {
  this.a = 0
  baz(() => this)
}

foo3(function () {
  this.a = 0
  baz(() => this)
})

const obj = {
  aaa: function () {
    return function foo() {
      this.a = 0
      baz(() => this)
    }
  },
}

foo.forEach(function () {
  this.a = 0
  baz(() => this)
})
