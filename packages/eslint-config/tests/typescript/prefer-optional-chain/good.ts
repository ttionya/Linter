/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-optional-chain */

export default 1

let foo: any

foo?.a?.b?.c
foo?.['a']?.b?.c
foo?.a?.b?.method?.()

foo?.a?.b?.c?.d?.e
