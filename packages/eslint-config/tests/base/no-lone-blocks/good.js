/* eslint-disable */
/* eslint-enable no-lone-blocks */

while (foo) {
  bar()
}

if (foo) {
  if (bar) {
    baz()
  }
}

function bar() {
  baz()
}

{
  let x = 1
}

{
  const y = 1
}

{
  class Foo {}
}

aLabel: {
}

class C {
  static {
    lbl: {
      if (something) {
        break lbl
      }

      foo()
    }
  }
}
