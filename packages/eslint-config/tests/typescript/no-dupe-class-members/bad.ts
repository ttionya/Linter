/* eslint-disable */
/* eslint-enable @typescript-eslint/no-dupe-class-members */

// errorCount 5

export default 1

class Foo1 {
  bar() {}
  bar() {}
}

class Foo2 {
  bar() {}
  get bar() {}
}

class Foo3 {
  bar
  bar
}

class Foo4 {
  bar
  bar() {}
}

class Foo5 {
  static bar() {}
  static bar() {}
}
