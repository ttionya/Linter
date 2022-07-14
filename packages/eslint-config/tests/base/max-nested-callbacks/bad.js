/* eslint-disable */
/* eslint-enable max-nested-callbacks */

// errorCount 1

foo1(function () {
  foo2(function () {
    foo3(function () {
      foo4(function () {
        foo5(function () {})
      })
    })
  })
})
