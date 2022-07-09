/* eslint-disable */
/* eslint-enable @typescript-eslint/no-invalid-this */

export default 1

function Foo1() {
  this.a = 0
  baz(() => this)
}

class Foo2 {
  constructor() {
    this.a = 0
    baz(() => this)
  }
}

var obj = {
  foo: function foo() {
    this.a = 0
  },
}

Object.defineProperty(obj, 'foo', {
  value: function foo() {
    this.a = 0
  },
})

function Foo3() {
  this.foo = function foo() {
    this.a = 0
    baz(() => this)
  }
}

obj.foo = function foo() {
  this.a = 0
}

Foo3.prototype.foo = function foo() {
  this.a = 0
}

class Foo4 {
  a = this.b

  static a = this.b

  foo() {
    this.a = 0
    baz(() => this)
  }

  static foo() {
    this.a = 0
    baz(() => this)
  }

  static {
    this.a = 0
    baz(() => this)
  }
}
