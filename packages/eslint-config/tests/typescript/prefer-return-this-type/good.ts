/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-return-this-type */

export default 1

class Foo {
  f1(): this {
    return this
  }

  f2() {
    return this
  }

  f3 = (): this => {
    return this
  }

  f4 = () => {
    return this
  }
}

class Base {}
class Derived extends Base {
  f(): Base {
    return this
  }
}
