/* eslint-disable */
/* eslint-enable no-extend-native */

// errorCount 2

Object.prototype.a = 'a'
Object.defineProperty(Array.prototype, 'times', { value: 999 })
