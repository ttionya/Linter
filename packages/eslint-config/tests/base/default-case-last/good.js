/* eslint-disable */
/* eslint-enable default-case-last */

switch (foo) {
  case 'a':
    baz()
    break
  default:
    bar()
    break
}

switch (foo) {
  case 1:
    bar()
    break
  case 2:
    quux()
    break
  default:
    baz()
    break
}

switch (foo) {
  case 'x':
    bar()
    break
  case 'y':
  default:
    baz()
    break
}

switch (foo) {
  case -1:
    bar()
    break
}

if (foo !== 0) {
  doSomethingIfNotZero()
}
doSomethingAnyway()
