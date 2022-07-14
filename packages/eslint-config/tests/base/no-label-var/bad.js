/* eslint-disable */
/* eslint-enable no-label-var */

// errorCount 1

const x = foo
function bar() {
  x: for (;;) {
    break x
  }
}
