/* eslint-disable */
/* eslint-enable no-lone-blocks */

// errorCount 5

{
}

if (foo) {
  bar()
  {
    baz()
  }
}

function bar() {
  {
    baz()
  }
}

{
  function foo() {}
}

{
  aLabel: {
  }
}

class C {
  static {
    {
      foo()
    }
  }
}
