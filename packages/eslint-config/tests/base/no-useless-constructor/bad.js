/* eslint-disable */
/* eslint-enable no-useless-constructor */

// errorCount 2

class A {
  constructor() {}
}

class B extends A {
  constructor(...args) {
    super(...args)
  }
}
