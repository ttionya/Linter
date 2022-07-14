/* eslint-disable */
/* eslint-enable no-extra-label */

while (a) {
  break
}

for (let i = 0; i < 10; ++i) {
  break
}

switch (a) {
  case 0:
    break
}

A: {
  break A
}

B: while (a) {
  while (b) {
    break B
  }
}

C: switch (a) {
  case 0:
    while (b) {
      break C
    }
    break
}
