/* eslint-disable */
/* eslint-enable @typescript-eslint/no-non-null-asserted-nullish-coalescing */

export default 1

function foo(): string {
  return ''
}

foo ?? bar
foo ?? bar!
foo!.bazz ?? bar
foo!.bazz ?? bar!
foo() ?? bar

let x: string
x! ?? ''
