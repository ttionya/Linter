/* eslint-disable */
/* eslint-enable @typescript-eslint/method-signature-style */

export default 1

interface T1 {
  func: (arg: string) => number
}
type T2 = {
  func: (arg: boolean) => void
}
// this is equivalent to the overload
interface T3 {
  func: ((arg: number) => void) & ((arg: string) => void) & ((arg: boolean) => void)
}
