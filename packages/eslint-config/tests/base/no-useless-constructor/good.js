/* eslint-disable */
/* eslint-enable no-useless-constructor */

class A1 {}

class A2 {
  constructor() {
    doSomething()
  }
}

class B1 extends A1 {
  constructor() {
    super('foo')
  }
}

class B2 extends A1 {
  constructor() {
    super()
    doSomething()
  }
}
