/* eslint-disable */
/* eslint-enable no-unreachable-loop */

while (foo) {
  doSomething(foo)
  foo = foo.parent
}

function verifyList(head) {
  let item = head
  do {
    if (verify(item)) {
      item = item.next
    } else {
      return false
    }
  } while (item)

  return true
}

function findSomething(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isSomething(arr[i])) {
      return arr[i]
    }
  }
  throw new Error("Doesn't exist.")
}

for (key in obj) {
  if (key.startsWith('_')) {
    continue
  }
  firstKey = key
  firstValue = obj[key]
  break
}

for (foo of bar) {
  if (foo.id === id) {
    doSomething(foo)
    break
  }
}

do {
  doSomething()
} while (false)

for (let i = 0; i < 1; i++) {
  doSomething(i)
}

for (const a of [1]) {
  doSomething(a)
}
