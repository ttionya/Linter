/* eslint-disable */
/* eslint-enable grouped-accessor-pairs */

const foo = {
  get a() {
    return this.val
  },
  set a(value) {
    this.val = value
  },
  b: 1,
}

const bar = {
  get b() {
    return this.val
  },
  set b(value) {
    this.val = value
  },
  a: 1,
}

class Foo {
  get a() {
    return this.val
  }
  set a(value) {
    this.val = value
  }
  b() {}
}

const Bar = class {
  static get a() {
    return this.val
  }
  static set a(value) {
    this.val = value
  }
  b() {}
}
