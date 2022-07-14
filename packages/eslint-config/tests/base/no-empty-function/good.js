/* eslint-disable */
/* eslint-enable no-empty-function */

function foo1() {
  // do nothing.
}

const foo2 = function () {
  // any clear comments.
}

const foo3 = () => {
  bar()
}

function* foo4() {
  // do nothing.
}

const foo5 = function* () {
  // do nothing.
}

const obj = {
  foo1: function () {
    // do nothing.
  },

  foo2: function* () {
    // do nothing.
  },

  foo3() {
    // do nothing.
  },

  *foo4() {
    // do nothing.
  },

  get foo5() {
    // do nothing.
  },

  set foo6(value) {
    // do nothing.
  },
}

class A {
  constructor() {
    // do nothing.
  }

  foo1() {
    // do nothing.
  }

  *foo2() {
    // do nothing.
  }

  get foo3() {
    // do nothing.
  }

  set foo4(value) {
    // do nothing.
  }

  static foo5() {
    // do nothing.
  }

  static *foo6() {
    // do nothing.
  }

  static get foo7() {
    // do nothing.
  }

  static set foo8(value) {
    // do nothing.
  }
}
