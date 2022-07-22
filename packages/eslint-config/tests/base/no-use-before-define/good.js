/* eslint-disable */
/* eslint-enable no-use-before-define */

{
  let a
  a = 10
  alert(a)

  function f() {}
  f(1)

  let b = 1
  function g() {
    return b
  }

  {
    let c
    c++
  }

  {
    class C {
      static x = C
    }
  }

  {
    const C = class C {
      static x = C
    }
  }

  {
    const C = class C {
      static {
        C.x = 'foo'
      }
    }
  }
}

// functions
{
  f()
  function f() {}
}

// classes
{
  function foo() {
    return new A()
  }

  class A {}
}

// variables
{
  function baz() {
    console.log(foo)
  }
  const foo = 1

  const a = () => f()
  function b() {
    return f()
  }
  const c = function () {
    return f()
  }
  const f = () => {}

  const e = function () {
    return g()
  }
  const g = function () {}
}

// allowNamedExports
const a = 1
export default a

export const c = 1
const b = c

export function foo() {
  return d
}
const d = 1
