/* eslint-disable */
/* eslint-enable prefer-regex-literals */

// errorCount 7

new RegExp('abc')

new RegExp('abc', 'u')

RegExp('abc')

RegExp('abc', 'u')

new RegExp('\\d\\d\\.\\d\\d\\.\\d\\d\\d\\d')

RegExp(`^\\d\\.$`)

new RegExp(String.raw`^\d\.$`)
