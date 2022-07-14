/* eslint-disable */
/* eslint-enable prefer-regex-literals */

;/abc/

;/abc/u

;/\d\d\.\d\d\.\d\d\d\d/

;/^\d\.$/

new RegExp(pattern)

RegExp('abc', flags)

new RegExp(prefix + 'abc')

RegExp(`${prefix}abc`)

new RegExp(String.raw`^\d\. ${suffix}`)
