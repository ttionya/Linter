/* eslint-disable */
/* eslint-enable @typescript-eslint/no-import-type-side-effects */

export default 1

import type { A1 } from 'mod'
import type { A as AA1 } from 'mod'
import type { A2, B2 } from 'mod'
import type { A as AA3, B as BB3 } from 'mod'

import T1 from 'mod'
import type T2 from 'mod'

import * as T3 from 'mod'
import type * as T4 from 'mod'

import { T5 } from 'mod'
import type { T6 } from 'mod'
import { T7, U7 } from 'mod'
import type { T8, U8 } from 'mod'
import { type T9, U9 } from 'mod'
import { T10, type U10 } from 'mod'

import type T11, { U11 } from 'mod'
import T12, { type U12 } from 'mod'
