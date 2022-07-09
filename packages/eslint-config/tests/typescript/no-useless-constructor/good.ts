/* eslint-disable */
/* eslint-enable @typescript-eslint/no-useless-constructor */

export default 1

class Foo {
  constructor(prop?: string) {
    console.log(prop)
  }
}

class Bar extends Foo {
  constructor(...args: any[]) {
    super(...args)

    console.log(1)
  }
}
