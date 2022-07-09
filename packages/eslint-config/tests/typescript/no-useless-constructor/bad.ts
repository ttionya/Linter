/* eslint-disable */
/* eslint-enable @typescript-eslint/no-useless-constructor */

// errorCount 2

export default 1

class Foo {
  constructor(prop?: string[]) {}
}

class Bar extends Foo {
  constructor(...args: any[]) {
    super(...args)
  }
}
