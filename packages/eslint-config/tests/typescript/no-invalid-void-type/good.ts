/* eslint-disable */
/* eslint-enable @typescript-eslint/no-invalid-void-type */

export default 1

type NoOp = () => void

function noop(): void {}

let trulyUndefined = void 0

async function promiseMeSomething(): Promise<void> {}

type stillVoid = void | never
