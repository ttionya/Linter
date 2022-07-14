/* eslint-disable */
/* eslint-enable no-throw-literal */

throw new Error()
throw new Error('error')
const e = new Error('error')
throw e

try {
  throw new Error('error')
} catch (e) {
  throw e
}
