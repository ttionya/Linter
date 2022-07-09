/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-optional-chain */

// errorCount 10

export default 1

let foo: any

foo && foo.a && foo.a.b && foo.a.b.c
foo && foo['a'] && foo['a'].b && foo['a'].b.c
foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method()
;(((foo || {}).a || {}).b || {}).c
;(((foo || {})['a'] || {}).b || {}).c

foo &&
  foo.a != null &&
  foo.a.b !== null &&
  foo.a.b.c != undefined &&
  foo.a.b.c.d !== undefined &&
  foo.a.b.c.d.e
