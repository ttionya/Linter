/* eslint-disable */
/* eslint-enable @typescript-eslint/lines-between-class-members */

// errorCount 2

export default 1

class Foo {
  constructor() {}
  bar() {}

  bar(a: string): void
  bar(a: string, b: string): void

  bar(a: string, b: string, c: string): void {}

  baz() {}
  qux() {}
}
