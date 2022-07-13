/* eslint-disable */
/* eslint-enable no-unused-vars */

{
  let x = 10
  alert(x)

  myFunc(
    function foo() {
      // ...
    }.bind(this)
  )
  ;(function (foo) {
    return foo
  })()

  let myFunc
  myFunc = setTimeout(function () {
    myFunc()
  }, 50)

  function getY([, y]) {
    return y
  }
  getY([1, 2])
}

// args
{
  ;(function (foo, bar, baz, qux) {
    return qux
  })()
}

// ignoreRestSiblings
{
  function foo(x, _y) {
    return x + 1
  }
  foo()
}

// argsIgnorePattern
{
  function foo(x, _y) {
    return x + 1
  }
  foo()
}

// destructuredArrayIgnorePattern
{
  const [a, _b, c] = ['a', 'b', 'c']
  console.log(a + c)

  const {
    x: [_a, foo],
  } = bar
  console.log(foo)

  function baz([_c, x]) {
    x
  }
  baz()

  function test({ p: [_q, r] }) {
    r
  }
  test()

  let _m, n
  foo.forEach((item) => {
    ;[_m, n] = item
    console.log(n)
  })

  let _o, p
  _o = 1
  ;[_o, p] = foo
  p
}

// caughtErrors
{
  try {
    //...
  } catch (err) {
    console.error('errors')
  }
}
