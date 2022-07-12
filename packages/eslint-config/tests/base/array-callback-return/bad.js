/* eslint-disable */
/* eslint-enable array-callback-return */

// errorCount 8

const array = [1, 2, 3]

{
  const indexMap = array.reduce(function (memo, item, index) {
    memo[item] = index
  }, {})

  const foo = Array.from(array, function (node) {
    if (node.tagName === 'DIV') {
      return true
    }
  })

  const bar = foo.filter(function (x) {
    if (x) {
      return true
    } else {
      return
    }
  })
}

// allowImplicit
{
  const undefAllTheThings = array.map(function (item) {
    return
  })
}

// checkForEach
{
  function handleItem(item) {
    return item
  }

  array.forEach(function (item) {
    return handleItem(item)
  })

  array.forEach(function (item) {
    if (item < 0) {
      return 1
    }
    handleItem(item)
  })

  array.forEach((item) => handleItem(item))

  array.forEach((item) => {
    return handleItem(item)
  })
}
