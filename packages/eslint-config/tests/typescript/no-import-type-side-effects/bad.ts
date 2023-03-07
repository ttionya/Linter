/* eslint-disable */
/* eslint-enable @typescript-eslint/no-import-type-side-effects */

// errorCount 4

export default 1

import { type A } from 'mod'
import { type A as AA } from 'mod'
import { type A, type B } from 'mod'
import { type A as AA, type B as BB } from 'mod'
