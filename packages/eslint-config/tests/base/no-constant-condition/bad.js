/* eslint-disable */
/* eslint-enable no-constant-condition */

// errorCount 7

{
  if (false) {
    doSomethingUnfinished()
  }

  if (void x) {
    doSomethingUnfinished()
  }

  if (class {}) {
    doSomethingAlways()
  }

  if (new Boolean(x)) {
    doSomethingAlways()
  }

  if (Boolean(1)) {
    doSomethingAlways()
  }

  if (undefined) {
    doSomethingUnfinished()
  }

  const result = 0 ? a : b
}
