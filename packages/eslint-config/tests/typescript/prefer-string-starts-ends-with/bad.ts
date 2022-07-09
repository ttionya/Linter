/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-string-starts-ends-with */

// errorCount 14

export default 1

let foo = '123123'

// starts with
foo[0] === 'b'
foo.charAt(0) === 'b'
foo.indexOf('bar') === 0
foo.slice(0, 3) === 'bar'
foo.substring(0, 3) === 'bar'
foo.match(/^bar/) != null
;/^bar/.test(foo)

// ends with
foo[foo.length - 1] === 'b'
foo.charAt(foo.length - 1) === 'b'
foo.lastIndexOf('bar') === foo.length - 3
foo.slice(-3) === 'bar'
foo.substring(foo.length - 3) === 'bar'
foo.match(/bar$/) != null
;/bar$/.test(foo)
