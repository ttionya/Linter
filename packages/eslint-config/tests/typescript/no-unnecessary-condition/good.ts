/* eslint-disable */
/* eslint-enable @typescript-eslint/no-unnecessary-condition */

export default 1

function head<T>(items: T[]) {
  if (items.length) {
  }
}

function foo(arg: string) {
  if (arg) {
  }
}

function bar(arg?: string | null) {
  return arg?.length
}

;[0, 1, 2, 3].filter((t) => t)

while (true) {}
for (; true; ) {}
do {} while (true)
