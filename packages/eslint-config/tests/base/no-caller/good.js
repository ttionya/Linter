/* eslint-disable */
/* eslint-enable no-caller */

function foo(n) {
  if (n <= 0) {
    return
  }

  foo(n - 1)
}

;[1, 2, 3, 4, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n
})
