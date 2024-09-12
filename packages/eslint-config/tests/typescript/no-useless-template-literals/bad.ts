/* eslint-disable */
/* eslint-enable @typescript-eslint/no-useless-template-literals */

// errorCount 9

export default 1

const ab1 = `${'a'}${'b'}`
const ab2 = `a${'b'}`

const stringWithNumber = `${'1 + 1 = '}${2}`

const stringWithBoolean = `${'true is '}${true}`

const text = 'a'
const wrappedText = `${text}`

declare const intersectionWithString: string & { _brand: 'test-brand' }
const wrappedIntersection = `${intersectionWithString}`
