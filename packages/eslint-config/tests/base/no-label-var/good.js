/* eslint-disable */
/* eslint-enable no-label-var */

function foo() {
  const q = t
}

function bar() {
  q: for (;;) {
    break q
  }
}
