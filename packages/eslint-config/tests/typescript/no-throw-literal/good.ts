/* eslint-disable */
/* eslint-enable @typescript-eslint/no-throw-literal */

export default 1

throw new Error()

throw new Error('error')

const e = new Error('error')
throw e

try {
  throw new Error('error')
} catch (e) {
  throw e
}

const err1 = new Error()
throw err1

function err2() {
  return new Error()
}
throw err2()

const foo = {
  bar: new Error(),
}
throw foo.bar

class CustomError extends Error {}
throw new CustomError()
