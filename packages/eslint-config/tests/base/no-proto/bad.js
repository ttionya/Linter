/* eslint-disable */
/* eslint-enable no-proto */

// errorCount 4

const a1 = obj.__proto__

const a2 = obj['__proto__']

obj.__proto__ = b

obj['__proto__'] = b
