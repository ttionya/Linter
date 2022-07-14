/* eslint-disable */
/* eslint-enable no-empty-function */

// errorCount 20

function foo1() {}

const foo2 = function () {}

const foo3 = () => {}

function* foo4() {}

const foo5 = function* () {}

const obj = {
  foo1: function () {},

  foo2: function* () {},

  foo3() {},

  *foo4() {},

  get foo5() {},

  set foo6(value) {},
}

class A {
  constructor() {}

  foo1() {}

  *foo2() {}

  get foo3() {}

  set foo4(value) {}

  static foo5() {}

  static *foo6() {}

  static get foo7() {}

  static set foo8(value) {}
}
