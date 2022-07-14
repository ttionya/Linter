/* eslint-disable */
/* eslint-enable no-throw-literal */

// errorCount 6

throw 'error'
throw 0
throw undefined
throw null
const err1 = new Error()
throw 'an ' + err
const err2 = new Error()
throw `${err}`
