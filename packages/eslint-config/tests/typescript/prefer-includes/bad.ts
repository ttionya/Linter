/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-includes */

// errorCount 7

export default 1

let value = '1'
let num = 1
let str = '123123'
let array = ['1', '2']
let readonlyArray: ReadonlyArray<any> = ['1', '2']
let typedArray: Uint8Array = new Buffer(8)
let maybe: string
let userDefined: {
  indexOf(x: any): number
  includes(x: any): boolean
}

str.indexOf(value) !== -1
array.indexOf(value) !== -1
readonlyArray.indexOf(value) === -1
typedArray.indexOf(num) > -1
maybe?.indexOf('') !== -1
userDefined.indexOf(value) >= 0
;/foo/.test('')
