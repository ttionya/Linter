/* eslint-disable */
/* eslint-enable @typescript-eslint/parameter-properties */

// errorCount 4

export default 1

class Foo1 {
  constructor(private name: string) {}
}

class Foo2 {
  constructor(protected name: string) {}
}

class Foo3 {
  constructor(private readonly name: string) {}
}

class Foo4 {
  constructor(protected readonly name: string) {}
}
