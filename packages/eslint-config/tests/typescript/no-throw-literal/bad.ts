/* eslint-disable */
/* eslint-enable @typescript-eslint/no-throw-literal */

// errorCount 9

export default 1

throw 'error'

throw 0

throw undefined

throw null

const err1 = new Error()
throw 'an ' + err1

const err2 = new Error()
throw `${err2}`

const err3 = ''
throw err3

function err4() {
  return ''
}
throw err4()

const foo = {
  bar: '',
}
throw foo.bar
