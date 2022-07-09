/* eslint-disable */
/* eslint-enable @typescript-eslint/require-array-sort-compare */

export default 1

const array = [1, 2]
const userDefinedType: { sort(): void } = { sort() {} }

array.sort((a, b) => a - b)

userDefinedType.sort()

const one = '1'
const two = '2'
const three = '3'
;[one, two, three].sort()
