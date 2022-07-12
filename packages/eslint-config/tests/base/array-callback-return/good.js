/* eslint-disable */
/* eslint-enable array-callback-return */

const array = [1, 2, 3]

{
  const indexMap = array.reduce(function (memo, item, index) {
    memo[item] = index
    return memo
  }, {})

  const foo = Array.from(array, function (node) {
    if (node.tagName === 'DIV') {
      return true
    }
    return false
  })

  const bar = foo.map((node) => node.getAttribute('id'))
}

// checkForEach
{
  array.forEach(function (item) {
    handleItem(item)
  })

  array.forEach(function (item) {
    if (item < 0) {
      return
    }
    handleItem(item)
  })

  array.forEach(function (item) {
    handleItem(item)
    return
  })

  array.forEach((item) => {
    handleItem(item)
  })
}
