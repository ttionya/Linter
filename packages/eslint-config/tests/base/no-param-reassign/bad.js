/* eslint-disable */
/* eslint-enable no-param-reassign */

// errorCount 4

function foo1(bar) {
  bar = 13
}

function foo2(bar) {
  bar++
}

function foo3(bar) {
  for (bar in baz) {
  }
}

function foo4(bar) {
  for (bar of baz) {
  }
}
