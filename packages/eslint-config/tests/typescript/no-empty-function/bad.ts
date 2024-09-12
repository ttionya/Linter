/* eslint-disable */
/* eslint-enable @typescript-eslint/no-empty-function */

// errorCount 4

export default 1

class Foo1 {
  private constructor() {}
}

class Foo2 {
  protected constructor() {}
}

class Foo3 {
  @decorator()
  foo() {}
}

abstract class Base {
  protected greet(): void {
    console.log('Hello!')
  }
}

class Foo4 extends Base {
  protected override greet(): void {}
}
