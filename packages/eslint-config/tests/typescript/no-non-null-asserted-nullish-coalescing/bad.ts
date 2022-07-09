/* eslint-disable */
/* eslint-enable @typescript-eslint/no-non-null-asserted-nullish-coalescing */

// errorCount 5

export default 1

function foo(): string {
  return ''
}

foo! ?? bar
foo.bazz! ?? bar
foo!.bazz! ?? bar
foo()! ?? bar

let x1!: string
x1! ?? ''

let x2: string
x2 = foo()
x2! ?? ''
