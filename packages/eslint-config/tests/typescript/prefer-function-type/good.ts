/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-function-type */

export default 1

interface IFoo1 {
  (): void
  bar: number
}

function foo(bar: { (): string; baz: number }): string {
  return bar()
}

interface IFoo2 {
  bar: string
}
interface Bar extends IFoo2 {
  (): void
}

type MixinMethod = <TSelf>(this: TSelf, arg: string) => TSelf
type ReturnsSelf = (arg: string) => ReturnsSelf

interface Overloaded {
  (data: string): number
  (id: number): string
}
type Intersection = ((data: string) => number) & ((id: number) => string)
