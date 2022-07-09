/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-return-this-type */

// errorCount 2

export default 1

class Foo {
  f1(): Foo {
    return this
  }

  f2 = (): Foo => {
    return this
  }

  f3(): Foo | undefined {
    return Math.random() > 0.5 ? this : undefined
  }
}
