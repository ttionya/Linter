/* eslint-disable */
/* eslint-enable prefer-const */

// errorCount 4

let a1 = 3
console.log(a1)

let a2
a2 = 0
console.log(a2)

class C {
  static {
    let a
    a = 0
    console.log(a)
  }
}

for (let i in [1, 2, 3]) {
  console.log(i)
}
