/* eslint-disable */
/* eslint-enable func-name-matching */

let foo = function foo() {}
foo = function () {}
foo = () => {}
foo = function foo() {}

let obj = { foo: function foo() {} }
obj = { [foo]: function bar() {} }
obj = { 'foo//bar': function foo() {} }
obj = { foo: function () {} }

obj.foo = function foo() {}
obj['foo'] = function foo() {}
obj['foo//bar'] = function foo() {}
obj[foo] = function bar() {}

obj['x' + 2] = function bar() {}
const [bar] = [function bar() {}]
;({ [foo]: function bar() {} })

class C {
  foo = function foo() {}
  baz = function () {}
}

class D {
  #foo = function foo() {}
  #bar = function foo() {}
  baz() {
    this.#foo = function foo() {}
    this.#foo = function bar() {}
  }
}

module.exports = function foo(name) {}
module['exports'] = function foo(name) {}
