/* eslint-disable */
/* eslint-enable one-var */

function foo1() {
  let bar
  let baz
}

function foo2() {
  let bar

  if (baz) {
    let qux = true
  }
}

function foo3() {
  let bar

  if (baz) {
    let qux = true
  }
}

class C {
  static {
    var foo
    var bar
    let baz
    let qux
  }
}

for (let i = 0, len = arr.length; i < len; i++) {
  doSomething(arr[i])
}
