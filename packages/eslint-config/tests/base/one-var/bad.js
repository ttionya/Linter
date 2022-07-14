/* eslint-disable */
/* eslint-enable one-var */

// errorCount 6

function foo1() {
  let bar1, baz1
  const bar2 = true,
    baz2 = false
}

function foo2() {
  let bar, qux

  if (baz) {
    qux = true
  }
}

function foo3() {
  let bar = true,
    baz = false
}

class C {
  static {
    var foo, bar
    let baz, qux
  }
}
