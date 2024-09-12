/* eslint-disable */
/* eslint-enable @typescript-eslint/adjacent-overload-signatures */

export default 1

declare namespace Foo1 {
  export function foo(s: string): void
  export function foo(n: number): void
  export function foo(sn: string | number): void
  export function bar(): void
}

type Foo2 = {
  foo(s: string): void
  foo(n: number): void
  foo(sn: string | number): void
  bar(): void
}

interface Foo3 {
  foo(s: string): void
  foo(n: number): void
  foo(sn: string | number): void
  bar(): void
}

class Foo4 {
  foo(s: string): void
  foo(n: number): void
  foo(sn: string | number): void {}
  bar(): void {}
}

export function bar(): void
export function foo(s: string): void
export function foo(n: number): void
export function foo(sn: string | number): void
