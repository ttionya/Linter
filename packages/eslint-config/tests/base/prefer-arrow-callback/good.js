/* eslint-disable */
/* eslint-enable prefer-arrow-callback */

foo(function () {
  this.a
})

foo(function () {
  ;() => this
})

someArray.map(function (item) {
  return this.doSomething(item)
}, someObject)
