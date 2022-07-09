/* eslint-disable */
/* eslint-enable @typescript-eslint/no-unnecessary-condition */

// errorCount 4

export default 1

function head<T>(items: T[]) {
  if (items) {
  }
}

function foo(arg: 'bar' | 'baz') {
  if (arg) {
  }
}

function bar(arg: string) {
  return arg?.length
}

;[
  [1, 2],
  [3, 4],
].filter((t) => t)
