/* eslint-disable */
/* eslint-enable @typescript-eslint/no-unused-expressions */

export default 1

const foo = '0'
const bar = (param: string): void => {
  console.log(param)
}
const baz = (): void => {}

foo && baz()
foo || baz()
foo ? bar('') : baz()
