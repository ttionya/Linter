/* eslint-disable */
/* eslint-enable no-constructor-return */

// errorCount 2

class A {
  constructor(a) {
    this.a = a
    return a
  }
}

class B {
  constructor(f) {
    if (!f) {
      return 'falsy'
    }
  }
}
