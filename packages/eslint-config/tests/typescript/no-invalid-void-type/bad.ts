/* eslint-disable */
/* eslint-enable @typescript-eslint/no-invalid-void-type */

// errorCount 6

export default 1

type PossibleValues = string | number | void
type MorePossibleValues = string | ((number & any) | (string | void))

function logSomething(thing: void) {}

logSomething<void>(undefined)

interface Interface {
  lambda: () => void
  prop: void
}

class MyClass {
  private readonly propName: void
}
