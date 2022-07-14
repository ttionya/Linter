/* eslint-disable */
/* eslint-enable no-useless-return */

function foo1() {
  return 5
}

function foo2() {
  return doSomething()
}

function foo3() {
  if (condition) {
    bar()
    return
  } else {
    baz()
  }
  qux()
}

function foo4() {
  switch (bar) {
    case 1:
      doSomething()
      return
    default:
      doSomethingElse()
  }
}

function foo5() {
  for (const foo of bar) {
    return
  }
}
