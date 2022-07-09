/* eslint-disable */
/* eslint-enable @typescript-eslint/no-empty-interface */

export default 1

interface Foo {
  name: string
}

interface Bar extends Foo {}

interface Baz extends Foo, Bar {}
