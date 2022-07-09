/* eslint-disable */
/* eslint-enable @typescript-eslint/parameter-properties */

export default 1

class Foo1 {
  constructor(name: string) {}
}

class Foo2 {
  constructor(readonly name: string) {}
}

class Foo3 {
  constructor(public readonly name: string) {}
}
