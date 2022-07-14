/* eslint-disable */
/* eslint-enable func-name-matching */

// errorCount 7

let foo = function bar() {}
foo = function bar() {}
const obj = { foo: function bar() {} }
;({ ['foo']: function bar() {} })
obj.foo = function bar() {}
obj['foo'] = function bar() {}

class C {
  foo = function bar() {}
}
