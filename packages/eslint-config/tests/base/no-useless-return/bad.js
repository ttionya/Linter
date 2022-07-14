/* eslint-disable */
/* eslint-enable no-useless-return */

// errorCount 4

function foo1() {
  return
}

function foo2() {
  doSomething()
  return
}

function foo3() {
  if (condition) {
    bar()
    return
  } else {
    baz()
  }
}

function foo4() {
  switch (bar) {
    case 1:
      doSomething()
    default:
      doSomethingElse()
      return
  }
}
