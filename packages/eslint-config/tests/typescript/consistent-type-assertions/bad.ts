/* eslint-disable */
/* eslint-enable @typescript-eslint/consistent-type-assertions */

// errorCount 2

export default 1

const bar: string | number = Math.random() ? 1 : '1'
const foo = <string>bar

const baz = {
  bar: 1,
} as object
