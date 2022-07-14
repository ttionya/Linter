/* eslint-disable */
/* eslint-enable no-labels */

// errorCount 11

label: while (true) {}

label: while (true) {
  break label
}

label: while (true) {
  continue label
}

label: switch (a) {
  case 0:
    break label
}

label: {
  break label
}

label: if (a) {
  break label
}
