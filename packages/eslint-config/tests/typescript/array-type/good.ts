/* eslint-disable */
/* eslint-enable @typescript-eslint/array-type */

export default 1

interface IMyType {}

const a: Array<string | number> = ['a', 'b']
const b: Array<{ prop: string }> = [{ prop: 'a' }]
const c: Array<() => void> = [() => {}]
const d: IMyType[] = ['a', 'b']
const e: string[] = ['a', 'b']
const f: readonly string[] = ['a', 'b']
