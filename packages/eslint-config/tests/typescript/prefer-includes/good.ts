/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-includes */

export default 1

let value = '1'
let num = 1
let str = '123123'
let array = ['1', '2']
let readonlyArray: ReadonlyArray<any> = ['1', '2']
let typedArray: Uint8Array = new Buffer(8)
let userDefined: {
  indexOf(x: any): number
  includes(x: any): boolean
}
let mismatchExample: {
  indexOf(x: any, fromIndex?: number): number
  includes(x: any): boolean
}

str.includes(value)
array.includes(value)
readonlyArray.includes(value)
typedArray.includes(num)
userDefined.includes(value)
mismatchExample.indexOf(value) >= 0
