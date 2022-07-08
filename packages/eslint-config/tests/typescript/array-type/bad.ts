/* eslint-disable */
/* eslint-enable @typescript-eslint/array-type */

// errorCount 6

export default 1

interface IMyType {}

const a: (string | number)[] = ['a', 'b']
const b: { prop: string }[] = [{ prop: 'a' }]
const c: (() => void)[] = [() => {}]
const d: Array<IMyType> = ['a', 'b']
const e: Array<string> = ['a', 'b']
const f: ReadonlyArray<string> = ['a', 'b']
