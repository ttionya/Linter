/* eslint-disable */
/* eslint-enable @typescript-eslint/no-useless-template-literals */

export default 1

const ab1 = 'ab'
const ab2 = 'ab'

const stringWithNumber = `1 + 1 = 2`

const stringWithBoolean = `true is true`

const text = 'a'
const wrappedText = text

declare const intersectionWithString: string & { _brand: 'test-brand' }
const wrappedIntersection = intersectionWithString
