/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-function-type */

// errorCount 4

export default 1

interface IFoo1 {
  (): string
}

function foo(bar: { (): number }): number {
  return bar()
}

interface IFoo2 extends Function {
  (): void
}

interface MixinMethod {
  (arg: string): this
}
