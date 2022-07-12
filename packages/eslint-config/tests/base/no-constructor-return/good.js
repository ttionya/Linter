/* eslint-disable */
/* eslint-enable no-constructor-return */

class C {
  constructor(c) {
    this.c = c
  }
}

class D {
  constructor(f) {
    if (!f) {
      return
    }

    f()
  }
}
