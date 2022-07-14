/* eslint-disable */
/* eslint-enable no-eval */

// errorCount 1

const obj = { x: 'foo' },
  key = 'x',
  value = eval('obj.' + key)
