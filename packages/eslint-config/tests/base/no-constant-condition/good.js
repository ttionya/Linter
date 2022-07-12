/* eslint-disable */
/* eslint-enable no-constant-condition */

{
  if (x === 0) {
    doSomething()
  }

  for (;;) {
    doSomethingForever()
  }

  while (typeof x === 'undefined') {
    doSomething()
  }

  do {
    doSomething()
  } while (x)

  const result = x !== 0 ? a : b
}

// checkLoops
{
  while (true) {
    doSomething()
    if (condition()) {
      break
    }
  }

  for (; true; ) {
    doSomething()
    if (condition()) {
      break
    }
  }

  do {
    doSomething()
    if (condition()) {
      break
    }
  } while (true)
}
