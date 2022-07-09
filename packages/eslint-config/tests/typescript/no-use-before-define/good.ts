/* eslint-disable */
/* eslint-enable @typescript-eslint/no-use-before-define */

export default 1

const callFoo = (): void => console.log(foo)
const foo = 1

bar()
function bar(): void {}

const callBaz = (): Baz => new Baz()
class Baz {
  public foo(): void {}
}
