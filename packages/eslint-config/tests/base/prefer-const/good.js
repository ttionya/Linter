/* eslint-disable */
/* eslint-enable prefer-const */

const a1 = 0

let a2
console.log(a2)

let a3
a3 = 0
a3 = 1
console.log(a3)

let a4
if (true) {
  a4 = 0
}
console.log(a4)

let a5
class C {
  #x
  static {
    a5 = (obj) => obj.#x
  }
}

let a6
if (true) a6 = 0
console.log(a6)

for (const a of [1, 2, 3]) {
  console.log(a)
}

for (let i = 0, end = 10; i < end; ++i) {
  console.log(a1)
}

let predicate
;[object.type, predicate] = foo()

let a7
const b1 = {}
;({ a7, c: b1.c } = func())

const b2 = 3
console.log(b2)
