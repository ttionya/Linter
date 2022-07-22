/* eslint-disable */
/* eslint-enable no-return-assign */

// errorCount 3

function doSomething1() {
  return foo = bar + 2
}

function doSomething2() {
  return foo += 2
}

function doSomething3() {
  return foo = bar + 2
}
