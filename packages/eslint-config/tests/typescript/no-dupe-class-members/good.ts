/* eslint-disable */
/* eslint-enable @typescript-eslint/no-dupe-class-members */

export default 1

class Foo1 {
  bar() {}
  qux() {}
}

class Foo2 {
  get bar() {}
  set bar(value) {}
}

class Foo3 {
  bar
  qux
}

class Foo4 {
  bar
  qux() {}
}

class Foo5 {
  static bar() {}
  bar() {}
}
