/* eslint-disable */
/* eslint-enable no-extra-label */

// errorCount 3

A: while (a) {
  break A
}

B: for (let i = 0; i < 10; ++i) {
  break B
}

C: switch (a) {
  case 0:
    break C
}
