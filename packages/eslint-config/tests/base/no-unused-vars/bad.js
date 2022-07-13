/* eslint-disable */
/* eslint-enable no-unused-vars */

// errorCount 9

{
  some_unused_var = 42

  let x

  let y = 10
  y = 5

  let z = 0
  z = z + 1
  ;(function (foo) {
    return 5
  })()

  function fact(n) {
    if (n < 2) return 1
    return n * fact(n - 1)
  }

  function getY([x, y]) {
    return y
  }
}

// args
{
  ;(function (foo, bar, baz, qux) {
    return bar
  })()
}
