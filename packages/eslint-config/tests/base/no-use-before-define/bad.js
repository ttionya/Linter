/* eslint-disable */
/* eslint-enable no-use-before-define */

// errorCount 14

// classes
{
  new A()
  class A {}

  {
    class C extends C {}
  }

  {
    class C extends D {}
    class D {}
  }

  {
    class C {
      static x = 'foo';
      [C.x]() {}
    }
  }

  {
    class C {
      static {
        new D()
      }
    }
    class D {}
  }
}

// variables
{
  console.log(foo)
  const foo = 1

  f()
  const f = () => {}

  g()
  const g = function () {}

  {
    const C = class {
      static x = C
    }
  }

  {
    const C = class {
      static x = foo
    }
    const foo = 1
  }

  {
    class C {
      static {
        this.x = foo
      }
    }
    const foo = 1
  }
}

// allowNamedExports
export { a, b, C }

const a = 1

let b

class C {}
